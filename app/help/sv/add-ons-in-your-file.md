---
title: Tillägg som din fil använder
summary: BimCraft noterar i en IFC-fil vilka tillägg som skrev in i den, och erbjuder att lägga till de du saknar när du öppnar den.
keywords: tillägg, addon, filen använder, saknat tillägg, trusscraft, bibliotek, post, cadcraft_addons
from: 9d9500d8
---

## Vad den gör

När ett tillägg skriver in i modellen (en takstol, en rörsträckning) registrerar BimCraft tillägget och dess version i IFC-projektet, i en egenskapsuppsättning som heter CadCraft_AddOns. Posten skrivs i samma steg som tilläggets egen ändring, så om du ångrar ändringen tas posten bort också. Andra program ignorerar egenskapsuppsättningen; det tillägget ritade finns kvar i filen i båda fallen.

## Steg

1. Öppna en IFC-fil som ett tillägg var med och skapade.
2. Om ett tillägg som filen använder inte är på, visas en anteckning ovanför modellen som anger vilka, med en knapp för att lägga till dem från ditt bibliotekskonto.
3. Lägg till dem, eller stäng anteckningen. Modellen öppnas i båda fallen.

## Vanliga misstag

- **Ingen anteckning visas.** Du är inte inloggad på ditt konto i den här fliken, eller filen saknar post (den gjordes före posterna, eller av ett annat program).
- **Ändringslistan säger "undefined".** Åtgärdat: etiketterna visar nu tilläggets namn.

## Nästa

- [Placera utrustning och möbler från biblioteket](topic:place-from-library)
