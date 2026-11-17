---
title: Nacrtaj sliku drugim programom
summary: Naš sopstveni praćenje putanje zraka crta sliku Renderuj; drugi program je može nacrtati samo preko dodatka motora za renderovanje u CadCraft Studiu. Šta se prenosi i zašto se neki programi nikad ne nude.
keywords: renderovanje, motor, spoljni program, motor iz dodatka, studio, pozadina, red, usd, gltf, nacrtano od, blender, gpl
from: 652b413c
---

Sliku u {{ui:Render}} crtaju **naši motori**: {{ui:Fast}} i Praćenje putanje zraka, u pregledaču i u CadCraft Studiu. Drugi program je može nacrtati samo kad ga donese [dodatak motora za renderovanje](topic:render-engine-addons): vidi [Dodavanje motora za renderovanje pomoću dodatka](topic:render-engine-addons). Da odneseš scenu u drugi program i nastaviš rad tamo, koristi [Otvaranje scene u drugom programu](topic:render-open-in) ili [Slanje scene alatu za igre](topic:render-unreal).

## Nacrtaj sliku motorom dodatka

1. Uključi dodatak u Podešavanja › Dodaci. Njegov motor se pojavljuje na listi motora u {{ui:Render}}.
2. Izaberi ga. Njegova podešavanja se prikazuju ispod liste motora.
3. Klikni {{ui:Render}}. U Studiju, kad dodatak prvi put pokrene program, Studio te pita u svom dijalogu. Napredak se prikazuje dok crta; {{ui:Stop}} ga prekida. Slika se pojavljuje označena motorom koji ju je nacrtao.

Motor napisan u JavaScriptu radi i u pregledaču. Motor koji pokreće program na ovom računaru radi samo u Studiju; u pregledaču se prikazuje kao datoteka za čuvanje.

## Šta se prenosi

Motor dobija **paket**: model kao USD datoteku (i glTF datoteku kad je traži), i datoteku podešavanja sa tačnim vrednostima materijala, suncem i nebom, svakom svetiljkom koja je uključena sa svojom snagom i profilom svetla, kamerom i izloženošću. Svaki program osvetljava, tonira i uzorkuje na svoj način, pa su slike slične po kameri, suncu, svetiljkama i izloženosti, ali ne piksel po piksel.

## Programi koje CadCraft nikad ne pokreće

CadCraft nikad ne pokreće program pod GNU GPL licencom i nikad ga ne navodi kao motor ni kao cilj stavke Otvori u. Blender je jedan od njih, zato nije na listi motora. USD ili glTF datoteka sačuvana iz {{ui:Render}} i dalje se u njemu otvara kao u svakom programu koji čita te datoteke.

:::note
Panoramske i stereo kamere i slika neba (koriste se boje neba) ne prenose se drugom programu. Ništa urađeno u drugom programu ne vraća se u model.
:::
