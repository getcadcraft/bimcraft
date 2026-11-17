---
title: Reproducir unha inundación, un vento ou un terremoto no edificio
summary: Auga que sobe polas salas, presión do vento en cada piso ou un terremoto que sacode os pisos, reproducidos nunha planta ou nun alzado cun control de tempo. Modelos simples cos seus supostos listados; non é unha comprobación normativa nin un deseño estrutural.
keywords: perigo, inundación, vento, terremoto, sísmico, deriva, balance, cortante na base, nivel da auga, clima, escenario, nivel do mar, reprodución, piso, período
from: ff0d34d1
---

A sección {{ui:Hazard playback}} do panel esquerdo reproduce un perigo sobre o modelo IFC aberto. Non se muda nada no modelo.

:::warning
Son **modelos simples para ver o que un perigo fai a esta disposición**, non un estudo de inundacións, unha comprobación da norma de vento nin un deseño estrutural. Cada resultado enumera os seus supostos.
:::

## Inundación

Estableza o nivel máis alto da auga por riba do piso máis baixo e os minutos que tarda en subir, manterse e baixar. A auga entra nunha sala por unha abertura cuxo peitoril xa superou, e as salas unidas a salas húmidas por aberturas por debaixo da auga quedan ao mesmo nivel (cuasiestático). A táboa indica cando se molla cada sala por primeira vez e a que fondo; a planta reproduce o proceso. Escriba a maior cantidade de auga que pode admitir unha sala, e as salas que a superen aparecen como avisos. **Futuros climáticos:** cargue o seu propio ficheiro de escenario (JSON ou CSV cun ano, unha subida do nivel do mar e un factor de inundación) e escolla un ano. Ou active o complemento Futuros climáticos e escolla un escenario e un ano: a inundación execútase dúas veces, a actual xunto á futura (vexa "Futuros climáticos: inundación, calor e incendio forestal en 2050 e 2080"). Os tipos Exposición a incendios forestais e Calor: ficheiro de tempo futuro tamén están nesta mesma lista.

## Vento

A presión segue ½ρV², coa velocidade que aumenta coa altura; a forza sobre un piso é esa presión por un factor de racha, os dous coeficientes de presión, a largura e a altura do piso. Obtén o cortante, o momento de volcamento e o balance.

## Terremoto

Un edificio de cortante: unha masa por piso (superficie en planta × quilogramos por metro cadrado, que vostede define), a mesma rixidez en cada piso axustada ao primeiro período que indique (unha décima de segundo por piso se o deixa en branco, e así o indica), amortecemento e un movemento do solo simulado (un pulso ou ruído filtrado) á aceleración máxima que escolla. O resultado é a deriva de cada piso, as aceleracións dos pisos e o cortante na base; o alzado reproduce o balance, debuxado máis grande do que é. Escriba unha razón de deriva admisible e os pisos que a superen aparecen como avisos. É elástico: nada cede nin fisura.

## Rixidez dos pisos segundo o marco de análise

Para un terremoto ou para o balance por vento, escolla **O marco de análise** como fonte da rixidez en lugar de escribir un período. Empurrase cada piso de lado por quendas, resólvese o marco (vigas, piares, contraventamentos, lousas) e a rixidez dos pisos con todo traballando xunto impulsa a execución. O peso é o dos propios elementos máis a carga do piso por metro cadrado que estableza na caixa de cada planta. Móstrase o primeiro período real. É elástico: nada cede, e a torsión non se modela. Para o vento, as forzas por piso seguen sendo as supostas de arriba (un perfil de lei de potencias, o seu factor de racha e os coeficientes de presión fixos, non unha norma de vento); só o balance vén do marco, ao resolver a matriz de rixidez completa do marco fronte a esas forzas. O modelo necesita un IFC cun marco que a lapela Análise poida ler.

## Unidades

As profundidades da auga, o balance e a deriva por piso, as distancias e as superficies móstranse nas {{ui:Units}} que escolleu. As forzas (kN), os tempos e as aceleracións conservan as súas propias unidades, e un valor que escriba nunha caixa etiquetada en metros permanece en metros. O mesmo vale para os resultados de evacuación, luz natural, calefacción e refrixeración e mobiliario: lonxitudes, superficies e volumes seguen a súa escolla; a presión, o caudal, a temperatura, a enerxía e a potencia nunca se converten.
