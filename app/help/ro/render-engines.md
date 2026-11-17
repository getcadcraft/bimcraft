---
title: Alegerea programului care desenează imaginea
summary: Alegerea Motor din caseta Randare: cele două motoare ale noastre, alte programe în CadCraft Studio și ce face web-ul în schimb.
keywords: randare, motor, motor de randare, plug-in, studio, program extern, desenată de, coadă, motor din supliment
from: 44a1ef5e
---

{{ui:Randare}} are o alegere **Motor** deasupra {{ui:Mod}}. Cele două motoare ale noastre sunt mereu acolo și funcționează peste tot; suplimentele pot adăuga altele, iar în CadCraft Studio lista include și programele care preiau scena.

| Motor | Ce face | Unde |
|---|---|---|
| Încorporat: Rapid | Imaginea rapidă: lumină de zi, umbre moi, aspect de sticlă și metal, în câteva secunde | Browser și Studio |
| Încorporat: Trasor de cale | Lumina care sare între suprafețe pe placa grafică sau pe procesor, coada de randare și celelalte calculatoare din rețea | Browser și Studio |
| Motorul unui supliment | Desenează și returnează imaginea: vezi [Desenarea imaginii cu alt program](topic:render-other-program) | Browser (un motor scris în JavaScript) sau Studio (un motor care rulează un program) |
| Un program care preia scena | Studio pune scena în dosarul său și o ține sincronizată | Studio |
| Deschidere în … | Salvează scena și o deschide într-un program; nimic nu revine: vezi [Deschiderea scenei într-un alt program](topic:render-open-in) | Pe web se salvează fișierul |

## Cum se comportă alegerea

- Alegerea Rapid sau Trasor de cale schimbă și {{ui:Mod}}, și invers. Nimic altceva din casetă nu se schimbă pentru cei care nu folosesc alt motor.
- Un motor care nu este disponibil rămâne în listă, cu motivul ("nu a fost găsit", "are nevoie de o versiune mai nouă"); nu îl puteți alege. În browser, un motor care rulează doar în Studio arată "salvează un fișier": {{ui:Randare}} salvează atunci scena și setările ei într-un fișier pe care îl duceți la acel program.
- Alegerea este salvată împreună cu setările de randare ale fișierului, iar motorul ales ultimul este motorul de pornire pentru fișierele care nu au o alegere proprie.
- O imagine dintr-un alt program spune ce program a desenat-o și versiunea lui, în casetă și în coada de randare. Promisiunile paginii [Randare](topic:render) acoperă doar **motoarele noastre**: alt program luminează, tonifică și eșantionează în felul său, deci două imagini ale aceleiași scene sunt asemănătoare ca cameră, soare, lămpi și expunere, dar nu pixel cu pixel.

## Ce primește fiecare motor

Scena ajunge la alt program ca un **pachet**: modelul ca fișier USD (același fișier pe care îl scrie [Salvare ca USD](topic:usd)) și un fișier de setări care conține ce nu poate fi lăsat pe seama unui importator USD: valorile exacte ale materialelor, lămpile aprinse cu puterea și profilurile lor de lumină, soarele, cerul, expunerea și camera așa cum o desenează caseta. Nimic nu este încărcat nicăieri.

## Coada de randare

O imagine pentru alt program poate aștepta în [coada de randare](topic:render#the-render-queue) ca cele ale noastre; sarcina ei reține pentru ce motor este.
