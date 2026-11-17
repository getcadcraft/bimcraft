---
title: Resolució de problemes
summary: Missatges que mostra BimCraft, què els causa i què cal fer, per obrir fitxers, carpetes, models 3D, dibuixos i edicions.
keywords: problema, error, no funciona, no es pot obrir, fallit, incomplet, corromput, lent, fallada, en blanc, absent, missatge, ajuda
from: 1e5a79fc
---

Els missatges apareixen a la barra d'estat, a la part inferior de l'escenari, en vermell quan alguna cosa ha fallat. Busqueu el missatge a continuació.

## Obrir fitxers

**"*name* no és un fitxer IFC, RVT, RFA, DWG o DXF."**
BimCraft no ha reconegut el fitxer. Comproveu l'extensió i que el fitxer no sigui buit. Els PDF, les imatges i els fitxers d'ofimàtica no s'obren.

**".ifczip encara no és compatible. Desa o exporta el model com a fitxer .ifc normal."** (també per a `.ifcxml`)
Descomprimiu el `.ifczip` (és un zip normal que conté un `.ifc`) o exporteu un IFC normal.

**"… és un fitxer de projecte que BimCraft encara no llegeix."**
Un fitxer `.pln`, `.pla`, `.tpl` o `.bpn`. Exporteu-ne un IFC o un DWG i obriu-lo: vegeu [Obrir fitxers de projecte .pln i .pla](topic:pln-project-files).

**"Aquest fitxer IFC no s'ha pogut llegir."**
El fitxer IFC està malmès o no és realment IFC. Obriu-lo en un editor de text: un fitxer IFC real comença amb `ISO-10303-21;`. Torneu-lo a exportar.

**"Aquest fitxer és incomplet: té … MB, però el seu propi índex apunta a dades d'almenys … MB. …"**
El fitxer de projecte o de família s'ha tallat mentre es copiava, es pujava o se sincronitzava. Un fitxer d'un disc al núvol que és «només en línia» té el mateix aspecte. Un fitxer obert per si sol encara s'obre, amb aquest missatge a la part superior de la targeta i «Es mostra el que s'ha recuperat; torneu a copiar l'original per obtenir el model complet.»: la targeta només mostra les parts de les quals tots els bytes són al fitxer, i enumera la resta sota **No és al fitxer**. Feu que el fitxer estigui disponible sense connexió al vostre disc al núvol, o torneu a copiar l'original, i torneu a obrir-lo. En una carpeta, BimCraft mostra la còpia de seguretat completa més recent.

**"… El llistat de contingut del fitxer també és a la part que falta, així que no es pot obrir res."**
El fitxer s'ha tallat tan aviat que ni tan sols hi és el seu llistat de contingut. No es pot recuperar res d'aquesta còpia. Torneu a copiar l'original i torneu a obrir-lo.

**"Aquest fitxer composat no té cap flux BasicFileInfo, així que no és un fitxer de Revit."**
El fitxer és un fitxer composat d'un altre tipus (els documents d'oficina antics fan servir el mateix contenidor). Comproveu que heu triat el fitxer correcte.

**"Encara estic treballant en l'últim…"**
BimCraft encara està ocupat amb el fitxer o la carpeta anterior. Espereu que la barra d'estat acabi i torneu-ho a provar.

**El selector de fitxers atenua el meu fitxer.**
El selector només ofereix `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` i `.dxf`. Arrossegueu els altres fitxers a la pàgina, i BimCraft us dirà si els pot llegir.

## Obrir carpetes

**"Aquesta carpeta té més de 20,000 fitxers. Trieu una carpeta més petita, com la d'un sol projecte."**
Heu triat una carpeta massa amunt, com una unitat sencera. Trieu una carpeta de projecte.

**"El navegador no ha donat accés a *name*. Torneu-lo a triar amb Obre una carpeta."**
Heu fet clic a {{ui:Torna a obrir}} en una carpeta recent, i el permís del navegador s'ha denegat o ha caducat. Torneu a triar la carpeta, o arrossegueu-la.

**El navegador diu que pujarà fitxers.**
És la manera del navegador de dir que lliura els fitxers a una pàgina. BimCraft no els envia enlloc. Arrossegueu la carpeta per evitar la qüestió.

**No passa res en un telèfon o una tauleta.**
Molts navegadors mòbils no poden triar carpetes. Obriu fitxers individuals, o feu servir un ordinador.

## El motor IFC es carrega la primera vegada

**La barra d'estat es queda a "Iniciant el motor IFC…", o mostra un error com "Failed to fetch".**
No s'ha pogut baixar el motor IFC. Potser no teniu connexió, o un tallafoc o un bloquejador de contingut l'està aturant.

:::offline
No teniu connexió. Si el botó de la barra de l'aplicació no diu {{ui:Disponible sense connexió}}, el motor IFC mai no s'ha desat en aquest navegador. Torneu a connectar-vos, torneu a obrir el fitxer, i després feu clic a {{ui:Desa per fer-lo servir sense connexió}} perquè funcioni sense connexió la propera vegada. Vegeu [En línia i fora de línia](topic:online-offline).
:::

:::online
Torneu a carregar la pàgina i torneu-ho a provar. En una xarxa de treball, demaneu al vostre equip de TI que permeti els fitxers `.wasm` del lloc.
:::

## Desar per fer-lo servir sense connexió

**El botó diu {{ui:No s'ha pogut desar}}.**
Alguns fitxers no s'han baixat, normalment perquè la connexió s'ha interromput. Comproveu la connexió i feu clic al botó de nou. Qualsevol còpia sense connexió anterior es conserva fins que n'hi hagi una de nova i completa.

**El botó diu {{ui:Mode sense connexió no disponible}}.**
Aquesta finestra no pot mantenir una còpia sense connexió, per exemple una finestra privada o un ordinador de treball gestionat. Vegeu [Treballar sense connexió](common:offline).

**El botó es queda a "Desant *n* de *m*" durant un temps.**
La còpia de BimCraft ocupa uns 11 MB, la major part és el motor IFC. Mantingueu la pestanya oberta fins que digui {{ui:Disponible sense connexió}}.

**BimCraft s'ha obert sense connexió però sembla desactualitzat.**
La còpia desada és d'una visita anterior. Quan tingueu connexió, feu clic a {{ui:Disponible sense connexió}} i trieu {{ui:Torna a desar (obté la versió més recent)}}.

## Vista 3D

**El model no és on esperava, o és minúscul.**
Premeu {{key:F}} o feu clic a {{ui:Ajusta}}. Ajusta sempre emmarca tot el model, inclosos els nivells que heu desmarcat i els elements perduts lluny de l'edifici, així que l'edifici pot semblar petit. Feu zoom des d'allà.

**Fer clic no selecciona res.**
Mantingueu el ratolí quiet mentre feu clic: un petit arrossegament orbita. Els elements dels nivells desmarcats no es poden seleccionar. Amb {{ui:Espais}} activat, els espais transparents se seleccionen abans que el que hi ha dins.

**El botó {{ui:Arestes}} està atenuat: "Les arestes estan desactivades per a models molt grans".**
El model té més de 1.5 milions de triangles. Les arestes es deixen desactivades per estalviar memòria.

**La pestanya es fa lenta, es torna blanca o mostra la pàgina de fallada del navegador.**
El model és massa gran per a la memòria que el navegador dona a la pestanya. Tanqueu les altres pestanyes i torneu a carregar. Exporteu un IFC més petit: un edifici, una disciplina o menys plantes. Vegeu [Navegadors, dispositius i memòria](topic:platforms).

**La vista 3D es queda en blanc.**
És possible que WebGL estigui desactivat o bloquejat. A la configuració del navegador, activeu l'acceleració per maquinari (o l'acceleració gràfica) i reinicieu el navegador.

## Editar IFC

**"Useu un número."** El valor és numèric. Escriviu un número simple sense unitats, com `2.4`.

**"Useu un nombre enter."** El valor és un recompte o un enter. Traieu els decimals.

**"Només es poden editar les propietats d'un sol valor."** Les llistes, les enumeracions i les quantitats són només de lectura.

**{{key:Mod+S}} obre la finestra "Desa la pàgina" del navegador.**
No hi ha canvis sense desar, així que BimCraft deixa la tecla al navegador. Tanqueu la finestra.

**{{key:Mod+Z}} no fa res.**
Només funciona mentre teniu canvis sense desar i no esteu escrivint en un camp. Després de desar, no queda res per desfer.

**La llista {{ui:Canvis}} encara mostra edicions després que les hagi descartat i hagi obert un dibuix o una carpeta.**
Quan responeu "Els descarto?" amb D'acord i després obriu quelcom que no és un model IFC, les edicions antigues es conserven a la memòria, i {{ui:Desa com a IFC}} les desaria igualment. Per començar de veritat de nou, torneu a obrir l'IFC original, o torneu a carregar la pàgina.

**La meva edició ha canviat més elements dels que he seleccionat.**
Heu canviat una propietat d'un conjunt marcat "(tipus)". Les propietats de tipus s'apliquen a tots els elements del tipus. Feu clic a {{ui:Desfés}}. Vegeu [Canviar una propietat de tipus per a cada element d'un tipus](topic:type-vs-instance).

## Dibuixos

**"*name* no s'ha pogut llegir. Pot estar malmès, o desat en un format que el lector encara no tracta (…)."**
Deseu el dibuix des del programa que l'ha fet com a DWG més antic (2018 o anterior) o com a DXF, i torneu-ho a provar.

**"Aquest dibuix no té res per mostrar."** o **"*name* és un dibuix buit: no conté línies, text ni blocs."**
El dibuix és buit, o només conté coses que BimCraft encara no dibuixa (vegeu **Encara no dibuixat** a la dreta).

**"Aquest dibuix és molt gran; només es mostra una part."**
BimCraft ha deixat de dibuixar per continuar responent. Desactiveu les capes que no necessiteu, o obriu els fulls que necessiteu d'un dibuix més petit.

**Falten parts d'un full.**
Potser falten dibuixos enllaçats: mireu sota **Dibuixos enllaçats** a la dreta. Vegeu [Trobar dibuixos i imatges enllaçats](topic:dwg-linked-files). És possible que les capes estiguin desactivades: feu clic a {{ui:Activa-ho tot}}.

**Una imatge es mostra com un marc buit.**
El seu fitxer no s'ha trobat, o és un TIFF ("TIFF no es pot mostrar en un navegador"). Afegiu-hi una còpia PNG o JPEG amb {{ui:Afegeix imatges…}}.

**El desplaçament amb el trackpad fa zoom en lloc de moure el dibuix.**
Així funcionen els dibuixos a BimCraft. Feu clic i arrossegueu per desplaçar.

## Encara sense solució

Llegiu [Què encara no està implementat](topic:not-built-yet): el que busqueu potser no existeix en aquesta versió.
