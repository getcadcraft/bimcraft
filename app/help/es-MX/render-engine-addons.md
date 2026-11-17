---
title: Añadir un motor de render con un complemento
summary: Qué puede añadir un complemento a la lista de motores del cuadro Renderizar, el permiso que necesita para ejecutar un programa, y qué revisa y pregunta Studio.
keywords: complemento, addon, motor, motor de render, desarrollador, engine.run, permiso, programa, script, firmado, studio, api
from: 06295376
---

Un complemento (Configuración › Complementos) puede añadir un motor a la lista **Motor** de {{ui:Renderizar}}. El texto completo para los autores de complementos está en la sección 16 de la especificación de complementos; en resumen:

- El complemento registra un motor con un id que empieza con su propio identificador, un nombre, ajustes opcionales y **ya sea** un programa que ejecutar **o** una función en JavaScript que dibuja la imagen.
- Un motor que ejecuta un programa necesita el permiso **`engine.run`**, que se muestra antes de instalar y en Configuración. Solo se ejecuta en Studio; en el navegador aparece como un archivo que se guarda.
- El complemento indica el programa (un nombre de archivo simple: nunca un shell), un script que está **dentro del complemento firmado**, y los argumentos formados por marcadores y palabras simples. Studio encuentra el programa o le pide que lo indique una vez.
- La primera vez que un complemento ejecuta un programa, **Studio le pregunta en su propio cuadro de diálogo**: qué complemento, qué programa, y que un script puede hacer cualquier cosa que pueda hacer el programa. Permítalo solo para un complemento en el que confíe. Su respuesta se recuerda para ese complemento y ese programa.
- El paquete (la escena en USD y un archivo de ajustes, con el archivo glTF cuando el complemento lo pide) y el script del complemento se colocan en una carpeta temporal nueva, el programa se ejecuta ahí, y la imagen vuelve marcada con el nombre del motor del complemento.

:::note
Los complementos solo pueden añadir motores de render a partir de la API de complementos 1.4. Un ejemplo práctico para un renderizador de línea de comandos de código abierto está en su propio repositorio; todavía no se ha ejecutado en ese renderizador.
:::
