import { readUsers } from '../data/DBRepository/database/Users'
import { getUserListingData, writeUserListing } from '../data/Repository'

export async function getUserListing(requestData) {
    let userList = await getUserListingData(requestData)
    await writeUserListing(userList)
    await readUsers()
    return userList
}