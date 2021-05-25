import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// axios 설정
axios.defaults.baseURL = 'http://localhost:8000'

export default new Vuex.Store({
  state: {
    genreList: [],
    languageList: [],
    movieList: [],
    userInfo: {},
    modalMovie: [],
    showModal: false,
    token: localStorage.getItem('token'),
    movieRandom: [],
    labels: [],
    labelMovies: [],
    like: [],
    keep: [],
    userKeepLike: [],
    keep_check: false,
    like_check: false
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
    getModalMovie(state) {
      return state.modalMovie
    },
    getShowModal(state) {
      return state.showModal
    },
    isAuthenticated(state) {
      const result = state.token ? true : false
      return result
    },
    getUser(state) {
      return state.user
    },
    getMovieRandom(state) {
      return state.movieRandom
    },
    getLabels(state) {
      return state.labels
    },
    getLabelMovies(state) {
      return state.labelMovies
    },
    getLike(state) {
      return state.like
    },
    getKeep(state) {
      return state.keep
    },
    getUserKeepLike(state) {
      return state.userKeepLike
    },
    getKeepCheck(state) {
      return state.keep_check
    },
    getLikeCheck(state) {
      return state.like_check
    },
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
    UPDATE_MODAL_MOVIE(state, movie) {
      state.modalMovie = movie
    },
    SHOW_MODAL(state) {
      state.showModal = !state.showModal
    },
    AUTH_USER(state, token) {
      state.token = token
    },
    AUTH_LOGOUT(state) {
      state.token = ''
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('image')
    },
    FETCH_MOIVE_RANDOM(state, movieRandom) {
      state.movieRandom = movieRandom
    },
    FETCH_IMAGE_ANALYZE(state, labels) {
      state.labels = labels
    },
    FETCH_VISION_MOVIE_LIST(state, labelMovies) {
      state.labelMovies = labelMovies
    },
    MOVIE_LIKE(state, like) {
      state.like_check = like.check_like
    },
    MOVIE_KEEP(state, keep) {
      state.keep_check = keep.check_keep
    },
    USER_KEEP_LIKE(state, user) {
      state.userKeepLike = user
    },
    MOVIE_CHECK(state, check) {
      state.keep_check = check.keep_check
      state.like_check = check.like_check
    },
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
      const token = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const GENRE_LIST_URL = 'api/v1/movies/genres'
      const response = await axios.get(GENRE_LIST_URL)
      const genreList = response.data
      commit('FETCH_GENRE_LIST', genreList)
    },
    async FETCH_LANGUAGE_LIST({ commit }) {
      const token = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

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
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          }
      }
      const USER_CREATE_URL = '/api/v1/accounts/signup/'
      const data = userInfo
      const response = await axios.post(USER_CREATE_URL, data, config)
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
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            axios.get('api/v1/accounts/userinfo')
              .then((res) => {
                localStorage.setItem('user', res.data.username)
                localStorage.setItem('image', res.data.image)
              })
            resolve()
          })
      })
    },
    async FETCH_MOIVE_RANDOM({ commit }) {
      const token = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const MOVIE_RANDOM_URL = 'api/v1/movies/movierandom/'
      const response = await axios.get(MOVIE_RANDOM_URL)
      const movieRandom = response.data
      commit('FETCH_MOIVE_RANDOM', movieRandom)
    },
    async FETCH_IMAGE_ANALYZE({ commit }, image) {
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          }
      }
      const IMAGE_ANALUZE_URL = '/api/v1/movies/image/'
      const data = image
      const response = await axios.post(IMAGE_ANALUZE_URL, data, config)
      
      commit('FETCH_IMAGE_ANALYZE', response.data)
    },
    async FETCH_MOVIE_IMAGE_ANALYZE({ commit }, labels) {
      const IMAGE_MOVIE_URL = '/api/v1/movies/labels/'
      const data = labels
      const response = await axios.post(IMAGE_MOVIE_URL, data)
      commit('FETCH_VISION_MOVIE_LIST', response.data)
    },
    async MOVIE_LIKE({ commit }, movieModal) {
      const MOVIE_LIKE_URL = '/api/v1/movies/like/'
      const data = movieModal
      const response = await axios.post(MOVIE_LIKE_URL, data)
      commit('MOVIE_LIKE', response.data)
    },
    async MOVIE_KEEP({ commit }, movieModal) {
      const MOVIE_KEEP_URL = '/api/v1/movies/keep/'
      const data = movieModal
      const response = await axios.post(MOVIE_KEEP_URL, data)
      commit('MOVIE_KEEP', response.data)
    },
    async USER_KEEP_LIKE({ commit }) {
      const token = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const USER_KEEP_LIKE_URL = '/api/v1/accounts/user/keep_like/'
      const response = await axios.get(USER_KEEP_LIKE_URL)
      commit('USER_KEEP_LIKE', response.data)
    },
    async MOVIE_CHECK({ commit }, movie) {
      const MOVIE_CHECK_URL = '/api/v1/accounts/movie_check/'
      const data = movie
      const response = await axios.post(MOVIE_CHECK_URL, data)
      commit('MOVIE_CHECK', response.data)
    },
  },
  modules: {

  }
})
