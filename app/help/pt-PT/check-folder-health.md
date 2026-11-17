---
title: Verificar uma pasta quanto a cópias danificadas, ligações em falta e restos
summary: Use o relatório da pasta para encontrar ficheiros de modelo cortados, escolher a cópia de segurança completa mais recente, ver que ligações estão em falta e identificar ficheiros de bloqueio e temporários.
keywords: verificação de integridade, danificado, corrompido, incompleto, truncado, cópia de segurança, ligações em falta, referência externa em falta, auditoria, ficheiros residuais, ficheiros de bloqueio, dwl, bak, entrega
from: 3025a539
---

## O que vai fazer

Verifique uma pasta de projeto antes de a entregar ou de começar a trabalhar nela: cada modelo está completo, qual é a última cópia de segurança boa e estão todos os ficheiros ligados presentes?

## Passos: cópias danificadas

1. Abra a pasta do projeto. Veja [Abrir uma pasta de projeto completa](topic:open-project-folder).
2. Leia as notas sob o nome da pasta. «2 ficheiros estão incompletos ou ilegíveis. Veja os modelos abaixo.» significa que há algo a verificar.
3. Em **Modelos**, olhe para a coluna **Estado**. **Completo** está bem. Um «1 incompleto» a âmbar significa que uma cópia está danificada, mas outra está íntegra. Um **Incompleto** a vermelho significa que não foi encontrada nenhuma cópia íntegra.
4. Abra **Todas as … cópias** sob um modelo com problema. Lista o ficheiro principal e todas as cópias de segurança numeradas, da mais recente para a mais antiga, com tamanho, data e estado.
5. Leia a nota acima da lista, por exemplo: «Tower.rvt está incompleto (183.2 MB, devia ter pelo menos 214.0 MB). O cartão mostra a cópia completa mais recente, Tower.0012.rvt (3 de março de 2025).»
6. Clique na cópia que pretende abrir. Só é possível clicar em cópias completas.

## O que faz a verificação de saúde

Cada cópia de cada modelo recebe uma verificação rápida do seu cabeçalho, 512 bytes de cada vez, por isso até uma pasta de modelos grandes é verificada em segundos. Um ficheiro cujo próprio índice aponta para além do fim foi cortado enquanto era copiado, enviado ou sincronizado. Um ficheiro de uma unidade na nuvem que ainda esteja «apenas online» parece igual.

O cartão de cada modelo é lido a partir do ficheiro principal quando está íntegro, e a partir da cópia de segurança íntegra mais recente quando não está.

## Passos: ligações em falta

1. Procure a nota «*n* ficheiros ligados não estão nesta pasta.» sob o nome da pasta.
2. Desloque-se até **Ficheiros ligados e referenciados**. As ligações em falta aparecem primeiro.
3. Leia a coluna **Onde** de cada ligação:
   - **Nesta pasta**: encontrado no caminho que o modelo guardou.
   - **Encontrado com o mesmo nome**: existe um ficheiro com o mesmo nome noutro sítio da pasta. Confirme que é o correto.
   - **Ficheiro da biblioteca**: uma tabela de códigos keynote ou de montagem. Estas vêm com o programa em cada computador, por isso não é de esperar que estejam na pasta.
   - **Não está nesta pasta**: não foi encontrado em lado nenhum da pasta.
4. Leia **Usado por** para ver que modelos ligam a cada ficheiro.

O BimCraft procura cada ligação primeiro pelo caminho relativo, depois pelo fim do caminho guardado (por isso `\\servidor\projetos\Torre\Cad\X-Refs\site.dwg` é encontrado em `X-Refs/site.dwg` quando escolheu a pasta `Cad`), e por fim pelo nome do ficheiro em qualquer parte da pasta.

## Passos: ficheiros residuais

1. Desloque-se até **Postos de parte**, no fim do relatório.
2. Leia as três linhas que podem aparecer:
   - Pastas de manutenção (`*_backup`, `*_log`, `Revit_temp`): não são lidas.
   - Restos de bloqueio, de registo e de cópia de segurança: ficheiros como `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ficam para trás de programas que falharam ou que estavam abertos quando a pasta foi copiada. Normalmente podem ser eliminados sem risco quando ninguém tiver os ficheiros abertos.
   - Outros ficheiros: tudo o resto que o BimCraft não lê.

## Erros comuns

- **Eliminar o ficheiro principal danificado antes de guardar uma boa cópia de segurança.** Copie primeiro a cópia completa mais recente e só depois trate do ficheiro danificado.
- **Confiar cegamente em «Encontrado com o mesmo nome».** Dois desenhos diferentes podem ter o mesmo nome. Se houver dúvidas, abra os dois.
- **Pensar que um ficheiro de biblioteca em falta é um problema.** As tabelas de códigos keynote e de montagem vivem com o programa em cada computador.
- **O número de ficheiros difere entre navegadores.** No Firefox e no Safari, {{ui:Abrir uma pasta}} entrega todos os ficheiros, incluindo os das pastas de manutenção, por isso a contagem (e o limite de 20,000 ficheiros) inclui-os. Arrastar a pasta para a janela deixa-os de fora, tal como no Chrome e no Edge. Fora isso, o relatório é o mesmo.
