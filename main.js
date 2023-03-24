let btnForm = document.querySelector('#btn-form')
var idList = [];
class Task {
    constructor(id, nombre, descripcion, vencTarea) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.vencTarea = vencTarea;
      this.completed = false;
    }
  
    tareaCompletada() {
      this.completed = true;
    }
  
    nuevaTarea(nombre, descripcion, vencTarea) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.vencTarea = vencTarea;
    }
  }
  
function nuevaId() {
    var numeroAleatorio = Math.floor(Math.random() * 10000);
    var newId = numeroAleatorio

    while (idList.includes(newId)) {
        numeroAleatorio = Math.floor(Math.random() * 10000);
        newId = numeroAleatorio
    }
    idList.push(newId);
    return newId;
}

console.log();

