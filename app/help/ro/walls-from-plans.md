---
title: Pereți dintr-un set de planuri (PDF sau scanare)
summary: Transformați paginile unui PDF sau ale unui desen scanat în pereți, uși și ferestre, câte un nivel pentru fiecare pagină, cu pagina păstrată sub fiecare plan.
keywords: pdf, planuri, set de planuri, scanare, desen scanat, tiff, calchiere, pereți dintr-un PDF, pereți dintr-o scanare, niveluri, pagini, scară, uși, ferestre, sens de deschidere, pervaz, fundal
from: b70d9db7
---

## Ce veți face

Porniți un model de la planurile pe care le aveți pe hârtie: un PDF (desenat ca linii sau o scanare într-un PDF) sau o scanare (PNG, JPEG, TIFF cu una sau mai multe pagini). Fiecare pagină devine pereții, ușile și ferestrele unui nivel.

## Pași

1. Activați {{ui:Desenare}}. Alegeți {{ui:Build}} › {{ui:Dintr-un desen…}}, apoi {{ui:Alegere desen…}} și alegeți PDF-ul sau scanarea.
2. **Pagini și niveluri.** Fiecare pagină este listată cu ce este (**desen cu linii** sau **o imagine (calchiată)**) și cu nivelul la care merge: unul dintre niveluri pe care le aveți, **un nivel nou deasupra celorlalte** sau **lăsați această pagină afară**. Paginile sunt potrivite cu nivelurile dvs. în ordine; schimbați oricare dintre ele.
3. **Scara.** Pentru un PDF, spuneți cum a fost desenat (**1 : 100**, **1 : 50**…). Pentru orice altceva, sau când nu știți, alegeți **dintr-o distanță pe care o cunosc**: faceți clic pe cele două capete ale unei cote sau ale unei bare de scară din previzualizare, apoi scrieți distanța reală. Toate paginile folosesc o singură scară.
4. Alegeți **tipul peretelui** și **înălțimea unui nivel nou**. Lăsați **Păstrarea fiecărei pagini sub planul nivelului ei** bifat ca să vedeți fiecare pagină ca linii subțiri sub planul ei.
5. Linia de sub alegeri spune câți pereți, uși și ferestre va face și pe câte niveluri. Faceți clic pe {{ui:Creare}}.

## Cum citește o pagină

- **Pereții** vin din perechi de linii paralele la cel mult 600 mm distanță (cele două fețe ale unui perete); peretele are grosimea intervalului. Hașurile și textele sunt lăsate afară.
- **Uși și ferestre.** Un interval în perete (500 până la 2600 mm) cu un arc de deschidere desenat alături este o ușă, articulată la un capăt al intervalului și care se deschide spre latura arcului. Un interval sau un perete cu linii de pervaz în el este o fereastră. Un interval fără niciuna dintre acestea este o ușă până la 1300 mm și o fereastră peste această valoare.
- **O scanare** este mai întâi redresată dacă a fost scanată strâmb (caseta spune asta), făcută alb-negru, curățată de pete și calchiată; o **pagină PDF care este o imagine** este desenată întâi și apoi tratată la fel. Calchierea găsește centrul fiecărei linii și potrivește linii drepte și arce pe el; nu folosește rețea și nu un model antrenat.
- **Încăperile** urmează singure din buclele închise pe care le fac pereții. Când PDF-ul are text, o încăpere își ia numele din textul din interiorul ei (cel mai mare; o cotă, o scară sau un număr de planșă nu este un nume). O scanare nu are text, deci încăperile ei păstrează numele pe care le dă programul.
- **Tot ce este citit din pagină este marcat neverificat**: fiecare perete, ușă, fereastră și încăpere are o casetă punctată și un „?” pe plan până le verificați. Alegeți ce ați verificat și folosiți {{ui:Instrumente}} › {{ui:Marcare ca verificat}}. Vezi [Marcarea elementelor ca verificate sau verificate pe teren](topic:verification).

## Ce ar trebui să vedeți

- Pereții, ușile, ferestrele și încăperile de pe fiecare nivel și orice niveluri noi, toate ca un singur pas: {{key:Mod+Z}} le ia pe toate înapoi.
- Fiecare pagină ca linii subțiri sub planul nivelului ei, listată sub {{ui:Build}} › {{ui:Dintr-un desen…}} cu {{ui:Eliminare}}.

:::note
Acesta este ce au dat liniile, la precizia paginii. O scanare poate pierde un perete slab, poate uni doi pereți foarte apropiați sau poate găsi un perete într-o pată; un arc de deschidere pe care desenul nu-l arată transformă un interval într-o ușă simplă. Verificați fiecare nivel față de pagină înainte să vă bazați pe el și reparați ce este greșit cu instrumentele {{ui:Perete}}, {{ui:Ușă}} și {{ui:Fereastră}}.
:::
