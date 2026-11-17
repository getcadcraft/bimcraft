---
title: Conservare i dati degli asset e un registro di manutenzione nel modello
summary: Usare il modello IFC consegnato per gestire l'edificio: produttore, modello, numero di serie, garanzia e vita utile per attrezzature e apparecchi, e un registro dei lavori di manutenzione eseguiti, tutto scritto nell'IFC.
keywords: consegna, certificato di ultimazione lavori, certificato di agibilità, come costruito, pacchetto di consegna, asset, registro degli asset, facility management, fm, gestione, manutenzione, servizio, garanzia, numero di serie, codice a barre, produttore, costruttore, modello, vita utile, consegna, cobie, gemello digitale, scaduto, in scadenza, ordine di lavoro
from: b84ac492
---

La scheda {{ui:Assets}} nel pannello destro trasforma il modello IFC aperto in un registro delle attrezzature dell'edificio. Tutto viene scritto nell'IFC stesso, in set di proprietà e attività propri dell'IFC, così il prossimo programma che apre il file lo legge. Non si carica nulla e non serve un server: salvare l'IFC per conservarlo.

## Cosa viene elencato

- Attrezzature e apparecchi: arredi, apparecchi sanitari, apparecchi di illuminazione, elettrodomestici, terminali d'aria, valvole, pompe, ventilatori, caldaie, serbatoi, prese, quadri elettrici, ascensori e altri elementi analoghi, e oggetti di libreria con dati di attrezzatura.
- Qualsiasi altro elemento che si **traccia**: selezionarlo nel modello (una porta, un muro, una pompa disegnata come oggetto semplice) e fare clic su {{ui:Track picked}}.
- Qualsiasi cosa che abbia già dati di asset o un'attività di manutenzione, scritti qui o da un altro programma.

Ciò che è scaduto compare per primo, poi ciò che scade entro 30 giorni. Filtrare per nome, etichetta, produttore, modello o numero di serie, per piano, oppure selezionare {{ui:Only overdue or due within 30 days}}.

## Dati dell'asset

Fare clic su un asset nell'elenco (oppure selezionarlo nel modello) per aprire i suoi dati: produttore, modello, riferimento del modello, numero di serie, codice a barre, il giorno di installazione, il numero della garanzia con inizio e fine, e la vita utile in anni. {{ui:Save the data}} li scrive in un solo passaggio ({{key:Mod+Z}} lo annulla). Lasciare vuoto un campo per rimuovere quel valore.

## Documenti

Sotto i dati, {{ui:Documents}} elenca i manuali, le garanzie, le foto, i certificati e i disegni collegati all'asset. Scegliere il tipo, dare un titolo (o lasciarlo vuoto: viene usato il nome del file) e indicare dove si trova:

- un **indirizzo web** (`https://…`): ottiene un link Apri, che si apre in una nuova scheda;
- oppure un **nome di file o percorso** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, una condivisione di rete): conservare i file accanto all'IFC, nella stessa cartella o in una sua sottocartella, così i nomi funzionano anche quando si consegna la cartella. BimCraft mostra il nome; aprire il file dalla cartella.

I file stessi non vengono mai caricati o copiati nell'IFC: viene scritto solo il link. Un indirizzo web con una password al suo interno, e qualsiasi link che non sia un indirizzo web o un file (come `javascript:`), vengono rifiutati. {{ui:Remove}} toglie un documento dall'asset (un passaggio; {{key:Mod+Z}} lo annulla).

Anche i documenti che un altro programma ha collegato all'elemento sono elencati. I documenti sul tipo dell'elemento compaiono su ogni elemento di quel tipo e lo indicano; si modificano dove è stato creato il tipo.

Nell'IFC ogni documento è un riferimento a documento IFC legato all'elemento, con il suo tipo mantenuto su quel legame, sia in IFC4 sia in IFC2X3.

## Il registro di manutenzione

Sotto i documenti, {{ui:Record work done}}: il giorno in cui è stato eseguito, il lavoro, chi lo ha eseguito, quando è il prossimo intervento e le note. Ogni voce è un passaggio; {{ui:Edit}} e {{ui:Delete}} la modificano in seguito. La data del prossimo intervento della voce più recente decide se l'asset è scaduto o in scadenza.

## Come è conservato nell'IFC

- Produttore e modello in `Pset_ManufacturerTypeInformation`, numero di serie, codice a barre e giorno di installazione in `Pset_ManufacturerOccurrence`, la garanzia in `Pset_Warranty`, la vita utile in `Pset_ServiceLife`, sull'elemento stesso. Quando il tipo dell'elemento ha già un produttore o un modello, questi vengono mostrati finché non se ne inserisce uno proprio.
- Ogni voce di manutenzione è un'**attività** IFC del tipo manutenzione, legata all'elemento, con le sue date (in IFC4 anche come tempi propri dell'attività) e un set `CadCraft_Maintenance` con il giorno, chi l'ha eseguita e il giorno del prossimo intervento.
- I valori condivisi con altri elementi vengono prima copiati: cambiare un asset non cambia mai i suoi vicini.
- Nei vecchi file IFC2X3 le date sono scritte come testo (AAAA-MM-GG); quella versione richiede lì un record di data separato, che BimCraft non scrive.

## Letture dei sensori

Aprire {{ui:Sensor values}} e {{ui:Open readings (CSV)…}} per importare letture esportate da un sistema di gestione dell'edificio, da un data logger o da un foglio di calcolo:

- La **prima colonna è l'ora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` oppure secondi Unix. Un orario senza fuso viene letto nel fuso orario del computer. Le date con il giorno per primo, come `23/10/2026`, non vengono lette (sono ambigue); esportare date ISO.
- **Ogni altra colonna è un sensore**, con intestazione uguale all'**etichetta**, al **nome** o al **GlobalId** del suo asset. Un'intestazione che non corrisponde a nessun asset, o a più di uno, viene elencata e ignorata. Le colonne sono separate da virgole, punti e virgola o tabulazioni; con punti e virgola o tabulazioni viene letta anche la virgola decimale (`21,5`).
- Orari o valori che non si leggono (una parola, un'unità scritta nella cella) vengono contati e ignorati, mai indovinati.

L'ultima lettura compare nella colonna {{ui:Reading}} dell'elenco e nel blocco {{ui:Sensor}} dell'asset, con un **grafico** di ogni lettura (su telefono i grafici attendono che si tocchi {{ui:Show the chart}}). Impostare un **limite inferiore e superiore** e un'unità su un asset, poi {{ui:Save the limits}}: una lettura fuori da questi limiti segnala l'asset. Selezionare {{ui:Show on the model}} per colorare ogni asset in base alla sua lettura (blu sotto il limite inferiore, verde entro i limiti, rosso sopra il limite superiore e, per gli asset senza limiti, una scala blu unica dalla lettura più bassa alla più alta), con la lettura come etichetta (fino a 60 etichette, prima quelle segnalate).

**Le letture restano in questa scheda del browser**: non vengono salvate nell'IFC né inviate da nessuna parte; alla volta successiva si apre di nuovo il CSV. I **limiti sono salvati nell'IFC** (un set `CadCraft_Sensor` sull'elemento: Low, High, Unit), così la prossima persona che apre il file vede gli stessi segnali.

## Letture in tempo reale

{{ui:Live feed}} legge i valori man mano che si presentano, **direttamente da questo browser al proprio sistema**. Nulla passa dal nostro server e nulla viene memorizzato altro che nella scheda del browser. Nulla si collega all'apertura di un file: solo {{ui:Connect}} lo fa.

- **MQTT su WebSocket**: l'indirizzo del listener WebSocket del broker (`wss://broker.example.com:8884/mqtt`), e uno o più topic con `{tag}` dove va l'etichetta dell'asset, per esempio `site/{tag}/temperature` (BimCraft si iscrive a `site/+/temperature` e legge l'etichetta dal topic di ogni messaggio). I topic senza `{tag}` indicano il sensore stesso. Un messaggio è un numero semplice (`21.5`) oppure un JSON come `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (impostare {{ui:Value field in JSON}} se il campo ha un altro nome).
- **Chiedi a un indirizzo (HTTP)**: un indirizzo web a cui risponde il sistema di gestione dell'edificio o un piccolo script, interrogato ogni tot secondi (almeno 5). Può rispondere con JSON indicizzato per etichetta (`{"AHU-1": 21.5}`), con un elenco JSON (`[{"tag": "AHU-1", "value": 21.5}]`), oppure con un CSV di letture come quello sopra. Se non risponde, BimCraft attende il doppio del tempo prima di interrogare di nuovo, fino a cinque minuti.

Ogni lettura va all'asset la cui etichetta, il cui nome o il cui GlobalId indica, esattamente come una colonna CSV; i nomi che non corrispondono a nessun asset vengono elencati. Le letture si aggiungono ai {{ui:Sensor values}}: l'elenco, i grafici, i limiti e i colori sul modello funzionano allo stesso modo.

**La password o il token** viene digitata per una sola connessione: viene passata alla connessione e il campo viene svuotato; non viene mai salvata in questo browser né nell'IFC. Un token va come header standard `Authorization: Bearer` e non si inviano cookie.

{{ui:Keep these settings in the IFC}} scrive l'indirizzo, i topic, il campo del valore e la frequenza di interrogazione nel modello (un set `CadCraft_Feed` sul progetto; non c'è un campo per la password), così la prossima persona che apre il file digita solo il proprio accesso e fa clic su {{ui:Connect}}. Non mettere una password o una chiave nell'indirizzo stesso: un indirizzo con un nome utente e una password al suo interno viene rifiutato.

:::note
**Cosa serve al broker o all'indirizzo.** Una pagina del browser può parlare solo con un server che lo consente:
- La pagina è sicura (https), quindi il browser si collega solo a indirizzi `wss://` e `https://`, tranne sul proprio computer (`localhost`), dove `ws://` e `http://` funzionano per le prove.
- Un indirizzo HTTP deve consentire richieste da questa pagina (CORS: l'header `Access-Control-Allow-Origin`, e `Authorization` tra gli header consentiti se si usa un token).
- La maggior parte dei broker (Mosquitto, EMQX, HiveMQ e altri) offre un listener WebSocket; spesso è disattivato finché non lo si attiva. BimCraft usa MQTT 3.1.1.
:::

Non ci sono avvisi quando BimCraft è chiuso: i limiti segnalano un asset solo mentre il modello è aperto con un flusso collegato. Controllare un edificio ventiquattr'ore su ventiquattro richiede un server, che BimCraft non gestisce.

## Foglio COBie

**COBie** è il foglio di consegna che molti proprietari e team di gestione richiedono (pubblicato dal National BIM Standard negli Stati Uniti; BS 1192-4 nel Regno Unito). Aprire {{ui:COBie spreadsheet}} nella scheda:

- {{ui:Save as COBie (.xlsx)}} scrive i fogli COBie 2.4 (Contact, Facility, Floor, Space, Type, Component, System, Job, Document e Attribute) dal modello e dai dati degli asset: l'edificio, i suoi piani e locali (superfici dalle quantità del modello), ogni asset come componente con il suo numero di serie, il giorno di installazione, l'inizio della garanzia, l'etichetta e il codice a barre, il suo tipo con produttore, modello, vita utile e durata della garanzia, i sistemi a cui appartiene, il registro di manutenzione come lavori e i documenti collegati. Ogni componente riporta il GlobalId IFC dell'elemento. Digitare il proprio indirizzo e-mail per la colonna "created by" di COBie, oppure lasciarla vuota (indicherà n/a). I valori che il modello non ha indicano **n/a**; le colonne di categoria riportano la classe IFC, non un codice OmniClass.
- {{ui:Read a COBie spreadsheet…}} ne legge uno, da BimCraft o da un altro programma, ed **elenca prima ogni modifica**: quale asset, quale valore, da cosa a cosa, e nuovi documenti. {{ui:Apply}} le scrive tutte in un solo passaggio ({{key:Mod+Z}} lo annulla). Le righe vengono abbinate per GlobalId, poi per nome del componente. Le righe che non corrispondono a nulla nel modello vengono elencate, non aggiunte.

Un foglio di calcolo è trattato come non attendibile: le formule non vengono mai lette né eseguite (solo il valore salvato per ultimo nella cella); un valore che farebbe terminare una garanzia prima di iniziare e un link a documento che non è un indirizzo web o un nome di file vengono esclusi e contati; le cartelle di lavoro molto grandi vengono rifiutate. I lavori di COBie sono il lavoro pianificato di un tipo: vengono scritti ma non riletti. Nel foglio che BimCraft scrive, il testo che un foglio di calcolo potrebbe prendere per una formula (che inizia con `=`, `+`, `-` o `@`) è marcato come testo.

La cartella di lavoro è verificata nei nostri test con un lettore di fogli di calcolo indipendente; non è passata attraverso un validatore COBie. Se un team destinatario ne usa uno, comunicarci cosa segnala.

## Documenti di consegna

I documenti che vanno al proprietario con l'edificio finito appartengono al progetto, non a un solo asset. Nella scheda {{ui:Assets}}, aprire {{ui:Handover documents}}:

1. {{ui:Add a document}}, scegliere il tipo (certificato di ultimazione lavori, certificato di agibilità, garanzia, manuale, disegni come costruiti, altro), e digitare titolo, data di emissione, chi lo ha emesso e il numero di riferimento.
2. Indicare dove si trova: un indirizzo web, un nome di file conservato accanto all'IFC, oppure {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} e {{ui:Remove}} modificano l'elenco; ogni operazione è un passaggio annullabile.

{{ui:Build the handover package}} scarica un unico zip: una pagina di copertina che elenca ogni documento, la stessa lista di un foglio di calcolo, la cartella di lavoro COBie (i documenti sono sul suo foglio Document, come righe riferite alla Facility), il modello e ogni file allegato. Un certificato di ultimazione lavori o di agibilità che non è ancora nell'elenco viene indicato nella copertina; il pacchetto viene creato comunque.

Il modello nel pacchetto è il **modello come costruito**: dichiara quali elementi sono stati misurati in cantiere. Con esso, nella cartella `as-built`: la dichiarazione, un elenco di ogni elemento con il suo stato di verifica, il set di disegni nello stato attuale come un unico PDF (i disegni come costruiti) e il registro delle modifiche ai disegni quando il modello ha emesso set. Vedi [Contrassegnare gli elementi come verificati o verificati in cantiere](topic:verification).

- Nel file IFC ogni documento è un IfcDocumentInformation legato al progetto (IfcRelAssociatesDocument), con titolo, riferimento, data, emittente e luogo, così altri programmi lo elencano.
- Un file allegato viene registrato per nome, dimensione e SHA-256. Per conservare il file stesso con il progetto, usare {{ui:Save the project as a bundle}} (un .ccbundle contiene il modello e i file allegati; aprendolo, questi vengono restituiti, ciascuno verificato con il suo record). Un normale salvataggio chiede quale dei due si vuole.
- Un .ifc semplice conserva il record, non il file: dopo averlo aperto, usare {{ui:Attach the file again}}. Lo stesso file viene riconosciuto; un file diverso sostituisce il record.

## CSV

{{ui:CSV}} salva ogni asset con i suoi dati, ogni voce di manutenzione e ogni documento, una riga ciascuno, per un foglio di calcolo o un altro programma di manutenzione.

:::note
Non ancora implementato: un servizio ospitato che conserva le letture e invia avvisi mentre BimCraft è chiuso, e la rilettura dei lavori COBie. Vedi [Non ancora implementato](topic:not-built-yet).
:::
