---
title: Modelio eksportavimas į USD
summary: Atvirus IFC modelius įrašykite kaip USD, skirtą atvaizdavimui, scenos surinkimui ir kitoms 3D programoms, su kiekvieno elemento IFC klase, GlobalId ir savybėmis.
keywords: usd, usda, usdc, usdz, openusd, eksportas, ifc, globalid, savybės, aukštai, disciplinos, scenos surinkimas, archviz, atvaizdavimas
from: 2be5f7b8
---

{{ui:USD}} įrankių juostoje įrašo viską, kas atverta (kiekvieną modelį, susietus modelius ten, kur juos įdėjote), kaip vieną USD failą.

## Eksportas

1. Įrankių juostoje pasirinkite {{ui:USD}}.
2. Pasirinkite {{ui:Tekstas (.usda)}}, {{ui:Dvejetainis (.usdc)}} arba {{ui:Paketas (.usdz)}}.
3. Failas atsisiunčiamas. Būsenos juostoje rašoma, kiek elementų įtraukta.

## Kas yra faile

| IFC modelyje | USD faile |
|---|---|
| Vietovė, pastatas, aukštai | Įdėtos grupės, aukštai pagal aukštį |
| Kiekvienas elementas | Vienas primas po savo aukštu ir disciplina (Architektūra, Konstrukcijos, MEP, Baldai, Teritorija, Erdvės, Kita), su geometrija kaip tinkleliu |
| Klasė, GlobalId, pavadinimas, tipas, žymė | Atributai pavadinti `ifc:class`, `ifc:globalId`, `ifc:name` ir t. t. |
| Savybių ir kiekių rinkiniai | Vienas atributas kiekvienai savybei; ilgiai, plotai ir tūriai metrais, kvadratiniais metrais ir kubiniais metrais |
| Spalvos | Medžiagos (su skaidrumu) |
| Erdvės | Išsaugomos, pažymėtos kaip gairės, kad atvaizdavimo programos jas praleistų |

Geometrija išdėstoma IFC failo koordinatėmis. Išdėstymas atitinka CadCraft pastatams parašytas USD taisykles.
