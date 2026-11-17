---
title: Copia, incolla e duplica elementi della libreria
summary: Copiare un elemento della libreria posizionato e incollarlo dove si fa clic, nella stessa posizione accanto all'originale o in un altro modello; copiare le proprietà di qualsiasi altro elemento come testo; annullare e ripristinare.
keywords: copia, incolla, duplica, appunti, incolla nella stessa posizione, taglia, elimina, seleziona tutto, annulla, ripristina, menu modifica, altro, elemento della libreria, posizionamento, ripeti, serie
from: 6ac15931
---

## Cosa si fa

Aggiungere altre copie di un elemento già posizionato: un secondo piano di lavoro, una fila di lavelli. Questo argomento riguarda gli **elementi della libreria posizionati**, cioè gli elementi che BimCraft ha inserito nel modello: uno di questi può essere incollato in qualsiasi modello, anche in un'altra scheda. Muri, porte e tutti gli altri elementi si copiano, tagliano, incollano ed eliminano allo stesso modo all'interno del proprio modello: vedi [Eliminare, tagliare, copiare e incollare elementi dell'edificio](topic:edit-elements).

I comandi si trovano nella barra degli strumenti sopra il modello: {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}} e {{ui:Altro}}, un menu con {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Seleziona tutto}} e {{ui:Deseleziona tutto}}. Un comando che non può agire in quel momento è in grigio; passarvi sopra con il puntatore per leggere il motivo, oppure farvi clic: la riga di stato indica il motivo.

## Passaggi

1. Aprire un modello IFC con un elemento della libreria al suo interno, oppure posizionarne uno prima. Vedi [Posizionare attrezzature e arredi dalla libreria](topic:place-from-library).
2. Fare clic sull'elemento nella vista 3D. Le sue proprietà mostrano un riquadro **Elemento della libreria**.
3. Fare clic su {{ui:Copia}} oppure premere {{key:Mod+C}}.
4. Fare clic su {{ui:Incolla}} oppure premere {{key:Mod+V}}. Si apre la barra di posizionamento e un riquadro trasparente segue il puntatore, ruotato come l'originale.
5. Premere {{key:R}} per ruotarlo di 90°, {{key:Tab}} per agganciarne il retro a un muro, oppure digitare X e Y nella barra di posizionamento.
6. Fare clic dove deve andare la copia. Ogni clic posiziona un'altra copia; premere {{key:Esc}} per fermarsi.
7. Fare clic su {{ui:Salva come IFC}} per scaricare la copia modificata del modello.

## Incolla nella stessa posizione

{{ui:Altro}}, {{ui:Incolla nella stessa posizione}} oppure {{key:Mod+Shift+V}} incolla senza fare clic, alla stessa X e Y e ruotato allo stesso modo:

- **Nello stesso modello, sullo stesso piano**: due elementi nello stesso punto non servirebbero a nulla, quindi la copia va subito accanto all'originale, a una larghezza dell'elemento più 100 mm lungo la larghezza dell'elemento stesso. Incollare di nuovo nella stessa posizione dalla nuova copia per creare una fila.
- **Su un altro piano o in un altro modello**: stessa X, Y e rotazione esatte. BimCraft usa il piano con lo stesso nome; se non ce n'è, quello all'altezza più vicina. La riga di stato indica quale.

## Duplica

{{ui:Altro}}, {{ui:Duplica}} oppure {{key:Mod+D}} copia l'elemento selezionato e avvia subito l'incollatura: un passaggio invece di due.

## In un altro modello o in un'altra scheda

Ciò che si copia resta in questo browser, quindi è possibile aprire un altro modello IFC, oppure BimCraft in un'altra scheda, e incollare lì. L'altro modello ha bisogno dell'elemento della libreria stesso: BimCraft ce l'ha quando l'elemento è stato posizionato, sostituito o aggiornato in questa scheda. Un elemento posizionato in una sessione precedente può essere incollato di nuovo solo nel proprio modello; in un altro modello, posizionarlo dalla scheda {{ui:Libreria}}.

## Cosa si dovrebbe vedere

- La copia nel modello, selezionata, con lo stesso elemento della libreria, la stessa licenza, gli stessi dati dell'attrezzatura, la stessa quantità e nota dell'originale, e il **numero dell'elemento libero successivo**. Modificare il numero in Proprietà, sotto `CadCraft_Placement`.
- "Posizionato: *elemento* (elemento *n*)" nell'elenco delle modifiche. {{key:Mod+Z}} lo annulla; {{key:Mod+Y}} lo ripristina.

## Da sapere

- Le copie condividono il tipo dell'originale, quindi usano tutte un unico insieme di geometria, come avviene posizionando due volte lo stesso elemento.
- {{ui:Annulla}} e {{ui:Ripristina}} coprono ogni modifica: valori modificati, posizionamenti, incollature, sostituzioni e aggiornamenti. Ripristinare riporta un posizionamento nello stesso punto; una nuova modifica cancella ciò che poteva essere ripristinato.
- Nella vista 2D di un disegno non c'è nulla da selezionare, quindi non c'è nulla da copiare. Usare {{ui:Modifica in CadCraft}} per modificare il disegno, quando è disponibile.

## Errori comuni

- **{{ui:Incolla}} dice che gli elementi provengono da un altro modello.** L'ultima cosa copiata era un elemento dell'edificio, o più elementi: questi si incollano solo nel proprio modello. Selezionare un solo elemento della libreria posizionato e copiarlo.
- **{{ui:Incolla}} dice che la copia proviene da un altro modello senza il suo elemento della libreria.** Posizionare l'elemento dalla scheda {{ui:Libreria}} una volta in questa scheda, poi copiarlo e incollarlo.
- **{{key:Mod+C}} copia invece il testo della pagina.** Il testo era selezionato nella pagina. Fare prima clic sul modello.

## Vedi anche

- [Tasti e mouse](topic:keyboard#edit)
- [Impostazioni di BimCraft](topic:settings)
