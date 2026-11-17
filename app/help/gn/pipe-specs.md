---
title: Especificaciones de caño, válvulas, compuertas y familias de fabricantes
summary: Ojapo ñane propia especificación de caño (tablas de tamaños con material, unión y rugosidad), ojeguardava en el archivo del modelo; omoĩ válvulas, un filtro y compuertas en los tramos; ha ombohasa válvula o equipo de fabricante como familia con puertos de conexión.
keywords: especificación de caño, especificaciones de caño, especificación de cañería, clase de caño, caño personalizado, tabla de tamaños, tubo, tubo higiénico, inoxidable, planilla, diámetro exterior, espesor de pared, diámetro interior, rugosidad, presión nominal, csv, json, importar, exportar, planilla de cálculo, estándar, bpe, din, en 10357, en 10255, válvula, válvulas, válvula de mariposa, válvula de equilibrado, válvula de control, filtro, compuerta, compuerta de volumen, compuerta cortafuego, oem, fabricante, familia, familias, puertos, conexión, step, obj, gltf, ifc, radiador, convector, calefactor de panel, unidad de aire, difusor, rejilla
from: bc2f7c4e
---

## Mba'e pe ojapóta

Ojapo caño ñande propia especificación rehe, ndaha'éi ñande tabla incorporada de acero, cobre ni plástico. Omoĩ válvulas y compuertas en los tramos, ha omoĩ peteĩ modelo de fabricante con puertos a los que se conectan los caños.

:::note
Peteĩ ayuda para el dibujo y la coordinación. Una especificación de caño guarda los números que vos escribís o importás: revisá cada tabla con tu estándar de proyecto. Las válvulas, filtros y compuertas incorporadas son formas esquemáticas medidas según el tramo, no la longitud de un fabricante ni de una norma de válvulas.
:::

## Ojapo peteĩ especificación de caño

1. Prendé {{ui:Draw}}, abrí {{ui:Build}} y elegí {{ui:Pipe specs}}. El mismo botón está en la barra de la herramienta Caño.
2. Elegí {{ui:New}}, o empezá desde un archivo, un pegado o una especificación inicial (abajo).
3. Escribí su nombre, la norma o referencia que sigue, el material y el tipo de extremo o unión.
4. Escribí una fila por tamaño: el nombre del tamaño, el diámetro exterior y el espesor, en milímetros. Si tenés el diámetro interior en lugar del espesor, escribilo: el otro se completa solo. DN, presión nominal y peso son opcionales.
5. Opcional: la rugosidad en milímetros (la cuenta de caída de presión la usa), un espesor de aislamiento con el que empiezan los tramos nuevos, el radio del codo como factor del diámetro exterior, si la especificación tiene tes y reducciones, y un color propio en 3D.
6. Marcá los servicios cuyos tramos nuevos deben empezar en esta especificación, por ejemplo agua enfriada.
7. Elegí {{ui:Save in the model}}.

Las especificaciones se guardan en el archivo del modelo. Cualquiera que abra el archivo las tiene, y {{ui:Undo}} deshace un cambio.

No se puede eliminar una especificación, ni uno de sus tamaños, mientras haya un tramo dibujado con ella. Si cambiás los números de un tamaño, se vuelven a dibujar los tramos de ese tamaño.

## Reusar una especificación en otro modelo

- {{ui:Export .json}} guarda la especificación elegida como un archivo chico; {{ui:Export all}} guarda todas las especificaciones del modelo. {{ui:Import a file}} las vuelve a leer.
- {{ui:Export .csv}} guarda la tabla de tamaños para una planilla de cálculo. {{ui:Import a file}} también lee un `.csv`.
- {{ui:Paste rows}} toma una tabla copiada de una planilla de cálculo. La primera fila nombra las columnas: `Size`, `OD` y `Wall` (o `ID`), y opcionalmente `DN`, `Pressure`, `Weight`. Una fila por tamaño. Los números son milímetros, salvo que elijas pulgadas o que una celda escriba su unidad (`0.065 in`).

## Especificaciones iniciales

{{ui:Add a starter spec}} agrega a tu modelo una de estas como copia que podés editar:

| Inicial | Tamaños |
|---|---|
| Tubo ASME BPE | 1/4" a 6" |
| Tubo EN 10357 serie A (DIN 11850 fila 2) | DN10 a DN200 |
| Tubo de acero EN 10255, serie media | DN15 a DN150 |
| Tubo de acero EN 10255, serie pesada | DN15 a DN125 |

Estas tablas son los diámetros exteriores y espesores que dos o más páginas de proveedores publicadas dan para la norma y coinciden. No se tomaron de las normas en sí. Los tamaños que solo dio una página quedaron afuera. Cada inicial muestra sus páginas de origen y está marcada "verificar con tu estándar de proyecto". No se da rugosidad, presión nominal ni peso.

## Dibujar un tramo en una especificación

1. Elegí {{ui:Pipe}}. Un servicio que marcaste en una especificación empieza en ella. Para cualquier otro tramo, elegí la especificación en la lista de materiales: las especificaciones aparecen después de los materiales incorporados como "Spec: nombre".
2. La lista de tamaños ahora tiene solo los tamaños de esa especificación. Elegí uno y dibujá el tramo.

Para pasar después un tramo a una especificación, seleccionalo y cambiá **Material** en {{ui:Properties}}. Su tamaño pasa a ser el tamaño más cercano de la especificación según el diámetro exterior.

En el archivo IFC, el caño lleva el nombre, la norma, el material, la unión y las dimensiones de la especificación (`CadCraft_PipeSpec` y `Pset_PipeSegmentTypeCommon`, en el caño y en su tipo).

Los cálculos de dimensionado y de caída de presión leen el diámetro interior de la especificación. Si la especificación tiene rugosidad, la fricción del tramo se calcula con ella (Darcy-Weisbach); si no, se usa el valor habitual por defecto del cálculo.

## Válvulas, filtro y compuertas

1. Elegí {{ui:Valve}} y el tipo en la barra: de compuerta, de esfera, de mariposa, globo, de retención, de equilibrado o de control, o un filtro, para caños; una compuerta de volumen o una compuerta cortafuego, para conductos.
2. Hacé clic en el tramo donde va. El tramo se corta alrededor y ambos lados siguen conectados. Toma el tamaño del tramo y se mueve con él.

En {{ui:Properties}} del tramo aparece cada una con {{ui:Remove}}; el tramo se vuelve a cerrar.

El cálculo de caída de presión cuenta una pérdida por accesorio solo para las válvulas de compuerta, de esfera, globo y retención. Los otros tipos, las compuertas y las familias de fabricantes no suman pérdida ahí: tenelo en cuenta en tu propia verificación. Se cuentan en la planilla **Accesorios y válvulas** y en el cómputo, y se escriben en IFC como válvulas, un filtro (el filtro) y compuertas con dos puertos conectados.

## Modelo de fabricante como familia

1. Abrí {{ui:Build}} y elegí {{ui:Families}}, y después {{ui:Import a model}}. Se leen archivos IFC, STEP, OBJ, STL, glTF y de elemento de Biblioteca. Para OBJ y STL, primero configurá las unidades y el eje vertical del archivo.
2. En el diálogo de puertos, escribí el nombre, el fabricante y el número de modelo.
3. Elegí si va **On a run** (una válvula, filtro o compuerta) o si es **Equipment**, y cómo se escribe.
4. Asignále sus puertos. Cada uno tiene un nombre, caño o conducto, el servicio, el tamaño en milímetros (diámetro exterior para un caño), el tamaño nominal como lo nombra tu especificación, el tipo de extremo, su posición y hacia dónde mira. {{ui:On a face}} pone un puerto en el centro de una cara de la caja del modelo. La vista superior chica muestra los puertos.
5. Elegí {{ui:Save the family in the model}}.

Una familia que va en un tramo necesita exactamente dos puertos que miren en sentidos opuestos sobre una misma línea. Elegila en la lista de la herramienta Válvula y hacé clic en un tramo: se coloca con su propia longitud y los caños se conectan a sus puertos.

Una familia nunca se estira. Si sus puertos no son del tamaño del tramo, te avisa cuando la colocás, y {{ui:Check connections}} la lista.

Una familia de equipo se coloca con {{ui:Equipment}}, tipo **Manufacturer's family**. Los caños y conductos se ajustan a sus puertos.

{{ui:Download as a Library item}} guarda una familia con sus puertos como archivo que podés enviar a la Biblioteca.

## Radiadores y convectores

{{ui:Equipment}} también tiene **Radiator** y **Convector / panel heater**: cuerpos genéricos con una conexión de ida y otra de retorno para agua de calefacción. Ver [Equipos MEP con puertos](topic:mep-equipment).
