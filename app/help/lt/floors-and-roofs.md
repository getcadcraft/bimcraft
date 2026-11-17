---
title: Patalpos, grindys, lubos ir stogai
summary: Patalpos atsiranda, kai jas uždaro sienos; patalpai ar visam pastatui priskirkite grindis ir lubas, o sienoms uždėkite keturšlaitį ar dvišlaitį stogą. Visi jie seka sienas, kai sienos perkeliamos.
keywords: patalpa, patalpos, erdvė, plotas, perimetras, grindys, perdanga, pagrindas, lubos, stogas, keturšlaitis stogas, dvišlaitis stogas, nuolydis, išsikišimas, nuokapis, kalenta, įžėlis, 6/12
from: 1fb1813c
---

## Ką darysite

Baikite pastato apvalkalą. Patalpos atsiranda pačios iš sienų; grindis, lubas ir stogą sukuriate vienu spustelėjimu kiekvieną. Kadangi jos nustatomos pagal sienas, jos seka, kai sienos perkeliamos.

## Patalpos

Kiekviena erdvė, uždaryta nubrėžtomis sienomis, yra patalpa. Ji atsiranda, kai uždaro paskutinė siena, ir turi numerį (101, 102 … pirmame lygyje, 201 … kitame) bei pavadinimą (**Patalpa 1**, **Patalpa 2** …). Jos plotas rodomas plane jos viduryje.

- Kai įjungtas {{ui:Pasirinkti}}, spustelėkite patalpos vidų, kad ją pasirinktumėte. Skiltyje **Savybės** pakeiskite jos **Pavadinimą** (pavyzdžiui, `Virtuvė`) ir **Numerį**; rodomi jos plotas ir perimetras.
- Ištrynus sieną tarp dviejų patalpų, jos tampa viena; nubrėžus sieną per patalpą, ji tampa dviem. Patalpa išlaiko savo pavadinimą ir numerį, kai aplink ją esančios sienos perkeliamos.
- Patalpos negalima ištrinti atskirai: ji yra erdvė, kurią sudaro sienos.

Plotai matuojami pagal vidinius sienų paviršius. Patalpos įrašomos kaip IFC erdvės su grindų plotu, perimetru, aukščiu ir tūriu, todėl žiniaraščiai juos nuskaito (žr. [Kiekių suma, elementų sąrašai ir erdvių žiniaraščiai](topic:quantity-totals)).

## Grindys

1. Spustelėkite {{ui:Grindys}}.
2. Pasirinkite **Ši patalpa** arba **Visas pastatas**, **Rūšį** (medinės grindys ar betoninė perdanga) ir jų storį.
3. Nukreipkite žymeklį į patalpos vidų (arba į bet kurią vietą pastato viduje). Tai, ką grindys apimtų, paryškinama kartu su plotu.
4. Spustelėkite. Grindų viršus yra aukšto grindų lygis; grindys leidžiasi žemyn per savo storį. Visam pastatui skirtos grindys pasiekia išorinius sienų paviršius.

## Lubos

1. Spustelėkite {{ui:Lubos}}.
2. Pasirinkite **Ši patalpa** arba **Visas pastatas** ir jų **Aukštį** virš grindų.
3. Nukreipkite žymeklį į vidų ir spustelėkite.
4. Norėdami pamatyti jas iš apačios, su tinkleliu ir šviestuvais, perjunkite planą į lubų planą: žr. [Vaizdai, vaizdo diapazonai ir jūsų lapai](topic:views-and-sheets).

## Stogas

1. Lygyje, kurio sienos laiko stogą, spustelėkite {{ui:Stogas}}.
2. Įveskite **Nuolydį** kaip pakilimą per 12 (`6/12`) arba laipsniais (`30`), ir **Išsikišimą**.
3. Pasirinkite **Galus**: **Keturšlaitis stogas** (kiekviena pusė nuožulni), **Dvišlaičiai galai trumpose pusėse** arba **Dvišlaičiai galai ilgose pusėse** (pastatas su keturiomis pusėmis) arba **Vienšlaitis**.
4. Nukreipkite žymeklį į pastato vidų: nuokapis ir kalenta rodomi plane. Spustelėkite.

Stogas stovi ant sienų, viršutiniame lygyje virš jų, o jo apatinė pusė liečiasi su išoriniu sienų paviršiumi. Dvišlaičių galų užpildymui naudojama dvišlaitė siena, tokio pat storio kaip siena žemiau. L, T ar U formos pastatas gauna keturšlaitį stogą, kurio sparnai susitinka įžėlėse.

## Keisti juos

Pasirinkite grindis, lubas ar stogą (3D vaizde, modelio medyje arba stogą spustelėdami jo kontūro vidų viršutiniame lygyje) ir pakeiskite jį skiltyje **Savybės**: grindų rūšį, storį ir tai, kiek jų viršus yra virš lygio; lubų aukštį, storį ir **Raštą** (tinklelį, kurį lubų plane braižoma ant jų: nėra, 600 × 600, 600 × 1200, 2' × 2' arba 2' × 4'); stogo nuolydį, išsikišimą, galus ir storį. Kiekvienas pakeitimas yra vienas atšaukimo žingsnis.

## Suteikite grindims, luboms ar stogui tipą su sluoksniais

Grindims, luboms ir stogui, kaip ir sienai, galima priskirti **tipą**: pavadintą sluoksnių struktūrą, kiekvienas sluoksnis su savo medžiaga ir tikru storiu.

- **Kai dedate.** Įrankiai Grindys, Lubos, Stogas ir Braižyti grindis turi sąrašą **Tipas** savo eilutėje. **Be tipo** dedama kaip anksčiau, su savo storiu. Tipas dedamas tokio storio, koks yra visų jo sluoksnių suma.
- **Vėliau.** Pasirinkite grindis, lubas ar stogą ir skiltyje Savybės pasirinkite **Tipas**. Elementas lieka tas pats: jo vieta, patalpa ir duomenys išlieka, nieko iš naujo nebraižoma. Keičiasi tik jo tipas, storis ir medžiaga. Taip eskizo etapo elementas tampa išplėtotu: pakeiskite jo bendrąjį tipą tikru.
- **Redaguoti tipą…** atidaro tipo redaktorių: sluoksnius nuo **viršaus** žemyn, šerdį, kiekvieno sluoksnio funkciją ir tipo LOD žymą. Išsaugojus pakeičiami visi to tipo elementai vienu žingsniu, o vienas Anuliuoti jį atšaukia. Pakeitus pradinį tipą, išsaugoma jo kopija kaip jūsų tipas.
- Kol elementas turi tipą, jo **Storis** yra tipo storis ir negali būti įvedamas rankiniu būdu. Norėdami jį pakeisti, pasirinkite kitą tipą arba **Be tipo**.

Pradiniai tipai yra po vieną **bendrąjį** tipą kiekvienam (vienas bendrosios medžiagos sluoksnis, pažymėtas LOD 200) ir du sluoksniniai (pažymėti LOD 300): medinių sijų grindys ir betoninės grindys su estrichu; medinis stogas ir betoninis plokščias stogas; gipskartonio lubos ir pakabinamos plytelių lubos. Tai pradinės reikšmės, o ne išbandytos konstrukcijos: prieš jais pasikliaudami patikrinkite sluoksnius.

Žiniaraštyje **Sluoksniai: plotas ir tūris** išvardyti visi naudojamų tipų sluoksniai; žr. [Žiniaraščiai, matmenys ir PDF](topic:plan-schedules-and-pdf). Grindų, stogo ir lubų tipai keliauja tarp projektų tipų paketu arba kaip bibliotekos elementas; žr. [Tipų paketai](topic:type-packs).

## Gerai žinoti

- Perkeliant, pridedant ar trinant sienas, patalpos, grindys, lubos ir stogas virš jų sukuriami iš naujo.
- Stogas tinka bet kokiam kontūrui. Kad kiekviena siena turėtų savo nuolydį, dvišlaitį ar vienšlaitį galą, pakeltą sijos lentą, fasciją ir sofitą, arba kad nubrėžtumėte vieną stogo plokštumą, žr. [Stogai: kiekvienos sienos nuolydis, dvišlaičiai galai, vienšlaičiai stogai ir stogo plokštumos](topic:roofs).
- {{key:Delete}} ištrina pasirinktas grindis, lubas ar stogą.
