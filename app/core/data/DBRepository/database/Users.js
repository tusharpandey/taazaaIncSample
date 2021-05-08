import { UserSchema, mapUserResponse } from './Schema'

const Realm = require('realm');
const Schema = [UserSchema];

export function writeUsers(data) {
    Realm.open({ schema: Schema })
        .then(realm => {
            console.log("TO WRITE : " + JSON.stringify(data));
            let results = data
            for (let i = 0; i < results.length; i++) {
                realm.write(() => {
                    realm.create(UserSchema.name, mapUserResponse(results[i]));
                })
            }
            realm.close()
        })
        .catch(error => {
            console.log('realm guest write error: ' + error)
        })
}

export function readUsers() {
    return new Promise((resolve, rejects) => {
        Realm.open({ schema: Schema })
            .then(realm => {
                let user = realm.objects(UserSchema.name)
                console.log("TO READ : " + JSON.stringify(user));
                resolve(user)
            })
            .catch(error => {
                console.log('realm user_db read error: ' + error)
                rejects(undefined)
            })
    })
}

export function deleteUser() {
    Realm.open({ schema: Schema })
        .then(realm => realm.write(() => {
            let user = realm.objects(UserSchema.name);
            realm.delete(user);
        }))
        .catch(error => {
            console.log('realm delete error: ' + error)
        })
}