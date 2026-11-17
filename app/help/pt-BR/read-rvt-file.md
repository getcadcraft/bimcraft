---
title: Ler um arquivo de projeto ou de família
summary: Abra um arquivo .rvt, .rfa, .rte ou .rft e leia o seu lançamento, o trabalho compartilhado, as informações do projeto, os parâmetros de família, os vínculos e a imagem de prévia, sem o programa que o criou.
keywords: rvt, rfa, rte, rft, arquivo de projeto, família, lançamento, versão, qual versão, compilação, trabalho compartilhado, central, informações do projeto, prévia, miniatura, vínculos
from: df3600e1
---

## O que você vai fazer

Descobrir o que há em um arquivo de projeto ou de família sem abri-lo no Revit: qual lançamento o salvou, se ele é de trabalho compartilhado, as informações do projeto e para o que ele aponta. Útil quando um arquivo chega de outra pessoa e você precisa saber em qual lançamento abri-lo.

## Passos

1. Clique em {{ui:Escolher um arquivo}}.
2. Escolha um arquivo `.rvt`, `.rfa`, `.rte` ou `.rft`.
3. Aguarde um momento. A linha de status diz "Lendo o arquivo…" e depois "*nome do arquivo* aberto".
4. Veja o topo do cartão: a imagem de prévia salva no arquivo, o tipo de arquivo e o lançamento em que foi salvo, e o nome do projeto.
5. Role para baixo para ler as seções do cartão.

## O que você deve ver

O cartão no centro, com estas seções quando o arquivo as contém:

| Seção | O que ela informa |
|---|---|
| Arquivo | Nome do arquivo, tamanho, tipo (projeto, modelo de projeto, família ou modelo de família), o lançamento e a compilação em que foi salvo, trabalho compartilhado, o caminho do modelo central, onde foi salvo por último, quem o salvou, idioma e GUID do documento |
| Informações do projeto | Os campos próprios do projeto, como nome, número, cliente, endereço e situação. Campos ainda nos valores padrão de um projeto novo ficam de fora. |
| Família, Família: … | Para uma família: nome, categoria, lançamento, última atualização e os seus parâmetros, grupo por grupo |
| Arquivos vinculados e referenciados | Cada modelo vinculado, vínculo CAD, imagem e tabela de notas-chave que o arquivo aponta, com o caminho salvo |

No lado esquerdo, o painel {{ui:Arquivo}} repete os dados principais e acrescenta **Lido**: quanto do arquivo o BimCraft realmente leu, geralmente cerca de 40 KB de um arquivo de muitos megabytes. À direita, o painel {{ui:Propriedades}} informa que as propriedades dos elementos precisam do modelo 3D.

## Por que não há 3D

O modelo 3D e os elementos dentro de um arquivo de projeto são guardados em um formato não documentado. O BimCraft lê apenas as partes do arquivo que são documentadas ou claramente legíveis: as informações do arquivo, as informações do projeto, os dados de família, a lista de vínculos e a imagem de prévia. Ele não adivinha o resto. Para ver o modelo em 3D e ler as propriedades dos elementos, exporte IFC do programa que criou o arquivo. Veja [Obter um arquivo de projeto em 3D pelo IFC](topic:rvt-to-ifc).

## Erros comuns

- **Esperar 3D.** Veja acima.
- **Os vínculos mostram apenas o caminho salvo.** Um arquivo aberto sozinho não consegue verificar se os vínculos existem. Abra a pasta em que ele está; o BimCraft marca cada vínculo como encontrado ou não: [Abrir uma pasta inteira de projeto](topic:open-project-folder).
- **"Este arquivo está incompleto…"** O arquivo foi cortado durante a cópia, o envio ou a sincronização. Um arquivo de unidade em nuvem que ainda está "somente online" também faz isso. O BimCraft ainda o abre e mostra apenas o que foi recuperado: um aviso âmbar no topo do cartão, uma seção **Recuperado deste arquivo** listando as partes cujos bytes estão todos no arquivo, e **Não está no arquivo** para o restante. Nada é preenchido para a parte faltante, então o lançamento, a imagem de prévia ou as informações do projeto podem faltar quando estavam guardados após o corte. Se até a lista de conteúdo do arquivo foi cortada, nada pode ser aberto. Copie o original de novo e reabra-o para o arquivo completo.
- **"Nenhuma imagem de prévia neste arquivo".** Alguns arquivos são salvos sem uma. Isso é normal.
- **Abrir uma cópia de segurança por engano.** Arquivos com nomes como `Tower.0004.rvt` são cópias de segurança numeradas. Abrir a pasta os agrupa com o modelo deles.
