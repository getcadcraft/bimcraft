---
title: Traer os seus propios obxectos e ficheiros de familia á Biblioteca
summary: Lea ficheiros de familia (.rfa) e ficheiros IFC, DWG, DXF, glTF ou OBJ na lapela Biblioteca, colóqueos como calquera elemento da biblioteca e consérveos en Os meus obxectos, unha lista privada que só vostede pode ver.
keywords: rfa, familia, familias, biblioteca de familias, obxectos propios, os meus obxectos, obxectos privados, biblioteca privada, importar obxectos, contido do fabricante, obxectos bim, obxecto ifc, gltf, obj, bloque dwg, gardar, cambiar, migrar
from: 886261f8
---

## O que vai facer

Traia a BimCraft os obxectos que xa ten: unha biblioteca de familias desde Revit, unha descarga IFC ou DWG dun fabricante, unha malla doutro modelador. Lea o ficheiro na lapela {{ui:Biblioteca}}, coloque o obxecto no seu modelo como un elemento IFC en toda regra e, se o quere máis tarde, consérveo en {{ui:Os meus obxectos}}.

## Pasos

1. Abra un modelo IFC ou comece un edificio novo.
2. Prema a lapela {{ui:Biblioteca}} xunto a {{ui:Propiedades}}.
3. Prema {{ui:Ficheiros…}}, e logo {{ui:Escolla un ficheiro…}}. Escolla un ficheiro ou varios á vez: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` ou `.csv`. Ou prema {{ui:Escolla un cartafol…}} para ler un cartafol enteiro e os cartafoles que contén (ata 200 ficheiros dunha vez).
4. Prema unha tarxeta para ver o que se leu: a vista previa da planta, o nome, o fabricante e o modelo, os tamaños e as notas.
5. Prema {{ui:Colocar na planta}} ou {{ui:Colocar no modelo}} para colocalo.
6. Para usalo de novo noutros proxectos, prema {{ui:Gardar nos meus obxectos}}. Con varios ficheiros lidos, {{ui:Gardar todos nos meus obxectos}} gárdaos dunha vez.
7. Despois, prema {{ui:Os meus obxectos}} na lapela Biblioteca para atopalos. Colócanse, cámbianse e actualízanse como calquera elemento da biblioteca.

Os ficheiros léense nesta lapela. Non se envía nada ata que escolla {{ui:Gardar nos meus obxectos}}.

## O que se le de cada tipo de ficheiro

| Ficheiro | O que obtén |
|---|---|
| IFC | Cada tipo de elemento como obxecto coa súa forma 3D real, clase IFC e conxuntos de propiedades |
| glTF, GLB, OBJ | Un obxecto coa súa forma 3D real como malla. Defina antes as unidades e cal é o eixe vertical. |
| DWG, DXF | Cada bloque como obxecto co seu debuxo en planta e atributos |
| Ficheiro de familia (`.rfa`) | O nome da familia, a categoría, o fabricante, o modelo, os parámetros e os seus tipos. **Non a súa forma 3D:** no seu lugar aparece unha caixa coa Largura, Profundidade e Altura da familia. |
| CSV | Un obxecto por fila: nome, tamaños e datos, debuxado como unha caixa |

## Ficheiros de familia e a súa forma 3D

A forma 3D dentro dun ficheiro `.rfa` está gardada nun formato sen documentar, así que BimCraft lee os datos da familia e non adiviña a súa xeometría. A tarxeta di iso: «Xeometría non lida desta familia; no seu lugar vai unha caixa.»

Para traer unha familia coa súa forma real, expórtea desde o programa que a fixo (Revit):

1. Abra a familia, ou un proxecto con a familia colocada.
2. Escolla **Ficheiro > Exportar > IFC**. Vea [a configuración de exportación que mellor funciona aquí](topic:rvt-to-ifc).
3. En BimCraft, lea o ficheiro `.ifc` con {{ui:Ficheiros…}}. Cada tipo de familia chega como obxecto propio, coa súa forma e conxuntos de propiedades.

Moitos fabricantes ofrecen unha descarga IFC ou DWG xunto ao ficheiro de familia. Estes léense directamente.

## Tipos de familia

Unha familia con varios tipos chega como un só elemento cunha escolla {{ui:Variante}}, unha variante por tipo. Cada variante ten os valores que difiren entre os tipos, e a súa propia caixa cando o tipo ten Largura e Profundidade. Unha familia cun só tipo é un elemento sinxelo cos valores dese tipo.

Algunhas familias gardan os seus tipos nun catálogo: un ficheiro `.txt` co mesmo nome xunto ao ficheiro de familia. Escolla os dous xuntos, ou escolla o cartafol, e as filas do catálogo convértense en variantes.

## Os datos dunha familia sobre unha forma real

Se un cartafol contén un ficheiro de familia e un ficheiro IFC, glTF ou OBJ co mesmo nome (`Chair.rfa` e `Chair.ifc`), escolla os dous xuntos ou escolla o cartafol. BimCraft fai un só elemento: o ficheiro de familia dá o nome, o fabricante, o modelo, os parámetros e os tipos, e o outro ficheiro dá a forma 3D real. As notas indican de que ficheiro vén a forma. Úsase unha mesma forma para todos os tipos.

Cando un ficheiro de familia ten gardada unha imaxe, os detalles do elemento mostran esa imaxe baixo o debuxo en planta. A imaxe móstrase só aí; non se garda co elemento.

## Os meus obxectos

{{ui:Os meus obxectos}} é a súa propia lista privada na Biblioteca. Só vostede pode ver o que hai nela: non está na biblioteca pública, non aparece na busca e non se mostra ao seu equipo. Segue á súa conta, así que os mesmos obxectos están noutro ordenador en canto inicia sesión na biblioteca.

- Ten que iniciar sesión na biblioteca para gardar un obxecto. Vea [iniciar sesión na biblioteca](topic:library-credits).
- Gardar un obxecto envía ese obxecto á súa conta. Ata entón queda no seu ordenador.
- {{ui:Eliminar de Os meus obxectos}} saca un obxecto da lista. As copias xa colocadas en debuxos quedan.
- Para compartir un obxecto con todos, súbao á biblioteca pública, baixo unha licenza que escolla.

:::note
Os meus obxectos está en proba e pode que aínda non estea aberto para a súa conta. Se falta a orixe, ou di «Os meus obxectos aínda non está dispoñible para esta conta», aínda pode ler e colocar os seus propios ficheiros con {{ui:Ficheiros…}}; gárdanse dentro do seu modelo.
:::

## Erros frecuentes

- **Esperar a forma real da familia desde un `.rfa`.** Só se le o seu dato. Exporte IFC para a forma.
- **Dous elementos onde esperaba un.** Unha familia e o seu ficheiro de forma únense só cando os nomes coinciden exactamente, sen contar a terminación, e están no mesmo cartafol.
- **Unha malla chega mil veces demasiado grande ou tombada.** Defina {{ui:Unidades do ficheiro}} e {{ui:Eixe vertical dunha malla}} en {{ui:Ficheiros…}} antes de escoller o ficheiro.
- **«Sen datos de familia» nun ficheiro.** É un proxecto (`.rvt` gardado con outra terminación) ou unha plantilla de familia, non unha familia. Vea [Ler un ficheiro de proxecto ou familia](topic:read-rvt-file).
- **Gardar contido que non pode almacenar.** Algunhas bibliotecas de pago non permiten copias fóra do seu propio servizo. Comprobe as condicións do contido que non fixo vostede.
