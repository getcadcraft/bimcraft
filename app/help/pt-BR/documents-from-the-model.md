---
title: Documentos a partir do modelo
summary: Escreva uma especificação ou uma descrição uma vez como modelo, com campos para quantitativos, propriedades e etiquetas, e preencha-a a partir do IFC aberto como PDF ou documento Word.
keywords: documento, documentos, especificação, descrição, modelo, markdown, relatório, word, docx, pdf, quantitativos, tabela, disciplina, tabela de portas, acabamentos, documentcad
from: 2b0c9156
---

## O que você vai fazer

Um modelo é um texto em Markdown com campos entre chaves duplas. O BimCraft preenche os campos a partir do modelo aberto (contagens, quantidades por tipo, propriedades, suas [etiquetas](topic:tags-and-schedules)) e salva o resultado como PDF, documento Word (.docx) ou Markdown.

## Passos

1. Abra um modelo IFC.
2. No painel esquerdo, em {{ui:Quantitativos}}, abra {{ui:Documentos a partir do modelo}}.
3. Escolha um modelo: {{ui:Portas e ferragens}} ou {{ui:Paredes, revestimentos e acabamentos}}, ou {{ui:Carregar um modelo de documento (.md)…}} para o seu.
4. Se o modelo lê etiquetas que ainda não estão definidas, clique em {{ui:Adicionar as etiquetas deste modelo de documento}} e depois etiquete os elementos em {{ui:Etiquetas}}.
5. Altere o texto como quiser e clique em {{ui:Mostrar o documento}}.
6. Clique em {{ui:PDF}} (escolha A4 ou Carta antes) ou em {{ui:Word (.docx)}}.

## O que você deve ver

- O documento preenchido abaixo dos botões, com suas tabelas.
- Uma lista de avisos quando um campo não pode ser lido (uma etiqueta não definida, uma propriedade que o modelo não tem, um bloco que nunca é fechado); esse campo é impresso como `[?…]`.
- Páginas em PDF com o título do documento e "Página 1 de 3" no rodapé de cada página; tabelas longas continuam com a linha de cabeçalho.

## Campos

| Campo | Resulta em |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | o nome e a descrição do projeto, o nome do arquivo, a data de hoje |
| `{{count IfcDoor}}` | quantas portas |
| `{{sum IfcWall NetSideArea}}` | um total, com sua unidade |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmética (`+ - * /` e parênteses) sobre termos entre colchetes: `[sum …]`, `[count …]` e, dentro de um each, `[qty Width]`. `round n` define as casas decimais, `unit` acrescenta uma unidade. Algo que não pode ser lido, ou uma divisão por zero, imprime `[?…]` e avisa |
| `{{qty IfcWall NetSideArea by Type}}` | uma tabela: uma linha por tipo com sua contagem e total, e uma linha de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | uma tabela, uma linha por elemento |
| `{{tag Finish}}` | em um laço, o valor do elemento; fora dele, todos os valores usados (Carvalho, Tinta) |
| `{{tags}}` | as definições de etiqueta como tabela |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | o texto uma vez por elemento; a parte após `{{else}}` quando não há nenhum |
| `{{#group IfcWall by Type}} … {{/group}}` | o texto uma vez por tipo, com `{{value}}`, `{{count}}`, `{{sum Length}}` e um `{{#each}}` simples dentro |

Dentro de `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (a marca IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (o do próprio elemento, com sua unidade).

Uma classe pode ser várias (`IfcDoor|IfcWindow`) ou todos os elementos (`*`). Restrinja qualquer uma delas com `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Os testes são `=`, `!=`, `~` (contém), `>`, `<`, `>=`, `<=`, `has` e `hasnot`; junte vários com `and`; coloque um valor com espaços entre "aspas". `sort Name` ordena um laço.

## Tabelas e a especificação em um documento

`{{schedule doors}}` imprime uma tabela do modelo, no layout do seu escritório: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ou o nome de uma configuração que você salvou em Tabelas. `{{specification}}` imprime a especificação do projeto. Os modelos **Tabelas de desenho de trabalho** e **Especificação** usam esses recursos. Na prévia, clique em um número de uma dessas tabelas para selecionar os elementos de que ele veio. Veja [Organizar, salvar e exportar uma tabela](topic:schedule-layouts) e [Escrever a especificação a partir do modelo](topic:specification).

## Bom saber

- Um campo nomeia um item embutido (Name, Type, Storey, Class, Material, Mark), uma etiqueta (`tag:Fire rating`, ou seu nome), uma propriedade (`Pset_WallCommon.FireRating`) ou apenas o nome de uma propriedade (`NetSideArea`, `Width`): um nome simples lê o conjunto próprio de cada elemento, conjuntos de quantidades primeiro; assim, `Width` em uma porta é a largura da porta, não a espessura de uma parede. Dentro de `where`, um nome simples lê o conjunto que a maioria dos elementos escolhidos tem.
- As quantidades são o que os conjuntos de quantidades do arquivo dizem (o BimCraft os grava para o que desenha); as unidades vêm das configurações de unidades do arquivo.
- As palavras de campo (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) permanecem em inglês em todos os idiomas. Os modelos de exemplo estão em inglês.
- Texto vindo do modelo nunca vira formatação: um nome com `*` ou `|` é impresso como está.
- Mantenha um modelo que você alterou com {{ui:Guardar neste navegador}} (só este navegador o tem) ou {{ui:Baixar o modelo de documento}}.
- O texto do PDF usa as fontes padrão de PDF: um caractere fora do texto da Europa Ocidental é impresso como "?", e a linha de status diz quantos.
- Modelos por disciplina ficam na {{ui:Biblioteca}} (tipo Modelo de documento). Em Documentos a partir do modelo, escolha Da Biblioteca…, selecione um, e seu texto e as etiquetas que ele lê são trazidos; edite como quiser. Publicar seu próprio modelo na Biblioteca é o mesmo envio de qualquer outro item. Ainda não implementado: cálculos além de contagens e totais.
