let crear=document.getElementById("crear")

crear.addEventListener("click",()=>{
    document.querySelector(".super-box").style.display="flex"
})
let agregar=document.getElementById("agregar")

class Persona{
    nombre
    apellido
    nacimiento
    cedula
    edad
    constructor(nombre,apellido,cedula,nacimiento,edad){
        this.nombre=nombre
        this.apellido=apellido
        this.cedula=cedula
        this.nacimiento=nacimiento
        this.edad=edad
    }
    cumpleaños(){
        if(fecha.getMonth()+1==mes && fecha.getDate()==dia){
            
            return 'si'
            
        }
        else{
            return "no"   
            
        }
        
    }
    nombrec(){
        let completo=`${this.nombre} ${this.apellido}`
        return completo
    }
    
}


let fecha=new Date()
let nombref=document.getElementById("nombre")
let apellidof=document.getElementById("apellido")
let nacimientof=document.getElementById("nacimiento")
let cedulaf=document.getElementById("cedula")
let respiesta=document.getElementById("respuesta")
let nombres=document.getElementById("nombres")
let buscar=document.getElementById("buscar")
let encontar=document.getElementById("encontar")




let mes=null
let dia=null
let años=null
    
    
let si=""


const lista=[]
const cedulaBuscar=[]
let btn=document.getElementById("btn")
agregar.addEventListener("click",(e)=>{
    
    e.preventDefault()
    let edad1=nacimientof.value.split('-')
    años=parseInt(edad1[0])
    mes=parseInt(edad1[1])
    dia=parseInt(edad1[2])
    const añadido=new Persona(nombref.value,apellidof.value,cedulaf.value,nacimientof.value,fecha.getFullYear()-edad1[0]) 
    if(añadido.cumpleaños()=="si"){
        si="feliz cumpleños"
    }
    else{
        si="no cumples años hoy :("
    }
  
    nombref.value=""
    apellidof.value=""
    cedulaf.value=""
    lista.push(añadido)
 
    console.log(lista)
 

}) 
buscar.addEventListener("click",()=>{
    if(lista.find(listas=>listas.cedula==encontar.value)){
        if(localStorage.getItem("apellido")==null && localStorage.getItem("nombre")==null && localStorage.getItem("cumple")){
            
            console.log("almacenamiento local esta vacio")
          
           
        }
        else{ 
            index=lista.findIndex(listas=>listas.cedula==encontar.value)
            namee=lista[index].cedula
            ape=lista[index].apellido
            localStorage.setItem("cedula",JSON.stringify(namee))
            localStorage.setItem("apellido",JSON.stringify(lista))
            localStorage.setItem("cumple",JSON.stringify(si))
            location.href="mostrar.html"
            encontar.value=""
        }

        
       

    }
    else{
        console.log("no encontrado")
       
    }
    
})




    



