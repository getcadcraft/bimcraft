---
title: Abrir arquivos de projeto .pln e .pla
summary: O que o BimCraft faz hoje com os arquivos .pln, .pla, .tpl e .bpn, e como exportar IFC e DWG deles para que o modelo e os desenhos abram aqui.
keywords: pln, pla, tpl, bpn, arquivo de projeto, arquivamento, modelo de projeto, cópia de segurança, exportação ifc, exportação dwg, tradutor, zonas, layouts
from: 41fb921d
---

## O que você vai fazer

Trazer para o BimCraft um projeto salvo como `.pln` (projeto), `.pla` (arquivo com a sua biblioteca), `.tpl` (modelo) ou `.bpn` (cópia de segurança). Estes são os arquivos próprios do Archicad.

## O que abre hoje

- **Os próprios arquivos de projeto ainda não abrem.** O formato deles não é publicado, e o BimCraft ainda não o lê. Ao abrir um deles, o BimCraft informa isso e aponta para esta página.
- **O BimCraft verifica os primeiros bytes do arquivo.** Projetos do Archicad a partir da versão 17 começam com a mesma assinatura curta, então o BimCraft consegue informar com certeza que um arquivo é um projeto do Archicad. Um arquivo com nome de arquivo do Archicad que não começa assim provavelmente foi renomeado, está danificado ou vem de uma versão mais antiga. A assinatura não distingue um projeto, um arquivamento e um modelo.
- **Uma exportação IFC abre completa**: o modelo em 3D, os pavimentos, as zonas como espaços, os dados dos elementos, os conjuntos de propriedades e as classificações, com todas as ferramentas do BimCraft.
- **Uma exportação DWG abre** na vista 2D, com as suas camadas e layouts, e em {{ui:3D}}. Para editar, use {{ui:Editar no CadCraft}}.

Ou traga o projeto inteiro como um único zip, com as suas vistas, layouts e grupos de propriedades: veja [Abrir um pacote de projeto](topic:open-project-bundle).

## Exportar IFC (o modelo)

1. Abra o projeto no Archicad.
2. Escolha **Arquivo > Salvar como** e selecione **IFC** como tipo de arquivo.
3. Escolha um tradutor IFC (nome que o Archicad dá a um conjunto de configurações de exportação IFC). Um para **IFC4 Reference View** ou **IFC2X3 Coordination View 2.0** serve bem ao BimCraft. IFC4X3 também abre.
4. Escolha o que exportar: o projeto inteiro, ou apenas os elementos visíveis nos pavimentos que você está vendo.
5. Salve e clique em {{ui:Escolher um arquivo}} no BimCraft, depois escolha o arquivo `.ifc`.

Verifique estas opções nas configurações do tradutor antes de exportar:

- **Zonas**: exporte-as, para que os ambientes cheguem como espaços. Clique em {{ui:Espaços}} no BimCraft para vê-los.
- **Propriedades e classificações**: exporte-as, para que apareçam em {{ui:Propriedades}} e possam ser usadas em {{ui:Localizar}}, {{ui:Cor}} e {{ui:Totais de quantitativos}}.
- **`.ifc` simples**, não `.ifczip` nem `.ifcxml`. O BimCraft abre apenas `.ifc` simples.

## Exportar DWG (os desenhos)

1. Abra a planta, o corte ou o layout que você quer.
2. Escolha **Arquivo > Salvar como** e selecione **DWG** como tipo de arquivo.
3. Escolha um tradutor DXF-DWG e salve.
4. Para um conjunto inteiro de folhas, salve os layouts pelo Layout Book, ou publique-os como DWG.
5. Abra o `.dwg` no BimCraft. Os desenhos vinculados pela exportação abrem junto com ele quando estão na mesma pasta; veja [Desenhos e imagens vinculados](topic:dwg-linked-files).

## Solução de problemas

- **"… é um projeto do Archicad: os primeiros bytes indicam isso."** Exporte IFC ou DWG como acima e abra esse arquivo.
- **"… tem nome de arquivo do Archicad, mas não começa como um."** Verifique de onde o arquivo veio: pode ser outro tipo de arquivo com um novo nome (tente abri-lo com a extensão real), uma cópia que não terminou, ou um projeto de uma versão anterior à 17. Abra-o no Archicad, se puder, e depois exporte IFC ou DWG.
- **O modelo abre sem ambientes.** As zonas não foram exportadas. Ative-as no tradutor IFC e exporte de novo.
- **As aberturas não são recortadas.** O BimCraft informa isso em **Ainda não desenhado** no painel {{ui:Arquivo}}. Exporte de novo; se continuar assim, abra o modelo no programa que o criou e verifique as aberturas lá.
- **O texto no DWG parece diferente.** A exportação pode manter fontes que o BimCraft não tem; o BimCraft desenha o texto em uma fonte sans-serif simples.

Veja também [Obter um arquivo de projeto em 3D pelo IFC](topic:rvt-to-ifc) e [O que o BimCraft lê de cada formato](topic:file-formats).
