<script setup>

import styledForm from "@/components/UIelements/styled-form.vue";

</script>

<template>
  <div class="contacts-content" id="contacts">
    <div class="left-block">
      <h1>Контакти</h1>
      <p>Телефон гарячої лінії з приводу питань та консультації</p>
      <div class="option">
      <span class="material-symbols-rounded">
            call
          </span>
        <a href="tel:+380977930081">+38 (097) 793 00 81</a>
      </div>
      <p>Електронна адреса:</p>
      <div class="option">
        <span class="material-symbols-rounded">
            public
          </span>
        <a href="mailto:into.itcourses@gmail.com">into.itcourses@gmail.com</a>
      </div>
      <p>Наразі авдиторії для проведення занять зачинено, заняття проводяться в дистанційному режимі!</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4372.800306097231!2d30.37896560296851!3d50.378333229290405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9893a156cd3%3A0xced8ae6d8f9cfea5!2z0JXQstGA0L7Qv9C10LnRgdGM0LrQtSDQvNGW0YHRgtC-!5e0!3m2!1sru!2sua!4v1685697973548!5m2!1sru!2sua" width="800" height="300" style="border:0; margin-top: 15px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="google_map"></iframe>
    </div>
    <div class="right-block">
      <div class="right-block-content">
        <styled-form/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";


.contacts-content {
  @include defaultComponentSize;
  background-image: url("@/assets/img/about/background.svg");
  color: white;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
}


.right-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.right-block-content {
  width: 500px;
  height: max-content;
  transition: .3s all ease-in-out;

  &:hover{
    transform: scale(1.03);
  }
  h1{
    span{
      color: var(--red-color);
    }
  }

  p {
    font-size: 20px;
    margin: 30px 0;
  }
  .styled-btn{
    background: var(--custom-black);
    color: white;
    border: 2px solid var(--red-color);

    &:hover {
      background: white;
      border-color: var(--custom-black);
      color: var(--custom-black);
    }
  }
}

.left-block {
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 42px;
    margin-bottom: 10px;
  }

  p{
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 300;
  }
  a{
    margin-left: 10px;
    font-weight: 500;
    font-size: 24px;
  }
  .option{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
}



@media (max-width: 1350px) {
  .contacts-content {
    grid-template-columns: 1fr;
  }
  iframe{
    width: 100%;
  }
}

@media (max-width: 768px) {
  #contacts {
    @include defaultComponentSize(true);
  }
  .left-block {
    margin-top: 30px;
    h1{
      font-size: 38px;
    }
    img {
      margin-bottom: 30px;
    }
  }
  .right-block-content {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>