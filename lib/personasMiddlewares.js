module.exports.datosLlenos = (req,res, next)=> {
  //const nombre = req.body.nombre;
  //const edad = req.body.edad;
  //const apellidos = req.body.apellidos;
  const { nombre, edad, apellidos, profesion } = req.body;


   if(!nombre){
     return res.send('Flata el nombre');
   }
   if(!edad){
     return res.send('Flata la edad');
   }
   if(!apellidos){
     return res.send('Flatan los apellidos');
   }
   if( typeof(apellidos) != 'object') {
     return res.send({
       mensaje:'Apellidos debe ser objeto'
     });
   }
   if(!apellidos.paterno){
     return res.send('Flata el apellido paterno');
   }
   if(!apellidos.materno){
     return res.send('Flata el apellido materno');
   }
  next();
};

module.exports.tipoDato = (req, res, next) =>{
  //destructuram obiectele
  const { nombre, edad, apellidos, profesion } = req.body;

    if( typeof(nombre) != 'string') {
      return res.send({
        mensaje:'Nombre debe ser texto'
      });
    }
    if( typeof(edad) != 'number') {
      return res.send({
        mensaje:'Edad debe ser numero'
      });
    }
    if( typeof(apellidos.paterno) != 'string') {
      return res.send({
        mensaje:'Paterno debe ser texto'
      });
    }
    if( typeof(apellidos.materno) != 'string') {
      return res.send({
        mensaje:'Materno debe ser texto'
      });
    }
    //verifica daca exista profesion si daca e un string
    if(profesion && typeof(profesion) != 'string') {
      return res.send({
        mensaje:'Profesion debe ser texto'
      });
    }

    //if( typeof(apellidos) != 'object') {
     // return res.send({
     //   mensaje:'Apellidos debe ser objeto'
     // });
    //}

    next();
};