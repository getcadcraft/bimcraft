---
title: Enviar tubagem para um programa de tensões ou isométricos, e ler de volta (PCF)
summary: Escreva os troços de tubagem do modelo como ficheiro de componentes de tubagem PCF, ou leia um ficheiro PCF de um programa de análise de tensões ou de isométricos e desenhe a sua tubagem como troços.
keywords: pcf, ficheiro de componentes de tubagem, análise de tensões, isométrico, isométricos, exportar, importar, tubagem, instalação industrial, tubo de aço, transferir um trabalho, outro software
from: 24f91355
---

## O que vai fazer

PCF é o ficheiro de texto simples que os programas de análise de tensões e de isométricos leem e escrevem. Lista os componentes de cada linha de tubagem com os seus pontos de extremidade e diâmetros nominais.

## Exportar

1. Escolha a ferramenta Tubo. A linha de opções mostra **Exportar PCF**.
2. Clique nele. Cada troço de tubo do modelo é escrito: tubo reto, cotovelos (uma curva de 90 graus; caso contrário, uma curva), tês com o seu ponto de derivação, reduções e válvulas.
3. O ficheiro usa milímetros. Os diâmetros são diâmetros nominais em milímetros. O ponto central de um cotovelo é o seu canto, onde as suas duas pernas se encontram.

O PCF é escrito para tubo de aço de soldadura de topo. Um troço de outro material também é escrito, com chaves de componentes de aço, e fica assinalado no painel Problemas.

## Importar

1. Escolha a ferramenta Tubo e clique em **Importar PCF…**, depois escolha o ficheiro.
2. Do tubo reto até cotovelos, curvas, válvulas e flanges, tudo se torna um só troço no nível atual. Uma mudança de diâmetro inicia um novo troço. O ramal de um tê torna-se um troço próprio, que começa no centro do tê.
3. O modelo coloca os seus próprios acessórios. As reduções e os tês não são copiados: aparecem onde se encontram troços de diâmetros diferentes, ou um ramal.

:::note
As alturas no ficheiro são lidas como alturas acima do nível atual. As cargas, os apoios e a própria análise de tensões não fazem parte de um ficheiro PCF e não vêm com ele.
:::

## Verificar o que chegou

- O comprimento total de tubagem por linha deve coincidir com o da origem.
- O painel Problemas lista, uma vez cada, um cotovelo cujo ponto central não está à mesma distância das duas extremidades, tubo sem comprimento e um diâmetro que não é uma medida padrão.

## Tubagem que já está num ficheiro IFC

Quando um ficheiro IFC está aberto, **Exportar PCF** escreve também os seus próprios segmentos de tubo, acessórios e válvulas, ao lado dos troços que desenhou. Um segmento recebe as suas extremidades das suas portas, ou das extremidades do seu corpo. Um acessório sem portas fica de fora, e o painel Problemas assinala isso. Pode exportar apenas a partir do IFC quando o modelo não tem troços desenhados.

Na importação, os suportes, olets, flanges, juntas e tampões do ficheiro não são desenhados. O painel Problemas lista quantos de cada foram deixados de fora, para que nada desapareça em silêncio.
