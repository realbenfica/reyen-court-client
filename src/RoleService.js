import axios from 'axios';

const url = 'http://localhost:5000/api/roles'

class RoleService {
    //Get Roles
    static getRoles() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(role => ({
                        ...role,
                     }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    //Create Role
    static insertRole(role_name, permission_name) {
        return axios.post(url, {
            role_name, 
            permission_name
        });
    }
}

export default RoleService