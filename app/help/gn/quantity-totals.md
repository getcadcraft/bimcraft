---
title: Cantidadkuéra mbohapy, elementokuéra lista ha espacio planilla
summary: Elemento mboyve ha longitud, superficie, volumen térã número propiedad mbohapy, propiedad peve grupo; elemento peteĩ fila-pe lista; térã espacio planilla superficie ha volumen ndive. Cada uno CSV-pe ojejuhu.
keywords: cantidad, cantidades, cómputo, totales, suma, planilla, lista de cantidades, boq, qto, csv, agrupar por, contar, longitud, superficie, volumen, espacios, habitación, planilla de habitaciones, planilla de superficies, lista de elementos
from: e2e7210c
---

## Mba'épa ojapóta

Ejeike totales modelo-gui: pared longitudes piso peve, puerta mboyve tipo peve, losa volumen material peve, zona mboyve costo.

## Pasokuéra

1. Ejeike IFC modelo.
2. Eiporavo {{ui:Quantity totals}} ñe'ẽ panel-pe.
3. {{ui:Count}}-pe eiporavo {{ui:Every element}} térã ojeikuaáva.
4. {{ui:Group by}} pype eiporavo propiedad, ejemplo {{ui:Class}}. Clic {{ui:Add a group}} ojehepyta haguã, mbohapy peve, ejemplo {{ui:Storey}} peve.
5. {{ui:Add up}} pype tiká número ojeikuaáva mbohapy haguã. Modelo cantidad conjuntokuéra tikakuaa oñepyrũ.
6. Clic {{ui:Download CSV}} tabla planilla-pe ejeike haguã.

## Mba'épa ehecha

- Grupo fila-pe mboyve elemento ha mbohapy cada uno, ha total fila.
- Valor ndoguerekóva elemento oñemboyve, ha ndaipórã ojehepyta. Upéicha ojehecha jave, CSV-pe "left out" columna total ryepýpe ohechauka mboyve.
- Número archivo-pe unidad-pe, archivo oñeguardáva, heta longitud milímetro-pe.

## Fila elemento peteĩ, térã espacio

Cambia {{ui:Show}}:

- **Elemento peteĩ fila**: cada elemento peteĩ fila, propiedad {{ui:Columns}} pype ha número {{ui:Add up}} pype. CSV-pe cada elemento GlobalId ojepyrũ. Fila primer valor clic-gui elemento ojeikuaa.
- **Espacios**: cada habitación hese número, réra, piso, superficie ha volumen, ha totales. Superficie ha volumen espacio cantidades-gui, archivo ohaiva ramo. Archivo ndoguerekóiramo, espacio forma-gui m² ha m³ peve ojemedi ha italic-pe ohechauka; CSV ohechauka mbaʼéichapa.

## Ojehupytýva

- [Elementos ojehupy clase, réra térã propiedad peve](topic:find)
- [Elementos color propiedad peve](topic:color-by-property)

## Infraestructura (IFC 4.3)

Vista lista-pe **Infraestructura (IFC 4.3)** eiporavo, ohechauka ruta, tren, puente ha marina obrakuéra clase ha tipo peve, archivo ohaíva longitud, superficie ha volumen ndive. Archivo ndohaíva cantidad ndojeikuaáva ojehecha'ỹ, ndojejapo'ỹ. **Enviar cantidades de infraestructura a TakeoffCraft** ojapo `.quantities.json` archivo, TakeoffCraft-pe tipo cantidades-pe ojeike.
