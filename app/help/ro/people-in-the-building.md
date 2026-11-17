---
title: Plimbarea persoanelor prin clădire
summary: O evacuare sau sosirile dintr-o zi obișnuită prin camere, uși și scări, cu cozi acolo unde clădirea se îngustează, cel mai lung drum până la o ieșire din fiecare cameră și constatările ca Probleme. Un model grosier de mulțime pentru decizii de proiectare, nu un certificat de siguranță la incendiu.
keywords: persoane, evacuare, evadare, ieșire, distanță de parcurs, coadă, mulțime, flux, lățimea ușii, scări, sosiri, blocaj, simulare, ocupanți, pieton, ce-ar-fi-dacă, ușă blocată
from: 84aa8920
---

Secțiunea {{ui:Persoane în clădire}} din panoul din stânga plimbă persoane prin camerele, ușile și scările modelului IFC deschis. Nimic din model nu este modificat și nimic nu este încărcat.

:::warning
Acesta este **un instrument de proiectare, nu un certificat de siguranță la incendiu**. Nu cunoaște focul, fumul, panica, diferențele de mobilitate sau ce cere un normativ. Limitele țin de proiectant: cel mai lung drum până la o ieșire și timpul disponibil sunt cifre pe care le introduceți, iar niciuna nu este presupusă.
:::

## Rularea

1. Deschideți un model cu camere și uși închise. O ușă cu o cameră doar de o parte este o ieșire; o ușă între două camere le unește; o scară unește camerele de la capetele sale.
2. Alegeți **Evacuare** (toți merg spre o ieșire), **Sosiri** (toți intră și merg într-o cameră) sau **Schimb** (persoanele din camere pleacă, în timp ce tot atâtea intră), și suprafața de podea pe persoană. Camerele numite ca un coridor, o scară, un hol sau o toaletă nu găzduiesc pe nimeni.
3. Faceți clic pe {{ui:Rulare}}. Obțineți momentul în care ultima persoană iese (și când ies jumătate și nouă din zece), coada de la fiecare ușă și scară, camera cu cel mai lung drum și un plan care redă rularea.

## Ce-ar fi dacă

Bifați {{ui:Închisă}} la o ușă din tabel și rulați din nou: oamenii găsesc altă cale, sau camerele fără ieșire sunt listate ca erori. O ușă de două ori mai lată golește o cameră mult mai repede; tabelul arată unde sunt cozile.

## Cum funcționează

Fiecare cameră este o grilă, deci oamenii merg în jurul colțurilor, nu prin pereți. Viteza scade pe măsură ce o cameră se umple (S = 1.4 (1 − 0.266 D) m/s, D în persoane pe m²). O ușă lasă să treacă 1.3 persoane pe secundă pentru fiecare metru de lățime, minus 150 mm pe fiecare parte; o scară 1.0 și mers mai lent. Persoanele așteaptă într-o coadă în ordinea sosirii. Un număr de rulare repetă exact aceeași rulare.

Asistentul poate rula același lucru: cereți o evacuare sau cel mai lung drum până la o ieșire din fiecare cameră.

## Persoane în fiecare cameră

Deschideți {{ui:Persoane în fiecare cameră}} pentru a introduce un număr pentru orice cameră. O casetă goală folosește cifra suprafeței de podea (arătată cu gri); 0 golește o cameră. Cifrele introduse sunt folosite pentru rulare și sunt păstrate în acest browser.

## Contrasens la uși

În **Schimb**, persoanele care ies și cele care intră se întâlnesc la aceleași uși. Când o ușă trece pe cineva în sens invers imediat după ultima persoană, își păstrează o parte din debit (0.8 aici; o presupunere, întrucât valorile publicate variază), iar tabelul numără schimbările de sens. O ușă care își schimbă des sensul este listată în Probleme ca notă.

## Scări și paliere

Fiecare palier al unei scări îi costă pe cel care merge o secundă pentru a se întoarce (o presupunere). O scară dreaptă nu are niciunul; o scară în L sau U are unul. Debitul scării provine tot din lățimea rampei sale.

## În vizualizarea 3D

Bifați {{ui:Afișare persoane în vizualizarea 3D}} și persoanele apar ca figuri în model, colorate după ce fac, și se mișcă pe măsură ce redați rularea. Nimic nu este adăugat în model.
