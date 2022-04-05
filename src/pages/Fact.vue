<template>
  <div class="__container">
    <div class="fact">
      <div class="image">
        <img :src="'/src/assets' + currentFact.photo" alt="">
      </div>
      <div class="text">
        <button @click="getFact">еще факт</button>
        {{currentFact.text}}
      </div>
    </div>
  </div>
</template>

<script>
import facts from '@/storage/facts';

export default {
  data(){
    return{
      currentFact:{}
  },
  mounted() {
    this.getFact();
    console.log(this.currentFact);
  },
  methods: {
    getFact() {
      let num = Math.floor(Math.random() * 14 + 1); 
      this.currentFact.text = facts[num].text; 
      this.currentFact.photo = `/facts/${num+1}.jpg`; 
    }
  },
  name: "Fact",
};
</script>

<style lang="scss" scoped>
  .fact {
    height: auto;
    display: flex;
    flex-direction: row;
    margin: 200px 0px;
    justify-content: space-between;
    align-items: center;
    @media (max-width:810px) {
      justify-content: center;
    }
    @media (max-width:600px) {
      flex-direction: column-reverse;
      margin: 100px 0px;
    }
    .image {
      width: 30%;
     
      @media (max-width:600px) {
        width: 100%;
      }
      img {
        box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.25);
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 0;
        aspect-ratio: 1/1;
      }
    }
    .text {
      width: 48%;
      display: flex;
      flex-direction: column;
      button {
        margin-top: 20px;
        background-color: #00d09c;
        box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        padding: 10px;
        border: none;
        color: #fff;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 1px;
        transition: 0.2s all ease;

        &:hover {
          background-color: #fff;
          cursor: pointer;
          color: #00d09c;
          box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);
      }
    }@media (max-width:810px) {
        margin-left: 20px;
        font-size: 20px;
      }
      @media (max-width:600px) {
        width: 100%;
        margin: 20px 0px;
      }
    }
  }
</style>
