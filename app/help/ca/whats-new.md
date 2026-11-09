---
title: Novetats de la 0.8 i la 0.8.1
summary: BimCraft afegeix persones que caminen per l'edifici, acústica de sales que pots escoltar, reproducció d'inundacions, vent i terratrèmols, una vista del cicle de vida de cinquanta anys, comprovacions amb un IDS, etiquetes i calendaris, Mou, Alinea i Distribueix, imatges sota el plànol, murs a partir d'un escaneig, plànols de panells, energia solar, sistemes dividits i VRF, dimensionat de canonades i cables, comprovacions de formigó i sísmiques, qualsevol projecció de mapa, una opció de motor de renderitzat i desfer a Studio; la 0.8.1 corregeix les eines en gris de la disposició de cinta.
keywords: novetats, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, evacuació, persones, cues, acústica, reverberació, resposta a l'impuls, inundació, vent, terratrèmol, risc, cicle de vida, vida útil, ids, etiquetes, calendaris, mou, alinea, distribueix, imatge, fons, escaneig a murs, lloc des de civilcraft, plànols de panells, entramat, solar, fv, dividit, vrf, ventiloconvector, dimensionat de canonades, safata de cables, il·luminància, formigó, sísmic, compara escaneig, epsg, projecció, documents, plantilla, carboni, cost, energyplus, motor de renderitzat, obre en, usd, glb, unreal, desfer, complements, pcf, símbols, plantes, calca, plomes, cinta, navegador de projectes, disposició
from: 87b03056
---

Això és el que ha canviat a BimCraft 0.8 (2026-11-01) i 0.8.1 (2026-11-02), en comparació amb la 0.7. BimCraft ara pot respondre preguntes sobre un edifici i provar-lo, amb persones, so, aigua, vent i terratrèmols, i dibuixar-lo amb més eines; la 0.8.1 és una versió de correccions.

## Novetats

### Prova l'edifici

- **Persones a l'edifici.** La secció {{ui:People in the building}} del panell esquerre fa caminar una evacuació o les arribades d'un dia normal pels teus espais, portes i escales. Veus les cues on l'edifici s'estreny, el recorregut més llarg fins a una sortida des de cada sala i quant triga la darrera persona. Activa {{ui:Shut}} en una porta per veure què canvia, i activa {{ui:Show the people in the 3D view}} per veure els caminants. Les troballes van a Problemes. És un model de multitud aproximat per a decisions de disseny, no un certificat de seguretat contra incendis. Vegeu [Fes caminar persones per l'edifici](topic:people-in-the-building).
- **Acústica de sales, i sentir-la.** La secció {{ui:Room acoustics}} dóna el temps de reverberació de cada sala per banda d'octava (Sabine i Eyring) a partir de la seva mida i dels acabats que triïs, i amb un objectiu propi indica quanta absorció caldria per complir-lo. {{ui:Play it in this room}} reprodueix una veu, un aplaudiment, notes pinçades o el teu propi fitxer de so a través d'una resposta a l'impuls calculada per a la sala. Les xifres d'absorció són valors publicats típics perquè els substitueixis. Vegeu [Acústica de sales](topic:room-acoustics).
- **Reproducció d'inundacions, vent i terratrèmols.** {{ui:Hazard playback}} reprodueix l'aigua que puja per les sales, la pressió del vent a cada planta i un terratrèmol que sacseja les plantes, en un plànol o un alçat amb un control lliscant de temps. Models senzills amb les seves hipòtesis al panell; no és una comprovació normativa. Vegeu [Reprodueix una inundació, vent o un terratrèmol](topic:hazard-playback).
- **Què es desgasta en cinquanta anys.** {{ui:Life-cycle view}} enumera les finestres, portes, acabats i la coberta amb una vida útil cadascun, els anys en què se substitueixen i, quan escrius un cost per unitat, el cost per any i el seu valor actual. {{ui:Save the schedule (CSV)}} el desa en un fitxer. Les vides útils són xifres de planificació. Vegeu [Mira què es desgasta en cinquanta anys](topic:life-cycle-view).
- **Comprovacions de formigó i sísmiques.** Els blocs {{ui:Concrete members}} i {{ui:Seismic loads}} de la pestanya {{ui:Analysis}} comproven bigues i pilars de formigó segons ACI 318-19 i calculen forces laterals equivalents segons ASCE 7-22 en forjats rígids, amb la deriva entre plantes. Perquè un enginyer ho verifiqui. Vegeu [Comprova elements de formigó i calcula càrregues sísmiques](topic:concrete-and-seismic).

### Comprova i informa

- **Comprova amb un IDS.** Carrega el fitxer `.ids` que t'ha donat un client i veu a Problemes cada element que no el compleix, abans de lliurar l'IFC. Obre {{ui:Check against an IDS}} sota {{ui:Model checks}}. Vegeu [Comprova un model amb l'IDS d'un client](topic:check-against-ids).
- **Etiquetes i calendaris.** Defineix les teves pròpies etiquetes, assigna-les a molts elements alhora i crea calendaris les columnes, filtres i grups dels quals les llegeixin; les etiquetes es guarden a l'IFC. Vegeu [Etiquetes i calendaris](topic:tags-and-schedules).
- **Documents a partir del model.** {{ui:Documents from the model}} omple una plantilla d'especificació a partir de l'IFC obert i la desa com a PDF, document de Word o Markdown. Vegeu [Documents a partir del model](topic:documents-from-the-model).
- **Compara un escaneig amb el model.** Amb un núvol de punts obert, {{ui:Compare}} jutja cada element com a construït, parcialment construït, que falta o no assolit, i mostra el percentatge construït. Vegeu [Compara un escaneig amb el model](topic:compare-scan-with-model).
- **Carboni i cost.** El panell Carboni suma el carboni incorporat a partir d'una taula de factors que pots editar, i el panell Cost reparteix els preus pel calendari 4D. Els factors que vénen amb BimCraft són genèrics i estan marcats com a no verificats. Vegeu [Carboni incorporat i cost](topic:embodied-carbon-and-5d-cost).
- **Qualsevol projecció de mapa.** {{ui:Measure}} › {{ui:Coordinate system…}} accepta un número EPSG, una zona UTM, un nom o la teva pròpia definició de projecció. Vegeu [Georeferència amb qualsevol projecció](topic:georeference-any-projection).

### Dibuixa i edita

- **Mou, Alinea i Distribueix.** Sota {{ui:Build}}; {{key:Shift+M}} inicia Mou (la {{key:M}} sola segueix sent Mesura). Mou copia mentre avances amb {{key:C}}, cada pas és un desfer i viatja en una sessió de Live TeamWork. Vegeu [Mou, copia, alinea i distribueix](topic:move-align-distribute).
- **Imatges sota el plànol.** {{ui:Build}} › {{ui:Picture}} col·loca un PNG, JPEG o WebP sota el plànol d'una planta o en un pla vertical. Fixa l'escala amb dos punts i mou-la, gira-la, esvaeix-la i bloqueja-la. Una àrea copiada a MarkupCraft s'enganxa a l'escala del seu full. Vegeu [Posa una imatge sota el plànol](topic:pictures-as-backgrounds).
- **Murs a partir d'un escaneig.** Amb un escaneig obert, els murs, portes i sales arriben com a propostes que tu mantens o refuses una a una, en un sol pas de desfer. Només es troben murs en dues direccions perpendiculars. Vegeu [Converteix un escaneig en murs](topic:scan-to-walls).
- **Calca, plomes i croquis d'escala.** {{ui:Trace}} mostra una altra planta en traç discontinu sota el plànol, {{ui:Pens}} dóna als murs, portes i finestres el seu propi gruix de línia en una sola vista, i {{ui:Sketch stair}} converteix una línia de recorregut en una escala. S'obre una malla Wavefront OBJ. Vegeu [Calca una planta, plomes i una escala a partir d'un croquis](topic:trace-pens-stairs-obj).
- **Edificis al voltant d'una adreça.** Els edificis i la parcel·la que va trobar l'eina Adreça a lloc de CivilCraft arriben com a suggeriments; marques els que vols afegir. Vegeu [Comença des del lloc de CivilCraft](topic:site-from-civilcraft).
- **Plànols de panells.** {{ui:Build}} › {{ui:Panel drawings}} emmarca murs, forjats i cobertes de fusta o d'acer de perfil lleuger, i desa una llista de talls en CSV i els plànols de taller en PDF. Són valors de partida, no un disseny estructural. Vegeu [Plànols de panells](topic:panel-drawings).
- **Símbols i plantes.** {{ui:Build}} › {{ui:Symbol palette}} troba símbols elèctrics i de fontaneria pel nom; la font {{ui:Plants}} de la {{ui:Library}} enumera unes 400 plantes amb símbols de planta. Vegeu [Paleta de símbols](topic:symbol-palette) i [Col·loca una planta](topic:plant-list).

### Canonades, conductes i energia

- **Dividit, VRF i ventiloconvectors.** Unitats interiors i exteriors amb les seves connexions, i línies dimensionades a partir d'una taula de valors d'exemple típics que pots canviar. Vegeu [Dividit, VRF i ventiloconvectors](topic:split-vrf-fan-coils).
- **Càlculs.** El panell Càlculs comprova la mida de les canonades i dels conductes amb la caiguda de pressió, encamina els cables per safates i conduïts i mostra'n l'ocupació, i calcula la il·luminància a partir de fitxers IES o EULUMDAT. Els valors per defecte estan etiquetats; escriu els valors de la teva normativa. Vegeu [Càlculs de canonades, conductes, cables i llum](topic:mep-calculations).
- **Fitxers PCF.** L'ordre **Exporta PCF** de l'eina Canonada escriu els trams per a programes d'anàlisi de tensions de canonades i per a programes isomètrics, i un fitxer PCF llegit de nou dibuixa la seva canonada. Vegeu [Fitxers de components de canonada](topic:piping-pcf).
- **Fotovoltaica (PV).** Col·loca matrius en teulades o al terreny, ombreja-les amb el model, estima l'energia anual, comprova les cadenes i crea dades per a un esquema unifilar. El mòdul inicial i les pèrdues són genèrics. Vegeu [Fotovoltaica](topic:solar-pv).
- **Fitxer d'EnergyPlus.** El panell Comprova amb EnergyPlus escriu el model com a IDF per executar-lo al teu propi EnergyPlus. Executar-lo al navegador necessita una compilació que allotges tu i on escrius l'adreça; BimCraft no la porta. Vegeu [Comprova la calefacció i la refrigeració amb EnergyPlus](topic:check-with-energyplus).

### Imatges i fitxers

- **Tria el motor de renderitzat.** {{ui:Render}} té una opció {{ui:Engine}}. Els nostres dos motors integrats (Fast i Path tracer) continuen sent els predeterminats. **Obre en** desa l'escena com a fitxer USD o glTF, i una carpeta de projecte d'Unreal com a .zip; a CadCraft Studio un complement pot afegir un motor. El connector d'Unreal que obre el projecte no s'ha publicat. Vegeu [Tria quin programa dibuixa la imatge](topic:render-engines).
- **Desfer a Studio.** Dins de CadCraft Studio, BimCraft comunica a Studio cada pas acabat perquè Studio pugui desfer el teu darrer pas en la finestra que hagis usat per últim. Vegeu [Desfer entre aplicacions](topic:undo-across-apps).
- **Complements al fitxer.** Un IFC registra quins complements hi han escrit, i n'ofereix els que no tens quan l'obres. Vegeu [Complements al fitxer](topic:add-ons-in-your-file).

### En totes les aplicacions

- **Connecta la teva IA.** El teu propi assistent pot manegar BimCraft a través de la connexió de Studio i respondre preguntes sobre el model, com quines sales són sota una àrea donada. Studio no té IA pròpia. Vegeu [Deixa que un assistent d'IA treballi amb el teu model](topic:assistants).
- **Files de la barra d'eines.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofereix Ajustat, 2 files o 1 fila; Ajustat continua sent el predeterminat.
- **Dispositius d'entrada.** La configuració de trackpad, llapis, ratolí 3D, comandament i MIDI és compartida per totes les aplicacions.
- **Problemes i Live.** El panell d'avisos i les sessions de Live funcionen com abans, i les noves comprovacions de dalt alimenten Problemes.
- **Idiomes.** 54 idiomes, deu dels quals són nous. Els que no són l'anglès són esborranys automàtics que encara no ha revisat cap parlant nadiu; els temes d'ajuda són majoritàriament en anglès.

## Corregit a la 0.8.1

- **Disposició de cinta + Navegador de projectes.** Insereix › Importa CAD, Insereix › Imatge i Gestiona › Unitats del projecte deien "Encara no implementat a BimCraft". Imatge ara obre l'eina Imatge, Importa CAD obre {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF o un escaneig), i Unitats del projecte obre {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Mou i Alinea executen les eines Mou i Alinea, Nivell obre {{ui:Add levels…}}, Fases obre la secció de fases de reforma i Materials obre la biblioteca de materials.
- **Secció de classes de DWG.** Es llegia com un tipus incorrecte; corregit a BimCraft i a les altres aplicacions que llegeixen DWG.
- **Idioma en execució.** Studio i les edicions empaquetades ja poden canviar d'idioma sense reiniciar. Encara no s'ha provat a totes les plataformes; digues-nos si l'idioma no canvia.
- **Script de paquet d'Archicad.** `archicad_bundle.py`, una descàrrega separada, ara troba el camí d'Archicad, vigila la carpeta fins a 20 segons i torna a intentar-ho al costat del paquet.

## Encara no és en aquesta versió

- **Eines de seguretat i de disseny.** Persones a l'edifici no té un límit de distància de recorregut d'un codi d'edificació (l'introdueixes tu) i no s'ha verificat a mà en un plànol real. Les xifres d'acústica, de cicle de vida i de risc són valors de planificació, no una comprovació normativa.
- **Escenaris climàtics i EnergyPlus.** No hi ha escenaris climàtics integrats: pots carregar un fitxer d'escenari per a la simulació d'inundació. L'execució d'EnergyPlus al navegador no forma part d'aquesta versió.
- **Disposició de cinta.** Amidament de materials continua "Encara no implementat" perquè BimCraft no té una llista de quantitats de materials, i 54 altres eines de cinta en gris encara no tenen cap eina de BimCraft al darrere.
- **Signatura i plataformes.** Els instal·ladors de Windows i el .dmg de macOS no estan signats, així que SmartScreen mostra {{ui:More info}} i després {{ui:Run anyway}}, i macOS necessita clic dret i després {{ui:Open}}. La compilació per a iPad i iPhone no s'ha tornat a compilar per a la 0.8.1.
- **Proves de pàgina real.** Algunes proves més antigues del navegador de BimCraft continuen fallant a la nostra pàgina de prova, com abans de la 0.8.1.

Tot el demés és a [Què no està encara implementat](topic:not-built-yet). Els canvis anteriors són a [Novetats de la 0.7](topic:whats-new-0-7).
