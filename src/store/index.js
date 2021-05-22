import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// axios 설정
axios.defaults.baseURL = 'http://localhost:8000'

// const token = localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default new Vuex.Store({
  state: {
    genreList: [],
    languageList: [],
    movieList: [],
    userInfo: {},
    token: localStorage.getItem('token'),
  },
  getters: {
    getGenreList(state) {
      return state.genreList
    },
    getLanguageList(state) {
      return state.languageList
    },
    getMovieList(state) {
      return state.movieList
    },
    // isAuthenticated(state) {
    //   const result = state.token ? true : false
    //   return result
    // },
  },
  mutations: {
    FETCH_GENRE_LIST(state, genreList) {
      state.genreList = genreList
    },
    FETCH_LANGUAGE_LIST(state, languageList) {
      state.languageList = languageList
    },
    FETCH_MOVIE_LIST(state, movieList) {
      state.movieList = movieList
    },
    CREATE_USER(state, userInfo) {
      state.userInfo = userInfo
    },
    AUTH_USER(state, token) {
      state.token = token
    },
    // USER_INFO(state, userInfo) {
    //   state.userInfo = userInfo
    // },
  },
  actions: {
    // async FETCH_MOVIE_LIST({ commit }) {
    //   const MOVIE_LIST_URL = '/api/v1/movies/'
    //   const response = await axios.get(MOVIE_LIST_URL)
    //   const movieList = response.data
    //   console.log(movieList, commit)
    //   // commit('FETCH_MOVIE_LIST', movieList)
    // },
    async FETCH_GENRE_LIST({ commit }) {
      const GENRE_LIST_URL = 'api/v1/movies/genres'
      const response = await axios.get(GENRE_LIST_URL)
      const genreList = response.data
      commit('FETCH_GENRE_LIST', genreList)
    },
    async FETCH_LANGUAGE_LIST({ commit }) {
      const LANGUAGE_LIST_URL = 'api/v1/movies/languages'
      const response = await axios.get(LANGUAGE_LIST_URL)
      const languageList = response.data
      commit('FETCH_LANGUAGE_LIST', languageList)
    },
    async FETCH_MOVIE_GENRE_LIST({ commit }, genre) {
      const MOVIE_LIST_URL = `api/v1/movies?genre=${genre}`
      const response = await axios.get(MOVIE_LIST_URL)
      const movieList = response.data
      commit('FETCH_MOVIE_LIST', movieList)
    },
    async FETCH_MOVIE_LANGUAGE_LIST({ commit }, language) {
      const MOVIE_LIST_URL = `api/v1/movies?language=${language}`
      const response = await axios.get(MOVIE_LIST_URL)
      const movieList = response.data
      commit('FETCH_MOVIE_LIST', movieList)
    },
    async CREATE_USER({ commit }, userInfo) {
      const USER_CREATE_URL = '/api/v1/accounts/signup/'
      const data = userInfo
      const response = await axios.post(USER_CREATE_URL, data)
      commit('CREATE_USER', response.data)
    },
    // async AUTH_USER({ commit }, userInfo) {
    //   const AUTH_USER_URL = '/api/token/'
    //   // const USER_INFO_URL = '/api/v1/accounts/userinfo/'

    //   const data = userInfo

    //   const response = await axios.post(AUTH_USER_URL, data)    
    //   commit('AUTH_USER', response.data)

    //   // const res = await axios.post(USER_INFO_URL, data)
    //   // commit('USER_INFO', res.data)
    // },
    AUTH_USER({ commit }, userInfo) {
      return new Promise((resolve) => {
        const AUTH_USER_URL = '/api/token/'
        const data = userInfo
        axios.post(AUTH_USER_URL, data)
          .then((response) => {
            const token = response.data.access
            
            localStorage.setItem('token', token)
            commit('AUTH_USER', token)
            resolve()
          })
      })
    }
  },
  modules: {

  }
})
