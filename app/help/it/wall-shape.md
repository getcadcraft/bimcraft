---
title: Modellare un muro: aggancio, profilo, inclinazione e aperture
summary: Agganciare la sommità di un muro a un tetto, a un solaio o a un soffitto, dargli un proprio contorno visto di lato, inclinarlo oppure praticare un'apertura senza porta o finestra, in Proprietà, in un prospetto o in una sezione, sulla vista di faccia del muro o in 3D; ogni modifica è un unico passo di annullamento.
keywords: aggancia, aggancio sommità, aggancio base, tetto, solaio, soffitto, timpano, profilo, modifica profilo, contorno in alzato, a gradini, parapetto, inclinazione, inclinato, inclina, rastremato, doppia inclinazione, apertura, apertura nel muro, foro, passaggio, senza porta, maniglie, prospetto, sezione, 3D, vista di faccia, muro curvo, copia
from: f558b269
---

## Cosa farai

Cambiare la forma di un muro sopra e sotto la sua pianta: la sommità può seguire un tetto, un solaio o un soffitto; può avere un proprio contorno visto di lato; può essere inclinato; e può avere aperture senza porta o finestra. La pianta del muro, i suoi angoli e la sua linea di posizionamento restano come erano.

## Dove farlo

- **Proprietà**: con {{ui:Disegna}} e {{ui:Seleziona}} attivi, fare clic su un muro disegnato. **Proprietà** mostra le righe del muro, poi **Forma**, dove si digita tutto.
- **Un prospetto o una sezione**: la matita del browser di progetto ({{ui:Modifica in questa vista}}) apre la vista; scegliere lì un muro e trascinarne le maniglie. Vedere "In un prospetto o in una sezione" più sotto.
- **La vista di faccia del muro**: {{ui:Muri}} › {{ui:Modifica profilo}}, poi fare clic sul muro nella pianta. Funziona per ogni muro, anche per uno che nessun prospetto guarda di fronte, e per un muro curvo (mostrato srotolato).
- **La pianta e la vista 3D**: i quattro comandi in {{ui:Muri}} (gruppo Modifica): {{ui:Aggancia sommità / base}}, {{ui:Modifica profilo}}, {{ui:Inclinazione}} e {{ui:Apertura nel muro}}. Vedere "Nella pianta e in 3D" più sotto.

Qualunque modo si scelga, è la stessa modifica: un passo in **Modifiche**, e {{ui:Annulla}} lo riporta indietro.

Muri diritti e curvi accettano tutti gli strumenti di Forma. Su un muro curvo le distanze seguono il suo arco.

## Agganciare la sommità o la base

- **Aggancia sommità**: scegliere un tetto, un solaio o un soffitto. La sommità del muro segue l'intradosso di ciò che si è scelto, dritta sopra ogni angolo del muro. Sotto un tetto a falde il muro ha una sommità inclinata, e dove il tetto cambia falda (un colmo o un displuvio) la sommità del muro si piega con esso.
- **Aggancia base**: scegliere un solaio o un soffitto. La base del muro segue la sua faccia superiore.
- Dove non c'è nulla sopra (o sotto) una parte del muro, quella parte mantiene l'altezza propria del muro.
- Il collegamento resta: cambiare la pendenza o lo sbalzo del tetto, oppure l'altezza del soffitto, e i muri agganciati seguono nello stesso passo.
- Scegliere **Altezza propria** per sciogliere l'aggancio.

## Modificare il profilo

{{ui:Modifica profilo…}} apre il contorno del muro visto di lato:

- **Linea superiore**: righe di **Lungo** (la distanza dall'inizio del muro) e **Altezza** (sopra la base del muro). Tre righe 0 / 3000, 2500 / 4500, 5000 / 3000 fanno un timpano su un muro di 5 m.
- **Linea inferiore**: lasciarla vuota per una base di livello, oppure inserire righe per un muro su una fondazione a gradini.
- {{ui:Aggiungi un punto}} aggiunge una riga, {{ui:Rimuovi}} ne toglie una. {{ui:Usa questo profilo}} lo applica; {{ui:Torna a dritto}} lo elimina.

Ogni linea corre lungo il muro una sola volta, dal suo inizio alla sua fine; una linea che torna su se stessa, oppure una sommità che scende fino alla base, viene rifiutata. Con anche una sommità agganciata, si usa la più bassa delle due.

## Inclinare il muro

**Inclinazione**: **Verticale**, **Inclinato** (entrambe le facce si inclinano nello stesso verso, lo spessore resta) oppure **Doppia inclinazione** (ogni faccia ha un proprio angolo: un muro che si assottiglia o si ingrossa salendo). Digitare i gradi dalla verticale; un angolo positivo inclina verso la sinistra del muro, vista dal suo inizio. Il muro resta dov'è disegnato alla base; i muri uniti ad esso non si inclinano con lui.

## Aperture senza porta o finestra

{{ui:Aggiungi apertura}} pratica un foro largo 900 al centro del muro. La sua riga in **Aperture** imposta **Dall'inizio**, **Larghezza**, **Davanzale** (dal livello) e **Altezza**; **Rimuovi** la elimina. L'apertura attraversa l'intero muro, le quantità del muro la escludono, e la pianta mostra un vuoto dove raggiunge l'altezza di taglio della pianta. Quando l'inizio del muro scorre lungo la sua linea, l'apertura mantiene la sua posizione; una modifica che la lascerebbe fuori dal muro viene rifiutata.

## In un prospetto o in una sezione

Aprire la vista con la matita del browser di progetto. Con {{ui:Seleziona e sposta}} attivo:

- **Profilo**: fare clic su un muro che guarda verso la vista. Le sue linee superiore e inferiore diventano blu, con una maniglia quadrata su ogni punto e un punto al centro di ogni tratto.
  - Trascinare un quadrato per spostare quel punto (i due punti estremi si muovono solo su e giù).
  - Trascinare un punto per spostare l'intero tratto su o giù.
  - Fare doppio clic su una linea (oppure clic destro) per aggiungere un punto lì; {{ui:Aggiungi un punto (in alto)}} e {{ui:Aggiungi un punto (in basso)}} ne aggiungono uno al centro del tratto più lungo.
  - Fare clic su un quadrato e premere {{key:Delete}} (oppure clic destro su di esso) per rimuovere quel punto. {{ui:Torna a dritto}} elimina il profilo.
  - Con un punto scelto, digitare il suo **Lungo** e la sua **Altezza** nella barra sotto la barra degli strumenti.
- **Aggancio**: la barra ha gli elenchi **Aggancia sommità** e **Aggancia base** per il muro scelto. Oppure usare lo strumento {{ui:Aggancia sommità}} o {{ui:Aggancia base}}: fare clic sul muro o sui muri, poi sul tetto, sul solaio o sul soffitto, mostrati come riquadri tratteggiati. Tutti i muri scelti si agganciano in un unico passo.
- **Aperture nei muri**: con lo strumento {{ui:Apertura nel muro}}, trascinare un rettangolo sulla faccia di un muro. Tornati in {{ui:Seleziona e sposta}}, trascinare un'apertura per spostarla, trascinare una delle sue otto maniglie per ridimensionarla, digitare **Dall'inizio**, **Larghezza**, **Davanzale** e **Altezza** nella barra, oppure premere {{key:Delete}} per eliminarla.
- **Inclinazione**: un muro che la vista guarda di fronte (visto di testa, come sezione attraverso di esso, oppure in un prospetto dalla sua estremità) può essere cliccato. Trascinare la maniglia tonda in alto per inclinarlo, oppure scegliere **Verticale**, **Inclinato** o **Doppia inclinazione** nella barra e digitare gli angoli.

Le misure scattano a 10 mm; per ciò che è più fine, digitare un valore. Un muro curvo si può modificare in un prospetto mentre corre in una direzione attraverso la vista; la sua vista di faccia funziona sempre.

## Nella pianta e in 3D

Aprire {{ui:Muri}} nel gruppo Modifica:

- {{ui:Aggancia sommità / base}}: scegliere **Aggancia sommità** o **Aggancia base** nella riga dello strumento. Fare clic sul muro o sui muri (nella pianta o nella vista 3D), poi su ciò a cui agganciarli: in 3D fare clic sul tetto, sul solaio o sul soffitto stesso; nella pianta fare clic su un punto sotto di esso (se ce n'è più di uno, un elenco chiede quale).
- {{ui:Modifica profilo}}: nella pianta, fare clic su un muro per aprire la sua vista di faccia. In 3D, fare clic su un muro: i suoi punti di profilo ricevono maniglie; trascinarne una nel piano del muro.
- {{ui:Inclinazione}}: fare clic su un muro (pianta o 3D) e digitare di quanto si inclina.
- {{ui:Apertura nel muro}}: nella pianta, fare clic su un muro dove va l'apertura; la sua **Larghezza**, la sua **Altezza** e il suo **Davanzale** sono nella riga dello strumento. In 3D, fare clic su un angolo sulla faccia del muro, poi sull'angolo opposto. Con un muro scelto in 3D, le sue aperture hanno maniglie: gli angoli ridimensionano, il centro sposta.

Le maniglie 3D sono quelle della vista 3D stessa, quindi attendono mentre il riquadro di sezione mostra le sue maniglie.

## Nella pianta

Un muro inclinato è disegnato dove la pianta lo taglia (1200 sopra il livello, salvo diversa impostazione della vista): il suo contorno è spostato di quanto si inclina a quell'altezza, e una doppia inclinazione è più larga o più stretta lì. Il suo contorno a terra è disegnato con le linee sottili di ciò che sta sotto il taglio. Gli angoli, le maniglie e le quote del muro restano alla sua base.

## Copie

{{ui:Copia questo livello…}} e Sposta con **Copia** portano con sé il profilo, l'inclinazione e le aperture del muro. Un muro agganciato a un solaio o a un soffitto è agganciato al solaio o soffitto copiato del nuovo livello; un aggancio a un tetto non viene copiato con un livello (i tetti non si copiano). Una copia sullo stesso livello resta agganciata allo stesso tetto, solaio o soffitto.

## Nel file

Un muro modellato è scritto come solido sfaccettato (IfcFacetedBrep), che gli altri programmi leggono come è disegnato; le sue impostazioni sono sul muro (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Un'apertura è un IfcOpeningElement nel muro, senza nulla che la riempia.

## Non ancora implementato

- Un profilo con sporgenze o fori nel contorno (per i fori usare le aperture).
- In 3D: aggiungere o togliere punti di profilo, e l'inclinazione tramite una maniglia (usare la vista di faccia del muro, un prospetto o una sezione, oppure digitarla).
- {{ui:Distanza}} con Copia attivo non copia la forma né le aperture del muro (Sposta con Copia sì).
- I layer di un muro inclinato non sono disegnati nelle piante a Medio e Fine (lo è il suo contorno).
- Aperture che non sono rettangoli.
