---
title: Mreže i stubovi
summary: Postavi linije mreže s numerisanim i slovnim oznakama, po razmaku ili jednu po jednu, crtaj zidove i stubove duž njih i vidi ih na osnovama, izgledima i presjecima.
keywords: mreža, mreže, linija mreže, stupna mreža, osa, ose, oznaka, linija mreže, konstruktivna mreža, 1 2 3, A B C, stub, stubovi, stup, pilon, hvatanje, IfcGrid, IfcColumn
from: bf99a8f7
---

## Šta ćeš uraditi

Postavi zgradu na mrežu, zatim crtaj zidove i postavljaj stubove duž njenih linija.

## Postavi cijelu mrežu

1. Uključi {{ui:Crtanje}}, zatim izaberi {{ui:Verzija}} › {{ui:Mreža}}.
2. Klikni {{ui:Postavi mrežu…}}. Odredi koliko **numerisanih linija** (1, 2, 3…) i **slovnih linija** (A, B, C…) želiš i koliko su međusobno udaljene. Upiši jedan razmak ili više odvojenih zarezom za neravna polja (na primjer `20', 24', 20'`). {{ui:Preko posljednjih linija}} je koliko svaka linija ide preko vanjskih linija druge vrste, a {{ui:Zaokrenuto (stepeni)}} zaokreće cijelu mrežu.
3. Klikni {{ui:Postavi}}, zatim klikni gdje ide prvi presjek (1 / A). Pregled prati pokazivač.

Numerisane linije idu gore-dolje kroz osnovu i raspoređene su po njoj; slovne linije idu preko osnove i raspoređene su prema gore. Slova preskaču I i O, kao na crtežima, da se nikad ne čitaju kao 1 i 0.

## Crtaj linije mreže jednu po jednu

Uz uključenu {{ui:Mreža}}, klikni gdje linija počinje i gdje završava. Dobija sljedeću oznaku iz niza linija kojima ide (poslije 3 dolazi 4; poslije B dolazi C). Pritisni {{key:Esc}} za zaustavljanje.

## Promijeni liniju mreže

Uz uključenu {{ui:Mreža}}, klikni liniju da je izabereš. Upiši novu {{ui:Oznaka}} i pritisni {{key:Enter}}, ili klikni {{ui:Izbriši ovu liniju}} (ili pritisni {{key:Delete}}). {{ui:Oznake}} stavlja oznake na oba kraja, na početku ili kraju svake linije, ili nigdje. Svaka promjena je jedan korak: {{key:Mod+Z}} je vraća.

## Crtaj duž mreže

Alat {{ui:Zid}}, alat {{ui:Stub}} i ostali alati za crtanje hvataju se za linije mreže i za mjesta gdje se presijecaju (oznaka hvatanja je mali krug s križićem).

**Stubovi:** izaberi {{ui:Verzija}} › {{ui:Stub}}, odaberi oblik (pravougaoni ili okrugli), dimenziju i da li stub ide **do sprata iznad** ili do fiksne visine, zatim klikni. {{ui:Na svakom presjeku mreže}} postavlja stub na svaki presjek koji ga još nema. Klikni stub da promijeniš njegov oblik, dimenziju ili visinu u {{ui:Svojstva}}; {{key:Delete}} ga uklanja. Stubovi koji idu do sprata iznad prate ga kad se promijeni njegova visina.

## Šta treba da vidiš

- Mrežu na osnovi svakog sprata, sa oznakom i njenom oznakom na krajevima svake linije.
- Linije mreže u skupu crteža: na osnovama, i na izgledima i presjecima gdje se linija vidi s kraja, s oznakom iznad zgrade. Pogledaj [Izgledi, presjeci i listovi](topic:sheets).
- U IFC datoteci: jedna mreža za zgradu (IfcGrid, njene numerisane linije u jednoj listi, a slovne u drugoj), i stubovi kao IfcColumn sa svojom dimenzijom, visinom i količinama. Drugi BIM programi prikazuju oboje.

:::note
Mreža koja je došla u datoteci iz drugog programa prikazuje se, a alati se za nju hvataju, ali se njene linije ne mogu mijenjati ovdje.
:::
