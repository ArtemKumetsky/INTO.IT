<template>

  <div id="courses">
    <div class="courses-title">
      <h1>Список <span>Курсів</span></h1>
      <h2>Обери <b>цікавий</b> тобі напрямок та опановуй <b>перспективну</b> професію вже цим <span>літом</span>!</h2>
    </div>

    <div class="courses-content">
      <courses-element/>
    </div>


  </div>

</template>

<script>
import CoursesElement from "@/components/UIelements/Courses/coursesElement.vue";

export default {
  name: "courses",
  components: { CoursesElement}
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#courses {
  @include defaultComponentSize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.courses-title {
  display: flex;
  flex-direction: column;
}

.courses-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

h1 {
  color: var(--custom-black);
  //margin-top: 50px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 48px;

  span {
    color: var(--red-color);
  }
}

h2 {
  color: var(--custom-black);
  text-align: center;
  margin-top: 0;
  margin-bottom: 40px;
  font-weight: 500;

  span {
    color: var(--red-color);
    font-weight: 700;
  }
}

@media (max-width: 1800px) {
  .courses-content {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  #courses {
    @include defaultComponentSize(true);
  }
  h1 {
    //margin-top: 40px;
    font-size: 38px;
  }
  h2 {
    margin: 0;
  }
}

</style>
