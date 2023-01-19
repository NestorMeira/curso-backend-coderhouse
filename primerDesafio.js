// Clases con ECMAScript y ECMAscript avanzado

let id = 0;

class ProductManager {
    constructor() {
        this.products = []
    }
    addProduct(obj) {

        this.products.push(obj);

        this.products.reduce((acc, prod) => {
            if(acc.code == prod.code){
                this.products.pop();
                console.error("error! el id ya registrado");
            }
        });
    }
    getProducts() {
        return console.log(this.products);
    }
    getProductById(id) {
        const productsFind = this.products.find(el => el.id === id);
        productsFind 
        ? console.log(productsFind)
        : console.error(`El producto con id ${id} no existe`);
    }
}

const product = new ProductManager();

product.getProducts(); // Devuelve Array vacio.

product.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 10,
    id: id += 1
});

product.getProducts(); // Devuelve el Array con el objeto integrado.

product.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 130,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 10,
    id: id += 1
});

product.getProductById(1);