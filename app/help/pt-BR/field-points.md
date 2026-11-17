---
title: Pontos para locação e verificações as built
summary: Numere os locais que uma equipe de campo vai locar a partir do modelo — centros de pilares, extremidades de paredes, chumbadores, luvas, qualquer elemento que você escolher — grave-os para uma estação total e depois leia de volta os pontos as built da equipe e veja o que está fora.
keywords: pontos de layout, locação, locar, estação total, levantamento, arquivo de pontos, csv, txt, pnezd, penzd, xyz, norte, leste, cota, as built, verificação, tolerância, desvio, chumbadores, centros de pilares, extremidades de paredes, luvas, coordenadas topográficas, conversão cartográfica
from: acea9606
---

O grupo {{ui:Points}} à direita cria os pontos que uma equipe loca em campo a partir do modelo aberto, e verifica os pontos que ela mede depois.

## Criar os pontos

1. Abra um modelo IFC e a aba {{ui:Points}}.
2. Marque o que locar: **centros de pilares** (o pé da linha central de cada pilar), **extremidades de paredes** (as duas pontas do eixo de cada parede, na base), **chumbadores**, **luvas** (elementos cujo nome ou tipo indica luva) e os **elementos escolhidos** (cada um no seu ponto de inserção — selecione-os antes na vista).
3. Escolha o primeiro número e um prefixo, as coordenadas, as unidades, as colunas e o arquivo:
   - **Modelo**: as coordenadas próprias do arquivo. **Grade topográfica**: a grade cartográfica da georreferência do modelo (mostrada apenas quando o IFC tem uma conversão cartográfica), em metros ou na unidade que você escolher.
   - Colunas **PNEZD** (ponto, norte, leste, cota, descrição), **PENZD** ou **XYZ**; **CSV** (vírgulas) ou **TXT** (tabulações).
4. Clique em {{ui:Make points}}: a lista mostra os pontos e a vista os marca em azul. {{ui:Download the points}} grava o arquivo.

Os pontos saem em ordem fixa — por tipo e depois em linhas ao longo da planta —, então criá-los de novo a partir do mesmo modelo gera os mesmos números. O arquivo é o que o CivilCraft abre e o que o EXPORTPOINTS do CadCraft grava: um ponto por linha, três casas decimais, e uma descrição entre aspas quando contiver vírgula.

## Verificar os pontos as built

Quando a equipe enviar o que mediu, escolha uma **tolerância** em milímetros e como parear os pontos — por **número do ponto** (eles mantiveram os seus números) ou pelo **tiro mais próximo** — e clique em {{ui:Read as-built points…}}. Leia o arquivo nas mesmas unidades e coordenadas em que você o gravou.

Cada ponto de projeto fica então **dentro** da tolerância, **fora** dela, **não medido**, e qualquer tiro que ninguém pediu é **extra**. A tabela dá as diferenças na unidade que você escolher na barra de ferramentas, com pés mostrados como polegadas decimais (as built menos projeto: leste, norte, altura e a distância em planta). A vista marca cada ponto em verde ou vermelho, com uma linha até o tiro, e em cinza quando ele não foi medido. {{ui:Report (CSV)}} grava a comparação completa.

Nada disso altera o modelo. Ainda não implementado: locação a partir de bordas de lajes, interseções de grade ou aberturas criadas automaticamente, e envio de pontos diretamente a um instrumento — use o arquivo.
