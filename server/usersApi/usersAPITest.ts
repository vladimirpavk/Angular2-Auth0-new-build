import { UsersApi } from './usersApi';

let uapi=new UsersApi();
console.log(uapi.getAllUsers());

uapi.deleteUser(3);

