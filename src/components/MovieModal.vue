<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" style="background-color: #484545; color: #d3d3d3;">

          <button class="modal-default-button btn btn-white" @click="$emit('close')">
            <i class="far fa-times-circle fa-2x icon"></i>
          </button>

          <div class="modal-body m-1 px-0">
            <slot name="body">              
              <div class="d-flex">
                <div class="justify-content-center align-items-center">
                  <!-- 좋아요 -->
                  <div>
                    <button class="btn btn-white">
                      <i class="far fa-heart fa-2x icon"></i>
                    </button>
                    <button class="btn btn-white" style="display: none;">
                      <i class="fas fa-heart fa-2x" style="color: salmon;"></i>
                    </button>
                  </div>                  
                  <!-- 찜 -->
                  <div>
                    <button class="btn btn-white">
                      <img src="@/assets/unkeep.png" style="width: 2.8rem;">
                    </button> 
                    <button class="btn btn-white" style="display: none;">
                      <img src="@/assets/keep.png" style="width: 2.8rem;">
                    </button> 
                  </div>
                  
                  <!-- 리뷰 -->
                  <div>
                    <button class="btn btn-white">
                      <i class="fas fa-pencil-alt fa-2x icon"></i>
                    </button> 
                  </div>                                                      
                </div>                
                <img :src="poster_path" class="card-img-top" style="width: 11rem; margin: 0 10px;"> 

                <div class="mx-3">
                  <div class="box d-flex align-items-center mt-0 mb-3" style="height: 4rem;">
                    <h3 class="fw-bold">
                      {{ MovieModal.title }}
                    </h3>
                  </div>
                  
                  <div class="box d-flex align-items-center">
                    <h5>개봉일 | {{ MovieModal.release_date }}</h5>
                  </div>
                  <div class="box d-flex align-items-center">
                    <h5>평점 : {{ MovieModal.vote_average }}</h5>
                  </div>
                  <div class="box d-flex align-items-center">
                    <h5>언어 {{ MovieModal.language }}</h5>
                  </div>              

                  <!-- <p>
                    {{ MovieModal.overview }}
                  </p> -->
                </div>
              </div>
              
              <div class="d-flex">
                <div class="video-container">
                  <iframe  frame :src="videoUrl" frameborder="0"></iframe>
                </div>
                <div>
                  <div class="box d-flex align-items-center mt-0" style="height: 150px; margin-left: 2.3rem;">
                    <p style="margin: 0 1rem;">{{ MovieModal.overview }}</p>
                  </div> 
                </div>
              </div>
            </slot>
          </div>

          <!-- <div class="modal-footer">
            <slot name="footer">
              <div class="d-flex">
                <div class="video-container">
                  <iframe  frame :src="videoUrl" frameborder="0"></iframe>
                </div>
              </div>
            </slot>
          </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MovieModal',
  computed: {
    MovieModal() {
      return this.$store.getters.getModalMovie
    },
    poster_path() {
      return `https://image.tmdb.org/t/p/w500/${this.MovieModal.poster_path}`
    },
    videoUrl() {
      const youtube_key = this.MovieModal.youtube_key
      return `https://www.youtube.com/embed/${youtube_key}`
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 80%;
  width: 90%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  /* font-family: Helvetica, Arial, sans-serif; */
  font-family: 'Hi Melody', cursive;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

img {
  width: 20%;
  height: 20%;
}

.icon {
  color: #d3d3d3;
}

.box {
  background-color: #BB86FC;
  color: #121212;
  width: 45rem;
  height: 2.5rem;
  margin: 1.3rem 3.3rem;
}

h3, h5 {
  margin: 0 1rem;
  font-weight: bold;
}
</style>

