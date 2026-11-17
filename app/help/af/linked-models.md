---
title: Koppel ander modelle vir koördinasie
summary: Wys 'n ander IFC-model langs jou eie by verwysing (nooit saamgevoeg nie), plaas dit volgens gedeelde koördinate, kaartkoördinate of twee punte, vang daaraan vas terwyl jy teken, en herlaai dit wanneer die lêer verander.
keywords: koppel, gekoppelde model, verwysing, xref, koördinasie, federasie, struktuur, MEP, konsultant, gedeelde koördinate, opmeting, kaartkoördinate, herlaai, ontlaai, dokumentverwysing, IfcDocumentReference
from: 3e0f1eab
---

## Wat jy gaan doen

Teken teen 'n konsultant se model (die struktuur, die dienste, die bestaande gebou) sonder om iets in jou eie lêer te kopieer.

'n **Gekoppelde model** word in die 3D-aansig gewys en op jou planne gesny, maar dit word nooit verander of in jou model gestoor nie. Jou model hou net die skakel: die lêer se naam en waar dit inkom.

## Koppel 'n model

1. In die linkerpaneel se afdeling {{ui:Gekoppelde modelle}} klik jy {{ui:Koppel 'n model…}} en kies die IFC-lêer. Dit wys dadelik, en die ry daarvan sê **Gewys**.
2. Kies waar dit inkom in {{ui:Plasing}}:
   - **Gedeelde koördinate** (om mee te begin): die koördinate daarvan is joune, soos wanneer albei modelle vanaf dieselfde oorsprong uitgesit is.
   - **Kaartkoördinate**: die kaartkoördinate van albei lêers belyn hulle. Albei moet 'n kaartomskakeling hê; BimCraft sê so wanneer een nie een het nie.
   - **Volgens twee punte…**: klik 'n punt op die gekoppelde model, en dan waar dit in joune inkom; dan 'n tweede paar. Die skakel word geskuif en gedraai (om die vertikale) om te pas.
3. Elke skakel- en plasingsverandering is een stap: {{key:Mod+Z}} neem dit terug.

## Werk daarmee

- Die planne wys die gekoppelde model gesny by die vlak se snithoogte as dun lyne, en die {{ui:Muur}}-gereedskap en die ander tekengereedskap vang aan sy hoeke en rande vas.
- Kies sy elemente in die 3D-aansig om hul eienskappe te lees. 'n Gekoppelde model is nooit die een wat jy wysig nie, dus is sy radioknoppie in {{ui:Modelle}} af.
- **Het die lêer verander?** Wanneer die blaaier die lêer kan dophou ('n lêer wat deur sy lêerkieser oopgemaak is, of in Studio), herlaai BimCraft die skakel self 'n paar sekondes nadat die lêer weer gestoor is, en sê dit so. Anders klik {{ui:Herlaai}}.
- {{ui:Ontlaai}} verberg dit en maak geheue vry; die skakel bly in jou model. {{ui:Laai…}} wys dit weer (jy kies die lêer: 'n blaaier kan nie 'n lêer op sy eie volgens naam oopmaak nie).
- Die × verwyder die skakel uit jou model.

## Wat jy behoort te sien

- In jou IFC-lêer: 'n IfcDocumentReference vir elke skakel (die lêer se naam), verbind met die projek, en waar dit inkom in die projek se eiendomstel CadCraft_Links. Wanneer jy jou model weer oopmaak, lys dit sy skakels as **Nie gelaai nie** totdat jy hulle laai.

:::note
Botsingskontroles, Vergelyk en Soek kan 'n gelaaide skakel gebruik soos enige ander oop model: sien [Sien verskeie IFC-modelle saam](topic:several-models).
:::
