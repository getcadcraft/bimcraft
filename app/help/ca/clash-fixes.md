---
title: Resol les col·lisions amb les solucions de cada disciplina
summary: Des dels resultats de col·lisió, {{ui:Proposa solucions}} llista per a cada col·lisió què pot fer cada disciplina: un conducte desviat sota una biga, un tub desplaçat, una columna moguda, una obertura en una biga. Cada solució es prova en una còpia del model amb les seves contraprestacions, perquè les accepteu o les rebutgeu. Les solucions acceptades s'apliquen com un sol pas per desfer.
keywords: col·lisió, solució de col·lisió, resoldre col·lisions, coordinació, proposa solucions, redirigir, desviació, desplaçament, conducte, tub, safata, biga, columna, obertura, maniga, contraprestació, disciplina, estructura, mecànica, fontaneria, elèctrica, arquitectura, assistent
from: f7bafdd9
---

## Què hi fareu

Convertiu una llista de col·lisions en decisions. Cada disciplina (estructura, mecànica, fontaneria, elèctrica, arquitectura) proposa solucions només per als seus propis elements, cada proposta es comprova en una còpia del model, i vosaltres decidiu.

## Passos

1. Executeu primer la comprovació de col·lisions. Vegeu [Cerca col·lisions](topic:clash-check) i [Comprova tubs i conductes contra l'estructura](topic:mep-against-structure).
2. Sota els resultats, cliqueu {{ui:Proposa solucions}}. El panell **Solucions proposades** s'obre al costat del model.
3. Per a cada col·lisió veieu les propostes de cada disciplina, la millor primer. Cada línia diu què fa i quines contraprestacions té: si resol la col·lisió, quantes col·lisions noves genera, quines regles incompleix, quant recorregut afegeix o quant es desplaça, quants accessoris i una puntuació de cost.
4. Cliqueu {{ui:Mostra}} per veure els elements en 3D. Cliqueu {{ui:Accepta}} a la solució que vulgueu (una per col·lisió), o {{ui:Rebutja}}.
5. La línia de baix diu què fan conjuntament totes les solucions acceptades: quantes col·lisions queden resoltes, quantes en queden i si n'apareix alguna de nova.
6. Cliqueu {{ui:Aplica les solucions acceptades (un sol pas per desfer)}}. La comprovació de col·lisions s'executa de nou. {{ui:Desfés}} les desfà totes de cop.

## Què pot fer cada disciplina

- **Mecànica** (conductes, tubs de calefacció i refrigeració): desviar per sobre o per sota del tram que topa, pujar o baixar tot el recorregut, moure'l al costat, o fer un conducte rectangular més pla amb la mateixa àrea.
- **Fontaneria** (aigua, desguassos, gas, incendis): els mateixos moviments, excepte que un desguàs per gravetat mai no rep un desviament; només es pot moure com un tot, mantenint-ne la pendent.
- **Elèctrica** (safates i conduïts): els mateixos moviments; una safata ha de deixar 150 mm lliures per sobre per poder tirar cable.
- **Estructura**: moure una columna (fins a 300 mm), o una obertura a l'ànima d'una biga o en un forjat pel recorregut que hi passa. Cada solució estructural diu que l'enginyer d'estructures l'ha de signar.
- **Arquitectura**: una maniga en un mur pel recorregut que hi passa, o moure un mur que se sap que no porta càrrega.

## Què hauríeu de veure

- Les solucions que incompleixen una regla estan marcades: més a prop de la separació de 25 mm de qualsevol altra cosa, per sota de la línia d'alçada lliure de 2,100 mm, una obertura a l'ànima més gran del 40% del cantell de la biga o massa a prop dels seus extrems, o una biga que canviaria de llum.
- Les solucions que BimCraft pot fer s'apliquen al model: recorreguts que heu dibuixat amb les eines Tub i Conducte, i columnes que heu dibuixat. Les altres diuen **Només consell**: en acceptar-les s'afegeix una incidència a la pestanya Incidències.

## Bon de saber

- Les solucions vénen de regles integrades a l'aplicació; no s'hi fa servir cap IA.
- Si connecteu un assistent d'IA (vegeu [Deixa que un assistent d'IA treballi amb el vostre model](topic:assistants)), pot llegir les col·lisions i afegir les seves pròpies propostes per a una disciplina al panell obert. Es comproven de la mateixa manera, marcades amb el nom de l'assistent, i no es canvia res fins que les accepteu i les apliqueu.
- La còpia es comprova amb caixes al voltant de cada element i de cada tram d'un recorregut, així que un recorregut inclinat pot mostrar una col·lisió que la comprovació de col·lisions no mostraria. Executeu de nou la comprovació de col·lisions després d'aplicar: és la darrera paraula.
- Els límits (quant pot desplaçar-se un recorregut, quant pot pujar un desviament, la separació) són els valors per defecte escrits al panell.

## Següent

- [Incidències i fitxers BCF](topic:issues-bcf)
- [Dibuixa recorreguts de tubs i conductes](topic:pipes-and-ducts)
