---
title: Dimensionar tubaxes e condutos, comprobar a ocupación de cables e a iluminación
summary: Comprobe o dimensionamento das tubaxes e condutos de subministración coa perda de presión, encamiñe cables por bandexas e canalizacións e vexa a súa ocupación, e calcule a iluminancia nas salas a partir de ficheiros IES ou EULUMDAT. Os valores por defecto están etiquetados; escriba os valores do código en vigor.
keywords: dimensionamento, dimensionamento de tubaxes, dimensionamento de condutos, perda de presión, unidades de aparello, demanda, hunter, hazen-williams, velocidade, fricción, fricción igual, presión do ventilador, rexistro, camiño crítico, bandexa de cables, canalización, ocupación, cuadro de cables, ies, ldt, eulumdat, fotometría, iluminancia, lux, uniformidade, cálculo de iluminación, densidade de potencia, mep, cálculos, problemas
from: 9cb90815
---

## Que vai facer

Debuxe as tubaxes, os condutos, as bandexas de cables e as canalizacións como de costume, e logo abra o panel **Cálculos**. Cada lapela lee o modelo, mostra unha táboa e lista o que está mal como Problemas no panel ⚠. Cando un tamaño resolvería un Problema, **Aplicar tamaños** cambia os tramos nun só paso de desfacer.

Son axudas ao debuxo. Cada valor por defecto aparece etiquetado na pantalla, e ningún deles é unha táboa de código: escriba os números da norma á que deseña e faga que o enxeñeiro responsable revise o resultado.

## Tubaxes

1. Escolla a clave do **sistema** (auga fría é `cw`, auga quente `hw`).
2. Defina a velocidade máxima e, se quere comprobar a presión, a presión na orixe e a presión mínima que precisa un aparello.
3. Prema {{ui:Comprobar}}.

Cada tubaxe transporta a demanda das unidades de aparello que hai por debaixo dela. A demanda procede dunha curva de unidades de aparello fronte ao caudal, do xeito que describiu Hunter. **A curva integrada é un exemplo, non unha táboa de código**; os Problemas así o indican ata que escriba a súa propia. A fricción é Hazen–Williams, os accesorios son coeficientes de perda, e unha subida custa 9,8 kPa por metro. As unidades dun aparello proceden do seu tipo, ou do número que defina coa ferramenta de asistente `loads_set`.

## Condutos

Defina o sistema, a taxa de fricción (fricción igual) ou unha velocidade, e calquera perda de batería, filtro ou silenciador. Os terminais toman o seu caudal de `loads_set` no difusor. A táboa mostra a velocidade e a fricción por peza, a **presión do ventilador** no camiño crítico e a presión que debe absorber o rexistro de cada outro terminal. As perdas nos accesorios usan coeficientes por defecto redondeados, non unha base de datos de accesorios.

## Bandexas de cables e canalizacións

Debúxeas coa ferramenta Conduto: os sistemas **Bandexa de cables** e **Canalización** gárdanse como portadores de cables, así que outros programas as len como bandexas e canalizacións. Na lapela Cables, pegue a lista de cables (etiqueta, diámetro exterior en mm, cantidade, desde, ata). `from` e `to` son a etiqueta dun equipo ou un punto `x,y,z` en milímetros. Os cables seguen o camiño continuo máis curto a través das bandexas e canalizacións; cada tramo mostra a súa ocupación fronte aos límites que escriba, e o cuadro gárdase en CSV cunha lonxitude que inclúe unha porcentaxe de holgura e os extremos.

## Iluminación

Asigne a cada luminaria o seu ficheiro IES (LM-63) ou EULUMDAT coa ferramenta de asistente `photometry_set`. Escriba os obxectivos, o espazamento da malla e a altura do plano de traballo. O resultado é só iluminancia **directa**: sen interreflexión nin sombras, polo que nunha sala é un límite inferior.

## Rociadores contra incendios

O complemento **Rociadores contra incendios** ten a súa propia lapela; consulte a súa axuda.
