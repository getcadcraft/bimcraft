---
title: Polia panela Vlastnosti
summary: Čo znamená každé pole v paneli Vlastnosti a v paneloch Súbor, Výkres a Priečinok a ktoré z nich môžete zmeniť.
keywords: vlastnosti, polia, atribúty, globalid, guid, kopírovať, kopírovať hodnotu, kopírovať všetko, csv, schránka, sériové číslo, značka, typ objektu, riadok, express id, sada vlastností, pset, množstvá, schéma, panel súboru
from: fe55b435
---

## Prvok IFC

Horná časť panela {{ui:Properties}} zobrazuje druh prvku bez predpony „Ifc“ (napríklad „Door“, „WallStandardCase“, „FurnishingElement“) a jeho názov, alebo „Bez názvu“.

| Pole | Význam | Dá sa upraviť |
|---|---|---|
| Name | Názov prvku, často názov rodiny a typu od exportéra | Áno |
| Type | Názov typu prvku, ak ho má | Nie |
| Object type | Voľný text o type, ktorý niektorí exportéri vyplnia | Áno |
| Tag | Označenie alebo značka prvku; mnohí exportéri sem zapisujú ID prvku | Áno |
| Description | Voľný text | Áno |
| GlobalId | Trvalý 22-znakový identifikátor IFC prvku, rovnaký pri každom exporte toho istého prvku | Nie |
| Line | Číslo riadku prvku (`#1234`) v tomto súbore IFC. Mení sa medzi exportmi | Nie |

Nižšie sú **sady vlastností** zoradené podľa názvu:

- Každá sada sa otvorí a zavrie kliknutím na jej názov. Prvé tri sú otvorené.
- Sada označená „(type)“ patrí typu prvku: „Vlastnosť typu: zmena tu sa uplatní na každý prvok tohto typu.“
- Sady množstiev (dĺžky, plochy, objemy, počty, hmotnosti) sú iba na čítanie.
- Zoznamy a enumerované hodnoty sa zobrazujú iba na čítanie.
- Hodnoty Áno/Nie sa zobrazujú ako **Áno** alebo **Nie**.
- Čísla sa na zobrazenie zaokrúhľujú na štyri desatinné miesta. Dĺžky (vlastnosť dĺžky alebo dĺžka množstva) sa zobrazujú v {{ui:Units}} zvolených na paneli nástrojov, s jednotkou vedľa nich, a novú hodnotu môžete zapísať v tej istej jednotke alebo s inou značkou jednotky (2.4 m, 8'-0"): BimCraft zapíše späť vlastné číslo súboru. Ostatné čísla sa zobrazujú tak, ako ich má súbor.
- Prázdna hodnota sa zobrazí ako *prázdna*. Upravená hodnota je tučná s modrým pruhom vedľa seba.

## Kopírovanie hodnoty

Každá hodnota v {{ui:Properties}} má vedľa seba malé tlačidlo kopírovania: kliknutím ju skopírujete do schránky presne tak, ako je zobrazená, napríklad GlobalId, sériové číslo alebo ľubovoľnú hodnotu sady vlastností. Kopírovanie nikdy nespustí úpravu.

Hore {{ui:Copy all}} skopíruje každú hodnotu prvku ako text, sadu po sade, a {{ui:Copy as CSV}} skopíruje riadky so skupinou, vlastnosťou a hodnotou, ktoré sa dajú vložiť do tabuľky; prázdne hodnoty sa zachovajú, aby mal každý údaj riadok. Funguje to rovnako pre prvok iného otvoreného modelu; keď je otvorených viac modelov, CSV začína stĺpcom Model s názvom súboru.

## Panel Súbor (IFC)

| Pole | Význam |
|---|---|
| {{ui:File}}, {{ui:Size}} | Súbor, ktorý ste otvorili |
| Schema | Verzia IFC, napríklad IFC2X3 alebo IFC4 |
| Project | Názov projektu a dlhý názov |
| Phase | Fáza projektu, ak ju exportér zapísal |
| Exported from | Exportujúci program z hlavičky súboru |
| Author | Autor v hlavičke súboru |
| Exported | Dátum a čas v hlavičke súboru |
| Elements | Koľko prvkov s tvarom sa nakreslilo |
| Triangles | Koľko trojuholníkov tvoria ich tvary; miera, aký ťažký je model |

## Panel Súbor (projektové a rodinné súbory)

| Pole | Význam |
|---|---|
| Kind | Projekt, Šablóna projektu, Rodina alebo Šablóna rodiny |
| Saved in | Vydanie, ktoré súbor naposledy uložilo |
| Build | Presný build tohto vydania |
| Read | Koľko súboru BimCraft prečítal z jeho veľkosti |

## Panel Výkres (DWG a DXF)

| Pole | Význam |
|---|---|
| Format | Vydanie, v ktorom bol výkres uložený, s jeho kódom formátu, napríklad AC1032 |
| {{ui:Units}} | Vkladacie jednotky výkresu, ak sú nastavené |
| Entities | Koľko objektov sa prečítalo |
| {{ui:Layers}} | Koľko hladín |
| Sheets | Koľko listov (rozložení), alebo Žiadne |
| Linked drawings | Koľko z jeho prepojených výkresov sa našlo a načítalo |
| Equipment | Koľko označených zariadení je na listoch |

## Panel Priečinok

| Pole | Význam |
|---|---|
| Folder, Files, {{ui:Size}} | Priečinok, ktorý ste otvorili, koľko súborov obsahuje a ich celková veľkosť |
| Models | Projektové a rodinné súbory, každý so zálohami započítanými raz |
| CAD drawings, IFC models | Koľko každého |
| Problems | Koľko kópií modelov je neúplných alebo nečitateľných, alebo Žiadne |
