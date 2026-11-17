---
title: Analizar o pórtico estrutural
summary: Esforzos, reaccións e frechas das vigas, piares e contraventos do modelo baixo as hipóteses de carga e as combinacións que fixe, gardadas no IFC. Unha axuda para a análise, non unha comprobación normativa.
keywords: análise, unidades, pés e polgadas, unidade de visualización, análise estrutural, comprobacións de deseño, aproveitamento, laminado, soldado, AISC 360, EN 1993-1-1, análise do pórtico, modelo analítico, método da rixidez, cargas, hipótese de carga, combinación, carga permanente, sobrecarga de uso, peso propio, reaccións, momento flector, cortante, esforzo axil, frecha, forma deformada, apoios, articulado, empotrado, liberación, informe, pdf, csv, craftscript, frame3d, vigas, piares, barras
from: b93b58c4
---

A lapela {{ui:Análise}} á dereita atopa os esforzos nas vigas, piares e contraventos do modelo aberto, as reaccións nos pés dos piares e canto se dobran as barras, para as cargas que lle dea.

:::warning
É unha **axuda para a análise, non unha comprobación normativa**. A análise non aplica ningunha norma de cálculo: non dimensiona as barras nin comproba as capacidades, e non escolle os coeficientes de carga. Un enxeñeiro comproba o modelo analítico, as súas cargas e os seus apoios, e decide o que significan os números. O bloque {{ui:Comprobacións de deseño}} que hai debaixo comproba os perfís laminados de aceiro en I segundo AISC 360 ou EN 1993-1-1, unha axuda ata que un enxeñeiro o revise: vexa [Comprobacións de deseño](topic:frame-analysis#design-checks).
:::

## Executalo

1. Abra un modelo IFC e a lapela {{ui:Análise}}.
2. Seleccione unha ou varias vigas, piares ou contraventos na vista, escolla un {{ui:Caso}}, unha {{ui:Carga}} e unha {{ui:Dirección}}, escriba o valor e prema {{ui:Engadir carga}}: kN/m para unha carga repartida ao longo dunha barra, kN para unha carga puntual.
3. Prema {{ui:Executar análise}}.

A táboa lista o maior esforzo axil de cada barra, os cortantes, os momentos flectores, a torsión e a frecha; faga clic no nome dunha barra para seleccionala na vista. Debaixo están as reaccións. {{ui:Sobre o modelo}} debuxa a forma deformada, ou unha acción como diagrama xunto a cada barra. Os resultados quedan desactualizados cando cambia o modelo: execútea de novo.

Cada carga e cada axuste é un cambio na lista {{ui:Cambios}}: {{ui:Desfacer}} o desfai, e {{ui:Gardar como IFC}} consérvao no ficheiro (o conxunto de propiedades `CadCraft_Analysis` do proxecto), así que a próxima vez que se abra o modelo aquí as súas cargas seguen aí.

## Como se fai o modelo analítico

- Cada IfcBeam, IfcColumn e IfcMember cuxa forma sexa unha única extrusión recta convértese nunha barra sobre a liña do centroide da súa sección. As propiedades da sección saen do perfil: formas en I, U, L e T, rectángulos e tubos, círculos e tubos redondos, ou calquera contorno pechado (entón a constante de torsión é unha estimación, e así se indica no informe). Todo o demais déixase fóra e cóntase.
- Nun modelo, as vigas paran na cara dun piar e quedan baixo o chan. Cada extremo de barra lévase ao longo da súa propia liña ata o eixe da barra á que se une, cando ese eixe está próximo (a unha distancia aproximada do tamaño das seccións), e esa barra divídese alí. O informe indica cantos extremos se moveron.
- Os **pés dos piares** onde non hai nada por debaixo son apoios: empotrados (o inicio) ou articulados (suxeitos no lugar e contra a torsión, libres para xirar).
- Os **extremos das vigas** son ríxidos ou articulados segundo a regra {{ui:Extremos de vigas sen unión}}; os **contraventos** (IfcMember) van articulados nos dous extremos. Seleccione unha soa barra para darlle aos seus extremos, ou ao pé dun piar, unha regra propia.
- Materiais por nome: formigón (E = 30 GPa), madeira (E = 11 GPa), e en caso contrario aceiro (E = 200 GPa).

Se o pórtico se pode mover sen dobrar nada (un mecanismo), a execución para e indica onde e en que sentido.

## Hipóteses, combinacións, signos e informe

A análise comeza con **Permanente** (peso propio), **Sobrecarga** e **Permanente + sobrecarga**; engada hipóteses e combinacións cos coeficientes que pida a súa norma de cálculo. N > 0 é tracción; My > 0 pon o lado −z local da barra en tracción (unha viga que flecta baixo a gravidade ten My > 0). {{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} recollen as hipóteses, as seccións, as cargas, as reaccións cos seus totais, os esforzos das barras, os desprazamentos e unha envolvente. {{ui:Exportar como CraftScript}} escribe o pórtico para o espazo Script de PartCraft, onde a función de biblioteca `frame3d` o resolve en código lexible.

O método é o da rixidez directa, lineal e de primeira orde salvo que marque *Segunda orde (P-Delta)*, e está comprobado con casos de libro de texto.

**Segunda orde (P-Delta).** Marque *Segunda orde (P-Delta)* xunto a Executar: cada combinación resólvese de novo cos esforzos axiais das barras actuando sobre o pórtico deformado (cada barra cortada en 4 partes, para que conte tamén a flexión dunha barra entre os seus extremos), ata que os esforzos axiais se estabilicen. A liña de resultado indica o número de pasadas e canto aumentou o desprazamento lateral; os momentos, as frechas, as comprobacións de deseño e o informe usan entón estes resultados. Por riba da carga crítica elástica do pórtico, a execución para e así o indica. É elástica con rotacións pequenas, só a flexión, sen redución de rixidez nin cargas nocionais (non é por si soa o método de análise directa de AISC); as laxes, os muros e os chans ríxidos seguen sendo de primeira orde.

**Presión sobre as laxes.** Para as laxes de formigón (a análise lee unha laxe como placas cando o seu material é formigón), o bloque Cargas ten {{ui:Presión sobre todas as laxes}}: escriba kN/m², escolla a hipótese de arriba e prema {{ui:Engadir ás laxes}}. Aplícase sobre todas as laxes que atopou a análise, cara abaixo, e lístase cunha ligazón Eliminar. É unha única presión para todas as laxes, non unha por laxe, e non é unha carga normativa: escriba o valor que lle dea o seu enxeñeiro.

**Frecuencias naturais (elementos finitos).** O bloque {{ui:Elementos finitos: frecuencias naturais}} que hai debaixo dos resultados atopa os modos máis baixos do mesmo modelo co motor de elementos finitos: vigas cos seus desprazamentos de extremo, laxes e muros como cascas planas de catro nós, chans ríxidos e apoios. Escolla cantos modos (3, 6, 10 ou 20) e o elemento de laxe (a casca de catro nós para laxes grosas ou finas, ou o de laxe fina) e prema {{ui:Calcular as frecuencias}}. A táboa dá a frecuencia de cada modo en Hz, o seu período en segundos e a súa masa modal efectiva en X, Y e Z como parte da masa que pode moverse; {{ui:Amosar no modelo}} debuxa calquera modo do mesmo xeito que se debuxa a forma deformada. A masa é a densidade do material por volume: as cargas non engaden masa, e un material sen densidade non ten masa. O informe (PDF, CSV) inclúe a táboa. É só elástico e para pequenos movementos, e non se xera aquí ningunha carga sísmica ou de vento segundo unha norma. Non é unha comprobación normativa; o seu enxeñeiro revisa os resultados.

**Espectro de resposta, historia no tempo e pushover.** Tres bloques máis sitúanse debaixo das frecuencias, co mesmo modelo de elementos finitos. A masa de todos eles é a densidade do material máis as cargas descendentes das hipóteses que marque, cada unha multiplicada por un factor que escriba (por exemplo, Permanente ao 1 e Sobrecarga á parte que conte como masa).

{{ui:Espectro de resposta}} lee cada modo nun espectro que vostede dá (unha táboa de período e aceleración, ou a forma ASCE 7 a partir de SDS, SD1 e TL; o botón {{ui:Usar os valores do bloque Sísmica}} copia estes do bloque Sísmica) e combina os modos por CQC, SRSS, a regra do dez por cento ou unha suma absoluta, e despois combina as direccións X, Y e Z (100 % + 30 % ou SRSS). Dá o cortante basal, as derivas de piso, os esforzos nos extremos das barras e unha táboa de modos que avisa cando os modos usados levan menos do 90 % da masa. Pode escalar os resultados por un factor ou ata un cortante basal que escriba; o bloque nunca calcula ese cortante por si mesmo. Os resultados non levan signo.

{{ui:Historia no tempo}} executa unha aceleración do chan por superposición modal (exacta para as rectas do rexistro entre puntos) ou por integración directa (aceleración media de Newmark con amortecemento de Rayleigh). A entrada é un seno ou un pulso inventado (sempre marcado como sintético), un rexistro que pegue, ou un ficheiro de texto que abra (tempo e aceleración, unha aceleración por liña cun paso, ou un ficheiro tipo PEER cunha cabeceira DT=; en g ou m/s²). Dá o desprazamento da cuberta e o cortante basal en función do tempo, a deriva de cada nivel e a envolvente dos esforzos nos extremos das barras. Os modelos cun rexistro moi longo consérvano só durante a sesión.

{{ui:Empuxe progresivo (pushover)}} empuxa a cuberta lateralmente en pasos pequenos (patrón como o do primeiro modo, ou uniforme), con rótulas plásticas nos extremos das barras que teñen forma de I. Unha rótula cede no momento plástico, que baixa a medida que crece o esforzo axil (calculado a partir da forma debuxada, sen ter en conta os acordos); o endurecemento é opcional, o P-delta é opcional, e pode aplicarse primeiro unha combinación de gravidade. Dá a curva de capacidade (cortante basal en función do desprazamento da cuberta), a primeira rótula, e o estado e a rotación plástica de cada rótula. {{ui:Executar a historia no tempo non lineal}} executa as mesmas rótulas baixo o rexistro do bloque Historia no tempo, en modelos pequenos. As rótulas fórmanse só nos extremos das barras (poña un nodo onde debe formarse unha dentro dun ván); unha barra liberada en ambos os extremos non recibe ningunha; non se modelan a cedencia nin o pandeo dos contraventos; as laxes e os muros quedan elásticos; non se dan criterios de aceptación. Non é unha comprobación normativa; o seu enxeñeiro revisa os resultados. Os axustes gárdanse co modelo, e o informe inclúe as táboas.

Non está feito aínda: pandeo, unha corrección de masa ausente para o espectro de resposta, escalado de rexistros, criterios de aceptación para as rótulas (a resposta dinámica xa está, enriba), cargas de área distintas da presión única sobre todas as laxes, excentricidades das barras, contraventos que só traballan a tracción, muros e laxes no pórtico, e comprobacións normativas de perfís soldados e de seccións distintas dos perfís laminados en I. Vexa [Aínda non está feito](topic:not-built-yet).

## Unidades

As lonxitudes seguen a unidade que escolla na barra de ferramentas ({{ui:Unidades}}), como o resto de BimCraft: as posicións das cargas que escribe e ve ({{ui:Desde}}, {{ui:A}}, {{ui:En}}), os puntos das cargas nodais e das reaccións, as alturas de piso en {{ui:Sísmica}}, e as columnas de flecha e deriva (pés e polgadas amosan estas lonxitudes pequenas en polgadas decimais). Cambie a unidade en calquera momento; a lapela redebúxase. As forzas quedan en kN e kN·m, e o informe (PDF, CSV) e o ficheiro CraftScript quedan en milímetros, con a unidade escrita. As medidas das seccións, os diámetros das barras e os recubrimentos do bloque {{ui:Formigón}} quedan en milímetros, como se chaman.

## Comprobacións de deseño

O bloque {{ui:Comprobacións de deseño}} (o mesmo que o de DetailCraft) toma unha {{ui:Norma de cálculo}}, ASCE 7 + AISC 360 ou EN 1990 + EN 1993-1-1, e unha {{ui:Calidade do aceiro}}. Dea a cada hipótese de carga o seu tipo (permanente, sobrecarga, vento …) e {{ui:Crear combinacións}} escribe as combinacións de cargas da norma a partir das súas hipóteses; a análise despois as executa como calquera outra combinación.

{{ui:Comprobar barras}} comproba entón cada **perfil de aceiro en I laminado** coas comprobacións de DetailCraft (tracción, compresión con pandeo, flexión con pandeo lateral-torsional, cortante, flexión con esforzo axil, frecha; as cláusulas están no informe) e amosa canta capacidade usa, coloreada no modelo. É unha **axuda ata que un enxeñeiro a revise**.

**Que barras se comprobam.** Un perfil IFC non indica se un perfil de aceiro en I é laminado ou soldado, así que BimCraft só o considera laminado cando o nome do seu perfil (ou, se non o ten, o nome do tipo do elemento) é unha medida das táboas AISC W ou S ou das táboas EN 10365 IPE, HEA ou HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **e** o canto, o ancho, a alma e as ás no ficheiro coinciden con esa medida dentro dun 1 %. Todo outro perfil en I (unha viga de chapa, unha medida con outro nome, unha medida editada) tómase como soldado e volve como **sen comprobar**, igual que os tubos, as cantoneiras, os perfís en U e outras seccións, as partes esveltas e a torsión. Comprobe esas barras cun enxeñeiro.
