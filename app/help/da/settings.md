---
title: BimCraft-indstillinger
summary: Vælg om rum og zoner vises, om kanter tegnes, og i hvilken visning en model åbnes, og start med vægfang slået til.
keywords: indstillinger, præferencer, valg, zoner, rum, ifcspace, kanter, linjer, ydeevne, stor model, åbningsvisning, kamera, topvisning, vægfang, fangning
from: 4416e64f
---

Åbn {{ui:Indstillinger}} med tandhjulet i appbjælken eller {{key:Mod+,}}. Den første fane, {{ui:BimCraft}}, indeholder de indstillinger, der hører til denne app; {{ui:Generelt}} indeholder dem, alle CadCraft-apps deler (tema, værktøjslinje, paneler). BimCraft-indstillingerne findes kun i appen: du ændrer dem her, og denne browser husker dem. {{ui:Nulstil BimCraft-indstillinger}} nederst i dialogboksen sætter dem og de fælles tilbage til start.

## Menuer, taster og mus

Menustilen (BimCrafts egen værktøjslinje, en menulinje til boligdesign, et BIM-bånd eller en tegnekommandolinje), dine egne taster og menuer, og hvad hjulet og museknapperne gør. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).

## Når en model åbnes

- **Vis rum og zoner** (slået fra som standard): rum og zoner er gennemsigtige bokse, der kan skjule væggene bag dem, så de starter skjult. {{ui:Zoner}}-knappen over modellen tænder og slukker dem stadig for den åbne model.
- **Kanter**: {{ui:Kanter til}} (standard) tegner kantlinjerne, der giver tegnestilen. {{ui:Kun små modeller}} tegner dem kun for modeller under 300,000 trekanter, hvilket holder store modeller hurtigere at dreje. {{ui:Kanter fra}} starter alle modeller uden dem. {{ui:Kanter}}-knappen skifter dem stadig for den åbne model. Over 1.5 million trekanter er kanter altid slået fra.

## Tegninger åbnes i

Sådan vises en DWG- eller DXF-tegning første gang: {{ui:3D (hurtigst)}} (standard) tegner selv en stor tegning hurtigt, eller {{ui:Model (2D)}} åbner den flade modelrumsvisning. Fanerne over tegningen skifter mellem {{ui:Model}}, arkene og {{ui:3D}} når som helst. En tegning uden noget i modelrummet, eller en browser der ikke kan vise 3D, åbnes altid i 2D.

## Åbningsvisning

Kameraet en model åbnes med: {{ui:Tilpas}} (standard, hele modellen set fra et hjørne), {{ui:Top}}, {{ui:Front}} eller {{ui:Side}}. Knapperne over modellen skifter visningen når som helst.

**En bygning drejet på sin byggegrund**: mange modeller kommer med bygningen i en vinkel i forhold til filens akser (ved opmåling eller fælles koordinater). {{ui:Retvinklet til bygningen}} (standard) viser sådan en bygning retvinklet: {{ui:Tilpas}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, siderne på ViewCube og hvert nyt snit følger dens vægge, og kompasset på ViewCube peger stadig mod modellens nord. {{ui:Som placeret på byggegrunden}} beholder filens akser. En bygning, hvis vægge følger akserne, ser ens ud begge veje.

## Placering af biblioteksemner

**Start med vægfang slået til** (slået fra som standard): når placering eller indsætning af et biblioteksemne starter, fastgøres dets bagside til den nærmeste væg, med forsiden mod rummet. {{key:Tab}} eller {{ui:Vægfang}} i placeringslinjen slår det fra for øjeblikket. En etage uden vægge starter uden det.

## Snitboks

{{ui:Plads om valget}} er den plads, {{ui:Snitboks om valget}} efterlader på alle sider af de valgte elementer, i millimeter: 300 til start, op til 5000. Se [Skær en IFC-model med et snitplan](topic:section-plane).

## Placering

{{ui:Bredde- og længdegrad i}} vælger det system, {{ui:Mål}} › {{ui:Placering}} viser bredde- og længdegrader i: WGS 84 (EPSG:4326, standard, som GPS og webkort bruger), {{ui:Filens eget datum}}, eller et af ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 og CGCS2000. Filens eget kortsystem og datum vises altid også. Se [Mål afstande, fladeområder og placeringer i 3D](topic:measure).

## Hjørneindikator

Det, der står i nederste højre hjørne af 3D-visningerne (en IFC-model, og en tegning skiftet til 3D): {{ui:ViewCube}} (standard), {{ui:Aksesymbol}} (et lille X, Y og Z) eller {{ui:Ingen}}. Skiftet sker med det samme. 2D-tegningsvisningen viser aldrig en.

På ViewCube klikker du på en side, en kant eller et hjørne for at se fra den side, trækker kuben for at kredse, trækker ringen for at dreje rundt, og klikker på huset for startvisningen.

## Dit navn på emner

Når du er logget ind, får emner din kontos navn, og BimCraft spørger ikke efter noget: denne del viser {{ui:Fra din konto (<name>)}}. {{ui:Brug et andet navn}} åbner et felt til et andet navn, som gælder, indtil du vælger {{ui:Brug min kontos navn}}. Når du er logget ud, spørger emneformularen efter et navn som før. Se [Emner og BCF-filer](topic:issues-bcf).

## Assistenter

**Lad AI-assistenter og scripts bruge BimCraft** (slået fra som standard) lader en assistent på din computer nå den åbne model gennem CadCraft Studio: **Læs** finder elementer og læser deres egenskaber, **Skift visning** isolerer, skjuler og viser dem. **Aktivitet** viser dens kald. Se [Lad en AI-assistent arbejde med din model](topic:assistants).

:::note
De andre indstillinger gælder, når en model åbnes, eller når placering starter. En model, der allerede er åben, beholder sit udseende, indtil du bruger værktøjslinjens knapper eller åbner den igen.
:::

## Relateret

- [Kopiér, sæt ind og duplikér biblioteksemner](topic:copy-paste)
- [Placér udstyr og møbler fra biblioteket](topic:place-from-library)
- [BimCraft-skærmen](topic:workspace)
- [Lad en AI-assistent arbejde med din model](topic:assistants)
