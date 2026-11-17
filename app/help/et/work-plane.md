---
title: Töötasand: määra, näita, vaata otse sellele
summary: Töötasand on tasand, millel joonistavad mudelijooned, mudelitekst ja Töötasandi vaataja. Määra see korrusele, pinnale, nimega referentstasandile või joonele; näita seda vaadetes; ava vaataja, et joonistada püstisele tasandile.
keywords: töötasand, määra töötasand, näita töötasandit, referentstasand, töötasandi vaataja, nimega tasand, pind, korrus, püstine tasand, vertikaaltasand, joonista seinale, fassaadijoonis, haakumine, joondus, ref-tasand
from: 8aceee1d
---

## Mida sa teed

Vali tasand, millel joonistad, vaata, kus see asub, ja joonista püstisel tasandil.

## Sammud

1. Lülita **Joonista** sisse ja ava menüü **Ehitus** (lindi paigutuse korral vahekaart Arhitektuur, Töötasand).
2. Vali **Määra töötasand** ja tee siis üks neist:
   - vali tasand väljal **Määra väärtuseks**;
   - vali nimega referentstasand selle kõrval olevast loendist;
   - klõpsa plaanil joonel: sein, ruudustiku joon, referentstasand, mudelijoon või kardinasüsteem. Töötasand muutub püstiseks tasandiks, mis läbib selle joone;
   - klõpsa 3D-vaates lameda pinna peal. Töötasand jääb selle pinna peale.
3. Vali **Näita töötasandit**, et seda näha: 3D-vaates varjutatud leht meetrise ruudustikuga, plaanil katkendjoonega kontuur või joon ning elevatsiooni- ja lõikepaneelil katkendjoonega kontuur. Vali uuesti, et peita.
4. Vali **Töötasandi vaataja**, et vaadata tasandit otse. Mustad jooned on mudel, mida tasand lõikab. Selle tööriistadega saad tasandile joonistada mudelijoone, mudeliteksti või referentstasandi. **Vaata 3D-s** pöörab 3D-vaate tasandi poole.

## Referentstasandid

Referentstasand on nimega tasand, mille joonistad joonena.

1. Vali **Referentstasand**. Kirjuta oma reale nimi, kui soovid (muidu antakse see sulle), ja kõrgus.
2. Klõpsa kohta, kus see algab, ja kohta, kus see lõpeb. Plaanil tekib sellest püstine tasand. Töötasandi vaatajas tekib tasand, mis seisab töötasandi suhtes risti.
3. Plaanil kuvatakse see rohelise katkendjoonena koos nimega, 3D-vaates ja elevatsiooni- ning lõikepaneelil katkendjoonega kontuurina.
4. Vali see, et nimetada ümber, muuta pikkust, kõrgust ja jalga, või vajuta **Kasuta töötasandina**.

Kaks referentstasandit ei saa olla sama nimega, sest nime järgi valitakse üks neist.

## Hea teada

- Mudel, millele töötasandit pole määratud, töötab oma madalaimal korrusel.
- Töötasand salvestatakse faili. Selle näitamine või peitmine jääb meelde selles brauseris, mitte failis.
- Kui töötasand järgib referentstasandit ja sa seda tasandit liigutad, liigub ka töötasand koos sellega.
- Püstisel töötasandil avavad mudelijoone ja mudeliteksti tööriistad vaataja, sest plaan ei saa osutada kõrgusele.
- Joonistamistööriistad haaravad plaanil joonistatud referentstasandite otsi samamoodi nagu teiste joonte otsi vaatajas.

## IFC-failis

- Töötasand on projektil omadushulk (CadCraft_WorkPlane).
- Referentstasand on IfcAnnotation objektitüübiga ReferencePlane ja oma nimega. Selle kuju on tasandi suletud kontuur, nii et teine programm näitab, kus see asub. Selle omadushulk CadCraft_ReferencePlane sisaldab algpunkti, suunda, normaali ja ulatust. IFC-l pole referentstasandi klassi; annotatsioon ei lähe ehitiselementide hulka ega piira ruume.
