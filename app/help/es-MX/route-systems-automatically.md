---
title: Enrute automáticamente conductos, desagües, tuberías de agua y de refrigerante
summary: En la revisión de interferencias, BimCraft busca una trayectoria alrededor del modelo abierto para conductos, desagüe por gravedad, agua fría y caliente, y tuberías de refrigerante split o multi-split, y dibuja los tramos con sus accesorios en un solo paso de deshacer. Es una ayuda de dibujo: los tamaños, pendientes y revisiones provienen de las tablas del programa y de los números que usted escribe; nada aquí dice que un diseño cumple un reglamento.
keywords: enrutado automático, autoenrutar, enrutar conductos, enrutar tuberías, desagüe, sanitario, gravedad, bajante, ventilación, sifón, agua, agua caliente, circuito de retorno, recirculación, refrigerante, split, multi-split, VRF, longitud equivalente, kit de derivación, yee
from: 5841d513
---

## Lo que hará

Deje que BimCraft trace una red de tramos entre conectores que ya están en el modelo, alrededor de muros y vigas, y luego revíselo con números que usted pueda ver.

## Pasos

1. Abra el modelo y la revisión de interferencias. En **Enrutar conductos automáticamente** elija una unidad manejadora de aire y sus terminales, o en **Enrutar otros sistemas automáticamente** elija un sistema.
2. **Desagüe sanitario por gravedad.** Escriba la posición de la salida y, si las tiene, las posiciones de las bajantes. Marque **Enrutar cada nivel de una vez** para tomar cada nivel que tenga aparatos: los desagües de cada nivel se unen a la bajante a su propia altura, y la bajante va desde arriba de la toma más alta hasta su base. Pulse {{ui:Route}}.
3. **Sifón a ventilación.** El panel enumera la distancia de cada sifón a su ventilación. Escriba en **Máxima distancia de un sifón a su ventilación** lo más que permita su código; cualquier aparato que la supere se marca como no realizado, con los milímetros de exceso. Marque **Ventilar a través de la bajante** cuando los aparatos no tengan ramal de ventilación propio: la distancia se mide entonces hasta la bajante. BimCraft no incluye una tabla de código para esto: usted escribe el número.
4. **Agua fría y caliente.** Elija la fuente, escriba la presión en la fuente y la presión que necesita en un aparato. Marque **Agua caliente**, elija la conexión caliente del calentador y marque **Circuito de retorno** para terminar una línea de retorno en la conexión de **retorno de agua caliente** del calentador, o en cualquier otra conexión que elija (esa termina 150 mm antes, abierta, para que usted la una).
5. **Split, multi-split y VRF.** Elija la unidad exterior, marque las unidades interiores y escriba la capacidad de cada una. Escriba los límites de los datos de su fabricante. Escriba la **longitud equivalente** de un codo y de un kit de derivación (los valores del fabricante) y las longitudes más larga y total se revisan con longitudes equivalentes.
6. Pulse {{ui:Route}}. El panel indica cuántos tramos dibujó y lo que no pudo hacer y por qué. {{ui:Undo}} devuelve todo en un solo paso.

## Lo que debe ver

Tuberías con codos, tes y reducciones; desagües que caen al menos la pendiente mínima para su tamaño; ramales de ventilación en los aparatos; y líneas de refrigerante como par de líquido y gas que gira igual en cada esquina, con un kit de derivación marcado donde una derivación sale del troncal.

## Conviene saber

- Donde un desagüe llega a otro desagüe, el modelo dibuja una te. La planta nombra esos puntos como uniones en Y a 45 grados para que pueda cambiar la pieza.
- El agua caliente usa la conexión caliente propia del aparato cuando su familia la tiene, y una conexión a 100 mm de la fría cuando no la tiene.
- Las líneas de refrigerante empiezan entre los dos puertos de cada unidad. Cuando los dos puertos de una unidad están demasiado juntos para un codo, el par se mantiene centrado entre ellos.
- La red de agua usa la curva de demanda y los números de fricción que se muestran en los cálculos; reemplácelos con los de su código antes de confiar en las presiones.
- Las casas grandes pueden tardar medio minuto o más, sobre todo por la red de agua caliente.
- Esto es una ayuda de dibujo. Una persona calificada revisa los tamaños, pendientes, ventilaciones y presiones contra el código que aplique.

## Siguiente

[Revisar interferencias](topic:clash-check) · [Revisar tuberías y conductos contra la estructura](topic:mep-against-structure) · [Conexiones entre tuberías y equipos](topic:mep-connections)
