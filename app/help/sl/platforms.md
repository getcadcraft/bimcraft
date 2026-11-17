---
title: Brskalniki, naprave in pomnilnik
summary: Kaj se v BimCraft razlikuje med Chrome, Edge, Firefox in Safari, na Macu, Windows in Linuxu, z miško, sledilno ploščico ali dotikom, ter kako velike datoteke lahko prebere.
keywords: brskalnik, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablica, telefon, dotik, sledilna ploščica, pomnilnik, velike datoteke, webgl, zmogljivost
from: fd8acba1
---

BimCraft deluje v trenutnih različicah Chrome, Edge, Firefox in Safari, na Macu, Windows in Linuxu. 3D pogled potrebuje WebGL, ki ga ima vsak trenutni brskalnik. Glejte [Brskalniki in računalniki](common:browsers), kaj aplikacije na splošno potrebujejo.

## Odpiranje mape

| Brskalnik | {{ui:Odpri mapo}} naredi to | Povlečena mapa | {{ui:Nedavne mape}} |
|---|---|---|---|
| Chrome, Edge | Izbirnik map brskalnika, nato „Naj si stran ogleda datoteke?“: kliknite **Ogled datotek** | Odpre se brez poziva | Da, za mape, izbrane ali povlečene |
| Firefox | Izbirnik map sistema | Odpre se brez poziva | Ne |
| Safari | Izbirnik map sistema, z gumbom **Naloži** (nič se ne naloži) | Odpre se brez poziva | Ne |

V ozadju: Chrome in Edge uporabljata izbirnik File System Access in lahko zapomnita mapo. Firefox in Safari uporabljata starejši izbirnik map, ki preda vse datoteke v mapi naenkrat in si je ne more zapomniti. Povlečeno mapo vsak brskalnik prebere datoteko po datoteki.

:::chromium
Brave in nekateri drugi brskalniki na Chromiumu izklopijo izbirnik map. BimCraft nato uporabi izbirnik map sistema, brskalnik pa lahko vpraša „Naložim *n* datotek na to spletno mesto?“. Nič se ne naloži; datoteke gredo samo v zavihek. Povlek mape prepreči vprašanje.
:::

## Mac, Windows in Linux

- Bližnjice, zapisane {{key:Mod+S}} in {{key:Mod+Z}}, so Command na Macu in Ctrl na Windows in Linuxu.
- {{key:Ctrl+Shift+F}} (načini zaslona) je Control na vseh platformah, tudi na Macu.
- Pogovorna okna za datoteke in mapa za prenose sta vašega sistema.

## Miška, sledilna ploščica in dotik

| Vnos | 3D pogled | 2D risanje |
|---|---|---|
| Miška | Povlek z levim gumbom vrti, povlek z desnim pomika, kolešček povečuje, klik izbere | Vsak povlek pomika, kolešček povečuje, dvoklik prilagodi |
| Sledilna ploščica | Klik in povlek vrti; {{key:Shift}} ali {{key:Mod}} in povlek pomika; drsenje z dvema prstoma ali stisk povečuje | Klik in povlek pomika; drsenje z dvema prstoma ali stisk povečuje |
| Dotik | En prst vrti, dva prsta stiskata in pomikata, dotik izbere | En prst pomika; stiskanja za povečavo še ni; dotaknite se {{ui:Prilagodi}} |

Na sledilni ploščici Mac je desni klik klik z dvema prstoma (ali klik s Control). Glejte [Tipke, miške in sledilne ploščice](common:keys).

Tablični računalniki in telefoni lahko odprejo posamezne datoteke in si jih ogledajo, vendar je zaslon majhen, številni mobilni brskalniki ne morejo izbrati map, veliki modeli pa se morda ne bodo prilegali njihovemu pomnilniku. Najbolje deluje računalnik.

## Velike datoteke in pomnilnik

Vse, kar BimCraft prebere, živi v pomnilniku zavihka brskalnika. Koliko ga zavihek lahko uporabi, je odvisno bolj od brskalnika in vašega računalnika kot od BimCraft.

| Datoteka | Koliko se prebere | Kaj pričakovati |
|---|---|---|
| IFC | Celotna datoteka, plus 3D geometrija, zgrajena iz nje | Odvisno od računalnika in brskalnika; model več sto megabajtov je lahko preveč za prenosnik. Nad 1.5 milijona trikotnikov so robovi izklopljeni |
| Datoteke projekta in družin | Okoli 40 KB do 100 KB, ne glede na velikost | Tudi zelo veliki osrednji modeli se odprejo v trenutku, tudi z omrežnega diska |
| DWG in DXF | Celotna datoteka | Zelo velike risbe prikažejo „Ta risba je zelo velika; prikazan je samo del.“ |
| Mape | Seznam datotek, plus nekaj kilobajtov na model | Do 20,000 datotek |

Če zavihku zmanjka pomnilnika, brskalnik prikaže svojo stran z napako (na primer „Aw, Snap!“ v Chromu). Zaprite druge zavihke, ponovno naložite BimCraft in poskusite znova, ali uporabite računalnik z več pomnilnika.

## Povezano

- [Na spletu in brez povezave](topic:online-offline)
- [Odpravljanje težav](topic:troubleshooting)
