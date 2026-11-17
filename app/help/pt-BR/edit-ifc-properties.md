---
title: Alterar propriedades IFC e salvar uma cópia editada
summary: Altere o nome, a etiqueta, a descrição ou um valor de propriedade de um elemento, desfaça, e baixe um novo arquivo IFC enquanto o original permanece como estava.
keywords: editar, alterar, propriedades, parâmetros, etiqueta, nome, renomear, marca, salvar como, baixar, desfazer, copiar, ifc, gravar
from: f8035d62
---

## O que você vai fazer

Corrija dados em um modelo IFC: renomeie um elemento, corrija a sua etiqueta, altere um valor de propriedade. Depois salve um novo arquivo IFC com as suas alterações. O arquivo que você abriu nunca é tocado.

## O que você pode alterar

| Campo | Editável |
|---|---|
| Nome, Tipo de objeto, Etiqueta, Descrição | Sim |
| Valores de propriedade simples (texto, números, Sim/Não) | Sim |
| Propriedades de tipo (conjuntos marcados "(tipo)") | Sim, e a alteração vale para todos os elementos desse tipo |
| Tipo, GlobalId, Linha | Não |
| Quantidades (comprimentos, áreas, volumes, contagens) | Não |
| Listas, enumerações e outros valores com várias partes | Não |
| Geometria, posição, adicionar ou excluir elementos | Não |

## Passos

1. Abra um modelo IFC e clique no elemento que quer alterar.
2. No painel {{ui:Properties}}, clique no valor que quer alterar. Ele se torna uma caixa de texto. Um valor vazio aparece como *vazio*.
3. Digite o novo valor.
4. Pressione {{key:Enter}}, ou clique em outro lugar, para mantê-lo. Pressione {{key:Esc}} para cancelar.
5. Observe o valor: agora ele está em negrito com uma barra azul ao lado, o que marca um valor editado.
6. Observe a seção {{ui:Changes}} à esquerda: a alteração aparece listada como *elemento*: *campo*, valor antigo para valor novo.
7. Repita para outros valores ou outros elementos.
8. Clique em {{ui:Save as IFC}} (mostra quantas alterações estão aguardando, por exemplo "Save as IFC (3)"), ou pressione {{key:Mod+S}}.
9. Procure "*nome original* (editado).ifc" na sua pasta de downloads.

## O que você deve ver

A linha de status diz "*nome* (editado).ifc salvo com *n* alterações (… bytes). O arquivo original não foi alterado." A lista {{ui:Changes}} se esvazia, pronta para a próxima rodada.

## Tipos de valores

- **Texto**: o que você digitar é mantido como está. Limpar Nome, Tipo de objeto, Etiqueta ou Descrição remove o valor.
- **Números**: digite um número simples, como `2.4` ou `1200`, nas unidades do próprio arquivo. Sem símbolos de unidade. Qualquer outra coisa mostra "Use um número."
- **Números inteiros** (contagens, inteiros): "Use um número inteiro." se você digitar um decimal.
- **Sim/Não**: o valor vira um menu com Sim e Não.

Cada valor mantém o seu tipo IFC, então um número continua sendo número e outros programas o leem corretamente.

## Desfazer

1. Clique em {{ui:Undo}} na seção {{ui:Changes}}, ou pressione {{key:Mod+Z}} enquanto não estiver digitando em um campo.
2. Repita para desfazer mais. Cada desfazer remove a alteração mais recente.

Não é possível desfazer além de um salvamento: após salvar, a lista recomeça. O arquivo salvo mantém tudo.

## Por que a sua edição altera apenas um elemento

Os exportadores economizam espaço compartilhando dados. Um conjunto de propriedades pode ser compartilhado por vinte portas, e um valor ("Resistência ao fogo: 60 min") pode estar listado em noventa conjuntos. Se o BimCraft simplesmente alterasse o valor compartilhado, todos os elementos que o compartilham também mudariam.

Então o BimCraft copia antes de gravar:

- Se o conjunto de propriedades que você edita é compartilhado com outros elementos, o seu elemento recebe uma cópia própria do conjunto, e só a cópia muda.
- Se o valor é compartilhado com outros conjuntos, o seu conjunto recebe uma cópia própria do valor.

Os vizinhos mantêm os seus dados antigos. Isso se chama *copy-on-write* (cópia na gravação). Acrescenta algumas pequenas entradas ao arquivo, que todo programa IFC lê normalmente.

**As propriedades de tipo são a exceção, de propósito.** Um conjunto marcado "(tipo)" pertence ao tipo do elemento, e no IFC cada elemento daquele tipo o lê a partir dali. Alterá-lo altera o tipo, então todos os elementos do tipo mostram o novo valor. A lista {{ui:Changes}} marca essas edições com "(tipo)". Veja [Alterar uma propriedade de tipo para todos os elementos de um tipo](topic:type-vs-instance).

## Avisos antes de perder trabalho

- Abrir outro arquivo com alterações não salvas pergunta "Você tem *n* alterações não salvas em *arquivo*. Descartá-las?" Clique em Cancelar para continuar trabalhando, depois salve.
- Fechar ou recarregar a aba com alterações não salvas faz o navegador perguntar se você quer sair.

## Erros comuns

- **Digitar unidades.** `2400 mm` é recusado. Digite `2400`.
- **Alterar uma propriedade de tipo quando você queria só um elemento.** Procure a nota "(tipo)" antes de digitar. Se quer que um elemento seja diferente, altere uma propriedade da instância, ou a sua Etiqueta ou Nome.
- **Esperar que o arquivo original mude.** Salvar sempre baixa um novo arquivo. Substitua o original você mesmo se for isso que quer, e mantenha uma cópia.
- **Pressionar {{key:Mod+S}} sem alterações.** O BimCraft só salva quando há algo a salvar; caso contrário, pode abrir o "Salvar página" do próprio navegador. Feche-o.
- **Salvar duas vezes e esperar dois arquivos pequenos.** Cada salvamento contém todas as edições desde que você abriu o modelo.
- **Esperar que as edições voltem para um arquivo de projeto.** O BimCraft grava apenas IFC. Traga o IFC editado para o seu programa de autoria da mesma forma que importa qualquer IFC.
