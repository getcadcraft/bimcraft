---
title: Formas de muros, división, desprazamento, estiramento e bloqueo
summary: Debuxe muros como rectángulo, polígono, arco, sobre liñas escollidas ou arredor dun contorno; divídaos, quite un tramo, desprácese, estírelos por caixa, aliñeos e bloqueeos entre si, a unha cota ou a unha liña de reixa. Cada cambio mantén os muros unidos e é un paso de desfacer.
keywords: cambiar tipo, cambiar tipo de muro, retipar, que se moveu, lod, nivel de desenvolvemento, estilo de unión, inglete, tope, cuadrar, unións de muros, seguinte, atravesa, desactivar unión, activar unión, prioridade de capa, núcleo, prioridade, unión, rectángulo, rectángulo xirado, polígono, inscrito, circunscrito, arco, centro, arco tanxente, escoller liñas, lapela, calcar, contorno, varita máxica, dividir, dividir con oco, oco, eliminar segmento, volver unir, desprazamento, copia, estirar por caixa, caixa, estirar, aliñar, bloquear, candado, restrición, bloquear cota, editar cota, reixa, bloquear á reixa, mover liña de reixa, desprazamento da localización, unión desactivada, exento, crecer desde, medir desde, liña central, cara interior, cara exterior, separar, alt
from: 5b7d2f75
---

## Que vai facer

Cree e cambie muros coas receitas da ferramenta Muro. Cada unha remata igual que debuxar un muro polas súas esquinas: as esquinas únense por si mesmas, as uniones gárdanse no ficheiro, e todo o cambio é un paso en **Cambios** que {{ui:Desfacer}} desfai. Os muros conservan a súa identidade: un muro que divide, desprace ou estire segue sendo o mesmo muro, coas súas portas, xanelas e cotas.

## Debuxar un rectángulo, polígono ou arco

Con {{ui:Debuxar}} activado, abra {{ui:Formas}} no grupo Debuxar (ou escolla unha forma na lista **Forma** da fila Muro). A fila Muro mostra o tipo de muro, a referencia de debuxo, o lado exterior e a parte superior, como para a ferramenta {{ui:Muro}}. Despois prema, ou escriba os puntos (x,y · @dx,dy · @lonxitude<ángulo · unha lonxitude na dirección do punteiro):

- **Rectángulo**: dúas esquinas opostas. Catro muros, catro uniones de esquina, un paso.
- **Rectángulo xirado**: onde empeza e acaba o primeiro lado (iso fixa o seu xiro e a súa lonxitude), e logo un terceiro clic para o outro lado.
- **Polígono**: o centro, e logo unha esquina (**Inscrito**) ou o punto medio dun lado (**Circunscrito**). Escriba primeiro **Lados** (de 3 a 64).
- **Arco, centro**: o centro, o inicio (iso fixa o radio), o fin. **Sentido**: o camiño máis curto, en sentido antihorario ou en sentido horario. Un arco de tres cuartos dun círculo debúxase como dous muros.
- **Arco tanxente**: prema o extremo dun muro, e logo onde remata o arco. O arco sae do extremo do muro na súa propia dirección.

Unha forma pechada recibe o seu exterior cara fóra. Debuxada sobre a **Cara exterior** ou **Cara interior**, a cara que prema é a que permanece no seu sitio.

## Muros sobre liñas que xa ten

- **Escoller liñas**: prema unha liña e un muro vai sobre ela. Prema {{key:Tab}} (ou manteña premida {{key:Shift}} ao premer) para tomar toda a cadea de liñas unidas de extremo a extremo. As liñas son as de debuxo desta vista, a referencia de calco e as liñas de reixa.
- **Calcar contorno**: prema dentro dunha área pechada por esas liñas ou por muros. Os muros rodean a menor área arredor do clic.

## Definir antes de debuxar: desprazamento e unión

A fila Muro ten dous campos máis, usados pola ferramenta {{ui:Muro}} e polas formas:

- **Desprazamento**: os muros débuxanse a esta distancia da liña que prema: + á súa esquerda, − á súa dereita, vista como se debuxa.
- **Unión**: desmarque para debuxar muros exentos. Os seus extremos reciben **Unión desactivada** e quedan libres onde queiran que vaian (vexa [Cambiar un muro](topic:change-a-wall-or-door)).

## Dividir, quitar un tramo, volver unir

Abra {{ui:Muros}} no grupo Editar.

- **Dividir**: prema un muro onde debe cortarse, ou escriba a distancia desde o seu inicio. Preto dun muro que o atravesa, o corte encaixa no punto onde se cruzan. As dúas partes teñen o mesmo tipo e quedan unidas de extremo a extremo. **Oco** deixa un espazo desa lonxitude centrado no corte. **Extremos libres** dálles aos extremos cortados Unión desactivada (Configuración › BimCraft › Muros › **Cando un muro se divide** indica cal está marcada ao principio). Unha porta ou xanela vai coa parte na que está; un corte que pase por unha delas recházase.
- **Eliminar segmento**: prema onde comeza e onde remata o tramo. Unha porta nese tramo vai con el.
- **Volver unir**: prema as dúas partes dun mesmo muro (en liña, do mesmo tipo). Volven ser un só muro, o primeiro que prema, coas portas de ambos.

## Estilo de unión, unión desactivada, prioridade de capa

Abra {{ui:Muros}} no grupo Editar.

- **Estilo de unión**: prema unha esquina onde rematan dous muros rectos. Cada clic pasa ao seguinte estilo: **Inglete** (ambos extremos cortados na liña que vai do interior ao exterior da esquina, o que toda esquina comeza sendo), **Tope** (un muro atravesa ata a cara exterior do outro, que para contra o seu lateral) e **Cuadrar** (como tope, e o muro que atravesa remata a cadro; nun ángulo recto parece tope). **Seguinte**, ou {{key:Tab}}, fai que o outro muro sexa o que atravesa. A lista **Estilo** da barra mostra a esquina que prema por último. As mesmas dúas opcións están nas **Propiedades** dun muro: **Estilo de unión no inicio / no fin** e **Atravesa**. Cada cambio é un paso en **Cambios**. A planta, o corpo 3D, os espazos e as cantidades séguen o cambio.
- Nunha T, o muro ao que se lle achega o lateral sempre atravesa. Onde se cruzan dous muros, un clic (ou **Continuo onde se cruza** nas Propiedades) indica cal dos dous é continuo; iso decide que capas dun muro se debuxan a través do cruce.
- O estilo pertence á unión: mantense cando os muros se moven e vai só cando desaparece a unión (o muro se elimina, se divide nese extremo, ou o extremo recibe Unión desactivada). Unha esquina cun muro curvo, ou onde se xuntan tres ou máis muros, conserva o inglete. Unha esquina máis aguda que uns 30 graos, ou máis chaira que uns 150, tamén volve ao inglete.
- **Unión desactivada**: prema preto dun extremo de muro. Ese extremo queda libre: non se une a nada, onde quera que vaia o muro, ata que volva premelo. Os extremos libres márcanse cunha cruz mentres a ferramenta está activa. O mesmo interruptor é **Unir no inicio / Unir no fin** nas Propiedades.
- **Prioridade de capa**: onde se xuntan muros con capas, a capa máis forte corta a máis débil, así que os núcleos únense aos núcleos e un acabado para contra a capa máis forte. Cada capa ten unha prioridade de 0 a 999; por defecto vén da función da capa (estrutura 800, substrato 600, illamento 400, membrana 300, acabado 200, unha cámara 100). {{ui:Prioridade de capa}} abre a composición do muro, onde a columna **Prioridade** fixa o número propio dunha capa. As capas de igual prioridade paran unha contra outra, e unha liña só se debuxa entre materiais distintos. Vese nas plantas con detalle **Medio** ou **Fino**, nas esquinas, nas T e nos cruces de dous muros rectos; Configuración › BimCraft › Muros › **Limpar as capas dos muros onde se xuntan** desactívaa. Só cambia o que se debuxa dentro dos muros: os contornos e as cantidades dos muros quedan como os dá o estilo de unión.

## Cambiar o tipo de moitos muros

Pasar de planos de esbozo a debuxos de traballo é sobre todo un cambio de tipo: un muro xenérico convértese na composición concreta. Non se debuxa nada de novo.

1. Escolla os muros (un, ou varios con {{key:Ctrl}} ou {{key:Shift}}).
2. Nas Propiedades, prema **Cambiar tipo…** en Tipo de muro (ou abra {{ui:Muros}} no grupo Editar e escolla {{ui:Cambiar tipo}}, que abre a mesma lista). A lista abre dentro das Propiedades, no bloque dos muros escollidos. Non é un diálogo e non tapa nada: a planta, a vista 3D e a selección seguen funcionando mentres está aberta, e segue aos muros que escolla.
3. A lista mostra cada tipo de muro co seu grosor e a súa etiqueta LOD, por exemplo «Muro 230 xenérico, LOD 200» e «230 ladrillo cerámico, revocado nas dúas caras, LOD 300». Os tipos que teñen agora os muros escollidos están marcados. Escriba en **Buscar** para reducir a lista: un nome, un grosor ou `lod 300`.
4. Prema un tipo. Cada muro escollido cambia a el nun só paso, así que un só {{ui:Desfacer}} desfai todo o cambio. A pequena x pecha a lista.

Cada muro conserva a súa liña de localización. Un muro na súa liña central crece cara aos dous lados; un muro cuxa liña de localización é unha cara mantén esa cara e crece para o outro lado, e os muros unidos a el seguen no cruce. Os muros bloqueados a un muro que cambia tamén o seguen. As portas e xanelas quedan nos seus muros e vólvense cortar para o novo grosor.

Despois do cambio, a lista mostra **Que se moveu**: cantos muros cambiaron e a que tipo, o grosor e o LOD antes e despois, os muros que se moveron lateralmente para manter a súa liña de localización, os muros unidos que seguiron, as portas e xanelas volvidas a aloxar, e cada espazo cuxa área cambiou, con a súa área antes e despois. A barra de estado dino nunha soa liña. O informe só informa: nunca detén un cambio. Escoller un tipo en **Propiedades › Tipo de muro** fai o mesmo cambio e dá o mesmo informe.

Dúas cousas detén un cambio, e entón non se muda nada: unha porta ou xanela que xa non cabería no seu muro (un muro encurtase onde segue unha esquina; faga antes a porta máis estreita ou aléxea da esquina), e un bloqueo que o cambio rompería (un muro bloqueado a unha liña de reixa pola súa liña central mentres a súa liña de localización é unha cara; desbloquéeo ou devolva a súa liña de localización á liña central).

Un asistente conectado a BimCraft pode facer o mesmo cambio (ferramentas `wall_types_list` e `walls_swap_type`) e recibe o mesmo informe.

A etiqueta LOD dun tipo establécese no editor de composicións de muros: vexa [Composicións de muros](topic:wall-assemblies).

## Desprazamento e estirar por caixa

- **Desprazamento**: prema un muro, e logo o lado ao que o quere mover, ou escriba a distancia. O muro muda en ángulo recto consigo mesmo e os muros unidos a el estíranse. Marque **Copiar** para unha copia paralela (non fica unida ao orixinal).
- **Estirar por caixa**: prema dúas esquinas dunha caixa, e logo un punto desde onde mover e un punto ata onde mover. Mover todo extremo de muro dentro da caixa; un muro enteiramente dentro desprázase, e os muros que choquen con el tamén; os muros que cruzan a caixa estíranse.

## Editar unha cota e bloqueala

Escolla unha cota de referencia (Anotar › {{ui:Cota de referencia}}) e escriba o seu valor nas **Propiedades**: o muro da súa segunda referencia muda en ángulo recto consigo mesmo, a primeira referencia mantense e os muros unidos séguena. Marque **Bloquear esta cota** para manter o valor: cando despois se mova algún dos dous muros, o outro segue. Un valor bloqueado non se pode escribir por enriba ata que o desmarque.

## Aliñar e bloquear

**Aliñar e bloquear**: prema unha cara de muro (ou a liña central, preto do medio do muro) ou unha liña de reixa, e logo a cara do muro que hai que levar a esa liña. O muro muda en ángulo recto sobre ela. Marque **Bloquear** primeiro para mantelos aliñados: un candado aparece na planta, e cando un muro se move o outro segue. As **Propiedades** dun muro listan os seus **Bloqueos**, cada un con **Desbloquear**.

## Bloquear muros a liñas de reixa

Escolla un muro que vai ao longo dunha liña de reixa, ou cuxo extremo está sobre unha, e escolla a liña de reixa en **Propiedades** › **Bloquear á reixa**. Logo escolla a liña de reixa coa ferramenta {{ui:Reixa}} e escriba unha distancia en {{ui:Mover por}}: a liña muda en ángulo recto consigo mesma e os muros bloqueados a ela séguena, cos seus muros unidos, nun só paso. Un muro bloqueado a unha liña de reixa non se pode separar dela por si mesmo (mova a liña, ou desbloquee o muro); unha liña de reixa xirada de xeito que un muro bloqueado non poida manterse en ángulo recto sobre ela recházase. Cambiarlle o nome á liña mantén o bloqueo; eliminala quita o bloqueo.

## Lonxitude: que lado mantén o sitio e que mide

- **Crecer desde** (Propiedades dun muro): **O inicio mantén** (o extremo move), **O fin mantén** (o inicio move) ou **O centro mantén** (ambos extremos moven a metade). Mentres escribe a Lonxitude, a planta marca o punto que se mantén. O muro unido no extremo que se move muda en ángulo recto consigo mesmo e conserva o seu ángulo.
- **Medir desde** (xunto a Cotas na planta, nas Propiedades e en Configuración › BimCraft › Muros): a liña central, a cara interior ou a cara exterior. O campo Lonxitude e as cotas de muro da planta len o mesmo, así que coinciden. Comeza na liña central.
- Para mover un muro sen as súas uniones (rómpense, o muro mantén a súa identidade), manteña premida {{key:Alt}} mentres arrastra o seu asa central.

## Para saber

- Estas receitas son as da especificación da ferramenta Muro (páxinas 4 a 9). O estilo de unión e a prioridade de capa están feitos para muros rectos; a prioridade de capa só se ve na planta (non en seccións, alzados nin en 3D, onde un muro é un só corpo), non nos nodos de tres muros ou máis, e as membranas non se arrastran.
- O estilo dunha unión gárdase no seu rexistro no ficheiro IFC (o nome do `IfcRelConnectsPathElements`, por exemplo `CadCraft join L butt 1`), para que outros programas sigan lendo a unión e un ficheiro máis antigo se abra con inglete.
- Os bloqueos e as uniones gárdanse no ficheiro IFC (os bloqueos como `CadCraft_WallHolds` no proxecto, as uniones como `IfcRelConnectsPathElements`), así que están alí cando volve abrir o ficheiro.
- Os muros curvos pódense dividir, volver unir e quitarlles un tramo; non se desprazan nin se bloquean.
- Vexa tamén [Debuxar muros](topic:draw-walls), [Cambiar un muro, porta ou xanela](topic:change-a-wall-or-door) e [Dar forma a un muro](topic:wall-shape).
