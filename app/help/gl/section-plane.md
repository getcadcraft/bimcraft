---
title: Corte un modelo IFC cun plano de sección
summary: Corte o modelo 3D desde arriba, de fronte ou de lado, ou conserve só o que está dentro dunha caixa de sección ou dun volume de varias caixas con caras inclinadas, para ver o interior; mova o corte arrastrando ou escribindo, inviértao, e escolla o que mostra o corte.
keywords: sección, plano de sección, caixa de sección, empuñaduras, arrastrar, marxe, caixa de selección, caixa de recorte, corte, recorte, rebanar, corte en planta, planta, alzado, interior, inverter, desprazamento, volume de sección, sección escalonada, en L, inclinación, corte inclinado, plano oblicuo, plano extra
from: 6315e71a
---

## O que vai facer

Corte un modelo IFC cun só plano para ver o seu interior: desde arriba para unha planta, ou de fronte ou de lado para unha sección do edificio.

## Pasos

1. Abra un modelo IFC. Vexa [Abrir un modelo IFC e mirar en 3D](topic:open-ifc-model).
2. Prema en {{ui:Section}} na barra de ferramentas, ou prema {{key:X}}. O modelo córtase a media altura, e aparece unha barra debaixo da barra de ferramentas.
3. Escolla desde onde cortar: {{ui:Top}}, {{ui:Front}} ou {{ui:Side}}. {{ui:Front}} e {{ui:Side}} tamén xiran a vista para mirar o corte.
4. Mova o corte: arrastre o control deslizante {{ui:Offset}}, ou escriba unha distancia en metros na caixa e prema {{key:Enter}}. Tamén pode escribir milímetros, por exemplo `1200 mm`.
5. Prema en {{ui:Flip}} para quedarse co outro lado do corte.
6. Prema un elemento no corte para ver as súas propiedades.
7. Prema en {{ui:Off}}, prema de novo en {{ui:Section}}, ou prema {{key:X}} para quitar o corte.

## Unha caixa de sección

Prema en {{ui:Box}} na mesma barra para conservar só o que está dentro dunha caixa. Cada un de {{ui:X}}, {{ui:Y}} e {{ui:Z}} ten dous controis deslizantes: onde comeza a caixa e onde remata, en metros desde o bordo do modelo. Os valores móstranse xunto a eles.

- {{ui:Box round the pick}} axusta a caixa aos elementos que seleccionou e achega a vista a eles. Deixa 300 mm de marxe por cada lado; cambíeo en {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Room round the pick}}.
- Con elementos seleccionados, {{ui:Show}} › {{ui:Section box round the pick}} ou {{key:Shift+X}} fan o mesmo nun só paso, aínda que non haxa corte activo.
- As **empuñaduras** da caixa móvena co punteiro: arrastre un cadrado no centro dunha cara para mover esa cara, un no centro dunha arista para mover as dúas caras que se atopan alí, ou un nunha esquina para mover as tres. Os controis deslizantes seguen. En {{ui:Top}} unha esquina move a caixa en planta; en {{ui:Front}} ou {{ui:Side}}, en alzado.
- {{ui:Whole model}} abre de novo a caixa a todo o modelo.
- {{ui:Top}}, {{ui:Front}} ou {{ui:Side}} volven a un só plano.

## Un volume de varias caixas, caras inclinadas e planos extra

Unha caixa non é sempre a forma que precisa: unha sección escalonada, unha ala en L, ou un corte ao longo dun muro que non está en escuadra coa cuadrícula.

1. En {{ui:Box}}, prema en {{ui:Add a box}}. O corte conserva o que está dentro de **calquera** das caixas, así que dúas caixas fan un volume escalonado ou en L. A lista ao lado indica a que caixa cambian os controis ({{ui:Caixa 1}}, {{ui:Caixa 2}}…); {{ui:Remove this box}} quita a escollida. Un volume admite ata 8 caixas.
2. Abra {{ui:Tilt and planes}} para dar forma á caixa escollida:
   - Escolla unha {{ui:Face}} e escriba canto se inclina en cada sentido, en graos (ata 80). A cara xira arredor do seu centro; as outras caras quedan onde as poñen os controis. {{ui:Square}} devólvea á súa posición.
   - {{ui:Add a plane}} corta a caixa cun plano máis. {{ui:Faces}} é a dirección á que mira o lado recortado, en graos desde X cara a Y; {{ui:Slope}} é canto xira cara arriba (0 para un plano vertical, 90 para un horizontal); {{ui:Offset}} é a distancia do plano ao centro da caixa, en metros. × elimínao. Unha caixa admite ata 6 planos extra.
3. Onde o volume corta sólidos, as caras cortadas énchense como antes, tamén onde dúas caixas se atopan nun escalón.

:::tip
Se o contorno desaparece e non queda nada, as inclinacións ou os planos non deixan nada dentro desa caixa; a barra indícao. Incline unha cara cara atrás ou cambie o desprazamento dun plano.
:::

## Un edificio xirado no seu emprazamento

Moitos modelos colocan o edificio en ángulo cos eixes do ficheiro (norte verdadeiro, coordenadas compartidas). Cando os muros van en ángulo, unha nova sección comeza en escuadra co edificio: {{ui:Front}}, {{ui:Side}} e a caixa van ao longo dos seus propios muros, e {{ui:Square to the building}} na barra de sección está activado. Prema nel para os eixes do modelo, e de novo para volver (a liña de estado indica canto xira o edificio). Con **Configuración › BimCraft › Un edificio xirado no seu emprazamento › Tal como está colocado no emprazamento**, as seccións e as vistas comezan nos eixes do modelo. Vexa [Configuración](topic:settings).

## O que debe ver

- **Top** mantén o que está debaixo do corte, así que mira cara abaixo ás habitacións. O desprazamento mídese cara arriba desde a base do modelo.
- **Front** mantén o que está detrás do corte, visto de fronte; **Side** mantén o que está máis aló del, visto de lado. O desprazamento mídese desde a fronte ou o lateral do modelo.
- Un contorno fino de cor indica onde está o plano.
- Onde o plano corta un muro, unha laxe ou outro sólido, a cara cortada énchese cunha cor escura, como unha sección debuxada. {{ui:Fill}} na barra activa e desactiva isto.
- O cubo de vista na esquina inferior dereita xira o modelo para mirar o corte desde calquera lado.
- Premer selecciona o que se ve: o que está cortado non se pode seleccionar.

## Erros comúns

- **Non cambiou nada.** O corte pode estar por riba do tellado ou fóra do modelo. Arrastre o control deslizante, ou escriba un desprazamento menor.
- **O desprazamento volveu atrás.** Unha distancia máis aló do modelo lévase ao seu extremo, e a liña de estado indícao.
- **Unha incidencia mostra só parte do meu volume.** Unha incidencia (BCF) conserva unha caixa coas súas caras inclinadas e planos: a primeira caixa do volume. A liña de estado indícao cando crea a incidencia.
- **O corte está oco.** {{ui:Fill}} na barra está desactivado: prema nel para encher as caras cortadas de muros, laxes e outros sólidos.
- **Un corte cheo aparece moteado ou falta unha peza.** O recheo precisa sólidos pechados; un elemento cuxa forma no ficheiro non está pechada (unha folla única, a fololla dunha árbore) déixase sen encher en lugar de pintarse por riba. Un elemento formado por partes de cores diferentes (un marco e o seu vidro) énchese cando as súas partes se pegan.
- **Onde está a barra de sección?** Está na parte superior da vista 3D que corta: na metade 3D en {{ui:Split}}, e debaixo da barra de debuxo en {{ui:Plan}} só. Nunha vista baixa desprázase.

## Seguinte

- [Mostrar e ocultar pisos, espazos e arestas](topic:storeys-and-spaces)
- [Ver un debuxo DWG ou DXF en 3D](topic:dwg-in-3d) — os debuxos en 3D teñen o mesmo plano de sección
