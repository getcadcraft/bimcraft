---
title: Posa una imatge sota el plànol
summary: Col·loqueu una imatge PNG, JPEG o WebP (un plànol escanejat, un croquis, una foto de l'emplaçament, una vista aèria) sota el plànol d'un nivell o en un pla vertical, escaleu-la per dos punts, moveu-la, gireu-la, esvaïu-la i bloquegeu-la, vegeu-la en 3D i al PDF del plànol, i conserveu-la al costat del model en un paquet.
keywords: imatge, fons, PNG, JPEG, WebP, escaneig, croquis, foto, vista aèria, plànol de situació, escala, opacitat, bloqueig, sota, calc
from: e3c78d1f
---

## Col·loca una imatge

Activeu {{ui:Dibuixa}}, aneu al nivell, i trieu {{ui:Imatge}} al menú {{ui:Compilació}}. Després {{ui:Insereix una imatge…}} i trieu un fitxer PNG, JPEG o WebP. Es llegeix al navegador i mai no es puja. Apareix sota el plànol, ajustada a la vista, i la barra d'eines indica que encara no està escalada. Tot el que dibuixeu queda per sobre.

## Estableix l'escala

Trieu {{ui:Escala}}, feu clic a dos punts de la imatge de la distància real dels quals sabeu (dos extrems d'un mur en un plànol escanejat, una cota impresa en un croquis), i després escriviu la distància i premeu {{key:Enter}}. La imatge creix o es redueix al voltant del primer punt on heu fet clic. {{key:Esc}} cancel·la.

## Enganxa una àrea copiada

A MarkupCraft, {{ui:Copia àrea}} copia part d'un full PDF com a imatge. De nou a BimCraft, amb el plànol d'un nivell visible, premeu {{key:Ctrl+V}} (o {{ui:Enganxa}} al menú {{ui:Edita}}): l'àrea es col·loca al plànol com a imatge, centrada on és el punter (o al mig de la vista). Quan el full tenia una escala de dibuix, entra a la seva mida real, de manera que un mur del full té la mateixa llargada que els vostres murs. Sense escala, entra a la mida de paper i s'inicia {{ui:Escala}}, de manera que podeu fer clic a dos punts i escriure'n la distància. Una àrea copiada com a superposició comença amb l'opacitat amb què es va copiar. És un sol pas de desfer i es conserva com qualsevol altra imatge.

{{ui:Enganxa}} fa servir l'últim que heu copiat: una àrea copiada o alguna cosa que hàgiu copiat a BimCraft. {{key:Ctrl+V}} també enganxa qualsevol altra imatge PNG, JPEG o WebP del porta-retalls, col·locada com {{ui:Insereix una imatge…}} i encara no escalada. Una àrea copiada es recorda durant sis hores.

## Mou, gira, esvaeix, bloqueja

{{ui:Mou}} demana un punt base a la imatge i després el lloc on ha d'anar. {{ui:Gira}} demana un angle en graus, al voltant del centre de la imatge. {{ui:Opacitat}} l'esvaeix perquè les vostres línies destaquin. {{ui:Bloqueja}} evita que es mogui mentre dibuixeu; una imatge bloquejada encara us permet canviar-ne l'opacitat i amagar-la. Cada canvi és un pas de desfer.

## Diverses imatges, diversos nivells

Una imatge pertany al nivell on s'ha col·locat i es mostra al plànol d'aquell nivell i al plànol de sostre. Feu clic a una imatge per treballar-hi, o trieu-la a la llista. {{ui:Amaga}} la desactiva sense treure-la; {{ui:Suprimeix}} (o {{key:Delete}}) la treu del model.

## Imatges a la vista 3D

Cada imatge també es veu a la vista 3D com un pla: una imatge de planta es troba sobre el seu nivell, una imatge de pla vertical es col·loca sobre la seva línia de secció. Es dibuixa sobre el model sense amagar-lo, i el model amaga la part de la imatge que hi ha darrere. Les imatges que se superposen s'ordenen per distància. Opacitat, Amaga, Bloqueja i Suprimeix funcionen igual, i {{ui:Mostra en 3D}} desactiva tots els plans només a la vista 3D. Un nivell admet com a màxim 8 imatges, per mantenir les vistes ràpides.

## Una imatge en un pla vertical

A {{ui:Col·loca sobre}} trieu {{ui:Un pla vertical (línia de secció)}}, i després {{ui:Insereix una imatge…}}. Feu clic als dos extrems d'una línia del plànol (un extrem de cara de mur s'hi ajusta), o trieu una línia de secció amb nom del nivell a {{ui:Sobre una línia de secció}} i no cal fer clic. La imatge es col·loca sobre aquella línia al nivell, tan ampla com la línia. Establiu-ne {{ui:Amplada}}, la seva posició {{ui:Al llarg de la línia}} i la seva {{ui:Alçada sobre el nivell}} escrivint-les; {{ui:Gira}} la gira en el seu propi pla. Una imatge vertical no es dibuixa sota el plànol; el plànol en mostra la línia mentre hi treballeu. BimCraft no té cap finestra interactiva de secció 2D: les seccions i els alçats es dibuixen als fulls, i de moment les imatges no s'imprimeixen en aquestes vistes de full.

## Impressió

{{ui:Vista d'impressió}} en un plànol escriu les imatges del nivell al PDF sota el dibuix, a la seva escala, gir i opacitat, retallades al full; una imatge amagada no s'hi inclou. Un JPEG s'hi posa tal com és; les altres imatges es redueixen primer a 200 dpi al full.

## Conservades al costat del model

Els bytes de la imatge no s'escriuen al text IFC. El model es refereix a cadascuna pel seu nom (un IfcDocumentReference com pictures/<id>.png) i els bytes viatgen en un paquet de projecte. Useu {{ui:Desa com a paquet…}} (o {{ui:Desa com a IFC}} i trieu-ho): obteniu un sol fitxer .ccbundle amb el model i les seves imatges, l'IFC continua petit i les edicions continuen ràpides. Quan obriu el .ccbundle, les imatges tornen a ser-hi.

Un .ifc simple no pot contenir una imatge sense fer-se gran. Quan en deseu un, BimCraft us indica quantes imatges es conserven fora i us ofereix un paquet, o un IFC simple que incrusta les imatges fins a 512 KB i en deixa les altres fora. Un .ifc simple obert sense el seu paquet mostra aquestes imatges com a que falten, i Problemes les llista; obriu el .ccbundle on es van desar. Els fitxers desats per la primera versió, amb la imatge dins de l'IFC, continuen obrint-se, i desar un paquet en trau les imatges. Una imatge es conserva tal com és fins a 6 MB; una de més gran es redueix primer, i se us avisa. Altres programes obren el model i ignoren les imatges. Una imatge que encara no heu escalat apareix a Problemes com a nota.

## Als fulls de seccions i alçats

Una imatge en un pla vertical (trieu {{ui:Vertical}} al tauler de la imatge i feu clic als dos extrems d'una línia, o col·loqueu-la sobre una línia de secció amb nom) s'imprimeix a les vistes de full que hi miren de front. Una secció mostra una imatge que es troba sobre la seva línia de tall, o que s'ha col·locat sobre aquella línia de secció pel nom. Un alçat mostra cada imatge vertical el pla de la qual mira cap a ell. La imatge es dibuixa sota les línies de la vista, a l'escala de la vista, retallada a la vista, i conserva la seva opacitat. Obriu {{ui:Fulls…}} per veure-la; el PDF del full la porta com a imatge. Vista des de darrere, una imatge apareix emmirallada, com en 3D. Les imatges amagades no s'hi inclouen.
