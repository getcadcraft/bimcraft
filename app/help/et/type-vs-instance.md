---
title: Tüübi omaduse muutmine kõigi selle tüübi elementide jaoks
summary: Erista tüübiomadused eksemplari omadustest, muuda väärtust tüübil nii, et iga element järgib seda, ja kontrolli, et ühe elemendi enda muudatus jääb tema omaks.
keywords: tüüp, eksemplar, tüübiomadused, perekonna tüüp, jagatud, kopeeri kirjutamisel, kõik elemendid, massmuutmine, tootja, mudel
from: bffd8789
---

## Mida sa teed

Määra ukse tüübil tootja nii, et iga selle tüüpi uks seda näitab, ja anna üks uks oma tulepüsivus, ilma et teisi puudutaksid. See näitab BimCraftis erinevust tüübi- ja eksemplariomaduste vahel.

## Tüüp või eksemplar?

- **Eksemplari** omadus kuulub ühele elemendile: selle silt, märgis, ruum, oma tulepüsivus.
- **Tüübi** omadus kuulub tüübile, mida paljud elemendid jagavad: tootja, mudel, ukse tüübi laius.

Omaduste paneelis {{ui:Properties}} on komplektidel, mis tulevad tüübilt, nime järel tühik „(type)“ ja rida „Type property: a change here applies to every element of this type.“ (Tüübiomadus: muutus siin kehtib selle tüübi kõigile elementidele.) Kõik muud komplektid kuuluvad elemendile endale. **Type** esimeses plokis näitab tüübi nime.

## Sammud: muuda tüüpi

1. Ava IFC-mudel ja klõpsa uksel.
2. Vaata selle **Type** omaduste paneeli {{ui:Properties}} esimeses plokis, näiteks „Single-Flush 900 x 2100“.
3. Keri komplektini, mille nimi lõpeb „(type)“.
4. Klõpsa väärtusel, mida soovid muuta, näiteks **Manufacturer**.
5. Kirjuta uus väärtus ja vajuta {{key:Enter}}.
6. Vaata loendit {{ui:Changes}}: kirje lõpeb „(type)“.
7. Klõpsa teisel samal tüübil uksel.
8. Kontrolli sama väärtust: see näitab ka uut väärtust.

## Sammud: muuda ainult üht elementi

1. Klõpsa ühel uksel.
2. Ava komplekt, mille nimes ei ole „(type)“, näiteks `Pset_DoorCommon`.
3. Klõpsa väärtusel, näiteks **FireRating**, kirjuta uus väärtus ja vajuta {{key:Enter}}.
4. Klõpsa selle kõrval olevat ust, sama tüüpi.
5. Kontrolli sama väärtust: see näitab ikka vana väärtust.

Isegi kui eksportija jagas selle omadusekomplekti mõlema ukse vahel, andis BimCraft esimesele uksele enne muutmist oma koopia. Vt [Miks su muudatus muudab ainult ühte elementi](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Salvesta

1. Klõpsa {{ui:Save as IFC}} või vajuta {{key:Mod+S}}.
2. Ava salvestatud koopia BimCraftis või mis tahes IFC-vaatajas, et kontrollida mõlemat muudatust.

## Levinud vead

- **Kõigil mudelitel ei ole tüüpe.** Mõned eksportijad ei kirjuta tüübiobjekte või panevad kõik eksemplarile. Siis pole „(type)“-komplekte ja iga element tuleb muuta eraldi.
- **Sama väärtus esineb nii tüübi- kui eksemplarikomplektis.** Mõned eksportijad kirjutavad parameetri mõlemasse kohta. Teised programmid võivad lugeda kumbagi; muuda mõlemat, kui tahad, et need kokku sobiksid.
- **Oodata, et saab valida „kõik selle tüübi uksed“ ja muuta neid koos.** Selles versioonis ei ole mitme valimist. Tüübiomadus on viis, kuidas muuta paljusid elemente korraga.
