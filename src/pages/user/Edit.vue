<template>
  <div class="container-fluid mt-2">
    <div class="card">
      <div class="card-header">Edit User</div>
      <form @submit.prevent="handleSaveUpdate">
        <div class="card-body">
          <div class="mb-2">
            <label class="form-label"> Email </label>
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
              v-model="user.email"
            />
          </div>
          <div class="mb-2">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              v-model="user.username"
            />
          </div>
          <div class="mb-2">
            <label class="form-label">Fullname</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              v-model="user.fullname"
            />
          </div>
        </div>
        <div class="card-footer text-right">
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
      userId: null,
      user: {
        email: "",
        username: "",
        password: "",
        fullname: "",
      },
    };
  },

  created() {
    this.userId = this.$route.params.id;
  },

  methods: {
    async getUserById() {
      try {
        console.log("Load user data for ID:", this.userId);
        const response = await axios.get(
          "http://localhost:3001/api/user/" + this.userId
        );
        console.log("User data:", response.data);
        this.user = response.data.data;
      } catch (error) {
        error.response?.message || error.message;
      }
    },

    async handleSaveUpdate() {
      try {
        await axios.patch(
          "http://localhost:3001/api/user/" + this.userId,
          this.user
        );
        this.$router.push({ name: "users" });
      } catch (error) {
        console.error(error.response?.message || error.message);
      }
    },
  },

  mounted() {
    this.getUserById();
  },
};
</script>

<style></style>
