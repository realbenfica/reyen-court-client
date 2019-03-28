<template>
  <div class="container">
    <h1>Reynen Court permissions/roles</h1>
    
    <div class="create-permission">
      <label for="create-permission">Set your permissions: </label>
      <input type="resource_name" id="create-permission" v-model="resource_name" placeholder="Add Resource Name">
      <input type="module_name" id="create-permission" v-model="module_name" placeholder="Add Module Name">
      <input type="permission_name" id="create-permission" v-model="permission_name" placeholder="Add Permission Name">
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
        <p class="text"> Resource: {{permission.resource_name}}</p>
        <p class="text"> Module: {{permission.module_name}}</p>
        <p class="text"> Permission: {{permission.permission_name}}</p>
    </div>
    </div>
    <hr>
    <div class="create-role">
      <label for="create-role">Set your role: </label>
      <input type="role_name" id="create-role" v-model="role_name" placeholder="Add Role Name">
      <input type="permission_name" id="create-permission" v-model="permission_name" placeholder="Add Permission Name">
      <button v-on:click="createRole">submit</button>
    </div>
    <hr>
    <p class="error" v-if="error"> {{error}}</p>
    <div class="roles-container">
      <div class="role"
        v-for="(role, index) in roles"
        v-bind:item="role"
        v-bind:index="index"
        v-bind:key="role._id"
      >
        <p class="text"> Role: {{role.role_name}}</p>
        <p class="text"> Permission: {{role.permission_name}}</p>
    </div>
    </div>

  </div>
</template>

<script>
import PermissionService from '../PermissionService';
import RoleService from '../RoleService';

export default {
  name: 'PermissionComponent',
  data() {
    return {
      permissions: [],
      roles: [],
      error: '',
      resource_name: '',
      module_name: '',
      permission_name: '',
      role_name: ''
    }
  },
  async created() {
    try {
      this.permissions = await PermissionService.getPermissions();
      this.roles = await RoleService.getRoles();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPermission() {
      await PermissionService.insertPermission(this.resource_name, this.module_name, this.permission_name)
      this.permissions = await PermissionService.getPermissions();
    },

    async createRole() {
      await RoleService.insertRole(this.role_name, this.permission_name)
      this.roles = await RoleService.getRoles();
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
  padding: 5px 5px 10px 5px;
  margin-bottom: 15px;
}

div.role {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 5px 5px 10px 5px;
  margin-bottom: 15px;
}

p.text {
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
