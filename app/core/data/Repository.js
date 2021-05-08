import { getDataFromDB, writeDataInDB } from './DBRepository/module/GetDataFromDBResouce'
import { getDataFromApi } from './CloudRepository/module/GetDataFromNetwork'
import { checkInternetConnectivity } from './CloudRepository/network/Network'

export async function getUserListingData(requestData) {
    let isNetworkPresent = await checkInternetConnectivity()
    return isNetworkPresent ? getDataFromApi(requestData) : getDataFromDB()
}

export async function writeUserListing(requestData) {
    await writeDataInDB(requestData)
}
