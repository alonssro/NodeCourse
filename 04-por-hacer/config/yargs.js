const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea especificada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}