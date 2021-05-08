import { deleteUserListing, getUserListingDataFromCloud, getUserListingDataFromDatabase, writeUserListing } from '../data/Repository'
import { checkInternetConnectivity } from '../data/CloudRepository/network/Network'

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