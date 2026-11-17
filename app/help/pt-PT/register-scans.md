---
title: Registar várias digitalizações num só
summary: Colocar digitalizações feitas a partir de posições diferentes num só referencial, por pares de pontos escolhidos ou alvos escritos, afiná-las com ICP, guardar o registo como projeto e exportar a nuvem registada como LAS ou E57.
keywords: registar, registo, digitalizações, nuvem de pontos, icp, iterative closest point, alvos, pares de pontos, transformação rígida, alinhar, unir, e57, las, digitalização para BIM
from: e8e270db
---

## O que vai fazer

Várias digitalizações de um mesmo local (cada uma a partir da sua própria posição do scanner) começam nas suas próprias coordenadas. Registe-as: dê a cada digitalização uma colocação para que fiquem todas no mesmo referencial; depois guarde isso como projeto e escreva a nuvem registada num só ficheiro LAS ou E57.

## Colocar as digitalizações

1. Abra a caixa ({{ui:Registar digitalizações…}} no painel inicial, ou {{ui:Mostrar}} › {{ui:Registar digitalizações…}} quando um modelo estiver aberto). {{ui:Adicionar digitalizações…}} aceita ficheiros LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou arraste-os para a caixa. As digitalizações com unidades diferentes são recusadas com uma nota: converta primeiro uma delas.
2. Escolha {{ui:Digitalização a mover}} e {{ui:Colocar contra}}. A imagem mostra cada digitalização no referencial tal como está agora, cada uma com uma cor: {{ui:Planta}}, {{ui:Frontal}} ou {{ui:Lado}}; arraste para deslocar a vista e use a roda do rato para aproximar.
3. **Por pares de pontos.** Clique em {{ui:Escolher um par}}, depois num ponto da digitalização a mover e depois no mesmo local noutra digitalização (um canto, um alvo, o pé de um pilar). Faça-o pelo menos três vezes, com pontos que não estejam numa mesma linha e que fiquem afastados. Clique em {{ui:Colocar por pares}}: a digitalização é colocada por um ajuste de mínimos quadrados, e **Restante** mostra quanto cada par ainda falha. Um par com um número grande é uma escolha má: remova-o com a cruz e coloque de novo.
4. **Por alvos.** Se as coordenadas reais de um ponto forem conhecidas (alvos levantados), clique em {{ui:Escolher e depois escrever o alvo}}, clique no ponto na respetiva digitalização e escreva os X, Y e Z do alvo na linha. Pares e alvos escritos podem ser misturados livremente.

## Afinar com ICP

Os pares dão uma colocação aproximada. {{ui:Afinar}} move a digitalização até as suas superfícies assentarem nas da outra digitalização: primeiro **ponto a ponto**, depois **ponto a plano**. A tabela lista cada passo com o seu erro e quantos pontos foram emparelhados; a linha acima dela desenha a descida do erro. {{ui:Parar}} termina a corrida após o passo em curso e mantém o que foi alcançado. {{ui:Anular}} desfaz a corrida inteira (ou a última colocação); {{ui:Repor}} devolve a digitalização às suas coordenadas do ficheiro.

Para manter o processo rápido num portátil, o ICP trabalha com uma parte reduzida dos pontos ({{ui:Pontos usados}}, de 5,000 a 60,000) e ignora correspondências mais distantes do que {{ui:Maior distância de correspondência}} (por predefinição 5% do tamanho da digitalização, diminuindo à medida que estabiliza). Precisa primeiro de uma colocação aproximada: digitalizações que mal se sobrepõem indicam que não podem ser correspondidas. Superfícies apenas planas ou apenas retas não conseguem corrigir uma posição ao longo de si próprias; nesse caso, acrescente pares.

## Guardar e exportar

- {{ui:Guardar projeto}} escreve um pequeno ficheiro `.ccscans.json`: o nome de cada digitalização, o tamanho e uma impressão digital dos seus primeiros 64 KB, com a respetiva transformação. Não contém pontos. {{ui:Abrir projeto…}} encontra os ficheiros de digitalização pelas referências (os ficheiros têm de ser adicionados primeiro) e repõe todas as transformações.
- {{ui:Exportar LAS}} e {{ui:Exportar E57}} escrevem um ficheiro com todas as digitalizações no seu lugar registado. Os pontos nunca são reescritos nos originais; a transformação é aplicada à saída. Com {{ui:Ler todos os pontos dos ficheiros}} ativo, cada ficheiro é lido de novo para cada ponto (até 20 milhões por digitalização); desativado, apenas os pontos mostrados no visualizador são escritos.
- {{ui:Mostrar nuvem registada}} (BimCraft) escreve o LAS e abre-o na vista 3D ao lado do modelo, como qualquer nuvem.

:::note
Nada é enviado. O registo funciona nas próprias unidades dos ficheiros e mantém os milímetros: um LAS é escrito com uma escala que se ajusta (até 0.1 mm), e um E57 com números de dupla precisão. Um sistema de coordenadas é transportado para o LAS apenas quando todas as digitalizações indicam o mesmo código EPSG. O escritor de E57 é próprio; é verificado relendo os seus ficheiros com este leitor e com libE57Format.
:::
