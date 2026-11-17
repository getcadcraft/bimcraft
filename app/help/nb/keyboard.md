---
title: Taster og mus
summary: Alle tastatur-, mus-, styreflate- og berøringshandlinger i BimCraft, gruppert etter hva du ser på.
keywords: tastatur, snarveier, hurtigtaster, taster, mus, styreflate, berøring, kretse rundt, panorer, zoom, skjul, isoler, gjennomsiktig, angre, gjør om, kopier, lim inn, dupliser, lagre, tilpass, utskriftsvisning, escape, innstillinger, tegn, vegg, dør, vindu, plan
from: 5c6eedce
---

BimCraft har få snarveier. Mesteparten av arbeidet gjøres med musen og panelene. Snarveier skrevet med {{key:Mod}} bruker Command på Mac og Ctrl ellers. Se [Taster, mus og styreflater](common:keys) for hvordan taster skrives i denne hjelpen.

## Overalt

| Tast | Hva den gjør |
|---|---|
| {{key:Ctrl+Shift+F}} | Bytter mellom skjermmodusene: normal, fullskjerm og fullskjerm med linjene skjult. Ctrl på alle plattformer, også på Mac |
| {{key:Esc}} | Avslutter fullskjerm |
| {{key:Mod+,}} | Åpner {{ui:Innstillinger}}. Se [BimCraft-innstillinger](topic:settings) |
| {{key:Tab}} | Flytter mellom knapper, avkrysningsbokser og verdier. Alle kontroller kan nås fra tastaturet |

## 3D-visning (IFC-modeller)

| Tast eller handling | Hva den gjør |
|---|---|
| {{key:F}} | Tilpass hele modellen, tre-kvart visning (samme som {{ui:Tilpass}}) |
| {{key:Esc}} | Fjerner valget, eller slutter å plassere eller lime inn |
| Klikk | Velg elementet under pekeren; klikk på tom bakgrunn for å fjerne valget |
| {{key:Mod}}+klikk eller {{key:Shift}}+klikk | Legger et element til valget, eller tar det ut |
| {{key:H}} | Skjuler de valgte elementene. Se [Skjul, isoler og se gjennom elementer](topic:hide-and-isolate) |
| {{key:I}} | Viser bare de valgte elementene (isoler) |
| {{key:T}} | Viser de valgte elementene, alt annet gjennomsiktig |
| {{key:Shift+H}} | Viser alle elementer igjen |
| {{ui:Gå}} | Deretter {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piltastene for å gå, {{key:Shift}} løper, dra for å se rundt, {{key:Esc}} stopper. Se [Gå gjennom en modell](topic:walk) |
| {{key:M}} | Mål avstander og flateareal. Se [Mål avstander, flateareal og plasseringer i 3D](topic:measure) |
| Dra med venstre knapp | Kretse rundt |
| Dra med høyre knapp | Panorer |
| {{key:Shift}} eller {{key:Mod}} og dra med venstre knapp | Panorer (praktisk på en styreflate) |
| Rull hjulet, eller dra med midtknappen | Zoom |
| Tofingersrulling eller klyp på styreflaten | Zoom |
| Ett finger (berøring) | Kretse rundt; et trykk velger |
| To fingre (berøring) | Klyp for å zoome, flytt sammen for å panorere |

| {{key:X}} | Snittplan av og på. Se [Kutt en IFC-modell med et snittplan](topic:section-plane) |
| {{key:Shift+X}} | Snittboks rundt de valgte elementene, med rommet satt i Innstillinger |

Det finnes ingen taster for {{ui:Topp}}, {{ui:Front}} og {{ui:Side}}; bruk knappene.

## Rediger

De samme kommandoene finnes i verktøylinjen: {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}} og {{ui:Mer}}-menyen, som viser hver tast. De fungerer i 3D-visningen av en IFC-modell, ikke mens du skriver i et felt. Se [Kopier, lim inn og dupliser bibliotekselementer](topic:copy-paste).

| Tast | Hva den gjør |
|---|---|
| {{key:Mod+Z}} | Angrer siste endring |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gjør om det Angre tok tilbake |
| {{key:Mod+C}} | Kopierer de valgte elementene (navnene og egenskapene deres går også til utklippstavlen som tekst) |
| {{key:Mod+X}} | Klipper ut de valgte elementene: kopierer dem, og sletter dem deretter |
| {{key:Mod+V}} | Limer inn det du kopierte: det følger pekeren, klikk der det skal ligge |
| {{key:Mod+Shift+V}} | Lim inn på samme sted: der et utklipp kom fra, eller ved siden av originalene etter en kopi |
| {{key:Mod+D}} | Dupliser: kopierer de valgte elementene og begynner å lime dem inn |
| {{key:Delete}} | Sletter de valgte elementene, med deler og åpninger. Se [Slett, klipp ut, kopier og lim inn bygningselementer](topic:edit-elements) |
| {{key:Mod+A}} | Velger alle synlige elementer |
| {{key:Esc}} | Fjerner valget |

Når tekst er valgt på siden, kopierer {{key:Mod+C}} teksten som vanlig.

## Planvisning (Tegn)

Disse fungerer mens {{ui:Tegn}} er på, og du ikke skriver i et felt. Se [Tegn vegger](topic:draw-walls) og [Dører og vinduer](topic:doors-and-windows).

| Tast eller handling | Hva den gjør |
|---|---|
| {{key:V}} | {{ui:Velg}} |
| {{key:W}} | {{ui:Vegg}} |
| {{key:D}} | {{ui:Dør}} |
| {{key:N}} | {{ui:Vindu}} |
| {{key:H}} | Med {{ui:Dør}} eller {{ui:Vindu}}: hengslene på den andre enden |
| {{key:Shift}} mens du tegner en vegg | Holder den på 0°, 90°, 180° eller 270° |
| Sifre og fot- og tommetegnene (`'` og `"`) | Begynner å skrive en lengde i feltet {{ui:Lengde}}; {{key:Enter}} bruker den |
| {{key:Enter}}, {{key:Esc}}, høyreklikk eller dobbeltklikk | Avslutter veggen du tegner; {{key:Esc}} igjen går tilbake til {{ui:Velg}} |
| {{key:Delete}} | Sletter de valgte veggene, dørene og vinduene; veggene som er igjen, kobles sammen igjen |
| {{key:F}} med pekeren over planen | Tilpass planen |
| Rull hjulet | Zoom rundt pekeren |
| Dra med midt- eller høyreknappen, eller {{key:Space}} og dra | Panorer; med {{ui:Velg}} på panorerer også et vanlig drag |
| Dra en dør eller et vindu med {{ui:Velg}} | Flytt det langs veggen, eller over på en annen vegg |
| To fingre (berøring) | Klyp for å zoome, flytt sammen for å panorere |

## Plassere og lime inn bibliotekselementer

| Tast | Hva den gjør |
|---|---|
| {{key:R}} | Snur elementet 90° |
| {{key:Tab}} | Vegg-fang av og på: elementets bakside legges mot nærmeste vegg |
| {{key:Enter}} i **X, Y (mm)** | Plasserer på den angitte posisjonen |
| {{key:Esc}} | Slutter å plassere eller lime inn |

## Redigere IFC-verdier

| Tast | Hva den gjør |
|---|---|
| {{key:Enter}} | Beholder verdien du skrev |
| {{key:Esc}} | Avbryter og setter den gamle verdien tilbake |
| Klikk et annet sted | Beholder verdien du skrev |
| {{key:Mod+Z}} | Angrer siste endring. Bare mens du har ulagrede endringer og ikke skriver i et felt |
| {{key:Mod+Y}} | Gjør om det Angre tok tilbake |
| {{key:Mod+S}} | Lagrer som IFC. Bare mens du har ulagrede endringer; ellers åpnes nettleserens egen lagrekommando |

For å redigere bare med tastaturet: trykk {{key:Tab}} til en verdi er markert, og trykk deretter {{key:Enter}} for å begynne å skrive.

## 2D-tegninger (DWG og DXF)

| Tast eller handling | Hva den gjør |
|---|---|
| {{key:F}} | Tilpass tegningen eller arket |
| {{key:P}} | Utskriftsvisning av og på |
| Dobbeltklikk | Tilpass |
| Dra med en hvilken som helst knapp | Panorer |
| Rull hjulet | Zoom ved pekeren |
| Tofingersrulling eller klyp på styreflaten | Zoom ved pekeren. Tofingersrulling panorerer ikke |
| Ett finger (berøring) | Panorer. Klyp-zoom er ikke bygget ennå for tegninger |

## Tegninger i 3D

| Tast eller handling | Hva den gjør |
|---|---|
| {{key:3}} | 3D av og på (også på 2D-visningen) |
| {{key:F}} | Utstrekning: hele tegningen |
| Dra med midt- eller venstreknappen | Kretse rundt |
| Dra med høyreknappen, eller {{key:Shift}} og dra | Panorer |
| Rull hjulet | Zoom mot det som er under pekeren |
| Tofingers sveip på styreflaten | Kretse rundt; med {{key:Shift}}, panorer |
| Klyp på styreflaten | Zoom |
| Ett finger (berøring) | Kretse rundt |
| To fingre (berøring) | Klyp for å zoome, flytt sammen for å panorere |

{{key:F}}, {{key:P}} og {{key:3}} gjør ingenting mens du skriver i et felt, mens utstyrslisten vises, eller når du holder {{key:Mod}} eller {{key:Alt}} nede.

## Filer

| Handling | Hva den gjør |
|---|---|
| Dra en fil inn på siden | Åpner den |
| Dra en mappe inn på siden | Åpner den som prosjektmappe, uten tillatelsesspørsmål |
