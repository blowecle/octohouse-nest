import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  
  @Column({nullable: true, default: false})
  admin: boolean;

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id: ', this.id);
  }

  @AfterRemove() 
  logRemove(){
    console.log('Removed user with id: ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated user with id: ', this.id);
  }
}