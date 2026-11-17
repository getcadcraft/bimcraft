---
title: Locali, solai, controsoffitti e coperture
summary: I locali compaiono quando i muri li chiudono; dare a un locale o a tutto l'edificio un solaio e un controsoffitto, e mettere un tetto a padiglione o a capanna sui muri. Seguono tutti quando i muri si spostano.
keywords: locale, locali, spazio, area, perimetro, solaio, soletta, sottofondo, controsoffitto, copertura, tetto a padiglione, tetto a capanna, pendenza, sbalzo, gronda, colmo, compluvio, 6/12
from: 1fb1813c
---

## Obiettivo

Completare il guscio dell'edificio. I locali si ricavano da soli dai muri; solai, controsoffitti e copertura richiedono un solo clic ciascuno. Poiché sono ricavati dai muri, seguono quando i muri si spostano.

## Locali

Ogni spazio chiuso da muri disegnati è un locale. Compare non appena l'ultimo muro lo chiude, con un numero (101, 102 … al primo piano, 201 … al successivo) e un nome (**Locale 1**, **Locale 2** …), e la sua area appare al centro sulla pianta.

- Con {{ui:Seleziona}} attivo, fare clic all'interno di un locale per selezionarlo. In **Proprietà** cambiare il **Nome** (per esempio `Cucina`) e il **Numero**; area e perimetro sono mostrati.
- Eliminare un muro tra due locali li unisce in uno; disegnare un muro attraverso un locale lo divide in due. Un locale mantiene nome e numero mentre i muri intorno si spostano.
- Un locale non si può eliminare da solo: è lo spazio che formano i muri.

Le aree sono misurate all'interno delle facce dei muri. I locali sono salvati come spazi IFC con area del pavimento, perimetro, altezza e volume, così gli abachi li leggono (vedere [Sommare quantità, elencare elementi e creare abachi degli spazi](topic:quantity-totals)).

## Solai

1. Fare clic su {{ui:Solaio}}.
2. Scegliere **Questo locale** o **Tutto l'edificio**, il **Tipo** (solaio in legno o soletta in calcestruzzo) e lo spessore.
3. Puntare all'interno di un locale (o in un punto qualsiasi dell'edificio). Ciò che il solaio coprirebbe è evidenziato con la sua area.
4. Fare clic. La parte superiore del solaio è il piano del livello; il solaio scende per il suo spessore. Un solaio di tutto l'edificio arriva alle facce esterne dei muri.

## Controsoffitti

1. Fare clic su {{ui:Controsoffitto}}.
2. Scegliere **Questo locale** o **Tutto l'edificio**, e la sua **Altezza** sopra il pavimento.
3. Puntare all'interno e fare clic.
4. Per vederlo dal basso, con la sua griglia e le luci, passare la pianta alla sua pianta del controsoffitto: vedere [Viste, intervalli di vista e tavole personali](topic:views-and-sheets).

## Una copertura

1. Sul livello i cui muri sostengono la copertura, fare clic su {{ui:Copertura}}.
2. Digitare la **Pendenza** come rapporto di salita su 12 (`6/12`) oppure in gradi (`30`), e lo **Sbalzo**.
3. Scegliere le **Estremità**: **Tetto a padiglione** (ogni lato è inclinato), **Timpani sui lati corti** o **Timpani sui lati lunghi** (edificio a quattro lati), oppure **Falda unica**.
4. Puntare all'interno dell'edificio: gronda e colmo appaiono sulla pianta. Fare clic.

La copertura poggia sopra i muri, sul livello superiore, e il suo intradosso incontra la faccia esterna dei muri. Le testate a timpano sono riempite con un muro di timpano spesso quanto il muro sottostante. Un edificio a forma di L, T o U riceve un tetto a padiglione le cui ali si incontrano nei compluvi.

## Modificarli

Selezionare un solaio, un controsoffitto o una copertura (nella vista 3D, nell'albero del modello, oppure una copertura facendo clic all'interno del suo contorno sul livello superiore) e modificarlo in **Proprietà**: per un solaio, il tipo, lo spessore e quanto sia alta la sua parte superiore sopra il livello; per un controsoffitto, l'altezza, lo spessore e il **Motivo** (la griglia che la pianta del controsoffitto disegna su di esso: nessuna, 600 × 600, 600 × 1200, 2' × 2' o 2' × 4'); per una copertura, la pendenza, lo sbalzo, le estremità e lo spessore. Ogni modifica è un solo passo di annullamento.

## Dare a un solaio, un controsoffitto o una copertura un tipo con layer

Un solaio, un controsoffitto e una copertura possono avere un **tipo**, come un muro: una stratigrafia con nome, in cui ogni layer ha il suo materiale e il suo spessore reale.

- **Al momento del posizionamento.** Gli strumenti Solaio, Controsoffitto, Copertura e Disegna solaio hanno un elenco **Tipo** nella loro riga. **Nessun tipo** lo posiziona come prima, con il proprio spessore. Un tipo lo posiziona con lo spessore pari alla somma dei layer del tipo.
- **Dopo.** Selezionare il solaio, il controsoffitto o la copertura e scegliere **Tipo** in Proprietà. L'elemento resta lo stesso elemento: posizione, locale e dati sono mantenuti e nulla viene ridisegnato. Cambiano solo il suo tipo, il suo spessore e il suo materiale. È così che un elemento in fase di schizzo diventa un elemento sviluppato: si sostituisce il suo tipo generico con uno reale.
- **Modifica del tipo…** apre l'editor dei tipi su quel tipo: layer dall'alto verso il basso, il nucleo, la funzione di ogni layer e il tag LOD del tipo. Salvare cambia ogni elemento del tipo in un solo passaggio, e un Annulla lo riporta indietro. Modificare un tipo iniziale salva una copia come tipo proprio.
- Mentre un elemento ha un tipo, il suo **Spessore** è quello del tipo e non può essere digitato. Scegliere un altro tipo, o **Nessun tipo**, per modificarlo.

I tipi iniziali sono un tipo **generico** per ciascuno (un solo layer del materiale generico, con tag LOD 200) e due tipi a layer (con tag LOD 300): un solaio con travetti in legno e un solaio in calcestruzzo con massetto; una copertura in legno e una copertura piana in calcestruzzo; un controsoffitto in cartongesso e un controsoffitto sospeso a pannelli. Sono valori di partenza, non costruzioni collaudate: verificare i layer prima di farvi affidamento.

L'abaco **Layer: area e volume** elenca ogni layer di ogni tipo in uso; vedere [Abachi, quote e PDF](topic:plan-schedules-and-pdf). I tipi di solaio, copertura e controsoffitto viaggiano tra progetti in un pacchetto di tipi o come elemento della libreria; vedere [Pacchetti di tipi](topic:type-packs).

## Da sapere

- Spostare, aggiungere o eliminare muri rifà i locali, i solai, i controsoffitti e la copertura sopra di essi.
- Una copertura si adatta a qualsiasi contorno. Per dare a ciascun muro una propria pendenza, un timpano o una falda, un cordolo rialzato, una fascia e un sottogronda, oppure per disegnare un singolo piano di copertura, vedere [Coperture: una pendenza per ogni muro, timpani, falde e piani di copertura](topic:roofs).
- {{key:Delete}} elimina il solaio, il controsoffitto o la copertura selezionati.
