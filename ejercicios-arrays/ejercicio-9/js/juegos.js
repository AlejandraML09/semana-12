
var modificartexto= document.getElementById('btn-mario')
var textomodificado=document.getElementById('paragraph-mario')
var veces=0
modificartexto.addEventListener('click',function(){
  textomodificado.innerHTML = '<strong> Se compró una vez </strong>'
  veces++
  if(veces >= 2)
  {
    textomodificado.innerHTML= '<strong> Se compró '+ veces + ' veces </strong>'
  }
})


var modificartextomk= document.getElementById('btn-mk')
var textomodificadomk=document.getElementById('paragraph-mk')
var vecesmk=0
modificartextomk.addEventListener('click',function(){
  textomodificadomk.innerHTML = '<strong> Se compró una vez </strong>'
  vecesmk++
  if(vecesmk >= 2)
  {
    textomodificadomk.innerHTML= '<strong> Se compró '+ vecesmk + ' veces </strong>'
  }
})