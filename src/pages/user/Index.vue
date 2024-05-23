<template>
  <div class="container-fluid mt-2">
    <div class="card">
      <div class="card-header title-card">
        <div>Users</div>
        <router-link :to="{ name: 'addUser' }" class="btn btn-success btn-sm"
          >Add +</router-link
        >
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Username</th>
              <th>Fullname</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in users.data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.fullname }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'editUser',
                    params: { id: item._id },
                  }"
                  class="btn btn-outline-secondary btn-sm"
                >
                  Edit
                </router-link>
                <button
                  class="btn btn-outline-danger btn-sm ms-2"
                  v-on:click="deleteUser(item._id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  // setup() {
  //   let users = ref([]);

  //   const getUser = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/api/users");
  //       users.value = response.data;
  //     } catch (error) {
  //       console.log(error.response?.message || error.message);
  //     }
  //   };

  //   onMounted(async () => {
  //     getUser();
  //   });

  //   return {
  //     users,
  //   };
  // },

  // methods: {
  //   async deleteUser(id) {
  //     try {
  //       await axios.delete(`http://localhost:3001/api/user/${id}`);
  //       this.users;
  //     } catch (error) {
  //       console.log(error.response?.message || error.message);
  //     }
  //   },
  // },

  data() {
    return {
      users: [],
    };
  },

  methods: {
    async getUser() {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        this.users = response.data;
      } catch (error) {
        console.log(error.response?.message || error.message);
      }
    },

    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3001/api/user/${id}`);
        this.getUser();
      } catch (error) {
        console.log(error.response?.message || error.message);
      }
    },
  },

  mounted() {
    this.getUser();
  },
};
</script>

<style>
.title-card {
  display: flex;
  justify-content: space-between;
}
</style>
