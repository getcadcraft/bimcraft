---
title: Den elektriske plan
summary: Placér stikkontakter, afbrydere, lamper, sensorer, forgreningsdåser og tavler på planen med de samme symboler som CadCraft's El-add-on, forbind afbrydere til de lamper de tænder, og list enheder og grupper i listerne.
keywords: el, elektrisk plan, stikkontakt, stikdåse, dobbelt stik, afbryder, tovejs, dæmper, lampe, loftlampe, indbygningslampe, downlight, bevægelsessensor, forgreningsdåse, tavle, fordelingstavle, gruppe, belastning, watt, ampere, afbryderledning, enhedsliste, tavleliste
from: f7de1947
---

## Hvad du gør

Tegn husets elektriske plan i modellen: stikkontakter, afbrydere og tavler på væggene, lamper og sensorer i loftet. Hver enhed er et rigtigt elektrisk element i IFC-filen, med sin mærkning, gruppe og belastning, og afbrydere husker de lamper de tænder.

## Placér enheder

1. På en etage åbner du {{ui:Build}} og vælger {{ui:Electrical}}.
2. Vælg enheden: stikkontakter (strøm, data, telefon, lyd-billede), afbrydere og sensorer (en termostat og en timer også), lamper, detektorer og alarmer, en forgreningsdåse, en tavle eller en underordnet tavle.
3. Skriv en **Gruppe**, hvis du kender den (et vilkårligt navn: 1, 2, A-3). Lad **Monteringshøjde** stå tom for enhedens sædvanlige højde.
4. Klik på planen. Stikkontakter, afbrydere og tavler placeres på fladen af den nærmeste væg, vendt ind i rummet. Lamper, sensorer og forgreningsdåser placeres i loftet, hvor du klikker.

Enheder mærkes, mens du placerer dem: **R** for stikkontakter, **S** for afbrydere, **L** for lamper, **M** for bevægelsessensorer, **J** for forgreningsdåser og **P** for tavler. Enheder på en væg flytter sig med væggen, når du flytter væggen.

Foretrækker du at finde en enhed ud fra et billede? Åbn **Symbolpaletten** fra {{ui:Build}} for at finde en enhed efter navn, markér dem du bruger med en stjerne, og placér den med ét klik: se [Symbolpaletten](topic:symbol-palette).

## Forbind afbrydere til lamper

1. Vælg en afbryder (eller en bevægelsessensor), og klik på **Forbind lamper** i **Egenskaber**.
2. Klik på hver lampe den tænder. Klik på en forbundet lampe igen for at fjerne forbindelsen.
3. Tryk {{key:Enter}} eller klik på **Færdig**.

Planen tegner en stiplet kurve fra afbryderen til hver af dens lamper. **Egenskaber** for en lampe viser, hvilke afbrydere der tænder den.

## Rummet en enhed står i

Hver enhed kender det rum den står i. En enhed på en væg står i det rum den vender mod; en loftsenhed står i det rum den er over. **Egenskaber** viser **Rum**, og listen **Elektriske enheder** har en kolonne **Rum** (nummer og navn, fx 101 Køkken).

Den holdes opdateret: omdøb eller nummerér rummet om, flyt enheden, eller flyt en væg, og rummet følger med i samme trin. En enhed på den udvendige side af en bygning, eller i et område der ikke er et rum, angiver at den ikke står i et rum.

Rummet skrives også ind i filen, i enhedens egenskabssæt `CadCraft_Location` (Room, RoomNumber, RoomName), så Søg, Farve efter egenskab og en mærkningsliste kan bruge det, og det kan andre programmer også. Planymboler og elementer koblet til et symbol får det samme sæt; se [Symbolpaletten](topic:symbol-palette).

## Lad din assistent placere dem

Med en assistent tilsluttet (Indstillinger › Assistenter, med redigering tilladt) kan du bede om enheder med ord: »placér en dobbelt stikkontakt hver 2 m langs stuens vægge, 300 mm op, på gruppe 3«, eller »tilføj en loftlampe med dens afbryder ved døren«. Assistenten bruger fem værktøjer: `devices_add`, `device_change`, `lights_set`, `devices_delete` og `devices_list`. De laver de samme enheder som El-værktøjet, på de samme vægge og med de samme mærkninger, grupper, belastninger og højder, og hvert kald er ét trin i fortryd.

En enhed får aldrig en type som El-værktøjet ikke har: en ukendt type afvises, og assistenten får listen. En stikkontakt eller afbryder skal stå inden for 600 mm fra en vægflade, ligesom et klik. Ellers afvises kaldet, og intet placeres. Standardhøjder er i millimeter: 300 for stikkontakter og 1100 for afbrydere. En loftsenhed hænger fra loftet.

## Ændr og list dem

Vælg en enhed for at ændre dens mærkning, gruppe, belastning (watt) og monteringshøjde. Vælg flere for at lægge dem alle på samme gruppe på én gang. Tryk {{key:Delete}} for at fjerne én; en slettet lampe fjernes fra sine afbrydere.

Under {{ui:Schedules}} vælger du **Elektriske enheder** for hver enhed med dens etage, gruppe, belastning, højde og de lamper hver afbryder tænder, eller **Grupper** for hver grupps enheder, samlede belastning og strøm. Begge findes også på tegningssættets listeark: se [Facader, snit og ark](topic:sheets).

:::note
Monteringshøjder og belastninger er planlægningsstandarder (en stikkontakt 16" op og 200 W, en afbryder i 48", en loftlampe 60 W), ikke et design. Elektrikeren eller ingeniøren dimensionerer grupperne og kontrollerer forskrifterne.
:::

:::tip
Symbolerne er dem CadCraft's El-add-on tegner på installationsplaner, så en plan fra begge apps læses ens.
:::
