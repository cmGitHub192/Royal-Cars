async function getAllReservations() {
    const res = await fetch("http://localhost:3000/api/reservation")
    const resJson = await res.json();
    console.log(resJson)
}

async function getReservationById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/reservation/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener la informacion de la reservacion: ${response.status}`);
    }

    const locationData = await response.json();
    console.log("Reserva encontrada:", locationData);
    return locationData;
  } catch (error) {
    console.error("Error en la solicitud GET:", error.message);
    throw error;
  }
}

async function createReservation(newLocationData) {
  try {
    const response = await fetch("http://localhost:3000/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocationData), // Convertir los datos a formato JSON
    });

    if (!response.ok) {
      throw new Error(`Error al crear la reservacion: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Reservacion creada:", responseData);
    return responseData; // Devuelve los datos de la ubicación creada
  } catch (error) {
    console.error("Error en la solicitud POST:", error.message);
    throw error; // Lanza el error para que pueda manejarse en otro lugar
  }
}

async function updateReservation(id, updatedData) {
    try {
      const res = await fetch(`http://localhost:3000/api/reservation/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), // Convierte el objeto a JSON
      });
  
      if (!res.ok) {
        throw new Error(`Error al actualizar la reservacion: ${res.status}`);
      }
  
      const resJson = await res.json();
      console.log("Reservacion actualizada:", resJson);
      return resJson;
    } catch (error) {
      console.error("Error en la solicitud PUT:", error.message);
      throw error;
    }
  }

  async function deleteReservation(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/reservation/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar la reserva: ${response.status}`);
      }
  
      console.log(`Reserva con ID ${id} eliminada exitosamente`);
      return { message: `Reserva con ID ${id} eliminada exitosamente` };
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error.message);
      throw error;
    }
  }