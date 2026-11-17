---
title: Incidencias y archivos BCF
summary: Guarde una vista del modelo como incidencia (cámara, elementos seleccionados, ocultos, sección), compártala como archivo BCF con otras herramientas de coordinación y abra sus archivos BCF para ver sus incidencias.
keywords: bcf, bcfzip, incidencia, incidencias, tema, punto de vista, informe de colisiones, coordinación, comentario, instantánea, abrir bcf, guardar bcf, exportar, importar
from: 2a6cf201
---

## Qué va a hacer

Señale un problema en el modelo, conserve la vista que lo muestra y después entréguelo en un archivo BCF, el formato que leen y escriben otras herramientas de coordinación.

## Pasos

1. Abra un modelo IFC y prepare la vista: gírela hacia él, seleccione los elementos implicados, oculte lo que estorba y córtelo con un plano o una caja de sección.
2. Pulse la pestaña {{ui:Incidencias}} a la derecha y, después, {{ui:Nueva incidencia desde esta vista}}.
3. Escriba un título y, si quiere, un comentario; elija un estado; indique su nombre o su correo electrónico (si ha iniciado sesión, se rellena el nombre de su cuenta; consulte [Configuración de BimCraft](topic:settings#your-name-on-issues)). Pulse {{ui:Crear incidencia}}.
4. Pulse {{ui:Mostrar}} en una incidencia para recuperar su vista.
5. Pulse {{ui:Guardar BCF}} para descargar todas las incidencias en un único archivo `.bcf`.
6. Para ver las incidencias de otra persona, pulse {{ui:Abrir BCF…}} y elija su archivo `.bcf` o `.bcfzip`.

## Qué debería ver

- Cada incidencia en la lista, con una imagen de su vista, su título, estado, autor y fecha.
- {{ui:Mostrar}} recupera la cámara, los elementos seleccionados, lo que estaba oculto (o solo lo visible) y la sección. Los elementos se localizan por su GlobalId en cada modelo abierto; la línea de estado indica si faltan algunos.
- Un plano o una caja de sección procedente de otra herramienta se muestra cuando coincide con los ejes del modelo; los planos inclinados o adicionales se recuperan como volumen de sección (hasta 6 planos). Una incidencia conserva la primera caja de un volumen de varias cajas.

## Conviene saber

- El archivo es BCF 2.1 y conserva la vista en las coordenadas propias del modelo, de modo que otras herramientas colocan la cámara en el mismo sitio.
- Las incidencias permanecen en esta pestaña hasta que las guarde. Al abrir otro modelo, la lista se mantiene; abra el modelo al que se refieren las incidencias antes de mostrarlas.
- Una cámara paralela (ortogonal) de otra herramienta se muestra con la cámara en perspectiva de este visor, retrocedida para que la misma parte del modelo llene la vista.

## Errores habituales

- **Mostrar movió la cámara a un lugar extraño.** La incidencia se creó en otro modelo o con otras coordenadas. Abra primero el modelo correcto.
- **El archivo no se abre.** No es un zip BCF o está dañado; la línea de estado indica el motivo.

## Siguiente

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
