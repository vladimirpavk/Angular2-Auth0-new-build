let jsonFile=require('jsonfile');

import { User, UserInterface } from './user.module';

export class UsersApi implements UserInterface{
    
    private _allUsers: Array<User>;
    private _filename: string;

    constructor(){

        this._filename='./server/usersApi/users.json';
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
        
        
        console.log('Filtered : '+ _filteredUser.length);

        if(_filteredUser.length > 0){        
            return _filteredUser[0];
        }
        else{
            return null;
        }
    }

    public addUser(user: User):void{    
        if(!this.getUserById(user.id)){
            this._allUsers.push(user);
            this.writeFile();
        }
        else{
            console.log("Duplicate id entry...");
        }
    }

    public deleteUser(userId: number): void{
       let _remainUsers = this._allUsers.filter((user)=>{
           return user.id!=userId;
       });
       console.log(_remainUsers);
       jsonFile.writeFileSync(this._filename, _remainUsers);
    }

    public writeFile():void{
        jsonFile.writeFileSync(this._filename, this._allUsers);
    }
}

