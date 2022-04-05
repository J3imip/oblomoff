<template>
  <footer>
    <div class="__container">
      <div class="text">
        <div class="head">
          По всем вопросам можете обращаться <a href="#">сюда</a>
        </div>

        <div class="contacts">
          127474, Ukraine, Kharkiv +380123456789 info@oblomov.com
        </div>

        <div class="foot">© 2022 Обломов. Все права защищены.</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #37282b;
  color: rgba($color: #fff, $alpha: 0.8);
  font-weight: 300;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
}
.text {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 24px;
  line-height: 150%;

  a {
    color: #00ffffb2;
  }

  & div {
    margin-top: 24px;
    @media (max-width: 600px) {
      margin-top: 24px;
    }
  }
  .contacts {
    max-width: 300px;
  }
}
</style>
