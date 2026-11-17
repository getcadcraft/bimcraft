---
title: Enviar o modelo para um programa de renderização
summary: Salve o que a vista 3D mostra como um modelo glTF (.glb) com seus materiais, texturas e luminárias, para programas de renderização e visualização que leem glTF.
keywords: glb, gltf, gl transmission format, exportar, renderização, renderizar, visualização, tempo real, archviz, materiais, texturas, luminárias, luzes, ativo, ativo personalizado
from: e62d57dc
---

{{ui:Para renderização}} na barra de ferramentas salva o que a vista 3D mostra como um único arquivo **.glb** (glTF 2.0, o formato aberto do Khronos Group). Programas de renderização que leem glTF o abrem com os materiais e as luminárias do modelo. O Twinmotion lista glTF e GLB entre os arquivos de geometria que importa e mantém as luzes deles (documentação da Epic, "Importing geometry in Twinmotion"): use {{ui:Para renderização}} e importe o .glb ali. Nada é enviado: o arquivo é gerado neste computador.

## Salvar

1. Abra o modelo IFC e configure a vista 3D: oculte os pavimentos, elementos ou modelos vinculados que não quer e [pinte os materiais](topic:paint-materials) que deseja ver.
2. Clique em {{ui:Para renderização}} (ou digite `GLB`).
3. O arquivo é baixado como "<nome do modelo>.glb". A barra de status informa quantos triângulos, materiais e luminárias ele contém.

## O que o arquivo carrega

- **Geometria** de cada elemento que a vista 3D mostra, em metros, com Y para cima (os eixos próprios do glTF). Um objeto por pavimento e material, nomeado "Nível 1 — Tijolo, vermelho", para que você escolha um material no programa de renderização e o troque pelo seu.
- **Materiais:** cada cor com o acabamento escolhido para ela em [Renderizar](topic:render) (fosco, cetim, brilhante, metal, vidro…), e cada material de biblioteca pintado com sua cor, rugosidade e **textura** (a imagem fica no arquivo, dimensionada ao tamanho real: um tijolo tem o tamanho de um tijolo). O vidro é transparente.
- **Luminárias:** cada luminária ligada em {{ui:Renderizar}} › Luminárias, como luz pontual ou spot, com seu brilho (lúmens convertidos em candelas), cor e ângulo de feixe.
- **Onde fica o local:** a latitude e a longitude do local são gravadas no arquivo para referência. Os programas de renderização têm o próprio sol: digite o local neles.

## O que fica de fora

- O corte de seção (os elementos inteiros entram) e os elementos exibidos transparentes (ficam de fora).
- Objetos elemento por elemento (um objeto por pavimento e material, no lugar), propriedades IFC, mapas de relevo (bump), vistas salvas e percursos gravados.
- Arestas e o fundo.

## Enscape e outros renderizadores de plug-in

O Enscape roda dentro de outro programa de projeto e não tem um arquivo para abrir um projeto inteiro. Há duas formas:

- Abra o **IFC** do modelo (Arquivo › Salvar) no programa em que o Enscape roda; a maioria lê IFC. As cores vêm junto; os materiais de biblioteca vêm como suas cores.
- Traga uma **peça pequena** (um móvel, um aparelho) como ativo personalizado: isole-a primeiro e depois clique em {{ui:Para Enscape (.gltf)}}. A biblioteca de ativos personalizados do Enscape lista arquivos .gltf, .obj e .fbx, não .glb; por isso este botão salva a mesma cena como um **.gltf** autocontido (os dados binários e as imagens estão dentro do arquivo; não há nada mais para copiar junto). O Enscape recomenda ativos pequenos (abaixo de cerca de 20.000 triângulos).

:::note
No CadCraft Studio o mesmo arquivo glTF (e um arquivo USD) também pode ser salvo em {{ui:Renderizar}} › Motor › **Arquivo glTF** / **Arquivo USD**, ou aberto diretamente em um programa neste computador: veja [Abrir a cena em outro programa](topic:render-open-in). Um plug-in ou um vínculo ao vivo para Enscape ou Twinmotion ainda não foi implementado. Os formatos FBX e Datasmith não têm especificação publicada, então o BimCraft não os gera; glTF é o caminho aberto.
:::
