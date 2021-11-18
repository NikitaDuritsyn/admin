<template>
  <form action="">
    <!-- <p>UserID: {{ this.id }}</p>
    <p>name: {{ this.name }}</p>
    <p>lastname: {{ this.lastname }}</p>
    <p>email: {{ this.email }}</p>
    <p>role: {{ this.role }}</p>
    <p>phone: {{ this.phone }}</p>
    <p>password: {{ this.password }}</p> -->
    <div class="row">
      <div class="col-md-6">
        <input
          v-bind:value="name"
          @input="name = $event.target.value"
          type="text"
          class="form-control mb-3 mt-3"
          placeholder="имя"
        />
        <input
          v-bind:value="lastname"
          @input="lastname = $event.target.value"
          type="text"
          class="form-control mb-3 mt-3"
          placeholder="фамилия"
        />
        <input
          v-bind:value="email"
          @input="email = $event.target.value"
          type="text"
          class="form-control mb-3 mt-3"
          placeholder="email"
        />
      </div>
      <div class="col-md-6">
        <input
          v-bind:value="phone"
          @input="phone = $event.target.value"
          type="text"
          class="form-control mb-3 mt-3"
          placeholder="номер телефона"
        />
        <select
          class="form-select"
          aria-label="Выберите роль пользователя"
          v-bind:value="role"
          @input="role = $event.target.value"
        >
          <option disabled value="">изменить роль</option>
          <option>admin</option>
          <option>superadmin</option>
          <option>guest</option>
        </select>
        <div class="user_role_text">
          <strong> На данный момент роль пользователя:</strong>
          <div>
            {{ this.userUpdateRole }}
          </div>
        </div>
        <!-- <input
          v-bind:value="userUpdateRole"
          @input="role = $event.target.value"
          type="text"
          class="form-control mb-3 mt-3"
          placeholder="статус"
        /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button
          @click.prevent="deleteUser(this.id)"
          class="btn btn-dark my_btn"
        >
          Удалить пользователя
        </button>
      </div>
      <div class="col-md-6">
        <button
          @click.prevent="updateUser(this.id)"
          class="btn btn-dark my_btn"
        >
          Изменить пользователя
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>

.user_role_text {
  margin: 10px 0 10px 0;
}
.btn {
  border-radius: 0;
}
.my_btn {
  margin-top: 20px;
}
</style>

<script>
import UserService from "../Services/UserService";

export default {
  props: {
    userUpdateName: {
      type: String,
      defoult: null,
    }, //Сделать чтобы значения принимались в жругих компонентах
    userUpdateLastname: {
      type: String,
      defoult: null,
    }, //Сделать чтобы значения принимались в жругих компонентах
    userUpdateEmal: {
      type: String,
      defoult: null,
    }, //Сделать чтобы значения принимались в жругих компонентах
    userUpdatePhone: {
      type: String,
      defoult: null,
    }, //Сделать чтобы значения принимались в жругих компонентах
    userUpdateRole: {
      type: String,
      defoult: null,
    }, //Сделать чтобы значения принимались в жругих компонентах
    userUpdatePassword: {
      type: String,
      defoult: null,
    }, //Сделать чтобы значения принимались в жругих компонентах
    userID_for_update: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      name: this.userUpdateName,
      lastname: this.userUpdateLastname,
      email: this.userUpdateEmal,
      phone: this.userUpdatePhone,
      role: this.userUpdateRole,
      password: this.userUpdatePassword,
      id: this.userID_for_update,
    };
  },
  methods: {
    async updateUser(userID) {
      try {
        console.log(
          this.name,
          this.lastname,
          this.email,
          this.phone,
          this.role,
          this.password,
          userID
        );
        this.users = await UserService.updateThisUser(
          userID,
          this.name,
          this.lastname,
          this.email,
          this.password,
          this.phone,
          this.role
        );
      } catch (e) {
        alert(e.massege);
      }
    },
    async deleteUser(id) {
      try {
        console.log(id);
        await UserService.deleteThisUser(id);
      } catch (e) {
        alert(e.massage);
      }
    },
  },
};
</script>