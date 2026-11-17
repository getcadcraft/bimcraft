---
title: Vymeniť umiestnenú položku a aktualizovať položky z knižnice
summary: Nahraďte jednu umiestnenú položku knižnice inou so zachovaním jej miesta a čísla položky a skontrolujte v knižnici novšie verzie všetkého v modeli.
keywords: vymeniť, nahradiť, náhrada, aktualizovať, novšia verzia, skontrolovať aktualizácie, knižnica, stiahnutá, zmena licencie, číslo položky
from: 8bdfe01d
---

## Čo urobíte

Zmeňte názor na položku bez toho, aby ste ju znova presúvali, a udržujte položky knižnice v modeli aktuálne.

## Výmena jednej položky

1. Kliknite na umiestnenú položku knižnice v modeli.
2. V {{ui:Vlastnosti}} kliknite na {{ui:Vymeniť položku…}} v poli **Položka knižnice**. Otvorí sa karta {{ui:Knižnica}}.
3. Nájdite novú položku a kliknite na jej kartu.
4. Kliknite na {{ui:Vymeniť … za tento}}.

Prvok si ponechá svoje miesto, otočenie, podlažie, číslo položky, množstvo a poznámky. Jeho typ, tvar a údaje položky sa zmenia na novú položku. Položky umiestnené rovnakým spôsobom zdieľajú jeden typ, rovnako ako pri umiestňovaní.

Položka, ktorá má varianty (pozri [Umiestnenie a výmena položky knižnice s variantmi](topic:library-variants)), pri výmene vypíše svoje ostatné varianty na vrchu karty {{ui:Knižnica}}: po jednom kliknutí na každú.

Keď je nová položka iného druhu, napríklad umývadlo namiesto stola, trieda IFC prvku sa zmení tak, aby zodpovedala (tu z prvku vybavenia na sanitárny koncový prvok), takže ju iný softvér správne zaradí do tabuľky. Zostáva tým istým prvkom s rovnakým GlobalId, takže odkazy na neho fungujú ďalej. {{key:Mod+Z}} vráti starú triedu so starou položkou.

## Kontrola aktualizácií

1. Kliknite na {{ui:Aktualizácie}} na paneli nástrojov (alebo na {{ui:Skontrolovať aktualizácie}} v poli položky knižnice).
2. Prečítajte si zoznam: každá položka knižnice v modeli s jej verziou v modeli, najnovšou verziou a stavom: **Aktuálne**, **Novšia verzia**, **Stiahnutá** alebo **Nenájdené**. Uvádza aj, čo sa zmenilo (geometria, údaje, licencia alebo oprava).
3. Kliknite na {{ui:Aktualizovať}} v riadku alebo na {{ui:Aktualizovať všetko}}.

## Čo by ste mali vidieť

- "Aktualizované umiestnenia: *n*. Miesta, čísla položiek, množstvá a poznámky sa zachovávajú."
- Riadky "Aktualizované: *položka*" v zozname zmien. {{key:Mod+Z}} vráti každú z nich späť.

## Dobré vedieť

- Kontrolovať možno len položky, ktoré pochádzajú z knižnice. Položky zo súborov nemajú identifikátor knižnice.
- Keď sa licencia zmenila, už umiestnená kópia si ponechá licenciu, s ktorou prišla, kým ju neaktualizujete.
- **Stiahnutá** položka sa neponúka pre nové umiestnenia. Stiahnutú z autorskoprávnych dôvodov nemožno vôbec stiahnuť; nahraďte ju pomocou {{ui:Vymeniť položku…}}.
- Umiestnený variant zostane tým variantom, ak ho novšia verzia položky stále obsahuje; inak prevezme predvolený variant položky.
- Kontrola odosiela iba identifikátory a verzie položiek, nikdy váš model.
