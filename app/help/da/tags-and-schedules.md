---
title: Tag elementer og lav lister efter tag
summary: Definér dine egne tags (et navn, en type, de tilladte værdier og hvilke klasser), tag mange elementer på én gang, og lav lister, hvis kolonner, filtre og grupper læser tags. Tagsene gemmes i IFC-filen.
keywords: tags, tag, tagging, egne egenskaber, parametre, delte parametre, egenskabssæt, pset, liste, filter, gruppér efter, overflade, brandklasse, massredigering, csv
from: 9cc7c90d
---

## Hvad du skal gøre

Et tag er en egenskab, du selv definerer, såsom *Overflade* eller *Brandklasse*. Du definerer den én gang for projektet, sætter den på mange elementer på én gang, og hver liste i BimCraft kan læse den: taglisten her, {{ui:Mængder}}, Find, Farve efter egenskab og [Dokumenter fra modellen](topic:documents-from-the-model).

## Trin

1. Åbn en IFC-model, eller start en ny bygning.
2. I venstre panel, under {{ui:Mængder}}, åbn {{ui:Tags}}.
3. Klik på {{ui:Tilføj en tag}}. Giv det et navn, vælg dets type, og hvis du vil, angiv de tilladte værdier (med kommaer) og de klasser, det er til (`IfcDoor`, `IfcWall` …). Klik på {{ui:Tilføj tagget}}.
4. Vælg elementerne i modellen (Find hjælper: vælg alle døre på én gang).
5. Under {{ui:Tag valget}} vælger eller skriver du en værdi for hvert tag, du vil sætte, lader de andre stå, som de er, og klikker på {{ui:Anvend på … valgte elementer}}.
6. Under {{ui:Taglist}} sætter du kryds i kolonnerne, tilføjer filtre, vælger {{ui:Gruppér efter}} og klikker derefter på {{ui:Download CSV}}.

## Hvad du skal se

- Et trin i ændringslisten for hver gemt definition og hver tagning; {{ui:Fortryd}} tager det tilbage.
- Elementer af en klasse, som et tag ikke er til, udelades af det tag, og statuslinjen siger, hvor mange.
- Taglisten viser én række pr. element, grupperet efter det felt, du valgte; klik på en rækkes første celle for at vælge det element.
- {{ui:Mængder}} lister tags under `CadCraft_Tags`, så du dér kan summere arealer eller antal efter et tag.

## Typer

Typerne er den samme liste som for familieparametre: Længde (millimeter), Vinkel (grader), Tal, Heltal, Ja / Nej, Pen (1–16), Tekst, Materiale og Udfyldning. En værdi, der ikke passer til sin type, eller ikke er en af de tilladte værdier, afvises med en besked, og intet ændres.

## Godt at vide

- Alt er almindelig IFC, så andre programmer læser værdierne: definitionerne ligger i et egenskabssæt `CadCraft_TagDefs` på projektet, og værdierne i et egenskabssæt `CadCraft_Tags` på hvert element (én egenskab pr. tag). Længder skrives i filens længdeenhed.
- `IfcWall` i et tags klasser omfatter også standardcase-vægge og elementvægge.
- Omdøbning af et tag omdøber dets værdier på alle elementer i samme trin. Fjernelse af et tag fjerner kun dets definition: værdier, der allerede er sat, bliver på elementerne som almindelige egenskaber. Ryd dem først (vælg {{ui:Ryd}}) for at fjerne dem.
- Tags i CadCraft-tegneappen (blokattributter) er ikke lavet endnu.
