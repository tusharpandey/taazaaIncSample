import { deleteUserListing, getUserListingDataFromCloud, getUserListingDataFromDatabase, writeUserListing, readUserDetail } from '../data/Repository'
import { checkInternetConnectivity } from '../data/CloudRepository/network/Network'
import { readUserDataInDB } from '../data/DBRepository/module/GetDataFromDBResouce'

export async function getUserListing(requestData) {
    let isNetworkPresent = await checkInternetConnectivity()
    let response = isNetworkPresent ? await getUserListingDataFromCloud(requestData) : await getUserListingDataFromDatabase()
    if (isNetworkPresent) {
        await deleteUserListing()
        let results = response.results
        await writeUserListing(results)
        response = await getUserListingDataFromDatabase()
    }
    return response
}

export async function readUserDetailFromListing(requestData) {
    let response = await readUserDetail(requestData)
    return response
}