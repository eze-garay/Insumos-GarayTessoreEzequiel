import { getDocs, collection,query, where } from 'firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import {createAdaptedProductFromFirestore} from '../../../adapters/productAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response =>{
         console.log(response)
         const productsAdapted = response.docs.map(doc => {
            return createAdaptedProductFromFirestore(doc)
         })
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductsId = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(response => {
         
        
         const productAdapted = createAdaptedProductFromFirestore (response)


        resolve(productAdapted)
         }).catch(error => {
            reject(error)
         })
    })
}