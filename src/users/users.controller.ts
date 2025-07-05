import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './DTOs/update-user.dto';
import { CreateUserDTO } from './DTOs/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    @Post()
    createUser(@Body(ValidationPipe) user: CreateUserDTO) {
        return this.usersService.createUser(user);
    }
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUser(id);
    }

    @Patch(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body(ValidationPipe) user: UpdateUserDTO,
    ) {
        return this.usersService.updateUser(id, { ...user });
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}
