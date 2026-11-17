---
title: Codis de classificació (Uniclass, OmniClass, UniFormat)
summary: Assigneu a cada element i tipus un codi de classificació, trieu quins sistemes fa servir el projecte, cerqueu a les taules d'Uniclass que venen amb l'aplicació, carregueu les taules llicenciades de la vostra oficina i mostreu els codis als quadres. Els codis s'escriuen al fitxer IFC perquè altres programes els llegeixin.
keywords: classificació, classificar, codi, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, taula, codi d'element, codi de tipus, codi per defecte, IfcClassification, IfcClassificationReference, cobie, columna de quadre, csv, llicència
from: 222b94cd
---

## Què hi fareu

Poseu un codi de classificació a murs, forjats, cobertes, portes, finestres i a qualsevol altra cosa del model, en fins a tres sistemes en paral·lel: Uniclass, OmniClass i UniFormat. Altres disciplines i altres programes depenen del codi, no del nom, així que els codis es desen al fitxer IFC com a referències de classificació que qualsevol programa BIM llegeix.

## Donar un codi a un element

1. Seleccioneu un element (o diversos) i obriu **Propietats**. Obriu la secció {{ui:Classificació}}.
2. Escriviu el codi al camp del seu sistema i premeu Enter. Amb una llista de codis carregada, escriviu part d'un codi o unes quantes paraules ("mur cortina") i trieu entre les coincidències: el títol del codi s'omple per vosaltres.
3. {{ui:S'aplica a}} indica on va el codi: **Aquest element**, o **El seu tipus (cada element del tipus)**. Un codi en un tipus de mur el llegeix cada mur d'aquest tipus, també els que dibuixeu més endavant.
4. {{ui:Neteja}} treu un codi.

Sota cada codi, la secció indica d'on ve: posat en aquest element, des del seu tipus, o el valor per defecte del projecte per a la seva classe. El codi propi d'un element sempre preval sobre el del seu tipus, i el del tipus sobre un per defecte. Amb diversos elements seleccionats, un camp que diu «varia» vol dir que no comparteixen un mateix codi; si n'escriviu un, el donareu a tots. Cada canvi és un pas per desfer.

Un codi sempre es pot escriure, tant si hi ha una llista carregada com si no. Si no sembla un codi d'aquell sistema, o no és a la llista carregada, un avís ho indica i el codi es manté tal com l'heu escrit.

## Triar els sistemes del projecte

Obriu **Dades** a la barra del model i trieu {{ui:Classificació}} (o {{ui:Classificació del projecte…}} a la secció Propietats).

- Marqueu els sistemes que fa servir aquest projecte. Propietats aleshores només en mostra aquests.
- **Uniclass**: les taules d'Elements/funcions (EF), Sistemes (Ss) i Productes (Pr) venen amb l'aplicació. Són © NBS, amb llicència Creative Commons Attribution-NoDerivatives 4.0, i es distribueixen sense canvis. El diàleg mostra l'edició de cada taula i el dia en què es va llegir. No són les taules més noves: l'editor n'emet de noves cada trimestre al seu propi lloc.
- **OmniClass** i **UniFormat**: cap llista de codis no ve amb l'aplicació, perquè el seu editor no permet distribuir les taules sense llicència. Escriviu qualsevol codi, o carregueu la taula llicenciada de la vostra oficina.
- {{ui:Carrega una taula (CSV)…}} llegeix la taula pròpia de la vostra oficina d'un fitxer CSV amb una columna de codi i una de títol (una fila de capçalera anomenada Code, Number o Identifier i Title, Name o Description es detecta sola; sense cap, s'usen les dues primeres columnes). La taula es queda en aquest navegador i mai no s'introdueix al fitxer del projecte. Només es desen al fitxer els codis que assigneu. Podeu carregar una taula Uniclass més nova de la mateixa manera.
- {{ui:Dona un codi per defecte als elements segons la seva classe}} dona a cada mur, forjat, coberta, porta, finestra, escala, rampa, columna, biga i peça de mobiliari un codi inicial d'Uniclass de la taula d'Elements/funcions quan no en té cap de propi. Els elements que dibuixeu després també el rebran.
- {{ui:Mostra els codis com a columnes als quadres}} afegeix una columna per sistema als quadres de Portes, Finestres, Murs per tipus i Sales, i al seu CSV. Una fila de diversos elements mostra «varia» quan els seus codis difereixen.

## Bon de saber

- Els codis per defecte són l'elecció inicial de CadCraft, no de l'editor, i no els ha revisat cap professional. Comproveu-los amb l'estàndard del vostre projecte.
- Al fitxer, un valor per defecte és una classificació real, marcada amb el nom de relació «CadCraft default», i desapareix tan bon punt l'element o el seu tipus rep un codi propi.
- Els codis que ja té un fitxer importat es llegeixen i es mostren, sigui quina sigui l'ortografia que l'altre programa va fer servir per al nom del sistema. Els codis de qualsevol altre sistema (el propi d'una oficina) es llisten i es deixen tal com són.
- Els codis es tornen a llegir en tornar a obrir el fitxer, aquí o en un altre programa. També es porten a l'exportació IFC5 alfa (IFCX) quan aquesta opció de laboratori és activa, excepte un codi posat en una coberta.
- Encara no implementat: un arbre per navegar per una taula nivell per nivell, codis a nivells i sales com a valors per defecte del projecte, i la comprovació d'un codi amb l'edició que indica el fitxer.
