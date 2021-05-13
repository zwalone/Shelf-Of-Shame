import * as firebase from 'firebase'

export async function addToCollection (collectionName, item){
    const userUID = await firebase.auth().currentUser.uid
    await firebase.firestore().collection("users").doc(userUID).collection(collectionName).add(item)
}