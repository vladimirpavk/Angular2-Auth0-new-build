export class User{
   public id: number;
   public name: string;
   public lastname: string;
   public picture: string; 

   constructor(){}    
}

export interface UserInterface{
       getAllUsers(): Array<User>;
       getRandomUser(): User;
       getUserById(userId: number): User;
       addUser(user: User):boolean;
       deleteUser(userId: number): boolean;    
}
