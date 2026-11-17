---
title: Consejo de dibujo: los tamaños inusuales se crean, con un aviso
summary: BimCraft hace lo que pedís. Un tamaño fuera de lo habitual se convierte en un aviso en Problemas; nunca te impide dibujar ni guardar.
keywords: consejo, aviso, problemas, rechazado, no dibuja, muy pequeño, muy angosto, mínimo, límite, ancho de escalera, contrahuella, huella, columna, rampa, tamaño de puerta, línea de cuadrícula, altura de nivel, buhardilla, escalera caracol, pendiente de plataforma, muro corto, sin bloqueos
from: 20090130
---

## Lo que hará

Dibujá un tamaño que no es el habitual, y mirá dónde BimCraft te avisa al respecto.

## Pasos

1. Dibujá o cambiá el elemento como lo querés: por ejemplo una escalera de 400 mm de ancho.
2. BimCraft la hace tal como la pediste.
3. Abrí {{ui:Problemas}} en la barra superior. Debajo de **Consejo de dibujo** hay un aviso que nombra el elemento, el tamaño que diste y el rango habitual.
4. Ojeclic el aviso para elegir el elemento. Cambiá el tamaño si fue un error, o dejalo: un aviso se puede aceptar, con o sin motivo.

## Qué es un consejo

Antes estos se rechazaban. Ahora se crean, cada uno con un aviso:

- **Escaleras**: más angostas que 500 mm o más anchas que 5 m; contrahuellas fuera de 100 a 300 mm; huellas fuera de 150 a 600 mm.
- **Escaleras caracol**: un poste fuera de 40 a 400 mm; huellas de menos de 100 mm de fondo en la línea de paso.
- **Columnas**: menos de 50 mm de diámetro o menos de 300 mm de alto.
- **Rampas**: menos de 300 mm de ancho.
- **Puertas y ventanas**: menos de 100 mm de ancho o de alto.
- **Líneas de cuadrícula**: menos de 100 mm de largo.
- **Muros**: un muro que queda con menos de 50 mm de largo, por ejemplo por un recorte.
- **Niveles**: menos de 1 m o más de 100 m de alto (edificio nuevo, niveles desfasados, altura de un nivel).
- **Buhardillas**: fuera de 600 mm a 12 m de ancho, un muro frontal fuera de 300 mm a 4 m, un vuelo de más de 1 m, muros fuera de 50 a 400 mm.
- **Plataformas de edificio**: pendientes laterales fuera de 1:1 a 10:1.

## Qué se sigue rechazando

Solo lo que no se puede construir ni encontrar, cada uno con un mensaje que dice por qué:

- Un tamaño menor a 10 mm (un muro menor a 1 mm): no hay nada que construir.
- Una buhardilla no más ancha que el doble del espesor de su muro: sus dos muros laterales se encontrarían.
- Una plataforma de edificio con pendientes laterales más empinadas que 0.1:1 (eso es un muro de contención) o más planas que 100:1 (el movimiento de suelo seguiría sin fin).
- Algo que no entra donde lo pusiste, un contorno que se cruza a sí mismo, o un elemento que ya no está en el modelo.

## Útil saber

- El consejo se calcula a partir del modelo, así que vuelve a aparecer cuando abrís el archivo después, y desaparece cuando se corrige el tamaño.
- Las verificaciones del modelo, los paquetes de normativa y las verificaciones IDS también solo listan lo que encuentran. Nada en {{ui:Problemas}} te impide dibujar ni guardar.
- Los rangos habituales son práctica general, no un código de edificación. Para un código, agregá el complemento Normativa de construcción y elegí tu lugar.

## Siguiente

- [Revisar un modelo por problemas comunes](topic:model-checks)
- [Escaleras y barandas](topic:stairs-and-railings)
