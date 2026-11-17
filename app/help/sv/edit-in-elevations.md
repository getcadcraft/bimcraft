---
title: Redigera i fasader och sektioner, bladstorlekar, ritningshuvuden och namnbyte
summary: Flytta väggar, dörrar, fönster och nivåer samt rita väggar, öppningar, nivåer, mått och anteckningar direkt i en fasad eller en sektion, behåll dina egna bladstorlekar och ritningshuvuden som data, och byt namn på familjer, storlekar och element i projektbläddraren.
keywords: ny nivå i fasad, mått i fasad, redigera i fasad, redigera i sektion, fasadvy, sektionsvy, flytta vägg i fasad, fönsterbräda, nivåhöjd, dra nivå, rita vägg i sektion, anteckningar på fasad, annotering, bladstorlek, egen bladstorlek, pappersstorlek, ritningshuvud, mall för ritningshuvud, bladformat, ram, fält, kund, ritad av, revision, byt namn familj, byt namn typ, byt namn element, projektbläddrare
from: 8726cf83
---

## Vad du ska göra

Ändra byggnaden där du ser den från sidan, ställ in de blad ditt kontor använder, och ge familjer, storlekar och element de namn du vill ha.

## Redigera i en fasad eller en sektion

1. Slå på {{ui:Rita}}. I {{ui:Projektbläddrare}} öppnar du {{ui:Fasader}} eller {{ui:Sektioner}}.
2. Klicka på pennknappen {{ui:Redigera i den här vyn}} på en rad. Vyn öppnas som bladen ritar den, med det du kan ändra ovanpå.
3. Med {{ui:Markera och flytta}}:
   - dra en vägg som vetter mot vyn längs den;
   - dra en dörr eller ett fönster längs dess vägg, och ett fönster upp eller ned för att ändra dess fönsterbräda;
   - dra en nivålinje upp eller ned för att ändra nivåns höjd;
   - dra en anteckning.
4. {{ui:Dörr}} och {{ui:Fönster}}: klicka på en vägg där de ska placeras (ett fönster på den höjd du klickar).
5. {{ui:Vägg}} (sektioner): klicka där den börjar och där den slutar på sektionens plan; den ritas på nivån under ditt första klick, upp till nästa nivå.
6. {{ui:Anteckning}}: klicka och skriv. Anteckningar sparas i filen och ritas på varje blad som visar vyn.
7. {{ui:Nivå}}: klicka på den höjd där en ny nivå ska ligga. Den är lika hög som avståndet till nivån ovanför (3000 mm högst upp); dra dess linje för att ändra den. En andra nivå inom 50 mm från en annan nivå nekas.
8. {{ui:Mått}}: klicka där det börjar och där det slutar. Klickarna fångar kanter på väggar, dörrar, fönster och nivåer, och måttet är horisontellt eller vertikalt, beroende på vilket håll du flyttar. Det sparas i filen och ritas, med sin längd, på varje blad som visar vyn. Klicka på det med {{ui:Markera och flytta}} för att plocka det.
9. {{ui:Ta bort}} eller Delete-tangenten tar bort den plockade väggen, dörren, fönstret, måttet eller anteckningen. Ctrl+Z ångrar den senaste ändringen medan panelen är öppen. Esc går tillbaka till {{ui:Markera och flytta}}.

Varje ändring är samma ändring som planen gör, ett ångrasteg: planen, 3D-vyn och bladen följer med.

## Bladstorlekar och ritningshuvuden

1. Öppna ett blad ({{ui:Nytt blad}}, eller ett av dina egna under {{ui:Blad}}). Bredvid {{ui:Papper}} finns {{ui:Ritningshuvud}} och {{ui:Format…}}.
2. {{ui:Papper}} listar varje standardstorlek (Letter till Arch E, A4 till A0) och dina egna.
3. {{ui:Ritningshuvud}}: {{ui:Remsa (nederst)}}, {{ui:Kolumn (höger)}} med de vanliga fälten, eller ditt eget. Fälten för den du väljer visas under bladets namn: skriv in kunden, vem som ritade, revisionen.
4. {{ui:Format…}} skapar dina egna: en bladstorlek (namn, bredd, höjd, ram) och ett ritningshuvud (var det placeras, dess bredd, dess fält, ett per rad; avsluta ett fält med * för att göra det stort).
5. {{ui:Exportera}} sparar dem som en biblioteksfil och {{ui:Importera…}} lägger till en i en annan modell. De sparas i modellen, så en mall bär med sig dem.

## Byt namn på familjer, storlekar och element

1. Öppna {{ui:Familjer}} i {{ui:Projektbläddrare}}.
2. Pennan bredvid en familj byter namn på den; varje storlekstyp tar det nya namnet.
3. Öppna en familjs storlekar för att byta namn på en storlek, eller på ett element placerat från den (upp till 40 per storlek listas).

Varje namnbyte är ett ångrasteg.
