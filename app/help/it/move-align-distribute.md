---
title: Spostare, copiare, allineare e distribuire elementi dell'edificio
summary: Spostare pareti, solai, pilastri ed elementi posizionati con un punto base e un secondo punto o una distanza digitata, copiarli mentre si procede, e allinearli o distribuirli in modo uniforme, in pianta o da una scelta in 3D.
keywords: sposta, copia, allinea, distribuisci, spaziatura, offset, punto base, spostamento, pareti, pilastri, solai, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Obiettivo

Spostare un muro, un pilastro, un solaio o un elemento della libreria posizionato in un nuovo punto, farne copie, oppure allinearne diversi senza ridisegnarli.

## Nomi e tasti

I comandi si chiamano {{ui:Sposta}}, {{ui:Allinea}} e {{ui:Distribuisci}}, e si può digitare `MOVE`, `ALIGN` e `DISTRIBUTE` nella riga di comando, come nell'app di disegno CadCraft. Una differenza: in BimCraft {{key:M}} è Misura, quindi Sposta ha un tasto proprio, {{key:Shift+M}}. Gli strumenti si trovano nel menu {{ui:Build}}.

## Sposta

1. Scegliere cosa spostare, in pianta o nella vista 3D. Pareti, solai, pilastri ed elementi della libreria posizionati si possono scegliere tutti in una sola selezione.
2. Premere {{key:Shift+M}} o scegliere {{ui:Sposta}}.
3. Fare clic su un punto base, poi su un secondo punto. Oppure, dopo il punto base, digitare una distanza e premere {{key:Enter}}: l'elemento va nella direzione in cui punta il puntatore dal punto base. Si può anche digitare `dx,dy` (o `@dx,dy`), oppure `lunghezza<angolo`.
4. Premere {{key:C}} per attivare {{ui:Copia}}: ogni spostamento allora crea copie e resta pronto per il successivo. Premere {{key:Esc}} per fermarsi.
È possibile fare clic su entrambi i punti anche nella vista 3D: con Sposta attivo, il puntatore incontra l'altezza del pavimento del livello, quindi un clic lì è un punto della pianta. Tenere premuto {{key:Shift}} mentre si fa clic per scegliere invece un altro elemento. Usare pianta, Sopra, Anteriore o Lato come si preferisce: i punti stanno sempre su quel livello.

Una parete porta con sé le sue porte e finestre. Un solaio disegnato porta con sé le sue aperture. Locali, solai e soffitti che seguono le pareti vengono aggiornati. Le pareti unite alla parete spostata restano dove sono.

Ogni spostamento è una sola modifica: un solo {{key:Mod+Z}} lo annulla, e si propaga a tutti in una sessione Live TeamWork. Un elemento della libreria posizionato non si può copiare in questo modo; usare {{ui:Modifica}} › {{ui:Copia}} e {{ui:Incolla}}.

## Allinea

Scegliere due o più elementi, scegliere {{ui:Allinea}}, poi un lato (sinistra, centro, destra, alto, medio o basso) e a cosa allineare: l'insieme scelto, il primo scelto, l'ultimo scelto, oppure un punto su cui si fa clic. Premere {{ui:Allinea}} nella barra.

## Distribuisci

Scegliere tre o più elementi, scegliere {{ui:Distribuisci}}, poi una direzione (in orizzontale o in verticale) e la spaziatura: spazi uguali tra gli elementi oppure centri equidistanti. I due agli estremi restano dove sono.

Le pareti che Allinea o Distribuisci sposta mantengono le loro unioni, come con Sposta: una parete unita a una parete spostata scorre lungo la propria linea con la sua estremità per restare unita, i tramezzi che vi si appoggiano la seguono, e due pareti unite entrambe spostate mantengono l'angolo dove si incontrano le loro nuove linee. I locali restano chiusi. È un passaggio in **Modifiche**.
