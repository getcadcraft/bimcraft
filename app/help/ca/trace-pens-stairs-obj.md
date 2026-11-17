---
title: Calcar un nivell, definir plomes per vista, dibuixar una escala a partir d'un croquis, obrir un OBJ
summary: Mostrar un altre nivell en discontinu sota la planta i alinear-lo, donar als murs, portes i finestres la seva pròpia ploma en una vista, dibuixar una línia de recorregut per obtenir una escala, i obrir una malla Wavefront OBJ.
keywords: calc, referència de calc, fons, ploma, gruix de línia, tipus de línia, substitució, escala, croquis, replà, OBJ, malla, importació, Wavefront
from: 333ebbde
---

## Calca un nivell

Trieu {{ui:Calca}} al menú {{ui:Compilació}} i, després, una vista de la llista: la planta d'un altre nivell, la planta de sostre d'un nivell o una crida (retallada al seu marc). Els seus murs, pilars i forjats es mostren en discontinu sota la planta que dibuixeu. Mogueu-la fent clic a un punt base de la referència i després al lloc on ha d'anar aquell punt, o escriviu X, Y i un angle (gira al voltant del seu propi centre). {{ui:Restableix}} la torna al seu lloc, {{ui:Amaga}} la treu. És només una referència: res no la pot seleccionar, no s'imprimeix i no es desa a l'IFC. BimCraft la recorda per a cada nivell en aquest navegador.

## Plomes per vista

Trieu {{ui:Plomes}}. Digueu per a què serveix la ploma: tots els murs, totes les portes, totes les finestres, el tipus de l'element seleccionat o els elements seleccionats. Trieu un gruix, un tipus de línia (contínua, discontínua, puntejada) i un color, i després {{ui:Aplica}}. El canvi només és per a la planta d'aquest nivell. Una selecció preval sobre un tipus, i un tipus preval sobre una categoria sencera. {{ui:Neteja-ho tot}} les elimina. Es mantenen en aquest navegador. Marqueu **Colors de ploma en 3D** per pintar al model 3D les plomes de color (el gruix i el traç són els de la línia, així que només s'hi veu el color); desmarqueu-ho per tornar enrere. {{ui:Imprimeix}} les dibuixa al PDF de la planta: el gruix s'escala a partir de la pantalla (la ploma per defecte dels murs d'1.75 píxels és 0.5 mm), les discontinues es mantenen com a discontinues i un color s'imprimeix amb el seu valor del tema Paper.

## Una escala a partir d'un croquis

Trieu {{ui:Croquis d'escala}} i feu clic als cantons de la línia de recorregut, començant pel primer esglaó. Una línia és una escala recta, dues línies que es troben en angle recte són una L, i tres línies (amunt, a través i enrere) són una U. Premeu {{key:L}} per dibuixar un replà: feu clic als seus cantons i premeu {{key:Enter}}, i el seu costat curt fixa l'amplada de l'escala. Premeu {{key:Enter}} per col·locar l'escala. Cada petjada es calcula a partir de la longitud de la línia i del nombre de contrapetjades que demana l'alçada. Després és una escala normal: canvieu-la a {{ui:Propietats}}, i el buit d'escala i les baranes en segueixen.

Marqueu **Converteix-la en família** a la fila de l'eina (o premeu {{key:F}}) abans de {{key:Enter}} per col·locar l'escala com a família (recta, en L o en U). Entra com un sol element i s'obre a l'editor de famílies amb la seva amplada, petjada, alçada total, les petjades de cada tram i l'espai d'una U com a paràmetres, de manera que hi podeu afegir mides, un símbol en planta o punts actius. Els esglaons i l'alçada de la contrapetjada en depenen. No té baranes ni buit d'escala: aquests pertanyen a una escala normal.

## Obrir un OBJ

Obriu un fitxer `.obj` com qualsevol altre fitxer. Un OBJ no té unitats, així que BimCraft el llegeix en metres amb la Y cap amunt, tal com l'escriuen la majoria de programes. Cada objecte o grup esdevé un element de malla en un únic nivell, i després el podeu veure, mesurar, seccionar, col·locar en un model i desar com a IFC. Les línies, les corbes i les superfícies es deixen de banda, i la barra d'estat ho indica.

Un objecte que és exactament un prisma recte (una malla tancada amb dues cares d'extrem paral·leles i idèntiques i costats plans perpendiculars a elles: una llosa, un pilar, un bloc de mur, una placa amb forats) es desa a l'IFC com el sòlid extruït propi de l'IFC, amb el seu contorn i la seva profunditat, i no com una llista de triangles. Altres programes el llegeixen com un sòlid real, es manté petit, i la seva profunditat i el seu contorn es poden editar després. La barra d'estat indica quants objectes s'han mantingut d'aquesta manera. Qualsevol cosa que no sigui exactament un prisma (una forma cònica, una malla amb un vèrtex mogut, una malla amb una obertura) es manté com a triangles. Un fitxer STEP es llegeix de la mateixa manera.
