---
title: Enviar o modelo para um programa de renderização
summary: Guarde o que a vista 3D mostra como modelo glTF (.glb), com os seus materiais, texturas e luminárias, para programas de renderização e visualização que leem glTF.
keywords: glb, gltf, gl transmission format, exportar, renderização, render, visualização, tempo real, archviz, materiais, texturas, luminárias, luzes, recurso, recurso personalizado
from: e62d57dc
---

{{ui:Para renderização}} na barra de ferramentas guarda o que a vista 3D mostra como um único ficheiro **.glb** (glTF 2.0, o formato aberto do Khronos Group). Os programas de renderização que leem glTF abrem-no com os materiais e as luminárias do modelo. O Twinmotion lista glTF e GLB entre os ficheiros de geometria que importa e mantém as suas luzes (documentação da Epic, "Importing geometry in Twinmotion"): use {{ui:Para renderização}} e importe lá o .glb. Nada é enviado: o ficheiro é feito neste computador.

## Guardar

1. Abra o modelo IFC e configure a vista 3D: oculte os pisos, elementos ou modelos ligados que não quer, e [pinte os materiais](topic:paint-materials) que pretende ver.
2. Clique em {{ui:Para renderização}} (ou escreva `GLB`).
3. O ficheiro transfere-se como "<nome do modelo>.glb". A barra de estado indica quantos triângulos, materiais e luminárias contém.

## O que o ficheiro contém

- **Geometria** de cada elemento que a vista 3D mostra, em metros, com Y para cima (os eixos próprios do glTF). Um objeto por piso e material, com o nome "Piso 1 — Tijolo, vermelho", para que possa escolher um material no programa de renderização e trocá-lo pelo seu.
- **Materiais:** cada cor com o aspeto que escolheu para ela em [Render](topic:render) (mate, cetim, brilhante, metal, vidro…), e cada material de biblioteca pintado com a sua cor, rugosidade e **textura** (a imagem está no ficheiro, à escala real: um tijolo tem o tamanho de um tijolo). O vidro é transparente.
- **Luminárias:** cada luminária ligada em Render › Luminárias, como luz pontual ou de foco, com o seu brilho (lúmens convertidos em candelas), cor e ângulo de feixe.
- **Onde fica a obra:** a latitude e a longitude do local são escritas no ficheiro, para referência. Os programas de renderização têm o seu próprio sol: escreva o local neles.

## O que deixa de fora

- O corte de secção (entram os elementos inteiros) e os elementos mostrados em transparência (ficam de fora).
- Objetos elemento a elemento (em vez disso, um objeto por piso e material), propriedades IFC, mapas de relevo, vistas guardadas e caminhadas gravadas.
- As arestas e o fundo.

## Enscape e outros renderizadores de extensão

O Enscape funciona dentro de outro programa de projeto e não tem um ficheiro que abra um projeto inteiro. Há duas formas:

- Abra o **IFC** do modelo (Ficheiro › Guardar) no programa onde o Enscape funciona; a maioria lê IFC. As cores são transferidas; os materiais de biblioteca chegam como as suas cores.
- Traga uma **peça pequena** (mobiliário, um equipamento) como recurso personalizado: isole-a primeiro e depois clique em {{ui:Para o Enscape (.gltf)}}. A biblioteca de recursos personalizados do Enscape lista ficheiros .gltf, .obj e .fbx, não .glb; por isso, este botão guarda a mesma cena como um **.gltf** autónomo (os dados binários e as imagens estão dentro do ficheiro; não há mais nada para copiar com ele). O Enscape aconselha recursos pequenos (abaixo de cerca de 20,000 triângulos).

:::note
No CadCraft Studio, o mesmo ficheiro glTF (e um ficheiro USD) pode também ser guardado a partir de {{ui:Render}} › Motor › **Ficheiro glTF** / **Ficheiro USD**, ou aberto diretamente num programa deste computador: veja [Abrir a cena noutro programa](topic:render-open-in). Um plug-in ou uma ligação em tempo real para o Enscape ou o Twinmotion ainda não está implementada. Os formatos FBX e Datasmith não têm especificação publicada, por isso o BimCraft não os escreve; o glTF é o caminho aberto.
:::
