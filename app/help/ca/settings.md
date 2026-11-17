---
title: Configuració de BimCraft
summary: Trieu si les sales i els espais es mostren, si es dibuixen les arestes i amb quina vista s'obre un model, i comenceu a col·locar amb l'ajust al mur activat.
keywords: configuració, preferències, opcions, espais, sales, ifcspace, arestes, línies, rendiment, model gran, vista d'obertura, càmera, vista superior, ajust al mur, ajust
from: 4416e64f
---

Obriu {{ui:Configuració}} amb l'engranatge de la barra de l'aplicació o amb {{key:Mod+,}}. La primera pestanya, {{ui:BimCraft}}, conté la configuració que pertany a aquesta aplicació; {{ui:General}} conté la que comparteixen totes les aplicacions de CadCraft (tema, barra d'eines, taulers). La configuració de BimCraft només existeix a l'aplicació: la canvieu aquí i aquest navegador la recorda. {{ui:Restableix la configuració de BimCraft}} a la part inferior del diàleg la torna, juntament amb la compartida, als valors inicials.

## Menús, tecles i ratolí

L'estil de menú (la barra d'eines pròpia de BimCraft, una barra de menús de disseny domèstic, una cinta BIM o una línia d'ordres de dibuix), les vostres pròpies tecles i menús, i què fan la roda i els botons del ratolí. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse).

## Quan s'obre un model

- **Mostra sales i espais** (desactivat a l'inici): les sales i els espais són caixes transparents que poden amagar els murs que hi ha darrere, de manera que comencen amagats. El botó {{ui:Espais}} sobre el model encara els activa i desactiva per al model obert.
- **Arestes**: {{ui:Arestes activades}} (l'inici) dibuixa les línies d'aresta que donen l'aspecte de dibuix. {{ui:Només models petits}} les dibuixa només per als models de menys de 300,000 triangles, cosa que fa més ràpid canviar els models grans. {{ui:Arestes desactivades}} obre cada model sense elles. El botó {{ui:Arestes}} encara les activa i desactiva per al model obert. Per sobre d'1.5 milions de triangles, les arestes estan sempre desactivades.

## Els dibuixos s'obren en

Com es mostra per primer cop un dibuix DWG o DXF: {{ui:3D (el més ràpid)}} (l'inici) dibuixa ràpidament fins i tot un dibuix gran, o {{ui:Model (2D)}} obre la vista plana de l'espai model. Les pestanyes sobre el dibuix canvien entre {{ui:Model}}, els fulls i {{ui:3D}} en qualsevol moment. Un dibuix sense res a l'espai model, o un navegador que no pot mostrar 3D, s'obre sempre en 2D.

## Vista d'obertura

La càmera amb què s'obre un model: {{ui:Ajusta}} (l'inici, tot el model des d'una cantonada), {{ui:Superior}}, {{ui:Davant}} o {{ui:Lateral}}. Els botons sobre el model canvien la vista en qualsevol moment.

**Un edifici girat dins del seu solar**: molts models arriben amb l'edifici en angle respecte als eixos del fitxer (en coordenades topogràfiques o compartides). {{ui:Quadrat amb l'edifici}} (l'inici) mostra aquests edificis quadrats: {{ui:Ajusta}}, {{ui:Superior}}, {{ui:Davant}}, {{ui:Lateral}}, les cares del cub de vistes i cada nova secció segueixen els seus murs, i la brúixola del cub de vistes continua apuntant al nord del model. {{ui:Tal com està col·locat en el solar}} manté els eixos del fitxer. Un edifici els murs del qual segueixen els eixos es veu igual en qualsevol dels dos casos.

## Col·locació d'elements de la biblioteca

**Comenceu amb l'ajust al mur activat** (desactivat a l'inici): quan comença la col·locació o l'enganxada d'un element de la biblioteca, el seu darrere s'ajusta al mur més proper, mirant cap a la sala. {{key:Tab}} o {{ui:Ajusta al mur}} a la barra de col·locació el desactiva per al moment. Una planta sense murs comença sense ell.

## Caixa de secció

{{ui:Espai al voltant de la tria}} és l'espai que deixa {{ui:Caixa de secció al voltant de la tria}} a cada costat dels elements triats, en mil·límetres: 300 a l'inici, fins a 5000. Vegeu [Talla un model IFC amb un pla de secció](topic:section-plane).

## Ubicació

{{ui:Latitud i longitud en}} tria el sistema en què {{ui:Mesura}} › {{ui:Ubicació}} dona les latituds i longituds: WGS 84 (EPSG:4326, l'inici, com fan servir el GPS i els mapes web), {{ui:El datum propi del fitxer}}, o un dels ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 i CGCS2000. El sistema de mapes i el datum propis del fitxer també es mostren sempre. Vegeu [Mesura de distàncies, àrees de cara i ubicacions en 3D](topic:measure).

## Indicador de cantonada

El que hi ha a la cantonada inferior dreta de les vistes 3D (un model IFC, i un dibuix canviat a 3D): {{ui:Cub de vistes}} (l'inici), {{ui:Icona d'eixos}} (una X, una Y i una Z petites) o {{ui:Cap}}. Canvia a l'instant. La vista 2D del dibuix mai no en mostra cap.

Al cub de vistes, feu clic en una cara, una aresta o un vèrtex per mirar des d'aquell costat, arrossegueu el cub per orbitar, arrossegueu l'anell per girar i feu clic a la casa per tornar a la vista inicial.

## El vostre nom a les incidències

Amb la sessió iniciada, les incidències porten el nom del vostre compte i BimCraft no en demana cap: aquest apartat mostra {{ui:Des del vostre compte (<name>)}}. {{ui:Usa un altre nom}} obre un camp per a un nom diferent, que preval fins que trieu {{ui:Usa el nom del meu compte}}. Sense la sessió iniciada, el formulari d'incidència demana un nom com abans. Vegeu [Incidències i fitxers BCF](topic:issues-bcf).

## Assistents

**Permet que els assistents d'IA i els scripts utilitzin BimCraft** (desactivat a l'inici) permet que un assistent del vostre ordinador accedeixi al model obert a través de CadCraft Studio: **Llegeix** troba els elements i en llegeix les propietats, **Canvia la vista** els aïlla, els amaga i els mostra. **Activitat** en llista les crides. Vegeu [Deixeu que un assistent d'IA treballi amb el vostre model](topic:assistants).

:::note
Els altres paràmetres s'apliquen quan s'obre un model o comença la col·locació. Un model ja obert manté l'aspecte que tenia fins que useu els botons de la barra d'eines o el torneu a obrir.
:::

## Relacionats

- [Copia, enganxa i duplica elements de la biblioteca](topic:copy-paste)
- [Col·loca equips i mobiliari des de la biblioteca](topic:place-from-library)
- [La pantalla de BimCraft](topic:workspace)
- [Deixeu que un assistent d'IA treballi amb el vostre model](topic:assistants)
