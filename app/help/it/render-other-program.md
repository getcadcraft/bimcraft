---
title: Disegnare l'immagine con un altro programma
summary: Il nostro path tracer disegna l'immagine di Render; un altro programma può disegnarla solo tramite un add-on di motore di render in CadCraft Studio. Che cosa viene trasferito e perché alcuni programmi non vengono mai proposti.
keywords: render, motore, programma esterno, motore add-on, studio, sfondo, coda, usd, gltf, disegnato da, blender, gpl
from: 652b413c
---

L'immagine in {{ui:Render}} è disegnata dai **nostri motori**: Veloce e Path tracer, nel browser e in CadCraft Studio. Un altro programma può disegnarla solo quando la porta un **add-on di motore di render**: vedi [Aggiungere un motore di render con un add-on](topic:render-engine-addons). Per portare la scena in un altro programma e continuare a lavorarci, usare [Aprire la scena in un altro programma](topic:render-open-in) oppure [Inviare la scena a un motore di gioco](topic:render-unreal).

## Disegnare un'immagine con il motore di un add-on

1. Attivare l'add-on in Impostazioni › Add-on. Il suo motore compare nell'elenco Motore di {{ui:Render}}.
2. Sceglierlo. Le sue impostazioni compaiono sotto l'elenco Motore.
3. Fare clic su {{ui:Render}}. In Studio, la prima volta che un add-on esegue un programma, Studio lo chiede con una propria finestra di dialogo. L'avanzamento è visibile durante il disegno; {{ui:Ferma}} lo termina. L'immagine compare contrassegnata con il motore che l'ha disegnata.

Un motore scritto in JavaScript funziona anche nel browser. Un motore che esegue un programma sul computer funziona solo in Studio; nel browser appare come un file da salvare.

## Ciò che viene trasferito

Il motore riceve un **pacchetto**: il modello come file USD (e un file glTF quando lo richiede) e un file di impostazioni con i valori esatti dei materiali, il sole e il cielo, ogni lampada accesa con la sua potenza e il suo profilo di luce, la camera e l'esposizione. Ogni programma illumina, regola i toni e campiona a modo suo, quindi le immagini sono simili per inquadratura, sole, lampade ed esposizione, ma non pixel per pixel.

## Programmi che CadCraft non esegue mai

CadCraft non avvia mai un programma sotto la licenza GNU GPL e non lo elenca mai come motore o come destinazione di Apri in. Blender è uno di questi, quindi non è nell'elenco Motore. Un file USD o glTF salvato da {{ui:Render}} si apre comunque in esso, come in qualsiasi programma che legge quei file.

:::note
Le camere panoramiche e stereo e un'immagine del cielo (vengono usati invece i colori del cielo) non vengono trasferite a un altro programma. Nulla di ciò che si fa in un altro programma torna nel modello.
:::
