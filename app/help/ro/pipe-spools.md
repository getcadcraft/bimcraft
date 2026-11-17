---
title: Tronsoane de țeavă din oțel și planșe de tronsoane
summary: Tăiați un traseu de țeavă din oțel cu sudură cap la cap în tronsoane de lungime maximă și la sudurile de șantier pe care le plasați, numerotați-le și descărcați o planșă de tronson pentru fiecare tronson (vedere 3D, lungimi tăiate, racorduri, sudură, listă de materiale) ca PDF și CSV; conductele de aer primesc o listă de tăiere a segmentelor drepte.
keywords: tronson, tronsoane, planșă de tronson, izometrie, fabricație, prefabricare, sudură de șantier, sudură de atelier, sudură cap la cap, lungime tăiată, listă de tăiere, listă de materiale, bom, țeavă din oțel, schedule 40, număr de linie, listă de tăiere conducte, piese de conductă de aer
from: 539f51de
---

## Ce veți face

Transformați un traseu de țeavă din oțel în piesele pe care le sudează atelierul și le montează montatorul: tronsoane care nu depășesc o lungime aleasă, împărțite acolo unde plasați sudurile de șantier, fiecare cu propria planșă.

Numai **țeava din oțel cu sudură cap la cap** se taie în tronsoane (dimensiuni de țeavă ASME B36.10M, coturi cu raza lungă ASME B16.9). Îmbinările de cupru, PVC și PEX nu sunt sudate cap la cap, deci traseele lor nu au tronsoane.

## Tăierea unui traseu în tronsoane

1. Alegeți un traseu de țeavă din oțel. În Proprietăți, bifați **Cut into spools** (Tăiere în tronsoane).
2. **Longest spool** (Cel mai lung tronson): cea mai mare lungime pe linia mediană pe care o poate avea un tronson (6 m, circa 20 ft, la început).
3. **Line number** (Număr de linie): parte din numărul fiecărui tronson. Un traseu nou tronsonat primește următorul număr liber al sistemului său.

Tronsoanele sunt numerotate de-a lungul traseului, de la primul său punct: `CHW-12-S01`, `CHW-12-S02` … (sistemul, numărul de linie, tronsonul). Un tronson crește piesă cu piesă; piesa care l-ar face prea lung începe următorul, iar o lungime dreaptă mai mare decât un tronson este tăiată acolo unde tronsonul este plin.

## Plasarea sudurilor de șantier

1. Deschideți {{ui:Build}} și alegeți {{ui:Field weld}}.
2. Faceți clic pe o țeavă tronsonată, acolo unde merge sudura de șantier. Pe o lungime dreaptă, țeava este tăiată acolo; pe un racord sau un robinet, sudura se mută la îmbinarea mai apropiată.

Proprietățile listează sudurile de șantier ale traseului, fiecare cu {{ui:Remove}}. Fiecare modificare este un pas al {{ui:Undo}}.

## Planșe de tronsoane

În Proprietățile unui traseu tronsonat:

- {{ui:Spool sheets (PDF)}}: o pagină pentru fiecare tronson. În stânga, tronsonul într-o vedere izometrică de 30°: segmentele drepte numerotate, sudurile de atelier ca puncte, sudurile de șantier marcate FW și nordul planului. În dreapta, numărul tronsonului, dimensiunea, programul și lungimea, apoi **lungimile tăiate**, **racordurile**, **sudurile** (o sudură cap la cap de atelier la fiecare îmbinare din interiorul tronsonului, o sudură de șantier acolo unde ajunge la tronsonul următor) și **lista de materiale** cu greutatea țevii (greutatea ASME B36.10M pentru capete netede).
- {{ui:Spool list (CSV)}}: același lucru, câte un bloc pentru fiecare tronson.

:::note
Lungimile tăiate sunt de la capăt la capăt, așa cum sunt desenate: nu se scade niciun gol de rădăcină sau adaos de sudură. Coturile sunt cu rază lungă B16.9; teurile, reducțiile și robinetele sunt generice, dimensionate după țeavă, nu după B16.9 sau după un producător, iar planșa spune asta. Greutățile racordurilor nu sunt date. Un instrument de desenare și coordonare, dimensionat de un inginer.
:::

## În fișierul IFC

Fiecare parte a unui traseu tronsonat poartă **CadCraft_Spool**, cu SpoolId-ul său, traseul, numărul tronsonului în traseu și locul unde începe și unde se termină de-a lungul traseului. Traseul își păstrează regulile (cel mai lung tronson, sudurile de șantier, numărul de linie) în setul propriu, astfel încât tronsoanele revin la fel când fișierul este deschis din nou.

## Conducte de aer: o listă de tăiere

Deschideți {{ui:Build}} și faceți clic pe {{ui:Duct cut list}}: un CSV al segmentelor drepte de conductă de aer, pe sistem, formă și dimensiune, fiecare segment drept tăiat în piese de **Piece length** (Lungimea piesei) din bara Conductă de aer (1500 mm, circa 5 ft, la început), plus restul rămas. Doar lungimi: fără cusături, grosimi ale tablei sau conectori.
