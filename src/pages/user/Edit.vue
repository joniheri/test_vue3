<template>
  <div class="container-fluid mt-2">
    <div class="card">
      <div class="card-header">Edit User</div>
      <div class="card-body">
        <div class="mb-2">
          <label class="form-label"> Email </label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-2">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" placeholder="" />
        </div>
        <div class="mb-2">
          <label class="form-label">password</label>
          <input type="text" class="form-control" placeholder="" />
        </div>
        <div class="mb-2">
          <label class="form-label">Fullname</label>
          <input type="text" class="form-control" placeholder="" />
        </div>
      </div>
      <div class="card-footer text-right">
        <router-link
          :to="{ name: 'users' }"
          class="btn btn-danger btn-sm btn-w-100"
          >Back</router-link
        >
        <button class="btn btn-primary btn-sm ms-2 btn-w-100">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
