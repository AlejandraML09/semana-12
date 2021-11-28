var container = document.createElement("div"); 
container.innerHTML = "algo";      
container.id='lenguajes-container'
document.body.appendChild(container);  
var i, j
    let lenguajes=['PHP','Javascript','Java','C','Python']
    let lenguajescontainer=document.getElementById('lenguajes-container')
    let vinculos=document.getElementsByTagName('a')
    let listas= document.getElementsByTagName('li')
    let anclas = document.getElementsByTagName('h2')
    var titulos= []

    for(i=0;i < lenguajes.length;i++){
        let h2=document.createElement('h2')
        titulos.push(h2)
        document.body.appendChild(titulos[i]);
        titulos[i].innerHTML = lenguajes[i]; 
        lenguajescontainer.innerHTML += '<li> <a'+ '>'+ lenguajes[i]  + '</a> </li>' ;
        anclas[i+1].id += lenguajes[i] 
        vinculos[i].href += '#'+ lenguajes[i]
        switch (i) {
            case 0:
                for(j=0;j<4;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +=writeloremipsum()
                    document.getElementById("PHP").appendChild(parrafos); 
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal'
                }
            break;
            
            case 1:
                for(j=0;j<4;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +=writeloremipsum()
                    document.getElementById("Javascript").appendChild(parrafos);  
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal'
                }
            break;
            
            case 2:
                for(j=0;j<4;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +=writeloremipsum()
                    document.getElementById("Java").appendChild(parrafos); 
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal'
                }
            break;
            case 3:
                for(j=0;j<8;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +=writeloremipsum()
                    document.getElementById("C").appendChild(parrafos);
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal' 
                }
            break;
            
            case 4:
                for(j=0;j<11;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +=writeloremipsum()
                    document.getElementById("Python").appendChild(parrafos); 
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal' 
                }
            break;

            default: console.log('entro en el else')
                break;
        }


    }


    function writeloremipsum(){
        var lorem= []
        var generador = ['Nostrum','ratione','consequuntur','architecto','pariatur','animi!','repudiandae','laborum','Blanditiis','accusamus'] 
        for(var x=0;x < 50;x++){
            var index= Math.floor((Math.random()* generador.length)+0);
            lorem+=generador[index] + ' '
        }
        return lorem
    }

