---
title: Il terreno, l'edificio su di esso e i suoi piani
summary: Disegnare il perimetro del terreno, posizionare e ruotare l'edificio sul terreno, aggiungere piani a quote date o dividere l'altezza dell'edificio, e disegnare sul piano scelto.
keywords: terreno, planimetria del sito, linea di edificazione, arretramento, servitù, diritto di passaggio, linea di proprietà, lotto, particella, confine, posizionamento dell'edificio, ruotare edificio, posizionare edificio, piani, livelli, aggiungi livelli, dividi altezza, da piano a piano, IfcSite, IfcBuilding, IfcBuildingStorey, struttura spaziale
from: 48d10c1e
---

## Obiettivo

Predisporre le parti di un modello IFC che contengono tutto il resto: il terreno, l'edificio su di esso e i piani dell'edificio.

Un modello è organizzato come un **terreno** che contiene un **edificio**, il quale contiene i suoi **piani** (livelli); muri, solai e tutto il resto appartengono a un piano. {{ui:File}} › {{ui:Nuovo edificio}} predispone tutti e tre. Un modello proveniente da un altro programma che ha un edificio ma nessun terreno riceve un terreno la prima volta che se ne disegna uno: l'edificio vi viene collocato dov'era già.

## Disegnare il terreno

1. Attivare {{ui:Disegna}}, poi scegliere {{ui:Build}} › {{ui:Terreno}}.
2. Fare clic sugli angoli del terreno (lo strumento aggancia come lo strumento Muro). Fare di nuovo clic sul primo angolo, fare doppio clic o premere {{key:Enter}} per terminare. {{key:Backspace}} annulla un angolo.
3. La riga mostra l'area del terreno. Disegnarlo di nuovo per modificarlo.

La pianta di ogni piano mostra il perimetro del terreno come linea di proprietà.

## Posizionare l'edificio sul terreno

Con {{ui:Terreno}} attivo, digitare la **X** e la **Y** dell'edificio sul terreno e la sua **Rotazione** in gradi, oppure fare clic su {{ui:Posiziona l'edificio con un clic}} e fare clic dove va l'origine dell'edificio. Tutto ciò che appartiene all'edificio (piani, muri, griglie, tutto ciò che è stato disegnato) si sposta con esso; il terreno e il suo perimetro restano. Le piante continuano a mostrare ogni piano squadrato rispetto all'edificio.

## Linee di edificazione e servitù

Linee di edificazione e servitù (diritti di passaggio, servitù di passaggio) sono disegnate sul terreno come vincoli. Avvisano, **non bloccano mai**: un muro che ne oltrepassa una viene disegnato come richiesto, e in Problemi compare un avviso che indica il muro e la linea o la servitù. Riportando indietro il muro, l'avviso scompare. Un avviso può essere accettato indicando un motivo (per esempio una deroga concessa dall'ente).

- **Linea di edificazione dagli arretramenti.** {{ui:Build}} › {{ui:Linea di edificazione}}, poi {{ui:Arretramenti}}: digitare di quanto la linea rientra da ciascun confine del terreno. I confini sono numerati in pianta mentre lo strumento è attivo. La linea è calcolata da quelle distanze e segue il perimetro del terreno se lo si ridisegna con altrettanti confini. Le distanze sono quelle del titolo di proprietà o del piano urbanistico; BimCraft non ne inserisce alcuna.
- **Una linea di edificazione disegnata.** Con {{ui:Linea di edificazione}} attiva, fare clic sui suoi punti e terminare con doppio clic o {{key:Enter}}. Terminare sul primo punto per una linea chiusa: l'area all'interno è quella in cui si può costruire, e per un muro con una parte fuori di essa viene emesso un avviso. Una linea aperta avvisa solo per un muro che la attraversa.
- **Una servitù.** {{ui:Build}} › {{ui:Servitù}}: scegliere il tipo, digitare il nome, il riferimento registrato e la larghezza, poi fare clic sulla sua linea di mezzeria e terminare (una striscia), oppure chiuderla sul primo punto (un'area). Per un muro con una parte su di essa viene emesso un avviso, su ogni piano.
- Una faccia esattamente sulla linea è a contatto, non attraversata (la tolleranza è di 1 mm).
- L'opzione di volumetria corrente di ciascun set di opzioni viene controllata come i muri: una massa fuori dal confine, oltre una linea di edificazione o su una servitù riceve un avviso. Vedere [Opzioni di volumetria tenute affiancate](topic:massing-options).
- Scegliere una linea con {{ui:Seleziona}} per cambiarne nome, riferimento, tipo o larghezza, spostarla o eliminarla.

Sono disegnate sulla pianta di ogni piano, sulle tavole e nel PDF della pianta: linee di edificazione tratteggiate, servitù punteggiate, ciascuna con la sua etichetta. Nel file IFC ciascuna è un'annotazione (IfcAnnotation, tipo BuildingLine o Servitude) sul terreno, con la sua linea come curva semplice che altri programmi possono leggere. Il controllo usa il contorno reale di ciascun muro in pianta, con i suoi giunti come disegnati; un muro curvo è controllato con il proprio spessore rispetto alla linea di mezzeria.

## Aggiungere piani

Nel pannello {{ui:Livelli}}, {{ui:Aggiungi un livello in cima}} ne aggiunge uno, {{ui:Aggiungi un livello sotto}} ne aggiunge uno sotto il più basso (un seminterrato, a quota negativa). {{ui:Aggiungi livelli…}} ne aggiunge più d'uno in una volta:

- **A queste altezze**: digitare le altezze sopra il livello più basso, separate da virgole (per esempio `12', 24', 36'`). Le altezze che hanno già un livello vengono saltate.
- **Dividere l'altezza dell'edificio**: digitare l'altezza dell'edificio e il numero di livelli. I livelli esistenti si spostano alle loro nuove altezze dal più basso verso l'alto, quelli mancanti vengono aggiunti, e gli eventuali livelli sopra di essi restano dove sono.

I muri che arrivano al piano superiore lo seguono, così come pilastri e rampe.

{{ui:Copia questo livello…}} (stesso pannello) copia ciò che è disegnato sul livello che si sta guardando su un altro livello o su un nuovo livello in cima, così una pianta può salire lungo l'edificio in un solo passo. Vedere [Disegnare muri](topic:draw-walls).

## Disegnare su un piano

Ogni strumento di {{ui:Disegna}} lavora sul livello scelto nell'elenco dei livelli della pianta (o selezionato nel pannello {{ui:Livelli}}): ciò che si disegna appartiene a quel livello.

## Cosa si vede

- Ciascuna di queste modifiche è un solo passo: {{key:Mod+Z}} la annulla.
- Nel file IFC: il terreno (IfcSite) con il suo perimetro e la sua area, l'edificio (IfcBuilding) posizionato su di esso, e i piani (IfcBuildingStorey) nell'edificio.

Vedere anche [Coordinate in BimCraft](topic:coordinates) per l'origine del progetto e il punto di rilievo.
