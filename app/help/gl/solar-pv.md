---
title: Matrices solares fotovoltaicas, sombreado e produción
summary: Coloque matrices solares en cubertas ou no terreo, dea sombra desde o modelo, estime a enerxía anual, dimensione as cadeas e cree os datos do diagrama unifilar. Todos os datos de entrada se amosan e o módulo inicial e as perdas son xenéricos.
keywords: solar, fv, fotovoltaico, matriz, módulo, cuberta, sombreado, produción, kwh, kwp, dimensionamento de cadeas, inversor, unifilar, liña simple, inclinación, azimut, separación entre filas
from: adf4aaf3
---

## Que vai facer

Abra o panel **Solar FV**. Escolla unha cara de cuberta (a súa inclinación e orientación léense do modelo) ou coloque unha matriz no terreo cunha inclinación e orientación; os módulos encáixanse dentro con retranqueos e cóntanse, o que dá a potencia en CC en kWp. Colocar a matriz escríbea no modelo como dispositivos solares, nun só paso de Desfacer.

## Sombreado, produción e cadeas

- **Sombreado** lanza un raio desde cada módulo cara ao sol para os días típicos de cada mes, contra a propia xeometría do modelo, polo que contan os edificios veciños, os peitoris e as filas que hai diante. Só se reduce a luz solar directa, e unha matriz parcialmente sombreada perde potencia en proporción.
- **Produción** dá kWh por mes e ano, kWh por kWp e a relación de rendemento. O sol vén dos seus propios totais mensuais sobre unha superficie horizontal se os escribe. Sen eles, o panel usa un límite superior de ceo despexado, e dío. **Obter o clima de NASA POWER** cun botón na lapela Produción: envía só a latitude e a lonxitude do emprazamento, unha vez, e garda a resposta neste computador (comprobado desde o navegador o 2026-10-30). PVGIS non permite que unha páxina web lea a súa resposta, así que a lapela ofrece unha ligazón que abre os datos mensuais de PVGIS para o emprazamento nunha nova lapela; pegue o que mostra na caixa e énchense os doce meses.
- **Cadeas** comproba os módulos por cadea contra a xanela de tensión do inversor no día máis frío e no máis quente, e as cadeas en paralelo contra a súa corrente.
- **Unifilar** crea os datos do diagrama (matriz, combinador, seccionador, inversor, panel, rede) con tamaños de cable e fusibles a partir dos factores que escriba. Son datos e un SVG; o complemento Electrical de CadCraft pode colocalos como símbolos.

O módulo, o inversor, as perdas e os factores de cable que trae BimCraft son exemplos xenéricos, etiquetados en cada resultado. Escriba os datos do fabricante e os valores normativos cos que deseña, e que os revise a persoa que responde do deseño.
