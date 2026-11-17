---
title: Otvorite IFC model i pogledajte ga u 3D
summary: Otvorite IFC datoteku, orbitirajte, pomičite i zumirajte te koristite Prilagodi, Gore, Naprijed i Bočno da se snađete.
keywords: ifc, 3d, orbitiranje, pomicanje, zumiranje, prilagodi, pogled odozgo, pogled sprijeda, pogled sa strane, navigacija, viewcube, kamera
from: 68b460dd
---

## Što ćete učiniti

Otvorite IFC model, krećite se po njemu u 3D i prijeđite na standardne poglede. Oko pet minuta.

Trebate `.ifc` datoteku. Većina BIM programa izvozi jednu; u Revitu je to **File > Export > IFC**. Vidi [Uvođenje projektne datoteke u 3D putem IFC-a](topic:rvt-to-ifc).

## Koraci

1. Kliknite {{ui:Choose a file}} (ili područje za ispuštanje gore lijevo).
2. Odaberite svoju `.ifc` datoteku i potvrdite.
3. Pričekajte da statusna traka završi. Prvi put prikazuje „Pokretanje IFC motora…“, zatim „Čitanje modela…“ i „Izgradnja geometrije: … od … elemenata“.
4. Pogledajte model: otvara se u pogledu u tri četvrtine, prilagođen zaslonu.
5. Kliknite {{ui:Top}} na traci iznad modela da pogledate ravno dolje.
6. Kliknite {{ui:Front}} da pogledate sprijeda, zatim {{ui:Side}} da pogledate sa strane.
7. Kliknite {{ui:Fit}} ili pritisnite {{key:F}} da se vratite na pogled u tri četvrtine cijelog modela.

## Što biste trebali vidjeti

- Model u sredini, s tankim tamnim bridovima za izgled nalik crtežu.
- Panel {{ui:File}} lijevo: naziv datoteke, veličina, IFC shema (na primjer IFC2X3 ili IFC4), naziv projekta, faza, program iz kojeg je izvezen, autor, datum izvoza te brojevi elemenata i trokuta.
- Popisi {{ui:Storeys}} i {{ui:Elements}} ispod njega.
- Statusna traka: „Otvoreno *naziv datoteke*: *n* elemenata za *s* s“.

## Kretanje

:::mouse
| Za | Učinite ovo |
|---|---|
| Orbitiranje | Povucite lijevom tipkom miša |
| Pomicanje | Povucite desnom tipkom ili držite {{key:Shift}} (ili {{key:Mod}}) i povucite lijevom tipkom |
| Zumiranje | Pomaknite kotačić ili povucite srednjom tipkom |
| Vidi sve | Pritisnite {{key:F}} ili kliknite {{ui:Fit}} |
:::

:::mac mouse
Na trackpadu: povucite jednim prstom dok je pritisnut za orbitiranje; držite {{key:Shift}} ili {{key:Mod}} i povucite za pomicanje; pomaknite dvama prstima ili stisnite za zumiranje. Klik dvama prstima je desni klik, i njime možete povući za pomicanje, ali {{key:Shift}} i povlačenje je lakše.
:::

:::touch
| Za | Učinite ovo |
|---|---|
| Orbitiranje | Povucite jednim prstom |
| Zumiranje | Stisnite dvama prstima |
| Pomicanje | Pomaknite dva prsta zajedno |
| Vidi sve | Dodirnite {{ui:Fit}} |
:::

Orbitiranje se uvijek okreće oko točke u sredini modela. Pomicanje pomiče tu točku, pa nakon dugog pomicanja orbitiranje može biti pomaknuto od središta: kliknite {{ui:Fit}} da ga resetirate.

## Sjenčano, s bridovima ili žičani model

Tri mala gumba iznad kocke pogleda biraju kako se model crta: {{ui:Shaded}}, {{ui:Shaded with edges}} (zadano) i {{ui:Wireframe}}. Oni su i naredbe (Pogled u izbornicima i na popisu za prilagodbu), pa mogu imati vlastite tipke. {{ui:Plan}}, {{ui:Split}} i {{ui:3D}} su u retku {{ui:View}} trake alata.

## Česte pogreške

- **Očekivanje imenovanih pogleda.** BimCraft ima četiri fiksna pogleda ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), kocku pogleda u donjem desnom kutu i slobodno orbitiranje. Ne sprema poglede.
- **Traženje tlocrta i presjeka.** U ovoj verziji nema 2D tlocrta ni kutija presjeka. Presijecite model jednom ravninom {{ui:Section}} ([Presijecanje IFC modela ravninom presjeka](topic:section-plane)) ili isključite etaže: [Prikaz i skrivanje etaža, prostora i bridova](topic:storeys-and-spaces).
- **Otvaranje projektne datoteke i očekivanje 3D.** Projektna datoteka otvara se kao kartica datoteke. Prvo izvezite IFC.
- **Otvaranje `.ifczip`.** Raspakirajte ga ili izvezite običan `.ifc`.
- **Vrlo velik model usporava karticu ili je ruši.** Vidi [Preglednici, uređaji i memorija](topic:platforms).

## Dalje

[Odaberite element i pročitajte njegova svojstva](topic:inspect-element).
