---
title: Začať novú budovu
summary: Vytvorte prázdny model budovy s jej úrovňami, nakreslite jej steny, umiestnite položky z knižnice a uložte ho ako IFC.
keywords: nový, nová budova, prázdny, bez obsahu, začať od nuly, šablóna, úrovne, podlažia, podlahy, vytvoriť, model
from: 68786865
---

## Čo urobíte

Začnite model budovy od nuly namiesto jeho otvárania. BimCraft vytvorí prázdny model IFC s projektom, lokalitou, budovou a jej úrovňami. Na úrovne môžete z knižnice umiestniť zariadenia a nábytok a uložiť ho ako súbor IFC.

:::note
Steny sa dajú kresliť už teraz: pozri [Kreslenie stien](topic:draw-walls). Dvere, okná, podlahy a strechy sa pripravujú ako ďalšie.
:::

## Postup

1. Kliknite na {{ui:Nová budova}} pod položkou **Otvoriť súbor alebo priečinok**, alebo na štartovacej stránke.
2. Zadajte **Názov budovy**.
3. Vyberte, koľko má **Úrovní** (1 až 200).
4. Zadajte **Výšku úrovne** od podlahy k podlahe: napríklad `10'-0"`, `10'6"` alebo `3000 mm`. Holé číslo je v USA stopy, inde milimetre.
5. Každé pole je už vyplnené, takže ich môžete nechať tak. Pod nimi pole uvádza, s čím začínate: jednotky, **Typ steny**, ktorý nástroj Stena najprv nakreslí (ak chcete, vyberte iný zo zoznamu), a prvý list.
6. Kliknite na {{ui:Vytvoriť}}. Úrovne sú zoradené od 0, každá o jednu výšku úrovne nad predchádzajúcou, a pomenované Úroveň 1, Úroveň 2 a tak ďalej. Zobrazia sa v strome modelu a pôdorys Úrovne 1 sa otvorí vedľa 3D pohľadu so zapnutým {{ui:Kresliť}}.
7. Nakreslite steny: kliknite na {{ui:Stena}} a potom na dva body. Pozri [Kreslenie stien](topic:draw-walls). Úrovne premenujte alebo zmeňte ich výšky na paneli **Úrovne**.
8. Umiestnite položky: pozri [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library). Panel umiestňovania vypisuje každú úroveň.
9. Kliknite na {{ui:Uložiť ako IFC}}. Súbor dostane názov podľa budovy, napríklad `Smith's house.ifc`.

## Dobré vedieť

- Model sa ukladá v milimetroch ako IFC4. Ďalšie programy BIM ho otvoria.
- Nová budova prichádza s jedným listom **A-101**, ktorý obsahuje pôdorys najnižšej úrovne: A3 v mierke 1:100, keď pracujete v metrických jednotkách, inak Tabloid v mierke 1/8" = 1'-0". Kým nie je prvá stena, je prázdny a potom zobrazuje pôdorys podľa toho, ako kreslíte. Otvorte ho pod **Listy** v prehliadači projektu a zmeňte jeho formát papiera, mierku alebo popisové pole, pridajte pohľady alebo ho zmažte. Budova začatá zo šablóny prinesie namiesto toho listy šablóny.
- Ak chcete zmeniť, s čím každá nová budova začína (typ steny pre metrické projekty, úrovne, prvý list, nástroj aktívny po Vytvoriť), pozri [Predvolené pravidlá](topic:default-policies).
- Pred prvou stenou nič nemusíte nastavovať. Typ steny, výšky úrovní, jednotky aj list možno neskôr zmeniť.
- **Podlažia** na ľavom paneli vypisujú len úrovne, na ktorých niečo je; strom modelu ich vypisuje všetky.
- Kým neuložíte, nová budova sa počíta ako neuložená práca. BimCraft sa opýta, skôr než otvoríte iný súbor alebo odídete, a uchová kópiu v tomto prehliadači pre prípad, že sa karta zatvorí.
