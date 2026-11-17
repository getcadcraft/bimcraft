---
title: Mreže osi i stupovi
summary: Postavite linije mreže osi s brojčanim i slovnim oznakama, prema razmaku ili jednu po jednu, nacrtajte zidove i stupove uz njih te ih pogledajte na planovima, pročeljima i presjecima.
keywords: mreža osi, mreže osi, linija mreže, os, osi, oznaka, stup, stupovi, stupna mreža, 1 2 3, A B C, hvatanje, IfcGrid, IfcColumn
from: bf99a8f7
---

## Što ćete učiniti

Postavite zgradu na mrežu osi, zatim nacrtajte zidove i postavite stupove uz njezine linije.

## Postavljanje cijele mreže

1. Uključite {{ui:Crtanje}}, zatim odaberite {{ui:Izgradnja}} › {{ui:Mreža osi}}.
2. Kliknite {{ui:Postavi mrežu osi…}}. Recite koliko **brojčanih linija** (1, 2, 3…) i **slovnih linija** (A, B, C…) želite i koliki im je razmak. Upišite jedan razmak ili više odvojenih zarezima za nejednaka polja (na primjer `20', 24', 20'`). {{ui:Iza zadnjih linija}} je koliko se svaka linija proteže izvan vanjskih linija druge vrste, a {{ui:Zakrenuto (stupnjevi)}} zakreće cijelu mrežu.
3. Kliknite {{ui:Postavi}}, zatim kliknite mjesto gdje ide prvo sjecište (1 / A). Pregled prati pokazivač.

Brojčane linije idu po planu gore i raspoređene su poprijeko; slovne linije idu poprijeko i raspoređene su prema gore. Slova preskaču I i O, kao na crtežima, pa se nikad ne čitaju kao 1 i 0.

## Crtanje linija mreže osi jednu po jednu

Uz uključenu {{ui:Mreža osi}}, kliknite gdje linija počinje i gdje završava. Dobiva sljedeću oznaku linija uz koje se nalazi (nakon 3 dolazi 4; nakon B dolazi C). Pritisnite {{key:Esc}} za prekid.

## Promjena linije mreže osi

Uz uključenu {{ui:Mreža osi}}, kliknite liniju da je odaberete. Upišite novu {{ui:Oznaka}} i pritisnite {{key:Enter}}, ili kliknite {{ui:Izbriši ovu liniju}} (ili pritisnite {{key:Delete}}). {{ui:Oznake osi}} stavlja oznake na oba kraja, na početak ili kraj svake linije, ili nigdje. Svaka promjena je jedan korak: {{key:Mod+Z}} je poništava.

## Crtanje uz mrežu

Alat {{ui:Zid}}, alat {{ui:Stup}} i ostali alati za crtanje hvataju se za linije mreže i za mjesta gdje se sijeku (oznaka hvatanja je mali krug s križićem).

**Stupovi:** odaberite {{ui:Izgradnja}} › {{ui:Stup}}, odaberite oblik (pravokutni ili okrugli), veličinu i je li stup seže **do etaže iznad** ili do zadane visine, zatim kliknite. {{ui:Na svakom sjecištu mreže osi}} postavlja stup na svako sjecište koje ga još nema. Kliknite stup da promijenite njegov oblik, veličinu ili visinu u {{ui:Svojstva}}; {{key:Delete}} ga uklanja. Stupovi koji sežu do etaže iznad prate je kad se promijeni njezina visina.

## Što biste trebali vidjeti

- Mrežu na planu svake etaže, s oznakom i njezinom vrijednošću na krajevima svake linije.
- Linije mreže u skupu crteža: na planovima te na pročeljima i presjecima gdje se linija vidi s kraja, s oznakom iznad zgrade. Pogledajte [Pročelja, presjeci i listovi](topic:sheets).
- U IFC datoteci: jedna mreža za zgradu (IfcGrid, njezine brojčane linije u jednom popisu, a slovne u drugom), a stupovi kao IfcColumn s veličinom, visinom i količinama. Ostali BIM programi prikazuju oboje.

:::note
Mreža osi koja je došla u datoteci iz drugog programa prikazuje se i alati se hvataju za nju, ali se njezine linije ovdje ne mogu mijenjati.
:::
