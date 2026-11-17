---
title: Configurar, guardar e exportar um mapa
summary: Group a schedule, give it subtotals and totals, add a column read from a property, save it as a set-up in the file, and export it as a spreadsheet workbook (.xlsx), as text to paste into an online sheet, or as CSV. The office standard fills in what a schedule does not state.
keywords: layout de mapa, agrupar por, subtotal, total, cabeçalhos, norma do escritório, políticas predefinidas, configuração, mapa de portas por piso, classe de resistência ao fogo, ferragens, xlsx, livro, folha online, colar, csv, exportar, folha de cálculo, elementos, selecionar a partir do mapa, valor
from: 95dfd801
---

## O que vai fazer

Transformar um mapa simples no que o seu escritório emite: agrupado por nível, tipo ou compartimento, com subtotais e um total, com as colunas de que precisa, com nome próprio. Depois envie-o para uma folha de cálculo. Cada linha e cada valor continuam a conhecer os elementos de onde vêm.

## Passos

1. Ative {{ui:Draw}} e abra **Mapas** no painel esquerdo. Escolha um mapa, por exemplo **Portas**.
2. Acima da tabela, escolha **Agrupar por** (uma coluna do mapa, como Nível ou Tipo, ou **Sem agrupamento**) e **Totais** (**Sem totais**, **Um total** ou **Subtotais e um total**). **Como definido** deixa a escolha para a configuração guardada ou para a norma do escritório.
3. Para acrescentar uma coluna lida dos elementos, escreva por baixo da tabela o nome de uma propriedade ou etiqueta (por exemplo `FireRating`, `Pset_DoorCommon.FireRating` ou o nome de uma etiqueta como `Ironmongery`) e clique em **Adicionar coluna**. O BimCraft lê primeiro os conjuntos de propriedades do próprio elemento, depois os do seu tipo. Quando nenhum elemento tem ainda um valor, indica-o; a coluna preenche-se sozinha quando um valor for definido.
4. Escreva um nome (por exemplo "Mapa de portas por piso") e clique em **Guardar como configuração**. A configuração fica guardada no ficheiro do edifício e junta-se à lista de Mapas com esse nome. Segue todas as alterações do modelo. **Remover esta configuração** retira-a. Ambas as ações são um único passo em Anular.

## Clique num valor para selecionar a sua origem

Clique em qualquer linha ou em qualquer valor isolado para selecionar na planta e em 3D os elementos por trás dele:

- uma linha seleciona os elementos dessa linha;
- um subtotal ou um total seleciona tudo o que soma, e um cabeçalho de grupo seleciona o seu grupo;
- um valor com elementos próprios seleciona esses: as **Deduções** de um tipo de parede selecionam as suas portas e janelas, e a área de parede de um compartimento seleciona as suas paredes.

O mesmo funciona num documento feito a partir do modelo: na pré-visualização, clique num valor de um mapa.

## Exportar

- **Transferir Excel** guarda um livro .xlsx. Comprimentos, áreas, volumes e contagens são números reais, na unidade que a coluna mostra (pés e polegadas continuam a ser texto). Uma segunda folha, **Elementos**, lista para cada linha os GlobalId dos elementos por trás dela.
- **Copiar para o Google Sheets** coloca o mapa na área de transferência como texto separado por tabulações. Numa folha do Google Sheets, clique na célula A1 e cole. **Abrir uma nova folha do Google Sheets** abre `sheets.new`, o endereço próprio do Google para uma folha vazia, na sua conta Google. O BimCraft não inicia sessão no Google e não envia nada para lá: a colagem fica a seu cargo.
- **Transferir CSV** guarda a tabela tal como está disposta no ecrã.

## A norma do escritório

Um escritório pode indicar de uma só vez como os seus mapas são organizados. Ative o suplemento **Políticas predefinidas** ([Políticas predefinidas](topic:default-policies)) e defina, em **Definições › Global › Políticas predefinidas › Layout dos mapas (norma do escritório)**:

| Política | O que faz |
|---|---|
| Agrupar mapas por | Nível, Tipo, Compartimento ou sem agrupamento, para cada mapa que tenha essa coluna |
| Totais nos mapas | Sem totais, um total no fim, ou um subtotal sob cada grupo e um total |
| Título do mapa | Um padrão, por exemplo `{project}: {schedule}` |
| Cabeçalhos das colunas | Como escrito, EM MAIÚSCULAS ou Com Iniciais Maiúsculas |

A norma aplica-se a todos os mapas, seja quem for que os configura: os mapas simples do painel, uma configuração guardada, um mapa que um assistente configura, as exportações e os mapas num documento. Uma configuração que indique o seu próprio agrupamento, totais ou título mantém-nos; a norma preenche o resto. O painel indica que partes a norma do escritório definiu. As políticas seguem no ficheiro de Políticas predefinidas com as restantes.

## Bom saber

- Uma configuração indica o seu mapa de origem e as suas colunas; não guarda números. Os números são lidos do modelo de cada vez.
- As listas que não são linhas de elementos (as composições de paredes e a legenda de materiais) não têm layout nem exportação aqui.
- Um assistente pode fazer tudo isto por si: ver [Deixe um assistente de IA trabalhar com o seu modelo](topic:assistants).
