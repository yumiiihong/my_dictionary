// dictionary.js

import {db} from "../../firebase";
import{
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    deleteDoc,
    getState,
} from "firebase/firestore";

// Actions

const LOAD = "dictionary/LOAD";
const CREATE = 'dictionary/CREATE';
const DELETE = 'dictionary/DELETE';


const initialState = {
    list:[{vocabulary:"here comes the word",definition:"meaning comes here",example:"example"}]
};


// Action Creators

export function loadDictionary(dictionary_list){
    return {type: LOAD, dictionary_list};
}

export function createVocabCard(dictionary) {
    return { type: CREATE, dictionary};
    }

export function deleteVocabCard(dictionary_index) {
    return { type: DELETE, dictionary_index};
        }

// Middlewares

export const loadDictionaryFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db, "dictionary"));
        console.log(dictionary_data);

        let dictionary_list = [];

        dictionary_data.forEach((doc) => {
            console.log(doc.data());
            dictionary_list.push({id:doc.id,...doc.data()});
        });

        console.log(dictionary_list);

        dispatch(loadDictionary(dictionary_list));

    };
};

export const createDictionaryFB = (dictionary) => {
    return async function(dispatch){
        const docRef = await addDoc(collection(db, "dictionary"), dictionary);
        const _dictionary = await getDoc(docRef);
        const vocabulary_data = {id: _dictionary.id, ..._dictionary.data()};

        console.log(vocabulary_data);

        dispatch(createVocabCard(vocabulary_data));
    }
}

export const deleteDictionaryFB = (dictionary_id) => {
    return async function (dispatch, getState) {
        if (!dictionary_id){
            window.alert("cannot find the id");
            return;
        }
        const docRef = doc(db, "dictionary",dictionary_id);
        await deleteDoc(docRef);

        const _dictionary_list = getState().dictionary.list;
        const dictionary_index = _dictionary_list.findIndex((doc) => {
            return doc.id === dictionary_id;       
        });

        console.log(dictionary_index);

        dispatch(deleteVocabCard(dictionary_index));
    }

}


// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "dictionary/LOAD": {
        return {list: action.dictionary_list};
    }
    case "dictionary/CREATE": 
        const new_dictionary_list = [...state.list, action.dictionary];
        console.log(action.dictionary);
        return {list: new_dictionary_list};

    case "bucket/DELETE": {
        const new_dictionary_list = state.list.filter((l, idx) => {
        return parseInt(action.dictionary_index) !== idx;
        });
      
        return { ...state, list: new_dictionary_list };
          }

    
        
    
// do reducer stuff
default: return state;
    }
}




// side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

