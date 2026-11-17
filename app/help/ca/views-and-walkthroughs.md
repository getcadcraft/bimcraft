---
title: Desa vistes i recorreguts
summary: Guardeu vistes de càmera del model pel seu nom, torneu-hi, reprodu-les una darrera l'altra, i graveu un recorregut per l'edifici per reproduir-lo.
keywords: vistes, vistes desades, càmera, càmeres, punt de vista, escena, escenes, recorregut guiat, presentació, recorregut, sobrevol, grava, reprodueix, trajectòria, animació
from: 3af19a36
---

{{ui:Vistes}} a la barra d'eines guarda càmeres de la vista 3D al fitxer del model, perquè vosaltres i qui us l'envieu hi pugueu tornar directament.

## Desa una vista

1. Organitzeu la vista 3D: orbiteu, feu zoom, amagueu el que no voleu.
2. Cliqueu {{ui:Vistes}}, escriviu un nom (o mantingueu el que se us ofereix) i cliqueu {{ui:Desa la vista}} o premeu {{key:Enter}}.

Desar amb un nom que ja és a la llista actualitza aquella vista. Cliqueu el nom d'una vista per tornar-hi; la càmera s'hi mou suaument.

Les fletxes canvien l'ordre, el llapis reanomena, i la paperera esborra. Cada canvi és un pas, de manera que {{key:Ctrl+Z}} el desfà.

## Reprodueix les vistes

{{ui:Reprodueix les vistes}} passa d'una vista a la següent segons l'ordre de la llista, aturant-se un moment a cadascuna. {{key:Esc}} o {{ui:Atura}} ho acaben.

## Grava un recorregut

1. Activeu [Recorregut](topic:walk) i comenceu a caminar dins de l'edifici.
2. A {{ui:Vistes}}, cliqueu {{ui:Grava un recorregut}}.
3. Camineu amb {{key:W}} {{key:A}} {{key:S}} {{key:D}} i mireu al voltant amb el ratolí.
4. Cliqueu {{ui:Atura la gravació}}. El recorregut es desa com a «Recorregut 1», amb la seva longitud.

Cliqueu un recorregut per reproduir-lo tal com l'heu fet. {{key:Esc}} l'atura.

## Renderitza un recorregut com a vídeo

Cliqueu la icona de pel·lícula al costat d'un recorregut. El diàleg de vídeo dibuixa cada fotograma del recorregut amb la configuració de Renderitza que vau triar per últim, a la mida, la freqüència de fotogrames i la qualitat que trieu aquí. Desa-ho com a vídeo WebM o MP4, o com a ZIP amb una imatge per fotograma. Els fotogrames triguen tant com les imatges, de manera que comenceu amb {{ui:Ràpid}}.

## Narra un recorregut

Cliqueu la icona del globus de diàleg al costat d'un recorregut. Escriviu una línia per a cada cosa que es diu, i comenceu cada línia amb l'hora en què comença (`12`, `0:12` o `1:02.5`); una línia sense hora segueix la línia de sobre després del temps que triga a dir-se. Trieu l'idioma, en l'idioma del client si és qui ho veurà. {{ui:Vista prèvia}} reprodueix les paraules amb la veu d'aquest ordinador i les mostra com a subtítols; el mateix passa sempre que el recorregut es reprodueix. {{ui:Desa amb el recorregut}} manté la narració a l'IFC amb el recorregut.

El vostre assistent connectat pot escriure la narració per a vosaltres: demaneu-li que miri el recorregut i les vistes desades, i posarà les línies en l'idioma que indiqueu, com un sol pas per desfer.

El vídeo renderitzat no té so propi, perquè un navegador no pot gravar la seva pròpia veu. Deseu els subtítols (`.srt` o `.vtt`) i afegiu-los al vídeo al vostre reproductor o editor de vídeo. Les veus que podeu triar depenen de l'ordinador: un idioma sense veu instal·lada encara obté els subtítols.

## Al fitxer

Les vistes i els recorreguts es guarden a l'IFC com el conjunt de propietats `CadCraft_Views` al projecte: IFC normal que altres programes ignoren. Són a les coordenades del primer model, de manera que encara encaixen després que el model es torni a carregar o que se n'afegeixi un altre.

:::tip
Per renderitzar una imatge d'una vista desada, aneu a la vista, i després cliqueu [Renderitza](topic:render).
:::
