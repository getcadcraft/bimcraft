---
title: Afișarea și ascunderea nivelurilor, spațiilor și muchiilor
summary: Dezactivați niveluri ca să vedeți în interiorul unei clădiri, afișați camerele și spațiile și activați sau dezactivați liniile muchiilor.
keywords: niveluri, etaje, pardoseli, ascundere, izolare, camere, spații, ifcspace, muchii, vizibilitate, secțiune
from: b838dcc0
---

## Ce veți face

Priviți în interiorul unui model IFC dezactivând nivelurile de deasupra celui care vă interesează, apoi afișați camerele și spațiile și dezactivați liniile muchiilor pentru un aspect mai curat.

## Pași: priviți un singur etaj

1. Deschideți un model IFC. Vezi [Deschiderea unui model IFC și privirea în 3D](topic:open-ifc-model).
2. Găsiți lista {{ui:Niveluri}} din stânga. Cel mai de sus nivel este primul, ca la citirea unei secțiuni de sus în jos, de la acoperiș.
3. Debifați acoperișul și fiecare nivel de deasupra etajului pe care îl doriți.
4. Faceți clic pe {{ui:Sus}} ca să priviți în jos, spre acel etaj.
5. Bifați din nou nivelurile ca să le readuceți.

## Ce ar trebui să vedeți

Fiecare nivel pe care îl debifați dispare imediat, cu tot ce se află pe el. Lista afișează doar nivelurile care conțin ceva vizibil. Elementele care nu sunt atribuite niciunui nivel sunt grupate ca **Fără nivel** la final; elementele de amplasament și unele piese de mobilier ajung adesea acolo.

## Pași: afișați camerele și spațiile

1. Faceți clic pe {{ui:Spații}} în bara de instrumente de deasupra modelului. Butonul rămâne apăsat.
2. Priviți modelul: camerele și spațiile apar ca volume palide, transparente.
3. Faceți clic pe un spațiu ca să citiți proprietățile sale, precum numele, numărul și suprafața, în dreapta.
4. Faceți clic din nou pe {{ui:Spații}} ca să le ascundeți.

Spațiile sunt ascunse când se deschide un model, pentru că altfel ar acoperi pereții și pardoselile.

## Pași: muchiile

1. Faceți clic pe {{ui:Muchii}} ca să dezactivați liniile subțiri ale muchiilor.
2. Faceți din nou clic ca să le reactivați.

La modelele foarte mari (peste 1.5 milioane de triunghiuri), butonul este cenușiu, cu sfatul „Muchiile sunt dezactivate pentru modelele foarte mari”. Aceasta economisește memorie.

## Greșeli frecvente

- **Debifați un nivel și vedeți în continuare părți din el.** Un element aparține nivelului căruia i l-a atribuit programul care l-a exportat. Un perete înalt sau o scară aparține adesea doar nivelului de bază, deci rămâne când nivelul de deasupra este ascuns sau dispare odată cu nivelul de dedesubt.
- **Ascundeți niveluri ca să vedeți în interior.** O casetă de secțiune este adesea mai rapidă: vezi [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane#a-section-box). Puteți și debifa rânduri în {{ui:Arborele modelului}} (vezi [Orientarea în arborele modelului](topic:model-tree)).
- **Faceți clic pe un spațiu prin perete.** Clicul alege cea mai apropiată suprafață vizibilă. Ascundeți nivelul de deasupra sau treceți la {{ui:Sus}}, apoi faceți clic.
- **Numele nivelurilor par ciudate.** BimCraft afișează numele nivelurilor salvate în fișier. Dacă apare „Level 1” sau un număr, asta a scris exportatorul.
