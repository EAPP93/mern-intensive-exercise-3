import { userEntity } from '../entities/User.entity'
import { LogError } from 'src/utils/logger'

// CRUD
/**
 * Method to obtain all Users from collection "Users" in Mongo Server
 */
export const GetAllUsers = async () => {
    try {
        const userModel = userEntity()

        // search all users
        return await userModel.find({ isDelete: false })
    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`)
    }
}

// TODO:
// - Get User by ID
// - Get User by Email
// - Delete User by ID
// - Create New User
// - Update User by ID
