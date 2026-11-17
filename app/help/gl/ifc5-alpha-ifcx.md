---
title: Abrir e exportar IFC5 alfa (ficheiros IFCX)
summary: Unha opción de laboratorio para o formato de ficheiro IFC5 alfa (.ifcx): abra un ficheiro cas súas capas, vexa o que a lectura non puido comprobar e exporte os modelos abertos. O formato aínda cambia, polo que hai que ler primeiro.
keywords: ifc5, ifcx, alfa, buildingsmart, json, capas, esquema, laboratorio, cantidades, qto, exportar, importar
from: cffe1669
---

IFC5 alfa (ficheiro con extensión {{ui:.ifcx}}) é o formato de ficheiro que buildingSMART aínda está a deseñar. Non é definitivo: os ficheiros, e a nosa lectura deles, poden cambiar. Por iso isto é unha opción de laboratorio e por iso a lectura vén primeiro.

## Activar

1. Escolla {{ui:Settings}} e logo a sección {{ui:IFC5 alpha (IFCX)}} da lapela BimCraft.
2. Marque {{ui:IFC5 alpha (IFCX) - the format is still changing; read first}}.

De forma predeterminada está desactivado. Mentres está desactivado, un ficheiro .ifcx recházase cunha frase que remite a esta páxina. {{ui:Open IFC5 alpha (.ifcx)…}} e o botón de exportación {{ui:IFC5 alpha}} aparecen cando está activado.

## Abrir

- Escolla un ficheiro .ifcx con {{ui:Open a file or folder}} (substitúe o modelo aberto, despois da pregunta habitual sobre as edicións), ou
- escolla {{ui:Open IFC5 alpha (.ifcx)…}} e seleccione varios ficheiros xuntos: o ficheiro, as súas capas e os ficheiros de esquema que importa. Con un modelo xa aberto, o ficheiro **engádese xunto a el**; a x da lista de modelos quítao de novo, que é o desfacer.

Un ficheiro IFCX lista nodos (unha ruta, os seus fillos, o que herda, os seus atributos). Varios ficheiros poden describir o mesmo nodo: un ficheiro posterior (unha capa) anula os atributos dun anterior, e un fillo nulo elimina un fillo. BimCraft compónos e logo debuxa o resultado como un pequeno modelo IFC4: proxecto, emprazamento, edificio, pisos e elementos, con nomes, clases, propiedades, cantidades, cores e mallas.

Non se descarga nada da rede. Os ficheiros de esquema que importa un ficheiro (por exemplo `ifc@v5a.ifcx`) úsanse só se os escolleu co ficheiro; se non, o informe indícao e os atributos léense sen comprobación de tipo.

### O informe

Despois de abrir, un informe enumera o que atopou a lectura: datos que non coinciden co seu esquema, ficheiros de esquema non indicados, atributos sen significado IFC aquí. Os atributos sen asignación **consérvanse** no modelo, non se descartan, e escríbense de novo ao exportar.

## Que se converte en que

| No ficheiro IFCX | En BimCraft |
|---|---|
| Un nodo cunha clase IFC (proxecto, emprazamento, edificio, piso, muro …) | O elemento IFC4 correspondente; unha clase que esta lectura non coñece convértese nun proxy de elemento de edificio |
| O nome que o nodo ten baixo o seu pai | O nome do elemento |
| Atributos cun tipo de cantidade (lonxitude, superficie, volume, masa …) | Un conxunto de cantidades IFC4 chamado `Qto_IFCX` (os conxuntos de cantidades IFC4 seguen sendo conxuntos IFC4 `Qto_*`) |
| Outros atributos de propiedade | Un conxunto de propiedades chamado `Pset_IFCX` |
| Atributos de malla e transformación | Os triángulos e a colocación do elemento; as mallas invisibles non se debuxan |
| Cor, opacidade, material, clasificación | Estilo de superficie, material e clasificación do elemento |

As unidades tómanse como metros, con Z cara arriba: o alfa di que as unidades se documentarán máis tarde.

## Exportar

Escolla {{ui:IFC5 alpha}} na barra de ferramentas, lea a nota e logo prema {{ui:Export .ifcx}}. O ficheiro leva a nosa propia cabeceira (autor CadCraft, versión ifcx_alpha) e indica por si mesmo que é o formato alfa. Cada modelo escríbese nas súas propias coordenadas do ficheiro, en metros, con nomes, clases, conxuntos de propiedades, cantidades (como atributos co seu tipo), cores e triángulos. As capas e a herdanza escríbense aplanadas. Comprobe o ficheiro no programa ao que o envía.

## Límites

- A xeometría curva (curvas, superficies) non se lee: só as mallas de triángulos.
- As portas e xanelas aniñadas nun muro colócanse no piso; o muro do que proceden non se enlaza.
- Os nomes de conxunto `Qto_*` IFC4 consérvanse como grupos de atributos propios (`cadcraft::qto::…`); o esquema alfa estándar só ten uns poucos nomes de cantidade.
- O formato pode cambiar baixo nós: un ficheiro feito hoxe pode non se ler mañá.
