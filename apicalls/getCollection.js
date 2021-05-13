import * as firebase from 'firebase'

async function getCollection (collectionName, isSeen)  {

    //doc.data() = all types     doc.id   = name docs
    const userUID = await firebase.auth().currentUser.uid
    const snapshot = await firebase.firestore().collection("users").doc(userUID).collection(collectionName).get()
    const tempDoc = []
    snapshot.docs.map(doc => {
        let item = {id: doc.id, type: collectionName, ...doc.data()}
        if(item.seen == isSeen) tempDoc.push(item)
    })
    // console.log("TEMP ::  " , tempDoc)
    return tempDoc
}

export default getCollection
