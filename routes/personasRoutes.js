const mongoose = require('mongoose');
const personasMiddlewares = require('../lib/personasMiddlewares');



const Persona = mongoose.model('personas');

module.exports = (app) => {
  app.get('/api/personas', async (req, res) => {
    //conexion a base de datos
    //codigo
    //const objeto={
    // mensaje: "exitoso",
    // nombre: "Tony'"
    //}
    //res.send('objeto');
    try{
      const respuesta = await Persona.find();
      //console.log(respuesta);
      res.send(respuesta);
    }
    catch(error) {
      res.send(error.message)
    }
  });
  //ca sa scot o singura persoana, get aduce tot, post creaza un nou utilizator
  
  app.get('/api/personas/:id', async (req, res) => {
    try{
      const respuesta = await Persona.find({
        //creez un obiect cu optiuni
        _id: req.params.id
      });
      res.send(respuesta);
    }
    catch(error) {
      res.send(error.message)
    }
  });
//ca sa aduc numele
  app.get('/api/personas/nombre/:nombre', async (req, res) => {
    try{
      const respuesta = await Persona.find({
        //creez un obiect cu optiuni
        nombre: req.params.nombre
      });
      res.send(respuesta);
    }
    catch(error) {
      res.send(error.message)
    }
  });


   app.post(
     '/api/personas', 
      personasMiddlewares.datosLlenos,
      personasMiddlewares.tipoDato,

      async(req, res) => {
          res.send('si paso esta cosa');
     


//trebuie sa vina in try catch pentru ca fac o promesa
     //try {
      //  const nuevaPersona = new Persona(req.body);
       // const respuesta = await nuevaPersona.save();
       // res.send(respuesta);
    // }
      //catch (error) {
      //  res.send(error.message);
     // }
   });

//editar e cu post sau put
   app.put('/api/personas/:id', 
    //trebuie sa vina in try catch pentru ca fac o promesa
      personasMiddlewares.datosLlenos,
      personasMiddlewares.tipoDato,
      
      async (req,res)=> {
    try {
       const respuesta = await Persona.findOneAndUpdate(
         {_id: req.params.id},
         req.body,
         {new: true }
         ).exec();
       res.send(respuesta);
    }
     catch (error) {
       res.send(error.message);
     }
  });
  //delete e cu delete

   app.delete('/api/personas/:id', async (req,res)=> {
    //trebuie sa vina in try catch pentru ca fac o promesa
    try {
       const respuesta=await Persona.deleteOne({
         _id: req.params.id
       });
    }
     catch (error) {
       res.send(error.message);
     }
  });
};




