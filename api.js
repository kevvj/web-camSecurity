const GALERIA_ID = "galeria";
const API_URL = "https://api-camara.vercel.app/get/img";

async function cargarImagenes() {
    try {
        const res = await fetch(API_URL, { cache: "no-store" });
        const data = await res.json();

        const contenedor = document.getElementById(GALERIA_ID);

        // Limpiar antes de cargar
        contenedor.innerHTML = "";

        // Orden invertido: primero las más nuevas
        const invertidas = [...data].reverse();

        invertidas.forEach((imgObj) => {
            if (!imgObj.content) return;

            // --- Crear contenedor para cada imagen ---
            const box = document.createElement("div");
            box.classList.add("img-box"); 
            // puedes cambiar el nombre si quieres

            // --- Imagen ---
            const img = document.createElement("img");
            img.src = "data:image/jpeg;base64," + imgObj.content;
            img.alt = "imagen_id_" + imgObj.id;

            // --- Fecha y hora ---
            const fecha = document.createElement("p");
            fecha.classList.add("fecha-img");
            fecha.textContent = `${imgObj.date} ${imgObj.time}`;

            // Agregar elementos al div
            box.appendChild(img);
            box.appendChild(fecha);

            // Agregar a la galería
            contenedor.appendChild(box);
        });

    } catch (err) {
        console.error("Error cargando imágenes:", err);
    }
}

document.addEventListener("DOMContentLoaded", cargarImagenes);
