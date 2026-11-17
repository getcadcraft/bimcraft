---
title: Markér elementer som kontrolleret eller kontrolleret på stedet
summary: Et element, der er læst fra en PDF eller en scanning, er ukontrolleret, indtil du kontrollerer det. Markér elementer som kontrolleret eller som kontrolleret på stedet (LOD 500) med hvem der målte dem, hvornår og hvordan, og aflever en as-built-model, der viser, hvilke der er hvilke.
keywords: ukontrolleret, kontrolleret, tjekket, kontrolleret på stedet, as built, as-built, lod 500, afslutning, aflevering, målt på stedet, målebånd, laser, scanning, opmåling, eksisterende bygning, ombygning, markér som kontrolleret, verifikation, fase 7
from: df35d908
---

## Hvad du gør

Hold styr på, hvad i modellen nogen faktisk har kigget på. Et element har en af tre markeringer, eller ingen:

- **Ukontrolleret**: programmet genkendte det fra en PDF, en skannet tegning, en optegnet tegning eller en punktsky-scanning. Ingen har kontrolleret det endnu.
- **Kontrolleret**: en person sammenlignede det med tegningen, det kom fra.
- **Kontrolleret på stedet (LOD 500)**: en person målte det på stedet. Hvem, hvornår og hvordan gemmes sammen med det.
- **Ingen markering**: tegnet af en person. Modellen fremsætter ingen påstand om det.

## Trin

1. Vælg ét element eller mange (vægge, døre, vinduer, rum, ethvert element).
2. I {{ui:Egenskaber}} åbner du {{ui:Verifikation}}.
3. Skriv, hvem der kontrollerede eller målte det. Datoen er i dag, medmindre du ændrer den.
4. Klik på {{ui:Markér som kontrolleret}}. Til en måling på stedet vælger du, hvordan den blev målt (målebånd, laserafstandsmåler, scanning, opmåling), og klikker på {{ui:Markér som kontrolleret på stedet (LOD 500)}}.
5. {{ui:Markér som ukontrolleret}} og {{ui:Fjern markeringen}} går tilbage. Hvert klik er ét trin, du kan fortryde, for hele valget.

For at markere et valg hurtigt: {{ui:Værktøjer}} › {{ui:Markér som kontrolleret}} (skrevet: `MARKCHECKED`) markerer det som kontrolleret af dig, i dag.

## Det skal du se

- I planen har et ukontrolleret element en stiplet boks og et "?". Et kontrolleret på stedet har et flueben. Fjern markeringen i {{ui:Vis verifikationsmærker i plantegningen}} i afsnittet {{ui:Audit}} for at skjule dem.
- {{ui:Lister}} › {{ui:Verifikation}} lister hvert markeret element med dets niveau, tilstand, hvem, hvornår, hvordan og hvor det kom fra.
- Audit'en lister ukontrollerede elementer og tæller et kontrolleret på stedet-element som LOD 500. Se [Audit af modellen](topic:audit-the-model).

## Fra en scanning

Når du sammenligner en scanning med modellen, markerer {{ui:Markér de tilsvarende elementer som kontrolleret på stedet}} hvert element, som scanningen så som bygget inden for tolerancen, med metoden "scanning" og tolerancen i noten. Se [Sammenlign en scanning med modellen](topic:compare-scan-with-model).

:::warning
Sammenligningen matcher hvert elements boks med scanningens punkter. Det er ikke en opmåling. Brug den til elementer, du også har kigget på.
:::

## As-built-modellen og afleveringspakken

{{ui:Byg afleveringspakken}} på fanen {{ui:Aktiver}} lægger as-built-modellen i zip-filen, med:

- en oversigt i projektet over, hvor mange elementer der er kontrolleret på stedet, kontrolleret, ukontrolleret og umarkeret;
- `as-built/verified-elements.csv`: hvert element og rum med dets tilstand, hvem, hvornår og hvordan;
- `as-built/as-built-drawings.pdf`: tegningssættet, som det er nu;
- tegningens ændringslog, når modellen har udstedte sæt.

Se [Aktiver og vedligeholdelse](topic:assets-and-maintenance).

## Sådan gemmes den i IFC

Hvert markeret element bærer egenskabssættet `CadCraft_Verification`: State, By, On, Method, Source, Note og LevelOfDevelopment (`LOD 500`, mens det er kontrolleret på stedet). De er almindelige tekstegenskaber, så andre programmer viser dem, og Find, Farve efter egenskab og mærkelister kan bruge dem. Oversigten over as-built er egenskabssættet `CadCraft_AsBuilt` på projektet. Et element uden sættet er ikke målt på stedet.

## Næste

- [Vægge fra et sæt planer](topic:walls-from-plans)
- [Audit af modellen](topic:audit-the-model)
