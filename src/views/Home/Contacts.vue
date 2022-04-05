<template>
  <div class="info">
    <div class="__container">
      <div class="content">
        <h1>Контакты</h1>
        <div class="text">
          <a class="rect" href="https://www.tiktok.com/@oblomoffrecipe">
            <img src="@/assets/tiktok.png" alt="" />
            @oblomoffrecipe
          </a>
          <a class="rect" onclick="" href="https://www.youtube.com/c/rukremov">
            <img src="@/assets/youtube.png" alt="" />
            @oblomoffstuff
          </a>
          <a
            class="rect"
            onclick=""
            href="https://www.instagram.com/oblomoffood/?hl=ru"
          >
            <img src="@/assets/instagram.png" alt="" />
            @oblomoffrecipe
          </a>
          <a class="rect" onclick="">
            <img src="@/assets/email.svg" alt="" />
            oblomoff@gmail.com
          </a>
        </div>
        <img class="contact-icon" src="@/assets/contacts.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
  background: #402e32;
  min-height: max-content;
  padding-bottom: 48px;

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1000px) {
      flex-direction: column;
    }

    h1 {
      color: #fff;
      padding-top: 48px;
      font-weight: 600;
      font-size: 48px;
      min-width: 100%;
      @media (max-width: 1135px) {
        font-size: 46px;
      }
      @media (max-width: 1000px) {
        min-width: max-content;
      }
    }
    .text {
      margin-top: 20px;
      max-width: 740px;
      text-align: start;
      font-size: 28px;
      font-weight: 400;
      line-height: 150%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      a {
        color: #fff;
      }

      @media (max-width: 1000px) {
        font-size: 28px;
        text-align: center;
        max-width: 100%;
      }
      @media (max-width: 600px) {
        font-size: 24px;
      }
      @media (max-width: 480px) {
        font-size: 20px;
      }
      @media (max-width: 440px) {
        font-size: 18px;
      }
      @media (max-width: 375px) {
        font-size: 14px;
      }
    }
    .rect {
      margin: 10px 0px;
      padding: 20px;
      padding-right: 80px;
      background-color: #cda2919d;
      border-radius: 8px;
      display: flex;
      align-items: center;
      transition: 0.2s all ease;
      max-width: 100%;

      @media (max-width: 375px) {
        padding-right: 20px;
        & {
          flex-direction: column;
        }
      }

      img {
        max-width: 60px;
        margin-right: 40px;
        @media (max-width: 600px) {
          max-width: 40px;
          margin-right: 20px;
        }
        @media (max-width: 375px) {
          max-width: 30px;
          padding-bottom: 20px;
          margin-right: 10px;
        }
      }

      &:hover {
        background-color: #cda291;
        cursor: pointer;
      }
    }
    .contact-icon {
      min-width: 300px;
      color: #fff;
      @media (max-width: 1000px) {
        min-width: 60px;
        padding: 20px 0px;
      }
    }
  }
}
</style>
