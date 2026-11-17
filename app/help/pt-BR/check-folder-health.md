---
title: Verificar uma pasta quanto a cópias danificadas, links ausentes e sobras
summary: Use o relatório da pasta para encontrar arquivos de modelo cortados, escolher a cópia de segurança completa mais recente, ver quais links estão ausentes e identificar arquivos de bloqueio e temporários.
keywords: verificação de integridade, danificado, corrompido, incompleto, truncado, cópia de segurança, links ausentes, xref ausente, auditoria, sobras, arquivos de bloqueio, dwl, bak, entrega
from: 3025a539
---

## O que você vai fazer

Verifique uma pasta de projeto antes de entregá-la ou de começar a trabalhar nela: cada modelo está completo, qual é a última cópia de segurança boa e todos os arquivos vinculados estão ali?

## Passos: cópias danificadas

1. Abra a pasta do projeto. Veja [Abrir uma pasta de projeto inteira](topic:open-project-folder).
2. Leia as notas abaixo do nome da pasta. "2 arquivos estão incompletos ou ilegíveis. Veja os modelos abaixo." significa que há algo a conferir.
3. Em **Modelos**, veja a coluna **Status**. **Completo** está certo. Um "1 incompleto" em âmbar significa que uma cópia está ruim, mas outra está íntegra. Um **Incompleto** em vermelho significa que nenhuma cópia íntegra foi encontrada.
4. Abra **Todas as … cópias** sob um modelo com problema. Ela lista o arquivo principal e cada cópia de segurança numerada, a mais recente primeiro, com tamanho, data e status.
5. Leia a nota acima da lista, por exemplo "Tower.rvt está incompleto (183.2 MB, deveria ter pelo menos 214.0 MB). O cartão mostra a cópia completa mais recente, Tower.0012.rvt (Mar 3, 2025)."
6. Clique na cópia que você quer abrir. Só cópias completas podem ser clicadas.

## O que a verificação de integridade faz

Cada cópia de cada modelo recebe uma verificação rápida do seu cabeçalho, 512 bytes cada, então até uma pasta com modelos grandes é verificada em segundos. Um arquivo cujo próprio índice aponta para além do seu fim foi cortado durante a cópia, o envio ou a sincronização. Um arquivo de unidade em nuvem que ainda está "somente online" tem a mesma aparência.

O cartão de cada modelo é lido do arquivo principal quando ele está íntegro, e da cópia de segurança íntegra mais recente quando não está.

## Passos: links ausentes

1. Procure a nota "*n* arquivos vinculados não estão nesta pasta." abaixo do nome da pasta.
2. Role até **Arquivos vinculados e referenciados**. Os links ausentes aparecem primeiro.
3. Leia a coluna **Onde** de cada link:
   - **Nesta pasta**: encontrado no caminho que o modelo salvou.
   - **Mesmo nome encontrado**: há um arquivo com o mesmo nome em outro lugar da pasta. Confira se é o correto.
   - **Arquivo de biblioteca**: uma tabela de notas-chave ou de códigos de montagem. Elas vêm com o programa em cada computador, então não são esperadas na pasta.
   - **Não nesta pasta**: não encontrado em lugar nenhum da pasta.
4. Leia **Usado por** para ver quais modelos vinculam cada arquivo.

O BimCraft procura cada link primeiro pelo caminho relativo, depois pelo fim do caminho salvo (assim `\\server\jobs\Tower\Cad\X-Refs\site.dwg` é encontrado em `X-Refs/site.dwg` quando você escolheu a pasta `Cad`), e por fim pelo nome do arquivo em qualquer lugar da pasta.

## Passos: sobras

1. Role até **Separados** no final do relatório.
2. Leia as três linhas que podem aparecer:
   - Pastas de manutenção (`*_backup`, `*_log`, `Revit_temp`): não são lidas.
   - Sobras de bloqueio, log e cópia: arquivos como `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. São deixados por programas que travaram ou estavam abertos quando a pasta foi copiada. Normalmente podem ser excluídos com segurança quando ninguém está com os arquivos abertos.
   - Outros arquivos: tudo o mais que o BimCraft não lê.

## Erros comuns

- **Excluir o arquivo principal danificado antes de salvar uma boa cópia de segurança.** Copie primeiro a cópia de segurança completa mais recente e só depois trate o arquivo danificado.
- **Confiar cegamente em "Mesmo nome encontrado".** Dois desenhos diferentes podem ter o mesmo nome. Abra os dois na dúvida.
- **Achar que um arquivo de biblioteca ausente é um problema.** As tabelas de notas-chave e de códigos de montagem ficam com o programa em cada computador.
- **A contagem de arquivos varia entre navegadores.** No Firefox e no Safari, {{ui:Abrir uma pasta}} entrega todos os arquivos, inclusive os das pastas de manutenção, então a contagem (e o limite de 20.000 arquivos) os inclui. Arrastar a pasta para dentro deixa essas pastas de fora, como fazem Chrome e Edge. Fora isso, o relatório é o mesmo.
