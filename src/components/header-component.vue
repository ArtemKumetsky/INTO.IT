<template>
  <header>

    <menu-burger/>

    <div class="header-content">
      <logo/>
      <nav-component/>
      <contacts-element/>
    </div>

  </header>
</template>

<script>
import NavComponent from "@/components/UIelements/header/nav-component.vue";
import ContactsElement from "@/components/UIelements/header/contacts-element.vue";
import MenuBurger from "@/components/UIelements/header/menu-burger.vue";
import Logo from "@/components/UIelements/header/logo.vue";

export default {
  name: "header-component",
  components: {Logo, ContactsElement, NavComponent, MenuBurger},
  data() {
    return {
      pageComponentSizes: []
    }
  },
  mounted() {
    if (window.innerWidth > 768) {
      document.addEventListener("DOMContentLoaded", this.getComponentSizes)
      window.addEventListener("scroll", this.handleScroll)
    }
  },
  methods: {
    getComponentSizes() {
      const componentsList = ["introduction", "about", "teachers", "possibilities", "courses", "kids", "contacts", "Q&A"]

      // Kostil
      setTimeout(
          () => {
            componentsList.forEach(arrItem =>
                this.pageComponentSizes.push({
                  componentId: arrItem,
                  componentCordsY: document.getElementById(arrItem).offsetTop,
                  height: document.getElementById(arrItem).offsetHeight
                })
            )
          },50
      )
    },
    handleScroll() {
      const headerHeight = 72
      if (scrollY + headerHeight < this.pageComponentSizes[1].componentCordsY) {
        this.changeHeaderStyle("light")
      }
      if (scrollY + headerHeight > this.pageComponentSizes[1].componentCordsY) {
        this.changeHeaderStyle("dark")
      }
      if (scrollY + headerHeight > this.pageComponentSizes[2].componentCordsY) {
        this.changeHeaderStyle("light")
      }
      if (scrollY + headerHeight > this.pageComponentSizes[3].componentCordsY) {
        this.changeHeaderStyle("dark")
      }
      if (scrollY + headerHeight > this.pageComponentSizes[4].componentCordsY) {
        this.changeHeaderStyle("light")
      }
      if (scrollY + headerHeight > this.pageComponentSizes[6].componentCordsY) {
        this.changeHeaderStyle("dark")
      }
      if (scrollY + headerHeight > this.pageComponentSizes[7].componentCordsY) {
        this.changeHeaderStyle("light")
      }
    },
    changeHeaderStyle(style) {
      const header = document.getElementsByTagName("header")[0];
      switch (style) {
        case "light": {
          header.style.background = "white";
          header.style.color = "var(--custom-black)";
          break
        }
        case "dark": {
          header.style.background = "var(--custom-black)";
          header.style.color = "white";
          break
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">
header {
  z-index: 2;
  position: fixed;
  top: 0;

  background: white;
  height: 72px;
  width: 100%;
  color: var(--custom-black);
  transition: .3s all;
}

.header-content {
  display: flex;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  height: 100%;
}

//media
@media (max-width: 1024px) {
  .header-content {
    padding: 0 10px;
  }
}

@media (max-width: 768px) {
  header {
    display: flex;
    align-items: center;
    color: whitesmoke;
    background: var(--custom-black);
  }
  .mobile-menu {

    display: flex;
    flex-direction: column;
    background-image: url("@/assets/img/header/burger_background.svg");
    color: whitesmoke;
    width: 90%;
    position: fixed;
    left: -768px;
    top: 72px;
    transition: .3s all;
  }
}

</style>