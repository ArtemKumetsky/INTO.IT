<script>
export default {
  mounted() {
    //CheckScreenWidth for detect mobile and spawn burger
    this.checkScreenWidth()
  },
  created() {
    if (window.innerWidth <= 768) {
      window.addEventListener("click", (e) => {
        if (e.target === document.getElementsByTagName("header")[0] || e.target.classList.contains("nav-element")) {
          this.OpenBurger()
        }
      })
    }
  },
  methods: {
    checkScreenWidth() {
      if (window.innerWidth <= 768) {
        const menu = document.querySelector(".header-content")
        menu.classList.add("mobile-menu")
      }
    },

    OpenBurger() {
      const menu = document.querySelector(".mobile-menu")
      const burgerBtn = document.querySelector(".menu-burger")

      if (window.getComputedStyle(menu).left === 0 + "px") {
        burgerBtn.style.transform = "rotate(0deg)"
        menu.style.left = -768 + "px"
        document.getElementsByTagName("html")[0].style.overflow = "visible"
      } else {
        burgerBtn.style.transform = "rotate(90deg)"
        menu.style.left = 0
        document.getElementsByTagName("html")[0].style.overflow = "hidden"
      }
    },
  }
}
</script>

<template>
  <span class="material-symbols-rounded menu-burger" @click="OpenBurger">
      menu
    </span>

  <a href="#" class="mobile-header-logo">
    <h1>
      INTO.<span>IT</span>
    </h1>
    <img src="@/assets/img/header/logo.webp" alt="LOGO">
  </a>
</template>

<style scoped lang="scss">
.menu-burger {
  display: none;
  align-items: center;
  width: max-content;
  margin-left: 20px;
  font-size: 46px;
  transition: .3s all;
}

.mobile-header-logo {
  display: none;
  align-items: center;
  margin: 0 20px 0 auto;

  h1 {
    margin-right: 10px;

    span {
      color: var(--red-color);
    }
  }

  img {
    max-width: 48px;
  }
}

@media (max-width: 768px) {
  .menu-burger, .mobile-header-logo {
    display: flex;
  }
}
</style>