---
title: Trazar automáticamente conductos, desagües, tuberías de agua y de refrigerante
summary: En la comprobación de interferencias, BimCraft busca un camino alrededor del modelo abierto para conductos, desagüe por gravedad, agua fría y caliente, y tuberías de refrigerante split o multi-split, y dibuja los tramos con sus accesorios en un solo paso de deshacer. Es una ayuda de dibujo: los tamaños, pendientes y comprobaciones salen de las tablas del programa y de los valores que usted escribe; nada de esto indica que un diseño cumpla una normativa.
keywords: trazado automático, autoruta, trazar conductos, trazar tuberías, desagüe, sanitario, gravedad, bajante, ventilación, sifón, agua, agua caliente, bucle de retorno, recirculación, refrigerante, split, multi-split, VRF, longitud equivalente, kit de derivación, injerto en Y, wye
from: 5841d513
---

## Qué hará

Deje que BimCraft diseñe una red de tramos entre conectores que ya están en el modelo, alrededor de muros y vigas, y después compruébela con cifras que puede ver.

## Pasos

1. Abra el modelo y la comprobación de interferencias. Bajo **Trazar conductos automáticamente**, elija un climatizador y sus terminales, o bajo **Trazar otros sistemas automáticamente**, elija un sistema.
2. **Desagüe sanitario por gravedad.** Escriba la posición de la salida y, si las tiene, las posiciones de las bajantes. Marque **Trazar todas las plantas de una vez** para tomar todas las plantas que tengan aparatos: los desagües de cada planta se unen a la bajante a su propio nivel, y la bajante va desde encima del grifo más alto hasta su base. Pulse {{ui:Trazar}}.
3. **Sifón a ventilación.** El panel enumera la distancia de cada sifón a su ventilación. Escriba en **Distancia máxima de un sifón a su ventilación** la máxima que permita su normativa; cualquier aparato que la supere aparece como no realizado, con los milímetros de exceso. Marque **Ventilar a través de la bajante** cuando los aparatos no tengan su propio ramal de ventilación: la distancia se mide entonces hasta la bajante. BimCraft no incluye una tabla normativa para esto: usted escribe el número.
4. **Agua fría y caliente.** Elija el origen, escriba la presión en el origen y la presión que necesita en un aparato. Marque **Agua caliente**, elija la conexión caliente del calentador, y marque **Bucle de retorno** para terminar una línea de retorno en la conexión de **retorno caliente** del calentador, o en cualquier otra conexión que elija (esa termina 150 mm antes, abierta, para que usted la una).
5. **Split, multi-split y VRF.** Elija la unidad exterior, marque las unidades interiores y escriba la capacidad de cada una. Escriba los límites de los datos de su fabricante. Escriba la **longitud equivalente** de un codo y de un kit de derivación (valores del fabricante), y las longitudes más larga y total se comprueban con las longitudes equivalentes.
6. Pulse {{ui:Trazar}}. El panel indica cuántos tramos ha dibujado y cualquier cosa que no pudo hacer, y por qué. {{ui:Deshacer}} lo devuelve todo en un solo paso.

## Qué debería ver

Tuberías con codos, tes y reducciones; desagües que caen al menos la pendiente mínima para su tamaño; ramales de ventilación en los aparatos; líneas de refrigerante como un par de líquido y gas que gira siempre del mismo modo en cada esquina, con un kit de derivación marcado donde una derivación sale de la troncal.

## Conviene saber

- Donde un desagüe se une a otro, el modelo dibuja una te. El plano denomina esos puntos como uniones en Y de 45 grados, para que pueda cambiar el accesorio.
- El agua caliente usa la conexión caliente propia del aparato cuando su familia la tiene, y una conexión a 100 mm de la fría cuando no.
- Las líneas de refrigerante empiezan entre los dos puertos de cada unidad. Cuando los dos puertos de una unidad están demasiado juntos para un codo, el par se mantiene centrado entre ellos.
- La red de agua usa la curva de demanda y los valores de fricción que se muestran en los cálculos; sustitúyalos por los de su normativa antes de fiarse de las presiones.
- Las casas grandes pueden tardar medio minuto o más, sobre todo por la red caliente.
- Esto es una ayuda de dibujo. Una persona cualificada debe comprobar los tamaños, pendientes, ventilaciones y presiones según la normativa que se aplique.

## Siguiente

[Comprobar interferencias](topic:clash-check) · [Comprobar tuberías y conductos frente a la estructura](topic:mep-against-structure) · [Conexiones entre tuberías y equipos](topic:mep-connections)
