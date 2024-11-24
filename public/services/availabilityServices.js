async function getAllPerson() {
    const res = await fetch("http://localhost:3000/api/availability")
    const resJson = await res.json();
    console.log(resJson)
}

async function getPersonById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/availability/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener la informacion de desponibilidad: ${response.status}`);
    }

    const locationData = await response.json();
    console.log("Disponibilidad encontrado:", locationData);
    return locationData;
  } catch (error) {
    console.error("Error en la solicitud GET:", error.message);
    throw error;
  }
}

async function createPerson(newLocationData) {
    try {
      const response = await fetch("http://localhost:3000/api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLocationData), // Convertir los datos a formato JSON
      });
  
      if (!response.ok) {
        throw new Error(`Error al crear la disponibilidad: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Disponibilidad creada:", responseData);
      return responseData; // Devuelve los datos de la ubicación creada
    } catch (error) {
      console.error("Error en la solicitud POST:", error.message);
      throw error; // Lanza el error para que pueda manejarse en otro lugar
    }
  }