---
title: Prechádzka modelom
summary: Prejdite model IFC vo výške očí pomocou klávesnice; gravitácia vás drží na podlahe a steny vás zastavia.
keywords: prechádzka, prechod, prvá osoba, lietanie, navigácia, výška očí, gravitácia, kolízia, wasd, vnútri, prehliadka
from: 0a22854a
---

## Čo urobíte

Model si pozriete ako niekto, kto v ňom stojí: prejdete chodbou, vojdete do miestnosti, vystúpite po schodisku.

## Postup

1. Otvorte model IFC a kliknite na {{ui:Prechádzka}} na paneli nástrojov.
2. Kliknite na podlahu, na ktorej chcete stáť. Stojíte tam s očami vo výške {{ui:Výška očí}} (na začiatku 1.6 m; zobrazuje sa a zadáva v {{ui:Jednotky}}, ktoré ste zvolili: 5'-3" v stopách a palcoch, 1600 v milimetroch; číslo bez jednotky sa berie v tejto jednotke, alebo napíšte jednotku, napríklad 1.8 m), pričom sa pozeráte rovnakým smerom ako pohľad.
3. Pohybujte sa klávesmi {{key:W}} {{key:A}} {{key:S}} {{key:D}} alebo šípkami. Podržte {{key:Shift}} pre rýchlejší pohyb. Ťahaním v pohľade sa rozhliadnete.
4. Stlačte {{key:Esc}} alebo kliknite na {{ui:Hotovo}}, čím prechádzku ukončíte. Pohľad zostane tam, kde ste boli, a je pripravený na otáčanie okolo modelu.

## Čo by ste mali vidieť

- **Gravitácia** vás drží na podlahe pod vami a vystupuje s vami po schodoch a stupňoch. Vypnite ju, ak chcete levitovať: {{key:E}} alebo {{key:PageUp}} stúpa, {{key:Q}} alebo {{key:PageDown}} klesá.
- **Zastavenie pri stenách** vás zastaví tesne pred stenami, dverami a čímkoľvek iným, čo je v ceste, a necháva vás po nich kĺzať. Vypnite ho, ak chcete prechádzať cez steny.
- Skryté a priehľadné prvky a to, čo rez odstránil, vás nezastavia a nestojíte na nich.

## Časté chyby

- **Keď stlačím W, nič sa nestane.** Klávesy idú do poľa, do ktorého píšete: najprv kliknite do pohľadu.
- **Spadol som z veľkej výšky.** Pod miestom nebola podlaha (otvor alebo skrytá podlaha). Vypnite gravitáciu alebo začnite na podlahe.

## Ďalej

- [Skrytie, izolácia a priehľadnosť prvkov](topic:hide-and-isolate)
- [Rez modelu IFC rezovou rovinou](topic:section-plane)
