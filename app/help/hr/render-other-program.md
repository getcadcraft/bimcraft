---
title: Nacrtajte sliku drugim programom
summary: Naš vlastiti path tracer crta sliku za Render; drugi program je može nacrtati samo preko dodatka motora za render u CadCraft Studiju. Što se prenosi i zašto neki programi nikad nisu ponuđeni.
keywords: render, vanjski program, motor dodatka, studio, pozadina, red, usd, gltf, nacrtao, blender, gpl
from: 652b413c
---

Sliku u {{ui:Render}} crtaju **naši vlastiti motori**: {{ui:Fast}} i Path tracer, u pregledniku i u CadCraft Studiju. Drugi program je može nacrtati samo kad je donosi [dodatak motora za render](topic:render-engine-addons): vidi [Dodavanje motora za render dodatkom](topic:render-engine-addons). Za odnošenje scene u drugi program i nastavak rada tamo koristite [Otvorite scenu u drugom programu](topic:render-open-in) ili [Pošaljite scenu game engineu](topic:render-unreal).

## Nacrtajte sliku motorom dodatka

1. Uključite dodatak u Postavke › Dodaci. Njegov motor se pojavljuje na popisu Motor u {{ui:Render}}.
2. Odaberite ga. Njegove vlastite postavke prikazuju se ispod popisa Motor.
3. Kliknite {{ui:Render}}. U Studiju, prvi put kad dodatak pokrene program, Studio vas pita u vlastitom dijaloškom okviru. Napredak se prikazuje dok crta; {{ui:Stop}} ga zaustavlja. Slika se pojavljuje označena motorom koji ju je nacrtao.

Motor napisan u JavaScriptu radi i u pregledniku. Motor koji pokreće program na ovom računalu radi samo u Studiju; u pregledniku se prikazuje kao datoteka za spremanje.

## Što se prenosi

Motor dobiva **paket**: model kao USD datoteku (i glTF datoteku kad je zatraži) te datoteku postavki s točnim vrijednostima materijala, suncem i nebom, svakom svjetiljkom koja je uključena sa svojom snagom i profilom svjetla, kamerom i ekspozicijom. Svaki program osvjetljuje, tonira i uzorkuje na svoj način, pa su slike slične po kameri, suncu, svjetiljkama i ekspoziciji, ali ne piksel po piksel.

## Programi koje CadCraft nikad ne pokreće

CadCraft nikad ne pokreće program pod licencom GNU GPL i nikad ga ne navodi kao motor ni kao cilj stavke Otvori u. Blender je jedan od njih, pa nije na popisu Motor. USD ili glTF datoteka spremljena iz {{ui:Render}} i dalje se u njemu otvara kao u svakom programu koji čita te datoteke.

:::note
Panoramske i stereo kamere te slika neba (koriste se boje neba) ne prenose se drugom programu. Ništa što se napravi u drugom programu ne vraća se u model.
:::
