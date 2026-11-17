---
title: Online och offline
summary: Vad BimCraft hämtar från webbplatsen, hur Spara för offline gör att IFC-modeller och DWG-ritningar öppnas utan anslutning, och varför det du öppnar aldrig laddas upp.
keywords: offline, online, internet, anslutning, inget nätverk, flygplan, platsbesök, spara för offline, redo för offline, ladda upp, integritet, wasm, webassembly, IFC-motor, dwg, moln
from: 39e5c7eb
---

BimCraft läser dina filer i webbläsarfliken. Att öppna, granska, redigera och spara skickar aldrig dina filer någonstans, varken online eller offline. [Arbeta offline](common:offline) förklarar hur offlinekopior fungerar i alla appar; den här sidan beskriver det som är särskilt för BimCraft.

## Vad BimCraft hämtar från webbplatsen

| Del | När den laddas utan en offlinekopia | Storlek |
|---|---|---|
| Appen själv, med 3D-visaren och IFC-motorns kod | När du öppnar BimCraft | Flera megabyte |
| IFC-motorns WebAssembly-del | Den första IFC-filen du öppnar i fliken: "Startar IFC-motorn…" | Cirka 1,6 MB |

DWG- och DXF-ritningar, projekt- och familjefiler och mappar behöver inget extra: deras läsare är en del av appen.

## Spara BimCraft för offlineanvändning

1. Öppna BimCraft medan du är online.
2. Klicka på {{ui:Spara för offline}} i appfältet överst.
3. Titta på knappen när den räknar upp: "Sparar 40 av 212", till exempel. BimCraft-kopian är cirka 11 MB, eftersom den innehåller IFC-motorn.
4. Vänta på {{ui:Redo för offline}}.

När det står {{ui:Redo för offline}} öppnas IFC-modeller, DWG- och DXF-ritningar, projektfiler, mappar och den här hjälpen utan anslutning. Du behöver inte öppna en IFC- eller DWG-fil först för att "värma upp" läsarna.

För att uppdatera eller ta bort kopian klickar du på {{ui:Redo för offline}} och väljer {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}.

## Vad knappen säger

| Knapp | Betyder |
|---|---|
| {{ui:Spara för offline}} | Ingen offlinekopia i den här webbläsaren ännu. Klicka för att spara en |
| "Sparar *n* av *m*" | Sparar; håll fliken öppen tills det är klart |
| {{ui:Redo för offline}} | Sparad. Peka för att se när; klicka för menyn |
| {{ui:Kunde inte spara}} | Några filer hämtades inte. Kontrollera din anslutning och klicka för att försöka igen. Den senaste fungerande kopian, om någon finns, behålls |
| {{ui:Offline inte tillgängligt}} | Det här fönstret kan inte behålla en offlinekopia (ett privat fönster eller en hanterad dator). Se [Arbeta offline](common:offline) |

:::offline
Du är offline.

- Om knappen säger {{ui:Redo för offline}} öppnas varje filtyp som vanligt.
- Om den inte gör det fungerar bara det som fliken redan har laddat: en läsare som aldrig laddades i fliken kan inte starta, och när du öppnar den typen av fil visas ett fel från webbläsaren i statusraden. Ladda inte om fliken förrän du är online igen.
:::

## Vad som aldrig kräver en anslutning

När BimCraft är öppet i fliken fungerar dessa offline även utan en sparad kopia:

- Läsa projekt- och familjefiler och kontrollera mappar.
- Välja element, läsa egenskaper och redigera IFC-värden i en modell som redan är öppen.
- {{ui:Spara som IFC}} och {{ui:Ladda ner CSV}}: båda är nedladdningar gjorda i fliken.

## Vad som inte är tillgängligt ännu

- **Molnsparande.** Filer sparas endast på din dator.

Se [Var dina filer hamnar](common:your-files).
