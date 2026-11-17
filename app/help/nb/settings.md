---
title: BimCraft-innstillinger
summary: Velg om rom og spaces vises, om kanter tegnes og hvilken visning en modell åpnes i, og start plassering med veggfang på.
keywords: innstillinger, preferanser, alternativer, rom, spaces, ifcspace, kanter, linjer, ytelse, stor modell, åpningsvisning, kamera, toppvisning, veggfang, fangning
from: 4416e64f
---

Åpne {{ui:Innstillinger}} med tannhjulet i programlinjen eller med {{key:Mod+,}}. Den første fanen, {{ui:BimCraft}}, har innstillingene som hører til denne appen. {{ui:Generelt}} har innstillingene alle CadCraft-appene deler (tema, verktøylinje, paneler). BimCraft-innstillingene finnes bare i appen: du endrer dem her, og denne nettleseren husker dem. {{ui:Tilbakestill BimCraft-innstillinger}} nederst i dialogen setter dem, og de delte, tilbake til standard.

## Menyer, taster og mus

Menystilen (BimCraft sin egen verktøylinje, en menylinje for boligdesign, et BIM-bånd eller en kommandolinje for tegning), egne taster og menyer, og hva hjulet og musknappene gjør. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).

## Når en modell åpnes

- **Vis rom og spaces** (av som standard): rom og spaces er gjennomsiktige bokser som kan skjule veggene bak dem, så de starter skjult. {{ui:Rom}}-knappen over modellen slår dem fortsatt av og på for den åpne modellen.
- **Kanter**: {{ui:Kanter på}} (standard) tegner kantlinjene som gir tegneutseendet. {{ui:Bare små modeller}} tegner dem bare for modeller under 300 000 trekanter, noe som holder store modeller raskere å snu på. {{ui:Kanter av}} starter alle modeller uten dem. {{ui:Kanter}}-knappen bytter fortsatt dem for den åpne modellen. Over 1,5 millioner trekanter er kanter alltid av.

## Tegninger åpnes i

Slik vises en DWG- eller DXF-tegning først: {{ui:3D (raskest)}} (standard) tegner selv en stor tegning raskt, eller {{ui:Modell (2D)}} åpner den flate modellrom-visningen. Fanene over tegningen bytter når som helst mellom {{ui:Modell}}, arkene og {{ui:3D}}. En tegning uten noe i modellrom, eller en nettleser som ikke kan vise 3D, åpnes alltid i 2D.

## Åpningsvisning

Kameraet en modell åpnes med: {{ui:Tilpass}} (standard, hele modellen fra et hjørne), {{ui:Topp}}, {{ui:Front}} eller {{ui:Side}}. Knappene over modellen endrer visningen når som helst.

**En bygning som er vridd på tomten**: mange modeller kommer med bygningen i en vinkel mot filens akser (ved oppmålte eller felles koordinater). {{ui:Rettvinklet mot bygningen}} (standard) viser slike bygninger rettvinklet: {{ui:Tilpass}}, {{ui:Topp}}, {{ui:Front}}, {{ui:Side}}, flatene på ViewCube og hvert nytt snitt følger veggene, og ViewCube-kompasset peker fortsatt mot modellens nord. {{ui:Som plassert på tomten}} beholder filens akser. En bygning der veggene følger aksene, ser likt ut begge veier.

## Plassere bibliotekselementer

**Start med veggfang på** (av som standard): når plassering eller innliming av et bibliotekselement starter, festes baksiden til nærmeste vegg, med forsiden mot rommet. {{key:Tab}} eller {{ui:Veggfang}} i plasseringslinjen slår det av for øyeblikket. En etasje uten vegger starter uten det.

## Snittboks

{{ui:Klaring rundt utvalget}} er hvor mye plass {{ui:Snittboks rundt utvalget}} lar være på hver side av de valgte elementene, i millimeter: 300 som standard, opptil 5000. Se [Kutt en IFC-modell med et snittplan](topic:section-plane).

## Posisjon

{{ui:Breddegrad og lengdegrad i}} velger systemet {{ui:Mål}} › {{ui:Posisjon}} gir breddegrader og lengdegrader i: WGS 84 (EPSG:4326, standard, slik GPS og nettkart bruker), {{ui:Filens eget datum}}, eller ett av ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 og CGCS2000. Filens eget kartsystem og datum vises alltid også. Se [Mål avstander, flateareal og posisjoner i 3D](topic:measure).

## Hjørneindikator

Det som står nederst til høyre i 3D-visningene (en IFC-modell, og en tegning slått over til 3D): {{ui:ViewCube}} (standard), {{ui:Aksesymbol}} (en liten X, Y og Z) eller {{ui:Ingen}}. Endringen skjer med en gang. 2D-visningen viser aldri noen.

På ViewCube klikker du på en flate, en kant eller et hjørne for å se fra den siden, drar kuben for å kretse rundt, drar ringen for å snu, og klikker på huset for startvisningen.

## Navnet ditt på saker

Når du er logget inn, får saker kontonavnet ditt, og BimCraft ber ikke om noe. Denne delen viser {{ui:Fra kontoen din (<name>)}}. {{ui:Bruk et annet navn}} åpner en boks for et annet navn, som gjelder til du velger {{ui:Bruk kontonavnet mitt}}. Når du er logget ut, ber saksskjemaet om et navn som før. Se [Saker og BCF-filer](topic:issues-bcf).

## Assistenter

**La KI-assistenter og skript bruke BimCraft** (av som standard) lar en assistent på datamaskinen din nå den åpne modellen gjennom CadCraft Studio: **Les** finner elementer og leser egenskapene deres, **Endre visningen** isolerer, skjuler og viser dem. **Aktivitet** lister kallene. Se [La en KI-assistent jobbe med modellen din](topic:assistants).

:::note
De andre innstillingene gjelder når en modell åpnes eller plassering starter. En modell som allerede er åpen, beholder utseendet sitt til du bruker verktøylinjeknappene eller åpner den på nytt.
:::

## Relatert

- [Kopier, lim inn og dupliser bibliotekselementer](topic:copy-paste)
- [Plasser utstyr og møbler fra biblioteket](topic:place-from-library)
- [BimCraft-skjermen](topic:workspace)
- [La en KI-assistent jobbe med modellen din](topic:assistants)
