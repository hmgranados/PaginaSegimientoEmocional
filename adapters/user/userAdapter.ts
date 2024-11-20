import {UserModel, userBackend} from "../../models";

export const userAdapter = (user: userBackend): UserModel | undefined => {
    try {
        const userM: UserModel = {
            id: Number(user.jti),
            role: {id: user.role.id, name: user.role.name},
            email: user.sub,
            name:  user.username,
        };

        return userM;
    }catch (error){
        console.log(error)
    }
}