---
title: Comprobar elementos de formigón e xerar cargas sísmicas
summary: Configure as barras de vigas e piares de formigón do modelo IFC aberto, compróbeos segundo ACI 318-19, xere forzas laterais equivalentes segundo ASCE 7-22 en pisos rixidos e vexa a deriva entre pisos. Unha axuda para que un enxeñeiro a revise.
keywords: formigón, formigón armado, ACI 318, ACI 318-19, armadura, viga, piar, cortante, estribos, sísmico, terremoto, forza lateral equivalente, ELF, ASCE 7-22, deriva, deriva entre pisos, pisos, diafragma rixido, peso do piso, aproveitamento, estrutural, enxeñeiro, análise
from: 2f342e72
---

Os bloques {{ui:Elementos de formigón}} e {{ui:Cargas sísmicas}} da lapela {{ui:Análise}} comprobán as vigas e piares de formigón armado do IFC aberto, e xeran as forzas laterais dun terremoto sobre os pisos da súa estrutura. Son os mesmos bloques que os de DetailCraft, executados despois da análise da lapela {{ui:Análise}}, e gardados no IFC cos demais axustes de análise.

:::warning
Os resultados son **para que un enxeñeiro os comprobe**: unha axuda ata que alguén os revise. As comprobacións de formigón usan forzas de primeiro orde (un piar nun marco que se considera sen desprazamento lateral dimensiónase para o seu momento amplificado), sen amplificación por desprazamento, sen deseño a torsión, sen detallado sísmico (capítulo 18 de ACI) e sen detallado de estribos. As cargas sísmicas non inclúen o factor de redundancia, o efecto sísmico vertical, a amplificación por torsión nin os efectos P-delta. **As cargas de vento non están implementadas**: os capítulos de vento da norma non están nas páxinas de referencia do proxecto.
:::

## O que le BimCraft

A análise le as vigas, piares e diagonais do modelo cos seus perfís (vexa [Analizar o marco estrutural](topic:frame-analysis)). O bloque {{ui:Elementos de formigón}} lista todas as seccións que usan. Prema {{ui:Configurar como formigón…}} nunha sección que sexa de formigón: BimCraft toma un rectángulo a partir da área e da rixidez do perfil (a largura b e o canto h, que despois pode cambiar), así que unha sección que non se parece a un rectángulo (un perfil de aceiro laminado) dá un tamaño que hai que corrixir, ou déixase como está.

Unha sección configurada como formigón, e calquera elemento cuxo material se chame formigón, analízase como formigón: E = 4700 √f′c, 2400 kg/m³, e por defecto con **seccións fisuradas** (piares 0,70 Ig, vigas 0,35 Ig; ACI 318-19 Táboa 6.6.3.1.1(a)). Escolla {{ui:Seccións brutas}} para desactivalo. Sen estes axustes o modelo analízase exactamente como antes.

## Barras, combinacións, comprobación

Indique o recubrimento, as barras superiores, inferiores e laterais (ou unha gaiola de piar) e os estribos de cada sección, e defina f′c, fy, fyt, K e se o marco é con desprazamento lateral ou sen el. Dé a cada caso de carga o seu tipo, prema {{ui:Crear combinacións}} (ASCE 7 §5.3.1) e despois {{ui:Comprobar o formigón}}: cada elemento recibe un aproveitamento, coloreado no modelo. Os elementos que superan a capacidade, e unha deriva entre pisos por enriba do seu límite, listanse en {{ui:Problemas}} coa súa cláusula; prema un deles para seleccionar o elemento.

## Pisos e cargas sísmicas

No bloque {{ui:Cargas sísmicas}}, {{ui:Buscar pisos}} toma os niveis onde se unen dúas ou máis vigas; cada un convértese nun diafragma rixido. {{ui:Tomar os pesos dos casos}} lee o peso sísmico de cada piso dos casos aos que dea un factor. Cubra SDS, SD1, S1, R, Ie, Cd, TL, o sistema e a categoría de risco, e despois prema {{ui:Crear casos sísmicos}} (ASCE 7-22 12.8: período, cortante na base, reparto ao longo dos pisos, 5 % de torsión accidental). As forzas por piso e a comprobación de deriva (12.12) móstranse despois dunha execución. O mesmo período e a mesma rixidez por piso alimentan o terremoto en [Reproducir unha inundación, vento ou terremoto](topic:hazard-playback) cando escolla o marco de análise como fonte.

As laxes e os muros de formigón convértense en placas na análise, e o bloque {{ui:Armadura de laxes}} calcula o acero que necesitan por metro. Os detalles de cada comprobación están no tema de DetailCraft co mesmo nome.
