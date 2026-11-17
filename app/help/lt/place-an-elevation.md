---
title: Įdėkite kotą ir atidarykite jos vaizdą
summary: Padėkite kotos žymę ant aukšto plano, nukreipkite ją taip, kaip ji atrodo, tada raskite jos brėžinį projekto naršyklėje, redaguokite jame ir įdėkite į lapą. Žingsniai juostos išdėstymams ir klasikiniam išdėstymui.
keywords: kota, kotos vaizdas, kotos žymė, įdėti kotą, nauja kota, sukurti kotą, išorinė kota, šoninis vaizdas, priekinis vaizdas, vaizdas iš taško, kur mano kota, atidaryti kotą, kota lape, apversti kotą, pervadinti kotą, šiaurės fasadas, pietų fasadas, išdėstyti vaizdus plytelėmis, padalinti vaizdą, planas ir 3D greta
from: a7cfd2b9
---

## Ką darysite

Sukursite savo kotą: pastato vaizdą, matomą iš jūsų pasirinktos vietos, žiūrint pasirinkta kryptimi. Tam reikia dviejų spustelėjimų ant plano. Brėžinys tada atsiranda kartu su kitomis pastato kotomis.

:::note
Keturios pusės jau yra. Kiekvienas pastatas turi Šiaurės, Rytų, Pietų ir Vakarų fasadus {{ui:Projekto naršyklė}} skiltyje {{ui:Fasadai}}, nieko nedėdami. Įdėkite savo, kai norite vaizdo iš kitos vietos: statmenai į įstrižą sparną, iš kiemo vidaus arba vienos sienos vaizdo patalpoje.
:::

## Kur yra įrankis

- Juostos išdėstymai: {{ui:Vaizdas}} › **Kurti** › {{ui:Kota}}.
- Klasikinis išdėstymas: įjunkite {{ui:Braižymas}}, tada {{ui:Versija}} › {{ui:Kota}}.
- Bet kuris meniu stilius: komanda pavadinta {{ui:Kota}}; komandų paletė ją suranda, o komandų eilutėje rašoma ELEVATION.

## Žingsniai

1. Pasirinkite {{ui:Kota}}. Kota dedama ant aukšto plano, todėl jei buvote 3D vaizde, BimCraft parodo to lygio, kuriame buvote, planą. Žymeklyje rodoma **Spustelėkite, kur stovi kota**.
2. Spustelėkite, iš kur žiūrima. Išorinei kotai spustelėkite už pastato ribų, šiek tiek atokiau nuo sienos, kurią norite matyti.
3. Žymeklyje dabar rodoma **Spustelėkite, kaip ji atrodo**. Judinkite link pastato: rodyklė rodo kryptį, o trumpa linija per pirmą spustelėjimą yra briauna, iš kurios žiūrima. Spustelėkite.
4. Plane atsiranda apskritimas su numeriu ir rodykle. Tai kotos žymė. Pirmoji yra 1, kita – 2.
5. Paspauskite Esc, kad baigtumėte, arba tęskite ir įdėkite kitą.

Žymės įdėjimas yra vienas veiksmas: {{key:Mod+Z}} jį anuliuoja.

## Atidarykite brėžinį

Po antro spustelėjimo planas lieka priešais jus. Brėžinys yra {{ui:Projekto naršyklė}}:

1. Atidarykite {{ui:Fasadai}}. Jūsų kota išvardyta po keturių pusių kaip **Kota 1**.
2. Spustelėkite pieštuko mygtuką {{ui:Redaguoti šiame vaizde}} savo eilutėje, kad pamatytumėte brėžinį ir dirbtumėte jame: perkelkite sienas, duris, langus ir lygius, pridėkite pastabas ir matmenis. Žr. [Redagavimas fasaduose ir pjūviuose](topic:edit-in-elevations).
3. Spustelėkite pačią eilutę, kad atidarytumėte brėžinių rinkinį, arba pridėkite vaizdą prie savo lapo. Žr. [Vaizdai ir lapai](topic:views-and-sheets).

Klasikiniame išdėstyme projekto naršyklė yra kairiajame skydelyje, kol įjungtas {{ui:Braižymas}}. Juostos išdėstymuose tai yra skirtukas {{ui:Projekto naršyklė}} skiltyje Ypatybės.

## Ką rodo vaizdas

- Viskas priešais žymę, kiek siekia pastatas. Nieko už jos.
- Lygiai su pavadinimais ir aukščiais.
- Jei žymė stovi pastato viduje, tai, kur ji stovi, nupjaunama, kaip tai daro pjūvis. Švariam išoriniam fasadui stovėkite lauke.

## Keisti

Pasirinkite žymę plane (spustelėkite jos apskritimą su {{ui:Pasirinkti}}). Ypatybėse yra:

- {{ui:Žymė}}: jos numeris arba jūsų pavadinimas, iki 8 simbolių.
- {{ui:Apversti vaizdą}}: žiūrėti į priešingą pusę iš tos pačios vietos.
- {{ui:Žiūrėti iki}}: kiek toli priešais žymę siekia vaizdas. 0 rodo viską.

Paspauskite Delete, kad pašalintumėte žymę ir jos brėžinį. Anuliuoti grąžina abu.

:::tip
Norėdami vienu metu matyti planą ir 3D vaizdą dirbdami, juostos išdėstymuose naudokite {{ui:Vaizdas}} › **Langai** › {{ui:Išdėstyti vaizdus plytelėmis}}, o klasikiniame išdėstyme – {{ui:Skaidyti}}. Spustelėjimas vaizdo skirtuke grąžina į vieną vaizdą.
:::

## Apribojimai

- Žymės plane dar negalima vilkti ar pasukti. Pašalinkite ją ir įdėkite iš naujo arba naudokite {{ui:Apversti vaizdą}}.
- Vaizdų sąraše, kuriuos galite pridėti prie lapo, jūsų kota išvardyta kartu su pjūviais.
- Durų ir langų žymos piešiamos ant keturių šoninių fasadų, ne ant jūsų įdėto.

## IFC

Žymė faile išsaugoma kaip IfcAnnotation pavadinimu "Elevation 1" su objekto tipu "Elevation marker", aukšte, kuriame ji buvo įdėta. Kita programa rodo ją kaip anotaciją; pats brėžinys BimCraft kiekvieną kartą sukuriamas iš modelio.
