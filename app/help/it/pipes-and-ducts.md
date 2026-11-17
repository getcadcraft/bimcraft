---
title: Tubazioni e canali
summary: Disegnare le tratte di tubazione e di canale sulla pianta secondo l'asse; curve, raccordi a T, riduzioni e transizioni sono creati automaticamente, le tratte appartengono a sistemi con bocchettoni collegati nel file IFC, e compaiono in piante, abachi e computo.
keywords: tubazione, tubazioni, tubatura, idraulica, canale, canali, canalizzazione, hvac, mep, meccanico, curva, raccordo a T, riduzione, transizione, raccordo, raccordi, valvola, valvole, valvola a saracinesca, valvola a sfera, valvola a globo, valvola di ritegno, colonna montante, pendenza, scarico, fognatura, sfiato, acqua fredda, acqua calda, acqua refrigerata, riscaldamento, gas, antincendio, aria di mandata, aria di ripresa, espulsione, sistema, sistemi, bocchettone, bocchettoni, connettore, connettori, apparecchio, apparecchi, apparecchio sanitario, lavabo, lavello, WC, vasca da bagno, doccia, lavatoio, unità di apparecchio, uhc, dfu, dimensiona gli scarichi, dimensionamento degli scarichi, collettore di scarico, derivazione, portata d'aria, cfm, attrito, attrito uniforme, dimensionamento, schedule, computo, nbr, nbr 5648, nbr 5688, nbr 8160, PVC incollato, scarico fognario, dn
from: 85140bc5
---

## Cosa si fa

Disegnare le tubazioni e i canali di un edificio come si disegnano i muri: fare clic sugli angoli dell'asse di una tratta all'altezza impostata. BimCraft crea i raccordi, inserisce ogni parte nel proprio sistema e la collega, così altri programmi leggono la tratta come un unico sistema collegato.

## Disegnare una tubazione

1. Attivare {{ui:Disegna}}, aprire {{ui:Build}} e scegliere {{ui:Tubazione}}.
2. Nella barra, scegliere il **sistema** (acqua fredda, acqua calda, scarico sanitario, gas…). Imposta un materiale abituale: rame per l'acqua, PVC per scarichi e sfiati, acciaio per riscaldamento, acqua refrigerata, gas e antincendio. Modificare **materiale**, **classe** e **dimensione** se necessario. Dimensioni e spessori provengono da standard pubblici: tubo d'acciaio ASME B36.10M, tubo di rame ASTM B88, PVC ASTM D1785 e PEX ASTM F876. Per i progetti brasiliani si possono usare **tubo in PVC per acqua (NBR 5648)**, PVC incollato a solvente per l'acqua fredda, e **tubo in PVC per scarico (NBR 5688)**, serie normale o rinforzata, per scarichi e sfiati: le loro dimensioni sono indicate in DN (DN 25, DN 100). Una volta scelto uno di questi, la scelta di un altro sistema mantiene i tubi brasiliani (tubo in PVC per scarico per uno scarico sanitario dopo un tubo in PVC per acqua).
3. Impostare **A**: l'altezza dell'asse della tubazione sopra il livello.
4. Fare clic dove inizia la tubazione, poi su ogni angolo. Fare doppio clic, oppure premere {{key:Enter}}, sull'ultimo punto. {{key:Backspace}} annulla l'ultimo angolo; {{key:Esc}} elimina la tratta.

La tubazione si aggancia come fanno i muri, e alle altre tratte: iniziare sull'estremità di una tubazione per proseguire da essa, oppure terminare sulla linea di una tubazione per derivare. Una nuova tratta assume l'altezza della tubazione a cui si aggancia.

Una tratta iniziata o terminata su un bocchettone di un'apparecchiatura ne assume la dimensione e il sistema e vi resta fissata: vedi [Apparecchiature MEP con bocchettoni](topic:mep-equipment) e [Collegare tubazioni e canali alle apparecchiature](topic:mep-connections).

## Impostare lo standard idraulico del progetto

Il primo elenco nella barra della tubazione è lo **standard idraulico** del modello: **US (IPC, pollici)** oppure **Brasile (ABNT, DN)**. È salvato nel modello, quindi chiunque apra il file inizia le tratte nello stesso modo. Con **US**, una nuova tratta parte in rame (acqua) o in PVC Schedule 40 (scarichi), in pollici, con la pendenza dell'International Plumbing Code. Con **Brasile**, l'acqua fredda parte come PVC incollato DN 25, gli scarichi sanitari e le acque meteoriche e gli sfiati come PVC per scarico DN 100 con la pendenza della NBR 8160, e l'acqua calda in rame. Vale anche per una tratta iniziata su un connettore di un apparecchio o su un bocchettone di un'apparecchiatura. Le tubazioni già disegnate mantengono il loro materiale e le proprie tabelle; l'elenco dei materiali resta aperto, quindi si può ancora disegnare intenzionalmente una tratta brasiliana in un modello US. Un file senza scelta si comporta come prima: una nuova tratta segue il materiale in uso.

## Disegnare un canale

1. Scegliere {{ui:Canale}}. Scegliere il sistema (mandata, ripresa, espulsione o aria esterna) e la forma: tonda, rettangolare o ovale piatta.
2. Digitare la larghezza e l'altezza (per un canale tondo la larghezza è il diametro), e **A** per l'altezza dell'asse.
3. Per dimensionarlo dalla portata d'aria, digitare la **Portata d'aria** e il valore di **Attrito**, poi fare clic su {{ui:Dimensiona}}. Il canale viene dimensionato con il metodo dell'attrito uniforme, descritto nel capitolo sul progetto dei canali dell'ASHRAE Handbook, e arrotondato a una dimensione disponibile a catalogo, così che l'attrito risulti uguale o inferiore al valore digitato. Senza valore digitato si usa 0,08 in. di colonna d'acqua ogni 100 ft (0,8 Pa/m). Un canale rettangolare mantiene l'altezza digitata e ottiene una larghezza; BimCraft lo segnala quando i lati superano il rapporto 4 a 1.
4. Fare clic sugli angoli come per una tubazione.

## Apparecchi sanitari

{{ui:Build}} › {{ui:Inserisci famiglia}} offre cinque apparecchi da cui partire, ciascuno con uno scarico e un connettore di acqua fredda: un **WC**, un **Lavabo**, un **Lavello da cucina**, un **Piatto doccia** e un **Lavatoio**. Il fronte è rivolto verso chi posiziona e il retro è addossato alla parete. Gli scarichi sono dimensionati al diametro minimo di scarico dell'apparecchio secondo la NBR 8160 (DN 100 per il WC, DN 50 per il lavello, DN 40 per gli altri); l'acqua è DN 20. Per cambiarne le dimensioni, o modificarli, come ogni famiglia: vedi [Famiglie e loro dimensioni](topic:families).

Una famiglia indica quale apparecchio è sotto **Apparecchio sanitario** nella scheda **Connettori** dell'editor delle famiglie. Il suo scarico viene poi conteggiato in unità di apparecchio: 6 UHC per un WC, 1 per un lavabo, 3 per un lavello da cucina o un lavatoio, 2 per una doccia (NBR 8160), oppure le unità di scarico degli apparecchi della Tabella 709.1 dell'IPC.

## Dal connettore di un apparecchio

Gli elementi posizionati da una famiglia con connettori (lo scarico e il rubinetto di un lavabo, il collo di un terminale d'aria: vedi [Modificare una famiglia](topic:family-editor)) mostrano i connettori liberi come punti mentre {{ui:Tubazione}} o {{ui:Canale}} è attivo, e il puntatore si aggancia ad essi.

- **Iniziare su un connettore**: la tratta assume il sistema e la dimensione (la tubazione del materiale della barra al diametro del connettore o appena superiore; un canale tondo del suo diametro). Quando il connettore è rivolto verso il basso o verso l'alto, come uno scarico sotto un lavabo, la tratta va prima dritta in basso o in alto fino all'altezza di **A**, poi prosegue con i clic.
- **Terminare su un connettore**: la tratta scende o sale fino ad esso e termina lì.

La tratta è collegata all'elemento nel file IFC, quindi altri programmi vedono l'apparecchio come parte del suo sistema. Un elemento posizionato in seguito con un connettore sull'estremità di una tratta vi viene collegato anch'esso. Una tratta spostata via da un connettore non è più collegata ad esso.

## I raccordi, creati per voi

| Dove | Cosa crea BimCraft |
|---|---|
| Una tratta gira | Una curva. Tubazione in acciaio a raggio lungo ASME B16.9 (1,5 × la dimensione), altre tubazioni a un diametro esterno, canale tondo a 1,5 diametri, canale rettangolare a una larghezza (o a un'altezza per una deviazione in alto o in basso) |
| Una tratta termina sulla linea di un'altra | Un raccordo a T; l'altra tratta viene divisa lì |
| Due tratte si incontrano testa a testa con dimensioni diverse | Una riduzione (tubazioni) o una transizione (canali) |
| Due tratte della stessa dimensione si incontrano testa a testa con un angolo | Una curva |

Quando si modifica, si sposta o si elimina una tratta, ogni raccordo di quel livello viene ricreato. Se un tratto è troppo corto per i raccordi alle sue estremità, BimCraft lo segnala e non cambia nulla: allontanare di più l'angolo.

:::note
I raccordi e le valvole sono generici: derivati dalla dimensione della tubazione o del canale, non da un catalogo di un produttore. I raccordi a bicchiere, a pressare e scanalati, i corpi valvola e le apparecchiature hanno dimensioni proprie dei produttori; verificarle con il proprio fornitore prima di ordinare.
:::

## Colonne montanti

Durante il disegno, digitare una nuova altezza in **A** e premere {{key:Enter}}: la tratta sale o scende dritta all'ultimo angolo, con una curva a ciascuna estremità. Una colonna montante può salire fino al livello superiore. Ogni livello mostra le parti di una tratta raggiunte dal proprio intervallo di vista, con **UP** o **DN** sulla colonna.

## Scarichi e loro pendenza

Gli scarichi sanitari e le acque meteoriche partono dalla pendenza minima consentita dall'International Plumbing Code per la loro dimensione: 1/4 in. per piede fino a 2-1/2 in., 1/8 in. per piede da 3 a 6 in., 1/16 in. per piede da 8 in. Il tubo in PVC per scarico brasiliano parte dalla pendenza della NBR 8160: 2 % fino a DN 75, 1 % da DN 100. Digitare un'altra pendenza nella barra o nelle Proprietà: `1/4"/ft`, `2 %` o `1:50`. La tratta scende dal suo primo punto, quindi disegnare gli scarichi nel verso in cui scorrono. La pianta mostra la caduta e una freccia. Le Proprietà avvisano quando uno scarico è più piatto del minimo del regolamento.

## Dimensionare gli scarichi per unità di apparecchio

Selezionare uno scarico sanitario: **Unità di apparecchio** nelle Proprietà indica quante ne trasporta e la dimensione minima necessaria. Conta ogni apparecchio sanitario il cui connettore di scarico è sulla tratta, e conta ogni scarico che vi confluisce: disegnare gli scarichi nel verso in cui scorrono, ciascuno terminando sullo scarico in cui confluisce.

- Gli scarichi in tubo PVC per scarico brasiliano contano **UHC** e seguono la NBR 8160; gli altri contano **DFU** e seguono l'International Plumbing Code.
- **Scarico**: una **Derivazione** viene dimensionata dalla tabella del regolamento per le derivazioni degli apparecchi; uno **Collettore di scarico** dalla sua tabella in base alla pendenza, quindi la sua **Pendenza** è importante.
- Uno scarico non è mai più piccolo degli scarichi degli apparecchi che serve (un WC richiede DN 100, ovvero 3 in.), né di uno scarico che vi confluisce. Secondo la NBR 8160 un collettore di scarico è almeno DN 100.

{{ui:Dimensiona gli scarichi}} porta ogni scarico sanitario del modello che è troppo piccolo per le sue unità di apparecchio alla dimensione necessaria, come un unico passo annullabile. Uno scarico disegnato più grande del necessario viene lasciato com'è. Quando uno scarico trasporta più di quanto la dimensione massima della sua tubazione possa portare alla sua pendenza, BimCraft lo segnala: dare una pendenza maggiore oppure un'altra tubazione.

:::note
Le tabelle sono quelle degli scarichi orizzontali. Colonne di scarico, sfiati e acque meteoriche non vengono dimensionati qui: verificarli, e l'intero progetto, con il regolamento applicabile al progetto.
:::

## Valvole

1. Scegliere {{ui:Valvola}} e il tipo: a saracinesca, a sfera, a globo o di ritegno.
2. Fare clic su una tubazione dove va. La tubazione viene interrotta attorno ad essa e la valvola è collegata ai due lati.

Le Proprietà della tratta elencano le sue valvole, ciascuna con {{ui:Rimuovi}}.

Altri tipi di valvola, un filtro, serrande sui canali, le proprie specifiche di tubazione e le famiglie dei produttori: vedi [Specifiche tubazioni, valvole, serrande e famiglie dei produttori](topic:pipe-specs).

## Modificare una tratta

Selezionare una parte qualsiasi di una tratta, nella pianta o nella vista 3D. Nelle Proprietà:

- **Sistema**, **Materiale**, **Classe** e **Dimensione** (tubazioni), oppure **Forma**, **Larghezza**, **Altezza** (canali).
- **Altezza sopra il livello** sposta l'intera tratta in alto o in basso.
- **Isolamento**: il suo spessore, mantenuto per la verifica delle interferenze e per l'elenco delle aperture (non viene disegnato nulla): vedi [Verificare tubazioni e canali rispetto alla struttura](topic:mep-against-structure).
- Tubazione in acciaio: **Suddividi in spool**: vedi [Spool di tubazioni in acciaio e tavole degli spool](topic:pipe-spools).
- **Pendenza** (tubazioni).
- **Portata** con {{ui:Dimensiona}}: per l'acqua, la dimensione minima che mantiene l'acqua a 8 ft/s (2,4 m/s), oppure 5 ft/s (1,5 m/s) per l'acqua calda; a 3 m/s per il tubo in PVC per acqua brasiliano (NBR 5626). Per i canali, la velocità e l'attrito della tratta come disegnata. Gli scarichi sanitari sono invece dimensionati per unità di apparecchio: vedi **Dimensionare gli scarichi per unità di apparecchio** più sopra.

Ogni modifica è un passo di {{ui:Annulla}}. {{key:Delete}} elimina l'intera tratta.

## Piante

- Le tubazioni più piccole di 150 mm (circa 6 in.) sono disegnate come una linea sull'asse, quelle più grandi e tutti i canali come due linee alla propria larghezza.
- Ogni sistema ha il proprio colore; il PDF della pianta li stampa in nero.
- Ogni tratta riporta la propria dimensione e il proprio sistema (per esempio `2" CW` o `16×10 SA`).
- L'intervallo di vista di una pianta decide quali tratte mostra, e {{ui:Mostrato in questa pianta}} può escludere **Tubazioni** o **Canali**: vedi [Viste, intervalli di vista e tavole personali](topic:views-and-sheets).

## Abachi e computo

Il pannello {{ui:Abachi}} aggiunge **Tubazioni** (per sistema, materiale e dimensione, con le loro lunghezze), **Canali** (per sistema, forma e dimensione, con lunghezze e superficie esterna) e **Raccordi e valvole** (per tipo e dimensione, conteggiati). Fare clic su una riga per scegliere cosa elenca; {{ui:Scarica CSV}} la scarica.

{{ui:Computo}} porta le tratte in TakeoffCraft: tubazioni e canali per dimensione come tratte disegnate sulla pianta (gli scarichi inclinati sono misurati lungo la loro pendenza), raccordi e valvole conteggiati dove si trovano: vedi [Inviare le quantità del modello a TakeoffCraft](topic:takeoff). Le colonne montanti sono escluse da quel foglio, perché una pianta non può misurarle; l'abaco Tubazioni ne riporta la lunghezza.

## Nel file IFC

Ogni tratta è un assieme che contiene le sue parti: segmenti di tubazione e di canale, raccordi e valvole, ciascuno con il suo tipo, materiale, un colore per il proprio sistema e i suoi bocchettoni. I bocchettoni a contatto sono collegati, e ogni parte appartiene al proprio sistema di distribuzione (i file IFC2X3 ricevono lo stesso come segmenti di flusso, raccordi e controllori di un sistema). Gli altri programmi che leggono i sistemi IFC vedono una tratta collegata per sistema. La definizione della tratta è conservata con essa, così BimCraft la ricrea nello stesso modo quando la si modifica.
