---
title: Dar forma a un muro: unión, perfil, inclinación e aberturas
summary: Una a parte superior dun muro a unha cuberta, a unha laxe ou a un teito, dalle o seu propio contorno de alzado, inclíneo ou abra unha abertura sen porta nin xanela, nas Propiedades, nun alzado ou unha sección, na vista de cara propia do muro ou en 3D; cada cambio é un paso de desfacer.
keywords: unir, unir parte superior, unir base, cuberta, laxe, teito, aguilón, perfil, editar perfil, contorno de alzado, escalonado, parapeto, inclinación, inclinado, inclinar, afilado, dobre inclinación, abertura, abertura no muro, burato, paso, sen porta, asas, alzado, sección, 3D, vista de cara, muro curvo, copia
from: f558b269
---

## Que vai facer

Cambie a forma dun muro por enriba e por debaixo da súa planta: a parte superior pode seguir unha cuberta, unha laxe de piso ou un teito, pode ter o seu propio contorno visto de lado, pode inclinarse, e pode ter aberturas sen porta nin xanela. A planta, as esquinas e a liña de localización do muro quedan como estaban.

## Onde pode facelo

- **Propiedades**: con {{ui:Debuxar}} e {{ui:Seleccionar}} activados, prema nun muro que debuxou. As **Propiedades** mostran as filas do muro e despois **Forma**, onde todo se escribe.
- **Un alzado ou unha sección**: o lapis do navegador de proxecto ({{ui:Editar nesta vista}}) abre a vista; escolla alí un muro e arrastre as súas asas. Vexa «Nun alzado ou nunha sección» máis abaixo.
- **A vista de cara propia do muro**: {{ui:Muros}} › {{ui:Editar perfil…}}, e logo prema o muro na planta. Funciona para calquera muro, tamén para un que ningún alzado mira de frente, e para un muro curvo (mostrado desenrolado).
- **A planta e a vista 3D**: os catro comandos de {{ui:Muros}} (grupo Editar): {{ui:Unir parte superior / base}}, {{ui:Editar perfil}}, {{ui:Inclinación}} e {{ui:Abertura no muro}}. Vexa «Na planta e en 3D» máis abaixo.

Sexa cal sexa a vía escollida, é o mesmo cambio: un paso en **Cambios**, e {{ui:Desfacer}} anúlao.

Os muros rectos e os curvos admiten todas as ferramentas de Forma. Nun muro curvo, as distancias seguen o seu arco.

## Unir a parte superior ou a base

- **Unir parte superior**: escolla unha cuberta, un piso ou un teito. A parte superior do muro segue a cara inferior do elemento escollido, recta por enriba de cada esquina do muro. Baixo unha cuberta inclinada, un muro recibe unha parte superior en pendente, e onde a cuberta cambia de plano (unha cume ou unha faldón) a parte superior do muro dobrase con ela.
- **Unir base**: escolla un piso ou un teito. A base do muro segue a súa cara superior.
- Onde non hai nada por enriba (ou por debaixo) dunha parte do muro, esa parte mantén a altura propia do muro.
- A unión mantense: se cambia a inclinación ou o voadizo da cuberta, ou a altura do teito, os muros unidos séguen o cambio no mesmo paso.
- Escolla **Altura propia** para soltar a unión.

## Editar o perfil

{{ui:Editar perfil…}} abre o contorno do muro visto de lado:

- **Liña superior**: filas de **Ao longo** (a distancia desde o inicio do muro) e **Altura** (por enriba da base do muro). Tres filas 0 / 3000, 2500 / 4500, 5000 / 3000 fan unha fachada a aguilón nun muro de 5 m.
- **Liña inferior**: déixea baleira para unha base de nivel, ou dea filas para un muro sobre unha cimentación escalonada.
- {{ui:Engadir un punto}} engade unha fila, e **Eliminar** quita unha. {{ui:Usar este perfil}} aplícao; {{ui:Volver a recto}} elimínao.

Cada liña percorre o muro unha vez, desde o seu inicio ata o seu fin; unha liña que volve sobre si mesma, ou unha parte superior que baixa ata a base, recházase. Se hai tamén unha parte superior unida, úsase a máis baixa das dúas.

## Inclinar o muro

**Inclinación**: **Vertical**, **Inclinado** (as dúas caras se inclinan no mesmo sentido, o grosor mantense) ou **Dobre inclinación** (cada cara ten o seu propio ángulo: un muro que se fai máis fino ou máis grosO ao subir). Escriba os graos desde a vertical; un ángulo positivo inclina cara á esquerda do muro, vista desde o seu inicio. O muro queda onde se debuxou na súa base; os muros unidos a el non se inclinan con el.

## Aberturas sen porta nin xanela

{{ui:Engadir abertura}} corta un burato de 900 de ancho no centro do muro. A súa fila en **Aberturas** fixa **Desde o inicio**, **Ancho**, **Peitoril** (desde o nivel) e **Altura**; **Eliminar** quítaa. A abertura atravesa todo o muro, as cantidades do muro non a contan, e a planta mostra un oco onde chega á altura de corte da planta. Cando o inicio do muro se desliza ao longo da súa liña, a abertura mantén o seu sitio; un cambio que a deixase fóra do muro recházase.

## Nun alzado ou nunha sección

Abra a vista co lapis do navegador de proxecto. Con {{ui:Seleccionar e mover}} activado:

- **Perfil**: prema un muro que mira á vista. As súas liñas superior e inferior vólvense azuis, con unha asa cadrada en cada punto e un punto no centro de cada tramo.
  - Arrastre un cadrado para mover ese punto (os dous extremos móvense só cara arriba e cara abaixo).
  - Arrastre un punto para mover todo o tramo cara arriba ou cara abaixo.
  - Prema dúas veces nunha liña (ou prema o botón dereito sobre ela) para engadir un punto alí; {{ui:Engadir un punto (superior)}} e {{ui:Engadir un punto (inferior)}} engaden un no medio do tramo máis longo.
  - Prema un cadrado e logo Delete (ou prema o botón dereito sobre el) para eliminar ese punto. {{ui:Volver a recto}} elimina o perfil.
  - Con un punto escollido, escriba o seu **Ao longo** e a súa **Altura** na franxa baixo a barra de ferramentas.
- **Unir**: a franxa ten as listas **Unir parte superior** e **Unir base** para o muro escollido. Ou use a ferramenta {{ui:Unir á parte superior}} ou {{ui:Unir á base}}: prema o muro ou os muros, e logo a cuberta, o piso ou o teito, que se mostran como caixas de trazos. Todos os muros escollidos únense nun só paso.
- **Aberturas de muro**: coa ferramenta {{ui:Abertura no muro}}, arrastre un rectángulo sobre a cara dun muro. De volta en {{ui:Seleccionar e mover}}, arrastre unha abertura para movela, arrastre unha das súas oito asas para cambiar o seu tamaño, escriba **Desde o inicio**, **Ancho**, **Peitoril** e **Altura** na franxa, ou prema Delete para eliminala.
- **Inclinación**: tamén se pode premer un muro que a vista segue ao longo (visto de punta, como unha sección que o atravesa, ou nun alzado desde o seu extremo). Arrastre o asa redonda da súa parte superior para inclinalo, ou escolla **Vertical**, **Inclinado** ou **Dobre inclinación** na franxa e escriba os ángulos.

Os tamaños encaixan en pasos de 10 mm; escriba un valor para calquera cousa máis fina. Un muro curvo pode editarse nun alzado mentres percorre un sentido a través da vista; a súa vista de cara propia funciona sempre.

## Na planta e en 3D

Abra {{ui:Muros}} no grupo Editar:

- {{ui:Unir parte superior / base}}: escolla **Unir parte superior** ou **Unir base** na fila da ferramenta. Prema o muro ou os muros (na planta ou na vista 3D) e logo aquilo ao que se unen: en 3D prema a propia cuberta, piso ou teito; na planta prema un punto debaixo dela (cando hai máis dun, unha lista pregunta cal).
- {{ui:Editar perfil}}: na planta, prema un muro para abrir a súa vista de cara. En 3D, prema un muro: os seus puntos de perfil reciben asas; arrastre unha no plano do muro.
- {{ui:Inclinación}}: prema un muro (planta ou 3D) e escriba canto se inclina.
- {{ui:Abertura no muro}}: na planta, prema o muro onde vai a abertura; o seu **Ancho**, **Altura** e **Peitoril** están na fila da ferramenta. En 3D, prema unha esquina na cara do muro e logo a esquina oposta. Con un muro escollido en 3D, as súas aberturas teñen asas: as esquinas cambian o tamaño e o centro móvese.

As asas 3D son as propias da vista 3D, polo que esperan mentres a caixa de sección mostra as súas.

## Na planta

Un muro inclinado debúxase onde o corta a planta (1200 por encima do nivel, salvo que a vista indique outra cousa): o seu contorno despraza según canto se inclina a esa altura, e unha dobre inclinación é máis ancha ou máis estreita alí. O seu contorno no chan debúxase coas liñas finas do que queda por debaixo do corte. As esquinas, as asas e as cotas do muro quedan na súa base.

## Copias

{{ui:Copiar este nivel…}} e Mover con **Copiar** levan consigo o perfil, a inclinación e as aberturas do muro. Un muro unido a un piso ou teito queda unido ao piso ou teito copiado do novo nivel; unha unión a unha cuberta non se copia con un nivel (as cubertas non se copian). Unha copia no mesmo nivel mantén a unión coa mesma cuberta, piso ou teito.

## No ficheiro

Un muro con forma escríbese como un sólido facetado (IfcFacetedBrep), que outros programas len tal como se debuxa; os seus axustes están no muro (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Unha abertura é un IfcOpeningElement dentro do muro, sen nada que a enche.

## Que aínda non está feito

- Un perfil con voos ou furados no contorno (use aberturas para os buratos).
- En 3D: engadir ou quitar puntos do perfil, e a inclinación por unha asa (use a vista de cara do muro, un alzado ou unha sección, ou escríbaa).
- {{ui:Desprazamento}} con Copiar activado non copia a forma nin as aberturas do muro (Mover con Copiar sí).
- As capas dun muro inclinado non se debuxan nas plantas de detalle medio e fino (si o seu contorno).
- Aberturas que non son rectángulos.
