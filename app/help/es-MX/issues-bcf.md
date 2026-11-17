---
title: Incidencias y archivos BCF
summary: Guarde una vista del modelo como incidencia (cámara, elementos seleccionados, ocultos y sección), compártala como archivo BCF con otras herramientas de coordinación, y abra sus archivos BCF para ver sus incidencias.
keywords: bcf, bcfzip, incidencia, incidencias, tema, punto de vista, informe de interferencias, coordinación, comentario, instantánea, abrir bcf, guardar bcf, exportar, importar
from: 2a6cf201
---

## Qué hará

Señale un problema en el modelo y conserve la vista que lo muestra. Después, compártala en un archivo BCF, el formato que leen y escriben otras herramientas de coordinación.

## Pasos

1. Abra un modelo IFC y prepare la vista: oriéntela hacia él, elija los elementos involucrados, oculte lo que estorba y córtelo con un plano o una caja de sección.
2. Haga clic en la pestaña {{ui:Incidencias}} a la derecha y luego en {{ui:Nueva incidencia desde esta vista}}.
3. Escriba un título y, si lo desea, un comentario; elija un estado; indique su nombre o correo electrónico (con sesión iniciada, se llena el nombre de su cuenta; vea [Configuración de BimCraft](topic:settings#your-name-on-issues)). Haga clic en {{ui:Crear incidencia}}.
4. Haga clic en {{ui:Mostrar}} en una incidencia para volver a poner su vista.
5. Haga clic en {{ui:Guardar BCF}} para descargar todas las incidencias en un solo archivo `.bcf`.
6. Para ver incidencias que hizo otra persona, haga clic en {{ui:Abrir BCF…}} y elija su archivo `.bcf` o `.bcfzip`.

## Qué debe ver

- Cada incidencia en la lista, con una imagen de su vista, su título, estado, autor y fecha.
- {{ui:Mostrar}} vuelve a poner la cámara, los elementos seleccionados, lo que estaba oculto (o solo lo que se mostraba) y la sección. Los elementos se encuentran por su GlobalId en cada modelo abierto; la línea de estado indica si faltan algunos.
- Un plano o una caja de sección de otra herramienta se muestra cuando coincide con los ejes del modelo. Los planos inclinados o adicionales se convierten en un volumen de sección (hasta 6 planos). Una incidencia conserva la primera caja de un volumen de varias cajas.

## Conviene saber

- El archivo es BCF 2.1 y conserva la vista en las coordenadas propias del modelo, para que otras herramientas coloquen la cámara en el mismo lugar.
- Las incidencias permanecen en esta pestaña hasta que las guarde. Al abrir otro modelo, la lista se conserva; abra el modelo al que se refieren las incidencias antes de mostrarlas.
- Una cámara paralela (ortogonal) de otra herramienta se muestra con la cámara en perspectiva de este visor, alejada para que la misma parte del modelo llene la vista.

## Errores comunes

- **Mostrar movió la cámara a un lugar extraño.** La incidencia se hizo en otro modelo o con otras coordenadas. Abra primero el modelo correcto.
- **El archivo no se abre.** No es un ZIP BCF o está dañado; la línea de estado indica el motivo.

## Siguiente

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
