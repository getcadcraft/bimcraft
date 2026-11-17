---
title: Revise miembros de concreto y genere cargas sísmicas
summary: Prepare las varillas de vigas y columnas de concreto del modelo abierto, revíselas según ACI 318-19, genere fuerzas laterales equivalentes según ASCE 7-22 en losas rígidas, y vea la deriva de nivel. Una ayuda para que lo revise un ingeniero.
keywords: concreto, concreto reforzado, ACI 318, ACI 318-19, varilla, viga, columna, cortante, estribos, sísmico, sismo, fuerza lateral equivalente, ELF, ASCE 7-22, deriva, deriva de nivel, losas, diafragma rígido, peso de nivel, utilización, estructural, ingeniero, análisis
from: 2f342e72
---

Los bloques {{ui:Miembros de concreto}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} revisan las vigas y columnas de concreto reforzado del IFC abierto, y generan las fuerzas laterales de un sismo sobre las losas de su marco. Son los mismos bloques de DetailCraft, ejecutados después del análisis de la pestaña {{ui:Análisis}}, y se guardan en el IFC junto con los demás ajustes de análisis.

:::warning
Los resultados son **para que los revise un ingeniero**: una ayuda hasta que alguien la haya revisado. Las revisiones de concreto usan fuerzas de primer orden (una columna en un marco que se llama no contraventeado se diseña para su momento amplificado), sin amplificación por desplazamiento lateral, sin diseño por torsión, sin detallado sísmico (capítulo 18 de ACI) y sin detallado de estribos. Las cargas sísmicas omiten el factor de redundancia, el efecto sísmico vertical, la amplificación por torsión y los efectos P-delta. **Las cargas de viento no están construidas**: los capítulos de viento de la norma no están en las páginas de referencia del proyecto.
:::

## Lo que lee BimCraft

El análisis lee las vigas, columnas y contravientos del modelo con sus perfiles (vea [Analice el marco estructural](topic:frame-analysis)). El bloque {{ui:Miembros de concreto}} lista cada sección que usan. Pulse {{ui:Preparar como concreto…}} en una sección que sea de concreto: BimCraft toma un rectángulo a partir del área y la rigidez del perfil (el ancho b y el peralte h, que luego puede cambiar), así que una sección que no se parece a un rectángulo (un perfil de acero laminado) da una medida que debe corregir, o se deja sin cambios.

Una sección preparada como concreto, y cualquier elemento cuyo material se llame concreto, se analiza como concreto: E = 4700 √f′c, 2400 kg/m³, y por defecto con **secciones agrietadas** (columnas 0.70 Ig, vigas 0.35 Ig; ACI 318-19 Tabla 6.6.3.1.1(a)). Elija {{ui:Secciones brutas}} para desactivarlo. Sin estos ajustes, el modelo se analiza exactamente igual que antes.

## Varillas, combinaciones, revisión

Indique el recubrimiento, las varillas superiores, inferiores y laterales (o una jaula de columna) y los estribos de cada sección; fije f′c, fy, fyt, K y contraventeado o no contraventeado. Indique el tipo de cada caso de carga, pulse {{ui:Generar combinaciones}} (ASCE 7 §5.3.1) y luego {{ui:Revisar concreto}}: cada miembro recibe una utilización, coloreada en el modelo. Los miembros que exceden su capacidad, y una deriva de nivel por encima de su límite, se listan en {{ui:Problemas}} con su cláusula; haga clic en uno para seleccionar el elemento.

## Losas y cargas sísmicas

En el bloque {{ui:Cargas sísmicas}}, {{ui:Buscar pisos}} toma los niveles donde se unen dos o más vigas; cada uno se vuelve un diafragma rígido. {{ui:Tomar pesos de los casos}} lee el peso sísmico de cada piso a partir de los casos a los que dé un factor. Complete SDS, SD1, S1, R, Ie, Cd, TL, el sistema y la categoría de riesgo, luego pulse {{ui:Hacer casos sísmicos}} (ASCE 7-22 12.8: periodo, cortante basal, distribución en altura, 5 % de torsión accidental). Las fuerzas por nivel y la revisión de deriva (12.12) aparecen después de una ejecución. El mismo periodo y la misma rigidez de nivel alimentan el sismo de [Reproduzca una inundación, viento o un sismo](topic:hazard-playback) cuando elija el marco de análisis como su origen.

Las losas y muros de concreto se convierten en placas en el análisis, y el bloque {{ui:Armado de losas}} calcula el acero que necesitan por metro. Los detalles de cada revisión están en el tema de DetailCraft del mismo nombre.
