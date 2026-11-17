---
title: Escaleiras e barandillas
summary: Debuxe escaleiras rectas, en L, en U e de peldaños en abanico, que calculan as contrahuellas e os peldaños a partir da altura entre pisos, con pasamáns e balaustres, e o oco da escaleira cortado no piso de enriba; debuxe guarda-corpos ao longo de terrazas e ao redor de ocos.
keywords: espiral, escaleira de caracol, escaleira, escaleiras, tramo, contrahuella, peldaño, descansillo, peldaño en abanico, escaleira en L, escaleira en U, dobre tramo, pasamáns, guarda, guarda-corpos, barandilla, balaustre, poste, poste de escaleira, oco da escaleira, altura libre, terraza, balcón
from: 16e5ace4
---

## Que vai facer

Engada escaleiras entre niveis e barandillas onde a xente as necesite. Unha escaleira calcula os seus propios chanzos a partir da altura entre os niveis, mantense dentro dos límites residenciais habituais, pon pasamáns nos seus lados abertos e corta o seu oco no piso de enriba.

## Debuxar unha escaleira

1. No nivel onde comeza a escaleira, abra {{ui:Compilación}} e escolla {{ui:Escaleira}}.
2. Escolla o tipo —**Recta**, **En L cun descansillo**, **En U cun descansillo** ou **En L con peldaños en abanico**—, o **xiro**, a **largura** e onde van os **pasamáns**.
3. Faga clic onde comeza a escaleira: no centro do bordo dianteiro do chanzo inferior.
4. Mova o punteiro no sentido en que sobe a escaleira; os chanzos seguírao, co número de contrahuellas e de peldaños. Encaixa nos muros e en incrementos de 15°; manteña premida {{key:Shift}} para mantela en cuadro.
5. Faga clic. {{key:Esc}} comeza de novo.

## Debuxar unha escaleira de caracol

1. Abra {{ui:Compilación}}, escolla {{ui:Escaleira}} e logo escolla **De caracol** como tipo.
2. Escolla o **Xiro**, o sentido en que se enrola ao subir (a esquerda é en sentido contrario ás agullas do reloxo).
3. Faga clic no centro do seu poste.
4. Faga clic no sentido en que aponta o peldaño inferior.

Comeza cunha largura de 30" (o peldaño, desde o poste ata o exterior), cun poste de 4½". As contrahuellas calcúlanse a partir da altura entre pisos, como máximo 9½" por defecto. Os peldaños teñen 7½" de fondo na liña de paso, a 12" do poste. O pasamán vai polo exterior.

En **Propiedades**, unha escaleira de caracol engade o **Poste central**, co seu diámetro. O campo **Peldaño** mídese na liña de paso. As súas comprobacións son valores predeterminados etiquetados para escaleiras de caracol: 26" de ancho libre, polo menos 6¾" de peldaño na liña de paso, contrahuellas como máximo de 9½" e pasamáns de 34"–38". Non son cálculos de enxeñería; o responsable municipal de obras decide.

## Como se calculan os chanzos

A altura entre o piso do nivel e o nivel de enriba divídese en contrahuellas iguais, non máis altas que 7¾", e cada peldaño ten 10" de fondo (as dúas cousas pódense cambiar en **Propiedades**). Un descansillo conta como un chanzo; os peldaños en abanico son tres chanzos abanicados arredor da esquina interior. Ao cambiar a altura dun nivel, cada escaleira del calcúlase de novo.

:::warning
7¾" de contrahuella, 10" de peldaño, 36" de largura, 6'-8" de altura libre e pasamáns de 34"–38" son valores predeterminados etiquetados segundo a normativa residencial habitual, non cálculos de enxeñería. **Propiedades** indica cales se cumpren; o responsable municipal de obras decide o que se aplica.
:::

## Cambiar unha escaleira

Selecciónea (faga clic nela no plano ou na vista 3D) e cambie en **Propiedades**: o seu tipo e xiro, a largura, a contrahuella máis alta, o fondo do peldaño, os pasamáns e a súa altura, e **Cortar o piso de enriba** para o oco da escaleira. Por debaixo móstranse as contrahuellas e os peldaños que quedaron.

## O oco da escaleira

Cando o nivel de enriba ten un piso, a escaleira corta o piso onde os chanzos deixarían menos de 6'-8" de altura libre. O corte móvese coa escaleira e desaparece cando se elimina a escaleira.

## Debuxar unha barandilla

1. Abra {{ui:Compilación}} e escolla {{ui:Barandilla}}.
2. Escolla **Guarda-corpos** (36" de alto) ou **Pasamán**, e a súa altura.
3. Faga clic ao longo do bordo —unha terraza, un balcón, ao redor dun oco de escaleira— e faga dobre clic ou prema {{key:Enter}} para rematar.

As barandillas levan postes nos seus extremos e esquinas, e balaustres con separacións menores de 4". Seleccione unha para cambiar o seu tipo, a súa altura ou a distancia por riba do piso á que comeza.

## Debuxar un valado

Escolla **Valado** na mesma ferramenta Barandilla, estableza a súa altura (1800 mm como valor inicial), faga clic ao longo da liña do valado e prema {{key:Enter}}.

- O valado leva un poste en cada extremo e en cada esquina, e un poste como máximo cada 2,4 m entre eles. Un valado de paneis ten un panel entre postes; un valado de travesas ten dúas travesas. Estes tamaños son opcións habituais, non un requisito normativo: a normativa local limita a altura dun valado.
- É un só elemento do modelo (un IfcRailing chamado Fence) cun conxunto de propiedades {{ui:CadCraft_Fence}}: estilo, altura, postes, paneis, travesas, portelas, lonxitude e superficie dos paneis. Un só paso de desfacer.
- Non se debuxan aquí: portelas (o xerador de CivilCraft distribúeas), piquetes de valado, o terreo (o valado apóiase no nivel) nin a selección dun único poste.

## O que se garda

Unha escaleira gárdase como escaleira IFC formada por tramos (con contrahuellas, peldaños, altura de contrahuella e lonxitude de peldaño), descansillos, peldaños en abanico e pasamáns; o oco da escaleira é unha abertura na laxe do piso de enriba. As barandillas son barandillas IFC coa súa lonxitude e o número de balaustres e postes.
