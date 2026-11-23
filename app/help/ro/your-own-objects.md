---
title: Aduceți propriile obiecte și fișiere de familie în Bibliotecă
summary: Citiți fișiere de familie (.rfa) și fișiere IFC, DWG, DXF, glTF sau OBJ în fila Bibliotecă, plasați-le ca orice element de bibliotecă și păstrați-le în Obiectele mele, o listă privată, vizibilă doar pentru utilizator.
keywords: rfa, familie, familii, bibliotecă de familii, obiecte proprii, obiectele mele, obiecte private, bibliotecă privată, import obiecte, conținut de la producători, obiecte BIM, element ifc, gltf, obj, bloc dwg, păstrare, comutare, migrare
from: 886261f8
---

## Ce veți face

Aduceți în BimCraft obiectele pe care le aveți deja: o bibliotecă de familii din Revit, un fișier IFC sau DWG descărcat de la un producător, o plasă dintr-un alt program de modelare. Citiți fișierul în fila {{ui:Bibliotecă}}, plasați obiectul în model ca element IFC corect și, dacă doriți să îl folosiți din nou, păstrați-l în {{ui:Obiectele mele}}.

## Pași

1. Deschideți un model IFC sau începeți o clădire nouă.
2. Faceți clic pe fila {{ui:Bibliotecă}} de lângă {{ui:Proprietăți}}.
3. Faceți clic pe {{ui:Fișiere…}}, apoi pe {{ui:Alegere fișier…}}. Alegeți un fișier sau mai multe deodată: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` sau `.csv`. Sau faceți clic pe {{ui:Alegeți un dosar…}} pentru a citi un dosar întreg și dosarele din el (până la 200 de fișiere deodată).
4. Faceți clic pe un card pentru a vedea ce s-a citit: previzualizarea în plan, numele, producătorul și modelul, dimensiunile și notele.
5. Faceți clic pe {{ui:Plasare în plan}} sau {{ui:Plasare în model}} pentru a-l plasa.
6. Pentru a-l folosi din nou în alte proiecte, faceți clic pe {{ui:Păstrare în obiectele mele}}. Dacă ați citit mai multe fișiere, {{ui:Păstrare toate în obiectele mele}} le păstrează dintr-o dată.
7. Mai târziu, faceți clic pe {{ui:Obiectele mele}} din fila Bibliotecă pentru a le găsi. Sunt plasate, înlocuite și actualizate ca orice element de bibliotecă.

Fișierele se citesc în această filă. Nimic nu se încarcă până nu alegeți {{ui:Păstrare în obiectele mele}}.

## Ce se citește din fiecare tip de fișier

| Fișier | Ce primiți |
|---|---|
| IFC | Fiecare tip de element ca obiect, cu forma sa reală 3D, clasa IFC și seturile de proprietăți |
| glTF, GLB, OBJ | Un obiect cu forma sa reală 3D, ca plasă. Setați mai întâi unitățile și care este sus. |
| DWG, DXF | Fiecare bloc ca obiect, cu desenul său în plan și atributele |
| Fișier de familie (`.rfa`) | Numele familiei, categoria, producătorul, modelul, parametrii și tipurile ei. **Nu forma 3D:** în locul ei stă o cutie cu Lățimea, Adâncimea și Înălțimea familiei. |
| CSV | Un obiect pe rând: nume, dimensiuni și date, desenat ca o cutie |

## Fișiere de familie și forma lor 3D

Forma 3D dintr-un fișier `.rfa` este stocată într-un format nedocumentat, așa că BimCraft citește datele familiei și nu ghicește geometria. Cardul spune aceasta: „Geometria nu a fost citită din această familie; în locul ei stă o cutie.”

Pentru a aduce o familie cu forma ei reală, exportați-o din programul care a creat-o (Revit):

1. Deschideți familia sau un proiect în care este plasată familia.
2. Alegeți **File > Export > IFC**. Vezi [setările de export care se deschid cel mai bine aici](topic:rvt-to-ifc).
3. În BimCraft, citiți fișierul `.ifc` cu {{ui:Fișiere…}}. Fiecare tip de familie apare ca obiect propriu, cu forma și seturile de proprietăți.

Mulți producători oferă un fișier IFC sau DWG de descărcat lângă fișierul de familie. Acestea se citesc direct.

## Tipuri de familii

O familie cu mai multe tipuri apare ca un singur element, cu o alegere {{ui:Variantă}}, câte o variantă pentru fiecare tip. Fiecare variantă are valorile care diferă între tipuri și propria cutie, atunci când tipul are o Lățime și o Adâncime. O familie cu un singur tip este un element simplu, completat cu valorile acelui tip.

Unele familii își păstrează tipurile într-un catalog de tipuri: un fișier `.txt` cu același nume lângă fișierul de familie. Alegeți amândouă împreună sau alegeți dosarul, iar rândurile catalogului devin variantele.

## Datele unei familii pe o formă reală

Dacă un dosar conține un fișier de familie și un fișier IFC, glTF sau OBJ cu același nume (`Chair.rfa` și `Chair.ifc`), alegeți-le pe amândouă împreună sau alegeți dosarul. BimCraft face un singur element: fișierul de familie dă numele, producătorul, modelul, parametrii și tipurile, iar celălalt fișier dă forma 3D reală. Notele spun din ce fișier provine forma. Se folosește o singură formă pentru fiecare tip.

Când un fișier de familie are salvată o imagine, detaliile elementului arată acea imagine sub desenul în plan. Imaginea este afișată doar acolo; nu se păstrează cu elementul.

## Obiectele mele

{{ui:Obiectele mele}} este o listă privată din Bibliotecă. Doar utilizatorul poate vedea ce conține: lista nu este în biblioteca publică, nu apare în căutare și nu este arătată echipei. Ea urmează contul, așa că aceleași obiecte sunt acolo și pe alt calculator, după conectarea la bibliotecă.

- Trebuie să fiți conectat la bibliotecă pentru a păstra un obiect. Vezi [conectarea la bibliotecă](topic:library-credits).
- Păstrarea unui obiect trimite acel obiect în cont. Până atunci rămâne pe calculator.
- {{ui:Eliminare din obiectele mele}} scoate un obiect din listă. Copiile deja plasate în desene rămân.
- Pentru a împărtăși un obiect cu toată lumea, încărcați-l în biblioteca publică, sub o licență aleasă.

:::note
Funcția Obiectele mele este în testare și poate să nu fie deschisă încă pentru acest cont. Dacă sursa lipsește sau apare mesajul „Obiectele mele nu sunt deschise încă pentru acest cont”, puteți citi și plasa în continuare fișierele proprii cu {{ui:Fișiere…}}; ele se salvează în interiorul modelului.
:::

## Greșeli frecvente

- **Așteptarea formei reale a familiei dintr-un `.rfa`.** Se citesc doar datele sale. Exportați IFC pentru formă.
- **Două elemente acolo unde ați așteptat unul.** O familie și fișierul ei de formă se unesc doar când numele lor se potrivesc exact, în afară de extensie, și sunt în același dosar.
- **O plasă apare de o mie de ori prea mare sau culcată pe o parte.** Setați {{ui:Unitățile fișierului}} și {{ui:Axa verticală a unei plase}} sub {{ui:Fișiere…}} înainte de a alege fișierul.
- **„Fără date de familie” la un fișier.** Este un proiect (`.rvt` salvat cu altă extensie) sau un șablon de familie, nu o familie. Vezi [Citirea unui fișier de proiect sau de familie](topic:read-rvt-file).
- **Păstrarea unui conținut pe care nu aveți voie să îl stocați.** Unele biblioteci plătite nu permit copii în afara propriului serviciu. Verificați termenii conținutului pe care nu l-ați creat.
