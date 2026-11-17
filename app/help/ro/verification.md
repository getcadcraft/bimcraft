---
title: Marcarea elementelor ca verificate sau verificate pe teren
summary: Un element citit dintr-un PDF sau dintr-o scanare este neverificat până îl verificați. Marcați elementele ca verificate sau ca verificate pe teren (LOD 500), cu cine le-a măsurat, când și cum, și predați un model as-built care arată care este care.
keywords: neverificat, verificat, verificat pe teren, as-built, lod 500, închidere lucrare, predare, măsurat pe șantier, ruletă, laser, scanare, ridicare topografică, clădire existentă, modificare, marcare ca verificat, verificare, etapa 7
from: df35d908
---

## Ce veți face

Țineți evidența a ceea ce din model a fost efectiv verificat de cineva. Un element are una dintre cele trei marcaje sau niciunul:

- **Neverificat**: programul l-a recunoscut dintr-un PDF, dintr-un desen scanat, dintr-un desen trasat sau dintr-o scanare de nor de puncte. Nimeni nu l-a verificat încă.
- **Verificat**: o persoană l-a comparat cu desenul din care provine.
- **Verificat pe teren (LOD 500)**: o persoană l-a măsurat pe șantier. Cine, când și cum sunt păstrate împreună cu el.
- **Fără marcaj**: desenat de o persoană. Modelul nu face nicio afirmație despre el.

## Pași

1. Selectați un element sau mai multe (pereți, uși, ferestre, camere, orice element).
2. În {{ui:Proprietăți}}, deschideți {{ui:Verificare}}.
3. Scrieți cine l-a verificat sau măsurat. Data este cea de azi, dacă nu o schimbați.
4. Faceți clic pe {{ui:Marcare ca verificat}}. Pentru o măsurătoare pe șantier alegeți cum a fost măsurat (ruletă, telemetru laser, scanare, ridicare topografică) și faceți clic pe {{ui:Marcare ca verificat pe teren (LOD 500)}}.
5. {{ui:Marcare ca neverificat}} și {{ui:Eliminare marcaj}} revin înapoi. Fiecare clic este un pas pe care îl puteți anula, pentru toată selecția.

Pentru a marca rapid o selecție: {{ui:Instrumente}} › {{ui:Marcare ca verificat}} (scris: `MARKCHECKED`) o marchează ca verificată de persoana conectată, astăzi.

## Ce ar trebui să vedeți

- În plan, un element neverificat are o casetă punctată și un „?”; unul verificat pe teren are o bifă. Debifați {{ui:Afișare marcaje de verificare în plan}} din secțiunea {{ui:Audit}} ca să le ascundeți.
- {{ui:Tabele centralizatoare}} › {{ui:Verificare}} listează fiecare element marcat, cu nivelul, starea, cine, când, cum și de unde provine.
- Auditul listează elementele neverificate și numără un element verificat pe teren ca LOD 500. Vezi [Auditarea modelului](topic:audit-the-model).

## Dintr-o scanare

Când comparați o scanare cu modelul, {{ui:Marcare elementele corespunzătoare ca verificate pe teren}} marchează fiecare element pe care scanarea l-a văzut ca fiind construit, în limita toleranței, cu metoda „scan” și toleranța trecută în notă. Vezi [Compararea unei scanări cu modelul](topic:compare-scan-with-model).

:::warning
Comparația potrivește caseta fiecărui element cu punctele scanării. Nu este o ridicare topografică. Folosiți-o pentru elementele pe care le-ați privit și voi.
:::

## Modelul as-built și pachetul de predare

{{ui:Creare pachet de predare}} de pe fila {{ui:Resurse}} pune modelul as-built în arhiva zip, cu:

- o declarație pe proiect despre câte elemente sunt verificate pe teren, verificate, neverificate și nemarcate;
- `as-built/verified-elements.csv`: fiecare element și cameră, cu starea, cine, când și cum;
- `as-built/as-built-drawings.pdf`: setul de desene așa cum este acum;
- jurnalul modificărilor desenelor, atunci când modelul are seturi emise.

Vezi [Resurse și întreținere](topic:assets-and-maintenance).

## Cum este păstrat în IFC

Fiecare element marcat poartă setul de proprietăți `CadCraft_Verification`: State, By, On, Method, Source, Note și LevelOfDevelopment (`LOD 500` cât timp este verificat pe teren). Sunt proprietăți simple de text, pe care alte programe le listează, iar Căutare, Colorare după proprietate și tabelele de etichete le pot folosi. Declarația as-built este setul de proprietăți `CadCraft_AsBuilt` de pe proiect. Un element fără set nu a fost măsurat pe șantier.

## Următorul

- [Pereți dintr-un set de planuri](topic:walls-from-plans)
- [Auditarea modelului](topic:audit-the-model)
