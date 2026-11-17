---
title: Les en prosjekt- eller familiefil
summary: Åpne en .rvt-, .rfa-, .rte- eller .rft-fil og les utgaven, delt arbeid, prosjektinformasjonen, familieparametrene, koblingene og forhåndsvisningsbildet, uten programmet som laget den.
keywords: rvt, rfa, rte, rft, prosjektfil, familie, utgave, versjon, hvilken versjon, bygg, delt arbeid, sentralfil, prosjektinformasjon, forhåndsvisning, miniatyrbilde, koblinger
from: df3600e1
---

## Hva du skal gjøre

Finn ut hva som ligger i en prosjekt- eller familiefil uten å åpne den i Revit: hvilken utgave som lagret den, om den er delt, prosjektinformasjonen og hva den lenker til. Nyttig når en fil kommer fra noen andre og du må vite hvilken utgave den skal åpnes i.

## Trinn

1. Klikk {{ui:Velg en fil}}.
2. Velg en `.rvt`-, `.rfa`-, `.rte`- eller `.rft`-fil.
3. Vent litt. Statuslinjen sier «Leser filen…» og deretter «Åpnet *filnavn*».
4. Se øverst på kortet: forhåndsvisningsbildet som er lagret i filen, filtypen og utgaven den ble lagret i, og prosjektnavnet.
5. Rull ned for å lese seksjonene på kortet.

## Hva du bør se

Kortet i midten, med disse seksjonene når filen har dem:

| Seksjon | Hva den forteller deg |
|---|---|
| Fil | Filnavn, størrelse, type (prosjekt, prosjektmal, familie eller familiemal), utgaven og byggversjonen den ble lagret i, delt arbeid, sentralmodellens bane, hvor den sist ble lagret, hvem som lagret den, språk og dokument-GUID |
| Prosjektinformasjon | Prosjektets egne felt, for eksempel navn, nummer, kunde, adresse og status. Felt som fortsatt står på standardverdiene for et nytt prosjekt, utelates. |
| Familie, Familie: … | For en familie: navnet, kategorien, utgaven, siste oppdatering og parameterne, gruppe for gruppe |
| Koblede og refererte filer | Hver koblet modell, CAD-kobling, bilde og nøkkeltabell filen peker til, med lagret bane |

Til venstre gjentar {{ui:Fil}}-panelet de viktigste fakta og legger til **Lest**: hvor mye av filen BimCraft faktisk leste, vanligvis rundt 40 KB av en fil som er mange megabyte stor. Til høyre sier {{ui:Egenskaper}}-panelet at elementegenskaper krever 3D-modellen.

## Hvorfor det ikke finnes 3D

3D-modellen og elementene inne i en prosjektfil er lagret i et udokumentert format. BimCraft leser bare de delene av filen som er dokumentert eller tydelig lesbare: filinformasjonen, prosjektinformasjonen, familiedata, lenkelisten og forhåndsvisningsbildet. Den gjetter ikke på resten. For å se modellen i 3D og lese elementegenskaper, eksporter IFC fra programmet som laget filen. Se [Få en prosjektfil inn i 3D via IFC](topic:rvt-to-ifc).

## Vanlige feil

- **Å forvente 3D.** Se over.
- **Lenker viser bare sin lagrede bane.** En fil åpnet alene kan ikke sjekke om lenkene finnes. Åpne mappen den ligger i i stedet, så markerer BimCraft hver lenke som funnet eller ikke funnet: [Åpne en hel prosjektmappe](topic:open-project-folder).
- **«Denne filen er ufullstendig…»** Filen ble avkortet under kopiering, opplasting eller synkronisering. En skyfil som fortsatt er «kun på nett» gjør dette også. BimCraft åpner den likevel og viser bare det som ble gjenopprettet: en gul melding øverst på kortet, en seksjon **Gjenopprettet fra denne filen** som lister delene der hver byte finnes i filen, og **Ikke i filen** for resten. Ingenting fylles inn for den manglende delen, så utgaven, forhåndsvisningsbildet eller prosjektinformasjonen kan mangle når de var lagret etter kuttstedet. Hvis selve filens innholdsfortegnelse ble avkortet, kan ingenting åpnes. Kopier originalen på nytt og åpne den igjen for å få hele filen.
- **«Ingen forhåndsvisning i denne filen».** Noen filer lagres uten. Det er normalt.
- **Åpne en sikkerhetskopi ved en feil.** Filer med navn som `Tower.0004.rvt` er nummererte sikkerhetskopier. Åpner du mappen, grupperes de med modellen sin.
