---
title: Añadir un motor de render con un complemento
summary: Qué puede añadir un complemento a la lista Motor del cuadro de diálogo Renderizar, el permiso que necesita para ejecutar un programa, y qué comprueba y pregunta Studio.
keywords: complemento, addon, motor, motor de render, desarrollador, engine.run, permiso, programa, script, firmado, studio, api
from: 06295376
---

Un complemento (Configuración › Complementos) puede añadir un motor a la lista Motor de {{ui:Render}}. El texto completo para los autores de complementos está en la sección 16 de la especificación de complementos; en resumen:

- El complemento registra un motor con un id que empieza por el suyo, un nombre, ajustes opcionales y **o bien** un programa que ejecutar **o bien** una función en JavaScript que dibuja la imagen.
- Un motor que ejecuta un programa necesita el permiso **`engine.run`**, que se muestra antes de instalar y en Configuración. Solo funciona en Studio; en el navegador aparece como un archivo que guardar.
- El complemento indica el programa (un nombre de archivo simple, nunca un intérprete de comandos), un script que está **dentro del complemento firmado** y los argumentos formados por marcadores y palabras simples. Studio localiza el programa o le pide que lo indique una vez.
- La primera vez que un complemento ejecuta un programa, **Studio le pregunta en su propio cuadro de diálogo**: qué complemento, qué programa, y que un script puede hacer cualquier cosa que pueda hacer el programa. Permítalo solo para un complemento en el que confíe. Su respuesta se recuerda para ese complemento y ese programa.
- El paquete (la escena como USD y un archivo de ajustes, con el archivo glTF cuando el complemento lo pide) y el script del complemento se copian a una carpeta temporal nueva, el programa se ejecuta allí y la imagen vuelve marcada con el nombre del motor del complemento.

:::note
Los complementos solo pueden añadir motores de render desde la API de complementos 1.4. Un ejemplo completo para un renderizador de línea de comandos de código abierto está en su propio repositorio; todavía no se ha ejecutado en ese renderizador.
:::
