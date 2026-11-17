---
title: Otvorite IFC model i pogledajte ga u 3D
summary: Otvorite IFC datoteku, orbitirajte, pomerajte i zumirajte, i koristite Uklopi, Gore, Napred i Sa strane da se snađete.
keywords: ifc, 3d, orbitiranje, pomeranje, zumiranje, uklapanje, pogled odozgo, pogled sa prednje strane, pogled sa strane, navigacija, kocka prikaza, kamera
from: 68b460dd
---

## Šta ćete uraditi

Otvorite IFC model, krećite se po njemu u 3D i idite na standardne prikaze. Oko pet minuta.

Potrebna vam je `.ifc` datoteka. Većina BIM programa je izvozi; u Revit-u je to **File > Export > IFC**. Pogledajte [Dobijanje projektne datoteke u 3D preko IFC-a](topic:rvt-to-ifc).

## Koraci

1. Kliknite {{ui:Choose a file}} (ili oblast za prevlačenje gore levo).
2. Izaberite svoju `.ifc` datoteku i potvrdite.
3. Sačekajte da statusna linija završi. Prvi put prikazuje „Pokrećem IFC motor…“, zatim „Čitam model…“ i „Gradim geometriju: … od … elemenata“.
4. Pogledajte model: otvara se u pogledu tri četvrtine, uklopljen u ekran.
5. Kliknite {{ui:Top}} na traci iznad modela da pogledate pravo odozgo.
6. Kliknite {{ui:Front}} da pogledate sprednju stranu, pa {{ui:Side}} da pogledate sa strane.
7. Kliknite {{ui:Fit}}, ili pritisnite {{key:F}}, da se vratite na pogled tri četvrtine celog modela.

## Šta treba da vidite

- Model u sredini, sa tankim tamnim ivicama za izgled nalik crtežu.
- Panel {{ui:File}} levo: ime datoteke, veličinu, IFC šemu (na primer IFC2X3 ili IFC4), ime projekta, fazu, program iz kog je izvezen, autora, datum izvoza i brojače elemenata i trouglova.
- Liste {{ui:Storeys}} i {{ui:Elements}} ispod njega.
- Statusnu liniju: „Otvoreno *ime datoteke*: *n* elemenata za *s* s“.

## Kretanje

:::mouse
| Za | Uradite ovo |
|---|---|
| Orbitiranje | Prevucite levim dugmetom |
| Pomeranje | Prevucite desnim dugmetom, ili držite {{key:Shift}} (ili {{key:Mod}}) i prevucite levim dugmetom |
| Zumiranje | Okrenite točkić miša, ili prevucite srednjim dugmetom |
| Pogled na sve | Pritisnite {{key:F}} ili kliknite {{ui:Fit}} |
:::

:::mac mouse
Na trackpad-u: prevucite jednim prstom dok je pritisnut da orbitirate; držite {{key:Shift}} ili {{key:Mod}} i prevucite da pomerate; skrolujte sa dva prsta ili raširite ili stisnite prste za zumiranje. Klik sa dva prsta je desni klik, i možete njime prevući da pomerate, ali {{key:Shift}} i prevlačenje je lakše.
:::

:::touch
| Za | Uradite ovo |
|---|---|
| Orbitiranje | Prevucite jednim prstom |
| Zumiranje | Raširite ili stisnite sa dva prsta |
| Pomeranje | Pomerite dva prsta zajedno |
| Pogled na sve | Dodirnite {{ui:Fit}} |
:::

Orbitiranje se uvek obrće oko tačke u sredini modela. Pomeranje pomera tu tačku, pa posle dugog pomeranja orbitiranje može delovati van centra: kliknite {{ui:Fit}} da ga vratite.

## Senčeno, sa ivicama ili žičano

Tri mala dugmeta tik iznad kocke prikaza biraju kako se model crta: {{ui:Shaded}}, {{ui:Shaded with edges}} (podrazumevano) i {{ui:Wireframe}}. Takođe su komande (u meniju {{ui:View}} i na listi Prilagodi), pa mogu imati sopstvene tastere. {{ui:Plan}}, {{ui:Split}} i {{ui:3D}} su u redu {{ui:View}} na traci.

## Česte greške

- **Očekivanje imenovanih prikaza.** BimCraft ima četiri fiksna prikaza ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), kocku prikaza u donjem desnom uglu i slobodno orbitiranje. Ne čuva prikaze.
- **Traženje planova i preseka.** U ovoj verziji nema 2D planova ni kutija preseka. Model sečete jednom ravni {{ui:Section}} ([Sečenje IFC modela ravni preseka](topic:section-plane)), ili isključite spratove: [Prikaz i skrivanje spratova, prostora i ivica](topic:storeys-and-spaces).
- **Otvaranje projektne datoteke i očekivanje 3D prikaza.** Projektna datoteka se otvara kao kartica datoteke. Prvo izvezite IFC.
- **Otvaranje `.ifczip`.** Raspakujte je, ili izvezite običan `.ifc`.
- **Vrlo veliki model usporava karticu ili je ruši.** Pogledajte [Pregledači, uređaji i memorija](topic:platforms).

## Dalje

[Izaberite element i pročitajte njegova svojstva](topic:inspect-element).
