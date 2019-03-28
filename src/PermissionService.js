import axios from 'axios';

const url = 'http://localhost:5000/api/permissions'

class PermissionService {
    //Get Permissions
    static getPermissions() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(permission => ({
                        ...permission,
                     }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    //Create Permission
    static insertPermission(resource_name, module_name, permission_name) {
        return axios.permission(url, {
            resource_name, 
            module_name, 
            permission_name
        });
    }
}

export default PermissionService