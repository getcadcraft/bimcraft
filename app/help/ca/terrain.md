---
title: El terreny de l'obra, la plataforma d'edificació i el paviment
summary: Porteu el terreny al model des de punts topogràfics, corbes de nivell, un escaneig LAS / LAZ, un GeoTIFF, una superfície LandXML (de CivilCraft) o unes quantes cotes puntuals; retalleu-hi la plataforma d'edificació de la casa amb els seus talussos i el desmunt / terraplè; disposeu-hi les entrades de cotxes, els camins i els patis; passeu-ho a CivilCraft com a LandXML.
keywords: terreny, terra, obra, topografia, punts, PNEZD, corbes de nivell, LAS, LAZ, LiDAR, GeoTIFF, DEM, cota, cota puntual, pendent, explanació, plataforma, plataforma d'edificació, desmunt, terraplè, moviment de terres, talús, línia de tall, entrada de cotxes, camí, pati, paviment, LandXML, CivilCraft
from: 208298d6
---

## Què fareu

Situeu la casa al seu emplaçament. El terreny passa a formar part del model: es mostra en 3D, es talla en seccions i alçats, i les corbes de nivell apareixen en el plànol. Sota la casa es talla una plataforma d'edificació, les entrades de cotxes i els camins se n'adapten, i les sabates baixen amb el terreny.

## Porteu el terreny

1. Obriu {{ui:Compilació}} i trieu {{ui:Terreny}}.
2. Feu una de les accions següents:
   - **Obre un fitxer de topografia…**: punts topogràfics (PNEZD, PENZD o simplement est, nord, cota, separats per coma, tabulador o espai), corbes de nivell en un DXF o DWG (polilínies a la seva cota, polilínies 3D), un escaneig LAS o LAZ (es conserven els punts del terreny, reduïts a un per metre quadrat aproximadament), una graella de cotes GeoTIFF o ASCII, o una superfície **LandXML** com les que exporta CivilCraft (es conserven els seus propis punts i triangles; si el fitxer conté diverses superfícies, BimCraft pregunta quina és el terreny; les unitats les agafa del fitxer). Trieu primer les unitats del fitxer (LandXML les indica pel seu compte).
   - O escriviu una **cota puntual** (des del terra d'aquesta planta, així que `-1'` és un peu per sota) i feu clic als punts del plànol, canvieu la cota i feu clic en més punts, i després **Crea el terreny**. Tres punts són suficients per començar.

Les coordenades de topografia molt allunyades del model (sistema de coordenades planes, UTM) es desplacen cap a la casa, i les cotes s'ajusten perquè el terreny de la casa quedi uns 8" per sota del primer pis. **Eleva el terreny** a **Propietats** ho corregeix en la quantitat que calgui.

## La plataforma d'edificació

1. Trieu {{ui:Plataforma d'edificació}}.
2. Definiu el **Marge** al voltant de la casa, a quina distància la **plataforma queda per sota del terra** (8" sota una solera, més sota un espai ventilat) i els **Talussos** cap al terreny existent (`2:1` = dos peus cap enfora per cada peu cap amunt o avall).
3. Feu clic dins de la casa.

El terreny queda anivellat sota la casa i fins al marge, després puja cap al vessant (desmunt) i baixa cap al costat baix (terraplè) fins a trobar el terreny existent. Les **Propietats** del terreny i de la plataforma donen els volums de desmunt i de terraplè. Si moveu els murs, la plataforma els segueix.

## Entrades de cotxes, camins i patis

Trieu {{ui:Paviment}}, seleccioneu **Camí**, **Entrada de cotxes** o **Pati**, i feu clic als cantons. Torneu a fer clic al primer cantó, feu doble clic o premeu {{key:Enter}} per acabar. El paviment segueix la rasant acabada; canvieu-ne el tipus o el gruix a **Propietats**.

## Les sabates segueixen la rasant

Amb el terreny al model, els murs de fonamentació i les sabates de l'espai ventilat sota el forjat el segueixen: al llarg de cada mur, la sabata es manté a la seva profunditat sota el terreny de fora, i fa esglaons de 8" sencers on el terreny baixa (vegeu [Fonaments sota els murs](topic:foundations)).

## Porteu-ho a CivilCraft

**LandXML per a CivilCraft** (a la fila de Terreny, o a les **Propietats** del terreny) baixa el terreny existent i la rasant acabada com a fitxer LandXML. Obriu-lo a CivilCraft per fer l'explanació real, el drenatge i el moviment de terres.

## Cal saber-ne

- El terreny necessita un model IFC4, com tots els edificis nous.
- Les corbes de nivell es mostren al plànol del nivell del terreny, a l'interval definit a les **Propietats** del terreny; cada cinquena és més gruixuda.
- El terreny es desa com un element de terreny IFC (una superfície triangulada tancada, perquè les seccions la puguin tallar); la plataforma i el paviment es desen amb ell. Per començar de nou, suprimiu el terreny: la seva plataforma i el paviment se n'aniran amb ell.
