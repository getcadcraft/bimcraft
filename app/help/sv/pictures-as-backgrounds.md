---
title: Lägg en bild under planen
summary: Placera en PNG-, JPEG- eller WebP-bild (en inskannad plan, en skiss, ett platsfoto, ett flygfoto) under en nivås plan eller på ett vertikalt plan, skala den med två punkter, flytta, vrid, tona bort och lås den, se den i 3D och i planens PDF, och behåll den tillsammans med modellen i ett paket.
keywords: bild, bakgrund, PNG, JPEG, WebP, skanning, skiss, foto, flygfoto, situationsplan, skala, opacitet, lås, underlägg, spåra
from: e3c78d1f
---

## Placera en bild

Slå på {{ui:Rita}}, gå till nivån och välj {{ui:Bild}} i menyn {{ui:Bygge}}. Välj sedan {{ui:Infoga bild…}} och välj en PNG-, JPEG- eller WebP-fil. Den läses i din webbläsare och laddas aldrig upp. Den visas under planen, anpassad till vyn, och verktygsfältet säger att den ännu inte är skalad. Allt du ritar ligger ovanpå den.

## Ange skalan

Välj {{ui:Skala}}, klicka på två punkter i bilden vars verkliga avstånd du känner till (två ändar av en vägg på en inskannad plan, ett mått tryckt på en skiss), skriv sedan in avståndet och tryck på {{key:Enter}}. Bilden växer eller krymper kring den första punkten du klickade på. {{key:Esc}} avbryter.

## Klistra in ett kopierat område

I MarkupCraft kopierar {{ui:Kopiera område}} en del av ett PDF-blad som en bild. Tillbaka i BimCraft, med en nivås plan visad, tryck på {{key:Ctrl+V}} (eller {{ui:Klistra in}} i menyn {{ui:Redigera}}): området hamnar på planen som en bild, centrerat där pekaren är (eller mitt i vyn). När bladet hade en ritningsskala kommer området in i sin verkliga storlek, så att en vägg på det är lika lång som dina väggar. Utan skala kommer det in i pappersstorlek och {{ui:Skala}} startar, så att du kan klicka på två punkter och skriva in deras avstånd. Ett område som kopierats som överlägg startar med den opacitet det kopierades med. Det är ett ångra-steg och sparas som vilken bild som helst.

Klistra in tar det du kopierade senast: ett kopierat område eller något du kopierat i BimCraft. {{key:Ctrl+V}} klistrar också in alla andra PNG-, JPEG- eller WebP-bilder på ditt urklipp, placerade som {{ui:Infoga bild…}} och ännu inte skalade. Ett kopierat område minns i sex timmar.

## Flytta, vrid, tona bort, lås

{{ui:Flytta}} tar en baspunkt på bilden och sedan den plats dit den ska. {{ui:Vrid}} tar en vinkel i grader, kring bildens mitt. {{ui:Opacitet}} tonar bort den så att dina linjer sticker ut. {{ui:Lås}} hindrar den från att flyttas medan du ritar; en låst bild låter dig fortfarande ändra opaciteten och dölja den. Varje ändring är ett ångra-steg.

## Flera bilder, flera nivåer

En bild hör till den nivå den placerades på och visas på nivåns plan och takplan. Klicka på en bild för att arbeta med den, eller välj den i listan. {{ui:Dölj}} stänger av den utan att ta bort den; {{ui:Ta bort}} (eller {{key:Delete}}) tar bort den ur modellen.

## Bilder i 3D-vyn

Varje bild står också i 3D-vyn som ett plant plan: en planbild ligger på sin nivå, en bild på ett vertikalt plan står över sin sektionslinje. Den ritas över modellen utan att dölja den, och modellen döljer den del av bilden som är bakom den. Överlappande bilder sorteras efter avstånd. {{ui:Opacitet}}, {{ui:Dölj}}, {{ui:Lås}} och {{ui:Ta bort}} fungerar likadant, och {{ui:Visa i 3D}} stänger av alla planen i enbart 3D-vyn. En nivå rymmer högst 8 bilder, för att vyerna ska vara snabba.

## En bild på ett vertikalt plan

Under {{ui:Placera på}} välj {{ui:Ett vertikalt plan (sektionslinje)}} och sedan {{ui:Infoga bild…}}. Klicka på de två ändarna av en linje på planen (en väggyta-ände fastnar), eller välj en namngiven sektionslinje för nivån i {{ui:Över en sektionslinje}} så behövs inga klick. Bilden står på nivån över den linjen, lika bred som linjen. Ange dess {{ui:Bredd}}, dess plats {{ui:Längs linjen}} och dess {{ui:Höjd över nivå}} genom att skriva; {{ui:Vrid}} vrider den i sitt eget plan. En vertikal bild ritas inte under planen; planen visar dess linje medan du arbetar med den. BimCraft har inget interaktivt 2D-sektionsfönster: sektioner och fasader ritas på bladen, och bilder skrivs ännu inte ut i de bladvyerna.

## Utskrift

{{ui:Utskriftsvy}} på en plan skriver nivåns bilder till PDF-filen under ritningen, i deras skala, vridning och opacitet, beskurna till bladet; en dold bild står utanför. En JPEG läggs in som den är; andra bilder nedskalas först till 200 dpi på bladet.

## Sparas tillsammans med modellen

Bildernas data skrivs inte in i IFC-texten. Modellen hänvisar till varje bild med namn (en IfcDocumentReference såsom pictures/<id>.png) och själva datan följer med i ett projektpaket. Använd {{ui:Spara som paket…}} (eller {{ui:Spara som IFC}} och välj det): du får en .ccbundle-fil med modellen och dess bilder. IFC förblir liten och redigeringar förblir snabba. Öppna .ccbundle så är bilderna tillbaka.

En vanlig .ifc kan inte hålla en bild utan att bli stor. När du sparar en sådan säger BimCraft hur många bilder som hålls utanför den och erbjuder ett paket, eller en vanlig IFC som bäddar in bilderna upp till 512 KB och lämnar resten utanför. En vanlig .ifc som öppnas utan sitt paket visar de bilderna som saknade, och Problem listar dem; öppna den .ccbundle de sparades i. Filer sparade av den första versionen, med bilden inuti IFC, öppnas fortfarande, och en paketsparning flyttar deras bilder utanför. En bild behålls som den är upp till 6 MB; en större görs mindre först, och du får veta det. Andra program öppnar modellen och ignorerar bilderna. En bild du ännu inte skalat listas under Problem som en anteckning.

## I sektions- och fasadblad

En bild på ett vertikalt plan (välj {{ui:Lodrätt}} i bildpanelen och klicka på två ändar av en linje, eller placera den över en namngiven sektionslinje) skrivs ut i de bladvyer som ser rakt på den. En sektion visar en bild som står på sin snittlinje, eller som lagts över den sektionslinjen med namn. En fasad visar varje vertikal bild vars plan vetter mot den. Bilden ritas under vyns linjer, i vyns skala, beskurs till vyn, och behåller sin opacitet. Öppna {{ui:Blad…}} för att se den; bladets PDF bär den som en bild. Sedd bakifrån är en bild spegelvänd, som i 3D. Dolda bilder lämnas utanför.
