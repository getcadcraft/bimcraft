---
title: Novetats de la 0.9 (anteriors)
summary: Formes de mur, divisió, desplaçament, estirament i bloqueig a la quadrícula, nivells per sota del terra, cotes de graella i mesura al plànol, vistes duplicades amb estils de treball i taules de plomes, Informa com a, exportació a Collada i Google Earth, Scan to BIM, anàlisi de vent i sísmica, complements d'impressió de resina.
keywords: novetats 0.9, versió anterior, novetats, 0.9, notes de versió, formes de mur, rectangle, polígon, arc, triar línies, contorn de calca, desplaçament, unió, estirament per caixa, alinea i bloqueja, divideix mur, interval, torna a unir, bloqueja a la quadrícula, creix des de, mesura des de, afegeix un nivell per sota, soterrani, ordre de nivell, cotes de graella, mesura al plànol, estil de treball, duplica vista, còpia pròpia, vista enllaçada, taula de plomes, imprimeix tal com es veu, informa com a, escriu una escala, importa svg, col·loca al plànol, col·loca al model, collada, dae, kmz, google earth, scan to bim, càrrega de vent, sísmic, elements finits, tauler de documents, impressió de resina, què hi ha de nou, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, evacuació, persones, cues, acústica, reverberació, resposta impulsiva, inundació, vent, terratrèmol, risc, cicle de vida, vida útil, ids, etiquetes, quadres, mou, alinea, distribueix, imatge, fons, murs a partir d'un escaneig, emplaçament des de civilcraft, plànols de panells, enquadrament, solar, fv, split, vrf, fan coil, dimensionat de canonades, safata de cables, il·luminància, formigó, sísmic, comparar escaneig, epsg, projecció, documents, plantilla, carboni, cost, energyplus, motor de renderització, obre amb, usd, glb, unreal, desfer, complements, pcf, símbols, plantes, calca, plomes, cinta, navegador de projectes, disposició
from: 816df7f8
---

Aquests són els canvis de BimCraft 0.9 respecte de la 0.8.1. Els dos temes principals són una eina de murs de debò i vistes que es comporten com esperen les persones que venen dels grans programes BIM. Al voltant hi ha l'exportació a Collada, els assistents que poden col·locar aparells elèctrics, Scan to BIM, i la feina de vent, sísmica i d'elements finits a la pestanya {{ui:Anàlisi}}.

## Novetats

### Murs

- **Dibuixeu formes completes.** A {{ui:Dibuixa}}, obriu {{ui:Formes}} (o trieu una forma a la llista Forma de la fila Mur) per a un rectangle, un rectangle girat, un polígon de 3 a 64 costats, un arc per centre, un arc tangent, murs sobre línies triades, o murs al voltant d'una àrea tancada on feu clic. Un rectangle són quatre murs amb quatre cantonades unides i un sol pas de desfer. Vegeu [Formes de mur, divisió, desplaçament, estirament i bloqueig](topic:wall-tools).
- **Definiu abans de dibuixar, canvieu després.** La fila Mur té {{ui:Desplaçament}} i {{ui:Unió}} (desmarqueu-ho per dibuixar murs independents). Després, useu {{ui:Desplaçament}}, {{ui:Estirament per caixa}} i {{ui:Alinea i bloqueja}} sobre els murs dibuixats. Un mur desplaçat o estirat conserva les seves portes, finestres i cotes. Cada operació és un sol pas de desfer.
- **Retalleu murs.** {{ui:Divideix}}, {{ui:Interval}}, {{ui:Extrems lliures}}, {{ui:Suprimeix tram}} i {{ui:Torna a unir}} tallen un mur amb un clic o on hi creua un altre mur. Un tall per una porta es rebutja. Vegeu [Formes de mur, divisió, desplaçament, estirament i bloqueig](topic:wall-tools).
- **Bloquegeu els murs a les línies de graella.** Seleccioneu un mur al llarg d'una línia de graella i marqueu {{ui:Bloqueja a la quadrícula}} a {{ui:Propietats}}. Amb l'eina {{ui:Graella}} activada, escriviu una distància a {{ui:Mou per}} per a una línia triada, i els murs bloquejats la segueixen en un sol pas de desfer.
- **Doneu forma a un mur.** A {{ui:Propietats}} d'un mur podeu lligar-ne la part superior o la base a una coberta, un forjat o un sostre, editar-ne el contorn d'alçat, inclinar-lo, o tallar una obertura al mur sense porta ni finestra. Vegeu [Forma del mur](topic:wall-shape).
- **La longitud indica quin extrem es manté.** {{ui:Creix des de}} defineix si l'inici, el final o el centre es mantenen fixos quan canvieu la longitud.
- **La longitud i la cota del plànol coincideixen.** {{ui:Mesura des de}} (línia de centre, cara interior o cara exterior) regeix tant el camp Longitud com les cotes de mur del plànol. Comença a la línia de centre, de manera que les cotes de mur del plànol ara llegeixen la línia de centre allà on abans llegien la cara exterior. Canvieu-ho a la fila Mur, a {{ui:Propietats}} o a {{ui:Configuració}} › {{ui:BimCraft}} › {{ui:Murs}}.

### Nivells, graelles i mesura

- **Afegiu un nivell per sota.** {{ui:Afegeix un nivell per sota}} al tauler {{ui:Nivells}} afegeix un nivell sota el més baix, de la mateixa alçada, a una cota negativa (Nivell -1, Nivell -2). No es mou res més. {{ui:Afegeix nivells…}} ara accepta alçades negatives. Escriure LEVEL, LEVELS, STOREY o STOREYS a la línia d'ordres obre {{ui:Afegeix nivells…}}, i hi ha un botó {{ui:Nivells}} als menús i a les pestanyes de la cinta. Vegeu [Emplaçaments, edificis i nivells](topic:site-building-and-levels).
- **Cotes de graella al plànol.** Amb l'eina {{ui:Graella}} activada, marqueu {{ui:Dimensions}} per dibuixar la separació entre línies veïnes i la mida total més enllà dels cercles dels extrems, al plànol de cada nivell. Vegeu [Acotar una graella](topic:grid-dimensions).
- **Mesura al plànol.** {{ui:Mesura}} al grup {{ui:Dibuixa}} dona una distància amb les diferències X i Y entre dos clics. No es desa res al model. Vegeu [Mesura al plànol](topic:measure-on-the-plan).
- **Canvieu diverses columnes alhora.** Trieu columnes juntament amb un mur, i la llista de selecció enumera cada tipus amb {{ui:Mantén només aquests}}. Un clic manté les columnes i mostra els seus camps comuns.
- **Una sola unitat de visualització a tot arreu.** Les coordenades, les mesures, les seccions, les escales de full, les càrregues i els resultats de la pestanya de pòrtics, i el text de Problemes segueixen la unitat que trieu. Les exportacions es mantenen en SI.

### Vistes, fulls i impressió

- **Estil de treball.** {{ui:Configuració}} › {{ui:BimCraft}} › {{ui:Estil de treball}} tria entre que cada vista tingui les seves pròpies anotacions i taules de plomes, o que les comparteixi. Vegeu [Estil de treball, vistes duplicades, plomes al paper, Informa com a i plantilles](topic:working-style).
- **Dupliqueu una vista.** Les plantes, les plantes de sostre, les crides, els alçats i les seccions es poden duplicar com a {{ui:Còpia pròpia}} o {{ui:Enllaçat}}; {{ui:Fes una còpia pròpia}} fa independent una còpia enllaçada. Vegeu [Estil de treball, vistes duplicades, plomes al paper, Informa com a i plantilles](topic:working-style).
- **Imprimeix tal com es veu, o amb una taula de plomes.** Els canvis de plomes es guarden a l'IFC amb la vista, i els fulls i els PDF els dibuixen tal com els mostra la pantalla. El mateix tema tracta les taules de plomes.
- **Informa com a.** {{ui:Informa com a}} a {{ui:Propietats}} escriu a l'IFC un forjat dibuixat com a carretera, un mur com a panell o una coberta com a rampa, amb la classe que trieu, i ho compta així als quadres, a les quantitats, a la {{ui:Cerca}}, a {{ui:Color segons}} i a Problemes.
- **Editeu en alçats i seccions.** Dibuixeu i moveu murs, obertures, nivells, cotes i notes directament en un alçat o una secció, amb les vostres mides de full i caixetins. Vegeu [Edita en alçats i seccions](topic:edit-in-elevations).
- **Fulls.** Cada full pot ser apaïsat o vertical. Un quadre {{ui:Escriviu una escala}} es troba al costat de la llista d'escales de cada vista col·locada (1:64, 2:1, 1/4" = 1'). Podeu arrossegar un dibuix col·locat o desplaçar-lo amb les tecles de fletxa, i {{ui:Formats…}} › {{ui:Importa SVG…}} converteix el vostre propi disseny de full en un caixetí amb camps escrits per full.
- **Atribucions de la biblioteca en un full.** Un joc de dibuixos amb elements de la Biblioteca rep un quadre de crèdits de la biblioteca que podeu col·locar en qualsevol full. Vegeu [Crèdits de la biblioteca](topic:library-credits).

### Biblioteca: col·locació

- **La col·locació segueix la vista.** A la vista Planta, la Biblioteca mostra {{ui:Col·loca al plànol}}; en 3D mostra {{ui:Col·loca al model}}; en Dividida mostra un botó dividit amb {{ui:Col·loca al plànol}} com a acció principal. Les dues maneres escriuen el mateix element IFC. També podeu arrossegar una targeta de la Biblioteca al plànol o a la vista 3D; amb un llapis o un dit, premeu i manteniu, i després arrossegueu. Vegeu [Col·loca des de la Biblioteca](topic:place-from-library).

### Fitxers i assistents

- **Collada i Google Earth.** {{ui:Collada}} a la barra d'eines (menú Fitxer en els estils amb menús) escriu un .dae, o un .kmz col·locat on és el model al mapa. Vegeu [Exporta el model com a Collada o per a Google Earth](topic:collada).
- **Els assistents poden col·locar aparells elèctrics.** L'assistent connectat té eines noves per afegir, enumerar, canviar i suprimir aparells, i per configurar els llums. Els assistents estan desactivats fins que els activeu a {{ui:Configuració}}. Vegeu [Deixeu que un assistent d'IA treballi amb el vostre model](topic:assistants).
- **Scan to BIM (complement).** Desactivat per defecte i necessita el complement Núvols de punts. Proposa forjats, murs, portes i finestres a partir d'un escaneig, amb la desviació mesurada per a cadascun; acceptar-ho és un sol pas de desfer.

### Anàlisi

- **Dades de vent i sísmiques de l'emplaçament.** A la pestanya {{ui:Anàlisi}}: càrregues de vent segons ASCE 7-10 o 7-16 per a un edifici rígid tancat, amb una força a cada planta com a casos de càrrega, i dades sísmiques de l'emplaçament amb una consulta a USGS i l'espectre de disseny.
- **Seguiment estructural i elements finits.** Comprovacions de formigó segons ACI 318-19, forces laterals equivalents segons ASCE 7-22, deriva entre plantes, forjats i murs com a plaques, i combinacions de càrregues segons ASCE 7 i EN 1990. El nostre propi motor d'elements finits fa closques, tetraedres i anàlisi modal. Vegeu [Comprova elements de formigó i fes càrregues sísmiques](topic:concrete-and-seismic) i [Anàlisi de pòrtics](topic:frame-analysis).

### Altres complements i documents

- **Il·luminació interior (complement).** Col·loca lluminàries i escriu els lux com a números a la planta de cada nivell, amb una estimació d'enlluernament i un informe imprimible.
- **Tauler de documents.** {{ui:Fitxer}} › {{ui:Documents…}} té l'extracció i la retorn amb un fitxer de bloqueig, lletres de revisió, estats de publicació i historial.
- **Regions i acer.** Paquets de dibuix i de normativa de construcció sud-africana al complement de normatives, i 976 mides d'acer britàniques a la taula de seccions compartida.
- **Complements gratuïts d'impressió de resina.** Laminador, suports i base, prova d'exposició, i els formats de fitxer GOO, SL1, Chitubox i Anycubic, tots desactivats per defecte.

## En totes les apps

- Si passeu el ratolí per sobre d'un botó o control, es mostra un suggeriment emergent de Bootstrap.
- El consell d'inici a una àrea de dibuix buida té un botó de tancar; BimCraft recorda que s'ha tancat.
- La franja de pestanyes d'un tauler que no hi cap ara es desplaça en lloc de quedar tallada.
- Amb un document obert, la pestanya del navegador diu "<document> - BimCraft | CadCraft".
- A {{ui:Configuració}} › {{ui:General}} › {{ui:Disposició}} les disposicions són un desplegable d'opcions de dues línies.
- La llista d'idiomes de {{ui:Configuració}} ofereix més idiomes que a la 0.8; els idiomes diferents de l'anglès són esborranys automàtics.

## Corregit

- **Mou funciona a les escales,** i a les rampes, les barandes, els plans de coberta, els aparells independents, les imatges i els camins.
- **Arrossegar un mur ja no deforma la sala.** La nansa central mou el mur mantenint-lo quadrat, i les seves cantonades llisquen pels murs units. Manteniu {{key:Mod}} per al moviment lliure antic; {{ui:Escaira}} torna a posar els 90 graus.
- **Un canvi de gruix o de tipus en un node unit** ara manté la cantonada tancada en una L, una T, un node de tres murs i al costat d'un mur corbat.
- **Moure o copiar un grup de sales** manté units els murs units fora del grup.
- **Refés manté la identitat d'una cota de mur.**
- **Triar un mur amb Dibuixa desactivat** ja no provoca cap error a Propietats.
- **Renderitza passa a WebGL** quan la GPU no pot iniciar-se, en lloc d'aturar-se.
- **La comprovació d'EnergyPlus es pot tornar a activar.**
- **Documents s'obre com a diàleg centrat.** {{key:Esc}}, la X o un clic a la pàgina atenuada el tanquen.
- **Els botons {{ui:Planta}}, {{ui:Dividida}} i {{ui:3D}} es mostren** tan bon punt hi ha un model obert, no només després d'haver activat {{ui:Dibuixa}} una vegada.

## Límits sincers

- No s'ha imprès res en maquinari real. Els suports de resina són nous i no provats.
- Els resultats de vent, sísmics, de formigó i d'elements finits són ajuts de comprovació per a un enginyer, verificats amb fórmules tancades, no amb un edifici real.
- Scan to BIM s'ha provat amb un edifici sintètic, no amb un escaneig real, i només troba sales rectilínies.
- Aquí no s'ha obert Collada a Blender ni a Google Earth.
- L'estimació d'il·luminació es comprova amb el nostre propi traçat, no amb altres programes d'il·luminació.
- Les xifres sudafricanes no estan verificades.
- Els estils d'unió de murs (a topall, a ingletat, tallats en quadrat) i la prioritat de capes encara no estan implementats; les cantonades són a ingletat.
- Els idiomes diferents de l'anglès són esborranys automàtics.

Tota la resta és a [Què encara no està implementat](topic:not-built-yet). Els canvis anteriors són a les notes de la 0.8 i la 0.8.1, més avall en aquesta pàgina.

## Anteriors: 0.8 i 0.8.1

Aquests són els canvis de BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), respecte de la 0.7. BimCraft ara pot respondre preguntes sobre un edifici i provar-lo, amb persones, so, aigua, vent i sismes, i dibuixar-lo amb més eines; la 0.8.1 és una versió de correcció.

### Novetats

**Proveu l'edifici**

- **Persones a l'edifici.** La secció {{ui:Persones a l'edifici}} del panell esquerre fa passar una evacuació o les entrades d'un dia normal per les vostres sales, portes i escales. Veieu les cues on l'edifici s'estreny, el recorregut més llarg fins a una sortida des de cada sala i el temps que triga l'última persona. Marqueu {{ui:Tancada}} a una porta per veure què canvia, i marqueu {{ui:Mostra les persones a la vista 3D}} per veure els vianants. Els resultats van a Problemes. És un model de multituds aproximat per a decisions de disseny, no un certificat de seguretat contra incendis. Vegeu [Feu passar persones per l'edifici](topic:people-in-the-building).
- **Acústica de sales, i escolteu-la.** La secció {{ui:Acústica de sales}} dona el temps de reverberació de cada sala per banda d'octava (Sabine i Eyring) a partir de la seva mida i dels acabats que trieu, i amb un objectiu propi indica quina absorció caldria per complir-lo. {{ui:Reprodueix-lo en aquesta sala}} reprodueix una veu, un aplaudiment, notes polsades o un fitxer de so propi a través d'una resposta impulsiva calculada per a la sala. Les xifres d'absorció són valors publicats típics que podeu substituir. Vegeu [Acústica de sales](topic:room-acoustics).
- **Reproducció d'inundació, vent i terratrèmol.** {{ui:Reproducció de risc}} reprodueix l'aigua que puja per les sales, la pressió del vent a cada planta i un terratrèmol que sacseja les plantes, en una planta o un alçat amb un control lliscant de temps. Models senzills amb les seves hipòtesis al panell; no és una comprovació normativa. Vegeu [Reprodueix una inundació, vent o terratrèmol](topic:hazard-playback).
- **Què es desgasta en cinquanta anys.** {{ui:Vista del cicle de vida}} enumera les finestres, les portes, els acabats i la coberta amb una vida útil cadascun, els anys en què se substitueixen i, quan escriviu un cost per unitat, el cost per any i el seu valor actual. {{ui:Desa el calendari (CSV)}} l'escriu en un fitxer. Les vides útils són xifres de planificació. Vegeu [Vegeu què es desgasta en cinquanta anys](topic:life-cycle-view).
- **Comprovacions de formigó i sísmiques.** Els blocs {{ui:Elements de formigó}} i {{ui:Càrregues sísmiques}} de la pestanya {{ui:Anàlisi}} comproven bigues i pilars de formigó segons ACI 318-19, i calculen forces laterals equivalents segons ASCE 7-22 en forjats rígids, amb la deriva entre plantes. Per a la comprovació d'un enginyer. Vegeu [Comprova elements de formigó i fes càrregues sísmiques](topic:concrete-and-seismic).

**Comprova i informa**

- **Verifica amb un IDS.** Carregueu el fitxer `.ids` que us ha donat un client i vegeu a Problemes cada element que no el compleix, abans de lliurar l'IFC. Obriu {{ui:Verifica amb un IDS}} sota {{ui:Comprovacions del model}}. Vegeu [Verifica un model amb l'IDS d'un client](topic:check-against-ids).
- **Etiquetes i quadres.** Definiu les vostres pròpies etiquetes, assigneu-les a molts elements alhora i feu quadres amb columnes, filtres i grups que les llegeixin; les etiquetes es mantenen a l'IFC. Vegeu [Etiquetes i quadres](topic:tags-and-schedules).
- **Documents del model.** {{ui:Documents del model}} omple una plantilla d'especificació a partir de l'IFC obert i la desa com a PDF, document Word o Markdown. Vegeu [Documents a partir del model](topic:documents-from-the-model).
- **Compara un escaneig amb el model.** Amb un núvol de punts obert, {{ui:Compara}} jutja cada element com a construït, parcialment construït, que falta o no assolit, i mostra el percentatge construït. Vegeu [Compara un escaneig amb el model](topic:compare-scan-with-model).
- **Carboni i cost.** El tauler de Carboni suma el carboni incorporat a partir d'una taula de factors que podeu editar, i el tauler de cost reparteix els preus pel quadre 4D. Els factors que vénen amb BimCraft són genèrics i estan marcats com a no verificats. Vegeu [Carboni incorporat i cost](topic:embodied-carbon-and-5d-cost).
- **Qualsevol projecció cartogràfica.** {{ui:Mesura}} › {{ui:Sistema de coordenades…}} accepta un número EPSG, una zona UTM, un nom o la vostra pròpia definició de projecció. Vegeu [Georeferència amb qualsevol projecció](topic:georeference-any-projection).

**Dibuixa i edita**

- **Mou, alinea i distribueix.** Sota {{ui:Compilació}}; {{key:Shift+M}} inicia Mou (la tecla {{key:M}} sola segueix sent Mesura). Amb {{key:C}}, Mou copia a mesura que avança; cada pas és un sol desfer, i viatja en una sessió de Live TeamWork. Vegeu [Mou, copia, alinea i distribueix](topic:move-align-distribute).
- **Imatges sota la planta.** {{ui:Compilació}} › {{ui:Imatge}} col·loca un PNG, JPEG o WebP sota la planta d'un nivell o en un pla vertical. Definiu l'escala amb dos punts, i després mogueu-la, gireu-la, esvaïu-la i bloquegeu-la. Una àrea copiada a MarkupCraft s'enganxa a l'escala del seu full. Vegeu [Poseu una imatge sota la planta](topic:pictures-as-backgrounds).
- **Murs a partir d'un escaneig.** Amb un escaneig obert, els murs, les portes i les sales arriben com a propostes que conserveu o rebutgeu una a una, en un sol pas de desfer. Només es troben murs en dues direccions perpendiculars. Vegeu [Convertiu un escaneig en murs](topic:scan-to-walls).
- **Calca, plomes i croquis d'escala.** {{ui:Calca}} mostra un altre nivell a traços sota la planta, {{ui:Plomes}} dona als murs, les portes i les finestres el seu propi gruix de línia en una vista, i {{ui:Croquis d'escala}} converteix una línia de recorregut en una escala. S'obre una malla Wavefront OBJ. Vegeu [Calca un nivell, plomes i una escala a partir d'un croquis](topic:trace-pens-stairs-obj).
- **Edificis al voltant d'una adreça.** Els edificis i la parcel·la que ha trobat l'eina Adreça a emplaçament de CivilCraft arriben com a suggeriments; marqueu els que voleu afegir. Vegeu [Comenceu des de l'emplaçament de CivilCraft](topic:site-from-civilcraft).
- **Plànols de panells.** {{ui:Compilació}} › {{ui:Plànols de panells}} emmarca murs, forjats i cobertes en fusta o acer de perfil prim, i desa una llista de talls en CSV i plànols de taller en PDF. Valors de partida, no un disseny estructural. Vegeu [Plànols de panells](topic:panel-drawings).
- **Paleta de símbols i plantes.** {{ui:Compilació}} › {{ui:Paleta de símbols}} troba símbols elèctrics i de fontaneria pel nom; la font {{ui:Plantes}} de la {{ui:Biblioteca}} enumera unes 400 plantes amb símbols de planta. Vegeu [Paleta de símbols](topic:symbol-palette) i [Col·loqueu una planta](topic:plant-list).

**Canonades, conductes i energia**

- **Split, VRF i fan coils.** Unitats interiors i exteriors amb les seves connexions, i conjunts de línies dimensionats a partir d'una taula de valors d'exemple típics que podeu canviar. Vegeu [Split, VRF i fan coils](topic:split-vrf-fan-coils).
- **Càlculs.** El tauler de càlculs comprova les mides de les canonades i dels conductes d'alimentació amb la caiguda de pressió, encamina cables per safates i tubs i mostra'n l'ompliment, i calcula la il·luminància a partir de fitxers IES o EULUMDAT. Els valors per defecte estan etiquetats; escriviu els valors de la vostra normativa. Vegeu [Càlculs de canonades, conductes, cables i llum](topic:mep-calculations).
- **Fitxers PCF.** L'eina Canonada, **Exporta PCF**, escriu els trams per als programes d'esforç de canonades i isomètrics, i un fitxer PCF llegit de nou dibuixa la seva canonada. Vegeu [Fitxers de components de canonades](topic:piping-pcf).
- **Solar fotovoltaica.** Instal·leu matrius a les cobertes o al terreny, ombregeu-les segons el model, estimeu l'energia anual, comproveu les sèries i genereu dades de diagrama unifilar. El mòdul inicial i les pèrdues són genèrics. Vegeu [Solar fotovoltaica](topic:solar-pv).
- **Fitxer EnergyPlus.** El tauler Comprova amb EnergyPlus escriu el model com a IDF per executar-lo al vostre propi EnergyPlus. Executar-lo al navegador requereix una compilació que allotgeu vosaltres i de la qual escriviu l'adreça; BimCraft no la porta. Vegeu [Comprova la calefacció i la refrigeració amb EnergyPlus](topic:check-with-energyplus).

**Imatges i fitxers**

- **Trieu el motor de renderització.** {{ui:Renderitza}} té una opció {{ui:Motor}}. Els nostres dos motors integrats (Ràpid i Traçador de camins) continuen sent els predeterminats. **Obre amb** desa l'escena com a fitxer USD o glTF, i una carpeta de projecte d'Unreal com a .zip; a CadCraft Studio, un complement pot afegir un motor. El connector d'Unreal que obre el projecte no està publicat. Vegeu [Trieu quin programa dibuixa la imatge](topic:render-engines).
- **Desfer a Studio.** Dins de CadCraft Studio, BimCraft informa Studio de cada pas acabat perquè Studio pugui desfer el vostre últim pas a la finestra que hàgiu usat més recentment. Vegeu [Desfeu entre aplicacions](topic:undo-across-apps).
- **Complements al fitxer.** Un IFC registra quins complements hi han escrit, i en ofereix els que us falten quan l'obriu. Vegeu [Complements al vostre fitxer](topic:add-ons-in-your-file).

**En totes les apps**

- **Connecteu la vostra IA.** El vostre propi assistent pot controlar BimCraft a través de la connexió de Studio i respondre preguntes sobre el model, com quines sales són sota una àrea donada. Studio no té IA pròpia. Vegeu [Deixeu que un assistent d'IA treballi amb el vostre model](topic:assistants).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} ofereix Ajusta, 2 files o 1 fila; Ajusta continua sent el predeterminat.
- **Dispositius d'entrada.** La configuració del trackpad, el llapis, el ratolí 3D, el comandament i MIDI es comparteix amb totes les apps.
- **Problemes i Live.** El tauler d'avisos i les sessions de Live funcionen com abans, amb les noves comprovacions de dalt alimentant Problemes.
- **Idiomes.** 54 idiomes, deu d'ells nous. Els que no són l'anglès són esborranys automàtics que encara no ha llegit cap parlant nadiu; els temes d'ajuda són sobretot en anglès.

### Corregit a la 0.8.1

- **Disposició de la cinta i del navegador de projectes.** Insert › Import CAD, Insert › Image i Manage › Project Units deien "Encara no implementat a BimCraft". Image ara obre l'eina Imatge, Import CAD obre {{ui:Compilació}} › {{ui:Des d'un dibuix…}} (DWG, DXF, PDF o un escaneig), i Project Units obre {{ui:Configuració}} › {{ui:Global}} › {{ui:Unitats}}. Move i Align executen les eines Mou i Alinea, Level obre {{ui:Afegeix nivells…}}, Phases obre la secció de fases de reforma i Materials obre la biblioteca de materials.
- **Secció de classes DWG.** Es llegia com a tipus equivocat; corregit a BimCraft i a les altres apps que llegeixen DWG.
- **Idioma en temps d'execució.** Studio i les edicions empaquetades ja poden canviar d'idioma sense reiniciar. Encara no s'ha provat a totes les plataformes; digueu-nos si l'idioma no canvia.
- **Script del paquet d'Archicad.** `archicad_bundle.py`, una descàrrega separada, ara troba el camí d'Archicad, vigila la carpeta fins a 20 segons i ho torna a provar al costat del paquet.

### Encara no en aquesta versió

- **Ajuts de seguretat i de disseny.** Persones a l'edifici no té límit de distància de recorregut segons una normativa de construcció (el límit l'escriviu vosaltres), i no s'ha comprovat a mà en un plànol real. Les xifres d'acústica, de cicle de vida i de risc són valors de planificació, no una comprovació normativa.
- **Escenaris climàtics i EnergyPlus.** Sense escenaris climàtics integrats: podeu carregar un fitxer d'escenari per a la simulació d'inundació. L'execució d'EnergyPlus al navegador no forma part d'aquesta versió.
- **Disposició de la cinta.** Material Takeoff continua "Not built" perquè BimCraft no té llista de quantitats de materials, i 54 altres eines de la cinta en gris encara no tenen cap eina de BimCraft al darrere.
- **Signatura i plataformes.** Els instal·ladors de Windows i el .dmg de macOS no estan signats, així que SmartScreen mostra {{ui:Més informació}}, i després {{ui:Executa igualment}}, i macOS requereix un clic dret i després {{ui:Obre}}. La versió per a iPad i iPhone no es va recompilar per a la 0.8.1.
- **Proves a pàgines reals.** Algunes proves antigues del navegador de BimCraft encara fallen a la nostra pàgina de proves, com ho feien abans de la 0.8.1.

Tota la resta és a [Què encara no està implementat](topic:not-built-yet). Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
