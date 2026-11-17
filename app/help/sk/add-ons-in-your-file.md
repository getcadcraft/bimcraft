---
title: Doplnky, ktoré váš súbor používa
summary: BimCraft zaznamenáva v súbore IFC, ktoré doplnky do neho zapísali, a pri otvorení ponúkne doplnenie tých, ktoré chýbajú.
keywords: doplnok, addon, tento súbor používa, chýbajúci doplnok, trusscraft, knižnica, záznam, cadcraft_addons
from: 9d9500d8
---

## Čo to robí

Keď doplnok zapíše niečo do modelu (väzník, potrubná trasa), BimCraft zaznamená doplnok a jeho verziu do projektu IFC, do sady vlastností CadCraft_AddOns. Záznam sa zapíše v tom istom kroku ako zmena doplnku, takže späť vzatá zmena vráti späť aj záznam. Ostatné programy túto sadu vlastností ignorujú; to, čo doplnok nakreslil, zostane v súbore tak či onak.

## Postup

1. Otvorte súbor IFC, pri ktorom pomohol doplnok.
2. Ak doplnok, ktorý súbor použil, nie je zapnutý, nad modelom sa zobrazí poznámka, ktoré doplnky to sú, s tlačidlom na ich pridanie z vášho účtu knižnice.
3. Pridajte ich alebo poznámku zatvorte. Model sa otvorí v každom prípade.

## Časté chyby

- **Poznámka sa nezobrazí.** Na tejto karte nie ste prihlásení do svojho účtu alebo súbor nemá záznam (bol vytvorený pred zavedením záznamov alebo iným programom).
- **Zoznam zmien hovorí „undefined“.** Opravené: štítky teraz zobrazujú názov doplnku.

## Ďalej

- [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library)
