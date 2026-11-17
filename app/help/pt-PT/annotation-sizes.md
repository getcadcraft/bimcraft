---
title: Desenhar à escala real, anotar em função da escala
summary: O edifício é sempre desenhado à escala real. O texto, as cotas, as etiquetas, os nomes dos compartimentos, os círculos dos eixos e os símbolos são dimensionados no papel, em milímetros tal como impressos, e mantêm esse tamanho quando a escala do desenho muda de 1:100 para 1:50.
keywords: escala de anotação, anotativo, tamanho do texto, altura do texto, altura no papel, tamanho do texto da cota, tamanho da etiqueta, tamanho do nome do compartimento, círculo de eixo, tamanho do símbolo, escala do desenho, 1:50, 1:100, norma do escritório, letragem, desenhar a 1:1, escala real, texto da folha
from: 94118788
---

## O que vai fazer

Defina uma vez, para o edifício, a altura das letras dos seus desenhos no papel. Nunca se escala o modelo nem se redimensiona o texto para uma escala: o BimCraft calcula o tamanho a partir da altura no papel e da escala do desenho.

## Como funciona

- O modelo está à escala real. Uma parede com 10 m de comprimento tem 10 000 mm de comprimento em todas as escalas.
- Uma anotação tem uma **altura no papel**: a altura de uma letra maiúscula na folha impressa, em milímetros.
- À escala 1:100, um texto de 2.5 mm tem 250 mm de altura no modelo; a 1:50, tem 125 mm. No papel tem 2.5 mm nos dois casos.
- Os símbolos de planta (elétricos, de canalização) são desenhados em milímetros de papel e seguem a mesma regra.

## Passos

1. Abra o navegador do projeto. Em {{ui:Folhas}}, clique em {{ui:Dimensões das anotações…}}.
2. Escreva uma altura em milímetros para os tipos que quer definir: {{ui:Notas e rótulos}}, {{ui:Texto das cotas}}, {{ui:Etiquetas e nomes de piso}}, {{ui:Nomes de compartimentos}}, {{ui:Letras dos círculos de eixo}}, {{ui:Títulos de vistas nas folhas}} e {{ui:Texto dos mapas}}. Uma caixa vazia mantém o tamanho próprio do BimCraft, que aparece a cinzento.
3. Clique em {{ui:Guardar}}. É um só passo, que pode anular.

Todas as folhas, o conjunto de desenhos, o PDF da planta e os alçados e cortes passam a usar estas dimensões. A distância entre a linha de cota e o seu texto, o tamanho de um círculo de eixo e a altura de uma linha de mapa crescem com o texto.

## Uma planta com escala própria

Dê uma escala a uma planta no seu intervalo de vista ({{ui:Escala}}; veja [Vistas e folhas](topic:views-and-sheets)). Então:

- no ecrã, os nomes dos compartimentos, as etiquetas, o texto das cotas e os círculos dos eixos são desenhados com o seu tamanho impresso em relação ao modelo, para que o que vê seja o que a folha vai mostrar;
- os símbolos de planta e as respetivas etiquetas são dimensionados para essa escala. Se mudar a escala de 1:100 para 1:50, ficam metade do tamanho no modelo e iguais no papel.

Uma planta sem escala própria mantém o texto fixo do ecrã, e os seus símbolos são dimensionados para 1:50 (1/4" = 1'-0" em pés e polegadas), como antes.

## As dimensões do seu escritório

Com o suplemento Default Policies ativado, defina as alturas do escritório em Definições › Global › Default Policies › {{ui:Dimensões das anotações no papel}}. Um novo edifício usa-as ao clicar em Criar. Num edifício que já começou, a caixa de diálogo tem {{ui:Usar as dimensões do meu escritório}}. Veja [Default Policies](topic:default-policies).

## As dimensões de um pacote de regulamentação

Um pacote de regulamentação pode indicar as alturas de texto que o seu local exige (o suplemento Building regulations, convenções de desenho). Marque o pacote em Definições › Building regulations; depois, na caixa de diálogo, clique em {{ui:Usar as dimensões de um pacote de regulamentação}}: as caixas preenchem-se. Verifique-as e guarde. Um tamanho que um pacote indica em pontos é um tamanho de tipo de letra, convertido numa altura de maiúsculas, por isso verifique-o. Nada fica definido até guardar.

## O que deve ver

- A mesma altura de texto em milímetros numa folha a 1:100 e numa folha a 1:50, enquanto a própria planta é duas vezes maior a 1:50.
- As dimensões acompanham o edifício: ficam guardadas no seu ficheiro IFC.

## Bom saber

- Os tamanhos próprios do BimCraft são os que as suas folhas sempre usaram (cerca de 1.5 mm de maiúsculas para o texto das cotas). Não são uma norma de desenho: defina os do seu escritório.
- Uma altura tem de estar entre 0.5 e 50 mm.
- A letragem da legenda e as tabelas de notas-chave não fazem parte disto: mantêm os seus próprios tamanhos.
