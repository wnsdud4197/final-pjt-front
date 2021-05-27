<template>
  <div class="me-3">
    <div>
      <div class="btn-group my-3" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
          @click="onClickCategory()"
        >
        <label :class="{ checked: isCategory }" class="check btn btn-outline-white" for="btnradio1"><h5 class="mx-3 my-1">장르 / 언어별</h5></label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
          @click="onClickAll()"
        >
        <label :class="{ checked: isAll }" class="check btn btn-outline-white" for="btnradio3"><h5 class="mx-3 my-1">전체 영화</h5></label>
      </div>
    </div>
    <div v-if="checkSearchMovie">
      <div>
        <MovieSearchForm/>
        <MovieSearchList/>
      </div>
    </div>

    <div v-else class="my-4">
      <div  class="mt-5 mx-2">
        <div class="row me-0">

          <!-- 카테고리 버튼 -->
          <div class="col-3 mt-4">
            <div class="my-2 ms-3">            
              <button v-if="checkGenre" @click="onClickGenre()" class="btn btn-white fw-bold" style="color: #03dac5"><h2 class="fw-bold">장르별</h2></button>
              <button  v-else @click="onClickGenre()" class="btn btn-white fw-bold" style="color: #f8f9fa"><h3>장르별</h3></button>
            </div>

            <div class="my-2 ms-3">
              <button v-if="checkLanguage" @click="onClickLanguage()" class="btn btn-white fw-bold" style="color: #03dac5"><h2 class="fw-bold">언어별</h2></button>
              <button v-else @click="onClickLanguage()" class="btn btn-white fw-bold" style="color: #f8f9fa"><h3>언어별</h3></button>             
            </div>          
          </div>

          <div class="col-8">
            <!-- 장르별 -->
            <section v-show="checkGenre" class="row my-3">
              <carousel
                v-if="categoryGenre && categoryGenre.length"
                :items="3"
                :nav="false"
                :dots="true" 
                :rewind="true"
                :mouseDrag="false"
                :autoplay="true"
                :autoplayTimeout="2000"
                class="marginTop50"
              >
                <MovieCategory
                  v-for="categoryItem in categoryGenre"
                  :key="categoryItem.id"
                  :categoryItem="categoryItem"
                  class="my-3"
                />
              </carousel>      
            </section>

            <!-- 언어별 -->
            <section v-show="checkLanguage" class="row my-3">
              <carousel
                v-if="categoryLanguage && categoryLanguage.length"
                :items="3"
                :nav="false"
                :dots="true" 
                :rewind="true"
                :mouseDrag="false"
                :autoplay="true"
                :autoplayTimeout="2000"
                class="marginTop50"
              >
                <MovieCategory
                  v-for="categoryItem in categoryLanguage"
                  :key="categoryItem.id"
                  :categoryItem="categoryItem"
                  class="my-3"                  
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
      isCategory: true,
      isAll: false,
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
      this.isCategory = true
      this.isAll = false
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
      this.isAll = true
      this.isCategory = false
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

<style scoped>
.check-category {
  background-color: salmon;
}

.check {
  border-color: #03dac5;
  color: #03dac5;
}

.check:hover,
.check:focus {
  background-color: #018786;
  color: whitesmoke;
  border-color: #018786;
}

.checked {
  background-color: #03dac5;
  color: #121212;
  border-color: #03dac5;
}
</style>