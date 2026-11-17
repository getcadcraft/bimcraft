---
title: Dimensionar tubos e dutos, verificar a ocupação de cabos e a iluminação
summary: Verifique dimensões de tubos e dutos de alimentação com a perda de carga, passe cabos por eletrocalhas e eletrodutos e veja a ocupação deles, e calcule a iluminância em ambientes a partir de arquivos IES ou EULUMDAT. Os padrões são identificados; digite os valores da norma em vigor.
keywords: dimensionamento, dimensionamento de tubulação, dimensionamento de duto, perda de carga, unidades de aparelho, demanda, hunter, hazen-williams, velocidade, atrito, atrito igual, pressão do ventilador, registro, caminho crítico, eletrocalha, eletroduto, ocupação, tabela de cabos, ies, ldt, eulumdat, fotometria, iluminância, lux, uniformidade, cálculo de iluminação, densidade de potência, mep, cálculos, problemas
from: 9cb90815
---

## O que você vai fazer

Desenhe os tubos, dutos, eletrocalhas e eletrodutos como de costume e depois abra o painel **Cálculos**. Cada guia lê o modelo, mostra uma tabela e lista o que está errado como {{ui:Problemas}} no painel ⚠. Quando um tamanho resolveria um Problema, **Aplicar tamanhos** altera os trechos em uma única etapa de {{ui:Desfazer}}.

São auxílios de desenho. Cada padrão é identificado na tela, e nenhum deles é uma tabela de norma: digite os números da norma que você segue no projeto e peça que o resultado seja revisado pelo engenheiro responsável por ele.

## Tubos

1. Escolha a chave do **sistema** (água fria é `cw`, água quente é `hw`).
2. Defina a velocidade máxima e, se quiser verificar a pressão, a pressão na origem e a pressão mínima que um aparelho exige.
3. Clique em {{ui:Verificar}}.

Cada tubo carrega a demanda das unidades de aparelho abaixo dele. A demanda vem de uma curva de unidades de aparelho contra a vazão, do modo descrito por Hunter. **A curva embutida é um exemplo, não uma tabela de norma**; os Problemas dizem isso até que você digite a sua. O atrito é Hazen–Williams, as peças especiais são coeficientes de perda, e um desnível custa 9.8 kPa por metro. As unidades de um aparelho vêm do seu tipo, ou do número que você define com a ferramenta de assistente `loads_set`.

## Dutos

Defina o sistema, a taxa de atrito (atrito igual) ou uma velocidade, e qualquer perda de serpentina, filtro ou silenciador. Os terminais recebem a vazão de ar de `loads_set` no difusor. A tabela mostra velocidade e atrito por peça, a **pressão do ventilador** no caminho crítico e a pressão que o registro de cada outro terminal precisa absorver. As perdas das peças especiais usam coeficientes padrão arredondados, não um banco de dados de peças.

## Eletrocalhas e eletrodutos

Desenhe-os com a ferramenta {{ui:Duto}}: os sistemas **Eletrocalha** e **Eletroduto** são salvos como condutores de cabos, para que outros programas os leiam como eletrocalhas e eletrodutos. Na guia Cabos, cole a lista de cabos (etiqueta, diâmetro externo em mm, quantidade, de, para). `from` e `to` são a etiqueta de um equipamento ou um ponto `x,y,z` em milímetros. Os cabos seguem o menor percurso contínuo pelas eletrocalhas e eletrodutos; cada trecho mostra sua ocupação em relação aos limites que você digita, e a tabela é salva como CSV com um comprimento que inclui um percentual de sobra e as extremidades.

## Iluminação

Atribua a cada luminária seu arquivo IES (LM-63) ou EULUMDAT com a ferramenta de assistente `photometry_set`. Digite as metas, o espaçamento da grade e a altura do plano de trabalho. O resultado é somente iluminância **direta**: sem interreflexão e sem sombras, por isso é um limite inferior em um ambiente.

## Sprinklers contra incêndio

O complemento **Sprinklers contra incêndio** tem sua própria guia; veja a ajuda dele.
