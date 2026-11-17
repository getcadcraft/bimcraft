---
title: Abrir un paquete de proxecto
summary: Un paquete de proxecto é un único zip cun modelo, as súas vistas, as súas follas e os seus grupos de propiedades. Ábrao, mostre unha vista co seu piso e as súas capas, abra unha folla e vexa as propiedades nos grupos do propio proxecto.
keywords: paquete, paquete de proxecto, ccbundle, zip, vistas, mapa de vistas, follas, libro de follas, combinación de capas, grupos de propiedades, estándares, pln, plantilla
from: b5b86e8f
---

## Que vai facer

Abrir un **paquete de proxecto** (`.ccbundle.zip`) e traballar co proxecto tal como estaba organizado: as súas vistas, as súas follas e os seus grupos de propiedades, sobre o modelo.

Un paquete contén:

- o modelo como IFC,
- as follas como PDF e DWG,
- unha lista do que IFC deixa fóra: as vistas (cada unha co seu piso, a súa combinación de capas e a súa escala), as follas e os debuxos colocados nelas, as definicións de propiedades nos seus grupos, as clasificacións e os estándares, como capas, conxuntos de plumas, tipos de liña, tramas, superficies e compostos.

Un script de código aberto que se executa dentro de Archicad xera os paquetes e pídelle a propia Archicad estas listas. BimCraft nunca le os ficheiros `.pln` ou `.tpl` directamente; vexa [Abrir ficheiros de proxecto .pln e .pla](topic:pln-project-files).

## Crear un paquete

O script é unha versión de vista previa: aínda non se probou en todas as versións de Archicad. Descargue o script desde [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Precisa Archicad 24 ou posterior e Python 3.8 ou posterior; non hai nada máis que instalar.

1. Garde `archicad_bundle.py` nunha carpeta, por exemplo `C:\cc-bundle`.
2. En Archicad, abra o proxecto e cree un conxunto de publicación chamado exactamente **CadCraft bundle**: a vista 3D como IFC, cada folla como PDF, e cada folla de novo como DWG, publicados en ficheiros no disco nunha única carpeta plana.
3. Con o proxecto aberto, execute `python archicad_bundle.py --probe --out .` unha vez. Só le, e escribe `probe.json`.
4. Execute `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (use o tradutor IFC que escolleu). Archicad publica o conxunto e o script escribe `<project>.ccbundle.zip`.

Se a publicación a través do script falla, publique o conxunto a man e execute `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. O README do repositorio recolle todas as opcións. Se algo non chega, abra unha incidencia alí e adxunte `probe.json`.

## Abrir un paquete

1. Prema {{ui:Escoller un ficheiro}}, ou solte o `.ccbundle.zip` sobre BimCraft. Nunha carpeta que abriu con {{ui:Abrir un cartafol}}, os paquetes aparecen en **Paquetes de proxecto**; prema un polo nome.
2. O modelo ábrese como se abre calquera IFC, e a sección **Paquete de proxecto** aparece á esquerda, debaixo dos datos do ficheiro.

Non se envía nada: o paquete procésase no seu equipo, un ficheiro de cada vez, para que un modelo grande non se copie dúas veces.

## Mostrar unha vista

Debaixo de **Vistas**, as vistas agrúpanse polas carpetas que tiñan no proxecto. Prema o nome dunha vista:

- **Unha planta** mostra só o seu piso, visto desde arriba.
- **A súa combinación de capas** oculta os elementos das capas que esa combinación oculta. A liña de estado indica cantos elementos ocultou.
- **A súa escala** móstrase xunto ao nome e na liña de estado.
- **Unha vista 3D** mostra todos os pisos.

Para mostrar todo de novo, use {{ui:Mostrar todo}} en {{ui:Mostrar}} e marque todos os pisos.

:::note
BimCraft atopa as capas a través das asignacións de capa do ficheiro IFC. Se o IFC se exportou sen elas, unha combinación de capas non oculta nada, e a liña de estado indica 0 elementos ocultos.
:::

## Abrir unha folla

Debaixo de **Follas**, cada folla mostra o seu número, nome, tamaño de papel e as vistas colocadas nela.

- **PDF** garda o PDF da folla desde o paquete.
- **DWG** abre o debuxo da folla na vista 2D. Prema calquera vista para volver ao modelo.
- **Abrir en …** envía o ficheiro da folla á aplicación que traballa con el, nunha pestana nova: o PDF a MarkupCraft, o DWG a CadCraft. Só aparece onde esa aplicación está aberta xunto a BimCraft. O ficheiro procésase desde o paquete mentres carga a pestana, e non se envía nada.

Unha folla sen ningún dos dous di **Non hai ficheiro no paquete**.

## Ver propiedades nos grupos do proxecto

Escolla un elemento. **Grupos de propiedades** mostra as súas propiedades debaixo dos grupos que definiu o proxecto, coincidindo polo conxunto de propiedades e o nome que lle dá a definición para IFC, ou se non polo seu nome. O resto permanece en {{ui:Propiedades}} como de costume. **Definicións de propiedades** lista cada definición co seu grupo, tipo e nome IFC.

## Estándares e notas

- **Estándares** conta as capas, as combinacións de capas, os conxuntos de plumas, os tipos de liña, as tramas, as superficies, os compostos e os materiais do paquete.
- **Notas** lista o que o script non puido obter desa versión de Archicad, calquera campo que BimCraft non puido ler, e calquera ficheiro que o paquete nomea pero non contén.

## Resolución de problemas

- **«… é un zip pero non é un paquete de proxecto.»** O zip non ten `manifest.json`. Descomprímao e abra o `.ifc` que contén.
- **«… é un paquete de proxecto máis recente do que BimCraft pode ler.»** Actualice BimCraft.
- **«… non contén o modelo que o seu manifesto nomea.»** O zip foi cortado ou editado. Cree o paquete de novo.
- **Unha vista mostra todos os pisos.** O seu piso non está no IFC do modelo (a liña de estado indícao). Comprobe que a exportación IFC incluíu ese piso.

Ver tamén [Traballar entre dous programas BIM](topic:two-bim-programs) e [O que le BimCraft de cada formato](topic:file-formats).
