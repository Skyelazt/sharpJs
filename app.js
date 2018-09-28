const sharp = require('sharp')

sharp('1.jpg')
    .resize(400,400)
    .toFile('output.jpg')