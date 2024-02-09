<script>
export default {
  data() {
    return {
      teachers: [
        {
          imgURI: require("@/assets/img/teachers/emoji/developer.webp"),
          name: "Данило",
          text: "Я пройшов нелегкий шлях до мрії і хочу допомогти вам пройти його значно легше!",
          position: "Full-Stack Розробник",
          emojiURI: require("@/assets/img/teachers/emoji/ok.webp"),
        },
        {
          imgURI: require("@/assets/img/teachers/emoji/developer2.webp"),
          name: "Артем",
          text: "Раніше про свою зарплатню я міг тільки мріяти, але це виявилось не так вже й важко!",
          position: "Front-End Розробник",
          emojiURI: require("@/assets/img/teachers/emoji/monkey.webp"),
        },
        {
          imgURI: require("@/assets/img/teachers/emoji/developer3.webp"),
          name: "Вікторія",
          text: "Спочатку вчитись було важко, але з досвідом це стає не тільки гарною роботою, а й хоббі!",
          position: "Full-Stack Розробник",
          emojiURI: require("@/assets/img/teachers/emoji/thumbup.webp"),
        },
      ]
    }
  }
}
</script>

<template>
  <div class="info-element" v-for="teacher in teachers">
    <div class="teacher-main">
      <img :src="teacher.imgURI" alt="teacher_photo">
      <b class="teacher-name">{{ teacher.name }}</b>
    </div>
    <span class="info-text">"{{ teacher.text }}"</span>
    <b class="info-position">
      {{ teacher.position }}
      <img :src="teacher.emojiURI" alt="emoji">
    </b>
  </div>
</template>

<style scoped lang="scss">
.info-element {
  display: flex;
  align-items: center;
  background: var(--custom-black);
  padding: 20px 25px;
  margin: 20px 0;
  border-radius: 5px;
  color: white;
  transition: .3s all ease-in-out;

  &:hover{
    transform: scale(1.03);
    img{
      animation: rotate 1.2s;
    }
  }

  img {
    animation: rotate infinite;
    animation-play-state: paused;
    border-radius: 100%;
    max-width: 100px;
  }
}

@keyframes rotate {
  from{transform: rotate(0)}
  to{transform: rotate(360deg)}
}

.teacher-main {
  display: flex;
  align-items: center;
}

.teacher-name {
  margin-left: 15px;
  font-size: 32px;
}

.info-text {
  margin: auto;
  font-size: 20px;
  max-width: 600px;
  font-style: italic;
}

.info-position {
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  font-size: 26px;

  img {
    margin: -20px 0 0 10px;
    max-height: 64px;
  }
}


@media (max-width: 1500px) {
  .info-element {
    padding: 35px;
  }
  .info-text {
    max-width: 320px;
    margin: 10px 0 0 auto;
  }
}

@media (max-width: 1090px) {
  .info-element {
    height: 250px;
    align-items: flex-start;
    position: relative;

    b {
      height: 100px;
      display: flex;
      align-items: center;
    }

    span {
      position: absolute;
      bottom: 35px;
      left: 35px;
      right: 35px;
      max-width: 90%;
    }
  }
}

@media (max-width: 700px) {
  .info-element {
    height: 300px;
    &:hover{
      transform: none;
      img{
        animation: none;
      }
    }
  }
  .teacher-main {
    flex-direction: column;

    b {
      height: max-content;
    }
  }
}

@media (max-width: 580px) {
  .info-element {
    border-radius: 0;
  }
  .info-position {
    max-width: 175px;

    img {
      max-height: 40px;
    }
  }
}
@media (max-width: 380px) {
  .info-position {
    display: flex;
    font-size: 20px;
    flex-direction: column-reverse;
    text-align: end;
    align-items: flex-end;
    height: auto;
  }
  .info-element {
    height: 330px;
  }
}
</style>