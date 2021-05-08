import { readUsers } from '../data/DBRepository/database/Users'
import { getUserListingDataFromCloud, getUserListingDataFromDatabase, writeUserListing } from '../data/Repository'
import { checkInternetConnectivity } from '../data/CloudRepository/network/Network'

export async function getUserListing(requestData) {
    let isNetworkPresent = await checkInternetConnectivity()
    let response = isNetworkPresent ? await getUserListingDataFromCloud(requestData) : await getUserListingDataFromDatabase()
    if (isNetworkPresent) {
        await writeUserListing(response)
    }
    return response
}