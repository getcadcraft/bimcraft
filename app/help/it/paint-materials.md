---
title: Applica materiali a pareti, solai e tetti
summary: Assegna agli elementi un materiale come mattone, rivestimento, tegole, legno o piastrelle, sull'intero elemento o su un solo lato, salvato nell'IFC e mostrato nelle immagini renderizzate.
keywords: dipingi, materiale, materiali, finitura, finiture, texture, mattone, rivestimento, tegole, copertura, legno, pietra, piastrella, calcestruzzo, intonaco, erba, ghiaia, vetro, metallo, lato della parete, interno, esterno, finitura del pavimento, locale, stile di superficie
from: fbfed676
---

{{ui:Dipingi}} sulla barra degli strumenti apre la libreria dei materiali sopra la vista 3D: mattoni e blocchi, rivestimenti, coperture, legno, pietra, piastrelle, calcestruzzo, intonaco, terreno, vetro e metallo.

## Dipingere elementi

1. Fare clic su {{ui:Dipingi}}.
2. Fare clic su un materiale.
3. Fare clic sugli elementi nella vista 3D. Ogni clic dipinge l'elemento su cui si fa clic.

Per dipingerne molti insieme, selezionarli prima (clic, Ctrl+clic, oppure una [ricerca](topic:find)), poi fare clic sul materiale: ogni elemento selezionato lo riceve in un solo passaggio.

L'elemento mostra subito il colore del materiale nella vista 3D. La sua texture compare in una [immagine renderizzata](topic:render). {{key:Esc}} oppure {{ui:Chiudi}} termina la pittura.

## Dipingere un solo lato

Scegliere {{ui:Solo il lato cliccato}}, poi fare clic sul lato desiderato: l'esterno di una parete con rivestimento e l'interno con un'altra finitura, la parte superiore di un solaio in legno con la parte inferiore lasciata com'è. Il resto dell'elemento mantiene il suo materiale.

Un lato viene individuato dalle direzioni proprie dell'elemento, quindi resta lo stesso lato quando si sposta o si ruota l'elemento.

Per dipingere i solai stanza per stanza, dare a ogni locale un proprio solaio ({{ui:Disegna}} › {{ui:Solaio}} › **Questo locale**, vedi [Locali, solai, controsoffitti e tetti](topic:floors-and-roofs)), poi dipingere la parte superiore di ciascun solaio.

## Rimuovere un materiale

Fare clic sul campione a righe ({{ui:Nessun materiale}}), poi fare clic sull'elemento. Vengono tolti tutti i materiali dell'elemento, compresi quelli dei lati.

## Nel file

Dipingere modifica l'IFC (un passaggio per ogni azione, {{key:Ctrl+Z}} annulla) e resta IFC standard:

- ogni elemento dipinto riceve il set di proprietà `CadCraft_Render` che indica il suo materiale, e una proprietà per ogni lato dipinto;
- il suo corpo riceve uno stile di superficie con il colore del materiale, così le altre applicazioni BIM mostrano il colore. In IFC4 lo stile indica anche la texture.

Quando BimCraft ridisegna una parete dipinta (per esempio spostandone un'estremità), la parete mantiene il suo materiale e il suo colore, in BimCraft, nelle immagini e nelle altre applicazioni.

:::note
Le texture sono disegnate da BimCraft stesso: funzionano offline e sono libere da usare per qualsiasi scopo (CC0). Le texture immagine personali non sono ancora implementate.
:::

## Texture nella vista 3D

Una parete in mattoni dipinta mostra i suoi mattoni, un pavimento in legno le sue assi, alla dimensione reale, appena la vernice è applicata. Deselezionare **Mostra le texture nella vista 3D** nella tavolozza Dipingi per vedere invece colori piatti (un modello molto grande le disattiva da solo e lo indica). Il colore per proprietà mostra sempre i propri colori. Le texture sono disegnate dal programma, quindi nulla viene scaricato, e le immagini renderizzate e il file glTF le includono comunque.
