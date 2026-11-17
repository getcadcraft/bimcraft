---
title: Colocar uma elevação e abrir a sua vista
summary: Coloque um marcador de elevação na planta, aponte-o para o lado que você quer ver e depois encontre o desenho no navegador de projeto, edite nele e coloque-o em uma folha. Passos para os layouts de faixa de opções e para o layout clássico.
keywords: elevação, vista de elevação, marcador de elevação, etiqueta de elevação, colocar uma elevação, nova elevação, criar uma elevação, elevação externa, vista lateral, vista frontal, vista de um ponto, onde está minha elevação, abrir elevação, elevação em uma folha, inverter elevação, renomear elevação, elevação norte, lado a lado, dividir vista, planta e 3D lado a lado
from: a7cfd2b9
---

## O que você vai fazer

Criar uma elevação própria: um desenho do prédio visto de um ponto que você escolhe, olhando na direção que você escolher. Leva dois cliques em uma planta. O desenho então é listado junto com as outras elevações do prédio.

:::note
Os quatro lados já existem. Todo prédio tem as elevações Norte, Leste, Sul e Oeste no {{ui:Navegador de projeto}}, em {{ui:Elevações}}, sem colocar nada. Coloque uma elevação própria quando quiser uma vista de outro lugar: de frente para uma ala inclinada, de dentro de um pátio ou de uma parede dentro de um ambiente.
:::

## Onde está a ferramenta

- Layouts de faixa de opções: {{ui:Vista}} › **Criar** › {{ui:Elevação}}.
- Layout clássico: ative {{ui:Desenhar}} e depois {{ui:Build}} › {{ui:Elevação}}.
- Qualquer estilo de menu: o comando se chama Elevação; a paleta de comandos o encontra, e a linha de comando aceita ELEVATION.

## Passos

1. Escolha {{ui:Elevação}}. Uma elevação é colocada em uma planta; por isso, se você estava na vista 3D, o BimCraft mostra a planta do pavimento em que você estava. O ponteiro diz **Clique onde a elevação fica**.
2. Clique de onde a vista é tomada. Para uma elevação externa, clique fora do prédio, um pouco afastado da parede que você quer ver.
3. O ponteiro agora diz **Clique para onde ela olha**. Aproxime-se do prédio: uma seta mostra a direção, e a linha curta sobre o seu primeiro clique é a aresta de onde a vista é tomada. Clique.
4. Um círculo com um número e um ponteiro aparece na planta. Esse é o marcador de elevação. O primeiro é 1, o próximo é 2.
5. Pressione Esc para terminar, ou continue e coloque outro.

Colocar um marcador é uma única etapa: {{key:Mod+Z}} o desfaz.

## Abrir o desenho

A planta continua na sua frente depois do segundo clique. O desenho está no {{ui:Navegador de projeto}}:

1. Abra {{ui:Elevações}}. A sua aparece depois dos quatro lados como **Elevação 1**.
2. Clique no botão de lápis {{ui:Editar nesta vista}} na linha dela para ver o desenho e trabalhar nele: mover paredes, portas, janelas e pavimentos, adicionar notas e cotas. Veja [Editar em elevações e cortes](topic:edit-in-elevations).
3. Clique na própria linha para abrir o conjunto de desenhos, ou adicione a vista a uma folha sua. Veja [Vistas e folhas](topic:views-and-sheets).

No layout clássico, o navegador de projeto fica no painel da esquerda enquanto {{ui:Desenhar}} está ativado. Nos layouts de faixa de opções, ele é a guia {{ui:Navegador do projeto}} em Propriedades.

## O que a vista mostra

- Tudo o que está na frente do marcador, até onde o prédio vai. Nada atrás dele.
- Os pavimentos, com seus nomes e alturas.
- Se o marcador estiver dentro do prédio, o que estiver ao redor dele é cortado ali, como um corte faria. Para uma elevação externa limpa, fique do lado de fora.

## Alterar

Selecione o marcador na planta (clique no seu círculo com {{ui:Selecionar}}). Propriedades tem:

- {{ui:Rótulo}}: o número ou um nome seu, de até 8 caracteres.
- {{ui:Inverter a vista}}: olhar para o lado oposto a partir do mesmo ponto.
- {{ui:Olhar até}}: até onde a vista alcança à frente do marcador. 0 mostra tudo.

Pressione Delete para remover o marcador e o seu desenho. Desfazer os restaura.

:::tip
Para ver a planta e a vista 3D ao mesmo tempo enquanto trabalha, use {{ui:Vista}} › **Janelas** › {{ui:Lado a lado}} nos layouts de faixa de opções, ou {{ui:Dividir}} no layout clássico. Um clique em uma guia de vista volta para uma vista só.
:::

## Limites

- Um marcador ainda não pode ser arrastado nem girado na planta. Remova-o e coloque-o de novo, ou use {{ui:Inverter a vista}}.
- Na lista de vistas que você pode adicionar a uma folha, uma elevação própria aparece junto com os cortes.
- As etiquetas de porta e janela são desenhadas nas quatro elevações dos lados, não em uma que você colocou.

## No IFC

O marcador é salvo no arquivo como um IfcAnnotation chamado "Elevation 1", com o tipo de objeto "Elevation marker", no pavimento em que foi colocado. Outro programa o mostra como uma anotação; o desenho em si é feito pelo BimCraft a partir do modelo a cada vez.
