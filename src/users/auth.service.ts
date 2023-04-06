import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(email: string, password: string, admin: boolean) {
    //see if email is in use
    const users = await this.usersService.find(email);

    if (users.length) {
        throw new BadRequestException("email in use");
    }

    //generate salt
    const salt = randomBytes(8).toString("hex");

    //hash the salt and the password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    //join the hashed result and the salt together
    const result = salt + "." + hash.toString("hex");

    //create a new user and save
    const user = await this.usersService.create(email, result, admin);

    //return the user
    return user;
    }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = { email, password: pass };
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async signIn(email: string, password: string) {

    const [user] = await this.usersService.find(email);
    if(!user){
        throw new NotFoundException("User not found");
    }

    const [salt, storedHash] = user.password.split(".");

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if(storedHash !== hash.toString("hex")){
        throw new BadRequestException("Invalid password");
    }
    
    return user;
  }
}