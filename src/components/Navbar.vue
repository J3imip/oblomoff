<template>
  <header :class="{'scrolled-nav': scrolledNav}">
    <nav class="__container">
      <!-- Logo -->
      <div class="logo">
        Облом<span>off</span>
        <img src="@/assets/potato.png" alt="">
      </div>
      
      <!-- Desktop navigation -->
      <ul v-show="!mobile" class="navigation">
        <li><router-link onclick="" class="link" :to="{name: 'home'}">главная</router-link></li>
        <li><router-link onclick="" class="link" :to="{name: 'recepies'}">рецепты</router-link></li>
        <li><router-link onclick="" class="link" :to="{name: 'contact'}">контакты</router-link></li>
        <li><router-link onclick="" class="link" :to="{name: 'blog'}">блог</router-link></li>
        <li><router-link onclick="" class="link" :to="{name: 'fact'}" >факт</router-link></li>
      </ul>

      <!-- Mobile bars icon -->
      <div class="icon" id="icon">
        <fa id="icon" icon="bars" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}"/>
      </div>

      <!-- Mobile navigation -->
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link onclick="" class="link" :to="{name: 'home'}">главная</router-link></li>
          <li><router-link onclick="" class="link" :to="{name: 'recepies'}">рецепты</router-link></li>
          <li><router-link onclick="" class="link" :to="{name: 'contact'}">контакты</router-link></li>
          <li><router-link onclick="" class="link" :to="{name: 'blog'}">блог</router-link></li>
          <li><router-link onclick="" class="link" :to="{name: 'fact'}">факт</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
  },
  watch:{
    $route (){
        if(this.$route.name != "home") {
          this.scrolledNav = true;
        } else {
          this.scrolledNav = false;
        }
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    }, 
    updateScroll(){
      if(this.$route.name != "home") return;
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 1000) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
  .__container {
    box-sizing: content-box;
    max-width: 1400px;
    margin: 0 auto; 
  }
  header {
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .2s ease all;
    color: #000;

    #icon {
      color: #000;
    }

    nav {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      transition: .2s ease all;
      margin: 0 auto;

      .link:hover,
      .link:active,
      .router-link-active {
        color: #C1564C !important;
        border-color: #C1564C !important;
        cursor: pointer;
      }

      .logo {
        font-family: 'Russo One';
        text-shadow: -4px 4px 6px rgba(0, 0, 0, 0.3);
        font-size: 48px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        user-select: none;
        @media (max-width: 330px) {
          font-size: 44px;
        }
        @media (max-width: 300px) {
          font-size: 40px;
        }

        span {
          color: #F2E6E1;
        }

        img {
          max-width: 60px;
          margin-left: 30px;
          -webkit-user-drag: none;
          @media (max-width: 400px) {
            display: none;
          }
        }
      }

      .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
      }

      ul,
      .link {
        -webkit-user-drag: none;
        font-weight: 400;
        color: rgba(77, 37, 0, 0.9);
      }

      li {
        padding: 16px;
        margin-left: 16px;
      }

      .link {
        transition: .2s ease all;
        border-bottom: 2px solid transparent;
      }
    }
    .icon {
      display: flex;
      position: absolute;
      top: 0;
      align-items: center;
      right: 24px;
      height: 100%;
      font-size: 30px;
      cursor: pointer;
      z-index: 2;

      #icon {
        transition: .3s all ease;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: max-content;
      max-width: 220px;
      border-radius: 0px 0px 0px 16px;
      align-items: flex-end;
      background-color: rgba(255, 248, 230, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      top: 0;
      right: 0;
      padding-top: 60px;

      li {
        margin-left: 0;
        font-size: 32px;
        margin: 10px 0;

        // &:last-cs-bottom: 40px;
        // }
        .link {
          color: #000;
        }
      }

      @media (max-height:440px) {
        flex-wrap: wrap;
        min-width: 100vw;
        min-height: 100vh;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-top: 0;
        li {
          margin: 0;
        }
      }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: .6s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateY(-600px);
    }

    .mobile-nav-enter-to {
      transform: translateY(0px);
    }
  }

  .scrolled-nav {
    background-color: rgba(255, 193, 7, 1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  }
</style>