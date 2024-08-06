import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve items for a specific user
export async function getItems(userId) {
    const items = [];
    const q = query(collection(db, 'users', userId, 'items'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return items;
}

// Function to add a new item for a specific user
export async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, 'users', userId, 'items'), item);
    return docRef.id;
}