---
title: Spremenite lastnost tipa za vse elemente tipa
summary: Ločite lastnosti tipa od lastnosti primerka, spremenite vrednost na tipu, da vsi elementi sledijo, in preverite, da ostane urejanje enega elementa njegovo lastno.
keywords: tip, primerek, lastnosti tipa, družinski tip, skupno, kopija ob pisanju, vsi elementi, množično urejanje, proizvajalec, model
from: bffd8789
---

## Kaj boste naredili

Nastavite proizvajalca na tip vrat, da ga bo vsaka vrata tega tipa prikazovala, nato pa eni vratih dajte lastno požarno odpornost, ne da bi se dotaknili drugih. To prikaže razliko med lastnostmi tipa in lastnostmi primerka v BimCraft.

## Tip ali primerek?

- **Primerek** lastnost pripada enemu elementu: njegova oznaka, njegova številka, njegova soba, njegova lastna požarna odpornost.
- **Tip** lastnost pripada tipu, ki ga deli veliko elementov: proizvajalec, model, širina tipa vrat.

Na plošči {{ui:Lastnosti}} imajo nabori, ki prihajajo iz tipa, za imenom " (type)" in vrstico „Lastnost tipa: sprememba tukaj velja za vse elemente tega tipa.“ Vsi drugi nabori pripadajo samemu elementu. **Tip** v prvem bloku prikaže ime tipa.

## Koraki: spremenite tip

1. Odprite model IFC in kliknite vrata.
2. V prvem bloku plošče {{ui:Lastnosti}} si zapišite njegov **Tip**, na primer „Single-Flush 900 x 2100“.
3. Pomaknite se do nabora, katerega ime se konča z "(type)".
4. Kliknite vrednost, ki jo želite spremeniti, na primer **Manufacturer**.
5. Vnesite novo vrednost in pritisnite {{key:Enter}}.
6. Oglejte si seznam {{ui:Spremembe}}: vnos se konča z "(type)".
7. Kliknite druga vrata istega tipa.
8. Preverite isto vrednost: prikaže tudi novo vrednost.

## Koraki: spremenite samo en element

1. Kliknite ena vrata.
2. Odprite nabor, katerega ime nima "(type)", na primer `Pset_DoorCommon`.
3. Kliknite vrednost, na primer **FireRating**, vnesite novo vrednost in pritisnite {{key:Enter}}.
4. Kliknite vrata poleg, istega tipa.
5. Preverite isto vrednost: še vedno kaže staro vrednost.

Tudi če je izvoznik ta nabor lastnosti delil med obema vratoma, je BimCraft prvim vratom dal lastno kopijo, preden jo je spremenil. Glejte [Zakaj vaše urejanje spremeni samo en element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Shranjevanje

1. Kliknite {{ui:Shrani kot IFC}} ali pritisnite {{key:Mod+S}}.
2. Odprite shranjeno kopijo v BimCraft ali v kateri koli pregledovalnik IFC in preverite obe spremembi.

## Pogoste napake

- **Ne izvozi vsak model tipov.** Nekateri izvozniki ne zapišejo objektov tipov ali vse zapišejo na primerek. Takrat ni nabora "(type)" in vsak element morate spremeniti posebej.
- **Ista vrednost se pojavi v naboru tipa in v naboru primerka.** Nekateri izvozniki zapišejo parameter na obeh mestih. Drugi programi lahko preberejo katerega koli; če želite, da se ujemata, spremenite obe.
- **Pričakovanje, da izberete „vsa vrata tega tipa“ in jih urejate skupaj.** V tej različici ni večkratnega izbora. Lastnost tipa je način, kako spremenite veliko elementov naenkrat.
