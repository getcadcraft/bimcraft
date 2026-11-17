---
title: Códigos de classificação (Uniclass, OmniClass, UniFormat)
summary: Atribuir um código de classificação a cada elemento e tipo, escolher os sistemas que o projeto usa, pesquisar as tabelas Uniclass que vêm com a aplicação, carregar as tabelas licenciadas do escritório e mostrar os códigos nos mapas. Os códigos são escritos no ficheiro IFC para outros programas.
keywords: classificação, classificar, código, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabela, código do elemento, código do tipo, código predefinido, IfcClassification, IfcClassificationReference, cobie, coluna de mapa, csv, licença, licenciamento
from: 222b94cd
---

## O que vai fazer

Colocar um código de classificação em paredes, pavimentos, coberturas, portas, janelas e tudo o resto do modelo, em até três sistemas lado a lado: Uniclass, OmniClass e UniFormat. Outras especialidades e outros programas dependem do código, e não do nome, por isso os códigos são guardados no ficheiro IFC como referências de classificação que qualquer programa BIM lê.

## Atribuir um código a um elemento

1. Selecione um elemento (ou vários) e abra **Propriedades**. Abra a secção {{ui:Classificação}}.
2. Escreva o código na caixa do respetivo sistema e prima Enter. Com uma lista de códigos carregada, escreva parte de um código ou algumas palavras («parede-cortina») e escolha entre as correspondências: o título do código é preenchido automaticamente.
3. {{ui:Aplica-se a}} indica onde vai o código: **Este elemento**, ou **O tipo (todos os elementos desse tipo)**. Um código num tipo de parede é lido por todas as paredes desse tipo, também pelas que forem desenhadas mais tarde.
4. {{ui:Limpar}} retira um código.

Por baixo de cada código, a secção indica de onde vem: definido neste elemento, a partir do tipo, ou o predefinido do projeto para a sua classe. O código próprio de um elemento prevalece sempre sobre o do tipo, e o do tipo sobre o predefinido. Com vários elementos selecionados, uma caixa que diz «varia» significa que não partilham o mesmo código; se escrever um, é atribuído a todos. Cada alteração é um passo de anulação.

Um código pode ser sempre escrito, esteja ou não carregada uma lista. Se não parecer um código desse sistema, ou não constar da lista carregada, uma sugestão diz isso e o código é mantido tal como foi escrito.

## Escolher os sistemas do projeto

Abra **Dados** na barra do modelo e escolha {{ui:Classificação}} (ou {{ui:Classificação do projeto…}} na secção Propriedades).

- Marque os sistemas que este projeto usa. Propriedades mostra então apenas esses.
- **Uniclass**: as tabelas Elementos/funções (EF), Sistemas (Ss) e Produtos (Pr) vêm com a aplicação. São © NBS, licenciadas sob Creative Commons Attribution-NoDerivatives 4.0, e são transmitidas sem alterações. A caixa de diálogo mostra a edição de cada tabela e o dia em que foi lida. Não são as tabelas mais recentes: o editor publica novas todos os trimestres no respetivo site.
- **OmniClass** e **UniFormat**: nenhuma lista de códigos vem com a aplicação, porque o editor não permite a transmissão das tabelas sem licença. Escreva qualquer código, ou carregue a tabela licenciada do escritório.
- {{ui:Carregar uma tabela (CSV)…}} lê a tabela do escritório a partir de um ficheiro CSV com uma coluna de código e uma coluna de título (um cabeçalho com os nomes Code, Number ou Identifier e Title, Name ou Description é encontrado automaticamente; sem ele, usam-se as duas primeiras colunas). A tabela fica neste navegador e nunca é incluída no ficheiro do projeto. Só os códigos atribuídos são guardados no ficheiro. Pode carregar uma tabela Uniclass mais recente da mesma forma.
- {{ui:Atribuir aos elementos um código predefinido pela sua classe}} dá a cada parede, pavimento, cobertura, porta, janela, escada, rampa, pilar, viga e peça de mobiliário um código Uniclass inicial, da tabela Elementos/funções, quando não tem código próprio. Os elementos desenhados depois também o recebem.
- {{ui:Mostrar os códigos como colunas nos mapas}} acrescenta uma coluna por sistema aos mapas de Portas, Janelas, Paredes por tipo e Compartimentos, e ao respetivo CSV. Uma linha de vários elementos mostra «varia» quando os códigos são diferentes.

## Bom saber

- Os códigos predefinidos são a escolha inicial do CadCraft, e não do editor, e não foram verificados por um profissional. Verifique-os contra o padrão do projeto.
- No ficheiro, um predefinido é uma classificação real, assinalada com o nome de relação «CadCraft default», e deixa de existir assim que o elemento ou o seu tipo recebe um código próprio.
- Os códigos que um ficheiro importado já tem são lidos e mostrados, qualquer que seja a grafia que o outro programa usou para o nome do sistema. Os códigos de qualquer outro sistema (de um escritório) são listados e deixados como estão.
- Os códigos são lidos de novo quando o ficheiro é aberto outra vez, aqui ou noutro programa. São também levados para a exportação IFC5 alfa (IFCX), quando essa opção de laboratório está ativa, exceto um código definido numa cobertura.
- Ainda não implementado: uma árvore para navegar numa tabela nível a nível, códigos em níveis e compartimentos como predefinidos do projeto, e a verificação de um código contra a edição indicada no ficheiro.
