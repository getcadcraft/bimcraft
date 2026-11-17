---
title: Georeferenziare con qualsiasi proiezione
summary: Indicare a BimCraft in quale sistema cartografico sono le coordinate di un modello, dall'intera lista EPSG, da qualsiasi fuso UTM o da una proiezione definita dall'utente, e usarlo per Posizione, i layer cartografici e le nuvole di punti.
keywords: proiezione, sistema di coordinate, crs, epsg, utm, fuso utm, proiezione personalizzata, proj4, stringa proj, prj, wkt, georeferenziazione, georeferenziare, conversione cartografica, ifcprojectedcrs, le mie proiezioni, latitudine, longitudine, est, nord, lambert, gauss-kruger, state plane, griglia nazionale
from: 6894c1f2
---

Alcuni piani sono disegnati in un sistema cartografico che non è nella lista breve: un fuso UTM, un reticolo nazionale, oppure una proiezione scritta come definizione testuale. {{ui:Misura}} › {{ui:Sistema di coordinate…}} consente di indicare quale sistema usa il modello.

## Scegliere il sistema per un modello

1. Aprire il modello, scegliere {{ui:Misura}}, poi {{ui:Sistema di coordinate…}}.
2. Digitare nella casella di ricerca. Funziona una qualsiasi di queste forme:
   - un numero EPSG: `32633` oppure `EPSG:2277`;
   - un fuso UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - parole dal nome: `lambert 93`, `mga zone 56`, `texas central`;
   - una definizione di proiezione: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, facoltativamente con un nome davanti (`La mia griglia = +proj=…`);
   - il testo di un file `.prj`, oppure usare {{ui:Carica un file .prj…}}.
3. Scegliere un risultato, poi {{ui:Usa questo sistema}}.

La scelta è salvata nel modello (un set di proprietà chiamato `CadCraft_CRS` sul progetto), così si riapre con il modello. Salvare il modello per conservarla. {{ui:Togli dal modello}} torna a ciò che indica il file.

Se la definizione dà le stesse coordinate di un sistema EPSG in elenco, BimCraft lo dichiara e usa quel codice; quando più sistemi in elenco condividono gli stessi calcoli, indica anche gli altri.

## Le mie proiezioni

Una definizione incollata o un file `.prj` caricato può essere conservato con {{ui:Salva in Le mie proiezioni}}. L'elenco si trova su questo dispositivo (questo browser) ed è proposto la volta successiva che si apre il selettore.

## A cosa serve

- {{ui:Misura}} › {{ui:Posizione}} trasforma un punto scelto in latitudine e longitudine tramite il sistema del modello. In passato si fermava con una nota quando il file indicava il suo sistema cartografico senza un codice EPSG; con una scelta salvata fornisce la risposta.
- I layer cartografici sotto il modello usano lo stesso sistema. Una nuvola di punti o un file del terreno in un altro sistema viene proposto nel sistema del modello (vedere sotto).
- {{ui:Impostazioni}} › {{ui:BimCraft}} › {{ui:Posizione}} › {{ui:Scegli un altro sistema…}} imposta che cosa riporta anche {{ui:Posizione}}: latitudine e longitudine in qualsiasi sistema geografico in elenco, oppure est e nord in qualsiasi sistema proiettato, oltre a quelli propri del modello.

## Un modello non ancora sulla mappa

Se il file non ha una conversione cartografica, scegliere un sistema apre {{ui:Posiziona questo modello sulla mappa}}. Si può aprirla anche da {{ui:Misura}} › {{ui:Origine sulla mappa…}}.

1. Indicare l'origine del modello come est e nord nel sistema, oppure digitare latitudine e longitudine e scegliere {{ui:Converti in Est e Nord}}.
2. Indicare la rotazione verso il nord di griglia (in gradi, in senso antiorario; 0 significa che l'asse Y del modello punta al nord di griglia) e l'altezza dell'origine.
3. La scala parte dalla differenza di unità tra il modello e la mappa (0.001 per un modello in millimetri su una griglia in metri). Cambiarla solo per un fattore combinato dal suolo alla griglia.
4. Scegliere {{ui:Posiziona sulla mappa}}. Un solo passo di annullamento scrive un IfcProjectedCRS e un IfcMapConversion (IFC4). Il modello in sé non si sposta.

Un file IFC2X3 non ha nessuna delle due entità. BimCraft scrive gli stessi valori nel modo consentito da quello standard: i set di proprietà buildingSMART `ePSet_MapConversion` e `ePSet_ProjectedCRS` sul progetto, la latitudine e la longitudine del sito e il nord vero. La finestra lo dice. Salvare il modello per conservarlo.

## Un modello già sulla mappa

Quando il file si colloca già sulla mappa e si sceglie un altro sistema, BimCraft chiede:

- {{ui:Cambiare solo ciò che riporta Posizione}} mantiene la georeferenziazione propria del file e usa la scelta per {{ui:Posizione}}, i layer cartografici e le nuvole di punti (i valori del modello vengono quindi letti come appartenenti al nuovo sistema).
- {{ui:Sposta il modello in questo sistema}} riscrive la georeferenziazione: l'origine passa attraverso la proiezione (est, nord, altezza, rotazione e scala) e l'IfcProjectedCRS (nome, datum, proiezione, fuso, unità) viene riscritto, così l'IFC salvato indica il nuovo sistema. La posizione sulla Terra resta la stessa: l'origine mantiene la sua latitudine e longitudine. Gli elementi nel modello non cambiano mai; cambia solo la georeferenziazione.

La finestra mostra l'origine vecchia e quella nuova prima di scegliere. Spostarsi nel nuovo sistema e tornare indietro riporta l'origine entro un millimetro.

## Nuvole di punti e terreno in un altro sistema

Una nuvola o un file di rilievo porta un proprio sistema (LAS, LAZ, E57, GeoTIFF) oppure nessuno. Quando è diverso da quello del modello, BimCraft propone {{ui:Riproietta nel sistema del modello}}. I punti vengono spostati a blocchi (in un worker quando sono molti, così la pagina resta utilizzabile), il file sul proprio computer non viene toccato, e la riga di stato indica cosa è stato fatto. Riaprire il file per tornare al suo sistema. Per una nuvola già aperta, {{ui:Riproietta nel modello…}} nella barra della nuvola fa lo stesso.

Se il file non indica un sistema, BimCraft chiede {{ui:In quale sistema è questo file?}}: scegliere con {{ui:Scegli il sistema…}} e la risposta viene ricordata per quel file su questo dispositivo. {{ui:Mantieni il sistema proprio del file}} lascia i punti come sono.

## Quando qualcosa è approssimato

I problemi sono elencati nella finestra e nel pannello Problemi, mai in silenzio:

- Un luogo al di fuori dell'area per cui il sistema è pensato: i numeri funzionano, ma la distorsione cresce.
- Gli spostamenti di datum che richiedono un file di griglia (NADCON, NTv2 e simili) non sono disponibili. I sistemi su un datum diverso vengono spostati con lo spostamento senza griglia che il registro EPSG elenca, e il risultato è approssimato alla precisione dichiarata, che il messaggio indica in metri.
- Un punto che non può essere proiettato viene escluso e conteggiato; un file oltre il limite di dimensione viene rifiutato, con il limite indicato.

:::tip
Le coordinate cartografiche richiedono una conversione cartografica. Un file senza una viene posizionato sulla mappa con {{ui:Origine sulla mappa…}}.
:::

:::note
Gli spostamenti tra datum senza un file di griglia sono precisi entro pochi metri; il risultato di Posizione indica quanto, quando il catalogo lo conosce.
:::
