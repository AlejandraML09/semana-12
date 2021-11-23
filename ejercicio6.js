var cant_num=prompt('Ingrese la cantidad de numeros a solicitar')
var ingreso=document.getElementById('ingreso')
ingreso.value='Numeros solicitados:'+ cant_num
var i
var numerosCargados=[];
for( i=0;i < cant_num; i++)
{
    var iteracion=prompt('Vuelva a ingresar un numero nuevo:')
    numerosCargados[i]=iteracion
    numerosCargados.push()
    if(iteracion==undefined)
    {
        break
    }

}

var iteracioncargada=document.getElementById('iteracioncargada')
iteracioncargada.value ='Numeros ingresados: ' + numerosCargados

var numerospares= [];
var numerosimpares= [];

for ( i=0;i<numerosCargados.length;i++) {
    if (numerosCargados[i] %2 === 0) 
    {
        numerospares.push(numerosCargados[i])
        
    }
    else{
        numerosimpares.push(numerosCargados[i])
    }
}
console.dir(numerosCargados)
console.dir(numerospares)
console.dir(numerosimpares)

    var listaelementos=document.getElementById('listaelementos')
    var par=document.getElementById('par')
    var impar=document.getElementById('impar')


        for(i=0; i< numerosCargados.length; i++){
            listaelementos.innerHTML +='<li>'+ ' Elemento ingresado: ' + numerosCargados[i] + '</li>' 

        }    

    for(i=0; i < numerospares.length;i++){
    par.innerHTML +='<li>'+ ' Elemento PAR ingresado: ' + numerospares[i] + '</li>' 
    }

    for(i=0; i < numerosimpares.length;i++){
    impar.innerHTML+='<li>'+ ' Elemento IMPAR ingresado: ' + numerosimpares[i] + '</li>'    
    }