---
title: Færa, afrita, jafna og dreifa byggingarhlutum
summary: Færðu veggi, gólf, súlur og settar safnhluti eftir grunnpunkti og öðrum punkti eða innsleginni fjarlægð, afritaðu þá um leið og jafnaðu þá eða dreifðu þeim jafnt, á grunnmynd eða með vali úr 3D.
keywords: færa, afrita, jafna, dreifa, bil, versetning, grunnpunktur, tilfærsla, veggir, súlur, gólf, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Hvað þú gerir

Færðu vegg, súlu, gólf eða settan safnhlut á nýjan stað, búðu til afrit af honum, eða stilltu nokkrum upp, án þess að teikna þá aftur.

## Heiti og lyklar

Skipanirnar heita {{ui:Færa}}, {{ui:Jafna}} og {{ui:Dreifa}}, og þú getur slegið inn `MOVE`, `ALIGN` og `DISTRIBUTE` í skipanalínuna, eins og í CadCraft-teikniforritinu. Einn munur: í BimCraft er {{key:M}} Mæla, þannig að Færa hefur sinn eigin lykil, {{key:Shift+M}}. Verkfærin eru í valmyndinni {{ui:Smíð}}.

## Færa

1. Veldu það sem á að færa, á grunnmyndinni eða í 3D-sýninni. Veggir, gólf, súlur og settir safnhlutir geta allir farið í einu vali.
2. Ýttu á {{key:Shift+M}} eða veldu {{ui:Færa}}.
3. Smelltu á grunnpunkt, og síðan á annan punkt. Eða, eftir grunnpunktinn, sláðu inn fjarlægð og ýttu á {{key:Enter}}: hún fer í þá átt sem bendillinn vísar frá grunnpunktinum. Þú getur líka slegið inn `dx,dy` (eða `@dx,dy`), eða `lengd<horn`.
4. Ýttu á {{key:C}} til að kveikja á {{ui:Afrita}}: sérhver færsla býr þá til afrit og er tilbúin fyrir þá næstu. Ýttu á {{key:Esc}} til að hætta.

Báða punktana má smella í 3D-sýninni líka: með Færa á mætir bendillinn hæð gólfs hæðarinnar, þannig að smellur þar er punktur á grunnmynd. Haltu {{key:Shift}} inni meðan þú smellir til að velja annan hlut í staðinn. Notaðu grunnmynd, Ofan, Framan eða Hlið eins og þér hentar: punktarnir liggja alltaf á þeirri hæð.

Veggur tekur hurðir sínar og glugga með sér. Teiknað gólf tekur göt sín með sér. Rými, gólf og loft sem fylgja veggjunum eru uppfærð. Veggir sem tengdust færða veggnum haldast þar sem þeir eru.

Hver færsla er ein breyting: eitt {{key:Mod+Z}} afturkallar hana, og hún berst öllum í beinni TeamWork-lotu. Settan safnhlut er ekki hægt að afrita þannig; notaðu {{ui:Breyta}} › {{ui:Afrita}} og {{ui:Líma}}.

## Jafna

Veldu tvo eða fleiri hluti, veldu {{ui:Jafna}}, síðan hlið (vinstri, miðja, hægri, efst, mið eða neðst) og við hvað á að jafna: valið sett, fyrsta valda, síðasta valda, eða punkt sem þú smellir á. Ýttu á {{ui:Jafna}} á stikunni.

## Dreifa

Veldu þrjá eða fleiri hluti, veldu {{ui:Dreifa}}, síðan stefnu (þvert eða niður) og bilið: jöfn bil á milli þeirra eða jafnar miðjur. Þeir tveir á endunum haldast þar sem þeir eru.

Veggir sem {{ui:Jafna}} eða {{ui:Dreifa}} færir halda tengingum sínum, eins og við Færa: veggur sem tengist færðum vegg rennur enda sínum eftir eigin línu til að haldast tengdur, skilveggir sem stinga í hann fylgja með, og tveir tengdir veggir sem báðir eru færðir halda horninu þar sem nýju línurnar þeirra mætast. Rými haldast lokuð. Það er eitt skref í **Breytingar**.
