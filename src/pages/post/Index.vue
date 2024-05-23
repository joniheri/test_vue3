<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link
          :to="{ name: 'addPost' }"
          class="btn btn-primary btn-sm ronded"
          >Add</router-link
        >
      </div>
      <div class="card">
        <div class="card-header">Data Post</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th>Email</th>
                <th>Username</th>
                <th>Fullname</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in posts.data" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.fullname }}</td>
                <td>
                  <router-link
                    :to="{
                      name: 'post.adit',
                      params: { id: 1 },
                    }"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    Edit
                  </router-link>
                  <button
                    :to="{
                      name: 'post.adit',
                      params: { id: 1 },
                    }"
                    class="btn btn-outline-danger btn-sm ms-2"
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
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let posts = ref([]);

    onMounted(() => {
      axios
        .get("http://localhost:3001/api/users")
        .then((result) => {
          posts.value = result.data;
        })
        .catch((error) => {
          console.log(error.response.message);
        });
    });

    return {
      posts,
    };
  },
};
</script>

<style></style>
