---
title: Revisa el model amb un casc de RV
summary: Passegeu pel model IFC a mida real amb un casc de RV: salteu, gireu, mesureu, talleu-lo obert, col·loqueu incidències amb una imatge, veieu-lo com un model de taula, i trobeu els altres d'una sessió en directe.
keywords: vr, realitat virtual, casc, webxr, xr, immersiu, quest, oculus, vive, index, pico, passeig, recorregut, teletransport, revisió de disseny, coordinació, revisió, mesura, secció, tall, incidència, incidències, bcf, taula, model a escala, presència, avatars, en directe, junts
from: 8994b36d
---

{{ui:VR}} a la barra d'eines us posa dins del model amb un casc de RV, a mida real. Us situeu on és la càmera de la vista 3D, a terra sota ella, mirant cap a la mateixa banda. El casc mostra el que mostra la vista 3D: les plantes, els elements i els models amagats es queden amagats, i els materials pintats es porten. No es puja res: el navegador ho dibuixa en aquest ordinador (o al navegador del propi casc).

## Què necessiteu

- Un casc que el navegador pugui controlar (WebXR): el navegador propi d'un casc autònom, o Chrome o Edge en un PC amb un casc connectat.
- Un model IFC obert, en una pàgina segura (https), com ho és en aquest lloc.

Quan no hi ha casc, {{ui:VR}} apareix en gris i diu per què.

## Inici

1. Poseu la vista 3D on voleu començar: en una sala, o fora mirant l'edifici.
2. Cliqueu {{ui:VR}} a la barra d'eines.
3. Poseu-vos el casc.

El menú és al dors de la mà esquerra. Apunteu-lo amb el comandament dret i premeu el gallet per triar un botó. (Amb una sola mà, el menú flota davant d'on vau començar.)

## Moure's

- **Saltar:** a {{ui:Mou}}, apunteu a un terra i premeu el gallet; aterreu allà. O empenyeu la palanca endavant per apuntar, i deixeu-la anar per saltar. Només podeu aterrar a terres, forjats i terreny (superfícies que miren cap amunt), mai a un mur.
- **Girar:** empenyeu la palanca a l'esquerra o a la dreta: gireu 30° cada vegada.
- **Caminar:** a la vostra àrea de joc, simplement camineu.

## Mesurar

Trieu {{ui:Mesura}}, i després premeu el gallet en dos punts. La distància es mostra entre ells, en metres. Un punt a prop d'una cantonada s'ajusta a la cantonada.

## Talleu-ho obert

Trieu {{ui:Secció}} i premeu el gallet sobre una superfície:

- sobre un mur (o qualsevol cosa que no sigui un terra): tot el que hi ha entre vosaltres i aquella superfície es talla, de manera que hi veieu a dins. Això funciona millor des de fora, o a través d'una sala;
- sobre un terra, des de dalt: una planta tallada a 1,2 m sobre aquell terra, de manera que els murs mostren la part inferior.

{{ui:Neteja}} treu el tall i els mesuraments. Si un [pla de secció](topic:section-plane) talla el model quan comenceu, el casc comença amb ell.

## Col·locar una incidència

Trieu {{ui:Incidència}} i premeu el gallet on hi ha el problema. Un pin numerat el marca, i la incidència va a la pestanya {{ui:Incidències}} com a tema BCF, amb una imatge del que vau veure i la càmera on vau estar, a les coordenades pròpies del model. Deseu-les amb la resta de les vostres [incidències](topic:issues-bcf) com a fitxer BCF; altres eines de coordinació les obren a la mateixa vista.

Afegiu un comentari a una incidència després de sortir de la RV, a la pestanya Incidències: escriure al casc encara no està implementat.

## Veure-ho com un model de taula

{{ui:Sobre de taula}} encongeix el model perquè càpiga en una taula davant vostre; camineu al seu voltant, o gireu-lo amb la palanca. {{ui:Mida real}} us torna a posar on éreu.

## Amb altres, en directe

En una [sessió en directe](topic:work-live), tothom a la RV veu els altres com un cap i dues mans del seu color, amb el seu nom, i un punt on cadascun apunta. Les edicions de qualsevol arriben al vostre casc en un moment. Les persones a l'escriptori encara no es mostren al casc.

## Sortir

Trieu {{ui:Surt de la RV}} (o treieu-vos el casc i acabeu-ho allà). La vista 3D de la pantalla es mou on era el vostre cap.

:::note
Provat amb un emulador de casc, encara no en tots els cascs. Un model gran pot fer que el casc vagi a batzegades: amagueu primer les plantes o els models que no necessiteu ([amaga i aïlla](topic:hide-and-isolate)).
:::
