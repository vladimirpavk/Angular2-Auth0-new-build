export class User{
   public id: number;
   public name: string;
   public lastname: string;
   public picture: string;     
}

export interface UserInterface{
       getAllUsers(): User[];
       getRandomUser(): User;
       getUserId(userid:number): User;

       addUser(user: User):void;
       writeFile(): void;
}
