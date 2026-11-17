---
title: Etapas del proyecto, desde el resumen hasta las instrucciones de obra
summary: Empiece con un resumen que tenga áreas objetivo y vea si se cumplen o faltan mientras dibuja, compare opciones de concepto contra él, vincule especificaciones y detalles a los tipos, revise planos de taller y registre instrucciones de obra en los elementos.
keywords: resumen, cuadro de áreas, área objetivo, cumple, falta, espacios, opciones de concepto, opciones, volumetría, presupuesto, especificación, especificación, detalle, detalle constructivo, tipo, plano de taller, revisar, aprobar, reenviar, instrucción de obra, revisión, causa, obra, etapa
from: 0a49b852
---

## Lo que hará

Recorra las etapas de un proyecto en un solo panel: escriba el resumen del cliente como espacios con áreas objetivo, compare opciones de concepto contra él, mantenga la especificación y los detalles constructivos con los tipos a los que pertenecen, revise los planos de taller conforme regresan de los oficios y registre instrucciones de obra en los elementos que modifican.

## Pasos

1. En el panel izquierdo abra **Etapas del proyecto** y luego **Resumen**.
2. Pegue los espacios, uno por línea: `Sala; 1; 30` significa un espacio de 30 m². El número de cantidad puede omitirse. Elija **Agregar los espacios**. Complete el cliente, el sitio, el presupuesto, la tolerancia y el programa, y luego **Guardar el resumen**.
3. Dibuje muros. Cada espacio que forman los muros y que tiene el nombre de un espacio del resumen (un número después, como «Recámara 2», se ignora) se cuenta. El **Cuadro de áreas** indica **Cumple**, **Falta**, **Excede** o **No dibujado**, con la diferencia en m².
4. Para iniciar un proyecto nuevo de esta forma, elija **Iniciar un proyecto nuevo desde un resumen**. Se abre un modelo nuevo, a partir de una de sus plantillas guardadas si elige una, y el resumen se agrega como su primer paso.
5. Abra **Opciones frente al resumen**. Cada opción de volumetría guardada en el modelo se dibuja a una misma escala con su área bruta, lo que pide el resumen y cuántos espacios del resumen caben. **Apilar el resumen aquí** coloca los espacios en los niveles de la opción, del más bajo al más alto, e indica lo que no cabe. El costo proviene solo de la tabla de precios del proyecto; si no hay una fila correspondiente, indica «Sin tarifa».
6. Abra **Tipos, especificaciones y detalles**. Cada tipo de muro, puerta, ventana y piso indica si tiene texto de especificación, los detalles vinculados y dónde no coinciden la especificación, los cuadros y los planos. **Vincular un detalle** agrega un archivo de DetailCraft o de CadCraft, una dirección o un plano de este modelo.
7. Abra **Planos de taller**. Designe los elementos que cubre un plano de taller en el modelo y luego **Recibir**. Use **Aprobar**, **Aprobado con observaciones** o **Revisar**, con el nombre del revisor y su nota. **Reenviado** crea la siguiente revisión del mismo registro y conserva el historial de revisión. El estado también se escribe en cada elemento.
8. Abra **Instrucciones de obra**. Designe los elementos, indique la causa y, con sus propias palabras, qué efecto tiene en el costo y en el tiempo, y luego **Registrar**. Una vez registrada una emisión, **Explicar los cambios desde esta emisión** indica qué elementos modificados cubre una instrucción y cuáles cambiaron sin que se registrara nada.

## Conviene saber

- Cada paso se puede deshacer con un solo **Deshacer**. Nada se rechaza: un resumen que no se cumple, un tipo que no coincide con su texto o un plano de taller vencido son una advertencia o una nota en **Problemas**.
- Los espacios del resumen son áreas sin muros. Tienen un objetivo, no un área dibujada, así que los cuadros de espacios y COBie nunca los cuentan como espacios dibujados.
- Una presentación solo apila los espacios en niveles según el área. No dibuja muros.
- El texto de la especificación se escribe en **Documentos** del modelo. Aquí solo se compara con las dimensiones propias del modelo: nunca se escribe por usted ninguna cláusula de una norma.
- Los planos de taller y las instrucciones de obra son registros en el mismo historial que el panel **Incidencias y revisiones**, así que ambos paneles los muestran.
- El estado de un plano de taller es una propiedad de cada elemento (`CadCraft_ShopDrawing`), y una instrucción de obra es `CadCraft_SiteInstruction`, de modo que **Buscar** y **Colorear por propiedad** pueden usarlos.
- Las marcas verificadas en obra (Etapa 7) están en **Propiedades**, bajo **Verificación**.
