const products = [
    {
    id: "1", 
    name: "Oleo lunar", 
    price: 6000, 
    category: "cosmetica natural", 
    img: "../../img/oleo-lunar.jpeg", 
    stock: 20, 
    description: "Oleo facial en base a aceites naturales, uso nocturno."
}, 
{
    id: "2", 
    name: "Oleo solar", 
    price: 6000, 
    category: "cosmetica natural", 
    img: "../../img/oleo-solar.jpeg", 
    stock: 20, 
    description: "Oleo facial en base a aceites naturales, uso diario."
}, 
{
    id: "3", 
    name: "Protector solar", 
    price: 5000, 
    category: "cosmetica natural", 
    img: "../../img/protector-solar.jpeg", 
    stock: 20, 
    description: "Protector solar de origen natural y local, hecho a mano."
}
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}