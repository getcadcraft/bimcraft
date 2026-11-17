---
title: Dviejų žmonių modelio pakeitimų sujungimas
summary: Leiskite git, Fossil ar Mercurial sujungti dvi redaguotas tos pačios IFC modelio kopijas objektas po objekto, kad du žmonės galėtų braižyti viename pastate ir sujungti darbą.
keywords: sujungimas, git, fossil, mercurial, versijų valdymas, konfliktas, trijų krypčių, cadcraft merge, gitattributes, ifc, globalid, komanda, dvi kopijos, šakos
from: 50733df8
---

Du žmonės paima tą patį pastato kopiją: vienas braižo rytinį sparną, kitas – vakarinį, o vėliau kopijas reikia sujungti į vieną. Jei jie palietė skirtingus objektus, sujungimą gali atlikti programa vietoj žmogaus.

## Kas tai įgalina

Kiekviena siena, durys, lygis, patalpa ir savybių rinkinys IFC faile turi GlobalId, kuris niekada nesikeičia. Sujungimas ieško objektų pagal tą identifikatorių, o ne pagal numerį, kurį failas jiems suteikia (`#123`), nes numeriai keičiasi, kai programa išsaugo. Dalys, kurios priklauso objektui ir neturi savo identifikatoriaus (padėtys, formos, vienetai), lyginamos pagal tai, ką jos turi.

Abi kopijos turi būti tos pačios IFC versijos (2x3, 4 arba 4.3). Sujungimas palieka jūsų failą kaip yra, su jo tvarka ir numeriais, ir prideda tai, kas nauja, todėl git skirtumas (diff) rodo tik tai, ką sujungimas pakeitė.

## Nustatymas

Git reikia dviejų eilučių kiekvienai saugyklai vieną kartą:

```
# .gitattributes
*.ifc merge=cadcraft

# kartą, kiekviename kompiuteryje
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Jei nenaudojate git, paleiskite `cadcraft merge <base> <ours> <theirs>`. Fossil ir Mercurial priima tuos pačius tris failus savo sujungimo įrankio nustatyme. Niekas neįkeliama; viskas vykdoma jūsų kompiuteryje.

## Taisyklės

- Atributas, pakeistas tik vienoje pusėje, paimamas. Tas pats pakeitimas abiejose pusėse paimamas vieną kartą.
- Tas pats atributas pakeistas dviem skirtingais būdais (tas pats lygis pervadintas dviem būdais) yra **konfliktas**: jūsų pusė lieka, o ataskaitoje išvardijamos abi. Atidarykite rezultatą ir ištaisykite rankiniu būdu.
- Daiktų sąrašas (lygio sienos, rinkinio savybės) sujungiamas kaip rinkinys: išsaugoma tai, ką pridėjo bet kuri pusė, ir pašalinama tai, ką pašalino bet kuri pusė. Du žmonės, kiekvienas pridėjęs sienų tam pačiam lygiui, nesukuria konflikto.
- Objektas, pridėtas bet kurioje pusėje, išsaugomas su savo forma ir savybėmis. Pašalintas vienoje pusėje ir nepakeistas kitoje: pašalinamas. Pašalintas vienoje pusėje ir pakeistas kitoje: pašalinamas ir pažymimas ataskaitoje.
- Failo laiko žyma ir autorius bei kiekvieno objekto savininko istorija lieka jūsų.

Geometrija sujungiama kaip visuma: sienos forma paimama iš vienos pusės, niekada nesumaišoma taškas po taško. Suspausti IFC ir IFCX failai nesujungiami. Po sujungimo atidarykite rezultatą BimCraft ir prieš įrašydami pažiūrėkite į skydelį {{ui:Problemos}}.
