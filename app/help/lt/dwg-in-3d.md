---
title: DWG ar DXF brėžinio peržiūra 3D
summary: Perjunkite brėžinio modelio erdvę į 3D, kad pamatytumėte aukščius, storį, 3D paviršius, tinklelius ir blokus, sukiotumėte aplink jį, spustelėtumėte objektą ir pamatytumėte jo savybes, ir sužinotumėte, kas dar nenubraižyta.
keywords: 3d, dwg, dxf, brėžinys, modelio erdvė, sukti aplink, pjūvis, iškirpimas, pasirinkti, savybės, atributai, rankenėlė, aukštis, storis, ekstruzija, 3dface, polyface, tinklelis, 3d polilinija, blokai, vaizdai, perspektyva, lygiagretus, apimtys, acis, kietieji kūnai
from: a0c6cd17
---

## Ką darysite

Pažiūrėkite į brėžinio modelio erdvę 3D. Linijos ir polilinijos stovi savo tikruose aukščiuose, objektai su storiu atsistoja kaip sienos, o 3D paviršiai, tinkleliai ir 3D blokai rodomi kaip paviršiai, aplink kuriuos galite sukti. Lapai lieka 2D.

## Veiksmai

1. Atidarykite DWG arba DXF. Žr. [Peržiūrėti DWG ar DXF brėžinį](topic:view-dwg). Jis atsidaro 3D, nebent {{ui:Parametrai}} › {{ui:BimCraft}} › **Brėžiniai atidaromi** nurodo {{ui:Modelis (2D)}}.
2. Iš 2D spustelėkite {{ui:3D}} juostoje virš brėžinio arba paspauskite {{key:3}}.
3. Pirmą kartą truputį palaukite: būsenos eilutėje rodoma „Brėžinys kuriamas 3D…“, o paskui — kiek linijų ir paviršių rodoma.
4. Sukite, slinkite ir keiskite mastelį (žr. lentelę žemiau).
5. Spustelėkite vaizdą antroje juostoje: {{ui:Izo}}, {{ui:Viršus}}, {{ui:Apačia}}, {{ui:Priekis}}, {{ui:Galas}}, {{ui:Kairė}} arba {{ui:Dešinė}}.
6. Spustelėkite {{ui:Perspektyva}}, kad perjungtumėte perspektyvinį ir lygiagretųjį vaizdą.
7. Spustelėkite {{ui:Apimtys}} arba paspauskite {{key:F}}, kad vėl pamatytumėte visą brėžinį.
8. Spustelėkite {{ui:3D}} dar kartą, paspauskite {{key:3}} arba spustelėkite {{ui:Modelis}} ar lapo kortelę, kad grįžtumėte į 2D.

## Ką turėtumėte matyti

- Modelio erdvė 3D, Z ašis aukštyn, brėžinio paties spalvomis. Paviršiai šiek tiek šviesesni nei jų kraštinės.
- Sluoksniai, kuriuos išjungiate skiltyje {{ui:Sluoksniai}}, dingsta ir iš 3D vaizdo.
- Dešinėje: linijų ir paviršių skaičius, brėžinio dydis X, Y ir Z ašimis, **Tik 2D vaizde** ir **Dar nenubraižyta**.

## Pjūvis su pjūvio plokštuma

Spustelėkite {{ui:Pjūvis}} 3D juostoje arba paspauskite {{key:X}}. Juosta po ja veikia taip pat kaip IFC modeliams (žr. [Pjauti IFC modelį pjūvio plokštuma](topic:section-plane)): pjaukite nuo {{ui:Viršus}}, {{ui:Priekis}} ar {{ui:Iš šono}}, vilkite arba įveskite poslinkį — čia brėžinio paties vienetais — ir spustelėkite {{ui:Apversti}}, kad pasirinktumėte kitą pusę. To, ką plokštuma nupjauna, pasirinkti negalima. Grįžus į 2D, pjūvis panaikinamas.

## Peržiūrėti objekto savybes

Spustelėkite objektą 3D vaizde. Jis nusidažo pasirinkimo spalva, o {{ui:Savybės}} parodo, ką failas sako apie jį: tipą, sluoksnį, spalvą, linijos tipą ir rankenėlę, po to jo paties duomenis, pavyzdžiui linijos pradžią, pabaigą ir ilgį, apskritimo centrą ir spindulį, 3D paviršiaus kampus arba bloko nuorodos bloką, įterpimo tašką, mastelį, sukimą ir atributų reikšmes.

- Bloko nuoroda pasirenkama visa, kartu su į ją įdėtais blokais.
- Paspaudimas kelių pikselių atstumu nuo linijos pasirenka liniją.
- Laikykite {{key:Mod}} ir spustelėkite, kad pasirinktumėte daugiau objektų arba vieną atšauktumėte; {{ui:Savybės}} tada suskaičiuoja juos pagal tipą.
- {{key:Esc}} arba spustelėjimas tuščioje erdvėje panaikina pasirinkimą.
- Objektų, esančių sluoksniuose, kuriuos išjungėte, pasirinkti negalima.

## Judėjimas

:::mouse
| Norint | Atlikite |
|---|---|
| Sukti | Vilkite vidurine arba kairiąja pelės klavišu |
| Slinkti | Vilkite dešiniuoju klavišu arba laikykite {{key:Shift}} ir vilkite |
| Keisti mastelį | Slinkite ratuką; jis keičia mastelį link to, kas po žymekliu |
| Pamatyti viską | {{ui:Apimtys}} arba {{key:F}} |
| Žiūrėti iš šono | Spustelėkite vaizdo kubo paviršių, kraštinę arba kampą apatiniame dešiniajame kampe |
:::

Vaizdo kubą galima pakeisti ašies piktograma arba paslėpti skiltyje {{ui:Parametrai}}. Žr. [BimCraft nustatymai](topic:settings).

:::mac mouse
Jutikliniame skydelyje braukite dviem pirštais, kad suktumėte, laikykite {{key:Shift}} ir braukite, kad slinktumėte, o spustelėdami keiskite mastelį.
:::

:::touch
Vilkite vienu pirštu, kad suktumėte. Suspauskite dviem pirštais, kad keistumėte mastelį, ir perkelkite juos kartu, kad slinktumėte.
:::

## Kas nubraižoma 3D

| Brėžinyje | 3D vaizde |
|---|---|
| Linijos, 3D polilinijos | Savo tikruose aukščiuose |
| Polilinijos, apskritimai, lankai, elipsės | Savo plokštumoje, savo aukštyje, pasvirę, jei brėžinys juos pasvirą |
| Storis linijose, polilinijose, apskritimuose ir lankuose | To aukščio sienos; apskritimai uždaryti viršuje ir apačioje |
| 3D paviršiai, polifaces tinkleliai, daugiakampiai tinkleliai | Pašešėliuoti paviršiai su matomomis kraštinėmis |
| Blokai | Išdėstyti, pasukti ir pakeisti mastelį 3D, įdėti blokai taip pat |
| Brūkšniuotės | Jų kontūrai |
| Paprasta 2D linijų grafika | Plokščia, kur buvo nubraižyta |

## Tik 2D vaizde

Tekstas, daugiaeilutis tekstas ir matomi blokų atributai 3D piešiami savo plokštumoje, savo aukštyje, ir paspaudimas ant jų juos pasirenka. Plačios polilinijos rodo savo plotį kaip plokščią juostą. Daugiakrypčiai nurodymai, paveikslėliai ir brūkšniavimo šablonai skaičiuojami skiltyje **Tik 2D vaizde**: žiūrėkite juos skirtuke {{ui:Modelis}} arba lapuose.

## Dar nenubraižyta

Kietieji kūnai ir paviršiai, saugomi kaip ACIS kūnai (3D kietieji kūnai, kūnai, sritys ir paviršiai), bei poliniai paviršių tinkleliai išvardijami skiltyje **Dar nenubraižyta** su jų kiekiu. Jie praleidžiami, o ne spėjami.

## Dažnos klaidos

- **Viskas atrodo plokščia.** Brėžinys yra 2D: jo linijos neturi aukščio. Spustelėkite {{ui:Priekis}}, kad patikrintumėte; plokščias brėžinys rodomas kaip linija.
- **Kietojo modelio nematyti.** Kietieji kūnai, sukurti kietojo modeliavimo programa, yra ACIS kūnai, išvardyti skiltyje **Dar nenubraižyta**. Eksportuokite modelį kaip IFC arba kaip 3D paviršius iš programos, kuri jį sukūrė.
- **Brėžinys — mažas sambūris viduryje.** Kažkas toli modelio erdvėje, pavyzdžiui sena plano kopija, padidina apimtis. Priartinkite ratuku ten, kur norite pažiūrėti.

## Toliau

- [Darbas su sluoksniais ir lapais](topic:dwg-layers-sheets)
- [Pjauti IFC modelį pjūvio plokštuma](topic:section-plane)
