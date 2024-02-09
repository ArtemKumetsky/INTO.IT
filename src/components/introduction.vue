<script setup>

function routeToTarget(target) {
  document.getElementById(target).scrollIntoView()
}

import StyledBtn from "@/components/UIelements/styled-btn.vue";
</script>

<template>
  <div class="introduction-content" id="introduction">
    <div class="left-block">
      <div class="left-block-content">
        <h1>
          Вже цим <span>Літом</span> 2023
        </h1>
        <p>
          Старт нашого марафону навчання програмуванню<br> за <b>найкращими цінами</b> на ринку!
          Найсвіжіші та найактуальніші курси створені на програмах <b>Computer Science</b> провідних університетів
          країни
          зроблять це літо <b>найпродуктивнішим</b> у житті наших студентів!
          Викладатимуть лише найважливіші матеріали у найшвидшому можливому темпі для засвоєння всіх потрібних навичок
          для реального <b>практичного програмування</b> . Завжди бачив себе у цій сфері, але не знав з чого почати?
          Тисни на кнопку внизу і розпочни свій шлях до <b>роботи мрії!</b>
        </p>
        <styled-btn @click="routeToTarget('courses')" class="styled-btn">
          Записатись на курс
        </styled-btn>
      </div>
    </div>
    <div class="right-block">
      <img src="@/assets/img/introduction/laptop.webp" alt="laptop">
    </div>
    <span @click="routeToTarget('about')" class="material-symbols-rounded bottom-arrow">
      keyboard_double_arrow_right
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.introduction-content {
  @include defaultComponentSize;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-image: url("@/assets/img/introduction/background.svg");
}

.left-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-block-content {
  width: 550px;
  height: max-content;

  h1 {
    color: var(--custom-black);
    overflow: hidden;
    font-size: 48px;
    white-space: nowrap;

    animation: typing 1.2s steps(400, end);

    span {
      color: var(--red-color);
    }
  }

  p {
    color: var(--custom-black);
    font-size: 20px;
    margin: 30px 0;
  }
}

.styled-btn {
  background: white;
  color: var(--custom-black);
  border: 2px solid var(--red-color);

  &:hover {
    background: var(--custom-black);
    border-color: white;
    color: white;
  }
}

.right-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: appear 1.6s;

  img {
    width: 100%;
  }
}

.bottom-arrow {
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 0;
  left: 0;
  transform: rotate(90deg);
  width: max-content;
  margin: auto;
  color: var(--red-color);
  font-size: 90px;
  animation: prig_skok 2s infinite;
  transition: .3s all;

  &:hover {
    transform: rotate(90deg) scale(1.05);
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}

@keyframes prig_skok {
  0% {
    margin-bottom: 0;
    color: var(--red-color);
  }
  25% {
    margin-bottom: 6px;
  }
  50% {
    margin-bottom: 2px;
    color: var(--custom-black);
  }
  75% {
    margin-bottom: 6px;
  }
  100% {
    margin-bottom: 0;
    color: var(--red-color);
  }
}

@media (max-width: 768px) {
  .introduction-content {
    grid-template-columns: 1fr;
    padding: 125px 10px;
    background-image: none;
  }
  .left-block-content {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      white-space: normal;
      text-align: center;
      animation: none;
      font-size: 38px;
    }
  }
  .right-block {
    margin-top: 30px;
    animation: none;
  }
}

@media (max-width: 520px) {
  .introduction-content {
    min-height: 790px;
  }
}
</style>