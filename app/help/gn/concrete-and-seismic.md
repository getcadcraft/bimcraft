---
title: Hormigón miembro-kuéra ojehecha ha sísmico carga ojapo
summary: Ojepyta hormigón viga ha columna barra abierto modelo-pe, ojehecha ACI 318-19 rupive, ojapo fuerza lateral equivalente ASCE 7-22 rígido piso-pe ha ojehecha piso deriva. Ingeniero ojehechaháicha ayuda.
keywords: concrete, reinforced concrete, ACI 318, ACI 318-19, rebar, beam, column, shear, ties, seismic, earthquake, equivalent lateral force, ELF, ASCE 7-22, drift, storey drift, floors, rigid diaphragm, story weight, utilisation, structural, engineer, analysis
from: 2f342e72
---

{{ui:Concrete members}} ha {{ui:Seismic loads}} bloque-kuéra {{ui:Analysis}} pestaña-pe ojehecha hormigón armado viga ha columna IFC abierto-pe, ha tembiasakue ojapo sísmico fuerza piso-kuérare pórtico-pe. Upéva DetailCraft bloque-kuéra ha {{ui:Analysis}} análisis rire ojapo, IFC-pe ojesalva análisis ajuste-kuéra ndive.

:::warning
Resultado **ingeniero ojehechaháicha**: ayuda peteĩ ojehechaháicha peve. Hormigón ojehechahaha primer orden fuerza-kuéra ndive (columna non-sway pórtico-pe ojapo amplificado momento-pe), sway amplificación ndaipóri, torsión diseño ndaipóri, sísmico detallado ndaipóri (ACI capítulo 18) ha estribo detallado ndaipóri. Sísmico carga ndoguerekói redundancia factor, vertical sísmico efecto, torsional amplificación ha P-delta efecto. **Viento carga ndojapóiva**: norma viento capítulo-kuéra proyecto referencia página-pe ndoĩ.
:::

## Mba'épa BimCraft oikuaa

Análisis ohecha modelo viga, columna ha brazo perfil-ndive ([Pórtico estructural análisis](topic:frame-analysis)). {{ui:Concrete members}} bloque omombe'u opa sección-kuéra ojeporúva. Eklika {{ui:Set up as concrete…}} hormigón sección ári: BimCraft perfil área ha rigidez rupive rectángulo ojejapo (ancho b ha altura h ojemoambue hag̃ua), upévare rectángulo-pe ndojoguái sección (acero laminado) tamaño ojemoambue ha térã ndojapói.

Hormigón-pe ojehecha sección, material héra hormigón elemento opa, analisis-pe hormigón háicha: E = 4700 √f′c, 2400 kg/m³, ha default **sección agrietada** (columna 0.70 Ig, viga 0.35 Ig; ACI 318-19 Tabla 6.6.3.1.1(a)). {{ui:Gross sections}} eiporavo ojepe'a hag̃ua. Ko ajuste ndaipóri jave, modelo ojehecha ojapóicha.

## Barra, combinación, ojehecha

Recubrimiento, superior, inferior ha costado barra (térã columna jaula) ha sección estribo-kuéra ome'ẽ; f′c, fy, fyt, K ha sway térã non-sway ajuste. Carga caso-kuérape tipo ome'ẽ, eklika {{ui:Make combinations}} (ASCE 7 §5.3.1) ha upéi {{ui:Check concrete}}: miembro peteĩ-peteĩ utilización oguereko, modelo-pe color. Capacidad-gui guasúva miembro-kuéra ha piso deriva límite-gui guasúva ojeikuaa {{ui:Problems}}-pe cláusula-ndive; eklika peteĩ elemento ojepe'a hag̃ua.

## Piso ha sísmico carga

{{ui:Seismic loads}} bloque-pe {{ui:Find floors}} ohecha nivel, viga mbohapy térã mboapy oñemoĩva; peteĩ-peteĩ rígido diafragma ojapo. {{ui:Take weights from cases}} piso sísmico peso caso-gui ohecha, factor ome'ẽ jave. SDS, SD1, S1, R, Ie, Cd, TL, sistema ha riesgo categoría ojejapo, upéi {{ui:Make seismic cases}} (ASCE 7-22 12.8: período, base cortante, piso-kuéra distribución, 5 % torsión accidental). Piso fuerza ha deriva ojehecha (12.12) corrida rire ohechauka. Período ha piso rigidez ojeporu [Inundación, viento térã sísmico ojepyhyrõ](topic:hazard-playback) pe análisis pórtico fuente ojeiporavo jave.

Hormigón losa ha muro análisis-pe placa ojapo, ha {{ui:Armadura de losa}} bloque metro-pe ojehecha acero ojeporúva. Opa ojehecha detalle DetailCraft tema mismo nombre-pe.
