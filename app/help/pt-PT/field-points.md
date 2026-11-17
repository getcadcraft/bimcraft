---
title: Pontos de implantação e verificação do como construído
summary: Numerar os locais que uma equipa implanta a partir do modelo — centros de pilares, extremidades de paredes, parafusos de ancoragem, bainhas, qualquer elemento que escolher —, escrevê-los para uma estação total, e depois ler de volta os pontos medidos pela equipa e ver o que está fora.
keywords: pontos de implantação, implantação, implantar, estação total, topografia, ficheiro de pontos, csv, txt, pnezd, penzd, xyz, northing, easting, cota, como construído, as-built, verificação, tolerância, desvio, parafusos de ancoragem, centros de pilares, extremidades de paredes, bainhas, coordenadas topográficas, conversão de mapa
from: acea9606
---

O separador {{ui:Points}} à direita cria os pontos que uma equipa implanta no local a partir do modelo aberto, e verifica os pontos que a equipa mede depois.

## Criar os pontos

1. Abra um modelo IFC e o separador {{ui:Points}}.
2. Marque o que implantar: **centros de pilares** (o pé do eixo central de cada pilar), **extremidades de paredes** (as duas extremidades do eixo de cada parede, na base), **parafusos de ancoragem**, **bainhas** (elementos cujo nome ou tipo indica bainha) e os **elementos escolhidos** (cada um no seu ponto de colocação — escolha-os primeiro na vista).
3. Escolha o primeiro número e um prefixo, as coordenadas, as unidades, as colunas e o ficheiro:
   - **Modelo**: as coordenadas próprias do ficheiro. **Grelha topográfica**: a grelha de mapa da georreferenciação do modelo (mostrada apenas quando o IFC tem uma conversão de mapa), em metros ou na unidade que escolher.
   - Colunas **PNEZD** (ponto, norte, este, cota, descrição), **PENZD** ou **XYZ**; **CSV** (vírgulas) ou **TXT** (tabulações).
4. Prima {{ui:Make points}}: a lista mostra os pontos e a vista marca-os a azul. {{ui:Download the points}} escreve o ficheiro.

Os pontos saem numa ordem fixa — por tipo e, depois, em linhas ao longo da planta — por isso criá-los de novo a partir do mesmo modelo dá os mesmos números. O ficheiro é o que o CivilCraft abre e o que o EXPORTPOINTS do CadCraft escreve: um ponto por linha, três casas decimais, e uma descrição entre aspas quando tem uma vírgula.

## Verificar os pontos como construídos

Quando a equipa enviar o que mediu, escolha uma **tolerância** em milímetros e a forma de emparelhar os pontos — por **número de ponto** (mantiveram os seus números) ou pela **leitura mais próxima** — e prima {{ui:Read as-built points…}}. Leia o ficheiro nas mesmas unidades e coordenadas com que o escreveu.

Cada ponto de projeto fica então **dentro** da tolerância, **fora** dela ou **não medido**, e qualquer leitura que ninguém pediu é **extra**. A tabela dá as diferenças na unidade que escolher na barra de ferramentas, com os pés mostrados como polegadas decimais (como construído menos projeto: este, norte, altura, e a distância em planta). A vista marca cada ponto a verde ou a vermelho com uma linha até à leitura, e a cinzento quando não foi medido. {{ui:Report (CSV)}} escreve a comparação completa.

Nada aqui altera o modelo. Ainda não implementado: implantação a partir de bordos de lajes, interseções de grelhas ou aberturas criadas automaticamente, e envio direto de pontos para um instrumento — use o ficheiro.
