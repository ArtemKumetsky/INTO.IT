<template>
  <div class="kids-container" id="kids">
    <h1 class="kids-title">
      Щасливі, бо закінчили навчання
      <span>
        на курсі
      </span>
    </h1>

    <div class="kids-content">
      <img src="@/assets/img/kids/kid1.webp" alt="student_photo" class="kids-content-element">
      <img src="@/assets/img/kids/kid2.webp" alt="student_photo" class="kids-content-element">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/variables.scss";

.kids-container {
  @include defaultComponentSize();
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--custom-black);
    font-size: 48px;
    text-align: center;
    span {
      color: var(--red-color);
    }
  }
}
.kids-content {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  img {
    border-radius: 20px;
    max-width: 90%;
    margin: auto;
  }
}

@media (max-width: 768px) {
  .kids-container {
    @include defaultComponentSize(true);
  }
  .kids-content {
    grid-template-columns: 1fr;
  }
}
</style>

<script>

export default {
  name: 'kidsComponent',
}
</script>