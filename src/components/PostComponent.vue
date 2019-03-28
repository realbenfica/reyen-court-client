<template>
  <div class="container">
    <h1>Reynen Court permissions/roles</h1>
    <div class="create-permission">
      <label for="create-permission">Set your permissions: </label>
      <input type="resource_name" id="create-permission" v-model="resource_name" placeholder="Add resource">
      <input type="module_name" id="create-permission" v-model="module_name" placeholder="Add module">
      <input type="permission_name" id="create-permission" v-model="permission_name" placeholder="Add permission">
      <button v-on:click="createPermission">submit</button>
    </div>
    <hr>
    <p class="error" v-if="error"> {{error}}</p>
    <div class="permissions-container">
      <div class="permission"
        v-for="(permission, index) in permissions"
        v-bind:item="permission"
        v-bind:index="index"
        v-bind:key="permission._id"
      >
        <p class="text"> {{permission.resource_name}}</p>
        <p class="text"> {{permission.module_name}}</p>
        <p class="text"> {{permission.permission_name}}</p>
    </div>
    </div>
  </div>
</template>

<script>
import PermissionService from '../PermissionService';

export default {
  name: 'PermissionComponent',
  data() {
    return {
      permissions: [],
      error: '',
      resource_name: '',
      module_name: '',
      permission_name: ''
    }
  },
  async created() {
    try {
      this.permissions = await PermissionService.getPermissions();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPermission() {
      console.log("something")
      await PermissionService.insertPermission(this.resource_name, this.module_name, this.permission_name)
      this.permissions = await PermissionService.getPermissions();
    }
  }
}
</script>

<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;

}

div.permission {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
