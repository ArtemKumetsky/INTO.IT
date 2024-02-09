<template>
  <intro/>
  <about/>
  <teachers/>
  <possibilities/>
  <courses/>
  <kids-component/>
  <contacts/>
  <questions/>
</template>

<script>

import Questions from "@/components/questions.vue";
import Contacts from "@/components/contacts.vue";
import Courses from "@/components/courses.vue";
import Possibilities from "@/components/possibilities.vue";
import about from "@/components/about.vue";
import intro from "@/components/introduction.vue";
import teachers from "@/components/teachers.vue";
import KidsComponent from "@/components/UIelements/kids.vue";

export default {
  name: 'mainpage',
  components: {
    KidsComponent,
    Questions,
    Contacts,
    Courses,
    Possibilities,
    about,
    intro,
    teachers
  }
}


</script>

<style scoped lang="scss">

</style>