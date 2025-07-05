import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './DTOs/create-user.dto';
import { UpdateUserDTO } from './DTOs/update-user.dto';

@Injectable()
export class UsersService {
    users = [
        {
            Id: 1,
            Name: 'Alice',
            Age: 18,
        },
        {
            Id: 2,
            Name: 'John',
            Age: 15,
        },
        {
            Id: 3,
            Name: 'Brandy',
            Age: 53,
        },
        {
            Id: 4,
            Name: 'Scarlet',
            Age: 23,
        },
    ];

    getAll() {
        return this.users;
    }

    getUser(id: number) {
        const user = this.users.find((user) => user.Id === id);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    deleteUser(id: number) {
        const deletedUser = this.getUser(id);
        this.users = this.users.filter((user) => user.Id !== id);
        return deletedUser;
    }

    updateUser(id: number, updatedUser: UpdateUserDTO) {
        this.users = this.users.map((user) => {
            if (user.Id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.getUser(id);
    }

    createUser(user: CreateUserDTO) {
        const id = this.users.findLast((x) => x)!.Id + 1;
        const newUser = { Id: id, ...user };
        this.users.push(newUser);
        return newUser;
    }
}
