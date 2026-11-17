---
title: PV-sonkragskikkings, skaduwee en opbrengs
summary: Pas sonkragskikkings op dakke of die grond, skadu hulle uit die model, skat jaarlikse energie, bepaal stringgroottes en maak die enkellyndiagram-data. Alle insette word gewys en die beginmodule en verliese is generies.
keywords: sonkrag, pv, fotovoltaïes, skikking, module, dak, skaduwee, opbrengs, kwh, kwp, stringgrootte, omsetter, enkellyn, enkele lyn, helling, asimut, ryafstand
from: adf4aaf3
---

## Wat jy gaan doen

Maak die **Sonkrag-PV**-paneel oop. Kies 'n dakvlak (sy helling en rigting word uit die model gelees) of lê 'n grondskikking met 'n helling en rigting; die modules word binne met terugtrekkings gepas en getel, wat die DC-krag in kWp gee. Die plasing van die skikking skryf dit in die model as sonelemente, in een ontdoen-stap.

## Skaduwee, opbrengs en stringe

- **Skaduwee** stuur 'n straal van elke module na die son vir tipiese dae van elke maand teen die model se eie geometrie, sodat naburige geboue, borsweringe en die rye voor dit tel. Net die direkte sonlig word verminder, en 'n gedeeltelik beskaduwee skikking verloor krag eweredig.
- **Opbrengs** gee kWh per maand en jaar, kWh per kWp, en die prestasieverhouding. Die son kom uit jou eie maandelikse totale op 'n horisontale oppervlak as jy hulle tik. Sonder hulle gebruik die paneel 'n helder-lug bopunt, en sê dit. **Haal die klimaat by NASA POWER** met 'n knoppie op die Opbrengs-oortjie: dit stuur net die terrein se breedte- en lengtegraad, een keer, en hou die antwoord op hierdie rekenaar (nagegaan vanaf die blaaier op 2026-10-30). PVGIS laat nie 'n webblad toe om sy antwoord te lees nie, so die oortjie gee 'n skakel wat PVGIS se maandelikse data vir die terrein in 'n nuwe oortjie oopmaak; plak wat dit wys in die blokkie, en die twaalf maande vul in.
- **Stringe** toets modules per string teen die omsetter se spanningsvenster op die koudste en warmste dag, en die parallelle stringe teen sy stroom.
- **Enkellyn** maak die diagramdata (skikking, kombineerder, skeidsel, omsetter, paneel, nutsdiens) met draad- en sekeringgroottes uit die faktore wat jy tik. Dit is data en 'n SVG; die Elektriese byvoeging in CadCraft kan dit as simbole plaas.

Die module-, omsetter-, verlies- en draadfaktore wat met BimCraft kom, is generiese voorbeelde, en elke resultaat merk hulle so. Tik die vervaardiger se data en die kodewaardes waarvoor jy ontwerp, en laat die ontwerp nasien deur die persoon wat daarvoor verantwoordelik is.
