---
title: La vista en directe
summary: Un panell al costat del model que el mostra amb l'aspecte en temps real, amb sol, ombres i llum rebotada, i que segueix cada canvi que fas; camina-hi i ajusta l'hora del dia i el mes.
keywords: vista en directe, temps real, renderitzat en temps real, recorregut, camina, primera persona, presentació, client, segona pantalla, segona finestra, monitor, hora del dia, sol, estació, mes, ombres, oclusió ambiental, reflexions, llum rebotada, il·luminació global, webgpu, webgl
from: ea5c02bf
---

La vista en directe mostra el model amb l'aspecte en temps real: el cel i el sol segons el lloc i la data de la teva obra, les ombres del sol, les pintures i els materials que has donat als elements, les làmpades, i la llum que rebota de les parets i els terres. Segueix el que fas: si gires la vista 3D, ella també gira; si canvies el model, ho mostra un moment després. No es puja res.

Dibuixa la mateixa escena, pintures, làmpades i sol que [Renderitza una imatge](topic:render); per a una imatge acabada, fes servir aquella.

## Obre-la

1. Obre un model i tria {{ui:Vista en directe}} a la barra d'eines. El panell s'obre sobre l'aplicació, a baix a la dreta.
2. Arrossega la seva barra de títol per moure'l, i estira'n la cantonada per fer-lo més gran.
3. {{ui:Vista en directe en una finestra nova}} (el botó al costat) o {{ui:Finestra nova}} al panell el mou a una finestra pròpia, per a una segona pantalla. Si el navegador bloqueja les finestres emergents, s'obre com a panell.
4. {{ui:Tanca}} la tanca.

## Els controls

| Control | Què fa |
|---|---|
| {{ui:Segueix la vista}} | Activat: la vista en directe mira on mira la vista 3D. Recorrent-lo, es desactiva |
| {{ui:Recorre}} | Camina pel model (a continuació) |
| {{ui:Gravetat}} | Mentre camines: estar de peu sobre els terres i pujar escales. Desactivat: volar |
| {{ui:Hora}} | L'hora del dia. El sol es mou en arrossegar |
| {{ui:Mes}} | El mes, per veure el sol a l'hivern i a l'estiu |
| {{ui:Qualitat}} | {{ui:Per a aquest ordinador}}, o {{ui:Baixa}}, {{ui:Mitjà}} o {{ui:Alta}} |

La línia de baix indica què dibuixa la vista (WebGPU o WebGL 2), la qualitat i la llum rebotada.

## Camina pel model

1. Gira la vista 3D cap on vols estar i tria {{ui:Recorre}}. Hi estàs de peu sobre el terra, per sota del punt de l'ull de la vista, a 1,6 m d'alçada.
2. Fes clic a la vista en directe i després usa {{key:W}} {{key:A}} {{key:S}} {{key:D}} o les tecles de fletxa. Mantén {{key:Shift}} per córrer. Arrossega per mirar al voltant.
3. Els esglaons de fins a 40 cm es pugen (les escales); qualsevol cosa més alta és un mur. Els murs t'aturen i hi llisques al llarg.
4. Amb {{ui:Gravetat}} desactivat, voles: {{key:E}} puja, {{key:Q}} baixa.
5. {{key:Esc}} atura el recorregut.

## Llum rebotada

La llum que rebota d'un mur il·luminat pel sol cap al terra, i l'interior més fosc d'una habitació, es calcula en segon pla a tots els nuclis del processador. Mentre treballa, la línia de baix diu {{ui:Llum rebotada: 40 %}}; quan està a punt, la vista la incorpora. Després d'un canvi, torna a començar.

:::note
Això és una aproximació per a una vista en directe, no una imatge renderitzada: els petits detalls entre els punts reben la llum rebotada dels punts propers.
:::

:::note
Els navegadors no són iguals. Quan el navegador té WebGPU, la vista en directe l'usa; en cas contrari, usa WebGL 2 i es veu igual. Sense cap dels dos, el panell ho indica.
:::
