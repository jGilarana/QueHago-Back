const cloudinary = require('.');
const Event = require('../api/models/event.model');



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



//////////////////////////////////  Club Control ////////////////////////////////

  module.exports = {
    postImage,
    getImage,
    postEventImage
  }