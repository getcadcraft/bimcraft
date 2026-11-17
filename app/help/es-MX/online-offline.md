---
title: En línea y sin conexión
summary: Qué carga BimCraft desde el sitio, cómo Guardar para usar sin conexión hace que los modelos IFC y los dibujos DWG se abran sin conexión, y por qué nunca se sube nada de lo que abre.
keywords: sin conexión, en línea, internet, conexión, sin red, modo avión, visita a obra, guardar para usar sin conexión, lista sin conexión, subir, privacidad, wasm, webassembly, motor IFC, dwg, nube
from: 39e5c7eb
---

BimCraft lee sus archivos dentro de la pestaña del navegador. Abrir, inspeccionar, editar y guardar nunca envían sus archivos a ningún lado, en línea o sin conexión. [Trabajar sin conexión](common:offline) explica cómo funcionan las copias sin conexión en todas las aplicaciones; esta página cubre lo propio de BimCraft.

## Lo que BimCraft carga desde el sitio

| Parte | Cuándo se carga sin una copia sin conexión | Tamaño |
|---|---|---|
| La aplicación en sí, con el visor 3D y el código del motor IFC | Al abrir BimCraft | Varios megabytes |
| La parte WebAssembly del motor IFC | El primer archivo IFC que abra en la pestaña: "Iniciando el motor IFC…" | Unos 1.6 MB |

Los DWG y DXF, y los archivos y carpetas de proyecto y de familia, no necesitan nada extra: sus lectores son parte de la aplicación.

## Guardar BimCraft para uso sin conexión

1. Abra BimCraft mientras tiene conexión.
2. Haga clic en {{ui:Guardar para usar sin conexión}} en la barra de la aplicación, arriba.
3. Observe cómo el botón cuenta: "Guardando 40 de 212", por ejemplo. La copia de BimCraft pesa unos 11 MB, porque incluye el motor IFC.
4. Espere a que aparezca {{ui:Lista sin conexión}}.

Cuando diga {{ui:Lista sin conexión}}, los modelos IFC, los dibujos DWG y DXF, los archivos de proyecto, las carpetas y esta ayuda se abren sin conexión. No necesita abrir antes un IFC o un DWG para "calentar" los lectores.

Para actualizar o quitar la copia, haga clic en {{ui:Lista sin conexión}} y elija {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}.

## Lo que dice el botón

| Botón | Significa |
|---|---|
| {{ui:Guardar para usar sin conexión}} | Todavía no hay copia sin conexión en este navegador. Haga clic para guardar una |
| "Guardando *n* de *m*" | Guardando; mantenga la pestaña abierta hasta que termine |
| {{ui:Lista sin conexión}} | Guardado. Pase el puntero para ver cuándo; haga clic para abrir el menú |
| {{ui:No se pudo guardar}} | Algunos archivos no se descargaron. Revise su conexión y haga clic para intentar de nuevo. La última copia buena, si existe, se conserva |
| {{ui:Sin conexión no disponible}} | Esta ventana no puede guardar una copia sin conexión (una ventana privada o una computadora administrada). Vea [Trabajar sin conexión](common:offline) |

:::offline
Usted está sin conexión.

- Si el botón dice {{ui:Lista sin conexión}}, todo tipo de archivo se abre como de costumbre.
- Si no, solo funciona lo que esta pestaña ya cargó: un lector que nunca se cargó en esta pestaña no puede iniciar, y al abrir ese tipo de archivo aparece un error del navegador en la barra de estado. No recargue la pestaña hasta que vuelva a tener conexión.
:::

## Lo que nunca necesita conexión

Cuando BimCraft está abierto en la pestaña, estas funciones trabajan sin conexión aunque no haya copia guardada:

- Leer archivos de proyecto y de familia, y revisar carpetas.
- Elegir elementos, leer propiedades y editar valores IFC en un modelo que ya está abierto.
- {{ui:Guardar como IFC}} y {{ui:Descargar CSV}}: ambas son descargas hechas en la pestaña.

## Lo que todavía no está disponible

- **Guardado en la nube.** Los archivos se guardan solo en su computadora.

Vea [Dónde van sus archivos](common:your-files).
