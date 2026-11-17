---
title: Entramat de murs, forjats i cobertes
summary: Genera pals, rails, llindes, jàssers, cabirons o encavallades des del model i conserva-ho amb ell; es tornen a fer quan canvien els murs, les obertures, els forjats o la coberta, i el quadre Fusta és la llista de talls.
keywords: TJI, biga en I, taula de llums de jàssers, carrega una taula, entramat, bastidor, pal, pals, rail, rail superior, llinda, pal principal, pal secundari, muntant, mitja llinda, ampit, bloc de fusta, cantonada, cantonada californiana, te, jàsser, jàsser de vora, jàsser de cua, cabiró, cabiró de remat, cabiró de vall, carener, jàsser de sostre, tirant, encavallada, fusta, llista de talls, board feet, 2x4, 2x6, separació, entre eixos
from: 76d0ffb5
---

## Què fareu

Entrameu l'edifici a partir del que heu dibuixat. BimCraft dibuixa els pals, els rails i les llindes dels murs, els jàssers dels forjats i els cabirons (o les encavallades) de la coberta, els dimensiona amb taules per defecte etiquetades, els guarda amb el model i els torna a fer cada cop que canvia allò que entramen. El quadre **Fusta** és la llista de talls.

## Entrameu-ho

1. En una planta, obriu {{ui:Compilació}} i trieu {{ui:Entramat}}.
2. Trieu la **separació** (16" o 24" entre eixos; 400 o 600 mm), els **cantons** (tres pals o californià), **Cabirons** o **Encavallades** per a les cobertes, i si els murs tenen una fila de **blocs de fusta** a mig alçada. Per als forjats trieu **Fusta aserrada** o **TJI (preliminar)**, i poseu la direcció dels jàssers en automàtic, X del plànol o Y del plànol.
3. Feu clic a **Entrama cada mur**, o feu clic a un mur, a un forjat o a una coberta (a la planta on descansa la coberta) per entramar només això.

Desactiveu **Mostra l'entramat** per amagar totes les peces d'entramat, com una capa; **Transparent** amaga els murs, forjats i cobertes que estan entramats perquè pugueu veure només l'entramat.

## Què obteniu

- **Murs**: una solera inferior (tallada a les portes), un rail superior doble, pals a la disposició des de l'inici del mur, pals principals i secundaris i una llinda a cada porta i finestra, pals curts sobre les llindes i sota les finestres, un ampit de base sota les finestres, cantons on es troben els murs (el mur que passa continu s'emporta els pals del canton), dos pals de reforç on un altre mur es connecta en T, i blocs entre pals.
- **Forjats**: jàssers pel costat curt del forjat per defecte, o al llarg de l'eix del plànol que trieu; jàssers de vora al voltant de la vora, i pals de forat i llindes dobles al voltant d'un buit d'escala, amb els jàssers que hi passen tallats curts (jàssers de cua). El mode TJI tria la sèrie més petita de la llista i la profunditat que arriba al và net mesurat amb la separació triada.
- **Cobertes**: cabirons comuns a escaire amb cada ràfec, cabirons de remat on les crestes i les valls els tallen, cabirons de carener i de vall, taulons de carener, jàssers de sostre sobre els rails i tirants de cintura, o encavallades simples a la separació, una peça cadascuna.

## Canvieu-ho

Trieu qualsevol peça d'entramat a la vista 3D o a l'arbre del model. **Propietats** en mostra l'entramat: canvieu la separació, el tipus i la direcció dels jàssers de forjat, els cantons, els blocs o l'entramat de la coberta. Moure murs, portes i finestres, o canviar el forjat o la coberta, torna a fer l'entramat automàticament.

Per mantenir una peça que heu col·locat intencionadament quan l'entramat es torna a fer, trieu-la i escolliu **Mantén aquesta peça quan l'entramat es torni a fer**. Una peça mantinguda es queda on és; quan canvia l'entramat del seu voltant, queda marcada perquè la pugueu revisar.

## Forjats TJI des d'una taula que carregueu

BimCraft no porta taules de llums de cap fabricant de jàssers (són del fabricant i canvien amb cada edició). Trieu l'entramat d'un forjat, poseu **Jàssers del forjat** a **TJI (preliminar)** i escolliu **Carrega una taula…** a **Propietats**: un fitxer en el format `cadcraft-tji-table`, JSON o CSV, que heu fet a partir de les taules de llums vigents del fabricant. Indica el fabricant, el producte i l'edició, i d'on surten els números, i llista per a cada cas de càrrega (sobrecàrrega, càrrega permanent, límit de flexió, llargada d'apoi) el và net més gran de cada sèrie i profunditat a cada separació.

- BimCraft pren el **và net** del forjat, tria la profunditat més baixa i, dins d'ella, la sèrie el và de la qual, a la llista, arriba a ell per a la separació i el cas de càrrega que heu triat, i entrama el forjat amb aquesta. Si el và o la separació són fora de la taula, ho diu i no canvia res.
- Les càrregues, el límit de flexió, la llargada d'apoi, la taula i la frase "Orientació preliminar de disposició; la selecció final necessita les taules del fabricant i les càrregues del projecte" s'imprimeixen al quadre Fusta, s'escriuen al model amb l'entramat i apareixen a la llista **Problemes** com a nota. Una taula marcada com a exemple ho diu en un avís.
- Amb el complement **Normativa de construcció** activat, la seva regla de jàssers de forjat també llegeix una taula carregada; sense taula, els jàssers TJI queden fora d'aquella comprovació, com abans.
- La taula es queda en aquest navegador fins que l'esborreu o en carregueu una altra. El fitxer: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: polzades, peus, psf; o `metric`: mm, metres, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) i `rows` (`series`, `depth`, `spans`: per a cada id de cas, la separació i el và net més gran, com `"16": "15-6"`). En CSV, els mateixos fets són línies `# clau = valor`, seguides de `series,depth,case,spacing,span`.
- Sense cap taula carregada, es rebutja una disposició TJI i no canvia res: **Carrega una taula TJI: les taules del fabricant són seves i no estan incorporades.** Un model entramat amb l'antiga taula TJI incorporada (abans d'aquest canvi) manté tots els jàssers que té; Propietats i Problemes diuen que cal la taula, i el forjat es pot tornar a entramar quan en carregueu una. Els jàssers de fusta massissa funcionen com abans.

Això és orientació de disposició. La selecció final dels jàssers necessita les taules del fabricant, les càrregues del projecte i l'enginyer.

## La llista de talls

Al panell de **Quadres** trieu **Fusta**: cada peça d'entramat agrupada per mida i per la longitud comercial que compraríeu (longituds senceres de 2' a partir de 8'; passos de 600 mm a partir de 2400 en mil·límetres), amb el nombre de peces i els board feet. **CSV** la descarrega.

:::warning
Les mides de capçaleres, jàssers, cabirons i jàssers de sostre provenen de taules per defecte etiquetades per a una casa típica d'una o dues plantes, no són càlcul d'enginyeria. **Propietats** indica quan un và o una obertura és més enllà de la seva taula. Un dissenyador o un enginyer comprova els vans, les càrregues i les connexions.

Les disposicions TJI només usen una taula que carregueu, que feu a partir de les taules de llums vigents del fabricant; BimCraft no n'inclou cap. El suggeriment no comprova l'apoi, les càrregues puntuals, els voladissos, els forats, les llindes de buit d'escala ni les connexions, i la forma I del model és esquemàtica.
:::

## Què es desa

Cada mur, forjat o coberta entramat és un conjunt d'elements IFC («Entramat») format per barres IFC (pals, rails, cabirons, tirants, blocs, encavallades) i bigues IFC (llindes, jàssers, jàssers de vora, taulons de carener), cadascun amb la seva mida, la seva longitud i els seus board feet.
