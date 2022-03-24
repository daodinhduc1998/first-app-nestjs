import { IntersectionType } from '@nestjs/swagger';
import { CreateUserDto } from "./create-user.dto";
import { UpdateUserDto } from "./update-user.dto";

// class ListAllEntities extends IntersectionType(
//     CreateUserDto,
//     UpdateUserDto,
// ) {
//     readonly limit: number;
// }
class ListAllEntities extends CreateUserDto {
    readonly limit: number;
}




export { CreateUserDto, UpdateUserDto, ListAllEntities }

