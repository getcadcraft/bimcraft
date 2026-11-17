---
title: Ver varios modelos IFC xuntos
summary: Engada máis ficheiros IFC á escena, como os de arquitectura, estrutura e instalacións, véxaos nas mesmas coordenadas, mova un, oculte outro e escolla cal edita.
keywords: federar, federación, modelo federado, varios modelos, varios ficheiros, combinar, superposición, coordinación, disciplina, estrutura, mep, instalacións, desfase, mover modelo, modelo activo, engadir un modelo
from: df0efbbf
---

## Que vai facer

Vexa modelos de disciplinas diferentes nun mesmo lugar: o modelo do arquitecto con dentro os modelos de estrutura e instalacións. Cada un segue sendo o seu propio ficheiro; BimCraft só os amosa xuntos.

## Pasos

1. Abra o primeiro modelo IFC como de costume.
2. En {{ui:Modelos}} á esquerda, faga clic en {{ui:Engadir un modelo…}} e escolla un ou máis ficheiros IFC. Cada un aparece na lista e na vista 3D.
3. Desmarque un modelo para ocultalo; márqueo para mostralo de novo.
4. Se un modelo chega no lugar equivocado (outro punto de levantamento), faga clic en {{ui:Mover}} debaixo del, escriba canto o desprazará ao longo de X, Y e Z en metros, e faga clic en {{ui:Aplicar}}.
5. O modelo co punto é o que edita. Faga clic no punto doutro modelo para editar ese.
6. Faga clic en × xunto a un modelo para sacalo da escena.

## Abrir os modelos do equipo

Cando o modelo aberto é un ficheiro na nube dun proxecto de equipo, {{ui:Abrir os modelos do equipo}} aparece debaixo da lista. Abre os outros modelos IFC do proxecto xunto a este, cada un desprazado polo desfase que fixo o proxecto. Os modelos ocultos para vostede quedan fóra e contanse; un modelo que o proxecto xira ábrese sen xirar e tamén se conta; os ficheiros que non son IFC (un DWG, por exemplo) omítense e nómbranse na liña de estado. Un modelo que xa está aberto non se abre nunca dúas veces. O botón non aparece para un ficheiro que non está nun proxecto de equipo.

## Que debe ver

- Cada modelo nas coordenadas do primeiro modelo, tal como o coloca o seu ficheiro. Os modelos exportados do mesmo proxecto alíñanse sen mover nada.
- Ao escoller un elemento dun modelo que non está editando, amósanse as súas propiedades en modo só lectura, con {{ui:Editar ese modelo}} para cambiar.
- A {{ui:Árbore do modelo}}, {{ui:Pisos}}, {{ui:Cor}}, a lista de {{ui:Cambios}}, a colocación de elementos da biblioteca e {{ui:Gardar como IFC}} funcionan todos sobre o modelo que edita. Ocultar, illar, ver a través e {{ui:Seleccionar todo}} funcionan en todos os modelos.
- {{ui:Gardar como IFC}} descarga o modelo que edita, só cos seus cambios.

## Erros habituais

- **Un modelo está lonxe ou non aparece.** O seu ficheiro usa outras coordenadas. Use {{ui:Axustar}} para atopalo e despois {{ui:Mover}} para colocalo no seu sitio.
- **Eliminar ou Copiar aparecen en gris sobre un elemento seleccionado.** Pertence a outro modelo: cambie primeiro a el.
- **Abrir un ficheiro con Escoller un ficheiro substituíu todo.** Iso crea unha escena nova. Use {{ui:Engadir un modelo…}} para engadir ficheiros ao que ten.

## Seguinte

- [Ocultar, illar e ver a través dos elementos](topic:hide-and-isolate)
- [Colorear elementos por unha propiedade](topic:color-by-property)
