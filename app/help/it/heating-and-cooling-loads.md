---
title: Stima dei carichi di riscaldamento e raffrescamento
summary: La dispersione termica di ciascun locale, il suo riscaldamento annuo in gradi giorno e il picco di raffrescamento, a partire da ciò che lo delimita nel modello e dalla trasmittanza termica U di ciascun elemento, con ogni dato in ingresso mostrato. Uno strumento di progetto, non un calcolo di conformità.
keywords: energia, riscaldamento, raffrescamento, dispersione termica, carico termico, carico di raffrescamento, trasmittanza termica, U-value, gradi giorno, hdd, ventilazione, ricambi d'aria, apporti interni, apporti solari, lambda, conducibilità, isolamento, progettazione preliminare, analisi, locali, spazi
from: ec312d20
---

Nella scheda {{ui:Luce naturale}}, dopo {{ui:Calcola}}, aprire {{ui:Carichi di riscaldamento e raffrescamento}} e fare clic su {{ui:Calcola i carichi}}. Ogni locale riceve la sua **dispersione termica** in una giornata fredda di progetto, il suo **riscaldamento annuo** e il suo **picco di raffrescamento** in una giornata calda. Nulla viene caricato in rete; nulla nel modello cambia, salvo che si digiti una trasmittanza U.

:::warning
Questo è **uno strumento di progetto, non un calcolo di conformità**: una stima a regime stazionario con ogni dato in ingresso visibile sullo schermo. **Non** è il metodo ISO 52016-1, non è una simulazione e non è un certificato energetico; non dimensiona caldaie, pompe di calore o refrigeratori. Verificare i risultati e dimensionare le apparecchiature con un tecnico.
:::

## Cosa delimita ciascun locale

BimCraft lo ricava dal modello stesso, quindi funziona con l'IFC di qualsiasi programma (non richiede i confini degli spazi che alcuni programmi esportano). Da ogni porzione della superficie di ciascun locale guarda dritto verso l'esterno:

- il primo muro, finestra, porta, pavimento, copertura, rivestimento, facciata continua o trave che incontra **delimita** quella porzione;
- subito oltre quell'elemento, c'è **un altro locale** (considerato confinante, alla stessa temperatura: nessuna dispersione), **nulla** (esterno), oppure, sotto un pavimento al piano più basso, **il terreno**;
- un varco aperto verso un altro locale è considerato confinante; una porzione che non incontra nulla (entro 1.5 m di lato o in basso, 8 m in alto) è elencata sotto il locale e non viene conteggiata.

Finestre e porte prendono le proprie dimensioni dall'IFC (larghezza totale × altezza) dal muro in cui si trovano. Fare clic su un locale nella tabella per vedere ogni elemento che lo delimita con la sua area, la sua trasmittanza U e la fonte di tale valore.

## Trasmittanze U

Per ogni elemento BimCraft usa, in quest'ordine:

1. **La trasmittanza U dell'IFC** — il `ThermalTransmittance` nell'insieme di proprietà comuni dell'elemento (per esempio `Pset_WallCommon`) o in quello del suo tipo. La maggior parte dei programmi di progettazione può scriverla.
2. **I suoi strati di materiale** — 1 ÷ (resistenza superficiale interna + spessore di ciascuno strato ÷ la sua conducibilità λ + resistenza superficiale esterna), con le consuete resistenze superficiali (0.13 e 0.04 m²K/W per le pareti; 0.10 verso l'alto, 0.17 verso il basso all'interno). Conducibilità tipiche da cui partire (lana minerale 0.035, mattone 0.77, calcestruzzo 1.4…); sotto {{ui:Conducibilità dei materiali}} digitare quella del produttore, e ogni trasmittanza U da quegli strati ne segue l'andamento.
3. **Un valore tipico** (pareti 0.3, coperture 0.2, pavimenti 0.25, finestre 1.4, porte 1.6 W/m²K), indicato come tale — digitare il proprio.

Una trasmittanza U digitata nel dettaglio di un locale viene scritta nell'insieme di proprietà comuni dell'elemento come `ThermalTransmittance` (un'unica operazione; {{key:Mod+Z}} la annulla). Se più elementi condividono quell'insieme (per esempio un tipo di muro), cambiano tutti insieme, e la riga di stato indica quanti sono.

## Riscaldamento

- **Dispersione termica** = Σ U × A × (interno − esterno) per tutto ciò che dà sull'esterno + Σ U × A × (interno − terreno) per i pavimenti a contatto con il terreno + 0.335 × ricambi d'aria all'ora × volume del locale × (interno − esterno). 0.335 Wh per m³ per kelvin è la densità dell'aria (1.2 kg/m³) per il suo calore specifico (1005 J/kgK).
- **Riscaldamento annuo** = (la dispersione del locale per grado verso l'esterno, attraverso l'involucro e l'aria, più la sua dispersione verso il terreno riportata alla stessa differenza) × i **gradi giorno** × 24 ÷ 1000, in kWh. Digitare i gradi giorno del luogo, oppure {{ui:Leggi i gradi giorno da un CSV…}} (una riga per giorno o per mese; viene sommato l'ultimo numero di ciascuna riga). Usare i gradi giorno riferiti alla temperatura di base della propria fonte: tale base tiene già conto degli apporti gratuiti di persone, luci e sole.

## Raffrescamento

Il **picco di raffrescamento** = il calore attraverso l'involucro e l'aria alla temperatura di progetto estiva + persone (superficie per persona × calore per persona) + illuminazione e apparecchiature per m² di pavimento + **il sole**: il picco di {{ui:Sole attraverso le finestre in una data}} per quel locale. Calcolare prima il sole, in una giornata calda; fino ad allora il sole conta 0 e la sezione lo indica. Il picco di ciascuna parte viene sommato anche se cade a ore diverse, il che lo sovrastima un po'.

## Cosa non viene considerato

- I metodi mensili e orari ISO 52016-1 (una norma a pagamento), il calore accumulato nella massa dell'edificio, i ponti termici, le prestazioni degli impianti di riscaldamento e raffrescamento, e i file climatici.
- I locali affiancati sono considerati alla stessa temperatura; gli spazi non riscaldati non sono modellati.

Vedere anche [Stima della luce naturale in ogni locale](topic:daylight-factor).
