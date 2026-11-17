---
title: Novità della 0.9
summary: Forme dei muri, divisione, offset, stiramento e blocco su griglia, livelli sotto terra, quote di griglia e Misura sulla pianta, viste duplicate con stili di lavoro e tabelle di penne, Segnala come, esportazione Collada e Google Earth, Scan to BIM, analisi del vento e sismica, add-on per la stampa a resina.
keywords: novità, 0.9, note di rilascio, forme dei muri, rettangolo, poligono, arco, scegli linee, ricalca contorno, offset, unione, stiramento a riquadro, allinea e blocca, dividi muro, spazio, ricongiungi, blocca alla griglia, cresci da, misura da, aggiungi un livello sotto, seminterrato, comando livello, quote di griglia, misura sulla pianta, stile di lavoro, duplica vista, copia autonoma, vista collegata, tabella di penne, stampa come vista, segnala come, scala digitata, importa svg, posiziona nel piano, posiziona nel modello, collada, dae, kmz, google earth, scan to bim, carico del vento, sismica, elementi finiti, pannello dei documenti, stampa a resina, novità, changelog, modifiche, 0.8, 0.8.1, versione, nuove funzioni, evacuazione, persone, code, acustica, tempo di riverbero, risposta all'impulso, alluvione, vento, terremoto, pericolo, ciclo di vita, vita utile, ids, tag, abachi, sposta, allinea, distribuisci, immagine, sfondo, da scansione a muri, sito da civilcraft, disegni di pannelli, ossatura, solare, fotovoltaico, dividi, vrf, ventilconvettore, dimensionamento tubazioni, passerella per cavi, illuminamento, calcestruzzo, sismica, confronta scansione, epsg, proiezione, documenti, modello, carbonio, costo, energyplus, motore di render, apri in, usd, glb, unreal, annulla, add-on, pcf, simboli, impianti, traccia, penne, barra multifunzione, browser di progetto, layout
from: 5624fe88
---

Questo è ciò che è cambiato in BimCraft 0.9, rispetto alla 0.8.1. I due temi principali sono uno strumento Parete davvero completo e viste che si comportano come le persone che vengono dai grandi programmi BIM si aspettano. Intorno ad essi ci sono l'esportazione Collada, assistenti che possono collocare dispositivi elettrici, Scan to BIM, e analisi del vento, sismica ed elementi finiti nella scheda {{ui:Analisi}}.

## Novità

### Muri

- **Disegnare forme complete.** In {{ui:Disegna}}, aprire {{ui:Forme}} (oppure scegliere una forma nell'elenco Forma della riga Parete) per un rettangolo, un rettangolo ruotato, un poligono da 3 a 64 lati, un arco per centro, un arco tangente, muri su linee scelte, o muri intorno a un'area chiusa su cui si fa clic all'interno. Un rettangolo sono quattro muri con quattro angoli uniti e un solo passo di annullamento. Vedere [Forme dei muri, divisione, offset, stiramento e blocco](topic:wall-tools).
- **Impostare prima di disegnare, cambiare dopo.** La riga Parete ha {{ui:Distanza}} e {{ui:Unione}} (disattivarla per disegnare muri isolati). Dopo, usare {{ui:Distanza}}, {{ui:Stira a riquadro}} e {{ui:Allinea e blocca}} sui muri disegnati. Un muro spostato o stirato mantiene le sue porte, finestre e quote. Ogni ricetta è un passo di annullamento.
- **Tagliare i muri.** {{ui:Dividi}}, {{ui:Spazio}}, {{ui:Estremità libere}}, {{ui:Elimina segmento}} e {{ui:Ricongiungi}} tagliano un muro con un clic o dove un altro muro lo attraversa. Un taglio attraverso una porta viene rifiutato. Vedere [Forme dei muri, divisione, offset, stiramento e blocco](topic:wall-tools).
- **Bloccare i muri alle linee di griglia.** Selezionare un muro lungo una linea di griglia e spuntare {{ui:Blocca alla griglia}} in {{ui:Proprietà}}. Con lo strumento Griglia attivo, digitare una distanza in {{ui:Sposta di}} per una linea scelta, e i muri bloccati seguono in un unico passo di annullamento.
- **Dare forma a un muro.** In {{ui:Proprietà}} di un muro si può agganciare la sua sommità o base a un tetto, un solaio o un soffitto, modificare il suo contorno in alzato, inclinarlo, oppure praticare un'apertura nel muro senza porta o finestra. Vedere [Modellare un muro](topic:wall-shape).
- **La lunghezza dice quale estremità resta ferma.** {{ui:Cresci da}} stabilisce se l'inizio, la fine o il centro restano fermi quando si cambia la lunghezza.
- **Lunghezza e quota in pianta concordano.** {{ui:Misura da}} (linea di mezzeria, faccia interna o faccia esterna) guida sia il campo Lunghezza sia le quote dei muri in pianta. Parte dalla linea di mezzeria, quindi le quote dei muri in pianta ora leggono la linea di mezzeria dove prima leggevano la faccia esterna. Si cambia nella riga Parete, in {{ui:Proprietà}} oppure in {{ui:Impostazioni}} › {{ui:BimCraft}} › {{ui:Muri}}.

### Livelli, griglie e misure

- **Aggiungere un livello sotto.** {{ui:Aggiungi un livello sotto}} nel pannello {{ui:Livelli}} aggiunge un livello sotto il più basso, alto quanto esso, a una quota negativa (Livello -1, Livello -2). Nient'altro si sposta. {{ui:Aggiungi livelli…}} ora accetta altezze negative. Digitare LEVEL, LEVELS, STOREY o STOREYS sulla riga di comando apre {{ui:Aggiungi livelli…}}, e c'è un pulsante {{ui:Livelli}} nei menu e nelle schede della barra multifunzione. Vedere [Siti, edifici e livelli](topic:site-building-and-levels).
- **Quote di griglia in pianta.** Con lo strumento {{ui:Griglia}} attivo, spuntare {{ui:Quote}} per disegnare l'interasse tra linee vicine e la dimensione complessiva oltre i cerchietti, su ogni pianta di livello. Vedere [Quotare una griglia](topic:grid-dimensions).
- **Misurare sulla pianta.** {{ui:Misura}} nel gruppo {{ui:Disegna}} dà una distanza con le differenze X e Y tra due clic. Nulla viene salvato nel modello. Vedere [Misurare sulla pianta](topic:measure-on-the-plan).
- **Cambiare più colonne insieme.** Scegliere colonne insieme a un muro e l'elenco mostra ciascun tipo con {{ui:Mantieni solo questi}}. Un clic mantiene le colonne e mostra i loro campi comuni.
- **Una sola unità di visualizzazione ovunque.** Coordinate, misure, sezioni, scale dei fogli, carichi e risultati della scheda telaio e il testo dei Problemi seguono l'unità scelta. Le esportazioni restano SI.

### Viste, tavole e stampa

- **Stile di lavoro.** {{ui:Impostazioni}} › {{ui:BimCraft}} › {{ui:Stile di lavoro}} sceglie se ogni vista ha le sue annotazioni e tabelle di penne, oppure le condivide. Vedere [Stile di lavoro, viste duplicate, penne su carta, Segnala come e modelli](topic:working-style).
- **Duplicare una vista.** Piante, piante del soffitto, richiami, prospetti e sezioni possono essere duplicati come {{ui:Copia autonoma}} oppure {{ui:Collegato}}; {{ui:Rendi copia autonoma}} rende indipendente una copia collegata. Vedere [Stile di lavoro, viste duplicate, penne su carta, Segnala come e modelli](topic:working-style).
- **Stampare come si vede, oppure con una tabella di penne.** Le sostituzioni delle penne sono mantenute nell'IFC con la vista, e tavole e PDF le disegnano come lo schermo. Lo stesso argomento copre le tabelle di penne.
- **Segnala come.** {{ui:Segnala come}} in {{ui:Proprietà}} scrive nell'IFC un solaio disegnato come strada, un muro come pannello o un tetto come rampa, con la classe scelta, e lo conta così in abachi, quantità, Trova, Colora per e Problemi.
- **Modificare nei prospetti e nelle sezioni.** Disegnare e spostare muri, aperture, livelli, quote e note direttamente in un prospetto o in una sezione, con le proprie dimensioni di foglio e i propri cartigli. Vedere [Modificare in prospetti e sezioni](topic:edit-in-elevations).
- **Fogli.** Ogni foglio può essere orizzontale o verticale. Una casella {{ui:Digitare una scala}} sta accanto all'elenco delle scale su ogni vista collocata (1:64, 2:1, 1/4" = 1'). Si può trascinare un disegno collocato o spostarlo con i tasti freccia, e {{ui:Formati…}} › {{ui:Importa SVG…}} trasforma il proprio disegno di foglio in un cartiglio con campi digitati per foglio.
- **Crediti della libreria su un foglio.** Un insieme di disegni con elementi di libreria ottiene un abaco dei crediti della libreria che si può collocare su qualunque foglio. Vedere [Crediti della libreria](topic:library-credits).

### Libreria: collocamento

- **Il collocamento segue la vista.** Nella vista Pianta la Libreria mostra {{ui:Posiziona nel piano}}; in 3D mostra {{ui:Posiziona nel modello}}; in Divisa mostra un pulsante diviso con {{ui:Posiziona nel piano}} come azione principale. Entrambi i modi scrivono lo stesso elemento IFC. Si può anche trascinare una scheda della Libreria sulla pianta o sulla vista 3D; con una penna o un dito, premere e tenere, poi trascinare. Vedere [Collocare dalla Libreria](topic:place-from-library).

### File e assistenti

- **Collada e Google Earth.** {{ui:Collada}} nella barra degli strumenti (menu File negli stili di menu) scrive un .dae, oppure un .kmz collocato dove si trova il modello sulla mappa. Vedere [Esportare il modello come Collada o per Google Earth](topic:collada).
- **Gli assistenti possono collocare dispositivi elettrici.** Il proprio assistente collegato ha nuovi strumenti per aggiungere, elencare, cambiare ed eliminare dispositivi e per impostare le luci. Gli assistenti restano disattivati finché non li si attiva in {{ui:Impostazioni}}. Vedere [Lasciare che un assistente IA lavori con il tuo modello](topic:assistants).
- **Scan to BIM (add-on).** Disattivato di default e richiede l'add-on Nuvole di punti. Propone solai, muri, porte e finestre da una scansione con la deviazione misurata per ciascuno; accettare è un unico passo di annullamento.

### Analisi

- **Dati di vento e sismici del sito.** Nella scheda {{ui:Analisi}}: carichi del vento secondo ASCE 7-10 o 7-16 per un edificio rigido chiuso, con una forza su ogni piano come casi di carico, e dati sismici del sito con una ricerca USGS e lo spettro di progetto.
- **Seguito strutturale ed elementi finiti.** Verifiche del calcestruzzo secondo ACI 318-19, forze laterali equivalenti secondo ASCE 7-22, deriva di piano, solai e muri come piastre, e combinazioni di carico da ASCE 7 e EN 1990. Il nostro motore di elementi finiti fa gusci, tetraedri e analisi modale. Vedere [Verificare elementi in calcestruzzo e creare carichi sismici](topic:concrete-and-seismic) e [Analisi di telai](topic:frame-analysis).

### Altri add-on e documenti

- **Illuminazione interna (add-on).** Colloca apparecchi di illuminazione e scrive il lux come numeri nella pianta di ogni livello, con una stima dell'abbagliamento e un rapporto stampabile.
- **Pannello dei documenti.** {{ui:File}} › {{ui:Documenti…}} ha prelievo e restituzione con un file di blocco, lettere di revisione, stati di rilascio e cronologia.
- **Regioni e acciaio.** Pacchetti di disegno e di regolamento edilizio sudafricani nell'add-on Regolamenti, e 976 misure di acciaio britanniche nella tabella delle sezioni condivisa.
- **Add-on gratuiti per la stampa a resina.** Slicer, supporti e zattera, test di esposizione, e i formati di file GOO, SL1, Chitubox e Anycubic, tutti disattivati di default.

## In ogni app

- Passando il mouse su un pulsante o un controllo compare un suggerimento Bootstrap.
- Il suggerimento di avvio su un'area di disegno vuota ha un pulsante di chiusura; BimCraft ricorda che è stato chiuso.
- La barra delle schede di un pannello che non ci sta ora scorre invece di essere tagliata.
- Con un documento aperto la scheda del browser dice "<documento> - BimCraft | CadCraft".
- In {{ui:Impostazioni}} › {{ui:Generale}} › {{ui:Layout}} i layout sono un menu a tendina di scelte a due righe.
- L'elenco delle lingue in {{ui:Impostazioni}} offre più lingue rispetto alla 0.8; le lingue diverse dall'inglese sono bozze automatiche.

## Corretto

- **Lo spostamento funziona su scale,** e su rampe, ringhiere, piani di tetto, dispositivi isolati, immagini e percorsi.
- **Trascinare un muro non deforma più il locale.** La maniglia centrale sposta il muro perpendicolarmente a sé stesso e i suoi angoli scorrono lungo i muri uniti. Tenere premuto {{key:Mod}} per lo spostamento libero di prima; {{ui:Squadra}} riporta i 90 gradi.
- **Un cambio di spessore o di tipo in un nodo unito** ora mantiene chiuso l'angolo in una L, in una T, in un nodo a tre muri e accanto a un muro curvo.
- **Spostare o copiare un gruppo di locali** mantiene uniti fuori dal gruppo i muri uniti.
- **Ripetere mantiene l'identità di una quota di muro.**
- **Scegliere un muro con Disegna disattivato** non genera più un errore in Proprietà.
- **Il render passa a WebGL** quando la GPU non può avviarsi, invece di fermarsi.
- **Il controllo EnergyPlus può essere riattivato.**
- **Documenti si apre come finestra di dialogo centrata.** {{key:Esc}}, la X o un clic sulla pagina oscurata la chiudono.
- **I pulsanti {{ui:Pianta}}, {{ui:Divisa}} e {{ui:3D}} compaiono** appena un modello è aperto, non solo dopo aver attivato Disegna almeno una volta.

## Limiti dichiarati

- Nulla è stato stampato su hardware reale. I supporti in resina sono nuovi e non ancora provati.
- I risultati di vento, sismica, calcestruzzo ed elementi finiti sono strumenti di verifica per un ingegnere, controllati su forme chiuse, non su un edificio reale.
- Scan to BIM è stato provato su un edificio sintetico, non su una scansione reale, e trova solo locali rettilinei.
- Collada non è stato aperto qui in Blender o in Google Earth.
- La stima dell'illuminazione è verificata con il nostro tracciamento, non con altri programmi di illuminazione.
- I numeri sudafricani non sono verificati.
- Gli stili di unione dei muri (a battuta, mitra, taglio a squadra) e la priorità dei layer non sono ancora realizzati; gli angoli sono a mitra.
- Le lingue diverse dall'inglese sono bozze automatiche.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Le modifiche precedenti sono nelle note 0.8 e 0.8.1 più in basso in questa pagina.

## Precedenti: 0.8 e 0.8.1

Questo è ciò che è cambiato in BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. BimCraft ora può rispondere a domande su un edificio e metterlo alla prova, con persone, suono, acqua, vento e terremoti, e lo disegna con più strumenti; la 0.8.1 è una versione di correzione.

### Novità

**Mettere alla prova l'edificio**

- **Persone nell'edificio.** La sezione {{ui:Persone nell'edificio}} del pannello sinistro fa camminare un'evacuazione o l'arrivo di una normale giornata attraverso le stanze, le porte e le scale. Si vedono le code dove l'edificio si restringe, la camminata più lunga verso un'uscita da ogni locale e quanto impiega l'ultima persona. Spuntare {{ui:Chiusa}} su una porta per vedere cosa cambia, e spuntare {{ui:Mostra le persone nella vista 3D}} per osservare chi cammina. I risultati vanno ai Problemi. È un modello sommario di folla per decisioni di progetto, non un certificato di sicurezza antincendio. Vedere [Far camminare le persone nell'edificio](topic:people-in-the-building).
- **Acustica dei locali, e ascoltarla.** La sezione {{ui:Acustica dei locali}} dà il tempo di riverbero di ogni locale per banda d'ottava (Sabine ed Eyring) dalla sua dimensione e dalle finiture scelte, e con un obiettivo proprio dice quanto assorbimento servirebbe per raggiungerlo. {{ui:Riproduci in questo locale}} riproduce una voce, un battito di mani, note pizzicate o un proprio file audio attraverso una risposta all'impulso calcolata per il locale. I valori di assorbimento sono valori pubblicati tipici da sostituire con i propri. Vedere [Acustica dei locali](topic:room-acoustics).
- **Riproduzione di alluvioni, vento e terremoti.** {{ui:Riproduzione di un evento pericoloso}} riproduce l'acqua che sale nei locali, la pressione del vento su ogni piano e un terremoto che scuote i piani, su una pianta o un prospetto con un cursore temporale. Modelli semplici con le loro ipotesi sul pannello; non una verifica normativa. Vedere [Riprodurre un'alluvione, il vento o un terremoto](topic:hazard-playback).
- **Cosa si consuma in cinquant'anni.** {{ui:Vista del ciclo di vita}} elenca finestre, porte, finiture e tetto con una vita utile ciascuno, gli anni in cui vengono sostituiti e, quando si digita un costo unitario, il costo per anno e il suo valore attuale. {{ui:Salva il programma (CSV)}} lo scrive. Le vite utili sono valori di pianificazione. Vedere [Vedere cosa si consuma in cinquant'anni](topic:life-cycle-view).
- **Verifiche del calcestruzzo e sismiche.** Le sezioni {{ui:Elementi in calcestruzzo}} e {{ui:Carichi sismici}} della scheda {{ui:Analisi}} verificano travi e pilastri in calcestruzzo secondo ACI 318-19 e creano forze laterali equivalenti secondo ASCE 7-22 su solai rigidi, con la deriva di piano. Per la verifica di un ingegnere. Vedere [Verificare elementi in calcestruzzo e creare carichi sismici](topic:concrete-and-seismic).

**Verificare e riportare**

- **Verifica con un IDS.** Caricare il file `.ids` che un cliente ha fornito e vedere in Problemi ogni elemento che non lo soddisfa, prima di consegnare l'IFC. Aprire {{ui:Verifica con un IDS}} sotto {{ui:Controlli del modello}}. Vedere [Verificare un modello con l'IDS di un cliente](topic:check-against-ids).
- **Tag e abachi.** Definire i propri tag, impostarli su molti elementi insieme e creare abachi le cui colonne, filtri e gruppi li leggono; i tag sono conservati nell'IFC. Vedere [Tag e abachi](topic:tags-and-schedules).
- **Documenti dal modello.** {{ui:Documenti dal modello}} riempie un modello di capitolato con l'IFC aperto e lo salva come PDF, documento Word o Markdown. Vedere [Documenti dal modello](topic:documents-from-the-model).
- **Confrontare una scansione con il modello.** Con una nuvola di punti aperta, {{ui:Confronta}} giudica ogni elemento come costruito, parzialmente costruito, mancante o non raggiunto, e mostra la percentuale costruita. Vedere [Confrontare una scansione con il modello](topic:compare-scan-with-model).
- **Carbonio e costo.** Il pannello Carbonio somma il carbonio incorporato da una tabella di fattori modificabile, e il pannello Costo distribuisce i prezzi sul programma 4D. I fattori che vengono con BimCraft sono generici e segnati come non verificati. Vedere [Carbonio incorporato e costo](topic:embodied-carbon-and-5d-cost).
- **Qualunque proiezione cartografica.** {{ui:Misura}} › {{ui:Sistema di coordinate…}} accetta un numero EPSG, una zona UTM, un nome o una propria definizione di proiezione. Vedere [Georeferenziare con qualunque proiezione](topic:georeference-any-projection).

**Disegnare e modificare**

- **Sposta, Allinea e Distribuisci.** Sotto {{ui:Build}}; {{key:Shift+M}} avvia Sposta (la semplice {{key:M}} è ancora Misura). Sposta copia mentre si procede con {{key:C}}, ogni passo è un annullamento, e viaggia in una sessione Live TeamWork. Vedere [Spostare, copiare, allineare e distribuire](topic:move-align-distribute).
- **Immagini sotto la pianta.** {{ui:Build}} › {{ui:Immagine}} colloca un PNG, JPEG o WebP sotto la pianta di un livello o su un piano verticale. Si imposta la scala con due punti, e si può spostare, ruotare, sfumare e bloccare. Un'area copiata in MarkupCraft viene incollata alla scala del suo foglio. Vedere [Mettere un'immagine sotto la pianta](topic:pictures-as-backgrounds).
- **Muri da una scansione.** Con una scansione aperta, muri, porte e locali arrivano come proposte che si mantengono o si rifiutano una per una, in un unico passo di annullamento. Si trovano solo muri in due direzioni perpendicolari. Vedere [Trasformare una scansione in muri](topic:scan-to-walls).
- **Ricalco, penne e scala da schizzo.** {{ui:Ricalca}} mostra un altro livello tratteggiato sotto la pianta, {{ui:Penne}} dà a muri, porte e finestre il proprio spessore di linea in una sola vista, e {{ui:Scala da schizzo}} trasforma una linea di percorso in una scala. Si apre una mesh Wavefront OBJ. Vedere [Ricalcare un livello, penne e una scala da uno schizzo](topic:trace-pens-stairs-obj).
- **Edifici intorno a un indirizzo.** Gli edifici e la particella trovati da Indirizzo al sito di CivilCraft arrivano come suggerimenti; spuntare quelli da aggiungere. Vedere [Partire dal sito di CivilCraft](topic:site-from-civilcraft).
- **Disegni di pannelli.** {{ui:Build}} › {{ui:Disegni dei pannelli}} inquadra muri, solai e tetti in legno o in acciaio leggero e salva una distinta di taglio come CSV e disegni esecutivi come PDF. Valori di partenza, non un progetto strutturale. Vedere [Disegni dei pannelli](topic:panel-drawings).
- **Tavolozza dei simboli e impianti.** {{ui:Build}} › {{ui:Tavolozza simboli}} trova i simboli elettrici e idraulici per nome; la sorgente {{ui:Impianti}} della {{ui:Libreria}} elenca circa 400 impianti con simboli di pianta. Vedere [Tavolozza dei simboli](topic:symbol-palette) e [Collocare un impianto](topic:plant-list).

**Tubazioni, canali ed energia**

- **Split, VRF e ventilconvettori.** Unità interne ed esterne con i loro collegamenti, e linee dimensionate da una tabella di valori tipici d'esempio che si possono modificare. Vedere [Split, VRF e ventilconvettori](topic:split-vrf-fan-coils).
- **Calcoli.** Il pannello Calcoli verifica il dimensionamento di tubazioni di mandata e canali con la perdita di carico, instrada cavi attraverso passerelle e condotti e ne mostra il riempimento, e calcola l'illuminamento da file IES o EULUMDAT. I valori predefiniti sono etichettati; digitare i valori del proprio regolamento. Vedere [Calcoli di tubazioni, canali, cavi e luce](topic:mep-calculations).
- **File PCF.** Il comando {{ui:Esporta PCF}} dello strumento Tubazione scrive le tratte per i programmi di sollecitazione delle tubazioni e le isometriche, e un file PCF riletto disegna la sua tubazione. Vedere [File di componenti di tubazione](topic:piping-pcf).
- **Fotovoltaico.** Installare schiere su tetti o a terra, ombreggiarle dal modello, stimare l'energia annua, verificare le stringhe e creare i dati dello schema unifilare. Il modulo e le perdite di partenza sono generici. Vedere [Fotovoltaico](topic:solar-pv).
- **File EnergyPlus.** Il pannello Verifica con EnergyPlus scrive il modello come IDF da eseguire nel proprio EnergyPlus. Eseguirlo nel browser richiede una versione che si ospita e di cui si digita l'indirizzo; BimCraft non la include. Vedere [Verificare riscaldamento e raffrescamento con EnergyPlus](topic:check-with-energyplus).

**Immagini e file**

- **Scegliere il motore di render.** {{ui:Render}} ha una scelta {{ui:Motore}}. I nostri due motori integrati (Veloce e Path tracer) restano il predefinito. {{ui:Apri in}} salva la scena come file USD o glTF, e una cartella di progetto Unreal come .zip; in CadCraft Studio un add-on può aggiungere un motore. Il plug-in Unreal che apre il progetto non è stato rilasciato. Vedere [Scegliere quale programma disegna l'immagine](topic:render-engines).
- **Annullamento in Studio.** All'interno di CadCraft Studio, BimCraft comunica a Studio ogni passo completato, così Studio può annullare l'ultimo passo nella finestra usata per ultima. Vedere [Annullare tra app](topic:undo-across-apps).
- **Add-on nel proprio file.** Un IFC registra quali add-on vi hanno scritto, e propone quelli che mancano quando lo si apre. Vedere [Add-on nel proprio file](topic:add-ons-in-your-file).

**In ogni app**

- **Collegare la propria IA.** Il proprio assistente può guidare BimCraft tramite la connessione di Studio e rispondere a domande sul modello, per esempio quali locali sono sotto una data superficie. Studio non ha una IA propria. Vedere [Lasciare che un assistente IA lavori con il tuo modello](topic:assistants).
- **Barre degli strumenti.** {{ui:Impostazioni}} › {{ui:Generale}} › {{ui:Righe della barra degli strumenti}} offre A capo, 2 righe o 1 riga; A capo resta il predefinito.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller e impostazioni MIDI sono condivisi da tutte le app.
- **Problemi e Live.** Il pannello degli avvisi e le sessioni Live funzionano come prima, con i nuovi controlli sopra che alimentano i Problemi.
- **Lingue.** 54 lingue, dieci delle quali nuove. Quelle diverse dall'inglese sono bozze automatiche non ancora lette da un madrelingua; gli argomenti di guida sono per lo più in inglese.

### Corretto nella 0.8.1

- **Layout a barra multifunzione e browser di progetto.** Inserisci › Importa CAD, Inserisci › Immagine e Gestisci › Unità di progetto diceva "Non ancora realizzato in BimCraft". Ora Immagine apre lo strumento Immagine, Importa CAD apre {{ui:Build}} › {{ui:Da un disegno…}} (DWG, DXF, PDF o una scansione), e Unità di progetto apre {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Unità}}. Sposta e Allinea avviano gli strumenti Sposta e Allinea, Livello apre {{ui:Aggiungi livelli…}}, Fasi apre la sezione delle fasi di ristrutturazione, e Materiali apre la libreria dei materiali.
- **Sezione delle classi DWG.** Era letta come il tipo sbagliato; corretta in BimCraft e nelle altre app che leggono DWG.
- **Lingua durante l'esecuzione.** Studio e le edizioni confezionate ora possono cambiare lingua senza riavviarsi. Non ancora provato su ogni piattaforma; segnalare se la lingua non cambia.
- **Script del pacchetto Archicad.** `archicad_bundle.py`, un download a parte, ora trova il percorso di Archicad, osserva la cartella per fino a 20 secondi e riprova accanto al pacchetto.

### Non ancora in questa versione

- **Strumenti di sicurezza e di progetto.** Persone nell'edificio non ha un limite di distanza di percorrenza da un regolamento edilizio (lo si digita) e non è stato verificato a mano su una pianta reale. I valori di acustica, ciclo di vita e pericoli sono valori di pianificazione, non una verifica normativa.
- **Scenari climatici ed EnergyPlus.** Nessuno scenario climatico integrato: si può caricare un file di scenario per la simulazione di alluvione. La simulazione EnergyPlus nel browser non fa parte di questa versione.
- **Layout a barra multifunzione.** Distinta dei materiali resta "Non ancora realizzato" perché BimCraft non ha un elenco delle quantità di materiali, e altri 54 strumenti grigi della barra non hanno ancora uno strumento BimCraft dietro di sé.
- **Firma e piattaforme.** Gli installatori Windows e il .dmg macOS non sono firmati, quindi SmartScreen mostra {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}, e macOS richiede clic destro e poi {{ui:Apri}}. La versione per iPad e iPhone non è stata ricompilata per la 0.8.1.
- **Prove su pagine reali.** Alcune prove del browser di BimCraft più vecchie falliscono ancora nella nostra pagina di prova, come prima della 0.8.1.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Le modifiche della 0.7 sono in [Novità della 0.7](topic:whats-new-0-7).
