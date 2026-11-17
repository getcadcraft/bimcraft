---
title: Felter i panelet Egenskaber
summary: Hvad hvert felt i panelet Egenskaber og i panelerne Fil, Tegning og Mappe betyder, og hvilke du kan ændre.
keywords: egenskaber, felter, attributter, globalid, guid, kopiér, kopiér værdi, kopiér alt, csv, udklipsholder, serienummer, tag, objekttype, linje, express-id, egenskabssæt, pset, mængder, skema, filpanel
from: fe55b435
---

## Et IFC-element

Øverst i panelet {{ui:Egenskaber}} vises elementets type uden præfikset "Ifc" (for eksempel "Door", "WallStandardCase", "FurnishingElement") og dets navn, eller "Uden navn".

| Felt | Betydning | Kan redigeres |
|---|---|---|
| Name | Elementets navn, ofte familie- og typenavnet fra eksportøren | Ja |
| Type | Navnet på elementets type, når det har en | Nej |
| Object type | En fri tekstbeskrivelse af typen, som nogle eksportører udfylder | Ja |
| Tag | Elementets tag eller mærke; mange eksportører skriver elementets ID her | Ja |
| Description | Fri tekst | Ja |
| GlobalId | Elementets faste 22-tegns IFC-identifikator, den samme i hver eksport af det samme element | Nej |
| Line | Elementets linjenummer (`#1234`) i denne IFC-fil. Det ændrer sig mellem eksporter | Nej |

Herunder kommer **egenskabssættene**, sorteret efter navn:

- Hvert sæt åbnes og lukkes, når du klikker på dets navn. De tre første er åbne.
- Et sæt markeret "(type)" hører til elementets type: "Typeegenskab: en ændring her gælder for hvert element af denne type."
- Mængdesæt (længder, arealer, volumener, antal, vægte) er skrivebeskyttede.
- Lister og opremsningsværdier vises, skrivebeskyttede.
- Ja/nej-værdier vises som **Ja** eller **Nej**.
- Tal afrundes til fire decimaler i visningen. Længder (en længdeegenskab eller en mængdes længde) vises i den {{ui:Enheder}}, der er valgt på værktøjslinjen, med enheden ved siden af, og du kan skrive en ny værdi i den enhed eller med en anden enhedsmærkning (2.4 m, 8'-0"): BimCraft skriver filens egne tal tilbage. Andre tal vises, som filen har dem.
- En tom værdi vises som *tom*. En redigeret værdi er fed med en blå streg ved siden af.

## Kopiér en værdi

Hver værdi i {{ui:Egenskaber}} har en lille kopiknap ved siden af: klik på den for at lægge værdien på udklipsholderen præcis som vist, for eksempel en GlobalId, et serienummer eller en værdi fra et egenskabssæt. At kopiere starter aldrig en redigering.

Øverst kopierer {{ui:Kopiér alt}} alle elementets værdier som tekst, sæt for sæt, og {{ui:Kopiér som CSV}} kopierer dem som rækker med gruppe, egenskab og værdi, så du kan indsætte dem i et regneark. Tomme værdier beholdes, så hvert felt har en række. Det fungerer på samme måde for et element i en anden åben model; når der er flere modeller åbne, starter CSV-filen med en kolonne Model, der navngiver dens fil.

## Filpanelet (IFC)

| Felt | Betydning |
|---|---|
| Fil, Størrelse | Filen, du åbnede |
| Schema | IFC-versionen, for eksempel IFC2X3 eller IFC4 |
| Projekt | Projektets navn og lange navn |
| Fase | Projektfasen, hvis eksportøren har skrevet en |
| Eksporteret fra | Eksportprogrammet, fra filhovedet |
| Forfatter | Forfatteren i filhovedet |
| Eksporteret | Dato og tidspunkt i filhovedet |
| Elementer | Hvor mange elementer med en form der blev tegnet |
| Trekanter | Hvor mange trekanter deres former består af; et mål for, hvor tung modellen er |

## Filpanelet (projekt- og familiefiler)

| Felt | Betydning |
|---|---|
| Art | Projekt, Projektskabelon, Familie eller Familieskabelon |
| Gemt i | Udgivelsen, der sidst gemte filen |
| Build | Det præcise build af den udgivelse |
| Læst | Hvor meget af filen BimCraft læste, ud af dens størrelse |

## Tegningspanelet (DWG og DXF)

| Felt | Betydning |
|---|---|
| Format | Udgivelsen tegningen blev gemt som, med dens formatkode, for eksempel AC1032 |
| Enheder | Tegningens indsætningsenheder, når de er sat |
| Objekter | Hvor mange objekter der blev læst |
| Lag | Hvor mange lag |
| Ark | Hvor mange ark (layouts), eller Ingen |
| Eksterne referencer | Hvor mange af dens eksterne referencer der blev fundet og indlæst |
| Udstyr | Hvor mange mærkede udstyrsenheder der er på ark |

## Mappepanelet

| Felt | Betydning |
|---|---|
| Mappe, Filer, Størrelse | Mappen du åbnede, hvor mange filer den indeholder, og deres samlede størrelse |
| Modeller | Projekt- og familiefiler, hver med dens backups talt én gang |
| CAD-tegninger, IFC-modeller | Hvor mange af hver |
| Problemer | Hvor mange modelkopier der er ufuldstændige eller ulæselige, eller Ingen |
