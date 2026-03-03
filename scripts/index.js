// Abrir modal Convertir Mayusculas
const mdlConvertirMayusculas = document.getElementById('mdlConvertirMayusculas');
const openMdlCapitalLetters = document.getElementById('btnConvertir-Mayuscula');

openMdlCapitalLetters.addEventListener("click", () => {
    mdlConvertirMayusculas.showModal();
});

// Abrir modal Convertir Minúsculas
const mdlConvertirMinusculas = document.getElementById('mdlConvertirMinisculas');
const openMdlLowercase = document.getElementById('btnConvertir-Minuscula');

openMdlLowercase.addEventListener("click", () => {
    mdlConvertirMinusculas.showModal();
});

// Abrir modal buscar palabra
const mdlBuscarPalabra = document.getElementById('mdlBuscarPalabra');
const openMdlBuscarPalabra = document.getElementById('btnBuscar-Palabra');

openMdlBuscarPalabra.addEventListener("click", () => {
    mdlBuscarPalabra.showModal();
});

// Cerrar Modal
const closeModal = document.querySelectorAll('.btnClose-Modal');
closeModal.forEach(botonCerrar => {
    botonCerrar.addEventListener("click", () => {
        mdlConvertirMayusculas.close();
        mdlConvertirMinusculas.close();
        mdlBuscarPalabra.close();
    });
});