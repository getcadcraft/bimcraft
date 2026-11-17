---
title: Alterar uma propriedade de tipo para todos os elementos de um tipo
summary: Distinguir propriedades de tipo de propriedades de instância, alterar um valor no tipo para que todos os elementos o sigam, e verificar que a edição de um elemento continua a ser só dele.
keywords: tipo, instância, propriedades de tipo, tipo de família, partilhado, cópia ao escrever, todos os elementos, edição em massa, fabricante, modelo
from: bffd8789
---

## O que vai fazer

Definir o fabricante de um tipo de porta para que todas as portas desse tipo o mostrem, e depois dar a uma porta a sua própria classificação de resistência ao fogo sem tocar nas outras. Isto mostra a diferença entre propriedades de tipo e de instância no BimCraft.

## Tipo ou instância?

- Uma propriedade de **instância** pertence a um elemento: a sua etiqueta, a sua marca, a sua divisão, a sua própria resistência ao fogo.
- Uma propriedade de **tipo** pertence ao tipo que muitos elementos partilham: fabricante, modelo, largura de um tipo de porta.

No painel {{ui:Properties}}, os conjuntos que vêm do tipo têm " (tipo)" depois do nome e a linha "Propriedade de tipo: uma alteração aqui aplica-se a todos os elementos deste tipo." Todos os outros conjuntos pertencem ao próprio elemento. **Tipo** no primeiro bloco mostra o nome do tipo.

## Passos: alterar o tipo

1. Abrir um modelo IFC e clicar numa porta.
2. Anotar o seu **Tipo** no primeiro bloco do painel {{ui:Properties}}, por exemplo "Single-Flush 900 x 2100".
3. Deslocar até um conjunto cujo nome termine em "(tipo)".
4. Clicar no valor que se quer alterar, por exemplo **Fabricante**.
5. Escrever o novo valor e premir {{key:Enter}}.
6. Ver a lista {{ui:Changes}}: a entrada termina em "(tipo)".
7. Clicar noutra porta do mesmo tipo.
8. Verificar o mesmo valor: também mostra o novo valor.

## Passos: alterar só um elemento

1. Clicar numa porta.
2. Abrir um conjunto sem "(tipo)" no nome, por exemplo `Pset_DoorCommon`.
3. Clicar num valor, como **FireRating**, escrever um novo valor e premir {{key:Enter}}.
4. Clicar na porta ao lado, do mesmo tipo.
5. Verificar o mesmo valor: continua a mostrar o valor antigo.

Mesmo que o exportador tenha partilhado esse conjunto de propriedades entre as duas portas, o BimCraft deu à primeira porta a sua própria cópia antes de a alterar. Ver [Porque é que a sua edição altera apenas um elemento](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Guardar

1. Clicar em {{ui:Save as IFC}} ou premir {{key:Mod+S}}.
2. Abrir a cópia guardada no BimCraft, ou em qualquer visualizador IFC, para verificar as duas alterações.

## Erros comuns

- **Nem todos os modelos têm tipos.** Alguns exportadores não escrevem objetos de tipo, ou põem tudo na instância. Então não há conjuntos "(tipo)", e cada elemento tem de ser alterado individualmente.
- **O mesmo valor aparece num conjunto de tipo e num de instância.** Alguns exportadores escrevem um parâmetro nos dois sítios. Outros programas podem ler qualquer um deles; altere os dois se precisar que concordem.
- **Esperar poder selecionar "todas as portas deste tipo" e editá-las em conjunto.** Não há seleção múltipla nesta versão. Uma propriedade de tipo é a forma de alterar muitos elementos de uma só vez.
