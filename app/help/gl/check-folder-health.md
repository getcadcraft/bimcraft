---
title: Comprobar un cartafol para detectar copias danadas, ligazóns perdidas e restos
summary: Use o informe do cartafol para atopar ficheiros de modelo cortados, escoller a copia de seguranza completa máis recente, ver que ligazóns faltan e localizar ficheiros de bloqueo e temporais.
keywords: comprobación de estado, danado, corrupto, incompleto, truncado, copia de seguranza, ligazóns perdidas, xref ausente, auditoría, restos, ficheiros de bloqueo, dwl, bak, entrega
from: 3025a539
---

## Que vai facer

Comprobe un cartafol do proxecto antes de entregalo ou de empezar a traballar nel: está completo cada modelo, cal é a última copia de seguranza correcta e están todos os ficheiros ligados?

## Pasos: copias danadas

1. Abra o cartafol do proxecto. Vexa [Abrir un cartafol de proxecto completo](topic:open-project-folder).
2. Lea as notas baixo o nome do cartafol. « 2 ficheiros están incompletos ou non se poden ler. Vexa os modelos máis abaixo. » indica que hai algo que revisar.
3. En **Modelos**, mire a columna **Estado**. **Completo** está ben. Un « 1 incompleto » en ámbar significa que unha copia está mal pero outra é correcta. Un **Incompleto** en vermello significa que non se atopou ningunha copia correcta.
4. Abra **Todas as … copias** baixo un modelo con problemas. Lista o ficheiro principal e cada copia numerada, da máis recente á máis antiga, con tamaño, data e estado.
5. Lea a nota sobre a lista, por exemplo « Tower.rvt está incompleto (183,2 MB; debería ter polo menos 214,0 MB). A ficha mostra a copia completa máis recente, Tower.0012.rvt (3 de marzo de 2025). »
6. Prema a copia que quere abrir. Só se poden premer as copias completas.

## Que fai a comprobación de estado

Cada copia de cada modelo recibe unha comprobación rápida da súa cabeceira, de 512 bytes cada unha, así que incluso un cartafol de modelos grandes se comproba en segundos. Un ficheiro cuio propio índice aponta máis aló do seu final foi cortado mentres se copiaba, se subía ou se sincronizaba. Un ficheiro de servizo na nube que aínda está « só en liña » parece o mesmo.

A ficha de cada modelo lese do ficheiro principal cando é correcto, e da copia de seguranza correcta máis recente cando non o é.

## Pasos: ligazóns perdidas

1. Busque a nota « *n* ligazóns a ficheiros non están neste cartafol. » baixo o nome do cartafol.
2. Desprácese até **Ficheiros ligados e referenciados**. As ligazóns perdidas aparecen primeiro.
3. Lea a columna **Onde** de cada ligazón:
   - **Neste cartafol**: atopado na ruta que o modelo gardou.
   - **Atopado co mesmo nome**: hai un ficheiro co mesmo nome noutro lugar do cartafol. Comprobe que é o correcto.
   - **Ficheiro da biblioteca**: unha táboa de códigos de notas-chave ou de montaxe. Estas veñen co programa en cada ordenador, así que non se espera que estean no cartafol.
   - **Non está neste cartafol**: non se atopou en ningún lugar do cartafol.
4. Lea **Usado por** para ver que modelos ligan cada ficheiro.

BimCraft busca cada ligazón primeiro pola súa ruta relativa, despois polo final da ruta gardada (así que `\\servidor\obras\Tower\Cad\X-Refs\site.dwg` se atopa en `X-Refs/site.dwg` se escolleu a carpeta `Cad`), e por último polo nome do ficheiro en calquera lugar do cartafol.

## Pasos: restos

1. Desprácese até **Apartado** ao final do informe.
2. Lea as tres liñas que poden aparecer:
   - Cartafoles de mantemento (`*_backup`, `*_log`, `Revit_temp`): non se len.
   - Restos de bloqueo, rexistro e copias de seguranza: ficheiros como `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Deixounos programas que fallaron ou que estaban abertos cando se copiou o cartafol. Adoitan poder eliminarse con seguridade cando ninguén ten os ficheiros abertos.
   - Outros ficheiros: todo o demais que BimCraft non lee.

## Erros frecuentes

- **Eliminar o ficheiro principal danado antes de gardar unha boa copia de seguranza.** Copie primeiro a copia completa máis recente e despois trate o ficheiro danado.
- **Fiarse cegamente de « Atopado co mesmo nome ».** Dous debuxos distintos poden ter o mesmo nome. Se hai dúbidas, abra os dous.
- **Pensar que un ficheiro de biblioteca que falta é un problema.** As táboas de códigos de notas-chave e de montaxe están co programa en cada ordenador.
- **O número de ficheiros difire entre navegadores.** En Firefox e Safari, {{ui:Abrir un cartafol}} entrega todos os ficheiros, incluídos os que están dentro dos cartafoles de mantemento, así que o recontó (e o límite de 20.000 ficheiros) os inclúe. Arrastrar o cartafol ao navegador omíteos, como fan Chrome e Edge. O informe é, por outra parte, o mesmo.
