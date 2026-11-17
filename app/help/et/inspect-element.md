---
title: Valige element ja lugege selle omadusi
summary: Klõpsake mis tahes elemendil 3D-mudelis, et seda esile tõsta, ning lugege selle nime, tüüpi, tähist, GlobalId-d, omaduste komplekte ja koguseid.
keywords: omadused, valimine, klõps, element, parameetrid, omaduste komplektid, pset, kogused, globalid, guid, tüüp, kontrollimine
from: 43b80aa8
---

## Mida teete

Valige IFC-mudelis elemente ja lugege kõike, mida fail nende kohta ütleb: atribuute, omaduste komplekte, tüübi omadusi ja koguseid.

## Sammud

1. Avage IFC-mudel.
2. Klõpsake elemendil, näiteks ukse peal. Klõpsake ilma lohistamata: rohkem kui mõne pikslilise lohistamine pöörab vaadet, mitte ei vali.
3. Vaadake elementi: see on esile tõstetud sinisega.
4. Vaadake paremal asuvat paneeli {{ui:Omadused}}. Üleval on elemendi liik (näiteks "Door" või "WallStandardCase") ja selle nimi.
5. Lugege esimest plokki: **Nimi**, **Tüüp**, **Objekti tüüp**, **Tähis**, **Kirjeldus**, **GlobalId** ja **Rida**.
6. Kerige alla omaduste komplektideni. Esimesed kolm on avatud; klõpsake mis tahes teise komplekti nimel, et see avada.
7. Klõpsake teisel elemendil, et sinna minna.
8. Vajutage {{key:Esc}} või klõpsake tühjal taustal, et valik tühistada.

## Mida peaksite nägema

- Esile tõstetud element ja selle andmed paremal.
- Omaduste komplektid tähestikulises järjekorras. Komplektidel, mis tulevad elemendi **tüübist**, on nime järel " (tüüp)" ja märkus "Tüübi omadus: selle muutmine kehtib kõigile selle tüübi elementidele."
- Koguste komplektid (nagu pikkused, pindalad ja mahud) on loetletud koos teiste komplektidega. Kogused on ainult lugemiseks.
- Muudetavad väärtused näevad välja nagu nupud. [Muutke IFC omadusi ja salvestage muudetud koopia](topic:edit-ifc-properties) näitab, kuidas.

[Omaduste paneeli väljad](topic:properties-panel) selgitab iga välja.

## Peidetud elementide juurde pääsemine

1. Et jõuda hoone sees oleva elemendini, tühjendage selle kohal olevad korrused loendis {{ui:Korrused}}.
2. Et jõuda ruumimahu taga oleva seinani, lülitage {{ui:Ruumid}} välja.
3. Klõpsake elemendil.

## Levinud vead

- **Klõpsamise ajal veidi lohistamine.** BimCraft käsitleb seda vaate pööramisena ja ei vali. Hoidke hiir paigal.
- **Arvude kõrval ühikute ootamine.** Väärtused kuvatakse nii, nagu need failis on salvestatud, ümardatud nelja komakohani, ilma ühikumärgita. Pikkused meetrilises eksportis on tavaliselt millimeetrites või meetrites; kontrollige eksportija sätteid.
- **Parameetri otsimine tuttava nime järgi.** Eksportijad nimetavad parameetreid ümber ja rühmitavad need IFC omaduste komplektidesse, nagu `Pset_WallCommon`. Vaadake läbi iga komplekt; kohandatud parameetrid asuvad sageli komplektis, mis on nime saanud eksportiva programmi või teie ettevõtte järgi.
- **Otsingukasti ootamine.** Klõpsake elemendi valimiseks; {{key:Mod}}+klõps või {{key:Shift}}+klõps valib rohkem ja {{key:Mod+A}} valib kõik kuvatud elemendid. Loend {{ui:Elemendid}} vasakul loeb elemente ainult liigi järgi; seda ei saa klõpsata.
- **Valimine projektifaili kaardil.** Failikaardil ei ole elemente, mida valida: "Elemendi omadused vajavad 3D-mudelit. Avage selle faili IFC-eksport, et neid näha."
