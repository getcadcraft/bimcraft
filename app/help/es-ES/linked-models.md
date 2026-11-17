---
title: Vincular otros modelos para coordinar
summary: Mostrar otro modelo IFC junto al suyo por referencia (nunca fusionado), colocarlo por coordenadas compartidas, coordenadas de mapa o dos puntos, ajustarse a él al dibujar y volver a cargarlo cuando cambie su archivo.
keywords: vincular, modelo vinculado, referencia, xref, coordinación, federación, estructura, MEP, consultor, coordenadas compartidas, levantamiento, coordenadas de mapa, volver a cargar, descargar, referencia de documento, IfcDocumentReference
from: 3e0f1eab
---

## Qué va a hacer

Dibuje sobre el modelo de un consultor (la estructura, las instalaciones, el edificio existente) sin copiar nada en su propio archivo.

Un **modelo vinculado** se muestra en la vista 3D y se corta en sus planos, pero nunca se modifica ni se guarda en su modelo. Su modelo solo conserva el vínculo: el nombre del archivo y dónde va.

## Vincular un modelo

1. En la sección {{ui:Modelos vinculados}} del panel izquierdo, haga clic en {{ui:Vincular un modelo…}} y elija el archivo IFC. Se muestra de inmediato, y su fila indica **Mostrado**.
2. Elija dónde va en {{ui:Colocación}}:
   - **Coordenadas compartidas** (para empezar): sus coordenadas son las suyas, como si ambos modelos se hubieran replanteado desde el mismo origen.
   - **Coordenadas de mapa**: las coordenadas de mapa de ambos archivos los alinean (los dos necesitan una conversión de mapa; BimCraft lo indica cuando a uno le falta).
   - **Por dos puntos…**: haga clic en un punto del modelo vinculado y después en el lugar que le corresponde en el suyo; luego, un segundo par. El vínculo se mueve y gira (alrededor de la vertical) para encajar.
3. Cada vínculo y cada cambio de colocación es un paso: {{key:Mod+Z}} lo deshace.

## Trabajar con él

- Los planos muestran el modelo vinculado cortado a la altura de corte de la planta, en líneas finas, y la herramienta {{ui:Muro}} y las demás herramientas de dibujo se ajustan a sus esquinas y aristas.
- Seleccione sus elementos en la vista 3D para leer sus propiedades; un modelo vinculado nunca es el que se edita, por eso su botón de opción en {{ui:Modelos}} está desactivado.
- **¿Ha cambiado el archivo?** Cuando el navegador puede vigilar el archivo (un archivo abierto desde su selector de archivos, o en Studio), BimCraft vuelve a cargar el vínculo por sí solo unos segundos después de guardar de nuevo el archivo, y lo indica. Si no, haga clic en {{ui:Volver a cargar}}.
- {{ui:Descargar}} lo oculta y libera la memoria; el vínculo permanece en su modelo. {{ui:Cargar…}} lo muestra de nuevo (usted elige el archivo: un navegador no puede abrir un archivo solo por su nombre).
- La × quita el vínculo de su modelo.

## Qué debe ver

- En su archivo IFC: un IfcDocumentReference por cada vínculo (con el nombre del archivo), relacionado con el proyecto, y dónde va, en el conjunto de propiedades CadCraft_Links del proyecto. Al volver a abrir su modelo, sus vínculos aparecen como **No cargado** hasta que los cargue.

:::note
Las comprobaciones de colisiones, Comparar y Buscar pueden usar un vínculo cargado como cualquier otro modelo abierto: vea [Ver varios modelos IFC juntos](topic:several-models).
:::
