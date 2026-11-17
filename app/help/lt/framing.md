---
title: Sienų, grindų ir stogų karkasas
summary: Sukurkite iš modelio stovus, lentas, sijas, sparnus ar santvaras ir išsaugokite juos kartu su modeliu; jie vėl sukuriami, kai keičiasi sienos, angos, grindys ar stogas, o Medienos žiniaraštis yra pjovimo sąrašas.
keywords: TJI, I formos sija, sijos tarpatramio lentelė, įkelti lentelę, karkasas, stovas, lenta, viršutinė lenta, sija virš angos, karaliaus stovas, tarpinis stovas, atraminis stovas, trumpas stovas, palangė, tarpinės lentos, kampas, Kalifornijos kampas, T jungtis, sija, krašto sija, juostinė sija, šoninė sija, sparnas, įstrižas sparnas, įžėlio sparnas, trumpas sparnas, kalentinė lenta, lubų sija, apkabinimo sija, santvara, medienos žiniaraštis, pjovimo sąrašas, board feet, 2x4, 2x6, žingsnis, ašių atstumas
from: 76d0ffb5
---

## Ką darysite

Įrenkite karkasą pagal tai, ką nubrėžėte. BimCraft išdėsto stovus, lentas ir sijas sienose, sijas grindyse ir sparnus (arba santvaras) stoge, parenka jų dydžius pagal pažymėtas numatytąsias lenteles, išsaugo juos kartu su modeliu ir sukuria iš naujo, kai keičiasi tai, ką jie rėmina. Žiniaraštis **Medienos** yra pjovimo sąrašas.

## Sukurkite karkasą

1. Lygyje atidarykite {{ui:Versija}} ir pasirinkite {{ui:Karkasas}}.
2. Pasirinkite **žingsnį** (16" arba 24" ašių atstumu; 400 arba 600 mm), **kampus** (trijų stovų arba Kalifornijos), **Sparnus** arba **Santvaras** stogams ir ar sienos gaus eilę **tarpinių lentų** per vidurį aukščio. Grindims pasirinkite **Pjautą medieną** arba **TJI (preliminarus)** ir nustatykite sijų kryptį į automatinę, plano X arba plano Y.
3. Spustelėkite **Karkasuoti kiekvieną sieną** arba spustelėkite vieną sieną, grindis ar stogą (lygyje, kuriame stogas stovi), kad įrengtumėte tik tą.

Išjunkite **Rodyti karkasą**, kad paslėptumėte visus karkaso elementus kaip sluoksnį; **Matyti per** paslepia karkasuojamas sienas, grindis ir stogus, kad galėtumėte žiūrėti tik patį karkasą.

## Ką gaunate

- **Sienos**: apatinė lenta (išpjauta prie durų), dvigubas viršutinis rėmas, stovai išdėstyti nuo sienos pradžios, karaliaus ir tarpiniai stovai bei sija virš kiekvienų durų ir langų, trumpi stovai virš sijų ir po langais, grubi palangė po langais, kampai ten, kur sienos susitinka (siena, kuri eina per, perima kampinius stovus), du atraminiai stovai, kur kita siena prisijungia T jungtimi, ir tarpinės lentos tarp stovų.
- **Grindys**: sijos per trumpąją grindų pusę pagal numatytuosius nustatymus arba išilgai pasirinktos plano ašies; krašto sijos aplink kraštą, o aplink laiptinę — dvigubos šoninės ir skersinės sijos, o sijos per ją supjaustytos trumpai (uodegos sijos). TJI režimas parenka mažiausią išvardytą seriją ir gylį, kuris pasiekia išmatuotą švarų tarpatramį pasirinktu žingsniu.
- **Stogai**: įprasti sparnai, statmeni kiekvienam nuokapiui, trumpi sparnai, kur įžėlio ir keturšlaičio sparnai juos nukerta, keturšlaičio ir įžėlio sparnai, kalentinės lentos, lubų sijos ant rėmų ir apkabinimo sijos — arba paprastos santvaros nurodytu žingsniu, po vieną gabalą kiekvienai.

## Keiskite

Pasirinkite bet kurį karkaso elementą 3D vaizde ar modelio medyje. **Savybės** rodo jo karkasą: galite keisti žingsnį, grindų sijų tipą ir kryptį, kampus, tarpines lentas ar stogo karkasą. Perkėlus sienas, duris ir langus arba pakeitus grindis ar stogą, karkasas savaime sukuriamas iš naujo.

Norėdami išsaugoti elementą, kurį įdėjote tyčia, kai karkasas sukuriamas iš naujo, pasirinkite jį ir pasirinkite **Išsaugoti šį elementą, kai karkasas sukuriamas iš naujo**. Išsaugotas elementas lieka savo vietoje; kai aplinkinis karkasas keičiasi, jis pažymimas, kad galėtumėte jį patikrinti.

## Grindys iš įkeltos TJI lentelės

BimCraft nepateikia gamintojų sijų tarpatramio lentelių (jos yra gamintojo ir keičiasi su kiekvienu leidimu). Pasirinkite grindų karkasą, nustatykite **Grindų sijas** į **TJI (preliminarus)** ir savybėse pasirinkite **Įkelti lentelę…**: failą `cadcraft-tji-table` formatu, JSON arba CSV, kurį sudarėte pagal gamintojo dabartines tarpatramio lenteles. Jame nurodomas gamintojas, produktas, leidimas ir šaltinis, o kiekvienam apkrovos atvejui (kintamoji apkrova, nuolatinė apkrova, poslinkio riba, atramos ilgis) išvardijami didžiausi švarūs kiekvienos serijos ir gylio tarpatramiai kiekvienu žingsniu.

- BimCraft paima grindų **švarų tarpatramį**, parenka seklinusią gylį, o jo viduje — seriją, kurios išvardytas tarpatramis pasiekia jį pasirinktam žingsniui ir apkrovos atvejui, ir pagal ją įrengia grindis. Jei tarpatramis ar žingsnis yra už lentelės ribų, apie tai pranešama ir nieko nekeičiama.
- Apkrovos, poslinkio riba, atramos ilgis, lentelė ir sakinys „Preliminarus išdėstymo patarimas; galutinį pasirinkimą reikia gamintojo lentelių ir projekto apkrovų“ spausdinami ant Medienos žiniaraščio, įrašomi į modelį kartu su karkasu ir **Problemos** skydelyje išvardijami kaip pastaba. Lentelė, pažymėta kaip pavyzdys, apie tai įspėja.
- Su įjungtu priedu **Statybos reglamentai** jo grindų sijų taisyklė taip pat skaito įkeltą lentelę; be lentelės TJI sijos iš tos patikros neįtraukiamos, kaip ir anksčiau.
- Lentelė lieka šioje naršyklėje, kol ją išvalysite arba įkelsite kitą. Failas: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: coliai, pėdos, psf; arba `metric`: mm, metrai, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) ir `rows` (`series`, `depth`, `spans`: kiekvienam atvejo id — žingsnis ir didžiausias švarus tarpatramis, pavyzdžiui `"16": "15-6"`). CSV formate tie patys duomenys yra `# raktas = reikšmė` eilutės, o po jų — `series,depth,case,spacing,span`.
- Jei lentelė neįkelta, TJI išdėstymas atmetamas ir nieko nekeičiama: **Load a TJI table: the manufacturer's tables are theirs and are not built in.** Modelis, karkasuotas senąja įdėtąja TJI lentele (prieš šį pakeitimą), išlaiko visas turimas sijas; Savybės ir Problemos nurodo, kad reikia lentelės, o grindis galima vėl karkasuoti, kai įkelsite lentelę. Pjautos sijos veikia kaip anksčiau.

Tai išdėstymo gairės. Galutinį sijų pasirinkimą reikia gamintojo lentelių, projekto apkrovų ir inžinieriaus.

## Pjovimo sąrašas

Žiniaraščių skydelyje pasirinkite **Medienos**: kiekvienas karkaso elementas sugrupuotas pagal dydį ir pagal atsargų ilgį, kurį pirktumėte (sveiki 2' ilgiai nuo 8'; 600 mm žingsniai iš milimetrų), su gabalų skaičiumi ir board feet. **CSV** atsisiunčia jį.

:::warning
Sijų virš angų, grindų sijų, sparnų ir lubų sijų dydžiai paimami iš pažymėtų numatytųjų lentelių, skirtų tipiniam vienaaukščiam ar dviaukščiam namui, o ne iš inžinerinių skaičiavimų. **Savybės** nurodo, kada tarpatramis ar anga viršija jo lentelę. Projektuotojas ar inžinierius tikrina tarpatramius, apkrovas ir jungtis.

TJI išdėstymai naudoja tik jūsų įkeltą lentelę, kurią sudarote pagal gamintojo dabartines tarpatramio lenteles; BimCraft jokios nepateikia. Pasiūlymas netikrina atramų, sutelktųjų apkrovų, konsolių, angų, laiptinės sijų ar jungčių, o modelio I profilis yra schemos pavidalo.
:::

## Ką išsaugoma

Kiekvienas karkasuojamas siena, grindys ar stogas yra IFC elementų surinkimas („Framing“), sudarytas iš IFC elementų (stovų, lentų, sparnų, apkabinimo sijų, tarpinių lentų, santvarų) ir sijų (sijų virš angų, grindų sijų, krašto sijų, kalentinių lentų), kiekvienas su savo dydžiu, ilgiu ir board feet.
