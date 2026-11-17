---
title: Consigli di disegno: le misure insolite vengono create, con un avviso
summary: BimCraft crea ciò che si chiede. Una misura fuori dall'uso comune diventa un avviso in Problemi; non blocca mai il disegno né il salvataggio.
keywords: consiglio, avviso, problemi, rifiutato, non disegna, troppo piccolo, troppo stretto, minimo, limite, larghezza scala, alzata, pedata, pilastro, rampa, dimensione porta, linea di griglia, altezza livello, abbaino, scala a chiocciola, pendenza piazzale, muro corto, nessun blocco
from: 20090130
---

## Cosa si fa

Disegnare una misura non usuale e vedere dove BimCraft lo segnala.

## Passaggi

1. Disegnare o modificare l'elemento come si vuole: per esempio una scala larga 400 mm.
2. BimCraft lo crea come richiesto.
3. Aprire {{ui:Problemi}} nella barra in alto. Sotto **Consigli di disegno** c'è un avviso che indica l'elemento, la misura data e l'intervallo usuale.
4. Fare clic sull'avviso per selezionare l'elemento. Modificare la misura se è stato un errore, oppure lasciarla: un avviso può essere accettato, con o senza motivo.

## Cosa è un consiglio

Un tempo questi casi venivano rifiutati. Ora vengono creati, ciascuno con un avviso:

- **Scale**: più strette di 500 mm o più larghe di 5 m; alzate fuori da 100 a 300 mm; pedate fuori da 150 a 600 mm.
- **Scale a chiocciola**: un montante fuori da 40 a 400 mm; pedate con profondità sotto 100 mm sulla linea di calpestio.
- **Pilastri**: sotto 50 mm di diametro o sotto 300 mm di altezza.
- **Rampe**: sotto 300 mm di larghezza.
- **Porte e finestre**: sotto 100 mm di larghezza o altezza.
- **Linee di griglia**: sotto 100 mm di lunghezza.
- **Muri**: un muro rimasto sotto 50 mm di lunghezza, per esempio per un rifila.
- **Livelli**: sotto 1 m o sopra 100 m di altezza (edificio nuovo, livelli sfalsati, altezza di un livello).
- **Abbaini**: fuori da 600 mm a 12 m di larghezza, un muro frontale fuori da 300 mm a 4 m, uno sbalzo oltre 1 m, muri fuori da 50 a 400 mm.
- **Piazzali di edificio**: pendenze laterali fuori da 1:1 a 10:1.

## Cosa viene ancora rifiutato

Solo ciò che non può essere costruito o trovato, ciascuno con un messaggio che spiega il motivo:

- Una misura sotto 10 mm (un muro sotto 1 mm): non c'è nulla da costruire.
- Un abbaino non più largo del doppio dello spessore del suo muro: i suoi due muri laterali si incontrerebbero.
- Un piazzale con pendenze laterali più ripide di 0,1:1 (che sarebbe un muro di contenimento) o più piatte di 100:1 (il livellamento continuerebbe all'infinito).
- Qualcosa che non entra dove è stato messo, un contorno che si interseca, o un elemento che non è più nel modello.

## Da sapere

- Il consiglio è calcolato dal modello, quindi è di nuovo presente quando si riapre il file più tardi, e scompare quando la misura viene corretta.
- Anche i controlli del modello, i pacchetti di normative e i controlli IDS elencano soltanto ciò che trovano. Nulla in {{ui:Problemi}} impedisce di disegnare o salvare.
- Gli intervalli usuali sono pratica comune, non un regolamento edilizio. Per un regolamento, aggiungere il componente aggiuntivo Regolamenti edilizi e scegliere la propria località.

## Prossimi passi

- [Verificare un modello per problemi comuni](topic:model-checks)
- [Scale e ringhiere](topic:stairs-and-railings)
