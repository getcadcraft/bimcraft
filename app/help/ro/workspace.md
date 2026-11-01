---
title: Ecranul BimCraft
summary: Un tur al fiecărei bare, al fiecărui panou și al fiecărui buton, după numele de pe ecran, și modul în care se schimbă ecranul pentru fiecare tip de fișier.
keywords: ecran, aspect, panouri, bară de instrumente, interfață, ui, tur, panou proprietăți, browser, bară de aplicație
from: 2eb01ec2
---

Ecranul BimCraft are o bară de sus și trei zone sub ea: un panou în stânga, scena în mijloc și panoul {{ui:Proprietăți}} în dreapta. Ce apare în fiecare zonă depinde de ce ați deschis: un model IFC, un fișier de proiect sau de familie, un desen sau un dosar.

## Bara aplicației

Bara subțire de sus aparține site-ului CadCraft, nu BimCraft-ului însuși. De la stânga la dreapta:

- Marca CadCraft: duce la pagina principală CadCraft.
- Numele aplicației și un meniu de versiuni. În build-ul intern arată ce build rulați și vă lasă să treceți la o versiune lansată.
- {{ui:Despre BimCraft}}: pagina aplicației pe site.
- {{ui:Setări}}: setările proprii ale BimCraft și cele pe care le au toate aplicațiile. Vezi [Setările BimCraft](topic:settings).
- {{ui:Ecran complet}}: parcurge modurile de ecran. Vezi [Moduri de ecran](topic:workspace#screen-modes) mai jos.
- {{ui:Hârtie}} și {{ui:Model}}: temele luminoasă și întunecată. Vizualizarea 3D și desenele 2D urmează tema aleasă.

## Panoul din stânga

Panoul din stânga începe mereu cu **Deschideți un fișier sau un dosar**:

- Zona de plasare, {{ui:Alegeți un fișier sau trageți aici un fișier sau un dosar}}. Faceți clic pe ea ca să alegeți un fișier sau trageți un fișier ori un dosar pe ea (sau oriunde pe pagină).
- {{ui:Deschidere dosar}}: alegeți un întreg dosar de proiect. Vezi [Deschiderea unui întreg dosar de proiect](topic:open-project-folder).
- {{ui:Dosare recente}}: apare în Chrome și Edge după ce deschideți un dosar cu selectorul de dosare sau trăgându-l. Faceți clic pe {{ui:Redeschidere}} și pe numele dosarului ca să-l deschideți din nou, sau pe mica × ca să-l uitați.

Sub el apar secțiuni, pe măsură ce se aplică:

| Secțiune | Când apare | Ce conține |
|---|---|---|
| {{ui:Modificări}} | Un model IFC este deschis | Modificările nesalvate, cele mai noi primele, cu {{ui:Anulare}} și {{ui:Salvare ca IFC}} |
| {{ui:Fișier}} | Un model sau o fișă de fișier este deschisă | Date despre fișier: dimensiune, schemă sau versiune, proiect, autor, numărul de elemente |
| {{ui:Desen}} | Un DWG sau DXF este deschis | Format, unități, numărul de entități și de straturi, foi, desene legate, echipamente |
| {{ui:Dosar}} | Un dosar este deschis | Numărul de fișiere și de modele, dimensiunea, probleme găsite |
| {{ui:Înapoi la dosar}} | Ați deschis un fișier dintr-un dosar | Revine la raportul dosarului |
| {{ui:Straturi}} | Un desen este deschis | O casetă de bifare pentru fiecare strat, cu {{ui:Toate active}} și {{ui:Toate inactive}} |
| {{ui:Niveluri}} | Un model IFC este deschis | O casetă de bifare pentru fiecare nivel, cel mai de sus primul |
| {{ui:Elemente}} | Un model IFC este deschis | Câte elemente de fiecare fel are modelul (cele mai frecvente 30) |

## Scena

Mijlocul ecranului arată fișierul deschis.

- **Gol**: „Deschideți un model de clădire.” cu {{ui:Alegere fișier}} și {{ui:Deschidere dosar}}, și o scurtă descriere a fiecărui format.
- **Model IFC**: vizualizarea 3D, cu o bară de instrumente deasupra, în grupuri numite, ca în aplicația de desen CadCraft, fiecare unealtă cu pictograma deasupra numelui: {{ui:Vizualizare}} ({{ui:Potrivire}}, {{ui:Sus}}, {{ui:Față}}, {{ui:Lateral}}, {{ui:Muchii}}, {{ui:Spații}}); {{ui:Editare}} ({{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}}, {{ui:Lipire}} și {{ui:Mai multe}}, vezi [Copierea, lipirea și duplicarea elementelor de bibliotecă](topic:copy-paste)); {{ui:Model}} ({{ui:Unități}} și {{ui:Desenare}}); {{ui:Bibliotecă}} ({{ui:Bibliotecă}}, {{ui:Echipamente}}, {{ui:Actualizări}}, {{ui:Credite}}); {{ui:Revizuire}} ({{ui:Afișare}}, {{ui:Secțiune}}, {{ui:Plimbare}}, {{ui:Măsurare}}; vezi [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane)); și {{ui:Rezultat}} (randare, vizualizare live, VR, exporturi, pictură și vederi salvate). Cu {{ui:Desenare}} activ, bara de desenare de sub ea arată la fel: {{ui:Vizualizare}} (nivelul și tipul planului), {{ui:Desenare}}, {{ui:Editare}} și {{ui:Bibliotecă}}. Un cub de vizualizare stă în colțul din dreapta jos. Vezi [Deschideți un model IFC și priviți în jur în 3D](topic:open-ifc-model). În {{ui:Setări}}, {{ui:General}} puteți alege pictograme, etichete sau ambele pentru aceste butoane, puteți arăta sau ascunde numele grupurilor, iar clic dreapta pe bara de instrumente aranjează uneltele și grupurile. Într-o fereastră scurtă, bara de instrumente lasă numele de sub pictograme.
- **Fișier de proiect sau de familie**: fișa, cu imaginea de previzualizare, informațiile proiectului și fișierele legate. Vezi [Citirea unui fișier de proiect sau de familie](topic:read-rvt-file).
- **DWG sau DXF**: un rând de file ({{ui:Model}}, apoi una pentru fiecare foaie, apoi {{ui:Echipamente}} când desenul are echipamente etichetate, {{ui:3D}}, {{ui:Potrivire}} și {{ui:Vizualizare imprimare}}), desenul și coordonatele X și Y live, într-un colț. Vezi [Vizualizarea unui desen DWG sau DXF](topic:view-dwg) și [Vizualizarea unui desen DWG sau DXF în 3D](topic:dwg-in-3d).
- **Dosar**: raportul dosarului, cu caseta {{ui:Începeți aici}} și tabele cu modele, legături, modele IFC și desene. Vezi [Deschiderea unui întreg dosar de proiect](topic:open-project-folder).

**Linia de stare** din partea de jos a scenei vă spune ce face BimCraft („Se citește modelul…”, „Se construiește geometria: 1200 din 5400 de elemente”) și ce a mers prost, cu roșu, când ceva eșuează. Mesajele de succes se estompează după câteva secunde.

## Panoul Proprietăți

Panoul din dreapta arată:

- Pentru un model IFC: elementul pe care ați făcut clic, cu numele, tipul, eticheta, GlobalId și fiecare set de proprietăți. Valorile pe care le puteți schimba arată ca niște butoane. Vezi [Câmpurile panoului Proprietăți](topic:properties-panel).
- Pentru un desen: cum să vă mișcați, desenele legate și imaginile și dacă a fost găsită fiecare, plus o listă a ceea ce este **Încă nedesenat**.
- Pentru o fișă de fișier sau un dosar: o scurtă notă despre ce să deschideți în continuare.

## Pe un ecran mic

Când fereastra este mai îngustă decât un ecran de laptop, BimCraft își așază zonele una peste alta: scena deasupra, apoi panourile dedesubt. Derulați pagina ca să ajungeți la panouri. Pe telefon formează o singură coloană; pe tabletă, două.

## Moduri de ecran

Butonul {{ui:Ecran complet}} din bara aplicației, sau {{key:Ctrl+Shift+F}} pe toate platformele, parcurge trei moduri:

1. Normal.
2. Ecran complet, cu barele încă vizibile.
3. Ecran complet, cu bara aplicației ascunsă. Mutați cursorul la marginea de sus sau atingeți acolo ca s-o aduceți înapoi.

Apăsați {{key:Esc}} ca să reveniți la normal. Browserele fără suport pentru ecran complet (cum ar fi pe un iPhone) comută doar între normal și bare ascunse.

## Subiecte înrudite

- [Taste și mouse](topic:keyboard)
- [Fișierele pe care BimCraft le deschide și le salvează](topic:files)
