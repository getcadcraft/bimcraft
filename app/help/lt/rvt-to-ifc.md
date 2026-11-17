---
title: Iš projekto failo į BimCraft per IFC
summary: IFC eksporto nustatymai, kurie geriausiai atsidaro BimCraft (versija, savybių rinkiniai, bazinės kiekių reikšmės, patalpos, susietieji modeliai, koordinatės), kaip atidaryti rezultatą ir ką eksportas išsaugo.
keywords: eksportas, IFC eksportas, rvt į ifc, konvertuoti, 3D, geometrija, ifc2x3, ifc4, koordinavimo vaizdas, nuorodos vaizdas, projekto perdavimo vaizdas, savybių rinkiniai, bazinės kiekių reikšmės, patalpos, erdvės, susietos bylos, bendros koordinatės, tyrimo taškas, projekto bazinis taškas, nustatymai
from: 3efd5fc9
---

## Ką darysite

Paverskite projekto failą į IFC failą, kurį galite sukti, apžiūrėti, tikrinti ir redaguoti BimCraft. BimCraft dar neskaito 3D modelio `.rvt` faile, todėl eksportas vyksta programoje, kuri sukūrė failą (Revit); BimCraft atidaro rezultatą.

## Žingsniai

1. Atidarykite projektą programoje, kuri jį sukūrė. BimCraft kortelėje nurodoma versija, kuria jis buvo įrašytas.
2. Atidarykite 3D vaizdą, rodantį tai, ką norite eksportuoti.
3. Pasirinkite **Failas > Eksportuoti > IFC**.
4. Eksporto dialoge pasirinkite sąranką (arba **Keisti sąranką…**) su toliau nurodytais nustatymais.
5. Pasirinkite aplanką ir failo pavadinimą bei eksportuokite.
6. BimCraft spustelėkite {{ui:Pasirinkti failą}} ir pasirinkite naują `.ifc` failą. Susietieji modeliai, eksportuoti kaip atskiri failai, atsidaro į tą pačią sceną su {{ui:Pridėti modelį}}.

## Nustatymai, kurie geriausiai atsidaro čia

| Nustatymas eksportuotojuje | Pasirinkite | Kodėl |
|---|---|---|
| IFC versija | **IFC4 Reference View** peržiūrai, tikrinimui ir kiekių skaičiavimui; **IFC2X3 Coordination View 2.0**, kai kitiems reikia IFC2X3 | Abu atsidaro pilnai. **IFC4 Design Transfer View** taip pat atsidaro, su tikslesnėmis formomis, bet failas didesnis ir lėtesnis. |
| Failo tipas | **IFC** (paprastas) | BimCraft neatidaro `.ifczip` ar `.ifcxml`. |
| Fazė / matomi elementai | Norimą fazę ir **Eksportuoti tik vaizde matomus elementus**, kai 3D vaizdą nustatote tam | Palieka tai, ką paslėpėte sąmoningai. |
| Savybių rinkiniai | **Eksportuoti Revit savybių rinkinius** ir **Eksportuoti bendrus IFC savybių rinkinius** | Jie tampa savybių rinkiniais, kuriuos BimCraft rodo {{ui:Savybės}} ir kuriuos naudoja {{ui:Ieškoti}}, {{ui:Spalva}} ir {{ui:Modelio patikros}}. |
| Bazinės kiekių reikšmės | **Eksportuoti bazines kiekių reikšmes** | {{ui:Kiekių suma}} ir žiniaraščiai jas naudoja (ilgiams, plotams, tūriams) vietoj spėjimų. |
| Patalpos ir plotai | **Eksportuoti patalpas 3D vaizduose** (arba Patalpų / Erdvių parinktį) | Patalpos ateina kaip erdvės: spustelėkite {{ui:Erdvės}}, kad jas pamatytumėte. |
| Susietos bylos | **Eksportuoti susietas bylas kaip atskirus IFC** | Kiekviena nuoroda tampa atskiru failu; atidarykite juos kartu su {{ui:Pridėti modelį}}, ir jie sulygiuojami. |
| Koordinačių bazė | **Bendros koordinatės** (arba tyrimo taškas) | Failas tada turi savo vietą žemėlapyje (IfcMapConversion), todėl veikia Matuoti › Vieta, žemėlapio sluoksniai ant žemės ir debesų taškai, išdėstyti pagal žemėlapio koordinates. Projekto bazinis taškas laiko modelį arti pradžios, bet be jo vietos žemėlapyje. |
| Sienų ir kolonų skaidymas pagal aukštą | Įjungta, kai kiekius skaičiuojate pagal aukštą | Kiekvieno aukšto dalis yra atskiras elementas. |

## Ką turėtumėte matyti

Modelis 3D, aukštai paimti iš projekto lygių, o projekto informacija – {{ui:Failas}} skydelyje. **Eksportuota iš** nurodo eksportuotoją.

## Ką eksportas išsaugo, o ko ne

- **Išsaugoma**: geometrija, aukštai, elementų rūšys, pavadinimai, tipai, dauguma parametrų (kaip savybių rinkiniai), bazinės kiekių reikšmės, jei jų prašoma, patalpos kaip erdvės ir žemėlapio vieta su bendromis koordinatėmis.
- **Neišsaugoma**: vaizdai, lapai, anotacijos, šeimos kaip redaguojamos šeimos, darbo rinkiniai ir projektavimo variantai. IFC failas yra modelio elementų momentinė nuotrauka, o ne projektas. Lapams eksportuokite DWG ir atidarykite jį 2D vaizde.

## Dažnos klaidos

- **BimCraft trūksta parametrų.** Įjunkite aukščiau nurodytas savybių rinkinių parinktis ir eksportuokite iš naujo.
- **Trūksta patalpų.** Įjunkite patalpų parinktį, tada spustelėkite {{ui:Erdvės}}.
- **Įrašymas kaip `.ifczip`.** Pasirinkite paprastą IFC arba iš `.ifczip` ištraukite failą.
- **Nėra vietos žemėlapyje.** Eksportuokite su bendromis koordinatėmis; patikrinkite, ar nustatytas projekto tyrimo taškas.
- **Tikimasi, kad pakeitimai grįš į projektą.** Pakeitimai, kuriuos įrašote BimCraft, patenka į naują IFC failą, o ne į projekto failą.
