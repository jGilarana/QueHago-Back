const cloudinary = require('.');
const Club = require('../api/models/club.model');
const Event = require('../api/models/event.model');
const User = require('../api/models/user.model');



async function postImage(req, res) {
  
    const options = {
      colors: true,
      folder: 'Quegit stHago',
      use_filename: true
    };
  
    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(req.file.path, options);
      console.log(result);
      return res.status(200).json(result.public_id);
    } catch (error) {
      console.error(error);
    }
  };
  

  async function getImage(req, res)  {
    
    const options = {
      colors: true,
      folder: 'Quegit stHago',
      use_filename: true
    };

    try {
        // Get details about the asset
        const result = await cloudinary.api.resource('5d3daa5dfa02609d6e2acb1619693d1a_fqmwp1', options);
        console.log(result);
        return result.colors;
        } catch (error) {
        console.error(error);
    }
};


//////////////////////////////////  Event Control ////////////////////////////////


async function postEventImage(req, res) {
  
  const options = {
    colors: true,
    folder: 'Quegit stHago',
    use_filename: true
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(req.file.path, options);
    console.log(result);
    const [event, eventExists] = await Event.update({image : result.url}, {
      where: { id: req.params.id },
    })
    if (eventExists === 0) {
      return res.status(404).send("No event found")
    }
    return res.status(200).json(result.public_id);
  } catch (error) {
    console.error(error);
  }
};



//////////////////////////////////  User Control ////////////////////////////////

async function postClubImage(req, res) {
  
  const options = {
    colors: true,
    folder: 'Quegit stHago',
    use_filename: true
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(req.file.path, options);
    console.log(result);
    const [event, eventExists] = await Club.update({image : result.url}, {
      where: { id: req.params.id },
    })
    if (eventExists === 0) {
      return res.status(404).send("No event found")
    }
    return res.status(200).json(result.public_id);
  } catch (error) {
    console.error(error);
  }
};

//////////////////////////////////  Club Control ////////////////////////////////


async function postUserImage(req, res) {
  const options = {
    colors: true,
    folder: 'QueHago',
    use_filename: true
  };

  try {
    // Asegúrate de que req.file contenga la información del archivo
    if (!req.file || !req.file.path) {
      return res.status(400).send('No file provided');
    }

    // Sube la imagen a Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, options);
    console.log(result);

    // Actualiza el campo 'image' en la base de datos
    const [_, [event]] = await User.update({ image: result.url }, {
      where: { id: res.locals.member.id },
      returning: true, // Asegúrate de incluir 'returning: true' para obtener la fila actualizada
    });

    if (!event) {
      return res.status(404).send('No user found');
    }

    // Si usas el mismo componente para manejar la carga, puedes eliminar el archivo localmente
    // fs.unlinkSync(req.file.path);

    return res.status(200).json(result.public_id);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
}

// async function postUserImage(req, res) {
  
//   const options = {
//     colors: true,
//     folder: 'QueHago',
//     use_filename: true
//   };
//   console.log(res.locals)

//   try {
//     // Upload the image
//     const result = await cloudinary.uploader.upload(req.file.path, options);
//     console.log(result);
//     const [event, eventExists] = await User.update({image : result.url}, {
//       where: { id: res.locals.member.id },
//     })
//     if (eventExists === 0) {
//       return res.status(404).send("No event found")
//     }
//     return res.status(200).json(result.public_id);
//   } catch (error) {
//     console.error(error);
//   }
// };
  module.exports = {
    postImage,
    getImage,
    postEventImage,
    postClubImage,
    postUserImage
  }