---
title: Documentos a partir do modelo
summary: Escreva uma especificação ou uma descrição uma vez, como modelo, com campos para quantidades, propriedades e etiquetas, e preencha-a a partir do IFC aberto como PDF ou documento Word.
keywords: documento, documentos, especificação, spec, descrição, modelo, markdown, relatório, word, docx, pdf, quantidades, mapa, especialidade, mapa de portas, acabamentos, documentcad
from: 2b0c9156
---

## O que vai fazer

Um modelo é um texto em Markdown com campos entre chavetas duplas. O BimCraft preenche os campos a partir do modelo aberto (contagens, quantidades por tipo, propriedades, as suas [etiquetas](topic:tags-and-schedules)) e guarda o resultado como PDF, documento Word (.docx) ou Markdown.

## Passos

1. Abra um modelo IFC.
2. No painel esquerdo, em {{ui:Quantidades}}, abra {{ui:Documentos a partir do modelo}}.
3. Escolha um modelo: {{ui:Portas e ferragens}} ou {{ui:Paredes, revestimentos e acabamentos}}, ou {{ui:Carregar um modelo de documento (.md)…}} para o seu próprio.
4. Se o modelo lê etiquetas que o modelo ainda não define, clique em {{ui:Adicionar as etiquetas deste modelo de documento}}, depois etiquete os elementos em {{ui:Etiquetas}}.
5. Altere o texto como quiser e clique em {{ui:Mostrar o documento}}.
6. Clique em {{ui:PDF}} (escolha primeiro A4 ou Letter) ou {{ui:Word (.docx)}}.

## O que deve ver

- O documento preenchido sob os botões, com as suas tabelas.
- Uma lista de avisos quando um campo não pode ser lido (uma etiqueta que não está definida, uma propriedade que o modelo não tem, um bloco que nunca é fechado); esse campo sai impresso como `[?…]`.
- Páginas PDF com o título do documento e "Página 1 de 3" no fundo de cada página; as tabelas longas continuam com a linha de cabeçalho.

## Campos

| Campo | Dá |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | o nome e a descrição do projeto, o nome do ficheiro, a data de hoje |
| `{{count IfcDoor}}` | quantas portas |
| `{{sum IfcWall NetSideArea}}` | um total, com a sua unidade |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | cálculo (`+ - * /` e parênteses) sobre termos entre parênteses retos: `[sum …]`, `[count …]` e, dentro de um `each`, `[qty Width]`. `round n` define as casas decimais, `unit` acrescenta uma unidade. Algo que não consegue ler, ou uma divisão por zero, sai impresso como `[?…]` e avisa |
| `{{qty IfcWall NetSideArea by Type}}` | uma tabela: uma linha por tipo, com a sua contagem e total, e uma linha de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | uma tabela, uma linha por elemento |
| `{{tag Finish}}` | num ciclo, o valor do elemento; noutro lado, todos os valores usados (Carvalho, Tinta) |
| `{{tags}}` | as definições das etiquetas, numa tabela |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | o texto uma vez por elemento; a parte depois de `{{else}}` quando não há nenhum |
| `{{#group IfcWall by Type}} … {{/group}}` | o texto uma vez por tipo, com `{{value}}`, `{{count}}`, `{{sum Length}}` e um `{{#each}}` simples dentro |

Dentro de `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (a Tag IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (o do próprio elemento, com a sua unidade).

Uma classe pode ser várias (`IfcDoor|IfcWindow`) ou todos os elementos (`*`). Restrinja qualquer uma com `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Os testes são `=`, `!=`, `~` (contém), `>`, `<`, `>=`, `<=`, `has` e `hasnot`; junte vários com `and`; ponha um valor com espaços entre "aspas". `sort Name` ordena um ciclo.

## Mapas e a especificação num documento

`{{schedule doors}}` imprime um mapa do modelo como tabela, no seu layout de escritório: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ou o nome de uma configuração que guardou em Mapas. `{{specification}}` imprime a especificação do projeto. Os modelos **Mapas de desenho de trabalho** e **Especificação** usam-nos. Na pré-visualização, clique num valor de um desses mapas para selecionar os elementos de onde veio. Veja [Criar o layout, guardar e exportar um mapa](topic:schedule-layouts) e [Escrever a especificação a partir do modelo](topic:specification).

## Bom saber

- Um campo nomeia um elemento incorporado (Name, Type, Storey, Class, Material, Mark), uma etiqueta (`tag:Fire rating`, ou o seu nome), uma propriedade (`Pset_WallCommon.FireRating`) ou apenas o nome de uma propriedade (`NetSideArea`, `Width`). Um nome simples lê o conjunto próprio de cada elemento, primeiro os conjuntos de quantidades, por isso `Width` numa porta é a largura da porta, não a espessura de uma parede. Dentro de `where`, um nome simples lê o conjunto que a maioria dos elementos escolhidos tem.
- As quantidades são o que os conjuntos de quantidades do ficheiro dizem (o BimCraft escreve-os para o que desenha); as unidades vêm das definições de unidades do ficheiro.
- As palavras de campo (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) ficam em inglês em todas as línguas. Os modelos de exemplo estão em inglês.
- O texto do modelo nunca se torna formatação: um nome com `*` ou `|` sai impresso como está.
- Guarde um modelo que alterou com {{ui:Guardar neste navegador}} (só este navegador o tem) ou {{ui:Transferir o modelo de documento}}.
- O texto PDF usa os tipos de letra PDF padrão: um carácter fora do texto da Europa Ocidental sai impresso como "?" e a linha de estado diz quantos.
- Os modelos por especialidade vivem na Biblioteca (tipo Modelo de documento). Em Documentos a partir do modelo, escolha Da Biblioteca…, escolha um, e o seu texto e as etiquetas que lê entram; edite-o como quiser. Publicar o seu próprio modelo na Biblioteca é o mesmo envio de qualquer outro item. Ainda não implementado: cálculos além de contagens e totais.
