---
title: Pereți și uși dintr-o scanare cu telefonul sau cu laserul
summary: Transformați o scanare a unei încăperi în pereți, uși și încăperi propuse, pe care le acceptați pe rând.
keywords: scanare, scanare cu telefonul, lidar, nor de puncte, pereți din scanare, uși din scanare, scanare de încăpere, ply, e57, las, obj, sugestie
from: a4ef0f10
---

## Ce face

Cu o scanare deschisă (un nor de puncte, precum PLY, E57 sau LAS, sau o plasă, precum OBJ), BimCraft taie scanarea la înălțimea planului, o rotește drept față de clădire și caută șiruri lungi și subțiri de puncte: acestea sunt pereții. Un gol de lățimea unei uși între două șiruri de pe aceeași linie devine un singur perete cu o ușă în el. Pereții care închid un spațiu formează o încăpere.

Nimic nu se desenează până nu acceptați. Pereții și ușile vin ca o listă de propuneri (sunt modificări în modul Sugestie): păstrați-le pe cele corecte, respingeți-le pe celelalte, iar tot ce păstrați se desenează într-un singur pas în Anulare. Încăperile apar singure.

## Ce verifică

Pereții care nu se închid, șirurile de perete mai scurte decât grosimea unui perete și un gol de mărimea unei uși, fără perete în jur, sunt raportate ca Probleme cu o poziție, ca să vă uitați la scanare acolo.

## Neverificate până la verificare

Pereții, ușile și încăperile acceptate dintr-o scanare sunt marcate ca neverificate: o casetă punctată și un „?” în plan, până le marcați ca verificate. Vedeți [Marcarea elementelor ca verificate sau verificate pe teren](topic:verification).

## Ce nu poate face

- Găsește pereții care merg în două direcții perpendiculare. Un perete diagonal sau curb nu este găsit.
- Câte un etaj o dată. Ferestrele nu sunt găsite (una este doar un gol când secțiunea este la înălțimea pervazului).
- A fost încercat pe scanări generate de încăperi și pe plase, nu încă pe scanări reale făcute cu telefonul. Cât de bine merge pe o scanare reală (deriva pe o plimbare lungă, mobilier lipit de pereți, sticlă, uși deschise) nu se știe, iar ajustarea pe scanări reale este pasul următor. Verificați fiecare propunere cu scanarea înainte de a o accepta.
