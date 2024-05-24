db.menu.insertOne({"combo": "combo1", "items": "Hamburguesa con papas", "bebida": "Pepsi"})
db.menu.insertMany([{"combo": "combo2", "items": "Wraps de pollo", "bebida": "Coca-cola"}, {"combo": "combo3", "itemts": "Nuggets de pollo", "bebida": "Té helado"}])
db.menu.find()
db.menu.updateOne({"combo": "combo1"}, {$set:{"bebida": "Té helado"}})
db.menu.find({"combo":"combo1"})
db.menu.deleteOne({"bebida":"Coca-cola"})
///
db.dbEmpleados.insertOne({nombreCompleto: '', fechaNacimiento: '', DUI: '', telefono: '', departamento: '', direccion: '', salario: ''})

db.dbEmpleados.insertOne({nombreCompleto: 'Jose Rodolfo Vargas', fechaNacimiento: '17/12/2002', DUI: '', telefono: '', departamento: 'San Salvador', direccion: '', salario: ''})
db.dbEmpleados.insertOne({nombreCompleto: 'Angie Michelle Diaz', fechaNacimiento: '04/12/2002', DUI: '', telefono: '', departamento: 'San Salvador', direccion: '', salario: ''})
db.dbEmpleados.insertOne({nombreCompleto: 'Nelson Manuel Garcia', fechaNacimiento: '02/09/2002', DUI: '', telefono: '', departamento: 'San Salvador', direccion: '', salario: ''})
db.dbEmpleados.insertOne({nombreCompleto: 'Esmeralda Vanessa Vargas', fechaNacimiento: '04/05/2000', DUI: '', telefono: '', departamento: 'San Salvador', direccion: '', salario: ''})
db.dbEmpleados.insertOne({nombreCompleto: 'Ethel Celina Vargas', fechaNacimiento: '03/08/1962', DUI: '', telefono: '', departamento: 'San Salvador', direccion: '', salario: ''})
db.dbEmpleados.insertOne({nombreCompleto: 'Jose Moises Martinez', fechaNacimiento: '25/12/2002', DUI: '', telefono: '', departamento: 'San Salvador', direccion: '', salario: ''})

db.dbEmpleados.insertOne({nombreCompleto: 'Jose Rodolfo Vargas', fechaNacimiento: '17/12/2002', DUI: '001234567', telefono: '7777-8888', departamento: 'San Salvador', direccion: 'Colonia Escalón, calle Los Laureles #123', salario: 1500})
db.dbEmpleados.insertOne({nombreCompleto: 'Angie Michelle Diaz', fechaNacimiento: '04/12/2002', DUI: '009876543', telefono: '2222-3333', departamento: 'San Salvador', direccion: 'Colonia San Benito, calle El Mirador #456', salario: 1800})
db.dbEmpleados.insertOne({nombreCompleto: 'Nelson Manuel Garcia', fechaNacimiento: '02/09/2002', DUI: '003210987', telefono: '4444-5555', departamento: 'San Salvador', direccion: 'Colonia Flor Blanca, calle Las Rosas #789', salario: 1600})
db.dbEmpleados.insertOne({nombreCompleto: 'Esmeralda Vanessa Vargas', fechaNacimiento: '04/05/2000', DUI: '002345678', telefono: '9999-0000', departamento: 'San Salvador', direccion: 'Colonia Maquilishuat, calle Los Pinos #321', salario: 2000})
db.dbEmpleados.insertOne({nombreCompleto: 'Ethel Celina Vargas', fechaNacimiento: '03/08/1962', DUI: '004567890', telefono: '6666-7777', departamento: 'San Salvador', direccion: 'Colonia San Francisco, calle Las Camelias #654', salario: 2500})
db.dbEmpleados.insertOne({nombreCompleto: 'Jose Moises Martinez', fechaNacimiento: '25/12/2002', DUI: '005678901', telefono: '3333-4444', departamento: 'San Salvador', direccion: 'Colonia San Mateo, calle Las Orquídeas #987', salario: 1700})

///
db.dbEmpleados.insertMany([{nombreCompleto:'Juan Pérez',fechaNacimiento:'10/05/1990',DUI:'001234567',telefono:'7777-8888',departamento:'San Salvador',direccion:'Colonia Escalón, calle Los Laureles #123',salario:2000},{nombreCompleto:'María García',fechaNacimiento:'15/09/1985',DUI:'009876543',telefono:'2222-3333',departamento:'Santa Ana',direccion:'Colonia San Benito, calle El Mirador #456',salario:2200},{nombreCompleto:'Pedro Hernández',fechaNacimiento:'20/03/1995',DUI:'003210987',telefono:'4444-5555',departamento:'La Libertad',direccion:'Colonia Flor Blanca, calle Las Rosas #789',salario:1800},{nombreCompleto:'Ana Martínez',fechaNacimiento:'05/11/1982',DUI:'002345678',telefono:'9999-0000',departamento:'San Miguel',direccion:'Colonia Maquilishuat, calle Los Pinos #321',salario:2400},{nombreCompleto:'Luis López',fechaNacimiento:'12/07/1978',DUI:'004567890',telefono:'6666-7777',departamento:'Usulután',direccion:'Colonia San Francisco, calle Las Camelias #654',salario:2100}])


db.dbEmpleados.insertMany([
    {
      nombreCompleto: 'Juan Pérez',
      fechaNacimiento: '10/05/1990',
      DUI: '001234567',
      telefono: '7777-8888',
      departamento: 'San Salvador',
      direccion: 'Colonia Escalón, calle Los Laureles #123',
      salario: 2000
    },
    {
      nombreCompleto: 'María García',
      fechaNacimiento: '15/09/1985',
      DUI: '009876543',
      telefono: '2222-3333',
      departamento: 'Santa Ana',
      direccion: 'Colonia San Benito, calle El Mirador #456',
      salario: 2200
    },
    {
      nombreCompleto: 'Pedro Hernández',
      fechaNacimiento: '20/03/1995',
      DUI: '003210987',
      telefono: '4444-5555',
      departamento: 'La Libertad',
      direccion: 'Colonia Flor Blanca, calle Las Rosas #789',
      salario: 1800
    },
    {
      nombreCompleto: 'Ana Martínez',
      fechaNacimiento: '05/11/1982',
      DUI: '002345678',
      telefono: '9999-0000',
      departamento: 'San Miguel',
      direccion: 'Colonia Maquilishuat, calle Los Pinos #321',
      salario: 2400
    },
    {
      nombreCompleto: 'Luis López',
      fechaNacimiento: '12/07/1978',
      DUI: '004567890',
      telefono: '6666-7777',
      departamento: 'Usulután',
      direccion: 'Colonia San Francisco, calle Las Camelias #654',
      salario: 2100
    }])

    ///
  db.menu.find()

  ///

  db.dbEmpleados.updateOne({ nombreCompleto: 'Juan Pérez' }, { $set: { nombreCompleto: 'Juan Pérez Martínez' } }); db.dbEmpleados.updateOne({ nombreCompleto: 'María García' }, { $set: { direccion: 'Colonia San Benito, Avenida Los Robles #789' } }); db.dbEmpleados.updateOne({ nombreCompleto: 'Pedro Hernández' }, { $set: { salario: 2000 } });

  