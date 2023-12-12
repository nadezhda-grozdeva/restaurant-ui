import { getDatabase, ref as dbRef, onValue } from "firebase/database";

const firebaseDatabase = getDatabase();

export async function apiGetRequest(query) {
    const db = dbRef(firebaseDatabase, query);
    let result;

    await new Promise(resolve => {
        return onValue(db, (snapshot) => {
            if (snapshot.val()) {
                result = snapshot.val();
                resolve('done')
            }
        })
    })
    return result
}