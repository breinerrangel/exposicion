/* const nombre=document.getElementById("nombre")
const apellido=document.getElementById("apellido")
const edad=document.getElementById("edad")
const enviar=document.getElementById("enviar") */
let display=document.querySelector(".display")
let modal=document.querySelector(".modal")



    
   
 
const datos2=JSON.parse(localStorage.getItem("apellido"))

const datos=(JSON.parse(localStorage.getItem("cedula")))
const datos3=JSON.parse(localStorage.getItem("cumple"))

console.log(datos2)
console.log(datos)
console.log(datos3)
for(let i=0;i<datos2.length;i++){
    if(datos2[i].cedula==datos){
        console.log(datos2[i].nombre)
    }

}
