---
title: Verificar interferências
summary: Encontre onde elementos de um conjunto entram em outro — dutos atravessando vigas, paredes entrando em lajes — em um modelo ou em vários, com uma tolerância, e transforme uma interferência em um tópico.
keywords: interferência, detecção de interferências, verificação de interferências, interferência física, colisão, coordenação, sobreposição, tolerância, mep, estrutura
from: 9cb12346
---

## O que você vai fazer

Encontre os lugares onde dois conjuntos de elementos se chocam, por exemplo tudo do modelo de instalações contra a estrutura, depois examine cada um e mantenha como tópicos os que importam.

## Passos

1. Abra um modelo IFC e adicione os outros com {{ui:Adicionar um modelo…}} se estiver verificando em vários modelos. Veja [Ver vários modelos IFC juntos](topic:several-models).
2. Abra {{ui:Verificação de interferências}} no painel esquerdo.
3. Em {{ui:Verificar}} e {{ui:Contra}}, escolha dois conjuntos: os elementos que você selecionou, uma classe (em todos os modelos abertos), um conjunto de pesquisa salvo (veja [Encontrar elementos por classe, nome ou propriedade](topic:find)), ou tudo.
4. Defina quanta sobreposição ignorar, em metros. 0.01 ignora elementos que apenas se encostam.
5. Clique em {{ui:Executar}}. A verificação roda em segundo plano; {{ui:Cancelar}} a interrompe.
6. Clique em um resultado para vê-lo: os dois elementos são selecionados e exibidos, todo o resto fica transparente, e a vista dá zoom neles.
7. Clique em {{ui:Criar um tópico a partir dela}} sob um resultado para descrevê-lo na guia {{ui:Tópicos}}. Veja [Tópicos e arquivos BCF](topic:issues-bcf).

## O que você deve ver

- As interferências listadas com os nomes dos dois elementos (e seus arquivos, quando vários modelos estão abertos) e a profundidade da sobreposição, a mais profunda primeiro.
- Faces que apenas se tocam, como uma parede apoiada em uma laje ou uma porta em sua abertura, não são interferências.

## Bom saber

- Esta é uma verificação básica de interferência física: elementos cujas superfícies se cruzam. Um elemento totalmente oculto dentro de outro (um tubo embutido em uma parede) ainda não é encontrado.
- A profundidade é o quanto os limites dos dois elementos se sobrepõem no mínimo: uma orientação, não uma medida exata.

## Próximo

- [Medir distâncias, áreas de faces e localizações em 3D](topic:measure)
- [Ocultar, isolar e tornar transparentes os elementos](topic:hide-and-isolate)
