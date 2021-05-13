import * as firebase from 'firebase'

export async function deleteDocument (item){
    const userUID = await firebase.auth().currentUser.uid
    await firebase.firestore().collection("users").doc(userUID).collection(item.type).doc(item.id).delete()
        .catch((e)=>console.log(e.message))

}