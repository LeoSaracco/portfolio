let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}

function sendMessge() {
    var nombreValue = document.getElementById("Nombre").value;
    var msgValue = document.getElementById("Mensaje").value;

    if (nombreValue == '' || msgValue == '') {
        var span = document.createElement("span");
        span.innerHTML = "<b>Por favor, completá todos los campos</b>";
        alert(span.innerText)
    } else {
        var msgFinal = "Hola Leandro, soy " + nombreValue + ", quería comentarte que " + msgValue + ".";
        window.location.href = "https://api.whatsapp.com/send?phone=+5492224502247&text=" + msgFinal;
    }
}