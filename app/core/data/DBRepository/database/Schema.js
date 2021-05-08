export const SCHEMA_NAMES = {
    USER: "User",
}

export const SCHEMA_KEYS = {
    UUID: 'uuid',
    GENDER: 'gender',
    NAME: 'name',
    LOCATION: 'location',
    EMAIL: 'email',
    DOB: 'dob',
    PHONE: 'phone',
    PICTURE: 'picture',
}

export const UserSchema = {
    name: SCHEMA_NAMES.USER,
    primaryKey: SCHEMA_KEYS.UUID,
    properties: {
        [SCHEMA_KEYS.UUID]: 'string',
        [SCHEMA_KEYS.GENDER]: 'string',
        [SCHEMA_KEYS.NAME]: 'string',
        [SCHEMA_KEYS.LOCATION]: 'string?',
        [SCHEMA_KEYS.EMAIL]: 'string?',
        [SCHEMA_KEYS.DOB]: 'string?',
        [SCHEMA_KEYS.PHONE]: 'string?',
        [SCHEMA_KEYS.PICTURE]: 'string?',
    }
}

export const mapUserResponse = (response) => {
    return {
        [SCHEMA_KEYS.UUID]: response.login[SCHEMA_KEYS.UUID],
        [SCHEMA_KEYS.GENDER]: response[SCHEMA_KEYS.GENDER],
        [SCHEMA_KEYS.NAME]: response[SCHEMA_KEYS.NAME].title + response[SCHEMA_KEYS.NAME].first + response[SCHEMA_KEYS.NAME].last,
        [SCHEMA_KEYS.LOCATION]: response[SCHEMA_KEYS.LOCATION].state,
        [SCHEMA_KEYS.EMAIL]: response.login[SCHEMA_KEYS.EMAIL],
        [SCHEMA_KEYS.DOB]: response.dob[SCHEMA_KEYS.DOB],
        [SCHEMA_KEYS.PHONE]: response.registered[SCHEMA_KEYS.PHONE],
        [SCHEMA_KEYS.PICTURE]: response.picture[SCHEMA_KEYS.PICTURE],
    }
}

checkForNull = (value) => {
    return value === null ? "" : value
}