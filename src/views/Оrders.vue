<template>

<!--
    Заголовок сообщ: order.title 
    Отчество: order.patronymic 
    Фамилия: order.userlastname 
    Номер: order.phone 
    email: order.email
-->
                    
    <div id="orders" class="container">
        <div class="row main-text-height ">
            <div class="col-md-12 main-text align-self-center">
                Заказы
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-3 align-self-center">
                <button class="btn btn-dark" style="width: 100%" @click="deleteAllOrder">УДАЛИТЬ ВСЕ ЗАКАЗЫ</button>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10 ">
                <div class="orders-blok" v-for="order in orders" v-bind:key="order.id">
                    <div class="order-text"><strong>Имя: </strong>{{order.username}} <strong>Номер: </strong>{{order.phone}}</div>
                    <div class="order-text"><strong>email: </strong>{{order.email}}</div>
                    <div class="order-text"><strong>id: </strong>{{order.id}}</div>
                    <hr>
                    <strong class="order-text">Описание/пожелание: </strong>
                    <div class="order-text-description">{{order.description}}</div>
                    <button class="btn btn-dark" @click="deleteOrder(order.id)">УДАЛИТЬ</button>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.orders-blok{
    background-color: white;
    margin: 10px;
    color: rgb(0, 0, 0);
    padding: 20px;
    height: 365px;
}
.order-text{
    margin: 10px;
}
.order-text-description{
    min-width: 200px;
    height: 100px;
    margin: 10px;
}
.main-text-height{
    height: 93px;
}
.main-text{
    color: black;
    font-size: 30px;
    text-align: center;
}
button{
    border-radius: 0;
    width: 130px;
    height: 40px;
    font-size: 15px;
}
</style>

<script>
import ordersService from '../Services/OredersService';
import OredersService from '../Services/OredersService'

export default{
    name: 'Оrders',
    
    data(){
        return {
            orders:[],
            // error:'',
            // text:''
        };
    },

    methods:{
        async fetchOrders() {
            try{
                this.orders = await OredersService.getAllOrders()
            }catch(e){
                alert(e.massege)
            }
        },
        async deleteAllOrder(){
            try{
                this.orders = await ordersService.deleteALLOrder()
                
            }catch(e){
                alert(e.massege)
            }
        },
        async deleteOrder(orderID){
            try{
                // console.log(orderID)
                this.orders = await ordersService.deleteOneOrder(orderID)
                this.fetchOrders();
            }catch(e){
                alert(e.massege)
            }
        }
    },
    mounted(){
      this.fetchOrders();
    }
}
</script>
