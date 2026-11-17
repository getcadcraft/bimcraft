---
title: Documents i revisions (el magatzem)
summary: "Un pas a pas d'una feina real: poseu una carpeta de projecte de models IFC sota control, extreu un model, canvieu-lo, retorneu-lo amb una nota, envieu-lo a revisió, aprovar-lo i publicar-lo, veure l'historial i què l'utilitza, què veu una segona persona mentre està bloquejat, i com funciona amb carpetes al núvol."
keywords: magatzem, documents, pas a pas, tutorial, extracció, retorn, revisió, publicació, aprovació, bloqueig, historial, on s'usa, ifc, model, carpeta al núvol, carpeta de projecte, dues persones, carpeta compartida
from: 0a753f25
---

## Què fareu

Sou l'Ana, treballeu a la Riverside Clinic amb un company, en Ben. Els models IFC del projecte viuen en una carpeta que tots dos hi arribeu (una unitat compartida, una carpeta sincronitzada, o una carpeta al núvol). Al final, un fitxer haurà passat de la seva primera còpia a una revisió **A** publicada, haurà estat canviat de nou com a **B.1**, haureu vist qui va fer què, i haureu vist què veu en Ben quan teniu el fitxer.

Tot es guarda en una carpeta oculta `.ccvault` al costat dels vostres fitxers: sense servidor, sense pujar res (una carpeta al núvol n'és l'excepció, vegeu l'últim pas). Per a cada botó i cada regla en un sol lloc, vegeu el tema *Documents: extracció, revisions i publicació* on la vostra aplicació el tingui.

## 1. Poseu en marxa la carpeta del projecte

1. Trieu {{ui:Documents}} al costat de {{ui:Obre una carpeta}} a la pantalla d'inici, o {{ui:Documents…}} al menú **Fitxer**.
2. Trieu {{ui:Trieu la carpeta del projecte}} i escolliu la carpeta que conté els models IFC del projecte. (Les carpetes de projecte funcionen a Studio i en navegadors que poden obrir una carpeta, com Chrome i Edge. En altres navegadors el panell ho indica.)
3. Trieu {{ui:Canvi}} al costat de **Usuari:** i escriviu el vostre nom, `Ana` (si ho demana, també el nom d'aquest ordinador). El panell ara diu *Usuari: Ana a* i el nom de l'ordinador. El vostre nom va a tot el que feu.
4. Trieu {{ui:Crea un magatzem en aquesta carpeta}} i escriviu el nom del projecte, `Riverside clinic`. El panell diu *Magatzem iniciat per a Riverside clinic.*

## 2. Poseu un fitxer sota control

1. Obriu **Fitxers que no són al magatzem** i trieu {{ui:Afegeix}} al costat de `models/House.ifc`.
2. Apareix sota **Fitxers al magatzem** amb la revisió **A.1**, estat **En curs**. A.1 és la seva primera còpia; el magatzem guarda una còpia de cada revisió.

## 3. Extreu, canvia, retorna

1. Trieu {{ui:Obre}} al costat de `models/House.ifc`. El model s'obre a BimCraft i el panell es tanca perquè el pugueu veure. Torneu a obrir el panell des de {{ui:Documents}}.
2. Torneu a obrir el panell i trieu {{ui:Extreu}}. La fila ara diu **Extret per a vostè**. S'ha creat un fitxer de bloqueig a `.ccvault/locks`; ningú més no pot extreure aquest fitxer fins que el retorneu.
3. Canvieu el model: mogueu un mur, afegiu una porta. Desa es rebutja tret que el model estigui extret a vostè, i ho diu; Anomena i desa sempre funciona per a una còpia pròpia.
4. Obriu el panell, trieu {{ui:Retorna}} i escriviu què ha canviat (`Porta moguda`). El panell diu *retornat com a A.2*. El fitxer de la carpeta del projecte és ara el model que teníeu obert, i el bloqueig ha desaparegut. Retornar sense cap canvi manté la revisió.

Si canvieu d'opinió, {{ui:Desfés l'extracció}} torna el fitxer sense una revisió nova.

## 4. Revisió i publicació

1. Trieu {{ui:Envia a revisió}}. L'estat passa a **Per revisar** i el fitxer és només de lectura.
2. Abans d'aprovar, trieu {{ui:Configuració del projecte}} i escriviu qui pot aprovar (un nom per línia), per exemple `Ben` i `Carla`, i marqueu la regla que qui aprova ha de ser una persona diferent de l'autor. Trieu {{ui:Desa la configuració}}. Ara el magatzem mateix impedeix que ningú més ho faci.
3. En Ben (o la Carla) tria {{ui:Aprova}} i escriu el nom de qui aprova. L'estat passa a **Publicat** i la revisió passa a **A**, amb *aprovat per* i el nom. Un fitxer publicat és només de lectura. {{ui:Torna enrere}} l'hauria retornat a **En curs**, amb un motiu.

El nom de qui aprova és el que s'escriu al panell; és un registre de qui ho ha donat per bo, no una prova d'identitat.

## 5. Una revisió nova

1. Al fitxer publicat, trieu {{ui:Revisió nova}}. El reserveu per a la lletra següent.
2. Canvieu-lo i després {{ui:Retorna}}. La revisió és **B.1**, en curs. Publiqueu-la de la mateixa manera i passarà a ser **B**. {{ui:Desfés l'extracció}} abans del primer retorn la deixa a **A**.

Les lletres de revisió van A, B … Z, AA, AB. Si el vostre estàndard en deixa algunes, el paràmetre del projecte *Usa la seqüència ASME Y14.35* salta I, O, Q, S, X i Z per a les revisions següents.

## 6. Vegeu què ha passat

Trieu el nom del fitxer per obrir-ne els detalls:

- **{{ui:Historial}}**: cada esdeveniment, el més recent primer, amb qui, quin ordinador i quan: *Retornat A.2* per l'Ana, *Publicat* per en Ben, i així successivament.
- **{{ui:Revisions}}**: la taula de revisions: cada revisió conservada, amb la seva data, qui l'ha retornat, la nota, i qui l'ha aprovat. El magatzem guarda una còpia de cada una a `.ccvault/revs`.
- **{{ui:Fa servir}}**: els documents als quals apunta un model IFC.
- **{{ui:Utilitzat per}}**: llista cada model del magatzem que apunta a aquest fitxer.

## Models que apunten a altres documents

Un model IFC que apunta a altres documents de la carpeta (plànols, quadres) els mostra sota **Fa servir**, i cadascun d'ells mostra el model sota **Utilitzat per**. Si retorneu un document, veureu quins models s'hi refereixen.

## 7. Què veu en Ben mentre teniu el fitxer

Ara torneu a extreure el fitxer, i demaneu a en Ben que obri la mateixa carpeta de projecte al seu ordinador i obri el panell. A la fila del fitxer veu **Extret per l'Ana a l'ordinador d'ella des de** l'hora, i no hi ha cap botó {{ui:Extreu}}. Si ho intenta igualment, el magatzem ho rebutja: el bloqueig és un fitxer que el sistema no crea dues vegades, de manera que dues persones no poden tenir el fitxer alhora, ni tan sols en el mateix instant, quan la carpeta és al disc a Studio. (En un navegador la carpeta només permet un intent de bona fe, i el panell ho indica a **Carpeta**.)

Si l'Ana és fora i en Ben necessita el fitxer, {{ui:Trenca l'extracció}} n'allibera el fitxer. Ha d'escriure un motiu; va al registre amb de qui era l'extracció. Quan el projecte enumera administradors, només poden fer-ho ells. Una extracció més antiga que el límit d'obsolescència (14 dies per defecte) es marca com *molt de temps*. Després del trencament, el retorn tardà de l'Ana es rebutja, de manera que tots dos no us pugueu sobreescriure mútuament.

## 8. Carpetes al núvol

Una carpeta al núvol és una carpeta de projecte guardada a l'emmagatzematge al núvol de l'equip, de manera que l'equip no necessita una unitat compartida. A Studio, amb la sessió iniciada al vostre compte de CadCraft, el panell mostra {{ui:Obre una carpeta al núvol}} al costat de {{ui:Trieu la carpeta del projecte}}. Trieu-la i escolliu la carpeta, que apareix com a espai de treball / carpeta. Un propietari de l'espai de treball en crea primer la carpeta, i l'emmagatzematge al núvol de l'equip ha d'estar activat. Tot l'anterior funciona igual; el servidor fa el bloqueig, que és estricte entre persones. Si no heu iniciat la sessió, el panell us diu que ho feu. En una pestanya de navegador normal no s'ofereix el botó del núvol; useu Studio.

## Prova-ho

Feu els vuit passos d'aquí dalt amb una còpia d'un fitxer real. Per als passos de dues persones, en calen dues, o dues finestres amb dos noms. Si ho proveu amb una carpeta compartida real, la pàgina de proves de la comunitat té una comprovació que demana exactament això, i en recull els resultats.
