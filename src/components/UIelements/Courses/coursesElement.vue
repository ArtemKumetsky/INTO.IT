<script>
export default {

  data() {
    return {
      courses: [
        {
          name: 'java-developer',
          imgURI: require("@/assets/img/courses/java.webp"),
          title: "Java розробник",
          subtitle: "Підготовка до університету",
          content: "Тільки найважливіше! Робота в професійних середовищах програмування під повним керівництвом викладача в групах до 6 учнів. Будуть розглянуті: " +
              "структури даних, основні парадигми програмування, синтаксис мови Java, алгоритми сортування, патерни проектування систем, математичні обрахування і оператори... ",
          price: "3 200",
          age: "Вікова категорія: 15+ років"
        },
        {
          name: 'web-developer',
          imgURI: require("@/assets/img/courses/web.webp"),
          title: "Web розробник",
          subtitle: "Розробка веб-сторінок",
          content: "Тільки найважливіше! Робота в професійних середовищах програмування під повним керівництвом викладача в групах до 6 учнів. Будуть розглянуті: " +
              "мова HTML для розмітки інтернет сторінок, CSS для стилізації веб-сторінок, JavaScript для маніпуляцій з DOM елементами сторінки, побудова власного порфтоліо та...",
          price: "3 200",
          age: "Вікова категорія: 14+ років"
        },
      ]
    }
  }
}

</script>

<template>
  <div class="courses-element" v-for="course in courses">
    <div class="imgBx">
      <img :src="course.imgURI" alt="Course_IMG">
    </div>
    <div class="details">
      <div class="content">
        <h2>
          {{ course.title }}
          <br>
          <span>{{ course.subtitle }}</span>
        </h2>
        <p>
          {{ course.content }}
        </p>
        <p class="age">
          {{ course.age }}
        </p>
        <h3>Ціна: {{ course.price }} грн.</h3>
        <p class="old-price">4000 грн.</p>
        <br>
        <styled-btn @click="$router.push({ path: `/course/${course.name}`})">
          Детальніше
        </styled-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.courses-element {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 900px;
  height: 620px;
  background: #1d212a;
  transition: .4s all ease-in-out;

  &:hover{
    transform: scale(1.03);
  }

  .imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #b82a26;
    transition: .3s linear;

    &:before {
      content: 'Course';
      position: absolute;
      top: 0;
      left: 24px;
      color: #000;
      opacity: 0.2;
      font-size: 6em;
      font-weight: 800;
    }

    img {
      position: relative;
      width: 300px;
      bottom: -70px;
      left: 10px;
      transition: .9s linear;
    }
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 40px;

    h2 {
      margin: 0;
      padding: 0;
      font-size: 2.4em;
      line-height: 1em;
      color: white;

      span {
        font-size: 0.4em;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #b82a26;
      }
    }

    p {
      max-width: 85%;
      margin-top: 10px;
      margin-left: 45px;
      color: white;
      font-size: 15px;
      margin-bottom: 28px;
    }

    .age{
      font-size: 20px;
      font-weight: 600;
      margin-left: 0;
      margin-bottom: 10px;
    }

    .old-price{
      margin: 0 0 0 150px;
      font-size: 30px;
      font-weight: 600;
      color: var(--red-color);
      text-decoration: line-through;
    }
    h3 {
      text-align: center;
      padding: 0;
      font-size: 2.5em;
      color: white;
    }

    button {
      display: flex;
      justify-content: center;
      background: #1d212a;
      color: white;
      border: 2px solid #b82a26;
      outline: none;
      margin: auto;
      padding: 20px 20px;
      font-size: 18px;
      font-weight: 600;
      transition: .3s all ease-in-out;

      &:hover {
        background: white;
        border-color: var(--custom-black);
        color: var(--custom-black);
      }
    }
  }
}

/* responsive */
@media (max-width: 1800px) {
  .courses-element:not(.courses-element:first-child) {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .courses-element {
    display: flex;
    flex-flow: column;
    height: max-content;
    margin: 40px 0;

    width: 95%;

    .imgBx {
      width: 100%;
      justify-content: flex-end;
      img {
        left: 0;
        bottom: 0;
      }
      &:before{
        content: '';
      }
    }

    .details {
      width: 100%;
    }
  }
}

@media (max-width: 580px) {
  .courses-element {
    width: 100%;
    .imgBx {

      &:before {
        z-index: 1;
      }

      img {
        z-index: 0;
      }
    }
    .details {
      padding: 40px 20px;
    }
  }

}

</style>


<script setup>
import StyledBtn from "@/components/UIelements/styled-btn.vue";
</script>