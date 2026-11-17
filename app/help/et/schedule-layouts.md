---
title: Loendi paigutamine, salvestamine ja eksport
summary: Group a schedule, give it subtotals and totals, add a column read from a property, save it as a set-up in the file, and export it as a spreadsheet workbook (.xlsx), as text to paste into an online sheet, or as CSV. The office standard fills in what a schedule does not state.
keywords: loendi paigutus, rühmita, vahesumma, kokkuvõte, pealkirjad, kontori standard, vaikepoliitikad, seadistus, uste loend korruse järgi, tulekindlus, kinnitusvahendid, xlsx, töövihik, veebitabel, kleebi, csv, eksport, tabel, elemendid, vali loendist, arv
from: 95dfd801
---

## Mida sa teed

Muuda tavaline loend oma kontori väljastatavaks loendiks: rühmitatud tasandi, tüübi või ruumi järgi, vahesummade ja kokkuvõttega, vajalike veergudega, oma nime all. Seejärel saada see tabelisse. Iga rida ja iga arv teab endiselt elemente, millest see tuli.

## Sammud

1. Lülita {{ui:Joonista}} sisse ja ava vasakpoolses paneelis **Loendid**. Vali loend, näiteks **Uksed**.
2. Tabeli kohal vali **Rühmita** (loendi veerg, näiteks Tasand või Tüüp, või **Rühmitamata**) ja **Kokkuvõtted** (**Kokkuvõtteid pole**, **Üks kokkuvõte** või **Vahesummad ja kokkuvõte**). **Nagu seadistatud** jätab valiku salvestatud seadistusele või kontori standardile.
3. Elementidest loetava veeru lisamiseks sisesta tabeli alla omaduse või sildi nimi (näiteks `FireRating`, `Pset_DoorCommon.FireRating` või sildi nimi, näiteks `Ironmongery`) ja klikki **Lisa veerg**. BimCraft loeb esmalt elemendi enda omadusehulki, seejärel selle tüübi omi. Kui ühelgi elemendil pole veel väärtust, ütleb ta seda; veerg täitub ise, kui väärtus on määratud.
4. Sisesta nimi (näiteks „Ukselooend korruse järgi“) ja klikki **Salvesta seadistusena**. Seadistus hoitakse hoone failis ja lisandub loendite nimekirjale oma nime all. See järgib iga mudeli muudatust. **Eemalda see seadistus** võtab selle uuesti välja. Mõlemad on üks Võta tagasi samm.

## Klikki arvul, et valida, millest see tuleb

Klikki mis tahes reale või mis tahes üksikul arvul, et valida plaanil ja 3D-s elemendid, mille taga see on:

- rida valib selle rea elemendid;
- vahesumma või kokkuvõte valib kõik, mida see liidab, rühmapealkiri oma rühma;
- arv, millel on oma elemendid, valib need: seinatüübi **Mahaarvamised** valivad selle uksed ja aknad, ruumi seinapindala selle seinad.

Sama toimib mudelist tehtud dokumendis: eelvaates klikki loendi arvul.

## Eksport

- **Laadi alla Excel** salvestab .xlsx töövihiku. Pikkused, pindalad, mahud ja arvud on tegelikud arvud veeru ühikus (jalad ja tollid jäävad tekstiks). Teine leht, **Elements**, loetleb iga rea kohta selle taga olevate elementide GlobalId-d.
- **Kopeeri Google Sheetsi jaoks** paneb loendi lõikelauale tabulaatoriga eraldatud tekstina. Google Sheetsi tabelis klikki lahtril A1 ja kleebi. **Ava uus Google Sheet** avab `sheets.new`, Google'i enda aadressi tühja tabeli jaoks, sinu enda Google'i kontos. BimCraft ei logi Google'isse sisse ega saada sinna midagi: kleepimine on sinu enda.
- **Laadi alla CSV** salvestab tabeli nii, nagu see ekraanil paigutatud on.

## Kontori standard

Kontor saab kord öelda, kuidas tema loendid paigutatakse. Lülita sisse lisandmoodul **Vaikepoliitikad** ([Vaikepoliitikad](topic:default-policies)) ja määra jaotises **Sätted › Üldine › Vaikepoliitikad › Loendi paigutus (kontori standard)**:

| Poliitika | Mida see teeb |
|---|---|
| Rühmita loendid | Tasand, Tüüp, Ruum või rühmitamata, igale loendile, millel on selline veerg |
| Kokkuvõtted loendites | Kokkuvõtteid pole, üks kokkuvõte lõpus või vahesumma iga rühma all ja kokkuvõte |
| Loendi pealkiri | Muster, näiteks `{project}: {schedule}` |
| Veerupealkirjad | Nii nagu kirjutatud, SUURTÄHTEDES või Algustähtedega |

Standard kehtib iga loendi kohta, olenemata sellest, kes selle seadistab: paneelis olevad tavalised loendid, salvestatud seadistus, assistendi seadistatud loend, eksportid ja dokumendi loendid. Seadistus, mis nimetab oma rühmituse, kokkuvõtted või pealkirja, jätab need alles; standard täidab ülejäänud. Paneel ütleb, millised osad kontori standard määras. Poliitikad liiguvad koos teistega Vaikepoliitikate failis.

## Hea teada

- Seadistus nimetab oma lähteloendi ja selle veerud; see ei sisalda arve. Arvud loetakse mudelist igal korral.
- Loendid, mis ei ole elementide read (seinakoosseisud ja materjalilegend), ei oma siin paigutust ega eksporti.
- Assistent saab kõike seda sinu eest teha: vt [Lase AI-assistendil mudeliga töötada](topic:assistants).
