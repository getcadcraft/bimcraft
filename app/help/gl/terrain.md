---
title: O terreo do sitio, a plataforma do edificio e a pavimentación
summary: Traer o terreo ao modelo desde puntos de levantamento, curvas de nivel, un escaneo LAS / LAZ, un GeoTIFF, unha superficie LandXML (de CivilCraft) ou algunhas cotas puntuais; cortar a plataforma do edificio da casa cos seus taludes e desmonte / terraplén; colocar entradas, paseos e patios sobre el; entregalo a CivilCraft como LandXML.
keywords: terreo, chan, sitio, topografía, levantamento, puntos, PNEZD, curvas de nivel, LAS, LAZ, LiDAR, GeoTIFF, DEM, cota, cota puntual, pendente, rasante, plataforma, plataforma do edificio, desmonte, terraplén, movemento de terras, liña de enlace, talud, entrada de vehículos, paseo, patio, pavimentación, LandXML, CivilCraft
from: 208298d6
---

## O que vai facer

Coloque a casa no seu sitio. O terreo pasa a formar parte do modelo: móstrase en 3D, córtase en seccións e alzados, e as curvas de nivel aparecen na planta. Baixo a casa escávase unha plataforma do edificio; as entradas e os paseos seguen o terreo, e as sapatas baixan con el.

## Traer o terreo

1. Abra {{ui:Compilación}} e escolla {{ui:Terreo}}.
2. Escolla unha das opcións:
   - **Abrir un ficheiro de levantamento…**: puntos de levantamento (PNEZD, PENZD ou simplemente este, norte, cota; separados por coma, tabulador ou espazo), curvas de nivel nun DXF ou DWG (polilíneas á súa cota, polilíneas 3D), un escaneo LAS ou LAZ (consérvanse os puntos do chan, reducidos a uns por metro cadrado), un GeoTIFF ou unha cuadrícula de cotas ASCII, ou unha superficie **LandXML** como as que exporta CivilCraft (consérvanse os seus propios puntos e triángulos; se o ficheiro contén varias superficies, BimCraft pregunta cal é o terreo; as súas unidades veñen do ficheiro). Escolla primeiro as unidades do ficheiro (LandXML indícaas el).
   - Ou escriba unha **Cota puntual** (desde o chan deste nivel, así que `-1'` é un pé por debaixo del) e prema nos puntos da planta; cambie a cota e prema en máis puntos; logo prema **Crear o terreo**. Tres puntos bastan para comezar.

As coordenadas de levantamento lonxe do modelo (plano estatal, UTM) despázanse ata a casa, e as cotas axústanse para que o terreo na casa quede uns 8" por debaixo do primeiro piso. **Elevar o terreo** en **Propiedades** corrixe isto en calquera cantidade.

## A plataforma do edificio

1. Escolla {{ui:Plataforma do edificio}}.
2. Estableza a **Marxe** arredor da casa, canto está a **plataforma por debaixo do piso** (8" por debaixo dunha laxe, máis por debaixo dun espazo técnico) e os **Taludes** ata o terreo existente (`2:1` = dous pés cara a fóra por cada pé de subida ou baixada).
3. Sinale dentro da casa e prema.

O terreo aplánase baixo a casa e ata a marxe, logo sobe cara á ladeira (desmonte) e baixa ata o lado baixo (terraplén) ata atopar o terreo existente. **Propiedades** do terreo e da plataforma dan os volumes de desmonte e de terraplén. Se move os muros, a plataforma segue o cambio.

## Entradas, paseos e patios

Escolla {{ui:Pavimentación}}, escolla **Paseo**, **Entrada de vehículos** ou **Patio**, e prema nas esquinas. Prema de novo a primeira esquina, faga dobre clic ou prema {{key:Enter}} para rematar. A pavimentación segue a rasante final; cambie o tipo ou o grosor en **Propiedades**.

## As sapatas baixan ata a rasante

Con el terreo no modelo, os muros de arranque e as sapatas dos espazos técnicos seguen o terreo. Ao longo de cada muro, a sapata conserva a súa profundidade baixo o terreo exterior, e baixa en chanzos enteiros de 8" onde o terreo cae (véxase [Cimentacións baixo os muros](topic:foundations)).

## Entregar a CivilCraft

**LandXML para CivilCraft** (na fila Terreo, ou en **Propiedades** do terreo) descarga o terreo existente e a rasante final como ficheiro LandXML. Ábrao en CivilCraft para o movemento de terras, o drenaxe e a nivelación reais.

## Cousas que convén saber

- O terreo necesita un modelo IFC4, como calquera edificio novo.
- As curvas de nivel aparecen na planta do nivel do terreo, á equidistancia fixada en **Propiedades** do terreo; cada quinta é máis grosa.
- O terreo gárdase como elemento de terreo IFC (unha superficie triangulada pechada, para que as seccións a corten); a plataforma e a pavimentación gárdanse con el. Elimine o terreo para comezar de novo: a súa plataforma e pavimentación van con el.
