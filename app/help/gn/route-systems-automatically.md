---
title: Enrutar automáticamente ductos, desagües, caños de agua y de refrigerante
summary: En la verificación de interferencias, BimCraft encuentra un camino alrededor del modelo abierto para ductos, desagüe por gravedad, agua fría y caliente, y caños de refrigerante split o multi-split, y dibuja los tramos con sus accesorios en un solo paso de deshacer. Es una ayuda de dibujo: tamaños, pendientes y verificaciones provienen de las tablas del programa y de los números que escribas; nada aquí dice que un diseño cumple un código.
keywords: enrutado automático, autoenrutado, enrutar ductos, enrutar caños, desagüe, sanitario, gravedad, columna, ventilación, sifón, agua, agua caliente, retorno, recirculación, refrigerante, split, multi-split, VRF, longitud equivalente, kit de derivación, yee
from: 5841d513
---

## Qué vas a hacer

Dejá que BimCraft arme una red de tramos entre conectores que ya están en el modelo, alrededor de muros y vigas, y después verificala con números que podés ver.

## Pasos

1. Abrí el modelo y la verificación de interferencias. Bajo **Enrutar ductos automáticamente** elegí un equipo de aire y sus terminales, o bajo **Enrutar otros sistemas automáticamente** elegí un sistema.
2. **Desagüe sanitario por gravedad.** Escribí la posición de la salida y, si las tenés, las posiciones de las columnas. Tildá **Enrutar cada piso de una vez** para tomar cada piso que tenga artefactos: los desagües de cada piso llegan a la columna a su propio nivel, y la columna corre desde arriba de la canilla más alta hasta su pie. Presioná {{ui:Enrutar}}.
3. **Sifón a ventilación.** El panel lista la distancia desde cada sifón a su ventilación. Escribí el máximo que permite tu código en **Máximo desde un sifón a su ventilación**; cualquier artefacto que lo supere se lista como no hecho, con los milímetros de exceso. Tildá **Ventilar por la columna** cuando los artefactos no tengan un ramal de ventilación propio: la distancia entonces se mide hasta la columna. BimCraft no incluye una tabla de código para esto: vos escribís el número.
4. **Agua fría y caliente.** Elegí la fuente, escribí la presión en la fuente y la presión que necesitás en un artefacto. Tildá **Agua caliente**, elegí la conexión caliente del calefón, y tildá **Lazo de retorno** para terminar una línea de retorno en la conexión **retorno caliente** del calefón, o en cualquier otra conexión que elijas (esa termina 150 mm antes, abierta, para que la unas vos).
5. **Split, multi-split y VRF.** Elegí la unidad exterior, tildá las unidades interiores y escribí la capacidad de cada una. Escribí los límites según los datos de tu fabricante. Escribí la **longitud equivalente** de una curva y de un kit de derivación (valores del fabricante) y las longitudes mayor y total se verifican según las longitudes equivalentes.
6. Presioná {{ui:Enrutar}}. El panel dice cuántos tramos dibujó y qué no pudo hacer y por qué. {{ui:Deshacer}} lo quita todo en un solo paso.

## Qué deberías ver

Caños con codos, tes y reducciones; desagües que caen al menos la pendiente mínima para su tamaño; ramales de ventilación en los artefactos; líneas de refrigerante como un par líquido y gas que da la vuelta igual en cada esquina, con un kit de derivación marcado donde una derivación sale del tronco.

## Bueno saber

- Donde un desagüe se une a otro, el modelo dibuja una te. El plano nombra esos lugares como uniones en Y de 45 grados para que puedas cambiar la pieza.
- El agua caliente usa la conexión caliente propia del artefacto cuando su familia la tiene, y una conexión a 100 mm al lado de la fría cuando no.
- Las líneas de refrigerante empiezan entre los dos puertos de cada unidad. Cuando los dos puertos de una unidad están demasiado juntos para un codo, el par queda centrado entre ellos.
- La red de agua usa la curva de demanda y los números de fricción que se muestran en los cálculos; reemplazalos por los de tu código antes de confiar en las presiones.
- Las casas grandes pueden tardar medio minuto o más, sobre todo por la red caliente.
- Esto es una ayuda de dibujo. Una persona calificada verifica tamaños, pendientes, ventilaciones y presiones contra el código que corresponde.

## Siguiente

[Verificar interferencias](topic:clash-check) · [Verificar caños y ductos contra la estructura](topic:mep-against-structure) · [Conexiones entre caños y equipos](topic:mep-connections)
