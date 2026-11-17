---
title: Pobarvajte elemente glede na lastnost
summary: Pobarvajte vsak element glede na vrednost ene lastnosti, na primer razreda, tipa, etaže, materiala, požarne odpornosti ali cene, preberite legendo, kliknite vrednost, da prikažete samo te elemente, in shranite barve kot shemo za druge modele.
keywords: barva, pobarvaj, barvanje po, legenda, pametni pogled, videz, lastnost, tip, material, požarna odpornost, filter, izoliraj, tema, vrednosti, shema, barvna shema, shrani barve, ponovna uporaba, ekipa, json, barvni vzorec
from: f081d343
---

## Kaj boste naredili

Na prvi pogled vidite, kako je lastnost razporejena po modelu: katere stene so zunanje, kateri materiali so kje uporabljeni, kateri elementi nimajo požarne odpornosti. Vsak element dobi barvo svoje vrednosti, legenda pa pove, kaj pomeni vsaka barva in koliko elementov jo ima.

## Koraki

1. Odprite model IFC.
2. Kliknite zavihek {{ui:Barva}} na desni.
3. Izberite lastnost na seznamu. Prve pripadajo vsakemu elementu ({{ui:Razred}}, {{ui:Tip}}, {{ui:Etaža}}, {{ui:Material}}, {{ui:Ime}}…); ostale prihajajo iz naborov lastnosti in naborov količin modela, pod imenom niza. Število za vsakim je število elementov, ki jih ima.
4. Preberite legendo: barvo, vrednost in število elementov, ki jo imajo.
5. Kliknite vrednost, da prikažete samo te elemente. Držite {{key:Mod}} in kliknite, da dodate več vrednosti. Pritisnite {{key:Shift+H}}, da spet prikažete vse.
6. Kliknite {{ui:Izklopljeno}}, da se vrnete na lastne barve modela.

## Kaj bi morali videti

- Do sedem vrednosti dobi vsaka svojo barvo, najpogostejša vrednost prva. Več vrednosti si deli eno sivo barvo in je navedenih kot **druge vrednosti**.
- Število z mnogo različnimi vrednostmi je razdeljeno na šest enakih razponov, od svetle (nizko) do temne (visoko).
- Elementi brez lastnosti so bledo sivi in navedeni kot **Brez vrednosti**, tako da barvni elementi izstopajo.
- Barve se spremenijo ob preklopu med Papir in {{ui:Model}}, ostanejo pa med urejanjem modela.
- Lastnost tipa velja za vsak element tega tipa; kadar ima element svojo vrednost iste lastnosti, velja njegova lastna vrednost.

## Spreminjanje barv in shranjevanje kot shema

- Kliknite vzorec barve vrednosti v legendi, da izberete drugo barvo. Model se takoj prebarva.
- {{ui:Shrani shemo}} prenese barve kot majhno datoteko `.json`, poimenovano po lastnosti, na primer `Class colors.json`.
- Na drugem modelu ali računalniku sodelavca kliknite {{ui:Odpri shemo …}} in izberite to datoteko. Vsaka vrednost v shemi dobi svojo barvo, tako da imata isti požarni razred ali sistem enako barvo v vsakem modelu.
- Vrednost, ki je v shemi ni, je pobarvana sivo in navedena kot „ni v shemi“; vrednosti iz sheme, ki jih ta model nima, ostanejo na seznamu z 0, da vidite celotno shemo.
- Shema hrani barve v obeh temah. Izbira lastnosti na seznamu spet začne s samodejnimi barvami.

## Pogoste napake

- **„Ta model nima … vrednosti.“** Shema je bila shranjena za lastnost, ki je ta model nima (na primer drugo ime nabora lastnosti). Odprite shemo, narejeno za tovrstni model, ali izberite lastnost na seznamu.
- **Lastnost manjka na seznamu.** Noben element s obliko v modelu je nima. Lastnosti samih etaž in prostorov niso navedene.
- **Vse je iste barve.** Vsi elementi imajo isto vrednost ali nobene: poglejte števila v legendi.

## Naslednje

- [Skrijte, izolirajte in prosojno prikažite elemente](topic:hide-and-isolate)
- [Poiščite pot z drevesom modela](topic:model-tree)
