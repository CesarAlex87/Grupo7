import { dataSetTendencias } from "./src/DataSetTendencias";

const videosPreviewData = [];
const trending = dataSetTendencias.discoverList.trending; // Obtener el elemento "trending" del dataset "DataSetTendencias"

// Iterar sobre los datos de los videos existentes
for (const video of MiniApiTikTok.video_list) {
  // Obtener el nombre del archivo de la imagen de la viñeta del video con la extensión .jpg
  const thumbnailPath = video.cover_image_url.substring(video.cover_image_url.lastIndexOf('/') + 1);

  // Encontrar los dos comentarios con más likes para este video
  const topTwoLikedComments = video.comments
    .sort((a, b) => b.like_count - a.like_count)
    .slice(0, 2);

  // Crear un nuevo objeto que contenga los datos de vista previa del video
  const videoPreview = {
    video_id: video.id,
    thumbnail: thumbnailPath,
    views: video.view_count,
    likes: video.like_count,
    top_liked_comments: topTwoLikedComments,
    trending: trending, // Agregar el elemento "trending" al objeto de vista previa del video

  };

  // Agregar el objeto al arreglo de datos de vista previa de los videos
  videosPreviewData.push(videoPreview);
}

// Crear el archivo JSON con los datos de vista previa de los videos
const videosPreviewJSON = JSON.stringify(videosPreviewData, null, 2);

// Imprimir el contenido del archivo JSON en la consola
console.log(videosPreviewJSON);
