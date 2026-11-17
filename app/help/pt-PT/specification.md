---
title: Escrever a especificação a partir do modelo
summary: Uma secção de especificação para cada tipo de parede, porta, janela, piso e acabamento em uso, com os seus dados lidos do modelo e o seu próprio texto, feita em PDF ou em documento Word.
keywords: especificação, desenhos de execução, fase 5, documentos de construção, secção, tipo de parede, tipo de porta, tipo de janela, acabamento, classificação, uniclass, omniclass, masterformat, documento, pdf, word, docx, mapas
from: a6acc6d4
---

## O que vai fazer

Obtenha uma especificação que segue o modelo: uma secção para cada tipo que está realmente no edifício, cada uma com a sua composição e quantidades lidas do modelo, e com o texto que escrever para ela.

## Passos

1. Ative {{ui:Desenhar}}, abra **Mapas** no painel da esquerda e clique em **Especificação**.
2. A caixa lista uma secção para cada tipo de parede, tipo de porta, tipo de janela, piso e acabamento de compartimento em uso. Sob cada título estão os seus **dados**, lidos do modelo: espessura, as camadas uma a uma, o nível de desenvolvimento, dimensões, quantos e quanto. Uma secção cujos elementos trazem um código de classificação mostra o código no seu título.
3. Escreva o texto da especificação na caixa sob uma secção. **Selecionar os seus elementos** mostra a que diz respeito a secção.
4. Clique em **Guardar**. É um passo de Anular, e o texto fica guardado no ficheiro do edifício.
5. Abra **Documentos a partir do modelo**, escolha o modelo **Especificação** e clique em **Pré-visualizar**; depois guarde como PDF, Word ou Markdown. Ver [Documentos a partir do modelo](topic:documents-from-the-model).

## Os mapas de desenhos de execução como documento

O modelo de documento **Mapas dos desenhos de execução** imprime os mapas de portas, janelas e acabamentos diretamente a partir do modelo, no layout do seu escritório. No seu próprio modelo de documento escreva `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ou o nome de uma configuração guardada, por exemplo `{{schedule Door schedule by floor}}`. `{{specification}}` imprime a especificação.

## A saber

- Os dados são do modelo. Mudam quando o modelo muda; o seu texto não.
- O BimCraft não escreve nenhuma cláusula de qualquer norma nem texto de fabricante. Uma secção sem texto imprime «Ainda não foi escrito texto de especificação».
- O texto escrito para um tipo que já não está no modelo é mantido e listado em «Texto para tipos que já não estão no modelo».
- Para mudar um tipo genérico para uma composição específica, veja [Ferramentas de paredes](topic:wall-tools) (Trocar tipo).
