import * as firebase from 'firebase';
import * as admin from 'firebase-admin';

let serviceAccount = require('../../firebaseAdmin.json');

export async function loadFirestore(carparks: any[]) {
    const app = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://learned-aria-266217.firebaseio.com"
    });

    let db = admin.firestore();

    for(const carpark of carparks) {
        let docRef = await db.collection('carparks').doc(carpark.uuid);

        await docRef.set(carpark);
    }

    return db;
}
