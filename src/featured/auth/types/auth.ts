import {type User} from "firebase/auth"

export type Auth = {
    user: User | null;
    loading: boolean;
    loginUser: () => Promise<void>;
    logOutUser: () => Promise<void>;
};