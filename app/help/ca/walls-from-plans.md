---
title: Murs a partir d'un conjunt de plànols (PDF o escaneig)
summary: Converteix les pàgines d'un PDF, o d'un plànol escanejat, en murs, portes i finestres, un nivell per cada pàgina, amb la pàgina guardada sota cada planta.
keywords: pdf, plànols, conjunt de plànols, escaneig, plànol escanejat, tiff, calca, murs a partir d'un pdf, murs a partir d'un escaneig, nivells, pàgines, escala, portes, finestres, gir, ampit, subjacent
from: b70d9db7
---

## Què faràs

Comença un model a partir dels plànols que tens en paper: un PDF (dibuixat com a línies, o un escaneig dins d'un PDF) o un escaneig (PNG, JPEG, TIFF amb una o moltes pàgines). Cada pàgina es converteix en els murs, portes i finestres d'un nivell.

## Passos

1. Activa {{ui:Dibuixa}}. Tria {{ui:Compilació}} › {{ui:Des d'un dibuix…}}, després {{ui:Trieu un dibuix…}} i tria el PDF o l'escaneig.
2. **Pàgines i nivells.** Cada pàgina es mostra amb el que és (**obra de línies**, o **una imatge (calcada)**) i el nivell on va: un dels nivells que tens, **un nivell nou per sobre dels altres**, o **deixa aquesta pàgina fora**. Les pàgines s'associen als teus nivells per ordre; canvia-les com vulguis.
3. **Escala.** Per a un PDF, digues com es va dibuixar (**1 : 100**, **1 : 50**…). Per a qualsevol altra cosa, o quan no ho saps, tria **des d'una distància que conec**: fes clic als dos extrems d'una cota o d'una barra d'escala a la vista prèvia, i després escriu la distància real. Totes les pàgines fan servir una sola escala.
4. Tria el **tipus de mur** i l'**alçada d'un nivell nou**. Deixa **Mantén cada pàgina sota la planta del seu nivell** marcat per veure cada pàgina com a línies fines sota la seva planta.
5. La línia sota les opcions diu quants murs, portes i finestres farà, i en quants nivells. Fes clic a {{ui:Crea-les}}.

## Com llegeix una pàgina

- **Els murs** surten de parells de línies paral·leles separades fins a 600 mm (les dues cares d'un mur); el mur té el gruix del buit. Els ratllats i les lletres es deixen fora.
- **Portes i finestres.** Un buit en un mur (de 500 a 2600 mm) amb un gir de porta dibuixat al costat és una porta, amb bisagra a un extrem del buit i que s'obre cap al costat del gir. Un buit o un mur amb línies d'ampit és una finestra. Un buit sense cap de les dues coses és una porta fins a 1300 mm i una finestra per sobre d'aquesta mida.
- **Un escaneig** es posa primer recte quan s'ha escanejat torçat (el diàleg ho diu), es fa en blanc i negre, es neteja de punts i es calca; una **pàgina de PDF que és una imatge** es dibuixa primer i després es tracta igual. El calc troba el centre de cada traç i ajusta línies rectes i arcs, i no fa servir cap xarxa ni cap model entrenat.
- **Les sales** es deriven soles dels bucles tancats que formen els murs. Quan el PDF té text, una sala agafa el seu nom de la lletra que hi ha dins (la més gran; una cota, una escala o un número de full no és un nom). Un escaneig no té text, de manera que les seves sales conserven els noms que els dona el programa.
- **Tot el que es llegeix de la pàgina es marca com a no verificat**: cada mur, porta, finestra i sala té una caixa discontínua i un «?» a la planta fins que el comproves. Tria el que has comprovat i usa {{ui:Eines}} › {{ui:Marca com a comprovat}}. Consulta [Marca els elements com a comprovats o verificats a obra](topic:verification).

## Què hauries de veure

- Els murs, les portes, les finestres i les sales de cada nivell, i els nivells nous, tot com un sol pas: {{key:Mod+Z}} ho desfà tot.
- Cada pàgina com a línies fines sota la planta del seu nivell, llistada a {{ui:Compilació}} › {{ui:Des d'un dibuix…}} amb {{ui:Suprimeix}}.

:::note
Això és el que van donar les línies, amb la precisió de la pàgina. Un escaneig pot perdre un mur fi, unir dos murs molt propers, o trobar un mur en una taca. Un gir que el dibuix no mostra fa que un buit esdevingui una porta simple. Comprova cada nivell contra la pàgina abans de confiar-hi, i corregeix el que estigui malament amb les eines {{ui:Mur}}, {{ui:Porta}} i {{ui:Finestra}}.
:::
