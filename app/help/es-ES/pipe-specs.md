---
title: Especificaciones de tubería, válvulas, compuertas y familias de fabricantes
summary: Cree sus propias especificaciones de tubería (tablas de diámetros con material, unión y rugosidad), que se guardan en el archivo del modelo; coloque válvulas, un filtro y compuertas en los tramos; e incorpore el modelo de una válvula o equipo de un fabricante como familia con puertos de conexión.
keywords: especificación de tubería, especificaciones de tubería, especificación de tuberías, clase de tubería, tubo a medida, tabla de diámetros, tubo, tubo higiénico, inoxidable, espesor, diámetro exterior, espesor de pared, diámetro interior, rugosidad, presión nominal, csv, json, importar, exportar, hoja de cálculo, norma, bpe, din, en 10357, en 10255, válvula, válvulas, válvula de mariposa, válvula de equilibrado, válvula de control, filtro, compuerta, compuerta de regulación, compuerta cortafuegos, oem, fabricante, familia, familias, puertos, conexión, step, obj, gltf, ifc, radiador, convector, panel calefactor, unidad de tratamiento de aire, difusor, rejilla
from: bc2f7c4e
---

## Qué hará

Dibuje tubería con su propia especificación en lugar de las tablas integradas de acero, cobre y plástico; coloque válvulas y compuertas en los tramos, y coloque el modelo de un fabricante con puertos a los que se conectan las tuberías.

:::note
Es una ayuda de delineación y coordinación. Una especificación de tubería contiene los números que escribe o importa: compruebe cada tabla con la norma de su proyecto. Las válvulas, filtros y compuertas integrados son formas esquemáticas dimensionadas según el tramo, no la longitud de un fabricante ni de una norma de válvulas.
:::

## Configurar una especificación de tubería

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Especificaciones de tubería}}. El mismo botón está en la barra de la herramienta Tubería.
2. Elija {{ui:Nuevo}}, o comience desde un archivo, un pegado o una especificación inicial (más abajo).
3. Escriba su nombre, la norma o referencia que sigue, el material y el tipo de extremo o unión.
4. Escriba una fila por tamaño: el nombre del tamaño, el diámetro exterior y el espesor de pared, en milímetros. Escriba el diámetro interior en lugar del espesor si es lo que tiene: el otro se rellena. DN, presión nominal y peso son opcionales.
5. Opcional: la rugosidad en milímetros (el cálculo de pérdida de presión la usa), un espesor de aislamiento con el que empiezan los tramos nuevos, el radio del codo como factor del diámetro exterior, si la especificación tiene tes y reducciones, y un color propio en 3D.
6. Marque los servicios cuyos tramos nuevos deben empezar en esta especificación, por ejemplo agua refrigerada.
7. Elija {{ui:Guardar en el modelo}}.

Las especificaciones se guardan en el archivo del modelo. Cualquiera que abra el archivo las tiene, y {{ui:Deshacer}} revierte un cambio.

No se puede eliminar una especificación, ni uno de sus tamaños, mientras haya un tramo dibujado en ella. Al cambiar los valores de un tamaño, se vuelven a dibujar los tramos de ese tamaño.

## Reutilizar una especificación en otro modelo

- {{ui:Exportar .json}} guarda la especificación seleccionada como un archivo pequeño; {{ui:Exportar todo}} guarda todas las especificaciones del modelo. {{ui:Importar un archivo}} las vuelve a leer.
- {{ui:Exportar .csv}} guarda la tabla de tamaños para una hoja de cálculo. {{ui:Importar un archivo}} también lee un `.csv`.
- {{ui:Pegar filas}} toma una tabla copiada de una hoja de cálculo. La primera fila nombra las columnas: `Size`, `OD` y `Wall` (o `ID`), y opcionalmente `DN`, `Pressure`, `Weight`. Una fila por tamaño. Los números son milímetros, salvo que elija pulgadas o que una celda escriba su unidad (`0.065 in`).

## Especificaciones iniciales

{{ui:Añadir una especificación inicial}} añade una de estas a su modelo como copia que puede editar:

| Especificación inicial | Tamaños |
|---|---|
| Tubo ASME BPE | 1/4" a 6" |
| Tubo EN 10357 serie A (DIN 11850, fila 2) | DN10 a DN200 |
| Tubo de acero EN 10255, serie media | DN15 a DN150 |
| Tubo de acero EN 10255, serie pesada | DN15 a DN125 |

Estas tablas son los diámetros exteriores y espesores de pared que dos o más páginas de proveedores publicadas imprimen para la norma y coinciden en ellos. No se toman de las normas en sí. Los tamaños que solo da una página se omiten. Cada especificación inicial muestra sus páginas de origen y se marca como "comprobar con la norma de su proyecto". No se indica rugosidad, presión nominal ni peso.

## Dibujar un tramo con una especificación

1. Elija {{ui:Tubería}}. Un servicio que marcó en una especificación empieza en ella. Para cualquier otro tramo, elija la especificación en la lista de materiales: las especificaciones aparecen tras los materiales integrados como "Especificación: nombre".
2. La lista de tamaños contiene ahora solo los tamaños de esa especificación. Elija uno y dibuje el tramo.

Para pasar un tramo a una especificación más tarde, selecciónelo y cambie **Material** en {{ui:Propiedades}}. Su tamaño pasa a ser el tamaño de la especificación más cercano por diámetro exterior.

En el archivo IFC, la tubería lleva el nombre de la especificación, la norma, el material, la unión y las dimensiones (`CadCraft_PipeSpec` y `Pset_PipeSegmentTypeCommon`, en la tubería y en su tipo).

Los cálculos de dimensionado y de pérdida de presión usan el diámetro interior de la especificación. Cuando la especificación tiene rugosidad, la fricción de un tramo se calcula con ella (Darcy-Weisbach); si no la tiene, se usa el valor habitual por defecto del cálculo.

## Válvulas, un filtro y compuertas

1. Elija {{ui:Válvula}} y el tipo en la barra: de compuerta, de bola, de mariposa, de globo, de retención, de equilibrado o de control, o un filtro, para tuberías; una compuerta de regulación o una compuerta cortafuegos, para conductos.
2. Haga clic en el tramo donde va. El tramo se corta alrededor de ella y ambos lados siguen conectados. Toma el tamaño del tramo y se mueve con él.

Las Propiedades del tramo enumeran cada una con {{ui:Quitar}}; el tramo se cierra de nuevo.

El cálculo de pérdida de presión cuenta una pérdida de accesorio solo para las válvulas de compuerta, de bola, de globo y de retención. Los demás tipos, las compuertas y las familias de fabricantes no añaden pérdida en ese cálculo: téngalas en cuenta en su propia comprobación. Se cuentan en la tabla **Accesorios y válvulas** y en la cuantificación, y se escriben en IFC como válvulas, un filtro (el colador) y compuertas con dos puertos conectados.

## El modelo de un fabricante como familia

1. Abra {{ui:Compilación}} y elija {{ui:Familias}}, y luego {{ui:Importar un modelo}}. Se leen archivos IFC, STEP, OBJ, STL, glTF y de elementos de la Biblioteca. Para OBJ y STL, defina antes las unidades y el eje vertical del archivo.
2. En el cuadro de puertos, escriba el nombre, el fabricante y el número de modelo.
3. Elija si va **En un tramo** (una válvula, filtro o compuerta) o es **Equipo**, y cómo se escribe.
4. Asigne sus puertos. Cada uno tiene un nombre, tubería o conducto, el servicio, el tamaño en milímetros (el diámetro exterior de una tubería), el tamaño nominal tal como lo nombra su especificación, el tipo de extremo, su posición y la dirección hacia la que mira. {{ui:En una cara}} coloca un puerto en el centro de una cara de la caja del modelo. La pequeña vista superior muestra los puertos.
5. Elija {{ui:Guardar la familia en el modelo}}.

Una familia que va en un tramo necesita exactamente dos puertos que miren en sentidos opuestos sobre una misma línea. Elíjala en la lista de la herramienta Válvula y haga clic en un tramo: se coloca a su propia longitud y las tuberías se conectan a sus puertos.

Una familia nunca se estira. Si sus puertos no son del tamaño del tramo, se le avisa al colocarla, y {{ui:Comprobar conexiones}} la enumera.

Una familia de equipo se coloca con {{ui:Equipos}}, tipo **Familia de fabricante**. Las tuberías y los conductos se ajustan a sus puertos.

{{ui:Descargar como elemento de la Biblioteca}} guarda una familia con sus puertos como un archivo que puede enviar a la Biblioteca.

## Radiadores y convectores

{{ui:Equipos}} también tiene **Radiador** y **Convector / panel calefactor**: cuerpos genéricos con una conexión de ida y otra de retorno para agua de calefacción. Vea [Equipos MEP con puertos](topic:mep-equipment).
