---
title: Scale e parapetti
summary: Disegnare scale dritte, a L, a U e a gradini a ventaglio che calcolano alzate e pedate dall'altezza da piano a piano, con corrimano e balaustre e il vano scala tagliato nel solaio superiore; disegnare parapetti lungo terrazze e intorno alle aperture.
keywords: a chiocciola, scala tonda, scala, scale, rampa, alzata, pedata, pianerottolo, gradino a ventaglio, scala a L, scala a U, scala a tornante, corrimano, parapetto di protezione, protezione, parapetto, balaustra, colonnina, pilastrino, montante, vano scala, altezza libera, pedana, balcone
from: 16e5ace4
---

## Cosa si fa

Aggiungere scale tra i livelli e parapetti dove servono. Una scala calcola da sola i propri gradini a partire dall'altezza tra i livelli, li mantiene entro i limiti residenziali usuali, dispone corrimano sui lati aperti e ritaglia il vano scala nel solaio superiore.

## Disegnare una scala

1. Sul livello da cui parte la scala, aprire {{ui:Build}} e scegliere {{ui:Scala}}.
2. Scegliere il tipo — **Dritta**, **A L con pianerottolo**, **A U con pianerottolo** o **A L con gradini a ventaglio** — il verso in cui **gira**, la **larghezza** e dove vanno i **corrimano**.
3. Fare clic dove inizia la scala: al centro del bordo anteriore del primo gradino.
4. Spostare il puntatore nel verso in cui sale la scala; i gradini lo seguono, con il numero di alzate e pedate. Si aggancia alle pareti e a incrementi di 15°; tenere premuto {{key:Shift}} per mantenerla squadrata.
5. Fare clic. {{key:Esc}} ricomincia da capo.

## Disegnare una scala a chiocciola

1. Aprire {{ui:Build}}, scegliere {{ui:Scala}}, poi scegliere **A chiocciola** come tipo.
2. Impostare **Giro**, il verso in cui si avvolge salendo (sinistra è antiorario).
3. Fare clic sul centro del suo montante.
4. Fare clic nella direzione in cui punta il gradino inferiore.

Parte con una larghezza di 30" (il gradino, dal montante all'esterno), con un montante da 4½". Le alzate sono calcolate dall'altezza da piano a piano, al massimo 9½" per impostazione predefinita. Le pedate hanno una profondità di 7½" sulla linea di calpestio, a 12" dal montante. Il corrimano corre sul lato esterno.

In **Proprietà** una scala a chiocciola aggiunge **Montante centrale**, con il suo diametro. Il campo **Pedata** si misura sulla linea di calpestio. I suoi controlli sono valori predefiniti etichettati per le scale a chiocciola: larghezza libera di 26", almeno 6¾" di pedata sulla linea di calpestio, alzate al massimo 9½" e corrimano 34"–38". Non sono calcoli tecnici; decide l'ufficio tecnico competente.

## Come vengono calcolati i gradini

L'altezza tra il solaio del livello e il livello superiore viene divisa in alzate uguali non più alte di 7¾", e ogni pedata è profonda 10" (entrambi i valori si possono cambiare in **Proprietà**). Un pianerottolo conta come un gradino; i gradini a ventaglio sono tre gradini disposti a raggiera attorno allo spigolo interno. Se si cambia l'altezza di un livello, tutte le scale su di esso vengono ricalcolate.

:::warning
Alzate da 7¾", pedate da 10", larghezza di 36", altezza libera di 6'-8" e corrimano da 34"–38" sono valori predefiniti ricavati dal regolamento residenziale usuale, non calcoli tecnici. **Proprietà** indica quali sono rispettati; l'ufficio tecnico competente decide cosa si applica.
:::

## Modificare una scala

Scegliere la scala (fare clic su di essa in pianta o nella vista 3D) e modificarne in **Proprietà**: tipo e giro, larghezza, alzata massima, profondità della pedata, corrimano e la loro altezza, e **Taglia il solaio superiore** per il vano scala. Le alzate e le pedate risultanti sono mostrate sotto.

## Il vano scala

Quando il livello superiore ha un solaio, la scala lo taglia dove i gradini lascerebbero meno di 6'-8" di altezza libera. Il taglio segue la scala e scompare quando la scala viene eliminata.

## Disegnare un parapetto

1. Aprire {{ui:Build}} e scegliere {{ui:Parapetto}}.
2. Scegliere **Parapetto di protezione** (altezza 36") oppure **Corrimano**, e la sua altezza.
3. Fare clic lungo il bordo — una pedana, un balcone, intorno a un vano scala — e fare doppio clic o premere {{key:Enter}} per terminare.

I parapetti ricevono montanti alle estremità e agli angoli, e balaustre con interspazi inferiori a 4". Scegliere un parapetto per cambiarne tipo, altezza o di quanto inizia sopra il pavimento.

## Disegnare una recinzione

Scegliere **Recinzione** nello stesso strumento Parapetto, impostarne l'altezza (1800 mm come valore iniziale), fare clic lungo la linea della recinzione e premere {{key:Enter}}.

- La recinzione riceve un montante a ogni estremità e a ogni angolo, e un montante al massimo ogni 2.4 m tra essi. Una recinzione a pannelli ha un pannello tra i montanti; una recinzione a traversi ha due traversi. Queste dimensioni sono scelte usuali, non un requisito normativo: i regolamenti locali limitano l'altezza di una recinzione.
- È un solo elemento nel modello (un IfcRailing chiamato Fence) con un set di proprietà {{ui:CadCraft_Fence}}: stile, altezza, montanti, pannelli, traversi, cancelli, lunghezza e superficie dei pannelli. Un solo passaggio di annullamento.
- Non disegnati qui: i cancelli (li dispone il generatore in CivilCraft), i paletti, il terreno (la recinzione poggia sul livello) e la selezione di un singolo montante.

## Cosa viene salvato

Una scala viene salvata come scala IFC composta da rampe (con le loro alzate, pedate, altezza di alzata e lunghezza di pedata), pianerottoli, gradini a ventaglio e corrimano; il vano scala è un'apertura nel solaio superiore. I parapetti sono parapetti IFC con la loro lunghezza e il loro numero di balaustre e montanti.
