---
title: Klahvid ja hiir
summary: Iga klahvi-, hiire-, puuteplaadi- ja puuteekraani toiming BimCraftis, rühmitatult selle järgi, mida vaatad.
keywords: klaviatuur, otseteed, kiirklahvid, klahvid, hiir, puuteplaat, puude, orbiit, nihuta, suumi, peida, isoleeri, läbinägev, võta tagasi, tee uuesti, kopeeri, kleebi, dubleeri, salvesta, mahuta, prindivaade, escape, sätted, joonista, sein, uks, aken, plaan
from: 5c6eedce
---

BimCraftil on vähe otseteid. Enamik tööst tehakse hiire ja paneelidega. Otseteed, mis on kirjutatud {{key:Mod}}-iga, kasutavad Macis klahvi Command, mujal Ctrl-i. Vaata, kuidas klahve selles abis kirjutatakse: [Klahvid, hiired ja puuteplaadid](common:keys).

## Igal pool

| Klahv | Mida see teeb |
|---|---|
| {{key:Ctrl+Shift+F}} | Vaheta ekraanirežiime: tavaline, täisekraan, täisekraan peidetud ribadega. Ctrl igal platvormil, sh Macis |
| {{key:Esc}} | Lahku täisekraanilt |
| {{key:Mod+,}} | Ava {{ui:Settings}}. Vaata [BimCraft-i sätted](topic:settings) |
| {{key:Tab}} | Liigu nuppude, märkeruutude ja väärtuste vahel. Iga juhtelemendini saab klaviatuuriga |

## 3D-vaade (IFC-mudelid)

| Klahv või toiming | Mida see teeb |
|---|---|
| {{key:F}} | Mahuta terve mudel, kolmveerandvaade (sama mis {{ui:Fit}}) |
| {{key:Esc}} | Tühista valik või lõpeta paigutamine või kleepimine |
| Klõps | Vali kursori all olev element; tühjal taustal klõpsates tühista valik |
| {{key:Mod}}+klõps või {{key:Shift}}+klõps | Lisa element valikule või eemalda see |
| {{key:H}} | Peida valitud elemendid. Vaata [Peida, isoleeri ja näe läbi elemente](topic:hide-and-isolate) |
| {{key:I}} | Näita ainult valitud elemente (isoleeri) |
| {{key:T}} | Näita valitud elemente, kõik muu läbinägev |
| {{key:Shift+H}} | Näita kõik elemendid uuesti |
| {{ui:Walk}} | Seejärel {{key:W}} {{key:A}} {{key:S}} {{key:D}} või nooled liiguvad, {{key:Shift}} jookseb, lohistamine vaatab ringi, {{key:Esc}} peatab. Vaata [Kõnni läbi mudeli](topic:walk) |
| {{key:M}} | Mõõda vahemaid ja tahkude pindalu. Vaata [Mõõda vahemaid, tahkude pindalu ja asukohti 3D-s](topic:measure) |
| Lohista vasaku nupuga | Orbiit |
| Lohista parema nupuga | Nihuta vaadet |
| {{key:Shift}} või {{key:Mod}} ja lohista vasaku nupuga | Nihuta vaadet (mugav puuteplaadil) |
| Keri hiirerattaga või lohista keskmise nupuga | Suumi |
| Kahe sõrmega kerimine või näpistus puuteplaadil | Suumi |
| Üks sõrm (puude) | Orbiit; puudutus valib |
| Kaks sõrme (puude) | Näpista suumimiseks, liiguta koos nihutamiseks |

| {{key:X}} | Lõiketasand sisse ja välja. Vaata [Lõika IFC-mudel lõiketasandiga](topic:section-plane) |
| {{key:Shift+X}} | Lõikekast valitud elementide ümber, ruumi seadistusega Sätetes |

Klahve {{ui:Top}}, {{ui:Front}} ja {{ui:Side}} pole; kasuta nuppe.

## Muutmine

Samad käsud on tööriistaribal: {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} ja menüü {{ui:More}}, mis näitab iga klahvi. Need töötavad IFC-mudeli 3D-vaates, mitte siis, kui kirjutad väljale. Vaata [Kopeeri, kleebi ja dubleeri teegi elemendid](topic:copy-paste).

| Klahv | Mida see teeb |
|---|---|
| {{key:Mod+Z}} | Võta viimane muudatus tagasi |
| {{key:Mod+Y}} või {{key:Mod+Shift+Z}} | Tee uuesti see, mille Võta tagasi eemaldas |
| {{key:Mod+C}} | Kopeeri valitud elemendid (nende nimed ja omadused lähevad lõikelauale ka tekstina) |
| {{key:Mod+X}} | Lõika valitud elemendid: kopeeri need ja kustuta |
| {{key:Mod+V}} | Kleebi see, mida kopeerisid: see liigub kursoriga, klõpsa, kuhu see läheb |
| {{key:Mod+Shift+V}} | Kleebi samasse kohta: kust lõigati, või kopeerimise järel originaali kõrvale |
| {{key:Mod+D}} | Dubleeri: kopeeri valitud elemendid ja alusta nende kleepimist |
| {{key:Delete}} | Kustuta valitud elemendid koos nende osade ja avadega. Vaata [Kustuta, lõika, kopeeri ja kleebi ehitiselemente](topic:edit-elements) |
| {{key:Mod+A}} | Vali kõik näidatud elemendid |
| {{key:Esc}} | Ära vali midagi |

Kui lehel on tekst valitud, kopeerib {{key:Mod+C}} teksti nagu tavaliselt.

## Plaanivaade (Joonista)

Need töötavad, kui {{ui:Draw}} on sisse lülitatud ja sa ei kirjuta väljale. Vaata [Joonista seinu](topic:draw-walls) ja [Uksed ja aknad](topic:doors-and-windows).

| Klahv või toiming | Mida see teeb |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:W}} | {{ui:Wall}} |
| {{key:D}} | {{ui:Door}} |
| {{key:N}} | {{ui:Window}} |
| {{key:H}} | {{ui:Door}} või {{ui:Window}} valikul: saanid teises otsas |
| {{key:Shift}} seina joonistamisel | Hoia see 0°, 90°, 180° või 270° juures |
| Numbrid ning jala ja tolli märgid (`'` ja `"`) | Alusta pikkuse kirjutamist kasti {{ui:Length}}; {{key:Enter}} kasutab seda |
| {{key:Enter}}, {{key:Esc}}, parem klõps või topeltklõps | Lõpeta joonistatav sein; {{key:Esc}} veel kord viib tagasi {{ui:Select}} juurde |
| {{key:Delete}} | Kustuta valitud seinad, uksed ja aknad; järelejäänud seinad ühenduvad uuesti |
| {{key:F}} kursoriga plaanil | Mahuta plaan |
| Keri hiirerattaga | Suumi kursori ümber |
| Lohista keskmise või parema nupuga või {{key:Space}} ja lohista | Nihuta vaadet; kui {{ui:Select}} on sisse lülitatud, nihutab ka tavaline lohistamine |
| Lohista ust või akent valikuga {{ui:Select}} | Liiguta seda mööda seina või teisele seinale |
| Kaks sõrme (puude) | Näpista suumimiseks, liiguta koos nihutamiseks |

## Teegi elementide paigutamine ja kleepimine

| Klahv | Mida see teeb |
|---|---|
| {{key:R}} | Pööra element 90° |
| {{key:Tab}} | Seinale haakumine sisse ja välja: elemendi tagakülg läheb lähima seina vastu |
| {{key:Enter}} väljal **X, Y (mm)** | Paiguta sisestatud asukohta |
| {{key:Esc}} | Lõpeta paigutamine või kleepimine |

## IFC väärtuste muutmine

| Klahv | Mida see teeb |
|---|---|
| {{key:Enter}} | Säilita sisestatud väärtus |
| {{key:Esc}} | Tühista ja pane vana väärtus tagasi |
| Klõps mujale | Säilita sisestatud väärtus |
| {{key:Mod+Z}} | Võta viimane muudatus tagasi. Ainult siis, kui on salvestamata muudatusi ja sa ei kirjuta väljale |
| {{key:Mod+Y}} | Tee uuesti see, mille Võta tagasi eemaldas |
| {{key:Mod+S}} | Salvesta IFC-na. Ainult siis, kui on salvestamata muudatusi; muidu avaneb brauseri enda salvestamise käsk |

Muutmiseks ainult klaviatuuriga: vajuta {{key:Tab}}, kuni väärtus on esile tõstetud, seejärel vajuta {{key:Enter}}, et hakata kirjutama.

## 2D-joonised (DWG ja DXF)

| Klahv või toiming | Mida see teeb |
|---|---|
| {{key:F}} | Mahuta joonis või leht |
| {{key:P}} | Prindivaade sisse ja välja |
| Topeltklõps | Mahuta |
| Lohista mis tahes nupuga | Nihuta vaadet |
| Keri hiirerattaga | Suumi kursori juures |
| Kahe sõrmega kerimine või näpistus puuteplaadil | Suumi kursori juures. Kahe sõrmega kerimine ei nihuta |
| Üks sõrm (puude) | Nihuta vaadet. Joonistel pole näpistussuumi veel valmis |

## Joonised 3D-s

| Klahv või toiming | Mida see teeb |
|---|---|
| {{key:3}} | 3D sisse ja välja (ka 2D-vaates) |
| {{key:F}} | Ulatus: terve joonis |
| Lohista keskmise või vasaku nupuga | Orbiit |
| Lohista parema nupuga või {{key:Shift}} ja lohista | Nihuta vaadet |
| Keri hiirerattaga | Suumi selle poole, mis on kursori all |
| Kahe sõrmega libistamine puuteplaadil | Orbiit; koos {{key:Shift}}-ga nihuta vaadet |
| Näpistus puuteplaadil | Suumi |
| Üks sõrm (puude) | Orbiit |
| Kaks sõrme (puude) | Näpista suumimiseks, liiguta koos nihutamiseks |

{{key:F}}, {{key:P}} ja {{key:3}} ei tee midagi, kui kirjutad väljale, kui kuvatakse seadmeloendit või kui hoiad all {{key:Mod}} või {{key:Alt}}.

## Failid

| Toiming | Mida see teeb |
|---|---|
| Lohista fail lehele | Ava see |
| Lohista kaust lehele | Ava see projektikaustana, ilma loaküsimuseta |
