---
title: Otvori IFC model i pogledaj ga u 3D
summary: Otvori IFC datoteku, rotiraj, pomjeraj i zumiraj, i koristi Uklopi, Gore, Sprijeda i Strana da se snađeš.
keywords: ifc, 3d, rotacija, pomjeranje, zumiranje, uklopi, pogled odozgo, pogled sprijeda, pogled sa strane, navigacija, kocka pogleda, kamera
from: 68b460dd
---

## Šta ćeš uraditi

Otvori IFC model, rotiraj, pomjeraj i zumiraj u 3D i pređi na standardne poglede. Oko pet minuta.

Treba ti `.ifc` datoteka. Većina BIM programa je izvozi; u Revitu je to **File > Export > IFC**. Vidi [Prebaci projektnu datoteku u 3D preko IFC-a](topic:rvt-to-ifc).

## Koraci

1. Klikni {{ui:Odaberi datoteku}} (ili područje za prevlačenje u gornjem lijevom uglu).
2. Odaberi svoju `.ifc` datoteku i potvrdi.
3. Sačekaj da statusna linija završi. Prvi put prikazuje „Pokretanje IFC motora…“, zatim „Čitanje modela…“ i „Izrada geometrije: … od … elemenata“.
4. Pogledaj model: otvara se u pogledu tri četvrtine, uklopljen u ekran.
5. Klikni {{ui:Gore}} na traci iznad modela da pogledaš ravno odozgo.
6. Klikni {{ui:Sprijeda}} da pogledaš sprijeda, pa {{ui:Strana}} da pogledaš sa strane.
7. Klikni {{ui:Uklopi}} ili pritisni {{key:F}} da se vratiš na pogled cijelog modela u tri četvrtine.

## Šta bi trebalo da vidiš

- Model u sredini, sa tankim tamnim ivicama za izgled nalik crtežu.
- Panel {{ui:Datoteka}} s lijeve strane: naziv datoteke, veličina, IFC šema (na primjer IFC2X3 ili IFC4), naziv projekta, faza, program iz kojeg je izvezen, autor, datum izvoza, te brojevi elemenata i trouglova.
- Liste {{ui:Spratovi}} i {{ui:Elementi}} ispod njega.
- Statusna linija: „Otvoreno *naziv datoteke*: *n* elemenata za *s* s“.

## Kretanje

:::mouse
| Za | Uradi ovo |
|---|---|
| Rotiraj | Prevuci lijevim dugmetom |
| Pomjeri pogled | Prevuci desnim dugmetom ili drži {{key:Shift}} (ili {{key:Mod}}) i prevuci lijevim dugmetom |
| Zumiraj | Okreni točkić, ili prevuci srednjim dugmetom |
| Vidi sve | Pritisni {{key:F}} ili klikni {{ui:Uklopi}} |
:::

:::mac mouse
Na trackpadu: prevuci jednim prstom da rotiraš; drži {{key:Shift}} ili {{key:Mod}} i prevuci da pomjeriš pogled; skroluj sa dva prsta ili stisni da zumiraš. Klik sa dva prsta je desni klik, a njime možeš prevlačiti da pomjeriš pogled, ali {{key:Shift}} i prevlačenje je lakše.
:::

:::touch
| Za | Uradi ovo |
|---|---|
| Rotiraj | Prevuci jednim prstom |
| Zumiraj | Stisni sa dva prsta |
| Pomjeri pogled | Pomjeri dva prsta zajedno |
| Vidi sve | Dodirni {{ui:Uklopi}} |
:::

Rotacija se uvijek okreće oko tačke u sredini modela. Pomjeranje pomjera tu tačku, pa nakon dugog pomjeranja rotacija može izgledati van centra: klikni {{ui:Uklopi}} da je vratiš.

## Senčeno, ivice ili žičani model

Tri mala dugmeta tik iznad kocke pogleda biraju kako se model crta: {{ui:Senčeno}}, {{ui:Senčeno s ivicama}} (podrazumijevano) i {{ui:Žičani model}}. Ona su i naredbe (Pogled u menijima i u listi Prilagodi), pa mogu imati svoje tipke. {{ui:Plan}}, {{ui:Podijeli}} i {{ui:3D}} su u redu {{ui:Pogled}} na traci alata.

## Česte greške

- **Očekivanje imenovanih pogleda.** BimCraft ima četiri fiksna pogleda ({{ui:Uklopi}}, {{ui:Gore}}, {{ui:Sprijeda}}, {{ui:Strana}}), kocku pogleda u donjem desnom uglu i slobodnu rotaciju. Ne čuva poglede.
- **Traženje osnova i presjeka.** U ovoj verziji nema 2D osnova ni kutija presjeka. Presijeci model jednom ravninom presjeka ({{ui:Presjek}}, vidi [Presijeci IFC model ravninom presjeka](topic:section-plane)), ili isključi spratove: [Prikaži i sakrij spratove, prostore i ivice](topic:storeys-and-spaces).
- **Otvaranje projektne datoteke i očekivanje 3D.** Projektna datoteka se otvara kao kartica datoteke. Prvo izvezi IFC.
- **Otvaranje `.ifczip`.** Raspakuj je ili izvezi običan `.ifc`.
- **Vrlo velik model usporava karticu ili je ruši.** Vidi [Preglednici, uređaji i memorija](topic:platforms).

## Dalje

[Odaberi element i pročitaj njegova svojstva](topic:inspect-element).
