---
title: Solución de problemas
summary: Mensaxes que BimCraft amosa, que as causa e que facer, para abrir ficheiros, cartafoles, modelos 3D, debuxos e edicións.
keywords: problema, erro, non funciona, non se pode abrir, fallou, incompleto, corrupto, lento, fallo, en branco, falta, mensaxe, axuda
from: 1e5a79fc
---

As mensaxes aparecen na liña de estado, na parte inferior do escenario, en vermello cando algo fallou. Busque a mensaxe máis abaixo.

## Abrir ficheiros

**«*nome* non é un ficheiro IFC, RVT, RFA, DWG nin DXF.»**
BimCraft non recoñeceu o ficheiro. Comprobe a extensión e que o ficheiro non estea baleiro. Os PDF, as imaxes e os ficheiros de oficina non se abren.

**«.ifczip aínda non é compatible. Garde ou exporte o modelo como ficheiro .ifc simple.»** (tamén para `.ifcxml`)
Descomprima o `.ifczip` (é un zip normal que contén un `.ifc`) ou exporte IFC simple.

**«… é un ficheiro de proxecto que BimCraft aínda non le.»**
Un ficheiro `.pln`, `.pla`, `.tpl` ou `.bpn`. Exporte desde el IFC ou DWG e ábrao: véxase [Abrir ficheiros de proxecto .pln e .pla](topic:pln-project-files).

**«Non se puido ler este ficheiro IFC.»**
O ficheiro IFC está danado ou non é realmente IFC. Ábrao nun editor de texto: un ficheiro IFC real comeza con `ISO-10303-21;`. Expórteo de novo.

**«Este ficheiro está incompleto: ten … MB, pero o seu propio índice apunta a datos de polo menos … MB. …»**
O ficheiro do proxecto ou da familia cortouse ao copialo, subilo ou sincronizalo. Un ficheiro dunha unidade na nube que está «só en liña» parece igual. Un ficheiro aberto por si só ábrese igualmente, coa mensaxe na parte superior da tarxeta e «Amosando o que se puido recuperar; copie de novo o orixinal para o modelo completo.»: a tarxeta amosa só as partes cuxos bytes están todos no ficheiro e lista o resto baixo **Non está no ficheiro**. Deixe o ficheiro dispoñible sen conexión na súa unidade na nube, ou copie de novo o orixinal, e reábrao. Nun cartafol, BimCraft amosa no seu lugar a copia de seguranza completa máis recente.

**«… A lista de contidos do propio ficheiro tamén está na parte que falta, así que non se pode abrir nada del.»**
O ficheiro cortouse tan cedo que nin sequera está a lista de contidos. Desta copia non se pode recuperar nada. Copie de novo o orixinal e reábrao.

**«Este ficheiro composto non ten un fluxo BasicFileInfo, así que non é un ficheiro de Revit.»**
É un ficheiro composto doutro tipo (os documentos antigos de oficina usan o mesmo contedor). Comprobe que escolleu o ficheiro correcto.

**«Aínda se traballa co anterior…»**
BimCraft segue ocupado co ficheiro ou cartafol anterior. Agarde a que a liña de estado remate e logo probe de novo.

**O selector de ficheiros atenúa o meu ficheiro.**
O selector só ofrece `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` e `.dxf`. Arrastre no seu lugar outros ficheiros á páxina, e BimCraft dirá se os pode ler.

## Abrir cartafoles

**«Este cartafol ten máis de 20.000 ficheiros. Escolla un cartafol máis pequeno, como un proxecto.»**
Escolleu un cartafol demasiado alto, como unha unidade completa. Escolla un cartafol de proxecto.

**«O navegador non deu acceso a *nome*. Escóllao de novo con Abrir un cartafol.»**
Premeu {{ui:Reabrir}} nun cartafol recente e o permiso do navegador foi denegado ou caducou. Escolla de novo o cartafol, ou arrástreo ata aquí.

**O navegador di que vai «subir» ficheiros.**
Esa é a redacción propia do navegador para entregar ficheiros a unha páxina. BimCraft non os envía a ningún lado. Arrastre o cartafol para evitar a pregunta.

**Non pasa nada nun teléfono ou tableta.**
Moitos navegadores móbiles non poden escoller cartafoles. Abra ficheiros soltos, ou use un ordenador.

## O motor IFC cárgase a primeira vez

**A liña de estado queda en «Iniciando o motor IFC…», ou amosa un erro como «Failed to fetch».**
Non se puido descargar o motor IFC. Pode estar sen conexión, ou un cortalumes ou un bloqueador de contido estar impedíndoo.

:::offline
Está sen conexión. Se o botón da barra da aplicación non di {{ui:Listo sen conexión}}, o motor IFC nunca se gardou neste navegador. Conéctese de novo, abra o ficheiro outra vez e logo prema {{ui:Gardar para usar sen conexión}} para que funcione sen conexión a próxima vez. Véxase [En liña e sen conexión](topic:online-offline).
:::

:::online
Recargue a páxina e probe de novo. Nunha rede de traballo, pida ao seu equipo de TI que permita os ficheiros `.wasm` do sitio.
:::

## Gardar para uso sen conexión

**O botón di {{ui:Non se puido gardar}}.**
Algúns ficheiros non se descargaron, normalmente porque se cortou a conexión. Comprobe a conexión e prema de novo o botón. Calquera copia sen conexión anterior consérvase ata que a nova estea completa.

**O botón di {{ui:Sen copia sen conexión}}.**
Esta xanela non pode gardar unha copia sen conexión, por exemplo unha xanela privada ou un ordenador de traballo xestionado. Véxase [Traballo sen conexión](common:offline).

**O botón queda un tempo en «Gardando *n* de *m*».**
A copia de BimCraft ocupa uns 11 MB, a maior parte o motor IFC. Manteña a pestana aberta ata que diga {{ui:Listo sen conexión}}.

**BimCraft abriuse sen conexión, pero parece desactualizado.**
A copia gardada é dunha visita anterior. Cando estea en liña, prema {{ui:Listo sen conexión}} e escolla {{ui:Gardar de novo (obter a versión máis recente)}}.

## Vista 3D

**O modelo non está onde esperaba, ou é diminuto.**
Prema {{key:F}} ou prema {{ui:Axustar}}. Axustar encadra sempre todo o modelo, incluídos os pisos que desmarcou e os elementos perdidos lonxe do edificio, así que o edificio pode parecer pequeno. Faga zoom desde aí.

**Premer non escolle nada.**
Manteña o rato quieto ao premer: un pequeno arrastre orbita. Non se poden escoller elementos de pisos desmarcados. Con {{ui:Espazos}} activado, os espazos transparentes escóllense antes do que hai dentro deles.

**O botón {{ui:Arestas}} está atenuado: «As arestas están desactivadas para modelos moi grandes».**
O modelo ten máis de 1,5 millóns de triángulos. As arestas quedan desactivadas para aforrar memoria.

**A pestana vólvese lenta, branca, ou amosa a páxina de fallo do navegador.**
O modelo é demasiado grande para a memoria que o navegador lle dá á pestana. Peche outras pestanas e recargue. Exporte un IFC máis pequeno: un edificio, unha disciplina ou menos pisos. Véxase [Navegadores, dispositivos e memoria](topic:platforms).

**A vista 3D queda en branco.**
WebGL pode estar desactivado ou bloqueado. Nos axustes do navegador, active a aceleración por hardware (ou aceleración gráfica) e reinicie o navegador.

## Editar IFC

**«Use un número.»** O valor é numérico. Escriba un número simple, sen unidades, como `2.4`.

**«Use un número enteiro.»** O valor é un recontos ou un enteiro. Elimine os decimais.

**«Só se poden editar as propiedades de valor único.»** As listas, as enumeracións e as cantidades son só de lectura.

**{{key:Mod+S}} abre a xanela «Gardar páxina» do navegador.**
Non hai cambios sen gardar, así que BimCraft deixou a tecla ao navegador. Peche a xanela.

**{{key:Mod+Z}} non fai nada.**
Funciona só mentres hai cambios sen gardar e non está escribindo nun campo. Despois dun gardado, non queda nada que desfacer.

**A lista {{ui:Cambios}} segue mostrando edicións despois de descartalas e de abrir un debuxo ou un cartafol.**
Cando responde «Descartalas?» con Aceptar e logo abre algo distinto dun modelo IFC, as edicións antigas quedan na memoria e {{ui:Gardar como IFC}} aínda as gardaría. Para empezar de verdade desde cero, abra de novo o IFC orixinal, ou recargue a páxina.

**A miña edición cambiou máis elementos dos que escollín.**
Cambiou unha propiedade nun conxunto marcado «(tipo)». As propiedades de tipo aplícanse a cada elemento do tipo. Prema {{ui:Desfacer}}. Véxase [Cambiar unha propiedade de tipo para cada elemento dun tipo](topic:type-vs-instance).

## Debuxos

**«*nome* non se puido ler. Pode estar danado, ou gardado nun formato que o lector aínda non trata (…).»**
Garde o debuxo desde o programa que o fixo como DWG máis antigo (2018 ou anterior) ou como DXF, e probe de novo.

**«Este debuxo non ten nada que amosar.»** ou **«*nome* é un debuxo baleiro: non ten liñas, texto nin bloques.»**
O debuxo está baleiro, ou só ten cousas que BimCraft aínda non debuxa (véxase **Aínda sen debuxar** á dereita).

**«Este debuxo é moi grande; só se amosa unha parte.»**
BimCraft deixou de debuxar para seguir respondendo. Desactive as capas que non precisa, ou abra as follas que precisa desde un debuxo máis pequeno.

**Faltan partes dunha folla.**
Poden faltar debuxos vinculados: mire baixo **Debuxos vinculados** á dereita. Véxase [Atopar debuxos e imaxes vinculados](topic:dwg-linked-files). As capas tamén poden estar desactivadas: prema {{ui:Todas activas}}.

**Unha imaxe amósase como un marco baleiro.**
Non se atopou o seu ficheiro, ou é un TIFF («O TIFF non se pode amosar nun navegador»). Engada unha copia PNG ou JPEG con {{ui:Engadir imaxes…}}.

**Ao desprazar co trackpad faise zoom en vez de mover o debuxo.**
Así funcionan os debuxos en BimCraft. Prema e arrastre para desprazar.

## Aínda sen solución

Lea [Que aínda non está construído](topic:not-built-yet): o que busca pode non existir nesta versión.
