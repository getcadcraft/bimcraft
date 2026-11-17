---
title: Reaalajavaade
summary: Paneel mudeli kõrval, mis näitab seda reaalajavaate välimuses päikese, varjude ja tagasipeegeldunud valgusega ning jälgib iga sinu muudatust; kõnni läbi selle ning määra kellaaeg ja kuu.
keywords: reaalajavaade, reaalajas, reaalajas renderdamine, läbikäik, kõnni, kõnni läbi, esimene isik, esitlus, klient, teine ekraan, teine aken, monitor, kellaaeg, päike, aastaaeg, kuu, varjud, ümbritsev varjutus, peegeldused, tagasipeegeldunud valgus, globaalne valgustus, webgpu, webgl
from: ea5c02bf
---

Reaalajavaade näitab mudelit reaalajas välimuses: taevas ja päike sinu koha ja kuupäeva järgi, päikese varjud, värvid ja materjalid, mille oled elementidele andnud, lambid ning seinte ja põrandate pealt tagasipeegeldunud valgus. See järgib, mida teed: pöörad 3D-vaadet ja see pöördub samuti; muudad mudelit ja see näitab muudatust hetke pärast. Midagi ei laadita üles.

See joonistab sama stseeni, värvid, lambid ja päikese mis [Renderda pilt](topic:render); lõpliku pildi jaoks kasuta seda.

## Ava see

1. Ava mudel ja vali tööriistaribalt {{ui:Reaalajavaade}}. Paneel avaneb rakenduse kohale, paremasse alanurka.
2. Lohista selle pealkirjariba, et seda liigutada; tõmba nurgast, et seda suurendada.
3. {{ui:Reaalajavaade uues aknas}} (sellest kõrval olev nupp) või paneelis {{ui:Uus aken}} viib selle eraldi aknasse teisele ekraanile. Kui brauser blokeerib hüpikaknad, avaneb see paneelina.
4. {{ui:Sulge}} sulgeb selle.

## Juhtnupud

| Juhtnupp | Mida see teeb |
|---|---|
| {{ui:Jälgi vaadet}} | Sees: reaalajavaade vaatab sinna, kuhu 3D-vaade. Kõndimine lülitab selle välja |
| {{ui:Kõnni}} | Kõnni läbi mudeli (allpool) |
| {{ui:Gravitatsioon}} | Kõndides: seisa põrandatel ja ronige trepist. Väljas: lenda |
| {{ui:Kellaaeg}} | Päeva tund. Päike liigub, kui lohistad |
| {{ui:Kuu}} | Kuu, et näha päikest talvel ja suvel |
| {{ui:Kvaliteet}} | {{ui:Selle arvuti jaoks}}, või {{ui:Madal}}, {{ui:Keskmine}} või {{ui:Kõrge}} |

Alumine rida ütleb, mis joonistab vaate (WebGPU või WebGL 2), kvaliteedi ja tagasipeegeldunud valguse.

## Kõnni läbi mudeli

1. Pööra 3D-vaade sinna, kuhu tahad seista, ja vali {{ui:Kõnni}}. Seisad vaate silmapunkti all olevatel põrandatel, 1,6 m pikkusena.
2. Klõpsa reaalajavaatel ja kasuta {{key:W}} {{key:A}} {{key:S}} {{key:D}} või nooleklahve. Hoia {{key:Shift}} all, et joosta. Lohista, et ringi vaadata.
3. Kuni 40 cm kõrgused astmed ronitakse (trepid); kõrgem on sein. Seinad peatavad sind ja sa libisled mööda neid.
4. Kui {{ui:Gravitatsioon}} on väljas, lendad: {{key:E}} läheb üles, {{key:Q}} alla.
5. {{key:Esc}} lõpetab kõndimise.

## Tagasipeegeldunud valgus

Päikesepaistelisest seinast põrandale tagasi peegelduv valgus ja toa tumedam sisemus arvutatakse taustal igal protsessori tuumal. Kuni see töötab, näitab alumine rida {{ui:Tagasipeegeldunud valgus: 40 %}}; kui see on valmis, võtab vaade selle vastu. Pärast muudatust algab arvutus uuesti.

:::note
See on reaalajavaate lähendus, mitte renderdatud pilt: punktide vahelised väiksed detailid saavad lähimate punktide tagasipeegeldunud valguse.
:::

:::note
Brauserid erinevad. Kus brauseril on WebGPU, kasutab reaalajavaade seda; mujal kasutab WebGL 2-t ja näeb välja samasugune. Kummagi puudumisel paneel ütleb seda.
:::
