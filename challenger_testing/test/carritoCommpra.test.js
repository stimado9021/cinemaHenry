//carritoCompra debera ser una clase
//carritoCompra debera ser una instacia de la clase carritoCompra
//debera guardar productos en una lista
//debera tener un metodo llamado agregarProducto
//deberia tener un metodo llamado calcularTotal
//deberia tener un metodo llamado aplcarDescuento
//el metodo agregar productos deberia poder agregar
//un producto a una lista
//el metodo calcularTotal deberia poder calcular
// el Total sumando los precios en todos los productos del carrito
//el metodo aplicarDescuento deberia poder aplicar un descuento a toda la commpra
const CarritoCompra = require('../index')

describe('Clase CarritoCompra',()=>{
    let carritoCompra;

    beforeEach(()=>{
        carritoCompra= new CarritoCompra()
    })

   describe('sobre el constructor de la clase CarritoCompra',()=>{
   
    it('CarritoCompra deberia ser una clase',()=>{
        expect(typeof CarritoCompra.prototype.constructor).toBe('function')
    })

    it('CarritoCompra deberia ser una instancia de la clase CarritoCompra',()=>{
        expect(carritoCompra instanceof CarritoCompra).toBe(true)
    }) 
    it('Deberia guardar productos en una lista',()=>{
        expect(carritoCompra.prod).toEqual([])
    })   

   }) 

   describe('metodos de la clase CarritoCompra',()=>{
            const producto1={
                id:1,
                name:'lapicero',
                price:100,
                quantity:1
            }
            const producto2={
                id:2,
                name:'libreta',
                price:100,
                quantity:1
            }

        it('deberia tener un metodo llamado agregarProducto',()=>{
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })    

        it('deberia tener un metodo llamado calcularTotal',()=>{
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        }) 

        it('deberia tener un metodo llamado aplicarDescuento',()=>{
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        }) 

        it('el metodo agregarProducto deberia poder agregar un producto a una lista',()=>{
            carritoCompra.agregarProducto(producto1)
            expect(carritoCompra.prod).toContain(producto1)
        })

        it('el metodo calcularTotal deberia poder calcular el Total sumando los precios en todos los productos del carrito',()=>{
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);
            const totalExpect = producto1.price * producto1.quantity + producto2.price * producto2.quantity;           
            const total = carritoCompra.calcularTotal();          
            expect(total).toBe(totalExpect)
        })

        it('el metodo aplicarDescuento deberia poder aplicar un descuento a toda la commpra',()=>{
            carritoCompra.agregarProducto(producto1);
            carritoCompra.agregarProducto(producto2);
            const subtotal = producto1.price * producto1.quantity + producto2.price * producto2.quantity;
            const descuentoExpect =subtotal - (subtotal * (15/100))  
            const descuentoReal= carritoCompra.aplicarDescuento(15)
            expect(descuentoReal).toBe(descuentoExpect)
        })
   })
})