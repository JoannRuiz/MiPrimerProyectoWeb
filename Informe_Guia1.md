# Guía 1 – Configuración del entorno de desarrollo web

**Actividad:** Configuración del entorno de desarrollo web
**Proyecto:** MiPrimerProyectoWeb
**Fecha:** 16 de octubre de 2026

---

## Paso 1. Investigación de herramientas

Una aplicación web se ejecuta bajo el modelo **cliente-servidor**: el navegador solicita recursos y el servidor responde con HTML, CSS, JavaScript y datos. Para construir y probar ese flujo se necesitan cuatro herramientas básicas.

| Herramienta | Ejemplos | Función | ¿Por qué es necesaria? |
|---|---|---|---|
| **Editor de código** | Visual Studio Code, Sublime Text, WebStorm | Escribir y organizar el código con resaltado de sintaxis, autocompletado, búsqueda y extensiones. | Hace el código legible, reduce errores de escritura y permite gestionar todo el proyecto en un solo lugar. |
| **Navegador web** | Google Chrome, Mozilla Firefox, Microsoft Edge | Interpretar y mostrar HTML, CSS y JavaScript. Es el "cliente" de la aplicación. | Es donde se ve el resultado real; probar en varios navegadores garantiza compatibilidad. |
| **Servidor local** | Extensión Live Server, `python -m http.server`, Node.js (`http-server`), XAMPP | Servir los archivos del proyecto desde `http://localhost` y recargar la página al guardar. | Simula un servidor real, evita restricciones de seguridad del navegador al abrir archivos con `file://` y agiliza las pruebas. |
| **Herramientas de desarrollador (DevTools)** | Chrome DevTools, Firefox Developer Tools | Inspeccionar el DOM y los estilos, ver errores en la consola, analizar la red, depurar JavaScript y simular dispositivos móviles. | Permiten encontrar y corregir errores rápidamente y entender cómo el navegador interpreta la página. |

**Conclusión:** el editor sirve para *crear*, el servidor local para *ejecutar*, el navegador para *visualizar* y las DevTools para *depurar*. Juntos forman el ciclo básico de trabajo: escribir → guardar → ver → inspeccionar → corregir.

---

## Paso 2. Instalación y configuración

### 2.1 Visual Studio Code
1. Descargar desde <https://code.visualstudio.com> la versión para el sistema operativo (Windows, macOS o Linux).
2. Ejecutar el instalador y marcar, en Windows, las opciones *"Agregar al PATH"* y *"Abrir con Code"*.
3. Abrir VS Code e instalar las extensiones recomendadas (panel Extensiones, `Ctrl+Shift+X`):
   - **Live Server** (servidor local con recarga automática).
   - **Spanish Language Pack** (interfaz en español).
   - **Prettier** (formateo automático, opcional).
   - **HTML CSS Support** / **Auto Rename Tag** (opcionales).

### 2.2 Navegador actualizado
- Instalar o actualizar **Google Chrome** (<https://www.google.com/chrome>) o **Firefox**.
- Verificar la versión en *Menú → Ayuda → Acerca de*.

### 2.3 Configuración del entorno
- Abrir la carpeta del proyecto con *Archivo → Abrir carpeta → MiPrimerProyectoWeb*.
- Activar **Autoguardado** (*Archivo → Autoguardado*).
- Verificar que la codificación sea **UTF-8** (barra inferior de VS Code).
- Para ejecutar: clic derecho sobre `index.html` → **Open with Live Server**.

### 2.4 Exploración de funcionalidades de VS Code
| Función | Atajo | Uso |
|---|---|---|
| Explorador de archivos | `Ctrl+Shift+E` | Ver la estructura del proyecto |
| Paleta de comandos | `Ctrl+Shift+P` | Ejecutar cualquier comando |
| Buscar en archivos | `Ctrl+Shift+F` | Buscar texto en todo el proyecto |
| Terminal integrada | `` Ctrl+` `` | Ejecutar comandos sin salir del editor |
| Autocompletado Emmet | escribir `!` + `Tab` | Genera la plantilla base de HTML5 |
| Formatear documento | `Shift+Alt+F` | Ordena la indentación del código |

### 2.5 Exploración de las herramientas de desarrollador (tecla `F12`)
| Pestaña | Para qué sirve |
|---|---|
| **Elements** | Ver y modificar en vivo el HTML (DOM) y el CSS de la página |
| **Console** | Ver errores y mensajes de `console.log()`; probar JavaScript |
| **Sources** | Depurar JavaScript con puntos de interrupción |
| **Network** | Ver cada archivo que descarga la página, su tamaño y tiempo de carga |
| **Application** | Revisar almacenamiento local, cookies y caché |
| **Device Toolbar** (`Ctrl+Shift+M`) | Simular pantallas de móvil y tableta |

---

## Paso 3. Estructura del proyecto

```
MiPrimerProyectoWeb/
├── index.html        ← página inicial
├── css/
│   └── estilos.css   ← hoja de estilos
├── js/
│   └── main.js       ← lógica en JavaScript
└── img/
    └── logo.svg      ← imágenes del sitio
```

**Buenas prácticas aplicadas:**
- Nombres de archivos y carpetas en minúsculas y sin espacios ni tildes.
- Separar contenido (HTML), presentación (CSS) y comportamiento (JS).
- Enlazar CSS en el `<head>` y JS al final del `<body>`.
- Usar rutas relativas (`css/estilos.css`, `img/logo.svg`).

---

## Paso 4. Página inicial (`index.html`)

La página incluye todos los elementos solicitados, con tema **tecnológico** (herramientas del desarrollo web):

| Requisito | Dónde está en el código |
|---|---|
| Título | `<title>` y `<h1>` |
| Encabezado | `<header class="encabezado">` |
| Párrafo | `<p>` en la sección "¿Qué es la Ingeniería Web?" |
| Imagen | `<img src="img/logo.svg" alt="...">` |
| Enlace | `<a href="https://developer.mozilla.org/es/docs/Web/HTML">` |
| Sección de contenido | `<section>` "Herramientas del entorno de desarrollo" |

Se usan etiquetas semánticas de HTML5 (`header`, `main`, `section`, `footer`), el idioma declarado (`lang="es"`), la codificación UTF-8 y el meta viewport para adaptarse a móviles.

---

## Comprobación

1. Abrir `index.html` con Live Server (o doble clic en el archivo).
2. Verificar que se vea el logo, los estilos y que el botón muestre un mensaje.
3. Abrir DevTools (`F12`) y confirmar que **Console** no muestra errores y que **Network** carga `estilos.css`, `main.js` y `logo.svg` con estado 200.

---

## Fuentes sugeridas
- MDN Web Docs – HTML: <https://developer.mozilla.org/es/docs/Web/HTML>
- Documentación de Visual Studio Code: <https://code.visualstudio.com/docs>
- Chrome DevTools: <https://developer.chrome.com/docs/devtools>
