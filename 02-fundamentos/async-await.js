let getNombre = async() => {
    return 'Alonso';
}


getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('Error de Async', e)
});