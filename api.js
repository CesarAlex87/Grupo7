// URL de la API de TikTok
const apiUrl = "https://api.tiktok.com";
const apiKey = "TU_CLAVE_DE_API";

// Función para realizar la solicitud a la API de TikTok
async function makeTikTokApiRequest(endpoint, params) {
  try {
    // Construir la URL de la solicitud incluyendo la clave de la API
    const url = new URL(`${apiUrl}${endpoint}`);
    url.searchParams.append("api_key", apiKey);
    
    // Agregar los parámetros a la URL
    if (params) {
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
    
    // Realizar la solicitud a la API de TikTok
    const response = await fetch(url);
    
    // Verificar si la solicitud fue exitosa
    if (response.ok) {
      // Obtener la respuesta en formato JSON
      const data = await response.json();
      
      // Devolver los datos de la respuesta
      return data;
    } else {
      // Manejar el caso de error en la respuesta
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    // Manejar cualquier error en la solicitud
    console.error("Error making TikTok API request:", error);
    throw error;
  }
}

// Ejemplo de uso: Obtener los videos populares de TikTok
const getPopularVideos = async () => {
  try {
    // Realizar la solicitud a la API de TikTok para obtener los videos populares
    const response = await makeTikTokApiRequest("/v1/videos/popular", {
      count: 10  // Cantidad de videos a obtener
    });
    
    // Mostrar los datos de los videos populares
    console.log("Popular Videos:", response);
  } catch (error) {
    // Manejar cualquier error en la solicitud
    console.error("Error getting popular videos:", error);
  }
};

// Llamar a la función para obtener los videos populares
getPopularVideos();