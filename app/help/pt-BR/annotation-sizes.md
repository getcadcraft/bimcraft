---
title: Desenhar em tamanho real, anotar pela escala
summary: O edifício é sempre desenhado em tamanho real. Textos, cotas, etiquetas, nomes de ambientes, bolhas de grade e símbolos são dimensionados no papel, em milímetros como impressos, e mantêm esse tamanho quando a escala de um desenho muda de 1:100 para 1:50.
keywords: escala de anotação, anotativo, tamanho do texto, altura do texto, altura no papel, tamanho do texto de cota, tamanho da etiqueta, tamanho do nome do ambiente, bolha de grade, tamanho do símbolo, escala do desenho, 1:50, 1:100, padrão do escritório, letreiro, desenhar em 1:1, tamanho real, texto da folha
from: 94118788
---

## O que você vai fazer

Defina uma vez, para o edifício, a altura das letras dos seus desenhos no papel. Você nunca escala o modelo e nunca redimensiona um texto para uma escala: o BimCraft calcula o tamanho a partir da altura no papel e da escala do desenho.

## Como funciona

- O modelo está em tamanho real. Uma parede de 10 m tem 10 000 mm de comprimento em qualquer escala.
- Uma anotação tem uma **altura no papel**: a altura de uma letra maiúscula na folha impressa, em milímetros.
- Em escala 1:100, um texto de 2.5 mm tem 250 mm de altura no modelo; em 1:50, tem 125 mm. No papel, tem 2.5 mm nos dois casos.
- Símbolos de planta (elétricos, hidráulicos) são desenhados em milímetros de papel e seguem a mesma regra.

## Passos

1. Abra o navegador de projeto. Em {{ui:Folhas}}, clique em {{ui:Tamanhos de anotação…}}.
2. Digite uma altura em milímetros para os tipos que quer definir: {{ui:Notas e rótulos}}, {{ui:Texto de cotas}}, {{ui:Etiquetas e nomes de nível}}, {{ui:Nomes de ambientes}}, {{ui:Letras das bolhas de grade}}, {{ui:Títulos de vistas nas folhas}} e {{ui:Texto de tabelas}}. Uma caixa vazia mantém o tamanho próprio do BimCraft, mostrado em cinza.
3. Clique em {{ui:Salvar}}. É uma única etapa que você pode desfazer.

Todas as folhas, o conjunto de desenhos, a planta em PDF e as elevações e cortes passam a usar esses tamanhos. A distância entre a linha de cota e seu texto, o tamanho de uma bolha de grade e a altura de uma linha de tabela crescem junto com o texto.

## Uma planta com escala própria

Dê uma escala a uma planta no seu intervalo de vista ({{ui:Escala}}; veja [Vistas e folhas](topic:views-and-sheets)). Então:

- na tela, nomes de ambientes, etiquetas, textos de cota e bolhas de grade são desenhados em seu tamanho impresso em relação ao modelo, de modo que o que você vê é o que a folha vai mostrar;
- símbolos de planta e suas etiquetas são dimensionados para essa escala. Mude a escala de 1:100 para 1:50 e eles ficam com metade do tamanho no modelo e o mesmo tamanho no papel.

Uma planta sem escala própria mantém seu texto fixo de tela, e seus símbolos são dimensionados para 1:50 (1/4" = 1'-0" em pés e polegadas), como antes.

## Os tamanhos do seu escritório

Com o complemento Políticas padrão ativado, defina as alturas do escritório em Configurações › Global › Políticas padrão › {{ui:Tamanhos de anotação no papel}}. Um edifício novo usa essas alturas quando você clica em Criar. Em um edifício que você já começou, a caixa de diálogo tem {{ui:Usar os tamanhos do meu escritório}}. Veja [Políticas padrão](topic:default-policies).

## Tamanhos de um pacote de normas

Um pacote de normas pode indicar as alturas de texto exigidas para o seu local (o complemento de regulamentos de construção, convenções de desenho). Marque o pacote em Configurações › Regulamentos de construção e, na caixa de diálogo, clique em {{ui:Usar os tamanhos de um pacote de normas}}: as caixas são preenchidas, e você confere e salva. Um tamanho que um pacote dá em pontos (pt) é um tamanho de fonte e é convertido em altura de maiúscula, então confira. Nada é definido até você salvar.

## O que você deve ver

- A mesma altura de texto em milímetros numa folha em 1:100 e numa folha em 1:50, enquanto a planta em si fica duas vezes maior em 1:50.
- Os tamanhos acompanham o edifício: são salvos no arquivo IFC dele.

## Bom saber

- Os tamanhos próprios do BimCraft são os que as folhas sempre usaram (cerca de 1.5 mm de maiúsculas para textos de cota). Não são uma norma de desenho: defina os do seu escritório.
- Uma altura deve estar entre 0.5 e 50 mm.
- Letras do carimbo da legenda e legendas de símbolos não fazem parte disso: mantêm seus próprios tamanhos.
