<template>
  <div class="container-fluide">
    <div class="row g-0 ">
      <div class="col-md-2">
        <div class="user_сard">
          <form action="">
            <input
              v-bind:value="name"
              @input="name = $event.target.value"
              type="text"
              class="form-control mb-3 mt-3"
              placeholder="Имя"
            />
            <input
              v-bind:value="lastname"
              @input="lastname = $event.target.value"
              type="text"
              class="form-control mb-3 mt-3"
              placeholder="Фамилия"
            />
            <input
              v-bind:value="email"
              @input="email = $event.target.value"
              type="text"
              class="form-control mb-3 mt-3"
              placeholder="Email"
            />
            <input
              v-bind:value="phone"
              @input="phone = $event.target.value"
              type="text"
              class="form-control mb-3 mt-3"
              placeholder="Номер телефона"
            />
            <select
              class="form-select"
              aria-label="Выберите роль пользователя"
              @input="role = $event.target.value"
              v-bind:value="role"
            >

              <option disabled value="">Роль пользователя</option>
              <option>admin</option>
              <option>superadmin</option>
              <option>guest</option>
            </select>
            <input
              v-bind:value="password"
              @input="password = $event.target.value"
              type="text"
              class="form-control mb-3 mt-3"
              placeholder="Пароль"
            />
            <button @click.prevent="createUser" class="btn btn-dark">
              Создать нового пользователя
            </button>
          </form>
        </div>
      </div>
      <div class="col-md-10">
          <div class="row g-0 justify-content-center">
              <div class="col-md-11">
                <userTable ref="childComponent"/>

              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user_сard {
  background-color: white;
  padding: 30px;
  /* margin: 30px; */
}
.btn {
  border-radius: 0;
}
</style>


<script>
import AuthService from "../Services/AuthService";
import userTable from "../components/usertable.vue";
export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      role: "",
      password: "",
    };
  },
  components:{
      userTable
  },
  methods: {
    async createUser() {
      try {
        await AuthService.registrationNewUser(
          this.name,
          this.lastname,
          this.email,
          this.phone,
          this.role,
          this.password
        );
        this.$refs.childComponent.fetchUsers();
      } catch (e) {
        alert(e.massege);
      }
    },
  },

  // Создать нового АДМИНИСТРАТОРА
  // ПОСЛЕДНЯЯ ВРОДЕ КАК СТРАНИЦА
};
</script>