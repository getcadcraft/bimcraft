---
title: "Consejos de dibujo: los tamaños inusuales se crean, con una advertencia"
summary: BimCraft crea lo que pide. Un tamaño fuera de lo habitual se convierte en una advertencia en Problemas; nunca le impide dibujar ni guardar.
keywords: consejo, advertencia, problemas, rechazado, no dibuja, demasiado pequeño, demasiado estrecho, mínimo, límite, ancho de escalera, contrahuella, huella, pilar, rampa, tamaño de puerta, eje, altura de nivel, buhardilla, escalera de caracol, pendiente de plataforma, muro corto, sin bloqueos
from: 20090130
---

## Qué hará

Dibuje un tamaño que no sea el habitual y vea dónde le avisa BimCraft.

## Pasos

1. Dibuje o modifique el elemento como quiera: por ejemplo, una escalera de 400 mm de ancho.
2. BimCraft lo crea tal como lo pidió.
3. Abra {{ui:Problemas}} en la barra superior. Bajo **Consejos de dibujo** aparece una advertencia que indica el elemento, el tamaño que dio y el intervalo habitual.
4. Haga clic en la advertencia para seleccionar el elemento. Cambie el tamaño si fue un error, o déjelo: una advertencia puede aceptarse, con o sin motivo.

## Qué es un consejo

Antes se rechazaban. Ahora se crean, cada uno con una advertencia:

- **Escaleras**: más estrechas de 500 mm o más anchas de 5 m; contrahuellas fuera de 100 a 300 mm; huellas fuera de 150 a 600 mm.
- **Escaleras de caracol**: un poste fuera de 40 a 400 mm; huellas de menos de 100 mm de profundidad en la línea de paso.
- **Pilares**: de menos de 50 mm de ancho o de menos de 300 mm de alto.
- **Rampas**: de menos de 300 mm de ancho.
- **Puertas y ventanas**: de menos de 100 mm de ancho o de alto.
- **Ejes**: de menos de 100 mm de longitud.
- **Muros**: un muro de menos de 50 mm de longitud, por ejemplo tras un recorte.
- **Niveles**: de menos de 1 m o de más de 100 m de alto (edificio nuevo, niveles desfasados, altura de un nivel).
- **Buhardillas**: ancho fuera de 600 mm a 12 m, muro frontal fuera de 300 mm a 4 m, vuelo de más de 1 m, muros fuera de 50 a 400 mm.
- **Plataformas de edificación**: pendientes laterales fuera de 1:1 a 10:1.

## Lo que sigue rechazado

Solo lo que no se puede construir ni encontrar, cada uno con un mensaje que explica por qué:

- Un tamaño menor de 10 mm (un muro de menos de 1 mm): no hay nada que construir.
- Una buhardilla no más ancha que el doble de su espesor de muro: sus dos muros laterales se encontrarían.
- Una plataforma de edificación con pendientes laterales más pronunciadas que 0.1:1 (eso es un muro de contención) o más planas que 100:1 (el movimiento de tierras continuaría sin fin).
- Algo que no cabe donde lo colocó, un contorno que se cruza consigo mismo, o un elemento que ya no está en el modelo.

## Conviene saber

- El consejo se calcula a partir del modelo, así que vuelve a aparecer al abrir el archivo más tarde, y desaparece cuando se corrige el tamaño.
- Las comprobaciones del modelo, los paquetes normativos y las comprobaciones IDS también solo enumeran lo que encuentran. Nada en {{ui:Problemas}} le impide dibujar ni guardar.
- Los intervalos habituales son práctica general, no un código de edificación. Para un código, añada el complemento Normativa de construcción y elija su lugar.

## Siguiente

- [Comprobar un modelo por problemas habituales](topic:model-checks)
- [Escaleras y barandillas](topic:stairs-and-railings)
