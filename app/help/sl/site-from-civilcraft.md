---
title: Sosednje stavbe in parcela iz CivilCraft
summary: Vzemite stavbe in parcelo, ki jih je CivilCraftov Naslov na parcelo našel okoli naslova, kot predloge, in dodajte tiste, ki jih označite.
keywords: parcela, naslov, zemljišče, sosedi, kontekst, civilcraft, ccsite, stavbe, obris parcele, predlog
from: 3be9407b
---

## Kaj naredi

V CivilCraft, Površje › Več › Naslov na parcelo iz odprtih podatkov poišče stavbe, parcelo, namensko rabo, poplavno območje in tla okoli naslova. Njen gumb „Pošlji v BimCraft kot predloge“ (ali „Shrani parcelo kot datoteko“ in nato odprite `.ccsite.json` tukaj) jih prinese v BimCraft. Nič se ne doda, dokler ne rečete.

## Kako uporabiti

1. Začnite ali odprite model. Naslovna točka je v izhodišču etaže, na kateri ste.
2. Okno našteje vsako sosednjo stavbo in parcelo s potrditvenim poljem. Odstranite kljukico pri tem, kar ne želite.
3. Stavbe, katerih višine vir ni podal, uporabijo višino, vpisano na vrhu okna. Stavba, ki je podala samo število etaž, šteje 3 m na etažo, in okno to pove.
4. Pritisnite „Dodaj označene“. Stavbe postanejo zidovi okoli svojih tlorisov, tako visoki, kot so navedeni, v enem koraku razveljavitve. Parcela postane obris parcele kot drugi korak razveljavitve.

Namenska raba, poplavno območje in tla so navedeni samo za informacijo; niso narisani.

## Kaj morate vedeti

- Obrisi so tako dobri kot odprti podatki: OpenStreetMap in plasti katastrskih parcel se od kraja do kraja precej razlikujejo. Preverite, kar je pomembno, z geodetskim posnetkom.
- Položaji so metri vzhodno in severno od naslovne točke v ravninskem približku, natančni na nekaj metrov znotraj nekaj kilometrov.
- Podatki nosijo licence svojih virov (OpenStreetMap je ODbL); okno prikaže vrstico navedbe avtorja.
