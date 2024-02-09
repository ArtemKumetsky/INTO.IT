<script setup>
import router from "@/router";

function scrollInto(target) {
  if (!document.getElementById(target)) {
    router.push({path: '/'})
  } else document.getElementById(target).scrollIntoView()

}
</script>

<template>
  <nav>
    <ul>
      <li class="nav-element" @click="scrollInto('about')">Про нас</li>
      <li class="nav-element" @click="scrollInto('teachers')">Викладачі</li>
      <li class="nav-element" @click="scrollInto('possibilities')">Перспективи</li>
      <li class="nav-element" @click="scrollInto('courses')">Курси</li>
      <hr>
      <li class="nav-element" @click="scrollInto('contacts')">Контакти</li>
      <li class="nav-element" @click="scrollInto('Q&A')">Підтримка</li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

nav {
  margin-right: auto;
  margin-left: 50px;
  width: 750px;
  height: 100%;
  padding: 0 25px;

  ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;

    width: 100%;
    height: 100%;
    list-style: none;

    font-weight: 400;
    font-size: 17px;

    hr {
      border: 1px solid #b82a26;
      height: 35px;
      margin: auto 0;
      background: var(--red-color);
    }

    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;
      transition: .1s all;

      &:hover {
        transform: scale(1.025);
      }

      &:active {
        transform: scale(0.99);
      }

      &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        right: 0;
        bottom: 10px;
        background: var(--red-color);
        transition: .3s all;
        border-radius: 10px;
      }

      &:hover:before {
        left: 0;
        width: 100%;
      }
    }
  }
}

@media (max-width: 1024px) {
  nav {
    width: 650px;
    margin-left: 0;

    ul {
      font-size: 16px;
    }
  }
}

@media (max-width: 768px) {
  nav {
    width: 100%;
    height: max-content;
    padding: 15px 0;
    margin: 0 0 30px 0;
    border-left: 0;
    border-right: 0;
    border-top: 2px solid var(--red-color);
    border-bottom: 2px solid var(--red-color);

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 32px;

      li {
        margin: 10px 20px;
        width: 100%;
        font-size: 28px;
        font-weight: 400;
      }

      li:before {
        display: none;
      }

      li:after {
        position: absolute;
        content: "";
        left: -5px;
        top: 50%;
        background: var(--red-color);
        width: 2px;
        height: 0;
        transform: translateY(-50%);
        transition: .3s all;
      }

      li:hover:after {
        height: 100%;
      }
      hr {
        display: none;
      }


    }
  }
}
</style>