---
title: Risolvere le interferenze con le correzioni di ciascuna disciplina
summary: Dai risultati delle interferenze, Proponi correzioni elenca per ogni interferenza che cosa ciascuna disciplina potrebbe fare — un condotto deviato sotto una trave, un tubo spostato lateralmente, un pilastro spostato, un'apertura in una trave — ognuna provata su una copia del modello con i suoi compromessi, da accettare o rifiutare. Le correzioni accettate vengono inserite come un unico passo di annullamento.
keywords: interferenza, correzione di interferenza, risolvere interferenze, coordinamento, proponi correzioni, deviazione, offset, condotto, tubo, canale portacavi, trave, pilastro, apertura, guaina, compromesso, disciplina, struttura, meccanico, idrosanitario, elettrico, architettura, assistente
from: f7bafdd9
---

## Cosa si fa

Trasformare un elenco di interferenze in decisioni. Ogni disciplina (struttura, meccanica, idrosanitario, elettrico, architettura) propone correzioni solo per i propri elementi, ogni proposta viene verificata su una copia del modello, e si sceglie.

## Passaggi

1. Eseguire prima la verifica delle interferenze. Vedere [Verificare le interferenze](topic:clash-check) e [Verificare tubi e condotti rispetto alla struttura](topic:mep-against-structure).
2. Sotto i risultati, fare clic su {{ui:Proponi correzioni}}. Il pannello **Correzioni proposte** si apre accanto al modello.
3. Per ogni interferenza si vedono le proposte di ogni disciplina, la migliore per prima. Ogni riga dice che cosa fa e i suoi compromessi: se risolve l'interferenza, quante nuove interferenze crea, quali regole infrange, quanto percorso aggiunge o quanto si sposta, quanti raccordi e un punteggio di costo.
4. Fare clic su {{ui:Mostra}} per vedere gli elementi in 3D. Fare clic su {{ui:Accetta}} sulla correzione che si vuole (una per interferenza), oppure su {{ui:Rifiuta}}.
5. La riga in basso dice che cosa fanno insieme tutte le correzioni accettate: quante interferenze sono risolte, quante restano e se qualcosa di nuovo interferisce.
6. Fare clic su {{ui:Applica le correzioni accettate (un solo passo di annullamento)}}. La verifica delle interferenze viene eseguita di nuovo. {{ui:Annulla}} le riporta tutte indietro in una volta.

## Cosa può fare ogni disciplina

- **Meccanica** (condotti, tubi di riscaldamento e raffrescamento): deviare sopra o sotto sul tratto che colpisce, alzare o abbassare l'intero percorso, spostarlo di lato, rendere un condotto rettangolare più piatto a parità di area.
- **Idrosanitario** (acqua, scarichi, gas, antincendio): le stesse mosse, tranne che uno scarico a gravità non riceve mai una deviazione; può solo essere spostato per intero, mantenendo la sua pendenza.
- **Elettrico** (canali portacavi e tubi): le stesse mosse; un canale portacavi deve mantenere 150 mm liberi sopra di sé per posare i cavi.
- **Struttura**: spostare un pilastro (fino a 300 mm), oppure un'apertura nell'anima di una trave o in un solaio per il percorso che passa. Ogni correzione strutturale va firmata dall'ingegnere strutturista.
- **Architettura**: una guaina in un muro per il percorso che passa, oppure spostare un muro di cui si sa che non porta carichi.

## Cosa si dovrebbe vedere

- Le correzioni che infrangono una regola sono contrassegnate: più vicine dello spazio di 25 mm a qualcos'altro, sotto la linea dell'altezza libera di 2,100 mm, un'apertura nell'anima più grande del 40% dell'altezza della trave o troppo vicina alle sue estremità, una trave che cambierebbe luce.
- Le correzioni che BimCraft può applicare vengono applicate al modello: percorsi disegnati con gli strumenti Tubo e Condotto e pilastri disegnati. Le altre riportano **Solo consiglio**: accettandole si aggiunge una segnalazione nella scheda Segnalazioni.

## Da sapere

- Le correzioni provengono da regole integrate nell'app; non viene usata alcuna IA per esse.
- Se si collega un assistente (vedere [Lasciare che un assistente IA lavori con il modello](topic:assistants)), può leggere le interferenze e aggiungere proprie proposte per una disciplina nel pannello aperto. Vengono verificate allo stesso modo, contrassegnate con il nome dell'assistente, e non si modifica nulla finché non si accetta e applica.
- La copia viene verificata con scatole intorno a ogni elemento e a ogni tratto di un percorso, quindi un percorso inclinato può mostrare un'interferenza che la verifica non rileverebbe. Dopo aver applicato, eseguire di nuovo la verifica delle interferenze: è il risultato definitivo.
- I limiti (quanto un percorso può spostarsi, quanto alto può salire una deviazione, lo spazio) sono i valori predefiniti scritti nel pannello.

## Vedi anche

- [Segnalazioni e file BCF](topic:issues-bcf)
- [Disegnare percorsi di tubi e condotti](topic:pipes-and-ducts)
