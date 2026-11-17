---
title: Altere uma propriedade de tipo para todos os elementos de um tipo
summary: Diferencie propriedades de tipo de propriedades de instância, altere um valor no tipo para que todos os elementos acompanhem, e verifique que a edição própria de um elemento continua sendo só dele.
keywords: tipo, instância, propriedades de tipo, tipo de família, compartilhado, cópia ao gravar, todos os elementos, edição em massa, fabricante, modelo
from: bffd8789
---

## O que você vai fazer

Defina o fabricante de um tipo de porta para que cada porta desse tipo o mostre, depois dê a uma porta sua própria classificação de resistência ao fogo, sem tocar nas outras. Isso mostra a diferença entre propriedades de tipo e de instância no BimCraft.

## Tipo ou instância?

- Uma propriedade de **instância** pertence a um elemento: sua etiqueta, sua marca, seu ambiente, sua própria resistência ao fogo.
- Uma propriedade de **tipo** pertence ao tipo que muitos elementos compartilham: fabricante, modelo, largura de um tipo de porta.

No painel {{ui:Properties}}, os conjuntos que vêm do tipo têm " (type)" depois do nome e a linha "Propriedade de tipo: uma alteração aqui se aplica a todos os elementos deste tipo." Todos os outros conjuntos pertencem ao próprio elemento. **Tipo** no primeiro bloco mostra o nome do tipo.

## Passos: altere o tipo

1. Abra um modelo IFC e clique em uma porta.
2. Anote seu **Tipo** no primeiro bloco do painel {{ui:Properties}}, por exemplo "Single-Flush 900 x 2100".
3. Role até um conjunto cujo nome termina em "(type)".
4. Clique no valor que deseja alterar, por exemplo **Fabricante**.
5. Digite o novo valor e pressione {{key:Enter}}.
6. Veja a lista {{ui:Changes}}: a entrada termina com "(type)".
7. Clique em outra porta do mesmo tipo.
8. Confira o mesmo valor: ele também mostra o novo valor.

## Passos: altere apenas um elemento

1. Clique em uma porta.
2. Abra um conjunto sem "(type)" no nome, por exemplo `Pset_DoorCommon`.
3. Clique em um valor, como **FireRating**, digite um novo valor e pressione {{key:Enter}}.
4. Clique na porta ao lado, do mesmo tipo.
5. Confira o mesmo valor: ele ainda mostra o valor antigo.

Mesmo que o exportador tenha compartilhado esse conjunto de propriedades entre as duas portas, o BimCraft deu à primeira porta sua própria cópia antes de alterá-la. Veja [Por que sua edição altera apenas um elemento](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Salvar

1. Clique em {{ui:Save as IFC}} ou pressione {{key:Mod+S}}.
2. Abra a cópia salva no BimCraft, ou em qualquer visualizador IFC, para conferir as duas alterações.

## Erros comuns

- **Nem todo modelo tem tipos.** Alguns exportadores não gravam objetos de tipo, ou colocam tudo na instância. Então não há conjuntos "(type)", e cada elemento deve ser alterado individualmente.
- **O mesmo valor aparece em um conjunto de tipo e em um de instância.** Alguns exportadores gravam um parâmetro nos dois lugares. Outros programas podem ler qualquer um; altere os dois se precisar que concordem.
- **Esperar selecionar "todas as portas deste tipo" e editá-las juntas.** Não há seleção múltipla nesta versão. Uma propriedade de tipo é a forma de alterar muitos elementos de uma vez.
