var miArreglo = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  ];

/*miArreglo.forEach(function(currentValue){
  document.write(currentValue.title);
  document.write("<br>");
});*/

for (var i = 0; i < 10; i++) { //aqui tengo las primeras 10 objetos que saqué del arreglo json principal
 //miArreglo[i] = miArreglo[i].title;
 document.write ("<li>"+ miArreglo[i].title +"</li>")
};
 //document.getElementbyId("show").innerHTML += ("<li>" + miArreglo[i].title + "</li>" + "<br>")  //aquí imprimo en una lista los 10 objetos  

/*var arr = miArreglo.slice(0,10);
  arr.forEach(function(el){
  console.log(el);
  });*/
function agregarTarea(){ //función que va a añadir más tareas a mi lista
  var lista = document.getElementById("tareaInput").value;
  var contarTarea = document.getElementsByClassName("tarea_lista");
  contarTarea[0].innerHTML += "<li>"+lista +"</li>";
  var nuevaT = document.getElementById("show");
  

  miArreglo.push(input.value);
  
  //input.value=""
  
}

   






