---
title: Compararea unei scanări cu modelul și cu programul 4D
summary: Judecați fiecare element al modelului față de un nor de puncte deschis (construit, parțial, lipsă, neatins), vedeți procentul construit, colorați modelul după acesta și, cu un program 4D încărcat, listați ce este în urma sau în avansul zilei 4D.
keywords: scanare, nor de puncte, progres, procent finalizat, construit, lipsă, în urma programului, în avans, 4D, progres pe șantier, abatere, as-built, scanare laser, dronă, comparare
from: 6fdc9003
---

Deschideți un IFC, deschideți un nor de puncte lângă el (vedeți [Nori de puncte](topic:point-clouds)) și plasați-l pe model. Secțiunea {{ui:Compararea scanării cu modelul}} apare în panoul din dreapta cât timp un nor este deschis.

## Ce face

Apăsați {{ui:Comparare}}. Fiecare element al modelului este judecat după suprafața sa, pentru că aceasta este ceea ce vede un scanner. Cele șase fețe ale cutiei sale sunt tăiate în celule de aproximativ 20 cm; o celulă se numără când un punct scanat se află în limita {{ui:Toleranță}} (50 mm la început) față de față. Cea mai bună față mare se numără, astfel încât un perete scanat dintr-o parte nu este penalizat pentru cealaltă parte.

- **Construit**: cel puțin 40 % din suprafață este văzută.
- **Parțial**: 10 % până la 40 %.
- **Lipsă**: mai puțin decât atât, dar scanarea ajunge la element (puncte aflate la cel mult 1.5 m de el).
- **Neatins**: scanarea nu a ajuns niciodată acolo, deci nu se spune nimic despre el.

Pentru elementele construite și parțial construite, aplicația dă și abaterea medie a punctelor scanate față de suprafața modelului și spune dacă elementul este la locul său (în limita toleranței), aproape (în limita a de trei ori toleranța) sau departe (mai departe). Vede doar abateri de până la de cinci ori toleranța: un element construit mai departe de locul său decât atât apare ca lipsă.

Rezumatul dă procentul construit dintre elementele atinse de scanare, după număr și după volum. Elementele parțial construite sunt numărate separat și nu se adună la cele construite.

## Față de programul 4D

Cu un program 4D încărcat (vedeți [Programul 4D](topic:4d-schedule)), rezultatul folosește și ziua pe care ați setat-o pe cursorul 4D: elementele scadente până în acea zi, pe care scanarea nu le arată construite, sunt **în urma programului**; elementele care nu sunt încă scadente, dar sunt construite, sunt **în avans**. Elementele în urma programului sunt listate în {{ui:Probleme}}, iar tabelul poate fi filtrat după ele. Fără program nu se spune nimic despre „în urmă” sau „în avans”.

## Tabelul și modelul

Faceți clic pe un rând ca să selectați elementul. {{ui:Colorați modelul}} colorează elementele în verde (construit), chihlimbariu (parțial), roșu (lipsă) sau gri (neatins); {{ui:Culorile proprii}} le readuce. {{ui:Salvare CSV}} scrie tabelul. {{ui:Marcați elementele corespunzătoare ca verificate pe teren}} marchează fiecare element văzut ca construit și în toleranță drept verificat pe teren (LOD 500, metoda scanare), într-un singur pas pe care îl puteți anula. Vedeți [Marcarea elementelor ca verificate sau verificate pe teren](topic:verification).

:::warning
Aceasta compară cutia fiecărui element cu punctele scanate, într-o toleranță. **Nu este o măsurătoare topografică, un calcul de cantități sau o bază pentru plată.** Un element ascuns în spatele unuia scanat (un perete din spatele unei căptușeli, o placă sub o finisare de podea) împarte suprafața cu acesta și poate părea construit; un element curb sau înclinat are o cutie mai mare decât corpul său și poate părea parțial sau lipsă. Uitați-vă la listă înainte să acționați în funcție de ea. Comentariile din autorizații și notele de progres nu fac parte din aceasta: rămân în coloanele în care le țineți.
:::

Un asistent poate rula aceeași comparare cu instrumentul {{ui:Compararea scanării cu modelul}}; nu schimbă nimic în model.
