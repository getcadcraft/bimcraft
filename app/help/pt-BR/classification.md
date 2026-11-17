---
title: Códigos de classificação (Uniclass, OmniClass, UniFormat)
summary: Dê a cada elemento e tipo um código de classificação, escolha quais sistemas um projeto usa, pesquise as tabelas Uniclass que vêm com o aplicativo, carregue as tabelas licenciadas do seu escritório e mostre os códigos nas tabelas. Os códigos são gravados no arquivo IFC para outros softwares.
keywords: classificação, classificar, código, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabela, código do elemento, código do tipo, código padrão, IfcClassification, IfcClassificationReference, cobie, coluna de tabela, csv, licença, licenciamento
from: 222b94cd
---

## O que você vai fazer

Coloque um código de classificação em paredes, pisos, coberturas, portas, janelas e qualquer outra coisa no modelo, em até três sistemas lado a lado: Uniclass, OmniClass e UniFormat. Outras disciplinas e outros softwares dependem do código, não do nome, então os códigos são salvos no arquivo IFC como referências de classificação que qualquer programa BIM lê.

## Dar um código a um elemento

1. Selecione um elemento (ou vários) e abra **Propriedades**. Abra a seção {{ui:Classificação}}.
2. Digite o código na caixa do seu sistema e pressione Enter. Com uma lista de códigos carregada, digite parte de um código ou algumas palavras ("parede-cortina") e escolha entre as correspondências: o título do código é preenchido para você.
3. {{ui:Aplica-se a}} indica onde o código vai: **Este elemento**, ou **Seu tipo (todo elemento do tipo)**. Um código em um tipo de parede é lido por todas as paredes desse tipo, inclusive as que você desenhar depois.
4. {{ui:Limpar}} remove um código.

Em cada código, a seção mostra de onde ele vem: definido neste elemento, a partir do seu tipo ou o padrão do projeto para a sua classe. O código próprio de um elemento sempre prevalece sobre o do seu tipo, e o do tipo sobre o padrão. Com vários elementos selecionados, uma caixa que diz "varia" significa que eles não compartilham um código; digitar um código o aplica a todos. Cada alteração é uma etapa de desfazer.

Um código sempre pode ser digitado, com ou sem lista carregada. Se ele não parecer um código desse sistema, ou não estiver na lista carregada, uma dica avisa e o código é mantido como você digitou.

## Escolher os sistemas do projeto

Abra **Dados** na barra do modelo e escolha {{ui:Classificação}} (ou {{ui:Classificação do projeto…}} na seção Propriedades).

- Marque os sistemas que este projeto usa. Propriedades então mostra apenas esses.
- **Uniclass**: as tabelas Elementos/funções (EF), Sistemas (Ss) e Produtos (Pr) vêm com o aplicativo. São © NBS, licenciadas sob Creative Commons Atribuição-SemDerivações 4.0, e são repassadas sem alterações. A caixa de diálogo mostra a edição de cada tabela e o dia em que foi lida. Elas não são as tabelas mais recentes: a editora publica novas a cada trimestre no próprio site.
- **OmniClass** e **UniFormat**: nenhuma lista de códigos vem com o aplicativo, porque a editora não permite repassar as tabelas sem licença. Digite qualquer código, ou carregue a tabela licenciada do seu escritório.
- {{ui:Carregar uma tabela (CSV)…}} lê a tabela do seu escritório de um arquivo CSV com uma coluna de código e uma coluna de título (uma linha de cabeçalho chamada Code, Number ou Identifier e Title, Name ou Description é encontrada sozinha; sem ela, as duas primeiras colunas são usadas). A tabela fica neste navegador e nunca é colocada no arquivo do projeto. Só os códigos que você atribui são salvos no arquivo. Você pode carregar uma tabela Uniclass mais nova do mesmo modo.
- {{ui:Dar aos elementos um código padrão pela sua classe}} dá a cada parede, piso, cobertura, porta, janela, escada, rampa, pilar, viga e peça de mobiliário um código Uniclass inicial da tabela Elementos/funções quando ele não tem um próprio. Os elementos que você desenhar depois também recebem.
- {{ui:Mostrar os códigos como colunas nas tabelas}} acrescenta uma coluna por sistema às tabelas Portas, Janelas, Paredes por tipo e Ambientes, e ao seu CSV. Uma linha de vários elementos mostra "varia" quando os códigos deles diferem.

## Bom saber

- Os códigos padrão são a escolha inicial do CadCraft, não da editora, e não foram verificados por um profissional. Confira-os com o padrão do seu projeto.
- No arquivo, um padrão é uma classificação real, marcada com o nome de relação "CadCraft default", e sai assim que o elemento ou o tipo recebe um código próprio.
- Códigos que um arquivo importado já tem são lidos e mostrados, qualquer que seja a grafia que o outro programa usou para o nome do sistema. Códigos de qualquer outro sistema (de um escritório próprio) são listados e deixados como estão.
- Os códigos são lidos de novo quando o arquivo é aberto, aqui ou em outro programa. Eles também são levados para a exportação IFC5 alfa (IFCX) quando essa opção de laboratório está ativa, exceto um código definido em uma cobertura.
- Ainda não implementado: uma árvore para navegar uma tabela nível por nível, códigos em pavimentos e ambientes como padrões do projeto, e a verificação de um código contra a edição indicada no arquivo.
