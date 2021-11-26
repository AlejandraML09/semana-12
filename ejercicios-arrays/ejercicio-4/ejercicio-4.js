var container = document.createElement("div");       
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
                    parrafos.innerHTML +='Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores officiis, facilis blanditiis dignissimos tempora corrupti assumenda voluptatibus mollitia veritatis impedit quis fugiat. Voluptatem enim ratione similique maiores unde harum dignissimos?'
                    document.getElementById("PHP").appendChild(parrafos); 
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal'
                }
            break;
            
            case 1:
                for(j=0;j<4;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +='Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores officiis, facilis blanditiis dignissimos tempora corrupti assumenda voluptatibus mollitia veritatis impedit quis fugiat. Voluptatem enim ratione similique maiores unde harum dignissimos?'
                    document.getElementById("Javascript").appendChild(parrafos);  
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal'
                    // parrafos.addEventListener('load',lala)
                }
            break;
            
            case 2:
                for(j=0;j<4;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +='Quaerat autem atque aliquid repudiandae, minima molestiae at ullam vel itaque est voluptatem possimus officia voluptatibus non rerum sint quia amet. Doloremque atque, id dolor quia quaerat laboriosam! Ea veniam enim suscipit! Eos quidem autem aliquid aliquam quae voluptates quis.'
                    document.getElementById("Java").appendChild(parrafos); 
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal'
                    // parrafos.addEventListener('load',lala)
                }
            break;
            case 3:
                for(j=0;j<8;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +='Sunt natus sapiente officia! Dignissimos aspernatur dolorem perspiciatis, voluptatum perferendis iure suscipit harum molestias commodi eaque porro cupiditate blanditiis quidem iste in placeat mollitia officia! Mollitia blanditiis qui vero quam.'
                    document.getElementById("C").appendChild(parrafos);
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal' 
                }
            break;
            
            case 4:
                for(j=0;j<11;j++){
                    var parrafos = document.createElement("p")
                    parrafos.innerHTML +='Pariatur, similique? Odio laborum modi quisquam veniam voluptate rerum, iure pariatur reiciendis nemo dicta suscipit, doloribus, temporibus voluptatem veritatis ipsa repellendus ab nulla nam dolores voluptatibus magni nesciunt animi. Repellat.'
                    document.getElementById("Python").appendChild(parrafos); 
                    parrafos.style.fontSize='.7em'
                    parrafos.style.fontWeight='normal' 
                }
            break;

            default: console.log('entro en el else')
                break;
        }

        //     function lala(e){
        //     e.preventDefault()
        // }

    }

        
