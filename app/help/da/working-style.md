---
title: Arbejdsstil, duplikerede visninger, penne på papir, Rapportér som og skabeloner
summary: Vælg, hvordan BimCraft opfører sig, til den måde du arbejder på, dupliker en visning som en egen kopi eller koblet, behold pen-overskrivninger i filen og udskriv som vist eller gennem en pennetabel, rapportér et element som en anden IFC-klasse, og start projekter fra dine egne skabeloner.
keywords: arbejdsstil, dupliker visning, duplikér, kopiér visning, afhængig visning, koblet visning, egen kopi, visningskopi, pen-overskrivninger, penne, linjetykkelser, udskriv som vist, pennetabel, plotstil, ctb, monokrom, gråskala, rapportér som, ifc-klasse, omklassificér, foruddefineret type, generisk model, plade som vej, væg som panel, tag som rampe, projektskabelon, skabelon, ny fra skabelon, gem som skabelon, kontorstandard
from: 231d98b0
---

## Hvad du gør

Indstil BimCraft til den måde, du arbejder på, dupliker visninger, udskriv dem, som du forventer, tæl elementer som det, de virkelig er, og start hvert projekt fra din kontors skabelon.

## Vælg en arbejdsstil

1. Åbn {{ui:Indstillinger}} og fanen {{ui:BimCraft}}. Find {{ui:Arbejdsstil}}.
2. Vælg én:
   - {{ui:Hver visning sin egen}} (det første valg): en duplikeret visning kopierer sine noteringer, og de bliver ved den visning; ark udskrives, som skærmen viser dem.
   - {{ui:Fælles noteringer og pennetabeller}}: duplikerede visninger deler noteringer; udskrivning går gennem en pennetabel.
3. Under valget står de fire ting, det indstiller. Ændr én af dem alene; stilen står derefter som {{ui:Tilpasset}}.

Arbejdsstilen gemmes i denne browser, ligesom arbejdsområdets layout. En skabelon overfører den til nye modeller.

## Dupliker en visning

1. I {{ui:Projektbrowser}} har hver etageplan, loftplan, henvisning, facade og snit en {{ui:Duplikér}}-knap (to ark).
2. Navngiv kopien, og vælg hvordan den opfører sig:
   - {{ui:Egen kopi}}: dens tegning, målsætninger, udsnit, skjulte elementer og penne kopieres og forbliver dens egne. Redigering af en af visningerne ændrer aldrig den anden, så en visning på et udsendt ark forbliver, som den blev udsendt.
   - {{ui:Koblet}}: den viser den samme visning med ét sæt noteringer og indstillinger.
3. Kopien står under {{ui:Duplikerede visninger}}. Klik på den for at åbne den; linjen over planen siger, at det er en kopi, med {{ui:Op}} tilbage til sin visning.
4. Dens skyderknap åbner dens indstillinger: navnet, {{ui:Visningsinterval}} (en egen kopi har sit eget), {{ui:Gør til egen kopi}} for en koblet, og {{ui:Slet}}.

Kopier af facader og snit lægges på dine egne ark ved siden af de visninger, de kommer fra. Duplikering er ét fortryd-trin, og kopierne gemmes i IFC ved siden af henvisningerne.

## Penne, der gemmes med visningen, og udskrives som vist

1. Slå {{ui:Tegn}} til, og vælg {{ui:Penne}}.
2. {{ui:Til}} viser nu alle kategorier: vægge, døre og vinduer, dæk, tage, søjler, trapper, møbler og resten samt tegning og målsætninger.
3. {{ui:Anvend}} gemmer pennen i IFC sammen med den visning, der vises: en plan, et loftplan, en henvisning eller en duplikeret visning. Penne lavet før 0.9 blev gemt i browseren; {{ui:Gem disse i filen}} flytter dem.
4. Ark og PDF tegner hver pen, som skærmen viser den.

For i stedet at udskrive gennem en pennetabel, sæt {{ui:Udskriv}} i rækken Penne til {{ui:Gennem en pennetabel}}, og vælg derefter en tabel (farve, monokrom, gråskala) eller {{ui:Redigér pennetabel…}}: hver farve får den farve, tykkelse og rastrering, den udskrives med. Tabellen er CadCraft's plotstilfil, så {{ui:Importér…}} tager en tabel lavet i CadCraft-appen, og {{ui:Eksportér}} giver en tilbage. Modellen beholder sit valg; uden et valg bestemmer arbejdsstilen.

## Rapportér et element som en anden klasse

En plade tegnet som en vej, en væg brugt som et panel, et tag formet som en rampe: behold værktøjet, du tegnede det med, og rapportér det som det, det er.

1. Vælg elementet, og åbn {{ui:Egenskaber}}. Åbn {{ui:Rapportér som}}.
2. Skriv i søgefeltet for at finde en klasse, der passer til formen, vælg den og dens foruddefinerede type. For en type af din egen, vælg USERDEFINED og giv den et navn.
3. {{ui:Anvend}} (ét fortryd-trin). {{ui:Ryd}} rapporterer det igen, som det blev tegnet.

Du redigerer det stadig med det værktøj, det blev tegnet med. Den gemte IFC skriver det som den rapporterede klasse, så andre programmer, {{ui:Mængder}}-mængdeudtrækket, Find, Farve efter, modelkontrol og {{ui:Problemer}} tæller det som den. Lister udelader en væg, der er rapporteret som et panel, fra vægliste, og {{ui:Elementer efter rapporteret klasse}} viser alle dem. Det virker i IFC4- og IFC2X3-filer; listen tilbyder kun de klasser, filens IFC-version har. Døre, vinduer, trapper, rum og niveauer beholder deres egen klasse.

## Gem et projekt som skabelon, og start fra det

1. Med et projekt åbent klikkes {{ui:Gem som skabelon}} ved siden af {{ui:Gem}}.
2. Navngiv den. Sæt flueben i {{ui:Download også skabelonfilen}} for at dele den som en IFC-fil, og {{ui:Start nye modeller ud fra den}} for at gøre den til din standard.
3. En skabelon beholder niveauerne, visningsskabeloner og visningsindstillinger, duplikerede visninger og henvisninger, tegning, penne og pennetabellen, tags, familier og typer, ark, arkstørrelser, tegningshoveder og arbejdsstilen. Vægge, dæk, døre og alle andre modelelementer udelades.
4. Klik på {{ui:Ny bygning}} og vælg den under {{ui:Start fra}}, eller vælg {{ui:En skabelonfil…}} for en, du har fået tilsendt. Det nye projekt får sit eget navn og sin egen projektidentitet; alt andet er, som skabelonen har det.

:::note
Skabeloner gemmes i denne browser. Teamskabeloner delt via CadCraft Studio er ikke lavet endnu: send skabelonfilen i stedet.
:::
