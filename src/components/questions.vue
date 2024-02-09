<template>
  <div class="questions-block" id="Q&A">
    <h1>Найчастіші <span>Запитання</span></h1>
    <div class="faq-content">
      <question-element/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

  .questions-block{

    @include defaultComponentSize();

    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      margin-bottom: 30px;
      font-size: 48px;
      span{
        color: var(--red-color);
      }
    }
  }

  .faq-header{
    font-size: 42px;
    border-bottom: 1px solid var(--custom-black);
    padding: 24px;
  }

  .faq-content {
    max-width: 50%;
  }


  @media (max-width: 1100px) {
    .faq-content{
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {

    .questions-block{
      @include defaultComponentSize(true);
      h1{
        font-size: 38px;
      }
    }
  }


  @media (max-width: 580px) {
    .questions-block{
      h1{
        text-align: center;
      }
    }
  }


</style>
<script setup>
import QuestionElement from "@/components/UIelements/questions/question-element.vue";
</script>