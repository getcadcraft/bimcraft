---
title: Renderitza una imatge del model
summary: Fes una imatge amb llum de dia de la vista 3D: cel, el sol a la latitud del lloc, ombres suaus, finestres de vidre; amb WebGPU, traçat de camins a la targeta gràfica amb cels, càmera, mescla de llums, gradació, boira i una cua de renderitzat.
keywords: renderitza, preestabliment, preestabliments, preestabliment d'escena, interior, exterior, vista de secció, nit, un clic, renderitzat, traçat de camins, traçat de raigs, il·luminació global, reflexions, refracció, alta qualitat, foto, fotorealista, realista, imatge, png, fixa, cel, sol, llum de dia, ombres, ombres suaus, oclusió ambiental, vidre, finestres, metall, materials, exposició, brillantor, cel cobert, crepuscle, estudi, presentació, visualització, webgpu, reducció del soroll, cel físic, hdri, ies, profunditat de camp, panoràmica, balanç de blancs, mescla de llums, elements de renderitzat, exr, png de 16 bits, boira, càustiques, cua de renderitzat
from: beb74cc7
---

{{ui:Renderitza}} de la barra d'eines fa una imatge de la vista 3D que sembla de llum del dia: un cel, el sol on el situa la latitud del lloc, ombres suaus, llum de tot el cel que enfosqueix els racons, i colors que poden semblar vidre o metall. El model i el fitxer no es modifiquen.

## Renderitza la vista

1. Prepareu la vista 3D com voleu la imatge: oriteu i feu zoom, amagueu les plantes o els elements que no voleu, i definiu una [secció](topic:section-plane) si la imatge ha de mostrar un tall.
2. Feu clic a {{ui:Renderitza}} a la barra d'eines.
3. Trieu una de les opcions de {{ui:Escena}} si la premuda no és la que voleu (vegeu [Preestabliments d'escena](topic:render#scene-presets-a-good-picture-in-one-click)), trieu la {{ui:Mida}}, i després feu clic a {{ui:Renderitza}} al diàleg.

   La imatge s'omple mentre es renderitza i es fa més suau a cada passada. {{ui:Atura}} (o {{key:Esc}}) l'atura abans d'hora i manté la imatge fins aquell moment.

4. Feu clic a {{ui:Desa}} per baixar-la com a PNG, o a {{ui:Desa com a}} per a un altre format (vegeu [Desa la imatge](topic:render#save-the-picture)). Té el nom del fitxer del model.

:::tip
Comenceu amb {{ui:Esborrany}} a {{ui:La mida de la vista}} per comprovar la càmera, i després renderitzeu {{ui:Bona}} o {{ui:Millor}} a una mida més gran per a la imatge final.
:::

## Preestabliments d'escena: una bona imatge amb un clic

A la part superior del diàleg hi ha quatre botons de {{ui:Escena}}. Cadascun fixa el cel, la brillantor, el terreny, les línies de vora, la qualitat i el sol d'un sol clic, així que no cal aprendre res abans de la primera imatge. Feu clic a un, i després a {{ui:Renderitza}}.

| Escena | Què fixa | Per a què serveix |
|---|---|---|
| {{ui:Exterior}} | Cel clar, el sol propi del model, terreny activat | L'edifici des de fora |
| {{ui:Interior}} | Cel cobert (llum uniforme, sense taques de sol fortes), mig punt més clar | Una vista des de dins d'una sala |
| {{ui:Vista de secció}} | Estudi blanc, sense terreny, línies de vora en la renderització ràpida | Un model tallat per una secció |
| {{ui:Nit}} | El sol sota l'horitzó (mitjanit a ple hivern per a l'hemisferi del lloc), un punt més clar | Llums que il·luminen el model. Sense llums la imatge és fosca |

- {{ui:Tria per a aquesta vista}} tria per vosaltres: {{ui:Vista de secció}} quan hi ha un tall de secció activat, {{ui:Interior}} quan la càmera és dins del model, i en els altres casos {{ui:Exterior}}. La primera vegada que obriu el diàleg comença així sola.
- Totes les opcions de sota es mantenen i es poden canviar. Quan canvieu una que l'escena fixa, no hi ha cap botó premut i la línia sota els botons indica que les opcions són les vostres. Feu clic de nou a l'escena per restaurar-ne els valors.
- Una escena no toca el motor, el mode, la mida, els materials, la càmera ni els llums.

:::note
Les escenes donen els mateixos valors a ModelCraft i a BimCraft. L'aspecte final de la imatge depèn del model i de la targeta gràfica.
:::

## Què es mostra a la imatge

El que la vista 3D mostra com a sòlid: els elements ocults i transparents, les plantes ocultes i els models ocults queden fora, i les sales només es mostren quan {{ui:Espais}} està activat. Un pla de secció o una caixa de secció talla la imatge com talla la vista. Els elements es mostren amb els seus propis colors: el colorat per propietat (la pestanya {{ui:Color}}) no s'usa.

## Opcions

| Opció | Què fa |
|---|---|
| {{ui:Mida}} | La mida de la vista, el doble de la mida de la vista, Full HD, 4K o un quadrat |
| {{ui:Mode}} | {{ui:Ràpid}}, o {{ui:Alta qualitat (traçat de camins)}} (a sota) amb el seu {{ui:Límit de temps}} |
| {{ui:Qualitat}} | Quantes passades (o, en alta qualitat, mostres) es promitgen: {{ui:Esborrany}} 16, {{ui:Bona}} 64, {{ui:Millor}} 256. Més passades donen ombres i vores més suaus i triguen més |
| {{ui:Cel}} | {{ui:Cel clar}}, {{ui:Cel cobert}}, {{ui:Crepuscle}} o {{ui:Estudi blanc}} (un fons blanc simple) |
| {{ui:Sol}} | 21 de juny a les 15:00 a la latitud que el fitxer dona per al seu lloc (IfcSite), girat cap al nord real del model. Marqueu {{ui:Usa una altra data i hora per a aquesta imatge}} per a una altra hora |
| {{ui:Brillantor}} | Més clar o més fosc, per passos (stops) |
| {{ui:Terreny sota el model}} | Un terreny al punt més baix del model que rep les ombres i s'esvaeix a l'horitzó |
| {{ui:Dibuixa les vores}} | Dibuixa les vores dels elements amb una línia fina sobre la imatge |

Quan el sol és sota l'horitzó a l'hora triada és de nit: el cel s'enfosqueix i els llums del model l'il·luminen.

## Llums

Cada lluminària del model és un llum a la imatge: les lluminàries d'un fitxer IFC (IfcLightFixture, o un element tipus lluminària), incloses les que poseu des de la biblioteca. Cada una il·lumina cap avall des de just sota la lluminària. Quan el fitxer dona la potència d'una lluminària, la seva brillantor se'n deriva; en cas contrari són 800 lúmens, un blanc càlid.

El diàleg enumera els llums a {{ui:Llums}}: desmarqueu-ne un per apagar-lo, o escriviu-ne la brillantor en lúmens. Aquests canvis es desen a l'IFC (el conjunt de propietats `CadCraft_Light` de la lluminària, on també els podeu canviar a Propietats), i {{key:Ctrl+Z}} els desfà.

Quan un fitxer no diu on és el seu lloc, el sol es posa a 40° nord, i el diàleg ho indica. L'hora és l'hora local del lloc, calculada a partir de la seva longitud, així que pot diferir una hora allà on els rellotges estan configurats d'una altra manera.

Aquestes opcions es guarden en aquest navegador per a la següent imatge. No es desen al fitxer IFC.

## Vidre i altres materials

Sota {{ui:Materials}}, cada color de la pantalla té un aspecte: {{ui:Mat}}, {{ui:Satinat}}, {{ui:Brillant}}, {{ui:Metall}}, {{ui:Metall pulit}}, {{ui:Vidre}} o {{ui:Vidre esmerilat}}. Els colors que el fitxer IFC fa transparents (per exemple, els vidres de les finestres) comencen com a {{ui:Vidre}}.

:::note
En el mode {{ui:Ràpid}}, el vidre i el metall reflecteixen el cel, no la resta del model, i la llum no es doblega en travessar el vidre. El mode {{ui:Alta qualitat (traçat de camins)}} que hi ha a sota fa les dues coses.
:::

## Alta qualitat

Trieu {{ui:Mode}} › {{ui:Alta qualitat (traçat de camins)}} per a una imatge que segueix la llum tal com la veu una càmera:

- la llum rebota entre superfícies, així que una sala il·luminada a través d'una finestra, o per un llum, s'il·lumina per tot arreu i els colors s'escampen cap als veïns;
- el vidre és vidre de veritat: la llum es doblega en travessar-lo i reflecteix el model;
- el metall i les superfícies polides reflecteixen la resta del model;
- els panells de llum il·luminen com a panells, amb ombres suaus.

És molt més lent que {{ui:Ràpid}}: cada passada torna a traçar la llum de cada píxel. La imatge comença granulosa i s'aclareix a mesura que s'acumulen les mostres, així que comenceu petit ({{ui:La mida de la vista}}, {{ui:Esborrany}}) i trieu un {{ui:Límit de temps}}: quan s'acaba, es manté la imatge fins aquell moment. {{ui:Atura}} també la manté. La primera passada espera mentre el navegador prepara el traçador de camins.

Quan el navegador té WebGPU, el traçador de camins és el propi de CadCraft i s'executa a la targeta gràfica; la línia sota la imatge ho indica. Després de {{ui:Atura}} o del límit de temps, {{ui:Reprén}} continua amb la mateixa imatge fins que té totes les mostres; canviar una opció o tornar a prémer {{ui:Renderitza}} la comença de nou. Sense WebGPU, la imatge es fa amb el traçador de camins WebGL (la línia ho indica) i {{ui:Reprén}} no s'ofereix.

:::linux
A Firefox i a la majoria de configuracions de Chrome a Linux encara no hi ha WebGPU, així que l'alta qualitat hi usa WebGL.
:::

En aquest mode no es dibuixen les vores, les textures mostren el seu color i la rugositat però no les seves protuberàncies, i el tall de secció es fa sobre el model abans que comenci la imatge.

{{ui:Redueix el soroll (esborra el gra que queda després de les mostres)}} està activat per defecte: quan la imatge està acabada, o aturada, el gra que queda s'esborra amb una xarxa neuronal feta per a això (la xarxa publicada d'Intel Open Image Denoise, executada al vostre ordinador: a la targeta gràfica, o si no al processador). {{ui:Mostra}} › {{ui:La imatge abans de reduir el soroll}} la mostra tal com es va renderitzar.

## Cels i perfils de llum a la targeta gràfica

Amb WebGPU, l'alta qualitat té dos cels més:

- {{ui:Cel físic}} calcula la llum del dia a partir de l'alçada del sol: un blau profund a sobre, una franja pàl·lida a l'horitzó, i un sol que es torna més càlid i més feble quan és baix. {{ui:Calitja}} va d'un dia molt clar (2) a un de brumós (10).
- {{ui:Imatge de cel (HDRI)}} il·lumina el model amb una imatge panoràmica d'un lloc real. {{ui:Trieu una imatge…}} accepta un fitxer `.hdr` o `.exr` equirectangular; {{ui:Gira}} el gira al voltant del model i {{ui:Lluminositat de la imatge}} el fa més clar o més fosc. La imatge porta el seu propi sol, així que el sol del model no s'hi afegeix. Només es manté mentre la pàgina és oberta: en tornar-la a obrir, trieu-la de nou.

Cada llum de la llista {{ui:Llums}} pot prendre un perfil de llum de fabricant: {{ui:Perfil IES…}} llegeix un fitxer IES (LM-63) i el llum llavors projecta la seva llum com ho fa aquella lluminària (un downlight estret, un il·luminador de paret). Tots els llums amb aquell nom l'usen, i el llum manté la seva pròpia brillantor. Feu clic al nom del perfil per deixar de fer-lo servir.

Les finestres de vidre transparent ajuden la llum del cel a entrar a una sala.

Els modes {{ui:Ràpid}} i el traçador de camins WebGL mostren {{ui:Cel físic}} i {{ui:Imatge de cel (HDRI)}} com un cel clar i ignoren els perfils de llum.

## La càmera

{{ui:Càmera}} posa la imatge com una fotografia:

- {{ui:Exposició}}: manteniu el {{ui:Control de lluminositat}}, o trieu {{ui:Configuració de la càmera}} i fixeu l'{{ui:Obertura (f-stop)}}, la {{ui:Velocitat d'obturació}} i l'{{ui:ISO}} com en una càmera; l'EV al costat són el valor d'exposició habitual. f/16 a 1/100 s i ISO 100 correspon a un dia assolellat; una escena més fosca vol una obertura més gran, un obturador més lent o un ISO més alt. Això funciona en tots els modes.
- {{ui:Profunditat de camp}} difumina el que és més a prop o més lluny de la {{ui:Distància de focus (m)}} com ho faria una lent d'aquella f-stop (deixeu-ho buit per enfocar el que és al mig de la vista); {{ui:Forma de l'obertura}} dóna als reflexos fora de focus una forma rodona o de làmines.
- {{ui:Perspectiva de dos punts (les línies verticals es mantenen verticals)}} anivella la càmera i desplaça la imatge, com ho fa una lent de desplaçament arquitectònic, de manera que els murs no es decanten quan mireu cap amunt o cap avall a un edifici.
- {{ui:Balanç de blancs}} fixa quin color de llum es veu com a blanc: més baix (per exemple 3000 K) per a la llum càlida dels llums, més alt per a l'ombra i els dies ennuvolats.
- {{ui:Projecció}}: {{ui:Panoràmica de 360°}} fa una imatge 2:1 de tot el que hi ha al voltant de la càmera per a visualitzadors de panoràmiques; {{ui:Panorama estereoscòpic de 360°}} apila una panoràmica per a l'ull esquerre i una per al dret per a ulleres de realitat virtual; {{ui:Mapa cúbic (6 cares)}} fa sis vistes quadrades en una graella de 3 × 2. L'amplada ve de {{ui:Mida}}.

La projecció, la profunditat de camp, la perspectiva de dos punts i el balanç de blancs necessiten el traçador de camins a la targeta gràfica (WebGPU), així que només es mostren a {{ui:Alta qualitat (traçat de camins)}}.

## Acaba la imatge

{{ui:Imatge}} gradua la imatge d'alta qualitat com una fotografia, i cada control canvia la imatge acabada de seguida, sense tornar a renderitzar:

- {{ui:Aspecte (transformació de visualització)}}: {{ui:ACES filmic}} (la imatge com abans), {{ui:AgX}} (més suau, conserva el color en llum molt brillant), {{ui:Filmic}} (una corba de pel·lícula suau) o {{ui:Estàndard}} (simple, la llum molt brillant es talla a blanc).
- {{ui:Contrast}} i {{ui:Compressió de llums altes}} (recupera detall a les parts molt brillants).
- {{ui:Enlluernament}} (un ressplendor suau al voltant de la llum brillant), {{ui:Enlluernament}} amb les seves {{ui:Ratlles d'enlluernament}} (raigs en forma d'estrella des dels punts més brillants) i {{ui:Vinyeta}} (racons més foscos).
- {{ui:Taula de color (.cube)…}} aplica una gradació de color d'un fitxer `.cube`, amb la seva {{ui:Intensitat de la taula de color}}; com una imatge de cel, només es manté mentre la pàgina és oberta.

## Desa la imatge

{{ui:Desa com a}} al costat de {{ui:Desa}} tria el fitxer: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} per compartir (JPEG i WebP només on el navegador els pot escriure), i després d'una renderització d'alta qualitat a la targeta gràfica també:

- {{ui:PNG, 16 bits}}: la imatge graduada amb passos més fins entre tonalitats, per imprimir o per editar més.
- {{ui:EXR, totes les capes (coma flotant de 32 bits)}}: la imatge tal com es va renderitzar (llum lineal, sense gradació) amb cada element de renderitzat i cada grup de llums com a capa pròpia, per a programes de composició.
- {{ui:Fitxer de renderitzat (.ccrender, per graduar-lo més tard)}}: tot el que el diàleg necessita per tornar a mesclar i a graduar la imatge. {{ui:Obre un fitxer de renderitzat…}} el torna a carregar, amb la seva mescla i la seva gradació, sense renderitzar.

## Mescla els llums després de la renderització

Activeu {{ui:Mescla de llums (canvieu el color i la lluminositat de cada llum després del renderitzat)}} abans de prémer {{ui:Renderitza}}. Quan la imatge està acabada (o aturada), {{ui:Mescla la imatge}} enumera els seus llums en grups: el cel, el sol, i els llums pel nom (cada llum amb el mateix nom és un grup). Apagueu un grup, doneu-li un color, o feu-lo més clar o més fosc, i la imatge canvia de seguida, sense tornar a renderitzar. {{ui:Desa la mescla}} guarda la mescla amb un nom per triar-la més tard; {{ui:Tal com s'ha renderitzat}} torna a la imatge tal com es va fer. {{ui:Desa}} desa la imatge mesclada.

{{ui:Elements de renderitzat (albedo, normals, profunditat, difús, especular, transmissió, emissió, identificadors)}} també conserva les parts de la imatge. {{ui:Mostra}} canvia la vista a una d'elles: els colors de superfície (albedo), les normals, la profunditat, la llum difusa, especular i transmesa (cadascuna directa i indirecta), el que brilla i el cel, i un color per objecte o per material per fer màscares.

Les dues opcions guarden capes extra a la targeta gràfica. A mides grans, una targeta gràfica pot no tenir prou espai; el diàleg ho indica i una mida més petita funciona.

## Boira, fum, soroll i càustiques

Aquestes opcions són a {{ui:Boira, fum i soroll}} i funcionen a {{ui:Alta qualitat (traçat de camins)}} a la targeta gràfica; els altres motors les deixen de banda.

- {{ui:Boira i bruma}} omple l'aire fins a una alçada amb una calitja que il·luminen el sol, el cel i els llums. {{ui:Fins on es veu, en metres}} fixa el espesor (uns 100 m és una bruma lleugera, 20 m una boira espessa), {{ui:Alçada de la boira sobre el terra, en metres}} és on acaba, i {{ui:Raigs de llum}} és quant brilla la calitja cap a la llum. La llum del sol surt de la boira per la seva part superior, així que on el sol entra per una finestra o entre edificis es veu com a raigs de llum.
- {{ui:Fum o núvol}} afegeix un volum de fum o núvol il·luminat com la boira. {{ui:Tipus}} és un {{ui:Núvol}}, una {{ui:Columna de fum}} o {{ui:Des d'un fitxer de volum (.ccvol)}}, el format de graella propi de CadCraft. {{ui:Detall}} i {{ui:Variació}} canvien un núvol o una columna feta, {{ui:Mida del seu costat més llarg, en metres (0 = la mida del model)}}, {{ui:Mou X (m)}}, {{ui:Mou Y (m)}}, {{ui:Mou Z (m)}} i {{ui:Gira}} el situen (comença al mig del model), {{ui:Gruix}} el fa més dens, {{ui:Brillantor cap endavant}} el fa més brillant cap a la llum, i {{ui:Color}} el tenyeix. Un fitxer de volum només es manté mentre la pàgina és oberta, com una imatge de cel.
- {{ui:Atura abans on la imatge ja és neta (mostreig adaptatiu)}} no dóna més mostres als píxels que ja s'han estabilitzat. {{ui:Soroll acceptable}} és quant de gra queda quan un píxel s'atura. La línia sota la imatge diu quantes mostres ha rebut de mitjana un píxel.
- {{ui:Caustics (llum desviada pel vidre o reflectida pels miralls)}} traça la llum des dels llums i el sol, així que la taca brillant sota una bola de vidre o el reflex d'un mirall sobre una paret surt neta en lloc de granulosa. Està desactivada mentre són activats la boira, el fum, la mescla de llums o els elements de renderitzat, i està feta per a imatges, no per a imatges de 360°.

## La cua de renderitzat

{{ui:Cua de renderitzat}} al diàleg: {{ui:Afegeix aquesta imatge a la cua}} manté les opcions i la vista de la imatge, i {{ui:Inicia la cua}} renderitza el que espera, un darrere l'altre, en aquest ordinador. Tancar la pàgina manté la cua; obriu el mateix model per continuar. {{ui:Desa}} baixa una de acabada; {{ui:Suprimeix}} i {{ui:Neteja els acabats}} ordenen la llista. La cua renderitza en alta qualitat, així que necessita WebGPU.

## Quant triga

La imatge es fa al vostre ordinador, amb la seva targeta gràfica; no es puja res. El temps creix amb les passades i els píxels: {{ui:Millor}} té 16 vegades les passades d'{{ui:Esborrany}}, i una imatge 4K té unes quatre vegades els píxels de Full HD. Els models grans triguen més per passada.
