---
title: Fases del proyecto, desde el programa de necesidades hasta las instrucciones de obra
summary: Empiece con un programa de necesidades con superficies objetivo y vea si cumple o es insuficiente mientras dibuja, compare opciones de diseño con él, vincule especificaciones y detalles a los tipos, revise los planos de taller y registre instrucciones de obra sobre los elementos.
keywords: programa de necesidades, cuadro de superficies, superficie objetivo, estancias, cumple, insuficiente, opciones de diseño, opciones, volumetría, presupuesto, especificación, detalle, detalle constructivo, tipo, plano de taller, revisión, aprobar, reenviar, instrucción de obra, revisión, causa, obra, fase
from: 0a49b852
---

## Qué va a hacer

Recorra las fases de un proyecto en un solo panel: escriba el programa de necesidades del cliente como estancias con superficies objetivo, compare las opciones de diseño con él, mantenga la especificación y los detalles constructivos junto a los tipos a los que pertenecen, revise los planos de taller a medida que llegan de los gremios y registre instrucciones de obra sobre los elementos que modifican.

## Pasos

1. En el panel izquierdo, abra **Fases del proyecto** y, a continuación, **Programa**.
2. Pegue las estancias, una por línea: `Living; 1; 30` significa una estancia de 30 m². El número de unidades puede omitirse. Elija **Añadir las estancias**. Rellene el cliente, la obra, el presupuesto, la tolerancia y el plazo y, a continuación, elija **Guardar el programa**.
3. Dibuje muros. Cada estancia que forman los muros y que tiene el nombre de una estancia del programa (un número detrás, como «Dormitorio 2», se ignora) se contabiliza. El **Cuadro de superficies** indica **Cumple**, **Insuficiente**, **Excede** o **Sin dibujar**, con la diferencia en m².
4. Para empezar un proyecto nuevo de esta forma, elija **Empezar un proyecto nuevo desde un programa de necesidades**. Abre un modelo nuevo, a partir de una de sus plantillas guardadas si elige una, e incluye el programa como primer paso.
5. Abra **Opciones frente al programa**. Cada opción de volumetría guardada en el modelo se dibuja a la misma escala con su superficie bruta, lo que pide el programa y cuántas estancias del programa caben. **Apilar aquí el programa** coloca las estancias en las plantas de la opción, empezando por la más baja, e indica lo que no cabe. El coste procede únicamente de la tabla de precios del proyecto; si no hay una fila correspondiente, indica «Sin tarifa».
6. Abra **Tipos, especificaciones y detalles**. Cada tipo de muro, puerta, ventana y forjado indica si tiene texto de especificación, los detalles vinculados y dónde no coinciden la especificación, las mediciones y los planos. **Vincular un detalle** añade un archivo de DetailCraft o de CadCraft, una dirección o un plano de este modelo.
7. Abra **Planos de taller**. Seleccione en el modelo los elementos que cubre un plano de taller y, a continuación, elija **Recibirlo**. Use **Aprobar**, **Aprobado con observaciones** o **Rectificar** con el nombre y la nota del revisor. **Reenviado** crea la siguiente revisión del mismo registro y conserva el historial de revisiones. El estado también se escribe en cada elemento.
8. Abra **Instrucciones de obra**. Seleccione los elementos, indique la causa y cómo afecta al coste y al plazo, con sus propias palabras, y elija **Registrarla**. Una vez registrada una emisión, **Explicar los cambios desde esta emisión** indica qué elementos modificados cubre una instrucción y cuáles han cambiado sin que se haya registrado nada.

## Conviene saber

- Cada paso se puede deshacer con un solo **Deshacer**. Nada se rechaza: un programa que no se cumple, un tipo que no coincide con su texto o un plano de taller atrasado son una advertencia o una nota en **Problemas**.
- Las estancias del programa son espacios sin muros. Tienen una superficie objetivo, no una superficie dibujada, de modo que los cuadros de estancias y COBie nunca las contabilizan como estancias dibujadas.
- Una distribución solo apila estancias en plantas según su superficie. No dibuja muros.
- El texto de la especificación se redacta en **Documentos** del modelo. Aquí solo se compara con las medidas propias del modelo: nunca se redacta por usted ninguna cláusula de una norma.
- Los planos de taller y las instrucciones de obra son registros en el mismo historial que el panel **Emisiones y revisiones**, de modo que ambos paneles los muestran.
- El estado de un plano de taller es una propiedad de cada elemento (`CadCraft_ShopDrawing`), y una instrucción de obra es `CadCraft_SiteInstruction`, de modo que **Buscar** y **Colorear por propiedad** pueden usarlos.
- Las marcas de verificación en obra (paso 7) están en **Propiedades**, en **Verificación**.
