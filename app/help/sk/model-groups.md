---
title: Skupiny modelu
summary: Zoskupte vybrané prvky do jednej pomenovanej skupiny, umiestnite skupinu znova inde a zmenou jednej kópie zmeníte všetky.
keywords: skupina, skupina modelu, zoskupovanie, zrušiť skupinu, inštancia, kópia, opakovanie, typická jednotka, pole, byt, upraviť skupinu, IfcGroup
from: 121c5027
---

## Čo urobíte

Zoskupte typické pole, umiestnite ho niekoľkokrát a zmeňte každú kópiu zmenou jednej.

## Kde je nástroj

- Rozloženia s pásom kariet: {{ui:Architektúra}} › **Model** › {{ui:Skupina modelu}}.
- Klasické rozloženie: panel Kresliť › ponuka {{ui:Miestnosti}} › Skupina modelu.

## Postup

1. Pomocou nástroja Vybrať vyberte prvky: kliknite na jeden, ostatné vyberte pomocou Ctrl+klik alebo Shift+klik.
2. Vyberte {{ui:Skupina modelu}}. Prvky sa hneď stanú skupinou. Ak ju chcete pomenovať, najprv zadajte {{ui:Názov skupiny}} do riadka, alebo ho zadajte potom a skupinu premenujete.
3. Stlačte {{ui:Umiestniť ďalšiu}} a kliknite na miesto, kde má kópia stáť: jej ľavý dolný roh sa umiestni do miesta kliknutia.
4. Zmeňte ľubovoľnú kópiu: posuňte koniec steny, zmeňte veľkosť dverí, zmažte stĺp. Každá ďalšia kópia skupiny sa zmení v tom istom kroku a jedným krokom späť sa vráti všetko.
5. Kým držíte nástroj Skupina modelu, kliknutie na prvok vyberie celú jeho skupinu.

## Ďalšie možnosti

- {{ui:Pridať vybrané}}: pridá ďalšie prvky do skupiny, ktorú ste naposledy vybrali.
- {{ui:Zrušiť skupinu}}: táto kópia sa stane bežnými prvkami. Ostatné kópie zostávajú skupinou.
- Celú kópiu presuňte nástrojom {{ui:Presunúť}}: je to tá istá skupina na novom mieste; ostatné sa nepresúvajú.
- Zmažte prvky kópie a kópia zmizne.

## Čo môže byť v skupine

Steny s dverami a oknami, stĺpy a nakreslené podlahy možno umiestniť znova a zachovať ich rovnaké. Skupina môže obsahovať aj iné prvky, ale potom ju zatiaľ nemožno umiestniť znova; riadok vysvetlí prečo.

Kópie sa presúvajú, nie otáčajú ani zrkadlia.

## V IFC

Skupina je IfcGroup s IfcRelAssignsToGroup na jej členov, ktorí zostávajú bežnými stenami, stĺpmi a podlahami. Každá kópia jednej skupiny nesie rovnaký identifikátor definície.

## Ešte nie je hotové

- Otáčanie alebo zrkadlenie kópie.
- Schodištia, strechy, podlahy miestností a položky knižnice v skupine, ktorá sa umiestňuje znova.
- Profil steny, sklon a otvory v stenách sa do kópií neprenášajú.
- Skupiny v skupinách.

Pozri aj [Presunúť, zarovnať a rozmiestniť](topic:move-align-distribute).
