---
title: Complementos usados pelo seu arquivo
summary: O BimCraft registra em um arquivo IFC quais complementos o escreveram e oferece adicionar os que estão faltando quando você o abre.
keywords: complemento, addon, este arquivo usa, complemento ausente, trusscraft, biblioteca, registro, cadcraft_addons
from: 9d9500d8
---

## O que ele faz

Quando um complemento escreve no modelo (uma treliça, um trecho de tubulação), o BimCraft registra o complemento e sua versão no projeto IFC, em um conjunto de propriedades chamado CadCraft_AddOns. O registro é gravado na mesma etapa de desfazer da própria alteração do complemento, então desfazer a alteração também remove o registro. Outros programas ignoram o conjunto de propriedades; o que o complemento desenhou permanece no arquivo de qualquer forma.

## Passos

1. Abra um arquivo IFC que um complemento ajudou a criar.
2. Se um complemento que ele usa não estiver ativo, um aviso acima do modelo indica quais são, com um botão para adicioná-los pela sua conta da Biblioteca.
3. Adicione-os, ou feche o aviso. O modelo abre de qualquer forma.

## Erros comuns

- **Nenhum aviso aparece.** Você não está conectado à sua conta nesta aba, ou o arquivo não tem registro (foi feito antes dos registros, ou por outro programa).
- **A lista de alterações mostra "undefined".** Corrigido: os rótulos agora mostram o nome do complemento.

## Próximos passos

- [Posicionar equipamentos e mobiliário da biblioteca](topic:place-from-library)
