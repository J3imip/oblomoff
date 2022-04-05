<template>
  <div class="background">
    <div class="__container">
      <div class="recepies">
        <div class="receipe" v-for="recipe in recipes" :key="recipe.id" @click="toggleModal(recipe)">
          <img :src="'/src/assets/' + recipe.image" alt="">
          <div class="title">{{recipe.title}}</div>
        </div>
      </div>
    </div>

    <Modal :recipe="modalData" :toggleModal="toggleModal" v-if="modal"/>
  </div>
</template>

<script>
import recipes from '@/storage/recipes.json';
import Modal from '@/components/Modal.vue';

export default {
  data() {
    return {
      recipes,
      modal: false,
      modalData: null
    };
  },
  methods: {
    toggleModal(recipe=null) {
      this.modal = !this.modal;
      this.modalData = recipe;
    }
  },
  watch: {
    modal: function() {
      if(this.modal){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  components: { 
    Modal 
  }
}
</script>

<style lang="scss" scoped>
  .background {
    background-color: #FFF8E6;
    padding-top: 140px;
  }
  .recepies {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
    padding-bottom: 80px;
    @media (max-width:840px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .receipe {
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; 
      object-position: 50% 0;
      position: relative;
      aspect-ratio: 1/1;
      box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.25);
      transition: .2s all ease;
    }
    .title { 
      opacity: 0;
      position: absolute;
      left: -20px;
      bottom: -20px;
      width: max-content;
      padding-left: 8px;
      color:#fff;
      font-weight: 300;
      font-size: 2.6vw;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      width: 100%;
      transition: .2s all ease;

      @media (max-width:840px) {
        font-size: 56px;
        max-width: 85%;
        opacity: 1;
      }
      @media (max-width:600px) {
        font-size: 36px;
        max-width: 90%;
        opacity: 1;
      }
    }
    &:hover {
      cursor: pointer;
    }
    &:hover > .title {
      opacity: 1;
    }
    &:hover > img {
      box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.5);
    }
  }

</style>