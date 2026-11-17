---
title: Debuxar muros
summary: Debuxe muros na planta dun nivel facendo clic nas súas esquinas ou escribindo lonxitudes; as esquinas únense por si mesmas e os muros gárdanse como IFC.
keywords: curvo, arco, liña de localización, xustificación, muro, muros, debuxar, planta, planta baixa, cuarto, esquina, unir, tipo de muro, 2x6, 2x4, cmu, formigón, altura, nivel, niveis, piso, lonxitude escrita, orto, enganche
from: 8269cd4b
---

## Que vai facer

Debuxe os muros dun edificio sobre unha planta de cada nivel. Faga clic onde comeza un muro e despois en cada esquina; BimCraft une as esquinas por vostede, dálle a cada muro as súas capas (revestimento, tableiro, montantes, placa de cartón-xeso …) e o eleva ata o nivel superior. A vista 3D mostra os muros mentres traballa.

## Abrir a planta

1. Cree un edificio novo ([Crear un edificio novo](topic:start-a-new-building)) ou abra un modelo IFC.
2. Faga clic en {{ui:Debuxar}} na barra de ferramentas. Ábrese un edificio novo con esa opción xa activada.
3. A planta dun nivel mostrase á esquerda e a vista 3D á dereita. Escolla o nivel na lista da parte superior da planta, ou co botón redondo que hai a carón del no panel **Niveis**.
4. {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} son ferramentas da fila {{ui:Vista}} da barra de ferramentas (os comandos PLAN, SPLIT e as teclas funcionan como antes). Use {{ui:Planta}} só para a planta, {{ui:Dividir}} para ver ambas, e {{ui:3D}} para pechar a planta. Cando a xanela é estreita (ou o tamaño da interface é grande), {{ui:Dividir}} coloca a planta enriba da vista 3D en lugar de ao lado.

A planta corta o nivel a 4'-0" (1200 mm) por enriba do seu chan, como fai unha planta baixa. Use a roda do rato para ampliar; arrastre co botón central ou co dereito (ou manteña premida {{key:Space}} e arrastre) para desprazar; con {{ui:Seleccionar}} activado, un arrastre simple tamén desprazaa. {{key:F}} con el punteiro sobre a planta axusta a vista a ela.

## Debuxar un cuarto

1. Faga clic en {{ui:Muro}} (ou prema {{key:W}}).
2. Escolla o tipo de muro na primeira lista, por exemplo **Exterior 2×6** ou **Interior 2×4**.
3. Escolla a altura: **Ata o nivel superior** (o muro segue ao nivel se este se move), **Ata** un nivel máis alto para un muro que atravesa varios niveis (un hall de escaleira, unha habitación de dobre altura, unha empena alta), ou **Altura fixa** e escríbaa. Un muro así pertence ao nivel no que o debuxou; as plantas dos niveis que atravesa móstrano máis claro, os cuartos alí péchanse contra el, e pode facer clic en portas e xanelas nel desde esas plantas (unha porta apóiase no chan dese nivel). Para mover ou reformar o propio muro, vaia ao nivel no que comeza.
4. Faga clic onde comeza o primeiro muro.
5. Faga clic en cada esquina. Cada clic crea un muro; o seguinte comeza onde terminou o anterior. A lonxitude e o ángulo móstranse xunto ao punteiro.
6. Faga clic de novo no primeiro punto para pechar o cuarto. A liña de estado indica cantos muros ten o cuarto, e no modo de eixo central cada muro recibe a súa capa exterior no lado de fóra do cuarto.
7. Prema {{key:Esc}} (ou faga clic dereito, ou dobre clic) para parar sen pechar.

As esquinas únense por si mesmas: dous muros xúntanse a inglete, un muro que remata noutro para na súa cara (unha T) e tres ou máis muros nun punto comparten a esquina. Os muros que se cruzan déixanse tal como están.

Para debuxar un cuarto completo de vez, abra {{ui:Formas}} para un rectángulo, un rectángulo xirado, un polígono, arcos, muros sobre liñas escollidas ou arredor dun contorno (vexa [Formas de muros, dividir, desprazar, estirar e bloquear](topic:wall-tools)).

## Escoller a referencia do debuxo

Escolla **Eixo central**, **Cara interior** ou **Cara exterior** antes do primeiro clic. Con unha cara seleccionada, os seus clics e as lonxitudes escritas describen esa cara; BimCraft desprazará o eixo do muro a metade do grosor total e unirá as esquinas consecutivas. Escolla **Exterior á esquerda** ou **Exterior á dereita** segundo a dirección do debuxo. Para un contorno pechado debuxado en sentido antihorario, o exterior está á dereita; en sentido horario, á esquerda. Con **Cara interior**, o corpo do muro vai ao lado exterior da súa liña; con **Cara exterior**, ao outro lado. O debuxo por caras conserva o lado exterior escollido ao pechar o circuíto. No eixo central, os muros que non pechan un cuarto toman o lado exterior escollido; ao pechar un cuarto, o exterior de cada muro pasa a ser automaticamente o exterior do cuarto, sexa cal for o sentido do debuxo.

Cambiar o tipo de muro, a referencia ou o lado exterior remata a cadea actual. Preto dunha esquina de inversión, os ingletes longos recórtanse deixando extremos cadrados.

Mentres debuxa, un extremo sobre un espazo baleiro pode aliñarse en horizontal ou vertical cun extremo de muro ou cunha esquina anterior. Unha guía a trazos une ese punto co punteiro enganchado. {{key:Shift}} mantén a dirección do debuxo en ángulo recto; o aliñamento deixa entón de actuar nesa dirección. Os extremos, os puntos medios e as intersección de muros próximos teñen prioridade sobre o aliñamento lonxano.

## Liña de localización

Con **Referencia** en **Cara exterior** ou **Cara interior**, o muro conserva esa cara como liña de localización. Máis tarde, se o muro engorda ou se lle inverte o exterior, esa cara queda onde está e o muro crece ou xira arredor dela. Un muro recto que se une a ela nunha esquina segue o movemento, para que a esquina siga pechada. Pode cambiar a liña de localización despois en **Propiedades**: vexa [Cambiar un muro, porta ou xanela](topic:change-a-wall-or-door).

## Debuxar un muro curvo

1. Faga clic en {{ui:Muro}} e despois escolla **Curvo** na lista **Forma** da fila de opcións.
2. Faga clic onde comeza o muro, e despois onde remata.
3. Faga clic nun punto do seu arco. Ou escriba a altura do arco e prema {{key:Enter}}.
4. A cadea continúa desde o final do muro. Prema {{key:Esc}} para rematala.

Un muro curvo únese aos muros nos seus extremos (funcionan as esquinas e as uniones en T), forma cuartos e admite portas e xanelas ao longo do seu arco. Estas seguen sendo unidades rectas, perpendiculares ao muro no seu punto medio, e a súa distancia mídese ao longo do arco. Un muro pode xirar como máximo tres cuartos dun círculo. Engánchase aos seus extremos e ao punto medio do seu arco.

Aínda non está feito para muros curvos: {{ui:Recortar / estender}} e {{ui:Esquina}}, o armazón, as cotas automáticas da planta e o enganche ao longo do arco. Vexa [O que aínda non está feito](topic:not-built-yet).

## Escribir unha lonxitude en lugar de facer clic

Despois do primeiro clic, escriba e prema {{key:Enter}}:

| Escriba | Debuxa |
|---|---|
| `12'6"` ou `3810` | un muro desa lonxitude, na dirección que indica o punteiro |
| `12'6"<90` | desa lonxitude, nese ángulo (en graos, en sentido antihorario desde a dereita) |
| `@3000,0` | ata un punto a esa distancia do último, en horizontal e en vertical |
| `1200,3400` | ata ese punto na planta |

Se escribe un número mentres a ferramenta Muro está activa, vai directo á caixa {{ui:Lonxitude}}. En pés e polgadas, un número sen máis é en polgadas; en milímetros, é en milímetros. Sempre pode escribir a unidade: `3.5 m`, `10 ft`, `6 1/2"`.

## Enganches

- Os extremos dos muros, as esquinas das súas caras e os puntos medios dos muros enganchan cando o punteiro está preto deles (un cadrado, un triángulo).
- O punteiro engánchase á liña central dun muro ou a calquera das súas caras (unha cruz).
- Desde o último punto, a dirección mantense cada 15° cando está próxima; manteña premida {{key:Shift}} para mantela en 0°, 90°, 180° ou 270°.
- As direccións libres redondean a lonxitud a 1/2" (ou 10 mm).

## Cambiar, desfacer, eliminar

- Cada muro é un paso en **Cambios**: {{ui:Desfacer}} e {{ui:Refacer}} desfán e refán os cambios nos muros.
- Con {{ui:Seleccionar}} activado, faga clic nun muro da planta para seleccionalo; a vista 3D e **Propiedades** seguen a selección. {{key:Delete}} elimina os muros seleccionados, e os muros aos que estaban unidos límpanse de novo.

## Niveis

O panel **Niveis** lista todos os niveis coa súa cota e altura.

- Escriba un novo nome, cota ou altura e prema {{key:Enter}}. Ao cambiar a altura (ou a cota) dun nivel, os niveis que quedan por enriba desprázanse a mesma cantidade, e os muros que chegan ata un nivel seguen o movemento.
- {{ui:Engadir un nivel enriba}} engade un nivel por enriba do superior, da mesma altura que este.
- {{ui:Engadir un nivel debaixo}} engade un nivel por baixo do máis baixo (un soto), da mesma altura que este: a súa cota é negativa cando o nivel máis baixo está en 0, e ningún outro nivel se move. Desfacer retírao de novo.
- {{ui:Copiar este nivel…}} volve debuxar, noutro nivel ou nun novo por enriba, o que hai no nivel que está vendo: os seus muros con portas e xanelas, pisos e tetos (non cubertas). Os muros que chegaban ata o nivel superior chegan ata o nivel superior do novo; os cuartos aparecen por si mesmos. Un {{ui:Desfacer}} retira todo. Se o outro nivel xa ten muros, a copia engádese a eles.
- {{ui:Unidades}} na barra de ferramentas escolle as unidades (pés e polgadas, polgadas, pés decimais, milímetros, centímetros ou metros) para todo o que mostran e len as ferramentas de debuxo.

## Gardar

Faga clic en {{ui:Gardar como IFC}}. Cada muro é un muro IFC con o seu eixo central, a súa forma unida, o seu tipo e as súas capas, `Pset_WallCommon` e as cantidades base (lonxitude, altura, superficies e volumes), así que outros programas BIM poden abrilo e incluílo nun cuadro.

## Cousas que convén saber

- Os muros debúxanse sobre o seu eixo central. O grosor vén do tipo de muro.
- A planta mostra en cheo os muros debuxados aquí, e todo o demais (elementos da biblioteca, modelos doutros programas) cortado polo mesmo plano, co que hai por debaixo do corte en liñas finas.
- Os muros feitos por outros programas aparecen na planta, pero aínda non se poden cambiar con estas ferramentas.
