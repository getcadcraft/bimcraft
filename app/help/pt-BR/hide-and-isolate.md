---
title: Ocultar, isolar e tornar transparentes os elementos
summary: Selecione vários elementos, oculte-os, mostre somente eles ou mostre-os com todo o resto transparente, e depois traga tudo de volta.
keywords: ocultar, isolar, transparente, fantasma, raio-x, mostrar tudo, reexibir, selecionar vários, seleção múltipla, Ctrl clique, Shift clique, visibilidade
from: 97e98b8c
---

## O que você vai fazer

Limpar a visão até o que você está olhando: ocultar elementos que atrapalham, mostrar apenas os que você escolheu, ou manter todo o resto na tela como um contorno suave, para que você continue sabendo onde está.

## Passos

1. Abra um modelo IFC. Veja [Abrir um modelo IFC e observar em 3D](topic:open-ifc-model).
2. Clique em um elemento para selecioná-lo. Para selecionar mais, segure {{key:Mod}} ou {{key:Shift}} e clique em cada um. Clicar em um elemento já selecionado dessa forma o tira da seleção.
3. Abra {{ui:Exibir}} na barra de ferramentas e escolha o que fazer, ou pressione a tecla correspondente:
   - {{ui:Ocultar}} ({{key:H}}) oculta os elementos selecionados.
   - {{ui:Isolar}} ({{key:I}}) mostra apenas os elementos selecionados.
   - {{ui:Transparente}} ({{key:T}}) mostra os elementos selecionados como estão e todo o resto transparente.
4. Clique em {{ui:Mostrar tudo}} no mesmo menu, ou pressione {{key:Shift+H}}, para mostrar todos os elementos novamente.
5. Para cortar tudo ao redor dos elementos selecionados, clique em {{ui:Caixa de corte em volta da seleção}} no mesmo menu, ou pressione {{key:Shift+X}}. Veja [Cortar um modelo IFC com um plano de corte](topic:section-plane).

## O que você deve ver

- Com vários elementos selecionados, {{ui:Propriedades}} diz quantos são e os lista por classe. Clique em um deles isoladamente para ver suas propriedades.
- Elementos ocultos não podem ser selecionados: um clique cai no que estiver atrás deles.
- Elementos transparentes também não podem ser selecionados, então você pode clicar diretamente através das paredes até o que isolou.
- As arestas são ocultadas junto com o elemento e ficam suaves junto com ele.
- Ocultar, isolar e transparente permanecem como estão enquanto você edita, posiciona itens da biblioteca ou corta o modelo com um plano de corte. Abrir outro modelo mostra tudo novamente.

## Erros comuns

- **Os itens do menu estão em cinza.** Nada está selecionado. Clique primeiro em um elemento; aponte para um item para ler por que ele não pode agir.
- **Isolar mostrou uma parede que eu tinha ocultado.** Isolar mostra exatamente o que você selecionou, oculto ou não.
- **Um pavimento inteiro está faltando.** Isso é a lista {{ui:Pavimentos}}, não {{ui:Mostrar tudo}}: marque o pavimento novamente.

## Próximos

- [Mostrar e ocultar pavimentos, espaços e arestas](topic:storeys-and-spaces)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
