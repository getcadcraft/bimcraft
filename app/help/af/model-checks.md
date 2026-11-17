---
title: Kontroleer 'n model vir algemene probleme
summary: Vind elemente wat 'n eienskap mis wat jy nodig het, GlobalIds wat twee keer gebruik word, elemente op geen verdieping nie en kopieë wat op mekaar gestapel is.
keywords: kontroleer, modelkontrole, validering, qa, kwaliteit, ontbrekende eienskap, vereis, duplikaat, globalid, guid, verdieping, gestapel, oorvleuel
from: 4d835513
---

## Wat jy gaan doen

Kyk 'n model deur voordat jy dit aan iemand anders oorhandig: die probleme wat rooster, hoeveelhede en ander mense se sagteware breek.

## Stappe

1. Maak 'n IFC-model oop.
2. Maak {{ui:Model checks}} in die linkerpaneel oop.
3. Onder {{ui:Required properties}} is 'n reël reeds daar (enige klas, Naam). Verander die klas (of {{ui:Any class}}) en eienskap, of klik {{ui:Add a property}} vir 'n ander reël; die x verwyder een. 'n Element misluk 'n reël wanneer die eienskap ontbreek of leeg is. Die reëls bly in hierdie blaaier vir elke model.
4. Klik {{ui:Run checks}}.
5. Klik op 'n resultaat om daardie elemente te kies en daarheen te zoem.

## Wat jy behoort te sien

- **Vereiste eienskap ontbreek**: elke reël met die elemente wat geen waarde daarvoor het nie.
- **GlobalId twee keer gebruik**: elemente wat een GlobalId deel. Ander sagteware behandel hulle as een element.
- **Op geen verdieping nie**: elemente met 'n vorm wat geen verdieping bevat nie.
- **Kopieë op mekaar**: elemente van dieselfde klas en tipe met dieselfde vorm op dieselfde plek, wat dubbel in hoeveelhede tel.

Elke reël in die resultate is 'n knoppie: klik daarop om daardie elemente te kies en daarheen te zoem. Slegs die eerste 50 groepe van 'n kontrole word gelys. Dieselfde bevindings verskyn ook in {{ui:Problems}}.

## Goed om te weet

- Kontroles kyk na die aktiewe model wanneer verskeie oop is. Sien [Sien verskeie IFC-modelle saam](topic:several-models).
- Na 'n redigering, voer die kontroles weer uit.
- In die {{ui:Problems}}-paneel volg lengtes, oppervlaktes en volumes in 'n probleem se woorde die {{ui:Units}} wat in die werkbalk gekies is ('n "800 mm"-deur lees 2'-7 1/2" in voet en duim); verander die eenheid, en die paneel skryf hulle weer.

## Volgende

- [Ouditeer die model: vertrekke, etikette, LOD, botsings en koppelvlakke](topic:audit-the-model)
- [Vind elemente volgens klas, naam of eienskap](topic:find)
- [Skrap, sny, kopieer en plak elemente](topic:copy-paste)
