---
title: Organize, salve e exporte uma tabela
summary: Agrupe uma tabela, dê a ela subtotais e totais, acrescente uma coluna lida de uma propriedade, salve-a como uma configuração no arquivo e exporte-a como pasta de trabalho de planilha (.xlsx), como texto para colar em uma planilha online ou como CSV. O padrão do escritório preenche o que a tabela não define.
keywords: layout de tabela, agrupar por, subtotal, total, cabeçalhos, padrão do escritório, políticas padrão, configuração, quadro de portas por pavimento, resistência ao fogo, ferragens, xlsx, pasta de trabalho, planilha online, colar, csv, exportar, planilha, elementos, selecionar a partir da tabela, valor
from: 95dfd801
---

## O que você vai fazer

Transforme uma tabela simples na que o seu escritório emite: agrupada por pavimento, tipo ou ambiente, com subtotais e um total, com as colunas de que você precisa, sob o próprio nome. Depois envie-a para uma planilha. Cada linha e cada valor ainda sabe de quais elementos veio.

## Passos

1. Ative {{ui:Desenhar}} e abra **Tabelas** no painel esquerdo. Escolha uma tabela, por exemplo **Portas**.
2. Acima da tabela, escolha **Agrupar por** (uma coluna da tabela, como Pavimento ou Tipo, ou **Sem agrupamento**) e **Totais** (**Sem totais**, **Um total** ou **Subtotais e um total**). **Conforme definido** deixa a escolha para a configuração salva ou para o padrão do escritório.
3. Para acrescentar uma coluna lida dos elementos, digite um nome de propriedade ou de etiqueta sob a tabela (por exemplo `FireRating`, `Pset_DoorCommon.FireRating` ou o nome de uma etiqueta, como `Ironmongery`) e clique em **Adicionar coluna**. O BimCraft lê primeiro os conjuntos de propriedades do próprio elemento e depois os do seu tipo. Quando nenhum elemento tem valor ainda, ele informa isso; a coluna se preenche sozinha quando um valor for definido.
4. Digite um nome (por exemplo "Quadro de portas por pavimento") e clique em **Salvar como configuração**. A configuração fica no arquivo do edifício e entra na lista de Tabelas com esse nome. Ela acompanha cada mudança do modelo. **Remover esta configuração** a retira de novo. Ambas são uma etapa de Desfazer.

## Clique em um número para selecionar a sua origem

Clique em qualquer linha, ou em qualquer valor isolado, para selecionar na planta e em 3D os elementos por trás dele:

- uma linha seleciona os elementos dessa linha;
- um subtotal ou um total seleciona tudo o que ele soma, e um cabeçalho de grupo seleciona o seu grupo;
- um valor com elementos próprios seleciona esses: as **Deduções** de um tipo de parede selecionam as suas portas e janelas, e a área de parede de um ambiente, as suas paredes.

O mesmo vale para um documento feito do modelo: na visualização, clique em um número de uma tabela.

## Exportar

- **Download Excel** salva uma pasta de trabalho .xlsx. Comprimentos, áreas, volumes e contagens são números reais, na unidade que a coluna mostra (pés e polegadas continuam como texto). Uma segunda planilha, **Elements**, lista, para cada linha, os GlobalIds dos elementos por trás dela.
- **Copy for Google Sheets** coloca a tabela na sua área de transferência como texto separado por tabulações. Em uma planilha do Google, clique na célula A1 e cole. **Open a new Google Sheet** abre `sheets.new`, o endereço do próprio Google para uma planilha vazia, na sua conta Google. O BimCraft não entra no Google e não envia nada para lá: a colagem é sua.
- **Download CSV** salva a tabela como ela está organizada na tela.

## O padrão do escritório

Um escritório pode definir uma vez como as suas tabelas são organizadas. Ative o complemento **Default Policies** ([Default Policies](topic:default-policies)) e defina, em **Configurações › Global › Default Policies › Schedule layout (the office standard)**:

| Política | O que faz |
|---|---|
| Group schedules by | Pavimento, Tipo, Ambiente ou nenhum agrupamento, para cada tabela que tenha essa coluna |
| Totals in schedules | Sem totais, um total no fim, ou um subtotal sob cada grupo e um total |
| Schedule title | Um padrão, por exemplo `{project}: {schedule}` |
| Column headings | Como escrito, EM MAIÚSCULAS ou Com Iniciais Maiúsculas |

O padrão vale para toda tabela, seja quem a configurar: as tabelas simples do painel, uma configuração salva, uma tabela que um assistente configura, as exportações e as tabelas de um documento. Uma configuração que define o próprio agrupamento, os totais ou o título os mantém; o padrão preenche o resto. O painel indica quais partes o padrão do escritório definiu. As políticas viajam no arquivo Default Policies, junto com as outras.

## Bom saber

- Uma configuração nomeia a sua tabela de origem e as suas colunas; ela não guarda números. Os números são lidos do modelo a cada vez.
- Listas que não são linhas de elementos (as composições de paredes e a legenda de materiais) não têm layout nem exportação aqui.
- Um assistente pode fazer tudo isso por você: veja [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).
