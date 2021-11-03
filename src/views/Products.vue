<template>
    <div id="products">
        <div class="container">
            Тут будут все товары
        </div>
    </div>











                <!-- 
                ЭТО КОД ДЛЯ ГЛАВНОЙ СТРАНЦЫ НА КЛИЕНТЕ ПРОСТО ДЛЯ ПРИМЕРА ТУТ ОСТАВИЛ МОЖЕТ БЫТЬ ПРИГОДИТСЯ ПОТОМ
                <div class="row">
                <div class="col-md-6">
                    <div class="block-one" ></div>
                </div>
                <div class="col-md-6">
                    <div class="container">
                        <div class="row" style="height: 600px">
                            <div class="col-md-12">
                                <div class="row" style="height: 50%">
                                    <div class="col-md-7">
                                        <div class="block-2" ></div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="block-3" ></div>
                                    </div>
                                </div>
                                <div class="row" style="height: 50%">
                                    <div class="col-md-7">
                                        <div class="block-4" ></div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="block-5" ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div> -->
</template>

<style scoped>
.block-one{
    background-image: url(../assets/Rectangle109.jpg);
    background-size: cover;
    width: 100%;
    height: 600px;
    background-color: brown;
}
.block-2{
    background-image: url(../assets/Rectangle111.jpg);
    background-size: cover;
    width: 100%;
    height: 100%;
    background-color: rgb(21, 255, 0);
    
}
.block-3{
    background-image: url(../assets/Rectangle112.jpg);
    background-size: cover;
    width: 100%;
    height: 100%;
    background-color: black;
    
}
.block-4{
    background-image: url(../assets/Rectangle113.jpg);
    background-size: cover;
    width: 100%;
    height: 100%;
    background-color: rgb(25, 0, 255);
    
}
.block-5{
    background-image: url(../assets/Rectangle114.jpg);
    background-size: cover;
    width: 100%;
    height: 100%;
    background-color: rgb(172, 0, 0);
    
}
.col-md-5, .col-md-7, .col-md-12, .col-md-6{
    margin: 0 ;
    padding: 0;
}
</style>

<script>
export default {
    name: "Products"
}
</script>
