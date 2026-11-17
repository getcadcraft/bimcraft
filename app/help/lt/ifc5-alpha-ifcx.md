---
title: Atidaryti ir eksportuoti IFC5 alpha (IFCX failus)
summary: Laboratorinė parinktis IFC5 alpha failo formatui (.ifcx) – atidarykite failą su jo sluoksniais, žiūrėkite, ko skaitymas negalėjo patikrinti, ir eksportuokite atidarytus modelius. Formatas dar keičiasi, todėl pirma perskaitykite.
keywords: ifc5, ifcx, alpha, buildingsmart, json, sluoksniai, schema, laboratorija, kiekiai, qto, eksportas, importas
from: cffe1669
---

IFC5 alpha (failo galūnė {{ui:.ifcx}}) yra failo formatas, kurį buildingSMART vis dar kuria. Jis nėra galutinis: failai ir mūsų jų aiškinimas gali keistis. Todėl tai laboratorinė parinktis ir todėl pirmiausia reikia perskaityti.

## Įjungti

1. Pasirinkite {{ui:Parametrai}}, tada skiltį {{ui:IFC5 alpha (IFCX)}} BimCraft skirtuke.
2. Pažymėkite {{ui:IFC5 alpha (IFCX) – formatas dar keičiasi; pirma perskaitykite}}.

Pagal numatytuosius ji išjungta. Kol ji išjungta, .ifcx failas atmetamas su sakiniu, nukreipiančiu čia. {{ui:Atidaryti IFC5 alpha (.ifcx)…}} ir {{ui:IFC5 alpha}} eksporto mygtukas rodomi, kai ji įjungta.

## Atidaryti

- Pasirinkite .ifcx failą su {{ui:Atidaryti failą arba aplanką}} (jis pakeičia atidarytą modelį, po įprasto klausimo dėl pakeitimų), arba
- pasirinkite {{ui:Atidaryti IFC5 alpha (.ifcx)…}} ir išrinkite kelis failus kartu: failą, jo sluoksnius ir schemos failus, kuriuos jis importuoja. Kai modelis jau atidarytas, failas **pridedamas šalia jo**; sąraše esantis x jį pašalina, ir tai yra atšaukimas.

IFCX failas išvardija mazgus (kelią, jo vaikus, ką paveldi, savo atributus). Keli failai gali aprašyti tą patį mazgą: vėlesnis failas (sluoksnis) perrašo ankstesnio atributus, o tuščias (null) vaikas pašalina vaiką. BimCraft juos sudaro, tada nubraižo rezultatą kaip nedidelį IFC4 modelį: projektas, sklypas, pastatas, aukštai ir elementai su pavadinimais, klasėmis, savybėmis, kiekiais, spalvomis ir tinkleliais.

Iš tinklo nieko neatsisiunčiama. Schemos failai, kuriuos failas importuoja (pavyzdžiui, `ifc@v5a.ifcx`), naudojami tik tada, jei juos pasirinkote kartu su failu; priešingu atveju ataskaitoje tai nurodoma, o atributai nuskaitomi be tipo patikros.

### Ataskaita

Atidarius, ataskaitoje išvardijama, ką skaitymas rado: duomenys, neatitinkantys savo schemos, nepateiktos schemos failai, atributai, kurie čia neturi IFC prasmės. Atributai be susiejimo **išsaugomi** modelyje, o ne atmetami, ir įrašomi atgal eksportuojant.

## Kas virsta kuo

| IFCX faile | BimCraft programoje |
|---|---|
| Mazgas su IFC klase (projektas, sklypas, pastatas, aukštas, siena …) | Atitinkamas IFC4 elementas; klasė, kurios šis skaitymas nežino, tampa pastato elemento proxy |
| Mazgo pavadinimas pagal tėvinį mazgą | Elemento pavadinimas |
| Atributai su kiekio rūšimi (Length, Area, Volume, Mass …) | IFC4 kiekių rinkinys pavadinimu `Qto_IFCX` (IFC4 kiekiai lieka IFC4 `Qto_*` rinkiniais) |
| Kiti savybių atributai | Savybių rinkinys pavadinimu `Pset_IFCX` |
| Tinklelio ir transformacijos atributai | Elemento trikampiai ir padėtis; nematomi tinkleliai nebraižomi |
| Spalva, nepermatomumas, medžiaga, klasifikacija | Elemento paviršiaus stilius, medžiaga ir klasifikacija |

Vienetai imami kaip metrai, Z ašis nukreipta aukštyn: alfa versija sako, kad vienetai bus aprašyti vėliau.

## Eksportas

Įrankių juostoje pasirinkite {{ui:IFC5 alpha}}, perskaitykite pastabą, tada spustelėkite {{ui:Eksportuoti .ifcx}}. Failas turi mūsų antraštę (autorius CadCraft, versija ifcx_alpha) ir pats nurodo, kad tai alfa formatas. Kiekvienas modelis įrašomas savo failo koordinatėmis, metrais, su pavadinimais, klasėmis, savybių rinkiniais, kiekiais (kaip atributais su savo rūšimi), spalvomis ir trikampiais. Sluoksniai ir paveldėjimas įrašomi suplokštinti. Patikrinkite failą programoje, kuriai jį siunčiate.

## Apribojimai

- Kreivi geometrija (kreivės, paviršiai) neskaitoma: tik trikampių tinkleliai.
- Durys ir langai, įdėti į sieną, dedami ant aukšto; siena, iš kurios jie kilo, nesusieta.
- IFC4 `Qto_*` rinkinių pavadinimai išsaugomi kaip mūsų atributų grupės (`cadcraft::qto::…`); standartinėje alfa schemoje yra tik keli kiekių pavadinimai.
- Formatas gali keistis; šiandien sukurtas failas rytoj gali neatsidaryti.
