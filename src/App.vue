<template>
  <header-comp/>
  <router-view v-slot="{ Component }">
    <transition name="scale">
      <component :is="Component" />
    </transition>
  </router-view>
  <cookie-banner/>
  <footer-component/>
</template>

<script>

import headerComp from "@/components/header-component"
import intro from "@/components/introduction.vue"
import about from "@/components/about.vue";
import teachers from "@/components/teachers.vue";
import Possibilities from "@/components/possibilities.vue";
import Courses from "@/components/courses.vue";
import Contacts from "@/components/contacts.vue";
import Questions from "@/components/questions.vue";
import FooterComponent from "@/components/footer-component.vue";
import CookieBanner from "@/components/UIelements/cookie-banner.vue";

export default {
  name: 'App',
  components: {
    CookieBanner,
    FooterComponent,
    Questions,
    Contacts,
    Courses,
    Possibilities,
    about,
    headerComp,
    intro,
    teachers
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

.swal2-popup {
  font-family: 'Open Sans', sans-serif;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
  background: var(--custom-black);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: 2px;
}

#app {
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}


</style>
