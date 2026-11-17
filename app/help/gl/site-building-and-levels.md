---
title: O emprazamento, o edificio nel e os seus niveis
summary: Debuxe o contorno do emprazamento, coloque e xire o edificio nel, engada niveis a alturas dadas ou reparta a altura do edificio, e debuxe no nivel que escolla.
keywords: emprazamento, planta do emprazamento, liña de edificación, retranqueo, servidume, servidume de paso, dereito de paso, lindeiro, parcela, lote, límite, colocación do edificio, xirar edificio, colocar edificio, niveis, pisos, plantas, engadir niveis, dividir altura, altura entre pisos, IfcSite, IfcBuilding, IfcBuildingStorey, estrutura espacial
from: 48d10c1e
---

## Que vai facer

Configure as partes dun modelo IFC que sosteñen todo o demais: o emprazamento, o edificio nel e os niveis do edificio.

Un modelo organízase como un **emprazamento** que contén un **edificio**, que á súa vez contén os seus **niveis** (pisos); os muros, pisos e todo o demais pertencen a un nivel. {{ui:Ficheiro}} › {{ui:Edificio novo}} configura os tres. Un modelo doutro programa que ten un edificio pero ningún emprazamento recibe un emprazamento a primeira vez que debuxa un: o edificio colócase nel onde xa estaba.

## Debuxar o emprazamento

1. Active {{ui:Debuxar}} e despois escolla {{ui:Compilación}} › {{ui:Emprazamento}}.
2. Faga clic nas esquinas do emprazamento (a ferramenta axústase como a ferramenta Muro). Faga clic de novo na primeira esquina, faga dobre clic ou prema {{key:Enter}} para rematar. {{key:Backspace}} retira unha esquina.
3. A fila amosa a superficie do emprazamento. Debúxeo de novo para cambialo.

O plano de cada nivel amosa o contorno do emprazamento como unha liña de propiedade.

## Colocar o edificio no emprazamento

Con {{ui:Emprazamento}} activado, escriba a **X** e a **Y** do edificio no emprazamento e o seu **Xiro** en graos, ou faga clic en {{ui:Colocar o edificio cun clic}} e faga clic onde vai a orixe do edificio. Todo o que hai no edificio (niveis, muros, cuadrículas, todo o que debuxou) desprázase con el; o emprazamento e o seu contorno quedan no sitio. As plantas seguen amosando cada nivel cadrado co edificio.

## Liñas de edificación e servidumes

As liñas de edificación e as servidumes (servidumes de paso, dereitos de paso) debúxanse no emprazamento como restricións. **Avisan, nunca bloquean**: un muro sobre unha delas debúxase como pediu, e aparece un aviso que nomea o muro e a liña ou servidume nos Problemas. Se move o muro cara atrás, o aviso desaparece. Un aviso pode aceptarse con unha razón (unha dispensa concedida pola autoridade, por exemplo).

- **Liña de edificación a partir de retranqueos.** {{ui:Compilación}} › {{ui:Liña de edificación}}, despois {{ui:Retranqueos}}: escriba a distancia á que queda a liña respecto de cada lindeiro do emprazamento. Os lindeiros numéranse na planta mentres a ferramenta está activa. A liña calcúlase a partir desas distancias e segue o contorno do emprazamento se o debuxa de novo cun número igual de lindeiros. As distancias son as súas, tomadas da escritura ou do plan urbanístico; BimCraft non achega ningunha.
- **Unha liña de edificación debuxada.** Con {{ui:Liña de edificación}} activada, faga clic nos seus puntos e remate con dobre clic ou con {{key:Enter}}. Remate no primeiro punto para unha liña pechada: a área interior é onde se pode construír, e avisa dun muro cunha parte fóra dela. Unha liña aberta só avisa dun muro que a cruza.
- **Unha servidume.** {{ui:Compilación}} › {{ui:Servidume}}: escolla o seu tipo, escriba o seu nome, a súa referencia rexistrada e o seu ancho, despois faga clic na súa liña central e remate (unha franxa), ou péchea no seu primeiro punto (unha área). Avisa dun muro con calquera parte sobre ela, en todos os niveis.
- Un bordo exactamente sobre unha liña está tocando, non cruzando (a tolerancia é de 1 mm).
- A opción de volumetría actual de cada conxunto de opcións compróbase igual que os muros: unha masa fóra do límite, sobre unha liña de edificación ou sobre unha servidume recibe un aviso. Consulte [Opcións de volumetría mantidas lado a lado](topic:massing-options).
- Escolla unha con {{ui:Seleccionar}} para cambiar o seu nome, referencia, tipo ou ancho, movela ou eliminala.

Debúxanse no plano de cada nivel, nas follas e no PDF da planta: as liñas de edificación en trazo discontinuo, as servidumes de puntos, cada unha coa súa etiqueta. No ficheiro IFC cada unha é unha anotación (IfcAnnotation, tipo BuildingLine ou Servitude) no emprazamento, coa súa liña como unha curva simple que outros programas poden ler. A comprobación usa o contorno real de cada muro na planta, cos seus encontros tal como se debuxan; un muro curvo compróbase polo seu propio grosor respecto da súa liña central.

## Engadir niveis

No panel {{ui:Niveis}}, {{ui:Engadir un nivel enriba}} engade un, e {{ui:Engadir un nivel debaixo}} engade un por debaixo do máis baixo (un soto, cunha elevación negativa). {{ui:Engadir niveis…}} engade varios á vez:

- **A estas alturas**: escriba alturas por riba do nivel máis baixo, separadas por comas (por exemplo `12', 24', 36'`). As alturas que xa teñen un nivel omítense.
- **Repartir a altura do edificio**: escriba a altura do edificio e o número de niveis. Os niveis que xa ten móvense ás súas novas alturas desde o máis baixo cara arriba, engádense os que faltan, e os que queden por riba seguen onde están.

Os muros que chegan ao nivel superior seguen o, do mesmo modo que os piares e as rampas.

{{ui:Copiar este nivel…}} (no mesmo panel) copia o que está debuxado no nivel que mira a outro nivel ou a un novo nivel enriba, para que unha planta suba polo edificio nun só paso. Consulte [Debuxar muros](topic:draw-walls).

## Debuxar nun nivel

Cada ferramenta {{ui:Debuxar}} traballa no nivel escollido na lista de niveis da planta (ou escollido no panel {{ui:Niveis}}): o que debuxa pertence a ese nivel.

## Que debe ver

- Cada un destes cambios é un paso: {{key:Mod+Z}} desfai o cambio.
- No ficheiro IFC: o emprazamento (IfcSite) co seu contorno e superficie, o edificio (IfcBuilding) colocado nel, e os niveis (IfcBuildingStorey) do edificio.

Consulte tamén [Coordenadas en BimCraft](topic:coordinates) para a orixe do proxecto e o punto de levantamento.
