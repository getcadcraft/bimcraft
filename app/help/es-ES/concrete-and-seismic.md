---
title: Comprobar elementos de hormigón y generar cargas sísmicas
summary: Configure las barras de vigas y pilares de hormigón del modelo IFC abierto, compruébelos según ACI 318-19, genere fuerzas laterales equivalentes según ASCE 7-22 en forjados rígidos y vea la deriva de planta. Una ayuda para que un ingeniero lo revise.
keywords: hormigón, hormigón armado, ACI 318, ACI 318-19, armadura, viga, pilar, cortante, estribos, sísmico, terremoto, fuerza lateral equivalente, ELF, ASCE 7-22, deriva, deriva de planta, forjados, diafragma rígido, peso de planta, aprovechamiento, estructural, ingeniero, análisis
from: 2f342e72
---

Los bloques {{ui:Concrete members}} y {{ui:Seismic loads}} de la pestaña {{ui:Analysis}} comprueban las vigas y los pilares de hormigón armado del IFC abierto, y generan las fuerzas horizontales de un terremoto sobre los forjados de su pórtico. Son los mismos bloques que los de DetailCraft, ejecutados tras el análisis de la pestaña {{ui:Analysis}}, y se guardan en el IFC junto con los demás ajustes de análisis.

:::warning
Los resultados son **para que los compruebe un ingeniero**: una ayuda hasta que alguien la haya revisado. Las comprobaciones de hormigón usan esfuerzos de primer orden (un pilar en un pórtico que se considera arriostrado se dimensiona para su momento amplificado), sin amplificación por desplazamiento lateral, sin dimensionado a torsión, sin detallado sísmico (capítulo 18 de ACI) y sin detallado de estribos. Las cargas sísmicas omiten el factor de redundancia, el efecto sísmico vertical, la amplificación por torsión y los efectos P-delta. **Las cargas de viento no están implementadas**: los capítulos de viento de la norma no están en las páginas de referencia del proyecto.
:::

## Lo que lee BimCraft

El análisis lee las vigas, los pilares y los arriostramientos del modelo con sus perfiles (vea [Analizar el marco estructural](topic:frame-analysis)). El bloque {{ui:Concrete members}} lista cada sección que usan. Pulse {{ui:Set up as concrete…}} en una sección que sea de hormigón: BimCraft toma un rectángulo a partir del área y la rigidez del perfil (el ancho b y el canto h, que luego puede cambiar), de modo que una sección que no se parece a un rectángulo (un perfil de acero laminado) da una medida que debe corregir, o se deja como está.

Una sección definida como hormigón, y cualquier elemento cuyo material se llame hormigón, se analiza como hormigón: E = 4700 √f′c, 2400 kg/m³, y por defecto con **secciones fisuradas** (pilares 0.70 Ig, vigas 0.35 Ig; ACI 318-19 Tabla 6.6.3.1.1(a)). Elija {{ui:Gross sections}} para desactivarlo. Sin estos ajustes, el modelo se analiza exactamente como antes.

## Barras, combinaciones y comprobación

Indique el recubrimiento, las barras superiores, inferiores y laterales (o una jaula de pilar) y los estribos de cada sección; fije f′c, fy, fyt, K y arriostrado o no arriostrado. Indique el tipo de cada caso de carga, pulse {{ui:Make combinations}} (ASCE 7 §5.3.1) y después {{ui:Check concrete}}: cada elemento recibe un aprovechamiento, coloreado en el modelo. Los elementos que superen su capacidad, y una deriva de planta que supere su límite, aparecen en {{ui:Problems}} con su cláusula; haga clic en uno para seleccionar el elemento.

## Forjados y cargas sísmicas

En el bloque {{ui:Seismic loads}}, {{ui:Find floors}} toma los niveles donde se encuentran dos o más vigas; cada uno se convierte en un diafragma rígido. {{ui:Take weights from cases}} lee el peso sísmico de cada forjado a partir de los casos a los que dé un factor. Complete SDS, SD1, S1, R, Ie, Cd, TL, el sistema y la categoría de riesgo, y después pulse {{ui:Make seismic cases}} (ASCE 7-22 12.8: periodo, cortante basal, reparto en altura y 5 % de torsión accidental). Las fuerzas por planta y la comprobación de deriva (12.12) se muestran tras una ejecución. El mismo periodo y la misma rigidez de planta alimentan el terremoto de [Reproducir una inundación, viento o terremoto](topic:hazard-playback) cuando elija el marco de análisis como su fuente.

Las losas y los muros de hormigón se convierten en placas en el análisis, y el bloque {{ui:Armadura de losas}} calcula el acero que necesitan por metro. Los detalles de cada comprobación están en el tema de DetailCraft del mismo nombre.
