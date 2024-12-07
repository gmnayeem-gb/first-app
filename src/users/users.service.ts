import { Injectable } from "@nestjs/common";
import { User } from "./entity/user.entity";

@Injectable()
export class UsersService {
    public users: User[] = [
        {
            username: "john",
            email: "john@example.com",
            password: "12345",
            age: 30
        },
        {
            username: "jane",
            email: "jane@example.com",
            password: "54321",
            age: 28
        }
    ];

    getUserByUsername(username:string):any {
        return this.users.find(u => u.username === username);
    }
}