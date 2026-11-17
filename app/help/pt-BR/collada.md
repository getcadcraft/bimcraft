---
title: Exportar o modelo como Collada ou para o Google Earth
summary: Grave os modelos IFC abertos como arquivo Collada (.dae) para Blender e outros programas 3D, ou como pacote do Google Earth (.kmz) posicionado onde o modelo está no mapa.
keywords: collada, dae, kmz, kml, google earth, blender, exportar, geolocalização, georreferência, latitude, longitude, localização, programas 3d
from: 81cfec09
---

{{ui:Collada}} na barra de ferramentas (ou {{ui:Exportar Collada (.dae, .kmz)…}} no menu Arquivo dos estilos de menu e faixa de opções) grava o que está aberto como Collada 1.4.1: todo modelo que está visível, e os modelos federados onde você os posicionou.

## Exportar

1. Escolha {{ui:Collada}}.
2. Escolha o formato:
   - {{ui:Arquivo Collada (.dae), para Blender e outros programas 3D}}.
   - {{ui:Pacote do Google Earth (.kmz): o modelo posicionado onde está no mapa}}. Só é oferecido quando o modelo tem localização.
3. Escolha as opções e depois {{ui:Exportar}}. O arquivo é baixado, e a barra de status informa quantos elementos entraram.

| Opção | O que faz |
|---|---|
| {{ui:Gravar a localização no arquivo}} | Adiciona a latitude, a longitude, a altura e o rumo da origem do arquivo ao .dae |
| {{ui:Altura}} | {{ui:No terreno: o nível 0 do modelo fica sobre o terreno}}, ou {{ui:A altura do próprio modelo acima do nível do mar}} |
| {{ui:Incluir ambientes e espaços}} | Os espaços também entram (ficam de fora por padrão) |
| {{ui:Incluir elementos ocultos}} | Os elementos que você ocultou também são gravados (por padrão, só o que você vê é gravado) |

## O que há no arquivo

| No modelo | No arquivo Collada |
|---|---|
| Edifício, pavimentos | Nós aninhados, pavimentos em ordem de elevação; elementos sem pavimento em "Não posicionado" |
| Cada elemento | Um nó com a própria malha, nomeado como no modelo (o nome dele, senão a classe e a etiqueta) |
| Classe, GlobalId, tipo predefinido | Nos dados extras do nó (perfil IFC), com o nome exato (perfil ModelCraft) |
| Cores | Materiais, com transparência |
| Unidades e eixos | Metros, Z para cima. O nível 0 do modelo da frente fica na altura 0 |

O modelo fica perto da origem sobre o terreno, então programas que trabalham com precisão simples o mostram sem tremores. O ModelCraft grava seus arquivos Collada com o mesmo gravador e abre esses arquivos com os nomes dos seus elementos.

## De onde vem a localização

O modelo da frente fornece a localização, do mesmo modo como {{ui:Medir}} calcula a latitude e a longitude de um ponto:

- Uma conversão de mapa (IFC4 IfcMapConversion, ou os conjuntos de propriedades do IFC2X3) pelo sistema de coordenadas do modelo. Um sistema que você escolheu para o modelo tem prioridade sobre o que o arquivo indica.
- Caso contrário, a latitude e a longitude do local da obra (aproximadas: suficientes para todo o local).

O rumo é medido, não presumido: leva em conta a rotação do mapa, o norte verdadeiro e a convergência do mapa. Para dar uma localização a um modelo, use {{ui:Origem no mapa…}} em Medir.

## Em outros programas

- **Google Earth** lê o .kmz: o modelo aparece no local, voltado para o norte. Um .dae comum não tem de onde o Google Earth leia uma localização; use o .kmz.
- **Blender** (4.x e anteriores): Arquivo, Importar, Collada (.dae). Cada elemento entra como um objeto próprio com seu material. A localização fica guardada nos dados extras do arquivo, que o Blender não lê. O Blender 5.0 removeu o importador Collada integrado; nele, use {{ui:USD}} ou a exportação glTF, ou abra o .dae no Blender 4.5 e salve um .blend.

Os nossos testes verificam cada arquivo contra o esquema Collada 1.4.1 e o leem de volta com um leitor Collada independente. Não o abrimos no Blender nem no Google Earth.
