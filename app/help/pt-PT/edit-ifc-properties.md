---
title: Alterar propriedades IFC e guardar uma cópia editada
summary: Altere o nome, a etiqueta, a descrição ou um valor de propriedade de um elemento, anule, e transfira um novo ficheiro IFC, enquanto o original fica como estava.
keywords: editar, alterar, propriedades, parâmetros, etiqueta, nome, mudar o nome, marca, guardar como, transferir, anular, copiar, ifc, escrever
from: f8035d62
---

## O que vai fazer

Corrija dados de um modelo IFC: mude o nome de um elemento, corrija a sua etiqueta, altere um valor de propriedade. Depois guarde um novo ficheiro IFC com as alterações. O ficheiro que abriu nunca é tocado.

## O que pode alterar

| Campo | Editável |
|---|---|
| Nome, Tipo de objeto, Etiqueta, Descrição | Sim |
| Valores de propriedade simples (texto, números, Sim/Não) | Sim |
| Propriedades de tipo (conjuntos marcados "(tipo)") | Sim, e a alteração aplica-se a todos os elementos desse tipo |
| Tipo, GlobalId, Linha | Não |
| Quantidades (comprimentos, áreas, volumes, contagens) | Não |
| Listas, enumerações e outros valores de várias partes | Não |
| Geometria, posição, adicionar ou eliminar elementos | Não |

## Passos

1. Abra um modelo IFC e clique no elemento que quer alterar.
2. No painel {{ui:Propriedades}}, clique no valor que quer alterar. Transforma-se numa caixa de texto. Um valor vazio aparece como *vazio*.
3. Escreva o novo valor.
4. Prima {{key:Enter}}, ou clique noutro sítio, para o manter. Prima {{key:Esc}} para cancelar.
5. Veja o valor: fica agora a negrito, com uma barra azul ao lado, que marca um valor editado.
6. Veja a secção {{ui:Alterações}} à esquerda: a alteração aparece como *elemento*: *campo*, valor antigo para valor novo.
7. Repita para outros valores ou outros elementos.
8. Clique em {{ui:Guardar como IFC}} (indica quantas alterações estão à espera, por exemplo "Guardar como IFC (3)"), ou prima {{key:Mod+S}}.
9. Encontre "*nome original* (edited).ifc" na sua pasta de transferências.

## O que deve ver

A barra de estado diz "Guardado *name* (edited).ifc com *n* alterações (… bytes). O ficheiro original não foi alterado." A lista {{ui:Alterações}} fica vazia, pronta para a ronda seguinte.

## Tipos de valores

- **Texto**: o que escrever fica como está. Limpar Nome, Tipo de objeto, Etiqueta ou Descrição remove o valor.
- **Números**: escreva um número simples, como `2.4` ou `1200`, nas unidades do próprio ficheiro. Sem símbolos de unidade. Qualquer outra coisa mostra "Use um número."
- **Números inteiros** (contagens, inteiros): "Use um número inteiro." se escrever uma parte decimal.
- **Sim/Não**: o valor torna-se uma lista com Sim e Não.

Cada valor mantém o seu tipo IFC, por isso um número continua a ser número, e os outros programas lêem-no corretamente.

## Anular

1. Clique em {{ui:Anular}} na secção {{ui:Alterações}}, ou prima {{key:Mod+Z}} enquanto não estiver a escrever num campo.
2. Repita para anular mais. Cada anulação retira a alteração mais recente.

Não é possível anular para trás de um guardar: depois de guardar, a lista recomeça. O ficheiro guardado mantém tudo.

## Porque é que a sua edição altera só um elemento

Os exportadores poupam espaço partilhando dados. Um conjunto de propriedades pode ser partilhado por vinte portas, e um valor ("Resistência ao fogo: 60 min") pode estar listado em noventa conjuntos. Se o BimCraft simplesmente alterasse o valor partilhado, todos os elementos que o partilham mudariam também.

Por isso o BimCraft copia antes de escrever:

- Se o conjunto de propriedades que edita é partilhado com outros elementos, o seu elemento recebe uma cópia própria do conjunto, e só a cópia muda.
- Se o valor é partilhado com outros conjuntos, o seu conjunto recebe uma cópia própria do valor.

Os vizinhos mantêm os seus dados antigos. Isto chama-se *copy-on-write* (copiar ao escrever). Acrescenta algumas pequenas entradas ao ficheiro, que todos os programas IFC lêem normalmente.

**As propriedades de tipo são a exceção de propósito.** Um conjunto marcado "(tipo)" pertence ao tipo do elemento, e no IFC todos os elementos desse tipo o leem a partir daí. Alterá-lo altera o tipo, por isso todos os elementos do tipo mostram o novo valor. A lista {{ui:Alterações}} marca estas edições com "(tipo)". Ver [Alterar uma propriedade de tipo para todos os elementos de um tipo](topic:type-vs-instance).

## Avisos antes de perder trabalho

- Abrir outro ficheiro com alterações não guardadas pergunta "Existem *n* alterações não guardadas em *ficheiro*. Descartá-las?" Clique em {{ui:Cancelar}} para continuar a trabalhar, e depois guarde.
- Fechar ou recarregar o separador com alterações não guardadas faz o navegador perguntar se deve sair.

## Erros comuns

- **Escrever unidades.** `2400 mm` é recusado. Escreva `2400`.
- **Alterar uma propriedade de tipo quando queria um só elemento.** Procure a nota "(tipo)" antes de escrever. Se quer que um elemento seja diferente, altere uma propriedade da instância, ou a sua Etiqueta ou Nome.
- **Esperar que o ficheiro original mude.** Guardar transfere sempre um novo ficheiro. Substitua o original à mão se for isso que pretende, e mantenha uma cópia.
- **Prima {{key:Mod+S}} sem alterações.** O BimCraft só guarda quando há algo para guardar; caso contrário, pode abrir-se a própria "Guardar página" do navegador. Feche-a.
- **Guardar duas vezes e esperar dois ficheiros pequenos.** Cada gravação contém todas as edições desde que abriu o modelo.
- **Esperar que as edições voltem a um ficheiro de projeto.** O BimCraft escreve apenas IFC. Leve o IFC editado para o programa de autoria da mesma forma que importa qualquer IFC.
