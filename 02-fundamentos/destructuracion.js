let deadpool = {
    nombre: 'Wade',
    apellido: 'Wingston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}


console.log(deadpool.getNombre());

let {
    nombre: primerNombre,
    apellido,
    poder
} = deadpool;

console.log(primerNombre, apellido, poder);