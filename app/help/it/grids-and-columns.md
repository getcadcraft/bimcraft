---
title: Griglie e pilastri
summary: Disporre le linee della griglia con cerchietti numerati e con lettere, per spaziatura o una alla volta, tracciare muri e pilastri lungo di esse e vederli su piante, prospetti e sezioni.
keywords: griglia, griglie, linea di griglia, griglia dei pilastri, asse, assi, cerchietto, linea della griglia, griglia strutturale, 1 2 3, A B C, pilastro, pilastri, colonna, palo, snap, IfcGrid, IfcColumn
from: bf99a8f7
---

## Cosa si ottiene

Impostare un edificio su una griglia, poi tracciare muri e inserire pilastri lungo le sue linee.

## Inserire una griglia completa

1. Attivare {{ui:Disegna}}, poi scegliere {{ui:Build}} › {{ui:Griglia}}.
2. Fare clic su {{ui:Posiziona una griglia…}}. Indicare quante **linee numerate** (1, 2, 3…) e quante **linee con lettere** (A, B, C…) si vogliono e a quale distanza. Digitare una spaziatura, oppure più spaziature separate da virgole per campate non uniformi (per esempio `20', 24', 20'`). {{ui:Oltre le ultime linee}} indica quanto ciascuna linea si estende oltre le linee esterne dell'altro tipo, e {{ui:Ruotata (gradi)}} ruota l'intera griglia.
3. Fare clic su {{ui:Posiziona}}, poi fare clic nel punto in cui va il primo incrocio (1 / A). L'anteprima segue il puntatore.

Le linee numerate salgono lungo la pianta e sono distanziate in orizzontale; le linee con lettere attraversano la pianta in orizzontale e sono distanziate verso l'alto. Le lettere saltano I e O, come nei disegni, così non vengono confuse con 1 e 0.

## Disegnare le linee della griglia una alla volta

Con {{ui:Griglia}} attivo, fare clic dove una linea inizia e dove finisce. Riceve l'etichetta successiva tra quelle delle linee lungo cui corre (dopo 3 viene 4; dopo B viene C). Premere {{key:Esc}} per terminare.

## Modificare una linea della griglia

Con {{ui:Griglia}} attivo, fare clic su una linea per selezionarla. Digitare una nuova {{ui:Etichetta}} e premere {{key:Enter}}, oppure fare clic su {{ui:Elimina questa linea}} (o premere {{key:Delete}}). {{ui:Cerchietti}} inserisce i cerchietti alle due estremità, all'inizio o alla fine di ciascuna linea, oppure in nessun punto. Ogni modifica è un'unica operazione: {{key:Mod+Z}} la annulla.

## Disegnare lungo la griglia

Gli strumenti {{ui:Parete}}, {{ui:Pilastro}} e gli altri strumenti di disegno si agganciano alle linee della griglia e ai loro incroci (il segno di snap è un piccolo cerchio con una croce).

**Pilastri:** scegliere {{ui:Build}} › {{ui:Pilastro}}, scegliere la forma (rettangolare o tonda), la dimensione e se il pilastro arriva **fino al piano superiore** oppure a un'altezza fissa, poi fare clic. {{ui:A ogni incrocio della griglia}} inserisce un pilastro in ogni incrocio che non ne ha ancora uno. Fare clic su un pilastro per modificarne forma, dimensione o altezza in {{ui:Proprietà}}; {{key:Delete}} lo rimuove. I pilastri che arrivano al piano superiore lo seguono quando cambia la sua altezza.

## Risultato atteso

- La griglia sulla pianta di ogni piano, con un cerchietto e la sua etichetta alle estremità di ogni linea.
- Linee di griglia nel set di disegni: sulle piante e, nei prospetti e nelle sezioni dove una linea è vista di punta, con il suo cerchietto sopra l'edificio. Vedere [Prospetti, sezioni e tavole](topic:sheets).
- Nel file IFC: una griglia per l'edificio (IfcGrid, con le linee numerate in un elenco e le linee con lettere nell'altro), e i pilastri come IfcColumn con dimensione, altezza e quantità. Gli altri programmi BIM mostrano entrambi.

:::note
Una griglia arrivata da un file di un altro programma viene mostrata e gli strumenti vi si agganciano, ma le sue linee non possono essere modificate qui.
:::
