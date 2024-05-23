<template>
  <div class="container-fluid mt-2">
    <div class="card">
      <div class="card-header">Add User</div>
      <form @submit.prevent="handleSubmit">
        <div class="card-body">
          <div class="mb-2">
            <label class="form-label"> Email </label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
              v-model="formInput.email"
            />
          </div>
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
              type="text"
              class="form-control"
              placeholder=""
              v-model="formInput.password"
            />
          </div>
          <div class="mb-2">
            <label class="form-label">Fullname</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              v-model="formInput.fullname"
            />
          </div>
        </div>
        <div class="card-footer">
          <router-link
            :to="{ name: 'users' }"
            class="btn btn-danger btn-sm btn-w-100"
            >Back</router-link
          >
          <button type="submit" class="btn btn-primary btn-sm ms-2 btn-w-100">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formInput: {
        email: "",
        username: "",
        password: "",
        fullname: "",
      },
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/user",
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

<style>
.btn-w-100 {
  width: 100px;
}
</style>
