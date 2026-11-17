---
title: Relatório da pasta: funções, status e vínculos
summary: Cada rótulo do relatório da pasta, o que significa e como a sugestão Comece aqui é escolhida.
keywords: relatório da pasta, funções, status, completo, incompleto, ilegível, vinculado, segundo plano, inicial, central, família, somente backups, comece aqui, status do vínculo
from: b35bdd10
---

## Status da cópia

Cada cópia de um modelo, arquivo principal e backups numerados, recebe uma verificação do cabeçalho.

| Rótulo | Significado |
|---|---|
| **Completo** | O cabeçalho e o índice do arquivo cabem dentro do arquivo |
| **Incompleto** | O arquivo é menor do que o próprio índice indica: foi cortado durante a cópia, o envio ou a sincronização, ou é um arquivo na nuvem que ainda está "somente online" |
| **Ilegível** | O arquivo não é um compound file válido, ou não pôde ser lido |

Na coluna **Status**, um modelo mostra **Completo**, um "*n* incompleto" em âmbar quando pelo menos uma cópia está ruim mas outra está íntegra, ou **Incompleto** em vermelho quando nenhuma cópia está íntegra.

## Backups

Arquivos com nomes como `Nome.0001.rvt`, `Nome.0002.rvt` e assim por diante são backups numerados de `Nome.rvt`. Eles são agrupados sob seu modelo, do mais novo para o mais antigo, em **Todas as … cópias**. O cartão é lido do arquivo principal quando ele está completo; senão, do backup completo mais recente ("mais recente completo").

## Funções

Exibidas em itálico abaixo do nome de um modelo.

| Função | Significado |
|---|---|
| Vinculado por *outro modelo*: segundo plano | Outro modelo da pasta vincula este, então ele é provavelmente um segundo plano de outra pessoa, como o modelo de um consultor |
| Arquivo inicial ou sem título | Um nome como Blank, Template, Default, Untitled ou Project1: um ponto de partida, ou um arquivo que nunca recebeu um nome adequado |
| Modelo central | Um modelo central de trabalho compartilhado. O trabalho acontece em uma cópia local, não aqui |
| Família (uma peça) | Um arquivo `.rfa` ou `.rft`: um componente, não o projeto |
| Somente backups | O arquivo principal não existe mais e só restam backups numerados |

## Como o Comece aqui é escolhido

O BimCraft aplica o raciocínio que um usuário experiente faria:

1. Os candidatos são arquivos de projeto legíveis (`.rvt`, `.rte`) que não são vinculados por outro modelo e não são iniciais.
2. Modelos centrais e modelos somente com backups contam apenas quando nada melhor existe.
3. Entre os candidatos, vence o último salvo.

A caixa lista seus motivos e avisa quando um arquivo que parece a escolha óbvia está danificado, quando outros modelos são segundo plano e quando a escolha é um modelo central. É uma melhor estimativa; confirme com quem trabalhou por último no projeto.

## Status do vínculo

| Rótulo | Significado |
|---|---|
| **Nesta pasta** | Encontrado no caminho relativo salvo, ou no fim do caminho completo salvo dentro da pasta |
| **Mesmo nome encontrado** | Não está no seu caminho, mas há um arquivo com o mesmo nome na pasta. Confira se é o correto |
| **Arquivo da biblioteca** | Uma tabela de notas-chave ou de códigos de montagem. Ela vem com o programa em cada computador |
| **Não está nesta pasta** | Não encontrado em lugar nenhum da pasta |

A coluna **Vínculos encontrados** em **Modelos** mostra quantos vínculos de um modelo foram encontrados, dentre os esperados na pasta (arquivos da biblioteca não são contados).

## Em separado

| Linha | Significado |
|---|---|
| Pastas de manutenção do Revit (não lidas) | `*_backup`, `*_log` e pastas `Revit_temp`, além de pastas ocultas e `__MACOSX` |
| Restos de bloqueio, log e backup | Arquivos `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` e `.slog` |
| Outros arquivos | Todo o restante (os primeiros 40 são listados pelo nome) |
