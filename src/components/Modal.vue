<template>
  <div class="modal">
    <div class="container">
      <div class="title">{{recipe.title}}</div>
      <div class="row">
        <div class="video"><iframe :src="recipe.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="description" v-html="recipe.description"></div>
      </div>
      <div class="title">Ингридиенты:</div>
      <div class="row ingredients" v-html="recipe.ingredients"></div>
      <div class="button">
        <button class="close" @click="toggleModal">закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['recipe', 'toggleModal']
}
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);

    .container {
      width: 60%;
      height: 80%;
      overflow-y: scroll;
      padding: 20px;
      overflow-y: scroll;
      border-radius: 8px;
      background-color: #fff;
      animation: fadeIn 1s;


      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @media (max-width: 1000px) {
        width: 80%;
      }

      .title {
        font-weight: 600;
        font-size: 36px;
        padding-bottom: 12px;
        border-bottom: 2px solid #000;
        @media (max-width: 1000px) {
          text-align: center;
          font-size: 28px;
        }
      }

      .row {
        margin: 20px;
        display: flex;
        flex-direction: row;
        max-width: 1000px;
        font-size: 20px;
        line-height: 150%;
        @media (max-width: 1000px) {
          font-size: 16px;
        }

        @media (max-width:1000px) {
          justify-content: center;
        }

        & div {
          margin-right: 40px;
          width: 50%;
          @media (max-width: 1000px) {
            width: 100%;
            margin-right: 0;
          }
        }
        iframe {
          width: 100% !important;
          height: auto !important;
          // @media (max-width: 1000px) {
          //   height: 200px;
          // }
          aspect-ratio: 16/9;
        }
        &:nth-child(2) {
          align-items: center;
          @media (max-width: 1000px) {
            flex-direction: column;
            text-align: center;
          }
        }
      }

      .ingredients {
        @media (max-width: 1000px) {
          text-align: center;
        }
      }

      .button {
        width: 100%;
        border-top: 2px solid #000;
        display: flex;
        justify-content: flex-end;
        @media (max-width:1000px) {
          justify-content: center;
        }
      }

      .close {
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-weight: 600;
        color: #FFF8E6;
        background: #00D09C;
        border: none;
        box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 10px 40px;
        font-size: 24px;
        margin-top: 20px;
        transition: .2s all ease;
        @media (max-width:1000px) {
          margin: 0 auto;
          margin-top: 20px;
          font-size: 18px;
        }

        &:hover {
          background: #FFF8E6;
          color: #00D09C;
          box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }
      }
    }
  }
</style>