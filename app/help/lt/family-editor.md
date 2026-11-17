---
title: Redaguoti šeimą
summary: Keiskite šeimos parametrus, formules ir kūnus, rodykite dalis pagal Yes / No parametrą, pjaukite ir junkite kūnus, suteikite jai jungtis vamzdžiams ir kanalams bei matykite rezultatą pagal IFC, kurį ji įrašys.
keywords: šeimos redaktorius, redaguoti šeimą, parametras, parametrai, formulė, formulės, matomumas, yes no, kūnas, kūnai, dėžė, ištraukimas, ištraukti, sukimas, profilis, lankas, būlio operacijos, pjauti, jungti, skirtumas, sąjunga, rankenėlė, rankenėlės, darbo plokštuma, eskizas, nauja šeima, jungtis, jungtys, prievadas, prievadai, vamzdžio jungtis, kanalo jungtis, nuotekos, vandens tiekimas
from: 1ab31c10
---

## Atidaryti redaktorių

Atidarykite šeimą (projekto naršyklės **Šeimos** arba {{ui:Build}} › {{ui:Families…}}) ir spustelėkite {{ui:Edit the family}}. Norėdami pradėti nuo nulio, spustelėkite {{ui:New family}}: suteikite jai pavadinimą, nurodykite, kas tai yra (durys, langas, baldai, įranga ar kas kita) ir, durims ar langui, iš kurios pradinės šeimos imami jo plano simbolis ir rankena. Redaktorius atsidaro su šeima, turinčia keletą parametrų ir vieną kūną.

Redaguojant pradinę šeimą, pakeitimai lieka tik šiame modelyje. Kiti modeliai išlaiko pradinę šeimą tokią, kokia ji yra.

Modelyje nieko nepasikeičia, kol nespustelėsite {{ui:Save the family}}. Redaktorius turi savo atšaukimą ir perdarymą (rodyklių mygtukai šalia pavadinimo arba {{key:Mod+Z}} ir {{key:Mod+Y}}); įrašymas yra vienas žingsnis modelio atšaukime.

## Parametrai

Skirtukas {{ui:Parameters}} išvardija šeimos parametrus: pavadinimą, rūšį ir numatytąją reikšmę. Rūšys: **Ilgis** (milimetrais), **Kampas** (laipsniais), **Skaičius**, **Sveikasis skaičius**, **Yes / No**, **Pieštukas** (1–16) ir trys, kurios laiko žodžius vietoj skaičių: **Tekstas**, **Medžiaga** (viena iš projekto medžiagų) ir **Užpildas** (plano užpildas). Žodžiai formulėse nenaudojami; jie nudažo kūną (jo **Medžiaga**), užpildo simbolio dalį arba išspausdinami kaip `{Name}` simbolio tekste. Langelis **Per element** daro parametrą tokį, kurį kiekvienas įdėtas elementas nustato pats, o ne dydis.

- **Formulė** priverčia parametrą sekti kitus, pavyzdžiui, `Width / 30` arba `if(Width > 1200, 2, 1)`. Ilgiai formulėse yra milimetrais arba parašykite vienetą: `3'`, `6in`, `50cm`.
- Parametro pervadinimas pervadina jį kiekvienoje formulėje ir lauke, kuriame jis naudojamas. Parametro, kuris dar naudojamas, pašalinti negalima.
- Kūno **Medžiaga** paima projekto medžiagos spalvą (arba Medžiagos parametro spalvą), **Rodoma** paslepia jį grubesniais detalumo lygiais, o **Repeat** sukuria kopijas: kiekis (skaičius arba sveikojo skaičiaus parametras, nuo 1 iki 200) ir žingsnis tarp jų x, y ir z kryptimis. Pakartotas kūnas yra lentų, strypų ar skylių eilė; naudojamas pjūvyje, kopijos pjaunamos kartu.
- Durų ar langų šeima taip pat gauna du vardus iš savo sienos: `WallThickness` ir `Face` (1 arba −1, pusė, į kurią atsidaro durys).

## Kūnai

Skirtukas {{ui:Solids}} išvardija kūnus. Pridėkite dėžę, ištraukimą, sukimą arba šliejimą:

| Kūnas | Ką nustatote |
|---|---|
| Dėžė | abu kampai: x0 iki x1, y0 iki y1, z0 iki z1 |
| Ištraukimas | profilis darbo plokštumoje (planas, priekis ar šonas), kur yra plokštuma, ir gylis |
| Sukimas | profilis, ašis plokštumoje ir kampas iki 360° |
| Šliejimas | taškų kelias ir spindulys (strypas ar bėgis) |

Kiekvienas skaičius gali būti įvestas skaičius arba parametrų išraiška. Kiekvienas kūnas turi spalvą ir **Rodoma, kai**: palikite tuščią, kad būtų rodomas visada, arba nurodykite Yes / No parametrą (arba parašykite palyginimą, pavyzdžiui, `Shelves >= 3`), kad būtų rodomas tik tada. Tai yra matomumo parametras.

### Nubrėžkite profilį

Ištraukimo ar sukimo profilis braižomas jo darbo plokštumoje po peržiūra:

- Spustelėkite ant lapo, kad pridėtumėte tašką po pasirinkto.
- Vilkite tašką, kad jį perkeltumėte. Taškai prisitraukia prie tinklelio; laikykite {{key:Shift}}, kad dėtumėte juos laisvai.
- Spustelėkite mažą kvadratėlį ant atkarpos, kad čia pridėtumėte tašką. {{key:Shift}} + spustelėjimas paverčia tą atkarpą lanku (dar kartą spustelėkite kitai krypčiai, tada – tiesiai).
- Dukart spustelėkite tašką, kad jį pašalintumėte.

Tuščiavidurius taškus nustato parametrai: keiskite juos lentelėje, o ne vilkdami.

## Būlio operacijos

Skirtukas {{ui:Booleans}} išpjauna antrąjį kūną iš pirmojo arba jungia juos. Būlio operacijos rezultatą galima vėl išpjauti ar sujungti. Kūnas, naudojamas būlio operacijoje, braižomas tik kaip jos dalis.

Kai antrasis kūnas paslėptas savo Yes / No parametru, pirmasis išlieka toks, koks yra; kai pirmasis paslėptas, rezultatas paslėptas.

## Plano simbolis

Skirtukas {{ui:Plan symbol}} braižo tai, ką planas rodo šiai šeimai, vietoj kūnų pjūvio: linijas, stačiakampius, apskritimus, lankus, daugiakampius ir tekstą šeimos pačių ašyse. Kiekviena dalis turi **pieštuką** (1–16, išraišką arba Pieštuko parametrą), **užpildą** (nėra, vientisas, įstrižas, kryžminis, betonas, izoliacija, žemė arba Užpildo parametras), **Rodoma pagal** išraišką, **pjūvio diapazoną** milimetrais virš jos pagrindo (dalis braižoma pilnu storiu, kai plano pjūvis yra jos viduje, plonai – žemiau jos, punktyrine linija – aukščiau jos: spintelė virš pjūvio rodoma punktyrine linija), detalumo lygį ir pakartojimą. Tekste parametrus galima nurodyti kaip `{Name}`. **Planas rodo: Kūnų pjūvį** palieka planą pjaunant kūnus, o simbolis lieka šeimoje. Kitos programos skaito simbolį kaip šeimos pėdsaką (linijos ir formos; tekstas lieka BimCraft).

## Šeima viduje

Skirtukas {{ui:Families inside}} įdeda kitą šeimą į šią: kojelę stale, rankeną ant durų. Pasirinkite šeimą, tada kur ji eina (x, y, z), kiek ji pasukta (tik ketvirčio posūkiai: 0, 90, 180, 270), kada ji rodoma ir reikšmes, kurias ji gauna, po vieną eilutėje kaip `Height = Height - 40`. Įrašius vidinę šeimą, ši perbraižoma iš naujo; šeimos, kurią laiko kita, ištrinti negalima; šeima negali laikyti pati savęs, net ir per kitą, o įdėjimas sustoja ketvirtame lygyje.

## Karštosios vietos

Karštoji vieta – tai taškas arba briauna, kurią vilkate, kad pakeistumėte parametrą. Skirtuke {{ui:Hotspots}} pridėkite vieną, pasirinkite ašį, kuria ji vilkama, ir skaičiaus parametrą, kurį ji keičia, bei įrašykite jos padėtį tomis pačiomis išraiškomis kaip kūnams. Peržiūroje po rankenėlėmis pasirinkite **Karštosios vietos**, kad jas vilktumėte. Įdėtame plano elemente (pasirinkite jį su {{ui:Select}}) x ir y karštosios vietos rodomos kaip rankenos: vilkite vieną, ir elementas įgauna dydį, kuris ją padeda ten, per visas tarp jų esančias formules; vienas Anuliuoti grąžina atgal. Karštoji vieta negali keisti valdomo parametro, Yes / No ar žodžio.

3D vaizde tos pačios karštosios vietos rodomos kaip rankenos pasirinktame elemente, o aukštyn ir žemyn (ašis z) rodomos ir čia, ko planas nepiešia. Pasirinkite elementą, vilkite rankeną išilgai jos ašies ir paleiskite: elementas įgauna dydį, kuris ją padeda ten, kaip vienas anuliavimo žingsnis. Rankenos paslėptos, kol įjungta pjūvio dėžė, nes ji naudoja tas pačias rankenas.

## Jungtys

Šeimos, įdėtos ant grindų (baldai, įranga ir kiti), turi skirtuką {{ui:Connectors}}: taškus, kuriuose vamzdis ar kanalas jungiasi prie elemento, pavyzdžiui, kriauklės čiaupą ir nutekėjimą. Spustelėkite {{ui:Add a connector}} ir nustatykite:

- **Rūšis**: vamzdis arba kanalas, ir jo **Sistema** (šaltas vanduo, sanitarinis nutekėjimas, tiekiamas oras…).
- **x**, **y** ir **z**: kur jis yra šeimos pačių ašyse. Kaip kūno skaičiai, kiekvienas gali būti skaičius arba parametrų formulė, todėl jungtis juda kartu su dydžiu.
- **Išėjimo kryptis**: kryptis, kuria vamzdis ar kanalas išeina, išilgai vienos šeimos ašies (nutekėjimas po kriaukle eina **Žemyn**).
- **Dydis (mm)**: vamzdžio nominalus dydis (DN) arba apvalaus kanalo skersmuo.
- **Srautas**: **In** jungčiai, kuri maitinama (čiaupas), **Out** – jungčiai, kuri nuteka.

Peržiūroje kiekviena jungtis braižoma žiedu su rodykle išėjimo kryptimi. Durys ir langai jungčių neturi.

Santechnikos įrenginiui pasirinkite, koks jis yra, skiltyje **Santechnikos įrenginys** (unitazas, praustuvas, virtuvės kriauklė, dušas, skalbimo kriauklė). Pradiniai įrenginiai tai jau nurodo.

Kiekvienas iš šeimos įdėtas elementas IFC faile gauna savo jungtis kaip prievadus, ir jos sukuriamos iš naujo, kai elementas keičia dydį arba šeima įrašoma. Programos, kurios skaito IFC sistemas, mato, kur priklauso kiekvienas vamzdis ar kanalas.

## Peržiūra ir jos rankenėlės

Peržiūra – tai šeima, užrašyta kaip IFC tuo pačiu kodu, kuris ją įrašo į modelį, ir nubraižyta atgal. Ką matote, tą gauna kitos programos. Po ja **Size shown** nustato parametrų reikšmes, kurias naudoja peržiūra.

**Rankenėlės** – tai taškai peržiūroje: **The size** rodo rankenėlę Plotis, Gylis ir Aukštis; **The solid picked** rodo po vieną kiekvienoje pasirinkto kūno sienoje. Vilkite rankenėlę:

- paviršiuje, nustatytame parametru, keičiasi rodomas dydis (šeimos formulės išlieka);
- paviršiuje, nustatytame įvestu skaičiumi, keičiasi tas skaičius.

## Įrašymas

{{ui:Save the family}} patikrina šeimą, tada iš naujo nubraižo visus jos dydžius ir iš naujo sukuria visus jos elementus, kaip vieną žingsnį, kurį galite atšaukti. Jei dydžio su pakeitimu nebegalima nubraižyti (pavyzdžiui, kūnas tame dydyje neturėtų pločio), niekas neįrašoma, o redaktorius nurodo, kuris dydis.

Jei kas nors kitas įrašė tą pačią šeimą, kol jūsų redaktorius buvo atidarytas (Live TeamWork sesijoje arba kitame lange), {{ui:Save the family}} atsisako ir apie tai praneša, o ne pakeičia jų pakeitimo jūsų. Uždarykite redaktorių, atidarykite šeimą iš naujo, kad pamatytumėte jų pakeitimą, ir padarykite savo vėl.

:::note
Geometrija įrašoma kaip pats IFC kūnai: ištraukimai, sukimai, šliejami diskai ir būlio operacijų rezultatai. Niekas nepaverčiama trikampių sąrašu, todėl failai lieka maži, o kitos programos gali skaityti formas kaip formas. Profiliai su lankais IFC4 įrašomi su lankais; IFC2X3 profilyje lankų segmentų nėra, todėl ten lankai įrašomi kaip trumpos tiesios atkarpos.
:::

Taip pat žr. [Šeimos ir jų dydžiai](topic:families).
