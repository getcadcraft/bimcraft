---
title: Exportar o modelo como Collada ou para o Google Earth
summary: Escrever os modelos IFC abertos num ficheiro Collada (.dae) para o Blender e outros programas 3D, ou num pacote do Google Earth (.kmz) colocado onde o modelo está no mapa.
keywords: collada, dae, kmz, kml, google earth, blender, exportar, geolocalização, georreferenciação, latitude, longitude, localização, programas 3D
from: 81cfec09
---

{{ui:Collada}} na barra de ferramentas (ou {{ui:Export Collada (.dae, .kmz)…}} no menu Ficheiro, nos estilos de menu e de friso) escreve o que está aberto como Collada 1.4.1: cada modelo que está visível, incluindo os federados onde os colocou.

## Exportar

1. Escolha {{ui:Collada}}.
2. Escolha o formato:
   - {{ui:Ficheiro Collada (.dae), para o Blender e outros programas 3D}}.
   - {{ui:Pacote do Google Earth (.kmz): o modelo colocado onde está no mapa}}. Só é oferecido quando o modelo tem uma localização.
3. Escolha as opções e depois {{ui:Exportar}}. O ficheiro transfere-se, e a barra de estado indica quantos elementos entraram.

| Opção | O que faz |
|---|---|
| {{ui:Escrever a localização no ficheiro}} | Acrescenta ao .dae a latitude, a longitude, a altura e a orientação da origem do ficheiro |
| {{ui:Altura}} | {{ui:No terreno: o nível 0 do modelo assenta no terreno}}, ou {{ui:A altura do próprio modelo acima do nível do mar}} |
| {{ui:Incluir compartimentos e espaços}} | Os espaços entram também (ficam de fora por omissão) |
| {{ui:Incluir elementos ocultos}} | Os elementos ocultos também são escritos (por omissão só se escreve o que está visível) |

## O que há no ficheiro

| No modelo | No ficheiro Collada |
|---|---|
| Edifício, pisos | Nós aninhados, pisos por ordem de cota; elementos sem piso em "Não posicionado" |
| Cada elemento | Um nó com a sua própria malha, com o nome do modelo (o seu nome, ou então a classe e a etiqueta) |
| Classe, GlobalId, tipo predefinido | Nos dados extra do nó (perfil IFC), com o nome exato (perfil ModelCraft) |
| Cores | Materiais, com transparência |
| Unidades e eixos | Metros, Z para cima. O nível 0 do modelo à frente está à altura 0 |

O modelo fica perto da origem no solo, para que os programas que trabalham em precisão simples o mostrem sem tremor. O ModelCraft escreve os seus ficheiros Collada com o mesmo escritor e abre estes ficheiros com os nomes dos seus elementos.

## De onde vem a localização

O modelo à frente dá a localização, da mesma forma que {{ui:Medir}} calcula a latitude e a longitude de um ponto:

- Uma conversão de mapa (IFC4 IfcMapConversion, ou os conjuntos de propriedades IFC2X3) através do sistema de coordenadas do modelo. Um sistema que escolheu para o modelo prevalece sobre o que o ficheiro indica.
- Caso contrário, a latitude e a longitude do local (aproximadas: suficientes para todo o local).

A orientação é medida, não presumida: tem em conta a rotação do mapa, o norte verdadeiro e a convergência do mapa. Para dar uma localização a um modelo, use {{ui:Origem do mapa…}} em Medir.

## Noutros programas

- **Google Earth** lê o .kmz: o modelo aparece na localização, virado para o norte. Um .dae simples não tem um sítio de onde o Google Earth leia uma localização; use o .kmz.
- **Blender** (4.x e anteriores): Ficheiro, Importar, Collada (.dae). Cada elemento entra como o seu próprio objeto, com o seu material. A localização fica guardada nos dados extra do ficheiro, que o Blender não lê. O Blender 5.0 deixou de ter o seu importador Collada incorporado; nesse caso, use {{ui:USD}} ou a exportação glTF, ou abra o .dae no Blender 4.5 e guarde um .blend.

Os nossos testes verificam cada ficheiro contra o esquema Collada 1.4.1 e voltam a lê-lo com um leitor Collada independente. Ainda não foi aberto no Blender nem no Google Earth.
