---
title: Treballa en un model junts amb Live TeamWork
summary: Què canvia a BimCraft mentre sou en una sessió de Live TeamWork des de CadCraft Studio: els canvis de tothom al mateix model IFC, desfer els vostres propis canvis i unir-se des d'un navegador a la mateixa xarxa.
keywords: en directe, live teamwork, studio live, junts, col·laborar, sessió, compartir en directe, unir-se, ifc, propietats, reanomenar, cursor, punter, veure's els uns als altres, noms, color, selecció, desfer, amfitrió
from: 32061b72
---

## Què aprendreu

Què passa amb un model IFC quan diverses persones l'editen alhora. CadCraft Studio inicia i uneix la sessió de Live TeamWork (Comparteix, Uneix-te); aquesta pàgina tracta del model en si.

## Tothom edita alhora

El model de l'amfitrió arriba a tothom que s'uneix. Reanomeneu elements, canvieu-ne els valors de propietat, col·loqueu, substituïu o traieu elements i elements de la biblioteca com de costum. Els vostres canvis es veuen de seguida; els dels altres apareixen just després que els facin. Quan un canvi modifica el que veieu (un element col·locat o retirat), BimCraft redibuixa el model i manté la vostra vista.

- **Dues persones canvien un element:** preval el canvi posterior a la mateixa línia del model. Un conjunt de propietats compartit per diversos elements es copia per a l'element que editeu, com sempre, de manera que els altres conserven els seus valors.
- **Un element que algú acaba de retirar** ja no es pot editar: el vostre canvi es desfà i la barra d'estat n'indica el motiu.
- Les noves línies del model de cada persona reben números propis, de manera que dues persones mai no en fan el mateix.

## Veieu els altres

Cada persona de la sessió té un color propi. A la vista 3D veieu el punter de cada persona com una fletxa del seu color amb el nom al costat, sobre l'element que assenyala, i un quadre de traç discontinu del seu color al voltant de cada element que ha seleccionat.

Els punters, els noms i les seleccions només existeixen durant la sessió: mai es desen al fitxer i mai no entren al desfer de ningú. Es desplacen fins on és cada persona, de manera que també són fluids en una connexió lenta.

## Desfer desfà la vostra feina

{{ui:Desfés}} desfà la vostra darrera edició i deixa intacta la dels altres. Quan algú ha canviat la mateixa cosa després, no es desfà res i la barra d'estat indica qui ho ha fet.

## Uneix-te des d'un navegador

Un company d'equip sense Studio pot escanejar la imatge que hi ha sota el codi de l'amfitrió amb un telèfon, una tauleta o un ordinador de la mateixa xarxa. BimCraft s'obre al navegador i obre el model de l'amfitrió quan aquest us deixa entrar. Un enllaç d'invitació permet que algú s'uneixi des d'una altra xarxa: l'amfitrió necessita un lloc del Team Cloud Plan per a l'aplicació, la resta s'uneix de franc, i l'enllaç només funciona mentre la sessió de l'amfitrió és oberta.

## Quan acaba la sessió

Només l'amfitrió desa el model. La resta conserva una còpia sense desar: si la voleu conservar, anomeneu i deseu com a IFC.

:::note
Només es comparteix el primer model de l'escena. Obrir un altre fitxer durant una sessió deixa la sessió en aquesta finestra.
:::
