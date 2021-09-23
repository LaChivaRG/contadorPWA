// Definición de variables 

//var nombre = 'Profesor';

//let nombre = 'Profesor';

const nombre = 'Profesor';
document.write(nombre);

/////////////////////////////////////////

document.write("<br />");

//Fat arrow functions
// Forma Tradicional de definir fuciones.
function sumar (a, b){
    return a + b;  
}

const a = 10;
const b = 5;
const resultado = sumar(a, b);
document.write('suma = ' + resultado);

document.write("<br />");

//Forma moderna utilizando arrow functions o Fat ArrowFunctions
const sumarM = (c, d) => {
    return c + d;
}
const c = 10;
const d = 5;
const resultadoM = sumarM(a, b);
document.write('suma = ' + resultadoM);

document.write("<br />");

// Forma abreviadda 
const sumarA= (e, f) =>  e + f;

const e = 10;
const f = 5;
const resultadoA = sumarM(a, b);
document.write('suma = ' + resultadoA);

document.write("<br />");

//Objetos con formato JSON
const Usuario = {
    nombreU: 'Mario',
    edad: 20,
    email: 'mario@gmail.com'
};
document.write('Usuario => Nombre: ' + Usuario.nombreU + 
                ' Edad: ' + Usuario.edad +
                ' Email: ' + Usuario.email);

 document.write("<br />");

// redefineindo usuariio con object destructurin 
const{ nombreU, edad, email} = {
    nombreUU: ' Juan' , 
    edad: 32,
    email : 'juan@gmail.com'
};
document.write('Usuario => Nombre:'+ nombreU + 
                ' Edad ' +  edad + 
                ' Email ' + email );
                
document.write("<br />");

// ////////////////////////////////////////////////////////////////////

const usuarios = [ 'Juan' , 'Carlos','Lucia' , 'Ana'];
document.write(usuarios);

document.write("<br />");

//Array Destructuring
const [usuario1, usuario2] = [ 'Juan' , 'Carlos', 'Lucia' , 'Ana'];
document.write(usuario1 + ' , ' + usuario2 ) ;

document.write("<br />");
const [,, usuario3,  usuario4] = [ 'Juan' , 'Carlos', 'Lucia' , 'Ana'];
document.write(usuario3 + ', ' + usuario4 ) ;

document.write("<br />");

//uso del operador Spread para unir elementos e arreglos 
const frutasDulces = ['manzana', 'uva', 'mango'];
const frutasAcidas = ['limón', 'naranja', 'toronja'];

//unimos los arreglos
const frutas = [... frutasDulces, ... frutasAcidas];;
const frutasII = frutasDulces + frutasAcidas;
document.write(frutas);
document.write("<br />");
document.write(frutasII);

document.write("<br />");

//Uso del Template String
const alumno = 'Daniel';
const edadAlumno = new Date().getFullYear() - 2000;

// Gemerando un mensaje usando Template String y backticks dentro de {} para poder ejecutar o invocar cualquier cosa
const mensaje = `Bienvenido ${alumno}, tuedad es de : ${edadAlumno}`;
document.write(mensaje);

document.write("<br />");


//Uso de Intervalos en JS
const Saludar = () => document.write('<li> Hola a todos </li>');

document.write('<ul');
// Usamos la función setIntrval para invocar la función saludar, cada 3 segundos
setInterval(Saludar(), 3000);
document.write('</ul');

document.write("<br />");
//Promesas en JS
/**
 *  Las promesas son una nueva forma de trabajar con cosas que pueden ocurrir o no. Es un
 código que prmite resolver un problema ed decir  dar una respuesta que puede ser positiva o 
 negativa.
 * Las promesas se definen cono una función de retorna un objeto Promise, este objeto
 recibe una función tipo callBack con dos parámetros:
 *resolve: Representa la respuesta qu nos va a devolver en caso de que lo que se procese dentro 
 sea exitoso.
 * reject: Representa la respuesta que nos va a devolver en caso de qu lo que se procese  dentro 
 no sea exitoso.
 */

 const dividir = (num1, num2) => {
     return new Promise((resolve, reject) => {
         if(num2 === 0){
            reject('No se puede dividir entre 0');
        }
         else {
             resolve (num1 / num2);
        }
     });
 };

 document.write("<br />");
 /**  Al ser dividida una promesa , se utilizan las sentencias then y catch, donde then hace referencia
  al resolve y catch hace referencia al reject */ 

  const division = dividir (6, 2).then((res)=> {
      document.write(`División = ${res}`);
  })
  .catch((error)=> {
      document.write(error);
  });


  //Uso de la fución Fetch en JS

  fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
      return response .json();
  })
  .then((data) =>{
      console.log(data);
  })


//Uso de la libreria Axios
//forma básica
axios
.get('https://jsonplaceholder.typicode.com/users/2')
.then((data)=> console.log(data));


//Para acceder solamente al data 
axios
.get('https://jsonplaceholder.typicode.com/users/2')
.then((data)=> console.log(data.data));

//Para acceder a un dato en especifico 
axios
.get('https://jsonplaceholder.typicode.com/users/2')
.then(({data})=> console.log(data.username));

//////////////////////////////////////////////////////////////////////////////////

// Uso de async y await para definir promesas de JavaScript

//Definiendo una promesa de nombre saludo 
const promesaSaludo = () => {
    return new Promise((resolve) => {
        resolve("Respuesta Promesa");
    });
};

promesaSaludo().then((response) => console.log(response));

//Redefiniendo promesa con async
const promesaSaludoAsync = async () => {
    return 'Respuesta promesa async';
};

promesaSaludoAsync().then((response) => console.log(response));

//Uso de la función fetch mediante async y await 
const peticionFetchAsync = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users/3');
    //usar await para esperar a que primero se resuelva el fetch
    const fetchData = await response.json();

    return fetchData;
};

const data = peticionFetchAsync().then(console.log);

//Uso del objeto Axiosmediante async y await 
const peticionAxiosAsync = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/5');
    return data;
};
const dataAxios = peticionAxiosAsync().then(console.log);