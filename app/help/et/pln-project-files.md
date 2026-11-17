---
title: Ava .pln- ja .pla-projektifailid
summary: Mida BimCraft praegu teeb .pln-, .pla-, .tpl- ja .bpn-failidega ning kuidas nendest eksportida IFC ja DWG, et mudel ja joonised siin avaneksid.
keywords: pln, pla, tpl, bpn, projektifail, arhiiv, mall, varukoopia, IFC eksport, DWG eksport, tõlkija, tsoonid, paigutused
from: 41fb921d
---

## Mida sa teed

Too BimCraftisse projekt, mis on salvestatud `.pln`-ina (projekt), `.pla`-na (arhiiv koos oma teegiga), `.tpl`-ina (mall) või `.bpn`-ina (varukoopia). Need on Archicadi enda failid.

## Mis praegu avaneb

- **Projektifailid ise veel ei avane.** Nende vorming ei ole avaldatud ja BimCraft seda veel ei loe. Kui avad ühe, ütleb BimCraft seda ja suunab siia.
- **BimCraft kontrollib faili esimesi baite.** Archicadi projektid versioonist 17 alates algavad sama lühikese signatuuriga, seega saab BimCraft kindlalt öelda, et fail on Archicadi projekt. Archicadi nimega fail, mis nii ei alga, on tõenäoliselt ümber nimetatud, katki või pärit vanemast versioonist. Signatuur ei eristi projekti, arhiivi ja malli.
- **IFC-eksport avaneb täielikult**: mudel 3D-s, korrused, tsoonid ruumidena, elementide andmed, omadusjaotised ja klassifikatsioonid, kõigi BimCraft-i tööriistadega.
- **DWG-eksport avaneb** 2D-vaates koos oma kihtide ja paigutustega ning {{ui:3D}}-vaates. Muutmiseks kasuta {{ui:Muuda CadCraftis}}.

Või too kogu projekt ühe zip-failina koos vaadete, paigutuste ja omadusrühmadega: vaata [Projektipaketi avamine](topic:open-project-bundle).

## IFC-eksport (mudel)

1. Ava projekt Archicadis.
2. Vali **File > Save As** ja failitüübiks **IFC**.
3. Vali IFC-tõlkija (Archicadi nimetus IFC-eksportimise sätete komplekti kohta). BimCraftile sobib tõlkija **IFC4 Reference View** või **IFC2X3 Coordination View 2.0**. IFC4X3 avaneb samuti.
4. Vali, mida eksportida: kogu projekt või ainult elemendid, mis on nähtavad korrustel, mida vaatad.
5. Salvesta, seejärel klõpsa BimCraftis {{ui:Vali fail}} ja vali `.ifc`-fail.

Enne eksportimist kontrolli tõlkija sätetes:

- **Tsoonid**: ekspordi need, et ruumid jõuaksid ruumidena. Klõpsa BimCraftis {{ui:Ruumid}}, et neid näha.
- **Omadused ja klassifikatsioonid**: ekspordi need, et nad kuvatakse {{ui:Omadused}} all ja neid saab kasutada {{ui:Otsi}}, {{ui:Värv}} ja {{ui:Koguste kokkuvõtted}} juures.
- **Lihtne `.ifc`**, mitte `.ifczip` ega `.ifcxml`. BimCraft avab ainult lihtsat `.ifc`-faili.

## DWG-eksport (joonised)

1. Ava soovitud plaan, lõige või paigutus.
2. Vali **File > Save As** ja failitüübiks **DWG**.
3. Vali DXF-DWG tõlkija ja salvesta.
4. Terve lehtede komplekti puhul salvesta paigutused Layout Bookist või avalda need DWG-na.
5. Ava `.dwg` BimCraftis. Eksportimisel lingitud joonised avanevad koos sellega, kui need on samas kaustas; vaata [Lingitud joonised ja pildid](topic:dwg-linked-files).

## Veaotsing

- **„… on Archicadi projekt: selle esimesed baidid ütlevad seda.“** Ekspordi IFC või DWG eeltoodud viisil ja ava see fail.
- **„… on nime poolest Archicadi fail, aga ei alga nii.“** Vaata, kust fail pärineb: see võib olla muud tüüpi fail uue nimega (proovi avada see oma tegeliku laiendiga), pooleli jäänud kopeerimine või projekt versioonist enne 17. Kui saad, ava see Archicadis ja ekspordi seejärel IFC või DWG.
- **Mudel avaneb ilma ruumideta.** Tsoone ei eksporditud. Lülita need IFC-tõlkijas sisse ja ekspordi uuesti.
- **Avad ei ole lõigatud.** BimCraft ütleb seda faili paneelil {{ui:Fail}} jaotise **Veel joonistamata** all. Ekspordi uuesti; kui see jääb, ava mudel programmis, mis selle tegi, ja kontrolli avasid seal.
- **DWG-i tekst näeb teistsugune välja.** Eksport võib säilitada fonte, mida BimCraftil ei ole; BimCraft joonistab teksti lihtsa sans-serif-kirjatüübiga.

Vaata ka [Projektifaili viimine 3D-sse IFC kaudu](topic:rvt-to-ifc) ja [Mida BimCraft igast vormingust loeb](topic:file-formats).
