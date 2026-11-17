---
title: Vergelyk 'n skandering met die model en die 4D-skedule
summary: Beoordeel elke element van die model teen 'n oop puntwolk (gebou, gedeeltelik, ontbrekend, nie bereik nie), sien die persentasie gebou, kleur die model daarvolgens, en lys met 'n 4D-skedule gelaai wat agter of voor is op die 4D-dag.
keywords: skandering, puntwolk, vordering, persentasie voltooi, gebou, ontbrekend, agter skedule, voor skedule, 4D, terreinvordering, afwyking, soos-gebou, laserskandering, hommeltuig, vergelyk
from: 6fdc9003
---

Open 'n IFC, open 'n puntwolk langs dit (sien [Puntwolke](topic:point-clouds)) en plaas dit op die model. Die {{ui:Vergelyk die skandering met die model}}-afdeling verskyn in die regterpaneel terwyl 'n wolk oop is.

## Wat dit doen

Druk {{ui:Vergelyk}}. Elke element van die model word beoordeel volgens sy oppervlak, want dit is wat 'n skandeerder sien. Die ses vlakke van sy boks word in selle van ongeveer 20 cm gesny; 'n sel tel wanneer 'n skandeerpunt binne jou {{ui:Toleransie}} (50 mm om mee te begin) van die vlak lê. Die beste groot vlak tel, sodat 'n muur wat van een kant geskandeer is nie gepenaliseer word vir sy ander kant nie.

- **Gebou**: ten minste 40 % van die oppervlak is gesien.
- **Gedeeltelik**: 10 % tot 40 %.
- **Ontbrekend**: minder as dit, maar die skandering bereik die element (punte binne 1.5 m daarvan).
- **Nie bereik nie**: die skandering het nooit daarheen gegaan nie, so niks word daaroor gesê nie.

Vir gebou en gedeeltelik gebou elemente gee dit ook die gemiddelde afwyking van die skandeerpunte van die model se oppervlak, en sê of die element op sy plek is (binne die toleransie), naby (binne drie keer) of af (verder). Dit sien net afwykings tot vyf keer die toleransie: 'n element wat verder van sy plek gebou is as dit, lyk ontbrekend.

Die opsomming gee die persentasie gebou onder die elemente wat die skandering bereik, volgens telling en volume. Gedeeltelik gebou elemente word apart getel en word nie by die gebou-elemente gevoeg nie.

## Teen die 4D-skedule

Met 'n 4D-skedule gelaai (sien [4D-skedule](topic:4d-schedule)), gebruik die resultaat ook die dag wat jy op die 4D-skuifbalk gestel het: elemente wat teen daardie dag verskuldig is en wat die skandering nie as gebou wys nie, is **agter die skedule**; elemente wat nog nie verskuldig is nie maar gebou is, is **voor**. Agter-die-skedule elemente word in {{ui:Probleme}} gelys, en die tabel kan tot hulle gefiltreer word. Sonder 'n skedule word niks oor agter of voor gesê nie.

## Die tabel en die model

Klik op 'n ry om die element te kies. {{ui:Kleur die model}} verf elemente groen (gebou), amber (gedeeltelik), rooi (ontbrekend) of grys (nie bereik nie); {{ui:Eie kleure}} plaas hulle terug. {{ui:Stoor CSV}} skryf die tabel. {{ui:Merk die ooreenstemmende elemente as veldgeverifieer}} merk elke element wat as gebou en binne die toleransie gesien is as veldgeverifieer (LOD 500, metode skandering), in een stap wat jy ongedaan kan maak. Sien [Merk elemente as nagegaan of veldgeverifieer](topic:verification).

:::warning
Dit vergelyk die boks van elke element met skandeerpunte binne 'n toleransie. Dit is **nie 'n opmeting, 'n hoeveelheidsopname of 'n basis vir betaling nie**. 'n Element wat versteek is agter 'n geskandeerde een ('n muur agter 'n voering, 'n vloer onder 'n vloerafwerking) deel sy oppervlak en kan as gebou gelees word; 'n geboë of hellende element het 'n boks groter as sy liggaam en kan as gedeeltelik of ontbrekend gelees word. Kyk na die lys voordat jy daarop optree. Vergunningskommentaar en vorderingsnotas is nie deel hiervan nie: hulle bly in die kolomme waar jy hulle hou.
:::

'n Assistent kan dieselfde vergelyking uitvoer met die {{ui:Vergelyk die skandering met die model}}-gereedskap; dit verander niks in die model nie.
