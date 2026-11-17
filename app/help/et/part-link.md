---
title: Saada element PartCraftile ja too see tagasi
summary: Vali tugi, konsool, piire või seade, kujunda see detailina PartCraftis ümbritseva hoone kontekstis ja kinnita uus kuju mudelisse tagasi.
keywords: partcraft, detail, saada, link, element, tugi, konsool, aed, piire, seade, kujundus, edasi-tagasi, kinnita, muudetud, detaililingid
from: 4ce2f449
---

## Mida sa teed

Kujunda hoone üks element detailina: saada see PartCraftile, muuda seal (lõika, lisa, puuri, muuda mõõtmeid) ja too uus kuju mudelisse tagasi.

## Sammud

1. Vali mudelist üks element: üldine element, seade, post, tala, piire või mööbel.
2. Vali tööriistaribalt {{ui:Detaililingid}} ja seejärel {{ui:Saada PartCraftile}}. PartCraft avaneb uuel vahekaardil elemendiga detailina. 3 m kaugusel olevad elemendid joonistatakse selle kõrvale halliks, et saaksid detaili kohapeal kujundada. Neid ei saa seal muuta.
3. Muuda detaili PartCraftis. PartCraftis vali {{ui:Fail}} › {{ui:Ekspordi}} › {{ui:Salvesta tagasi BimCraftile}}. Tagasi salvestada saab nii sageli, kui soovid.
4. BimCraftis näitab nupp {{ui:Detaililingid}} arvu ning kaart loetleb elemendi kui {{ui:PartCraftis muudetud}}, kusjuures suuruse ja mahu muutus on kirjeldatud sõnadega.
5. Vali {{ui:Näita}}, et seda vaadata, seejärel {{ui:Kinnita}}, et anda elemendile uus kuju, või {{ui:Jäta minu oma}}, et jätta see endiseks.

## Mida sa peaksid nägema

- Kinnitamine on üks tagasivõtmise samm. Element säilitab oma koha, GlobalId, tüübi, materjali ja omadused. Asendatakse ainult selle keha.
- Elemendile lisatakse omaduskomplekt {{ui:CadCraft_PartLink}} lingi, selle oleku ja redaktsiooniga.
- {{ui:Saada uuesti}} avab sama elemendi PartCraftis veel kord samal lingil.

## Hea teada

- Seinad, põrandad, katused, uksed, aknad, trepid, rambid ja ruumid joonistatakse ehitustööriistadega kontuuri järgi ning ehitatakse pärast iga muudatust uuesti. Teise rakenduse keha kirjutataks nende üle, seega need keeldutakse põhjusega.
- Kuju tuleb tagasi võrgusilmana (IFC-tesselatsioonina), mitte detaili tunnustena. Detaili ajalugu jääb PartCraftis.
- Kui element muutus mudelis pärast saatmist, ütleb kaart seda enne kinnitamist; kinnitamine asendab need muudatused.
- Midagi ei laadita üles. Mõlemad rakendused on sama saidi lehed ja edastavad elemendi nende vahel selles brauseris. Mõlemad peavad olema avatud samas brauseris.
- Element peab PartCraftis moodustama tahke keha. Element, mille kujul on suuri avatud lünki, keeldutakse seal koos avatud servade arvuga.
- Kinnitamiseks tee aktiivseks mudel, mis element sisaldab.
