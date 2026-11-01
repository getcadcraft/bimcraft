---
title: Začnite novú budovu
summary: Vytvorte prázdny model budovy s jeho úrovňami, nakreslite jeho steny, umiestnite položky z knižnice a uložte ho ako IFC.
keywords: nový, nová budova, prázdny, začať od nuly, šablóna, úrovne, podlažia, poschodia, vytvoriť, model
from: 546b8ae8
---

## Čo urobíte

Začnete model budovy od nuly namiesto otvorenia existujúceho. BimCraft vytvorí prázdny model IFC s projektom, pozemkom, budovou a jej úrovňami. Na úrovne môžete z knižnice umiestniť vybavenie a nábytok a uložiť ho ako súbor IFC.

:::note
Steny sa už dajú kresliť: pozrite [Kreslenie stien](topic:draw-walls). Dvere, okná, podlahy a strechy sa budujú ako ďalšie.
:::

## Kroky

1. Kliknite na {{ui:Nová budova}} pod **Otvoriť súbor alebo priečinok** alebo na úvodnej stránke.
2. Napíšte **Názov budovy**.
3. Zvoľte, koľko **Úrovní** má (1 až 200).
4. Napíšte **Výšku úrovne**, od podlahy po podlahu: napríklad `10'-0"`, `10'6"` alebo `3000 mm`. Obyčajné číslo sú stopy v USA a milimetre inde.
5. Kliknite na {{ui:Vytvoriť}}. Úrovne sa naskladajú od 0, každá o výšku úrovne vyššie než predchádzajúca, a pomenujú sa Level 1, Level 2 a tak ďalej. Zobrazia sa v strome modelu a pôdorys úrovne Level 1 sa otvorí vedľa 3D pohľadu so zapnutým {{ui:Kresliť}}.
6. Nakreslite steny: pozrite [Kreslenie stien](topic:draw-walls). Úrovne premenujte alebo ich výšky zmeňte v paneli **Úrovne**.
7. Umiestnite položky: pozrite [Umiestnenie vybavenia a nábytku z knižnice](topic:place-from-library). Lišta umiestňovania uvádza každú úroveň.
8. Kliknite na {{ui:Uložiť ako IFC}}. Súbor sa pomenuje podľa budovy, napríklad `Smith's house.ifc`.

## Dobré vedieť

- Model sa ukladá v milimetroch, ako IFC4. Otvoria ho aj iné programy BIM.
- **Podlažia** v ľavom paneli uvádza iba úrovne, na ktorých niečo je; strom modelu ich uvádza všetky.
- Kým neuložíte, nová budova sa považuje za neuloženú prácu. BimCraft sa opýta, kým otvoríte iný súbor alebo odídete, a uchová kópiu v tomto prehliadači pre prípad zatvorenia karty.
