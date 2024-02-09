<template>
  <div class="logo-container">
    <a href="#">
      <h1>
        INTO.<span>IT</span>
      </h1>
    </a>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  h1 {
    margin-left: 5px;
    font-size: 32px;
    font-weight: 700;

    span {
      color: var(--red-color);
      font-weight: 800;
    }
  }

  img {
    max-width: 52px;
    height: 52px;
  }
}

@media (max-width: 768px) {
  .logo-container {
    display: none;
  }
}
</style>