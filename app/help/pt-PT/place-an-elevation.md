---
title: Colocar um alçado e abrir a sua vista
summary: Coloque um marcador de alçado na planta, oriente-o na direção da vista e depois encontre o respetivo desenho no navegador do projeto, edite nele e coloque-o numa folha. Passos para os layouts de friso e para o layout clássico.
keywords: alçado, vista de alçado, marcador de alçado, etiqueta de alçado, colocar um alçado, novo alçado, criar um alçado, alçado exterior, vista lateral, vista frontal, vista a partir de um ponto, onde está o meu alçado, abrir alçado, alçado numa folha, inverter alçado, mudar o nome do alçado, alçado norte, lado a lado, dividir vista, planta e 3D lado a lado
from: a7cfd2b9
---

## O que vai fazer

Crie um alçado próprio: um desenho do edifício visto a partir de um ponto escolhido, na direção escolhida. São necessários dois cliques numa planta. O desenho fica então listado com os outros alçados do edifício.

:::note
Os quatro lados já existem. Todos os edifícios têm alçados Norte, Este, Sul e Oeste no {{ui:Navegador do projeto}}, em {{ui:Alçados}}, sem colocar nada. Coloque um alçado próprio quando quiser uma vista de outro sítio: de frente para uma ala inclinada, a partir do interior de um pátio, ou de uma parede dentro de um compartimento.
:::

## Onde está a ferramenta

- Layouts de friso: {{ui:Vista}} › **Criar** › {{ui:Cota Z}}.
- Layout clássico: ligue {{ui:Desenhar}} e depois {{ui:Compilação}} › {{ui:Cota Z}}.
- Qualquer estilo de menu: o comando chama-se Cota Z; a paleta de comandos encontra-o, e a linha de comandos aceita ELEVATION.

## Passos

1. Escolha {{ui:Cota Z}}. O alçado é colocado numa planta, por isso, se estava na vista 3D, o BimCraft mostra a planta do nível em que estava. O cursor indica **Clique onde fica o alçado**.
2. Clique no ponto de onde é tirada a vista. Para um alçado exterior, clique fora do edifício, a pouca distância da parede que se pretende ver.
3. O cursor indica agora **Clique no sentido da vista**. Mova-o na direção do edifício: uma seta mostra o sentido, e a linha curta que atravessa o primeiro clique é a aresta de onde a vista é tomada. Clique.
4. Aparece na planta um círculo com um número e um apontador. Esse é o marcador de alçado. O primeiro é o 1, o seguinte o 2.
5. Prima Esc para terminar, ou continue e coloque outro.

Colocar um marcador é um só passo: {{key:Mod+Z}} anula-o.

## Abrir o desenho

A planta mantém-se visível depois do segundo clique. O desenho está no {{ui:Navegador do projeto}}:

1. Abra {{ui:Alçados}}. O seu fica listado depois dos quatro lados, como **Alçado 1**.
2. Clique no botão de lápis {{ui:Editar nesta vista}} na respetiva linha para ver o desenho e trabalhar nele: mover paredes, portas, janelas e níveis, acrescentar notas e cotas. Consulte [Editar em alçados e cortes](topic:edit-in-elevations).
3. Clique na própria linha para abrir o conjunto de desenhos, ou acrescente a vista a uma folha própria. Consulte [Vistas e folhas](topic:views-and-sheets).

No layout clássico, o navegador do projeto está no painel esquerdo enquanto {{ui:Desenhar}} estiver ligado. Nos layouts de friso, é o separador {{ui:Navegador do projeto}} em Propriedades.

## O que mostra a vista

- Tudo o que está à frente do marcador, até onde chega o edifício. Nada atrás dele.
- Os níveis, com os respetivos nomes e alturas.
- Se o marcador estiver dentro do edifício, o que estiver à sua volta é cortado nesse ponto, como faz um corte. Para um alçado exterior limpo, coloque-o do lado de fora.

## Alterar

Selecione o marcador na planta (clique no respetivo círculo com {{ui:Selecionar}}). Em Propriedades há:

- {{ui:Etiqueta}}: o seu número ou um nome próprio, até 8 caracteres.
- {{ui:Inverter a vista}}: olhar no sentido contrário a partir do mesmo ponto.
- {{ui:Ver até}}: até onde a vista chega à frente do marcador. 0 mostra tudo.

Prima Delete para remover o marcador e o respetivo desenho. Anular repõe ambos.

:::tip
Para ver a planta e a vista 3D ao mesmo tempo enquanto trabalha, use {{ui:Vista}} › **Janelas** › {{ui:Lado a lado}} nos layouts de friso, ou {{ui:Dividir}} no layout clássico. Clicar num separador de vista volta a mostrar apenas uma vista.
:::

## Limitações

- Ainda não é possível arrastar nem rodar um marcador na planta. Elimine-o e coloque-o de novo, ou use {{ui:Inverter a vista}}.
- Na lista de vistas que se podem acrescentar a uma folha, um alçado próprio aparece listado com os cortes.
- As etiquetas de portas e janelas são desenhadas nos quatro alçados laterais, e não num alçado colocado pelo utilizador.

## No IFC

O marcador é guardado no ficheiro como um IfcAnnotation com o nome "Elevation 1" e o tipo de objeto "Elevation marker", no nível onde foi colocado. Outro programa mostra-o como uma anotação; o próprio desenho é criado pelo BimCraft a partir do modelo de cada vez.
