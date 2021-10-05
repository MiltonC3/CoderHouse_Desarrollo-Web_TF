//Moldeador de Objetos de Productos

class Producto {
    constructor(pNombre, pPrecio, pImg, pPagina){
        this.nombre = pNombre
        this.precio = pPrecio
        this.tresCuotas = this.precio / 3
        this.seisCuotas = this.precio / 6
        this.enlacePagina = pPagina
        this.img = pImg
    }

    sumaIva(){
        this.precio = parseInt(this.precio * 1.21);
        this.tresCuotas = parseInt(this.tresCuotas * 1.21);
        this.seisCuotas = parseInt(this.seisCuotas * 1.21);
    }
}

//Array de Productos

const arrayProductos = []

arrayProductos.push(
    new Producto ( "Botiquín - Color Semilaqueado Blanco / Nogal" , 
                   4599 ,
                   "multimedia/img/tienda/Botiquin Color Semilaqueado Blanco Nogal.png" ,
                   "productos/botiquin-blanco-nogal.html"
                    ),
    new Producto ( "Mesa de Luz Flotante x2 - Color Cedro" , 
                   3499 ,
                   "multimedia/img/tienda/Mesa de Luz Flotante Color Cedro.png" , 
                   "productos/mesa-luz-cedro.html"
                    ),
    new Producto ( "Especiero Mediano - Color Laqueado Blanco" , 
                   1999 ,
                   "multimedia/img/tienda/Especiero Mediano Laqueado Color Blanco.png" , 
                   "productos/especiero-mediano-blanco.html"
                   ),
    new Producto ( "Botiquín - Color Roble Claro" , 
                   4399 ,
                   "multimedia/img/tienda/Botiquin Color Roble Claro.png" , 
                   "productos/botiquin-roble.html"
                    ),
    new Producto ( "Especiero Mediano - Color Cedro" , 
                   1499 ,
                   "multimedia/img/tienda/Especiero Mediano Color Cedro.png" , 
                   "productos/especiero-mediano-cedro.html"
                   ),
    new Producto ( "Mesa de Luz Flotante x2 - Color Madera" , 
                   3299 ,
                   "multimedia/img/tienda/Mesa de Luz Flotante Color Madera.png" , 
                   "productos/mesa-luz-madera.html"
                   ),
    new Producto ( "Botiquín Con Luz - Color Semilaqueado Blanco / Cedro" , 
                   4999 ,
                   "multimedia/img/tienda/Botiquin Con Luz Color Semilaqueado Blanco Cedro.png" , 
                   "productos/botiquin-luz-cedro.html"
                   ),
    new Producto ( "Mesa de Luz Flotante x2 - Color Roble Claro" , 
                   3499 ,
                   "multimedia/img/tienda/Mesa de Luz Flotante Color Roble Claro.png" , 
                   "productos/mesa-luz-roble.html"
                   ),
    new Producto ( "Especiero Grande - Color Roble Oscuro" , 
                   2499 ,
                   "multimedia/img/tienda/Especiero Grande Color Roble Oscuro.png" , 
                   "productos/especiero-grande.html"
                   ),
    new Producto ( "Silla Comedor x2 - Color Roble Claro" , 
                   3399 ,
                   "multimedia/img/tienda/Silla Color Roble Claro.png" , 
                   "productos/silla.html"
                   ),
    new Producto ( "Mesa Ratona - Color Madera" , 
                   2999 ,
                   "multimedia/img/tienda/Mesa Ratona Color Madera.png" , 
                   "productos/mesa-ratona.html"
                   ),
    new Producto ( "Colgante de Tazas - Color Cedro" , 
                   1599 ,
                   "multimedia/img/tienda/Colgante de Tazas Color Cedro.png" , 
                   "productos/colgante-tazas.html"
                   )
)

//For para sumar IVA a los productos

for(const producto of arrayProductos){

    producto.sumaIva()

}

//Reccoro mediante con un forEach para crear multiples cards

const contenedorTiendaProductos = document.getElementById("productos-tienda")


arrayProductos.forEach((producto) => {
    const div = document.createElement("div")
    div.className = "col"

    div.innerHTML = `
                    <a href="${producto.enlacePagina}" class="card card-contenedor">
                        <img src="${producto.img}" class="img-card"
                            alt="${producto.nombre}">
                        <h5 class="precio-card">$ ${producto.precio}</h5>
                        <h6 class="envio-card">envío gratis</h6>
                        <p class="texto-card">${producto.nombre}</p>
                    </a>
    `

    contenedorTiendaProductos.appendChild(div)
})
