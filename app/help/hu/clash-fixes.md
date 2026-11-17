---
title: Ütközések rendezése az egyes szakágak javításaival
summary: Az ütközési eredményekből a Javítási javaslatok készítése minden ütközéshez felsorolja, mit tehetne az egyes szakág: csatornát kerülő úton a gerenda alá vagy fölé vezetni, csövet oldalra tolni, oszlopot áthelyezni, nyílást nyitni egy gerendában. Mindegyik a modell másolatán kipróbálva, az előnyeivel és hátrányaival együtt, hogy Ön elfogadhassa vagy elutasíthassa. Az elfogadott javítások egyetlen visszavonási lépésként kerülnek be.
keywords: ütközés, ütközésjavítás, ütközések rendezése, koordináció, javítási javaslatok, átvezetés, kerülő út, eltolás, csatorna, cső, kábeltálca, gerenda, oszlop, nyílás, hüvely, kompromisszum, szakág, szerkezet, gépészet, vízvezeték, villamos, építészet, asszisztens
from: f7bafdd9
---

## Mit fog csinálni

Az ütközések listáját döntésekké alakítja. Minden szakág (szerkezet, gépészet, vízvezeték, villamos, építészet) csak a saját elemeire tesz javaslatot, minden javaslatot a modell másolatán ellenőriznek, és Ön dönt.

## Lépések

1. Először futtassa az ütközésvizsgálatot. Lásd: [Ütközések vizsgálata](topic:clash-check) és [Csövek és csatornák vizsgálata a szerkezettel szemben](topic:mep-against-structure).
2. Az eredmények alatt kattintson a {{ui:Javítási javaslatok készítése}} gombra. A **Javasolt javítások** panel megnyílik a modell mellett.
3. Minden ütközésnél látja az egyes szakágak javaslatait, a legjobbal elöl. Minden sor leírja, mit tesz, és mik a kompromisszumai: rendezi-e az ütközést, hány új ütközést okoz, mely szabályokat sérti, mennyi vezetéket ad hozzá vagy mennyit mozdít el, hány idomra van szükség, és egy költségpontszámot.
4. Kattintson a {{ui:Megjelenítés}} gombra, hogy lássa az elemeket 3D-ben. Az egyes ütközéseknél (egy javítást) kattintson az {{ui:Elfogadás}} gombra, vagy az {{ui:Elutasítás}} gombra.
5. Az alján lévő sor azt mutatja, mit tesznek együtt az elfogadott javítások: hány ütközés rendeződik, hány marad, és keletkezik-e új ütközés.
6. Kattintson az {{ui:Elfogadott javítások alkalmazása (egy visszavonási lépés)}} gombra. Az ütközésvizsgálat újra lefut. A {{ui:Visszavonás}} egyszerre mindet visszavonja.

## Mit tehet az egyes szakág

- **Gépészet** (csatornák, fűtési és hűtési csövek): kerülő úton át vagy alá vezetni azt a szakaszt, amely ütközik; az egész vezetéket fel vagy le emelni; oldalra mozgatni; egy téglalap keresztmetszetű csatornát ugyanakkora területtel laposabbá tenni.
- **Vízvezeték** (víz, lefolyók, gáz, tűzivíz): ugyanezek a mozdulatok, azzal a különbséggel, hogy egy gravitációs lefolyót sosem lehet kerülő úton vezetni; csak egészben mozgatható, az esését megtartva.
- **Villamos** (kábeltálcák és csőkábel-csatornák): ugyanezek a mozdulatok; a tálca fölött 150 mm szabad térnek kell maradnia a kábelezéshez.
- **Szerkezet**: oszlopot mozgatni (legfeljebb 300 mm-rel), vagy nyílást nyitni egy gerenda gerincében vagy egy födémben az áthaladó vezetéknek. Minden szerkezeti javításnál jelzi, hogy a szerkezeti tervező jóváhagyása szükséges.
- **Építészet**: hüvelyt elhelyezni a falban az áthaladó vezetéknek, vagy olyan falat mozgatni, amelyről ismert, hogy nem hordoz terhet.

## Amit látni fog

- A szabályt sértő javítások meg vannak jelölve: a 25 mm-es résnél közelebb valamihez, a 2100 mm-es belmagasság-határ alatt, gerincnyílás, amely nagyobb a gerenda magasságának 40%-ánál vagy túl közel van a végeihez, illetve olyan gerenda, amely megváltoztatná a fesztávját.
- A BimCraft azokat a javításokat, amelyeket meg tud csinálni, alkalmazza a modellen: a Cső és Csatorna eszközökkel rajzolt vezetékeket és az Ön által rajzolt oszlopokat. A többi **Csak tanácsadás** jelzést kap: elfogadásuk helyett a Problémák fülön egy probléma kerül felvételre.

## Tudnivalók

- A javítások a program beépített szabályaiból származnak; ehhez nem használunk MI-t.
- Ha asszisztenst csatlakoztat (lásd: [MI-asszisztens használata a modellel](topic:assistants)), az beolvashatja az ütközéseket, és saját javaslatokat tehet egy szakághoz a megnyitott panelbe. Ezeket ugyanúgy ellenőrzik, az asszisztens nevével jelölve, és semmi nem változik, amíg el nem fogadja és nem alkalmazza őket.
- A másolatot dobozokkal ellenőrzik minden elem és a vezeték minden szakasza körül, ezért egy ferde vezeték olyan ütközést jelezhet, amelyet az ütközésvizsgálat nem. Javítások alkalmazása után futtassa újra az ütközésvizsgálatot: az a végső döntő.
- A határértékek (mennyit mozdulhat el egy vezeték, milyen magasra emelkedhet egy kerülő, a rés) a panelben megadott alapértékek.

## Következő

- [Problémák és BCF-fájlok](topic:issues-bcf)
- [Csőszakaszok és csatornák rajzolása](topic:pipes-and-ducts)
