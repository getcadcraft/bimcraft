---
title: Novetats de la versió 0.9
summary: Formes de mur, divisió, desplaçament, estirament i bloqueig a la graella, nivells sota terra, cotes de graella i Mesura a la planta, vistes duplicades amb estils de treball i taules de plomes, Informa com a, exportació Collada i Google Earth, Scan to BIM, anàlisi de vent i sísmica, complements d'impressió amb resina.
keywords: novetats, 0.9, notes de la versió, formes de mur, rectangle, polígon, arc, tria línies, calca el contorn, desplaçament, unió, estirament per caixa, alinea i bloqueja, divideix mur, interval, torna a unir, bloqueja a la graella, creix des de, mesura des de, afegeix un nivell per sota, planta, ordre de nivell, sòl, graella, cotes de graella, mesura a la planta, estil de treball, còpia de vista, còpia pròpia, vista enllaçada, taula de plomes, imprimeix tal com es veu, informa com a, escala, importa svg, col·loca a la planta, col·loca al model, collada, dae, kmz, google earth, scan to bim, càrrega de vent, sísmica, elements finits, panell de documents, impressió amb resina, novetats, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, evacuació, persones, cues, acústica, reverberació, resposta impulsiva, inundació, vent, terratrèmol, perill, cicle de vida, vida útil, ids, etiquetes, taules, mou, alinea, distribueix, imatge, fons, escaneig a murs, lloc des de civilcraft, plànols de panells, entramat, solar, fv, divideix, vrf, fan coil, dimensionat de canonades, safata de cables, il·luminació, formigó, sísmica, compara escaneig, epsg, projecció, documents, plantilla, carboni, cost, energyplus, motor de render, obre a, usd, glb, unreal, desfer, complements, pcf, símbols, plantes, calc, plomes, cinta, navegador del projecte, disposició
from: 5624fe88
---

Això és el que ha canviat a BimCraft 0.9, en comparació amb la 0.8.1. Els dos grans temes són una veritable eina de mur i vistes que es comporten com la gent que ve dels grans programes BIM espera. A més hi ha l'exportació Collada, assistents que poden col·locar dispositius elèctrics, Scan to BIM, i anàlisi de vent, sísmica i elements finits a la pestanya {{ui:Anàlisi}}.

## Nou

### Murs

- **Dibuixa formes senceres.** A {{ui:Dibuixa}}, obre {{ui:Formes}} (o tria una forma a la llista Forma de la fila del {{ui:Mur}}) per a un rectangle, un rectangle girat, un polígon de 3 a 64 costats, un arc per centre, un arc tangent, murs sobre línies triades, o murs al voltant d'una àrea tancada on fas clic a dins. Un rectangle són quatre murs amb quatre cantonades unides i un sol pas de desfer. Consulta [Formes de mur, divisió, desplaçament, estirament i bloqueig](topic:wall-tools).
- **Fixa abans de dibuixar, canvia després.** La fila del {{ui:Mur}} té {{ui:Desplaçament}} i {{ui:Unió}} (desmarca per dibuixar murs exempts). Després, usa {{ui:Desplaçament}}, {{ui:Estirament per caixa}} i {{ui:Alinea i bloqueja}} en murs dibuixats. Un mur mogut o estirat conserva les seves portes, finestres i cotes. Cada recepta és un sol pas de desfer.
- **Talla murs.** {{ui:Divideix}}, {{ui:Interval}}, {{ui:Extrems lliures}}, {{ui:Suprimeix tram}} i {{ui:Torna a unir}} tallen un mur en un clic o on hi creua un altre mur. Un tall per una porta es rebutja. Consulta [Formes de mur, divisió, desplaçament, estirament i bloqueig](topic:wall-tools).
- **Bloqueja murs a les línies de graella.** Selecciona un mur al llarg d'una línia de graella i marca {{ui:Bloqueja a la quadrícula}} a {{ui:Propietats}}. Amb l'eina {{ui:Graella}} activada, escriu una distància a {{ui:Mou per}} per a una línia triada, i els murs bloquejats la segueixen en un sol pas de desfer.
- **Dona forma a un mur.** A {{ui:Propietats}} d'un mur pots adjuntar la seva part superior o la base a una coberta, un forjat o un sostre, editar el seu contorn d'alçat, inclinar-lo, o tallar una obertura de mur sense porta ni finestra. Consulta [Forma del mur](topic:wall-shape).
- **La llargada diu quin extrem es manté.** {{ui:Creix des de}} fixa si l'inici, el final o el centre es queden quiets quan canvies la llargada.
- **La llargada i la cota de planta coincideixen.** {{ui:Mesura des de}} (eix central, cara interior o cara exterior) governa tant el camp Llargada com les cotes de mur de la planta. Comença a l'eix central, de manera que les cotes de mur de la planta ara llegeixen l'eix central on abans llegien la cara exterior. Canvia-ho a la fila del {{ui:Mur}}, a {{ui:Propietats}} o a {{ui:Configuració}} › {{ui:BimCraft}} › {{ui:Murs}}.

### Nivells, graelles i mesura

- **Afegeix un nivell per sota.** {{ui:Afegeix un nivell per sota}} al panell {{ui:Nivells}} afegeix un nivell sota el més baix, de la mateixa alçada, a una elevació negativa (Nivell -1, Nivell -2). Res més es mou. {{ui:Afegeix nivells…}} accepta ara alçades negatives. Escriure LEVEL, LEVELS, STOREY o STOREYS a la línia d'ordres obre {{ui:Afegeix nivells…}}, i hi ha un botó {{ui:Nivells}} als menús i a les pestanyes de la cinta. Consulta [Llocs, edificis i nivells](topic:site-building-and-levels).
- **Cotes de graella a la planta.** Amb l'eina {{ui:Graella}} activada, marca {{ui:Dimensions}} per dibuixar l'espaiat entre les línies veïnes i la mida global més enllà de les bombolles, a la planta de cada nivell. Consulta [Acota una graella](topic:grid-dimensions).
- **Mesura a la planta.** {{ui:Mesura}} al grup {{ui:Dibuixa}} dona una distància amb les diferències X i Y entre dos clics. No es desa res al model. Consulta [Mesura a la planta](topic:measure-on-the-plan).
- **Canvia diverses columnes a la vegada.** Tria columnes juntament amb un mur i la llista mostra cada tipus amb {{ui:Mantén només aquests}}. Un clic manté les columnes i mostra els seus camps comuns.
- **Una unitat de visualització a tot arreu.** Les coordenades, els mesuraments, les seccions, les escales de full, les càrregues i els resultats de la pestanya de marc i el text dels Problemes segueixen la unitat que triïs. Les exportacions es mantenen en SI.

### Vistes, fulls i impressió

- **Estil de treball.** {{ui:Configuració}} › BimCraft › {{ui:Estil de treball}} tria entre que cada vista tingui les seves pròpies anotacions i taules de plomes, o que les comparteixi. Consulta [Estil de treball, vistes duplicades, plomes al paper, Informa com a i plantilles](topic:working-style).
- **Duplica una vista.** Les plantes, les plantes de sostre, els punts de vista, els alçats i les seccions es poden duplicar com a {{ui:Còpia pròpia}} o {{ui:Enllaçat}}; {{ui:Fes una còpia pròpia}} fa independent una vista enllaçada. Consulta [Estil de treball, vistes duplicades, plomes al paper, Informa com a i plantilles](topic:working-style).
- **Imprimeix tal com es veu, o amb una taula de plomes.** Les substitucions de ploma es desen a l'IFC amb la vista, i els fulls i els PDF les dibuixen com les dibuixa la pantalla. El mateix tema cobreix les taules de plomes.
- **{{ui:Informa com a}}.** {{ui:Informa com a}} a {{ui:Propietats}} escriu una lloseta dibuixada com una carretera, un mur com un panell o una coberta com una rampa a l'IFC com la classe que triïs, i la compta així en les taules, quantitats, Cerca, Color per i Problemes.
- **Edita en alçats i seccions.** Dibuixa i mou murs, obertures, nivells, cotes i notes directament en un alçat o una secció, amb les teves pròpies mides de full i caixetins. Consulta [Edita en alçats i seccions](topic:edit-in-elevations).
- **Fulls.** Cada full pot ser horitzontal o vertical. Una caixa {{ui:Escriviu una escala}} es troba al costat de la llista d'escales a cada vista col·locada (1:64, 2:1, 1/4" = 1'). Pots arrossegar un dibuix col·locat o moure'l amb les tecles de fletxa, i {{ui:Formats…}} › {{ui:Importa SVG…}} converteix el teu propi disseny de full en un caixetí amb camps escrits per full.
- **Crèdits de biblioteca en un full.** Un conjunt de dibuixos amb elements de biblioteca té una taula de crèdits de biblioteca que pots col·locar en qualsevol full. Consulta [Crèdits de biblioteca](topic:library-credits).

### Biblioteca: col·locació

- **La col·locació segueix la vista.** A la vista de Planta, la {{ui:Biblioteca}} mostra {{ui:Col·loca al plànol}}; en 3D mostra {{ui:Col·loca al model}}; en Divisió mostra un botó dividit amb {{ui:Col·loca al plànol}} com a acció principal. Les dues maneres escriuen el mateix element IFC. També pots arrossegar una targeta de la {{ui:Biblioteca}} a la planta o a la vista 3D; amb un llapis o un dit, prem i mantén, i després arrossega. Consulta [Col·loca des de la Biblioteca](topic:place-from-library).

### Fitxers i assistents

- **{{ui:Collada}} i Google Earth.** {{ui:Collada}} a la barra d'eines (menú Fitxer en els estils de menú) escriu un .dae, o un .kmz col·locat on és el model al mapa. Consulta [Exporta el model com a Collada o per a Google Earth](topic:collada).
- **Els assistents poden col·locar dispositius elèctrics.** El teu assistent connectat té eines noves per afegir, llistar, canviar i suprimir dispositius, i per fixar llums. Els assistents estan desactivats fins que els activis a {{ui:Configuració}}. Consulta [Deixa que un assistent d'IA treballi amb el teu model](topic:assistants).
- **Scan to BIM (complement).** Desactivat per defecte i necessita el complement Núvols de punts. Proposa lloses, murs, portes i finestres a partir d'un escaneig amb la desviació mesurada de cadascun; acceptar-los és un sol pas de desfer.

### Anàlisi

- **Dades de vent i sísmiques del lloc.** A la pestanya {{ui:Anàlisi}}: càrregues de vent segons ASCE 7-10 o 7-16 per a un edifici rígid tancat, amb una força a cada planta com a casos de càrrega, i dades sísmiques del lloc amb una consulta USGS i l'espectre de disseny.
- **Seguiment estructural i elements finits.** Comprovacions de formigó segons ACI 318-19, forces laterals equivalents segons ASCE 7-22, deriva de planta, lloses i murs com a plaques, i combinacions de càrrega d'ASCE 7 i EN 1990. El nostre propi motor d'elements finits fa closques, tetraedres i anàlisi modal. Consulta [Comprova elements de formigó i fes càrregues sísmiques](topic:concrete-and-seismic) i [Anàlisi de marcs](topic:frame-analysis).

### Altres complements i documents

- **Il·luminació interior (complement).** Col·loca lluminàries i escriu el lux com a números a la planta de cada nivell, amb una estimació d'enlluernament i un informe imprimible.
- **Panell de documents.** {{ui:Fitxer}} › {{ui:Documents…}} té retirada i devolució amb un fitxer de bloqueig, lletres de revisió, estats de publicació i historial.
- **Regions i acer.** Paquets de dibuix i de normativa de construcció sud-africans al complement de Normatives, i 976 mides d'acer britàniques a la taula de seccions compartida.
- **Complements d'impressió 3D amb resina, gratuïts.** Tallador, suports i base, prova d'exposició, i els formats de fitxer GOO, SL1, Chitubox i Anycubic, tots desactivats per defecte.

## En totes les aplicacions

- Passar el ratolí per sobre d'un botó o control mostra una indicació emergent de Bootstrap.
- La indicació d'inici a una àrea de dibuix buida té un botó de tancament; BimCraft recorda que s'ha tancat.
- La franja de pestanyes d'un panell que no hi cap ara es desplaça en lloc de quedar tallada.
- Amb un document obert, la pestanya del navegador diu «<document> - BimCraft | CadCraft».
- A {{ui:Configuració}} › {{ui:General}} › {{ui:Disposició}} les disposicions són una llista desplegable d'opcions de dues línies.
- La llista d'idiomes de {{ui:Configuració}} ofereix més idiomes que a la 0.8; els idiomes diferents de l'anglès són esborranys de màquina.

## Corregit

- **Mou funciona a les escales,** i a les rampes, baranes, plans de coberta, dispositius exempts, imatges i camins.
- **Arrossegar un mur ja no torça la sala.** La nansa central mou el mur perpendicular a si mateix i les seves cantonades llisquen al llarg dels murs units. Mantén premut {{key:Mod}} per al moviment lliure antic; {{ui:Escaira}} torna els 90 graus.
- **Un canvi de gruix o de tipus en un node unit** ara manté la cantonada tancada en una L, una T, un node de tres murs i al costat d'un mur corbat.
- **Moure o copiar un grup de sales** manté tancats els murs units que queden fora del grup.
- **Refer conserva la identitat de la cota d'un mur.**
- **Triar un mur amb {{ui:Dibuixa}} desactivat** ja no produeix cap error a {{ui:Propietats}}.
- **{{ui:Renderitza}} torna a WebGL** quan la GPU no pot arrencar, en lloc d'aturar-se.
- **La comprovació d'EnergyPlus es pot tornar a activar.**
- **Documents s'obre com un diàleg centrat.** {{key:Esc}}, la X o un clic a la pàgina atenuada el tanquen.
- **Els botons {{ui:Planta}}, {{ui:Divideix}} i {{ui:3D}} es mostren** tan bon punt hi ha un model obert, no només després que {{ui:Dibuixa}} s'hagi activat una vegada.

## Límits honestos

- No s'ha imprès res en maquinari real. Els suports de resina són nous i encara no s'han provat.
- Els resultats de vent, sísmica, formigó i elements finits són ajuts de verificació per a un enginyer, comprovats contra solucions tancades, no contra un edifici real.
- Scan to BIM s'ha provat en un edifici sintètic, no en un escaneig real, i només troba sales rectilínies.
- Collada no s'ha obert aquí a Blender ni a Google Earth.
- L'estimació d'il·luminació es comprova contra el nostre propi traçat, no contra altres programes d'il·luminació.
- Les xifres sud-africanes no estan verificades.
- Els estils d'unió de murs (topada, inglet, talla en escaire) i la prioritat de capa no estan implementats; les cantonades són en inglet.
- Els idiomes diferents de l'anglès són esborranys de màquina.

Tot el que queda és a [Què encara no està implementat](topic:not-built-yet). Els canvis anteriors són a les notes de la 0.8 i 0.8.1 més avall en aquesta pàgina.

## Anteriors: 0.8 i 0.8.1

Això és el que ha canviat a BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), en comparació amb la 0.7. BimCraft ara pot respondre preguntes sobre un edifici i provar-lo, amb persones, so, aigua, vent i terratrèmols, i dibuixar-lo amb més eines; la 0.8.1 és una versió de correcció.

### Nou

**Prova l'edifici**

- **Persones a l'edifici.** La secció {{ui:Persones a l'edifici}} del panell esquerre fa caminar una evacuació o les arribades d'un dia normal per les teves sales, portes i escales. Veus les cues on l'edifici s'estreny, el recorregut més llarg fins a una sortida des de cada sala i quant triga la darrera persona. Marca {{ui:Tancada}} en una porta per veure què canvia, i marca {{ui:Mostra les persones a la vista 3D}} per veure els vianants. Les conclusions van als Problemes. És un model de multitud aproximat per a decisions de disseny, no un certificat de seguretat contra incendis. Consulta [Fes caminar persones per l'edifici](topic:people-in-the-building).
- **Acústica de sales, i escolta-ho.** La secció {{ui:Acústica de sales}} dona el temps de reverberació de cada sala per banda d'octava (Sabine i Eyring) a partir de la seva mida i els acabats que triïs, i amb un objectiu propi diu quina absorció caldria per complir-lo. {{ui:Reprodueix-lo en aquesta sala}} reprodueix una veu, un aplaudiment, notes puntejades o el teu propi fitxer de so a través d'una resposta impulsiva calculada per a la sala. Les xifres d'absorció són valors publicats típics per a què les reemplacis. Consulta [Acústica de sales](topic:room-acoustics).
- **Reproducció d'inundacions, vent i terratrèmols.** {{ui:Reproducció de risc}} reprodueix l'aigua que puja per les sales, la pressió del vent a cada planta i un terratrèmol que sacseja les plantes, en una planta o un alçat amb un control lliscant de temps. Models simples amb les seves suposicions al panell; no és una comprovació de codi. Consulta [Reprodueix una inundació, vent o terratrèmol](topic:hazard-playback).
- **Què es desgasta en cinquanta anys.** {{ui:Vista del cicle de vida}} llista les finestres, portes, acabats i la coberta amb una vida útil cadascun, els anys en què es reemplacen i, quan escrius un cost per unitat, el cost per any i el seu valor present. {{ui:Desa el calendari (CSV)}} l'escriu. Les vides útils són xifres de planificació. Consulta [Mira què es desgasta en cinquanta anys](topic:life-cycle-view).
- **Comprovacions de formigó i sísmiques.** Els blocs {{ui:Elements de formigó}} i {{ui:Càrregues sísmiques}} de la pestanya {{ui:Anàlisi}} comproven bigues i pilars de formigó segons ACI 318-19 i fan forces laterals equivalents segons ASCE 7-22 en forjats rígids, amb deriva de planta. Perquè un enginyer les revisi. Consulta [Comprova elements de formigó i fes càrregues sísmiques](topic:concrete-and-seismic).

**Comprova i informa**

- **Comprova contra un IDS.** Carrega el fitxer `.ids` que t'ha donat un client i veu cada element que no el compleix als Problemes, abans de lliurar l'IFC. Obre {{ui:Verifica amb un IDS}} sota {{ui:Comprovacions del model}}. Consulta [Comprova un model contra l'IDS d'un client](topic:check-against-ids).
- **Etiquetes i taules.** Defineix les teves pròpies etiquetes, posa-les a molts elements alhora i fes taules les columnes, filtres i grups de les quals les llegeixin; les etiquetes es desen a l'IFC. Consulta [Etiquetes i taules](topic:tags-and-schedules).
- **{{ui:Documents del model}}.** {{ui:Documents del model}} omple una plantilla d'especificació a partir de l'IFC obert i la desa com a PDF, document de Word o Markdown. Consulta [Documents a partir del model](topic:documents-from-the-model).
- **Compara un escaneig amb el model.** Amb un núvol de punts obert, {{ui:Compara}} jutja cada element com a construït, parcialment construït, absent o no assolit, i mostra el percentatge construït. Consulta [Compara un escaneig amb el model](topic:compare-scan-with-model).
- **Carboni i cost.** El panell Carboni suma el carboni incorporat a partir d'una taula de factors que pots editar, i el panell Cost reparteix els preus pel calendari 4D. Els factors que vénen amb BimCraft són genèrics i marcats com a no comprovats. Consulta [Carboni incorporat i cost](topic:embodied-carbon-and-5d-cost).
- **Qualsevol projecció de mapa.** {{ui:Mesura}} › {{ui:Sistema de coordenades…}} accepta un número EPSG, una zona UTM, un nom o la teva pròpia definició de projecció. Consulta [Georeferencia amb qualsevol projecció](topic:georeference-any-projection).

**Dibuixa i edita**

- **Mou, Alinea i Distribueix.** Sota {{ui:Compilació}}; {{key:Shift+M}} inicia Mou (només {{key:M}} continua sent {{ui:Mesura}}). Mou copia mentre avances amb {{key:C}}, cada pas és un sol desfer, i viatja en una sessió de Live TeamWork. Consulta [Mou, copia, alinea i distribueix](topic:move-align-distribute).
- **Imatges sota la planta.** {{ui:Compilació}} › {{ui:Imatge}} col·loca un PNG, JPEG o WebP sota la planta d'un nivell o en un pla vertical. Fixa l'escala amb dos punts, i mou, gira, esvaeix i bloqueja-la. Una àrea copiada a MarkupCraft s'enganxa a l'escala del seu full. Consulta [Posa una imatge sota la planta](topic:pictures-as-backgrounds).
- **Murs a partir d'un escaneig.** Amb un escaneig obert, els murs, les portes i les sales arriben com a propostes que mantens o rebutges una a una, en un sol pas de desfer. Només es troben murs en dues direccions perpendiculars. Consulta [Converteix un escaneig en murs](topic:scan-to-walls).
- **{{ui:Calca}}, {{ui:Plomes}} i escala d'esbós.** {{ui:Calca}} mostra un altre nivell en línies discontínues sota la planta, {{ui:Plomes}} dona als murs, portes i finestres el seu propi gruix de línia en una sola vista, i {{ui:Croquis d'escala}} converteix una línia de passeig en una escala. S'obre una malla Wavefront OBJ. Consulta [Calca un nivell, plomes i una escala a partir d'un esbós](topic:trace-pens-stairs-obj).
- **Edificis al voltant d'una adreça.** Els edificis i la parcel·la que va trobar Adreça a lloc de CivilCraft arriben com a suggeriments; marques els que vols afegir. Consulta [Comença des del lloc de CivilCraft](topic:site-from-civilcraft).
- **{{ui:Plànols de panells}}.** {{ui:Compilació}} › {{ui:Plànols de panells}} emmarca murs, forjats i cobertes en fusta o acer de calibre lleuger i desa una llista de talls com a CSV i els plànols de taller com a PDF. Valors inicials, no un disseny estructural. Consulta [Plànols de panells](topic:panel-drawings).
- **{{ui:Paleta de símbols}} i plantes.** {{ui:Compilació}} › {{ui:Paleta de símbols}} troba símbols elèctrics i de fontaneria pel nom; la font {{ui:Plantes}} de la {{ui:Biblioteca}} llista unes 400 plantes amb símbols de planta. Consulta [Paleta de símbols](topic:symbol-palette) i [Col·loca una planta](topic:plant-list).

**Canonades, conductes i energia**

- **Split, VRF i fan coils.** Unitats interiors i exteriors amb les seves connexions, i línies de conjunt dimensionades a partir d'una taula de valors d'exemple típics que pots canviar. Consulta [Split, VRF i fan coils](topic:split-vrf-fan-coils).
- **Càlculs.** El panell de Càlculs comprova la mida de les canonades d'alimentació i de conductes amb la pèrdua de pressió, fa passar cables per safates i canalitzacions i mostra el seu ompliment, i calcula la il·luminació a partir de fitxers IES o EULUMDAT. Els valors per defecte estan etiquetats; escriu els valors del teu codi. Consulta [Càlculs de canonades, conductes, cables i llum](topic:mep-calculations).
- **Fitxers PCF.** L'**Exporta PCF** de l'eina de canonada escriu els recorreguts per a programes d'esforç de canonades i isomètrics, i un fitxer PCF llegit de nou dibuixa la seva canonada. Consulta [Fitxers de components de canonada](topic:piping-pcf).
- **Fotovoltaica.** Col·loca matrius a les cobertes o al terra, ombreja-les a partir del model, estima l'energia anual, comprova les cadenes i fa dades d'esquema unifilar. El mòdul inicial i les pèrdues són genèrics. Consulta [Fotovoltaica](topic:solar-pv).
- **Fitxer EnergyPlus.** El panell Comprova amb EnergyPlus escriu el model com un IDF per executar al teu propi EnergyPlus. Executar-lo al navegador necessita una versió que allotgis tu i l'adreça de la qual escrius; BimCraft no la porta. Consulta [Comprova la calefacció i la refrigeració amb EnergyPlus](topic:check-with-energyplus).

**Imatges i fitxers**

- **Tria el motor de render.** {{ui:Renderitza}} té una opció {{ui:Motor}}. Els nostres dos motors integrats (Ràpid i Traçador de camins) es mantenen per defecte. **Obre a** desa l'escena com a fitxer USD o glTF, i una carpeta de projecte Unreal com a .zip; a CadCraft Studio un complement pot afegir un motor. El connector d'Unreal que obre el projecte no està publicat. Consulta [Tria quin programa dibuixa la imatge](topic:render-engines).
- **Desfer a Studio.** Dins de CadCraft Studio, BimCraft diu a Studio cada pas acabat perquè Studio pugui desfer el teu darrer pas a la finestra que hagis fet servir per últim. Consulta [Desfer entre aplicacions](topic:undo-across-apps).
- **Complements al teu fitxer.** Un IFC registra quins complements hi han escrit, i quan l'obres ofereix els que no tens. Consulta [Complements al teu fitxer](topic:add-ons-in-your-file).

**A totes les aplicacions**

- **Connecta la teva IA.** El teu propi assistent pot conduir BimCraft a través de la connexió de Studio i respondre preguntes sobre el model, com quines sales hi ha sota una àrea donada. Studio no té cap IA pròpia. Consulta [Deixa que un assistent d'IA treballi amb el teu model](topic:assistants).
- **Barres de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} ofereix Ajustar, 2 files o 1 fila; Ajustar es manté com a opció per defecte.
- **Dispositius d'entrada.** La configuració del ratolí tàctil, la ploma, el ratolí 3D, el comandament i el MIDI és compartida per totes les aplicacions.
- **Problemes i Live.** El panell d'avisos i les sessions Live funcionen com abans, i les noves comprovacions anteriors alimenten els Problemes.
- **Idiomes.** 54 idiomes, deu d'ells nous. Els que no són anglès són esborranys de màquina que encara no ha llegit un parlant natiu; els temes d'ajuda són majoritàriament en anglès.

### Corregit a la 0.8.1

- **Disposició de la cinta + navegador de projecte.** Insereix › Importa CAD, Insereix › Imatge i Gestiona › Unitats del projecte deien «Encara no implementat a BimCraft». Imatge ara obre l'eina Imatge, Importa CAD obre {{ui:Compilació}} › {{ui:Des d'un dibuix…}} (DWG, DXF, PDF o un escaneig), i Unitats del projecte obre {{ui:Configuració}} › {{ui:Global}} › {{ui:Unitats}}. Move i Align executen les eines Move i Align, Nivell obre {{ui:Afegeix nivells…}}, Fases obre la secció de fases de reforma, i Materials obre la biblioteca de materials.
- **Secció de classes DWG.** Es llegia com el tipus equivocat; corregit a BimCraft i a les altres aplicacions que llegeixen DWG.
- **Idioma en execució.** Studio i les edicions empaquetades ara poden canviar d'idioma sense reiniciar. Encara no s'ha provat en totes les plataformes; digues-nos si l'idioma no canvia.
- **Script de paquet d'Archicad.** `archicad_bundle.py`, una descàrrega a part, ara troba la ruta d'Archicad, vigila la carpeta durant fins a 20 segons i reintenta al costat del paquet.

### Encara no en aquesta versió

- **Eines de seguretat i de disseny.** Persones a l'edifici no té un límit de distància de recorregut d'un codi de construcció (tu escrius el límit) i no s'ha comprovat a mà en un plànol real. Les xifres d'acústica, de cicle de vida i de perill són valors de planificació, no una comprovació de codi.
- **Canvi climàtic i EnergyPlus.** No hi ha futurs climàtics integrats: pots carregar un fitxer d'escenari per a l'execució d'inundació. L'execució d'EnergyPlus al navegador no forma part d'aquesta versió.
- **Disposició de la cinta.** Material Takeoff continua com «Encara no implementat» perquè BimCraft no té una llista de quantitats de materials, i 54 altres eines de cinta en gris no tenen encara cap eina de BimCraft al darrere.
- **Signatura i plataformes.** Els instal·ladors de Windows i el .dmg de macOS no estan signats, de manera que SmartScreen mostra {{ui:Més informació}} i després {{ui:Executa igualment}}, i macOS necessita clic dret i després {{ui:Obre}}. La versió per a iPad i iPhone no es va reconstruir per a la 0.8.1.
- **Proves de pàgina real.** Algunes proves antigues del navegador de BimCraft continuen fallant a la nostra pàgina de prova, com abans de la 0.8.1.

Tot el que queda és a [Què encara no està implementat](topic:not-built-yet). Els canvis anteriors són a [Novetats de la versió 0.7](topic:whats-new-0-7).
