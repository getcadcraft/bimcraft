---
title: Unidades na importação: o ficheiro indica as suas unidades, ou é perguntado primeiro
summary: Quando um ficheiro que traz indica as suas unidades, o BimCraft usa-as e diz isso. Quando não indica, o BimCraft pergunta antes de colocar algo e lembra-se da resposta para esse ficheiro.
keywords: unidades, importar, abrir, OBJ, STL, DWG, DXF, IFC, nuvem de pontos, item da biblioteca, milímetros, metros, polegadas, pés, escala, tamanho errado, demasiado grande, demasiado pequeno, 1000 vezes, perguntar, lembrado
from: f044e9bc
---

## O que vai fazer

Traga um ficheiro e certifique-se de que entra com o tamanho certo.

## Passos

1. Abra ou adicione o ficheiro como habitualmente: {{ui:Aberta}}, {{ui:Ficheiros}} da Biblioteca, {{ui:Nuvens de pontos}}, ou Construir › A partir de um desenho.
2. Se o ficheiro indicar as unidades, nada é perguntado. A linha de estado diz quais as unidades que o ficheiro indica.
3. Se não indicar, uma caixa de diálogo pergunta **Unidades de** o ficheiro. Escolha o que representa uma unidade no ficheiro e clique em {{ui:Usar estas unidades}}. Nada é colocado antes de responder.
4. {{ui:Cancelar}} (ou {{key:Esc}}) não traz nada.

## Que ficheiros indicam as suas unidades

- **IFC**: indica a sua unidade de comprimento, e "Aberto" diz qual. Um IFC que não indica nenhuma é perguntado antes de abrir; a sua resposta fica escrita no modelo, pelo que o ficheiro passa a indicá-la depois de guardar.
- **DWG e DXF**: as unidades de inserção do desenho. Um desenho sem elas é perguntado (ficheiros da Biblioteca, Construir › A partir de um desenho, terreno a partir de curvas de nível).
- **Listas de pontos** para terreno: não indicam unidades. É perguntado.
- **Nuvens de pontos**: LAS e LAZ com um sistema de coordenadas, E57, PTX e PLY indicam as suas. As outras são perguntadas.
- **OBJ e STL**: nunca indicam unidades. É perguntado.
- **glTF e GLB**: metros, pela regra do próprio formato.
- **Imagens**: não têm tamanho próprio. Uma imagem é ajustada à vista, e define-se o tamanho com Escalar por dois pontos. O tamanho indicado fica guardado para esse ficheiro: ao ser colocada de novo, entra com esse tamanho e a linha de estado diz isso.
- **O add-on Nuvens de pontos**: pergunta quando constrói uma nuvem cujo ficheiro não indica unidade, e etiqueta os números da nuvem na unidade que ela traz.

## Bom saber

- A resposta fica guardada para esse ficheiro (nome, tamanho e data) neste computador, em todas as aplicações do CadCraft. Na próxima vez que o mesmo ficheiro entrar, não é perguntado, e a linha de estado diz que foram usadas as unidades guardadas.
- Para voltar a ser perguntado: a paleta de comandos ({{key:Mod+K}}) › **Perguntar de novo as unidades dos ficheiros importados**.
- Uma lista de unidades que uma importação já tem (Unidades da Biblioteca, Unidades da barra da nuvem, Unidades do desenho em A partir de um desenho) continua a alterar as unidades depois. A lista Unidades da ferramenta de terreno é agora apenas o ponto de partida da pergunta.
