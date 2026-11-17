---
title: Exportera modellen som USD
summary: Skriv de öppna IFC-modellerna som USD för rendering, scenmontering och andra 3D-program, med varje elements IFC-klass, GlobalId och egenskaper.
keywords: usd, usda, usdc, usdz, openusd, export, ifc, globalid, egenskaper, våningsplan, discipliner, scenmontering, archviz, rendering
from: 2be5f7b8
---

{{ui:USD}} på verktygsfältet skriver det som är öppet (varje modell, sammanslagna modeller där du placerade dem) som en USD-fil.

## Exportera

1. Välj {{ui:USD}} på verktygsfältet.
2. Välj {{ui:Text (.usda)}}, {{ui:Binärt (.usdc)}} eller {{ui:Paket (.usdz)}}.
3. Filen laddas ner. Statusfältet säger hur många element som kom med.

## Vad som finns i filen

| I IFC-modellen | I USD-filen |
|---|---|
| Platsen, byggnaden, våningsplan | Kapslade grupper, våningsplan i ordning efter höjd |
| Varje element | En prim under sitt våningsplan och sin disciplin (Arkitektur, Konstruktion, MEP, Inredning, Tomt, Utrymmen, Övrigt), med sin geometri som nät |
| Klass, GlobalId, namn, typ, tagg | Attribut med namnen `ifc:class`, `ifc:globalId`, `ifc:name` och så vidare |
| Egenskaps- och mängduppsättningar | Ett attribut per egenskap; längder, areor och volymer i meter, kvadratmeter och kubikmeter |
| Färger | Material (med transparens) |
| Utrymmen | Behålls, markerade som guider så att renderare hoppar över dem |

Geometrin ligger i IFC-filens egna koordinater. Layouten följer CadCrafts skrivna USD-konventioner för byggnader.
