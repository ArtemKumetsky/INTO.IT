<template>
  <footer>
    <div class="title">
      <h2><span>© INTO.<span>IT</span></span> Всі права захищені.</h2>
      <h3>Створено за підтримки учнів академії</h3>
    </div>
    <nav>
      <ul>
        <li @click="scrollInto('about')">Про нас</li>
        <li @click="scrollInto('teachers')">Викладачі</li>
        <li @click="scrollInto('possibilities')">Перспективи</li>
        <li @click="scrollInto('courses')">Курси</li>
        <li @click="scrollInto('contacts')">Контакти</li>
        <li @click="scrollInto('Q&A')">Підтримка</li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>

import router from "@/router";

function scrollInto(target) {
  if (!document.getElementById(target)) {
    router.push({path: '/'})
  } else document.getElementById(target).scrollIntoView()
}

/*function goTo(url){
  window.open(url)
}*/

</script>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 40vh;
  background-image: url("@/assets/img/footer/background.svg");

  .title {
    h3 {
      color: white;
      opacity: 0.7;
      font-weight: 400;
      text-align: center;
      margin-top: 10px;
    }
    h2 {
      color: white;
      opacity: 0.9;
      font-weight: 400;

      span {
        font-weight: 700;

        span {
          font-weight: 800;
          color: var(--red-color);
        }
      }
    }
  }

  .social {
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      margin-left: 20px;
      margin-right: 20px;

      transition: .3s all ease-in-out;

      &:hover{
        transform: scale(1.1);
      }

    }

  }

  nav {

    margin-right: auto;
    margin-left: auto;
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
        color: white;
        opacity: 0.7;
        display: flex;
        align-items: center;
        position: relative;
        transition: .1s all;

        &:hover {
          opacity: 0.9;
        }

        &:active {
          transform: scale(0.99);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  footer {
    nav {
      width: 90%;

      ul {
        margin: 10px;
        flex-flow: row wrap;
        row-gap: 20px;
        column-gap: 10px;
      }
    }
  }
}

</style>