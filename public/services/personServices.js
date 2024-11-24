async function getAllPerson() {
    const res = await fetch("http://localhost:3000/api/person")
    const resJson = await res.json();
    console.log(resJson)
}

async function getPersonById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/person/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener la informacion del cliente: ${response.status}`);
    }

    const locationData = await response.json();
    console.log("Cliente encontrado:", locationData);
    return locationData;
  } catch (error) {
    console.error("Error en la solicitud GET:", error.message);
    throw error;
  }
}

async function createPerson(newLocationData) {
  try {
    const response = await fetch("http://localhost:3000/api/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocationData), // Convertir los datos a formato JSON
    });

    if (!response.ok) {
      throw new Error(`Error al crear el cliente: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Cliente creado:", responseData);
    return responseData; // Devuelve los datos de la ubicación creada
  } catch (error) {
    console.error("Error en la solicitud POST:", error.message);
    throw error; // Lanza el error para que pueda manejarse en otro lugar
  }
}

async function updatePerson(id, updatedData) {
    try {
      const res = await fetch(`http://localhost:3000/api/person/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), // Convierte el objeto a JSON
      });
  
      if (!res.ok) {
        throw new Error(`Error al actualizar el cliente: ${res.status}`);
      }
  
      const resJson = await res.json();
      console.log("Cliente actualizado:", resJson);
      return resJson;
    } catch (error) {
      console.error("Error en la solicitud PUT:", error.message);
      throw error;
    }
  }

  async function deletePerson(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/person/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar a al cliente: ${response.status}`);
      }
  
      console.log(`Cliente con ID ${id} eliminada exitosamente`);
      return { message: `Cliente con ID ${id} eliminada exitosamente` };
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error.message);
      throw error;
    }
  }