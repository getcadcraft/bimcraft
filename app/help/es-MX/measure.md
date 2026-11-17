---
title: Medir distancias, áreas de caras y ubicaciones en 3D
summary: Mida entre dos puntos de un modelo IFC con ajuste a esquinas y aristas, lea la diferencia a lo largo de X, Y y Z, y mida el área de una cara plana.
keywords: medir, medición, distancia, longitud, cota, área, área de cara, ajuste, esquina, arista, cinta, regla, holgura, ubicación, latitud, longitud, latitud longitud, coordenadas, georreferencia, conversión a mapa, EPSG, levantamiento, este, norte, WGS 84, datum
from: 5f430bba
---

## Qué hará

Verifique una holgura, la longitud de un muro o el tamaño de una cara directamente desde el modelo, sin abrir el programa de creación.

## Pasos

1. Abra un modelo IFC.
2. Haga clic en {{ui:Medir}} en la barra de herramientas, o presione {{key:M}}. Se abre una barra en la parte inferior de la vista.
3. **Una distancia:** con {{ui:Distancia}} elegida, haga clic en el primer punto y luego en el segundo. Cerca de una esquina el puntero se ajusta a ella; cerca de una arista, a la arista. La pequeña etiqueta junto al puntero indica cuál es. Cada par de clics hace una medición.
4. **El área de una cara:** elija {{ui:Área de cara}} y haga clic en una cara. Toda la cara plana se ilumina y su área aparece.
5. **Líneas rectas:** mantenga presionado {{key:Shift}} mientras elige el segundo punto, o presione {{ui:Recto}} en la barra para mantenerla así. La línea entonces sigue el único eje más cercano al puntero (en una vista superior, a lo largo de X o Y de la planta; en otras vistas, a lo largo de X, Y o Z), y la etiqueta del puntero dice "recto a lo largo de un eje". {{key:M}} sigue iniciando y deteniendo Medir.
6. Haga clic en {{ui:Borrar}} para quitar las mediciones, o en {{ui:Listo}} (o {{key:Esc}}) para dejar de medir.

## Qué debe ver

- Una línea entre los dos puntos con su longitud escrita, y en la barra la longitud con cuánto avanza en X, Y y Z (en los ejes del modelo, con Z hacia arriba), todo en las {{ui:Unidades}} elegidas en la barra de herramientas.
- El área de una cara en metros cuadrados, sobre la cara y en la barra.
- Las etiquetas se mantienen en sus mediciones mientras orbita, desplaza y hace zoom.
- Mientras mide, los clics no seleccionan elementos. Un plano o caja de sección sigue cortando el modelo, y puede medir lo que muestra, incluidas las caras cortadas.

## Dónde está un punto en la tierra

Haga clic en {{ui:Ubicación}} en la barra de medición, y luego en un punto del modelo (se ajusta a esquinas y aristas igual que las distancias). La barra muestra:

- la **latitud y longitud**, en grados decimales y en grados, minutos y segundos, en WGS 84 para empezar;
- las **coordenadas de mapa** (este y norte, escritos en las {{ui:Unidades}} elegidas en la barra de herramientas) en el sistema de mapa propio del modelo, por ejemplo `EPSG:28356`;
- la **altura** y el datum vertical que indica el archivo, y el **datum propio** del archivo (por ejemplo GDA94).

{{ui:Copiar}} pone todo en el portapapeles en una sola línea. Cambie el sistema en el que están la latitud y la longitud en {{ui:Configuración}} › {{ui:BimCraft}} › {{ui:Ubicación}}: WGS 84 (como GPS y los mapas web), el datum propio del archivo, u otro común como ETRS89 o NAD83.

Esto requiere un modelo georreferenciado: uno exportado con coordenadas de mapa (una conversión a mapa a un sistema proyectado con código EPSG). Un modelo que solo tiene una latitud y longitud del sitio obtiene una posición aproximada, calculada a partir del punto del sitio y su norte verdadero, y la barra lo indica. Con varios modelos abiertos, cada punto usa la georreferencia de su propio modelo.

:::note
El paso entre datums (por ejemplo, de GDA94 a WGS 84) se hace sin archivos de cuadrícula, así que es exacto a unos pocos metros; la línea de estado indica qué tan exacto es. Las coordenadas de mapa en sí son exactas.
:::

## Errores comunes

- **"…no tiene georreferencia".** El archivo no tiene conversión a mapa ni latitud y longitud del sitio. Vuelva a exportarlo con su sistema de coordenadas definido (coordenadas compartidas / punto de levantamiento en la herramienta de creación).
- **Coordenadas de mapa pero sin latitud y longitud.** El archivo nombra su sistema de mapa sin código EPSG, o con uno que no está en la lista; la línea de estado indica cuál.
- **El punto cae en la cara, no en la esquina.** El ajuste mira el elemento bajo el puntero. Acérquese a la esquina o haga zoom.
- **El área es menor de lo esperado.** Las aberturas no se cuentan, y una cara que se dobla son varias caras: haga clic en cada una.
- **{{key:Esc}} detuvo la medición.** La primera vez que presiona {{key:Esc}} descarta una distancia a medias; la segunda detiene la medición.

## Siguiente

- [Corte un modelo IFC con un plano de sección](topic:section-plane)
- [Oculte, aísle y vea a través de elementos](topic:hide-and-isolate)
