---
title: Modelio kūrimas iš skenavimo
summary: Trumpas vadovas nuo lazerinio skenavimo iki sienų: atidarykite taškų debesį šalia naujo pastato, sulygiuokite jį su aukštu ir nubrėžkite jo sienas plane.
keywords: skenavimas, lazerinis skenavimas, taškų debesis, kaip pastatyta, esamas pastatas, geodezinė nuotrauka, atsekti, skenavimas į BIM, modelis iš skenavimo, pjūvis, lygiuoti, statmenai, LAS, LAZ, E57, PLY, PCD, PTX, XYZ
from: ce3b9b37
---

## Ką darysite

Nubrėšite esamą pastatą pagal jo lazerinį skenavimą: sienas ten, kur jas rodo skenavimas, tinkamame aukšte, statmenai viena kitai.

## Veiksmai

1. **Pastatas, kuriame brėšite.** {{ui:Failas}} › {{ui:Naujas pastatas}}, su tiek aukštų, kiek pastate yra (aukštus galite pridėti vėliau, žr. [Sklypas, ant jo esantis pastatas ir jo aukštai](topic:site-building-and-levels)). Įsijungia {{ui:Braižymas}}.
2. **Skenavimas.** {{ui:Rodyti}} › {{ui:Taškų debesis}} ir pasirinkite failą (LAS, LAZ, E57, PLY, PCD, PTX arba XYZ: žr. [Rodykite taškų debesį šalia modelio](topic:point-clouds)). Debesis rodomas 3D vaizde, o plane rodomas jo **pjūvis**: nuskenuoti taškai 1200 mm (4 feet) aukščiau aukšto, kaip taškai. Tai aukštis, kuriame sienos, durys ir langai geriausiai matomi.
3. **Sulygiuokite su aukštu.** Atidarykite modelio juostos meniu {{ui:Skenavimas}} ir spustelėkite {{ui:Sulygiuoti jo grindis su šiuo lygiu}}: debesis pakyla arba nusileidžia, kol skenuotos grindys atsiduria ant rodomo aukšto. Patikrinkite, ar pjūvis dabar kerta sienas.
4. **Statmenai pastatui.** {{ui:Skenavimas}} › {{ui:Pasukti statmenai pastatui}} pasuka debesį taip, kad sienos jo pjūvyje eitų išilgai plano ašių, todėl sienos, kurias brėžiate laikydami nuspaustą {{key:Shift}}, sutaps su skenavimu. Jis sukasi apie rastų sienų vidurį, todėl medžiai ar kaimyno siena, patekę į pjūvį, neatstums skenavimo į šalį. Pirmiausia sulygiuokite grindis: tada pjūvis kerta sienas.
5. **Atsekite sienas.** Pasirinkite {{ui:Siena}} ir spustelėkite palei taškus: įrankis prisitraukia prie nuskenuotų taškų (prisitraukimo žymė – mažas rombas) ir prie jau nubrėžtų sienų. Siena brėžiama išilgai savo vidurio linijos, todėl spustelėkite per vidurį dviejų taškų eilių, kurias palieka siena; sienos storį įveskite pirma pasirinkę sienos tipą. Tada pridėkite duris ir langus ten, kur pjūvyje matyti tarpai.
6. **Kitas aukštas.** Plano aukštų sąraše pasirinkite aukštesnį aukštą: pjūvis seka aukšto pjūvio aukštį. Grindis vėl sulygiuokite su tuo aukštu tik tada, jei skenavimo grindys nėra ten, kur jūsų aukštai.

## Ką turėtumėte matyti

- Pjūvis keičiasi keičiant aukštą, o storesnis pjūvis ({{ui:Skenavimas}} › {{ui:Pjūvio storis}}) parodo daugiau taškų ten, kur skenavimas retas.
- {{ui:Skenavimas}} › {{ui:Anuliuoti lygiavimą}} grąžina debesį į vietą, kurioje jis buvo padėtas atidarant. Lygiavimas perkelia debesį tik vaizde: jis neįrašomas į IFC failą, o nubrėžtos sienos lieka vietoje. Lygiavimas keliauja kartu su debesimi, kai pakeičiate {{ui:Padėti}} arba {{ui:Vienetai}}, arba atidarote kitą modelį.
- {{ui:Skenavimas}} › {{ui:Rodyti pjūvį plane}} paslepia arba parodo taškus.

:::tip
Dideli skenavimai: planas piešia iki 60 000 pjūvio taškų, o 3D vaizdas – kelis milijonus visos debesies taškų; abu parenkami tolygiai per visą skenavimą, todėl didelis failas lieka greitas. Norėdami atsekti sienas drafting programoje, naudokite debesies juostos {{ui:Atsekti CadCraft programoje}}.
:::
