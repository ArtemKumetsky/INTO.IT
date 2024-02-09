<template>
  <div class="teachers-content" id="teachers">
    <h2>
      Наші <span>Викладачі</span>
    </h2>
    <div class="teachers-info">
      <teachers-info-element/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";


.teachers-content {
  @include defaultComponentSize;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("@/assets/img/teachers/background.svg");
  h2 {
    color: var(--custom-black);
    margin-bottom: 60px;
    font-size: 52px;
    span{
      color: var(--red-color);
    }
  }
}

.teachers-info {
  width: 80%;
  display: flex;
  flex-direction: column;
}


@media (max-width: 1780px) {
  .teachers-info {
    width: 95%;
  }
}

@media (max-width: 768px) {
  .teachers-content {
    background-image: none;
    @include defaultComponentSize(true);
  }
  .teachers-content h2 {
    text-align: center;
    font-size: 38px;
  }
}

@media (max-width: 580px) {
  .teachers-info {
    width: 100%;
  }
}
</style>

<script setup>
import TeachersInfoElement from "@/components/UIelements/teachers/teachers-info-element.vue";
</script>