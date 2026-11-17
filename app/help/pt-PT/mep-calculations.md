---
title: Dimensionar tubos e condutas, verificar o enchimento de cabos e a iluminação
summary: Verifique as dimensões de tubos de abastecimento e de condutas com a perda de pressão, encaminhe cabos por calhas de cabos e tubos de proteção e veja o seu enchimento, e calcule a iluminância nas salas a partir de ficheiros IES ou EULUMDAT. As predefinições estão identificadas; escreva os valores do código em vigor.
keywords: dimensionamento, dimensionamento de tubos, dimensionamento de condutas, perda de pressão, unidades de aparelho, procura, hunter, hazen-williams, velocidade, atrito, atrito igual, pressão do ventilador, registo, caminho crítico, calha de cabos, tubo de proteção, enchimento, tabela de cabos, ies, ldt, eulumdat, fotometria, iluminância, lux, uniformidade, cálculo de iluminação, densidade de potência, mep, cálculos, problemas
from: 9cb90815
---

## O que vai fazer

Desenhe os tubos, condutas, calhas de cabos e tubos de proteção como habitualmente e, depois, abra o painel **Cálculos**. Cada separador lê o modelo, mostra uma tabela e lista o que está errado como Problemas no painel ⚠. Quando uma dimensão resolveria um Problema, **Aplicar dimensões** altera os troços num único passo de {{ui:Anular}}.

Estes são auxiliares de desenho. Cada predefinição está identificada no ecrã, e nenhuma é uma tabela de código: escreva os números da norma para que projeta e faça com que o resultado seja revisto pelo engenheiro responsável por ele.

## Tubos

1. Escolha a chave do **sistema** (água fria é `cw`, água quente `hw`).
2. Defina a velocidade máxima e, se quiser que a pressão seja verificada, a pressão na origem e a pressão mínima de que um aparelho precisa.
3. Clique em {{ui:Verificar}}.

Cada tubo transporta a procura das unidades de aparelho a jusante dele. A procura vem de uma curva de unidades de aparelho em função do caudal, tal como Hunter a descreveu. **A curva incorporada é um exemplo, e não uma tabela de código**; os Problemas dizem-no até escrever a sua própria. O atrito é Hazen–Williams, os acessórios são coeficientes de perda, e uma subida custa 9.8 kPa por metro. As unidades de um aparelho vêm do seu tipo, ou do número que define com a ferramenta de assistente `loads_set`.

## Condutas

Defina o sistema, a taxa de atrito (atrito igual) ou uma velocidade, e qualquer perda de bateria, filtro ou silenciador. Os terminais tomam o seu caudal de ar de `loads_set` no difusor. A tabela mostra a velocidade e o atrito por peça, a **pressão do ventilador** no caminho crítico, e a pressão que o registo de cada outro terminal tem de vencer. As perdas dos acessórios usam coeficientes predefinidos arredondados, e não uma base de dados de acessórios.

## Calhas de cabos e tubos de proteção

Desenhe-os com a ferramenta Conduta: os sistemas **Calha de cabos** e **Tubo de proteção** são guardados como suportes de cabos, para que outros programas os leiam como calhas e tubos. No separador Cabos, cole a lista de cabos (etiqueta, diâmetro exterior em mm, quantidade, de, para). `from` e `to` são a etiqueta de um equipamento ou um ponto `x,y,z` em milímetros. Os cabos seguem o percurso contínuo mais curto pelas calhas e tubos; cada troço mostra o seu enchimento face aos limites que escreve, e a tabela é guardada em CSV, com um comprimento que inclui uma percentagem de folga e as extremidades.

## Iluminação

Dê a cada luminária o seu ficheiro IES (LM-63) ou EULUMDAT com a ferramenta de assistente `photometry_set`. Escreva os alvos, o espaçamento da malha e a altura do plano de trabalho. O resultado é apenas iluminância **direta**: sem reflexões entre superfícies e sem sombras, por isso é um limite inferior numa sala.

## Sprinklers de incêndio

O suplemento **Sprinklers de incêndio** tem o seu próprio separador; veja a respetiva ajuda.
