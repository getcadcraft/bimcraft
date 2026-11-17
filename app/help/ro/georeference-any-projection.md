---
title: Georeferențiere cu orice proiecție
summary: Spuneți BimCraft în ce sistem de hartă sunt coordonatele unui model, din lista completă EPSG, din orice zonă UTM sau dintr-o proiecție pe care o definiți singur, și folosiți-l pentru Locație, straturile de hartă și norii de puncte.
keywords: proiecție, sistem de coordonate, crs, epsg, utm, zonă utm, proiecție personalizată, proj4, șir proj, prj, wkt, georeferențiere, conversie hartă, ifcprojectedcrs, proiecțiile mele, latitudine, longitudine, est, nord, lambert, gauss-kruger, state plane, grilă națională
from: 6894c1f2
---

Unele planuri sunt desenate într-un sistem de hartă care nu se află pe o listă scurtă: o zonă UTM, o rețea națională sau o proiecție scrisă ca definiție text. {{ui:Measure}} › {{ui:Coordinate system…}} vă lasă să spuneți care sistem folosește modelul.

## Alegeți sistemul pentru un model

1. Deschideți modelul, alegeți {{ui:Measure}}, apoi {{ui:Coordinate system…}}.
2. Scrieți în caseta de căutare. Oricare dintre acestea funcționează:
   - un număr EPSG: `32633` sau `EPSG:2277`;
   - o zonă UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - cuvinte din nume: `lambert 93`, `mga zone 56`, `texas central`;
   - o definiție de proiecție, opțional cu un nume în față (`My grid = +proj=…`): `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`;
   - textul unui fișier `.prj`, sau folosiți {{ui:Load a .prj file…}}.
3. Alegeți un rezultat, apoi {{ui:Use this system}}.

Alegerea este salvată în model (un set de proprietăți numit `CadCraft_CRS` pe proiect), astfel încât se redeschide odată cu modelul. Salvați modelul ca s-o păstrați. {{ui:Take it off the model}} revine la ce spune fișierul.

Dacă definiția dvs. dă aceleași coordonate ca un sistem EPSG din listă, BimCraft o spune și folosește acel cod; când mai multe sisteme din listă au aceleași formule, le numește și pe celelalte.

## Proiecțiile mele

O definiție pe care o lipiți sau un fișier `.prj` pe care îl încărcați poate fi păstrat cu {{ui:Keep in My projections}}. Lista este pe acest dispozitiv (acest browser) și este oferită data viitoare când deschideți selectorul.

## Ce o folosește

- {{ui:Measure}} › {{ui:Location}} transformă un punct ales în latitudine și longitudine prin sistemul modelului. Înainte se oprea cu o notă când fișierul își numea sistemul de hartă fără cod EPSG; cu un sistem ales și salvat, dă răspunsul.
- Straturile de hartă de sub model folosesc același sistem. Un nor de puncte sau un fișier de teren într-un alt sistem este oferit cu cel al modelului (vezi mai jos).
- {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}} › {{ui:Choose another system…}} stabilește ce mai raportează {{ui:Location}}: latitudinea și longitudinea în orice sistem geografic din listă, sau estul și nordul în orice sistem proiectat, pe lângă cel propriu al modelului.

## Un model care nu este încă pe hartă

Dacă fișierul nu are o conversie la hartă, alegerea unui sistem deschide {{ui:Place this model on the map}}. Îl puteți deschide și din {{ui:Measure}} › {{ui:Map origin…}}.

1. Dați originea modelului ca est și nord în sistem, sau scrieți o latitudine și o longitudine și alegeți {{ui:Convert to eastings and northings}}.
2. Dați rotația până la nordul grilei (grade, în sens trigonometric; 0 înseamnă că axa Y a modelului arată spre nordul grilei) și înălțimea originii.
3. Scara pornește de la diferența de unități dintre model și hartă (0.001 pentru un model în milimetri pe o grilă în metri). Schimbați-o doar pentru un factor combinat sol-grilă.
4. Alegeți {{ui:Place on the map}}. Un singur pas de anulare scrie un IfcProjectedCRS și un IfcMapConversion (IFC4). Modelul în sine nu se mută.

Un fișier IFC2X3 nu are niciuna dintre aceste entități. BimCraft scrie aceleași numere așa cum permite acel standard: seturile de proprietăți buildingSMART `ePSet_MapConversion` și `ePSet_ProjectedCRS` pe proiect, latitudinea și longitudinea amplasamentului și nordul adevărat. Dialogul o spune. Salvați modelul ca s-o păstrați.

## Un model care este deja pe hartă

Când fișierul se plasează deja pe hartă și alegeți alt sistem, BimCraft întreabă:

- {{ui:Only change what Location reports}} păstrează georeferențierea proprie a fișierului și folosește alegerea dvs. pentru {{ui:Location}}, straturile de hartă și norii de puncte (numerele modelului sunt atunci citite ca fiind în noul sistem).
- {{ui:Move the model to this system}} rescrie georeferențierea: originea trece prin proiecție (est, nord, înălțime, rotație și scară), iar IfcProjectedCRS (nume, datum, proiecție, zonă, unitate) este rescris, astfel încât IFC salvat spune noul sistem. Locul de pe pământ rămâne același: originea își păstrează latitudinea și longitudinea. Elementele din model nu se schimbă niciodată; se schimbă doar georeferențierea.

Dialogul arată originea veche și cea nouă înainte să alegeți. Mutarea dus și întors readuce originea în limita unui milimetru.

## Nori de puncte și teren într-un alt sistem

Un nor sau un fișier de releveu își are propriul sistem (LAS, LAZ, E57, GeoTIFF) sau nu are niciunul. Când diferă de cel al modelului, BimCraft oferă {{ui:Reproject into the model's system}}. Punctele sunt mutate în loturi (într-un proces separat când sunt multe, ca pagina să rămână utilizabilă), fișierul de pe calculatorul dvs. nu este atins, iar linia de stare spune ce s-a făcut. Redeschideți fișierul ca să reveniți la propriul sistem. Pentru un nor deja deschis, {{ui:Reproject to the model…}} din bara norului face același lucru.

Dacă fișierul nu numește niciun sistem, BimCraft întreabă {{ui:Which system is this file in?}}: alegeți-l cu {{ui:Choose the system…}} și răspunsul este reținut pentru acel fișier pe acest dispozitiv. {{ui:Keep the file's own system}} lasă punctele așa cum sunt.

## Când ceva este aproximativ

Problemele sunt listate în dialog și în panoul Probleme, niciodată pe tăcute:

- Un loc în afara zonei pentru care este făcut sistemul: cifrele funcționează, dar distorsiunea crește.
- Schimbările de datum care cer un fișier de grilă (NADCON, NTv2 și asemenea) nu sunt disponibile. Sistemele pe alt datum sunt mutate cu deplasarea fără grilă listată de registrul EPSG, iar rezultatul este aproximativ cu precizia indicată, pe care mesajul o dă în metri.
- Un punct care nu poate fi proiectat este lăsat afară și numărat; un fișier peste limita de dimensiune este refuzat, iar limita este indicată.

:::tip
Coordonatele de hartă cer o conversie la hartă. Un fișier fără ea este plasat pe hartă cu {{ui:Map origin…}}.
:::

:::note
Trecerea între datumuri fără un fișier de grilă este bună la câțiva metri; rezultatul Locație spune cât de mult, când catalogul îl cunoaște.
:::
