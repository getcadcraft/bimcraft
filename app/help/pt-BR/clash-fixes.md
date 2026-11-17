---
title: Resolver interferências com as correções de cada disciplina
summary: A partir dos resultados de interferência, Propor correções lista, para cada interferência, o que cada disciplina pode fazer — um duto desviado sob uma viga, um tubo afastado, um pilar movido, uma abertura em uma viga — cada uma testada em uma cópia do modelo com seus compromissos, para você aceitar ou rejeitar. As correções aceitas entram como uma única etapa de desfazer.
keywords: interferência, correção de interferência, resolver interferências, coordenação, propor correções, desvio, contorno, deslocamento, duto, tubo, eletrocalha, viga, pilar, abertura, luva, compromisso, disciplina, estrutura, mecânica, hidráulica, elétrica, arquitetura, assistente
from: f7bafdd9
---

## O que você vai fazer

Transforme uma lista de interferências em decisões. Cada disciplina (estrutura, mecânica, hidráulica, elétrica, arquitetura) propõe correções apenas para os seus próprios elementos, cada proposta é verificada em uma cópia do modelo, e você escolhe.

## Passos

1. Execute primeiro a verificação de interferências. Veja [Verificar interferências](topic:clash-check) e [Verificar tubulações e dutos contra a estrutura](topic:mep-against-structure).
2. Sob os resultados, clique em {{ui:Propor correções}}. O painel **Correções propostas** abre ao lado do modelo.
3. Para cada interferência, você vê as propostas de cada disciplina, a melhor primeiro. Cada linha diz o que ela faz e seus compromissos: se resolve a interferência, quantas novas interferências cria, quais regras quebra, quanto trecho acrescenta ou quanto se desloca, quantas conexões e uma pontuação de custo.
4. Clique em {{ui:Exibir}} para ver os elementos em 3D. Clique em {{ui:Aceitar}} na correção que você quer (uma por interferência), ou em {{ui:Rejeitar}}.
5. A linha no final diz o que todas as suas correções aceitas fazem juntas: quantas interferências são resolvidas, quantas restam e se algo novo interfere.
6. Clique em {{ui:Aplicar as correções aceitas (uma etapa de desfazer)}}. A verificação de interferências roda de novo. {{ui:Desfazer}} desfaz todas de uma vez.

## O que cada disciplina pode fazer

- **Mecânica** (dutos, tubulações de aquecimento e resfriamento): desviar por cima ou por baixo no trecho que bate, subir ou descer o trecho inteiro, deslocar para o lado, achatar um duto retangular mantendo a mesma área.
- **Hidráulica** (água, esgoto, gás, incêndio): os mesmos movimentos, exceto que um esgoto por gravidade nunca recebe desvio; ele só pode se deslocar como um todo, mantendo seu caimento.
- **Elétrica** (eletrocalhas e eletrodutos): os mesmos movimentos; uma eletrocalha deve manter 150 mm livres acima dela para passar o cabo.
- **Estrutura**: deslocar um pilar (até 300 mm), ou uma abertura na alma de uma viga ou em uma laje para o trecho que passa. Toda correção estrutural indica que o engenheiro estrutural a aprova.
- **Arquitetura**: uma luva em uma parede para o trecho que passa, ou deslocar uma parede que se sabe não ser portante.

## O que você deve ver

- Correções que quebram uma regra são marcadas: mais perto do que a folga de 25 mm de outra coisa, abaixo da linha de altura livre de 2,100 mm, uma abertura na alma maior que 40% da altura da viga ou perto demais de suas extremidades, uma viga que mudaria de vão.
- Correções que o BimCraft consegue fazer são aplicadas ao modelo: trechos que você desenhou com as ferramentas Tubulação e Duto e pilares que você desenhou. As demais dizem **Somente orientação**: aceitá-las adiciona um tópico na guia {{ui:Tópicos}}.

## Bom saber

- As correções vêm de regras embutidas no aplicativo; nenhuma IA é usada para elas.
- Se você conectar um assistente (veja [Deixar um assistente de IA trabalhar com o seu modelo](topic:assistants)), ele pode ler as interferências e acrescentar suas próprias propostas para uma disciplina no painel aberto. Elas são verificadas da mesma forma, marcadas com o nome do assistente, e nada muda até você aceitar e aplicar.
- A cópia é verificada com caixas em volta de cada elemento e de cada trecho de uma tubulação, então um trecho inclinado pode mostrar uma interferência que a verificação de interferências não mostraria. Execute a verificação de novo após aplicar: ela é a palavra final.
- Os limites (quanto um trecho pode se mover, quanto um desvio pode subir, a folga) são os padrões escritos no painel.

## Próximo

- [Tópicos e arquivos BCF](topic:issues-bcf)
- [Desenhar trechos de tubulação e duto](topic:pipes-and-ducts)
