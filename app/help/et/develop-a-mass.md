---
title: Arenda hoonemass lähiala uuringust
summary: Võta CivilCrafti lähialavaates uuritud hoonemass ja arenda see korrusteks, seinteks ja põrandateks, säilitades ala asukoha kaardil.
keywords: mass, hoonemass, massimine, lähiala uuring, arendamine, CivilCraft, üleandmine, korrused, seinad, põrandad, jalajälg, georefereerimine, IFC
from: 557b94d1
---

CivilCrafti lähialavaade võib joonistada hoonemassid krundile ja testida neid maapinna, sisestatud piirangute ja päikese suhtes. **Arenda BimCraftis** avab BimCraftis uue vahekaardi massidega; **Massid IFC-na** salvestab need failina, mille avad siin tavalisel viisil. Mõlemal juhul saabub iga mass saidina: hoonena, millel on igale korrusele oma tasand, ja ühe plokina (mass ise), mis kannab oma arve.

## Arenda mass

1. Vali mass 3D-vaates. Omadused näitavad selle kasutust, korruseid ja korrusekõrgust, jalajälge, brutopõrandapinda, seda, kuidas see asetub nõlvale, ja selle krunti.
2. Klõpsa **Arenda seda massi**.

Ühe tagasivõtmise sammuga saab iga selle hoone korrus seinad ümber jalajälje (jalajälg on seinte välispind; iga sein läheb ülemise korruseni ning kõige ülemine on üks korrus kõrge), ja kogu hoone alla tuleb põrand. Plokk asendatakse ja hoone säilitab uuringu arvud omaduste hulgas `CadCraft_SiteMass`, märgituna arendatuna. Katust ei ole: katus sõltub projektist.

## Saidi asukoht

CivilCrafti fail on kirjutatud projekti enda pikkuseühikus ja, kui CivilCrafti projektil oli koordinaatsüsteem, kannab seda projekti kaardi teisendusena. Massi arendamine seda ei muuda, nii et hoone jääb sinna, kus kaart ütleb.
