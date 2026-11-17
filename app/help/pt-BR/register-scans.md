---
title: Registrar várias varreduras em uma
summary: Posicione varreduras feitas de posições diferentes em um único referencial por pares de pontos escolhidos ou alvos digitados, refine-as com ICP, salve o registro como projeto e exporte a nuvem registrada como LAS ou E57.
keywords: registro, registrar, varreduras, nuvem de pontos, icp, ponto mais próximo iterativo, alvos, pares de pontos, transformação rígida, alinhar, mesclar, e57, las, varredura para BIM
from: e8e270db
---

## O que você vai fazer

Várias varreduras de um mesmo lugar (cada uma feita de sua própria posição do scanner) começam em suas próprias coordenadas. Registre-as: dê a cada varredura um posicionamento para que todas fiquem em um mesmo referencial, depois salve isso como projeto e grave a nuvem registrada como um único arquivo LAS ou E57.

## Posicionar as varreduras

1. Abra a caixa de diálogo ({{ui:Registrar varreduras…}} no painel inicial, ou {{ui:Exibir}} › {{ui:Registrar varreduras…}} quando um modelo estiver aberto). {{ui:Adicionar escaneamentos…}} aceita arquivos LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou solte-os na caixa de diálogo. Varreduras que usam unidades diferentes são recusadas com uma nota: converta uma antes.
2. Escolha {{ui:Escaneamento a mover}} e {{ui:Posicionar em relação a}}. A imagem mostra cada varredura no referencial como está agora, uma cor para cada uma: {{ui:Planta}}, {{ui:Frontal}} ou {{ui:Lateral}}; arraste para deslocar e use a roda para dar zoom.
3. **Por pares de pontos.** Clique em {{ui:Escolher um par}}, depois em um ponto da varredura a mover, depois no mesmo lugar em outra varredura (um canto, um alvo, o pé de um pilar). Faça isso pelo menos três vezes, com pontos que não estejam em uma mesma linha e bem espalhados. Clique em {{ui:Posicionar por pares}}: a varredura é posicionada por um ajuste de mínimos quadrados, e **Restante** mostra quanto cada par ainda erra. Um par com número grande é uma escolha ruim: remova-o com o X e posicione de novo.
4. **Por alvos.** Se as coordenadas reais de um ponto são conhecidas (alvos topografados), clique em {{ui:Escolher e digitar o alvo}}, clique no ponto na sua varredura e digite X, Y e Z do alvo na linha. Pares e alvos digitados se misturam livremente.

## Refinar com ICP

Os pares dão um posicionamento aproximado. {{ui:Refinar}} move a varredura até que as superfícies dela fiquem sobre as da outra: primeiro **ponto a ponto**, depois **ponto a plano**. A tabela lista cada etapa com o seu erro e quantos pontos casaram; a linha acima dela mostra o erro caindo. {{ui:Parar}} encerra a execução após a etapa em andamento e mantém o que foi alcançado. {{ui:Desfazer}} desfaz a execução inteira (ou o último posicionamento); {{ui:Redefinir}} devolve a varredura às coordenadas do arquivo.

Para deixar rápido em um notebook, o ICP trabalha com uma parte reduzida dos pontos ({{ui:Pontos usados}}, de 5,000 a 60,000) e ignora correspondências além de {{ui:Maior distância de correspondência}} (por padrão 5% do tamanho da varredura, diminuindo à medida que converge). Ele precisa de um posicionamento aproximado primeiro: varreduras que quase não se sobrepõem informam que não podem ser correspondidas. Superfícies apenas planas ou apenas retas não conseguem fixar uma posição ao longo de si mesmas; nesse caso, adicione pares.

## Salvar e exportar

- {{ui:Salvar projeto}} grava um pequeno arquivo `.ccscans.json`: o nome, o tamanho e uma impressão digital dos primeiros 64 KB de cada varredura, com a sua transformação. Não contém pontos. {{ui:Abrir projeto…}} encontra os arquivos de varredura por essas referências (os arquivos precisam ser adicionados antes) e restaura cada transformação.
- {{ui:Exportar LAS}} e {{ui:Exportar E57}} gravam um arquivo com todas as varreduras no seu lugar registrado. Os pontos nunca são reescritos nos originais; a transformação é aplicada na saída. Com {{ui:Ler todos os pontos dos arquivos}} ligado, cada arquivo é lido de novo para cada ponto (até 20 milhões por varredura); desligado, apenas os pontos exibidos no visualizador são gravados.
- {{ui:Mostrar nuvem registrada}} (BimCraft) grava o LAS e o abre na vista 3D ao lado do modelo, como qualquer nuvem.

:::note
Nada é enviado. O registro funciona nas próprias unidades dos arquivos e mantém milímetros: um LAS é gravado com uma escala que se ajusta (até 0.1 mm), e um E57 com números de dupla precisão. Um sistema de coordenadas só é levado para o LAS quando todas as varreduras indicam o mesmo código EPSG. O gravador de E57 é próprio; ele é verificado lendo os seus arquivos de volta com este leitor e com o libE57Format.
:::
