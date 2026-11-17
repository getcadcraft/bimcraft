---
title: Vaadete ja läbikäikude salvestamine
summary: Hoia mudeli kaamerapilte nime järgi, mine nende juurde tagasi, esita neid üksteise järel ja salvesta hoone läbikäik, mida hiljem esitada.
keywords: vaated, salvestatud vaated, kaamera, kaamerad, vaatepunkt, stseen, stseenid, tuur, esitlus, läbikäik, läbi kõndimine, lendamine, salvesta, esita, rada, animatsioon
from: 3af19a36
---

{{ui:Vaated}} tööriistaribal hoiab 3D-vaate kaameraid mudeli failis, nii et sina ja need, kellele saadad, saate otse nende juurde naasta.

## Salvesta vaade

1. Seadista 3D-vaade: pööra, suumi, peida, mida ei soovi.
2. Klõpsa {{ui:Vaated}}, kirjuta nimi (või jäta pakutud) ja klõpsa {{ui:Salvesta vaade}} või vajuta {{key:Enter}}.

Nimega, mis on juba loendis, salvestamine uuendab seda vaadet. Klõpsa vaate nimel, et naasta selle juurde; kaamera liigub sinna sujuvalt.

Nooled muudavad järjekorda, pliiats nimetab ümber, prügikast kustutab. Iga muudatus on üks samm, nii et {{key:Ctrl+Z}} võtab selle tagasi.

## Esita vaated

{{ui:Esita vaated}} liigub ühest vaatest järgmisse loendi järjekorras, peatudes hetkeks igas. {{key:Esc}} või {{ui:Peata}} lõpetab selle.

## Salvesta läbikäik

1. Lülita sisse [Kõnd](topic:walk) ja alusta hoone sees kõndimist.
2. Klõpsa {{ui:Vaated}}-s {{ui:Salvesta käik}}.
3. Kõnni klahvidega {{key:W}} {{key:A}} {{key:S}} {{key:D}} ja vaata ringi hiirega.
4. Klõpsa {{ui:Lõpeta salvestamine}}. Käik salvestatakse nimega "Käik 1", koos pikkusega.

Klõpsa käigul, et seda esitada nii, nagu kõndisid. {{key:Esc}} peatab selle.

## Renderda läbikäik videoks

Klõpsa käigu kõrval filmiikoonil. Videodialoog joonistab iga kaadri käigust viimati valitud renderdamise sätetega, suuruse, kaadrisageduse ja kvaliteediga, mille siin valid. Salvesta see WebM- või MP4-videona või ZIP-failina, kus iga kaader on eraldi pilt. Kaadrid võtavad aega nii kaua kui pildid, seega alusta {{ui:Kiire}}-ga.

## Kommenteeri läbikäiku

Klõpsa käigu kõrval kõnemulliikoonil. Kirjuta üks rida iga öeldud asja kohta ja alusta rida ajaga, millal see algab (`12`, `0:12` või `1:02.5`). Rida ilma ajata järgib eelmist rida pärast aega, mis kulub selle ütlemiseks. Vali keel, vaataja keeles, kui see on see, kes vaatab. {{ui:Eelvaade}} esitab sõnad selle arvuti enda häälega ja näitab neid subtiitritena; sama juhtub iga kord, kui käik esitatakse. {{ui:Salvesta jalutuskäiguga}} hoiab narratsiooni käigu IFC-s.

Su enda ühendatud assistent võib narratsiooni sinu eest kirjutada: palu tal vaadata käiku ja salvestatud vaateid, ning ta paneb read keeles, mille nimetad, ühe võtmise sammuna.

Renderdatud video ei sisalda heli, sest brauser ei saa salvestada oma häält. Salvesta subtiitrid (`.srt` või `.vtt`) ja lisa need videole oma videopleieris või redaktoris. Milliseid hääli saad valida, sõltub arvutist; keel, kus häält pole paigaldatud, saab siiski subtiitrid.

## Failis

Vaated ja käigud hoitakse IFC-s omaduste hulgana `CadCraft_Views` projektil: tavaline IFC, mida teised programmid ignoreerivad. Need on esimese mudeli koordinaatides, nii et need sobivad ka pärast mudeli uuesti laadimist või teise mudeli lisamist.

:::tip
Pildi renderdamiseks salvestatud vaatest mine vaatesse ja klõpsa seejärel [Renderda](topic:render).
:::
