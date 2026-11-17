---
title: "Climi futuri: alluvione, calore e incendi boschivi nel 2050 e nel 2080"
summary: Rieseguire l'alluvione, l'anno energetico e una verifica preliminare degli incendi boschivi con clima futuro (scenari SSP2-4.5 e SSP5-8.5, anni 2050 e 2080) a partire da un pacchetto di dati climatici, mostrato affiancato al presente.
keywords: clima, cambiamento climatico, futuro, 2050, 2080, ssp, cmip6, scenario, innalzamento del livello del mare, alluvione, calore, file meteo, epw, morph, energyplus, incendio boschivo, incendio di vegetazione, condizioni meteo di incendio
from: 224ecd08
---

I dati climatici provengono da un **pacchetto di dati**, non dall'app. Attivare l'add-on {{ui:Climi futuri}} in Impostazioni › Add-on, oppure caricare un file pacchetto proprio nel blocco {{ui:Clima futuro}}.

:::warning
Il pacchetto incluso nell'add-on è un **campione**: tre luoghi (Denver, Miami, Johannesburg), un modello climatico, cinque anni in ogni periodo di 20 anni. Serve per provare gli strumenti, **non per la progettazione**. Il pannello lo dichiara in grassetto mentre è in uso. Un pacchetto completo (molti modelli, tutti gli anni, più luoghi) si costruisce con `tools/climate/build-pack.mjs` a partire dai dati NASA NEX-GDDP-CMIP6.
:::

## Scegliere uno scenario futuro

Nel pannello di sinistra, {{ui:Riproduzione di un evento pericoloso}}, scegliere uno **Scenario** (SSP2-4.5, la via di mezzo, oppure SSP5-8.5, emissioni elevate) e un **Anno** (2050 significa 2041-2060, 2080 significa 2071-2090; entrambi rispetto al 1995-2014). Il **Luogo** è quello del pacchetto più vicino al sito del modello (latitudine e longitudine di IfcSite), oppure quello scelto. Se è lontano da tutti i luoghi, si usano le variazioni medie globali del pacchetto e il pannello lo indica.

## Alluvione, presente affiancato al futuro

Con uno scenario scelto, impostare il **Tipo di alluvione**: costiera (aggiunge l'innalzamento del livello del mare), fluviale o pioggia intensa (più profonda per la variazione della pioggia del giorno più piovoso), oppure entrambe. Premere Avvia: l'alluvione viene riprodotta come prima, e una tabella mostra l'alluvione presente e futura affiancate (livello dell'acqua, locali che si bagnano, acqua più profonda). Le ipotesi sono elencate sotto:

- un livello costiero sale per l'intero innalzamento del mare; la marea di tempesta e le onde non vengono modificate;
- la portata fluviale cresce in proporzione uno a uno con la pioggia del giorno più piovoso, e la profondità segue la portata alla potenza 0.6 (equazione di Manning per un canale largo);
- le due componenti vengono semplicemente sommate.

## Calore: un file meteo futuro

Scegliere il tipo {{ui:Calore: file meteo futuro}}, selezionare un file meteo `.epw` attuale e premere {{ui:Crea il file meteo futuro}}. Il file viene **morfizzato** mese per mese con il metodo di spostamento e allungamento pubblicato (Belcher, Hacker e Powell 2005): la media del mese si riscalda per la variazione del pacchetto, i pomeriggi caldi per la variazione della massima giornaliera e le notti fredde per la variazione della minima giornaliera; l'umidità relativa si sposta per la variazione del pacchetto e il punto di rugiada viene ricalcolato. Pressione e vento restano invariati. La tabella confronta le temperature medie e massime, le temperature di progetto allo 0.4 % per il raffrescamento e al 99.6 % per il riscaldamento, le ore a 30 °C e a 35 °C e i gradi giorno.

{{ui:Salva il file meteo futuro}} lo salva; {{ui:Usa nella verifica energetica}} lo passa alla verifica EnergyPlus (scheda Energia). Il file futuro è lo stesso anno tipico, più caldo: non aggiunge nuove ondate di calore.

## Anno energetico, presente affiancato al futuro

Nella verifica EnergyPlus della scheda Energia (un add-on proprio, con il proprio motore), scegliere un file meteo attuale, poi uno scenario e un anno nel suo blocco {{ui:Clima futuro}}, e premere {{ui:Simula un anno: presente e futuro}}: l'anno viene eseguito sul file attuale e sul suo futuro morfizzato, e il riscaldamento e il raffrescamento di ogni locale sono elencati affiancati.

## Esposizione agli incendi boschivi (solo verifica preliminare)

Scegliere il tipo {{ui:Esposizione agli incendi boschivi (solo verifica preliminare)}}: la vegetazione più vicina, la pendenza in salita da essa fino all'edificio e la distanza da essa. Il risultato è una fascia da molto bassa a estrema, presente e futura.

:::warning
**Solo verifica preliminare.** Questa è una nostra scala relativa per capire se un sito richiede una valutazione completa del rischio di incendio boschivo, non una classificazione normativa né un livello di attacco da incendio boschivo. Moltiplica un peso per la vegetazione, un fattore di pendenza (un incendio raddoppia circa la sua velocità ogni 10 gradi di pendenza in salita, conteggiati fino a 20 gradi), un fattore di distanza (10 m divisi per la distanza, al massimo 1) e la variazione dell'indice delle condizioni meteo di incendio del pacchetto.
:::

## Da dove vengono i numeri

- **Temperatura, umidità, insolazione, pioggia, condizioni meteo di incendio:** NASA NEX-GDDP-CMIP6, output giornaliero dei modelli CMIP6 con downscaling. L'output di ogni modello è sotto CC BY 4.0. La variazione dell'indice delle condizioni meteo di incendio è l'Indice canadese delle condizioni meteo di incendio calcolato giorno per giorno dal tempo del modello (con l'umidità giornaliera al posto dell'umidità di mezzogiorno).
- **Innalzamento del livello del mare:** media globale dell'IPCC AR6 (non locale; l'innalzamento o l'abbassamento del suolo non vi sono inclusi), salvo che un pacchetto riporti valori locali.
- Il pacchetto indica la sua fonte, la licenza e la data; il pannello le mostra.
