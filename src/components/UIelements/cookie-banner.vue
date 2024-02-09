<script>
import StyledBtn from "@/components/UIelements/styled-btn.vue";

export default {
  components: {StyledBtn},
  created() {
    document.addEventListener("DOMContentLoaded", this.checkCookie)
  },
  methods: {
    checkCookie() {
      if (document.cookie !== "Cookie_accepted") {
        //&& window.localStorage.getItem('accept-cookie') !== 'accepted')
        document.querySelector(".cookie-banner").style.display = "flex"
      }
    },
    acceptCookie() {
      document.cookie = "Cookie_accepted"
      window.localStorage.setItem('accept-cookie', 'accepted')
      document.querySelector(".cookie-banner").style.bottom = '-500px'
      setTimeout(()=> {
        document.querySelector(".cookie-banner").style.display = 'none'
      },1200)
    }
  }
}
</script>

<template>
  <div class="cookie-banner">
    <img src="@/assets/img/introduction/cookie.webp" alt="cookie">
    <div class="cookie-text">
      Цей сайт використовує файли Cookie для забезпечення найкращого досвіду його використання!
    </div>
    <styled-btn class="btn" @click="acceptCookie">
      Погодитись
    </styled-btn>
  </div>
</template>

<style scoped lang="scss">

  .btn{
    font-size: 16px;
    background-color: transparent;
    border: 2px solid var(--red-color);
    transition: .3s all unset;

    &:hover{
      border: 2px solid transparent;
      background-color: var(--custom-black);
      color: white;
    }

    &:active{
      transform: scale(1.03);
    }

  }

  .cookie-banner {
    display: none;
    justify-content: space-around;
    align-items: center;
    //border-radius: 20px ;
    width: 768px;
    padding: 10px;
    position: fixed;
    bottom: 20px;
    left: calc((100% - 768px)/2);
    right: calc((100% - 768px)/2);
    background: white;
    border: 2px solid var(--red-color);
    transition: 1.2s all ease-in-out;

    img{
      width: 50px;
      height: 50px;
    }

  }
  .cookie-text {
    color: var(--custom-black)  ;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
  }

  
  
  @media (max-width: 768px) {
    .cookie-banner {
      width: 100%;
      right: 0;
      left: 0;
      bottom: 0;
      flex-direction: column;
      align-items: center;
    }
    .cookie-text {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 580px) {
    .cookie-text {
      text-align: center;
    }
  }
</style>