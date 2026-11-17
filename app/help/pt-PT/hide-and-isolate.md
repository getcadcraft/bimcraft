---
title: Ocultar, isolar e tornar transparentes elementos
summary: Escolha vários elementos, oculte-os, mostre apenas eles ou mostre-os com tudo o resto transparente, e depois repor tudo.
keywords: ocultar, isolar, transparente, fantasma, raio-X, mostrar tudo, mostrar de novo, selecionar vários, seleção múltipla, Ctrl+clique, Shift+clique, visibilidade
from: 97e98b8c
---

## O que vai fazer

Limpe a vista até ao que está a observar: oculte os elementos que estão no caminho, mostre apenas os que escolheu, ou mantenha tudo o resto no ecrã como um contorno ténue, para continuar a saber onde está.

## Passos

1. Abra um modelo IFC. Veja [Abrir um modelo IFC e observar em 3D](topic:open-ifc-model).
2. Clique num elemento para o escolher. Para escolher mais, mantenha {{key:Mod}} ou {{key:Shift}} premido e clique em cada um. Clicar num elemento já escolhido desta forma retira-o de novo.
3. Abra {{ui:Mostrar}} na barra de ferramentas e escolha o que fazer, ou prima a respetiva tecla:
   - {{ui:Ocultar}} ({{key:H}}) oculta os elementos escolhidos.
   - {{ui:Isolar}} ({{key:I}}) mostra apenas os elementos escolhidos.
   - {{ui:Transparente}} ({{key:T}}) mostra os elementos escolhidos tal como são e tudo o resto transparente.
4. Clique em {{ui:Mostrar tudo}} no mesmo menu, ou prima {{key:Shift+H}}, para mostrar de novo todos os elementos.
5. Para cortar tudo à volta dos elementos escolhidos, clique em {{ui:Caixa de corte à volta da escolha}} no mesmo menu, ou prima {{key:Shift+X}}. Veja [Cortar um modelo IFC com um plano de corte](topic:section-plane).

## O que deve ver

- Com vários elementos escolhidos, {{ui:Propriedades}} indica quantos são e lista-os por classe. Clique num deles isoladamente para ver as suas propriedades.
- Os elementos ocultos não podem ser escolhidos: um clique cai no que estiver por trás deles.
- Os elementos transparentes também não podem ser escolhidos, por isso pode clicar diretamente através das paredes até ao que isolou.
- As arestas ocultam-se com o elemento, e ficam ténues com ele.
- Ocultar, isolar e transparente mantêm-se enquanto edita, coloca itens da biblioteca ou corta o modelo com um plano de corte. Abrir outro modelo mostra tudo de novo.

## Erros comuns

- **Os itens do menu estão a cinzento.** Não há nada escolhido. Clique primeiro num elemento; aponte para um item para ler porque não pode atuar.
- **Isolar mostrou uma parede que eu tinha ocultado.** Isolar mostra exatamente o que escolheu, oculto ou não.
- **Falta um piso inteiro.** Isso deve-se à lista {{ui:Pisos}}, e não a {{ui:Mostrar tudo}}: volte a marcar o piso.

## Seguinte

- [Mostrar e ocultar pisos, espaços e arestas](topic:storeys-and-spaces)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
