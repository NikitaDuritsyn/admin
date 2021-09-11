<template>
    <div id="orders" class="container">
        <div class="row">
            <div class="col-md-0"></div>
            <div class="col-md-12">
                <!-- <button @click="fetchOrders" class="btn btn-dark">responseLog</button> -->
                <!-- title, description, username, patronymic, userlastname, email, phone - Всё это поля заказа -->
                <div class="ordersBlok" v-for="order in orders" v-bind:key="order.id">
                    <div><strong>Заголовок сообщ: </strong>{{order.title}}</div>
                    <div><strong>Описание: </strong>{{order.description}}</div>
                    <div><strong>Имя заказчика: </strong>{{order.username}}</div>
                    <div><strong>Отчество: </strong>{{order.patronymic}}</div>
                    <div><strong>Фамилия: </strong>{{order.userlastname}}</div>
                    <div><strong>Номер: </strong>{{order.phone}}</div>
                    <div><strong>email: </strong>{{order.email}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .tabel{
    padding-top: 50px;
} */
.ordersBlok{
    margin: 10px;
    color: rgb(0, 0, 0);
    padding: 20px;
    border: 1px;
    border: 2px dotted;
    border: medium dashed rgb(0, 0, 0);
    /* display: inline-block; */
}
</style>

<script>
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
                console.log(this.orders);
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
