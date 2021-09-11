<template>
    <div id="navbar ">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light back-color">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link" aria-current="page" href="/">Главная</a>
                                    <a class="nav-link" href="products">Продукты</a>
                                    <a class="nav-link" href="orders">Заказы</a>
                                </div>
                            </div>
                            <div class="navbar-nav justify-content-end">
                                    <a class="nav-link" href="login">Выход</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back-color{
    background-color: rgb(255, 255, 255);
}
/* .navbar a{
    color: azure;
    display: flex;
} */
</style>

<script>

export default{
    name:"Navbar",
}
</script>
