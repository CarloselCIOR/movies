const mongoose = require('mongoose');
                            //USER  //PASSWORD                                  //BD
mongoose.connect(`mongodb+srv://root:YN7mic0LrsVfeXxR@cluster0.stjy9c9.mongodb.net/pelicula-db?retryWrites=true&w=majority`
).then(() => console.log('Conexion exitosa a MongoDB'))
.catch(err => console.log('Error al conectar a MongoDB: ', err));

module.exports = mongoose;