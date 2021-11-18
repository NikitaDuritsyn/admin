<template>
  <div
    class="modal_window"
    id="modalWondow"
    v-if="show"
    @click.stop="hideWindow"
  >
    <div @click.stop class="modal_window_content">
      <div class="update_user">
        <div class="row">
          <div>userId: {{ this.userID_for_update }} _||_ {{ this.userId }}</div>
          <div>
            userName: {{ this.userUpdateName }} _||_ {{ this.userName }}
          </div>
          <div>
            userLastname: {{ this.userUpdateLastname }} _||_
            {{ this.userLastname }}
          </div>
          <div>
            userEmail: {{ this.userUpdateEmal }} _||_ {{ this.userEmail }}
          </div>
          <div>
            userPhone: {{ this.userUpdatePhone }} _||_ {{ this.userPhone }}
          </div>
          <div>
            userRole: {{ this.userUpdateRole }} _||_ {{ this.userRole }}
          </div>
          <div>
            userPassword: {{ this.userUpdatePassword }} _||_
            {{ this.userPassword }}
          </div>
        </div>
        <div class="row g-0 align-items-end">
          <div class="col-md-11">
            Изменять/удалять пользователя может только superadmin
          </div>
          <div class="col-md-1">
            <div class="hide_window">
              <svg
                @click.stop="hideWindow"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
        </div>

        <form action="">
          <div class="row">
            <div class="col-md-6">
              <input
                v-bind:value="userUpdateName"
                @input="userName = $event.target.value"
                type="text"
                class="form-control mb-3 mt-3"
                placeholder="имя"
              />
              <input
                v-bind:value="userUpdateLastname"
                @input="userLastname = $event.target.value"
                type="text"
                class="form-control mb-3 mt-3"
                placeholder="фамилия"
              />
              <input
                v-bind:value="userUpdateEmal"
                @input="userEmail = $event.target.value"
                type="text"
                class="form-control mb-3 mt-3"
                placeholder="email"
              />
            </div>
            <div class="col-md-6">
              <input
                v-bind:value="userUpdatePhone"
                @input="userPhone = $event.target.value"
                type="text"
                class="form-control mb-3 mt-3"
                placeholder="номер телефона"
              />
              <select
                class="form-select"
                aria-label="Выберите роль пользователя"
                v-bind:value="userUpdateRole"
                @input="userRole = $event.target.value"
              >
                <option disabled value="">изменить роль</option>
                <option>admin</option>
                <option>superadmin</option>
                <option>guest</option>
              </select>

              <div class="user_role_text">
                <strong> На данный момент роль пользователя:</strong>
                <div>
                  {{ this.userRole }}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button
                @click.prevent="deleteUser(this.userID_for_update)"
                class="btn btn-dark my_btn"
              >
                Удалить пользователя
              </button>
            </div>
            <div class="col-md-6">
              <button
                @click.prevent="updateUser(this.userID_for_update)"
                class="btn btn-dark my_btn"
              >
                Изменить пользователя
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide_window :hover {
  cursor: pointer;
  border: solid 0.5px;
  border-radius: 50%;
}
.hide_window {
  cursor: pointer;
}
.user_role_text {
  margin: 10px 0 10px 0;
}
.modal_window {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modal_window_content {
  margin: auto;
  background-color: rgb(255, 255, 255);
  min-height: 50px;
  min-width: 300px;
}
.update_user {
  margin: 30px;
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
    },
    userUpdateLastname: {
      type: String,
      defoult: null,
    },
    userUpdateEmal: {
      type: String,
      defoult: null,
    },
    userUpdatePhone: {
      type: String,
      defoult: null,
    },
    userUpdateRole: {
      type: String,
      defoult: null,
    },
    userUpdatePassword: {
      type: String,
      defoult: null,
    },
    userID_for_update: {
      type: Number,
      default: null,
    },
    show: {
      type: Boolean,
      defoult: false,
    },
  },

  data() {
    return {
      userName: this.userUpdateName,
      userLastname: this.userUpdateLastname,
      userEmail: this.userUpdateEmal,
      userPhone: this.userUpdatePhone,
      userRole: this.userUpdateRole,
      userPassword: this.userUpdatePassword,
      userId: this.userID_for_update,
    };
  },
  methods: {
    hideWindow() {
      this.$emit("update:show", false);
      this.$parent.fetchUsers();
    },
    // async updateUser(userID) {
    //   try {
    //     this.users = await UserService.updateThisUser(
    //       userID,
    //       this.name,
    //       this.lastname,
    //       this.email,
    //       this.password,
    //       this.phone,
    //       this.role
    //     );
    //   } catch (e) {
    //     alert(e.massage);
    //   }
    // },
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
