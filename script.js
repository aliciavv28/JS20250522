// Textos en español e inglés
let textos = {
    es: {
        titulo: "Mi lista de la compra",
        placeholder: "Escribe un nuevo producto",
        boton: "Añadir",
        confirmar: "¿Seguro que quieres borrar este producto?"
    },
    en: {
        titulo: "My Shopping List",
        placeholder: "Type a new product",
        boton: "Add",
        confirmar: "Are you sure you want to delete this product?"
    }
};

let idiomaActual = "es";

// Cambiar idioma
window.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");

    // Crear  un contendor para el select
    const contenedorSelect = document.createElement("div");
    contenedorSelect.style.textAlign = "center";
    contenedorSelect.style.marginBottom = "10px";

    // Crear select
    const selector = document.createElement("select");
    selector.id = "selectIdioma";
    selector.style.padding = "5px";
    selector.style.fontSize = "14px";
    selector.style.borderRadius = "5px";

    // Añadir las opciones
    const opcionEs = document.createElement("option");
    opcionEs.value = "es";
    opcionEs.textContent = "Español";

    const opcionEn = document.createElement("option");
    opcionEn.value = "en";
    opcionEn.textContent = "English";

    selector.appendChild(opcionEs);
    selector.appendChild(opcionEn);

    // Update para cuando se cambia el idoma
    selector.addEventListener("change", cambiarIdioma);
    contenedorSelect.appendChild(selector);
    h1.insertAdjacentElement("afterend", contenedorSelect);
});

// Funcion para cambiar de idioma
function cambiarIdioma() {
    let idiomaSeleccionado = document.getElementById("selectIdioma").value;
    idiomaActual = idiomaSeleccionado;

    document.querySelector("h1").textContent = textos[idiomaSeleccionado].titulo;
    document.getElementById("itemInput").placeholder = textos[idiomaSeleccionado].placeholder;
    document.getElementById("addItemBtn").textContent = textos[idiomaSeleccionado].boton;
}

// Agregar un nuevo producto a la lista
function addItem() {
    let textoItem = document.getElementById("itemInput").value;

    if (textoItem.trim() === "") {
        alert("Por favor rellena este campo");
        return;
    }

    let liNuevo = document.createElement("li");
    liNuevo.innerHTML = textoItem + `
        <div class="buttons">
            <span class="completeButton material-icons">done</span>   
            <span class="deleteButton material-icons">delete</span>
        </div>
    `;

    // Funcion para que se tache el item al marcar el tick
    liNuevo.querySelector(".completeButton").addEventListener("click", () => {
        liNuevo.classList.toggle("completed");
    });

    // Confirmacion para borrar al hacer click en la papelera
    liNuevo.querySelector(".deleteButton").addEventListener("click", () => {
        if (confirm("¿Seguro que quieres borrar este producto?")) {
            liNuevo.remove();
        }
    });

    // Al confirmar que si, se borra el item
    document.getElementById("itemsList").appendChild(liNuevo);
    document.getElementById("itemInput").value = "";
}
