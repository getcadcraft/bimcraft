---
title: Kontroleer 'n vouer vir beskadigde kopieë, ontbrekende skakels en oorblyfsels
summary: Gebruik die vouerverslag om afgesnyde modellêers op te spoor, die nuutste volledige rugsteun te kies, te sien watter skakels ontbreek, en slot- en tydelike lêers raak te sien.
keywords: gesondheidstoets, beskadig, korrup, onvolledig, afgesny, rugsteun, ontbrekende skakels, xref ontbreek, oudit, oorblyfsels, slotlêers, dwl, bak, oorhandiging
from: 3025a539
---

## Wat jy gaan doen

Kontroleer 'n projekvouer voordat jy dit oorhandig of daaraan begin werk: is elke model volledig, watter rugsteun is die laaste goeie een, en is al die gekoppelde lêers daar?

## Stappe: beskadigde kopieë

1. Maak die projekvouer oop. Sien [Maak 'n hele projekvouer oop](topic:open-project-folder).
2. Lees die notas onder die vouernaam. "2 lêers is onvolledig of onleesbaar. Sien die modelle hieronder." beteken daar is iets om na te kyk.
3. Kyk in **Modelle** na die **Status**-kolom. **Volledig** is goed. 'n Amber "1 onvolledig" beteken een kopie is sleg, maar 'n ander is gesond. 'n Rooi **Onvolledig** beteken geen gesonde kopie is gevind nie.
4. Maak **Alle … kopieë** oop onder 'n model met 'n probleem. Dit lys die hoofl êer en elke genommerde rugsteun, nuutste eerste, met grootte, datum en status.
5. Lees die nota bo die lys, byvoorbeeld "Tower.rvt is onvolledig (183.2 MB, moet ten minste 214.0 MB wees). Die kaart wys die nuutste volledige kopie, Tower.0012.rvt (3 Mrt 2025)."
6. Klik op die kopie wat jy wil oopmaak. Slegs volledige kopieë kan geklik word.

## Wat die gesondheidstoets doen

Elke kopie van elke model kry 'n vinnige toets van sy kop, 512 grepe elk, so selfs 'n vouer met groot modelle word binne sekondes getoets. 'n Lêer waarvan sy eie indeks verby sy einde wys, is afgesny terwyl dit gekopieer, opgelaai of gesinkroniseer is. 'n Wolkskyflêer wat steeds "online only" is, lyk net so.

Die kaart vir elke model word uit die hoofl êer gelees wanneer dit gesond is, en uit die nuutste gesonde rugsteun wanneer dit nie is nie.

## Stappe: ontbrekende skakels

1. Soek die nota "*n* gekoppelde lêers is nie in hierdie vouer nie." onder die vouernaam.
2. Rol na **Gekoppelde en verwysde lêers**. Ontbrekende skakels word eerste gelys.
3. Lees die **Waar**-kolom vir elke skakel:
   - **In hierdie vouer**: gevind by die pad wat die model gestoor het.
   - **Dieselfde naam gevind**: 'n lêer met dieselfde naam is elders in die vouer. Kontroleer dat dit die regte een is.
   - **Biblioteeklêer**: 'n sleutelnota- of samestellingskodetabel. Hulle kom saam met die program op elke rekenaar, so hulle word nie in die vouer verwag nie.
   - **Nie in hierdie vouer nie**: nêrens in die vouer gevind nie.
4. Lees **Gebruik deur** om te sien watter modelle elke lêer koppel.

BimCraft soek vir elke skakel eers volgens sy relatiewe pad, dan volgens die einde van sy gestoorde pad (so word `\\server\jobs\Tower\Cad\X-Refs\site.dwg` by `X-Refs/site.dwg` gevind wanneer jy die `Cad`-vouer gekies het), en dan volgens lêernaam êrens in die vouer.

## Stappe: oorblyfsels

1. Rol na **Eenkant gesit** aan die einde van die verslag.
2. Lees die drie lyne wat dalk verskyn:
   - Huishoudingsvouers (`*_backup`, `*_log`, `Revit_temp`): word nie gelees nie.
   - Slot-, logboek- en rugsteun-oorblyfsels: lêers soos `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Dit word agtergelaat deur programme wat geval het of oop was toe die vouer gekopieer is. Dit is gewoonlik veilig om uit te vee sodra niemand die lêers oop het nie.
   - Ander lêers: alles anders wat BimCraft nie lees nie.

## Algemene foute

- **Om die beskadigde hoofl êer uit te vee voordat 'n goeie rugsteun gestoor is.** Kopieer eers die nuutste volledige rugsteun, en hanteer dan die beskadigde lêer.
- **Om "Dieselfde naam gevind" blindelings te vertrou.** Twee verskillende tekeninge kan 'n naam deel. Maak albei oop as jy twyfel.
- **Om te dink 'n ontbrekende biblioteeklêer is 'n probleem.** Sleutelnota- en samestellingskodetabelle woon saam met die program op elke rekenaar.
- **Die lêertelling verskil tussen blaaiers.** In Firefox en Safari gee {{ui:Maak 'n vouer oop}} elke lêer oor, insluitend dié binne huishoudingsvouers, so die telling (en die 20,000-lêerlimiet) sluit hulle in. Om die vouer in te sleep, slaan hulle oor, soos Chrome en Edge doen. Die verslag is andersins dieselfde.
