---
title: Colocar equipamento e mobiliario desde a biblioteca
summary: Atope un elemento na Biblioteca, nun ficheiro ou no debuxo aberto, colóqueo nun piso dun modelo IFC cunha vista previa en fantasma, xírea, axústeo a un muro e gárdeo.
keywords: mover, xirar, rotar, arrastrar, biblioteca, librarycraft, colocar, inserir, equipamento, mobiliario, bloque, familia, elemento, catálogo, contido, kcl, csv, gltf, obj, rfa, dwg, tipo ifc
from: 3dad5d4b
---

## O que vai facer

Poña un elemento da biblioteca nun modelo IFC: unha pía, unha mesa de traballo, unha cadeira. BimCraft escríbeo como un elemento IFC propio cun tipo, de modo que cada copia do mesmo elemento comparte un só conxunto de xeometría, e os seus datos, número de elemento e licenza viaxan con el.

## Pasos

1. Abra un modelo IFC.
2. Prema a lapela {{ui:Biblioteca}} xunto a {{ui:Propiedades}}, á dereita, ou {{ui:Biblioteca}} na barra de ferramentas sobre o modelo.
3. Escolla unha fonte:
   - **Símbolos integrados**: símbolos xenéricos de planta de fontanería que inclúe BimCraft baixo Apache-2.0, dispoñibles sen conexión. Comprebe as súas dimensións antes de construír. Para símbolos eléctricos de planta e dispositivos eléctricos IFC, use **Compilación › Electricidade**.
   - **Biblioteca**: a biblioteca de CadCraft neste sitio. Os elementos públicos non precisan inicio de sesión.
   - **Este ficheiro**: os bloques dun debuxo DWG ou DXF aberto. Un bloque dinámico con estados de visibilidade ofrécese unha vez por estado, con nome «Pía: Dobre cubeta», cada un debuxado só cos obxectos dese estado.
   - **Ficheiros…**: un ficheiro DWG, DXF, IFC, glTF/GLB, OBJ, RFA ou CSV do seu ordenador. Léese nesta lapela; non se envía nada.
   - **Outras fontes**: outra biblioteca que fala o mesmo formato de fonte. Engada o seu enderezo unha vez; gárdase neste navegador.
4. Busque ou escolla unha categoría e prema unha tarxeta. A tarxeta mostra unha vista previa en planta, o nome, o fabricante e o modelo, a licenza e a versión.
5. Prema {{ui:Colocar na planta}} (na vista de Planta) ou {{ui:Colocar no modelo}} (na vista 3D). En {{ui:Dividir}}, onde se ven a planta e a vista 3D, o botón é un botón dividido: a súa acción principal é {{ui:Colocar na planta}}, e a frecha no seu extremo dereito abre un menú con {{ui:Colocar no modelo}}. Ou arrastre a tarxeta, ou a imaxe dos detalles do elemento, sobre a planta ou a vista 3D: o elemento colócase onde solte. Cunha pluma ou un dedo, manteña premida a tarxeta un momento e logo arrástrea.
6. Escolla o piso na barra de colocación. Na vista 3D, os pisos por riba del ocúltanse mentres coloca e a vista xírase cara arriba; na planta, a planta xa mostra ese piso. Escoller {{ui:Colocar no modelo}} só desde a planta abre a vista 3D xunto a ela.
7. Mova o punteiro sobre o modelo: unha caixa transparente mostra onde vai o elemento.
8. Prema {{key:R}} para xirar 90°. Prema {{key:Tab}} (ou {{ui:Axuste ao muro}}) para pór a súa parte posterior contra o muro máis próximo, mirando á habitación.
9. Faga clic para colocalo. Ou escriba a posición en **X, Y (mm)**, por exemplo `1200, 3400`, e prema {{key:Enter}}.

Unha lámpada ou calquera cousa colgada desde arriba: fixe **Montaxe** en **No teito**. A parte superior do elemento queda entón na cara inferior do teito sobre o punto (ou na altura do nivel onde non hai teito). Con unha planta de teito na vista de planta, **Montaxe** comeza en **No teito**.

10. Responda á única pregunta: o **número de elemento** (énchese o próximo número libre), a cantidade e unha nota. Prema {{key:Enter}}.
11. Coloque máis, ou prema {{key:Esc}} para parar.
12. Prema {{ui:Gardar como IFC}} para descargar a copia editada.

## Planta ou modelo

O botón de colocación da Biblioteca segue a vista na que está e cambia en canto cambia a vista (os botóns {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}}, o teclado, ou abrir un ficheiro). Planta mostra un botón, {{ui:Colocar na planta}}; 3D mostra un botón, {{ui:Colocar no modelo}}; Dividir mostra o botón dividido, con {{ui:Colocar na planta}} como acción principal e {{ui:Colocar no modelo}} no seu menú. Ambos modos usan a mesma barra de colocación e escriben o mesmo elemento IFC: o punteiro traballa na vista de planta para un e na vista 3D para o outro. Prema {{key:Esc}} en calquera momento para parar.

Arrastrar unha tarxeta non ten tecla propia: o botón dividido, ou o botón simple, fai o mesmo co teclado.

## Mover ou xirar un elemento colocado

En {{ui:Debuxar}}, escolla o elemento na planta. Aparece unha agarradeira cadrada no seu punto de inserción e unha redonda ao seu lado.

- Arrastre o elemento, ou a súa agarradeira cadrada, para movelo. Axústase como a ferramenta Muro (extremos e caras dos muros); {{key:Shift}} manteno en escuadra coa súa posición anterior.
- Arrastre a agarradeira redonda para xiralo en pasos de 15°. Manteña {{key:Shift}} para pasos de 1°.
- Prema {{key:R}} para xirar 90°.
- En **Propiedades** (tamén na vista 3D), escriba **X**, **Y** e **Rotación (°)**, ou prema **Xirar 90°**.

Cada movemento é un paso de desfacer e viaxa en Live TeamWork. O elemento conserva o seu número, os seus datos de biblioteca e a súa altura sobre o nivel. Aínda non está feito: arrastralo na vista 3D.

## Que debe ver

- O elemento no modelo, seleccionado, cas súas propiedades á dereita: unha caixa **Elemento de biblioteca** coa súa licenza e atribución, e os conxuntos `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` e, para elementos de debuxos etiquetados, `CadCraft_SourceAttributes`.
- «Colocado: *elemento* (elemento *n*)» na lista de cambios. {{key:Mod+Z}} desfai o paso.
- A liña de estado: «Colocado *elemento* como elemento *n*».

## Cousas que convén saber

- Algúns elementos veñen en varios tamaños ou opcións: a tarxeta entón ten unha escolla de **Variante**, e a que escolla é a que se coloca. Vexa [Colocar e cambiar un elemento da biblioteca que ten variantes](topic:library-variants).
- Un elemento sen corpo 3D (un símbolo 2D) colócase cunha caixa de substitución; vostede indica a súa altura cando llo pregunten.
- Máis do mesmo: escolla un elemento colocado e use {{ui:Copiar}} e {{ui:Pegar}}, ou {{key:Mod+D}}. Vexa [Copiar, pegar e duplicar elementos da biblioteca](topic:copy-paste).
- Para iniciar cada colocación con axuste ao muro activado, active **Iniciar con axuste ao muro activado** en [Configuración de BimCraft](topic:settings).
- As lonxitudes convértense ás unidades propias do modelo, sexan as que sexan.
- **Entourage** (árbores, arbustos, persoas, automóbiles) tamén está na biblioteca: busque «tree», «person» ou «car». Estes elementos están debuxados por CadCraft (CC0) e conservan as súas cores ao colocalos (un tronco marrón, follas verdes, as fiestras dun automóbil transparentes), en BimCraft e noutros programas BIM. Aparecen nas [imaxes renderizadas](topic:render).
- Nun ficheiro IFC2X3 o corpo escríbese como un sólido facetado; en IFC4, como unha malla de caras triangulada. Ámbolos dous ábrense noutras ferramentas IFC.
- Un debuxo (DWG ou DXF) non se pode gardar aquí, polo que os elementos só se colocan en modelos IFC. Use **Este ficheiro** nun debuxo para ver no que se convertería cada un dos seus bloques.

## Elementos na súa lingua

Un elemento pode levar o seu nome, a súa descrición e o seu tipo noutras linguas. Cando os ten na lingua á que está configurado BimCraft (Configuración › Xeral › Idioma), a páxina do elemento mostra eses, co nome que lle deu o seu fabricante debaixo, e **Colocar** escribe o nome na súa lingua no modelo, de modo que o cadro {{ui:Equipamento}} o enumera así. O elemento segue sendo o mesmo: a comprobación de actualizacións e os cambios van polo propio elemento, nunca polo seu nome. Os elementos sen tradución conservan as súas propias palabras.

## Erros frecuentes

- **Falta o botón de colocación.** Non hai ningún modelo IFC aberto. Abra primeiro un.
- **O fantasma non segue o punteiro.** O punteiro está fóra da área do modelo, ou o plano do piso non está á vista. Prema {{ui:Superior}}.
- **{{ui:Axuste ao muro}} di que non hai muros.** O piso non ten muros no IFC (algunhas exportacións poñen os muros noutro piso). Escolla ese piso, ou escriba X e Y.
- **Os elementos dun ficheiro teñen o tamaño incorrecto.** O ficheiro non ten unidades, ou indica as que non son. En {{ui:Ficheiros…}} escolla as unidades e léao de novo.

:::tip
Colocar o mesmo elemento dúas veces comparte un tipo IFC, de modo que un modelo con corenta cadeiras garda a cadeira só unha vez.
:::
