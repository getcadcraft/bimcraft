---
title: Wys en verberg verdiepings, ruimtes en rante
summary: Skakel verdiepings af om binne 'n gebou te sien, wys vertrekke en ruimtes, en skakel die randlyne aan en af.
keywords: verdiepings, vlakke, vloere, verberg, isoleer, vertrekke, ruimtes, ifcspace, rante, sigbaarheid, snit
from: b838dcc0
---

## Wat jy sal doen

Kyk binne 'n IFC-model deur die verdiepings bo die een waarin jy belang stel af te skakel, wys dan die vertrekke en ruimtes, en skakel die randlyne af vir 'n skoner aansig.

## Stappe: kyk na een vloer

1. Open 'n IFC-model. Sien [Open 'n IFC-model en kyk rond in 3D](topic:open-ifc-model).
2. Vind die {{ui:Verdiepings}}-lys aan die linkerkant. Die boonste verdieping is eerste, soos wanneer 'n snit van die dak af gelees word.
3. Ontmerk die dak en elke verdieping bo die vloer wat jy wil hê.
4. Klik {{ui:Bo}} om op daardie vloer af te kyk.
5. Merk die verdiepings weer aan om hulle terug te sit.

## Wat jy behoort te sien

Elke verdieping wat jy ontmerk, verdwyn onmiddellik, met alles daarop. Die lys wys net verdiepings wat iets sigbaars bevat. Elemente wat aan geen verdieping toegewys is nie, word onderaan as **Nie op 'n verdieping** saamgegroepeer; terrein-elemente en sommige meubels beland dikwels daar.

## Stappe: wys vertrekke en ruimtes

1. Klik {{ui:Ruimtes}} in die werkbalk bo die model. Die knoppie bly ingedruk.
2. Kyk na die model: vertrekke en ruimtes verskyn as bleek, deursigtige volumes.
3. Klik op 'n ruimte om sy eienskappe te lees, soos sy naam, nommer en oppervlakte, aan die regterkant.
4. Klik {{ui:Ruimtes}} weer om hulle te verberg.

Ruimtes word verberg wanneer 'n model oopmaak, omdat hulle anders die mure en vloere sou bedek.

## Stappe: rante

1. Klik {{ui:Rante}} om die dun randlyne af te skakel.
2. Klik weer om hulle terug aan te skakel.

By baie groot modelle (meer as 1,5 miljoen driehoeke) is die knoppie grys, met die wenk "Rante is af vir baie groot modelle". Dit spaar geheue.

## Algemene foute

- **Ontmerk 'n verdieping en steeds dele daarvan sien.** 'n Element behoort aan die verdieping waaraan die uitvoerprogram dit toegewys het. 'n Hoë muur of 'n trap behoort dikwels net aan sy basisverdieping, so dit bly wanneer die verdieping hierbo verberg is, of verdwyn saam met die verdieping onder.
- **Verdiepings verberg om binne te sien.** 'n Snitboks is dikwels vinniger: sien [Sny 'n IFC-model met 'n snitvlak](topic:section-plane#a-section-box). Jy kan ook rye in die {{ui:Modelboom}} ontmerk (sien [Vind jou pad met die modelboom](topic:model-tree)).
- **Op 'n ruimte deur 'n muur klik.** Klik kies die naaste sigbare oppervlak. Verberg die verdieping hierbo, of skakel oor na {{ui:Bo}}, en klik dan.
- **Verdiepingname lyk vreemd.** BimCraft wys die verdiepingname wat in die lêer gestoor is. As hulle "Level 1" of 'n nommer sê, is dit wat die uitvoerder geskryf het.
