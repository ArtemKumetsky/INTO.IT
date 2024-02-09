<script setup>

function goTo(target){
  window.open(target)
}

</script>

<template>
  <div class="contacts-container">
    <a href="tel:+380977930081" class="phone-numb">
          <span class="material-symbols-rounded">
            call
          </span>
      +38 (097) 793 00 81
    </a>
    <img @click="goTo('https://www.instagram.com/into.itcourses/')" src="@/assets/img/footer/instagram.webp" alt="instagram">
  </div>
</template>

<style scoped lang="scss">

.contacts-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 270px;
  height: 100%;

  img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    transition: .3s all ease-in-out;
    &:hover{
      border: 1px solid var(--red-color);
      transform: scale(1.05);
    }

  }

}

.phone-numb {
  font-size: 17px;
  font-weight: 400;
  position: relative;
  transition: .3s all;
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 50%;
    bottom: -16px;
    background: var(--red-color);
    transition: .3s all;
    border-radius: 10px;
    transform: translate(-50%);
  }

  &:hover:before {
    width: 100%;
  }
}

.telegram-logo {
  display: flex;
  transition: .3s all;
  position: relative;

  &, img {
    width: 40px;
    height: 40px;
  }

  &:before {
    content: '';
    position: absolute;
    height: 0;
    background: var(--red-color);
    width: 0;
    right: -200%;
    top: 50%;
    border: 3px solid var(--red-color);
    border-radius: 100%;
    transition: .3s all;
  }

  &:hover:before {
    right: -45%;
    transition: .3s all;
  }
}


@media (max-width: 1024px) {
  .contacts-container {
    justify-content: space-between;
    width: 230px;
  }
}

@media (max-width: 768px) {
  .contacts-container {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    height: max-content;
    width: 310px;
    margin: 0 auto;

    .phone-numb {
      font-weight: 300;
      font-size: 22px;

      span {
        margin-left: 5px;
      }

      &:before {
        display: none;
      }
    }

    .telegram-logo {
      display: none;
      img {
        width: 50px;
        height: 50px;
      }

      &:before {
        display: none;
      }
    }
  }
}
</style>