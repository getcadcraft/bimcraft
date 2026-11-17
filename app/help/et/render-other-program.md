---
title: Joonista pilt teise programmiga
summary: Meie enda kiirte jälgija joonistab Renderda pildi; teine programm saab seda joonistada ainult renderdusmootori lisandmooduli kaudu CadCraft Studios. Mis kaasa läheb ja miks mõned programmid kunagi ei ole pakutud.
keywords: renderda, mootor, väline programm, lisandmooduli mootor, studio, taust, järjekord, usd, gltf, joonistatud, blender, gpl
from: 652b413c
---

Pildi {{ui:Renderda}} dialoogis joonistavad **meie enda mootorid**: Kiire ja Kiirte jälgija, brauseris ja CadCraft Studios. Teine programm saab seda joonistada ainult siis, kui seda toob **renderdusmootori lisandmoodul**: vt [Renderdusmootori lisamine lisandmooduliga](topic:render-engine-addons). Stseeni viimiseks teise programmi ja töö jätkamiseks seal kasuta [Ava stseen teises programmis](topic:render-open-in) või [Saada stseen mängumootorisse](topic:render-unreal).

## Joonista pilt lisandmooduli mootoriga

1. Lülita lisandmoodul sisse jaotises Sätted › Lisandmoodulid. Selle mootor ilmub {{ui:Renderda}} mootorite loendisse.
2. Vali see. Selle enda sätted kuvatakse mootorite loendi all.
3. Klõpsa {{ui:Renderda}}. Studios küsib Studio esimesel korral, kui lisandmoodul käivitab programmi, seda oma dialoogis. Edenemine kuvatakse joonistamise ajal; {{ui:Peata}} lõpetab selle. Pilt ilmub märgituna mootoriga, mis selle joonistas.

JavaScriptis kirjutatud mootor töötab ka brauseris. Arvutis programmi käivitav mootor töötab ainult Studios; brauseris kuvatakse see failina, mille saab salvestada.

## Mis kaasa läheb

Mootor saab **paketi**: mudeli USD-failina (ja glTF-faili, kui see seda küsib) ning sätete faili täpsete materjalivärtuste, päikese ja taevaga, iga sisselülitatud valgustiga koos võimsuse ja valgusprofiiliga, kaamera ja säritusega. Iga programm valgustab, toonib ja proovivõtab omal moel, seega on pildid kaamera, päikese, valgustite ja särituse poolest sarnased, kuid mitte pikslite täpsusega samad.

## Programmid, mida CadCraft kunagi ei käivita

CadCraft ei käivita kunagi GNU GPL litsentsiga programmi ega too seda kunagi mootorina ega Ava programmis sihtkohana. Blender on üks neist, seega ei ole see mootorite loendis. USD- või glTF-fail, mis on salvestatud jaotisest {{ui:Renderda}}, avaneb selles siiski nagu igas programmis, mis neid faile loeb.

:::note
Panoraam- ja stereokaamerad ning taevapilt (kasutatakse taeva värve) ei lähe teise programmi. Teises programmis tehtut mudelisse tagasi ei tule.
:::
