---
title: Siseseinte vaated
summary: Koosta üks leht, mis näitab ruumi nelja seina seest vaadatuna, koos mõõtude ja siltidega, ning salvesta see PDF-ina.
keywords: siseseina vaade, ruum, sein, kapp, köök, vaade, leht, PDF, mõõt, silt, ruumiobjekt, A-501
from: 1e3a70a8
---

## Mida teed

Vali ruum ja saad ühe lehe, mis näitab selle nelja seina nii, nagu näeksid neid ruumi seest seistes. See on tehtud köökidele, vannitubadele ja igale ruumile, kus pead nägema iga seina kappe, uksi ja aknaid.

## Koosta leht

1. Vali ruum. Plaanil, kus {{ui:Draw}} on sisse lülitatud, klõpsa ruumi sees. 3D-vaates või mudelipuus vali ruum (IfcSpace).
2. **Omadustes** klõpsa {{ui:Interior elevations…}}.
3. Dialoog avaneb lehega.
4. Klõpsa {{ui:Download PDF}}, et see salvestada. Faili nimi on „<file> — Interior elevations — <room>.pdf“ ning see on vektor-PDF.
5. Kui oled lõpetanud, klõpsa {{ui:Close}}.

## Mida leht näitab

Leht sisaldab nelja vaadet, kaks korda kaks, ühes mõõtkavas: suurim standardne mõõtkava, mis mahub. Need on **Põhjasein**, **Idasein**, **Lõunasein** ja **Läänesein**. Pealkirjaplokk kannab lehe numbrit A-501, pealkirja „Siseseinte vaated — “ koos ruumi numbri ja nimega, projekti ning kuupäevaga.

Iga vaade on lõigatud läbi ruumi keskosa ja vaatab selle külje seina. Külgseinad ning neisse lõigatud elemendid, näiteks aken, kuvatakse vaate ümber hallide lõikepindadena (poché). Vaade lõpeb seina pinnast veidi edasi, nii et seina taga olev ei paista.

Iga vaate juures on:

- ruumi laius selle all, sisepinnast sisepinnani;
- ruumi kõrgus selle kõrval, põrandast kõrgemal asuva tasandini;
- ruudukujuline silt igal selle seina uksel ja kuusnurkne silt igal aknal, koos tähisega (D1, W1 jne);
- ringikujuline silt elemendi numbriga iga teegi elemendi juures, mis on paigutatud selle seina ette: kapid, sanitaartehnika ja seadmed.

:::note
Vaated tehakse mudelist iga kord, kui avad dialoogi, nii et need vastavad alati mudelile. Teisalda kappi ja ava dialoog uuesti.
:::

## Oma lehtedel

Iga ruumi iga sein on ka vaade, mille saad panna enda loodud lehele: projektibrauseris klõpsa {{ui:New sheet}}, seejärel lisa **Siseseinte vaated** all „101 Köök — Põhjasein“ ja ülejäänud. See tuleb samade mõõtude ja siltidega.

## Veel valmis pole

Siseseinte vaated genereeritud joonisekomplektis (need tulevad ruumi **Omadustest** või sinu enda lehtedelt), ruumid, mis pole enamasti ristkülikukujulised (vaade on iga külje juures ruumi kasti ümber ruudukujuline), joonistamine, märkused ega enda mõõdud nendel vaadetel ning seinte valimine, mida näidata. Vaata [Mis veel valmis pole](topic:not-built-yet).
