import * as Types from "./Types";

export const userLoginFunc = (data)=>({
    type:Types["USER_LOGIN_TYPE"],
    data,
})