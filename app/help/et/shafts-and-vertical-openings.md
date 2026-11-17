---
title: Šahtid ja avad läbi põrandate
summary: Šaht on üks kontuur, mis lõikab iga põranda, lae ja katuse kahe tasandi vahel. Vertikaalne ava lõikab neist ühte. Seina ava lõikab seina.
keywords: šaht, liftišaht, lifti šaht, trepiava, astmetõus, vertikaalne ava, põranda ava, laeava, katuseava, valgusakna ava, auk põrandas, seina ava, IfcOpeningElement, mahaarvamine, netopindala
from: 8e9e1641
---

## Mida sa teed

Lõika liftišaht läbi hoone ühe visandiga, lõika üks auk ühes põrandas ja loe, mis pindadest välja võeti.

## Kus on tööriistad

- Lindi paigutused: {{ui:Arhitektuur}} › **Ava** › {{ui:Šaht}}, {{ui:Vertikaalne ava}} ja {{ui:Seina ava}}.
- Klassikaline paigutus: joonistusriba › {{ui:Ruumid}} menüü (Šaht, Vertikaalne ava) ja › {{ui:Seinad}} menüü (Seina ava).

## Šaht

1. Ava tasandi plaan, millelt šaht algab. Vali {{ui:Šaht}}.
2. Reas vali {{ui:Alumine tasand}} ja {{ui:Ülemine tasand}} ning nihked, kui šaht algab või lõpeb nendest kõrgemal või madalamal.
3. Klõpsa kontuuri nurki. Klõpsa esimest nurka uuesti; topeltklõps või Enter lõpetab.
4. Iga põrand, lagi ja katus kahe kõrguse vahel lõigatakse läbi. Olekurida ütleb, mitu.

Šaht on üks asi. Vali selle kontuur mis tahes tasandil, mida see läbib: Omadused sisaldab selle nime, tasandeid ja nihkeid, mida see lõikab, ning välja võetud pindala. Muuda seda ja iga ava järgib. Kustuta see ja iga ava kaob. Igaüks on üks tagasivõtmise samm.

Šaht jätkab lõikamist: tasandite vahele hiljem tehtud põrand lõigatakse ilma küsimata ja kustutatud põrand jäetakse rahule.

Põrandat, millel šaht seisab, ei lõigata (selle ülemine serv on alus). Anna alusele negatiivne nihe, et see ka lõigata. Anna ülaosale positiivne nihe, et minna läbi katuse.

## Vertikaalne ava

1. Vali {{ui:Vertikaalne ava}}. Reas vali, mida lõigata: põrand, lagi või katus.
2. Klõpsa kontuuri nurki ja lõpeta nagu eespool.
3. Selle tasandi põrand, lagi või katus kontuuri all lõigatakse. See kuulub ühele elemendile: kustuta põrand ja ava läheb koos sellega.

## Seina ava

{{ui:Seina ava}} on tööriist, mille kohta vaata [Kuju seina](topic:wall-shape): klõpsa seinal plaanil või kahte nurka selle pinnal 3D-s.

## Kogused

Põrandate mõõtmisreegli järgi on elemendi netopindala selle brutopindala miinus sellest välja lõigatud osa. Šaht või vertikaalne ava on mahaarvamine igal põrandal ja lael, mida see lõikab; Põrandate ja viimistluste loendid ning IFC-kogused näitavad samu arve. Katusel on mahaarvamine katuse pinna pindala: plaanipindala jagatud kaldenurga koosinusega.

Kontuur, mis ulatub servast üle, mahaarvab ainult selle osa, mis asub elemendil.

## Kui midagi ei lõigata

Šaht, millel pole takistust, tehakse ikka ja öeldakse seda: see lõikab seda, mis seal hiljem ehitatakse. Vertikaalne ava vajab midagi enda all; kui seal pole midagi, ütleb olekurida seda ja midagi ei tehta.

## IFC-s

Iga lõige on IfcOpeningElement, millel on IfcRelVoidsElement selle elemendini, mida see lõikab, nii et iga IFC-programm näitab auku. Katus lõigatakse tahkude kaupa. Šaht ise on oma avade IfcGroup.

## Pole veel valmis

- Kõverad kontuurid.
- Šahti seinad: joonista need seina tööriistaga.
- Kontuuri muutmine nurkade lohistamisega (muuda seda Omadustes või kustuta ja joonista uuesti).
- Joonistatud põranda enda Omadused näitavad ainult selle pindala miinus oma avad; loendid ja IFC-kogused hõlmavad ka šahti.

Vaata ka [Ruumid ja ruumide eraldajad](topic:rooms-and-separators).
