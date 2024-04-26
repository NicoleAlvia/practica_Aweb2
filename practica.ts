//difinir arreglo 
interface Vehiculo
{
    id: number;
    descripcion: String;
    placa: String;
    color: String;  
};

interface Espacio_parqueo
{
    id: number;
    descripcion: String;
};

interface Parquear 
{
    id: number;
    id_vehiculo: number;
    id_parqueo: number;
    fecha_entrada:Date;
    hora_entrada: Date;
    fecha_salida: Date ;
    hora_salida: Date;
}

const vehiculos: Vehiculo[] = [
    {id: 1, descripcion: "nuevo", placa: "MBS5521", color: "negro"},
    {id: 2, descripcion: "usado", placa: "MVP4261", color: "rojo"},
]

const espacio_parqueo: Espacio_parqueo[]= [
    {id: 1, descripcion: "tamaño"},
    {id: 2, descripcion: "especial"},
]

const parquear: Parquear[]=[
    {id: 1, id_vehiculo: 1, id_parqueo: 1, fecha_entrada: new Date (12/3/2021), hora_entrada: new Date (13), fecha_salida: new Date (12/3/2021), hora_salida: new Date (14)},
    {id: 2, id_vehiculo: 2, id_parqueo: 2, fecha_entrada: new Date (12/3/2021), hora_entrada: new Date (15), fecha_salida: new Date (12/3/2021), hora_salida: new Date (17)},
]

//recorrer arreglo Vehiculo 
console.log("Vehículos:");
for (const vehiculo of vehiculos) 
{
  console.log(`ID: ${vehiculo.id}, Descripción: ${vehiculo.descripcion}, Placa: ${vehiculo.placa}, Color: ${vehiculo.color}`);
}

//recorrer arreglo Espacio_parqueo
console.log("\nEspacios de estacionamiento:");
for (const espacio of espacio_parqueo) 
{
  console.log(`ID: ${espacio.id}, Descripción: ${espacio.descripcion}`);
}

//recorrer arreglo Parquear
console.log("\nRegistros de estacionamiento:");
for (const registro of parquear) 
{
  console.log(`ID: ${registro.id}, ID Vehículo: ${registro.id_vehiculo}, ID Espacio: ${registro.id_parqueo}, Fecha entrada: ${registro.fecha_entrada}, Hora entrada: ${registro.hora_entrada}, Fecha salida: ${registro.fecha_salida}, Hora salida: ${registro.hora_salida}`);
}

// Función para buscar un elemento por ID en un arreglo
function buscarElementoPorId(arreglo, id, callback) 
{
    for (const elemento of arreglo) {
      if (elemento.id === id) {
        callback(elemento);
        return; // Detener el ciclo al encontrar el elemento
      }
    }
    console.log(`No se encontró el elemento con ID ${id}`);
}
  
  // Función para mostrar un elemento por consola
  function mostrarElemento(elemento) 
  {
    console.log(`Elemento encontrado:`);
    console.log(`ID: ${elemento.id}`);
    console.log(`Descripción: ${elemento.descripcion}`);
    console.log(`Placa: ${elemento.placa}`);
    console.log(`Color: ${elemento.color}`);
  }
  
  const Vehículos: Vehiculo[] = [
    { id: 1, descripcion: "nuevo", placa: "MBS5521", color: "negro" },
    { id: 2, descripcion: "usado", placa: "MVP4261", color: "rojo" },
  ];
  buscarElementoPorId(vehiculos, 2, mostrarElemento); // Buscar y mostrar el vehículo con ID 2  

  
