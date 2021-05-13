import * as firebase from 'firebase'

export async function updateDocument (item){

    const userUID = await firebase.auth().currentUser.uid
    await firebase.firestore().collection("users").doc(userUID).collection(item.type).doc(item.id)
        .update({name: item.name, desc: item.desc, seen: item.seen})
        .catch((e)=>console.log(e.message))

}