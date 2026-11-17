---
title: Verificarea elementelor din beton și generarea încărcărilor seismice
summary: Configurați armăturile grinzilor și stâlpilor din beton ai modelului deschis, verificați-le conform ACI 318-19, generați forțele laterale echivalente conform ASCE 7-22 pe planșee rigide și vedeți deriva de nivel. Un instrument de ajutor pentru inginerul care verifică.
keywords: beton, beton armat, ACI 318, ACI 318-19, armătură, grindă, stâlp, forfecare, etrieri, seismic, cutremur, forță laterală echivalentă, ELF, ASCE 7-22, derivă, derivă de nivel, planșee, diafragmă rigidă, greutate de nivel, utilizare, structural, inginer, analiză
from: 2f342e72
---

Blocurile {{ui:Elemente din beton}} și {{ui:Încărcări seismice}} din fila {{ui:Analiză}} verifică grinzile și stâlpii de beton armat ai IFC-ului deschis și creează forțele laterale ale unui cutremur pe planșeele cadrului său. Sunt aceleași blocuri ca în DetailCraft, rulate după analiza din fila {{ui:Analiză}} și salvate în IFC împreună cu celelalte setări de analiză.

:::warning
Rezultatele sunt **pentru verificare de către un inginer**: un ajutor până când cineva le-a revizuit. Verificările betonului folosesc forțe de ordinul întâi (un stâlp dintr-un cadru pe care îl numiți fără deplasare laterală este dimensionat pentru momentul său amplificat), fără amplificare la deplasare laterală, fără dimensionare la torsiune, fără detaliere seismică (capitolul 18 ACI) și fără detaliere a etrierilor. Încărcările seismice nu includ factorul de redundanță, efectul seismic vertical, amplificarea la torsiune și efectele P-delta. **Încărcările de vânt sunt încă nerealizate: capitolele standardului pentru vânt nu se află în paginile de referință ale proiectului.**
:::

## Ce citește BimCraft

Analiza citește grinzile, stâlpii și contravântuirile modelului cu profilele lor (vedeți [Analizați cadrul structural](topic:frame-analysis)). Blocul {{ui:Elemente din beton}} listează fiecare secțiune pe care o folosesc. Apăsați {{ui:Configurare ca beton…}} pe o secțiune care este din beton: BimCraft ia un dreptunghi din aria și rigiditatea profilului (lățimea b și înălțimea h, pe care le puteți schimba apoi), astfel încât o secțiune care nu este aproape de un dreptunghi (o formă laminată din oțel) dă o dimensiune pe care trebuie să o corectați sau este lăsată neatinsă.

O secțiune configurată ca beton, și orice element al cărui material are numele beton, este analizată ca beton: E = 4700 √f′c, 2400 kg/m³, și implicit cu **secțiuni fisurate** (stâlpi 0.70 Ig, grinzi 0.35 Ig; ACI 318-19 Tabelul 6.6.3.1.1(a)). Alegeți {{ui:Secțiuni brute}} ca să dezactivați asta. Fără aceste setări, modelul este analizat exact ca înainte.

## Armături, combinații, verificare

Dați stratul de acoperire, barele de sus, de jos și laterale (sau un cadru de armare al stâlpului) și etrierii fiecărei secțiuni, setați f′c, fy, fyt, K și deplasare laterală sau fără deplasare laterală. Dați cazurilor de încărcare tipul lor, apăsați {{ui:Creare combinații}} (ASCE 7 §5.3.1) și apoi {{ui:Verificare beton}}: fiecare element primește un grad de utilizare, colorat pe model. Elementele peste capacitate, și o derivă de nivel peste limita sa, sunt listate în {{ui:Probleme}} cu clauza lor; faceți clic pe unul ca să selectați elementul.

## Planșee și încărcări seismice

În blocul {{ui:Încărcări seismice}}, {{ui:Găsire planșee}} ia nivelurile în care se întâlnesc două sau mai multe grinzi; fiecare devine o diafragmă rigidă. {{ui:Preluare greutăți din cazuri}} citește greutatea seismică a fiecărui planșeu din cazurile căruia îi dați un factor. Completați SDS, SD1, S1, R, Ie, Cd, TL, sistemul și categoria de risc, apoi {{ui:Creare cazuri seismice}} (ASCE 7-22 12.8: perioada, forța tăietoare de bază, distribuția pe niveluri, 5 % torsiune accidentală). Forțele pe niveluri și verificarea derivei (12.12) apar după o rulare. Aceeași perioadă și rigiditate de nivel alimentează cutremurul din [Redarea unei inundații, a vântului sau a unui cutremur](topic:hazard-playback) când alegeți cadrul de analiză ca sursă.

Plăcile și pereții din beton devin elemente de placă în analiză, iar blocul {{ui:Armarea plăcilor}} calculează oțelul de care au nevoie pe metru. Detaliile fiecărei verificări sunt în subiectul cu același nume din DetailCraft.
