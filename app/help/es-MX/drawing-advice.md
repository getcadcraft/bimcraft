---
title: Recomendaciones de dibujo: las medidas inusuales se crean, con una advertencia
summary: BimCraft crea lo que pide. Una medida fuera de lo habitual se convierte en una advertencia en Problemas; nunca le impide dibujar ni guardar.
keywords: recomendación, advertencia, problemas, rechazado, no dibuja, muy pequeño, muy angosto, mínimo, límite, ancho de escalera, contrahuella, huella, columna, rampa, tamaño de puerta, línea de cuadrícula, altura de nivel, buhardilla, escalera de caracol, pendiente de plataforma, muro corto, sin bloqueos
from: 20090130
---

## Qué hará

Dibuje una medida que no sea la habitual y vea dónde BimCraft se lo indica.

## Pasos

1. Dibuje o modifique el elemento como lo quiere: por ejemplo, una escalera de 400 mm de ancho.
2. BimCraft lo crea tal como lo pidió.
3. Abra {{ui:Problems}} en la barra superior. Bajo **Recomendaciones de dibujo** hay una advertencia que indica el elemento, la medida que dio y el rango habitual.
4. Haga clic en la advertencia para seleccionar el elemento. Cambie la medida si fue un error, o déjela: una advertencia puede aceptarse, con o sin motivo.

## Qué es una recomendación

Antes estas medidas se rechazaban. Ahora se crean, cada una con una advertencia:

- **Escaleras**: más angostas que 500 mm o más anchas que 5 m; contrahuellas fuera de 100 a 300 mm; huellas fuera de 150 a 600 mm.
- **Escaleras de caracol**: un poste fuera de 40 a 400 mm; huellas de menos de 100 mm de profundidad en la línea de paso.
- **Columnas**: menos de 50 mm de diámetro o menos de 300 mm de alto.
- **Rampas**: menos de 300 mm de ancho.
- **Puertas y ventanas**: menos de 100 mm de ancho o de alto.
- **Líneas de cuadrícula**: menos de 100 mm de largo.
- **Muros**: un muro que queda con menos de 50 mm de largo, por ejemplo por un recorte.
- **Niveles**: menos de 1 m o más de 100 m de alto (edificio nuevo, niveles escalonados, altura de un nivel).
- **Buhardillas**: fuera de 600 mm a 12 m de ancho; un muro de fachada fuera de 300 mm a 4 m; un alero de más de 1 m; muros fuera de 50 a 400 mm.
- **Plataformas de edificio**: taludes laterales fuera de 1:1 a 10:1.

## Qué sigue rechazándose

Solo lo que no puede construirse o encontrarse, cada uno con un mensaje que explica por qué:

- Una medida menor de 10 mm (un muro menor de 1 mm): no hay nada que construir.
- Una buhardilla no más ancha que el doble del espesor de su muro: sus dos muros laterales se encontrarían.
- Una plataforma con taludes laterales más empinados que 0.1:1 (eso es un muro de contención) o más planos que 100:1 (la nivelación seguiría sin fin).
- Algo que no cabe donde lo colocó, un contorno que se cruza a sí mismo, o un elemento que ya no está en el modelo.

## Conviene saber

- La recomendación se calcula a partir del modelo, así que vuelve a aparecer cuando abre el archivo más tarde, y desaparece cuando la medida se corrige.
- Las revisiones del modelo, los paquetes de normativa y las revisiones IDS también solo enumeran lo que encuentran. Nada en {{ui:Problems}} le impide dibujar ni guardar.
- Los rangos habituales son práctica general, no un código de construcción. Para un código, agregue el complemento Normativa de construcción y elija su lugar.

## Siguiente

- [Revisar un modelo en busca de problemas comunes](topic:model-checks)
- [Escaleras y barandales](topic:stairs-and-railings)
