const ApiKey = "1134033234651657";

// Función para llamar a la API de meta
function callMetaAPI() {
  // Crea una instancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // URL de la API de meta
  const url = `https://api.meta.com/v1/data?apikey=${ApiKey}`;

  // Configura la solicitud
  xhr.open("GET", url, true);

  // Manejador de eventos para cuando la solicitud se complete
  xhr.onload = function () {
    if (xhr.status === 200) {
      // La solicitud se completó exitosamente
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      // Aquí puedes procesar la respuesta de la API de meta
    } else {
      // Error al llamar a la API de meta
      console.error("Error al llamar a la API de meta. Código de estado:", xhr.status);
    }
  };

  // Manejador de eventos para errores de red
  xhr.onerror = function () {
    console.error("Error de red al llamar a la API de meta.");
  };

  // Envía la solicitud
  xhr.send();
}

// Llama a la función para probar la API de meta
callMetaAPI();
