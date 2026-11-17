---
title: Arbeidsstil, dupliserte visninger, penner på papir, Rapporter som og maler
summary: Velg hvordan BimCraft oppfører seg for måten du jobber på, dupliser en visning som egen kopi eller koblet, behold pennoverstyringer i filen og skriv ut slik det vises eller gjennom en pennetabell, rapporter et element som en annen IFC-klasse, og start prosjekter fra egne maler.
keywords: arbeidsstil, dupliser visning, dupliser, kopier visning, avhengig visning, koblet visning, egen kopi, visningskopi, pennoverstyring, penner, linjevekt, skriv ut slik det vises, pennetabell, plottstil, ctb, monokrom, gråskala, rapporter som, ifc-klasse, klassifiser på nytt, predefinert type, generisk modell, plate som vei, vegg som panel, tak som rampe, prosjektmal, mal, ny fra mal, lagre som mal, kontorstandard
from: 231d98b0
---

## Hva du gjør

Sett opp BimCraft for måten du jobber på, dupliser visninger, skriv dem ut slik du forventer, tell elementer som det de faktisk er, og start hvert prosjekt fra kontorets mal.

## Velg en arbeidsstil

1. Åpne {{ui:Innstillinger}} og fanen {{ui:BimCraft}}. Finn {{ui:Arbeidsstil}}.
2. Velg én:
   - {{ui:Hver visning for seg}} (det første valget): en duplisert visning kopierer sine merknader, og de forblir den visningens; ark skrives ut slik skjermen viser dem.
   - {{ui:Felles merknader og pennetabeller}}: dupliserte visninger deler merknader; utskrift går gjennom en pennetabell.
3. Under valget står de fire tingene det angir. Endre én av dem alene; stilen viser da {{ui:Egendefinert}}.

Arbeidsstilen lagres i denne nettleseren, på samme måte som arbeidsområdeoppsettet. En mal tar den med til nye modeller.

## Dupliser en visning

1. I {{ui:Prosjektleser}} har hver etasjeplan, himlingsplan, henvisning, fasade og snitt en {{ui:Dupliser}}-knapp (to ark).
2. Gi kopien et navn og velg hvordan den oppfører seg:
   - {{ui:Egen kopi}}: tegnearbeid, mål, beskjæring, skjulte elementer og penner kopieres og forblir dens egne. Redigering av hver av visningene endrer aldri den andre, så en visning på et utstedt ark forblir slik den ble utstedt.
   - {{ui:Koblet}}: den viser samme visning med ett sett merknader og innstillinger.
3. Kopien står under {{ui:Dupliserte visninger}}. Klikk på den for å åpne den; linjen over planen sier at den er en kopi, med {{ui:Opp}} tilbake til sin visning.
4. Knappen med glidebryteren åpner innstillingene: navnet, {{ui:Visningsområde}} (en egen kopi har sitt eget), {{ui:Gjør til egen kopi}} for en koblet kopi, og {{ui:Slett}}.

Kopier av fasader og snitt legges på dine egne ark, som visningene de kom fra. Dupliseringen er ett angre-trinn, og kopiene lagres i IFC-filen ved siden av henvisningene.

## Penner som lagres med visningen, og skrives ut slik de vises

1. Slå på {{ui:Tegn}} og velg {{ui:Penner}}.
2. {{ui:For}} lister nå hver kategori: vegger, dører og vinduer, dekker, tak, søyler, trapper, møbler og resten, samt tegnearbeid og mål.
3. {{ui:Bruk}} lagrer pennen i IFC-filen sammen med visningen som vises: en plan, et himlingsplan, en henvisning eller en duplisert visning. Penner laget før 0.9 ble lagret i nettleseren; {{ui:Behold disse i filen}} flytter dem.
4. Ark og PDF-filen tegner hver penn slik skjermen viser den.

For i stedet å skrive ut gjennom en pennetabell, sett {{ui:Skriv ut}} i raden Penner til {{ui:Gjennom en pennetabell}}, og velg deretter en tabell (farge, monokrom, gråskala) eller {{ui:Rediger pennetabell…}}: hver farge får fargen, linjevekten og rasteringen den skrives ut med. Tabellen er CadCraft sin plottstilfil, så {{ui:Importer…}} tar imot en tabell laget i CadCraft-appen, og {{ui:Eksporter}} gir en tilbake. Modellen beholder valget sitt; uten valg avgjør arbeidsstilen.

## Rapporter et element som en annen klasse

En plate tegnet som vei, en vegg brukt som panel, et tak formet som rampe: behold verktøyet du tegnet det med, og rapporter det som det er.

1. Velg elementet og åpne {{ui:Egenskaper}}. Åpne {{ui:Rapporter som}}.
2. Skriv inn i søkefeltet for å finne en klasse som passer formen, velg den og dens predefinerte type. For en egen type velger du USERDEFINED og gir den et navn.
3. {{ui:Bruk}} (ett angre-trinn). {{ui:Fjern}} rapporterer det igjen slik det ble tegnet.

Du redigerer det fortsatt med verktøyet det ble tegnet med. Den lagrede IFC-filen skriver det som den rapporterte klassen, så andre programmer, mengdeuttaket i {{ui:Mengder}}, Finn, Farge etter, modellkontroller og {{ui:Problemer}} teller det som den. Tabellene tar en vegg rapportert som panel ut av veggtabellen, og {{ui:Elementer etter rapportert klasse}} lister alle. Det fungerer i IFC4- og IFC2X3-filer; listen tilbyr bare klassene som filens IFC-versjon har. Dører, vinduer, trapper, rom og nivåer beholder sin egen klasse.

## Lagre et prosjekt som mal, og start fra det

1. Med et prosjekt åpent, klikk {{ui:Lagre som mal}} ved siden av {{ui:Lagre}}.
2. Gi den et navn. Kryss av for {{ui:Last også ned malfilen}} for å dele den som en IFC-fil, og {{ui:Start nye modeller fra den}} for å gjøre den til standard.
3. En mal beholder nivåene, visningsmalene og visningsinnstillingene, dupliserte visninger og henvisninger, tegnearbeid, penner og pennetabellen, etiketter, familier og typer, ark, arkstørrelser, tegningshoder og arbeidsstilen. Vegger, dekker, dører og alle andre modellelementer utelates.
4. Klikk {{ui:Ny bygning}} og velg den under {{ui:Start fra}}, eller velg {{ui:En malfil…}} for en du har fått tilsendt. Det nye prosjektet får sitt eget navn og sin egen prosjektidentitet; alt annet er slik malen har det.

:::note
Maler lagres i denne nettleseren. Maler for team, delt via CadCraft Studio, er ikke bygget ennå: send malfilen i stedet.
:::
