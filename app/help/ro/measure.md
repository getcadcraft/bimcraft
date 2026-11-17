---
title: Măsurarea distanțelor, a ariilor fețelor și a locațiilor în 3D
summary: Măsurați între două puncte ale unui model IFC, cu agățare de colțuri și muchii, citiți diferența pe X, Y și Z și măsurați aria unei fețe plane.
keywords: măsurare, măsurătoare, distanță, lungime, cotă, arie, aria feței, agățare, colț, muchie, ruletă, riglă, spațiu liber, locație, latitudine, longitudine, lat long, coordonate, georeferențiere, conversie cartografică, EPSG, topografie, Est, Nord, WGS 84, datum
from: 5f430bba
---

## Ce veți face

Verificați un spațiu liber, lungimea unui perete sau dimensiunea unei fețe direct din model, fără a deschide programul de creare.

## Pași

1. Deschideți un model IFC.
2. Faceți clic pe {{ui:Măsurare}} în bara de instrumente sau apăsați {{key:M}}. Se deschide o bară în partea de jos a vizualizării.
3. **O distanță:** cu {{ui:Distanță}} ales, faceți clic pe primul punct, apoi pe al doilea. Lângă un colț, indicatorul se agață de el, lângă o muchie, pe muchie; eticheta mică de la indicator spune care. Fiecare pereche de clicuri face o măsurătoare.
4. **Aria unei fețe:** alegeți {{ui:Aria feței}} și faceți clic pe o față. Toată fața plană se luminează și aria ei apare.
5. **Linii drepte:** țineți {{key:Shift}} apăsat în timp ce alegeți al doilea punct sau apăsați {{ui:Dreaptă}} în bară ca să rămână așa. Linia merge atunci pe axa cea mai apropiată de indicator (într-o vedere de sus, pe X sau Y al planului; în celelalte vederi pe X, Y sau Z), iar eticheta indicatorului spune „drept pe o axă”. {{key:M}} tot pornește și oprește Măsurarea.
6. Faceți clic pe {{ui:Ștergere}} pentru a elimina măsurătorile sau pe {{ui:Gata}} (ori {{key:Esc}}) pentru a opri măsurarea.

## Ce ar trebui să vedeți

- O linie între cele două puncte, cu lungimea ei scrisă pe ea, iar în bară lungimea, cu cât merge pe X, Y și Z (în axele modelului, Z în sus), toate în {{ui:Unități}} alese în bara de instrumente.
- Aria unei fețe în metri pătrați, pe față și în bară.
- Etichetele rămân pe măsurătorile lor când orbitați, deplasați și măriți.
- Cât măsurați, clicurile nu aleg elemente. Un plan de secțiune sau o casetă de secțiune taie în continuare modelul, iar puteți măsura ce arată, inclusiv fețele tăiate.

## Unde se află un punct pe Pământ

Faceți clic pe {{ui:Locație}} în bara de măsurare, apoi faceți clic pe un punct al modelului (se agață de colțuri și muchii, ca la distanțe). Bara arată:

- **latitudinea și longitudinea**, în grade zecimale și în grade, minute și secunde, în WGS 84 la început;
- **coordonatele cartografice** (Est și Nord, scrise în {{ui:Unități}} alese în bara de instrumente) în sistemul cartografic propriu al modelului, de exemplu `EPSG:28356`;
- **înălțimea** și datumul vertical pe care îl numește fișierul, precum și **datumul propriu** al fișierului (de exemplu GDA94).

{{ui:Copiere}} pune totul pe clipboard, pe o singură linie. Schimbați sistemul în care sunt latitudinea și longitudinea din {{ui:Setări}} › BimCraft › {{ui:Locație}}: WGS 84 (ca GPS-ul și hărțile web), datumul propriu al fișierului sau un alt datum comun, precum ETRS89 sau NAD83.

Aceasta necesită un model georeferențiat: unul exportat cu coordonate cartografice (o conversie cartografică la un sistem proiectat, cu cod EPSG). Un model care are doar latitudinea și longitudinea amplasamentului primește o poziție aproximativă, calculată din punctul amplasamentului și din nordul său real, iar bara o spune. Când sunt mai multe modele deschise, fiecare punct folosește georeferențierea modelului său.

:::note
Trecerea între datumuri (de exemplu GDA94 către WGS 84) se face fără fișiere de grilă, deci este bună până la câțiva metri; bara de stare spune cât de bună este. Coordonatele cartografice în sine sunt exacte.
:::

## Greșeli frecvente

- **„…nu are georeferențiere”.** Fișierul nu are conversie cartografică și nici latitudine și longitudine ale amplasamentului. Exportați-l din nou cu sistemul de coordonate setat (coordonate comune sau punct topografic, în programul de creare).
- **Coordonate cartografice, dar fără latitudine și longitudine.** Fișierul numește sistemul cartografic fără cod EPSG sau cu unul care nu este în listă; bara de stare spune care.

- **Punctul cade pe față, nu pe colț.** Agățarea se uită la elementul de sub indicator. Apropiați-vă de colț sau măriți.
- **Aria este mai mică decât vă așteptați.** Golurile sunt lăsate afară, iar o față îndoită este mai multe fețe: faceți clic pe fiecare.
- **{{key:Esc}} a oprit măsurarea.** Primul {{key:Esc}} renunță la o distanță începută, al doilea oprește.

## Mai departe

- [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane)
- [Ascunderea, izolarea și transparența elementelor](topic:hide-and-isolate)
