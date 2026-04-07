# WebCam Security

Aplicación web para monitorear una cámara de seguridad en tiempo real usando una ESP32-CAM.

Detecta movimiento, toma fotos automáticamente y las envía al usuario por Telegram.

## Funcionalidades

- Ver la cámara en tiempo real desde la web  
- Detección de movimiento  
- Captura automática de imágenes  
- Envío de fotos por Telegram  

## Tecnologías

- HTML para la interfaz  
- Node.js y Express para el backend  
- ESP32-CAM programada con Arduino IDE  
- API de Telegram  

## Repositorio

https://github.com/kevvj/web-camSecurity  

## Cómo usar

1. Configura la ESP32-CAM  
2. Configura el bot de Telegram con su token  
3. Ejecuta el servidor:  
   ```bash
   git clone https://github.com/kevvj/web-camSecurity
   cd web-camSecurity
   npm install
   npm start
