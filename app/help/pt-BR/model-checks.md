---
title: Verificar um modelo quanto a problemas comuns
summary: Encontre elementos sem uma propriedade necessária, GlobalIds usados duas vezes, elementos que não estão em nenhum pavimento e cópias empilhadas uma sobre a outra.
keywords: verificar, verificação, verificação do modelo, validação, qa, qualidade, propriedade ausente, obrigatória, duplicado, globalid, guid, pavimento, sobreposição, empilhado, sobreposto
from: 4d835513
---

## O que você vai fazer

Examine um modelo antes de repassá-lo: os problemas que quebram tabelas, quantitativos e o funcionamento de outros softwares.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Verificações do modelo}} no painel esquerdo.
3. Em {{ui:Propriedades obrigatórias}} já existe uma regra (qualquer classe, Nome). Altere a classe (ou {{ui:Qualquer classe}}) e a propriedade, ou clique em {{ui:Adicionar uma propriedade}} para outra regra; o x remove uma. Um elemento falha em uma regra quando a propriedade está ausente ou vazia. As regras permanecem neste navegador, para todos os modelos.
4. Clique em {{ui:Executar verificações}}.
5. Clique em um resultado para selecionar esses elementos e dar zoom até eles.

## O que você deve ver

- **Propriedade obrigatória ausente**: cada regra, com os elementos que não têm valor para ela.
- **GlobalId usado duas vezes**: elementos que compartilham um mesmo GlobalId. Outros softwares os tratam como um único elemento.
- **Sem pavimento**: elementos com uma forma que nenhum pavimento contém.
- **Cópias sobrepostas**: elementos da mesma classe e do mesmo tipo, com a mesma forma no mesmo lugar, que são contados duas vezes nas quantidades.

Cada linha dos resultados é um botão: clique nele para selecionar esses elementos e dar zoom até eles. Somente os primeiros 50 grupos de uma verificação são listados. Os mesmos achados também aparecem em {{ui:Problemas}}.

## Vale saber

- As verificações analisam o modelo ativo quando vários estão abertos. Veja [Ver vários modelos IFC juntos](topic:several-models).
- Depois de uma edição, execute as verificações novamente.
- No painel {{ui:Problemas}}, comprimentos, áreas e volumes nas palavras de um problema seguem as {{ui:Unidades}} escolhidas na barra de ferramentas (uma porta de "800 mm" aparece como 2'-7 1/2" em pés e polegadas); altere a unidade e o painel reescreve os valores.

## Próximos passos

- [Auditar o modelo: ambientes, etiquetas, LOD, interferências e interfaces](topic:audit-the-model)
- [Localizar elementos por classe, nome ou propriedade](topic:find)
- [Excluir, recortar, copiar e colar elementos](topic:copy-paste)
