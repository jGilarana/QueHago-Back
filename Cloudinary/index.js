const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'djpdopxfy', 
    api_key: '859719466848547', 
    api_secret: 'kZFpcokasmO8MBTAvji-4MBbBUo' 
});

module.exports = cloudinary;