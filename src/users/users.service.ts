import { Injectable } from "@nestjs/common";
import { User } from "./entity/user.entity";

@Injectable()
export class UsersService {
    public users: User[] = [
        {
            username: "john",
            email: "john@example.com",
            password: "12345",
            age: 30,
            role: "user"
        },
        {
            username: "jane",
            email: "jane@example.com",
            password: "12345",
            age: 28,
            role: "admin"
        }
    ];

    getUserByUsername(username:string):any {
        return this.users.find(u => u.username === username);
    }
}