---
title: Sümbolid, tüübid ja varad, projektimallid ja kiirkomplektid
summary: Teegil on kolme liiki elemente (sümbolid, tüübid, varad). Lisa tüüp oma projektile, alusta jagatud projektimallist, lisa kiirkomplekt ja jaga oma mallid, tüübid ja komplektid teegi üleslaadimislehe kaudu.
keywords: teek, sümbolid, tüübid, varad, tüüp, seinatüüp, põrandatüüp, katusetüüp, laetüüp, projektimall, mall, kiirkomplekt, komplekt, jagamine, üleslaadimine, versioon, muutuste logi, LOD, klassifikatsioon, litsents, märkmed praktikast
from: e13b0e67
---

## Mida teed

Leia teegist vajalik selle järgi, mis see on. Lisa tüüp projektile, mida joonistad. Alusta uut projekti jagatud mallist ja jaga oma mallid, tüübid ja komplektid.

## Teegi kolm liiki

- **Sümbolid** on joonistuskonventsioonid: ainult 2D, joonistatud märkuse suuruses, rühmitatud erialade kaupa.
- **Tüübid** kirjeldavad, millest element on tehtud: tema kihid oma tegeliku paksusega, arendustase (LOD) ja klassifikatsioonikood. Tüüp lisatakse projektile, seda ei joonistata.
- **Varad** on füüsilised objektid, nagu uksed, aknad, mööbel, sanitaartehnika ja seadmed, koos plaanivaate ja 3D-kehaga tegelikus suuruses.

Vahekaardil {{ui:Library}} vali {{ui:Library}} ja kasuta **Elemendi liiki**, et näidata Kõik, Sümbolid, Tüübid või Varad.

## Lisa tüüp oma projektile

1. Vali **Elemendi liigi** all **Tüübid** ja ava üks.
2. Vaata selle ülesehitust, LOD-i ja klassifikatsiooni pildi all, seejärel vali {{ui:Add to this project}}.
3. See lisatakse seina-, põranda-, katuse- või laetüübina, millega saad joonistada. Kui sama nimega tüüp on juba olemas, lisatakse uus koopiana ja sinu oma jääb muutmata. Üks Võta tagasi eemaldab selle.

## Projektimallid ja kiirkomplektid

Vali {{ui:Kits}}, et näha, mida inimesed jagasid.

- **Projektimall** on IFC-fail, millel on tasandid, ruudustik, tüübid ja sätted. {{ui:Save to my templates}} paneb selle jaotisse Uus hoone all Alusta.
- **Kiirkomplekt** on loend teegi elementidest. {{ui:Show the kit's items}} loetleb need kaartidena, mida saad paigutada.
- Igal komplektil on versioon ja muutuste logi, uusim ees. Versioon, mis algab nulliga, on arutamiseks; 1.0.0 on ainult see, mille rea omanik on omaks võtnud.

## Jaga oma

- **Projektimall:** {{ui:Save as template}}, märgi {{ui:Also make a file to share in the Library}}, lisa, mida see sisaldab, ning versioon. Saad `.json`-faili.
- **Kiirkomplekt:** jaotises {{ui:Kits}} vali {{ui:Make a Quick Kit from this project}}. See loetleb teegi elemendid, mida projekt kasutab.
- **Tüüp:** jaotises {{ui:Type packs}} märgi üks tüüp ja vali {{ui:Save as a Library item…}}.

Laadi fail teegi üleslaadimislehel üles. See läbib sama ülevaatuse nagu iga element ja litsentsi valid seal: iga elemendi litsents on öeldud. Elementidelt küsitakse LOD-i, IFC-klassi ja klassifikatsioonikoodi (kood, mitte ainult nimi).

## Märkmed praktikast

Iga teegi elemendi lehel saavad sisselogitud liikmed lisada märkme: kasutatud päris projektil, proovitud proovi-projektil või leitud probleem. Ütle paari sõnaga, millist liiki projekt, ja jäta kliendinimed välja. Märkus on avalik ega ole arvustus: see ei muuda elementi.

## Hea teada

- Rakendusest midagi ei saadeta. Failid tehakse sinu arvutis ja sa laadid need ise üles.
- Mallist tehtud komplekt kannab IFC-teksti täpselt nii, nagu see salvestati. Kontrolli enne üleslaadimist, kas seal on midagi privaatset.
- CadCraft näitab sümboleid ja varasid oma vahekaardil Teek; tüübid ja mallid on mõeldud BimCraft-i projektidele.
