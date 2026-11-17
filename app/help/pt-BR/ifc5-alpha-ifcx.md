---
title: Abrir e exportar arquivos IFC5 alfa (IFCX)
summary: Uma opção de laboratório para o formato de arquivo IFC5 alfa (.ifcx): abra um arquivo com suas camadas, veja o que a leitura não conseguiu verificar e exporte os modelos abertos. O formato ainda está mudando, então leia primeiro.
keywords: ifc5, ifcx, alfa, buildingsmart, json, camadas, esquema, laboratório, quantidades, qto, exportar, importar
from: cffe1669
---

IFC5 alfa (arquivo com extensão {{ui:.ifcx}}) é o formato de arquivo que a buildingSMART ainda está projetando. Ele não é definitivo: os arquivos, e nossa leitura deles, podem mudar. Por isso esta é uma opção de laboratório, e por isso a leitura vem primeiro.

## Ativar

1. Escolha {{ui:Configurações}} e depois a seção {{ui:IFC5 alfa (IFCX)}} da aba BimCraft.
2. Marque {{ui:IFC5 alfa (IFCX) - o formato ainda está mudando; leia primeiro}}.

Vem desativado por padrão. Enquanto estiver desativado, um arquivo .ifcx é recusado com uma frase que aponta para cá. {{ui:Abrir IFC5 alfa (.ifcx)…}} e o botão de exportação {{ui:IFC5 alfa}} aparecem quando a opção está ativada.

## Abrir

- Escolha um arquivo .ifcx com {{ui:Abrir um arquivo ou pasta}} (ele substitui o modelo aberto, após a pergunta habitual sobre alterações), ou
- escolha {{ui:Abrir IFC5 alfa (.ifcx)…}} e selecione vários arquivos juntos: o arquivo, suas camadas e os arquivos de esquema que ele importa. Com um modelo já aberto, o arquivo é **adicionado ao lado dele**; o x na lista de modelos o remove novamente, o que equivale a desfazer.

Um arquivo IFCX lista nós (um caminho, seus filhos, o que herdam, seus atributos). Vários arquivos podem descrever o mesmo nó: um arquivo posterior (uma camada) sobrepõe os atributos de um anterior, e um filho nulo remove um filho. O BimCraft os compõe e então desenha o resultado como um pequeno modelo IFC4: projeto, terreno, edifício, pavimentos e elementos, com nomes, classes, propriedades, quantidades, cores e malhas.

Nada é buscado na rede. Os arquivos de esquema que um arquivo importa (por exemplo `ifc@v5a.ifcx`) são usados somente se você os tiver escolhido junto com o arquivo; caso contrário, o relatório informa isso e os atributos são lidos sem verificação de tipo.

### O relatório

Após a abertura, um relatório lista o que a leitura encontrou: dados que não correspondem ao seu esquema, arquivos de esquema não fornecidos, atributos sem significado IFC aqui. Atributos sem mapeamento são **mantidos** no modelo, não descartados, e são gravados de volta na exportação.

## O que vira o quê

| No arquivo IFCX | No BimCraft |
|---|---|
| Um nó com uma classe IFC (projeto, terreno, edifício, pavimento, parede …) | O elemento IFC4 correspondente; uma classe que esta leitura não conhece vira um proxy de elemento de construção |
| O nome que o nó tem sob o seu pai | O nome do elemento |
| Atributos com um tipo de quantidade (Length, Area, Volume, Mass …) | Um conjunto de quantidades IFC4 chamado `Qto_IFCX` (quantidades IFC4 continuam como conjuntos IFC4 `Qto_*`) |
| Outros atributos de propriedade | Um conjunto de propriedades chamado `Pset_IFCX` |
| Atributos de malha e de transformação | Os triângulos e a posição do elemento; malhas invisíveis não são desenhadas |
| Cor, opacidade, material, classificação | Estilo de superfície, material e classificação do elemento |

As unidades são tomadas como metros, com Z para cima: o alfa diz que as unidades serão documentadas depois.

## Exportar

Escolha {{ui:IFC5 alfa}} na barra de ferramentas, leia a nota e depois {{ui:Exportar .ifcx}}. O arquivo tem nosso próprio cabeçalho (autor CadCraft, versão ifcx_alpha) e informa em si mesmo que é o formato alfa. Cada modelo é gravado em suas próprias coordenadas, em metros, com nomes, classes, conjuntos de propriedades, quantidades (como atributos com seu tipo), cores e triângulos. Camadas e herança são gravadas já achatadas. Verifique o arquivo no programa para o qual você o envia.

## Limites

- Geometria curva (curvas, superfícies) não é lida: apenas malhas de triângulos.
- Portas e janelas aninhadas em uma parede são posicionadas no pavimento; a parede de onde vieram não fica vinculada.
- Os nomes de conjuntos IFC4 `Qto_*` são mantidos como grupos de atributos próprios (`cadcraft::qto::…`); o esquema alfa padrão tem apenas alguns nomes de quantidade.
- O formato pode mudar; um arquivo feito hoje pode não ser lido amanhã.
