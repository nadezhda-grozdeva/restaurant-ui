import { defineStore } from 'pinia';
import { ref, computed, onMounted } from 'vue';
import { getDatabase, ref as dbRef, onValue } from "firebase/database";

export const useMenuStore = defineStore('menu', () => {

    // *** STATE ***
    const menu = ref([]);
    const categoriesList = ref([]);

    // *** GETTERS ***


    // *** ACTIONS ***


    // *** LIFECYCLE HOOKS ***
    onMounted(() => {
        // LOAD DATA FROM FIREBASE
        const firebaseDatabase = getDatabase();
        const db = dbRef(firebaseDatabase, 'menu');
        onValue(db, (snapshot) => {
            menu.value = snapshot.val();

            // DEFINE CATEGORIES
            const list = ref(['all']);
            menu.value.forEach(item => {
                const index = list.value.indexOf(item.category)
                if (index < 0) {
                    list.value.push(item.category)
                }
            })
            categoriesList.value = list.value
        });
    })

    // *** EXPORT ***

    return { menu, categoriesList }
  })