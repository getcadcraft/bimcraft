---
title: Novità in 0.8 e 0.8.1
summary: BimCraft aggiunge persone che percorrono l'edificio, acustica dei locali da ascoltare, riproduzione di alluvione, vento e terremoto, una vista del ciclo di vita cinquantennale, verifiche con un IDS, tag e abachi, Sposta, Allinea e Distribuisci, immagini sotto la pianta, muri da una scansione, disegni dei pannelli, solare, sistemi split e VRF, dimensionamento di tubi e cavi, verifiche su calcestruzzo e sismica, qualsiasi proiezione cartografica, una scelta del motore di render e annulla in Studio; la 0.8.1 corregge gli strumenti grigi del layout a barra multifunzione.
keywords: novità, release notes, registro delle modifiche, modifiche, 0.8, 0.8.1, versione, nuove funzioni, evacuazione, persone, code, acustica, riverberazione, risposta impulsiva, alluvione, vento, terremoto, pericolo, ciclo di vita, vita utile, ids, tag, abachi, sposta, allinea, distribuisci, immagine, sfondo, scansione in muri, area da civilcraft, disegni dei pannelli, ossatura, solare, fv, split, vrf, fan coil, dimensionamento tubi, passerella portacavi, illuminamento, calcestruzzo, sismico, confronta scansione, epsg, proiezione, documenti, modello, carbonio, costo, energyplus, motore di render, apri in, usd, glb, unreal, annulla, add-on, pcf, simboli, piante, ricalca, penne, barra multifunzione, browser di progetto, layout
from: 87b03056
---

Questo è ciò che è cambiato in BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), rispetto alla 0.7. BimCraft ora può rispondere a domande su un edificio e metterlo alla prova, con persone, suono, acqua, vento e terremoti, e disegnarlo con più strumenti; la 0.8.1 è una versione di correzione.

## Novità

### Verificare l'edificio

- **Persone nell'edificio.** La sezione {{ui:Persone nell'edificio}} del pannello sinistro fa percorrere ai locali, alle porte e alle scale un'evacuazione o gli arrivi di una giornata normale. Si vedono le code dove l'edificio si restringe, il percorso più lungo verso un'uscita da ogni locale e quanto tempo impiega l'ultima persona. Spuntare {{ui:Chiusa}} su una porta per vedere cosa cambia, e spuntare {{ui:Mostra le persone nella vista 3D}} per osservare chi cammina. I risultati vanno in Problemi. È un modello di folla approssimativo per decisioni di progetto, non un certificato di sicurezza antincendio. Vedi [Far percorrere l'edificio alle persone](topic:people-in-the-building).
- **Acustica dei locali, e ascoltarla.** La sezione {{ui:Acustica dei locali}} indica il tempo di riverberazione di ciascun locale per banda d'ottava (Sabine ed Eyring) dalle sue dimensioni e dalle finiture scelte, e con un obiettivo proprio indica quanto assorbimento sarebbe necessario per raggiungerlo. {{ui:Riproduci in questo locale}} riproduce una voce, un battito di mani, note pizzicate o un proprio file audio attraverso una risposta impulsiva calcolata per il locale. I valori di assorbimento sono valori pubblicati tipici, da sostituire. Vedi [Acustica dei locali](topic:room-acoustics).
- **Riproduzione di alluvione, vento e terremoto.** {{ui:Riproduzione di un evento pericoloso}} mostra l'acqua che sale nei locali, la pressione del vento su ogni piano e un terremoto che scuote i piani, su una pianta o un prospetto con un cursore temporale. Sono modelli semplici, con le ipotesi nel pannello; non è una verifica normativa. Vedi [Riprodurre un'alluvione, il vento o un terremoto](topic:hazard-playback).
- **Cosa si logora in cinquant'anni.** {{ui:Vista del ciclo di vita}} elenca finestre, porte, finiture e tetto, ciascuno con una vita utile, gli anni in cui vengono sostituiti e, quando si digita un costo per unità, il costo per anno e il suo valore attuale. {{ui:Salva il programma (CSV)}} lo esporta. Le vite utili sono valori di pianificazione. Vedi [Vedere cosa si logora in cinquant'anni](topic:life-cycle-view).
- **Verifiche su calcestruzzo e sismica.** I blocchi {{ui:Elementi in calcestruzzo}} e {{ui:Carichi sismici}} della scheda {{ui:Analisi}} verificano travi e pilastri in calcestruzzo secondo ACI 318-19 e calcolano le forze orizzontali equivalenti secondo ASCE 7-22 su solai rigidi, con lo spostamento di piano. Da far verificare a un ingegnere. Vedi [Verificare elementi in calcestruzzo e calcolare i carichi sismici](topic:concrete-and-seismic).

### Verifiche e rapporti

- **Verifica con un IDS.** Caricare il file `.ids` ricevuto dal cliente e vedere in Problemi ogni elemento che non lo soddisfa, prima di consegnare l'IFC. Aprire {{ui:Verifica con un IDS}} sotto {{ui:Controlli del modello}}. Vedi [Verificare un modello con l'IDS di un cliente](topic:check-against-ids).
- **Tag e abachi.** Definire tag propri, assegnarli a molti elementi in una volta e creare abachi le cui colonne, filtri e gruppi li leggono; i tag sono conservati nell'IFC. Vedi [Tag e abachi](topic:tags-and-schedules).
- **Documenti dal modello.** {{ui:Documenti dal modello}} compila un modello di capitolato con l'IFC aperto e lo salva come PDF, documento Word o Markdown. Vedi [Documenti dal modello](topic:documents-from-the-model).
- **Confrontare una scansione con il modello.** Con una nuvola di punti aperta, {{ui:Confronta}} giudica ogni elemento come costruito, parzialmente costruito, mancante o non raggiunto, e mostra la percentuale costruita. Vedi [Confrontare una scansione con il modello](topic:compare-scan-with-model).
- **Carbonio e costo.** Il riquadro Carbonio somma il carbonio incorporato da una tabella di fattori modificabile, e il riquadro Costo distribuisce i prezzi sul programma 4D. I fattori forniti con BimCraft sono generici e segnati come non verificati. Vedi [Carbonio incorporato e costo](topic:embodied-carbon-and-5d-cost).
- **Qualsiasi proiezione cartografica.** {{ui:Misura}} › {{ui:Sistema di coordinate…}} accetta un numero EPSG, una zona UTM, un nome o una propria definizione di proiezione. Vedi [Georeferenziare con qualsiasi proiezione](topic:georeference-any-projection).

### Disegnare e modificare

- **Sposta, Allinea e Distribuisci.** Sotto {{ui:Build}}; {{key:Shift+M}} avvia Sposta (il semplice {{key:M}} resta Misura). Sposta copia durante il movimento con {{key:C}}, ogni passo è un solo annullamento e si propaga in una sessione Live TeamWork. Vedi [Sposta, copia, allinea e distribuisci](topic:move-align-distribute).
- **Immagini sotto la pianta.** {{ui:Build}} › {{ui:Immagine}} colloca un PNG, JPEG o WebP sotto la pianta di un livello o su un piano verticale. Si imposta la scala con due punti, e si può spostare, ruotare, sfumare e bloccare. Un'area copiata in MarkupCraft si incolla alla scala della sua tavola. Vedi [Mettere un'immagine sotto la pianta](topic:pictures-as-backgrounds).
- **Muri da una scansione.** Con una scansione aperta, muri, porte e locali arrivano come proposte da mantenere o scartare una per una, in un unico passo di annullamento. Si trovano solo muri in due direzioni perpendicolari. Vedi [Trasformare una scansione in muri](topic:scan-to-walls).
- **Ricalca, penne e schizza scala.** {{ui:Ricalca}} mostra un altro livello tratteggiato sotto la pianta, {{ui:Penne}} dà a muri, porte e finestre il proprio spessore di linea in un'unica vista, e {{ui:Schizza scala}} trasforma una linea di percorso in una scala. Si apre una mesh Wavefront OBJ. Vedi [Ricalcare un livello, penne e una scala da uno schizzo](topic:trace-pens-stairs-obj).
- **Edifici attorno a un indirizzo.** Gli edifici e la particella trovati da Indirizzo ad area di CivilCraft arrivano come suggerimenti; si spuntano quelli da aggiungere. Vedi [Partire dall'area di CivilCraft](topic:site-from-civilcraft).
- **Disegni dei pannelli.** {{ui:Build}} › {{ui:Disegni dei pannelli}} crea l'ossatura di muri, solai e tetti in legno o in acciaio leggero e salva una distinta di taglio in CSV e i disegni di officina in PDF. Sono valori di partenza, non un progetto strutturale. Vedi [Disegni dei pannelli](topic:panel-drawings).
- **Tavolozza simboli e piante.** {{ui:Build}} › {{ui:Tavolozza simboli}} trova per nome i simboli elettrici e idraulici; la fonte {{ui:Piante}} di {{ui:Libreria}} elenca circa 400 piante con simboli in pianta. Vedi [Tavolozza simboli](topic:symbol-palette) e [Inserire una pianta](topic:plant-list).

### Tubazioni, canali ed energia

- **Split, VRF e fan coil.** Unità interne ed esterne con i loro collegamenti, e linee dimensionate da una tabella di valori tipici d'esempio che si possono modificare. Vedi [Split, VRF e fan coil](topic:split-vrf-fan-coils).
- **Calcoli.** Il riquadro Calcoli verifica il dimensionamento di tubi e canali di mandata con la perdita di carico, instrada i cavi nelle passerelle e nelle canalizzazioni e ne mostra il riempimento, e calcola l'illuminamento da file IES o EULUMDAT. I valori predefiniti sono contrassegnati; digitare i valori della propria normativa. Vedi [Calcoli per tubi, canali, cavi e luci](topic:mep-calculations).
- **File PCF.** Lo strumento Tubo, **Esporta PCF**, scrive i tratti per i programmi di analisi delle sollecitazioni e per le isometriche, e un file PCF letto ridisegna il suo tubo. Vedi [File di componenti di tubazione](topic:piping-pcf).
- **Fotovoltaico.** Inserire campi su tetti o a terra, ombreggiarli dal modello, stimare l'energia annua, verificare le stringhe e produrre i dati per lo schema unifilare. Il modulo di partenza e le perdite sono generici. Vedi [Fotovoltaico](topic:solar-pv).
- **File EnergyPlus.** Il riquadro Verifica con EnergyPlus scrive il modello come IDF da eseguire nel proprio EnergyPlus. Eseguirlo nel browser richiede una build che si ospita da sé, di cui si digita l'indirizzo; BimCraft non la include. Vedi [Verificare riscaldamento e raffrescamento con EnergyPlus](topic:check-with-energyplus).

### Immagini e file

- **Scegliere il motore di render.** {{ui:Render}} ha una scelta {{ui:Motore}}. I nostri due motori integrati (Veloce e Tracciatore di percorso) restano quelli predefiniti. **Apri in** salva la scena come file USD o glTF, e una cartella di progetto Unreal come .zip; in CadCraft Studio un add-on può aggiungere un motore. Il plug-in Unreal che apre il progetto non è stato rilasciato. Vedi [Scegliere quale programma disegna l'immagine](topic:render-engines).
- **Annulla in Studio.** In CadCraft Studio, BimCraft comunica a Studio ogni passo completato, così Studio può annullare l'ultimo passo nella finestra usata per ultima. Vedi [Annullare tra le app](topic:undo-across-apps).
- **Add-on nel file.** Un IFC registra quali add-on vi hanno scritto, e propone quelli mancanti quando lo si apre. Vedi [Add-on nel file](topic:add-ons-in-your-file).

### In ogni app

- **Collegare la propria IA.** Il proprio assistente può guidare BimCraft tramite la connessione di Studio e rispondere a domande sul modello, come quali locali si trovano sotto una data superficie. Studio non ha una propria IA. Vedi [Lasciare che un assistente IA lavori con il modello](topic:assistants).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} offre A capo, 2 righe o 1 riga; A capo resta quello predefinito.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller e impostazioni MIDI sono condivisi da tutte le app.
- **Problemi e Live.** Il pannello degli avvisi e le sessioni Live funzionano come prima, con le nuove verifiche sopra che alimentano Problemi.
- **Lingue.** 54 lingue, dieci delle quali nuove. Quelle diverse dall'inglese sono bozze automatiche non ancora lette da un madrelingua; le guide sono per lo più in inglese.

## Corretto in 0.8.1

- **Layout a barra multifunzione e browser di progetto.** Inserisci › Importa CAD, Inserisci › Immagine e Gestisci › Unità di progetto dicevano "Non ancora implementato in BimCraft". Immagine ora apre lo strumento Immagine, Importa CAD apre {{ui:Build}} › {{ui:Da un disegno…}} (DWG, DXF, PDF o una scansione), e Unità di progetto apre {{ui:Impostazioni}} › {{ui:Globali}} › {{ui:Unità}}. Sposta e Allinea avviano gli strumenti Sposta e Allinea, Livello apre {{ui:Aggiungi livelli…}}, Fasi apre la sezione Fasi di ristrutturazione e Materiali apre la libreria dei materiali.
- **Sezione classi DWG.** Veniva letta come tipo sbagliato; corretto in BimCraft e nelle altre app che leggono DWG.
- **Lingua durante l'esecuzione.** Studio e le edizioni pacchettizzate ora possono cambiare lingua senza riavviare. Non ancora verificato su ogni piattaforma; segnalare se la lingua non cambia.
- **Script del bundle Archicad.** `archicad_bundle.py`, un download separato, ora trova il percorso di Archicad, osserva la cartella per fino a 20 secondi e riprova accanto al bundle.

## Non ancora presenti in questa versione

- **Strumenti di sicurezza e progettazione.** Persone nell'edificio non ha un limite di distanza di percorrenza da un codice edilizio (lo si digita) e non è stato verificato a mano su una pianta reale. Le cifre di acustica, ciclo di vita e pericolo sono valori di pianificazione, non una verifica normativa.
- **Scenari climatici futuri ed EnergyPlus.** Nessuno scenario climatico futuro integrato: si può caricare un file di scenario per la simulazione di alluvione. L'esecuzione di EnergyPlus nel browser non fa parte di questa versione.
- **Layout a barra multifunzione.** Computo materiali resta "Non ancora implementato" perché BimCraft non ha un elenco delle quantità di materiale, e altri 54 strumenti grigi della barra multifunzione non hanno ancora uno strumento BimCraft dietro.
- **Firma e piattaforme.** I programmi di installazione per Windows e il .dmg per macOS non sono firmati, quindi SmartScreen mostra {{ui:Altre informazioni}}, poi {{ui:Esegui comunque}}, e macOS richiede clic destro e poi {{ui:Aperta}}. La build per iPad e iPhone non è stata ricompilata per la 0.8.1.
- **Test su pagine reali.** Alcuni vecchi test del browser di BimCraft falliscono ancora nella nostra pagina di test, come prima della 0.8.1.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet). Le modifiche precedenti sono in [Novità nella 0.7](topic:whats-new-0-7).
