<template>
  <div class="possibilities-content" id="possibilities">
    <div class="left-block">
      <div class="left-block-content">
        <h1>
          Перспективи у <span>Програмістів</span>
        </h1>
        <p>
          Що ж тут навіть і казати, всі й так розуміють, що їх <b>дуже багато</b>!
          В світі <b>IT</b> ви можете бути будь ким: Рекрутер або HR,
          тестувальник або <b>QA</b> , <b>Back-End</b>  розробник, <b>Front-End</b>  або веб-розробник, <b>Data</b>  аналітик, <b>VR/AR</b>  розробник і це навіть не 50% від всіх можливих професій!
          Також, всім відомим <b>фактом</b>  є те, що програмісти отримують достойну, чесну й конкурентну <b>заробінтю плату</b>  виключно в іноземних валютах.
          Найкращим є те, що ви ніколи <b>не стоїте на місці</b>, а постійно розвиваєтесь разом з технологіями навколо. А це в свою чергу означає, що ваша заробітна плата буде лише <b>рости</b> !
          Освоївши основні навички <b>Computer Science</b>  учень вже претендуватиме на роль <b>Trainee Developer</b>  з заробітною платою від <b>200$</b> . Але найголовніше це те, що у студента
          з'явиться розуміння й інтерес до технологій!
        </p>
      </div>
    </div>
    <div class="right-block">
      <img src="@/assets/img/possibilities/possibilities.webp" alt="laptop">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";


.possibilities-content {
  @include defaultComponentSize;
  background-image: url("@/assets/img/possibilities/background.svg");
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
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

  h1{
    color: white;
    font-size: 48px;
    span{
      color: var(--red-color);
    }
  }

  p {
    font-size: 20px;
    color: white;
    margin: 30px 0;
  }
  button{
    outline: 0;
    padding: 16px 28px;
    width: 180px;
    background: white;
    font-weight: 600;
    font-size: 18px;
    color: var(--custom-black);
    cursor: pointer;
    border: 2px solid var(--custom-black);

    transition-property: all;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;

    &:hover {
      background: rgba(var(--red-color), 1);
      font-weight: 600;
      border-color: var(--red-color);
      color: white;
    }

  }
}

.right-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80%;
  }
}



@media (max-width: 768px) {
  .possibilities-content {
    background-image: none;
    background-color: var(--custom-black);
    grid-template-columns: 1fr;
    @include defaultComponentSize(true);
  }
  .left-block-content {
    width: 100%;
    padding: 0 25px;
    margin: 0 10px;
    h1 {
      font-size: 38px;
    }
    p {
      font-size: 20px;
    }
  }
  .right-block {
    margin-top: 30px;
  }
}
</style>