---
title: Auditar o modelo: compartimentos, etiquetas, LOD, conflitos e interfaces
summary: Execute verificações prontas para compartimentos sem nome, etiquetas em falta, elementos abaixo do nível de desenvolvimento que a fase do projeto exige, conflitos entre especialidades e interfaces LOD 350. Apenas aconselhamento: nada é bloqueado.
keywords: auditoria, verificação, compartimento sem nome, etiqueta em falta, marca, lod, nível de desenvolvimento, marco, fase, conflito, especialidade, coordenação, interface, lod 350, abertura, verga, padieira, atravessamento, bainha, tubagem, conduta, problemas, relatório de verificação, consultivo
from: cc83a14d
---

## O que vai fazer

Reveja o modelo inteiro de uma só vez antes de o emitir. A auditoria executa conjuntos de regras prontos e coloca o que encontra na lista {{ui:Problemas}} como aconselhamento. Nada é bloqueado: corrige uma descoberta, ou aceita-a com uma razão, como qualquer outro problema.

## Passos

1. Abra {{ui:Verificações do modelo}} › {{ui:Auditoria}} no painel esquerdo, ou {{ui:Ferramentas}} › {{ui:Auditar o modelo…}} (escrito: `AUDIT`).
2. Escolha a {{ui:Fase do projeto}}. É a mesma fase dos detalhes do desenho.
3. Marque os conjuntos de regras a executar.
4. Clique em {{ui:Executar a auditoria}}.
5. Leia a linha de cada conjunto de regras e depois abra {{ui:Abrir a lista de Problemas}}. Clicar numa descoberta seleciona o seu elemento.
6. {{ui:O relatório de verificação}} transfere o relatório: todas as descobertas, quem aceitou o quê e porquê, e os conjuntos de regras que foram executados.

## Os conjuntos de regras

- **Compartimentos sem nome**: um compartimento sem nome, ou que ainda tem o nome que o programa lhe deu («Compartimento 3»).
- **Etiquetas em falta**: uma porta ou janela sem marca, um compartimento sem número, um dispositivo elétrico sem etiqueta.
- **Elementos abaixo do LOD da fase**: cada parede, piso, teto, cobertura, porta e janela cujo LOD está abaixo do que a fase exige. Um elemento lê a etiqueta de LOD do seu tipo; um elemento verificado em obra é LOD 500. Os elementos sem etiqueta são contados numa única nota, porque não podem ser verificados.
- **Conflitos entre especialidades**: elementos de duas especialidades (arquitetura, estrutura, mecânica, canalização, eletricidade, pela classe IFC) que se intersetam. Uma cobertura apoiada nas suas paredes não é contada.
- **Interfaces LOD 350**: cada porta e janela está numa abertura da sua parede, a abertura cabe dentro da parede, duas aberturas não se sobrepõem, uma abertura mais larga do que o limite tem uma verga ou padieira (um elemento por cima dela, ou uma nota na porta ou janela), e uma tubagem, conduta ou calha de cabos que atravessa uma parede ou laje tem uma abertura ali. As descobertas são contadas por par de especialidades.
- **Elementos reconhecidos que ninguém verificou**: paredes, portas, janelas e compartimentos lidos de um PDF, de uma digitalização ou de um desenho que ainda não estão verificados. Veja [Marcar elementos como verificados ou verificados em obra](topic:verification).

## O LOD que cada fase exige

Abra {{ui:O LOD que cada fase pede}} para ver ou alterar a tabela.

:::note
A tabela e a largura da verga são os valores iniciais do CadCraft. Não vêm de nenhuma norma: um projeto define o LOD por fase no seu plano de execução BIM. Defina os seus. Um escritório pode definir a tabela para todos em Definições › Default Policies › Auditoria; uma alteração na secção Auditoria fica guardada neste computador.
:::

## Bom saber

- Uma verga pode ser indicada em nota em vez de modelada: selecione a porta ou janela e preencha {{ui:Nota de verga ou padieira}} em {{ui:Verificação}} nas Propriedades.
- Um tubo que passa por uma abertura real não atravessa superfície e não é assinalado. Um que está modelado diretamente através da parede é.
- A verificação de conflitos para após alguns segundos num modelo muito grande e indica-o. Para uma verificação completa de dois conjuntos escolhidos, use [Localizar conflitos entre elementos](topic:clash-check).
- Execute a auditoria de novo depois de alterar o modelo. As descobertas aceites mantêm-se aceites enquanto os seus números não mudarem.
- A auditoria lê o modelo. Não substitui uma revisão de coordenação feita pelos responsáveis.

## A seguir

- [Verificar um modelo quanto a problemas comuns](topic:model-checks)
- [Localizar conflitos entre elementos](topic:clash-check)
- [Marcar elementos como verificados ou verificados em obra](topic:verification)
