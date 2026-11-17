---
title: Finiture dei locali e abachi delle finiture
summary: Indicare cosa riveste pavimento, pareti e soffitto di ogni locale, aggiungere zone come un paraspruzzi piastrellato, e ottenere abachi delle finiture per locale, parete e zona, con superfici, numero di piastrelle incluse i tagli e volumi del supporto.
keywords: finitura, finiture, abaco delle finiture, finiture dei locali, finitura del pavimento, finitura della parete, finitura del soffitto, battiscopa, piastrella, piastrelle, piastrelle tagliate, conteggio piastrelle, sfrido, supporto, massetto, pannello di supporto, intonaco, zona, paraspruzzi, zoccolatura, zona umida, interno, quantità
from: 8c30498c
---

## Cosa si fa

Indicare una volta in BimCraft con cosa è finito ogni locale. Gli abachi delle finiture riportano poi le superfici, le piastrelle da ordinare e i volumi del supporto, e si aggiornano con il modello.

## Passaggi

1. Attivare {{ui:Disegna}}, aprire **Abachi** nel pannello di sinistra e fare clic su **Finiture dei locali**.
2. Sotto **Tipi di finitura**, fare clic su **Aggiungi un tipo di finitura**. Dare un nome, un tipo (Piastrella, Foglio, Strato o Pannello) e uno spessore. Per una piastrella, indicare lunghezza e larghezza, il giunto e una percentuale di sfrido. Se qualcosa va sotto la finitura (un massetto, un pannello di supporto, uno strato di intonaco), indicarlo sotto **Supporto** con il relativo spessore.
3. Sotto **Locali**, scegliere la finitura del pavimento, della parete e del soffitto di ogni locale. Inserire un nome per il battiscopa e la sua altezza, se il locale ne ha uno.
4. Sotto **Zone**, fare clic su **Aggiungi una zona** per una parte di locale che ha un'altra finitura:
   - una zona **parete** è una fascia compresa tra due altezze sopra il pavimento (un paraspruzzi piastrellato da 0 a 1200, una zoccolatura). Si estende a tutte le pareti del locale; oppure selezionare nel modello le pareti del locale e fare clic sul pulsante **Acceso** per limitarla a quelle;
   - una zona **pavimento** o **soffitto** è un'area che si inserisce. Viene sottratta alla finitura propria del locale.
5. Fare clic su **Salva**. È un'unica operazione di Annulla. Le lunghezze si inseriscono nelle unità del progetto.

## Gli abachi

Quattro voci si aggiungono all'elenco Abachi:

- **Finiture per locale**: ogni locale con la finitura di pavimento, parete e soffitto, le relative superfici e il battiscopa con la sua lunghezza.
- **Finiture per parete**: ogni tratto di parete sul lato di un locale e la fascia che una finitura copre, con lunghezza, superficie lorda, detrazioni, superficie netta e, per le piastrelle, piastrelle intere, piastrelle tagliate e piastrelle da ordinare.
- **Finiture per zona**: ogni zona con la propria finitura, superficie netta, piastrelle e volume del supporto.
- **Quantità delle finiture**: una riga per finitura: superficie netta, piastrelle intere e tagliate, piastrelle da ordinare, il supporto e il suo volume, e il volume della finitura stessa.

Raggruppare, totalizzare, salvare ed esportare questi abachi come qualsiasi altro: vedere [Impaginare, salvare ed esportare un abaco](topic:schedule-layouts). Fare clic su un valore per selezionare ciò da cui deriva: le detrazioni di una parete selezionano le sue porte e finestre.

## Come si misurano le finiture

- **Pareti**: ogni tratto di parete sul lato del locale, la sua lunghezza lungo il locale per l'altezza coperta dalla finitura, meno la parte di ogni porta e finestra compresa in tale altezza. Una parete più bassa del locale è finita fino alla propria sommità. Il metodo di misura del progetto decide quali aperture sono troppo piccole per essere detratte ([Abachi](topic:plan-schedules-and-pdf)).
- **Pavimenti e soffitti**: il locale all'interno delle facce delle pareti, meno le isole presenti al suo interno.
- **Battiscopa**: la lunghezza delle pareti del locale meno la larghezza delle porte.
- **Piastrelle**: posate a griglia a partire da un angolo della superficie, con un giunto tra una piastrella e l'altra. Una piastrella interamente sulla superficie è una piastrella intera; una piastrella parzialmente su di essa (al bordo, intorno a un'apertura) è una piastrella tagliata. Le piastrelle da ordinare sono quelle intere più quelle tagliate, più la percentuale di sfrido, arrotondate per eccesso. Ogni piastrella tagliata viene conteggiata come nuova: i ritagli non vengono riutilizzati.
- **Volume del supporto**: la superficie netta per lo spessore del supporto.
- Un conteggio contrassegnato **≈** è calcolato dalla superficie invece che posando piastrella per piastrella: una superficie da cui è stata sottratta una zona inserita, oppure una superficie molto grande.

## Da sapere

- Le finiture sono conservate nel file dell'edificio (set di proprietà `CadCraft_Finishes` sul progetto). Ogni locale con una finitura riceve anche il set di proprietà IFC standard `Pset_SpaceCoveringRequirements`, così gli altri programmi leggono i nomi.
- La posa delle piastrelle parte da un angolo. Non sono calcolate una posa centrata sul locale, un disegno (spina di pesce, posa a mattoni) né il riutilizzo dei ritagli.
- Una parete curva e un confine di locale che non è una parete (un separatore di locali) sono elencati come **Altro confine**, con la loro lunghezza e senza aperture.
- La voce **Finiture** già presente elenca gli strati di finitura dei tipi di parete; **Strati: superficie e volume** elenca ogni strato di ogni tipo stratificato. Le finiture dei locali qui sono quelle applicate al locale sopra questi.
- Un assistente può impostare le finiture con `finishes_set`: vedere [Lasciare che un assistente IA lavori con il modello](topic:assistants).
