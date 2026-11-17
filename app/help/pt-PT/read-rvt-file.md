---
title: Ler um ficheiro de projeto ou de família
summary: Abrir um ficheiro .rvt, .rfa, .rte ou .rft e ler a sua versão, o trabalho partilhado, a informação do projeto, os parâmetros de família, as ligações e a imagem de pré-visualização, sem o programa que o criou.
keywords: rvt, rfa, rte, rft, ficheiro de projeto, família, versão, qual a versão, compilação, trabalho partilhado, modelo central, informação do projeto, pré-visualização, miniatura, ligações
from: df3600e1
---

## O que vai fazer

Descobrir o que há num ficheiro de projeto ou de família sem o abrir no Revit: que versão o guardou, se tem trabalho partilhado, a informação do projeto e o que liga. Útil quando um ficheiro chega de outra pessoa e precisa de saber em que versão o abrir.

## Passos

1. Clique em {{ui:Escolher um ficheiro}}.
2. Escolha um ficheiro `.rvt`, `.rfa`, `.rte` ou `.rft`.
3. Aguarde um momento. A linha de estado diz "A ler o ficheiro…" e depois "Aberto *nome do ficheiro*".
4. Olhe para o topo do cartão: a imagem de pré-visualização guardada no ficheiro, o tipo de ficheiro, a versão em que foi guardado e o nome do projeto.
5. Desloque-se para baixo para ler as secções do cartão.

## O que deve ver

O cartão ao centro, com estas secções quando o ficheiro as tem:

| Secção | O que indica |
|---|---|
| Ficheiro | Nome do ficheiro, tamanho, tipo (projeto, modelo de projeto, família ou modelo de família), a versão e a compilação em que foi guardado, trabalho partilhado, o caminho do modelo central, onde e por quem foi guardado pela última vez, idioma e GUID do documento |
| Informação do projeto | Os campos próprios do projeto, como nome, número, cliente, morada e estado. Os campos que ainda têm os valores predefinidos de um projeto novo ficam de fora. |
| Família, Família: … | Para uma família: o seu nome, categoria, versão, última atualização e os seus parâmetros, grupo a grupo |
| Ficheiros ligados e referenciados | Cada modelo ligado, ligação CAD, imagem e tabela de keynotes que o ficheiro aponta, com o caminho guardado |

À esquerda, o painel {{ui:Ficheiro}} repete os dados principais e acrescenta **Lido**: quanto do ficheiro o BimCraft leu de facto, normalmente cerca de 40 KB de um ficheiro de muitos megabytes. À direita, o painel {{ui:Propriedades}} indica que as propriedades dos elementos precisam do modelo 3D.

## Porque não há 3D

O modelo 3D e os elementos dentro de um ficheiro de projeto são guardados num formato não documentado. O BimCraft lê apenas as partes do ficheiro que estão documentadas ou são claramente legíveis: a informação do ficheiro, a informação do projeto, os dados de família, a lista de ligações e a imagem de pré-visualização. Não tenta adivinhar o resto. Para ver o modelo em 3D e ler as propriedades dos elementos, exporte IFC a partir do programa que criou o ficheiro. Veja [Obter um ficheiro de projeto em 3D através de IFC](topic:rvt-to-ifc).

## Erros comuns

- **Esperar 3D.** Veja acima.
- **As ligações mostram apenas o caminho guardado.** Um ficheiro aberto por si só não consegue verificar se as suas ligações existem. Abra antes a pasta onde está, e o BimCraft marca cada ligação como encontrada ou não: [Abrir uma pasta de projeto completa](topic:open-project-folder).
- **"Este ficheiro está incompleto…"** O ficheiro foi cortado durante a cópia, o envio ou a sincronização. Um ficheiro numa unidade na nuvem que ainda está "apenas online" também faz isto. O BimCraft abre-o na mesma e mostra apenas o que foi recuperado: um aviso âmbar no topo do cartão, uma secção **Recuperado deste ficheiro** com as partes cujos bytes estão todos no ficheiro, e **Não está no ficheiro** para o resto. Nada é preenchido para a parte em falta, por isso a versão, a imagem de pré-visualização ou a informação do projeto podem faltar quando estavam guardadas depois do corte. Se até a lista de conteúdos do ficheiro tiver sido cortada, nada pode ser aberto. Copie o original de novo e reabra-o para obter o ficheiro completo.
- **"Sem imagem de pré-visualização neste ficheiro".** Alguns ficheiros são guardados sem uma. É normal.
- **Abrir uma cópia de segurança por engano.** Os ficheiros com nomes como `Tower.0004.rvt` são cópias de segurança numeradas. Abrir a pasta agrupa-os com o respetivo modelo.
