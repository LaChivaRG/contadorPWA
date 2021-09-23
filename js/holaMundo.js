var nombre = "Adriana";

document.write('Hola ' + nombre + ' desde javaScript');


//Hoisting
//En JS las declaraciones se mueven al inicio del ámbito. Este comportamienot se conoce cmo Hoisting 

diaDeHoy();

function diaDeHoy(){
    document.write(" <br> El día de hoy es : " + dia);
}

var dia ='Sábado';


//Cohersión
var a = 20;
var b = 4;

b = a + ""; // string

console.log(typeof b);


//Convietirndo de número a cadena
var c = String(a);
console.log(typeof c);


//Convirtiendo de cadena a número 
var d = Number(c);
console.log(typeof d);


//Condicionales 
var edad= 18;

if(edad === 18){
    document.write('<br> Eres mayor de edad ya puedes votar' );

}
else if( edad > 18 ){
    document.write('<br> Eres mayor de edad ya puedes votar' );
}
else{
    document.write('<br> Eres menor de edad y no  puedes votar' );
}



//Operador Terniario

var resultado = edad >= 18 ? "Eres mayor de edad" : "No eres amyor de edad ";
document.write('<br>Resultado = ' + resultado);

//Ciclos

var estudiantes=[' María', 'Sergio', 'Rosa', 'Daniel']; 




//Usando un ciclo for para recorrer el arreglo

for(var i=0; i<estudiantes.length; i++){
    document.write(estudiantes[i] + ',');
}
document.write('</p>')



//Usando un ciclo for...of para recorrer el arreglo

for(var estudiante of estudiantes){
    document.write(estudiante + ',');
}
document.write('</p>')



//Ciclo while

while(estudiantes.length >0){
    estudiante = estudiantes.shift();
    document.write('<p>' + estudiante + '</p>')
}


//Funciones Declarativas 

function miFuncionD(){
    return "Se ejecuto la función";

}

document.write('<p>' + miFuncionD() + '</p>');




//Funciones de Expresion de Parametros 

var miFuncionE = function(a, b){
    return a + b;
}
document.write('<p>5 + 10 = ' + miFuncionE(5, 10) + '</p>')




//Objetos en JS


//Definiendo un nuevo objeto
var Auto = {
    //Propiedades
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,

    //Métodos
    detalleAuto: function(){
        document.write("<p>Auto: " + this.modelo + " " + this.anio  + "</p>");
    }
}

//Mostramos el objeto completo
console.log(Auto);
document.write("Marca: " + Auto.marca);
Auto.detalleAuto();

//Definicion de una clase  mediante una funcion constructora
function CAuto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
//creando un nuevo objeto de la clase auto
var autoNuevo = new CAuto('Tesla', 'Model 3', 2021);

//Mostrando el nuevo objeto
document.write('<p> Auto Nuevo: <br> Marca: ' + autoNuevo.marca + 
                ' Modelo: ' + autoNuevo.modelo +
                ' Año: ' + autoNuevo.anio + '</p>');



//Arrays de objeto 


//Crenado el array

var articulos = [
    { nombre: 'Bicicleta', costo: 3000 },
    { nombre: 'Televisión', costo: 5500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 11215 },
];




//Usando el método forEach para reccorrer el array.

document.write('<ul>');
articulos.forEach(function(articulo){
    document.write('<li>' + articulo.nombre + ' - $' + articulo.costo + '</li>');
});
document.write('</ul>');


//Usando el método filter para filtrear aquellos objetos del arreglo con un costo menor o igual a 5000, y guardarlos en una nueva lista 
var articulosBaratos = articulos.filter(function(articulo){
    return articulo.costo <= 5000;
});

//Usando el método forEach para reccorrer el array.

document.write('Baratos<ul>');
articulosBaratos.forEach(function(articulo){
    document.write('<li>' + articulo.nombre + ' - $' + articulo.costo + '</li>');
});
document.write('</ul>');





// usando la función map paramanejar kos dotos de los objetos y guardarlos enuna lnueva lista 
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

document.write('Articulos<ul>');
nombreArticulos.forEach(function(articulo){
    document.write('<li>'+ articulo + '</li>');
});
document.write('</ul>');


