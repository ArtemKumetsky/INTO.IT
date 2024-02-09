<script setup>

import {onMounted} from "vue";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import {firebaseApp} from "@/firebase";
import {vMaska} from "maska";
import QuestionElement from "@/components/UIelements/questions/question-element.vue";
import TimerElement from "@/components/UIelements/timer.vue";
import KidsComponent from "@/components/UIelements/kids.vue";
function goToPreviousPage(){
  history.back()
}

const coursesPath = 'courses'
let courseInfo = {}

onMounted(async () => {
  const firestore = getFirestore(firebaseApp);

  const path = window.location.href

  if (path.indexOf("java-developer") > -1) {
    const javaRef = doc(firestore, coursesPath, "java");
    const javaSnap = await getDoc(javaRef);
    if (javaSnap.exists()) {
      courseInfo = javaSnap.data()
    } else {
      console.log("No such document!");
    }
  }else if (path.indexOf("web-developer") > -1) {
    const webRef = doc(firestore, coursesPath, "web");
    const webSnap = await getDoc(webRef);
    if (webSnap.exists()) {
      courseInfo = webSnap.data()
    } else {
      console.log("No such document!");
    }
  }
  document.getElementById('title').innerHTML = courseInfo.title + "<span id='subtitle' style='color: var(--red-color)'> " + courseInfo.subtitle + "</span>"
  document.getElementById('duration').innerText = courseInfo.duration
  document.getElementById('lessons').innerText = courseInfo.lessons
  document.getElementById('age').innerText = courseInfo.age
  document.getElementById('price').innerText = courseInfo.price
  document.getElementById('info').innerHTML = courseInfo.info
})

</script>

<script>

import Swal from "sweetalert2";
import {addDoc, collection} from "firebase/firestore";

export default {
  data(){
  },
  methods: {
    async submitForm() {
      const firestore = getFirestore(firebaseApp)
      let name = document.getElementById('name')
      let phone = document.getElementById('phone')
      let course = document.getElementById('title')

      await addDoc(collection(firestore, 'applications'), {
        name: name.value,
        course: course.innerHTML.toString(),
        phone: phone.value
      })

      Swal.fire({
        icon: 'success',
        title: 'Дякую!',
        text: 'Невдовзі ми вам зателефонуємо для підтвердження замовлення та оплати!',
        timer: 4000,
        timerProgressBar: true,
        confirmButtonColor: '#b82a26'
      })

      name.value = ''
      phone.value = ''
    }
  }
}

</script>

<template>
  <div class="course-block">
    <div class="action-back" v-on:click="goToPreviousPage()">
      <span class="material-symbols-rounded arrow">keyboard_double_arrow_left</span>
      <span>Повернутись на головну</span>
    </div>

    <div class="course-info-block">
      <h1 id="title"><span id="subtitle"></span></h1>

      <div class="course-block-main">
        <timer-element/>

          <form autocomplete="off" @submit.prevent="submitForm()" class="enroll-form">
            <input id="name" type="text" placeholder="ПІБ" required>
            <input id="phone" type="text" placeholder="Телефон" v-maska data-maska="+38 (0##) ###-##-##" required @click="$event.target.value? null : $event.target.value = '+38 (0'">
            <button>Записатись</button>
          </form>

      </div>

      <div class="course-short-info">

        <div class="course-short-info-block">
          <span style="color: #2f5eaf" class="material-symbols-rounded">
            event_note
          </span>
          <h2 id="duration">2 Місяці</h2>
        </div>
        <div class="course-short-info-block">
          <span style="color: var(--red-color)" class="material-symbols-rounded">
            schedule
          </span>
          <h2 id="lessons"></h2>
        </div>
        <div class="course-short-info-block">
          <span style="color: var(--custom-black)" class="material-symbols-rounded">
            face
          </span>
          <h2 id="age"></h2>
        </div>
        <div class="course-short-info-block">
          <span style="color: #0a770a" class="material-symbols-rounded">
            credit_score
          </span>
          <h2 id="price"></h2>
        </div>
      </div>

      <h2>Інформація про <span>Курс</span></h2>

      <p id="info" class="course-info-block-text">
      </p>

    </div>
  </div>

  <div class="questions">
    <h1>Найчастіші <span>Запитання</span></h1>
    <question-element/>
  </div>

  <kids-component/>

</template>


<style scoped lang="scss">

  .questions{
    margin-right: auto;
    margin-left: auto;
    width: 768px;
    h1{
      color: var(--custom-black);
      text-align: center;
      margin-bottom: 40px;
      font-size: 48px;
      span{
        color: var(--red-color);
      }
    }
  }

  .course-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;

    .course-block-main{
      width: 768px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: fit-content;
      padding: 20px;


        .enroll-form{
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          //border: 2px solid var(--red-color);
          padding: 20px;
          width: 768px;
          input{
            text-align: center;
            font-size: 13px;
            height: 50px;
            padding: 10px;
            display: block;
            width: 30%;
            border: 1px solid lightgray;
            outline: none;
            color: var(--custom-black);
            background: transparent;
            margin-right: 10px;
          }
          button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 23px;
            border: 2px solid var(--red-color);
            color: var(--custom-black);
            background-color: transparent;
            font-size: 16px;
            font-weight: 500;
            height: 40px;
            width: 150px;
            transition-property: all;
            transition-duration: .3s;
            transition-timing-function: ease-in-out;

            &:hover{
              border-color: transparent;
              background-color: var(--custom-black);
              color: white;
            }
          }
        }
      }

    .course-info-block{
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 80px;
      img{
        width: 400px;
      }
      h1{
        color: var(--custom-black);
        font-size: 48px;
        margin-bottom: 40px;
      }
      h2{
        color: var(--custom-black);
        font-size: 32px;
        margin-bottom: 40px;
        span{
          color: var(--red-color);
        }
      }
      .course-short-info{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 40px;
        width: max-content;
        .course-short-info-block{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span{
            font-size: 100px;
            margin-bottom: 10px;
          }
          h2{
            color: var(--custom-black);
            font-size: 24px;
            font-weight: 400;
          }

        }
      }
      .course-info-block-text{
        color: var(--custom-black);
        margin-bottom: 60px;
        width: 720px;
        font-size: 22px;
      }
    }

    .action-back{
      display: flex;
      background-color: white;
      cursor: pointer;
      padding: 15px;
      position: sticky;
      justify-content: center;
      top: 72px;
      left: 40px;
      width: 100%;
      height: fit-content;
      span{
        margin-top: auto;
        margin-bottom: auto;
        font-size: 20px;
        font-weight: 400;
        color: var(--custom-black);
      }
      .arrow{
        font-size: 35px;
        color: var(--red-color);
      }
    }
  }

  @media (max-width: 900px) {
    .questions{
      width: 95%;
    }
  }

  @media (max-width: 768px) {
    .course-block{
      justify-content: center;

      .course-info-block{
        h1{
          text-align: center;
        }
        .course-block-main{
          width: 95%;
            .enroll-form{
              flex-direction: column;
              width: 95%;
              input{
                width: 100%;
                margin-bottom: 10px;
              }
              button{
                width: 100%;
              }
            }

        }
        .course-short-info{
          width: 500px;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 0;
          .course-short-info-block{
            width: max-content;
            margin: 0 auto 20px auto;
            span{
              font-size: 150px
            }
          }
        }
        .course-info-block-text{
          width: 90%;
          margin-top: 10px;
        }
      }

    }
  }

  @media (max-width: 580px) {
    .course-block .course-info-block .course-short-info {
      width: 100%;
    }
    .course-block .course-info-block .course-short-info .course-short-info-block span {
      font-size: 100px;
    }
  }

</style>