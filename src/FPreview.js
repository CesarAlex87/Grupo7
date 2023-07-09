const videosPreviewData = [];

// Iterar sobre los datos de los videos existentes
dataUsers.contentCreators.forEach(video => {
  // Obtener la ruta de la imagen de la viñeta del video (suponiendo que la imagen está en la misma carpeta con el mismo nombre que el video_id y la extensión .jpg)
  const thumbnailPath = `${video.video_id}.jpg`;

  // Encontrar el comentario con más likes
  const mostLikedComment = video.comments && video.comments.length > 0
  ? video.comments.reduce((prev, current) => (current.likes > prev.likes) ? current : prev)
  : null;

  // Crear un nuevo objeto que contenga los datos de vista previa del video
  const videoPreview = {
    "video_id": video.video_id,
    "thumbnail": thumbnailPath,
    "views": video.views,
    "likes": video.likes,
    "most_liked_comment": mostLikedComment
  };

  // Agregar el objeto al arreglo de datos de vista previa de los videos
  videosPreviewData.push(videoPreview);
});

// Crear el archivo JSON con los datos de vista previa de los videos
const videosPreviewJSON = JSON.stringify(videosPreviewData, null, 2);

// Imprimir el contenido del archivo JSON en la consola
console.log(videosPreviewJSON);