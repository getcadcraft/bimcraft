---
title: Delo s sloji in listi
summary: Vklapljajte in izklapljajte sloje risbe, preklapljajte med prostorom modela in listi ter razumite, kako listi prikazujejo model prek svojih pogledovnih oken.
keywords: sloji, vklop izklop sloja, zamrzni, odmrzni, listi, postavitve, papirni prostor, zavihki, pogledna okna, upravitelj slojev, la
from: a9a16b53
---

## Kaj boste naredili

Očistite pogled na zapleteno risbo tako, da izklopite sloje, nato pa si oglejte liste risbe enega za drugim.

## Koraki: sloji

1. Odprite risbo DWG ali DXF.
2. Poiščite seznam {{ui:Sloji}} na levi. Vsak sloj ima potrditveno polje, barvni vzorec in ime.
3. Odkljukajte sloj, da skrijete vse, kar je na njem.
4. Kliknite {{ui:Vsi izklopljeni}}, da skrijete vse sloje.
5. Označite samo sloje, ki jih želite videti.
6. Kliknite {{ui:Vsi vklopljeni}}, da znova prikažete vse.

## Kaj bi morali videti

Sloji izginejo in se spet pojavijo hkrati, na {{ui:Model}} in na vsakem listu. Sloji, ki so v sami risbi izklopljeni ali zamrznjeni, se začnejo odkljukani.

## Koraki: listi

1. Poglejte vrsto zavihkov nad risbo: {{ui:Model}}, nato vsak list po imenu.
2. Kliknite zavihek lista.
3. Poglejte list: papir leži na temnejši mizi, vsako pogledno okno pa prikazuje svoj del modela v svojem merilu in kotu.
4. Povečajte pogledno okno, da preberete podrobnosti. Povečujete list, ne pogledno okno, zato se celoten list premakne skupaj.
5. Kliknite {{ui:Prilagodi}} ali dvakrat kliknite, da znova vidite celoten list.

## Kako tukaj delujejo listi

List (postavitev ali papirni prostor) ima glavo risbe in pogledna okna, ki gledajo v prostor modela. BimCraft vsako pogledno okno nariše, omejeno na njegov rob, v njegovem merilu in zasuku, ter skrije sloje, zamrznjene v tem pogledovnem oknu. Prvo pogledno okno vsakega lista je sam list in ni narisano dvakrat.

## Pogoste napake

- **Pričakovanje, da se spremembe slojev shranijo.** Nastavitve slojev vplivajo samo na pogled, dokler ne odprete druge datoteke.
- **Pričakovanje nadzora slojev po pogledovnih oknih.** Seznam {{ui:Sloji}} preklopi sloj povsod. Sloji, ki jih je risba zamrznila v enem pogledovnem oknu, tam ostanejo zamrznjeni.
- **Iskanje iskanja slojev ali stanj slojev.** Še ni izdelano. Seznam je v vrstnem redu risbe.
- **Pričakovanje dela znotraj pogledovnega okna.** Ni ga treba aktivirati: BimCraft samo prikazuje list. Za ogled prostora modela neposredno uporabite {{ui:Model}}.
