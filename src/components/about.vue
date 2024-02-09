<script setup>

</script>

<template>
  <div class="about-content" id="about">
    <div class="left-block">
      <img src="@/assets/img/about/academy.webp" alt="laptop">
    </div>
    <div class="right-block">
      <div class="right-block-content">
        <h1>
          Ми молода <span>IT</span> академія
        </h1>
        <p>
          і наша <b>мета</b>  — надавати лише <b>найкращі</b> й <b>найважливіші</b> знання нашим учням!
          Наша компанія спрямована на <b>розвиток</b> та <b>підтримку</b> Української молоді в такі нелегкі часи, і також розвитку основних навичок <b>програмування</b> та критичного мислення.
          Після наших <b>курсів</b> з підготовки, учень з <b>легкістю</b> пройде будь-яку з програм <b>провідних навчальних закладів</b> країни 1-2 курсів спеціальностей комп'ютерної інженерії.
          Нам дуже <b>важлива</b> наша репутація, тому ми цінуємо кожного нашого <b>клієнта</b>.
          Ми нещодавно розпочали нашу діяльність і сподіваємось на вашу <b>довіру</b>! Щоб слідкувати за <b>новинами</b>, підпишіться на нас в Instagram!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.about-content {
  background-image: url("@/assets/img/about/background.svg");
  @include defaultComponentSize();
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
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 120px;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .about-content {
    @include defaultComponentSize(true);
    grid-template-columns: 1fr;
    background-image: none;
    background-color: var(--custom-black);
  }
  .left-block {
    img {
      margin-bottom: 30px;
    }
  }
  .right-block-content {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 38px;
      text-align: center;
    }
  }
}
@media (max-width: 520px) {
  .about-content {
    min-height: 1000px;
  }
}
</style>