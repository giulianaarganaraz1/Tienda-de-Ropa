const API = "http://localhost:8080/api/articulos";

async function cargarProductos(){

    const respuesta = await fetch(API);

    const productos = await respuesta.json();

    console.log(productos);

}

cargarProductos();