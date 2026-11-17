---
title: Nacrtajte sliku drugim programom
summary: Naš vlastiti praćenje putanje crta sliku Renderuj; drugi program je može nacrtati samo kroz dodatak motora renderovanja u CadCraft Studiju. Šta se prenosi i zašto neki programi nikada nisu ponuđeni.
keywords: renderuj, motor, vanjski program, motor dodatka, studio, pozadina, red, usd, gltf, nacrtao, blender, gpl
from: 652b413c
---

Slika u {{ui:Renderuj}} je nacrtana **našim vlastitim motorima**: Brzo i Praćenje putanje, u pregledniku i u CadCraft Studiju. Drugi program je može nacrtati samo kad je donese [dodatak motora renderovanja](topic:render-engine-addons): vidi [Dodavanje motora renderovanja pomoću dodatka](topic:render-engine-addons). Da scenu odnesete drugom programu i nastavite rad tamo, koristite [Otvaranje scene u drugom programu](topic:render-open-in) ili [Pošaljite scenu motoru za igre](topic:render-unreal).

## Nacrtajte sliku motorom dodatka

1. Uključite dodatak u Postavke › Dodaci. Njegov motor se pojavljuje na listi „Motor“ u {{ui:Renderuj}}.
2. Odaberite ga. Njegove vlastite postavke se prikazuju ispod liste „Motor“.
3. Kliknite {{ui:Renderuj}}. U Studiju, prvi put kad dodatak pokrene program, Studio vas pita u svom vlastitom dijaloškom okviru. Napredak se prikazuje dok crta; {{ui:Zaustavi}} ga završava. Slika se pojavljuje označena motorom koji ju je nacrtao.

Motor napisan u JavaScriptu radi i u pregledniku. Motor koji pokreće program na ovom računaru radi samo u Studiju; u pregledniku se prikazuje kao datoteka za spašavanje.

## Šta se prenosi

Motor dobija **paket**: model kao USD datoteku (i glTF datoteku kad je traži), i datoteku postavki sa tačnim vrijednostima materijala, suncem i nebom, svakom svjetiljkom koja je uključena sa svojom snagom i profilom svjetla, kamerom i izloženošću. Svaki program osvjetljava, tonira i uzorkuje na svoj način, pa su slike slične po kameri, suncu, svjetiljkama i izloženosti, ali ne piksel po piksel.

## Programi koje CadCraft nikada ne pokreće

CadCraft nikada ne pokreće program pod GNU GPL licencom, i nikada ga ne navodi kao motor ili kao cilj za „Otvori u“. Blender je jedan od njih, pa nije na listi „Motor“. USD ili glTF datoteka spašena iz {{ui:Renderuj}} i dalje se u njemu otvara kao u svakom programu koji čita te datoteke.

:::note
Panoramske i stereo kamere i slika neba (umjesto nje koriste se boje neba) ne prenose se drugom programu. Ništa urađeno u drugom programu se ne vraća modelu.
:::
