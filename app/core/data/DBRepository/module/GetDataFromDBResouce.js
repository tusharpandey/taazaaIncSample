import { writeUsers, readUsers, deleteUser } from "../database/Users"

export function getDataFromDB() {
    return readUsers()
}

export function writeDataInDB(requestData) {
    return writeUsers(requestData)
}

export function deleteDataInDB() {
    return deleteUser()
}