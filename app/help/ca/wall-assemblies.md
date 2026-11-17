---
title: Muntatges de paret i cotes de referència
summary: Construeix els teus propis tipus de mur capa per capa amb un nucli explícit, mantén una biblioteca de materials del projecte i acota a cares i eixos que es mantenen units quan el mur canvia.
keywords: lod, nivell de desenvolupament, lod 200, lod 300, genèric, muntatge de mur, tipus de mur, capes, nucli, cara del nucli, eix del nucli, cambra, cambra d'aire, membrana, membrana de protecció, biblioteca de materials, materials, gruix, cota de referència, cota, associatiu, línia de localització, revestiment, muntant, plafó de guix laminat
from: 4ea8fbf5
---

## Què faràs

Crea un tipus de mur que coincideixi amb el mur que vols construir: revestiment, entaulat, un nucli de muntants de 5½ polzades i plafó de guix laminat, o maó, una cambra d'aire i un mur d'entramat de fusta. Marca quines capes són el nucli, perquè una cota o una línia de localització puguin mantenir el nucli mentre els acabats al seu voltant canvien. Després acota els murs a les cares i als eixos que vulguis.

## Crea un tipus de mur

1. Comença un edifici o obre un model IFC, activa {{ui:Dibuixa}} i després tria l'eina {{ui:Mur}}.
2. Tria una plantilla a {{ui:Tipus de mur}} i obre {{ui:Muntatges de paret…}}. Una plantilla s'obre com una còpia; dona un nom al tipus nou.
3. Les capes van de l'exterior, a dalt de la llista, a l'interior, a baix. Tria el material de cada capa, escriu-ne el gruix (unitats del projecte, o valors explícits com `12.7 mm` o `1/2"`), tria la seva funció (acabat, substrat, estructura, aïllament, membrana) i marca les capes **Nucli**. El nucli ha de ser un grup continu.
4. {{ui:Afegeix capa}} afegeix una capa, {{ui:Afegeix cambra}} afegeix una cambra d'aire amb la seva ventilació (no especificada, sense ventilar, ventilada), i {{ui:Afegeix membrana}} afegeix una capa sense gruix nominal, com el paper de casa. Les fletxes mouen una capa cap a fora o cap a dins.
5. La vista prèvia dibuixa les capes a escala amb el nucli subratllat, numerades com les files, i acota cada capa, el nucli i el total. {{ui:Desa el tipus}}.

El tipus nou és a la llista de l'eina de mur i a **Propietats** d'un mur seleccionat. Desar un tipus que edites canvia tots els murs que l'usen; {{ui:Duplica el tipus}} en fa un de separat i només l'assigna als murs que has seleccionat. Cada desament és un sol pas de desfer, juntament amb els murs que mou, les portes i finestres que hi són i les cotes que en depenen.

Una cambra d'aire afegeix amplada. Una membrana no n'afegeix: es queda al tipus perquè una taula la pugui trobar més endavant, i no compta en el gruix del mur ni del nucli. Una cambra o una membrana mai no es compten com a material sòlid. En un fitxer desat com a IFC2X3 una membrana es manté al registre del tipus però no s'inclou a les seves capes de material físiques.

## Etiqueta un tipus amb el seu nivell de desenvolupament (LOD)

Un tipus pot indicar quant està desenvolupat. A l'editor, **Nivell de desenvolupament (LOD)** ofereix l'escala fixa 100, 200, 300, 350, 400 i 500, o **No definit**. Un mur genèric («Mur genèric 230») és LOD 100 o 200; un conjunt específic amb les seves capes reals («230 maó ceràmic, arrebossat per les dues cares») és LOD 300 o més. L'etiqueta la defineixes tu: BimCraft no la calcula, i les plantilles inicials no en tenen.

L'etiqueta apareix al costat del nom del tipus a la llista de tipus de l'eina de mur, a les Propietats d'un mur i a la llista de [Canvia el tipus](topic:wall-tools); l'informe després d'un canvi indica si el nivell ha pujat o baixat. Per veure-la a la taula **Murs per tipus** i al seu CSV, marca **Mostra el LOD de cada tipus de mur a la taula de murs** a {{ui:Configuració}} › BimCraft › {{ui:Murs}}: s'hi afegeix una última columna, LOD. Es desa a l'arxiu IFC amb el tipus (al conjunt de propietats `CadCraft_WallType` del tipus, com a propietat `LOD` i dins del registre del tipus), de manera que hi és quan tornes a obrir el fitxer. Per ara l'etiqueta només és als tipus de mur, no als elements individuals ni a altres tipus d'element.

## Murs genèrics per a l'etapa d'esbós

La llista de Tipus de l'eina de mur comença amb dos murs **genèrics**: **Mur genèric 200 mm (exterior)** i **Mur genèric 100 mm (interior)**. Cadascun és una capa del material genèric, etiquetada LOD 200. Fes-los servir quan saps on van els murs però encara no de què estan fets.

Un mur el tipus del qual està etiquetat **LOD 100** o **LOD 200** es dibuixa a totes les plantes com **una sola banda amb ratllat**, a qualsevol nivell de detall: sense capes ni línies de capa. Això és cert per als murs genèrics i per a qualsevol tipus propi que etiquetis LOD 100 o 200. El mur en si és complet: té el seu gruix, les seves portes i finestres, les seves sales i les seves quantitats.

Per desenvolupar-lo, canvia-li el tipus (Edita › {{ui:Murs}} › **Canvia el tipus**, o Tipus a Propietats). El mur no es torna a dibuixar mai: el mateix mur adopta el tipus nou, i l'informe diu què s'ha mogut. Un tipus etiquetat LOD 300 o superior es dibuixa amb les seves capes com abans.

Per dibuixar tots els murs per les seves capes sigui quina sigui l'etiqueta: {{ui:Configuració}} › BimCraft › {{ui:Murs}}, desmarca **Dibuixa els murs d'un tipus LOD 100 o LOD 200 com una sola banda amb ratllat**.

Les portes i finestres de les plantilles també són tipus genèrics (una mida i una manera d'obrir-se, no un producte). Amb **Mostra el LOD de cada tipus de mur a la taula de murs** activat, les taules de Portes i Finestres mostren LOD 200 per a elles.

## Dona a un tipus les seves dades d'amidament

A l'editor de tipus de mur, **Dades d'amidament** recull el que un pressupostista ha de saber del mur, una sola vegada per al tipus: la **unitat** amb què es construeix (un maó o un bloc: el seu nom, llargada, alçada i amplada), el **morter** (nom i gruix de la junta) i una **tarifa** amb el seu codi de moneda (tres lletres, com USD, EUR o ZAR) i a quin concepte s'aplica: per metre quadrat o peu quadrat d'àrea neta de mur, per metre o peu de longitud de mur, o per cada mur. Tot és opcional.

Es desa amb el tipus al fitxer. Llavors cada mur del tipus el reporta: {{ui:Quadres}} › **Tipus de mur: dades d'amidament** mostra la unitat, el morter, la tarifa i la tarifa per la quantitat mesurada, i l'amidament enviat a TakeoffCraft porta això a l'element d'aquell tipus de mur. Canvia-ho al tipus i tots els murs ho segueixen.

Hi ha tres camps més per comptar maons o blocs i morter:

- **Pèrdua en unitats, %** se suma al nombre d'unitats. Deixa'l buit per fer servir la xifra del mètode de mesura del projecte, o cap si el mètode no en té. Escriu 0 per no tenir pèrdua, digui el que digui el mètode.
- **Morter addicional, %** és per als orificis o perforacions que porten morter. Se suma al volum de morter. Deixa'l buit si no n'hi ha.
- **Capes fetes amb aquesta unitat**: marca cada capa que és fulla d'aquest maó o bloc. Un mur de cambra en té dues. Si no n'hi ha cap de marcada, es compten les capes del nucli.

La tarifa també pot ser per unitat a demanar, per 1000 unitats a demanar o per m³ de morter. Quan la unitat té llargada i alçada, **Tipus de mur: dades d'amidament** mostra les unitats per m² (o ft²) d'una fulla, les unitats a demanar i el volum de morter; les fórmules són a [Maons, blocs i morter](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Un tipus té una sola unitat: dues fulles de unitats diferents (una fulla exterior de maó i una fulla interior de bloc) encara no es poden comptar en un mateix tipus.

## Mantén el nucli quiet

A **Propietats**, posa la **Línia de localització** d'un mur a una cara del nucli o a l'eix del nucli. Quan després afegeixis o engruixeixis un acabat, aquesta línia es queda on és i el mur creix al seu voltant; els murs que hi arriben en una cantonada la segueixen, de manera que les cantonades rectes continuen tancades.

## Materials del projecte

{{ui:Biblioteca de materials…}} llista els materials del projecte: nom, categoria, el gruix amb què comença una capa, color de visualització, patró de farciment de tall i notes. La biblioteca es desa a l'IFC amb el projecte. En triar un material per a una capa, aquella capa adopta el gruix per defecte del material, que després pots canviar; editar la biblioteca més tard mai no redimensiona els murs que ja has dibuixat. També pots crear un material des de la llista de materials de la capa amb {{ui:+ Material nou…}}.

## Cotes de referència

{{ui:Anota}} › {{ui:Cota de referència}}: tria horitzontal, vertical o alineada, i una referència: la cara d'acabat exterior o interior, la cara del nucli exterior o interior, l'eix del mur o l'eix del nucli. Tria el primer mur, canvia la referència si vols, tria el segon i després fes clic on va la línia de cota. Dues referències en un mateix mur mesuren el seu gruix total o el del nucli. {{ui:Cotes de referència…}} llista les cotes de la vista, incloses les que han perdut un mur, amb Propietats, Torna a vincular referències i Suprimeix.

### Acota tota la planta per regles

{{ui:Anota}} › {{ui:Acota el plànol…}} acota l'exterior de la planta de l'entrepiso que estàs mirant: la mida global en cada direcció, una fila de cotes al llarg de cada vora exterior (extrems de murs, murs que arriben a la vora, i les portes i finestres que hi són), amb les files col·locades lliures de l'edifici. Marca el que vulguis, llegeix el recompte i després {{ui:Afegeix les cotes}}. Són cotes de referència normals, de manera que segueixen els murs quan es mouen i pots triar, moure o suprimir-ne qualsevol; el conjunt sencer és un sol pas de desfer, i tornar-ho a executar no en crea cap de nova.

Només acota l'exterior: les sales de dins de l'edifici, els murs corbats i els murs que no són perpendiculars a la planta es deixen per a les eines manuals, i les línies de graella no són murs, de manera que les cotes entre graelles no es fan aquí. El teu assistent connectat pot fer el mateix amb `plan_dimension`.

La cota està lligada als murs, no a un punt de la pantalla: quan un mur es mou o canvia el seu tipus, el valor el segueix. Si un mur se suprimeix, la cota diu que no està resolta i no mostra cap número, fins que la tornis a vincular o desfacis. La caixa de llargada també accepta coordenades de planta com `10',12'` per situar una línia de cota en un punt exacte.

Les cotes són per als murs que BimCraft ha dibuixat, a les vistes de planta. Encara no implementat: cotes en seccions i alçats, a portes, finestres i altres components, i capes de muntatge dibuixades a la planta i a la secció; consulta [Què encara no està implementat](topic:not-built-yet).

## Vegeu també

[Dibuixa murs](topic:draw-walls), [Canvia un mur, porta o finestra](topic:change-a-wall-or-door), [Propietats](topic:properties-panel).
