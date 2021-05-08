import { writeUsers, readUsers, deleteUser, readUserDetail } from "../database/Users"

export function getDataFromDB() {
    return readUsers()
}

export function writeDataInDB(requestData) {
    return writeUsers(requestData)
}

export function deleteDataInDB() {
    return deleteUser()
}

export function readUserDataInDB(requestData) {
    return readUserDetail(requestData)
}