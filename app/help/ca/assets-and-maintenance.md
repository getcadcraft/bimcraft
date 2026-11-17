---
title: Guardeu les dades dels recursos i un registre de manteniment al model
summary: Useu el model IFC lliurat per gestionar l'edifici: fabricant, model, número de sèrie, garantia i vida útil dels equips i els accessoris, i un registre del manteniment fet, tot escrit a l'IFC.
keywords: lliurament, certificat de finalització, certificat d'ocupació, as-built, paquet de lliurament, recursos, inventari de recursos, gestió d'instal·lacions, fm, operacions, manteniment, servei, garantia, número de sèrie, codi de barres, fabricant, model, vida útil, lliurament, cobie, bessó digital, vençut, venciment, ordre de treball
from: b84ac492
---

La pestanya {{ui:Recursos}} del panell dret converteix el model IFC obert en un registre dels equips de l'edifici. Tot s'escriu al mateix IFC, en els conjunts de propietats i tasques propis de l'IFC, de manera que el següent programa que obri el fitxer també el llegeix. No es puja res i no cal cap servidor: deseu l'IFC per conservar-ho.

## Què apareix a la llista

- Equips i accessoris: mobiliari, aparells sanitaris, lluminàries, electrodomèstics, terminals d'aire, vàlvules, bombes, ventiladors, calderes, dipòsits, endolls, quadres elèctrics, ascensors i altres elements similars, i elements de biblioteca amb dades d'equip.
- Qualsevol altre element que feu **seguir**: trieu-lo al model (una porta, un mur, una bomba dibuixada com un objecte simple) i cliqueu {{ui:Segueix els triats}}.
- Qualsevol cosa que ja tingui dades de recurs o una tasca de manteniment, escrita aquí o per un altre programa.

Primer apareix el que està vençut, després el que vence en 30 dies. Filtreu per nom, etiqueta, fabricant, model o número de sèrie, per planta, o marqueu {{ui:Només els fora de termini o amb venciment en 30 dies}}.

## Dades del recurs

Cliqueu un recurs a la llista (o trieu-lo al model) per obrir-ne les dades: fabricant, model, referència del model, número de sèrie, codi de barres, el dia que es va instal·lar, el número de garantia i el seu inici i final, i la seva vida útil en anys. {{ui:Desa les dades}} les escriu en un sol pas ({{key:Mod+Z}} ho desfà). Deixeu una casella buida per treure aquell valor.

## Documents

Sota les dades, {{ui:Documents}} llista els manuals, les garanties, les fotos, els certificats i els plànols enllaçats al recurs. Trieu el tipus, doneu-li un títol (o deixeu-lo buit: s'utilitza el nom del fitxer) i indiqueu on és:

- una **adreça web** (`https://…`): té un enllaç Obre, que s'obre en una pestanya nova;
- o un **nom de fitxer o ruta** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, una xarxa compartida): guardeu els fitxers al costat de l'IFC, a la mateixa carpeta o en una de inferior, perquè els noms continuïn funcionant quan lliureu la carpeta. BimCraft mostra el nom; obriu el fitxer des de la carpeta.

Els fitxers mai no es pugen ni es copien a l'IFC: només s'hi escriu l'enllaç. Una adreça web amb una contrasenya dins i qualsevol enllaç que no sigui una adreça web ni un fitxer (com `javascript:`) són rebutjats. {{ui:Suprimeix}} treu un document del recurs (un pas; {{key:Mod+Z}} ho desfà).

Els documents que un altre programa ha posat a l'element també apareixen a la llista, i diuen que són allà. Els documents del **tipus** de l'element apareixen a cada element d'aquell tipus; canvieu-los on es va fer el tipus.

A l'IFC, cada document és una referència de document IFC lligada a l'element, amb el seu tipus guardat en aquesta lligadura, tant en IFC4 com en IFC2X3.

## El registre de manteniment

Sota els documents, {{ui:Registra el treball fet}}: el dia que es va fer, el treball, qui l'ha fet, quan toca la següent revisió i les notes. Cada entrada és un pas; {{ui:Edita}} i {{ui:Suprimeix}} la canvien més tard. La data de la següent revisió de l'entrada més recent decideix si el recurs està vençut o venç aviat.

## Com es guarda a l'IFC

- El fabricant i el model a `Pset_ManufacturerTypeInformation`, el número de sèrie, el codi de barres i el dia d'instal·lació a `Pset_ManufacturerOccurrence`, la garantia a `Pset_Warranty`, la vida útil a `Pset_ServiceLife`, a l'element mateix. Quan el tipus de l'element ja porta un fabricant o un model, es mostra fins que escriviu el vostre.
- Cada entrada de manteniment és una **tasca** IFC del tipus manteniment, lligada a l'element, amb les seves dates (en IFC4 també com a temps propis de la tasca) i un conjunt `CadCraft_Maintenance` amb el dia, qui l'ha fet i el dia de la següent revisió.
- Els valors que comparteix un altre element es copien abans: canviar un recurs mai no canvia els seus veïns.
- En fitxers IFC2X3 més antics, les dates s'escriuen com a text (AAAA-MM-DD); aquesta versió voldria un registre de data separat, que BimCraft no escriu.

## Lectures dels sensors

Obriu {{ui:Valors dels sensors}} i {{ui:Obre les lectures (CSV)…}} per portar lectures exportades d'un sistema de gestió de l'edifici, d'un registrador de dades o d'un full de càlcul:

- La **primera columna és l'hora**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` o segons Unix. Una hora sense zona es llegeix amb la zona horària del vostre ordinador. Les dates amb el dia primer, com `23/10/2026`, no es llegeixen (són ambigües); exporteu dates ISO.
- **Cada altra columna és un sensor**, encapçalat per l'**etiqueta**, el **nom** o el **GlobalId** del seu element. Una capçalera que no coincideix amb cap element, o que coincideix amb més d'un, es llista i s'omet. Les comes, els punts i comes o els tabuladors separen les columnes; amb punts i comes o tabuladors també es llegeix la coma decimal (`21,5`).
- Les hores o els valors que no es poden llegir (una paraula, una unitat escrita a la cel·la) es compten i s'ometen, mai no s'endevinen.

La lectura més recent apareix a la columna {{ui:Lectura}} de la llista i al bloc {{ui:Sensor}} del recurs, amb un **gràfic** de totes les lectures (en un mòbil, els gràfics esperen fins que toqueu {{ui:Mostra el gràfic}}). Definiu un **límit inferior i un límit superior** i una unitat en un recurs i cliqueu {{ui:Desa els límits}}: una lectura fora d'aquests límits marca el recurs. Marqueu {{ui:Mostra al model}} per pintar cada recurs segons la seva lectura: blau per sota del límit inferior, verd dins dels límits, vermell per sobre del límit superior, i, per als recursos sense límits, una sola escala de blaus de la lectura més baixa a la més alta; amb la seva lectura com a etiqueta (fins a 60 etiquetes, primer les marcades).

**Les lectures es queden en aquesta pestanya del navegador**: no es desen a l'IFC i no s'envien enlloc; torneu a obrir el CSV la propera vegada. Els **límits es desen a l'IFC** (un conjunt `CadCraft_Sensor` a l'element: Low, High, Unit), de manera que la següent persona que obri el fitxer veu les mateixes marques.

## Lectures en directe

{{ui:Font en directe}} llegeix els valors a mesura que passen, **directament des d'aquest navegador fins al vostre propi sistema**. Res no passa pel nostre servidor i no s'emmagatzema res fora de la pestanya del navegador. Res no es connecta quan s'obre un fitxer: només ho fa {{ui:Connecta}}.

- **MQTT sobre WebSockets**: l'adreça del punt d'escolta WebSocket del vostre broker (`wss://broker.example.com:8884/mqtt`), i un o més temes amb `{tag}` on va l'etiqueta del recurs, per exemple `site/{tag}/temperature` (BimCraft es subscriu a `site/+/temperature` i llegeix l'etiqueta del tema de cada missatge). Els temes sense `{tag}` anomenen el sensor ells mateixos. Un missatge és un número simple (`21.5`) o un JSON com `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (definiu {{ui:Camp de valor en JSON}} si el vostre es diu d'una altra manera).
- **Demanar una adreça (HTTP)**: una adreça web que el vostre sistema de gestió de l'edifici o un petit script vostre respon, consultada cada tants segons (5 com a mínim). Pot respondre amb JSON indexat per etiqueta (`{"AHU-1": 21.5}`), una llista JSON (`[{"tag": "AHU-1", "value": 21.5}]`), o un CSV de lectures com el de dalt. Si no respon, BimCraft espera el doble abans de tornar a preguntar, fins a cinc minuts.

Cada lectura va al recurs el nom del qual indica la seva etiqueta, nom o GlobalId, exactament com ho faria una columna de CSV; els noms que no coincideixen amb cap recurs es llisten. Les lectures s'uneixen als {{ui:Valors dels sensors}}: la llista, els gràfics, els límits i els colors del model funcionen igual.

**La vostra contrasenya o el vostre token** s'escriu per a una sola connexió: es passa a la connexió i la casella es buida; mai no es desa en aquest navegador ni a l'IFC. Un token s'envia com a capçalera estàndard `Authorization: Bearer`, i no s'envia cap galeta.

{{ui:Manté aquests ajustos a l'IFC}} escriu l'adreça, els temes, el camp de valor i la freqüència de consulta al model (un conjunt `CadCraft_Feed` al projecte; no hi ha cap camp per a la contrasenya), de manera que la següent persona que obri el fitxer només escriu el seu propi inici de sessió i cliqueu {{ui:Connecta}}. No poseu una contrasenya ni una clau a la mateixa adreça: una adreça amb un nom d'usuari i una contrasenya és rebutjada.

:::note
**Què necessiten el vostre broker o la vostra adreça.** Una pàgina del navegador només pot parlar amb un servidor que ho permeti:
- La pàgina és segura (https), de manera que el navegador només es connecta a adreces `wss://` i `https://` — excepte al vostre propi ordinador (`localhost`), on `ws://` i `http://` funcionen per fer proves.
- Una adreça HTTP ha de permetre les peticions des d'aquesta pàgina (CORS: la capçalera `Access-Control-Allow-Origin`, i `Authorization` entre les capçaleres permeses si useu un token).
- La majoria de brokers (Mosquitto, EMQX, HiveMQ i altres) ofereixen un punt d'escolta WebSocket; sovint està desactivat fins que l'activeu. BimCraft parla MQTT 3.1.1.
:::

No hi ha **cap alerta** quan BimCraft està tancat: els límits marquen un recurs mentre el model és obert amb una font connectada. Vigilar un edifici les 24 hores necessita un servidor, que BimCraft no executa.

## Full de càlcul COBie

**COBie** és el full de càlcul de lliurament que molts propietaris i equips de gestió demanen (publicat per la National BIM Standard als Estats Units; BS 1192-4 al Regne Unit). Obriu {{ui:Full de càlcul COBie}} a la pestanya:

- {{ui:Desa com a COBie (.xlsx)}} escriu els fulls COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document i Attribute — a partir del model i de les dades dels recursos: l'edifici, les seves plantes i sales (àrees a partir de les quantitats del model), cada recurs com un component amb el seu número de sèrie, el dia d'instal·lació, l'inici de la garantia, l'etiqueta i el codi de barres, el seu tipus amb fabricant, model, vida útil i durada de la garantia, els sistemes als quals pertany, el registre de manteniment com a feines i els documents enllaçats. Cada component porta el GlobalId IFC de l'element. Escriviu la vostra adreça de correu per a la columna "creat per" de COBie, o deixeu-la buida (llavors diu n/a). Els valors que el model no té diuen **n/a**; les columnes de categoria porten la classe IFC, no un codi OmniClass.
- {{ui:Llegeix un full de càlcul COBie…}} en llegeix un de tornada, de BimCraft o d'un altre programa, i **llista primer tots els canvis**: quin recurs, quin valor, de què a què, i els documents nous. {{ui:Aplica}} els escriu tots en un sol pas ({{key:Mod+Z}} ho desfà). Les files es fan coincidir pel GlobalId, i després pel nom del component. Les files que no coincideixen amb res del model es llisten, no s'afegeixen.

Un full de càlcul es tracta com a no fiable: les fórmules mai no es llegeixen ni s'executen (només el valor desat per última vegada a la cel·la), i un valor que faria acabar una garantia abans de començar i un enllaç de document que no és ni una adreça web ni un nom de fitxer s'exclouen i es compten, i els llibres molt grans són rebutjats. Les feines de COBie són el treball planificat d'un tipus; s'escriuen, però no es llegeixen de tornada. Al full de càlcul que escriu BimCraft, el text que un full de càlcul podria prendre per una fórmula (que comença per `=`, `+`, `-` o `@`) es marca com a text.

El llibre es comprova a les nostres proves amb un lector de fulls de càlcul independent; no ha passat per un validador de COBie. Si un equip receptor n'executa un, digueu-nos què diu.

## Documents de lliurament

Els papers que es lliuren al propietari amb l'edifici acabat pertanyen al projecte, no a un sol recurs. A la pestanya {{ui:Recursos}}, obriu {{ui:Documents de lliurament}}:

1. {{ui:Afegeix un document}}, trieu-ne el tipus (certificat de finalització, certificat d'ocupació, garantia, manual, plànols as-built, altres), i escriviu-ne el títol, la data d'emissió, qui l'ha emès i el número de referència.
2. Indiqueu on és: una adreça web, un nom de fitxer guardat al costat de l'IFC, o {{ui:Adjunta un fitxer}}.
3. {{ui:Afegeix a la llista}}. {{ui:Edita}} i {{ui:Treu}} canvien la llista; cadascun és un pas que podeu desfer.

{{ui:Crea el paquet de lliurament}} descarrega un zip: una portada amb cada document, la mateixa llista en un full de càlcul, el llibre COBie (els documents són al seu full Document, com a files sobre el Facility), el model, i cada fitxer adjunt. Un certificat de finalització o d'ocupació que encara no és a la llista s'anomena a la portada; el paquet es crea igualment.

El model del paquet és el **model as-built**: indica quins elements s'han mesurat a l'obra. Amb ell, a la carpeta `as-built`: la declaració, una llista de cada element amb el seu estat de verificació, el conjunt de plànols tal com és ara en un sol PDF (els plànols as-built), i el registre de canvis dels plànols quan el model ha emès conjunts. Vegeu [Marca els elements com a comprovats o verificats a obra](topic:verification).

- Al fitxer IFC, cada document és un IfcDocumentInformation lligat al projecte (IfcRelAssociatesDocument), amb el seu títol, referència, data, emissor i lloc, de manera que altres programes el llisten.
- Un fitxer adjunt es registra pel nom, la mida i el SHA-256. Per conservar el fitxer amb el projecte, useu {{ui:Desa el projecte com a paquet}} (un .ccbundle conté el model i els fitxers adjunts; en obrir-lo els torna, cadascun comprovat contra el seu registre). Un desament normal pregunta quin voleu.
- Un .ifc simple conserva el registre, no el fitxer: després d'obrir-lo, useu {{ui:Torneu a adjuntar el fitxer}}. El mateix fitxer es reconeix; un de diferent substitueix el registre.

## CSV

{{ui:CSV}} desa cada recurs amb les seves dades, cada entrada de manteniment i cada document, una fila cadascun, per a un full de càlcul o per a un altre programa de manteniment.

:::note
Encara no implementat: un servei allotjat que guarda les lectures i envia alertes quan BimCraft està tancat, i la lectura de les feines de COBie. Vegeu [Encara no implementat](topic:not-built-yet).
:::
