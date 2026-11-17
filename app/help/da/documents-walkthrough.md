---
title: "Dokumenter og revisioner (arkivet)"
summary: "En trin-for-trin-vejledning i et rigtigt job: sæt en projektmappe med IFC-modeller under kontrol, tjek en model ud, ændr den, tjek den ind med en note, send den til gennemgang, godkend og udgiv den, se historikken og hvad der bruger den, hvad en anden person ser, mens den er låst, og hvordan det virker med skymapper."
keywords: arkiv, dokumenter, vejledning, gennemgang, tjek ud, tjek ind, revision, udgivelse, godkend, lås, historik, hvor brugt, ifc, model, skymappe, projektmappe, to personer, delt mappe
from: 0a753f25
---

## Hvad du kommer til at gøre

Du er Ana, og du arbejder på Riverside Clinic sammen med en kollega, Ben. Projektets IFC-modeller ligger i én mappe, I begge kan nå (et delt drev, en synkroniseret mappe eller en skymappe). Når du er færdig, er en fil gået fra sin første kopi til en udgivet revision **A**, er blevet ændret igen som **B.1**, du har set, hvem der gjorde hvad, og du har set, hvad Ben ser, når du har filen.

Alt gemmes i en skjult mappe `.ccvault` ved siden af dine filer: ingen server, intet uploades (en skymappe er undtagelsen, se det sidste trin). For alle knapper og regler samlet et sted, se emnet *Dokumenter: tjek ud, revisioner og udgivelse*, hvor din app har det.

## 1. Opsæt projektmappen

1. Vælg {{ui:Dokumenter}} ved siden af {{ui:Åbn en mappe}} på startskærmen, eller {{ui:Dokumenter…}} i menuen **Fil**.
2. Vælg {{ui:Vælg projektmappen}}, og vælg den mappe, der indeholder projektets IFC-modeller. (Projektmapper virker i Studio og i browsere, der kan åbne en mappe, såsom Chrome og Edge. I andre browsere siger panelet det.)
3. Vælg {{ui:Ændring}} ved siden af **Du:**, og skriv dit navn, `Ana` (hvis det spørger, også navnet på denne computer). Panelet siger nu *Du: Ana på* og din computer. Dit navn kommer på alt, du gør.
4. Vælg {{ui:Start et arkiv i denne mappe}}, og skriv projektets navn, `Riverside clinic`. Panelet siger *Arkiv startet for Riverside clinic.*

## 2. Bring en fil under kontrol

1. Åbn **Filer, der ikke er i arkivet**, og vælg {{ui:Tilføj}} ved siden af `models/House.ifc`.
2. Den vises under **Filer i arkivet** som revision **A.1**, tilstand **Arbejde i gang**. A.1 er dens første kopi; arkivet gemmer en kopi af hver revision.

## 3. Tjek ud, ændr, tjek ind

1. Vælg {{ui:Åben}} ved siden af `models/House.ifc`. Modellen åbnes i BimCraft, og panelet lukkes, så du kan se den. Åbn panelet igen fra {{ui:Dokumenter}}.
2. Åbn panelet igen, og vælg {{ui:Tjek ud}}. Rækken siger nu **Udtjekket til dig**. Der er lavet en låsefil i `.ccvault/locks`; ingen andre kan tjekke filen ud, før du tjekker den ind.
3. Ændr modellen: flyt en væg, tilføj en dør. Gem afvises, medmindre modellen er udtjekket til dig, og det siges hvorfor; Gem som virker altid for en kopi af din egen.
4. Åbn panelet, vælg {{ui:Tjek ind}}, og skriv, hvad der er ændret (`Flyttede døren`). Panelet siger *tjekket ind som A.2*. Filen i projektmappen er nu den model, du havde åben, og låsen er væk. Indtjekning uden ændring beholder revisionen.

Hvis du ombestemmer dig, giver {{ui:Fortryd udtjekning}} filen tilbage uden en ny revision.

## 4. Gennemgang og udgivelse

1. Vælg {{ui:Send til gennemgang}}. Tilstanden bliver **Til gennemgang**, og filen bliver skrivebeskyttet.
2. Før du godkender, vælg {{ui:Projektindstillinger}} og angiv, hvem der må godkende (ét navn pr. linje), for eksempel `Ben` og `Carla`, og sæt flueben ved reglen om, at godkenderen skal være en anden end forfatteren. Vælg {{ui:Gem indstillinger}}. Nu afviser arkivet selv alle andre.
3. Ben (eller Carla) vælger {{ui:Godkend}} og skriver godkenderens navn. Tilstanden bliver **Udgivet**, og revisionen bliver **A**, med *godkendt af* og navnet. En udgivet fil er skrivebeskyttet. {{ui:Send tilbage}} ville have sendt den tilbage til Arbejde i gang, med en begrundelse.

Godkenderens navn er det navn, der skrives i panelet; det er en registrering af, hvem der har skrevet under, ikke et bevis på identitet.

## 5. En ny revision

1. Vælg {{ui:Ny revision}} på den udgivne fil. Du reserverer det næste bogstav.
2. Ændr den, og vælg derefter {{ui:Tjek ind}}. Revisionen er **B.1**, arbejde i gang. Udgiv den på samme måde, og den bliver **B**. {{ui:Fortryd udtjekning}} før den første indtjekning lader den blive på **A**.

Revisionsbogstaverne løber A, B … Z, AA, AB. Hvis din standard springer nogle bogstaver over, springer projektindstillingen *Brug ASME Y14.35-rækkefølgen* I, O, Q, S, X og Z over i de næste revisioner.

## 6. Se hvad der skete

Vælg filens navn for at åbne dens detaljer:

- **{{ui:Historik}}**: hver hændelse, nyeste først, med hvem, hvilken computer og hvornår: *Tjekket ind A.2* af Ana, *Udgivet* af Ben, og så videre.
- **{{ui:Revisioner}}**: revisionstabellen: hver gemt revision, med dens dato, hvem der tjekkede den ind, noten og hvem der godkendte. Arkivet gemmer en kopi af hver i `.ccvault/revs`.
- **{{ui:Bruger}}**: de dokumenter, en IFC-model peger på.
- **{{ui:Brugt af}}**: viser hver model i arkivet, der peger på denne fil.

## Modeller, der peger på andre dokumenter

En IFC-model, der peger på andre dokumenter i mappen (tegninger, lister), viser dem under **Bruger**, og hver af dem viser modellen under **Brugt af**. Tjekker du et dokument ind, kan du se, hvilke modeller der henviser til det.

## 7. Hvad Ben ser, mens du har filen

Tjek nu filen ud igen, og bed Ben om at åbne samme projektmappe på hans computer og åbne panelet. På filens række ser han **Udtjekket af Ana på** din computer **siden** tidspunktet, og ingen {{ui:Tjek ud}}-knap. Hvis han alligevel prøver, afviser arkivet: låsen er en fil, systemet ikke vil lave to gange, så to personer ikke kan have filen samtidig, selv i samme split sekund, når mappen ligger på disken i Studio. (I en browser giver mappen kun et bedste forsøg, og panelet siger det under **Mappe**.)

Hvis Ana er væk, og Ben har brug for filen, frigiver {{ui:Bryd udtjekning}} den. Han skal skrive en grund; den kommer i loggen sammen med, hvis udtjekning det var. Når projektet har administratorer, kan kun de. En udtjekning, der er ældre end grænsen for forældet (14 dage som standard), markeres *længe siden*. Efter brydningen afvises Anas sene indtjekning, så I to ikke kan overskrive hinanden.

## 8. Skymapper

En skymappe er en projektmappe, der ligger i jeres teams skylager, så teamet ikke har brug for et delt drev. I Studio, logget ind på din CadCraft-konto, viser panelet {{ui:Åbn en skymappe}} ved siden af {{ui:Vælg projektmappen}}. Vælg den, og vælg mappen, der vises som arbejdsområde / mappe. En arbejdsområdeejer opretter mappen først, og teamets skylager skal være aktivt. Alt ovenfor virker på samme måde; serveren laver låsen, og den er streng på tværs af personer. Er du ikke logget ind, siger panelet, at du skal logge ind. I et almindeligt browserfane tilbydes skyknappen ikke; brug Studio.

## Prøv det

Gør de otte trin ovenfor med en kopi af en rigtig fil. Til de to-personers trin skal du bruge en anden person eller to vinduer med to navne. Prøver du det med en rigtig delt mappe, viser siden Fællesskabstest en kontrol, der spørger præcis dette, og den tager imod resultater.
