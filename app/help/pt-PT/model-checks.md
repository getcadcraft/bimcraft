---
title: Verificar um modelo quanto a problemas comuns
summary: Encontre elementos sem uma propriedade de que precisa, GlobalIds usados duas vezes, elementos sem piso e cópias empilhadas umas sobre as outras.
keywords: verificar, verificação do modelo, validação, qa, qualidade, propriedade em falta, obrigatória, duplicado, globalid, guid, piso, empilhado, sobreposição
from: 4d835513
---

## O que vai fazer

Reveja um modelo antes de o entregar: os problemas que afetam mapas, quantidades e o software de outras pessoas.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Model checks}} no painel esquerdo.
3. Em {{ui:Required properties}} já existe uma regra (qualquer classe, Nome). Altere a sua classe (ou {{ui:Any class}}) e propriedade, ou clique em {{ui:Add a property}} para outra regra; o x remove uma. Um elemento falha uma regra quando a propriedade está em falta ou vazia. As regras ficam neste navegador para todos os modelos.
4. Clique em {{ui:Run checks}}.
5. Clique num resultado para selecionar esses elementos e aproximar a vista deles.

## O que deve ver

- **Falta uma propriedade obrigatória**: cada regra, com os elementos que não têm valor para ela.
- **GlobalId usado duas vezes**: elementos que partilham o mesmo GlobalId. Outro software trata-os como um só elemento.
- **Sem piso**: elementos com uma forma que nenhum piso contém.
- **Cópias empilhadas**: elementos da mesma classe e do mesmo tipo, com a mesma forma no mesmo sítio, que contam duas vezes nas quantidades.

Cada linha dos resultados é um botão: clique nela para selecionar esses elementos e aproximar a vista. Só são listados os primeiros 50 grupos de cada verificação. As mesmas conclusões também aparecem em {{ui:Problems}}.

## Bom saber

- As verificações analisam o modelo ativo quando há vários abertos. Consulte [Ver vários modelos IFC em conjunto](topic:several-models).
- Depois de uma edição, volte a executar as verificações.
- No painel {{ui:Problems}}, os comprimentos, áreas e volumes nos textos de um problema seguem as {{ui:Units}} escolhidas na barra de ferramentas (uma porta de «800 mm» aparece como 2'-7 1/2" em pés e polegadas); mude a unidade e o painel reformula-os.

## Seguinte

- [Auditar o modelo: compartimentos, etiquetas, LOD, conflitos e interfaces](topic:audit-the-model)
- [Encontrar elementos por classe, nome ou propriedade](topic:find)
- [Eliminar, cortar, copiar e colar elementos](topic:copy-paste)
