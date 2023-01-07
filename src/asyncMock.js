const products = [
    {
        id:'1',
        name: 'iMac 24"',
        price: 883320,
        category: 'Computadora de escritorio',
        img: 'https://cdn.pixabay.com/photo/2016/11/19/12/34/apple-1839046_960_720.jpg',
        stock: 20,
        description: 'Experimente la potencia y el rendimiento del chip Apple M1 con el iMac Blue Apple de 24 " . El Apple M1 integra la CPU, GPU, Neural Engine, E / S y más en un solo sistema en un chip (SoC). Aborde sus proyectos con la rápida CPU de 8 núcleos y acepte aplicaciones y juegos con uso intensivo de gráficos con la GPU de 7 núcleos. Acelere las tareas de aprendizaje automático con el motor neuronal de 16 núcleos'
    },
    {
    id:'2', name: 'iMac Apple', price: 1289812, category: 'Computadora de escritorio', img: 'https://cdn.pixabay.com/photo/2015/04/21/12/16/mac-733178_960_720.jpg', stock: 10, description: 'COMPATIBILIDAD CON VÍDEO Y CÁMARA. Admite simultáneamente la resolución nativa completa en la pantalla integrada compatible con mil millones de colores y:. Un monitor externo con una resolución de hasta 6K a 60 Hz. SALIDA DE VÍDEO DIGITAL THUNDERBOLT 3. Salida DisplayPort nativa a través de USB C. Salidas Thunderbolt 2, HDMI, DVI y VGA mediante adaptadores (se venden por separado)'
    },
    {
    id:'3', name: 'iMac M1', price: 629714, category: 'Computadora de escritorio', img: 'https://cdn.pixabay.com/photo/2014/07/30/22/49/workstation-405747_960_720.jpg', stock: 30, description: 'Chip Apple M1.Diseñado para Mac, M1 ofrece un rendimiento de CPU más rápido y gráficos más rápidos.M1 optimiza las tecnologías personalizadas y la eficiencia energética para el nuevo iMac. El diseño de sistema en un chip proporciona una mayor integración y funciona a la perfección con el sistema operativo más avanzado del mundo.Pantalla rica, vibrante e increíblemente inmersiva de 4.5K.'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
            }, 2000 ) 
        })
}