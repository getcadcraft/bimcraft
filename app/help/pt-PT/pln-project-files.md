---
title: Abrir ficheiros de projeto .pln e .pla
summary: O que o BimCraft faz hoje com os ficheiros .pln, .pla, .tpl e .bpn, e como exportar IFC e DWG a partir deles para que o modelo e os desenhos abram aqui.
keywords: pln, pla, tpl, bpn, ficheiro de projeto, arquivo, modelo, cópia de segurança, exportação IFC, exportação DWG, tradutor, zonas, layouts
from: 41fb921d
---

## O que vai fazer

Abrir no BimCraft um projeto guardado como `.pln` (projeto), `.pla` (arquivo com a sua biblioteca), `.tpl` (modelo) ou `.bpn` (cópia de segurança). Estes são os ficheiros próprios do Archicad.

## O que abre hoje

- **Os próprios ficheiros de projeto ainda não abrem.** O seu formato não é publicado, e o BimCraft ainda não o lê. Ao abrir um, o BimCraft indica-o e remete para esta página.
- **O BimCraft verifica os primeiros bytes do ficheiro.** Os projetos do Archicad a partir da versão 17 começam pela mesma assinatura curta, por isso o BimCraft pode confirmar com certeza que um ficheiro é um projeto do Archicad. Um ficheiro com nome do Archicad que não começa assim foi provavelmente renomeado, está danificado ou vem de uma versão mais antiga. A assinatura não distingue um projeto, um arquivo e um modelo.
- **Uma exportação IFC abre por completo**: o modelo em 3D, os pisos, as zonas como espaços, os dados dos elementos, os conjuntos de propriedades e as classificações, com todas as ferramentas do BimCraft.
- **Uma exportação DWG abre** na vista 2D, com as suas camadas e layouts, e em {{ui:3D}}. Para a editar, use {{ui:Editar no CadCraft}}.

Ou traga o projeto inteiro como um único zip, com as suas vistas, layouts e grupos de propriedades: veja [Abrir um pacote de projeto](topic:open-project-bundle).

## Exportar IFC (o modelo)

1. Abra o projeto no Archicad.
2. Escolha **File > Save As** e selecione **IFC** como tipo de ficheiro.
3. Escolha um tradutor IFC (o nome que o Archicad dá a um conjunto de definições de exportação IFC). O **IFC4 Reference View** ou o **IFC2X3 Coordination View 2.0** servem bem o BimCraft. O IFC4X3 também abre.
4. Escolha o que exportar: o projeto inteiro, ou apenas os elementos visíveis nos pisos que está a ver.
5. Guarde e, em seguida, clique em {{ui:Escolher um ficheiro}} no BimCraft e escolha o ficheiro `.ifc`.

Verifique estas opções nas definições do tradutor antes de exportar:

- **Zonas**: exporte-as, para que as salas cheguem como espaços. Clique em {{ui:Espaços}} no BimCraft para as ver.
- **Propriedades e classificações**: exporte-as, para que apareçam em {{ui:Propriedades}} e possam ser usadas em {{ui:Procurar}}, {{ui:Cor}} e {{ui:Totais de quantidades}}.
- **`.ifc` simples**, não `.ifczip` nem `.ifcxml`. O BimCraft abre apenas `.ifc` simples.

## Exportar DWG (os desenhos)

1. Abra a planta, o corte ou o layout que pretende.
2. Escolha **File > Save As** e selecione **DWG** como tipo de ficheiro.
3. Escolha um tradutor DXF-DWG e guarde.
4. Para um conjunto completo de folhas, guarde os layouts a partir do Layout Book, ou publique-os como DWG.
5. Abra o `.dwg` no BimCraft. Os desenhos ligados pela exportação abrem com ele quando estão na mesma pasta; veja [Desenhos e imagens ligados](topic:dwg-linked-files).

## Resolução de problemas

- **"… é um projeto do Archicad: os seus primeiros bytes indicam-no."** Exporte IFC ou DWG como acima e abra esse ficheiro.
- **"… tem nome de ficheiro do Archicad mas não começa como um."** Verifique a origem do ficheiro: pode ser outro tipo de ficheiro com um nome novo (tente abri-lo com a sua extensão real), uma cópia que não terminou, ou um projeto de uma versão anterior à 17. Abra-o no Archicad, se puder, e exporte depois IFC ou DWG.
- **O modelo abre sem salas.** As zonas não foram exportadas. Ative-as no tradutor IFC e exporte de novo.
- **As aberturas não estão recortadas.** O BimCraft indica-o em **Ainda não desenhado** no painel {{ui:Ficheiro}}. Exporte de novo; se continuar, abra o modelo no programa que o criou e verifique as aberturas aí.
- **O texto no DWG tem outro aspeto.** A exportação pode manter tipos de letra que o BimCraft não tem; o BimCraft desenha o texto com um tipo de letra sans-serif simples.

Veja também [Obter um ficheiro de projeto em 3D através de IFC](topic:rvt-to-ifc) e [O que o BimCraft lê de cada formato](topic:file-formats).
