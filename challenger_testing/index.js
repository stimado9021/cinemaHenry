class CarritoCompra {
  constructor(){         
     this.prod=[];                        
  }
   agregarProducto(xprodu){          
       this.prod.push(xprodu)
       return this.prod
    }
    calcularTotal(){
    let  total=0        
           for (const p of this.prod){
            total += (p.price * p.quantity)                        
            }                  
            return total
    }      

     aplicarDescuento(){   
        let descuento = this.calcularTotal() - (this.calcularTotal() * (15/100));
         return descuento;
    }  
}
module.exports = CarritoCompra;