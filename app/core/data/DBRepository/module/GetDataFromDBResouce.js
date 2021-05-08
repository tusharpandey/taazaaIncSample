import { writeUsers, readUsers } from "../database/Users"

export function getDataFromDB() {
    return readUsers()
}

export function writeDataInDB(requestData) {
    return writeUsers(requestData)
}