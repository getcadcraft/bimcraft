---
title: Ficheiros que BimCraft abre e garda
summary: Cada formato que BimCraft abre, que conserva, que garda, onde van os ficheiros gardados e que cambia entre navegadores e cando está sen conexión.
keywords: formatos, abrir, gardar, exportar, descargar, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, subir, privacidade, tamaño do ficheiro
from: a7275dbf
---

BimCraft le os ficheiros do seu computador, na pestana do navegador. **Non se sube nada** a CadCraft nin a ninguén. Cando garda, BimCraft entrega ao navegador un ficheiro novo para descargar; nunca sobrescribe un ficheiro que abriu.

## O que abre

| Formato | Extensións | O que obtén |
|---|---|---|
| IFC | `.ifc` | O modelo en 3D, pisos, número de elementos e as propiedades de cada elemento. Os nomes, as etiquetas e os valores de propiedade individuais poden cambiarse. |
| Ficheiros de proxecto e de familia | `.rvt` `.rfa` `.rte` `.rft` | Unha ficha do ficheiro: versión, compilación, traballo compartido, información do proxecto, parámetros da familia, ficheiros ligados e a imaxe de vista previa. Sen 3D. |
| DWG | `.dwg` | O debuxo en 2D: espazo do modelo, cada folla, capas, debuxos ligados, imaxes e vista de impresión. Espazo do modelo tamén en 3D. Compróbanse os formatos desde AutoCAD 2000 ata 2018. |
| DXF | `.dxf` | O mesmo que DWG. |
| STEP | `.step` `.stp` | Unha peza, un equipo ou o modelo dun provedor (AP203, AP214, AP242) en 3D: cada sólido convértese nun elemento (un proxy de elemento de edificio) dun pequeno modelo IFC nun piso, lido como triángulos no seu tamaño real, un conxunto con cada peza onde o ficheiro a sitúa. Desde aí funciona como calquera IFC: propiedades, seccións, medir, gardar como IFC. As cores e a árbore do conxunto non se len. |
| Nubes de puntos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | A escaneadura na vista 3D, xunto a un modelo ou soa: vexa [Mostrar unha nube de puntos xunto ao modelo](topic:point-clouds). |
| Paquete de proxecto | `.ccbundle.zip` | O modelo coas súas vistas, presentacións e grupos de propiedades: vexa [Abrir un paquete de proxecto](topic:open-project-bundle). |
| Un cartafol | calquera | Un informe de cada modelo, debuxo e paquete de proxecto que contén. Calquera IFC, modelo, debuxo ou paquete do informe ábrese cun clic. |

[O que BimCraft le de cada formato](topic:file-formats) explícao con detalle.

BimCraft decide que é un ficheiro mirando os seus primeiros bytes ademais do nome, así que un ficheiro de proxecto cunha extensión pouco habitual segue abrindo como unha ficha do ficheiro.

### Non se abren

- `.ifczip` e `.ifcxml`: BimCraft di: «.ifczip aínda non é compatible. Garde ou exporte o modelo como un ficheiro .ifc simple.» Descomprima o `.ifczip` (contén un `.ifc` simple) ou exporte de novo como IFC simple.
- Os debuxos DGN aparecen nun informe de cartafol, pero non se abren.
- Os PDF, as imaxes e os ficheiros de oficina non se abren por si mesmos. As imaxes úsanse como imaxes dentro dun DWG, e {{ui:Compilación}} › {{ui:Desde un debuxo…}} convirte as páxinas dun PDF ou dunha escaneadura en muros: vexa [Muros a partir dun conxunto de planos](topic:walls-from-plans).

## O que garda

| Vostede preme | Obtén | Onde |
|---|---|---|
| {{ui:Gardar como IFC}} | Un ficheiro IFC novo coas súas edicións, co nome «*nome orixinal* (edited).ifc» | A carpeta de descargas do seu navegador |
| {{ui:Descargar CSV}} no cuadro de equipamento | Un CSV cos elementos da lista, co nome «*nome do debuxo* equipment.csv» | A carpeta de descargas do seu navegador |

Outras cousas gárdanse onde se fan, cada unha no seu tema: {{ui:USD}} ([Exportar o modelo como USD](topic:usd)), {{ui:Collada}} (.dae e o .kmz de Google Earth: [Exportar o modelo como Collada ou para Google Earth](topic:collada)), o .glb de {{ui:Para render}}, as imaxes renderizadas, as follas e as plantas en PDF, os cuadros e as listas en CSV, as incidencias BCF, a folla de cálculo COBie, os ficheiros de familia e as escaneaduras rexistradas como LAS ou E57. BimCraft non garda DWG, DXF nin ficheiros de proxecto, e nunca cambia os ficheiros que abriu.

:::chromium
Chrome e Edge gardan as descargas na carpeta definida nas súas configuracións, normalmente Descargas. Para que se lle pregunte onde gardar cada ficheiro, active «Preguntar onde gardar cada ficheiro antes de descargalo» nas configuracións de descarga do navegador.
:::

:::firefox
Firefox garda en Descargas, salvo que o configurase para «Preguntar sempre onde gardar os ficheiros» nas súas configuracións.
:::

:::safari
Safari garda en Descargas, salvo que escolla outra carpeta en **Safari > Configuración > Xeral > Localización das descargas de ficheiros**.
:::

## Gardar por segunda vez

Cada gardado descarga o modelo completo con **todas as edicións desde que o abriu**, non só as feitas despois do último gardado. A lista {{ui:Cambios}} comeza de novo baleira despois de cada gardado, así que non pode desfacer para atrás dun gardado. Para comezar de novo desde o orixinal, abra de novo o ficheiro orixinal.

## Ficheiros grandes e memoria

- Os ficheiros **IFC** léense por completo na memoria da pestana, e a xeometría 3D ocupa máis memoria por riba. Un modelo de varios centos de megabytes pode ser demasiado para un portátil. Por enriba de 1,5 millóns de triángulos, as arestas desactívanse para aforrar memoria («As arestas están desactivadas nos modelos moi grandes»).
- Os **ficheiros de proxecto** non se len por completo. BimCraft lee só as pequenas partes que precisa, uns 40 KB a 100 KB sexa cal sexa o tamaño do ficheiro, polo que un modelo central de 500 MB nunha unidade de rede se abre nun instante.
- Os ficheiros **DWG e DXF** léense por completo. Un debuxo moi grande mostra «Este debuxo é moi grande; só se mostra unha parte.»
- Os **cartafoles** de ata 20.000 ficheiros ábrense. Só se len os poucos kilobytes que precisa cada ficha de modelo.

Vexa [Navegadores, dispositivos e memoria](topic:platforms) para máis.

## En liña e sen conexión

Abrir ficheiros nunca precisa internet. Un lector descárgase desde o sitio a primeira vez que o precisa: o motor IFC, a primeira vez que abre un modelo IFC («Iniciando o motor IFC…»). Os lectores de DWG e DXF forman parte da aplicación.

:::offline
Está sen conexión. Se o botón da barra da aplicación di {{ui:Listo sen conexión}}, todos os formatos se abren como de costume. Se non, un modelo IFC non se pode abrir a menos que xa se abrise un nesta pestana: conéctese primeiro. Vexa [En liña e sen conexión](topic:online-offline).
:::

Para usar BimCraft sen conexión, prema {{ui:Gardar para usar sen conexión}} na barra da aplicación mentres está en liña e espere a ver {{ui:Listo sen conexión}}. A copia gardada ocupa uns 33 MB; inclúe o motor IFC, polo que os modelos IFC tamén se abren sen conexión. [Traballar sen conexión](common:offline) explica as copias gardadas en xeral.

## Gardado na nube

O gardado na nube aínda non está dispoñible. Garde as súas copias editadas no seu propio computador ou no servidor de ficheiros da oficina, como faría con calquera ficheiro. Vexa [Os seus ficheiros](common:your-files).
