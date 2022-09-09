const Bebidas = [   

    {   
        id: 1, 
        nombre: `Coca cola`,
        sector: `Bebidas`,
        Stock: 5,
    },
    
    {       
        id: 2,  
        nombre: `Fanta`,
        sector: `Bebidas`,
        Stock: 5,
    },
    {   
        id: 3, 
        nombre:`Sprite`,
        sector: `Bebidas`,
        Stock: 5,
    },
    {   
        id: 4, 
        nombre: `aguaMineral`,
        sector: `Bebidas`,
        Stock: 15,
    },
    {   
        id: 5,
        nombre: `Paso de los toros`,
        sector: `Bebidas`,
        Stock: 5,
    },
    {   
        id: 6, 
        nombre: `Coca Cola Zero`,
        sector: `Bebidas`,
        Stock: 5,
    },
    {
        id: 7,
        nombre: `Agua con Gas`,
        sector: `Bebidas`,
        Stock: 5,
    }
]

var arrayBebidas = [Bebidas];
do{
    var chequear = prompt(`Ingrese nombre del producto, para finalizar presione Esc
    
    Coca cola
    Fanta
    Sprite
    Agua Mineral
    Paso de los toros
    Coca Cola Zero

    `);

    alert(`Elegiste ${chequear}`);

    if (chequear === "ESC" || chequear === "Esc" || chequear === "esc") {
        break;
    }   else{
        nombreProducto = chequear;
        var sector = prompt(`Ingrese sector
        Bebidas
        `);

        alert(`Elegiste ${sector}`);

        var Stock = prompt(`Ingrese cantidad comprada
        
        1
        2
        3
        6
        
        `);

        alert(`Elegiste ${Stock}`);
        
        arrayBebidas.push("id: 8, nombre: Sprite zero, sector: Bebidas, Stock: 5,");
        console.log(arrayBebidas);
    }
}

while (chequear != "ESC" || chequear != "Esc" || chequear != "esc")

if (Stock >=5){
    console.log(`Reponer Stock`);
}
/*
while (Stock <= 0) {
    console.log(Stock - Bebidas.Stock);
    console.log("Stock disponible");
}


var Reponer = arrayBebidas.filter(bebidas => bebidas.Stock <=5);
console.log(`Reponer Stock, ultimas 5 unidades`);
console.log(`Reponer Stock`);
document.write("<h3> Producto en lista de comprar, menos de 5 unidades <h3>");
*/
