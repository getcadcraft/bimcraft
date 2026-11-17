---
title: Enheter vid import: en fil anger sina enheter, eller så tillfrågas du först
summary: När en fil du hämtar in anger sina enheter använder BimCraft dem och säger det. När den inte gör det frågar BimCraft innan något placeras och minns ditt svar för den filen.
keywords: enheter, import, öppna, OBJ, STL, DWG, DXF, IFC, punktmoln, biblioteksobjekt, millimeter, meter, tum, fot, skala, fel storlek, för stor, för liten, 1000 gånger, fråga, ihågkommen
from: f044e9bc
---

## Vad du gör

Hämta in en fil och se till att den kommer in i rätt storlek.

## Steg

1. Öppna eller lägg till filen som vanligt: {{ui:Öppen}}, bibliotekets {{ui:Filer}}, {{ui:Punktmoln}} eller Bygg › Från en ritning.
2. Om filen anger sina enheter frågas ingenting. Statusraden säger vilka enheter filen anger.
3. Om den inte gör det visar en dialogruta frågan **Enheter för** filen. Välj vad en enhet i filen är och klicka på {{ui:Använd dessa enheter}}. Inget placeras innan du har svarat.
4. {{ui:Avbryt}} (eller {{key:Esc}}) hämtar inget.

## Vilka filer anger sina enheter

- **IFC**: anger sin längdenhet, och "Öppnad" säger vilken. En IFC som inte anger någon frågas innan den öppnas; ditt svar skrivs in i modellen, så filen anger den när du sparar.
- **DWG och DXF**: ritningens infogningsenheter. En ritning utan dem frågas (bibliotekets filer, Bygg › Från en ritning, terräng från höjdkurvor).
- **Punktlistor** för terräng: anger inga enheter. Du tillfrågas.
- **Punktmoln**: LAS och LAZ med ett koordinatsystem, E57, PTX och PLY anger sina. Andra frågas.
- **OBJ och STL**: anger aldrig enheter. Du tillfrågas.
- **glTF och GLB**: meter, enligt formatets egen regel.
- **Bilder**: har ingen egen storlek. En bild anpassas till vyn och du ställer in dess storlek med Skala med två punkter. Storleken du anger minns för den filen: placeras den igen kommer den in i den storleken, och statusraden säger det.
- **Tillägget Punktmoln**: frågar när du bygger ett moln vars fil inte anger någon enhet, och märker molnets värden med den enhet det bär.

## Bra att veta

- Svaret minns för filen (dess namn, storlek och datum) på den här datorn, i alla CadCraft-appar. Nästa gång samma fil hämtas in frågas du inte, och statusraden säger att de ihågkomna enheterna användes.
- För att bli tillfrågad igen: kommandopaletten ({{key:Mod+K}}) › **Fråga igen om enheterna för importerade filer**.
- En enhetslista som en import redan har (bibliotekets Enheter, molnradens Enheter, Ritningsenheter i Från en ritning) ändrar fortfarande enheterna efteråt. Terrängverktygets Enheter-lista är nu bara det som frågan börjar på.
