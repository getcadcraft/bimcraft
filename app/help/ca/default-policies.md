---
title: "Polítiques per defecte: definiu amb què comença un edifici nou"
summary: Indiqueu una vegada quin tipus de mur, nivells, primer full, etiquetes LOD, unitats i eina té un edifici nou en començar, per a projectes mètrics i imperials, i compartiu les polítiques a tota l'oficina com un fitxer petit.
keywords: per defecte, valors per defecte, polítiques per defecte, política, estàndard de l'oficina, valors per defecte de l'oficina, plantilla, edifici nou, primer tipus de mur, mur mètric, obra, LOD, nivell de desenvolupament, primer full, paper, escala, nivells, alçada de planta, noms de nivell, eina Mur, unitats, compartir, exportar, importar, json
from: 42379aa5
---

## Què farà

Digueu a BimCraft amb què ha de començar un edifici nou, perquè ningú de l'oficina hagi de canviar les mateixes coses cada vegada. Això és un complement: està desactivat fins que l'activeu, i una política que no definiu deixa el valor per defecte de BimCraft exactament igual.

:::note
Són valors per defecte per als edificis **nous** i les coses **noves**. Un projecte que ja heu començat no canvia.
:::

## Passos

1. Obriu Configuració, aneu a {{ui:Complements}} i activeu {{ui:Polítiques per defecte}}.
2. A Configuració, obriu la pestanya **BimCraft** i trieu {{ui:Polítiques per defecte}} a la llista de l'esquerra.
3. Definiu les polítiques que vulgueu. Cada una comença amb **el propi de BimCraft**, amb el que hi ha entre parèntesis. Una política amb una casella **Mètric** i una **Imperial** pren un valor per a cada tipus de projecte; ompliu només les que necessiteu.
4. No hi ha botó de desar: cada canvi es desa en fer-lo. Un valor que no es pot fer servir es rebutja amb un missatge i el valor antic es manté.
5. Feu clic a {{ui:Edifici nou}}. El diàleg s'omple amb les vostres polítiques, i cada valor que una política defineix porta al costat **de les vostres Polítiques per defecte**. Encara podeu canviar qualsevol d'ells abans de {{ui:Crea}}.

## Les polítiques

- **Unitats d'un edifici nou**: les unitats passen a aquestes en Crear.
- **Nombre de nivells**, **Noms dels nivells** i **Alçada del nivell**. En un nom, `{n}` compta 1, 2, 3; `{n0}` compta 0, 1, 2; `{nn}` i `{nn0}` fan el mateix amb dos dígits. Així, `Planta {nn0}` dóna Planta 00, Planta 01, Planta 02.
- **Primer tipus de mur**: el que dibuixa primer l'eina Mur. Una oficina mètrica pot començar amb Exterior masonry 300 mm mentre els projectes imperials mantenen Exterior 2×6.
- **Etiqueta LOD dels tipus de mur inicials**: el nivell de desenvolupament (LOD 100 a 500) que mostren els nou tipus inicials allà on es llisti un tipus. Vegeu [Construeix conjunts de murs](topic:wall-assemblies).
- **LOD d'un tipus de mur nou**: l'etiqueta amb què comença un tipus nou a l'editor de tipus. Podeu canviar-la allà.
- **Primer full**: el seu paper, escala, número de full i nom (useu `{level}` per al nom del nivell més baix), o cap primer full.
- **Mides d'anotació en paper** (Configuració › Global › Polítiques per defecte): les alçades de l'oficina, en mil·límetres tal com s'imprimeixen, per a notes, text de cotes, etiquetes, noms de sala, lletres de les bombolles de la graella, títols de vista i text de quadres. Un edifici nou les pren en Crear i les manté al seu fitxer. Vegeu [Dibuixa a mida real, anota a escala](topic:annotation-sizes).
- **Eina activa després de Crear**: Selecciona, com fa BimCraft per si sol, o Mur, perquè els dos primers clics al plànol ja dibuixin un mur.

## Disposició dels quadres: l'estàndard de l'oficina

A **Configuració › Global › Polítiques per defecte**, sota **Disposició dels quadres (estàndard de l'oficina)**, definiu com s'agrupa cada quadre, si té subtotals i un total, el seu títol i la capitalització dels encapçalaments de les columnes. Cada quadre que no en defineix un de propi els pren, qui el configuri. Vegeu [Disposa, desa i exporta un quadre](topic:schedule-layouts).

## Compartiu-les amb l'oficina

1. A Configuració, obriu la pestanya **Global** i trieu {{ui:Polítiques per defecte}}.
2. Escriviu el **Nom de l'oficina** si voleu. S'escriu al fitxer.
3. Feu clic a {{ui:Desa en un fitxer}}. Rebreu un fitxer petit que acaba en `.ccdefaults.json`.
4. En un altre ordinador, activeu el complement, obriu el mateix lloc i feu clic a {{ui:Carrega des d'un fitxer}}. Les polítiques del fitxer substitueixen les de l'ordinador.

La pestanya Global també té el **Sistema d'unitats d'un projecte nou**, que val per a totes les aplicacions que tinguin el complement, i {{ui:Restableix totes les polítiques}}. {{ui:Restableix els valors per defecte de BimCraft}} a la pestanya BimCraft només esborra els de BimCraft.

## Bon a saber

- El fitxer és JSON pla i obert: una llista de noms de polítiques i valors. Una política que el fitxer indica i que aquesta versió no coneix es deixa fora i s'esmenta al missatge; la resta es carrega igualment.
- Les polítiques es guarden en aquest navegador, per a totes les aplicacions CadCraft d'aquest ordinador. No es guarden al fitxer de l'edifici, i no se sincronitzen entre ordinadors: useu el fitxer.
- L'etiqueta LOD d'un tipus inicial ve de la política d'aquest ordinador. Un tipus que feu com a còpia d'un d'inicial porta la seva etiqueta al fitxer de l'edifici.
- BimCraft no té cap ajust de precisió, de manera que no hi ha cap política de precisió aquí.
- Un edifici començat des d'una plantilla porta els propis nivells i fulls de la plantilla. La política de tipus de mur i la d'unitats encara s'hi apliquen.
- Desactiveu el complement i tot torna a ser el propi de BimCraft. Les vostres polítiques es guarden per quan el torneu a activar.
