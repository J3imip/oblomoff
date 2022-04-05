<template>
  <div class="info">
    <div class="__container">
      <div class="content">
        <h1>Общее</h1>
        <img src="@/assets/info.svg" alt="" />
        <div class="text">
          Здесь можно найти информацию о самых простых блюдах, которые сможет
          приготовить каждый, даже человек, ни разу не стоявший около плиты. У
          нас есть большое количество рецептов, протестированных Славным Друже.
          И гарантированно каждый из них вам понравится
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
  background: #f2e6e1;
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

    img {
      min-width: 200px;
      @media (max-width: 1135px) {
        min-width: 140px;
      }
      @media (max-width: 1000px) {
        min-width: 60px;
        padding: 20px 0px;
      }
    }
    .text {
      max-width: 740px;
      text-align: end;
      font-size: 28px;
      font-weight: 400;
      line-height: 150%;
      color: #431800;
      padding: 100px 0px;
      @media (max-width: 1135px) {
        font-size: 24px;
      }
      @media (max-width: 1000px) {
        text-align: center;
        max-width: 520px;
      }
      @media (max-width: 600px) {
        font-size: 18px;
        max-width: 330px;
      }
    }
  }
}
</style>
