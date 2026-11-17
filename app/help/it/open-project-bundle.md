---
title: Apri un pacchetto di progetto
summary: Un pacchetto di progetto è un unico zip con un modello, le sue viste, i suoi layout e i suoi gruppi di proprietà. Aprirlo, mostrare una vista con il suo piano e i suoi layer, aprire un layout e vedere le proprietà nei gruppi del progetto.
keywords: pacchetto, pacchetto di progetto, ccbundle, zip, viste, mappa delle viste, layout, libro dei layout, combinazione di layer, gruppi di proprietà, standard, pln, template
from: b5b86e8f
---

## Obiettivo

Aprire un **pacchetto di progetto** (`.ccbundle.zip`) e lavorare con il progetto com'era organizzato: le sue viste, i suoi layout e i suoi gruppi di proprietà, sopra il modello.

Un pacchetto contiene:

- il modello in IFC,
- i layout in PDF e DWG,
- un elenco di ciò che IFC non include: le viste (ciascuna con il suo piano, la sua combinazione di layer e la sua scala), i layout e i disegni collocati su di essi, le definizioni delle proprietà nei loro gruppi, le classificazioni e gli standard come layer, set di penne, tipi di linea, riempimenti, superfici e composti.

I pacchetti sono creati da uno script open source che viene eseguito in Archicad e chiede ad Archicad stesso questi elenchi. BimCraft non legge mai direttamente i file `.pln` o `.tpl`; vedi [Apri i file di progetto .pln e .pla](topic:pln-project-files).

## Creare un pacchetto

Lo script è un'anteprima: non è ancora stato provato su tutte le versioni di Archicad. Scaricarlo da [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Servono Archicad 24 o successivo e Python 3.8 o successivo; non c'è altro da installare.

1. Salvare `archicad_bundle.py` in una cartella, per esempio `C:\cc-bundle`.
2. In Archicad, aprire il progetto e creare un set di pubblicazione chiamato esattamente **CadCraft bundle**: la vista 3D come IFC, ogni layout come PDF e ogni layout di nuovo come DWG, pubblicati in file su disco in un'unica cartella piatta.
3. Con il progetto aperto, eseguire una volta `python archicad_bundle.py --probe --out .`. Lo script si limita a leggere e scrive `probe.json`.
4. Eseguire `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (usare il traduttore IFC scelto). Archicad pubblica il set e lo script scrive `<project>.ccbundle.zip`.

Se la pubblicazione tramite lo script non riesce, pubblicare il set a mano ed eseguire `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Il README del repository riporta tutte le opzioni. Se qualcosa non viene incluso, aprire una segnalazione nel repository e allegare `probe.json`.

## Aprire un pacchetto

1. Fare clic su {{ui:Scegliere un file}}, oppure trascinare il `.ccbundle.zip` su BimCraft. In una cartella aperta con {{ui:Apri una cartella}}, i pacchetti sono elencati in **Pacchetti di progetto**; fare clic su uno per nome.
2. Il modello si apre come qualsiasi IFC e compare a sinistra la sezione **Pacchetto di progetto**, sotto i dati del file.

Nulla viene caricato: il pacchetto viene letto sul computer un file alla volta, così un modello grande non viene copiato due volte.

## Mostrare una vista

In **Viste**, le viste sono raggruppate nelle cartelle che avevano nel progetto. Fare clic sul nome di una vista:

- **Una pianta** mostra solo il suo piano, visto dall'alto.
- **La sua combinazione di layer** nasconde gli elementi sui layer che la combinazione nasconde. La riga di stato indica quanti elementi sono stati nascosti.
- **La sua scala** è mostrata accanto al nome e nella riga di stato.
- **Una vista 3D** mostra tutti i piani.

Per mostrare di nuovo tutto, usare {{ui:Mostra tutto}} in {{ui:Mostra}} e spuntare ogni piano.

:::note
BimCraft trova i layer tramite le assegnazioni di layer del file IFC. Se l'IFC è stato esportato senza di esse, una combinazione di layer non nasconde nulla e la riga di stato indica 0 elementi nascosti.
:::

## Aprire un layout

In **Layout**, ogni layout mostra il suo numero, il nome, il formato del foglio e le viste collocate su di esso.

- **PDF** salva il PDF del layout dal pacchetto.
- **DWG** apre il disegno del layout nella vista 2D. Fare clic su una vista qualsiasi per tornare al modello.
- **Apri in …** invia il file del layout all'app che lo lavora, in una nuova scheda: il PDF a MarkupCraft, il DWG a CadCraft. Compare solo dove quell'app è aperta accanto a BimCraft. Il file viene letto dal pacchetto mentre la scheda si carica, e nulla viene caricato.

Un layout senza nessuno dei due mostra **Nessun file nel pacchetto**.

## Vedere le proprietà nei gruppi del progetto

Scegliere un elemento. **Gruppi di proprietà** mostra le sue proprietà sotto i gruppi definiti dal progetto, abbinate tramite il set di proprietà e il nome che la definizione fornisce per IFC, oppure tramite il nome. Le altre restano in {{ui:Proprietà}} come al solito. **Definizioni di proprietà** elenca ogni definizione con il suo gruppo, il suo tipo e il suo nome IFC.

## Standard e note

- **Standard** conta i layer, le combinazioni di layer, i set di penne, i tipi di linea, i riempimenti, le superfici, i composti e i materiali nel pacchetto.
- **Note** elenca ciò che lo script non è riuscito a ottenere da quella versione di Archicad, ogni campo che BimCraft non è riuscito a leggere e ogni file che il pacchetto nomina ma non contiene.

## Risoluzione dei problemi

- **"… è uno zip ma non un pacchetto di progetto."** Lo zip non contiene `manifest.json`. Estrarlo e aprire il file `.ifc` al suo interno.
- **"… è un pacchetto di progetto più recente di quello che BimCraft legge."** Aggiornare BimCraft.
- **"… non contiene il modello indicato nel suo manifesto."** Lo zip è stato troncato o modificato. Creare di nuovo il pacchetto.
- **Una vista mostra tutti i piani.** Il suo piano non è nell'IFC del modello (la riga di stato lo indica). Verificare che l'esportazione IFC includa quel piano.

Vedi anche [Lavorare tra due programmi BIM](topic:two-bim-programs) e [Cosa legge BimCraft da ogni formato](topic:file-formats).
