---
title: Formes de mur, divisió, desplaçament, estirament i bloqueig
summary: Dibuixa murs com a rectangle, polígon, arc, sobre línies triades o al voltant d'un contorn; divideix-los, treu-ne un tros, desplaça'ls, fes-hi un estirament per caixa, alinea'ls i bloqueja'ls entre ells, amb una cota o amb una línia de graella. Cada canvi manté els murs units i és un sol pas de desfer.
keywords: canvia el tipus, canvia tipus, torna a tipificar, què s'ha mogut, lod, nivell de desenvolupament, estil d'unió, inglet, topada, talla en escaire, unions de murs, següent, passa per, no permetis la unió, permet la unió, prioritat de capa, nucli, prioritat, unió, rectangle, rectangle girat, polígon, inscrit, circumscrit, arc, centre, arc tangent, tria línies, pestanya, calca, contorn, vareta màgica, divideix, divideix amb interval, interval, suprimeix tram, torna a unir, desplaçament, còpia, estirament per caixa, marc, estira, alinea, bloca, cadenat, restricció, cota de bloqueig, edita la cota, graella, bloqueja a la quadrícula, mou la línia de graella, desplaçament de la situació, unió desactivada, exempt, creix des de, mesura des de, eix central, cara interior, cara exterior, desconnecta, alt
from: 5b7d2f75
---

## Què faràs

Fes i canvia murs amb les receptes de l'eina de mur. Cadascuna acaba com quan dibuixes un mur per les seves cantonades: les cantonades s'uneixen soles, les unions es desen al fitxer, i tot el canvi és un pas a **Canvis** que {{ui:Desfés}} desfà. Els murs conserven la seva identitat: un mur que divideixes, desplaces o estires és el mateix mur, amb les seves portes, finestres i cotes.

## Dibuixa un rectangle, polígon o arc

Amb {{ui:Dibuixa}} activat, obre {{ui:Formes}} al grup Dibuixa (o tria una forma a la llista **Forma** de la fila del {{ui:Mur}}). La fila del {{ui:Mur}} mostra el tipus de mur, la referència de dibuix, el costat exterior i la part superior, igual que per a l'eina {{ui:Mur}}. Després fes clic, o escriu els punts (x,y · @dx,dy · @llargada<angle · una llargada al llarg del punter):

- **Rectangle**: dues cantonades oposades. Quatre murs, quatre unions de cantonada, un pas.
- **Rectangle girat**: on comença i acaba el primer costat (això en fixa el gir i la llargada), i després un tercer clic per a l'altre costat.
- **Polígon**: el centre, i després una cantonada (**Inscrit**) o el mig d'un costat (**Circumscrit**). Fixa primer **Costats** (de 3 a 64).
- **Arc, centre**: el centre, l'inici (que fixa el radi), el final. **Sentit**: el camí més curt, en sentit antihorari o horari. Un recorregut de tres quarts de cercle es dibuixa com a dos murs.
- **Arc tangent**: fes clic al final d'un mur, i després on acaba l'arc. L'arc surt del final del mur en la direcció pròpia del mur.

Una forma tancada té el seu exterior cap a fora. Si es dibuixa per la **Cara exterior** o la **Cara interior**, la cara on fas clic és la que es queda fixa.

## Murs sobre línies que ja tens

- **Tria línies**: fes clic en una línia i hi va un mur. Prem {{key:Tab}} (o mantén premut {{key:Shift}} mentre fas clic) per prendre tota la cadena de línies unides d'extrem a extrem. Les línies són les línies de dibuix d'aquesta vista, la referència de calc i les línies de la graella.
- **Calca el contorn**: fes clic dins d'una àrea tancada per aquelles línies o per murs. Els murs van al voltant de l'àrea més petita al voltant del clic.

## Defineix abans de dibuixar: desplaçament i unió

La fila del {{ui:Mur}} té dos camps més, que usen l'eina {{ui:Mur}} i les formes:

- **{{ui:Desplaçament}}**: els murs es dibuixen a aquesta distància de la línia on fas clic: + a la seva esquerra, − a la seva dreta, vist com dibuixes.
- **{{ui:Unió}}**: desmarca'l per dibuixar murs exempts. Els seus extrems tenen **No permetis la unió** i es queden lliures on quer que vagin (consulta [Canvia un mur](topic:change-a-wall-or-door)).

## Divideix, treu un tros, torna a unir

Obre {{ui:Murs}} al grup Edita.

- **{{ui:Divideix}}**: fes clic en un mur on s'ha de tallar, o escriu la distància des del seu inici. Prop d'un mur que el creua, el tall s'ajusta al punt on es troben. Les dues parts tenen el mateix tipus i es queden unides d'extrem a extrem. **{{ui:Interval}}** deixa un espai d'aquella llargada centrat en el tall. **{{ui:Extrems lliures}}** dona als extrems del tall No permetis la unió (Configuració › BimCraft › Murs › **Quan es divideix un mur** fixa quina opció està marcada al principi). Una porta o finestra va amb la part on és; un tall que la travessa es rebutja.
- **{{ui:Suprimeix tram}}**: fes clic on comença el tros i on acaba. Una porta del tros se'n va amb ell.
- **{{ui:Torna a unir}}**: fes clic a les dues parts d'un mateix mur (alineades, del mateix tipus). Tornen a ser un sol mur, el primer en què has fet clic, amb les portes de tots dos.

## Estil d'unió, No permetis la unió, prioritat de capa

Obre {{ui:Murs}} al grup Edita.

- **Estil d'unió**: fes clic en una cantonada on acaben dos murs rectes. Cada clic passa a l'estil següent: **Inglet** (els dos extrems es tallen per la línia de la cantonada interior a l'exterior, que és com comença cada cantonada), **Topada** (un mur travessa fins a la cara exterior de l'altre, que s'atura contra el seu costat) i **Talla en escaire** (com la topada, i el mur que travessa acaba quadrat; en un angle recte sembla una topada). **Següent**, o {{key:Tab}}, fa que l'altre mur sigui el que travessa. La llista **Estil** de la barra mostra la cantonada on has fet clic per últim cop. Les mateixes dues opcions són a **Propietats** d'un mur: **Estil d'unió a l'inici / al final** i **Passa per**. Cada canvi és un pas a **Canvis**. La planta, el cos 3D, les sales i les quantitats se n'adapten.
- En una T el mur al costat del qual arriba l'altre sempre passa per dins. On dos murs es creuen, un clic (o **Contínua on es creua** a Propietats) indica quin dels dos és continu; això decideix quines capes del mur es dibuixen a través de l'encreuament.
- L'estil pertany a la unió: es manté quan els murs es mouen i només se'n va quan se'n va la unió (el mur se suprimeix, es divideix en aquest extrem, o l'extrem rep No permetis la unió). Una cantonada amb un mur corbat, o on conflueixen tres o més murs, es queda amb inglet. Una cantonada més aguda d'uns 30 graus, o més plana d'uns 150, també torna a l'inglet.
- **No permetis la unió**: fes clic a prop d'un extrem de mur. Aquell extrem s'allibera: no s'uneix a res, vagi on vagi el mur, fins que hi tornis a fer clic. Els extrems lliures es marquen amb una creu mentre l'eina està activa. El mateix interruptor és **Permet la unió a l'inici / Permet la unió al final** a Propietats.
- **{{ui:Prioritat de capa}}**: on es troben murs amb capes, la capa més forta talla la més feble, de manera que els nuclis s'uneixen als nuclis i un acabat s'atura contra la capa més forta. Cada capa té una prioritat de 0 a 999; per defecte surt de la funció de la capa (estructura 800, substrat 600, aïllament 400, membrana 300, acabat 200, una cambra 100). {{ui:Prioritat de capa}} obre el muntatge del mur, on la columna **Prioritat** fixa el número propi d'una capa. Les capes de prioritat igual s'aturen les unes contra les altres, i només es dibuixa una línia entre materials diferents. Es veu a les plantes amb detall **Mitjà** o **Fi**, a les cantonades, a les T i als encreuaments de dos murs rectes; Configuració › BimCraft › Murs › **Neteja les capes dels murs on es troben** la desactiva. Només canvia el que es dibuixa dins dels murs: els contorns i les quantitats dels murs es queden tal com els dona l'estil d'unió.

## Canvia el tipus de molts murs

Anar de plantes d'esbós a plànols de treball és sobretot un canvi de tipus: un mur genèric es converteix en el conjunt específic. No cal redibuixar res.

1. Tria els murs (un, o molts amb {{key:Ctrl}} o {{key:Shift}}).
2. A **Propietats**, prem **Canvia el tipus…** sota Tipus de mur (o obre {{ui:Murs}} al grup Edita i tria {{ui:Canvia el tipus}}, que obre la mateixa llista). La llista s'obre dins de Propietats, al bloc propi dels murs triats. No és un diàleg i no tapa res: la planta, la vista 3D i la selecció segueixen funcionant mentre és oberta, i segueix els murs que triïs.
3. La llista mostra cada tipus de mur amb el seu gruix i la seva etiqueta LOD, per exemple «Mur genèric 230, LOD 200» i «230 maó ceràmic, arrebossat per les dues cares, LOD 300». Els tipus que tenen ara els murs triats es marquen. Escriu a **Cerca** per filtrar-la: un nom, un gruix, o `lod 300`.
4. Fes clic en un tipus. Cada mur triat hi canvia en un sol pas, de manera que un {{ui:Desfés}} desfà tot el canvi. La petita x tanca la llista.

Cada mur conserva la seva línia de localització. Un mur sobre el seu eix central creix cap als dos costats; un mur la línia de localització del qual és una cara manté aquella cara i creix cap a l'altre costat, i els murs units a ell el segueixen a les cantonades. Els murs bloquejats a un mur canviat el segueixen també. Les portes i finestres es queden als seus murs i es tornen a tallar per al gruix nou.

Després del canvi, la llista mostra **Què s'ha mogut**: quants murs han canviat i a què, el gruix i el LOD abans i després, els murs que s'han desplaçat de costat per mantenir la seva línia de localització, els murs units que l'han seguit, les portes i finestres tornades a allotjar, i cada sala l'àrea de la qual ha canviat, amb la seva àrea abans i després. La barra d'estat ho diu en una línia. L'informe només informa; mai no atura un canvi. Triar un tipus a **Propietats › Tipus de mur** fa el mateix canvi i dona el mateix informe.

Hi ha dues coses que aturen un canvi, i llavors no es canvia res: una porta o finestra que ja no hi cabria al seu mur (un mur es fa més curt on una cantonada el segueix; fes la porta més estreta o allunya-la de la cantonada primer), i un bloqueig que el canvi trencaria (un mur bloquejat a una línia de graella pel seu eix central mentre la seva línia de localització és una cara; desbloqueja'l o torna la seva línia de localització a l'eix central).

Un assistent connectat a BimCraft pot fer el mateix canvi (eines `wall_types_list` i `walls_swap_type`) i rep el mateix informe.

L'etiqueta LOD d'un tipus es fixa a l'editor de muntatges de mur: consulta [Muntatges de mur](topic:wall-assemblies).

## Desplaçament i estirament per caixa

- **{{ui:Desplaçament}}**: fes clic en un mur, i després al costat on l'has de moure, o escriu la distància. El mur es mou perpendicular a si mateix i els murs units a ell s'estiren. Marca **Còpia** per tenir en lloc una còpia paral·lela (no està unida a l'original).
- **{{ui:Estirament per caixa}}**: fes clic en dues cantonades d'una caixa, i després en un punt des d'on moure i un punt on moure. Cada extrem de mur dins de la caixa es mou; un mur que hi és del tot es mou, i els murs que hi topen també; els murs que creuen la caixa s'estiren.

## Edita una cota i bloqueja-la

Tria una cota de referència ({{ui:Anota}} › {{ui:Cota de referència}}) i escriu-ne el valor a **Propietats**: el mur de la seva segona referència es mou perpendicular a si mateix, la primera referència es manté, i els murs units el segueixen. Marca **Bloqueja aquesta cota** per mantenir el valor: quan més tard es mou qualsevol dels dos murs, l'altre el segueix. Un valor bloquejat no es pot sobreescriure fins que el desmarquis.

## {{ui:Alinea i bloqueja}}

**{{ui:Alinea i bloqueja}}**: fes clic en una cara de mur (o en l'eix central, prop del mig del mur) o en una línia de graella, i després en la cara del mur que has de portar a aquella línia. El mur es mou perpendicular fins a situar-s'hi. Marca **Bloqueja** primer per mantenir-los alineats: un cadenat apareix a la planta, i quan un mur es mou, l'altre el segueix. Les **Propietats** d'un mur llisten els seus **Bloquejos**, cadascun amb **Desbloqueja**.

## Bloqueja murs a línies de graella

Tria un mur que vagi al llarg d'una línia de graella, o que tingui un extrem sobre una, i tria la línia de graella a **Propietats** › **{{ui:Bloqueja a la quadrícula}}**. Després tria la línia de graella amb l'eina {{ui:Graella}} i escriu una distància a **{{ui:Mou per}}**: la línia es mou perpendicular a si mateixa, i els murs bloquejats a ella la segueixen, amb els seus murs units, en un sol pas. Un mur bloquejat a una línia de graella no es pot moure per si sol fora d'ella (mou la línia, o desbloqueja el mur); una línia de graella girada de manera que un mur bloquejat no pot quedar perpendicular a ella es rebutja. Canviar el nom a la línia manté el bloqueig; suprimir-la el treu.

## Llargada: quin costat es manté i què mesura

- **{{ui:Creix des de}}** (Propietats d'un mur): **L'inici es manté** (es mou el final), **El final es manté** (es mou l'inici) o **El centre es manté** (els dos extrems es mouen la meitat). Mentre escrius la Llargada, la planta marca el punt que es manté. El mur unit a l'extrem que es mou es mou perpendicular a si mateix i conserva el seu angle.
- **{{ui:Mesura des de}}** (al costat de {{ui:Dimensions}} a la planta, a Propietats, i a Configuració › BimCraft › Murs): l'eix central, la cara interior o la cara exterior. La caixa de Llargada i les cotes de mur de la planta llegeixen la mateixa, de manera que coincideixen. Comença a l'eix central.
- Per moure un mur lliure de les seves unions (es trenquen, el mur conserva la seva identitat), mantén premuda {{key:Alt}} mentre arrossegues la seva nansa del mig.

## Bon a saber

- Aquestes receptes són les de l'especificació de l'eina de mur (pàgines 4 a 9). L'estil d'unió i la prioritat de capa estan pensats per a murs rectes; la prioritat de capa només es veu a la planta (no a les seccions, alçats o 3D, on un mur és un sol cos), no als nodes de tres murs o més, i les membranes no es porten.
- L'estil d'una unió s'emmagatzema al seu registre al fitxer IFC (el nom de `IfcRelConnectsPathElements`, per exemple `CadCraft join L butt 1`), de manera que altres programes encara llegeixen la unió i un fitxer més antic s'obre amb inglets.
- Els bloquejos i les unions s'emmagatzemen al fitxer IFC (els bloquejos com a `CadCraft_WallHolds` al projecte, les unions com a `IfcRelConnectsPathElements`), de manera que hi són quan tornes a obrir el fitxer.
- Els murs corbats es poden dividir, tornar a unir i treure'n un tros; no es desplacen ni es bloquegen.
- Consulta també [Dibuixa murs](topic:draw-walls), [Canvia un mur, porta o finestra](topic:change-a-wall-or-door) i [Dona forma a un mur](topic:wall-shape).
