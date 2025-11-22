const API_SERIAL = "https://api-camara.vercel.app/get/serial";

async function cargarSerial() {
    try {
        const res = await fetch(API_SERIAL, { cache: "no-store" });
        const data = await res.json();

        const contenedor = document.getElementById("serial-box");
        contenedor.innerHTML = "";

        // Orden: más nuevos primero
        const ordenado = [...data].sort((a, b) => b.id - a.id);

        ordenado.forEach(log => {
            const line = document.createElement("div");
            line.classList.add("serial-line");

            line.innerHTML = `
                <p>
                    <b>${log.date}</b> | 
                    <b>${log.time}</b> — 
                    ${log.content}
                </p>
            `;

            contenedor.appendChild(line);
        });

        contenedor.scrollTop = 0;


    } catch (err) {
        console.error("Error cargando serial:", err);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarSerial();

    // 🔁 Actualizar cada 5 segundos (5000 ms)
    setInterval(cargarSerial, 5000);
});


