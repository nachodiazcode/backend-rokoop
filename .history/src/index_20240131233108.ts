import app from './app';
import { startConnection } from './database';

// Cargar las variables de entorno al principio
require('dotenv').config();

async function main() {
    // Iniciar la conexión a la base de datos
    startConnection();

    // Obtener el puerto de la aplicación desde las variables de entorno
    const port = process.env.PORT || 3000;

    // Escuchar en el puerto definido
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });

    // Acceder a las variables de entorno
    console.log('Access Key:', process.env.S3_ACCESS_KEY_ID);
    console.log('Secret Key:', process.env.S3_SECRET_KEY);
}

// Llamar a la función principal
main();