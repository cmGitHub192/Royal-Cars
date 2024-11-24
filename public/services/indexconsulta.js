// NOTA: Para probar se puede usar el mismo formato para los servicios de cada tabla, 
// solo cambian los nombres de funciones y los datos en los Json o variables a usar de ejemplo

// Dependiendo de la funcion que se desee usar, mostrar todo o por id se debe usar una o otra
// Mostrar todo
getAllLocationsF().then(locations => {
    console.log(locations)
})
// Mostrar por id
const testId = 1; // Cambia este ID por uno existente en tu base de datos
const resultado = Object;
try {
    getLocationById(testId).then(response=>{
        console.log("Prueba exitosa. Detalles de la ubicación obtenida:", response);
    })
    
} catch (error) {
    console.error("Error al probar la consulta de ubicación:", error.message);
}
