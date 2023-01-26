// let numero1 = 12;
// let numero2 = 11;
// let numero3 = 0;
// let edad = prompt("dime tu edad");
// edad = parseInt(edad);

// if (edad > 18) {
//     alert("puedes ingresar");
// }else{
//     alert("no puedes ingresar");
// }

// 1.- En un evento de Influencers, solamente se acepta canje de influencers con mas de 500 000 de seguidores en cualquier red SpeechRecognitionAlternative, preguntar el numero de seguidores al influencers y si tienen los seguidores nesarios, dejarlo pasar, en caso que no cumpla lo necesario que no pueda ingresar. 

// let seguidores = prompt("Cuantos seguidores tienes?");

// seguidores = parseInt(seguidores);

// if (1000000 < seguidores) {
//     alert("ingresaste");
// }else{
//     alert("no ingresaste");
// }




// 2.- Los mismo influencers tienen que sumar 5 millones de seguidores en total para que les den un canje de un viaje todo pagado a MediaStreamAudioDestinationNode, son 7 influencers, determinar si estas aptos para el viaje o no


// let seguidores1 = prompt("infuencer1: Cuantos seguidores tienes?");
// seguidores1 = parseInt(seguidores1);

// let seguidores2 = prompt("infuencer2: Cuantos seguidores tienes?");
// seguidores2 = parseInt(seguidores2);

// let seguidores3 = prompt("infuencer3: Cuantos seguidores tienes?");
// seguidores3 = parseInt(seguidores3);

// let seguidores4 = prompt("infuencer4: Cuantos seguidores tienes?");
// seguidores4 = parseInt(seguidores4);

// let seguidores5 = prompt("infuencer5: Cuantos seguidores tienes?");
// seguidores5 = parseInt(seguidores5);

// let seguidores6 = prompt("infuencer6: Cuantos seguidores tienes?");
// seguidores6 = parseInt(seguidores6);

// let seguidores7 = prompt("infuencer7: Cuantos seguidores tienes?");
// seguidores7 = parseInt(seguidores7);

// seguidorestotales = seguidores1 + seguidores2 + seguidores3 + seguidores4 + seguidores5 + seguidores6 + seguidores7;

// if (5000000 < seguidorestotales) {
//     alert("se ganaron un canje");
// } else {
//     alert("no cumplen los requisitos")
// }






// 3.- Salieron todos los influencer a comprar comida  y tienen un total de S/20 000 para poder gastar en comida, hacen 3 compras distintas y necesitan ver cuanto les va quedando al final de realizar todas las compras

let dinero = 20000;

let gasto1 = prompt("Primer gasto");
gasto1 = parseInt(gasto1);

dinero = dinero - gasto1;
alert("tienes: " + dinero);


let gasto2 = prompt("Segundo gasto");
gasto2 = parseInt(gasto2);

dinero = dinero - gasto2;
alert("tienes: " + dinero);


let gasto3 = prompt("Tercer gasto");
gasto3 = parseInt(gasto3);

dinero = dinero - gasto3;
alert("tienes: " + dinero);