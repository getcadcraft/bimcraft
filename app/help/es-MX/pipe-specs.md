---
title: Especificaciones de tubería, válvulas, compuertas y familias de fabricantes
summary: Defina sus propias especificaciones de tubería (tablas de diámetros con material, unión y rugosidad), guardadas en el archivo del modelo; coloque válvulas, un filtro y compuertas en los tramos; e importe el modelo de una válvula o equipo de un fabricante como familia con puertos de conexión.
keywords: especificación de tubería, especificaciones de tubería, especificación de tuberías, clase de tubería, tubo a medida, tabla de diámetros, tubo, tubo higiénico, acero inoxidable, cédula, diámetro exterior, espesor de pared, diámetro interior, rugosidad, clase de presión, csv, json, importar, exportar, hoja de cálculo, norma, bpe, din, en 10357, en 10255, válvula, válvulas, válvula de mariposa, válvula de balanceo, válvula de control, filtro, compuerta, compuerta de volumen, compuerta cortafuego, fabricante, familia, familias, puertos, conexión, step, obj, gltf, ifc, radiador, convector, calentador de panel, manejadora de aire, difusor, rejilla
from: bc2f7c4e
---

## Qué hará

Dibuje tubería con su propia especificación en lugar de las tablas integradas de acero, cobre y plástico, coloque válvulas y compuertas en los tramos, y coloque el modelo de un fabricante con puertos a los que se conectan las tuberías.

:::note
Auxiliar de dibujo y coordinación. Una especificación de tubería guarda los números que escribe o importa: verifique cada tabla contra el estándar de su proyecto. Las válvulas, filtros y compuertas integradas son formas esquemáticas dimensionadas según el tramo, no la longitud de un fabricante ni de una norma de válvulas.
:::

## Configurar una especificación de tubería

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Especificaciones de tubería}}. El mismo botón está en la barra de la herramienta Tubería.
2. Elija {{ui:Nuevo}}, o comience desde un archivo, un pegado o una especificación inicial (abajo).
3. Escriba su nombre, la norma o referencia que sigue, el material y el tipo de extremo o de unión.
4. Escriba una fila por diámetro: el nombre del diámetro, el diámetro exterior y el espesor de pared, en milímetros. Escriba el diámetro interior en lugar del espesor si es lo que tiene: el otro se completa. DN, clase de presión y peso son opcionales.
5. Opcional: la rugosidad en milímetros (el cálculo de caída de presión la usa), un espesor de aislamiento con el que inician los tramos nuevos, el radio del codo como factor del diámetro exterior, si la especificación tiene tes y reducciones, y un color propio en 3D.
6. Marque los servicios cuyos tramos nuevos deben iniciar en esta especificación, por ejemplo agua helada.
7. Elija {{ui:Guardar en el modelo}}.

Las especificaciones se guardan en el archivo del modelo. Cualquier persona que abra el archivo las tiene, y {{ui:Deshacer}} revierte un cambio.

Una especificación, o uno de sus diámetros, no puede eliminarse mientras haya un tramo dibujado con ella. Cambiar los números de un diámetro vuelve a dibujar los tramos de ese diámetro.

## Reutilizar una especificación en otro modelo

- {{ui:Exportar .json}} guarda la especificación seleccionada como un archivo pequeño; {{ui:Exportar todas}} guarda todas las especificaciones del modelo. {{ui:Importar un archivo}} las vuelve a leer.
- {{ui:Exportar .csv}} guarda la tabla de diámetros para una hoja de cálculo. {{ui:Importar un archivo}} también lee un `.csv`.
- {{ui:Pegar filas}} toma una tabla copiada de una hoja de cálculo. La primera fila nombra las columnas: `Size`, `OD` y `Wall` (o `ID`), y opcionalmente `DN`, `Pressure`, `Weight`. Una fila por diámetro. Los números son milímetros, salvo que elija pulgadas o que una celda escriba su unidad (`0.065 in`).

## Especificaciones iniciales

{{ui:Añadir una especificación inicial}} agrega una de estas a su modelo como copia que puede editar:

| Especificación inicial | Diámetros |
|---|---|
| Tubo ASME BPE | 1/4" a 6" |
| Tubo EN 10357 serie A (DIN 11850 fila 2) | DN10 a DN200 |
| Tubo de acero EN 10255, serie media | DN15 a DN150 |
| Tubo de acero EN 10255, serie pesada | DN15 a DN125 |

Estas tablas son los diámetros exteriores y espesores de pared que dos o más páginas de proveedores publicadas imprimen para la norma y coinciden. No se toman de las normas mismas. Los diámetros que solo una página indica se omiten. Cada especificación inicial muestra sus páginas de origen y está marcada como «verifique contra el estándar de su proyecto». No se indica rugosidad, clase de presión ni peso.

## Dibujar un tramo en una especificación

1. Elija {{ui:Tubería}}. Un servicio que marcó en una especificación inicia en ella. Para cualquier otro tramo, elija la especificación en la lista de materiales: las especificaciones aparecen después de los materiales integrados como «Spec: nombre».
2. La lista de diámetros ahora solo contiene los diámetros de esa especificación. Elija uno y dibuje el tramo.

Para mover después un tramo a una especificación, selecciónelo y cambie **Material** en {{ui:Propiedades}}. Su diámetro pasa al diámetro de la especificación más cercano por diámetro exterior.

En el archivo IFC, la tubería lleva el nombre, la norma, el material, la unión y las dimensiones de la especificación (`CadCraft_PipeSpec` y `Pset_PipeSegmentTypeCommon`, en la tubería y en su tipo).

Los cálculos de dimensionamiento y de caída de presión leen el diámetro interior de la especificación. Cuando la especificación tiene rugosidad, la fricción del tramo se calcula con ella (Darcy-Weisbach); sin ella, se usa el valor predeterminado del cálculo.

## Válvulas, un filtro y compuertas

1. Elija {{ui:Válvula}} y el tipo en la barra: de compuerta, de bola, de mariposa, de globo, de retención, de balanceo o de control, o un filtro, para tuberías; una compuerta de volumen o una compuerta cortafuego, para ductos.
2. Haga clic en el tramo donde va. El tramo se corta alrededor de ella y ambos lados siguen conectados. Toma el diámetro del tramo y se mueve con él.

En {{ui:Propiedades}} del tramo se enumera cada una, con {{ui:Quitar}}; el tramo se cierra de nuevo.

El cálculo de caída de presión cuenta una pérdida por accesorio solo para válvulas de compuerta, de bola, de globo y de retención. Los demás tipos, las compuertas y las familias de fabricantes no agregan pérdida ahí: considérelo en su propia verificación. Se cuentan en la tabla **Accesorios y válvulas** y en la cuantificación, y se escriben en el IFC como válvulas, un filtro (el colador) y compuertas con dos puertos conectados.

## Modelo de un fabricante como familia

1. Abra {{ui:Compilación}} y elija {{ui:Familias}}, luego {{ui:Importar un modelo}}. Se leen archivos IFC, STEP, OBJ, STL, glTF y de elemento de Biblioteca. Para OBJ y STL, antes configure las unidades y el eje vertical del archivo.
2. En el cuadro de puertos, escriba el nombre, el fabricante y el número de modelo.
3. Elija si va **En un tramo** (una válvula, filtro o compuerta) o si es **Equipo**, y cómo se escribe en el IFC.
4. Asigne sus puertos. Cada uno tiene un nombre, tubería o ducto, el servicio, el diámetro en milímetros (el diámetro exterior de una tubería), el diámetro nominal tal como lo nombra su especificación, el tipo de extremo, su posición y la dirección en que mira. {{ui:En una cara}} coloca un puerto en el centro de una cara de la caja del modelo. La vista superior pequeña muestra los puertos.
5. Elija {{ui:Guardar la familia en el modelo}}.

Una familia que va en un tramo necesita exactamente dos puertos que miren en sentidos opuestos sobre una misma línea. Elíjala en la lista de la herramienta Válvula y haga clic en un tramo: se coloca con su propia longitud y las tuberías se conectan a sus puertos.

Una familia nunca se estira. Si sus puertos no son del diámetro del tramo, se le avisa al colocarla, y {{ui:Revisar conexiones}} la enumera.

Una familia de equipo se coloca con {{ui:Equipos}}, tipo **Familia del fabricante**. Las tuberías y ductos se ajustan a sus puertos.

{{ui:Descargar como elemento de Biblioteca}} guarda una familia con sus puertos como archivo que puede enviar a la Biblioteca.

## Radiadores y convectores

{{ui:Equipos}} también tiene **Radiador** y **Convector / calentador de panel**: cuerpos genéricos con una conexión de entrada y otra de retorno para agua de calefacción. Vea [Equipos MEP con puertos](topic:mep-equipment).
