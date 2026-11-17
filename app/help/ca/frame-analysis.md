---
title: Analitza l'entramat estructural
summary: Esforços, reaccions i deformacions de les bigues, pilars i riostres del model sota les hipòtesis de càrrega i les combinacions que definiu, desats a l'IFC. Una eina d'anàlisi, no una comprovació normativa.
keywords: anàlisi, unitats, peus i polzades, unitat de visualització, anàlisi estructural, comprovacions de disseny, utilització, laminat, soldat, AISC 360, EN 1993-1-1, anàlisi d'entramat, model analític, mètode de rigidesa, càrregues, hipòtesi de càrrega, combinació, càrrega permanent, sobrecàrrega, pes propi, reaccions, moment flector, tallant, esforç axial, deformació, forma deformada, suports, articulat, encastat, alliberament, informe, pdf, csv, craftscript, frame3d, bigues, pilars, barres
from: b93b58c4
---

La pestanya {{ui:Anàlisi}} de la dreta troba els esforços de les bigues, pilars i riostres del model obert, les reaccions als peus dels pilars i com es deformen les barres, per a les càrregues que hi doneu.

:::warning
És una **eina d'anàlisi, no una comprovació normativa**. L'anàlisi no aplica cap normativa de disseny: no dimensiona les barres ni comprova capacitats, i no tria els coeficients de càrrega. Un enginyer comprova el model analític, les seves càrregues i suports, i decideix què signifiquen els valors. El bloc {{ui:Comprovacions de disseny}} que hi ha a sota comprova els perfils laminats en I d'acer segons AISC 360 o EN 1993-1-1, una eina fins que un enginyer l'hagi revisat: vegeu [Comprovacions de disseny](topic:frame-analysis#design-checks).
:::

## Executa-la

1. Obriu un model IFC i la pestanya {{ui:Anàlisi}}.
2. Trieu una o més bigues, pilars o riostres a la vista, trieu un {{ui:Cas}}, una {{ui:Càrrega}} i una {{ui:Direcció}}, escriviu el valor i premeu {{ui:Afegeix càrrega}}: kN/m per a una càrrega repartida al llarg d'una barra, kN per a una càrrega puntual.
3. Premeu {{ui:Executa l'anàlisi}}.

La taula indica l'esforç axial màxim, els tallants, els moments flectors, la torsió i la deformació de cada barra; feu clic al nom d'una barra per seleccionar-la a la vista. Més avall hi ha les reaccions. {{ui:Al model}} dibuixa la forma deformada, o un esforç com a diagrama al costat de cada barra. Els resultats caduquen quan el model canvia: torneu a executar-la.

Cada càrrega i cada ajust és un canvi a la llista de {{ui:Canvis}}: {{ui:Desfés}} el desfà, i {{ui:Desa com a IFC}} el manté al fitxer (el conjunt de propietats del projecte `CadCraft_Analysis`), de manera que la pròxima vegada que s'obri el model aquí les seves càrregues encara hi siguin.

## Com es fa el model analític

- Cada IfcBeam, IfcColumn i IfcMember la forma del qual és una sola extrusió recta esdevé una barra sobre la línia del centroide de la seva secció. Les propietats de la secció surten del perfil: formes I, U, L i T, rectangles i tubs, cercles i tubs circulars, o qualsevol contorn tancat (llavors la constant de torsió és una estimació, indicada a l'informe). Qualsevol altra cosa es deixa fora i es compta.
- En un model, les bigues s'aturen a la cara d'un pilar i se situen per sota del forjat. Cada extrem de barra es porta al llarg de la seva pròpia línia fins a l'eix de la barra en què es munta, quan aquest eix és a prop (dins de la mida aproximada de les seccions), i aquella barra es parteix en aquell punt. L'informe diu quants extrems s'han mogut.
- Els **peus dels pilars** on no hi ha res de sota són suports: encastats (el d'inici) o articulats (subjectats i impedits de girar, lliures de rotar).
- Els **extrems de biga** són rígids o articulats per la regla {{ui:Extrems de biga sense connexió}}; les **riostres** (IfcMember) són articulades a les dues bandes. Trieu una barra per donar als seus extrems, o al peu d'un pilar, una regla pròpia.
- Materials pel nom: formigó (E = 30 GPa), fusta (E = 11 GPa), i en qualsevol altre cas acer (E = 200 GPa).

Si l'entramat es pot moure sense fer doblegar res (un mecanisme), l'execució s'atura i diu on i en quina direcció.

## Hipòtesis, combinacions, signes i informe

L'anàlisi comença amb **Permanent** (pes propi), **Sobrecàrrega** i **Permanent + sobrecàrrega**; afegiu hipòtesis i combinacions amb els factors que demana la vostra normativa de disseny. N > 0 és tracció; My > 0 posa la cara local −z de la barra en tracció (una biga que es flexa sota la gravetat té My > 0). {{ui:Informe (PDF)}} i {{ui:Informe (CSV)}} contenen les hipòtesis, les seccions, els casos, les reaccions amb les seves sumes, els esforços de les barres, els desplaçaments i una envolupant. {{ui:Exporta com a CraftScript}} escriu l'entramat per a l'espai de treball Script de PartCraft, on la funció de biblioteca `frame3d` el resol en codi llegible.

El mètode és el de la rigidesa directa, lineal i de primer ordre tret que marqueu Segon ordre (P-Delta), i es comprova amb casos de manual.

**Segon ordre (P-Delta).** Marqueu *Segon ordre (P-Delta)* al costat d'{{ui:Executa l'anàlisi}}: cada combinació es resol de nou amb els esforços axials de les barres actuant sobre el marc deformat (cada barra tallada en 4 trossos, de manera que també compta la flexió d'una barra entre els seus extrems), fins que els esforços axials s'estabilitzen. La línia de resultat indica el nombre de passades i quant ha crescut el balanceig; els moments, les deformacions, les comprovacions de disseny i l'informe fan servir aleshores aquests resultats. Per sobre de la càrrega crítica elàstica del marc, l'execució s'atura i ho diu. És elàstic amb rotacions petites, només de flexió, sense reducció de rigidesa ni càrregues nocionals (no és pel mateix el mètode d'anàlisi directa d'AISC); les llosses, els murs i els forjats rígids es mantenen de primer ordre.

**Pressió sobre els forjats.** Per a forjats de formigó (l'anàlisi llegeix un forjat com a plaques quan el seu material és formigó), el bloc de Càrregues té {{ui:Pressió a tots els forjats}}: escriviu kN/m², trieu el cas de dalt i premeu {{ui:Afegeix als forjats}}. S'aplica cap avall a tots els forjats que l'anàlisi ha trobat, i apareix a la llista amb un enllaç Suprimeix. És una sola pressió per a tots els forjats, no una per forjat, i no és una càrrega normativa: escriviu el valor que us doni el vostre enginyer.

**Freqüències pròpies (elements finits).** El bloc {{ui:Elements finits: freqüències pròpies}} que hi ha sota els resultats troba els modes més baixos del mateix model amb el motor d'elements finits: bigues amb els seus alliberaments als extrems, llosses i murs com a closques planes de quatre nodes, forjats rígids i suports. Trieu quants modes (3, 6, 10 o 20) i l'element de llosa (la closca de quatre nodes per a llosses gruixudes o primes, o la de llosa prima) i premeu {{ui:Cerca les freqüències}}. La taula dona la freqüència de cada mode en Hz, el seu període en segons i la seva massa modal efectiva en X, Y i Z com a part de la massa que es pot moure; {{ui:Mostra al model}} dibuixa qualsevol mode com es dibuixa la forma deformada. La massa és la densitat del material per volum: les càrregues no hi afegeixen massa, i un material sense densitat no en té. L'informe (PDF, CSV) n'inclou la taula. És només elàstic i de moviments petits, i no es genera cap càrrega sísmica ni de vent segons cap normativa aquí. No és una comprovació normativa; el vostre enginyer revisa els resultats.

**Espectre de resposta, historial temporal i pushover.** Hi ha tres blocs més sota les freqüències, amb el mateix model d'elements finits. La massa per a tots és la densitat del material més les càrregues verticals de les hipòtesis que marqueu, cadascuna multiplicada per un factor que escriviu (per exemple Permanent a 1 i Sobrecàrrega a la part que compteu com a massa).

{{ui:Espectre de resposta}} llegeix cada mode d'un espectre que doneu (una taula de període i acceleració, o la forma ASCE 7 a partir de SDS, SD1 i TL; el botó {{ui:Usa els valors del bloc Sísmica}} copia aquests valors del bloc Sísmica), i combina els modes per CQC, SRSS, la regla del deu per cent o una suma absoluta, i després combina les direccions X, Y i Z (100 % + 30 % o SRSS). Dona el tallant basal, les derives per planta, els esforços a les extremitats de les barres i una taula de modes que avisa quan els modes usats porten menys del 90 % de la massa. Podeu escalar els resultats per un factor o fins a un tallant basal que escriviu; el bloc no calcula mai aquest tallant basal per si sol. Els resultats no tenen signe.

{{ui:Historial temporal}} executa una acceleració del terreny per superposició modal (exacta per a les rectes del registre entre punts) o per integració directa (acceleració mitjana de Newmark amb amortiment de Rayleigh). L'entrada és un sinus o un pols inventat (sempre etiquetat com a sintètic), un registre que enganxeu, o un fitxer de text que obriu (temps i acceleració, una acceleració per línia amb un pas, o un fitxer d'estil PEER amb una capçalera DT=; en g o m/s²). Dona el desplaçament de la coberta i el tallant basal en funció del temps, la deriva de cada planta, i l'envolupant dels esforços a les extremitats de les barres. Els models amb un registre molt llarg el guarden només per a la sessió.

{{ui:Pushover}} empeny la coberta lateralment en petits passos (patró com el del primer mode, o uniforme), amb ròtules plàstiques als extrems de les barres que tenen forma de I. Una ròtula cedeix al moment plàstic, que baixa quan creix l'esforç axial (calculat a partir de la forma dibuixada, sense tenir en compte els arrodoniments); l'enduriment és opcional, el P-delta és opcional, i es pot aplicar primer una combinació de gravetat. Dona la corba de capacitat (tallant basal enfront del desplaçament de la coberta), la primera ròtula, i l'estat i la rotació plàstica de cada ròtula. {{ui:Executa l'historial temporal no lineal}} executa les mateixes ròtules amb el registre del bloc Historial temporal en models petits. Les ròtules es formen només als extrems de les barres (poseu un node on n'hi hagi d'haver una dins d'un và); una barra alliberada als dos extrems no n'té cap, i no es modelitzen la cedència ni el pandeig de les riostres; les llosses i els murs es mantenen elàstics; no es donen criteris d'acceptació. No és una comprovació normativa; el vostre enginyer revisa els resultats. La configuració es desa amb el model, i l'informe en porta les taules.

Encara no implementat: pandeig, una correcció de massa que falta per a l'espectre de resposta, escalat de registres, criteris d'acceptació per a ròtules (la resposta dinàmica hi és, més amunt), càrregues d'àrea que no siguin l'única pressió a tots els forjats, excentricitats de barra, riostres que només treballen a tracció, murs i llosses a l'entramat, i comprovacions normatives de formes soldades i de seccions que no siguin perfils laminats en I. Vegeu [Encara no implementat](topic:not-built-yet).

## Unitats

Les longituds segueixen la unitat que trieu a la barra d'eines ({{ui:Unitats}}), com la resta de BimCraft: les posicions de càrrega que escriviu i veieu ({{ui:Origen}}, {{ui:A}}, {{ui:A}}), els punts de les càrregues de nus i de les reaccions, les alçades de planta a {{ui:Sísmica}}, i les columnes de deformació i deriva (peus i polzades mostren aquestes petites longituds en polzades decimals). Canvieu la unitat en qualsevol moment; la pestanya es torna a dibuixar. Les forces es queden en kN i kN·m, i l'informe (PDF, CSV) i el fitxer CraftScript es queden en mil·límetres amb la unitat escrita. Les mides de les seccions, els diàmetres de les barres i els recobriments del bloc {{ui:Formigó}} es queden en mil·límetres, tal com es diuen.

## Comprovacions de disseny

El bloc {{ui:Comprovacions de disseny}} (el mateix que el de DetailCraft) pren un {{ui:Codi de disseny}}, ASCE 7 + AISC 360 o EN 1990 + EN 1993-1-1, i una {{ui:Qualitat de l'acer}}. Doneu a cada hipòtesi de càrrega el seu tipus (permanent, sobrecàrrega, vent …) i {{ui:Crea combinacions}} escriu les combinacions de càrregues de la normativa a partir de les vostres hipòtesis; l'anàlisi les executa després com qualsevol altra combinació.

{{ui:Comprova les barres}} després comprova cada **perfil laminat en I d'acer** amb les comprovacions de DetailCraft (tracció, compressió amb pandeig, flexió amb pandeig lateral-torsional, tallant, flexió amb esforç axial, deformació; les clàusules són a l'informe) i mostra quanta capacitat utilitza, acolorida al model. És una **eina fins que un enginyer l'hagi revisat**.

**Quines barres es comproven.** Un perfil IFC no diu si un perfil d'acer en I és laminat o soldat, així que BimCraft el considera laminat només quan el nom del seu perfil (o, si no, el nom del tipus de l'element) és una mida de les taules AISC W o S o de les taules EN 10365 IPE, HEA o HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **i** l'alçada, l'amplada, l'ànima i les ales del fitxer coincideixen amb aquesta mida en un 1 %. Qualsevol altre perfil en I (una biga de planxes, una mida amb un altre nom, una mida editada) es considera soldat i torna **sense comprovar**, igual que els tubs, els angles, els perfils en U i altres seccions, les parts esveltes i la torsió. Comproveu aquestes barres amb un enginyer.
