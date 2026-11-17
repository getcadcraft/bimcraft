---
title: Atidaryti .pln ir .pla projektų failus
summary: Ką BimCraft šiandien daro su .pln, .pla, .tpl ir .bpn failais ir kaip iš jų eksportuoti IFC bei DWG, kad modelis ir brėžiniai čia atsidarytų.
keywords: pln, pla, tpl, bpn, projekto failas, archyvas, šablonas, atsarginė kopija, IFC eksportas, DWG eksportas, vertėjas, zonos, maketai
from: 41fb921d
---

## Ką atliksite

Įkelti į BimCraft projektą, įrašytą kaip `.pln` (projektas), `.pla` (archyvas su jo biblioteka), `.tpl` (šablonas) arba `.bpn` (atsarginė kopija). Tai yra Archicad failai.

## Kas atsidaro šiandien

- **Patys projekto failai dar neatsidaro.** Jų formatas nepaskelbtas, o BimCraft jo dar nenuskaito. Atidarius vieną, BimCraft apie tai praneša ir nukreipia čia.
- **BimCraft patikrina pirmuosius failo baitus.** Archicad projektai nuo 17 versijos prasideda ta pačia trumpa signatūra, todėl BimCraft gali tiksliai pasakyti, ar failas yra Archicad projektas. Failas su Archicad pavadinimu, kuris taip nesiprasideda, greičiausiai buvo pervardytas, yra sugadintas arba kilęs iš senesnės versijos. Signatūra neatskiria projekto, archyvo ir šablono.
- **IFC eksportas atsidaro visas**: modelis 3D, aukštai, zonos kaip erdvės, elementų duomenys, savybių rinkiniai ir klasifikacijos, su visais BimCraft įrankiais.
- **DWG eksportas atsidaro** 2D vaizde su savo sluoksniais ir maketais bei {{ui:3D}} vaizde. Kad jį redaguotumėte, naudokite {{ui:Redaguoti programoje CadCraft}}.

Arba atneškite visą projektą kaip vieną zip failą, su jo vaizdais, maketais ir savybių grupėmis: žr. [Atidaryti projekto paketą](topic:open-project-bundle).

## Eksportuoti IFC (modelį)

1. Atidarykite projektą Archicad.
2. Pasirinkite **Failas > Įrašyti kaip** ir kaip failo tipą nurodykite **IFC**.
3. Pasirinkite IFC vertėją (Archicad pavadinimas IFC eksporto nustatymų rinkiniui). Tinka **IFC4 Reference View** arba **IFC2X3 Coordination View 2.0**. IFC4X3 taip pat atsidaro.
4. Pasirinkite, ką eksportuoti: visą projektą arba tik elementus, matomus aukštuose, kuriuos žiūrite.
5. Įrašykite, tada BimCraft spustelėkite {{ui:Pasirinkti failą}} ir pasirinkite `.ifc` failą.

Prieš eksportuodami patikrinkite šiuos vertėjo nustatymus:

- **Zonos**: eksportuokite jas, kad kambariai atsidurtų kaip erdvės. BimCraft spustelėkite {{ui:Erdvės}}, kad jas pamatytumėte.
- **Savybės ir klasifikacijos**: eksportuokite jas, kad jos rodytųsi {{ui:Savybės}} skydelyje ir būtų galima naudoti {{ui:Ieškoti}}, {{ui:Spalva}} ir {{ui:Kiekių suma}}.
- **Paprastas `.ifc`**, o ne `.ifczip` ar `.ifcxml`. BimCraft atidaro tik paprastą `.ifc`.

## Eksportuoti DWG (brėžinius)

1. Atidarykite planą, pjūvį ar maketą, kurio norite.
2. Pasirinkite **Failas > Įrašyti kaip** ir kaip failo tipą nurodykite **DWG**.
3. Pasirinkite DXF-DWG vertėją ir įrašykite.
4. Visam lapų rinkiniui įrašykite maketus iš Maketų knygos arba paskelbkite juos kaip DWG.
5. Atidarykite `.dwg` BimCraft. Eksporto metu susieti brėžiniai atsidaro kartu su juo, jei yra tame pačiame aplanke; žr. [Susieti brėžiniai ir paveikslėliai](topic:dwg-linked-files).

## Trikčių šalinimas

- **„… yra Archicad projektas: jo pirmieji baitai tai sako.“** Eksportuokite IFC arba DWG, kaip aprašyta aukščiau, ir atidarykite tą failą.
- **„… pavadintas kaip Archicad failas, bet taip nesiprasideda.“** Patikrinkite, iš kur failas atkeliavo: gal tai kitas failo tipas su nauju pavadinimu (pabandykite atidaryti su tikruoju plėtiniu), nebaigta kopija arba projektas iš versijos iki 17. Jei galite, atidarykite jį Archicad, tada eksportuokite IFC arba DWG.
- **Modelis atsidaro be kambarių.** Zonos nebuvo eksportuotos. Įjunkite jas IFC vertėjuje ir eksportuokite iš naujo.
- **Angos neiškirstos.** BimCraft tai nurodo skiltyje **Dar nenubraižyta** {{ui:Failas}} skydelyje. Eksportuokite iš naujo; jei problema lieka, atidarykite modelį programoje, kuri jį sukūrė, ir ten patikrinkite angas.
- **Tekstas DWG atrodo kitaip.** Eksportas gali išlaikyti šriftus, kurių BimCraft neturi; BimCraft tekstą piešia paprastu be serifų šriftu.

Taip pat žr. [Gauti projekto failą į 3D per IFC](topic:rvt-to-ifc) ir [Ką BimCraft nuskaito iš kiekvieno formato](topic:file-formats).
