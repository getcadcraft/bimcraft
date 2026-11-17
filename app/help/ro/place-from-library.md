---
title: Plasarea echipamentelor și a mobilierului din bibliotecă
summary: Găsiți un element în Bibliotecă, într-un fișier sau în desenul deschis, plasați-l pe un etaj al unui model IFC cu o previzualizare fantomă, rotiți-l, fixați-l de un perete și salvați.
keywords: mutare, rotire, întoarcere, tragere, bibliotecă, librarycraft, plasare, inserare, echipament, mobilier, bloc, familie, element, catalog, conținut, kcl, csv, gltf, obj, rfa, dwg, tip ifc
from: 3dad5d4b
---

## Ce veți face

Puneți un element din bibliotecă într-un model IFC: o chiuvetă, o masă de lucru, un scaun. BimCraft îl scrie ca pe un element IFC corect, cu un tip, astfel încât fiecare copie a aceluiași element împarte un singur set de geometrie, iar datele, numărul și licența lui se transferă odată cu el.

## Pași

1. Deschideți un model IFC.
2. Faceți clic pe fila {{ui:Library}} de lângă {{ui:Properties}} din dreapta, sau pe {{ui:Library}} din bara de instrumente de deasupra modelului.
3. Alegeți o sursă:
   - **Built-in symbols** (Simboluri încorporate): simboluri generice de plan pentru instalații sanitare, incluse în BimCraft sub Apache-2.0, disponibile offline. Verificați dimensiunile lor înainte de construcție. Pentru simbolurile electrice de plan și dispozitivele electrice IFC, folosiți **Build › Electrical** (Build › Electrice).
   - **Library** (Bibliotecă): biblioteca CadCraft de pe acest site. Elementele publice nu cer conectare.
   - **This file** (Acest fișier): blocurile unui desen DWG sau DXF deschis. Un bloc dinamic cu stări de vizibilitate este oferit o dată pentru fiecare stare, numit „Sink: Double bowl” (Chiuvetă: Două cuve), desenat fiecare cu doar obiectele acelei stări.
   - **Files…** ({{ui:Fișiere…}}): un fișier DWG, DXF, IFC, glTF/GLB, OBJ, RFA sau CSV de pe calculator. Este citit în această filă; nimic nu este încărcat.
   - **Other feeds** (Alte surse): o altă bibliotecă ce folosește același format de flux. Adăugați adresa ei o dată; este păstrată în acest browser.
4. Căutați sau alegeți o categorie, apoi faceți clic pe un card. Cardul arată o previzualizare de plan, numele, producătorul și modelul, licența și versiunea.
5. Faceți clic pe {{ui:Place in plan}} (în vederea Plan) sau {{ui:Place in model}} (în vederea 3D). În {{ui:Split}} (Divizare), unde planul și vederea 3D apar amândouă, butonul este unul divizat: acțiunea lui principală este {{ui:Place in plan}}, iar săgeata din capătul din dreapta deschide un meniu cu {{ui:Place in model}}. Sau trageți cardul, ori imaginea din detaliile elementului, pe plan sau pe vederea 3D: elementul este plasat acolo unde lăsați. Cu un stilou sau un deget, apăsați și țineți cardul o clipă, apoi trageți.
6. Alegeți etajul în bara de plasare. În vederea 3D, etajele de deasupra lui sunt ascunse cât plasați, iar vederea se îndreaptă spre vârf; în plan, planul arată deja acel etaj. Alegerea {{ui:Place in model}} doar din plan aduce vederea 3D alături.
7. Mutați cursorul peste model: o cutie transparentă arată unde merge elementul.
8. Apăsați {{key:R}} ca să-l rotiți cu 90°. Apăsați {{key:Tab}} (sau {{ui:Wall snap}}) ca să-i puneți spatele de cel mai apropiat perete, cu fața spre cameră.
9. Faceți clic ca să-l plasați. Sau tastați poziția în **X, Y (mm)**, de exemplu `1200, 3400`, și apăsați {{key:Enter}}.

Un corp de iluminat sau orice altceva agățat de sus: setați **Mount** (Montaj) la **At the ceiling** (La tavan). Partea de sus a elementului stă atunci la partea de jos a tavanului deasupra locului (sau la înălțimea nivelului, unde nu există tavan). Cu un plan de tavan în vederea Plan, **Mount** începe pe **At the ceiling**.

10. Răspundeți la singura întrebare: **numărul elementului** (se completează următorul număr liber), cantitatea și o notă. Apăsați {{key:Enter}}.
11. Plasați mai multe sau apăsați {{key:Esc}} ca să vă opriți.
12. Faceți clic pe {{ui:Save as IFC}} ca să descărcați copia modificată.

## Plan sau model

Butonul de plasare din Bibliotecă urmează vederea în care sunteți și se schimbă imediat ce schimbați vederea ({{ui:Plan}}, {{ui:Split}} și {{ui:3D}}, tastatura, deschiderea unui fișier). Plan arată un buton, {{ui:Place in plan}}; 3D arată un buton, {{ui:Place in model}}; Split arată butonul divizat, cu {{ui:Place in plan}} ca acțiune principală și {{ui:Place in model}} în meniu. Ambele moduri folosesc aceeași bară de plasare și scriu același element IFC: cursorul lucrează în vederea de plan pentru unul și în vederea 3D pentru celălalt. Apăsați {{key:Esc}} oricând ca să vă opriți.

Tragerea unui card nu are o tastă proprie: butonul divizat, sau cel simplu, face același lucru cu tastatura.

## Mutarea sau rotirea unui element plasat

În {{ui:Draw}}, alegeți elementul pe plan. Un mâner pătrat apare la punctul lui de inserție, iar unul rotund alături de el.

- Trageți elementul, sau mânerul lui pătrat, ca să-l mutați. Se fixează ca instrumentul Perete (capetele și fețele peretelui); {{key:Shift}} îl menține perpendicular pe poziția inițială.
- Trageți mânerul rotund ca să-l rotiți în pași de 15°. Țineți {{key:Shift}} pentru pași de 1°.
- Apăsați {{key:R}} ca să-l rotiți cu 90°.
- În **Properties** (Proprietăți), și în vederea 3D, tastați **X**, **Y** și **Rotation (°)** (Rotație (°)), sau faceți clic pe **Turn 90°** (Rotire cu 90°).

Fiecare mutare este un pas de anulare și călătorește în Live TeamWork. Elementul își păstrează numărul, datele din bibliotecă și înălțimea deasupra nivelului. Încă nerealizat: tragerea lui în vederea 3D.

## Ce ar trebui să vedeți

- Elementul în model, selectat, cu proprietățile sale în dreapta: o casetă **Library item** (Element din bibliotecă) cu licența și atribuirea sa, și seturile `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` și, pentru elementele din desene etichetate, `CadCraft_SourceAttributes`.
- „Placed: *item* (item *n*)” în lista modificărilor. {{key:Mod+Z}} îl anulează.
- Linia de stare: „Placed *item* as item *n*.” (Plasat *element* ca element *n*.)

## De reținut

- Unele elemente vin în mai multe dimensiuni sau opțiuni: cardul arată atunci o alegere **Variant** (Variantă), iar cea pe care o alegeți este cea plasată. Vezi [Plasarea și schimbarea unui element din bibliotecă care are variante](topic:library-variants).
- Un element fără corp 3D (un simbol 2D) este plasat cu o cutie de substituție; îi dați înălțimea când vi se cere.
- Mai multe din același fel: alegeți un element plasat și folosiți {{ui:Copy}} și {{ui:Paste}}, sau {{key:Mod+D}}. Vezi [Copierea, lipirea și duplicarea elementelor din bibliotecă](topic:copy-paste).
- Ca să porniți fiecare plasare cu agățarea de perete activată, activați **Start with wall snap on** (Pornire cu agățarea de perete activată) în [Setările BimCraft](topic:settings).
- Lungimile sunt convertite în unitățile proprii ale modelului, oricare ar fi ele.
- **Entourage** (copaci, arbuști, oameni, mașini) este și el în bibliotecă: căutați „tree”, „person” sau „car”. Acestea sunt desenate de CadCraft (CC0) și își păstrează culorile când sunt plasate (un trunchi maro, frunze verzi, geamurile unei mașini transparente), în BimCraft și în alte programe BIM. Apar în [imaginile randate](topic:render).
- Într-un fișier IFC2X3, corpul este scris ca solid facetat; în IFC4, ca un set de fețe triangulate. Ambele se deschid în alte instrumente IFC.
- Un desen (DWG sau DXF) nu poate fi salvat aici, deci elementele sunt plasate doar în modele IFC. Folosiți **This file** pe un desen ca să vedeți ce ar deveni blocurile lui.

## Elemente în alte limbi

Un element își poate avea numele, descrierea și tipul în alte limbi. Când le are în limba la care este setat BimCraft (Settings › General › Language), pagina elementului arată acelea, cu numele dat de producător dedesubt, iar **Place** scrie în model numele în limba setată, astfel încât lista {{ui:Equipment}} îl arată așa. Elementul rămâne același element: verificarea actualizărilor și înlocuirea merg după element, niciodată după nume. Elementele fără traducere își păstrează cuvintele proprii.

## Greșeli frecvente

- **Butonul de plasare lipsește.** Niciun model IFC nu este deschis. Deschideți unul întâi.
- **Fantoma nu urmează cursorul.** Cursorul este în afara zonei modelului, sau planul etajului nu este în vedere. Faceți clic pe {{ui:Top}}.
- **{{ui:Wall snap}} spune că nu sunt pereți.** Etajul nu are pereți în IFC (unele exporturi pun pereții pe alt etaj). Alegeți acel etaj sau tastați X și Y.
- **Elementele unui fișier au dimensiunea greșită.** Fișierul nu are unități sau are unitățile greșite. În {{ui:Files…}} alegeți unitățile și citiți-l din nou.

:::tip
Plasarea aceluiași element de două ori împarte un singur tip IFC, astfel încât un model cu patruzeci de scaune stochează scaunul o singură dată.
:::
