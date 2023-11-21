const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'TU_CLOUD_NAME',
  api_key: 'TU_API_KEY',
  api_secret: 'TU_API_SECRET',
});

const path = require('path');

const imagePath = path.join(__dirname, 'tu_directorio_de_fotos', 'nombre_de_tu_foto.jpg');

cloudinary.uploader.upload(imagePath, { folder: 'directorio_en_cloudinary' }, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Imagen subida a Cloudinary:', result.secure_url);
  }
});