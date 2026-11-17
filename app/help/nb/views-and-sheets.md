---
title: Visninger, visningsintervaller og egne ark
summary: Finn hver plan, fasade, snitt, 3D-visning, tabell og ark i prosjektleseren, velg hvordan hver plan er kuttet og hva den viser, lag utsnitt, tegn linjer og skraveringer i én visning, behold innstillinger i visningsmaler, og ordne egne ark.
keywords: utsnitt, utsnittsvisning, detaljvisning, forstørret plan, tegning, detaljlinjer, tegnelinjer, skravering, skraveringsområde, fylt område, fyllmønster, himlingsplan, rcp, himlingsrutenett, lysarmaturer, prosjektleser, visninger, visningsintervall, beskjæring, beskjæringsområde, beskjæringsvisning, visningsskala, underlag, vis en annen etasje, halvtone, snittplan, snitthøyde, topp, bunn, visningsdybde, synlighet, kategorier, skjul i visning, visningsmal, maler, ark, tegningshode, visningsområde, skala, ordne ark, layout, pdf, plan visningsinnstillinger, leser
from: ee1d5afe
---

## Det du skal gjøre

Arbeid på samme måte som BIM-prosjekter er organisert: hver visning i én liste, hver plan kuttet der du vil, de samme innstillingene for flere planer gjennom en mal, og ark du ordner selv.

## Prosjektleseren

1. Slå på {{ui:Tegn}}. Venstre panel har en {{ui:Prosjektleser}} under modellene.
2. Den lister:
   - **Etasjeplaner**: hver etasje. Klikk én for å se planen. Glidebryterknappen ved siden av setter visningsintervallet (under). En plan som følger en mal viser malens navn.
   - **Himlingsplaner**: hver etasjes reflekterte himlingsplan (under).
   - **Utsnitt**: hvert utsnitt med visningen det tegnes på, og {{ui:Nytt utsnitt}}. **Mangler** lister utsnitt der visningen er borte.
   - **Fasader** og **Snitt**: de fire sidene og hver snittlinje. Klikk én for å åpne tegningssettet de tegnes i.
   - **3D-visninger**: visningene du lagret med {{ui:Visninger}}.
   - **Tabeller**: klikk én for å vise den under planen.
   - **Ark**: arkene du laget, {{ui:Nytt ark}}, og {{ui:Tegningssett…}} for hele settet laget fra modellen.
   - **Visningsmaler**, med {{ui:Ny mal}}, og **Lenker** (de koblede modellene).

## Sett en plans visningsintervall

1. Klikk glidebryterknappen ved siden av en etasje i **Etasjeplaner**.
2. Sett høydene, over den etasjen:
   - **Kutt ved**: der planen kutter gjennom vegger, dører og vinduer (1200 mm, omtrent 4 ft, med mindre du endrer det).
   - **Topp**: ting over kuttet og under toppen tegnes stiplet (et høyt skap, en bjelke). La den stå tom for etasjens høyde.
   - **Bunn** og **Dybde under bunnen**: ting lavere enn kuttet tegnes med tynne linjer ned til bunnen, og så langt under den.
3. Under **Vist i denne planen**, fjern det planen utelater: møbler, rom, søyler og så videre.
4. For å utelate enkeltelementer: velg dem i planen eller 3D-visningen, åpne dialogen og klikk {{ui:Skjul de valgte her}}. {{ui:Vis alle}} henter dem tilbake.
5. Klikk {{ui:Bruk disse innstillingene}}.

Planen kuttes på nytt med én gang, og tegningssettet og arkene dine følger den. Et punktskys utsnitt følger også kutthøyden.

## Beskjær en plan, gi den en skala, vis en annen etasje under den

Alle tre er i samme dialog (glidebryterknappen ved siden av en etasje):

- **Skala**: skalaen planen skrives ut i ({{ui:Skriv ut}} på planens linje) og havner på et ark i. {{ui:Tilpass}} velger den største standardskalaen som passer.
- **Beskjæringsområde**: klikk {{ui:Tegn på planen…}}, klikk så ett hjørne og det motsatte hjørnet på planen ({{key:Esc}} stopper). Planen utenfor området blir tilslørt på skjermen, og du kan fortsatt arbeide der. Utskrevet, på ark og i tegningssettet viser planen bare det som er innenfor. {{ui:Fjern}} fjerner beskjæringen. {{ui:Tilpass}} tilpasser til beskjæringen.
- **Underlag**: velg en annen etasje. Veggene, kuttede elementene, dører og vinduer der tegnes lyst under denne planen, for å få ting på linje med etasjen under eller over. Du kan ikke velge dem her, og de skrives ut i lys grå.

En visningsmal tar med seg skalaen sammen med høydene og kategoriene. Beskjæringsområdet og underlaget tilhører alltid den ene planen.

## En etasjes himlingsplan

Hver etasje har en reflektert himlingsplan ved siden av sin etasjeplan: planen sett fra under, for å legge opp himlinger og det som henger fra dem.

1. Klikk etasjen under **Himlingsplaner** i leseren, eller velg {{ui:Himlingsplan}} ved siden av etasjen på planens linje.
2. Veggene kuttes ved 2300 mm (omtrent 7'-6"). Det som ligger over det kuttet og under etasjens høyde tegnes: himlinger med rutenettet og en høydemerking (`CLG 2438`), lys, bjelker. Dører, vinduer og det som ligger under kuttet utelates.
3. For å lage en himling, bruk {{ui:Himling}} som på etasjeplanen, velg den og velg **Mønster** under {{ui:Egenskaper}}. Se [Rom, gulv, himlinger og tak](topic:floors-and-roofs).
4. For å henge et lys fra den, plasser elementet fra biblioteket mens himlingsplanen vises: det havner under **Ved himlingen**. Se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library).
5. Glidebryterknappen ved siden av en himlingsplan setter kutt og topp, skala, kategorier, beskjæringsområde og underlag, som for en etasjeplan. Himlingsplaner tar ingen visningsmal.

Den tegnes på samme måte som etasjeplanen (en reflektert plan, ikke et speilbilde). En himling som ligger lavere enn kuttet tegnes ikke: senk kuttet for den etasjens himlingsplan. Himlingsplaner havner på dine egne ark som planer; tegningssettet legger ikke til dem av seg selv.

## Lag et utsnitt

Et utsnitt viser en del av en plan større, i sin egen skala, som en egen visning: et kjøkken, en trapp, et veggjørne.

1. Vis planen, himlingsplanen eller utsnittet det hører til.
2. Velg {{ui:Merknad}} › {{ui:Utsnitt}} på planens linje (eller {{ui:Nytt utsnitt}} i leseren), klikk så ett hjørne av området og det motsatte hjørnet. {{key:Esc}} stopper.
3. Utsnittet lages i 1:20 (1/2" = 1'-0" i fot og tommer). Rektangelet og en rund merkelapp tegnes på planen.
4. Klikk merkelappen med {{ui:Velg}}, eller utsnittet i leseren, for å åpne det: planen viser bare det området, i utsnittets skala. Linjen sier {{ui:Utsnitt:}} og navnet. {{ui:Opp}} går tilbake til visningen det tegnes på.
5. Glidebryterknappen ved siden av det (i leseren eller på linjen) gir det nytt navn, endrer skalaen, tegner rektangelet på nytt eller sletter det.

Et utsnitt viser det visningen viser: samme kutt, samme kategorier, en himlingsplans himlinger. Et utsnitt av et utsnitt fungerer på samme måte. Sett et utsnitt på et ark som en plan; merkelappen sier da hvor det er (`1 / A-501`: den første visningen på ark A-501). {{ui:Skriv ut}} i et utsnitt skriver bare ut det området i sin skala.

Å slette et utsnitt sletter også utsnittene som er tegnet inni det, og linjene og skraveringene tegnet i dem (du blir spurt først). Hvis etasjen et utsnitt tegnes på slettes, blir utsnittet liggende under **Mangler** til du sletter det, og arkene det står på melder at det mangler.

## Tegn linjer og skraveringer i én visning

Tegning er 2D-arbeid som hører til bare én visning: merknader i linjer, et skravert område av betong eller jord, et fylt område. Det er aldri i 3D-visningen og aldri i en annen plan.

1. Vis etasjeplanen, himlingsplanen eller utsnittet du skal tegne i.
2. Velg fra {{ui:Merknad}} på planens linje:
   - {{ui:Linje}}: klikk der den starter og der den slutter. Neste linje starter der den forrige sluttet; {{key:Enter}} starter på nytt.
   - {{ui:Polylinje}}: klikk punktene sine; {{key:Enter}} eller et dobbeltklikk avslutter den, et klikk på første punkt lukker den.
   - {{ui:Rektangel}}: to motsatte hjørner.
   - {{ui:Skravurområde}}: velg **Mønster** (Heldekkende, Diagonal, Krysskravur, Betong, Isolasjon, Jord) og skalaen på linjen, klikk så hjørnene. {{key:Enter}}, et dobbeltklikk eller et klikk på første hjørne lukker den. Med {{ui:Fyll et rom}} avkrysset skraverer ett klikk i et rom omrisset.
3. Punkter fester seg som vegger gjør. {{key:Shift}} holder en linje rett, og du kan skrive inn en lengde som for vegger. {{key:Backspace}} tar tilbake det siste punktet.

Velg en linje eller en skravering med {{ui:Velg}} på planen. **{{ui:Egenskaper}}** endrer en skraverings mønster og skala, og har {{ui:Flytt…}} (klikk punktet å flytte fra, og så hvor det skal). {{key:Delete}} sletter den. Hver linje, skravering og endring er ett steg.

Linjer og skraveringer skrives ut med planen, følger den ut på arkene og er med i tegningssettet. Fjern haken for **Merknader** i et visningsintervall for å utelate dem fra den visningen.

## Behold innstillingene i en visningsmal

1. Klikk {{ui:Ny mal}} i leseren, eller {{ui:Lagre som mal…}} i en plans visningsintervall (den planen bruker den så).
2. Gi den et navn, sett høydene og kategoriene, og klikk {{ui:Lagre malen}}.
3. I et hvilket som helst plans visningsintervall velger du malen. Planen tar høydene og kategoriene; endrer du malen, endres hver plan som bruker den. Elementer du skjulte enkeltvis, forblir skjult i sin egen plan.
4. Klikk en mal i leseren for å endre, gi nytt navn eller slette den. Å slette en mal lar planene den var brukt på, beholde innstillingene sine som sine egne.

## Ordne et eget ark

1. Klikk {{ui:Nytt ark}}. Skriv inn nummeret og tittelen, og velg papiret.
2. Klikk {{ui:Legg til}} ved siden av en plan, himlingsplan, utsnitt, fasade, snitt eller tabell. Den havner midt på arket.
3. Dra den dit den skal. Med den valgt, velg en **Skala**, eller la den stå på planens egen skala (når planen har en), ellers skalaen som passer en tredjedel av arket. {{ui:Ta av arket}} fjerner den.
4. Klikk {{ui:Lagre arket}}. Det listes under **Ark**; klikk det for å endre det senere.
5. {{ui:Last ned som PDF}} lagrer det arket som én side.

## Hva du bør se

- Planer kuttet ved dine høyder, med det over kuttet stiplet og det du fjernet utelatt.
- En beskåret plan tilslørt utenfor området på skjermen og kuttet til det på papiret, i skalaen du ga den.
- En himlingsplan med himlingenes rutenett og høydemerkene, og lysene i himlingen.
- Utsnitt med rektangel og merkelapp på planen, hver åpnet i sin egen skala.
- Linjer og skraveringer bare i visningen du tegnet dem i.
- Arkene dine tegnes på nytt fra modellen hver gang du åpner dem, så de alltid samsvarer med den. En visning hvis etasje eller snittlinje er slettet, rapporteres i stedet for å bli tegnet.
- Hver endring her er ett steg: {{key:Mod+Z}} tar den tilbake.

:::note
Alt dette lagres i IFC-filen som egenskapssett som andre programmer lar være i fred: hver etasjes visningsintervall og himlingsplan på etasjen, malene, utsnittene og arkene dine på prosjektet. Linjer og skraveringer er IFC-merknader i sin etasje, så andre programmer ser dem som 2D-kurver og skraverte områder (sin egen tegning av hvert mønster), men ikke hvilken visning de hører til.
:::

:::tip
Andre BIM-programmer kaller kuttet et visningsintervall eller snittplan, malene visningsmaler eller visningsinnstillinger, tegnelinjer detaljlinjer, og skraveringsområder fylte områder. Ideene er de samme; visningsinnstillingene følger ikke med til dem.
:::
