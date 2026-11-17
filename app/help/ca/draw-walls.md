---
title: Dibuixar murs
summary: Dibuixeu murs al plànol d'una planta fent clic als seus angles o escrivint-ne les longituds; els angles s'uneixen sols i els murs es desen com a IFC.
keywords: corbat, arc, línia de referència, justificació, mur, murs, dibuixar, plànol, plànol de planta, sala, angle, unir, tipus de mur, 2x6, 2x4, cmu, formigó, alçada, planta, plantes, nivell, longitud escrita, orto, referència
from: 8269cd4b
---

## Què hi fareu

Dibuixareu els murs d'un edifici sobre el plànol de cada planta. Feu clic on comença un mur i després a cada angle; BimCraft uneix els angles per vosaltres, assigna a cada mur les seves capes (revestiment, aïllament, muntants, plafó de guix …) i l'estén fins a la planta de dalt. La vista 3D mostra els murs a mesura que els dibuixeu.

## Obrir el plànol

1. Comenceu un edifici nou ([Comença un edifici nou](topic:start-a-new-building)) o obriu un model IFC.
2. Feu clic a {{ui:Dibuixa}} a la barra d'eines. S'obre un edifici nou amb aquesta eina ja activada.
3. El plànol d'una planta es mostra a l'esquerra i la vista 3D a la dreta. Trieu la planta a la llista de dalt del plànol, o amb el botó rodó del costat, al tauler **Plantes**.
4. {{ui:Planta}}, {{ui:Divideix}} i {{ui:3D}} són eines de la fila {{ui:Vista}} de la barra d'eines (les ordres PLAN, SPLIT i les tecles funcionen com abans). Useu {{ui:Planta}} per veure només el plànol, {{ui:Divideix}} per veure'n els dos, i {{ui:3D}} per tancar el plànol. Quan la finestra és estreta (o la mida de la interfície és gran), {{ui:Divideix}} posa el plànol per sobre de la vista 3D en lloc de costat.

El plànol talla la planta a 4'-0" (1200 mm) per sobre del seu terra, com fa un plànol de planta. Gireu la roda per fer zoom, arrossegueu amb el botó central o el dret (o manteniu premuda {{key:Space}} i arrossegueu) per desplaçar-vos; amb {{ui:Selecciona}} activat, un arrossegament simple també desplaça. {{key:F}} amb el punter sobre el plànol l'ajusta.

## Dibuixar una sala

1. Feu clic a {{ui:Mur}} (o premeu {{key:W}}).
2. Trieu el tipus de mur a la primera llista, per exemple **Exterior 2×6** o **Interior 2×4**.
3. Trieu-ne l'alçada: **Fins a la planta de dalt** (el mur segueix si aquesta planta es mou), **Fins a** una planta més amunt per a un mur que travessa diverses plantes (un vestíbul d'escala, una sala de doble alçada, un frontó alt), o **Alçada fixa** i escriviu-la. Un mur així pertany a la planta on l'heu dibuixat; els plànols de les plantes que travessa el mostren més clar, les sales s'hi tanquen contra ell, i hi podeu fer clic per posar-hi portes i finestres des d'aquests plànols (una porta s'assenta sobre el terra d'aquella planta). Per moure o remodelar el mur mateix, aneu a la planta on comença.
4. Feu clic on comença el primer mur.
5. Feu clic a cada angle. Cada clic fa un mur; el següent comença on ha acabat l'anterior. La longitud i l'angle es mostren al costat del punter.
6. Torneu a fer clic al primer punt per tancar la sala. La línia d'estat indica quants murs té la sala, i en mode d'eix cada mur rep la seva capa exterior a l'exterior de la sala.
7. Premeu {{key:Esc}} (o feu clic dret, o doble clic) per aturar sense tancar.

Els angles s'uneixen sols: dos murs es troben en una unió a inglet, un mur que acaba en un altre s'atura a la seva cara (una unió en T), i tres o més murs en un punt comparteixen l'angle. Els murs que es creuen es deixen tal com estan.

Una sala sencera de cop: obriu {{ui:Formes}} per a un rectangle, un rectangle girat, un polígon, arcs, murs sobre línies escollides o al voltant d'un contorn (vegeu [Formes de mur, divisió, desplaçament, estirament i bloqueig](topic:wall-tools)).

## Triar la referència de dibuix

Trieu **Eix**, **Cara interior** o **Cara exterior** abans del primer clic. Amb una cara seleccionada, els clics i les longituds escrites descriuen aquella cara; BimCraft desplaça l'eix del mur la meitat del gruix total i uneix els angles consecutius. Trieu **Exterior a l'esquerra** o **Exterior a la dreta** segons la direcció en què dibuixeu. Per a un contorn tancat dibuixat en sentit antihorari, l'exterior és a la dreta; en sentit horari, a l'esquerra. Amb **Cara interior** el cos del mur va cap al costat exterior de la vostra línia; amb **Cara exterior**, cap a l'altre costat. Dibuixar per cara manté el costat exterior que heu triat quan tanqueu el bucle. A l'eix, els murs que no tanquen una sala agafen el costat exterior que heu triat; tancar una sala posa l'exterior de cada mur a l'exterior de la sala per si mateix, independentment de com l'hàgiu dibuixada.

Canviar el tipus de mur, la referència o el costat exterior acaba la cadena actual. A prop d'un angle de retrocés, les unions llargues es limiten deixant extrems quadrats.

Mentre dibuixeu, un extrem en un espai buit pot alinear-se horitzontal o verticalment amb un extrem de mur o amb un angle anterior. Una guia de traços uneix aquest punt amb el punter ajustat. {{key:Shift}} manté la direcció de dibuix en angle recte; l'alineació s'atura aleshores al llarg d'aquesta direcció. Els extrems, els punts mitjans i les interseccions de murs propers tenen prioritat sobre l'alineació llunyana.

## Línia de referència

Amb **Referència** en **Cara exterior** o **Cara interior**, el mur conserva aquella cara com a línia de referència. Més endavant, si el mur es fa més gruixut o se li inverteix l'exterior, aquella cara es queda on és i el mur creix o es gira al seu voltant. Un mur recte que hi arriba en un angle en segueix el moviment, de manera que l'angle continua tancat. Podeu canviar la línia de referència després a **Propietats**: vegeu [Canvia un mur, una porta o una finestra](topic:change-a-wall-or-door).

## Dibuixar un mur corbat

1. Feu clic a {{ui:Mur}} i després trieu **Corbat** a la llista **Forma** de la fila d'opcions.
2. Feu clic on comença el mur i després on acaba.
3. Feu clic a un punt del seu arc. O escriviu l'altura de l'arc i premeu {{key:Enter}}.
4. La cadena continua des de l'extrem del mur. Premeu {{key:Esc}} per acabar-la.

Un mur corbat s'uneix als murs als seus extrems (les unions d'angle i en T funcionen), fa sales i aguanta portes i finestres al llarg del seu arc. Són unitats rectes, perpendiculars al mur al seu mig, i la seva distància es mesura al llarg de l'arc. Un mur pot girar com a màxim tres quarts de cercle. S'ajusta als seus extrems i al mig del seu arc.

Encara no implementat per als murs corbats: {{ui:Retalla / allarga}} i {{ui:Cantonada}}, l'entramat, les cotes automàtiques del plànol i l'ajust al llarg de l'arc. Vegeu [Què és encara no implementat](topic:not-built-yet).

## Escriure una longitud en lloc de fer clic

Després del primer clic, escriviu i premeu {{key:Enter}}:

| Escriviu | Dibuixa |
|---|---|
| `12'6"` o `3810` | un mur d'aquesta longitud, en la direcció que indica el punter |
| `12'6"<90` | d'aquesta longitud, a aquest angle (graus, en sentit antihorari des de la dreta) |
| `@3000,0` | fins a un punt a aquesta distància de l'últim, en horitzontal i en vertical |
| `1200,3400` | fins a aquest punt del plànol |

Escriure un número mentre l'eina Mur està activa va directament a la casella {{ui:Longitud}}. En peus i polzades, un número sense unitat són polzades; en mil·límetres, són mil·límetres. Sempre podeu escriure la unitat: `3.5 m`, `10 ft`, `6 1/2"`.

## Referències

- Els extrems dels murs, els seus angles de cara i els punts mitjans dels murs s'ajusten quan el punter n'és a prop (un quadrat, un triangle).
- El punter s'ajusta a l'eix d'un mur o a qualsevol de les cares (una creu).
- Des de l'últim punt, la direcció es manté cada 15° quan és a prop; manteniu premuda {{key:Shift}} per mantenir-la a 0°, 90°, 180° o 270°.
- Les direccions lliures arrodoneixen la longitud a 1/2" (o 10 mm).

## Canviar, desfer i suprimir

- Cada mur és un pas a {{ui:Canvis}}: {{ui:Desfés}} i {{ui:Refés}} retiren els murs i els tornen a posar.
- Amb {{ui:Selecciona}} activat, feu clic a un mur al plànol per seleccionar-lo; la vista 3D i {{ui:Propietats}} el segueixen. {{key:Delete}} suprimeix els murs seleccionats, i els murs que estaven units a ells es netegen de nou.

## Plantes

El tauler **Plantes** llista cada planta amb la seva cota i alçada.

- Escriviu un nom nou, una cota o una alçada nova i premeu {{key:Enter}}. Canviar l'alçada (o la cota) d'una planta mou les plantes de sobre la mateixa quantitat, i els murs que pugen fins a una planta en segueixen el moviment.
- {{ui:Afegeix una planta a dalt}} afegeix una planta sobre la de dalt, de la mateixa alçada.
- {{ui:Afegeix un nivell per sota}} afegeix una planta sota la més baixa (un soterrani), de la mateixa alçada que aquesta: la seva cota és negativa quan la planta més baixa és a 0, i cap altra planta es mou. {{ui:Desfés}} la treu de nou.
- {{ui:Copia aquesta planta…}} torna a dibuixar en una altra planta, o en una de nova a dalt, el que hi ha a la planta que esteu mirant: els seus murs amb portes i finestres, els sostres i els forjats (no les cobertes). Els murs que pujaven fins a la planta de sobre pugen fins a la planta de sobre de la nova; les sales apareixen soles. Un sol {{ui:Desfés}} ho desfà tot. Si l'altra planta ja té murs, la còpia s'hi afegeix.
- {{ui:Unitats}} a la barra d'eines tria les unitats (peus i polzades, polzades, peus decimals, mil·límetres, centímetres o metres) per a tot el que mostren i llegeixen les eines de dibuix.

## Desar

Feu clic a {{ui:Desa com a IFC}}. Cada mur és un mur IFC amb el seu eix, la seva forma unida, el seu tipus i capes, `Pset_WallCommon` i quantitats de base (longitud, alçada, àrees i volums), perquè altres programes BIM l'obrin i en generin el quadre.

## Coses que cal saber

- Els murs es dibuixen pel seu eix. El gruix ve del tipus de mur.
- El plànol mostra els murs dibuixats aquí plens, i tota la resta (elements de biblioteca, models d'altres programes) tallat pel mateix pla, amb el que hi ha sota el tall en línies fines.
- Els murs fets per altres programes es mostren al plànol però no es poden canviar amb aquestes eines encara.
