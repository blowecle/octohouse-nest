import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repo: Repository<User>){}
    
    async find(email: string) {
        return await this.repo.find({ where: { email } });
    }

    async findOneBy({id: id}) {
        if(!id){
            return null;
        }
        return await this.repo.findOneBy({ id });
    }

    async create(email: string, password: string, admin: boolean){
        const user = this.repo.create({email, password, admin});
    
        return await this.repo.save(user);
    }

    async update(id: number, attrs: Partial<User>){
        const user = await this.findOneBy({id});

        if(!user){
            throw new NotFoundException('User not found');
        }

        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number){
        const user = await this.findOneBy({id});
        
        if(!user){
            throw new NotFoundException('User not found');
        }

        return this.repo.remove(user);
    }
}
