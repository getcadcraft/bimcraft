---
title: Mostrar uma nuvem de pontos ao lado do modelo
summary: Abrir uma digitalização a laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) na vista 3D, sozinha ou com um modelo IFC, colori-la, cortar uma fatia fina através dela, medir até aos seus pontos e enviá-la à aplicação de desenho para traçar as linhas tal como construído (as-built).
keywords: nuvem de pontos, digitalização a laser, digitalização, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, levantamento, registo, fatia, corte em planta, snap, medir, traçar, digitalização para BIM
from: d0a3e740
---

## O que vai fazer

Ver uma digitalização a laser de um edifício ao lado do seu modelo: verificar se o que foi construído corresponde ao projeto, medir entre pontos digitalizados e cortar uma fatia fina para ler paredes, portas e pilares.

## Passos

1. Abra a nuvem: {{ui:Aberta}} um ficheiro `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz`, ou arraste-o para a página (veja o tópico sobre formatos de nuvens de pontos para saber o que cada um traz e o que exportar do software próprio de um scanner). Com um modelo aberto, a nuvem junta-se ao modelo na vista 3D; abrir uma nuvem nunca fecha o modelo nem as suas alterações não guardadas. Sem modelo, a nuvem abre por si só.
2. A barra da nuvem aparece por baixo da barra de ferramentas. Indica quantos pontos são mostrados e quantos tem o ficheiro.
3. Escolha {{ui:Colorir por}}: as cores do próprio ficheiro (quando o scanner as guardou), {{ui:Altura}}, {{ui:Intensidade}}, {{ui:Classe}} (classes LiDAR como solo, vegetação e edifício) ou {{ui:Uma só cor}}. {{ui:Tamanho}} torna os pontos maiores ou menores.
4. Clique em {{ui:Planta}} em {{ui:Fatia}} para manter apenas uma faixa fina de 1.2 m acima do ponto mais baixo, vista de cima: paredes, vãos de portas e pilares leem-se como uma planta. {{ui:Frontal}} e {{ui:Lado}} cortam faixas verticais para alçados e secções. Mova a faixa com {{ui:Em}} e altere a {{ui:Espessura}} (em metros). {{ui:Desligado}} volta a mostrar a nuvem completa.
5. Clique em {{ui:Medir}} na barra de ferramentas. O ponteiro ajusta-se aos pontos da nuvem (a etiqueta diz "nuvem de pontos"), por isso pode medir de parede a parede na fatia, ou desde um elemento do modelo até à digitalização. Um canto ou uma aresta do modelo ao alcance continua a ter prioridade.
6. Com {{ui:Medir}} › {{ui:Localização}}, um ponto da nuvem indica a sua latitude e longitude a partir do próprio sistema de coordenadas da nuvem, quando o ficheiro o indica.
7. {{ui:Ocultar}} oculta a nuvem por instantes; {{ui:Remover}} retira-a. {{ui:Mostrar}} › {{ui:Nuvem de pontos}} oculta ou mostra a barra.

## Onde fica a nuvem

{{ui:Colocar}} na barra indica como a nuvem se alinha com o modelo:

- **Coordenadas do modelo**: os números da nuvem são os próprios do modelo (uma digitalização registada nas coordenadas do projeto).
- **Coordenadas de mapa**: o modelo tem uma conversão de mapa (IfcMapConversion) e a nuvem está no mesmo sistema projetado: a nuvem é colocada através dela. Se os dois indicarem sistemas diferentes, a linha de estado diz isso.
- **Centrada no modelo**: quando nenhuma das opções coloca a nuvem perto do modelo, o seu centro fica no centro do modelo e o seu ponto mais baixo no piso do modelo. Escolha outra opção para a alterar.

Quando o ficheiro não indica as suas unidades, o BimCraft lê metros e oferece {{ui:Unidades}} na barra.

## Traçar as linhas as-built

Clique em {{ui:Traçar no CadCraft}} para enviar a nuvem para a aplicação de desenho, num novo separador. Abre-se aí por baixo do desenho, onde um corte em planta e o snap a objetos permitem desenhar as paredes sobre a digitalização. Veja o tópico do CadCraft sobre nuvens de pontos.

## Quantos pontos

Uma digitalização pode ter centenas de milhões de pontos. O BimCraft lê cada ponto uma vez e guarda uma parte uniforme deles para desenhar: {{ui:Mostrar}} na barra define quantos (1, 2, 5 ou 10 milhões). Mais pontos exigem mais memória e uma placa gráfica mais rápida. As contagens por classe LiDAR são de todos os pontos do ficheiro.

:::note
Os ficheiros são lidos neste computador; nada é enviado. São lidos LAS 1.0–1.4 e LAZ (ficheiros LAZ até 1 GB, mantidos em memória durante a leitura); ficheiros E57 até 6 milhões de pontos e 512 MB por agora (digitalizações maiores: exporte LAS ou LAZ); PLY, PCD e PTX por completo; as nuvens de texto são `x y z`, com colunas de cor (`r g b`) e de intensidade quando existem.
:::

## Várias digitalizações

Digitalizações feitas a partir de posições diferentes podem ser registadas num só referencial, afinadas com ICP e exportadas como um único LAS ou E57: veja [Registar várias digitalizações num só](topic:register-scans).
