// Cada vez que se recarga la página debe añadir una visita más

let contador = localStorage.getItem(`contadorVisitas`)
contador = contador ? parseInt(contador) : 0;
contador++
// Debe persistir el número aunque se cierre el navegador
contadorVisitas()


// Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" 
// y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
const btnReestablecer = document.getElementById(`btnReestablecer`);
btnReestablecer.addEventListener(`click`,function(){
    contador = 0;
    contadorVisitas();
})

function contadorVisitas(){
    localStorage.setItem("contadorVisitas", contador);
    document.getElementById("contadorVisitas").textContent = contador;
}