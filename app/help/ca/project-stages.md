---
title: Fases del projecte, des del programa fins a les instruccions d'obra
summary: Comenceu amb un programa amb superfícies objectiu i veieu si es compleix o si falta espai mentre dibuixeu, compareu opcions de concepte amb ell, enllaceu especificacions i detalls als tipus, reviseu plànols de taller i registreu instruccions d'obra sobre els elements.
keywords: programa, quadre de superfícies, superfície objectiu, assolit, insuficient, sales, opcions de concepte, opcions, volumetria, pressupost, especificació, spec, detall, detall constructiu, tipus, plànol de taller, revisió, aprova, torna a presentar, instrucció d'obra, revisió, causa, obra, fase
from: 0a49b852
---

## Què farà

Treballeu les fases d'un projecte en un sol tauler: escriviu el programa del client com a sales amb superfícies objectiu, compareu les opcions de concepte amb ell, mantingueu l'especificació i els detalls constructius amb els tipus als quals pertanyen, reviseu els plànols de taller a mesura que tornen dels gremis i registreu les instruccions d'obra sobre els elements que modifiquen.

## Passos

1. Al tauler esquerre obriu **Fases del projecte** i després **Programa**.
2. Enganxeu les sales, una per línia: `Menjador; 1; 30` vol dir una sala de 30 m². El recompte es pot deixar fora. Trieu **Afegeix les sales**. Ompliu el client, el solar, el pressupost, la tolerància i el calendari, i després **Desa el programa**.
3. Dibuixeu els murs. Cada sala que formen els murs i que té el nom de la sala del programa (un número després, com «Dormitori 2», s'ignora) es compta. El **Quadre de superfícies** diu **Assolit**, **Insuficient**, **Excés** o **No dibuixat**, amb la diferència en m².
4. Per començar un projecte nou d'aquesta manera, trieu **Comença un projecte nou a partir d'un programa**. Obre un model nou, a partir d'una de les plantilles desades si n'escolliu una, i hi posa el programa com a primer pas.
5. Obriu **Opcions respecte al programa**. Cada opció de volumetria que es conservi al model es dibuixa a la mateixa escala amb la superfície bruta, el que demana el programa i quantes sales del programa hi caben. **Apila el programa aquí** posa les sales a les plantes de l'opció, de la més baixa a la més alta, i diu el que no hi cap. El cost només surt de la taula de preus del projecte; sense fila corresponent diu «Sense tarifa».
6. Obriu **Tipus, especificacions i detalls**. Cada tipus de mur, porta, finestra i forjat mostra si té text d'especificació, els detalls enllaçats i on no coincideixen l'especificació, els quadres i els plànols. **Enllaça un detall** afegeix un fitxer DetailCraft o CadCraft, una adreça o un plànol d'aquest model.
7. Obriu **Plànols de taller**. Seleccioneu els elements que cobreix un plànol de taller al model i després **Rep-lo**. Useu **Aprova**, **Amb observacions** o **Revisa**, amb el nom i la nota del revisor. **Tornat a presentar** crea la següent revisió del mateix registre i conserva l'historial de revisió. L'estat també s'escriu a cada element.
8. Obriu **Instruccions d'obra**. Seleccioneu els elements, indiqueu la causa i què fa al cost i al temps amb les vostres paraules, i després **Registra-la**. Quan una incidència ja s'ha registrat, **Explica els canvis des d'aquesta incidència** indica quins elements canviats cobreix una instrucció i quins han canviat sense cap registre.

## Cal saber-ne

- Cada pas es pot desfer amb **Desfés**. No es rebutja res: un programa que no es compleix, un tipus que no coincideix amb el seu text o un plànol de taller fora de termini és un avís o una nota a **Problemes**.
- Les sales del programa són espais sense murs. Tenen una superfície objectiu, no una superfície dibuixada, de manera que els quadres de sales i el COBie no les compten com a sales dibuixades.
- Una distribució només apila les sales en plantes segons la superfície. No dibuixa cap mur.
- El text de l'especificació s'escriu a **Documents** des del model. Aquí només es compara amb les mides del propi model: mai no s'escriu per vosaltres cap clàusula d'una norma.
- Els plànols de taller i les instruccions d'obra són registres de la mateixa història que el tauler **Incidències i revisions**, de manera que els dos taulers els mostren.
- L'estat d'un plànol de taller és una propietat de cada element (`CadCraft_ShopDrawing`), i una instrucció d'obra és `CadCraft_SiteInstruction`, de manera que **Cerca** i **Colora per propietat** les poden fer servir.
- Les marques verificades a obra (Fase 7) són a Propietats, sota **Verificació**.
