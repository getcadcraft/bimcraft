---
title: Relatório da pasta: funções, estados e ligações
summary: Cada rótulo do relatório da pasta, o que significa e como é escolhida a sugestão «Começar aqui».
keywords: relatório da pasta, funções, estado, completo, incompleto, ilegível, ligado, fundo, modelo inicial, central, família, só cópias de segurança, começar aqui, estado da ligação
from: b35bdd10
---

## Estado da cópia

Cada cópia de um modelo (o ficheiro principal e as cópias de segurança numeradas) recebe uma verificação do cabeçalho.

| Rótulo | Significado |
|---|---|
| **Completo** | O cabeçalho e o índice do ficheiro cabem dentro do ficheiro |
| **Incompleto** | O ficheiro é mais curto do que o seu próprio índice indica: foi cortado enquanto era copiado, carregado ou sincronizado, ou é um ficheiro na nuvem que ainda está apenas «online» |
| **Ilegível** | O ficheiro não é um ficheiro composto válido, ou não pôde ser lido |

Na coluna **Estado**, um modelo mostra **Completo**; um «*n* incompletos» a âmbar quando pelo menos uma cópia está danificada mas outra está sã; ou **Incompleto** a vermelho quando nenhuma cópia está sã.

## Cópias de segurança

Os ficheiros com nomes como `Name.0001.rvt`, `Name.0002.rvt` e assim por diante são cópias de segurança numeradas de `Name.rvt`. Ficam agrupados sob o seu modelo, das mais recentes para as mais antigas, em **Todas as … cópias**. O cartão é lido do ficheiro principal quando este está completo; caso contrário, da cópia de segurança completa mais recente («mais recente completa»).

## Funções

Mostradas em itálico sob o nome de um modelo.

| Função | Significado |
|---|---|
| Ligado por *outro modelo*: fundo | Outro modelo da pasta liga este, pelo que é provavelmente o fundo de outra pessoa, como o modelo de um consultor |
| Ficheiro inicial ou sem título | Um nome como Blank, Template, Default, Untitled ou Project1: um ponto de partida, ou um ficheiro que nunca foi devidamente nomeado |
| Modelo central | Um modelo central partilhado. O trabalho faz-se numa cópia local, não aqui |
| Família (uma peça) | Um ficheiro `.rfa` ou `.rft`: um componente, não o projeto |
| Só cópias de segurança | O ficheiro principal desapareceu e restam apenas cópias de segurança numeradas |

## Como é escolhido «Começar aqui»

O BimCraft aplica o raciocínio que um utilizador experiente aplicaria:

1. Os candidatos são ficheiros de projeto legíveis (`.rvt`, `.rte`) que não estão ligados por outro modelo nem são modelos iniciais.
2. Os modelos centrais e os que têm apenas cópias de segurança contam apenas quando não existe nada melhor.
3. Entre os candidatos, vence o que foi guardado mais recentemente.

A caixa lista as suas razões e avisa quando um ficheiro que parece a escolha óbvia está danificado, quando outros modelos são de fundo e quando a escolha é um modelo central. É uma estimativa: confirme com quem trabalhou por último no projeto.

## Estado da ligação

| Rótulo | Significado |
|---|---|
| **Nesta pasta** | Encontrado no caminho relativo guardado, ou no fim do caminho completo guardado dentro da pasta |
| **Mesmo nome encontrado** | Não está no seu caminho, mas existe na pasta um ficheiro com o mesmo nome. Confirme que é o correto |
| **Ficheiro de biblioteca** | Uma tabela de notas-chave ou de códigos de montagem. Estas vêm com o programa em cada computador |
| **Não está nesta pasta** | Não foi encontrado em lado nenhum da pasta |

A coluna **Ligações encontradas** em **Modelos** mostra quantas das ligações de um modelo foram encontradas, das que se esperavam na pasta (os ficheiros de biblioteca não são contados).

## Ignorados

| Linha | Significado |
|---|---|
| Pastas de manutenção do Revit (não lidas) | As pastas `*_backup`, `*_log` e `Revit_temp`, bem como as pastas ocultas e `__MACOSX` |
| Restos de bloqueio, registo e cópia de segurança | Ficheiros `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` e `.slog` |
| Outros ficheiros | Tudo o resto (os primeiros 40 são identificados pelo nome) |
