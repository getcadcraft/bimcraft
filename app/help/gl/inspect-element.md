---
title: Escoller un elemento e ler as súas propiedades
summary: Prema en calquera elemento do modelo 3D para resaltalo e ler o seu nome, tipo, etiqueta, GlobalId, conxuntos de propiedades e cantidades.
keywords: propiedades, escoller, seleccionar, clic, elemento, parámetros, conxuntos de propiedades, pset, cantidades, globalid, guid, tipo, inspeccionar
from: 43b80aa8
---

## Que vai facer

Escolla elementos dun modelo IFC e lea todo o que o ficheiro indica sobre eles: atributos, conxuntos de propiedades, propiedades de tipo e cantidades.

## Pasos

1. Abra un modelo IFC.
2. Prema nun elemento, por exemplo unha porta. Prema sen arrastrar: un arrastre de máis de uns píxeles xira a vista en lugar de escoller.
3. Mire o elemento: resáltase en azul.
4. Mire o panel {{ui:Properties}} á dereita. Na parte superior están a clase do elemento (como «Door» ou «WallStandardCase») e o seu nome.
5. Lea o primeiro bloque: **Nome**, **Tipo**, **Tipo de obxecto**, **Etiqueta**, **Descrición**, **GlobalId** e **Liña**.
6. Desprácese cara abaixo ata os conxuntos de propiedades. Os tres primeiros están abertos; prema no nome de calquera outro conxunto para abrilo.
7. Prema noutro elemento para cambiar a el.
8. Prema {{key:Esc}}, ou prema no fondo baleiro, para quitar a selección.

## Que debe ver

- O elemento resaltado e os seus datos á dereita.
- Conxuntos de propiedades en orde alfabética. Os conxuntos que proceden do **tipo** do elemento levan " (tipo)" despois do seu nome e a nota «Type property: a change here applies to every element of this type.»
- Conxuntos de cantidades (como lonxitudes, superficies e volumes) listados cos demais conxuntos. As cantidades son só de lectura.
- Os valores que pode cambiar parecen botóns. [Cambiar propiedades IFC e gardar unha copia editada](topic:edit-ifc-properties) indica como.

[Campos do panel Propiedades](topic:properties-panel) explica cada campo.

## Acceder aos elementos ocultos

1. Para chegar a algo dentro do edificio, desmarque os pisos superiores na lista {{ui:Storeys}}.
2. Para chegar a un muro detrás dun volume de cuarto, desactive {{ui:Spaces}}.
3. Prema no elemento.

## Erros comúns

- **Arrastrar un pouco mentres se fai clic.** BimCraft trátao como un xiro e non escolle. Manteña o rato quieto.
- **Esperar unidades xunto aos números.** Os valores amósanse tal como se gardan no ficheiro, redondeados a catro decimais, sen símbolo de unidade. As lonxitudes nunha exportación métrica adoitan estar en milímetros ou metros; comprobe a configuración do exportador.
- **Buscar un parámetro polo nome que lle é familiar.** Os exportadores renomean e reagrupan os parámetros en conxuntos de propiedades IFC como `Pset_WallCommon`. Revise cada conxunto; os parámetros personalizados adoitan estar nun conxunto co nome do programa exportador ou da súa empresa.
- **Esperar unha caixa de busca.** Prema para escoller un elemento; {{key:Mod}}+clic ou {{key:Shift}}+clic escolle máis, e {{key:Mod+A}} escolle todos os elementos amosados. A lista {{ui:Elements}} da esquerda só conta os elementos por clase; non se pode premer.
- **Escoller sobre unha tarxeta de ficheiro de proxecto.** Unha tarxeta de ficheiro non ten elementos que escoller: «Element properties need the 3D model. Open an IFC export of this file to see them.»
