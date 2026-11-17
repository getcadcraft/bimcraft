---
title: Unità split, VRF e fan coil
summary: Posizionare unità interne a parete, a cassetta e canalizzate, unità esterne split e VRF, giunti refnet e fan coil a 2 o 4 tubi, ciascuno con i propri collegamenti per refrigerante, acqua, condensa e canali, e disegnare tra loro le linee frigorifere dimensionate da una tabella modificabile.
keywords: split, mini split, multi split, vrf, vrv, flusso di refrigerante variabile, pompa di calore, unità interna, unità esterna, unità condensante, a parete, a cassetta, canalizzata, nascosta, fan coil, fcu, 2 tubi, 4 tubi, refnet, giunto di derivazione, giunto a Y, linea frigorifera, lineset, refrigerante, linea del liquido, linea del gas, linea di aspirazione, acr, rame, condensa, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Cosa si fa

Posizionare nel modello le unità di un sistema split, multi-split o VRF e i suoi fan coil, poi collegarle con le linee frigorifere: una linea del liquido e una del gas in rame ACR, agganciate alle bocche delle unità. Le unità funzionano come ogni altro componente di [Apparecchiature MEP con bocche](topic:mep-equipment): stessa barra, {{ui:Proprietà}}, stesse bocche e stessi [collegamenti](topic:mep-connections).

:::note
Questo è un ausilio per il disegno e il coordinamento. Le unità sono forme generiche dimensionate dai valori digitati, non prodotti di un costruttore. I loro diametri dei tubi provengono da una tabella di **valori tipici di esempio** per apparecchiature R410A e R32, non da un costruttore: il manuale di installazione del costruttore dell'unità stabilisce le dimensioni reali, e tratte lunghe o grandi dislivelli le modificano. Modificare la tabella, oppure digitare le dimensioni, per adattarle alle unità che si usano.
:::

## Posizionare un'unità

1. Attivare {{ui:Disegna}}, aprire {{ui:Build}} e scegliere {{ui:Apparecchiature}}.
2. Scegliere il tipo e impostarne i valori:

| Tipo | Si imposta | Le sue bocche |
|---|---|---|
| Unità interna split, a parete | capacità, linea del liquido e del gas, lunghezza, profondità, altezza, dimensione dello scarico della condensa | refrigerante liquido e gas, scarico della condensa (sull'estremità destra, vicino alla parete) |
| Unità interna split, a cassetta | capacità, linea del liquido e del gas, pannello, corpo, altezza, dimensione dello scarico della condensa | refrigerante liquido e gas, scarico della condensa (su un lato, vicino alla sommità) |
| Unità interna split, canalizzata | capacità, linea del liquido e del gas, lunghezza, larghezza, altezza, bocche di mandata e di ripresa, dimensione dello scarico della condensa | canale di mandata in uscita, canale di ripresa in ingresso, refrigerante liquido e gas, scarico della condensa |
| Unità esterna split | capacità, linea del liquido e del gas, larghezza, profondità, altezza | refrigerante liquido e gas (sul lato destro) |
| Unità esterna VRF | capacità, linea del liquido e del gas, larghezza, profondità, altezza | refrigerante liquido e gas (sul davanti, in basso) |
| Giunto refnet | linea del liquido o del gas, il carico di ciascuna derivazione, il tubo a ciascuna estremità | ingresso, derivazione A, derivazione B |
| Fan coil | 2 o 4 tubi, lunghezza, larghezza, altezza, bocche di mandata e di ripresa, batteria e sistema del tubo, tubo di riscaldamento, dimensione dello scarico della condensa | canale di mandata in uscita, canale di ripresa in ingresso, batteria in ingresso e in uscita, riscaldamento in ingresso e in uscita (4 tubi), scarico della condensa |

3. Impostare **Quota**: l'altezza della base dell'unità sopra il livello. La base di un'unità a parete è la sua parte inferiore (spesso 2100 mm); quella di una cassetta è la sua faccia nel soffitto; quella di un refnet è l'altezza della linea di mezzeria del suo tubo.
4. Fare clic nel punto in cui va ({{key:R}} la ruota di 90°).

**Capacità** è la capacità frigorifera nominale dell'unità in kW, con Btu/h accanto. Con **Linea del liquido** e **Linea del gas** lasciate su **Dalla tabella**, i collegamenti dell'unità assumono le dimensioni della tabella per quella capacità; scegliere un diametro del tubo per usare quello dell'unità. L'ingresso di un refnet è dimensionato per entrambe le derivazioni insieme, e ciascuna derivazione per il proprio carico.

Le bocche del refrigerante funzionano in entrambi i sensi (una pompa di calore lavora in entrambe le direzioni). Lo scarico della condensa è una dimensione di tubo come ogni scarico.

## Disegnare le linee frigorifere

1. Scegliere due elementi ({{key:Shift}}+clic sul secondo): un'unità esterna e un'unità interna (split singolo), oppure un'unità esterna e un refnet, un refnet e un'unità interna, o due refnet (VRF).
2. Aprire {{ui:Build}} e scegliere {{ui:Linee frigorifere}}.

BimCraft disegna i tratti del liquido e del gas tra le loro bocche libere, uscendo da ciascuna bocca e salendo fino a un'altezza comune, in rame ACR (in rotolo ricotto fino a 1-5/8 in, tubo trafilato oltre), come un solo passo di {{ui:Annulla}}. Un refnet prende solo la propria linea: entra nel suo ingresso dal lato esterno ed esce da una derivazione verso le unità interne. Ogni tratto assume la dimensione della propria estremità a valle (l'unità interna, o l'ingresso del refnet); dove la bocca dell'altra estremità ha un'altra dimensione, {{ui:Verifica le connessioni}} la elenca: lì va un riduttore. Due unità interne richiedono un refnet tra loro.

Spostare i tratti in seguito come ogni tratto di tubazione; le loro estremità restano sulle bocche. I tratti tra piani si disegnano con {{ui:Pipe}}: una tubazione iniziata da una bocca del refrigerante assume il suo sistema, il rame ACR e la sua dimensione.

## Modificare la tabella delle linee frigorifere

Aprire {{ui:Build}} e scegliere {{ui:Dimensioni delle linee frigorifere}}. Ogni riga indica: fino a questa capacità (kW), questo tubo del liquido e questo tubo del gas.

| Fino a | Liquido | Gas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Questi sono i valori iniziali, tipici. Modificare una riga, aggiungere o rimuovere righe e scegliere {{ui:Salva}}: la tabella è conservata nel modello, quindi tutti quelli che lavorano sul file la usano, e {{ui:Annulla}} la ripristina. {{ui:Usa i valori tipici}} rimette la tabella iniziale. I componenti già posizionati mantengono le loro bocche finché non vengono modificati.

## Nel file IFC

Le unità interne ed esterne dei sistemi split e VRF sono IfcUnitaryEquipment di tipo SPLITSYSTEM, con il tipo di oggetto che indica quale ("Unità interna split a parete", "Unità interna split a cassetta", "Unità interna split canalizzata", "Unità esterna split", "Unità esterna VRF"). Un fan coil è IfcUnitaryEquipment di tipo AIRHANDLER con tipo di oggetto "Fan coil unit": IFC4 non ha un tipo per fan coil, e un ventilatore, una batteria e un filtro per un locale è ciò che descrive AIRHANDLER. Un giunto refnet è un IfcPipeFitting di tipo JUNCTION ("Giunto refnet"). I file IFC2X3 ricevono IfcEnergyConversionDevice e IfcFlowFitting con i tipi corrispondenti.

Le bocche e i tratti del refrigerante sono nei sistemi REFRIGERATION (uno per le linee del liquido, uno per quelle del gas), la condensa in un sistema DRAINAGE. I tratti ACR sono denominati per diametro esterno. La tabella delle linee frigorifere è il set di proprietà CadCraft_HvacLineSets sul progetto.

Vedere anche [Apparecchiature MEP con bocche](topic:mep-equipment), [Collegare tubazioni e canali alle apparecchiature](topic:mep-connections) e [Tubazioni e canali](topic:pipes-and-ducts).
