let jsonFile=require('jsonfile');

import { User, UserInterface } from './user.module';

export class UsersApi implements UserInterface{
    
    private _allUsers: Array<User>;
    private _filename: string;

    constructor(){        
        //production path
        this._filename='./server/usersApi/users.json';
        //to use with usersAPITest.ts
        //this._filename='./users.json';

        this._allUsers=jsonFile.readFileSync(this._filename);      
    }    

    public getAllUsers(): Array<User>{
       return this._allUsers;
    }
   
    public getRandomUser(): User{
       return this._allUsers[Math.ceil(Math.random()*this._allUsers.length)];
    }

    public getUserById(userId: number): User
    {
        let _filteredUser=this._allUsers.filter((user)=>{
             return user.id==userId;        
        });        
                
        if(_filteredUser.length > 0){        
            return _filteredUser[0];
        }
        else{
            return null;
        }
    }

    public addUser(user: any):boolean{
        console.log("From addUser: " + user.id);

        if(this.getUserById(user.id)==null){
            this._allUsers.push(user);
            jsonFile.writeFileSync(this._filename, this._allUsers);
            return true;
        }
        else{
            //user with the same userid already exists
            return false;
        }
    }

    public deleteUser(userId: number): boolean{
        if(this.getUserById(userId)==null)
        {
            //user with the specified id does not exists
            return false;
        }
    
        let _remainUsers = this._allUsers.filter((user)=>{
            return user.id!=userId;
        });
       
        jsonFile.writeFileSync(this._filename, _remainUsers);

        return true;
    }   
}

