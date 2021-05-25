<template>
  <div>
    <div>
      <div class="btn-group my-3" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
          @click="onClickCategory()"
        >
        <!-- @click="onClickGenre()" -->
        <label class="btn btn-outline-primary" for="btnradio1">장르 / 언어별</label>

        <!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"
          @click="onClickLanguage()"
        >
        <label class="btn btn-outline-primary" for="btnradio2">언어별</label> -->

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
          @click="onClickAll()"
        >
        <label class="btn btn-outline-primary" for="btnradio3">전체 영화</label>
      </div>
    </div>
    <div v-if="checkSearchMovie">
      <div>
        <MovieSearchForm/>
        <MovieSearchList/>
      </div>
    </div>

    <div v-else>
      <div  class="container mt-4 m-3">
        <div class="row">

          <!-- 카테고리 버튼 -->
          <div class="col-2">
            <div class="my-2">            
              <button v-if="checkGenre" @click="onClickGenre()" class="btn btn-light" style="background-color: salmon;">장르별</button>
              <button  v-else @click="onClickGenre()" class="btn btn-light">장르별</button>
            </div>

            <div class="my-2">
              <button v-if="checkLanguage" @click="onClickLanguage()" class="btn btn-light" style="background-color: salmon;">언어별</button>
              <button v-else @click="onClickLanguage()" class="btn btn-light">언어별</button>             
            </div>          
          </div>

          <div class="col-10">
            <!-- 장르별 -->
            <section v-show="checkGenre" class="row">
              <carousel
                v-if="categoryGenre && categoryGenre.length"
                :items="3"
                :nav="true"
                :dots="false" 
                :rewind="false"
                :mouseDrag="false"
                class="marginTop50"
              >
                <MovieCategory
                  v-for="categoryItem in categoryGenre"
                  :key="categoryItem.id"
                  :categoryItem="categoryItem"
                />
              </carousel>      
            </section>

            <!-- 언어별 -->
            <section v-show="checkLanguage" class="row">
              <carousel
                v-if="categoryLanguage && categoryLanguage.length"
                :items="3"
                :nav="true"
                :dots="false" 
                :rewind="false"
                :mouseDrag="false"
                class="marginTop50"
              >
                <MovieCategory
                  v-for="categoryItem in categoryLanguage"
                  :key="categoryItem.id"
                  :categoryItem="categoryItem"
                />
              </carousel>      
            </section>
          </div>      
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import MovieSearchForm from '@/components/MovieSearchForm'
import MovieCategory from '@/components/MovieCategory'
import MovieSearchList from '@/components/MovieSearchList'
import carousel from 'vue-owl-carousel'

export default {
  name: 'MovieSearch',
  components: {
    MovieSearchForm,
    MovieCategory,
    MovieSearchList,
    carousel,
  },
  data() {
    return {
      // category: [],
      categoryGenre: [],
      categoryLanguage: [],
      checkGenre: false,
      checkLanguage: false,
      checkSearchMovie: false,
    }
  },
  methods: {
    // onClickLanguage() {
    //   this.category = this.$store.getters.getLanguageList
    //   this.categoryLength = this.category.length
    //   console.log(this.category.length)
    // },
    // onClickGenre() {
    //   this.category = this.$store.getters.getGenreList
    //   this.categoryLength = this.category.length
    //   console.log(this.category.length)
    // },
    onClickCategory() {
      this.categoryGenre = this.$store.getters.getGenreList
      this.categoryLanguage = this.$store.getters.getLanguageList
      this.checkSearchMovie = false
    },
    onClickGenre() {
      this.checkLanguage = false
      this.checkGenre = true      
    },
    onClickLanguage() {
      this.checkGenre = false
      this.checkLanguage = true      
    },
    onClickAll() {
      this.checkSearchMovie = true
    },
  },
  async created() {
    this.$store.dispatch('FETCH_GENRE_LIST')
      .then(() => {
        // this.category = this.$store.getters.getGenreList
        this.categoryGenre = this.$store.getters.getGenreList
      })
    this.$store.dispatch('FETCH_LANGUAGE_LIST')
      .then(() => {
        this.categoryLanguage = this.$store.getters.getLanguageList
      })
  }
}
</script>

<style>
.check-category {
  background-color: salmon;
}
</style>