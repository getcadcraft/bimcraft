---
title: Traballar con capas e follas
summary: Active e desactive as capas do debuxo, cambie entre o espazo de modelo e as follas, e entenda como as follas mostran o modelo a través das súas ventás gráficas.
keywords: capas, activar, desactivar, conxelar, descongelar, follas, layouts, espazo de papel, lapelas, ventás gráficas, xestor de capas, la
from: a9a16b53
---

## Que vai facer

Limpe a vista dun debuxo cargado desactivando capas, e logo mire as follas do debuxo unha a unha.

## Pasos: capas

1. Abra un DWG ou DXF.
2. Busque a lista {{ui:Capas}} á esquerda. Cada capa ten unha caixa de selección, unha mostra de cor e o seu nome.
3. Desmarque unha capa para ocultar todo o que hai nela.
4. Faga clic en {{ui:Todas desactivadas}} para ocultar todas as capas.
5. Marque só as capas que quere ver.
6. Faga clic en {{ui:Todas activas}} para mostralo todo de novo.

## Que debe ver

As capas desaparecen e volven aparecer á vez, en {{ui:Modelo}} e en todas as follas. As capas que están desactivadas ou conxeladas no propio debuxo empezan desmarcadas.

## Pasos: follas

1. Mire a fila de lapelas enriba do debuxo: {{ui:Modelo}}, e despois cada folla polo seu nome.
2. Faga clic nunha lapela de folla.
3. Mire a folla: o papel está sobre un escritorio máis escuro, e cada ventá gráfica mostra a súa parte do modelo á súa propia escala e ángulo.
4. Amplíe unha ventá gráfica para ler o detalle. Estase ampliando a folla, non a ventá, así que toda a folla se move xunta.
5. Faga clic en {{ui:Axustar}} ou faga dobre clic para ver de novo a folla completa.

## Como funcionan aquí as follas

Unha folla (un layout, ou espazo de papel) contén unha cartela e ventás gráficas que miran ao espazo de modelo. BimCraft debuxa cada ventá gráfica recortada ao seu bordo, á súa propia escala e xiro, e oculta as capas conxeladas nesa ventá. A primeira ventá gráfica de cada folla é a propia folla e non se debuxa dúas veces.

## Erros habituais

- **Esperar que os cambios de capas se garden.** Os axustes de capas só afectan á vista, ata que abra outro ficheiro.
- **Esperar control de capas por ventá gráfica.** A lista {{ui:Capas}} cambia unha capa en todas partes. As capas conxeladas nunha ventá polo propio debuxo seguen conxeladas aí.
- **Buscar un buscador de capas ou estados de capas.** Aínda non está feito. A lista está na orde do debuxo.
- **Esperar traballar dentro dunha ventá gráfica.** Non hai nada que activar: BimCraft só mostra a folla. Use {{ui:Modelo}} para ver o espazo de modelo directamente.
