---
title: DWG- või DXF-joonise vaatamine
summary: Ava DWG või DXF, liigu mudeliruumis ja lehtedel, loe koordinaate ning vaata, mida pole veel joonistatud.
keywords: dünaamilised plokid, nähtavusolekud, dwg, dxf, cad, joonis, 2d, vaade, vaataja, nihuta, suumi, mudeliruum, paberiruum, paigutus, koordinaadid, ava dwg
from: 4db3122a
---

## Mida teed

Ava CAD-joonis, vaata seda 3D-s või 2D-s, liigu ringi, lülitu mudeliruumi ja selle lehtede vahel ning loe koordinaate. BimCraft kuvab DWG- ja DXF-jooniseid; ta ei muuda ega salvesta neid. Muutmiseks klõpsa {{ui:Redigeeri CadCraftis}} ja joonis avaneb CadCraft'i joonestusrakenduses uuel vahelehel.

## Sammud

1. Klõpsa {{ui:Vali fail}} või too joonis lehele.
2. Vali `.dwg` või `.dxf` fail.
3. Oota, kuni olekuribal on "Joonist loetakse…". Suured joonised võtavad mõne sekundi. Siis öeldakse, kui kaua lugemine kestis, seejärel "renderdamine…" kuni esimese pildi joonistamiseni ja kui kaua see kestis.
4. Joonis avaneb 3D-s, mis on suure joonise kiireim kuvamine (vt [Vaata DWG- või DXF-joonist 3D-s](topic:dwg-in-3d)). Klõpsa tasaseks 2D-vaateks {{ui:Mudel}}. Et joonised avaneksid alati 2D-s, määra {{ui:Sätted}} › {{ui:BimCraft}} › **Joonised avanevad** väärtuseks {{ui:Mudel (2D)}}. Joonis, millel mudeliruumis midagi ei ole, või brauser, mis ei näita 3D-d, avaneb 2D-s.
5. Vaata vahelehti joonise kohal: {{ui:Mudel}} on esimene, siis üks leht iga lehe kohta, joonise enda järjekorras.
6. Klõpsa lehe vahelehel, et näha seda lehte: paberit, kus mudel on näha läbi vaateakende.
7. Klõpsa {{ui:Mudel}}, et naasta mudeliruumi.
8. Liiguta kursor joonise kohal ja loe nurgas X- ja Y-koordinaate.

## Mida peaksid nägema

- Joonis, mis on aknaga sobitatud. Värvid järgivad joonist; valged jooned (värv 7) joonistatakse teema tindi värvis ja heledad värvid tumendatakse heledal teemal, et need jääksid loetavaks.
- Vasakul paneel {{ui:Joonis}}: fail, suurus, vorming (nt "AutoCAD 2018 (AC1032)"), ühikud, objektide ja kihtide arv, lehtede arv ning seotud joonised ja seadmed, kui neid on.
- Vasakul loend {{ui:Kihid}}.
- Paremal: kuidas liikuda, seotud joonised ja pildid ning **Pole veel joonistatud**.

## Liikumine

:::mouse
| Mida | Tee nii |
|---|---|
| Nihuta | Lohista mis tahes hiireklahviga |
| Suumi | Keri ratast; punkt kursori all jääb paigale |
| Mahuta | Topeltklõps, vajuta {{key:F}} või klõpsa {{ui:Mahuta}} |
:::

:::mac mouse
Trackpadil zoomib kahe sõrmega kerimine, see ei nihuta. Ka näpistamine suumib. Nihutamiseks klõpsa ja lohista.
:::

:::touch
Lohista ühe sõrmega, et nihutada. Joonistel näpistussuumi veel pole: puuduta {{ui:Mahuta}}, et näha kogu lehte, ja suumi hiire või trackpadiga.
:::

## Dünaamilised plokid

Dünaamiline plokk joonistatakse nii, nagu joonis seda näitab: iga paigutatud plokk selles nähtavusolekus, milles joonis salvestati ("Plaan" või "Eestvaade", "Üks kauss" või "Topelt kauss"). Paremal loetleb **Dünaamilised plokid** iga mudeliruumi paigutatud ploki: mitu on paigutatud, millised olekud nad näitavad ja kõik olekud, mis plokil on. {{ui:3D}}-s klõpsa paigutatud plokil, et näha omadustes **Dünaamiline plokk**, **Näidatud olek** ja **Muud olekud**. BimCraft ei vaheta olekuid.

## Pole veel joonistatud

Mõned objektitüübid ei joonistu selles versioonis. Need loetakse paremal jaotises **Pole veel joonistatud** ("Neid joonise osi jäetakse praegu vahele, mitte ei arvata."), nii et näed, et midagi puudub. Joonistatakse jooned, polüjooned, kaared, ringid, ellipsid, splainid, viirutused ja tahked täited, tekst ja mitmerealine tekst, atribuutidega plokid, mõõtmed, viiktekstid ja mitmeviiktekstid, tabelid, pildid ja vaateaknad. 3D-tahud, polüvõrgud ja polügoonvõrgud joonistatakse servadena ülevalt vaadatuna; lülitu {{ui:3D}}-sse, et näha neid pindadena.

Binaarne DXF ei avane: BimCraft ütleb seda. Salvesta see uuesti ASCII DXF-ina või DWG-na programmist, mis selle tegi.

## Levinud vead

- **Joonis tundub tühi.** Mõni kiht võib joonises endas olla välja lülitatud või külmutatud; need algavad {{ui:Kihid}}-s märkimata. Klõpsa {{ui:Kõik sisse}}. Kui olek ütleb "*nimi* on tühi joonis: see ei sisalda jooni, teksti ega plokke.", siis selles pole midagi.
- **Leht näitab tühja raami.** Leht võib toetuda seotud joonistele. Vt [Leia seotud joonised ja pildid](topic:dwg-linked-files).
- **Tekst näeb veidi teistsugune välja.** BimCraft joonistab teksti kitsa sans-serif fondiga, mitte joonise enda fontidega, nii et tekst võib olla veidi laiem või kitsam kui programmis, mis selle tegi.
- **"*nimi* ei saanud lugeda. See võib olla vigane või salvestatud vormingus, mida lugeja veel ei toeta."** Sulgudes olev osa nimetab faili vormingukoodi. Salvesta see programmist, mis selle tegi, vanema DWG-na või DXF-ina ja proovi uuesti.
- **Soov mõõta, joonistada või muuta.** BimCraft ainult vaatab jooniseid. Klõpsa {{ui:Redigeeri CadCraftis}}, et avada sama fail CadCraft'i joonestusrakenduses, mis muudab seda ja salvestab koopia DWG- või DXF-ina. Su algne fail ei muutu ja seotud joonised jäävad BimCraftis. Nupp näidatakse ainult seal, kus CadCraft on sulle avatud.

## Edasi

- [Vaata DWG- või DXF-joonist 3D-s](topic:dwg-in-3d)
- [Tööta kihtide ja lehtedega](topic:dwg-layers-sheets)
- [Kontrolli joonist printvaates](topic:print-view)
