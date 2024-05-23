<template>
  <div class="container-fluid mt-2">
    <div class="row mt-5">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-header">Form Login</div>
          <form @submit.prevent="handleLogin">
            <div class="card-body">
              <div class="mb-2">
                <label class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  v-model="formInput.username"
                />
              </div>
              <div class="mb-2">
                <label class="form-label">password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder=""
                  v-model="formInput.password"
                />
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-danger btn-sm btn-w-100">Cancel</button>
              <button
                type="submit"
                class="btn btn-primary btn-sm ms-2 btn-w-100"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formInput: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async handleLogin() {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/login",
          this.formInput
        );
        console.log("User added:", response.data);
        this.$router.push({ name: "users" });
      } catch (error) {
        console.error(
          "Error adding user:",
          error.response?.message || error.message
        );
      }
    },
  },
};
</script>

<style></style>
