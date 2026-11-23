---
title: Novità nella 0.9 (precedenti)
summary: Forme dei muri, dividi, distanza, stira e blocca alla griglia, livelli sotto terra, quote delle griglie e Misura in pianta, viste duplicate con stili di lavoro e tabelle delle penne, Segnala come, esportazione Collada e Google Earth, Scansione in BIM, analisi del vento e sismica, add-on per la stampa in resina.
keywords: novità 0.9, versione precedente, novità, 0.9, note di rilascio, forme dei muri, rettangolo, poligono, arco, scegli linee, ricalca contorno, distanza, unione, stira a riquadro, allinea e blocca, dividi muro, spazio, ricongiungi, blocca alla griglia, cresci da, misura da, aggiungi un livello sotto, seminterrato, comando level, quote delle griglie, misura in pianta, stile di lavoro, duplica vista, copia autonoma, vista collegata, tabella penne, stampa come visualizzato, segnala come, digita una scala, importa svg, posiziona nel piano, posiziona nel modello, collada, dae, kmz, google earth, scansione in bim, carico del vento, sismica, elementi finiti, pannello documenti, stampa in resina, novità, cosa c'è di nuovo, note di rilascio, registro delle modifiche, modifiche, 0.8, 0.8.1, versione, nuove funzioni, evacuazione, persone, code, acustica, riverberazione, risposta all'impulso, alluvione, vento, terremoto, pericolo, ciclo di vita, vita utile, ids, tag, abachi, sposta, allinea, distribuisci, immagine, sfondo, scansione in muri, sito da civilcraft, disegni dei pannelli, ossatura, solare, fotovoltaico, split, vrf, fan coil, dimensionamento dei tubi, passerella dei cavi, illuminamento, calcestruzzo, sismica, confronta scansione, epsg, proiezione, documenti, modello, carbonio, costo, energyplus, motore di render, apri in, usd, glb, unreal, annulla, add-on, pcf, simboli, piante, ricalca, penne, barra multifunzione, browser di progetto, layout
from: 816df7f8
---

Ecco cosa è cambiato in BimCraft 0.9, rispetto alla 0.8.1. I due temi principali sono uno strumento muro reale e viste che si comportano come le si aspetta da chi arriva dai grandi programmi BIM. Intorno ad essi ci sono l'esportazione Collada, assistenti che possono posizionare dispositivi elettrici, Scansione in BIM e il lavoro su vento, sismica ed elementi finiti nella scheda {{ui:Analisi}}.

## Novità

### Muri

- **Disegnare forme intere.** In {{ui:Disegna}}, aprire {{ui:Forme}} (oppure scegliere una forma nell'elenco Forma della riga Muro) per un rettangolo, un rettangolo ruotato, un poligono da 3 a 64 lati, un arco per centro, un arco tangente, muri su linee scelte o muri attorno a un'area chiusa su cui si clicca all'interno. Un rettangolo sono quattro muri con quattro angoli uniti e un solo passo di annullamento. Si veda [Forme dei muri, dividi, distanza, stira e blocca](topic:wall-tools).
- **Impostare prima di disegnare, modificare dopo.** La riga Muro ha {{ui:Distanza}} e {{ui:Unione}} (deselezionare per disegnare muri isolati). Dopo, usare {{ui:Distanza}}, {{ui:Stira a riquadro}} e {{ui:Allinea e blocca}} sui muri disegnati. Un muro spostato o allungato mantiene le sue porte, finestre e quote. Ogni ricetta è un solo passo di annullamento.
- **Tagliare i muri.** {{ui:Dividi}}, {{ui:Spazio}}, {{ui:Estremità libere}}, {{ui:Elimina segmento}} e {{ui:Ricongiungi}} tagliano un muro con un clic o dove un altro muro lo attraversa. Un taglio attraverso una porta viene rifiutato. Si veda [Forme dei muri, dividi, distanza, stira e blocca](topic:wall-tools).
- **Bloccare i muri alle linee della griglia.** Selezionare un muro lungo una linea di griglia e spuntare {{ui:Blocca alla griglia}} in {{ui:Proprietà}}. Con lo strumento {{ui:Griglia}} attivo, digitare una distanza in {{ui:Sposta di}} per una linea scelta, e i muri bloccati seguono in un solo passo di annullamento.
- **Forma di un singolo muro.** In {{ui:Proprietà}} di un muro è possibile collegarne la parte superiore o la base a un tetto, un solaio o un soffitto, modificarne il profilo di prospetto, inclinarlo, oppure praticare un'apertura nel muro senza porta né finestra. Si veda [Forma del muro](topic:wall-shape).
- **La lunghezza indica quale estremità resta ferma.** {{ui:Cresci da}} stabilisce se restano fermi la partenza, la fine o il centro quando si cambia la lunghezza.
- **Lunghezza e quota in pianta concordano.** {{ui:Misura da}} (linea di mezzeria, faccia interna o faccia esterna) governa sia il campo Lunghezza sia le quote dei muri in pianta. Parte dalla linea di mezzeria, quindi le quote dei muri in pianta ora leggono la mezzeria dove prima leggevano la faccia esterna. Si cambia nella riga Muro, in {{ui:Proprietà}} oppure in {{ui:Impostazioni}} › {{ui:BimCraft}} › {{ui:Muri}}.

### Livelli, griglie e misure

- **Aggiungere un livello sotto.** {{ui:Aggiungi un livello sotto}} nel pannello {{ui:Livelli}} aggiunge un livello sotto il più basso, alto quanto esso, a una quota negativa (Livello -1, Livello -2). Nient'altro si sposta. {{ui:Aggiungi livelli…}} ora accetta altezze negative. Digitando LEVEL, LEVELS, STOREY o STOREYS nella riga di comando si apre {{ui:Aggiungi livelli…}}, e nei menu e nelle schede della barra multifunzione c'è un pulsante {{ui:Livelli}}. Si veda [Siti, edifici e livelli](topic:site-building-and-levels).
- **Quote della griglia in pianta.** Con lo strumento {{ui:Griglia}} attivo, spuntare {{ui:Quote}} per disegnare l'interasse tra linee vicine e l'ingombro complessivo oltre i cerchietti su ogni pianta di livello. Si veda [Quotare una griglia](topic:grid-dimensions).
- **Misurare in pianta.** {{ui:Misura}} nel gruppo {{ui:Disegna}} fornisce una distanza con le differenze X e Y tra due clic. Nulla viene salvato nel modello. Si veda [Misurare in pianta](topic:measure-on-the-plan).
- **Modificare più colonne insieme.** Selezionando colonne insieme a un muro, l'elenco le raggruppa per tipo, con {{ui:Mantieni solo questi}}. Un clic mantiene le colonne e mostra i loro campi comuni.
- **Un'unità di visualizzazione ovunque.** Coordinate, misure, sezioni, scale dei fogli, carichi e risultati della scheda Telaio e il testo dei Problemi seguono l'unità scelta. Le esportazioni restano in SI.

### Viste, fogli e stampa

- **Stile di lavoro.** {{ui:Impostazioni}} › {{ui:BimCraft}} › {{ui:Stile di lavoro}} sceglie se ogni vista ha le proprie annotazioni e tabelle delle penne oppure se le condivide. Si veda [Stile di lavoro, viste duplicate, penne su carta, Segnala come e modelli](topic:working-style).
- **Duplicare una vista.** Piante, piante dei soffitti, richiami, prospetti e sezioni possono essere duplicati come {{ui:Copia autonoma}} oppure {{ui:Collegato}}; {{ui:Rendi copia autonoma}} rende indipendente una vista collegata. Si veda [Stile di lavoro, viste duplicate, penne su carta, Segnala come e modelli](topic:working-style).
- **Stampare come visualizzato, oppure tramite una tabella delle penne.** Le sostituzioni delle penne vengono mantenute nell'IFC con la vista, e i fogli e i PDF le disegnano come lo schermo. Lo stesso argomento copre le tabelle delle penne.
- **Segnala come.** {{ui:Segnala come}} in {{ui:Proprietà}} scrive nell'IFC una soletta disegnata come strada, un muro come pannello o un tetto come rampa, con la classe scelta, e lo conta così negli abachi, nelle quantità, in Trova, in Colora per e nei Problemi.
- **Modificare in prospetti e sezioni.** Disegnare e spostare muri, aperture, livelli, quote e note direttamente in un prospetto o in una sezione, con formati e cartigli propri. Si veda [Modificare in prospetti e sezioni](topic:edit-in-elevations).
- **Fogli.** Ogni foglio può essere orizzontale o verticale. Una casella {{ui:Digitare una scala}} si trova accanto all'elenco delle scale su ogni vista posizionata (1:64, 2:1, 1/4" = 1'). Si può trascinare un disegno posizionato o spostarlo con i tasti freccia, e {{ui:Formati…}} › {{ui:Importa SVG…}} trasforma un disegno di foglio proprio in un cartiglio con campi digitati per foglio.
- **Crediti della libreria su un foglio.** Un set di disegni con elementi della Libreria ottiene un abaco dei Crediti della libreria che si può posizionare su qualsiasi foglio. Si veda [Crediti della libreria](topic:library-credits).

### Libreria: posizionamento

- **Il posizionamento segue la vista.** Nella vista {{ui:Pianta}} la Libreria mostra {{ui:Posiziona nel piano}}; in {{ui:3D}} mostra {{ui:Posiziona nel modello}}; in {{ui:Dividi}} mostra un pulsante diviso con {{ui:Posiziona nel piano}} come azione principale. Entrambi i modi scrivono lo stesso elemento IFC. Si può anche trascinare una scheda della Libreria sulla pianta o sulla vista 3D; con penna o dito, premere e tenere premuto, poi trascinare. Si veda [Posizionare dalla Libreria](topic:place-from-library).

### File e assistenti

- **Collada e Google Earth.** {{ui:Collada}} nella barra degli strumenti (menu File negli stili di menu) scrive un .dae, oppure un .kmz posizionato dove si trova il modello sulla mappa. Si veda [Esportare il modello come Collada o per Google Earth](topic:collada).
- **Gli assistenti possono posizionare dispositivi elettrici.** L'assistente collegato ha nuovi strumenti per aggiungere, elencare, modificare ed eliminare dispositivi e per impostare le luci. Gli assistenti restano disattivati finché non vengono attivati in {{ui:Impostazioni}}. Si veda [Far lavorare un assistente IA con il modello](topic:assistants).
- **Scansione in BIM (add-on).** Disattivato per impostazione predefinita, richiede l'add-on Nuvole di punti. Propone solai, muri, porte e finestre da una scansione, con la deviazione misurata per ciascuno; accettare è un solo passo di annullamento.

### Analisi

- **Dati sismici e del vento sul sito.** Nella scheda {{ui:Analisi}}: carichi del vento secondo ASCE 7-10 o 7-16 per un edificio rigido chiuso, con una forza su ogni piano come casi di carico, e dati sismici del sito con una ricerca USGS e lo spettro di progetto.
- **Verifiche strutturali successive ed elementi finiti.** Verifiche del calcestruzzo secondo ACI 318-19, forze laterali equivalenti secondo ASCE 7-22, deriva di piano, solai e muri come piastre, e combinazioni di carico da ASCE 7 e EN 1990. Il nostro motore agli elementi finiti gestisce gusci, tetraedri e analisi modale. Si vedano [Verificare elementi in calcestruzzo e generare carichi sismici](topic:concrete-and-seismic) e [Analisi di telai](topic:frame-analysis).

### Altri add-on e documenti

- **Illuminazione interna (add-on).** Posiziona apparecchi di illuminazione e scrive il lux come numeri in ogni pianta di livello, con una stima dell'abbagliamento e un rapporto stampabile.
- **Pannello documenti.** {{ui:File}} › {{ui:Documenti…}} offre check-out e check-in con un file di blocco, lettere di revisione, stati di rilascio e cronologia.
- **Regioni e acciaio.** Pacchetti di disegni e di normative edilizie sudafricane nell'add-on Normative, e 976 sezioni d'acciaio britanniche nella tabella condivisa delle sezioni.
- **Add-on gratuiti per la stampa in resina.** Slicer, supporti e zattera, prova di esposizione, e i formati di file GOO, SL1, Chitubox e Anycubic, tutti disattivati per impostazione predefinita.

### In ogni app

- Passando il mouse su un pulsante o un comando compare un suggerimento Bootstrap.
- Il suggerimento iniziale su un'area di disegno vuota ha un pulsante di chiusura; BimCraft ricorda che è stato chiuso.
- La barra delle schede di un pannello che non entra ora scorre invece di essere tagliata.
- Con un documento aperto, la scheda del browser riporta "<documento> - BimCraft | CadCraft".
- In {{ui:Impostazioni}} › {{ui:Generale}} › {{ui:Layout}} i layout sono un menu a discesa di scelte su due righe.
- L'elenco delle lingue in {{ui:Impostazioni}} offre più lingue rispetto alla 0.8; le lingue diverse dall'inglese sono bozze automatiche.

## Corretto

- **Lo spostamento funziona sulle scale,** e su rampe, ringhiere, falde di tetto, dispositivi isolati, immagini e percorsi.
- **Trascinare un muro non inclina più la stanza.** Il punto di presa centrale sposta il muro squadrato rispetto a se stesso e i suoi angoli scorrono lungo i muri uniti. Tenere premuto {{key:Mod}} per lo spostamento libero precedente; {{ui:Squadra}} riporta a 90 gradi.
- **Un cambio di spessore o di tipo in un nodo unito** ora mantiene chiuso l'angolo a L, a T, nel nodo a tre muri e accanto a un muro curvo.
- **Spostare o copiare un gruppo di locali** mantiene uniti i muri esterni al gruppo.
- **Ripristina mantiene l'identità di una quota del muro.**
- **Selezionare un muro con Disegna disattivato** non genera più un errore in Proprietà.
- **Il render ricorre a WebGL** quando la GPU non si avvia, invece di fermarsi.
- **Il controllo EnergyPlus può di nuovo essere attivato.**
- **Documenti si apre come finestra di dialogo centrata.** {{key:Esc}}, la X o un clic sulla pagina oscurata la chiudono.
- **I pulsanti {{ui:Pianta}}, {{ui:Dividi}} e {{ui:3D}} compaiono** appena si apre un modello, non solo dopo aver attivato Disegna una volta.

## Limiti dichiarati

- Nulla è stato stampato su hardware reale. I supporti in resina sono nuovi e non ancora collaudati.
- I risultati di vento, sismica, calcestruzzo ed elementi finiti sono strumenti di verifica per un ingegnere, confrontati con soluzioni chiuse, non con un edificio reale.
- Scansione in BIM è stata provata su un edificio sintetico, non su una scansione reale, e trova solo locali rettilinei.
- Collada non è stato aperto qui in Blender o Google Earth.
- La stima dell'illuminazione è confrontata con il nostro tracciamento, non con altri programmi di illuminotecnica.
- I numeri sudafricani non sono verificati.
- Gli stili di unione dei muri (di testa, a 45 gradi, squadrato) e la priorità dei layer non sono implementati; gli angoli sono a 45 gradi.
- Le lingue diverse dall'inglese sono bozze automatiche.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Le modifiche precedenti sono nelle note 0.8 e 0.8.1 più sotto in questa pagina.

## Precedenti: 0.8 e 0.8.1

Ecco cosa è cambiato in BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. BimCraft ora sa rispondere a domande su un edificio e testarlo, con persone, suono, acqua, vento e terremoti, e lo disegna con più strumenti; la 0.8.1 è una versione di correzione.

### Novità

**Testare l'edificio**

- **Persone nell'edificio.** La sezione {{ui:Persone nell'edificio}} del pannello sinistro fa passare un'evacuazione o l'afflusso di una giornata normale attraverso locali, porte e scale. Si vedono le code dove l'edificio si restringe, il percorso più lungo verso un'uscita da ogni locale e quanto tempo impiega l'ultima persona. Spuntare {{ui:Chiusa}} su una porta per vedere che cosa cambia, e spuntare {{ui:Mostra le persone nella vista 3D}} per osservare chi cammina. I risultati vanno nei Problemi. È un modello di folla approssimativo per decisioni di progetto, non un certificato antincendio. Si veda [Far camminare le persone nell'edificio](topic:people-in-the-building).
- **Acustica dei locali, e ascoltarla.** La sezione {{ui:Acustica dei locali}} fornisce il tempo di riverberazione di ogni locale per banda d'ottava (Sabine ed Eyring) dalla sua dimensione e dalle finiture scelte, e con un obiettivo proprio indica quanto assorbimento servirebbe per raggiungerlo. {{ui:Riproduci in questo locale}} riproduce una voce, un battito di mani, note pizzicate o un file audio proprio attraverso una risposta all'impulso calcolata per il locale. I valori di assorbimento sono valori pubblicati tipici, da sostituire. Si veda [Acustica dei locali](topic:room-acoustics).
- **Riproduzione di alluvione, vento e terremoto.** {{ui:Riproduzione di un evento pericoloso}} mostra l'acqua che sale nei locali, la pressione del vento su ogni piano e un terremoto che scuote i piani, su una pianta o un prospetto con un cursore temporale. Modelli semplici, con le loro ipotesi nel pannello; non è una verifica normativa. Si veda [Riprodurre un'alluvione, un vento o un terremoto](topic:hazard-playback).
- **Che cosa si consuma in cinquant'anni.** {{ui:Vista del ciclo di vita}} elenca finestre, porte, finiture e tetto con una vita utile ciascuno, gli anni in cui vengono sostituiti e, quando si digita un costo per unità, il costo per anno e il suo valore attuale. {{ui:Salva il programma (CSV)}} lo scrive. Le vite utili sono valori di pianificazione. Si veda [Vedere che cosa si consuma in cinquant'anni](topic:life-cycle-view).
- **Verifiche del calcestruzzo e sismiche.** I blocchi {{ui:Elementi in calcestruzzo}} e {{ui:Carichi sismici}} della scheda {{ui:Analisi}} verificano travi e pilastri in calcestruzzo secondo ACI 318-19 e calcolano forze laterali equivalenti secondo ASCE 7-22 su solai rigidi, con deriva di piano. Per la verifica di un ingegnere. Si veda [Verificare elementi in calcestruzzo e generare carichi sismici](topic:concrete-and-seismic).

**Verificare e riportare**

- **Verifica con un IDS.** Caricare il file `.ids` ricevuto dal committente e vedere in Problemi ogni elemento che non lo soddisfa, prima di consegnare l'IFC. Aprire {{ui:Verifica con un IDS}} sotto {{ui:Controlli del modello}}. Si veda [Verificare un modello con l'IDS del committente](topic:check-against-ids).
- **Tag e abachi.** Definire tag propri, assegnarli a molti elementi insieme e creare abachi le cui colonne, filtri e raggruppamenti li leggono; i tag sono conservati nell'IFC. Si veda [Tag e abachi](topic:tags-and-schedules).
- **Documenti dal modello.** {{ui:Documenti dal modello}} compila un modello di capitolato dall'IFC aperto e lo salva come PDF, documento Word o Markdown. Si veda [Documenti dal modello](topic:documents-from-the-model).
- **Confrontare una scansione con il modello.** Con una nuvola di punti aperta, {{ui:Confronta}} giudica ogni elemento come costruito, parzialmente costruito, mancante o non raggiunto, e mostra la percentuale costruita. Si veda [Confrontare una scansione con il modello](topic:compare-scan-with-model).
- **Carbonio e costo.** Il pannello Carbonio somma il carbonio incorporato da una tabella di fattori modificabile, e il pannello Costo distribuisce i prezzi sul programma 4D. I fattori forniti con BimCraft sono generici e segnati come non verificati. Si veda [Carbonio incorporato e costo](topic:embodied-carbon-and-5d-cost).
- **Qualsiasi proiezione cartografica.** {{ui:Misura}} › {{ui:Sistema di coordinate…}} accetta un numero EPSG, una zona UTM, un nome oppure una propria definizione di proiezione. Si veda [Georeferenziare con qualsiasi proiezione](topic:georeference-any-projection).

**Disegnare e modificare**

- **Sposta, Allinea e Distribuisci.** In {{ui:Build}}; {{key:Shift+M}} avvia Sposta (il semplice {{key:M}} resta Misura). Sposta copia mentre si procede con {{key:C}}, ogni passo è un annullamento, e agisce in una sessione Live TeamWork. Si veda [Spostare, copiare, allineare e distribuire](topic:move-align-distribute).
- **Immagini sotto la pianta.** {{ui:Build}} › {{ui:Immagine}} posiziona un PNG, JPEG o WebP sotto la pianta di un livello o su un piano verticale. Si imposta la scala con due punti, e si sposta, ruota, sfuma e blocca. Un'area copiata in MarkupCraft viene incollata alla scala del suo foglio. Si veda [Mettere un'immagine sotto la pianta](topic:pictures-as-backgrounds).
- **Muri da una scansione.** Con una scansione aperta, muri, porte e locali arrivano come proposte da mantenere o rifiutare una per una, in un solo passo di annullamento. Si trovano solo muri in due direzioni perpendicolari. Si veda [Trasformare una scansione in muri](topic:scan-to-walls).
- **Ricalco, penne e scala da schizzo.** {{ui:Ricalca}} mostra un altro livello tratteggiato sotto la pianta, {{ui:Penne}} assegna a muri, porte e finestre un proprio spessore di linea in una sola vista, e {{ui:Schizza scala}} trasforma una linea di percorso in una scala. Si apre una mesh Wavefront OBJ. Si veda [Ricalcare un livello, penne e una scala da uno schizzo](topic:trace-pens-stairs-obj).
- **Edifici attorno a un indirizzo.** Gli edifici e la particella trovati da Indirizzo al sito di CivilCraft arrivano come suggerimenti; si spuntano quelli da aggiungere. Si veda [Partire dal sito di CivilCraft](topic:site-from-civilcraft).
- **Disegni dei pannelli.** {{ui:Build}} › {{ui:Disegni dei pannelli}} incornicia muri, solai e tetti in legno o in acciaio leggero, e salva un elenco di taglio come CSV e i disegni di officina come PDF. Sono valori di partenza, non un progetto strutturale. Si veda [Disegni dei pannelli](topic:panel-drawings).
- **Tavolozza dei simboli e piante.** {{ui:Build}} › {{ui:Tavolozza simboli}} trova simboli elettrici e idraulici per nome; la fonte {{ui:Piante}} della {{ui:Libreria}} elenca circa 400 piante con simboli in pianta. Si veda [Tavolozza dei simboli](topic:symbol-palette) e [Posizionare una pianta](topic:plant-list).

**Tubazioni, condotte ed energia**

- **Split, VRF e fan coil.** Unità interne ed esterne con i loro collegamenti, e linee dimensionate da una tabella di valori tipici di esempio che si possono modificare. Si veda [Split, VRF e fan coil](topic:split-vrf-fan-coils).
- **Calcoli.** Il pannello Calcoli verifica le dimensioni di tubi e condotte di mandata con la perdita di carico, instrada i cavi attraverso passerelle e tubi e ne mostra il riempimento, e calcola l'illuminamento da file IES o EULUMDAT. I valori predefiniti sono indicati come tali; digitare i valori della normativa applicabile. Si veda [Calcoli di tubi, condotte, cavi e luci](topic:mep-calculations).
- **File PCF.** Il comando **Esporta PCF** dello strumento Tubo scrive i tratti per i programmi di analisi delle tensioni e di isometrici, e un file PCF letto di nuovo disegna il suo tubo. Si veda [File dei componenti di tubazione](topic:piping-pcf).
- **Fotovoltaico.** Installare stringhe su tetti o a terra, ombreggiarle dal modello, stimare l'energia annua, verificare le stringhe e produrre dati per lo schema unifilare. Il modulo di partenza e le perdite sono generici. Si veda [Fotovoltaico](topic:solar-pv).
- **File EnergyPlus.** Il pannello Verifica con EnergyPlus scrive il modello come IDF da eseguire in un'installazione di EnergyPlus. Eseguirlo nel browser richiede una build ospitata da chi la usa e l'indirizzo da digitare; BimCraft non la include. Si veda [Verificare riscaldamento e raffrescamento con EnergyPlus](topic:check-with-energyplus).

**Immagini e file**

- **Scegliere il motore di render.** {{ui:Render}} ha una scelta {{ui:Motore}}. I nostri due motori integrati (Veloce e Traccia di percorso) restano quelli predefiniti. **Apri in** salva la scena come file USD o glTF, e una cartella di progetto Unreal come .zip; in CadCraft Studio un add-on può aggiungere un motore. Il plug-in Unreal che apre il progetto non è stato rilasciato. Si veda [Scegliere quale programma disegna l'immagine](topic:render-engines).
- **Annulla in Studio.** In CadCraft Studio, BimCraft comunica a Studio ogni passo completato, così Studio può annullare l'ultimo passo nella finestra usata per ultima. Si veda [Annullare tra le app](topic:undo-across-apps).
- **Add-on nel file.** Un IFC registra quali add-on vi hanno scritto, e propone quelli mancanti all'apertura. Si veda [Add-on nel file](topic:add-ons-in-your-file).

**In ogni app**

- **Collegare la propria IA.** Un assistente IA può guidare BimCraft attraverso il collegamento di Studio e rispondere a domande sul modello, per esempio quali locali si trovano sotto una data superficie. Studio non ha un'IA propria. Si veda [Far lavorare un assistente IA con il modello](topic:assistants).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generale}} › {{ui:Righe della barra degli strumenti}} offre A capo, 2 righe o 1 riga; A capo resta il predefinito.
- **Dispositivi di input.** Le impostazioni di trackpad, penna, mouse 3D, controller e MIDI sono condivise da tutte le app.
- **Problemi e Live.** Il pannello degli avvisi e le sessioni Live funzionano come prima, con i nuovi controlli sopra che alimentano i Problemi.
- **Lingue.** 54 lingue, di cui dieci nuove. Quelle diverse dall'inglese sono bozze automatiche non ancora riviste da un madrelingua; le guide sono per lo più in inglese.

### Corretto in 0.8.1

- **Layout a barra multifunzione e Browser di progetto.** Inserisci › Importa CAD, Inserisci › Immagine e Gestisci › Unità di progetto dicevano "Non ancora implementato in BimCraft". Ora Immagine apre lo strumento Immagine, Importa CAD apre {{ui:Build}} › {{ui:Da un disegno…}} (DWG, DXF, PDF o una scansione), e Unità di progetto apre {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Unità}}. Sposta e Allinea avviano gli strumenti Sposta e Allinea, Livello apre {{ui:Aggiungi livelli…}}, Fasi apre la sezione delle fasi di ristrutturazione e Materiali apre la libreria dei materiali.
- **Sezione classi DWG.** Era letta come tipo sbagliato; corretto in BimCraft e nelle altre app che leggono DWG.
- **Lingua durante l'esecuzione.** Studio e le edizioni impacchettate ora possono cambiare lingua senza riavvio. Non è ancora verificato su tutte le piattaforme; segnalare se la lingua non cambia.
- **Script di bundle Archicad.** `archicad_bundle.py`, un download separato, ora trova il percorso di Archicad, osserva la cartella per fino a 20 secondi e riprova accanto al bundle.

### Non ancora in questa versione

- **Strumenti di sicurezza e progetto.** Persone nell'edificio non ha un limite di distanza di percorrenza da un codice edilizio (lo si digita) e non è stato verificato a mano su una pianta reale. I valori di acustica, ciclo di vita e pericolo sono valori di pianificazione, non una verifica normativa.
- **Clima futuro ed EnergyPlus.** Nessun clima futuro integrato: si può caricare un file di scenario per la simulazione di alluvione. La simulazione EnergyPlus nel browser non fa parte di questa versione.
- **Layout a barra multifunzione.** Computo materiali resta "Non ancora implementato" perché BimCraft non ha un elenco delle quantità di materiali, e altri 54 strumenti grigi della barra non hanno ancora uno strumento BimCraft dietro.
- **Firma e piattaforme.** I programmi di installazione per Windows e il .dmg per macOS non sono firmati, quindi SmartScreen mostra {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}, e macOS richiede clic destro e poi {{ui:Aperta}}. La build per iPad e iPhone non è stata ricompilata per la 0.8.1.
- **Test sulle pagine reali.** Alcuni vecchi test del browser di BimCraft falliscono ancora nella nostra pagina di prova, come prima della 0.8.1.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Le modifiche precedenti sono in [Novità nella 0.7](topic:whats-new-0-7).
