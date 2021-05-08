import { getDataFromDB, writeDataInDB, deleteDataInDB, readUserDataInDB } from './DBRepository/module/GetDataFromDBResouce'
import { getDataFromApi } from './CloudRepository/module/GetDataFromNetwork'

export async function getUserListingDataFromCloud(requestData) {
    let response = await getDataFromApi(requestData)
    return response
}

export async function getUserListingDataFromDatabase() {
    let response = await getDataFromDB()
    return response
}

export async function writeUserListing(requestData) {
    await writeDataInDB(requestData)
}

export async function deleteUserListing() {
    await deleteDataInDB()
}

export async function readUserDetail(requestData) {
    return await readUserDataInDB(requestData)
}
