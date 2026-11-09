---
title: Noutăți în 0.8 și 0.8.1
summary: BimCraft adaugă persoane care parcurg clădirea, acustica încăperilor pe care o puteți auzi, redarea inundațiilor, vântului și cutremurelor, o vedere a ciclului de viață pe cincizeci de ani, verificări față de un IDS, etichete și tabele centralizatoare, Mutare, Aliniere și Distribuire, imagini sub plan, pereți dintr-o scanare, desene de panouri, solar, sisteme split și VRF, dimensionarea conductelor și a cablurilor, verificări ale betonului și seismice, orice proiecție cartografică, alegerea motorului de randare și anularea în Studio; 0.8.1 corectează uneltele dezactivate din aranjarea Panglicii.
keywords: noutăți, ce este nou, note de lansare, jurnal al modificărilor, modificări, 0.8, 0.8.1, versiune, funcții noi, evacuare, persoane, cozi, acustică, reverberație, răspuns la impuls, inundație, vânt, cutremur, hazard, ciclu de viață, durată de serviciu, ids, etichete, tabele centralizatoare, mutare, aliniere, distribuire, imagine, fundal, scanare în pereți, sit din civilcraft, desene de panouri, înrămare, solar, pv, split, vrf, ventiloconvectoare, dimensionare conducte, jgheab pentru cabluri, iluminare, beton, seismic, comparare scanare, epsg, proiecție, documente, șablon, carbon, cost, energyplus, motor de randare, deschidere în, usd, glb, unreal, anulare, suplimente, pcf, simboluri, plante, calchiere, penițe, panglică, navigator de proiect, aranjament
from: 87b03056
---

Iată ce s-a schimbat în BimCraft 0.8 (2026-11-01) și 0.8.1 (2026-11-02), față de 0.7. BimCraft poate acum să răspundă la întrebări despre o clădire și să o testeze, cu persoane, sunet, apă, vânt și cutremure, și să o deseneze cu mai multe unelte; 0.8.1 este o versiune de corecții.

## Noutăți

### Testarea clădirii

- **Persoane în clădire.** Secțiunea {{ui:Persoane în clădire}} din panoul din stânga trece o evacuare sau sosirile dintr-o zi obișnuită prin încăperile, ușile și scările dvs. Se văd cozile acolo unde clădirea se îngustează, cel mai lung drum până la o ieșire din fiecare încăpere și cât durează ultima persoană. Bifați {{ui:Închisă}} pe o ușă ca să vedeți ce se schimbă și bifați {{ui:Afișare persoane în vizualizarea 3D}} ca să urmăriți pietonii. Constatările merg în Probleme. Un model grosier de aglomerare pentru decizii de proiectare, nu un certificat de siguranță la incendiu. Vezi [Plimbarea persoanelor prin clădire](topic:people-in-the-building).
- **Acustica încăperilor, și auzirea ei.** Secțiunea {{ui:Acustica încăperilor}} dă timpul de reverberație al fiecărei încăperi pe benzi de octavă (Sabine și Eyring), din dimensiunile ei și din finisajele alese, iar cu o țintă proprie arată cât de multă absorbție ar fi necesară pentru a o atinge. {{ui:Redați în această cameră}} redă o voce, bătăi din palme, note ciupite sau un fișier sonor propriu, printr-un răspuns la impuls calculat pentru încăpere. Valorile de absorbție sunt valori publicate tipice, pe care le puteți înlocui. Vezi [Acustica încăperilor](topic:room-acoustics).
- **Redarea inundației, a vântului și a cutremurului.** {{ui:Redare a hazardului}} redă apa care crește prin încăperi, presiunea vântului pe fiecare etaj și un cutremur care zguduie etajele, pe un plan sau o elevație, cu un glisor de timp. Modele simple, cu ipotezele lor pe panou; nu este o verificare de normă. Vezi [Redarea unei inundații, a vântului sau a unui cutremur](topic:hazard-playback).
- **Ce se uzează în cincizeci de ani.** {{ui:Vedere pe ciclul de viață}} listează ferestrele, ușile, finisajele și acoperișul, cu o durată de serviciu fiecare, anii în care sunt înlocuite și, când introduceți un cost pe unitate, costul pe an și valoarea lui actuală. {{ui:Salvare program (CSV)}} îl scrie într-un fișier. Duratele de serviciu sunt valori de planificare. Vezi [Ce se uzează în cincizeci de ani](topic:life-cycle-view).
- **Verificări ale betonului și seismice.** Blocurile {{ui:Elemente din beton}} și {{ui:Încărcări seismice}} din fila {{ui:Analiză}} verifică grinzile și stâlpii din beton după ACI 318-19 și calculează forțele laterale echivalente după ASCE 7-22 pentru planșee rigide, cu deriva pe etaj. Pentru verificare de către un inginer. Vezi [Verificarea elementelor din beton și încărcările seismice](topic:concrete-and-seismic).

### Verificare și raportare

- **Verificare față de un IDS.** Încărcați fișierul `.ids` primit de la beneficiar și vedeți în Probleme fiecare element care nu îl respectă, înainte de a livra IFC-ul. Deschideți {{ui:Verificare față de un IDS}} sub {{ui:Verificări ale modelului}}. Vezi [Verificarea unui model față de IDS-ul beneficiarului](topic:check-against-ids).
- **Etichete și tabele centralizatoare.** Definiți etichete proprii, puneți-le pe multe elemente deodată și faceți tabele centralizatoare ale căror coloane, filtre și grupări le citesc; etichetele se păstrează în IFC. Vezi [Etichete și tabele centralizatoare](topic:tags-and-schedules).
- **Documente din model.** {{ui:Documente din model}} completează un șablon de specificație din IFC-ul deschis și îl salvează ca PDF, document Word sau Markdown. Vezi [Documente din model](topic:documents-from-the-model).
- **Compararea unei scanări cu modelul.** Cu un nor de puncte deschis, {{ui:Comparare}} judecă fiecare element ca executat, parțial executat, lipsă sau neatins și arată procentul executat. Vezi [Compararea unei scanări cu modelul](topic:compare-scan-with-model).
- **Carbon și cost.** Panoul Carbon adună carbonul încorporat dintr-un tabel de factori pe care îl puteți edita, iar panoul Cost repartizează prețurile pe programul 4D. Factorii care vin cu BimCraft sunt generici și marcați ca neverificați. Vezi [Carbonul încorporat și costul](topic:embodied-carbon-and-5d-cost).
- **Orice proiecție cartografică.** {{ui:Măsurare}} › {{ui:Sistem de coordonate…}} primește un număr EPSG, o zonă UTM, un nume sau propria definiție de proiecție. Vezi [Georeferențierea cu orice proiecție](topic:georeference-any-projection).

### Desenare și editare

- **Mutare, Aliniere și Distribuire.** Sub {{ui:Build}}; {{key:Shift+M}} pornește Mutare ({{key:M}} simplu rămâne {{ui:Măsurare}}). Mutarea copiază pe parcurs cu {{key:C}}, fiecare pas este o anulare, iar mutarea circulă într-o sesiune Live TeamWork. Vezi [Mutare, copiere, aliniere și distribuire](topic:move-align-distribute).
- **Imagini sub plan.** {{ui:Build}} › {{ui:Imagine}} așază un PNG, JPEG sau WebP sub planul unui nivel sau pe un plan vertical. Stabiliți scara prin două puncte și mutați, rotiți, estompați și blocați imaginea. O zonă copiată în MarkupCraft se lipește la scara foii ei. Vezi [Punerea unei imagini sub plan](topic:pictures-as-backgrounds).
- **Pereți dintr-o scanare.** Cu o scanare deschisă, pereții, ușile și încăperile apar ca propuneri pe care le păstrați sau le respingeți pe rând, într-un singur pas de anulare. Se găsesc doar pereții din două direcții perpendiculare. Vezi [Transformarea unei scanări în pereți](topic:scan-to-walls).
- **Calchiere, penițe și schițare scară.** {{ui:Calchiere}} arată un alt nivel punctat sub plan, {{ui:Penițe}} dă pereților, ușilor și ferestrelor propria grosime de linie într-o singură vedere, iar {{ui:Schițare scară}} transformă o linie de mers într-o scară. Se deschide o plasă Wavefront OBJ. Vezi [Calchiere, penițe și o scară dintr-o schiță](topic:trace-pens-stairs-obj).
- **Clădiri în jurul unei adrese.** Clădirile și parcela găsite de Adresă la sit din CivilCraft apar ca sugestii; bifați cele pe care le adăugați. Vezi [Începerea de la situl din CivilCraft](topic:site-from-civilcraft).
- **Desene de panouri.** {{ui:Build}} › {{ui:Desene de panouri}} încadrează pereții, planșeele și acoperișurile din lemn sau din oțel ușor profilat și salvează o listă de debitare ca CSV și desene de execuție ca PDF. Valori de pornire, nu o proiectare structurală. Vezi [Desene de panouri](topic:panel-drawings).
- **Paletă de simboluri și plante.** {{ui:Build}} › {{ui:Paletă de simboluri}} găsește simboluri electrice și sanitare după nume; sursa {{ui:Plante}} din {{ui:Bibliotecă}} listează peste 400 de plante cu simboluri în plan. Vezi [Paleta de simboluri](topic:symbol-palette) și [Plasarea unei plante](topic:plant-list).

### Conducte, canale și energie

- **Split, VRF și ventiloconvectoare.** Unități interioare și exterioare cu conexiunile lor, și linii de agent dimensionate dintr-un tabel de valori tipice exemplificative, pe care le puteți schimba. Vezi [Split, VRF și ventiloconvectoare](topic:split-vrf-fan-coils).
- **Calcule.** Panoul Calcule verifică dimensiunile conductelor de alimentare și ale canalelor cu pierderea de presiune, trece cablurile prin jgheaburi și tuburi și arată umplerea lor, iar iluminarea o calculează din fișiere IES sau EULUMDAT. Valorile implicite sunt marcate; introduceți valorile din normativul aplicabil. Vezi [Calcule pentru conducte, canale, cabluri și lumină](topic:mep-calculations).
- **Fișiere PCF.** **Exportare PCF** din unealta Conductă scrie traseele pentru programele de analiză a tensiunilor și pentru izometrice, iar un fișier PCF citit înapoi desenează conducta lui. Vezi [Fișiere cu componente de conducte](topic:piping-pcf).
- **PV solar.** Montați rânduri de panouri pe acoperișuri sau la sol, umbriți-le din model, estimați energia anuală, verificați șirurile și creați date pentru schema monofilară. Modulul de start și pierderile sunt generice. Vezi [PV solar](topic:solar-pv).
- **Fișierul EnergyPlus.** Panoul Verificare cu EnergyPlus scrie modelul ca IDF, pentru a fi rulat în propriul EnergyPlus. Rularea în browser necesită o versiune găzduită de dvs. și adresa ei; BimCraft nu o include. Vezi [Verificarea încălzirii și răcirii cu EnergyPlus](topic:check-with-energyplus).

### Imagini și fișiere

- **Alegerea motorului de randare.** {{ui:Randare}} are o alegere {{ui:Motor}}. Cele două motoare încorporate ale noastre (Rapid și Trasor de cale) rămân implicite. **Deschidere în** salvează scena ca fișier USD sau glTF, iar un dosar de proiect Unreal ca .zip; în CadCraft Studio, un supliment poate adăuga un motor. Modulul Unreal care deschide proiectul nu este lansat. Vezi [Alegeți ce program desenează imaginea](topic:render-engines).
- **Anularea în Studio.** În CadCraft Studio, BimCraft îi spune Studio-ului fiecare pas terminat, ca Studio să poată anula ultimul pas în fereastra folosită ultima dată. Vezi [Anularea între aplicații](topic:undo-across-apps).
- **Suplimente în fișier.** Un IFC înregistrează ce suplimente au scris în el și oferă pe cele care lipsesc când este deschis. Vezi [Suplimente în fișierul dvs.](topic:add-ons-in-your-file).

### În fiecare aplicație

- **Conectarea AI-ului.** Propriul asistent poate controla BimCraft prin conexiunea Studio și poate răspunde la întrebări despre model, de exemplu ce încăperi se află sub o anumită suprafață. Studio nu are AI propriu. Vezi [Lasă un asistent AI să lucreze cu modelul](topic:assistants).
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} oferă Înfășurare, 2 rânduri sau 1 rând; Înfășurare rămâne implicit.
- **Dispozitive de intrare.** Setările pentru touchpad, creion, mouse 3D, controler și MIDI sunt comune tuturor aplicațiilor.
- **Probleme și Live.** Panoul de avertismente și sesiunile Live funcționează ca înainte, iar noile verificări de mai sus alimentează Probleme.
- **Limbi.** 54 de limbi, zece dintre ele noi. Cele diferite de engleză sunt ciorne generate automat, încă necitite de un vorbitor nativ; subiectele de ajutor sunt în mare parte în engleză.

## Corectat în 0.8.1

- **Aranjarea Panglică + Navigator de proiect.** Inserare › Import CAD, Inserare › Imagine și Gestionare › Unități de proiect spuneau „Încă nerealizat în BimCraft”. Imagine deschide acum unealta Imagine, Import CAD deschide {{ui:Build}} › {{ui:Dintr-un desen…}} (DWG, DXF, PDF sau o scanare), iar Unități de proiect deschide {{ui:Setări}} › {{ui:Global}} › {{ui:Unități}}. Mutare și Aliniere rulează uneltele Mutare și Aliniere, Nivel deschide {{ui:Adăugare niveluri…}}, Faze deschide secțiunea Faze de renovare, iar Materiale deschide biblioteca de materiale.
- **Secțiunea de clase DWG.** A fost citită ca tip greșit; corectat în BimCraft și în celelalte aplicații care citesc DWG.
- **Limba la rulare.** Studio și edițiile împachetate pot schimba acum limba fără repornire. Nu a fost încă testat pe toate platformele; dacă limba nu se schimbă, semnalați problema.
- **Scriptul de pachet Archicad.** `archicad_bundle.py`, o descărcare separată, găsește acum calea Archicad, urmărește dosarul până la 20 de secunde și reîncearcă lângă pachet.

## Nu este încă în această versiune

- **Instrumente de siguranță și de proiectare.** Persoane în clădire nu are o limită a distanței de parcurs dintr-un cod de construcții (limita se introduce manual) și nu a fost verificat manual pe un plan real. Valorile pentru acustică, ciclul de viață și hazard sunt valori de planificare, nu o verificare de normă.
- **Climă viitoare și EnergyPlus.** Nu există climă viitoare încorporată: puteți încărca un fișier de scenariu pentru rularea inundației. Rularea EnergyPlus în browser nu face parte din această versiune.
- **Aranjarea Panglicii.** Extragere de cantități pe materiale rămâne „Încă nerealizat”, pentru că BimCraft nu are o listă de cantități de materiale, iar alte 54 de unelte dezactivate din panglică nu au încă în spate o unealtă BimCraft.
- **Semnare și platforme.** Programele de instalare Windows și fișierul .dmg pentru macOS nu sunt semnate, așa că SmartScreen afișează {{ui:Mai multe informații}}, apoi {{ui:Rulare oricum}}, iar macOS cere clic dreapta, apoi {{ui:Deschisă}}. Build-ul pentru iPad și iPhone nu a fost reconstruit pentru 0.8.1.
- **Teste pe pagini reale.** Unele teste mai vechi de browser BimCraft eșuează încă pe pagina noastră de test, ca înainte de 0.8.1.

Restul este în [Ce nu este încă realizat](topic:not-built-yet). Modificările anterioare sunt în [Noutăți în 0.7](topic:whats-new-0-7).
