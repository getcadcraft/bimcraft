---
title: Symbolpaletten
summary: Finn elektriske symboler og VVS-plansymboler etter navn eller bilde, merk dem du bruker med stjerne, og plasser dem i planen med ett klikk.
keywords: symbolpalett, symboler, symboler i verktøylinjen, veggen følger, elektriske symboler, VVS-symboler, VVS-plan, WC, toalett, servant, vask, badekar, dusj, gulvsluk, renseluke, slangekran, varmtvannsbereder, ventil, sluseventil, kaldtvann, varmtvann, avløp, ventilasjon, linjestil, favoritter, søk
from: 67f20bc0
---

## Hva du skal gjøre

Åpne ett panel som lister de elektriske symbolene og VVS-plansymbolene med bilder og navn, finn symbolet du vil ha, og plasser det i planen. Ingenting her krever internett: symbolene følger med appen.

## Åpne og plasser et symbol

1. Åpne en modell og åpne {{ui:Bygg}} › {{ui:Symbolpalett}} (skrevet kommando: SYMBOLS). Den samme knappen finnes i Verktøy-menyen i tegnelinjen og som **Symboler** i Bibliotek-gruppen på verktøylinjen.
2. Velg et sett: **Elektrisk** eller **VVS**, eller **Alle sett**. Skriv i søkefeltet for å begrense listen. Det går an å søke etter navn eller forkortelse (WC, CW, HB).
3. Klikk et symbol. Planen er klar til å plassere det.
   - Et **elektrisk** symbol starter Elektrisk-verktøyet med den enheten valgt, så alt som står i [Den elektriske planen](topic:electrical-plan) gjelder: klikk i planen, ett angre-steg.
   - Et **VVS**-symbol starter plansymbolverktøyet. Klikk i planen. Et sanitærelement som sitter på en vegg (toalett, servant, badekar, vask, slangekran) fester seg til nærmeste veggflate med ryggen mot veggen. Avløp, ventiler, varmtvannsberederen og linjestiler plasseres der det klikkes.
4. Trykk {{key:R}} for å rotere symbolet 90 grader ({{key:Shift}}+{{key:R}} roterer den andre veien), eller skriv inn en vinkel i **Rotasjon** i alternativlinjen. Trykk {{key:Esc}} for å stoppe.

Et sanitærelement eller en slangekran som er festet til en veggflate, husker den veggen: når veggen flyttes, flytter symbolet seg med den (samme flate, samme avstand langs veggen) i samme angre-steg. Slettes veggen, blir symbolet der det var, og Problemer lister "mistet sin vegg"; flytt det eller slett det. Symboler plassert bort fra vegger er ikke knyttet til noe.

Hvert plassert symbol er ett angre-steg. Et plassert symbol er en plananmerkning i IFC-filen, med merket sitt (WC1, WC2 ...). Velg det for å endre merket eller rotasjonen i **Egenskaper**, eller trykk {{key:Delete}}.

## Hva VVS-settet inneholder

Sanitærutstyr (toalett, urinal, servant, badekar, dusj, kjøkkenvask, enkeltvask), et gulvsluk, gulv- og veggrenseluker, en slangekran, en veggbrannkran, en varmtvannsbereder, ventiler (sluse-, globe-, kule-, tilbakeslags-, sommerfugl- og trykkreduserende) og linjestiler med forkortelsene sine: kaldtvann (CW), varmtvann (HW), varmtvannsretur (HWR), avløp (W), ventilasjon (V), regnavløp (SD) og gass (G). Tegningene skaleres med planen, så de beholder størrelsen sin på det utskrevne arket. En linjestil er et kort stykke for å vise stilen i planen; tegn de faktiske rørstrekkene med rørverktøyene.

:::note
Dette er vanlige VVS-konvensjoner for plan, tegnet av oss; ikke sertifisert etter ISO 4067-1 eller ASME Y32.4. De er sammenlignet med offentlige tegneforklaringer og opplæringshåndbøker (listen står i kildemerknaden for settet, som sier hvor vi stemmer overens og hvor vi avviker), ikke kopiert fra et produkt, og de kan brukes fritt (Apache-2.0). Tegnesett varierer, så prosjektets egen tegneforklaring må kontrolleres. De er plansymboler, ikke en VVS-prosjektering: de dimensjonerer ikke rør og kontrollerer ikke forskrifter.
:::

## Favoritter og tastatur

- Klikk stjernen på et symbol (eller trykk {{key:F}} på det) for å beholde det som favoritt. Favoritter listes først og blir værende i denne nettleseren. **Bare favoritter** viser bare dem.
- {{key:Down}} fra søkefeltet flytter inn i symbolene. Piltastene, {{key:Home}} og {{key:End}} flytter mellom dem. {{key:Enter}} velger det fokuserte symbolet, og {{key:Esc}} lukker paletten.
- På en telefon er paletten et ark nederst på skjermen. Det trer til side når et symbol velges, slik at planen er synlig. Åpne det igjen fra Bygg-menyen eller knappen **Palett** i alternativlinjen.

:::tip
Hvis en fil bruker et symbolsett som denne versjonen ikke har, viser planen en boks der symbolet var, og Problemer lister det.
:::

## Koble et plassert element til et symbol

Et lysarmatur fra biblioteket er et 3D-element, men et elektrisk oppsett viser det som symbolet sitt. Elementet plasseres **én gang** og kobles:

1. Velg Bygg › **Symbolkobling** (eller skriv SYMBOLLINK). En seksjon for symbolkobling åpnes i venstre panel.
2. Velg de plasserte elementene i planen eller i 3D. Seksjonen sier hvor mange som er valgt og hva de er koblet til.
3. Velg **Symbol** (fra et hvilket som helst symbolsett: Elektrisk, VVS) og velg **Koble**.

Elementet er fortsatt ett element, og hver liste teller det én gang:

- **3D** viser alltid kroppen sin.
- En **plan** viser plan-formen sin, som før.
- En plan der **Denne visningen viser koblede elementer som** er satt til **Det tilhørende symbolet (et tjenesteoppsett)** viser symbolet på plass. Et klikk på symbolet velger elementet. Valget beholdes for den visningen (en etasjes gulvplan, takplanen eller en henvisning) i filen.

**Roter symbolet 90°** roterer symbolet i forhold til elementet. **Fjern koblingen** fjerner koblingen; elementet blir værende. Listen **Koblede symboler** lister hvert koblet element én gang, med etasjen og rommet det står i.

Ikke bygget ennå: et visningsvalg på et ark er valget for gulvplanen den viser. Enheter plassert med Elektrisk-verktøyet er symboler i alle planer, som før.
