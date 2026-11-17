---
title: DWG- või DXF-joonise vaatamine 3D-s
summary: Lülita joonise mudeliruum 3D-vaatesse, et näha kõrgusi, paksust, 3D-tahke, võrke ja plokke, pöörata neid ümber, klõpsata objektil, et näha selle omadusi, ning vaadata, mida pole veel joonistatud.
keywords: 3d, dwg, dxf, joonis, mudeliruum, pöörlemine, lõige, lõikamine, lõikepiirang, valimine, vali, omadused, atribuudid, käepide, kõrgus, paksus, väljapressimine, 3dface, polyface, võrk, 3D-murdjoon, plokid, vaated, perspektiiv, paralleelne, ulatus, acis, tahked
from: a0c6cd17
---

## Mida teete

Vaata joonise mudeliruumi 3D-vaates. Jooned ja murdjooned asuvad oma tegelikel kõrgustel, paksusega objektid seisavad seintena ning 3D-tahud, võrgud ja 3D-plokid kuvatakse pindadena, mida saab ümber pöörata. Lehed jäävad 2D-na.

## Sammud

1. Ava DWG või DXF. Vaata [DWG- või DXF-joonise vaatamine](topic:view-dwg). See avaneb 3D-s, kui {{ui:Sätted}} › {{ui:BimCraft}} › **Joonised avanevad** ei ütle {{ui:Mudel (2D)}}.
2. 2D-vaates klõpsa joonise kohal olevas ribas {{ui:3D}} või vajuta {{key:3}}.
3. Oota esimesel korral hetk: olekurida ütleb „Joonise koostamine 3D-s…“, seejärel mitu joont ja tahku see näitab.
4. Pöörle, nihuta ja suumi (vaata allolevat tabelit).
5. Klõpsa teisel ribal ühte vaadet: {{ui:Iso}}, {{ui:Ülemine}}, {{ui:Alumine}}, {{ui:Esi}}, {{ui:Tagumine}}, {{ui:Vasak}} või {{ui:Parem}}.
6. Klõpsa {{ui:Perspektiiv}}, et vahetada perspektiivi ja paralleelvaate vahel.
7. Klõpsa {{ui:Kogu joonis}} või vajuta {{key:F}}, et näha kogu joonist uuesti.
8. Klõpsa {{ui:3D}} uuesti, vajuta {{key:3}} või klõpsa {{ui:Mudel}} või lehevahekaarti, et naasta 2D-sse.

## Mida peaksid nägema

- Mudeliruum 3D-s, Z üles, joonise enda värvides. Tahud on heledamad kui nende servad.
- Kihid, mille lülitad välja jaotises {{ui:Kihid}}, kaovad ka 3D-vaatest.
- Paremal: joonte ja tahkude arv, joonise suurus X-, Y- ja Z-suunas, **Ainult 2D-vaates** ja **Pole veel joonistatud**.

## Lõikamine lõiketasandiga

Klõpsa 3D-ribal {{ui:Lõige}} või vajuta {{key:X}}. Selle all olev riba töötab nagu IFC-mudelite puhul (vaata [IFC-mudeli lõikamine lõiketasandiga](topic:section-plane)): lõika {{ui:Ülemine}}, {{ui:Esi}} või {{ui:Külg}} suunast, lohista või sisesta nihe, siin joonise enda ühikutes, ja {{ui:Pööra}}, et hoida teist poolt. Mida tasand ära lõikab, seda ei saa valida. Tagasi 2D-sse minek eemaldab lõike.

## Objekti omaduste vaatamine

Klõpsa objektil 3D-vaates. See muutub valiku värviks ja {{ui:Omadused}} näitab, mida fail selle kohta ütleb: tüüp, kiht, värv, joonestiil ja käepide, seejärel selle enda andmed, näiteks joone algus, lõpp ja pikkus, ringi keskpunkt ja raadius, 3D-tahu nurgad või plokiviite plokk, sisestuspunkt, mastaap, pööre ja atribuutide väärtused.

- Plokiviide valitakse tervikuna, ka selles olevad plokid.
- Klõps mõne pikslise kauguselt joonest valib joone.
- Hoia all {{key:Mod}} ja klõpsa, et valida veel objekte või võtta üks välja; {{ui:Omadused}} loeb need siis tüübi järgi kokku.
- {{key:Esc}} või klõps tühjal alal tühistab valiku.
- Välja lülitatud kihtidel olevaid objekte ei saa valida.

## Liikumine ringi

:::mouse
| Eesmärk | Tee nii |
|---|---|
| Pöörlemine | Lohista keskmise nupuga või vasaku nupuga |
| Nihutamine | Lohista parema nupuga või hoia all {{key:Shift}} ja lohista |
| Suumimine | Keri rattaga; suum käib kursori all oleva punkti suunas |
| Kogu vaade | {{ui:Kogu joonis}} või {{key:F}} |
| Vaata küljelt | Klõpsa vaatekuubi tahul, servale või nurgal paremas alanurgas |
:::

Vaatekuubi saab sätetes {{ui:Sätted}} asendada telje ikooniga või hoopis peita. Vaata [BimCraft sätted](topic:settings).

:::mac mouse
Puuteplaadil pühi kahe sõrmega pöörlemiseks, hoia all {{key:Shift}} ja pühi nihutamiseks ning kõrvuta või lahuta sõrmi suumimiseks.
:::

:::touch
Pöörlemiseks lohista ühe sõrmega. Suumimiseks kõrvuta või lahuta kaks sõrme, nihutamiseks liiguta neid koos.
:::

## Mida joonistatakse 3D-s

| Joonisel | 3D-s |
|---|---|
| Jooned, 3D-murdjooned | Oma tegelikel kõrgustel |
| Murdjooned, ringid, kaared, ellipsid | Oma tasandil ja kõrgusel, kallutatult, kui joonis neid kallutab |
| Paksus joontel, murdjoontel, ringidel ja kaartel | Selle kõrgusega seinad; ringid suletud ülalt ja alt |
| 3D-tahud, polyface-võrgud, polügoonvõrgud | Varjutatud pinnad nähtavate servadega |
| Plokid | Paigutatud, pööratud ja skaleeritud 3D-s, ka sisemised plokid |
| Viirutused | Nende kontuurid |
| Tavaline 2D-joonestus | Lame, kus see joonistati |

## Ainult 2D-vaates

Tekst, mitmerealine tekst ja plokkide nähtavad atribuudid joonistatakse 3D-s, oma tasandil ja oma kõrgusel, ning klõps nende peal valib need. Laiad murdjooned näitavad oma laiust lameda ribana. Mitmikviiteid, pilte ja viirutusmustreid loetakse jaotises **Ainult 2D-vaates**: vaata neid vahekaardil {{ui:Mudel}} või lehtedel.

## Pole veel joonistatud

Tahkised ja pinnad, mis on salvestatud ACIS-kehadena (3D-tahkised, kehad, piirkonnad ja pinnad), ning alamjaotatud võrgud on loetletud jaotises **Pole veel joonistatud** koos nende arvuga. Need jäetakse vahele, neid ei oleta.

## Levinud vead

- **Kõik näib lame.** Joonis on 2D: selle joontel pole kõrgust. Kontrolli klõpsates {{ui:Esi}}; lame joonis kuvatakse joonena.
- **Tahkismudel ei näita midagi.** Tahkismudeleerijaga tehtud tahked on ACIS-kehad, mis on loetletud jaotises **Pole veel joonistatud**. Ekspordi mudel IFC-na või 3D-tahkudena programmist, mis selle tegi.
- **Joonis on keskel väike hunnik.** Midagi kaugel mudeliruumis, näiteks vana koopia plaanist, teeb ulatuse suureks. Suumi rattaga sisse sinna, kuhu tahad vaadata.

## Edasi

- [Töö kihtide ja lehtedega](topic:dwg-layers-sheets)
- [IFC-mudeli lõikamine lõiketasandiga](topic:section-plane)
