---
title: Connecta canonades i conductes als equips
summary: Comença o acaba una canonada o conducte en un port perquè prengui la mida i el sistema del port i quedi fixat a ell, i després comprova les connexions: ports oberts, incompatibilitats de mida i de sistema, i trams sense font.
keywords: mep, connectar, connexió, connexions, port, ports, port obert, incompatibilitat de mida, incompatibilitat de sistema, font, revisa les connexions, fixat, segueix, mou l'equip, ifcrelconnectsports, coordinació
from: 29144fb0
---

## Què faràs

Uniu els trams als equips perquè el model sigui un sol sistema connectat: la sortida d'una bomba amb la canonada que en surt, el coll d'un difusor amb el seu conducte de branca. Després deixeu que BimCraft llisti el que no està unit.

## Dibuixa des d'un port

1. Trieu {{ui:Tub}} o {{ui:Conducte}}.
2. Moveu el punter sobre un port d'un equip (els petits cercles; un port obert es dibuixa amb el color d'avís). El punter s'ajusta a ell i diu **en un port**.
3. Cliqueu: el tram comença a l'alçada del port i **pren la seva mida i sistema** (una canonada també pren el material habitual del sistema). La línia d'estat diu què ha pres.
4. Continueu dibuixant com de costum. Acabar un tram en un altre port fixa també aquest extrem.

L'extrem d'un tram en un port és **fixat** a ell: mogueu o gireu l'equip (a Propietats) i l'extrem del tram el segueix; editeu el tram i aquell extrem es queda al port. Les altres cantonades del tram es queden on són, de manera que després d'un moviment gran el primer tram pot desprendre's del port en angle: mogueu també la cantonada següent.

## Revisa les connexions

Obriu {{ui:Compilació}} i cliqueu {{ui:Revisa les connexions}}. La llista sota la barra mostra:

| Línia | Què vol dir |
|---|---|
| Un port no està connectat | Un equip té una connexió a la qual no s'ha dibuixat res |
| Res a l'extrem | Un tram acaba a l'aire |
| Ports units de mides diferents | Un tram d'una mida es troba amb un port o tram d'una altra sense reductor (la mida nominal d'una canonada, la forma i els costats d'un conducte) |
| Ports units de sistemes diferents | Per exemple, un conducte de retorn en un difusor d'impulsió |
| Una canonada unida a un conducte | Es troben dues connexions de tipus diferent |
| Cap equip de la seva xarxa no el subministra | Res al que un tram està unit, per lluny que sigui, té una sortida. No es comprova això als desguassos, pluvials ni ventilacions: la seva aigua ve dels aparells |
| Fixat a un port d'un equip que ja no és al model | L'equip s'ha suprimit; torneu a dibuixar l'extrem o suprimiu el tram |

Els errors van primer. Cliqueu una línia per seleccionar el que nomena. {{ui:Tanca}} amaga la llista. La comprovació llegeix el model tal com està dibuixat: revisa connexions i mides, mai cabals, pressions ni equilibri.
