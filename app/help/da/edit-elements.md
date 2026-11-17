---
title: Slet, klip, kopiér og sæt bygningselementer ind
summary: Vælg vægge, døre, møbler eller andet i en IFC-model; slet dem, klip dem, eller kopiér og sæt dem ind, hvor du klikker, på samme sted eller på en anden etage.
keywords: slet, fjern, radér, klip, kopiér, sæt ind, duplikér, flyt, vælg alle, vælg alt, bygningselement, væg, dør, vindue, trappe, åbning, fortryd
from: d9eec37f
---

## Hvad du gør

Ændr det, der er i en IFC-model: fjern elementer, du ikke vil have, kopiér en væg eller et sæt møbler til et andet sted, eller flyt elementer ved at klippe og indsætte dem. Hver ændring er ét trin, du kan fortryde, og gem skriver en ny fil, så din originale fil forbliver, som den var.

## Trin

1. Åbn en IFC-model. Se [Åbn en IFC-model og kig rundt i 3D](topic:open-ifc-model).
2. Vælg det, du vil ændre: klik på et element, hold {{key:Mod}} eller {{key:Shift}} nede og klik for at vælge flere, eller tryk {{key:Mod+A}} ({{ui:Mere}}, {{ui:Vælg alle}}) for at vælge alle viste elementer.
3. Derefter:
   - **Slet:** tryk {{key:Delete}}, eller {{ui:Mere}}, {{ui:Slet}}.
   - **Kopiér:** tryk {{key:Mod+C}} eller klik på {{ui:Kopiér}}.
   - **Klip:** tryk {{key:Mod+X}}, eller {{ui:Mere}}, {{ui:Klip}}. Elementerne forsvinder, og du kan sætte dem ind.
4. For at sætte ind, tryk {{key:Mod+V}} eller klik på {{ui:Sæt ind}}. En gennemsigtig boks i størrelse med det, du kopierede, følger markøren på den etage, der er valgt i placeringslinjen. Tryk {{key:R}} for at dreje den 90°, og klik derefter, hvor den skal stå. Hvert klik placerer en ny kopi; tryk {{key:Esc}} for at stoppe.
5. Eller tryk {{key:Mod+Shift+V}} ({{ui:Mere}}, {{ui:Sæt ind på samme sted}}): efter et klip går elementerne præcis tilbage, hvor de var; efter en kopi kommer kopien lige ved siden af originalerne.
6. Klik på {{ui:Gem som IFC}} for at downloade den redigerede model.

## Hvad hører med til et element

- **Dele:** en trappe tager sine trappeløb med, en gardinvæg sine paneler; alt, der er bygget af dele, tager dem alle med.
- **Åbninger:** en væg tager de åbninger med, der er skåret i den. Sletning af en dør eller et vindue tager også den åbning med, som den udfyldte, så væggen lukker, som den gør i et modelleringsprogram. Sletning af en væg tegnet i BimCraft sletter også dens døre og vinduer og samler de resterende vægge igen. Sletning af en væg fra en fil, der er lavet et andet sted, lader dens døre og vinduer blive, hvor de var.
- **Data:** en kopi har samme type, materialer, egenskabssæt og mængder som originalen, og et nyt GlobalId. Hvis du senere ændrer en værdi på kopien, rører det ikke originalen.
- **Biblioteksemner** beholder deres biblioteksdata; en kopi får det næste ledige emnenummer, og et klippet emne, der sættes ind igen, beholder sit eget.

## Hvad du bør se

- »Slettet: …« eller »Indsat: …« i listen {{ui:Ændringer}}. {{key:Mod+Z}} tager den sidste ændring tilbage; {{key:Mod+Y}} lægger den på igen.
- Efter en sletning angiver statuslinjen, hvor mange dele og åbninger der også blev slettet.
- Indsatte elementer er valgt, så du kan sætte dem ind på samme sted igen for at lave en række, eller slette dem.

## Godt at vide

- Kopier bruger samme geometri som originalen (IFC lader elementer dele den), så filen vokser meget lidt.
- Bygningselementer sættes ind i den model, de blev kopieret fra, i samme fane. For at bruge placerede biblioteksemner i en anden model, kopiér ét emne ad gangen: se [Kopiér, sæt ind og duplikér biblioteksemner](topic:copy-paste).
- Etager, zoner, bygninger og grunden kan ikke slettes eller kopieres. Vælg elementerne i dem i stedet. Et rum tegnet i BimCraft kommer fra væggene omkring det: slet en væg for at samle to rum.
- Vægge, døre og vinduer tegnet med BimCraft's egne væg-, dør- og vinduesværktøjer kan ikke kopieres, klippes eller duplikeres endnu; statuslinjen siger det. Tegn dem igen. Sletning virker.
- Kopiér lægger også navnene og egenskaberne på det, du kopierede, på udklipsholderen som tekst, så du kan sætte det ind i et regneark eller en e-mail.

## Typiske fejl

- **{{ui:Slet}} er gråt.** Intet er valgt, eller kun etager eller zoner er valgt. Peg på knappen for at se, hvorfor.
- **Sæt ind siger, at elementerne kommer fra en anden model.** Du har åbnet en anden model, siden du kopierede dem. Åbn den første model igen og kopiér dem der.
- **Den indsatte kopi er på en anden etage.** {{ui:Etage}} i placeringslinjen afgør, hvor den går; vælg etagen, før du klikker.

## Relateret

- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)
- [Taster og mus](topic:keyboard#edit)
