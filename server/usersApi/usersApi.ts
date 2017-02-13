let jsonFile=require('jsonfile');

import { User, UserInterface } from './user.module';

export class Users implements UserInterface{
    
    private _allUsers: User[];
    private _filename: string;

    constructor(userFile: string){

        this._filename=userFile; //'./server/js/usersAPI/users.json';
        this._allUsers=jsonFile.readFileSync(this._filename);

    }    

    public getAllUsers(): User[]{
       return this._allUsers;
    }
   
    public getRandomUser(): User{
       return this._allUsers[Math.ceil(Math.random()*this._allUsers.length)];
    }

    private _compare(element:User){
        if( element.id==this ){
            return true;
        }        
        else return false; 
    }

    public getUserId(userId: number): User{        
       return this._allUsers.find(this._compare, userId);       
    }

    public addUser(user: User):void{    
        if(!this.getUserId(user.id)){
            this._allUsers.push(user);
            this.writeFile();
        }
        else{
            console.log("Duplicate id entry...");
        }
    }

    public writeFile():void{
        jsonFile.writeFileSync(this._filename, this._allUsers);
    }
}

