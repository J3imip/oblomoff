<template>
  <div class="__container">
    <div class="posts">
      <div class="post" v-for="(post, num) in posts" :key="num">
        <div class="image">
          <img :src="'/src/assets/' + post.image" alt="" />
        </div>
        <div class="content">
          <div class="title">{{ post.title }}</div>
          <a class="link" :href="post.link">{{ post.link }} </a>
          <div class="date">{{ post.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from "@/storage/posts.json";

export default {
  data() {
    return {
      posts,
    };
  },
  name: "Blog",
};
</script>

<style lang="scss" scoped>
.__container {
  display: flex;
  justify-content: center;
}
.posts {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20vh;
  flex-direction: column;
  max-width: 50%;
  @media (max-width: 500px) {
    min-width: 100%;
  }

  .post {
    padding-bottom: 10%;
    filter: drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.25));
    -webkit-filter: drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.25));
  }

  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 0;
      aspect-ratio: 4/3;
      position: relative;
    }
  }

  .content {
    max-width: 100%;
    background-color: #fff;
    padding: 10px;
    transform: translateY(-10px);
    display: flex;
    flex-direction: column;
    position: relative;
    .title {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 36px;

      @media (max-width: 1000px) {
        font-size: 6vw;
      }
    }

    .link {
      color: #006777a6;
      font-size: 24px;
      margin-top: 20px;
      padding-bottom: 8vh;
      @media (max-width: 1000px) {
        font-size: 5vw;
      }
    }

    .date {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px;
      font-size: 20px;
      font-weight: 300;
      @media (max-width: 1000px) {
        font-size: 4vw;
      }
    }
  }
}
</style>
