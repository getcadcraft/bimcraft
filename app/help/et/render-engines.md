---
title: Vali, milline programm joonistab pildi
summary: Renderdamise dialoogi valik Mootor: meie enda kaks mootorit, teised programmid CadCraft Studios ning see, mida veeb selle asemel teeb.
keywords: renderdamine, mootor, renderdaja, renderdusmootor, pistikprogramm, plugin, studio, väline programm, joonistab, järjekord, lisandmooduli mootor
from: 44a1ef5e
---

{{ui:Renderda}} dialoogis on valik **Mootor** režiimi kohal. Meie enda kaks mootorit on alati olemas ja töötavad kõikjal; lisandmoodulid võivad lisada veel, ning CadCraft Studios sisaldab loend ka programme, mis stseeni üle võtavad.

| Mootor | Mida see teeb | Kus |
|---|---|---|
| Sisseehitatud: Kiire | Kiire statiivpilt: päevavalgus, pehmed varjud, klaasi- ja metalliefektid, sekunditega | Brauser ja Studio |
| Sisseehitatud: Kiirte jälgija | Valgus põrkub pindade vahel teie graafikakaardil või protsessoril; renderdamise järjekord ja teised arvutid teie võrgus | Brauser ja Studio |
| Lisandmooduli mootor | Joonistab pildi ja annab selle tagasi: vt [Joonista pilt teise programmiga](topic:render-other-program) | Brauser (JavaScriptis kirjutatud mootor) või Studio (mootor, mis käivitab programmi) |
| Programm, mis võtab stseeni üle | Studio paneb stseeni oma kausta ja hoiab selle sünkroonis | Studio |
| Ava programmis … | Salvestab stseeni ja avab selle programmis; midagi ei tule mudelisse tagasi: vt [Ava stseen teises programmis](topic:render-open-in) | Veeb salvestab faili |

## Kuidas valik toimib

- Kiire või Kiirte jälgija valimine muudab ka režiimi ning vastupidi. Dialoogi ülejäänu ei muutu nendele, kes teisi mootoreid ei kasuta.
- Mootor, mis pole saadaval, jääb loendisse koos põhjusega („ei leitud“, „vajab uuemat versiooni“); seda ei saa valida. Brauseris kuvatakse Studios töötava mootori puhul „salvestab faili“: {{ui:Renderda}} salvestab stseeni ja selle sätted faili, mille viite selle programmiga.
- Valik salvestatakse koos faili renderdussätetega ning viimati valitud mootor on algmootor failidele, millel pole oma valikut.
- Teise programmi pilt ütleb dialoogis ja renderdamise järjekorras, milline programm selle joonistas ning millise versiooniga. [Renderda](topic:render) lehe lubadused kehtivad ainult **meie enda** mootorite kohta: teine programm valgustab, toonib ja proovivõtab omal moel, seega on kaks pilti stseenist kaamera, päikese, valgustite ja säriaja poolest sarnased, kuid mitte pikslite täpsusega samad.

## Mida iga mootor saab

Stseen läheb teise programmi **paketina**: mudel USD-failina (sama fail, mida kirjutab [Salvesta nimega USD](topic:usd)), ja sätete fail, mis sisaldab seda, mida USD importija ei ole usaldusväärne: täpsed materjalivärtused, sisselülitatud valgustid koos võimsuse ja valgusprofiilidega, päike, taevas, säritus ja kaamera nii, nagu dialoog selle joonistaks. Midagi ei laadita kuhugi üles.

## Renderdamise järjekord

Pilt teisele programmile võib oodata [renderdamise järjekorras](topic:render#the-render-queue) nagu meie omad; selle töö mäletab, millise mootori jaoks see on.
