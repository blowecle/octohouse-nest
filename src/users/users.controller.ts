import { Body, 
  Controller, 
  Post, 
  Get, 
  Patch, 
  Param, 
  Query, 
  Delete, 
  Session, 
  NotFoundException, 
  UseInterceptors, 
  UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dtos/auth-user.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './entities/users.entity';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';

//applies the interceptor to all routes in this controller
//altertnatively, you can apply the interceptor to a specific route
@Serialize(UserDto)
@UseInterceptors(CurrentUserInterceptor)
@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
    ) {}
  
  // @Get('/whoami')
  // async whoAmI(@Session() session: any) {
  //   if(!session.userId){
  //     return null;
  //   }
  //   const user = await this.usersService.findOneBy({id: session.userId});
  //   return user;
  // }

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signUp(body.email, body.password, body.admin);
    session.userId = user.id;

    return user;
  }

  @Post('/signin')
  async signIn(@Body() body: AuthUserDto, @Session() session: any) {
    const user = await this.authService.signIn(body.email, body.password);
    session.userId = user.id;
    
    return user;
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOneBy({id: parseInt(id)});
    if(!user){
      throw new NotFoundException('User not found');
    }
    return user;
  }
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: Partial<UpdateUserDto>) {
    return this.usersService.update(parseInt(id), body);
  }

}
