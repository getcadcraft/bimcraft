---
title: Verificar conflitos
summary: Encontrar onde elementos de um conjunto embatem em elementos de outro — condutas em vigas, paredes em lajes — num modelo ou em vários, com uma tolerância, e transformar um conflito numa questão.
keywords: conflito, deteção de conflitos, verificação de conflitos, conflito rígido, interferência, colisão, coordenação, sobreposição, tolerância, mep, estrutura
from: 9cb12346
---

## O que vai fazer

Encontre os sítios onde dois conjuntos de elementos se atravessam, por exemplo tudo o que está no modelo de instalações contra a estrutura, e depois veja cada um e mantenha como questões os que importam.

## Passos

1. Abra um modelo IFC e acrescente os outros com {{ui:Adicionar um modelo…}} se quiser verificar entre modelos. Veja [Ver vários modelos IFC em conjunto](topic:several-models).
2. Abra {{ui:Deteção de conflitos}} no painel da esquerda.
3. Em {{ui:Verificar}} e {{ui:Contra}}, escolha dois conjuntos: os elementos que selecionou, uma classe (em todos os modelos abertos), um conjunto de pesquisa guardado (veja [Encontrar elementos por classe, nome ou propriedade](topic:find)), ou tudo.
4. Defina quanta sobreposição ignorar, em metros. 0.01 ignora os elementos que apenas se tocam.
5. Clique em {{ui:Executar}}. A verificação corre em segundo plano; {{ui:Cancelar}} interrompe-a.
6. Clique num resultado para o ver: os dois elementos são selecionados e mostrados, tudo o resto fica em transparência, e a vista faz zoom sobre eles.
7. Clique em {{ui:Criar uma questão}} sob um resultado para o registar no separador {{ui:Questões}}. Veja [Questões e ficheiros BCF](topic:issues-bcf).

## O que deve ver

- Os conflitos listados com os nomes dos dois elementos (e os respetivos ficheiros, quando há vários modelos abertos) e a profundidade da sobreposição, a mais funda primeiro.
- Faces que apenas se tocam, como uma parede assente numa laje ou uma porta no respetivo vão, não são conflitos.

## Bom saber

- Esta é uma verificação básica de conflito rígido: elementos cujas superfícies se cruzam. Um elemento totalmente escondido dentro de outro (uma tubagem embutida numa parede) ainda não é detetado.
- A profundidade é o quanto se sobrepõem, no mínimo, os limites dos dois elementos: é um guia, e não uma medição exata.

## Seguinte

- [Medir distâncias, áreas de faces e localizações em 3D](topic:measure)
- [Ocultar, isolar e tornar transparentes os elementos](topic:hide-and-isolate)
