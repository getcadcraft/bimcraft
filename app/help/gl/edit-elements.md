---
title: Eliminar, cortar, copiar e pegar elementos do edificio
summary: Seleccione muros, portas, mobiliario ou calquera outro elemento dun modelo IFC; elimíneos, córteos, ou cópieos e péguos onde faga clic, no mesmo sitio ou noutro piso.
keywords: eliminar, retirar, borrar, cortar, copiar, pegar, duplicar, mover, seleccionar todo, elemento do edificio, muro, porta, xanela, escaleira, oco, desfacer
from: d9eec37f
---

## Que vai facer

Modificar o que hai nun modelo IFC: retirar os elementos que non quere, copiar un muro ou un conxunto de mobiliario a outro lugar, ou mover elementos cortándoos e pegándoos. Cada cambio é un paso que se pode desfacer, e gardar escribe un ficheiro novo, polo que o orixinal queda como estaba.

## Pasos

1. Abra un modelo IFC. Consulte [Abrir un modelo IFC e ver o interior en 3D](topic:open-ifc-model).
2. Seleccione o que quere cambiar: faga clic nun elemento, manteña premida {{key:Mod}} ou {{key:Shift}} e faga clic para seleccionar máis, ou prema {{key:Mod+A}} ({{ui:Máis}}, {{ui:Seleccionar todo}}) para seleccionar todos os elementos que se ven.
3. Despois:
   - **Eliminar:** prema {{key:Delete}}, ou {{ui:Máis}}, {{ui:Eliminar}}.
   - **Copiar:** prema {{key:Mod+C}} ou faga clic en {{ui:Copiar}}.
   - **Cortar:** prema {{key:Mod+X}}, ou {{ui:Máis}}, {{ui:Cortar}}. Os elementos desaparecen e pódense pegar.
4. Para pegar, prema {{key:Mod+V}} ou faga clic en {{ui:Pegar}}. Unha caixa transparente do mesmo tamaño que o copiado segue o punteiro no piso escollido na barra de colocación. Prema {{key:R}} para xirala 90°, e logo faga clic onde vai. Cada clic coloca outra copia; prema {{key:Esc}} para parar.
5. Ou prema {{key:Mod+Shift+V}} ({{ui:Máis}}, {{ui:Pegar no mesmo sitio}}): despois dun corte, os elementos volven exactamente ao lugar onde estaban; despois dunha copia, a copia queda xusto ao lado dos orixinais.
6. Faga clic en {{ui:Gardar como IFC}} para descargar o modelo editado.

## O que vai con un elemento

- **Pezas:** unha escaleira leva os seus tramos, un muro cortina os seus paneis, e calquera elemento formado por pezas leva todas.
- **Ocos:** un muro leva os ocos que se lle fixeron. Eliminar unha porta ou unha xanela leva tamén o oco que ocupaba, de modo que o muro se pecha, como ocorre nun programa de autoría. Eliminar un muro debuxado en BimCraft elimina tamén as súas portas e xanelas e volve unir os muros que quedan. Eliminar un muro dun ficheiro feito noutro lugar deixa as súas portas e xanelas no sitio onde estaban.
- **Datos:** unha copia ten o mesmo tipo, materiais, conxuntos de propiedades e cantidades que o orixinal, e un GlobalId novo. Se despois cambia un valor da copia, o orixinal non se modifica.
- **Elementos de biblioteca** conservan os seus datos de biblioteca; unha copia recibe o seguinte número de elemento libre, e un elemento cortado e pegado de novo conserva o seu.

## O que debe ver

- "Eliminado: …" ou "Pegado: …" na lista {{ui:Cambios}}. {{key:Mod+Z}} desfai o último cambio; {{key:Mod+Y}} volve aplicalo.
- Despois de eliminar, a liña de estado indica cantas pezas e ocos foron tamén.
- Os elementos pegados quedan seleccionados, así que pode volver pegar no mesmo sitio para facer unha fila, ou eliminalos.

## Cousas útiles

- As copias usan a mesma xeometría que o orixinal (IFC permite que os elementos a compartan), polo que o ficheiro case non medra.
- Os elementos do edificio péganse no modelo do que se copiaron, na mesma pestana. Para usar elementos de biblioteca colocados noutro modelo, copie un elemento de cada vez: consulte [Copiar, pegar e duplicar elementos de biblioteca](topic:copy-paste).
- Os pisos, os espazos, os edificios e a parcela non se poden eliminar nin copiar. Seleccione os elementos que hai neles. Unha sala debuxada en BimCraft xorde dos muros que a rodean: elimine un muro para unir dúas salas.
- Os muros, portas e xanelas debuxados coas ferramentas propias de BimCraft non se poden copiar, cortar nin duplicar por agora; a liña de estado indícao. Debúxeos de novo. Eliminar si funciona.
- Copiar tamén garda no portapapeis, como texto, os nomes e as propiedades do copiado, para pegalos nunha folla de cálculo ou nun correo electrónico.

## Erros frecuentes

- **{{ui:Eliminar}} está en gris.** Non hai nada seleccionado, ou só hai pisos ou espazos. Coloque o punteiro enriba para ler o motivo.
- **Pegar indica que os elementos proceden doutro modelo.** Abriu outro modelo despois de copialos. Abra de novo o primeiro modelo e cópieos alí.
- **A copia pegada está noutro piso.** O {{ui:Piso}} da barra de colocación decide onde vai; escolla o piso antes de facer clic.

## Relacionados

- [Ocultar, illar e ver a través dos elementos](topic:hide-and-isolate)
- [Teclas e rato](topic:keyboard#edit)
