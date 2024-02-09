<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  outline: 0;
  padding: 20px 20px;
  font-size: 18px;
  width: 250px;
  font-weight: 600;
  cursor: pointer;
  transition-property: all;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}
</style>