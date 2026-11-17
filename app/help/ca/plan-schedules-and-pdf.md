---
title: Quadres, cotes i un PDF del plànol
summary: Quadres de portes, finestres, parets i sales que canvien mentre dibuixeu, cotes al plànol, i el plànol d'una planta desat com a PDF a una escala estàndard.
keywords: quadre, quadre de portes, quadre de finestres, quadre de parets, quadre de sales, quantitats, amidament, àrea, csv, full de càlcul, cotes, cota, imprimeix, pdf, traça, escala, 1/4", 1:50, full
from: d97cd16e
---

## Què farà

Veieu què sumen els edificis que dibuixeu, mentre els dibuixeu: quantes portes i finestres hi ha de cada mida, quant mur hi ha de cada tipus, com és de gran cada sala. Poseu cotes al plànol i deseu-lo com a PDF per imprimir-lo o enviar-lo.

## Quadres

Amb {{ui:Dibuixa}} activat, **Quadres** al panell esquerre mostra una taula alhora:

- **Portes** i **Finestres**: cadascuna pel seu marcador (D1, D2... i W1..., donat en col·locar-les), el seu tipus, amplada, alçada (i ampit), nivell i la paret on és.
- **Parets per tipus**: per a cada tipus de paret, quantes parets, el seu gruix, la seva longitud total i la seva àrea lateral, com a **Àrea bruta**, **Deduccions** i **Àrea neta**, amb un total.
- **Sales**: número, nom, nivell, àrea i perímetre, amb l'àrea total.
- **Paviments**: cada paviment amb el seu nivell, tipus i gruix, i la seva àrea bruta, deduccions i àrea neta.
- **Acabats**: cada capa d'acabat dels tipus de paret (per material i cara de la paret) i els sostres, amb el nombre de cares, i la bruta, deduccions i neta.
- **Tipus de paret: dades d'amidament**: el que s'ha introduït una vegada a cada tipus de paret (unitat, morter, tarifa), amb el nombre de parets, la seva longitud i àrea neta, i la tarifa multiplicada per la quantitat mesurada. Vegeu [Conjunts de parets](topic:wall-assemblies).
- **Acabats per sala**, **Acabats per paret**, **Acabats per zona** i **Quantitats d'acabats**: què cobreix cada sala, amb àrees, nombre de rajoles incloses les talles, i volums de subjacent. Vegeu [Acabats de sales i quadres d'acabats](topic:room-finishes).
- Les vostres pròpies **configuracions**: un quadre que heu agrupat, totalitzat i desat amb un nom. Vegeu [Disposeu, deseu i exporteu un quadre](topic:schedule-layouts).

Els quadres canvien amb cada edició. Feu clic en una fila, o en una sola xifra, per triar els elements d'on ve. **Baixa el CSV** baixa la taula, per obrir-la en un full de càlcul; **Baixa en Excel** i **Copia per a Google Sheets** són a sota. **Acabats de sales** i **Especificació** ([Escriviu l'especificació des del model](topic:specification)) s'obren des del mateix lloc.

## Àrea i volum de cada capa

Trieu **Capes: àrea i volum** a la llista de Quadres. Té una fila per cada capa de cada tipus de paret, paviment, coberta i sostre en ús: l'element, el tipus i el seu LOD, la capa (comptada des de la cara exterior d'una paret, o des de la part superior d'un paviment, coberta o sostre), el seu material i funció, el seu gruix, quants elements hi ha, l'**àrea neta** i el **volum**.

- L'àrea és l'àrea neta dels elements d'aquell tipus, mesurada exactament com a Parets per tipus, Paviments i Acabats, pel mètode de mesura del projecte. Una coberta es mesura sobre la pendent; cap mètode de mesura té una regla per a les cobertes.
- El volum és aquesta àrea multiplicada pel gruix propi de la capa.
- Un paviment, coberta o sostre sense tipus és una sola fila: una capa del seu propi gruix.
- Una cambra d'aire es llista amb la seva àrea i queda fora del volum total. Una membrana té àrea i no té volum.

Feu clic en una fila per triar-ne els elements. **Baixa el CSV** desa la taula.

## Com es mesuren les àrees

Cada àrea són tres números que sumen: la bruta menys les deduccions és la neta. La regla s'escriu sobre cadascuna d'aquestes taules, i és una sola regla: els quadres, les quantitats desades al fitxer IFC i l'amidament enviat a TakeoffCraft fan servir totes la mateixa.

- **Una paret**: la bruta és una cara de la paret, la seva longitud al llarg de la línia central multiplicada per la seva alçada (la cara real, per a una paret amb la part superior o inferior modelada). Es dedueix cada porta, finestra i altra obertura, amplada per alçada, cada obertura una vegada.
- **Un paviment o un sostre**: la bruta és l'àrea dins del seu contorn. Es dedueix cada obertura i cada buit interior, una vegada.
- **Un acabat de paret**: cada capa d'acabat del tipus de paret cobreix una cara de la paret, mesurada com la paret, amb les mateixes obertures deduïdes. Un acabat és una capa de la paret: es llista a Acabats i no s'afegeix a l'àrea de la paret, de manera que una paret amb una porta mai es compta dues vegades.

Això és el **valor per defecte de CadCraft**: es dedueix cada obertura, sigui quina sigui la seva mida; les longituds de les parets són al llarg de la línia central; els ressalts de les obertures no es mesuren. És el que fa servir cada projecte fins que en trieu un altre mètode.

## Trieu un mètode de mesura

Sobre el quadre, **Mètode de mesura** enumera els mètodes que venen amb BimCraft, i **Carrega un fitxer de mètode** en pren el de la vostra oficina. L'elecció es desa al fitxer IFC, com un sol pas de desfer, i tres coses en segueixen alhora: els quadres, les quantitats netes desades al fitxer, i l'amidament enviat a TakeoffCraft. La regla sobre cada taula comença aleshores amb el mètode, la seva font, la data en què es va llegir la font i les paraules **No revisat per un aparellador**.

Un fitxer de mètode és un petit fitxer de dades, no codi de programa. Per a cada quantitat diu:

- **l'obertura més petita deduïda**: per exemple, una obertura de 0.5 m² o menys es manté dins de l'àrea de la paret;
- **com es mesuren les unions de les parets**: al llarg de la línia central; o amb una paret que acaba contra una altra, mesurada fins a la cara d'aquesta; o amb cada extrem de paret que es troba amb una altra paret, mesurat fins a la cara propera;
- **si es mesuren els ressalts** per a un acabat (els retorns de l'acabat dins les obertures), com a àrea o, quan són poc profunds, com a longitud. La profunditat d'un ressalt es pren com la meitat del gruix de la paret;
- **què diu sobre la maçoneria**: com es mesura, i qualsevol marge de pèrdua o de morter que indiqui.

Els mètodes que venen amb BimCraft:

| Mètode | Parets: obertura més petita deduïda | Acabats de paret | Sostres | Maçoneria |
|---|---|---|---|---|
| Valor per defecte de CadCraft | cada obertura | cada obertura | cada buit | sense marges |
| RICS NRM 2 (Regne Unit), 2a edició 2021 | 0.5 m² o menys es manté dins | 1 m² o menys es manté dins | 1 m² o menys es manté dins | per àrea; sense percentatges indicats |
| AAQS Standard Method for Africa 2015 | 0.5 m² o menys es manté dins | 0.5 m² o menys es manté dins | 0.5 m² o menys es manté dins | per àrea; mesurada neta, 0% de pèrdua |
| IS 1200 (Índia), 1976, obra de maó | 0.1 m² o menys es manté dins | per defecte (vegeu més avall) | per defecte | per volum |
| BIA Technical Note 10 (Estats Units), 2009 | cada obertura | per defecte | per defecte | 5% de pèrdua en unitats, 15% en morter |

Llegiu aquests límits abans de confiar en un mètode:

- **Cap aparellador no n'ha revisat cap.** Cadascun es va fer llegint la font indicada i registrant-ne els números amb la clàusula d'on venen. Si sou aparellador i en podeu revisar un, als creadors de l'aplicació els agradaria saber-ho.
- Quan una regla no es va poder llegir de la font, el mètode diu **no confirmat** per a aquesta, i s'usa el valor per defecte de CadCraft. Cap mètode que ve amb BimCraft té una regla confirmada per a les unions de parets, els ressalts o els paviments, de manera que aquests es mesuren de la manera per defecte amb tots ells.
- La IS 1200 deduïx les obertures del guix en tres franges. Un fitxer de mètode encara no pot contenir franges, de manera que els acabats de paret fan servir el valor per defecte en aquest mètode, i la regla ho diu.
- El **Standard System of Measuring Building Work de Sud-àfrica** **no** hi és: el seu text no es va poder llegir. El mètode AAQS per a Àfrica diu que es basa en l'edició de 1991 d'aquell sistema, però és un document diferent.
- BIA Technical Note 10 és una nota d'estimació de la indústria, no un mètode de mesura estàndard.
- Una obertura que és exactament de la mida més petita segueix les paraules del mateix mètode ("no excedint", "menor de"). Les mides dins de 2 parts en 10 000 d'ella compten com a exactament aquella.
- Sota un mètode, l'àrea lateral neta d'una paret i l'àrea neta d'un paviment o sostre del fitxer segueixen el mètode, i el conjunt de quantitats n'indica el nom. Les àrees brutes i els volums del fitxer es mantenen tal com s'han dibuixat.

**Notes sobre aquest mètode**, sota el selector, diu què deixa obert cada font. **Obre la font** porta al document.

### El mètode de la vostra oficina

Un fitxer de mètode és un JSON en el format `cadcraft-measurement-method`. Cada valor en ell indica la clàusula d'on ve; un valor sense clàusula es rebutja. El fitxer es comprova en carregar-lo: un camp incorrecte s'indica pel seu nom, i no s'usa res d'un fitxer que no passa la comprovació. Un cop triat, el fitxer es desa dins del projecte, de manera que el projecte s'obre igual en un altre ordinador. El seu identificador és un nom simple de la vostra elecció (pot no ser l'identificador d'un mètode que ve amb l'aplicació).

## Maons, blocs i morter

**Tipus de paret: dades d'amidament** compta les unitats i el morter de cada tipus de paret la unitat del qual té longitud i alçada (vegeu [Doneu al tipus les seves dades d'amidament](topic:wall-assemblies#give-a-type-its-takeoff-data)). Aquestes són les fórmules, exactament com es calculen:

- **Unitats per àrea d'una fulla** = 1 / ((longitud de la unitat + junta) × (alçada de la unitat + junta)). Un maó de 215 × 65 mm amb una junta de 10 mm: 1 / (225 × 75 mm) = 59.26 per m².
- **Amplades d'unitat a través d'una fulla** = (gruix de la fulla + junta) / (amplada de la unitat + junta), arrodonit a un nombre enter, com a mínim 1. Una fulla de 102.5 mm de maons de 102.5 mm és 1; una paret de 215 mm dels mateixos maons és 2.
- **Unitats** = unitats per àrea × amplades d'unitat a través × l'àrea neta de la cara de la paret, sumades sobre les fulles de maçoneria del tipus.
- **Unitats a encarregar** = unitats × (1 + % de pèrdua / 100), arrodonit cap amunt a una unitat sencera. La pèrdua és la introduïda al tipus; si no n'hi ha cap, la del mètode, si n'indica una; altrament, 0%.
- **Morter** = àrea neta × gruix de la fulla, menys el volum de les unitats (unitats × longitud × alçada × amplada), després més el percentatge extra introduït al tipus per a rebaixos o perforacions, i després més la previsió del mètode si n'indica una. Necessita l'amplada de la unitat.

Es dona per suposat que: cada fulla de maçoneria d'un tipus es construeix amb l'única unitat del tipus; una fulla més gruixuda que una amplada d'unitat es compta com aquest nombre d'amplades d'unitat, cadascuna com una fulla posada de llarg, de manera que les unitats tallades, els tancaments i les formes especials no es compten a part; quan cap capa no està marcada com a construïda amb la unitat, es prenen les capes del nucli com a fulles, i la nota sobre la taula ho indica. **Quantitat** és la tarifa multiplicada pel que es mesura la tarifa, que ara també pot ser una unitat a encarregar, 1000 unitats a encarregar o un m³ de morter.

Les marques són l'etiqueta IFC dels elements: canvieu-ne una a **Propietats** (Etiqueta) i el quadre en segueix. Per a cada model IFC, dibuixat o no, [Sumeu quantitats, enumereu elements i planifiqueu espais](topic:quantity-totals) suma qualsevol propietat.

## Cotes

El plànol mostra la longitud de cada paret dibuixada al llarg de la seva cara exterior (una paret interior: al llarg d'una cara) i, per a una paret amb portes o finestres, una cadena des dels cantons fins a cada obertura. {{ui:Dimensions}} a la barra del model les amaga i les torna a mostrar.

## Deseu el plànol com a PDF

1. Mostreu el nivell que voleu i definiu les unitats al panell **Nivells**.
2. Feu clic a {{ui:Imprimeix}} a la barra del model.
3. BimCraft desa "<fitxer> — <nivell>.pdf": el plànol en blanc i negre a l'escala estàndard més gran que cap a la pàgina (1/4" = 1'-0", 1/8" = 1'-0"... en Letter en peus i polzades; 1:50, 1:100... en A4 en mil·límetres), amb les parets omplertes, les portes, les finestres, els noms i àrees de les sales, les cotes, i una franja de títol amb el nivell, el fitxer, l'alçada del tall, la data i l'escala.

El PDF es dibuixa com a línies i text, de manera que es manté nítid a qualsevol zoom i el seu text es pot cercar.

## Bones de saber

- Els quadres enumeren el que han dibuixat les eines de dibuix. Les portes i finestres d'un altre programa surten en els **Totals de quantitats**.
- Per posar preu a l'obra, envieu les quantitats a TakeoffCraft: vegeu [Quantitats a TakeoffCraft](topic:takeoff). La baixada CSV es queda per a un full de càlcul.
