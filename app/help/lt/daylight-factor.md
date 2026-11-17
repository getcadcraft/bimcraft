---
title: Dienos šviesos įvertinimas kiekviename kambaryje
summary: Vidutinis dienos šviesos koeficientas kiekvienam kambariui pagal jo langus, vidinius paviršius ir dangų, kurį mato kiekvienas langas, su dangaus kampu, išmatuotu modelyje. Ankstyvo projektavimo įvertinimas, ne modeliavimas ir ne normų patikra.
keywords: dienos šviesa, dienos šviesos koeficientas, vidutinis dienos šviesos koeficientas, adf, vertikalus dangaus komponentas, vsc, saulės šiluma, saulė, g-vertė, tinklelis, split flux, dangaus komponentas, vidinis atsispindėjęs komponentas, natūralus apšvietimas, langas, stiklinimas, dangaus kampas, kliūtis, užstojimas, balkonas, išsikišimas, atspindys, pralaidumas, ankstyvas projektavimas, analizė, kambariai, erdvės
from: 5f300a78
---

{{ui:Dienos šviesa}} skirtukas dešinėje srityje apskaičiuoja kiekvieno kambario **vidutinį dienos šviesos koeficientą**: kokia dalis debesuoto dangaus šviesos, esančios lauke, vidutiniškai pasiekia kambarį, procentais. Skaitomi atidaryto IFC modelio kambariai (erdvės) ir langai. Modelis nekeičiamas ir niekur nieko neįkeliama.

:::warning
Viskas šiame skirtuke yra **projektavimo priemonė, ne atitikties skaičiavimas**: ankstyvo projektavimo įvertinimai pagal paskelbtus metodus, **ne modeliavimas** ir **ne patikra pagal statybos normas ar standartą**. BS EN 17037, LEED, BREEAM ir energetikos normos reikalauja dienos šviesos modeliavimo su vietovės klimatu; tokiems atvejams naudokite dienos šviesos modeliavimo programą.
:::

## Apskaičiuokite

1. Atidarykite IFC modelį, kuriame yra kambarių (erdvių) ir langų. Modeliuose, nubraižytuose čia, kambarys yra kiekvieno uždaro sienų rinkinio viduje.
2. Atidarykite skirtuką {{ui:Dienos šviesa}} ir spustelėkite {{ui:Skaičiuoti}}.
3. Kiekvienas kambarys rodo savo dienos šviesos koeficientą ir juostą: mažiau nei 2 %, 2–5 % arba 5 % ar daugiau. Spustelėkite kambarį, kad pamatytumėte jo paviršius ir kiekvieno lango plotą bei dangaus kampą; kambarys ir jo langai pažymimi modelyje.

Pakeitus įvestį, skaičiai iš karto atsinaujina; pakeitus modelį, spustelėkite {{ui:Skaičiuoti iš naujo}}. {{ui:CSV}} įrašo kiekvieną kambarį su jo skaičiais ir naudotais duomenimis.

## Formulė

Vidutinis dienos šviesos koeficientas (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sumuojant per kambario langus (Littlefair formulė, naudojama BRE 209, BS 8206-2 ir CIBSE LG10):

- **T** – stiklo šviesos pralaidumas (pradžiai 0.7: naudokite gamintojo skaičių).
- **Ag** – įstiklinimo plotas: kiekvieno lango plotas (bendras plotis × aukštis, kitu atveju jo dydis modelyje) × **stiklinimo dalis** (pradžiai 0.75: likusi dalis – rėmas).
- **θ** – dangaus kampas, kurį mato langas, laipsniais (žemiau).
- **M** – priežiūros koeficientas dėl nešvarumų ant stiklo (pradžiai 1).
- **A** – visi kambario vidiniai paviršiai: grindys, sienos, lubos ir langai, paimti iš paties kambario formos.
- **R** – jų vidutinis atspindys, svertinis pagal plotą: grindys 0.2, sienos 0.5, lubos 0.7 (pradžiai); stiklas skaičiuojamas kaip 0.1.

## Kaip matuojamas dangaus kampas

Kiekvienam langui BimCraft pjauna modelį vertikalia plokštuma, statmena langui, pradedant nuo išorinio stiklo paviršiaus, ir žiūri nuo horizonto tiesiai aukštyn: viskas, ką pjūvis sutinka prieš langą (pastatas priešais, balkonas ar išsikišimas virš jo, karnizas), uždengia dalį tų 90°. θ – tai, kas lieka. Pats langas ir siena, kurioje jis yra, neįskaičiuojami. Tai daroma penkiose vietose per lango plotį ir imamas vidurkis, todėl plonas stulpelis prieš vidurį paima savo dalį, o ne visą dangų.

Pastatas, kuris yra 8.5 m virš lango centro ir 9.9 m atstumu, uždengia 40.65° (kampas, kurio tangentas yra 8.5 ÷ 9.9), todėl θ = 49.35°.

## Vertikalus dangaus komponentas kiekvienam langui

{{ui:Skaičiuoti}} taip pat išmatuoja kiekvienam langui, ką jis mato iš viso dangaus: tą patį vertikalų pjūvį, pasuktą į visas kryptis per lango priekį (kas 2°, nuo vieno krašto iki kito), todėl pastatas viename šone, pelekas ar gilus įgilinimas paima savo dalį. Iš to BimCraft apskaičiuoja **vertikalų dangaus komponentą (VSC)**: kokia dalis debesuoto dangaus šviesos pasiekia stiklą, kaip dalis to, ką gautų atviras plokščias stogas. Langas, prieš kurį nieko nėra, gauna **39.6 %** – daugiausia, ką gali vertikalus langas; ilgas pastatas, iškilęs 25° virš lango, palieka apie **27 %** – skaičių, kurį JK gairės (BRE 209) naudoja kaip apytikrę taisyklę. Kiekvieno lango detalėse kambaryje rodomas jo VSC ir jo **užstojimo kampas** (kaip aukštai tiesiai prieš jį kyla daiktai).

Dangus yra CIE standartinis debesuotas dangus, kuris tiesiai aukštyn yra tris kartus ryškesnis nei prie horizonto, o pjūvis tikslus: nieko neimama mėginiais.

## Saulė pro langus tam tikrą dieną

Atidarykite {{ui:Saulė pro langus tam tikrą dieną}} ir pasirinkite datą. BimCraft seka saulę visą dieną ketvirčio valandos tikslumu ir kiekvienam langui sudeda šilumą, kurią saulė įneša per stiklą:

- **tiesioginę saulę**, kai ji yra prieš langą ir nieko modelyje jos nedengia (tas pats tikslus pjūvis, pasuktas į saulę: balkonas, kuris šešėliuoja aukštą vasaros saulę vidurdienį, įleidžia žemą žiemos saulę);
- **dangaus šviesą** ant stiklo, atėmus tai, ko langas nemato;
- šviesą **nuo žemės** (jos atspindys: pradžiai 0.2);
- visa tai per stiklo **g-vertę** (saulės energijos dalį, kurią jis praleidžia: pradžiai 0.6; naudokite gamintojo skaičių) ir stiklinimo dalį.

Kiekvienas kambarys rodo dienos sumą kWh ir piką vatais su laiku; kambario detalėse diena pavaizduota diagrama. Dangus yra giedras pagal Hottel modelį (Duffie & Beckman, *Solar Engineering of Thermal Processes*), su vasaros ar žiemos duomenimis vietovei ir sezonui bei vietos aukščiu; saulės padėtis – pagal NOAA. Vietos platuma ir ilguma paimamos iš IFC vietovės, o šiaurė – iš tikrosios modelio šiaurės; jei modelyje nėra vietovės, įveskite platumą ir ilgumą. Laikas – standartinis (be vasaros laiko) jūsų įvestoje laiko juostoje, kitu atveju – tos, kurią rodo ilguma.

Neįskaičiuojama: debesys (dangus giedras), stiklo mažesnis praleidimas žemais kampais, rėmai, šešėliuojantys stiklą, užuolaidos ar žaliuzės, ir ką sugeria sienos bei stogas. Ta pačia skirtuko vėsinimo apskaičiavimas naudoja pikų reikšmę.

## Dienos šviesos koeficientas tinklelyje

Atidarykite {{ui:Dienos šviesos koeficientas tinklelyje}} ir {{ui:Apskaičiuoti tinklelį}}: BimCraft uždeda tinklelį ant kiekvieno kambario grindų darbinio paviršiaus aukštyje (pradžiai 0.85 m), pusę metro į vidų nuo sienų, ir apskaičiuoja dienos šviesos koeficientą kiekviename taške pagal **BRE split-flux metodą**:

- **dangaus komponentas**: debesuotas dangus, matomas iš taško per kiekvieno lango angą, atėmus rėmus;
- **išorėje atsispindėjęs komponentas**: ką taškas mato per langą iš pastatų lauke, šviečiančių dešimtadaliu jų už nugaros esančio dangaus šviesumo (keiskite kliūčių ryškumą, jei jie daug šviesesni ar tamsesni);
- **viduje atsispindėjęs komponentas**: šviesa, atsimušanti po kambarį, iš kambario paviršių ir jų atspindžių, langų ploto ir to, kiek jo yra už jų ribų (BRE formulė, vietoj skaidraus stiklo, kuriuo ji laikoma, naudojamas stiklo pralaidumas).

Kiekvienas kambarys rodo savo vidurkį, žemiausią tašką ir kiek jo gauna 2 % ar daugiau; kambario detalėse pateiktas jo planas, kiekvienas taškas nuspalvintas pagal dienos šviesos koeficientą, o langai – raudoni. Kad būtų greita bet kuriame kompiuteryje, kambariui skiriama daugiausia **400 taškų**: dideliame kambaryje tarpas didėja, kad tilptų (įveskite tarpą, jei norite pasirinkti patys).

## Kas neįtraukiama

- Stogo langai (stiklas guli plokščiai arba nuožulniai) išvardijami, bet neskaičiuojami: čia pateiktos formulės skirtos langams sienose.
- Langai, už kurių nėra kambario (pavyzdžiui, holas be erdvės), išvardijami atskirai.
- Lango nišos (anga imama pagal išorinį paviršių), akinimas, saulės valandos ir klimatu pagrįsta dienos šviesa. BS EN 17037, LEED ar BREEAM atveju naudokite dienos šviesos modeliavimo programą.
- Juostos paimtos iš senesnių britų gairių (BS 8206-2) ir rodomos kaip orientyras, niekada kaip išlaikyta ar neišlaikyta.
