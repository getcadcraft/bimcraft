---
title: Išvystymo lygis (LOD) ir etapų patikros
summary: Suteikite elementams išvystymo lygį, matykite, iš kur jis kyla, tikrinkite modelį pagal etapui reikalingą LOD ir taisykite trūkstamas žymas bei nepavadintus kambarius. Kiekviena patikra tik pataria; nieko neblokuojama.
keywords: lod, išvystymo lygis, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, etapas, etapų lentelė, modelio patikros, trūkstamos žymos, nepavadinti kambariai, ankstyvas bendrumas, IFC klasė, klasifikavimas
from: 2091c79b
---

## Ką atliksite

Nurodykite, kiek toli išvystytas kiekvienas elementas, tada patikrinkite visą modelį pagal tai, ko reikalauja projekto etapas.

## Veiksmai

1. Pasirinkite elementą (ar kelis) ir atidarykite {{ui:Savybės}}. Raskite {{ui:Išvystymo lygis}}.
2. Pasirinkite lygį iš sąrašo. Kiekvienas lygis pavadinamas pagal tai, ką reiškia, ir apima visus žemesnius. Vienas anuliavimo žingsnis apima visą pasirinkimą.
3. Perskaitykite, iš kur kyla lygis: iš šio elemento, jo tipo ar lauko patvirtinto žymens.
4. Norėdami patikrinti modelį, kairėje atidarykite {{ui:Modelio patikros}}, tada {{ui:LOD etapai}}. Pasirinkite etapą ir lentelę (pradinę lentelę arba savo CSV ar JSON failą su {{ui:Apkrova}}).
5. Spustelėkite {{ui:Tikrinti modelį}}. Sumos ir kiekviena lentelės eilutė rodo, kas pasiekė savo lygį, o kas ne; rezultatai taip pat rodomi Problemų sąraše.
6. Skyriuje {{ui:Trūkstamos žymos ir nepavadinti kambariai}} spustelėkite {{ui:Rasti juos}}, jei norite, redaguokite pasiūlymus ir spustelėkite {{ui:Taikyti}}.

## Ką turėtumėte matyti

- Elemente pasirinktas lygis, šalia jo – IFC klasė ir klasifikavimo kodai.
- Etapo sumos ir eilutės. Lentelė niekada nekeičia lygio reikšmės: skalė fiksuota, lentelė tik nurodo, koks lygis reikalingas etapui.
- „Ankstyvas bendrumas“: patarimas ankstyvame etape palikti elementus bendrinius. Tai tik patarimas.

## Verta žinoti

- Čia nieko neblokuojama. Modelis, neatitinkantis etapui reikalingo lygio, tik išvardijamas, o ne atmetamas.
- Lygio tris dalis (geometriją, informaciją, dokumentaciją) galima nustatyti atskirai; žymuo rodo: atitinka, nepakanka arba nenurodyta.
