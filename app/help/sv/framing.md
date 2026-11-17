---
title: Stomma väggar, golv och tak
summary: Generera reglar, syllar, överliggare, bjälkar, sparrar eller takstolar från modellen och behåll dem med den. De görs på nytt när väggarna, öppningarna, golven eller taket ändras, och förteckningen Virke är kaplistan.
keywords: TJI, I-bjälke, spännviddstabell, läs in en tabell, stomme, stomma, regel, reglar, syll, överstycke, överliggare, huvudregel, underregel, omslutningsbjälke, korta reglar, fönsterbänk, förstyvning, hörn, kalifornisk hörn, T-förband, bjälke, randbjälke, öppningsbjälke, sparre, valmsparre, vattsparre, kortsparre, nockbräda, innertakbjälke, hanbjälke, takstol, virke, kaplista, board feet, 2x4, 2x6, centrumavstånd, c/c
from: 76d0ffb5
---

## Vad du gör

Stomma byggnaden utifrån det du ritat. BimCraft lägger ut reglarna, syllarna och överliggarna i väggarna, bjälkarna i golven och sparrarna (eller takstolarna) i taket, dimensionerar dem med märkta standardtabeller, behåller dem med modellen och gör om dem när det de stommar ändras. Förteckningen **Virke** är kaplistan.

## Stomma den

1. På en nivå öppnar du {{ui:Bygge}} och väljer {{ui:Stomme}}.
2. Välj **centrumavstånd** (16" eller 24" c/c; 400 eller 600 mm), **hörnen** (tre-reglar eller kalifornisk), **Sparrar** eller **Takstolar** för tak, och om väggarna ska få en rad **förstyvningar** på halva höjden. För golv väljer du **Sågat virke** eller **TJI (preliminär)** och sätter bjälkriktningen till automatisk, plan X eller plan Y.
3. Klicka på **Stomma alla väggar**, eller klicka på en vägg, ett golv eller ett tak (på nivån taket står på) för att stomma bara den.

Slå av **Visa stomme** för att dölja alla stommdelar, som ett lager. **Genomskinlig** döljer de väggar, golv och tak som är stommade, så att du kan titta på stommen ensam.

## Vad du får

- **Väggar**: en bottensyll (kapad vid dörrar), en dubbel överdel, reglar på layouten från väggens start, huvud- och underregler och en överliggare vid varje dörr och fönster, korta reglar ovanför överliggare och under fönster, en grov fönsterbänk under fönster, hörn där väggar möts (väggen som går igenom tar hörnreglarna), två stödreglar där en annan vägg ansluter som ett T, och förstyvningar mellan reglarna.
- **Golv**: bjälkar som standard över golvets korta sida, eller längs den plan-axel du väljer; randbjälkar runt kanten, och dubbla öppningsbjälkar och överliggare runt en trapphåla, med bjälkarna genom den kapade kortare (svansbjälkar). TJI-läget väljer den minsta listade serien och det minsta djupet som når den uppmätta fria spännvidden vid det valda centrumavståndet.
- **Tak**: vanliga sparrar kapade i rät vinkel mot varje takfot, kortsparrar där valmar och rännor kapar dem, valm- och vattsparrar, nockbrädor, innertakbjälkar på syllarna och hanbjälkar, eller enkla takstolar med centrumavstånd, en del vardera.

## Ändra den

Markera valfri stommdel i 3D-vyn eller i modellträdet. Under **Egenskaper** visas dess stomning: ändra centrumavståndet, golvbjälkens typ och riktning, hörnen, förstyvningarna eller takstommen. Att flytta väggar, dörrar och fönster, eller ändra golvet eller taket, gör om stommen av sig själv.

För att behålla en del du placerat med avsikt när stommen görs om, markera den och välj **Behåll den här delen när stommen görs om**. En kvarhållen del står kvar där den är; när stommen runt den ändras markeras den så att du kan kontrollera den.

## TJI-golv från en tabell du läser in

BimCraft innehåller inga spännviddstabeller från bjälketillverkare; de tillhör tillverkaren och ändras med varje utgåva. Välj ett golvs stomning, sätt **Golvbjälkar** till **TJI (preliminär)** och välj **Läs in en tabell…** under **Egenskaper**: en fil i formatet `cadcraft-tji-table`, JSON eller CSV, som du gjort av tillverkarens aktuella spännviddstabeller. Den anger tillverkaren, produkten och utgåvan och var siffrorna kommer ifrån, och listar för varje lastfall (nyttig last, egen last, nedböjningsgräns, upplagslängd) den största fria spännvidden för varje serie och djup vid varje centrumavstånd.

- BimCraft tar golvets **fria spännvidd**, väljer det grundaste djupet och, inom det, serien vars listade spännvidd når den för det centrumavstånd och lastfall du valt, och stommar golvet med den. Ligger spännvidden eller centrumavståndet utanför tabellen säger den det och ändrar ingenting.
- Lasterna, nedböjningsgränsen, upplagslängden, tabellen och meningen "Preliminär layoutvägledning; slutligt val kräver tillverkarens tabeller och projektets laster" skrivs ut på förteckningen Virke, skrivs in i modellen med stommen och listas i panelen Problem som en notering. En tabell märkt som exempel säger det i en varning.
- Med tillägget **Byggregler** påslaget läser dess bjälkregel också en inläst tabell. Utan tabell utelämnas TJI-bjälkar i den kontrollen, som förut.
- Tabellen finns kvar i den här webbläsaren tills du rensar den eller läser in en annan. Filen: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: tum, fot, psf; eller `metric`: mm, meter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) och `rows` (`series`, `depth`, `spans`: för varje lastfalls-id, centrumavståndet och den största fria spännvidden, till exempel `"16": "15-6"`). I CSV är samma fakta rader `# nyckel = värde`, följda av `series,depth,case,spacing,span`.
- Utan inläst tabell avvisas en TJI-layout och ingenting ändras: **Läs in en TJI-tabell: tillverkarens tabeller är deras egna och ingår inte.** En modell stommad med den äldre inbyggda TJI-tabellen (före denna ändring) behåller varje bjälke den har. Egenskaper och Problem säger att en tabell behövs, och golvet kan stommas om när du läst in en. Massivt sågade bjälkar fungerar som förut.

Detta är layoutvägledning. Det slutliga valet av bjälke kräver tillverkarens tabeller, projektets laster och en ingenjör.

## Kaplistan

I panelen Förteckningar väljer du **Virke**: varje stommdel grupperad efter dimension och efter den lagerlängd du skulle köpa (hela 2'-längder från 8'; steg om 600 mm för millimeter), med antal stycken och board feet. **CSV** laddar ner den.

:::warning
Mått på huvud, bjälkar, sparrar och innertakbjälkar kommer från märkta standardtabeller för ett typiskt en- eller tvåvåningshus, inte från konstruktionsberäkningar. **Egenskaper** säger när en spännvidd eller en öppning ligger utanför sin tabell. En konstruktör eller ingenjör kontrollerar spännvidder, laster och förband.

TJI-layouter använder bara en tabell du läser in, som du gjort av tillverkarens aktuella spännviddstabeller; BimCraft levererar ingen. Förslaget kontrollerar inte upplag, punktlaster, utkragningar, hål, överliggare vid trapphål eller förband, och modellens I-profil är schematisk.
:::

## Vad som sparas

Varje stommad vägg, bjälklag eller tak är en IFC-elementsammanställning ("Framing") av IFC-element (reglar, syllar, sparrar, hanbjälkar, förstyvningar, takstolar) och balkar (överliggare, bjälkar, randbjälkar, nockbrädor), var och en med sin dimension, längd och board feet.
