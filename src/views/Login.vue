<template>
  <div id="login">
    <div class="row row-h">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
            
              v-bind:value="email"
              @input="email = $event.target.value"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-bind:value="password"
              @input="password = $event.target.value"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            href="main"
            type="submit"
            @click.prevent="loginGivToken"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import authService from "../Services/AuthService";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginGivToken() {
      try {
        this.reviews = await authService.login(this.email, this.password);
      } catch (e) {
        alert(e.massege);
      }
    },
  },
};
</script>
