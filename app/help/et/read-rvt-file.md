---
title: Projekti- või perefaili lugemine
summary: Ava .rvt-, .rfa-, .rte- või .rft-fail ja loe selle versioon, koostöörežiim, projekti teave, perekuvandmed, lingid ja eelvaatepilt ilma programmita, mis selle tegi.
keywords: rvt, rfa, rte, rft, projektifail, pere, versioon, mis versioon, koostenumber, koostöö, keskmudel, projekti teave, eelvaade, pisipilt, lingid
from: df3600e1
---

## Mida sa teed

Leia, mis on projekti- või perefailis, ilma seda Revitis avamata: millises versioonis see salvestati, kas see on koostöörežiimis, projekti teave ja millele see viitab. Kasulik, kui fail tuleb kellegi teiselt ja pead teadma, millises versioonis seda avada.

## Sammud

1. Klõpsa {{ui:Vali fail}}.
2. Vali `.rvt`-, `.rfa`-, `.rte`- või `.rft`-fail.
3. Oota natuke. Olekurida ütleb „Faili lugemine…“ ja seejärel „Avatud *faili nimi*“.
4. Vaata kaardi ülaosa: failis salvestatud eelvaatepilt, faililiik ja versioon, millena see salvestati, ning projekti nimi.
5. Keri alla, et lugeda kaardi jaotisi.

## Mida peaksid nägema

Kaart keskel, selle jaotistega, kui fail neid sisaldab:

| Jaotis | Mida see ütleb |
|---|---|
| Fail | Faili nimi, suurus, liik (projekt, projekti mall, pere või pere mall), versioon ja koostenumber, millena see salvestati, koostöö, keskmudeli asukoht, kuhu see viimati salvestati, kes salvestas, lokaal ja dokumendi GUID |
| Projekti teave | Projekti enda väljad, näiteks nimi, number, klient, aadress ja staatus. Väljad, mis on veel uue projekti vaikeväärtustel, jäetakse välja. |
| Pere, Pere: … | Perefaili puhul: selle nimi, kategooria, versioon, viimane uuendus ja parameetrid rühmade kaupa |
| Lingitud ja viidatud failid | Iga lingitud mudel, CAD-link, pilt ja märkmetabel, millele fail viitab, koos salvestatud asukohaga |

Vasakul kordab paneel {{ui:Fail}} olulisi fakte ja lisab **Loetud**: kui palju failist BimCraft tegelikult luges, tavaliselt umbes 40 KB, kui fail on mitme megabaidi suurune. Paremal ütleb paneel {{ui:Omadused}}, et elementide omadused vajavad 3D-mudelit.

## Miks 3D puudub

3D-mudel ja elemendid projektifailis on salvestatud dokumenteerimata vormingus. BimCraft loeb ainult neid faili osi, mis on dokumenteeritud või selgelt loetavad: faili teave, projekti teave, perekuvandmed, lingiloend ja eelvaatepilt. Muu kohta ta ei oleta midagi. Et näha mudelit 3D-s ja lugeda elementide omadusi, ekspordi IFC programmist, mis faili tegi. Vaata [Projektifaili viimine 3D-sse IFC kaudu](topic:rvt-to-ifc).

## Levinud vead

- **3D ootamine.** Vaata ülal.
- **Lingid näitavad ainult salvestatud asukohta.** Üksi avatud fail ei saa kontrollida, kas tema lingid eksisteerivad. Ava selle asemel kaust, kus see asub, ja BimCraft märgib iga lingi leituks või mitte leituks: [Ava terve projektikaust](topic:open-project-folder).
- **„See fail on poolik…“** Fail katkes kopeerimise, üleslaadimise või sünkroonimise ajal. Ka pilvedraiviga fail, mis on veel ainult „võrgus“, käitub nii. BimCraft avab selle siiski ja näitab ainult taastatud osa: kaardi ülaosas oranži teadet, jaotist **Taastatud sellest failist**, mis loetleb osad, mille iga bait on failis, ja **Failis puudub** ülejäänud osade jaoks. Puuduvat osa ei täideta millegagi, seega versioon, eelvaatepilt või projekti teave võivad puududa, kui need salvestati katkemiskohast hiljem. Kui katkes isegi faili sisukord, ei saa midagi avada. Kopeeri originaal uuesti ja ava see täieliku failina.
- **„Selles failis pole eelvaatepilti.“** Mõned failid on salvestatud ilma selleta. See on normaalne.
- **Varukoopia avamine kogemata.** Failid nimega nagu `Tower.0004.rvt` on nummerdatud varukoopiad. Kausta avamine grupeerib need nende mudeliga.
