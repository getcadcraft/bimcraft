---
title: Mostrar uma nuvem de pontos ao lado do modelo
summary: Abra uma varredura a laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) na vista 3D sozinha ou com um modelo IFC, colorir a nuvem, faça um corte fino através dela, meça até os seus pontos e envie-a ao app de desenho para traçar as linhas como construído.
keywords: nuvem de pontos, varredura a laser, varredura, escaneamento, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, como construído, levantamento, registro, fatia, corte em planta, snap, medir, traçar, varredura para BIM
from: d0a3e740
---

## O que você vai fazer

Ver uma varredura a laser de um edifício ao lado do seu modelo: verificar se o que foi construído corresponde ao projeto, medir entre pontos varridos e cortar uma fatia fina para ler paredes, portas e pilares.

## Passos

1. Abra a nuvem: {{ui:Aberto}} um arquivo `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz`, ou solte-o na página (veja o tópico sobre formatos de nuvem de pontos para saber o que cada um traz e o que exportar do software próprio do scanner). Com um modelo aberto, a nuvem se junta ao modelo na vista 3D; abrir uma nuvem nunca fecha o modelo nem as alterações não salvas dele. Sem modelo, a nuvem abre sozinha.
2. A barra da nuvem aparece abaixo da barra de ferramentas. Ela informa quantos pontos são exibidos e quantos o arquivo tem.
3. Escolha {{ui:Colorir por}}: as cores do próprio arquivo (quando o scanner as guardou), {{ui:Altura}}, {{ui:Intensidade}}, {{ui:Classe}} (classes LiDAR como solo, vegetação e edificação) ou {{ui:Uma cor}}. {{ui:Tamanho}} torna os pontos maiores ou menores.
4. Clique em {{ui:Planta}} em {{ui:Fatia}} para manter apenas uma faixa fina de 1.2 m acima do ponto mais baixo, vista de cima: paredes, vãos de portas e pilares ficam legíveis como uma planta baixa. {{ui:Frontal}} e {{ui:Lateral}} cortam faixas verticais para fachadas e cortes. Mova a faixa com {{ui:Em}} e altere a {{ui:Espessura}} (em metros). {{ui:Desligado}} mostra a nuvem inteira de novo.
5. Clique em {{ui:Medir}} na barra de ferramentas. O ponteiro se ajusta aos pontos da nuvem (o rótulo diz "nuvem de pontos"), então você pode medir de parede a parede na fatia, ou de um elemento do modelo até a varredura. Um canto ou aresta do modelo ao alcance ainda tem prioridade.
6. Com {{ui:Medir}} › {{ui:Localização}}, um ponto da nuvem informa a sua latitude e longitude a partir do próprio sistema de coordenadas da nuvem, quando o arquivo indica um.
7. {{ui:Ocultar}} oculta a nuvem por um momento; {{ui:Remover}} a tira do projeto. {{ui:Exibir}} › {{ui:Nuvem de pontos}} oculta ou mostra a barra.

## Onde a nuvem fica

{{ui:Colocar}} na barra informa como a nuvem se alinha com o modelo:

- **Coordenadas do modelo**: os números da nuvem são os próprios do modelo (uma varredura registrada nas coordenadas do projeto).
- **Coordenadas de mapa**: o modelo tem uma conversão de mapa (IfcMapConversion) e a nuvem está no mesmo sistema projetado: a nuvem é posicionada por meio dela. Se os dois indicarem sistemas diferentes, a linha de status informa isso.
- **Centralizada no modelo**: quando nenhum dos dois coloca a nuvem perto do modelo, o centro dela vai para o centro do modelo e o ponto mais baixo para o piso do modelo. Escolha outra opção para mudar isso.

Quando o arquivo não informa as unidades, o BimCraft lê metros e oferece {{ui:Unidades}} na barra.

## Traçar as linhas como construído

Clique em {{ui:Traçar no CadCraft}} para enviar a nuvem ao app de desenho em uma nova guia. Ela abre ali sob o desenho, onde um corte em planta e o snap de objeto permitem desenhar as paredes sobre a varredura. Veja o tópico do CadCraft sobre nuvens de pontos.

## Quantos pontos

Uma varredura pode ter centenas de milhões de pontos. O BimCraft lê cada ponto uma vez e mantém uma parte uniforme deles para desenhar: {{ui:Exibir}} na barra define quantos (1, 2, 5 ou 10 milhões). Mais pontos exigem mais memória e uma placa gráfica mais rápida. As contagens por classe LiDAR são de todos os pontos do arquivo.

:::note
Os arquivos são lidos neste computador; nada é enviado. LAS 1.0–1.4 e LAZ são lidos (arquivos LAZ de até 1 GB, mantidos na memória enquanto são lidos); arquivos E57 de até 6 milhões de pontos e 512 MB por enquanto (varreduras maiores: exporte LAS ou LAZ); PLY, PCD e PTX por completo; nuvens de texto são `x y z`, com colunas de cor (`r g b`) e de intensidade quando estão presentes.
:::

## Várias varreduras

Varreduras feitas de posições diferentes podem ser registradas em um único referencial, refinadas com ICP e exportadas como um único LAS ou E57: veja [Registrar várias varreduras em uma](topic:register-scans).
