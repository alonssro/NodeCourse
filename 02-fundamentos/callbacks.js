let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Alonso',
        id
    }

    if (id === 20) {
        callback(`EL usuario con id ${id} no existe en BD`)
    } else {
        callback(usuario);

    }

}


getUsuarioById(20, (error, usuario) => {
    if (error) {
        return console.log(error);
    }
    console.log('Usuario de base de datos', usuario);

});