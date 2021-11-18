<template>
  <div
    class="modal_window"
    id="modalWondow"
    v-if="show"
    @click.stop="hideWindow"
  >
    <div @click.stop class="modal_window_content">
      <div class="update_user">
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
        <updateUserFormComponent
          v-model:userID_for_update="update_userID"
          v-model:userUpdateName="userUpdateName"
          v-model:userUpdateLastname="userUpdateLastname"
          v-model:userUpdateEmal="userUpdateEmal"
          v-model:userUpdatePhone="userUpdatePhone"
          v-model:userUpdateRole="userUpdateRole"
          v-model:userUpdatePassword="userUpdatePassword"
        />
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
import updateUserFormComponent from "@/components/updateUserForm.vue";
export default {
  name: "modalWindow",
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

    update_userID: {
      type: Number,
      defoult: null,
    },
    show: {
      type: Boolean,
      defoult: false,
    },
  },
  methods: {
    hideWindow() {
      this.$emit("update:show", false);
      this.$parent.fetchUsers();
    },
  },
  components: {
    updateUserFormComponent,
  },
};
</script>