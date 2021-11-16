<template>
  <div id="navbar ">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Меню
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="me-auto data-time-text">
            <a class="navbar-brand" href="/main">АДМИНИСТРАЦИЯ Kovcheq_100</a>
            17.09.2021 19:17:45
          </div>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Товары
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="products">Все товары</a></li>
                <li>
                  <a class="dropdown-item" href="createProducts">Создать</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="orders">Заказы</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Reviews">Отзывы</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" @click="logout">Выход</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.bg-dark {
  background-color: rgb(0, 0, 0) !important;
}
.navbar-brand {
  font-size: 20px;
}
.data-time-text {
  color: white;
  font-size: 18px;
}
.nav-link {
  color: white !important;
  font-size: 20px;
}
</style>

<script>
export default {
  name: "Navbar",
  methods:{
    logout(){
      localStorage.removeItem('token')
    }
  }
};
</script>
