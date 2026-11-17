---
title: Impostazioni di BimCraft
summary: Scegliere se mostrare locali e spazi, se disegnare gli spigoli e con quale vista si apre un modello, e iniziare con l'aggancio alla parete attivo.
keywords: impostazioni, preferenze, opzioni, spazi, locali, ifcspace, spigoli, linee, prestazioni, modello grande, vista di apertura, telecamera, vista dall'alto, aggancio alla parete, snap
from: 4416e64f
---

Aprire {{ui:Impostazioni}} con l'ingranaggio nella barra dell'app o con {{key:Mod+,}}. La prima scheda, {{ui:BimCraft}}, contiene le impostazioni proprie di questa app; {{ui:Generale}} contiene quelle che tutte le app di CadCraft condividono (tema, barra degli strumenti, pannelli). Le impostazioni di BimCraft valgono solo nell'app: si modificano qui e questo browser le ricorda. {{ui:Reimposta impostazioni BimCraft}} in fondo alla finestra di dialogo le riporta, insieme a quelle condivise, ai valori iniziali.

## Menu, tasti e mouse

Lo stile dei menu (la barra degli strumenti propria di BimCraft, una barra dei menu per la progettazione d'interni, una barra multifunzione BIM o una riga di comando per il disegno), i propri tasti e menu, e cosa fanno la rotella e i pulsanti del mouse. Vedere [Menu, tasti e mouse](topic:menus-keys-and-mouse).

## All'apertura di un modello

- **Mostra locali e spazi** (disattivato all'inizio): locali e spazi sono riquadri trasparenti che possono nascondere i muri dietro di essi, quindi all'inizio sono nascosti. Il pulsante {{ui:Spazi}} sopra il modello li attiva e disattiva comunque per il modello aperto.
- **Spigoli**: {{ui:Spigoli attivi}} (all'inizio) disegna le linee degli spigoli che danno l'aspetto del disegno tecnico. {{ui:Solo modelli piccoli}} le disegna solo per i modelli sotto i 300,000 triangoli, il che mantiene più rapida la rotazione dei modelli grandi. {{ui:Spigoli disattivati}} avvia ogni modello senza di esse. Il pulsante {{ui:Spigoli}} le attiva o disattiva comunque per il modello aperto. Sopra 1.5 milioni di triangoli gli spigoli sono sempre disattivati.

## I disegni si aprono in

Come si presenta per la prima volta un disegno DWG o DXF: {{ui:3D (più veloce)}} (all'inizio) disegna rapidamente anche un disegno grande, oppure {{ui:Modello (2D)}} apre la vista piana dello spazio modello. Le schede sopra il disegno passano in qualsiasi momento tra {{ui:Modello}}, le tavole e {{ui:3D}}. Un disegno senza nulla nello spazio modello, o un browser che non è in grado di mostrare il 3D, si apre sempre in 2D.

## Vista di apertura

La telecamera con cui si apre un modello: {{ui:Adatta}} (all'inizio, l'intero modello da un angolo), {{ui:Sopra}}, {{ui:Anteriore}} o {{ui:Lato}}. I pulsanti sopra il modello cambiano la vista in qualsiasi momento.

**Un edificio ruotato nel proprio terreno**: molti modelli arrivano con l'edificio inclinato rispetto agli assi del file (con coordinate di rilievo o condivise). {{ui:Squadrato rispetto all'edificio}} (all'inizio) mostra un tale edificio squadrato: {{ui:Adatta}}, {{ui:Sopra}}, {{ui:Anteriore}}, {{ui:Lato}}, le facce del ViewCube e ogni nuova sezione seguono le sue pareti, e la bussola del ViewCube punta comunque al nord del modello. {{ui:Come posizionato nel terreno}} mantiene gli assi del file. Un edificio i cui muri corrono lungo gli assi appare uguale in entrambi i casi.

## Posizionare elementi della libreria

**Iniziare con l'aggancio alla parete attivo** (disattivato all'inizio): quando si inizia a posizionare o incollare un elemento della libreria, il suo retro si aggancia alla parete più vicina, rivolto verso il locale. {{key:Tab}} o {{ui:Aggancio alla parete}} nella barra di posizionamento lo disattivano per il momento. Un piano senza muri inizia senza di esso.

## Box di sezione

{{ui:Spazio intorno alla scelta}} indica quanto spazio lascia {{ui:Box di sezione intorno alla scelta}} su ogni lato degli elementi scelti, in millimetri: 300 all'inizio, fino a 5000. Vedere [Tagliare un modello IFC con un piano di sezione](topic:section-plane).

## Posizione

{{ui:Latitudine e longitudine in}} sceglie il sistema in cui {{ui:Misura}} › {{ui:Posizione}} fornisce latitudini e longitudini: WGS 84 (EPSG:4326, all'inizio, come usano GPS e mappe web), {{ui:Il datum proprio del file}}, oppure uno tra ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 e CGCS2000. Il sistema cartografico e il datum propri del file vengono sempre mostrati. Vedere [Misurare distanze, aree di facce e posizioni in 3D](topic:measure).

## Indicatore d'angolo

Ciò che appare nell'angolo in basso a destra delle viste 3D (un modello IFC e un disegno passato in 3D): {{ui:ViewCube}} (all'inizio), {{ui:Icona degli assi}} (una piccola X, Y e Z) oppure {{ui:Nessuno}}. Il cambiamento è immediato. La vista 2D del disegno non ne mostra mai uno.

Sul ViewCube, fare clic su una faccia, uno spigolo o un vertice per guardare da quel lato, trascinare il cubo per orbitare, trascinare l'anello per ruotare, e fare clic sulla casetta per tornare alla vista iniziale.

## Nome nelle segnalazioni

Con l'accesso effettuato, le segnalazioni riportano il nome dell'account e BimCraft non chiede nulla: questa parte mostra {{ui:Dal proprio account (<name>)}}. {{ui:Usa un altro nome}} apre una casella per un nome diverso, che prevale finché non si sceglie {{ui:Usa il nome dell'account}}. Senza accesso, il modulo della segnalazione chiede un nome come prima. Vedere [Segnalazioni e file BCF](topic:issues-bcf).

## Assistenti

**Consentire agli assistenti IA e agli script di usare BimCraft** (disattivato all'inizio) permette a un assistente sul computer di raggiungere il modello aperto tramite CadCraft Studio: **Leggi** trova gli elementi e ne legge le proprietà, **Cambia la vista** li isola, li nasconde e li mostra. **Attività** elenca le sue chiamate. Vedere [Far lavorare un assistente IA sul modello](topic:assistants).

:::note
Le altre impostazioni si applicano all'apertura di un modello o all'inizio del posizionamento. Un modello già aperto mantiene il proprio aspetto finché non si usano i pulsanti della barra degli strumenti o non lo si riapre.
:::

## Argomenti correlati

- [Copiare, incollare e duplicare elementi della libreria](topic:copy-paste)
- [Posizionare attrezzature e arredi dalla libreria](topic:place-from-library)
- [La schermata di BimCraft](topic:workspace)
- [Far lavorare un assistente IA sul modello](topic:assistants)
