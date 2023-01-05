const products = [
    {
        id:'1',
        name: 'Computadora 1',
        price: 300000,
        category: 'PC',
        img: 'https://pixabay.com/es/photos/lugar-de-trabajo-oficina-escritorio-2303851/',
        stock: 30,
        description: 'Pc Mac'
    },
    {
    id:'2', name: 'Computadora 2', price: 400000, category: 'PC', img: 'https://pixabay.com/images/id-1868496/', stock: 30, description: 'Pc Mac nueva'
    },
    {
    id:'3', name: 'Computadora 3', price: 200000, category: 'PC', img: 'https://pixabay.com/images/id-1868496/', stock: 30, description: 'Pc Mac veija'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
            }, 2000 ) 
        })
}