---
title: Esaminare il modello con un visore VR
summary: Percorrere il modello IFC a grandezza reale con un visore VR: spostarsi, girarsi, misurare, sezionarlo, posizionare segnalazioni BCF con un'immagine, vederlo come modello da tavolo e incontrare gli altri partecipanti di una sessione live.
keywords: vr, realtà virtuale, visore, webxr, xr, immersivo, quest, oculus, vive, index, pico, percorrere, percorso, teletrasporto, revisione di progetto, coordinamento, revisione, misura, sezione, taglio, segnalazione, segnalazioni, bcf, tavolo, modello in scala, presenza, avatar, live, insieme
from: 8994b36d
---

{{ui:VR}} sulla barra degli strumenti porta dentro il modello con un visore VR, a grandezza reale. Si sta nel punto in cui si trova la camera della vista 3D, sul pavimento sotto di essa, rivolti nella stessa direzione. Il visore mostra ciò che mostra la vista 3D: piani, elementi e modelli nascosti restano nascosti, e i materiali colorati vengono mantenuti. Nulla viene caricato: il browser disegna tutto su questo computer (o nel browser del visore).

## Requisiti

- Un visore che il browser può controllare (WebXR): il browser proprio di un visore autonomo, oppure Chrome o Edge su un PC con visore collegato.
- Un modello IFC aperto, su una pagina sicura (https), come lo è questo sito.

Quando non c'è un visore, {{ui:VR}} è disattivato e indica perché.

## Avvio

1. Impostare la vista 3D nel punto da cui partire: in una stanza, oppure fuori a guardare l'edificio.
2. Fare clic su {{ui:VR}} sulla barra degli strumenti.
3. Indossare il visore.

Il menu è sul dorso della mano sinistra. Puntarlo con il controller destro e premere il grilletto per scegliere un pulsante. (Con una sola mano, il menu fluttua davanti al punto di partenza.)

## Spostarsi

- **Salto:** in {{ui:Sposta}}, puntare un pavimento e premere il grilletto; si atterra lì. Oppure spingere la levetta in avanti per mirare, e lasciarla per saltare. Si può atterrare solo su pavimenti, solai e terreno (superfici rivolte verso l'alto), mai su un muro.
- **Rotazione:** spingere la levetta a sinistra o a destra: si gira di 30° ogni volta.
- **Camminata:** nell'area di gioco, semplicemente camminare.

## Misurare

Selezionare {{ui:Misura}}, poi premere il grilletto su due punti. La distanza viene mostrata tra di essi, in metri. Un punto vicino a uno spigolo si aggancia allo spigolo.

## Tagliare il modello

Selezionare {{ui:Sezione}} e premere il grilletto su una superficie:

- su un muro (o su qualsiasi cosa non sia un pavimento): tutto ciò che sta tra chi guarda e quella superficie viene tagliato via, così si vede dentro. Funziona meglio dall'esterno, o attraverso una stanza;
- su un pavimento, dall'alto: una pianta tagliata a 1.2 m sopra quel pavimento, così i muri mostrano la loro parte bassa.

{{ui:Cancella}} rimuove il taglio e le misure. Se un [piano di sezione](topic:section-plane) taglia il modello all'avvio, il visore parte con esso.

## Posizionare una segnalazione

Selezionare {{ui:Segnalazione}} e premere il grilletto dove c'è il problema. Un perno numerato lo contrassegna, e la segnalazione finisce nella scheda {{ui:Segnalazioni}} come argomento BCF, con un'immagine di ciò che si è visto e la camera nel punto in cui si stava, nelle coordinate del modello. Salvarle insieme alle altre [segnalazioni](topic:issues-bcf) come file BCF; gli altri strumenti di coordinamento le aprono nella stessa vista.

Aggiungere un commento a una segnalazione dopo essere usciti dalla VR, nella scheda Segnalazioni: scrivere nel visore non è ancora implementato.

## Vedere il modello come modello da tavolo

{{ui:Sul tavolo}} riduce il modello per adattarlo a un tavolo davanti a sé; si può girarci intorno, o ruotarlo con la levetta. {{ui:Grandezza reale}} riporta alla posizione di partenza.

## Con altri, in tempo reale

In una [sessione live](topic:work-live), chiunque sia in VR vede gli altri come una testa e due mani del proprio colore, con il loro nome, e un punto dove ciascuno punta. Le modifiche di chiunque raggiungono il visore in un istante. Le persone alla scrivania non sono ancora mostrate nel visore.

## Uscire

Selezionare {{ui:Esci dalla VR}} (oppure togliere il visore e terminare lì). La vista 3D sullo schermo si sposta nel punto in cui era la testa.

:::note
Testato con un emulatore di visore, non ancora su tutti i visori. Un modello grande può far scattare il visore: nascondere prima i piani o i modelli non necessari ([nascondere e isolare](topic:hide-and-isolate)).
:::
