---
title: Etapas del proyecto, desde el brief hasta las instrucciones de obra
summary: Comience con un brief con áreas objetivo y vea si se cumple o falta mientras dibuja, compare opciones de concepto contra él, vincule especificaciones y detalles a los tipos, revise planos de taller y registre instrucciones de obra en los elementos.
keywords: brief, planilla de ambientes, área objetivo, cumple, falta, ambientes, opciones de concepto, opciones, volumetría, presupuesto, especificación, espec, detalle, detalle constructivo, tipo, plano de taller, revisión, aprobar, reenviar, instrucción de obra, revisión, causa, obra, etapa
from: 0a49b852
---

## Lo que hará

Recorra las etapas de un proyecto en un solo panel: escriba el brief del cliente como ambientes con áreas objetivo, compare opciones de concepto contra él, mantenga la especificación y los detalles constructivos con los tipos a los que pertenecen, revise los planos de taller a medida que vuelven de los gremios y registre instrucciones de obra en los elementos que cambian.

## Pasos

1. En el panel izquierdo abra **Etapas del proyecto** y luego **Brief**.
2. Pegue los ambientes, uno por línea: `Living; 1; 30` significa un ambiente de 30 m². La cantidad se puede omitir. Elija **Agregar los ambientes**. Complete el cliente, el sitio, el presupuesto, la tolerancia y el programa, y luego **Guardar el brief**.
3. Dibuje muros. Cada ambiente que forman los muros y que tiene el nombre del ambiente del brief (un número después, como "Dormitorio 2", se ignora) se cuenta. La **Planilla de ambientes** dice **Cumple**, **Faltante**, **Excedido** o **Sin dibujar**, con la diferencia en m².
4. Para empezar un proyecto nuevo de esta forma elija **Iniciar un proyecto nuevo desde un brief**. Abre un modelo nuevo, a partir de una de sus plantillas guardadas si elige una, y coloca el brief como su primer paso.
5. Abra **Opciones contra el brief**. Cada opción de volumetría guardada en el modelo se dibuja en una misma escala con su superficie bruta, lo que pide el brief y cuántos ambientes del brief entran. **Apilar el brief aquí** coloca los ambientes en los pisos de la opción, del más bajo al más alto, y dice qué no entra. El costo sale solo de la tabla de precios del proyecto; sin fila correspondiente dice "Sin tarifa".
6. Abra **Tipos, especificaciones y detalles**. Cada tipo de muro, puerta, ventana y piso muestra si tiene texto de especificación, los detalles vinculados y dónde no coinciden la especificación, las planillas y las hojas. **Vincular un detalle** agrega un archivo de DetailCraft o CadCraft, una dirección o una hoja de este modelo.
7. Abra **Planos de taller**. Seleccione en el modelo los elementos que cubre un plano de taller y luego **Recibirlo**. Use **Aprobar**, **Con observaciones** o **Revisar** con el nombre del revisor y la nota. **Reenviado** crea la siguiente revisión del mismo registro y conserva el historial de revisión. El estado también se escribe en cada elemento.
8. Abra **Instrucciones de obra**. Seleccione los elementos, indique la causa y qué hace con el costo y el tiempo, con sus propias palabras, y **Registrarla**. Después de registrar una emisión, **Explicar los cambios desde esta emisión** dice qué elementos cambiados cubre una instrucción y cuáles cambiaron sin nada registrado.

## Bueno saber

- Cada paso es un solo **Deshacer**. Nada se rechaza: un brief que no se cumple, un tipo que no coincide con su texto o un plano de taller vencido es un aviso o una nota en **Problemas**.
- Los ambientes del brief son espacios sin muros. Tienen un objetivo, no un área dibujada, así que las planillas de ambientes y COBie nunca los cuentan como ambientes dibujados.
- Un diseño solo apila ambientes en pisos según el área. No dibuja muros.
- El texto de la especificación se escribe en **Documentos** del modelo. Aquí solo se compara con las medidas propias del modelo: nunca se escribe por usted una cláusula de ninguna norma.
- Los planos de taller y las instrucciones de obra son registros en el mismo historial que el panel **Emisiones y revisiones**, así que ambos paneles los muestran.
- El estado de un plano de taller es una propiedad de cada elemento (`CadCraft_ShopDrawing`), y una instrucción de obra es `CadCraft_SiteInstruction`, de modo que **Buscar** y **Color por propiedad** pueden usarlos.
- Las marcas verificadas en obra (Etapa 7) están en **Propiedades** bajo **Verificación**.
