---
title: Læs en projekt- eller familiefil
summary: Åbn en .rvt-, .rfa-, .rte- eller .rft-fil og læs dens udgivelse, arbejdsdeling, projektinformation, familieparametre, links og forhåndsvisningsbillede, uden programmet, der lavede den.
keywords: rvt, rfa, rte, rft, projektfil, familie, udgivelse, version, hvilken version, build, arbejdsdeling, central, projektinformation, forhåndsvisning, miniature, links
from: df3600e1
---

## Hvad du gør

Find ud af, hvad der er i en projekt- eller familiefil, uden at åbne den i Revit: hvilken udgivelse der gemte den, om den er arbejdsdelt, projektinformationen, og hvad den linker til. Nyttigt, når en fil kommer fra en anden, og du skal vide, i hvilken udgivelse den skal åbnes.

## Trin

1. Klik på {{ui:Vælg en fil}}.
2. Vælg en `.rvt`-, `.rfa`-, `.rte`- eller `.rft`-fil.
3. Vent et øjeblik. Statuslinjen siger "Læser filen…" og derefter "Åbnet *filnavn*".
4. Kig øverst på kortet: forhåndsvisningsbilledet gemt i filen, filtypen og udgivelsen den blev gemt i samt projektnavnet.
5. Rul ned for at læse kortets afsnit.

## Hvad du bør se

Kortet i midten, med disse afsnit, når filen indeholder dem:

| Afsnit | Hvad det fortæller dig |
|---|---|
| Fil | Filnavn, størrelse, art (projekt, projektskabelon, familie eller familieskabelon), udgivelsen og buildet den blev gemt i, arbejdsdeling, stien til den centrale model, hvor den sidst blev gemt, hvem der gemte den, sprog og dokument-GUID |
| Projektinformation | Projektets egne felter, såsom navn, nummer, kunde, adresse og status. Felter, der stadig står på deres standardværdier for nyt projekt, udelades. |
| Familie, Familie: … | For en familie: dens navn, kategori, udgivelse, sidste opdatering og dens parametre, gruppe for gruppe |
| Linkede og refererede filer | Hver linket model, CAD-link, billede og nøgletabel, filen peger på, med dens gemte sti |

Til venstre gentager panelet {{ui:Fil}} de vigtigste fakta og tilføjer **Læst**: hvor meget af filen BimCraft faktisk læste, typisk omkring 40 KB af en fil, der er mange megabyte stor. Til højre siger panelet {{ui:Egenskaber}}, at elementegenskaber kræver 3D-modellen.

## Hvorfor der ikke er 3D

Den 3D-model og elementerne inde i en projektfil er gemt i et format, der ikke er dokumenteret. BimCraft læser kun de dele af filen, der er dokumenteret eller tydeligt læselige: filinformationen, projektinformationen, familiedata, linklisten og forhåndsvisningsbilledet. Den gætter ikke på resten. For at se modellen i 3D og læse elementegenskaber skal du eksportere IFC fra det program, der lavede filen. Se [Få en projektfil ind i 3D via IFC](topic:rvt-to-ifc).

## Almindelige fejl

- **At forvente 3D.** Se ovenfor.
- **Links viser kun deres gemte sti.** En fil, der åbnes alene, kan ikke kontrollere, om dens links findes. Åbn i stedet mappen, den ligger i, så markerer BimCraft hvert link som fundet eller ikke fundet: [Åbn en hel projektmappe](topic:open-project-folder).
- **"Denne fil er ufuldstændig…"** Filen blev afbrudt, mens den blev kopieret, uploadet eller synkroniseret. En cloud-drevfil, der stadig er "kun online", gør det også. BimCraft åbner den alligevel og viser kun det, der blev gendannet: en orange meddelelse øverst på kortet, et afsnit **Gendannet fra denne fil**, der lister de dele, hvis hver byte er i filen, og **Ikke i filen** for resten. Intet udfyldes for den manglende del, så udgivelsen, forhåndsvisningsbilledet eller projektinformationen kan mangle, når de var gemt efter afbrydelsen. Hvis selv filens indholdsfortegnelse blev afbrudt, kan intet åbnes. Kopiér originalen igen, og åbn den igen for den fulde fil.
- **"Intet forhåndsvisningsbillede i denne fil".** Nogle filer er gemt uden et. Det er normalt.
- **At åbne en backup ved en fejl.** Filer navngivet som `Tower.0004.rvt` er nummererede backups. Når du åbner mappen, grupperes de sammen med deres model.
