---
title: Stil de lucru, vederi duplicate, stilouri pe hârtie, Raportare ca și șabloane
summary: Alegeți cum se comportă BimCraft pentru modul dvs. de lucru, duplicați orice vedere ca o copie proprie sau legată, păstrați suprascrierile stilourilor în fișier și imprimați cum se vede pe ecran sau printr-un tabel de stilouri, raportați un element ca o altă clasă IFC și porniți proiecte din șabloanele proprii.
keywords: stil de lucru, duplicare vedere, duplicare, copiere vedere, vedere dependentă, vedere legată, copie proprie, copie de vedere, suprascrieri stilou, stilouri, grosimi de linie, imprimare ca pe ecran, tabel de stilouri, stil de trasare, ctb, monocrom, tonuri de gri, raportare ca, clasă ifc, reclasificare, tip predefinit, model generic, planșeu ca drum, perete ca panou, acoperiș ca rampă, șablon de proiect, șablon, nou din șablon, salvare ca șablon, standard de birou
from: 231d98b0
---

## Ce veți face

Configurați BimCraft pentru modul dvs. de lucru, duplicați vederi, imprimați-le cum vă așteptați, numărați elementele drept ceea ce sunt cu adevărat și porniți fiecare proiect din șablonul biroului dvs.

## Alegeți un stil de lucru

1. Deschideți {{ui:Settings}} și fila {{ui:BimCraft}}. Găsiți {{ui:Working style}}.
2. Alegeți una:
   - {{ui:Each view its own}} (prima alegere): o vedere duplicată își copiază adnotările, iar acestea rămân ale vederii respective; foile se imprimă așa cum apar pe ecran.
   - {{ui:Shared annotations and pen tables}}: vederile duplicate împart adnotările; imprimarea trece printr-un tabel de stilouri.
3. Sub alegere sunt cele patru lucruri pe care le setează. Modificați oricare dintre ele separat; stilul apare apoi ca {{ui:Custom}}.

Stilul de lucru este păstrat în acest browser, la fel ca aspectul spațiului de lucru. Un șablon îl transmite către modelele noi.

## Duplicarea unei vederi

1. În {{ui:Project browser}}, fiecare plan de etaj, plan de tavan, indicator, elevație și secțiune are un buton {{ui:Duplicate}} (două foi).
2. Denumiți copia și alegeți cum se comportă:
   - {{ui:Own copy}}: desenarea, cotele, decuparea, elementele ascunse și stilourile sale sunt copiate și rămân ale ei. Editarea oricăreia dintre vederi nu schimbă niciodată cealaltă, astfel încât o vedere de pe o foaie emisă rămâne cum a fost emisă.
   - {{ui:Linked}}: arată aceeași vedere, cu un singur set de adnotări și setări.
3. Copia este listată sub {{ui:Duplicated views}}. Faceți clic pe ea pentru a o deschide; bara de deasupra planului spune că este o copie, cu {{ui:Up}} înapoi la vederea sa.
4. Butonul său de glisor deschide setările: numele, {{ui:View range}} (o copie proprie are propriul interval), {{ui:Make own copy}} pentru una legată și {{ui:Delete}}.

Copiile elevațiilor și secțiunilor sunt plasate pe foile dvs. ca vederile din care provin. Duplicarea este un singur pas de anulare, iar copiile sunt păstrate în IFC alături de indicatoare.

## Stilouri păstrate cu vederea și imprimate cum se văd

1. Activați {{ui:Draw}} și alegeți {{ui:Pens}}.
2. {{ui:For}} listează acum fiecare categorie: pereți, uși și ferestre, planșee, acoperișuri, stâlpi, scări, mobilier și restul, precum și desenarea și cotarea.
3. {{ui:Apply}} păstrează stiloul în IFC, cu vederea afișată: un plan, un plan de tavan, un indicator sau o vedere duplicată. Stilourile făcute înainte de 0.9 au fost păstrate în browser; {{ui:Keep these in the file}} le mută.
4. Foile și PDF-ul desenează fiecare stilou așa cum apare pe ecran.

Pentru a imprima în schimb printr-un tabel de stilouri, setați {{ui:Print}} din rândul Pens la {{ui:Through a pen table}}, apoi alegeți un tabel (culoare, monocrom, tonuri de gri) sau {{ui:Edit pen table…}}: fiecare culoare primește culoarea, grosimea și raster cu care se imprimă. Tabelul este fișierul de stil de trasare al CadCraft, astfel încât {{ui:Import…}} acceptă un tabel făcut în aplicația CadCraft, iar {{ui:Export}} returnează unul. Modelul își păstrează alegerea; fără alegere, decide stilul de lucru.

## Raportarea unui element ca altă clasă

O placă desenată ca drum, un perete folosit ca panou, un acoperiș modelat ca rampă: păstrați instrumentul cu care l-ați desenat și raportați-l drept ceea ce este.

1. Selectați elementul și deschideți {{ui:Properties}}. Deschideți {{ui:Report as}}.
2. Scrieți în caseta de căutare pentru a găsi o clasă care se potrivește formei, alegeți-o și tipul său predefinit. Pentru un tip propriu, alegeți USERDEFINED și dați-i un nume.
3. {{ui:Apply}} (un singur pas de anulare). {{ui:Clear}} îl raportează din nou așa cum a fost desenat.

Îl editați în continuare cu instrumentul cu care a fost desenat. IFC salvat îl scrie ca clasa raportată, astfel încât alte programe, extragerea de cantități din {{ui:Quantities}}, Căutare, Colorare după, verificările modelului și {{ui:Problems}} îl numără ca atare. Tabelele centralizatoare scot un perete raportat ca panou din tabelul pereților, iar {{ui:Elements by reported class}} listează fiecare dintre ele. Funcționează în fișierele IFC4 și IFC2X3; lista oferă doar clasele pe care le are versiunea IFC a fișierului. Ușile, ferestrele, scările, camerele și nivelurile își păstrează propria clasă.

## Salvarea unui proiect ca șablon și pornirea de la el

1. Cu un proiect deschis, faceți clic pe {{ui:Save as template}} lângă {{ui:Save}}.
2. Denumiți-l. Bifați Descărcare și fișier șablon pentru a-l distribui ca fișier IFC și {{ui:Start new models from it}} pentru a-l face implicit.
3. Un șablon păstrează nivelurile, șabloanele de vedere și setările vederilor, vederile duplicate și indicatoarele, desenarea, stilourile și tabelul de stilouri, etichetele, familiile și tipurile, foile, dimensiunile foilor, cartușele și stilul de lucru. Pereții, planșeele, ușile și celelalte elemente ale modelului sunt lăsate afară.
4. Faceți clic pe {{ui:New building}} și alegeți-l sub {{ui:Start from}}, sau alegeți {{ui:A template file…}} pentru unul primit. Noul proiect primește propriul nume și propria identitate de proiect; restul este cum îl are șablonul.

:::note
Șabloanele sunt păstrate în acest browser. Șabloanele de echipă partajate prin CadCraft Studio sunt încă nerealizate: trimiteți în schimb fișierul șablon.
:::
