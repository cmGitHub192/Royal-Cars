async function getAllCarF() {
    const res = await fetch("http://localhost:3000/api/car")
    const resJson = await res.json();
    console.log(resJson)
}

async function getCarById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/car/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener la informacion del carro: ${response.status}`);
    }

    const locationData = await response.json();
    console.log("Auto encontrado:", locationData);
    return locationData;
  } catch (error) {
    console.error("Error en la solicitud GET:", error.message);
    throw error;
  }
}

async function createCar(newLocationData) {
  try {
    const response = await fetch("http://localhost:3000/api/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocationData), // Convertir los datos a formato JSON
    });

    if (!response.ok) {
      throw new Error(`Error al crear el carro: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Carro creado:", responseData);
    return responseData; // Devuelve los datos de la ubicación creada
  } catch (error) {
    console.error("Error en la solicitud POST:", error.message);
    throw error; // Lanza el error para que pueda manejarse en otro lugar
  }
}

async function updateCar(id, updatedData) {
    try {
      const res = await fetch(`http://localhost:3000/api/car/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), // Convierte el objeto a JSON
      });
  
      if (!res.ok) {
        throw new Error(`Error al actualizar el carro: ${res.status}`);
      }
  
      const resJson = await res.json();
      console.log("Caroo actualizado:", resJson);
      return resJson;
    } catch (error) {
      console.error("Error en la solicitud PUT:", error.message);
      throw error;
    }
  }

  async function deleteCar(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/car/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar el carro: ${response.status}`);
      }
  
      console.log(`Carro con ID ${id} eliminada exitosamente`);
      return { message: `Carro con ID ${id} eliminada exitosamente` };
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error.message);
      throw error;
    }
  }