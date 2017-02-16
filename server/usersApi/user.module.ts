export class User{
   public id: number;
   public name: string;
   public lastname: string;
   public picture: string;     
}

export interface UserInterface{
       getAllUsers(): Array<User>;
       getRandomUser(): User;
      // getUserById(userid:number): User;
      getUserById(userId: number): User;

       addUser(user: User):void;
       writeFile(): void;
}
