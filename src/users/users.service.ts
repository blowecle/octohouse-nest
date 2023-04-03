import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repo: Repository<User>){}
    
    async find() {
        return await this.repo.find();
    }

    async findOne(id: number) {
        return await this.repo.findOneBy({ id });
    }

    async create(email: string, password: string){
        const user = this.repo.create({email, password});
    
        return await this.repo.save(user);
    }

    async update(id: number, attrs: Partial<User>){
        const user = await this.findOne(id);

        if(!user){
            throw new Error('User not found');
        }

        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number){
        const user = await this.findOne(id);
        
        if(!user){
            throw new Error('User not found');
        }

        return this.repo.remove(user);
    }
}
