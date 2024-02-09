<script setup>
  import StyledBtn from "@/components/UIelements/styled-btn.vue";
  import {vMaska} from "maska";
</script>
<script>

import {firebaseApp} from "@/firebase";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Swal from "sweetalert2";

export default {
  data() {
    return {
      formGroupElements: [
        {id: "input_name",      type: "text", message: "Ваше ім'я",       required: true    },
        {id: "input_courses",   type: "text", message: "Бажаний курс",    required: false   },
        {id: "input_phoneNumb", type: "tel",  message: "Номер телефону",  required: true    },
        {id: "input_comment",   type: "text", message: "Коментар",        required: false   },
      ]
    }
  },
  methods: {
    async formSubmit() {

      const nameRef = document.getElementById('input_name')
      const courseRef = document.getElementById('input_courses')
      const phoneRef = document.getElementById('input_phoneNumb')
      const commentRef = document.getElementById('input_comment')

      const firestore = getFirestore(firebaseApp)

      await addDoc(collection(firestore, 'questions'), {
        name: nameRef.value,
        course: courseRef.value,
        phone: phoneRef.value,
        comment: commentRef.value
      })

      Swal.fire({
        icon: 'success',
        title: 'Дякую!',
        text: 'Незабаром ми вам зателефонуємо!',
        timer: 2000,
        timerProgressBar: true,
      })

      nameRef.value = ''
      courseRef.value = ''
      phoneRef.value = ''
      commentRef.value = ''

    }
  }
}
</script>

<template>
  <form autocomplete="off" @submit.prevent="formSubmit" class="form">
    <h1>Заповніть форму і ми обов'язково вам зателефонуємо!</h1>

    <div class="group" v-for="element in formGroupElements">

      <input :type="element.type" v-if="element.type === 'tel'" v-maska data-maska="+38 (0##) ###-##-##" required :id="element.id" placeholder=" "
             @click="$event.target.value? null : $event.target.value = '+38 (0'">
      <input :type="element.type" v-else-if="element.required" required :id="element.id" placeholder=" ">
      <input :type="element.type" v-else :id="element.id" placeholder=" ">

      <label :for="element.id"> {{ element.message }} </label>
      <span class="highlight"></span>
    </div>

    <styled-btn class="styled-button" type="submit">
      Відправити
    </styled-btn>
  </form>
</template>

<style scoped lang="scss">

.styled-button{
  padding: 20px 35px;
  border: 2px solid var(--red-color);
  background-color: transparent;
  color: white;
  margin-bottom: 40px;
  margin-top: 20px;
  &:hover{
    border-color: var(--custom-black);
    background-color: white;
    color: var(--custom-black);
  }
}
.form{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 40px 0;
   border: 2px solid var(--red-color);
   h1{
     font-size: 32px;
   }
 }

.group {
  position: relative;
  margin-bottom: 25px;
  width: 75%;
}

input {
  font-size: 13px;
  height: 50px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #B1B1B1;
  color: whitesmoke;
  background: transparent;
  opacity: 1;
  transition: 0.2s ease;
}

input:focus {
  outline: none;
  opacity: 1;
}

h1{
  margin-bottom: 20px;
  text-align: center;
  font-size: 48px;
}

//label {
//  color: #B1B1B1;
//  font-size: 13px;
//  font-weight: normal;
//  position: absolute;
//  pointer-events: none;
//  left: 5px;
//  top: 15px;
//  opacity: 0.5;
//  transition: 0.2s ease all;
//  -moz-transition: 0.2s ease all;
//  -webkit-transition: 0.2s ease all;
//}
//
///* active state */
//input:focus ~ label, input:empty ~ label {
//  top: -10px;
//  font-size: 12px;
//  color: #e1e1e1;
//  opacity: 1;
//}
label {
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: -10px;
  font-size: 12px;
  color: #e1e1e1;
  opacity: 1;
  left: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:placeholder-shown ~ label {
  color: #B1B1B1;
  font-size: 13px;
  top: 15px;
  opacity: 0.5;
}

//.highlight {
//  position: absolute;
//  height: 60%;
//  width: 100px;
//  top: 25%;
//  left: 0;
//  pointer-events: none;
//  opacity: 0.5;
//}

@media (max-width: 768px) {
  .form{
    border: none;
  }
}
</style>