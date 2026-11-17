---
title: Unidades ao importar: um arquivo informa as próprias unidades, ou você é perguntado primeiro
summary: Quando um arquivo que você importa informa suas unidades, o BimCraft as usa e informa isso. Quando não informa, o BimCraft pergunta antes de posicionar qualquer coisa e lembra sua resposta para aquele arquivo.
keywords: unidades, importar, abrir, OBJ, STL, DWG, DXF, IFC, nuvem de pontos, item da biblioteca, milímetros, metros, polegadas, pés, escala, tamanho errado, muito grande, muito pequeno, 1000 vezes, perguntar, lembrado
from: f044e9bc
---

## O que você vai fazer

Importe um arquivo e confirme que ele entra no tamanho certo.

## Passos

1. Abra ou adicione o arquivo como de costume: {{ui:Aberto}}, {{ui:Arquivos}} da Biblioteca, {{ui:Nuvens de pontos}}, ou Construir › A partir de um desenho.
2. Se o arquivo informar suas unidades, nada é perguntado. A linha de status diz quais unidades o arquivo informa.
3. Se não informar, uma caixa de diálogo pergunta **Unidades de** o arquivo. Escolha o que é uma unidade no arquivo e clique em {{ui:Usar estas unidades}}. Nada é posicionado antes da sua resposta.
4. {{ui:Cancelar}} (ou {{key:Esc}}) não importa nada.

## Quais arquivos informam suas unidades

- **IFC**: informa sua unidade de comprimento, e "Aberto" diz qual. Um IFC que não informa nenhuma é perguntado antes de abrir; sua resposta é gravada no modelo, de modo que o arquivo passa a informá-la quando você salvar.
- **DWG e DXF**: as unidades de inserção do desenho. Um desenho sem elas é perguntado (arquivos da Biblioteca, Construir › A partir de um desenho, terreno a partir de curvas de nível).
- **Listas de pontos** para terreno: não informam unidades. Você é perguntado.
- **Nuvens de pontos**: LAS e LAZ com sistema de coordenadas, E57, PTX e PLY informam as suas. As outras são perguntadas.
- **OBJ e STL**: nunca informam unidades. Você é perguntado.
- **glTF e GLB**: metros, pela regra do próprio formato.
- **Imagens**: não têm tamanho próprio. Uma imagem é ajustada à vista, e você define o tamanho dela com Escalar por dois pontos. O tamanho informado é lembrado para aquele arquivo: ao ser posicionada de novo, a imagem entra nesse tamanho e a linha de status informa isso.
- **O complemento Nuvens de pontos**: pergunta quando você cria uma nuvem cujo arquivo não informa unidade, e rotula os números da nuvem na unidade que ela carrega.

## Bom saber

- A resposta é lembrada para aquele arquivo (nome, tamanho e data) neste computador, em todos os aplicativos CadCraft. Na próxima vez que o mesmo arquivo for importado, você não é perguntado, e a linha de status informa que as unidades lembradas foram usadas.
- Para ser perguntado de novo: a paleta de comandos ({{key:Mod+K}}) › **Perguntar de novo as unidades dos arquivos importados**.
- Uma lista de unidades que uma importação já tem (Unidades da Biblioteca, Unidades da barra de nuvens, Unidades do desenho em A partir de um desenho) ainda altera as unidades depois. A lista Unidades da ferramenta de terreno agora é apenas o ponto em que a pergunta começa.
