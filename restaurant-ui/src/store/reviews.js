import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { getDatabase, ref as dbRef, onValue } from "firebase/database";

export const useReviewsStore = defineStore('reviews', () => {

    // *** STATE ***
    const reviews = ref([]);
 
    // *** GETTERS ***

    // *** ACTIONS ***

    // *** LIFECYCLE HOOKS ***
    onMounted(() => {
        const firebaseDatabase = getDatabase();
        const db = dbRef(firebaseDatabase, 'reviewsHome');
        onValue(db, (snapshot) => {
            reviews.value = snapshot.val();
        });
    })

    // *** EXPORT ***

    return {
        reviews
    }
  })