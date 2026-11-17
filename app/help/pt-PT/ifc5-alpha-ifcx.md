---
title: Abrir e exportar IFC5 alfa (ficheiros IFCX)
summary: Uma opção de laboratório para o formato de ficheiro IFC5 alfa (.ifcx): abrir um ficheiro com as suas camadas, ver o que a leitura não conseguiu verificar e exportar os modelos abertos. O formato ainda está a mudar, por isso leia primeiro.
keywords: ifc5, ifcx, alfa, buildingsmart, json, camadas, esquema, laboratório, quantidades, qto, exportar, importar
from: cffe1669
---

IFC5 alfa (ficheiro com a extensão {{ui:.ifcx}}) é o formato de ficheiro que a buildingSMART ainda está a desenhar. Não é definitivo: os ficheiros, e a nossa leitura deles, podem mudar. Por isso é uma opção de laboratório, e convém ler primeiro.

## Ativar

1. Escolha {{ui:Definições}} e depois a secção {{ui:IFC5 alfa (IFCX)}} do separador BimCraft.
2. Marque {{ui:IFC5 alfa (IFCX) - o formato ainda está a mudar; leia primeiro}}.

Está desativado por omissão. Enquanto estiver desativado, um ficheiro .ifcx é recusado com uma frase que remete para aqui. {{ui:Abrir IFC5 alfa (.ifcx)…}} e o botão de exportação {{ui:IFC5 alfa}} aparecem quando estiver ativado.

## Abrir

- Escolha um ficheiro .ifcx com {{ui:Abrir um ficheiro ou uma pasta}} (substitui o modelo aberto, depois da pergunta habitual sobre alterações), ou
- escolha {{ui:Abrir IFC5 alfa (.ifcx)…}} e selecione vários ficheiros de uma vez: o ficheiro, as suas camadas e os ficheiros de esquema que importa. Com um modelo já aberto, o ficheiro é **acrescentado ao lado dele**; o x na lista de modelos remove-o de novo, e isso é a anulação.

Um ficheiro IFCX lista nós (um caminho, os seus filhos, o que herdam, os seus atributos). Vários ficheiros podem descrever o mesmo nó: um ficheiro posterior (uma camada) substitui os atributos de um anterior, e um filho nulo remove um filho. O BimCraft compõe-os e depois desenha o resultado como um pequeno modelo IFC4: projeto, implantação, edifício, pisos e elementos, com nomes, classes, propriedades, quantidades, cores e malhas.

Nada é transferido da rede. Os ficheiros de esquema que um ficheiro importa (por exemplo `ifc@v5a.ifcx`) só são usados se os tiver selecionado com o ficheiro; caso contrário, o relatório di-lo e os atributos são lidos sem verificação de tipo.

### O relatório

Depois de abrir, um relatório lista o que a leitura encontrou: dados que não correspondem ao respetivo esquema, ficheiros de esquema não indicados, atributos sem significado IFC aqui. Os atributos sem correspondência são **mantidos** no modelo, não descartados, e são escritos de volta na exportação.

## O que se transforma em quê

| No ficheiro IFCX | No BimCraft |
|---|---|
| Um nó com uma classe IFC (projeto, implantação, edifício, piso, parede …) | O elemento IFC4 correspondente; uma classe que esta leitura não conhece torna-se um proxy de elemento de construção |
| O nome que o nó tem sob o seu pai | O nome do elemento |
| Atributos com um tipo de quantidade (Comprimento, Área, Volume, Massa …) | Um conjunto de quantidades IFC4 chamado `Qto_IFCX` (as quantidades IFC4 continuam a ser conjuntos IFC4 `Qto_*`) |
| Outros atributos de propriedade | Um conjunto de propriedades chamado `Pset_IFCX` |
| Atributos de malha e de transformação | Os triângulos e a colocação do elemento; as malhas invisíveis não são desenhadas |
| Cor, opacidade, material, classificação | Estilo de superfície, material e classificação do elemento |

As unidades são tomadas como metros, com Z para cima: a versão alfa indica que as unidades serão documentadas mais tarde.

## Exportar

Escolha {{ui:IFC5 alfa}} na barra de ferramentas, leia a nota e depois {{ui:Exportar .ifcx}}. O ficheiro tem o nosso cabeçalho (autor CadCraft, versão ifcx_alpha) e indica por si próprio que é o formato alfa. Cada modelo é escrito nas suas próprias coordenadas do ficheiro, em metros, com nomes, classes, conjuntos de propriedades, quantidades (como atributos com o seu tipo), cores e triângulos. As camadas e a herança são escritas achatadas. Verifique o ficheiro no programa para onde o envia.

## Limitações

- A geometria curva (curvas, superfícies) não é lida: apenas malhas de triângulos.
- As portas e janelas embutidas numa parede são colocadas no piso; a parede de onde vêm não fica ligada.
- Os nomes de conjuntos `Qto_*` do IFC4 são mantidos como grupos de atributos próprios (`cadcraft::qto::…`); o esquema alfa padrão tem apenas alguns nomes de quantidades.
- O formato pode mudar sem aviso; um ficheiro feito hoje pode não ler amanhã.
