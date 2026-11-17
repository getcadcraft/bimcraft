---
title: Mudeli kahe versiooni võrdlemine
summary: Ava kaks sama IFC-mudeli versiooni ja vaata, millised elemendid lisati, eemaldati ja muudeti, sobitatuna GlobalId-de järgi, koos CSV-ga igast muudatusest.
keywords: võrdle, erinevus, versioonid, revisjon, muudatused, muudetud, lisatud, eemaldatud, liigutatud, globalid, guid, mis muutus
from: cfca6971
---

## Mida teete

Vaata, mis muutus sinu mudeli ja sulle saadetud mudeli vahel: millised elemendid on uued, millised kadunud, millised liikunud või said uusi omaduste väärtusi.

## Sammud

1. Ava uuem versioon, seejärel klõpsa {{ui:Lisa mudel…}} ja vali vanem. Vaata [Mitme IFC-mudeli koos vaatamine](topic:several-models).
2. Ava {{ui:Mudelid}} all {{ui:Võrdle versioone}}.
3. Vali {{ui:Vanem versioon}} ja {{ui:Uuem versioon}}.
4. Klõpsa {{ui:Võrdle}}.
5. Klõpsa nimekirjas elementi, et see valida ja näha selle omadusi. Klõpsa {{ui:Laadi CSV alla}}, et saada iga muudatus omaduse kaupa.
6. Klõpsa {{ui:Tühjenda}}, et naasta tavavaate juurde.

## Mida peaksid nägema

- **Lisatud** elemendid sinised, uuemast versioonist.
- **Eemaldatud** elemendid punased, vanemast versioonist.
- **Muudetud** elemendid okravärvi, uuemast versioonist; iga ühega öeldakse, mis muutus: omadused, liikumine koos kaugusega või uus kuju.
- Kõik, mis on samaks jäänud, on läbipaistev.

## Hea teada

- Elemente sobitatakse nende GlobalId järgi. Programm, mis annab elementidele eksportimisel iga kord uued GlobalId-d, teeb kõik elemendid kadunuks ja uuesti lisatuks.
- Asendeid võrreldakse seal, kus mudelid stseenis asuvad. Kui ühte versiooni on tahtlikult liigutatud, joonda need kõigepealt {{ui:Teisalda}} abil jaotises {{ui:Mudelid}}.
- Mudelis kahekordselt kasutatud GlobalId jäetakse võrdlusest välja. [Kontrolli mudelit levinud probleemide suhtes](topic:model-checks) leiab need.

## Järgmised

- [Probleemid ja BCF-failid](topic:issues-bcf)
- [Koguste liitmine omaduse järgi](topic:quantity-totals)
