---
title: Venind de la alte programe BIM și de desen
summary: Cum se mapează obișnuințele din programele BIM desktop de creare și din vizualizarea DWG în BimCraft și diferențele care îi încurcă pe oameni.
keywords: trecere, migrare, familiar, bim desktop, familie, parametri, browser de proiect, paleta de proprietăți, cub de vizualizare, xref, manager de straturi, diferențe, comparare
from: 2de629af
---

Dacă cunoașteți Revit, cea mai mare parte din BimCraft vă va părea familiară prin cuvinte și nefamiliară prin domeniu. Cea mai importantă diferență: **această versiune citește și inspectează modele și editează date IFC. Nu creează încă modele ca Revit.** Nu puteți desena pereți, plasa familii, crea vederi sau foi ori salva un fișier de proiect. Ce puteți face este să deschideți aproape orice fișier de clădire pe orice calculator cu un browser, să vedeți ce conține, să verificați un dosar întreg de proiect și să corectați datele dintr-un model IFC.

## Obiceiuri mapate

| Dacă sunteți obișnuit cu | În BimCraft |
|---|---|
| Deschiderea unui `.rvt` în Revit ca să vedeți modelul | BimCraft deschide `.rvt` ca pe o fișă a fișierului: versiune, informații despre proiect, legături, previzualizare. Pentru modelul 3D, exportați IFC și deschideți-l. [Citiți un fișier de proiect sau de familie](topic:read-rvt-file) |
| Verificarea versiunii în care a fost salvat un fișier înainte de deschidere | Fișa spune „saved in Revit …” sus, fără a actualiza sau a atinge fișierul |
| Browserul de proiect | Niciun browser de vederi și foi. Un model IFC are listele {{ui:Niveluri}} și {{ui:Elemente}}; un desen are file de foi |
| Paleta Properties | Panoul {{ui:Proprietăți}} din dreapta, pentru elementul pe care l-ați făcut clic. Seturi de proprietăți IFC în loc de grupuri de parametri |
| Parametri de instanță și de tip | Seturi de proprietăți de instanță și seturi marcate „(tip)”. O schimbare de tip se aplică fiecărui element al tipului, ca în Revit. [Schimbați o proprietate de tip pentru fiecare element al unui tip](topic:type-vs-instance) |
| Edit Type | Nicio casetă de dialog: faceți clic pe o valoare dintr-un set „(tip)” și scrieți |
| Selectarea a multor elemente, filtre, Select All Instances | Un element pe rând. Încă nerealizat |
| Cubul de vizualizare și roata de navigare | Un cub de vizualizare în colțul din dreapta jos, patru butoane ({{ui:Potrivire}}, {{ui:Sus}}, {{ui:Față}}, {{ui:Lateral}}) și orbitare liberă. Fără roată de navigare |
| Shift și trageți cu butonul din mijloc ca să orbitați, trageți cu butonul din mijloc ca să panoramați | Trageți cu stânga ca să orbitați, trageți cu dreapta (sau {{key:Shift}} și trageți) ca să panoramați, rotița mărește. Stilul de meniu {{ui:Panglică BIM}} trece la panoramare cu butonul din mijloc și la orbitare cu {{key:Shift}} și butonul din mijloc. [Meniuri, taste și mouse](topic:menus-keys-and-mouse) |
| Planuri de etaj, secțiuni, casete de secțiune | Un singur plan de {{ui:Secțiune}} pe rând ({{key:X}}); fără casetă de secțiune sau planuri 2D. [Tăiați un model IFC cu un plan de secțiune](topic:section-plane) |
| Ascundere în vedere, izolare, vizibilitate/grafică | {{ui:Niveluri}} activate și dezactivate, {{ui:Spații}} și {{ui:Muchii}}. Încă nu există ascundere pe element |
| Camere | Spații IFC, ascunse la început. Faceți clic pe {{ui:Spații}} |
| Save, Save As, sincronizare cu fișierul central | {{ui:Salvare ca IFC}} descarcă un fișier IFC nou. Originalul nu se schimbă niciodată. Fără fișier central, fără lucru în comun |
| Undo cu {{key:Mod+Z}} | Funcționează pentru modificările IFC până la salvare. [Schimbați proprietățile IFC și salvați o copie modificată](topic:edit-ifc-properties) |
| Manage Links | Deschideți dosarul proiectului: fiecare legătură este verificată și marcată **In this folder** (În acest dosar), **Same name found** (Găsit cu același nume), **Library file** (Fișier din bibliotecă) sau **Not in this folder** (Nu este în acest dosar). [Deschideți un dosar întreg de proiect](topic:open-project-folder) |
| Audit sau deschiderea unui fișier ca să vedeți dacă este corupt | Raportul dosarului verifică în câteva secunde fiecare copie și copie de rezervă, dacă este tăiată. [Verificați un dosar pentru copii deteriorate](topic:check-folder-health) |
| Alegerea fișierului potrivit dintr-un dosar dezordonat | Caseta {{ui:Începeți aici}} sugerează unul, cu motive |

Dacă deschideți în principal modele ca să le verificați, ca într-un program de verificare a modelelor sau de vizualizare IFC, alegeți stilul de meniu {{ui:Vizualizator}}: instrumentele de vizualizare și verificare vin primele, iar instrumentele de construcție așteaptă într-un singur meniu. Vedeți [Meniuri, taste și mouse](topic:menus-keys-and-mouse).

## Din vizualizarea fișierelor DWG

Dacă deschideți fișiere DWG în AutoCAD sau într-un vizualizator DWG:

| Dacă sunteți obișnuit cu | În BimCraft |
|---|---|
| File-ele de model și de aspect jos | File deasupra desenului: {{ui:Model}} și câte una pentru fiecare foaie |
| ZOOM Extents, dublu clic pe rotiță | Dublu clic, {{key:F}} sau {{ui:Potrivire}} |
| Panoramare cu butonul din mijloc | Trageți cu oricare buton |
| Managerul de straturi | Lista {{ui:Straturi}}: bifați ca să arătați, debifați ca să ascundeți, {{ui:Toate active}} și {{ui:Toate inactive}} |
| Managerul de referințe externe (xref) | **Desene legate** în dreapta, cu **Shown** (Afișat) sau **Not found** (Negăsit), și {{ui:Adăugare desene legate…}} |
| Previzualizarea trasării | {{ui:Vizualizare imprimare}} sau {{key:P}}: negru pe alb cu grosimi de linie. Nu imprimă |
| Extragerea datelor din atributele blocurilor | Fila {{ui:Echipamente}} pentru desene de alimentație publică etichetate, cu {{ui:Descărcare CSV}} |
| Măsurare, desenare, editare, salvare ca | Nu sunt în BimCraft. Aplicația de desenare CadCraft desenează și editează |

## Diferențe care îi încurcă pe oameni

- **Rulează în browser, iar browserul păstrează fișierele în siguranță.** BimCraft poate citi doar fișierele și dosarele pe care i le dați, prin alegere sau prin tragere. Nu poate deschide singur un fișier și nu poate salva peste unul. Fiecare salvare este o descărcare.
- **Nu se încarcă nimic.** Cuvântul „upload” din unele casete de dialog pentru dosare ale browserelor este terminologia browserului. Fișierele rămân pe calculator.
- **IFC este formatul modelului.** Un fișier de proiect se deschide ca o fișă, deoarece conținutul său 3D nu este documentat. Considerați IFC drumul prin care modelele ajung în BimCraft.
- **Modificările sunt copy-on-write.** Schimbarea valorii unui element nu schimbă niciodată vecinii, chiar dacă exportatorul a împărțit acea valoare între ei. Proprietățile de tip sunt excepția intenționată.
- **Nu există proiect, nu există vederi.** BimCraft arată un fișier pe rând și nu ține minte nimic despre el după ce închideți fila, cu excepția numelor dosarelor recente în Chrome și Edge.
- **Taste pe Mac.** Acolo unde scurtăturile Windows din Revit folosesc Ctrl, scurtăturile BimCraft folosesc {{key:Mod}}: Command pe Mac.
- **Obiceiurile cu mouse-ul.** Orbitarea se face cu butonul stâng, nu cu Shift și butonul din mijloc, decât dacă alegeți stilul de meniu {{ui:Panglică BIM}} sau setați singuri butoanele în [Meniuri, taste și mouse](topic:menus-keys-and-mouse).

Vedeți [Ce nu este încă realizat](topic:not-built-yet) pentru ce să folosiți în locul acestora astăzi.
