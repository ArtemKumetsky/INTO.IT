<script>

export default {
  name: 'timerElement',
  mounted: async function () {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    /*if (path.indexOf("java-developer") > -1) {
      const javaRef = doc(firestore, coursesPath, "java");
      const javaSnap = await getDoc(javaRef);
      if (javaSnap.exists()) {
        courseInfo = javaSnap.data()
        console.log(courseInfo)
      } else {
        console.log("No such document!");
      }
    }else if (path.indexOf("web-developer") > -1) {
      const webRef = doc(firestore, coursesPath, "web");
      const webSnap = await getDoc(webRef);
      if (webSnap.exists()) {
        courseInfo = webSnap.data()
        console.log(courseInfo)
      } else {
        console.log("No such document!");
      }
    }*/

    const end = new Date("30 Jun, 2023 00:00:00")
    this.showRemaining(end, second, minute, hour, day)
    const timer = setInterval(() => {
        this.showRemaining(end, second, minute, hour, day, timer)
    }, 1000);
  },
  methods: {
    showRemaining(end, second, minute, hour, day, timer) {

      if (!document.querySelector(".timer")) {
        clearInterval(timer)
        return;
      }

      const now = new Date();
      const distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        this.$refs.timer_days.innerHTML = "0"
        this.$refs.timer_hours.innerHTML = "0"
        this.$refs.timer_minutes.innerHTML = "0"
        this.$refs.timer_seconds.innerHTML = "0"
        return
      }
      let days = Math.floor(distance / day).toString();
      let hours = Math.floor((distance % day) / hour).toString();
      let minutes = Math.floor((distance % hour) / minute).toString();
      let seconds = Math.floor((distance % minute) / second).toString();
      this.$refs.timer_days.innerHTML = days
      this.$refs.timer_hours.innerHTML = hours
      this.$refs.timer_minutes.innerHTML = minutes
      this.$refs.timer_seconds.innerHTML = seconds
    }
  },
}
</script>

<template>
  <div class="timer-container">

    <div class="timer">
      <div class="timer-element days" ref="timer_days"></div>
      <div class="timer-element hours" ref="timer_hours"></div>
      <div class="timer-element minutes" ref="timer_minutes"></div>
      <div class="timer-element seconds" ref="timer_seconds"></div>
    </div>
    <div class="timer">
      <div class="timer-desc-element">Днів</div>
      <div class="timer-desc-element">Годин</div>
      <div class="timer-desc-element">Хвилин</div>
      <div class="timer-desc-element">Секунд</div>
    </div>

    <h2>Встигніть записатись на курс, заповнивши <span>форму</span></h2>

  </div>
</template>

<style scoped lang="scss">
.timer-container {
  width: 100%;

  h2{
    color: var(--custom-black);
    margin: 20px 0;
    font-size: 32px;
    text-align: center;
    span{
      color: var(--red-color);
    }
  }

}

.timer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;

  .timer-element {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: 500;
    background-color: var(--custom-black);
    height: 100px;
    width: 120px;
    color: white;

    animation: appear .3s ease-in;
  }

  .timer-desc-element {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    height: 50px;
    width: 120px;
    color: var(--custom-black);
  }
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .timer {
    .timer-element {
      width: 22%;
    }
  }
}
</style>