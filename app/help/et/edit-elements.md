---
title: Ehitiselementide kustutamine, lõikamine, kopeerimine ja kleepimine
summary: Vali IFC-mudelis sein, uks, mööbel või muu element; kustuta see, lõika see või kopeeri ja kleebi see sinna, kuhu klõpsad, samasse kohta või teisele korrusele.
keywords: kustuta, eemalda, kustuta jäljetult, lõika, kopeeri, kleebi, dubleeri, teisalda, vali kõik, vali kõik elemendid, ehitiselement, sein, uks, aken, trepp, ava, võta tagasi
from: d9eec37f
---

## Mida sa teed

Muuda IFC-mudeli sisu: eemalda soovimatud elemendid, kopeeri sein või mööbliese teise kohta või teisalda elemente lõikamise ja kleepimisega. Iga muudatus on üks tagasivõetav samm ja salvestamine kirjutab uue faili, nii et sinu algne fail jääb samaks.

## Sammud

1. Ava IFC-mudel. Vt [Ava IFC-mudel ja vaata seda 3D-vaates](topic:open-ifc-model).
2. Vali, mida muuta: klõpsa elemendil, hoia all {{key:Mod}} või {{key:Shift}} ja klõpsa, et valida veel, või vajuta {{key:Mod+A}} ({{ui:Veel}}, {{ui:Vali kõik}}), et valida kõik nähtavad elemendid.
3. Seejärel:
   - **Kustuta:** vajuta {{key:Delete}} või {{ui:Veel}}, {{ui:Kustuta}}.
   - **Kopeeri:** vajuta {{key:Mod+C}} või klõpsa {{ui:Kopeeri}}.
   - **Lõika:** vajuta {{key:Mod+X}} või {{ui:Veel}}, {{ui:Lõika}}. Elemendid eemaldatakse ja neid saab kleepida.
4. Kleepimiseks vajuta {{key:Mod+V}} või klõpsa {{ui:Kleebi}}. Kopeeritud asja suurune läbipaistev kast liigub hiirekursoriga paigutusribal valitud korrusel. Vajuta {{key:R}}, et seda 90° pöörata, ja klõpsa kohta, kuhu see läheb. Iga klõps paigutab veel ühe koopia; peatamiseks vajuta {{key:Esc}}.
5. Või vajuta {{key:Mod+Shift+V}} ({{ui:Veel}}, {{ui:Kleebi samasse kohta}}): pärast lõikamist lähevad elemendid täpselt tagasi oma endisse kohta; pärast kopeerimist asub koopia otse originaalide kõrval.
6. Klõpsa {{ui:Salvesta IFC-na}}, et laadida muudetud mudel alla.

## Mis käib elemendi juurde

- **Osad:** trepp võtab kaasa oma trepijooksud, kardinseina paneelid, kõik osadest koosnev võtab need kõik kaasa.
- **Avad:** sein võtab kaasa seina sisse lõigatud avad. Ukse või akna kustutamine võtab kaasa ka ava, mida see täitis, nii et sein sulgub, nagu see teeb ka autoriprogrammis. BimCraftis joonistatud seina kustutamine kustutab ka selle uksed ja aknad ning ühendab alles jäänud seinad uuesti. Mujal tehtud failist seina kustutamine jätab selle uksed ja aknad sinna, kus nad olid.
- **Andmed:** koopia on sama tüüpi, materjalide, omaduskomplektide ja kogustega kui originaal, ning sellel on uus GlobalId. Koopia väärtuse muutmine hiljem originaali ei mõjuta.
- **Teegi üksused** säilitavad oma teegi andmed; koopia saab järgmise vaba üksusenumbri ja tagasi kleebitud lõigatud üksus säilitab oma numbri.

## Mida peaksid nägema

- „Kustutatud: …“ või „Kleebitud: …“ loendis {{ui:Muudatused}}. {{key:Mod+Z}} võtab viimase muudatuse tagasi; {{key:Mod+Y}} paneb selle uuesti tagasi.
- Pärast kustutamist näitab olekurida, mitu osa ja ava ka kaasa läks.
- Kleebitud elemendid on valitud, nii et saad need uuesti samasse kohta kleepida, et teha rida, või need kustutada.

## Hea teada

- Koopiatel on sama geomeetria mis originaalil (IFC lubab elementidel seda jagada), seega fail kasvab väga vähe.
- Ehitiselemendid kleebitakse mudelisse, kust need kopeeriti, samas vahekaardis. Paigutatud teegi üksuste kasutamiseks teises mudelis kopeeri ükshaaval: vt [Kopeeri, kleebi ja dubleeri teegi üksusi](topic:copy-paste).
- Korruseid, ruume, hooneid ja krunti ei saa kustutada ega kopeerida. Vali hoopis nende sees olevad elemendid. BimCraftis joonistatud ruum tuleb ümbritsevatest seintest: kustuta sein, et ühendada kaks ruumi.
- BimCraftis endi seina-, ukse- ja aknatööriistadega joonistatud seinu, uksi ja aknaid ei saa veel kopeerida, lõigata ega dubleerida; olekurida ütleb seda. Joonista need uuesti. Kustutamine töötab.
- Kopeerimine paneb ka kopeeritud asjade nimed ja omadused lõikelauale tekstina, et neid saaks kleepida tabelisse või e-kirja.

## Levinud vead

- **{{ui:Kustuta}} on hall.** Midagi pole valitud või on valitud ainult korrused või ruumid. Osuta sellele, et lugeda põhjust.
- **Kleepimine ütleb, et elemendid tulid teisest mudelist.** Oled pärast kopeerimist avanud teise mudeli. Ava esimene mudel uuesti ja kopeeri need seal.
- **Kleebitud koopia on teisel korrusel.** Paigutusriba {{ui:Korrus}} otsustab, kuhu see läheb; vali korrus enne klõpsamist.

## Seotud

- [Peida, isoleeri ja vaata elemente läbi](topic:hide-and-isolate)
- [Klahvid ja hiir](topic:keyboard#edit)
