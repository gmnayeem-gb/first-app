import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";

import { UsersService } from "src/users/users.service";

export class LocalStrategy extends PassportStrategy (Strategy) {
    constructor (private readonly usersService: UsersService) {
        super();
    }
}