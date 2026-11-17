---
title: Resolver conflitos com as correções de cada especialidade
summary: A partir dos resultados de conflitos, a opção Propor correções indica, para cada conflito, o que cada especialidade pode fazer — uma conduta desviada por baixo de uma viga, uma tubagem afastada, um pilar deslocado, uma abertura numa viga — testado numa cópia do modelo com os seus compromissos, para aceitar ou rejeitar. As correções aceites entram como um único passo de anulação.
keywords: conflito, correção de conflito, resolver conflitos, coordenação, propor correções, redirecionar, desvio, deslocar, conduta, tubagem, calha, viga, pilar, abertura, manga, compromisso, especialidade, estrutura, mecânica, canalização, eletricidade, arquitetura, assistente
from: f7bafdd9
---

## O que vai fazer

Transforme a lista de conflitos em decisões. Cada especialidade (estrutura, mecânica, canalização, eletricidade, arquitetura) propõe correções apenas para os seus próprios elementos, cada proposta é verificada numa cópia do modelo, e a escolha fica a cargo de quem revê.

## Passos

1. Execute primeiro a verificação de conflitos. Veja [Verificar conflitos](topic:clash-check) e [Verificar tubagens e condutas contra a estrutura](topic:mep-against-structure).
2. Sob os resultados, clique em {{ui:Propor correções}}. O painel **Correções propostas** abre-se ao lado do modelo.
3. Para cada conflito veem-se as propostas de cada especialidade, as melhores primeiro. Cada linha diz o que faz e quais são os seus compromissos: se resolve o conflito, quantos novos conflitos cria, que regras quebra, quanto percurso acrescenta ou quanto se desloca, quantos acessórios usa e uma pontuação de custo.
4. Clique em {{ui:Mostrar}} para ver os elementos em 3D. Clique em {{ui:Aceitar}} na correção desejada (uma por conflito), ou em {{ui:Rejeitar}}.
5. A linha em baixo diz o que todas as correções aceites fazem em conjunto: quantos conflitos ficam resolvidos, quantos ainda ficam por resolver e se algo novo entra em conflito.
6. Clique em {{ui:Aplicar as correções aceites (um passo de anulação)}}. A verificação de conflitos volta a correr. {{ui:Anular}} desfaz todas de uma só vez.

## O que cada especialidade pode fazer

- **Mecânica** (condutas, tubagens de aquecimento e de arrefecimento): desviar por cima ou por baixo no troço que embate, subir ou descer a canalização inteira, afastá-la para o lado, ou tornar uma conduta retangular mais achatada com a mesma área.
- **Canalização** (água, drenagem, gás, incêndio): os mesmos movimentos, exceto que uma drenagem por gravidade nunca recebe um desvio; só pode ser deslocada no seu conjunto, mantendo a inclinação.
- **Eletricidade** (calhas e tubos de proteção): os mesmos movimentos; uma calha tem de manter 150 mm livres por cima para passar o cabo.
- **Estrutura**: deslocar um pilar (até 300 mm), ou uma abertura na alma de uma viga ou numa laje, para o troço que passa. Cada correção estrutural indica que o engenheiro de estruturas a aprova.
- **Arquitetura**: uma manga numa parede para o troço que passa, ou deslocar uma parede que se sabe não ser portante.

## O que deve ver

- As correções que quebram uma regra estão assinaladas: mais perto do que os 25 mm de folga em relação a outra coisa, abaixo da linha de altura livre de 2,100 mm, uma abertura na alma maior do que 40% da altura da viga ou demasiado perto dos extremos, ou uma viga que mudaria de vão.
- As correções que o BimCraft consegue fazer são aplicadas ao modelo: troços que desenhou com as ferramentas Tubo e Conduta e pilares que desenhou. As outras dizem **Só conselho**: aceitá-las acrescenta uma questão no separador Questões.

## Bom saber

- As correções vêm de regras incorporadas na aplicação; não é usada IA para elas.
- Ao ligar um assistente (veja [Deixar um assistente de IA trabalhar com o modelo](topic:assistants)), ele pode ler os conflitos e acrescentar as suas próprias propostas de uma especialidade ao painel aberto. São verificadas da mesma forma, assinaladas com o nome do assistente, e nada muda até as aceitar e aplicar.
- A cópia é verificada com caixas à volta de cada elemento e de cada troço de uma conduta, por isso um troço inclinado pode mostrar um conflito que a verificação de conflitos não mostraria. Corra de novo a verificação depois de aplicar: é ela a palavra final.
- Os limites (quanto um troço pode deslocar-se, quão alto pode subir um desvio, a folga) são os valores predefinidos indicados no painel.

## Seguinte

- [Questões e ficheiros BCF](topic:issues-bcf)
- [Desenhar troços de tubagens e condutas](topic:pipes-and-ducts)
