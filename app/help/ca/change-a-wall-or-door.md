---
title: Canvia un mur, una porta o una finestra
summary: Cliqueu un mur, una porta o una finestra dibuixats i canvieu-ne el tipus, la mida, l'alçada o la posició a Propietats, o arrossegueu-lo al plànol; cada canvi és un pas per desfer.
keywords: escaire, quadrat, 90, angle recte, obliqüitat, angle, orto, mida de la sala, cara interior, cara exterior, mesura des de, distància escrita, distància de desplaçament, corbat, arc, alçada de l'arc, radi, línia de referència, justificació, canvia, edita, propietats, tipus de mur, gruix, longitud, alçada, desplaçament de base, dalt, planta, inverteix, exterior, mida de porta, mida de finestra, ampit, distància, mou, nansa, arrossega, canvia el tipus, diversos
from: 63052d5d
---

## Què fareu

Canviar el que heu dibuixat: trieu un mur, una porta o una finestra, i escriviu un nou número a **Propietats** o arrossegueu-lo al plànol. El plànol i la vista 3D segueixen, els cantons tornen a unir-se, i les portes i finestres es queden als seus murs.

## Canvia un mur

1. Amb {{ui:Dibuixa}} activat i {{ui:Selecciona}} activat, cliqueu el mur al plànol (o a la vista 3D).
2. **Propietats** mostra una caixa amb els números del mur. Canvieu-ne un i premeu {{key:Enter}}:
   - **Tipus de mur**: un altre dels tipus inicials. El gruix i les capes canvien amb ell.
   - **Gruix**: qualsevol gruix. El tipus manté les seves altres capes i la seva capa principal (els muntants o el bloc) absorbeix la diferència, per exemple "Exterior 2×6, 200 mm".
   - **Mesura des de**: **Eix central**, **Cara interior** o **Cara exterior**. **Longitud** i **Mida de la sala** es llegeixen i es defineixen des d'aquí. La cara exterior és el que mostren les cotes del plànol.
   - **Longitud**: l'extrem del mur es mou al llarg de la seva línia. El mur unit a aquell extrem es mou en escaire respecte de si mateix i manté el seu angle.
   - **Mida de la sala** (quan hi ha un mur paral·lel a través de la sala): escriviu la mida que voleu. Aquest mur es mou en escaire i els murs units s'estiren per seguir-lo.
   - **Mou en escaire**: escriviu quant s'ha de moure el mur en escaire respecte de si mateix: un número positiu el mou cap a fora, un número negatiu cap a dins.
   - **Angle amb el mur unit**: l'angle amb el mur unit al seu inici. Escriviu 90 per posar-lo en escaire. Un mur que no està unit a res mostra **Direcció**, en graus des de l'est.
   - {{ui:Escaira}}: torna els murs connectats a aquest a angles rectes, segons la direcció en què corre la major part de la seva longitud. Funciona sobre tota la sala o disposició connectada, siguin quins siguin els murs que trieu. Un mur que està més de 10 graus fora d'un angle recte es queda igual, de manera que un de posat a 45 graus és segur. Un {{ui:Desfés}} ho desfà tot.
   - **Alçada del mur**: **Fins a la planta de sobre** segueix aquesta planta, **Fins a la planta 3** (i qualsevol planta més amunt) fa un mur que travessa les plantes intermèdies; escriure una alçada llavors defineix quant per sota o per sobre d'aquella planta és el dalt. **Alçada fixa** manté el número que escriviu. **Travessa** llista les plantes que travessa aquest mur: es dibuixa més clar als seus plànols, les sales d'allà es tanquen contra ell, i es poden col·locar portes i finestres dins seu des d'aquells plànols. Es mou i es reconfigura a la planta on comença.
   - **Desplaçament de base**: a quina alçada sobre la planta comença el mur. El seu dalt es queda on era.
   - **Exterior**: {{ui:Inverteix}} posa les capes exteriors a l'altra cara.
   - **Línia de referència**: **Eix central**, **Cara exterior**, **Cara interior**, **Cara esquerra** o **Cara dreta**. Canviar-la no mou res. Més endavant, quan el mur s'engrossi (pel tipus o pel **Gruix**) o el seu exterior s'inverteixi, la línia de referència es queda al lloc i el mur creix o s'inverteix al seu voltant. Un mur recte que hi arriba en un cantó segueix, de manera que el cantó es continua tancant. La línia de referència del mur triat es dibuixa en traç discontinu al plànol. Trieu diversos murs per definir-la per a tots.
   - **Alçada de l'arc** (murs corbats): quant s'arqueja el mig respecte d'una línia recta. 0 el fa recte; un valor negatiu l'arqueja cap a l'altre costat. El radi es mostra al costat.
3. Cada canvi és un pas a **Canvis**; {{ui:Desfés}} el desfà.

## Arrossega un mur al plànol

Quan un mur està triat, mostra tres nanses: un quadrat a cada extrem i un cercle al mig.

- Arrossegueu un extrem per allargar el mur, escurçar-lo o girar-lo. S'ajusta com l'eina Mur, i s'encaixa en escaire amb el mur unit a l'altre extrem quan sou a menys de 3 graus; {{key:Shift}} el manté sobre els eixos del plànol.
- Els murs units a l'extrem que arrossegueu mantenen el seu angle: els seus extrems llisquen al llarg de les seves pròpies línies per trobar la nova línia del mur, de manera que res no queda inclinat. Mantingueu {{key:Mod}} per a un arrossegament lliure (l'extrem del mur unit ve amb el vostre i aquell mur gira), o {{key:Alt}} per trencar les unions en aquest mur.
- Arrossegueu el mig per moure tot el mur en escaire respecte de si mateix, sigui quina sigui la direcció. Els seus cantons llisquen al llarg dels murs units, de manera que aquests murs mantenen el seu angle.
- Mantingueu {{key:Mod}} mentre arrossegueu el mig per a un moviment lliure, quan sí que voleu trencar l'angle. {{ui:Escaira}} el torna a posar.
- Mentre es manté una nansa, escriviu una distància i premeu {{key:Enter}} (o deixeu anar): el mur va exactament aquella distància, de la manera com l'arrossegàveu. {{key:Esc}} anul·la el moviment.
- Un mur corbat triat mostra nanses als seus extrems i una nansa rodona al mig del seu arc. Arrossegueu la nansa rodona per corbar-lo.
- Les portes i finestres es queden dins del mur. Un mur massa curt per al que conté es rebutja amb "No hi cap en aquest mur."

## Canvia una porta o una finestra

1. Cliqueu la porta o la finestra al plànol.
2. A **Propietats**: **Tipus** (una altra porta o finestra del mateix tipus), **Amplada**, **Alçada**, **Ampit** (finestres), **Des de l'inici** i **Des del final** (la distància des de cada extrem de la cara del mur fins a la seva vora), **Frontisses** {{ui:Inverteix}} (portes d'una fulla i finestres de batent; les portes corredisses, de cadirat, de graner i plegables diuen **Obre cap a**; les finestres fixes, penjades i de quadre i les portes dobles no en tenen), i **Gira cap a** (portes) o **Costat del marc** (finestres) {{ui:Inverteix}}.
3. O arrossegueu-la al llarg del seu mur, o cap a un altre mur: vegeu [Portes i finestres](topic:doors-and-windows).

## Canvia'n diversos alhora

Trieu diversos murs (o diverses portes, o diverses finestres) amb {{key:Shift}}+clic o {{key:Mod}}+clic. **Propietats** ofereix el que comparteixen: **Canvia el tipus…**, l'alçada, la mida. Un sol canvi els defineix tots, i un sol {{ui:Desfés}} ho desfà tot.

## Bon a saber

- Els números es mostren en les {{ui:Unitats}} triades a la barra d'eines.
- Els murs, portes i finestres d'altres programes mostren les seves dades IFC a **Propietats** com abans, sense aquesta caixa.
