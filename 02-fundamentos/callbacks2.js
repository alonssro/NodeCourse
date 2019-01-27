let empleados = [{
        id: 1,
        nombre: 'Alonso'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Aranzazú'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 4000
    }
]

let getSalario = (id, callback) => {
    let salarioDB = salarios.find(empleado => empleado.id === id);

    if (!salarioDB) {
        callback(`No existe salario para el empleado con id: ${id}`);
    } else {
        let empleadoSalario = empleados.find(empleado => empleado.id === id);
        salarioDB.nombre = empleadoSalario.nombre;
        callback(null, salarioDB)
    }
}

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB)
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }

    console.log(empleado)
})

getSalario(1, (err, salario) => {
    if (err) {
        return console.log(err);
    }

    console.log(salario);
})