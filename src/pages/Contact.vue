<template>
  <div class="__container">
    <div class="content">
      <div class="content__form">
        <form action="">
          <div class="title">Обращение</div>
          <label for="email">email</label>
          <input type="email" name="email" id="" />
          <label for="firtName">ваше имя</label>
          <input type="name" name="firstName" id="" />
          <label for="comment">ваше обращение</label>
          <textarea name="comment" class="comment" cols="30" rows="10"></textarea>
          <button>ОТправить</button>
        </form>
      </div>
      <div class="content__description">
        <div class="title">Мы постараемся ответить Вам как можно быстрее!</div>
        постарайтесь написать ваше обращение как можно кратче и как можно
        точнее, а мы предоставим вам соответствующий ответ!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.content {
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 150px 0px;

  @media (max-width:1000px) {
    flex-direction: column;
    text-align: center;
    padding: 150px 0px 60px 0px;
  }

  &__form,
  &__description {
    width: 42%;
    @media (max-width:1240px) {
      width: 48%;  
    }  
    @media (max-width:1000px) {
      width: 80%;  
    }  
    @media (max-width:600px) {
      width: 95%;  
    }  
  }

  &__form {
    @media (max-width:1240px) {
      text-align: left;
    }  
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    border: 2px solid #000;
    box-shadow: 0px 4px 10px 6px rgba(0, 0, 0, 0.25);
    align-items: center;
    padding: 10px 0px;

    label {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 18px;
      color: #454545;
      text-align: left;
      @media (max-width:450px) {
        font-size: 14px;
      }
    }

    .title {
      font-weight: 600;
      border-bottom: 3px solid #000;
      margin: 0 auto;
      padding: 10px 0px;

      @media (max-width:1000px) {
        border: none; 
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90%;

      label {
        margin-bottom: 4px;
      }

      input,
      textarea {
        resize: none;
        font-family: monospace;
        font-size: 20px;
        padding: 10px;
        background: rgba(196, 196, 196, 0.2);
        border-radius: 4px;
        box-shadow: inset 0px 0px 8px 4px rgba(0, 0, 0, 0.25);
        min-height: 34px;
        border: none;
        margin-bottom: 24px;
        transition: .2s all ease;

        &:hover {
          box-shadow: inset 0px 0px 8px 4px rgba(0, 0, 0, 0.4);
        }
      }
      .comment {
        max-height: 120px;
      }
    }

    button {
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
    }
  }

  &__description {
    font-size: 26px;
    line-height: 35px;
    
    @media(max-width:1000px) {
      padding-top: 40px;
    }
    @media(max-width:850px) {
      font-size: 24px;
      line-height: 25px;
    }
    @media (max-width:450px) {
      font-size: 16px;
      line-height: 20px;
    }
    .title {
      width: 90%;
      font-weight: 600;
      margin-bottom: 24px;

      @media (max-width:1000px) {
        width: 100%; 
      }
    }
  }
}
</style>
