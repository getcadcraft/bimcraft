---
title: Vistes, rangs de vista i els vostres propis fulls
summary: Trobeu cada planta, alçat, secció, vista 3D, quadre i full al navegador del projecte, definiu com es talla cada planta i què mostra, feu detalls ampliats, dibuixeu línies i trames en una vista, guardeu la configuració en plantilles de vista, i organitzeu fulls propis.
keywords: detall ampliat, vista de detall, planta ampliada, delineació, línies de detall, línies de delineació, trama, àrea de trama, àrea omplerta, patró de farciment, planta de sostre reflectit, rcp, planta de sostre, quadrícula de sostre, llums, navegador del projecte, vistes, rang de vista, retall, regió de retall, vista retallada, escala de vista, subjacent, mostra un altre nivell, semitò, pla de tall, altura de tall, dalt, baix, profunditat de vista, visibilitat, categories, amaga a la vista, plantilla de vista, plantilles, full, fulls, caixetí, finestra gràfica, escala, organitza fulls, presentació, pdf, configuració de la planta, navegador
from: ee1d5afe
---

## Què hi fareu

Treballar com s'organitzen els projectes BIM: totes les vistes en una llista, cada planta tallada on la voleu, la mateixa configuració per a diverses plantes mitjançant una plantilla, i fulls que organitzeu vosaltres.

## El navegador del projecte

1. Activeu {{ui:Dibuixa}}. El tauler de l'esquerra té un {{ui:Navegador del projecte}} sota els models.
2. Llista:
   - **Plantes**: cada nivell. Cliqueu-ne una per veure'n la planta. El botó de lliscador al costat defineix el seu rang de vista (a continuació). Una planta que segueix una plantilla mostra el nom de la plantilla.
   - **Plantes de sostre**: la planta de sostre reflectit de cada nivell (a continuació).
   - **Detalls ampliats**: cada detall ampliat amb la vista on es dibuixa, i {{ui:Detall ampliat nou}}. **Falta** llista els detalls ampliats la vista dels quals ha desaparegut.
   - **Alçats** i **Seccions**: els quatre costats i cada línia de secció. Cliqueu-ne un per obrir el joc de dibuixos on es dibuixen.
   - **Vistes 3D**: les vistes que heu desat amb {{ui:Vistes}}.
   - **Quadres**: cliqueu-ne un per mostrar-lo sota la planta.
   - **Fulls**: els fulls que heu fet, {{ui:Nou full}}, i {{ui:Joc de fulls…}} per al joc complet fet del model.
   - **Plantilles de vista**, amb {{ui:Plantilla nova}}, i **Enllaços** (els models enllaçats).

## Definir el rang de vista d'una planta

1. Cliqueu el botó de lliscador al costat d'un nivell a **Plantes**.
2. Definiu les alçades, per sobre d'aquell nivell:
   - **Talla a**: on la planta talla els murs, portes i finestres (1200 mm, uns 4 ft, tret que ho canvieu).
   - **Dalt**: el que és per sobre del tall i sota el dalt es dibuixa en discontinu (un moble alt, una biga). Deixeu-ho buit per a l'alçada del nivell.
   - **Baix** i **Profunditat sota la base**: el que és més baix que el tall es dibuixa en línia fina fins a la base, i aquella distància sota ella.
3. Sota **Mostrat en aquesta planta**, desmarqueu el que aquesta planta deixa fora: mobiliari, sales, columnes i així successivament.
4. Per deixar fora elements individuals: trieu-los a la planta o a la vista 3D, obriu el diàleg i cliqueu {{ui:Amaga aquí la selecció}}. {{ui:Mostra'ls tots}} els torna a mostrar.
5. Cliqueu {{ui:Aplica aquesta configuració}}.

La planta es torna a tallar de seguida, i el joc de dibuixos i els vostres fulls la segueixen. El tall d'un núvol de punts també segueix l'altura de tall.

## Retallar una planta, donar-li escala, mostrar un altre nivell sota

Els tres són al mateix diàleg (el botó de lliscador al costat d'un nivell):

- **Escala**: l'escala a la qual s'imprimeix la planta ({{ui:Imprimeix}} a la barra de la planta) i a la qual entra en un full. {{ui:Ajusta}} tria l'escala estàndard més gran que hi cap.
- **Regió de retall**: cliqueu {{ui:Dibuixa-la sobre la planta…}}, i després una cantonada i la cantonada oposada a la planta ({{key:Esc}} atura). La planta fora de la regió es vela a la pantalla, i hi podeu seguir treballant; impresa, als fulls i al joc de dibuixos, la planta només mostra el que és dins. {{ui:Neteja}} treu el retall. {{ui:Ajusta}} ajusta el retall.
- **Subjacent**: trieu un altre nivell. Els seus murs, elements tallats, portes i finestres es dibuixen clars sota aquesta planta, per alinear-ho amb el nivell de sota o de sobre. No els podeu triar aquí, i s'imprimeixen en gris clar.

Una plantilla de vista porta l'escala amb les alçades i les categories. La regió de retall i el subjacent sempre pertanyen només a la seva planta.

## La planta de sostre reflectit d'un nivell

Cada nivell té una planta de sostre reflectit al costat de la seva planta: la planta vista des de sota, per disposar sostres i el que penja d'ells.

1. Cliqueu el nivell sota **Plantes de sostre** al navegador, o trieu {{ui:Planta de sostre}} al costat del nivell a la barra de la planta.
2. Els murs es tallen a 2300 mm (uns 7'-6"). Es dibuixa el que és per sobre d'aquell tall i sota l'alçada del nivell: sostres amb la seva quadrícula i una etiqueta d'alçada (`CLG 2438`), llums, bigues. Les portes, finestres i el que és per sota del tall no s'inclouen.
3. Per fer un sostre, useu {{ui:Sostre}} com a la planta, després trieu-lo i escolliu el seu **Patró** a Propietats. Vegeu [Sales, forjats, sostres i cobertes](topic:floors-and-roofs).
4. Per penjar-hi un llum, col·loqueu l'element de la biblioteca mentre es mostra la planta de sostre: va a **Al sostre**. Vegeu [Col·loca equips i mobiliari des de la biblioteca](topic:place-from-library).
5. El botó de lliscador al costat d'una planta de sostre defineix el seu tall i dalt, escala, categories, regió de retall i subjacent, com per a una planta. Les plantes de sostre no admeten cap plantilla de vista.

Es dibuixa de la mateixa manera que la planta (una planta reflectida, no una imatge especular). Un sostre més baix que el tall no es dibuixa: baixeu el tall per a la planta de sostre d'aquest nivell. Les plantes de sostre van als vostres fulls com les plantes; el joc de dibuixos no les afegeix sol.

## Fer un detall ampliat

Un detall ampliat mostra una part de la planta més gran, a la seva pròpia escala, com una vista pròpia: una cuina, una escala, una cantonada de mur.

1. Mostreu la planta, la planta de sostre o el detall ampliat al qual pertany.
2. Trieu {{ui:Anota}} › {{ui:Detall ampliat}} a la barra de la planta (o {{ui:Detall ampliat nou}} al navegador), i després cliqueu una cantonada de l'àrea i la cantonada oposada. {{key:Esc}} atura.
3. El detall ampliat es fa a 1:20 (1/2" = 1'-0" en peus i polzades). El seu rectangle i una etiqueta rodona es dibuixen a la planta.
4. Cliqueu l'etiqueta amb {{ui:Selecciona}}, o el detall ampliat al navegador, per obrir-lo: la planta només mostra aquella àrea, a l'escala del detall. La barra diu {{ui:Detall ampliat:}} i el seu nom; {{ui:Amunt}} torna a la vista on es dibuixa.
5. El botó de lliscador al costat (al navegador o a la barra) reanomena, canvia l'escala, torna a dibuixar el seu rectangle o l'esborra.

Un detall ampliat mostra el que mostra la seva vista: el mateix tall, les mateixes categories, els sostres d'una planta de sostre. Un detall ampliat d'un altre detall funciona igual. Poseu un detall ampliat en un full com una planta; la seva etiqueta aleshores diu on és (`1 / A-501`: la primera vista del full A-501). {{ui:Imprimeix}} en un detall ampliat imprimeix només aquella àrea a la seva escala.

Esborrar un detall ampliat també esborra els detalls ampliats dibuixats dins seu, i les línies i trames dibuixades en ells (us ho pregunten primer). Si s'esborra el nivell on es dibuixa un detall ampliat, aquest es queda a **Falta** fins que l'esborreu, i els fulls on és ho informen com a desaparegut.

## Dibuixar línies i trames en una vista

La delineació és treball 2D que pertany només a una vista: notes amb línies, una àrea amb trama de formigó o de terra, una regió omplerta. Mai no és a la vista 3D ni en una altra planta.

1. Mostreu la planta, la planta de sostre o el detall ampliat on voleu dibuixar.
2. Trieu des de {{ui:Anota}} a la barra de la planta:
   - {{ui:Línia}}: cliqueu on comença i on acaba. La línia següent comença on va acabar l'última; {{key:Enter}} torna a començar.
   - {{ui:Polilínia}}: cliqueu-ne els punts; {{key:Enter}} o un doble clic la acaben, i un clic al primer punt la tanca.
   - {{ui:Rectangle}}: dues cantonades oposades.
   - {{ui:Àrea de trama}}: trieu el **Patró** (Sòlid, Diagonal, Creuada, Formigó, Aïllament, Terra) i la seva escala a la barra, i després cliqueu les cantonades; {{key:Enter}}, un doble clic o un clic a la primera cantonada la tanca. Amb {{ui:Omple una sala}} marcat, un clic dins d'una sala omple de trama el seu contorn.
3. Els punts s'ajusten com ho fan els murs; {{key:Shift}} manté una línia en angle recte, i podeu escriure una longitud com per als murs. {{key:Backspace}} treu l'últim punt.

Trieu una línia o una trama amb {{ui:Selecciona}} a la planta. Propietats canvia el patró i l'escala d'una trama, i té {{ui:Mou…}} (cliqueu el punt des d'on es mou, i després on va). {{key:Delete}} l'esborra. Cada línia, trama i canvi és un pas.

Les línies i les trames s'imprimeixen amb la planta, passen als vostres fulls amb ella i són al joc de dibuixos. Desmarqueu **Anotacions** en un rang de vista per deixar-les fora d'aquella vista.

## Guardar la configuració en una plantilla de vista

1. Cliqueu {{ui:Plantilla nova}} al navegador, o {{ui:Desa com a plantilla…}} al rang de vista d'una planta (aquella planta aleshores l'utilitza).
2. Doneu-li un nom, definiu les alçades i les categories, i cliqueu {{ui:Desa la plantilla}}.
3. Al rang de vista de qualsevol planta, trieu la plantilla. La planta pren les seves alçades i categories; canvieu la plantilla per canviar cada planta que l'utilitza. Els elements que heu amagat un a un es queden amagats a la seva pròpia planta.
4. Cliqueu una plantilla al navegador per canviar-la, reanomenar-la o esborrar-la. Si n'esborreu una, les seves plantes es queden amb la seva configuració com a pròpia.

## Organitzar un full propi

1. Cliqueu {{ui:Nou full}}. Escriviu-ne el número i el títol i trieu el paper.
2. Cliqueu {{ui:Afegeix}} al costat d'una planta, planta de sostre, detall ampliat, alçat, secció o quadre. Cau al mig del full.
3. Arrossegueu-lo on va. Amb ell seleccionat, trieu una **Escala**, o deixeu-lo a l'escala de la planta (quan la planta en té una); si no, l'escala que hi cap en un terç del full. {{ui:Treu el full}} el treu.
4. Cliqueu {{ui:Desa el full}}. Apareix a **Fulls**; cliqueu-lo per canviar-lo més tard.
5. {{ui:Baixa com a PDF}} desa aquell full com una sola pàgina.

## Què heu de veure

- Plantes tallades a les vostres alçades, amb el que és per sobre del tall en discontinu i el que heu netejat deixat fora.
- Una planta retallada, velada fora de la seva regió a la pantalla i tallada a ella en paper, a l'escala que li heu donat.
- Una planta de sostre amb les quadrícules dels sostres i les etiquetes d'alçada, i els llums al sostre.
- Detalls ampliats amb el seu rectangle i etiqueta a la planta, cadascun obert a la seva pròpia escala.
- Línies i trames només a la vista on les heu dibuixat.
- Els vostres fulls redibuixats des del model cada vegada que els obriu, de manera que sempre coincideixen. Una vista el nivell o la línia de secció de la qual s'ha esborrat es comunica, no es dibuixa.
- Cada canvi aquí és un pas: {{key:Mod+Z}} el desfà.

:::note
Tot això es guarda al fitxer IFC com a conjunts de propietats que altres programes deixen en pau: el rang de vista i la planta de sostre de cada nivell, al mateix nivell; les plantilles, els detalls ampliats i els vostres fulls, al projecte. Les línies i les trames són anotacions IFC al seu nivell, de manera que altres programes les veuen com a corbes 2D i àrees amb trama (el seu propi dibuix de cada patró), tot i que no saben a quina vista pertanyen.
:::

:::tip
Altres programes BIM anomenen el tall rang de vista o pla de tall, les plantilles plantilles de vista o configuració de vista, les línies de delineació línies de detall, i les regions de trama regions omplertes. Les idees són les mateixes; la configuració de la vista no hi viatja.
:::
