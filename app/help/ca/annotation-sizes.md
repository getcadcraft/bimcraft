---
title: Dibuixa a mida real, anota per escala
summary: L'edifici es dibuixa sempre a mida real. El text, les cotes, les etiquetes, els noms de sala, les bombolles de la graella i els símbols es dimensionen en paper, en mil·límetres tal com s'imprimeixen, i mantenen aquesta mida quan l'escala d'un dibuix canvia d'1:100 a 1:50.
keywords: escala d'anotació, anotatiu, mida del text, alçada del text, alçada en paper, mida del text de cota, mida de l'etiqueta, mida del nom de sala, bombolla de graella, mida del símbol, escala del dibuix, 1:50, 1:100, estàndard de l'oficina, retolació, dibuixa a 1:1, mida real, text del full
from: 94118788
---

## Què fareu

Definiu quina alçada tenen les lletres dels dibuixos en paper, una sola vegada per a l'edifici. Mai no escaleu el model i mai no canvieu la mida del text segons l'escala: BimCraft calcula la mida a partir de l'alçada en paper i de l'escala del dibuix.

## Com funciona

- El model és a mida real. Un mur de 10 m de llargada fa 10 000 mm a qualsevol escala.
- Una anotació té una **alçada en paper**: l'alçada d'una lletra majúscula en el full imprès, en mil·límetres.
- A una escala d'1:100, un text de 2,5 mm fa 250 mm d'alçada al model; a 1:50, en fa 125 mm. En paper fa 2,5 mm en tots dos casos.
- Els símbols de plànol (elèctrics, de fontaneria) es dibuixen en mil·límetres de paper i segueixen la mateixa regla.

## Passos

1. Obriu el navegador de projectes. Sota {{ui:Fulls}}, cliqueu {{ui:Mides d'anotació…}}.
2. Escriviu una alçada en mil·límetres per als tipus que vulgueu definir: {{ui:Notes i etiquetes}}, {{ui:Text de cotes}}, {{ui:Etiquetes i noms de planta}}, {{ui:Noms de sala}}, {{ui:Lletres de les bombolles de graella}}, {{ui:Títols de vistes als plànols}} i {{ui:Text de les taules}}. Una casella buida manté la mida pròpia de BimCraft, que es mostra en gris.
3. Cliqueu {{ui:Desa}}. És un sol pas que podeu desfer.

Tots els fulls, el conjunt de dibuixos, el PDF del plànol i les elevacions i seccions fan servir les mides des d'aleshores. La distància entre una línia de cota i el seu text, la mida d'una bombolla de graella i l'alçada d'una fila de taula creixen amb el seu text.

## Un plànol amb escala pròpia

Doneu una escala al plànol al seu rang de vistes ({{ui:Escala}}; vegeu [Vistes i fulls](topic:views-and-sheets)). Llavors:

- a la pantalla, els noms de sala, les etiquetes, el text de les cotes i les bombolles de graella es dibuixen a la seva mida impresa respecte al model, de manera que el que veieu és el que mostrarà el full;
- els símbols de plànol i les seves etiquetes es dimensionen per a aquesta escala. Si canvieu l'escala d'1:100 a 1:50, són la meitat de grans al model i iguals en paper.

Un plànol sense escala pròpia manté el seu text de pantalla fix, i els seus símbols es dimensionen per a 1:50 (1/4" = 1'-0" en peus i polzades), com abans.

## Les mides de la vostra oficina

Amb el complement Polítiques per defecte activat, definiu les alçades de l'oficina a Configuració › Global › Polítiques per defecte › {{ui:Mides d'anotació en paper}}. Un edifici nou les pren quan cliqueu Crea. En un edifici que ja heu començat, el diàleg té {{ui:Usa les mides de la meva oficina}}. Vegeu [Polítiques per defecte](topic:default-policies).

## Les mides d'un paquet de normativa

Un paquet de normativa pot donar les alçades de text que demana el seu lloc (el complement Normativa de construcció, convencions de dibuix). Marqueu el paquet a Configuració › Normativa de construcció, i després, al diàleg, cliqueu {{ui:Usa les mides d'un paquet de normativa}}: les caselles s'omplen, i les reviseu i les deseu. Una mida que un paquet dona en punts és una mida de tipus de lletra, i es converteix en una alçada de majúscula, així que reviseu-la. No es fixa res fins que no es desa.

## Què hauríeu de veure

- La mateixa alçada de text en mil·límetres en un full a 1:100 i en un full a 1:50, mentre que el plànol mateix és dues vegades més gran a 1:50.
- Les mides viatgen amb l'edifici: es desen al seu fitxer IFC.

## Bon a saber

- Les mides pròpies de BimCraft són les que sempre han fet servir els seus fulls (unes 1,5 mm de majúscules per al text de cotes). No són una norma de delineació: definiu les de l'oficina.
- Una alçada ha d'estar entre 0,5 i 50 mm.
- La retolació del caixetí i les llegendes de notes clau no formen part d'això: mantenen les seves pròpies mides.
