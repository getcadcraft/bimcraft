---
title: Massestudier side om side
summary: Behold flere massestudier i den samme model, gør et til den aktuelle variant, kontrollér den mod grundens byggelinjer og servitutter, hent masser fra ModelCraft, og udvikl den valgte variant til vægge og gulve.
keywords: masse, massestudie, variant, varianter, variantsæt, skema, koncept, konceptdesign, fase 2, alternativer, sammenlign varianter, aktuel variant, bygningsmasse, skub træk, modelcraft, civilcraft, bruttogulvareal, fodaftryk, volumen, udvikl masse, servitut, byggelinje, tilbagerykning
from: 69a01459
---

## Hvad du skal gøre

Behold massestudierne i et koncept i én model i stedet for i separate filer: flere bygningsmasser side om side, en af dem den **aktuelle variant**, de andre gemt til sammenligning.

Et massestudie er en bygningsmasse: en omrids løftet til en højde med et antal etager. Det er endnu ikke vægge. Du kan gemme så mange, du vil, samlet i **variantsæt** (varianter i et sæt er alternativer til hinanden).

## Gem en variant

1. Åbn {{ui:Rumprogram til masse}}, skriv rumprogrammet og omridset, og vælg {{ui:Find muligheder}}.
2. Vælg en af de viste muligheder.
3. Under {{ui:Massestudier i modellen}} skriv et navn til {{ui:Variantsæt}}, hvis du vil have et, og vælg {{ui:Behold den valgte variant}}.

Varianten vises i modellen som en bygningsmasse og i listen, med sine etager, fodaftryk, bruttogulvareal og volumen. Intet bygges. Gem en anden på samme måde.

Den første variant i et sæt er dens aktuelle variant. Hvert trin er ét fortrydelsestrin.

## Den aktuelle variant

Én variant i hvert sæt er den aktuelle. Det betyder to ting:

- **Dens etager tæller som bygningens gulvarealer.** Den aktuelle variant har ét rum pr. etage med den etages bruttoareal, så alt, der læser gulvarealer, ser den gældende variant og ingen anden.
- **Den kontrolleres mod grunden.** Hvis den står uden for grundgrænsen, over en byggelinje eller på en servitut, vises en advarsel med dens navn under {{ui:Problemer}}. Det er kun en advarsel: intet afvises. Varianter, der ikke er aktuelle, kontrolleres ikke.

Vælg {{ui:Gør aktuel}} på en anden variant for at skifte.

{{ui:Skjul de varianter, der ikke er aktuelle}} skjuler de andre i 3D-visningen. Det gælder kun for denne browser og gemmes ikke i filen.

## Masser fra ModelCraft

I ModelCraft sender {{ui:Eksportér}} › {{ui:Masse til BimCraft…}} hver gruppe eller komponent som én variant. BimCraft åbner filen med variantene vist.

For at føre dem ind i en model, der allerede er åben, vælg {{ui:Tilføj massestudier fra en fil}} og vælg `.ifc`-filen. Dens masser kommer ind som varianter i et sæt, i ét fortrydelsestrin, og står, hvor de blev modelleret. En fil med bygningsmasser fra CivilCraft virker på samme måde.

En variant markeret »(formen forenklet)« var ikke en almindelig lodret blok i ModelCraft (den trinvist trækker sig tilbage, skråner eller er ikke lukket). Dens masse her er omridset af dens bund løftet til sin højde. Dens gulvarealer og volumen er dem, der er målt på selve legemet.

## Udvikl den valgte variant

Vælg {{ui:Udvikl}} på en variant. Den bliver til etager (lagt sammen til sit antal etager), vægge rundt om sit omrids på hver etage og en gulvplade på hver, i ét fortrydelsestrin. Varianten forlader listen; de andre varianter bliver, som de var. Der er endnu intet tag.

{{ui:Omdøb}} ændrer en variants navn, {{ui:Fjern}} tager den ud af modellen. Fjerner du den aktuelle variant, gøres sættets første anden variant aktuel.

## Hvad du skal se

- Hver gemt variant som en blok i 3D-visningen og en række i listen.
- »(aktuel)« ved siden af én variant i hvert sæt.
- En advarsel under {{ui:Problemer}}, når den aktuelle variant krydser grundgrænsen, en byggelinje eller en servitut.

## Godt at vide

- I IFC-filen er en variant et bygningselement-proxy med egenskabssættet `CadCraft_SiteMass` (dens variantsæt, variantnavn og om den er aktuel står i det sæt). Den aktuelle variants etager er rum af typen `MassingFloor`. Andre programmer læser proxyen som et generisk element.
- At gemme en variant tilføjer aldrig etager; det gør udvikling.
- En assistent kan vise de gemte varianter, gemme en, gøre en aktuel, omdøbe, udvikle eller fjerne den.
