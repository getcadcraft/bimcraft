---
title: Seotud joonised ja pildid
summary: Näita joonise seotud jooniseid (välisviiteid, xref) ja tiitelploki pilte, avades joonise kausta või lisades failid käsitsi.
keywords: xref, välisviide, seotud joonis, lisa, ülekate, pilt, logo, tiitelplokk, puuduv xref, etransmit, viidete haldur
from: 5593d4b1
---

## Mida teete

Tee joonis täielikuks: näita jooniseid, millele see viitab (välisviited ehk xref-id), ja pilte, mida see kasutab, näiteks logo tiitelplokis.

## Lihtne viis: ava kaust

1. Klõpsa {{ui:Ava kaust}} ja vali kaust, kus on joonis ja selle viited, näiteks projekti kogu kaust `Cad`.
2. Kaustaaruandes keri jaotiseni **CAD-joonised**.
3. Klõpsa joonisel.
4. Vaata paremal paneeli {{ui:Omadused}} jaotisi **Seotud joonised** ja **Pildid**.

BimCraft otsib iga seotud joonist selle nime järgi („*nimi*.dwg“), kõigepealt samast kaustast, kus on joonis, seejärel kogu avatud kausta seest. Pilte otsitakse samamoodi, ka sarnase nime järgi: eTransmit või Revit-eksport lisab sageli projekti nime ette, nii et `logo.png` leitakse kui `Tower-logo-5425051.png`.

## Teine viis: lisa failid käsitsi

1. Ava joonis eraldi.
2. Paremal jaotises **Seotud joonised** klõpsa {{ui:Lisa seotud joonised…}}. Jaotises **Pildid** on nupp {{ui:Lisa pilte…}}; mõlemad avavad sama valija.
3. Vali seotud `.dwg`-failid ja pildifailid. Saad valida mitu korraga.
4. Oota, kuni BimCraft avab joonise nende failidega uuesti.

## Mida peaksid nägema

Iga seotud joonis ja pilt on loetletud sildiga:

| Silt | Tähendab |
|---|---|
| **Näidatud** | Leitud ja joonistatud. Selle all olev tee näitab, kust see tuli, või „lisatud sinu poolt“. |
| **Näidatud, sarnane nimi** | Pilt leiti sarnase nime järgi. Kontrolli, et see on õige. |
| **Ei leitud** | Pole kaustas ega lisatud failides. Puuduv pilt näidatakse tühja raamina. |
| **TIFF-i ei saa brauseris näidata** | Pilt on TIFF-fail, mida brauserid ei joonista. Salvesta see PNG-na samanimelisena ja lisa see. |
| **Ei saanud lugeda** | Fail leiti, kuid seda ei saanud avada pildina. |

Paneel {{ui:Joonis}} vasakul näitab seotud joonistele „*n* / *m* laaditud“. Seotud joonise kihid ilmuvad loendis {{ui:Kihid}} kujul „*lingi nimi*|*kiht*“.

## Levinud vead

- **Ainult joonise avamine.** „See joonis näitab ainult oma sisu, kuni seotud joonised on lisatud. Kogu projektikausta avamine leiab need automaatselt.“
- **Liiga väikese kausta avamine.** Kui viited asuvad õdekaustas, ava hoopis ülemkaust.
- **Ümber nimetatud viited.** BimCraft seob seotud jooniseid nime järgi. Kettal ümber nimetatud viidet ei leita; lisa see käsitsi.
- **Viidete viited.** BimCraft laadib jooniseid, millele avatud joonis viitab. Nende sees olevaid seotud jooniseid ei otsita, seega need selles versioonis tavaliselt ei kuvata.
