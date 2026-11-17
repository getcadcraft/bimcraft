---
title: Elimina, taglia, copia e incolla elementi dell'edificio
summary: Scegliere muri, porte, arredi o qualsiasi altro elemento di un modello IFC; eliminarli, tagliarli oppure copiarli e incollarli dove si fa clic, sul posto o su un altro piano.
keywords: elimina, rimuovi, cancella, taglia, copia, incolla, duplica, sposta, seleziona tutto, scegli tutto, elemento dell'edificio, muro, porta, finestra, scala, apertura, annulla
from: d9eec37f
---

## Cosa si fa

Modificare il contenuto di un modello IFC: eliminare gli elementi non voluti, copiare un muro o un gruppo di arredi in un altro punto oppure spostare elementi tagliandoli e incollandoli. Ogni modifica è un passaggio che si può annullare, e il salvataggio scrive un nuovo file, quindi l'originale resta invariato.

## Passaggi

1. Aprire un modello IFC. Vedi [Aprire un modello IFC e guardarlo in 3D](topic:open-ifc-model).
2. Scegliere ciò che si vuole modificare: fare clic su un elemento, tenere premuto {{key:Mod}} o {{key:Shift}} e fare clic per sceglierne altri, oppure premere {{key:Mod+A}} ({{ui:Altro}}, {{ui:Seleziona tutto}}) per scegliere tutti gli elementi visualizzati.
3. Poi:
   - **Eliminare:** premere {{key:Delete}}, oppure {{ui:Altro}}, {{ui:Elimina}}.
   - **Copiare:** premere {{key:Mod+C}} oppure fare clic su {{ui:Copia}}.
   - **Tagliare:** premere {{key:Mod+X}}, oppure {{ui:Altro}}, {{ui:Taglia}}. Gli elementi scompaiono e si possono incollare.
4. Per incollare, premere {{key:Mod+V}} oppure fare clic su {{ui:Incolla}}. Un riquadro trasparente delle dimensioni di ciò che è stato copiato segue il puntatore sul piano scelto nella barra di posizionamento. Premere {{key:R}} per ruotarlo di 90°, poi fare clic dove deve andare. Ogni clic colloca un'altra copia; premere {{key:Esc}} per fermarsi.
5. Oppure premere {{key:Mod+Shift+V}} ({{ui:Altro}}, {{ui:Incolla nella stessa posizione}}): dopo un taglio gli elementi tornano esattamente dove erano; dopo una copia la copia finisce proprio accanto agli originali.
6. Fare clic su {{ui:Salva come IFC}} per scaricare il modello modificato.

## Cosa accompagna un elemento

- **Parti:** una scala porta con sé le sue rampe, una facciata continua i suoi pannelli, qualsiasi elemento composto da parti le porta tutte.
- **Aperture:** un muro porta con sé le aperture ricavate al suo interno. Eliminando una porta o una finestra si elimina anche l'apertura che riempiva, così il muro si chiude, come accade in un programma di authoring. Eliminando un muro disegnato in BimCraft si eliminano anche le sue porte e finestre e si ricollegano i muri rimasti. Eliminando un muro da un file creato altrove, porte e finestre restano dove erano.
- **Dati:** una copia ha lo stesso tipo, gli stessi materiali, gli stessi set di proprietà e le stesse quantità dell'originale, e un nuovo GlobalId. Modificare in seguito un valore della copia lascia intatto l'originale.
- **Elementi della libreria** mantengono i loro dati di libreria; una copia riceve il successivo numero di elemento libero, e un elemento tagliato e poi reincollato conserva il proprio.

## Cosa si vede

- "Eliminato: …" o "Incollato: …" nell'elenco {{ui:Modifiche}}. {{key:Mod+Z}} annulla l'ultima modifica; {{key:Mod+Y}} la ripristina.
- Dopo un'eliminazione, la riga di stato indica quante parti e aperture sono state eliminate insieme all'elemento.
- Gli elementi incollati risultano selezionati, quindi si può incollare di nuovo nella stessa posizione per creare una fila, oppure eliminarli.

## Da sapere

- Le copie usano la stessa geometria dell'originale (IFC permette agli elementi di condividerla), quindi il file cresce pochissimo.
- Gli elementi dell'edificio vengono incollati nel modello da cui sono stati copiati, nella stessa scheda. Per usare elementi della libreria collocati in un altro modello, copiare un elemento alla volta: vedi [Copiare, incollare e duplicare elementi della libreria](topic:copy-paste).
- Piani, spazi, edifici e sito non si possono eliminare né copiare. Scegliere invece gli elementi che contengono. Un locale disegnato in BimCraft nasce dai muri che lo circondano: eliminare un muro per unire due locali.
- I muri, le porte e le finestre disegnati con gli strumenti propri di BimCraft per muri, porte e finestre non si possono ancora copiare, tagliare o duplicare: la riga di stato lo indica. Disegnarli di nuovo. L'eliminazione funziona.
- Copiare inserisce negli Appunti anche i nomi e le proprietà di ciò che è stato copiato, come testo, da incollare in un foglio di calcolo o in una e-mail.

## Errori comuni

- **{{ui:Elimina}} è disattivato.** Non è scelto nulla, oppure sono scelti solo piani o spazi. Posizionare il puntatore sopra per leggere il motivo.
- **Incollando, il programma segnala che gli elementi arrivano da un altro modello.** Dopo la copia è stato aperto un altro modello. Riaprire il primo modello e copiare lì gli elementi.
- **La copia incollata è su un altro piano.** Il {{ui:Piano}} della barra di posizionamento decide dove va; scegliere il piano prima di fare clic.

## Argomenti correlati

- [Nascondere, isolare e vedere attraverso gli elementi](topic:hide-and-isolate)
- [Tasti e mouse](topic:keyboard#edit)
