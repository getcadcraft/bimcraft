---
title: Exportar o modelo como Collada ou para Google Earth
summary: Escribe os modelos IFC abertos como un ficheiro Collada (.dae) para Blender e outros programas 3D, ou como un paquete de Google Earth (.kmz) colocado onde está o modelo no mapa.
keywords: collada, dae, kmz, kml, google earth, blender, exportar, xeolocalización, georreferencia, latitude, lonxitude, localización, programas 3d
from: 81cfec09
---

{{ui:Collada}} na barra de ferramentas (ou {{ui:Exportar Collada (.dae, .kmz)…}} no menú Ficheiro nos estilos de menú e cinta) escribe o que está aberto como Collada 1.4.1: cada modelo que se amosa, e os federados nos lugares onde os colocou.

## Exportar

1. Escolla {{ui:Collada}}.
2. Escolla o formato:
   - {{ui:Ficheiro Collada (.dae), para Blender e outros programas 3D}}.
   - {{ui:Paquete de Google Earth (.kmz): o modelo colocado onde está no mapa}}. Só se ofrece cando o modelo ten localización.
3. Escolla as opcións e despois {{ui:Exportar}}. O ficheiro descárgase e a barra de estado indica cantos elementos se incluíron.

| Opción | Función |
|---|---|
| {{ui:Escribir a localización no ficheiro}} | Engade a latitude, a lonxitude, a altura e o rumbo da orixe do ficheiro ao .dae |
| {{ui:Altura}} | {{ui:Sobre o terreo: o nivel 0 do modelo asenta sobre o terreo}}, ou {{ui:A altura propia do modelo sobre o nivel do mar}} |
| {{ui:Incluír cuartos e espazos}} | Os espazos tamén se escriben (quedan fóra por defecto) |
| {{ui:Incluír elementos ocultos}} | Escríbense tamén os elementos que ocultou (por defecto só se escribe o que se ve) |

## Que contén o ficheiro

| No modelo | No ficheiro Collada |
|---|---|
| Edificio, pisos | Nodos anidados, pisos por orde de cota; os elementos sen piso aparecen en "Unplaced" |
| Cada elemento | Un nodo con a súa propia malla, co nome do modelo (o seu nome, ou se non, a súa clase e etiqueta) |
| Clase, GlobalId, tipo predefinido | Nos datos extra do nodo (perfil IFC), co nome exacto (perfil ModelCraft) |
| Cores | Materiais, coa transparencia |
| Unidades e eixos | Metros, Z cara arriba. O nivel 0 do modelo á fronte está á altura 0 |

O modelo queda preto da orixe no terreo, así que os programas que traballan en precisión simple o amosan sen tremores. ModelCraft escribe os seus ficheiros Collada co mesmo escritor e abre estes ficheiros cos nomes dos seus elementos.

## De onde vén a localización

O modelo á fronte dá a localización, do mesmo xeito que {{ui:Medir}} calcula a latitude e a lonxitude dun punto:

- Unha conversión de mapa (IFC4 IfcMapConversion, ou os conxuntos de propiedades de IFC2X3) a través do sistema de coordenadas do modelo. Prevalece un sistema que escolleu para o modelo sobre o que indica o ficheiro.
- Se non, a latitude e a lonxitude do emprazamento (aproximadas: valen para todo o emprazamento).

O rumbo mídese, non se supón: ten en conta a rotación do mapa, o norte verdadeiro e a converxencia do mapa. Para dar unha localización a un modelo, use {{ui:Orixe no mapa…}} en Medir.

## Noutros programas

- **Google Earth** le o .kmz: o modelo aparece na localización, orientado ao norte. Un .dae simple non ten onde o Google Earth lea unha localización; use o .kmz.
- **Blender** (4.x e anteriores): File, Import, Collada (.dae). Cada elemento entra como un obxecto propio co seu material. A localización consérvase nos datos extra do ficheiro, que Blender non lee. Blender 5.0 eliminou o seu importador de Collada integrado; nese caso, use {{ui:USD}} ou a exportación glTF no seu lugar, ou abra o .dae en Blender 4.5 e garde un .blend.

As nosas probas comprobán cada ficheiro contra o esquema Collada 1.4.1 e volven lelo cun lector de Collada independente. Non o abriron en Blender nin en Google Earth.
