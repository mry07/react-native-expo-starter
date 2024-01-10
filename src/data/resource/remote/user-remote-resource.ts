import UserEntity from "../../../core/entities/user-entity"

type UserRemoteResource = {
    getUsers: () => Promise<UserEntity[]>
}

export default UserRemoteResource