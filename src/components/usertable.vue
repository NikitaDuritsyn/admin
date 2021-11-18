<template>
  <div class="row g-0">
    <div class="col-md-12">
      <div class="user_table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Email</th>
              <th scope="col">Телефон</th>
              <th scope="col">Роль</th>
              <th scope="col">Ред</th>
            </tr>
          </thead>
          <tbody v-for="user in users" v-bind:key="user.id">
            <tr>
              <td>{{ user.name }}</td>
              <td>{{ user.lastname }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.role }}</td>
              <td>
                <button
                  class="btn btn-dark"
                  @click="
                    showWindow(
                      user.id,
                      user.name,
                      user.lastname,
                      user.email,
                      user.phone,
                      user.role,
                      user.password
                    )
                  "
                >
                  ред.
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <modalwindow
        v-model:show="windowVisible"
        v-model:update_userID="userUpdateID"
        v-model:userUpdateName="userUpdateName"
        v-model:userUpdateLastname="userUpdateLastname"
        v-model:userUpdateEmal="userUpdateEmal"
        v-model:userUpdatePhone="userUpdatePhone"
        v-model:userUpdateRole="userUpdateRole"
        v-model:userUpdatePassword="userUpdatePassword"
      />
    </div>
  </div>
</template>

<style scoped>
.btn {
  border-radius: 0;
}
.user_table {
  background-color: white;
  width: 100%;
  padding: 10px;
}
</style>

<script>
import UserService from "../Services/UserService";
import modalwindow from "../components/modalwindow.vue";
export default {
  name: "userTable",
  data() {
    return {
      users: [],
      windowVisible: false,
      userUpdateID: null,
      userUpdateName: "", //Сделать чтобы значения принимались в жругих компонентах
      userUpdateLastname: "", //Сделать чтобы значения принимались в жругих компонентах
      userUpdateEmal: "", //Сделать чтобы значения принимались в жругих компонентах
      userUpdatePhone: "", //Сделать чтобы значения принимались в жругих компонентах
      userUpdateRole: "", //Сделать чтобы значения принимались в жругих компонентах
      userUpdatePassword: "", //Сделать чтобы значения принимались в жругих компонентах
    };
  },
  methods: {
    showWindow(userID, name, lastname, email, phone, role, password) {
      this.windowVisible = true;
      this.userUpdateID = userID;
      this.userUpdateName = name; //Сделать чтобы значения принимались в жругих компонентах
      this.userUpdateLastname = lastname; //Сделать чтобы значения принимались в жругих компонентах
      this.userUpdateEmal = email; //Сделать чтобы значения принимались в жругих компонентах
      this.userUpdatePhone = phone; //Сделать чтобы значения принимались в жругих компонентах
      this.userUpdateRole = role; //Сделать чтобы значения принимались в жругих компонентах
      this.userUpdatePassword = password; //Сделать чтобы значения принимались в жругих компонентах
    },
    async fetchUsers() {
      try {
        this.users = await UserService.getAllUsers();
      } catch (e) {
        alert(e.massege);
      }
    },
  },
  components: {
    modalwindow,
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>