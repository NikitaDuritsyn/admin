<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          
            <!-- <button @click="fetchUsers" class="btn btn-dark">responseLog</button> -->
                <!-- v-bind:key="user.id" Обязвткльно, чтобы отслеживание было по id -->
                <div class="text" v-for="user in users" v-bind:key="user.id">
                    <div><strong>HI </strong>{{user.name}} {{user.lastname}}</div>
                    <!-- <div> <strong>yourmail: </strong>{{user.email}} {{user.email}} {{user.role}} {{user.phone}}</div> -->
                </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.text{
  text-align: center;
  padding-top: 100px;
  font-size: 20px;
}
</style>

<script>
import UserService from '../Services/UserService'
export default {
  name: 'Main',
  data(){
        return {
            users:[],
            // error:'',
            // text:''
        };
    },

    
    methods:{
        async fetchUsers() {
            try{
                // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                // const response = await axios.get('http://localhost:3000/api/user')
                // const response = await axios.get('http://localhost:3000/api/user')
                this.users = await UserService.getAllUsers()
                console.log(this.users);
            }catch(e){
                // this.error = e.massege;
                alert(e.massege)
            }
        }
    },
    mounted(){
      this.fetchUsers();
    }
}
</script>
