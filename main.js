// Script básico - Mi Primer Proyecto Web
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnSaludo");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    mensaje.textContent = "¡JavaScript funciona! Tu entorno de desarrollo está listo.";
    console.log("Botón pulsado: revisa esta línea en la consola de DevTools (F12).");
  });
});
