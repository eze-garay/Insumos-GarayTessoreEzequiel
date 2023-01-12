const products = [
    {
        id:'1',
        name: 'iMac Apple',
        price: 1289812,
        category: 'Computadora',
        img: 'https://cdn.pixabay.com/photo/2015/04/21/12/16/mac-733178_960_720.jpg',
        stock: 20,
        description: 'COMPATIBILIDAD CON VÍDEO Y CÁMARA. Admite simultáneamente la resolución nativa completa en la pantalla integrada compatible con mil millones de colores y:. Un monitor externo con una resolución de hasta 6K a 60 Hz. SALIDA DE VÍDEO DIGITAL THUNDERBOLT 3. Salida DisplayPort nativa a través de USB C. Salidas Thunderbolt 2, HDMI, DVI y VGA mediante adaptadores (se venden por separado)',
    },
    {
    id:'2', name: 'MacBook Air M2', price: 465899, category: 'Notebook', img: 'https://http2.mlstatic.com/D_NQ_NP_637313-MLA51356401031_082022-O.webp', stock: 10, description: 'Pantalla con gran impacto visual.Su pantalla LED de 13.6" y 2560x1664 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. Eficiencia a tu alcance. Su procesador Apple de 8 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.'
    },
    {
    id:'3', name: 'Set Teclado Y Mouse Gamer', price: 32000, category: 'Perifericos', img: 'https://http2.mlstatic.com/D_NQ_NP_743308-MLA45480040140_042021-O.webp', stock: 30, description: 'Normal llaves: 104. Dimensiones del teclado: aproximadamente 455*175*45mm. Tipo de interfaz: Usb (conexión inalámbrica de 2,4 GHz). Capacidad de la BATERÍA INTEGRADA: 3000mAh. Soporte del sistema: Windows 7 / 8 / 10 / Vista / XP / Mac OS / Linux y lo último. Color: Arco Iris negro, azul blanco plateado'
    },
]

export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
            }, 2000 ) 
        })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === id))
        }, 2000);
    })
}

export const getProductsBycategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.filter(prod => prod.category === categoryId))
        }, 2000);
    })
}