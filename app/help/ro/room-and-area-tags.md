---
title: Etichete pentru încăperi și suprafețe
summary: Puneți o etichetă cu numărul, numele și suprafața pe o încăpere sau pe o suprafață. Eticheta urmează elementul și are dimensiunea dată de înălțimea ei pe hârtie.
keywords: etichetă, etichetă cameră, etichetă suprafață, etichetare cameră, etichetare suprafață, etichetează toate, etichetează toate neetichetate, text, înălțimea textului, înălțime pe hârtie, adnotare
from: 67059d8a
---

## Ce veți face

Etichetați încăperile și suprafețele una câte una sau pe toate deodată și mutați o etichetă acolo unde se citește bine.

## Unde sunt instrumentele

- Panglici: {{ui:Arhitectură}} › **Cameră și suprafață** › {{ui:Etichetare cameră}} și {{ui:Etichetare suprafață}}.
- Layout clasic: bara Desenare › meniul {{ui:Încăperi}}.
- O încăpere sau o suprafață selectată: Proprietăți › {{ui:Adăugare etichetă}}.

## Pași

1. Alegeți {{ui:Etichetare cameră}} și faceți clic într-o încăpere, unde ar trebui să stea eticheta.
2. Sau apăsați {{ui:Etichetează toate neetichetate}} din rând: fiecare încăpere de pe acest nivel care nu are etichetă primește una, în mijlocul ei. Este un singur pas în Anulare.
3. Pentru a muta o etichetă, selectați-o cu Selectare și trageți-o. În Proprietăți există {{ui:Readuceți-o în mijloc}}.
4. {{ui:Etichetare suprafață}} funcționează la fel pentru suprafețe.

## Ce face o etichetă

- Arată numărul, numele și suprafața, în unitățile de afișare.
- Urmează încăperea sa: redenumiți încăperea, mutați un perete, iar textul și locul etichetei se schimbă în același pas.
- Este dimensionată pe hârtie: {{ui:Înălțimea textului pe hârtie}} este în milimetri (2.5 pentru început). La o scară de vizualizare 1:50, o etichetă de 2.5 mm are 125 mm înălțime în model; la 1:100 are 250 mm.
- O încăpere cu etichetă arată eticheta în locul etichetei simple.
- Când încăperea sau suprafața dispare, eticheta dispare odată cu ea. Anularea le readuce pe amândouă.

## În IFC

O etichetă este un IfcAnnotation (ObjectType ROOMTAG sau AREATAG), cu textul ei ca literal de text și cu GlobalId-ul a ceea ce denumește. Textul din fișier dă suprafața în metri pătrați.

## Încă nerealizat

- Forme de etichetă proprii și o linie de indicație.
- Etichetele de pe uși, ferestre și pereți sunt un instrument separat (vedeți stilurile de etichetă ale foilor).

Vedeți și [Încăperi și separatoare de încăperi](topic:rooms-and-separators).
