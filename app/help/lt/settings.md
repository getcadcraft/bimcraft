---
title: BimCraft parametrai
summary: Pasirinkite, ar rodyti patalpas ir erdves, ar braižomos kraštinės ir kokiu vaizdu atsidaro modelis, bei pradėkite įdėjimą su įjungtu prilipimu prie sienos.
keywords: parametrai, nuostatos, parinktys, erdvės, patalpos, ifcspace, kraštinės, linijos, našumas, didelis modelis, atidarymo vaizdas, kamera, vaizdas iš viršaus, prilipimas prie sienos, prilipimas
from: 4416e64f
---

Atidarykite {{ui:Parametrai}} spustelėdami krumpliaratį programos juostoje arba paspausdami {{key:Mod+,}}. Pirmasis skirtukas, {{ui:BimCraft}}, saugo šiai programai priklausančius parametrus, o {{ui:Bendroji}} saugo tuos, kuriuos turi visos CadCraft programos (tema, įrankių juosta, skydeliai). BimCraft parametrai galioja tik šioje programoje: keičiate juos čia, o ši naršyklė juos įsimena. {{ui:Atstatyti BimCraft parametrus}} dialogo apačioje grąžina juos ir bendruosius į pradinę padėtį.

## Meniu, klavišai ir pelė

Meniu stilius (BimCraft įrankių juosta, namų projektavimo meniu juosta, BIM juosta arba braižymo komandų eilutė), jūsų klavišai ir meniu bei tai, ką atlieka ratukas ir pelės mygtukai. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).

## Atidarius modelį

- **Rodyti patalpas ir erdves** (pradžioje išjungta): patalpos ir erdvės yra permatomos dėžės, galinčios paslėpti už jų esančias sienas, todėl pradžioje jos paslėptos. Mygtukas {{ui:Erdvės}} virš modelio vis tiek jas įjungia ir išjungia atidarytam modeliui.
- **Kraštinės**: {{ui:Kraštinės įjungtos}} (pradžioje) braižo kraštinių linijas, suteikiančias braižybinį vaizdą. {{ui:Tik maži modeliai}} jas braižo tik modeliams, turintiems mažiau nei 300,000 trikampių, todėl dideliuos modeliuose greičiau sukama. {{ui:Kraštinės išjungtos}} kiekvieną modelį atidaro be jų. Mygtukas {{ui:Kraštinės}} vis tiek jas perjungia atidarytam modeliui. Viršijus 1.5 million trikampių, kraštinės visada išjungtos.

## Brėžiniai atsidaro

Kaip pirmiausia rodomas DWG ar DXF brėžinys: {{ui:3D (greičiausiai)}} (pradžioje) net didelį brėžinį nupiešia greitai, o {{ui:Modelis (2D)}} atveria plokščią modelio erdvės vaizdą. Skirtukai virš brėžinio bet kada perjungia tarp {{ui:Modelis}}, lapų ir {{ui:3D}}. Brėžinys, kurio modelio erdvėje nieko nėra, arba naršyklė, kuri negali rodyti 3D, visada atsidaro 2D.

## Atidarymo vaizdas

Kamera, su kuria atsidaro modelis: {{ui:Tilpti}} (pradžioje – visas modelis iš kampo), {{ui:Viršus}}, {{ui:Priekis}} arba {{ui:Iš šono}}. Mygtukai virš modelio bet kada keičia vaizdą.

**Pastatas pasuktas savo sklype**: daugelis modelių ateina su pastatu, pasuktu kampu į failo ašis (geodezinėse arba bendrose koordinatėse). {{ui:Lygiagrečiai pastatui}} (pradžioje) rodo tokį pastatą lygiagrečiai: {{ui:Tilpti}}, {{ui:Viršus}}, {{ui:Priekis}}, {{ui:Iš šono}}, vaizdo kubo paviršiai ir kiekvienas naujas pjūvis seka jo sienas, o vaizdo kubo kompasas vis tiek rodo modelio šiaurę. {{ui:Kaip įdėta sklype}} išlaiko failo ašis. Pastatas, kurio sienos eina išilgai ašių, abiem atvejais atrodo vienodai.

## Bibliotekos elementų įdėjimas

**Pradėkite su įjungtu prilipimu prie sienos** (pradžioje išjungta): kai pradedate įdėti arba įklijuoti bibliotekos elementą, jo galinė dalis prilimpa prie artimiausios sienos, nukreipta į patalpą. {{key:Tab}} arba {{ui:Prilipimas prie sienos}} įdėjimo juostoje jį šiam kartui išjungia. Aukštas be sienų pradedamas be jo.

## Pjūvio dėžė

{{ui:Vieta aplink pasirinkimą}} – kiek vietos {{ui:Pjūvio dėžė aplink pasirinkimą}} palieka iš kiekvienos pasirinktų elementų pusės, milimetrais: pradžioje 300, daugiausia 5000. Žr. [Supjaustyti IFC modelį pjūvio plokštuma](topic:section-plane).

## Vieta

{{ui:Platuma ir ilguma pateikiamos}} pasirenka sistemą, kuria {{ui:Matuoti}} › {{ui:Vieta}} rodo platumas ir ilgumas: WGS 84 (EPSG:4326, pradžioje, kaip naudoja GPS ir žiniatinklio žemėlapiai), {{ui:Failo savasis datumas}} arba viena iš ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 ir CGCS2000. Failo savoji žemėlapių sistema ir datumas visada rodomi taip pat. Žr. [Matuoti atstumus, paviršių plotus ir vietas 3D](topic:measure).

## Kampo indikatorius

Kas stovi apatiniame dešiniajame 3D vaizdų kampe (IFC modelis ir brėžinys, perjungtas į 3D): {{ui:Vaizdo kubas}} (pradžioje), {{ui:Ašių piktograma}} (mažas X, Y ir Z) arba {{ui:Nėra}}. Pakeitimas įsigalioja iš karto. 2D brėžinio vaizdas jokio nerodo.

Vaizdo kube spustelėkite paviršių, kraštinę ar kampą, kad pažiūrėtumėte iš tos pusės; vilkite kubą, kad sukiotumėtės aplink modelį; vilkite žiedą, kad apsisuktumėte; spustelėkite namelį, kad grįžtumėte į pradinį vaizdą.

## Jūsų vardas problemose

Prisijungus problemose nurodomas jūsų paskyros vardas, o BimCraft daugiau nieko neklausia: ši dalis rodo {{ui:Iš jūsų paskyros (<name>)}}. {{ui:Naudoti kitą vardą}} atveria langelį kitam vardui, kuris galioja, kol pasirenkate {{ui:Naudoti mano paskyros vardą}}. Neprisijungus problemų formoje vardas klausiamas kaip anksčiau. Žr. [Problemos ir BCF failai](topic:issues-bcf).

## Asistentai

**Leisti DI asistentams ir scenarijams naudoti BimCraft** (pradžioje išjungta) leidžia kompiuteryje esančiam asistentui per CadCraft Studio pasiekti atidarytą modelį: **Skaityti** randa elementus ir nuskaito jų savybes, **Keisti vaizdą** izoliuoja, slepia ir rodo juos. **Veikla** išvardija jo iškvietimus. Žr. [Leisti DI asistentui dirbti su jūsų modeliu](topic:assistants).

:::note
Kiti parametrai taikomi atidarant modelį arba pradedant įdėjimą. Jau atidarytas modelis išlaiko savo išvaizdą, kol naudosite įrankių juostos mygtukus arba jį atidarysite iš naujo.
:::

## Susiję

- [Kopijuoti, įklijuoti ir dubliuoti bibliotekos elementus](topic:copy-paste)
- [Įdėti įrangą ir baldus iš bibliotekos](topic:place-from-library)
- [BimCraft ekranas](topic:workspace)
- [Leisti DI asistentui dirbti su jūsų modeliu](topic:assistants)
