<template>
  <div class="home">
    <div class="__container">
      <div class="content">
        <div class="text">
          <h1>Лучшие рецепты в одном месте!</h1>
          <span>Гастрономия — это искусство есть, когда нет аппетита, и пить, когда нет жажды</span>
        </div>
        <div class="carousel">
          <img src="@/assets/slide1.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home {
    padding: 220.5px 0px;
    min-height: max-content;
    background-color: #FFC107;
    @media (max-width: 1000px) {
      padding: 160px 0px;
      background-image: url('@/assets/blog1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: inset 0 0 0 1000px rgba(255, 193, 7, 0.9);
    }
    @media (max-width: 450px) {
      padding-bottom: 110px;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      @media (max-width:1000px) {
        flex-direction: column;
      }

      .text {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        @media (max-width: 1000px) {
          align-items: center;
          text-align: center;
        }

        h1 {
          font-weight: 600;
          font-size: 48px;
          line-height: 120%;
          @media (max-width:1135px) {
            font-size: 46px;
          }
          @media (max-width: 600px) {
            font-size: 38px;
            max-width: 400px;
          }
          @media (max-width: 450px) {
            font-size: 32px;
          }
          @media (max-width: 375px) {
            font-size: 24px;
          }
          animation: slide 1s ease;
        }

        span {
          color: #431800;
          margin-top: 20px;
          font-size: 28px;
          line-height: 150%;
          max-width: 580px;
          @media (max-width:1135px) {
            font-size: 26px;
            max-width: 460px;
          }
          @media (max-width: 1000px) {
            width: 70%;
            font-size: 24px;
          }
          @media (max-width: 600px) {
            font-size: 24px;
            max-width: 600px;
          }
          @media (max-width: 450px) {
            font-size: 22px;
            max-width: 400px;
          }
          @media (max-width: 375px) {
            font-size: 16px;
          }
          animation: appears 2s ease;
        }
      }
      .carousel {
        display: flex;
        justify-content: flex-end;

        img {
          @media (max-width:1135px) {
            width: 380px;
            height: 260px;
          }
          @media (max-width:1000px) {
            display: none;
          }
          width: 440px;
          height: 320px;
          object-fit: cover; 
          object-position: 50% 0;
          box-shadow: 0px 0px 10px 4px rgba(77, 37, 0, 0.5);
          -webkit-user-drag: none;
          -moz-drag-over: none;
        }
        animation: appears 2s ease;
      }
    }
    @keyframes slide {
      0% {
        transform: translateX(-200%);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes slide {
      0% {
        transform: translateX(-200%);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes appears {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>