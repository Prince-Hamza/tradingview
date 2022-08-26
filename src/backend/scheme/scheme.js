import schemeJson from './scheme.json'
import firebase from 'firebase/compat/app'
import database from 'firebase/compat/database'

export const setScheme = async () => {
    await firebase.database().ref(`/users/abc123/`).update({ ...schemeJson.user })
    await firebase.database().ref(`/groups/group123/`).update({ ...schemeJson.group })
}
