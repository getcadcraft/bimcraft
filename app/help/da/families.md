---
title: Families og deres størrelser
summary: Døre, vinduer og møbler kommer i families. Hver størrelse af en family er én type i IFC-filen, så typelisten forbliver kort i BimCraft, mens andre programmer læser almindelige typer.
keywords: family, families, type, typer, størrelse, størrelser, dørtype, vinduestype, møbel, bord, hylde, skab, ny størrelse, duplikér, placér family, familyfil, ccfamily, ifc-bibliotek, projektbibliotek, gruppe, synlighed, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Hvad en family er

En family er ét slags ting i flere størrelser: en enkelt svingdør der fås 32, 36 og 42 in bred, eller et bord der fås langt og kort. I BimCraft ser du familyen én gang, med dens størrelser under sig, i stedet for en lang liste af typer.

IFC kender ikke families. I filen er hver størrelse en almindelig type (en dørtype, en vinduestype, en møbeltype …), og familyen er en gruppe der lister dens størrelser. Andre BIM-programmer læser typerne og gruppen, som de er. BimCraft læser familyen tilbage fra dem.

## Hvor du finder dem

- Projektbrowserens gruppe **Families** lister familierne i denne model, med hvor mange størrelser hver har, og hvor mange der er placeret. Nedenunder er **Startfamilies**: dørene og vinduerne fra Dør- og Vindues-værktøjerne, samt et bord, en hylde og et underskab.
- {{ui:Build}} › {{ui:Families…}} viser den samme liste i et vindue.
- Klik på en family for at åbne den: dens størrelser, hvilke værdier hver størrelse har, og hvor mange elementer der bruger hver.

## Døre og vinduer

Dør- og Vindues-værktøjerne lister familierne af den slags, og ved siden af dem en **størrelsesliste**. Vælg en størrelse, eller skriv **W** og **H**: en bredde og højde som ingen størrelse har endnu, bliver til en ny størrelse af familyen når du placerer døren. Døre af samme størrelse deler én type.

I {{ui:Properties}} viser en valgt dør eller et valgt vindue sin **Family** og **Størrelse**. Vælg en anden størrelse på listen, eller skriv en ny bredde eller højde. {{ui:Open the family}} åbner den family den hører til.

Hver døres eller vindues karm følger sin egen væggs tykkelse, som før families. Størrelsens type gemmer også at døren er tegnet i en 140 mm væg, til programmer der læser typer.

## Ny størrelse fra denne family

1. Åbn familien.
2. Under **Ny størrelse fra denne family** skriver du dens værdier (Bredde, Højde og familyens øvrige parametre) og, hvis du vil, et navn. Uden navn får den navn efter sine værdier.
3. Klik på {{ui:Make the size}}.

To størrelser kan ikke have de samme værdier. **Omdøb** ændrer en størrelses navn, **Fjern** tager en størrelse væk som ingen bruger, og **Vælg** vælger elementerne i den størrelse.

## Placér møbler

1. {{ui:Build}} › {{ui:Place family}}, eller {{ui:Place}} i en families vindue.
2. I linjen vælger du familien og dens størrelse.
3. Klik på planen for at placere den på etagen. Tryk {{key:R}} for at dreje den 90° før du klikker. {{key:Esc}} stopper.

Et placeret stykkes {{ui:Properties}} viser dets størrelse, hvor det står og hvor meget det er drejet. {{key:Delete}} fjerner det. Alle stykker af én størrelse deler den størrelses form, så ændrer du familien, ændres de alle.

## Størrelser fra en tabel

{{ui:Sizes from a table…}} i en families vindue læser en CSV-fil (komma, semikolon eller tabulator). Første række navngiver kolonnerne: en parameters navn eller etiket, og valgfrit `Name`. Længder er millimeter, medmindre du skriver en enhed (`1.2 m`, `36 in`). Ja / Nej-kolonner tager yes, no, true, false, 1 eller 0, og en parameter uden kolonne beholder sin standard. Hver række bliver til en størrelse i ét trin du kan fortryde. En størrelse der allerede findes springes over. Én række der ikke kan læses, eller som familien ikke kan tegne, afviser hele tabellen og nævner sin linje. Højst 200 rækker og 1 MB. {{ui:Save the sizes as a table}} skriver den samme tabel tilbage.

## Sæt på hvert element

En parameter markeret **Pr. element** i editoren (et Ja / Nej, der tilføjer en oberlys, en etiket eller et materiale) er ikke en del af en størrelse: to døre af samme størrelse kan være forskellige. Vælg elementet, og **Egenskaber** viser disse parametre. Ændrer du en, tegnes elementet igen med sin egen form (møbler og inventar får en egen form, døre og vinduer laves igen i deres vægge). Sætter du dem alle tilbage til standard, går elementet tilbage til sin størrelses form.

## Detaljeniveau

{{ui:Build}} › {{ui:Families…}} › **Detaljeniveau** sætter for hver family i modellen, hvad der gemmes i legemerne og tegnes i planens symboler: **Fine** beholder alt, **Medium** og **Coarse** udelader de dele editoren markerer som finere (mindre filer, hurtigere visninger). **Automatic** gemmer alt og lader et arks visning vælge efter dets målestok: 1:50 og større fin, 1:100 medium, 1:200 og mindre grov. Ét trin du kan fortryde.

## Duplikér en family

Du behøver ikke starte fra intet. {{ui:Duplicate}} kopierer en family med dens parametre, legemer og størrelser under et nyt navn. Ret kopien i editoren; originalen bliver som den var.

## Familyfiler

- {{ui:Save the family file}} gemmer en `.ccfamily.json` med familiens parametre, legemer og størrelser. Åbn den i en anden model med {{ui:Open a family file…}} i gruppen Families.
- {{ui:Save as IFC}} gemmer familien som en lille IFC-fil med dens størrelsers typer og dens gruppe, erklæret af et IFC-projektbibliotek. Andre programmer åbner den som et sæt typer. BimCraft åbner den som familien igen.

En familyfil der åbnes her, læses som data og kontrolleres, før noget skrives. En family hvis nøgle allerede findes i modellen, kommer ind som en særskilt family. En family der holder andre (se Families indeni i editorens hjælp), tager dem med: filen lister dem, og modellen beholder dem den allerede har.

## Families i biblioteket

Åbn {{ui:Families…}} og vælg {{ui:From the Library…}} for at se de families der er delt i biblioteket. {{ui:Add to this project}} læser en af dem som en familyfil: BimCraft kontrollerer hvert felt, før den laver noget. Familien kommer ind som sin egen family, og den åbnes i editoren. At tilføje den er ét trin i fortryd. For at dele dine egne bruger du {{ui:Save all as a library}} og sender filen til biblioteket. Bibliotekets medarbejdere udgiver en familyfil med en kommando, og hver family er sin egen post med sine størrelser. Kan biblioteket ikke nås, siger listen det, og intet ændres.

## Andre programmers typer

Typer lavet af andre programmer vises også i gruppen Families, grupperet efter et gæt: efter den del af deres elementers navne der står før det første kolon, ellers efter typenavne der kun adskiller sig i deres tal. Familyvinduet siger, hvilket gæt der blev brugt. De er listet, og du kan vælge deres elementer, men de redigeres ikke her, for de har ingen familieopskrift.

:::note
Startdørene og -vinduerne er tegnet præcis som før families. Filer lavet før families åbner uændret: deres døre og vinduer vises under deres family med de størrelser der er i brug, og flyttes over på en størrelse af sin egen første gang du ændrer dem.
:::

Se også [Rediger en family](topic:family-editor) og [Døre og vinduer](topic:doors-and-windows).
