---
title: Aprire i file di progetto .pln e .pla
summary: Cosa fa oggi BimCraft con i file .pln, .pla, .tpl e .bpn e come esportare IFC e DWG da questi file, così che modello e disegni si aprano qui.
keywords: pln, pla, tpl, bpn, file di progetto, archivio, template, backup, esportazione ifc, esportazione dwg, traduttore, zone, layout
from: 41fb921d
---

## Cosa farai

Portare in BimCraft un progetto salvato come `.pln` (progetto), `.pla` (archivio con la sua libreria), `.tpl` (template) o `.bpn` (backup). Sono file propri di Archicad.

## Cosa si apre oggi

- **I file di progetto non si aprono ancora.** Il loro formato non è pubblicato e BimCraft non lo legge ancora. Quando ne si apre uno, BimCraft lo segnala e rimanda a questa pagina.
- **BimCraft controlla i primi byte del file.** I progetti Archicad dalla versione 17 in poi iniziano con la stessa breve firma, quindi BimCraft può dire con certezza che un file è un progetto Archicad. Un file con nome Archicad che non inizia così probabilmente è stato rinominato, è danneggiato o proviene da una versione più vecchia. La firma non distingue progetto, archivio e template.
- **Un'esportazione IFC si apre completamente**: il modello in 3D, i piani, le zone come spazi, i dati degli elementi, i set di proprietà e le classificazioni, con tutti gli strumenti di BimCraft.
- **Un'esportazione DWG si apre** nella vista 2D, con i suoi layer e layout, e in {{ui:3D}}. Per modificarla, usare {{ui:Modifica in CadCraft}}.

Oppure portare l'intero progetto come un unico zip, con le sue viste, i layout e i gruppi di proprietà: vedi [Aprire un pacchetto di progetto](topic:open-project-bundle).

## Esportare IFC (il modello)

1. Aprire il progetto in Archicad.
2. Scegliere **File > Salva con nome** e selezionare **IFC** come tipo di file.
3. Scegliere un traduttore IFC (il nome che Archicad dà a un insieme di impostazioni di esportazione IFC). Quello per **IFC4 Reference View** o **IFC2X3 Coordination View 2.0** è adatto a BimCraft. Si apre anche IFC4X3.
4. Scegliere cosa esportare: l'intero progetto oppure solo gli elementi visibili sui piani che si stanno guardando.
5. Salvare, poi cliccare {{ui:Scegliere un file}} in BimCraft e scegliere il file `.ifc`.

Prima di esportare, controllare nelle impostazioni del traduttore:

- **Zone**: esportarle, così le stanze arrivano come spazi. Cliccare {{ui:Spazi}} in BimCraft per vederli.
- **Proprietà e classificazioni**: esportarle, così compaiono in {{ui:Proprietà}} e possono essere usate in {{ui:Trova}}, {{ui:Colore}} e {{ui:Totali di quantità}}.
- **`.ifc` semplice**, non `.ifczip` o `.ifcxml`. BimCraft apre solo file `.ifc` semplici.

## Esportare DWG (i disegni)

1. Aprire la pianta, la sezione o il layout desiderato.
2. Scegliere **File > Salva con nome** e selezionare **DWG** come tipo di file.
3. Scegliere un traduttore DXF-DWG e salvare.
4. Per un intero set di tavole, salvare i layout dal Layout Book, oppure pubblicarli come DWG.
5. Aprire il `.dwg` in BimCraft. I disegni collegati dall'esportazione si aprono insieme ad esso quando si trovano nella stessa cartella; vedi [Disegni e immagini collegati](topic:dwg-linked-files).

## Risoluzione dei problemi

- **"… è un progetto Archicad: i suoi primi byte lo dicono."** Esportare IFC o DWG come sopra e aprire quel file.
- **"… ha un nome da file Archicad ma non inizia come tale."** Verificare da dove proviene il file: potrebbe essere un altro tipo di file con un nuovo nome (provare ad aprirlo con la sua estensione reale), una copia non terminata o un progetto di una versione precedente alla 17. Se possibile, aprirlo in Archicad, poi esportare IFC o DWG.
- **Il modello si apre senza stanze.** Le zone non sono state esportate. Attivarle nel traduttore IFC ed esportare di nuovo.
- **Le aperture non sono tagliate.** BimCraft lo segnala sotto **Non ancora disegnate** nel pannello {{ui:File}}. Esportare di nuovo; se il problema persiste, aprire il modello nel programma che l'ha creato e controllare lì le aperture.
- **Il testo nel DWG appare diverso.** L'esportazione può conservare font che BimCraft non ha; BimCraft disegna il testo con un font sans-serif semplice.

Vedi anche [Ottenere un file di progetto in 3D tramite IFC](topic:rvt-to-ifc) e [Cosa legge BimCraft da ciascun formato](topic:file-formats).
