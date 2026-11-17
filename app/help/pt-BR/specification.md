---
title: Escrever a especificação a partir do modelo
summary: Uma seção de especificação para cada tipo de parede, porta, janela, piso e acabamento em uso, com os dados lidos do modelo e o seu próprio texto, gerada como PDF ou documento Word.
keywords: especificação, spec, desenhos de trabalho, etapa 5, documentos de construção, seção, tipo de parede, tipo de porta, tipo de janela, acabamento, classificação, uniclass, omniclass, masterformat, documento, pdf, word, docx, tabelas
from: a6acc6d4
---

## O que você vai fazer

Obtenha uma especificação que acompanha o modelo: uma seção para cada tipo que realmente existe na edificação, cada uma com sua composição e quantidades lidas do modelo, e o texto que você escrever para ela.

## Passos

1. Ligue {{ui:Desenhar}}, abra **Tabelas** no painel à esquerda e clique em **Especificação**.
2. A caixa lista uma seção para cada tipo de parede, tipo de porta, tipo de janela, piso e acabamento de ambiente em uso. Sob cada título ficam os **dados**, lidos do modelo: espessura, as camadas uma a uma, o nível de desenvolvimento, dimensões, quantidade e volume. Uma seção cujos elementos têm um código de classificação mostra o código no título.
3. Escreva o texto da especificação na caixa sob uma seção. **Selecionar os elementos** dela mostra do que a seção trata.
4. Clique em **Salvar**. É um passo de Desfazer, e o texto é guardado no arquivo da edificação.
5. Abra **Documentos a partir do modelo**, escolha o modelo **Especificação** e clique em **Visualizar**; depois salve como PDF, Word ou Markdown. Veja [Documentos a partir do modelo](topic:documents-from-the-model).

## As tabelas de desenhos de trabalho como documento

O modelo **Tabelas dos desenhos de trabalho** imprime as tabelas de portas, janelas e acabamentos diretamente do modelo, no layout do seu escritório. No seu próprio modelo, escreva `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ou o nome de uma configuração salva, por exemplo `{{schedule Door schedule by floor}}`. `{{specification}}` imprime a especificação.

## Bom saber

- Os dados são do modelo. Eles mudam quando o modelo muda; o seu texto não.
- O BimCraft não escreve nenhuma cláusula de norma nem texto de fabricante. Uma seção sem texto imprime "Nenhum texto de especificação escrito ainda."
- Texto escrito para um tipo que não está mais no modelo é mantido e listado em "Texto para tipos que não estão mais no modelo".
- Para trocar um tipo genérico por uma composição específica, veja [Ferramentas de parede](topic:wall-tools) (Trocar tipo).
