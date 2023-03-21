import constants from "../const";

export const setUser = (userData) => {
    localStorage.setItem(constants.storageUserKey, JSON.stringify(userData));
}

export const removeUser = () => {
    localStorage.removeItem(constants.storageUserKey);
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem(constants.storageUserKey));
}
