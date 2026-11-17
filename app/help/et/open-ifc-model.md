---
title: Ava IFC-mudel ja vaata ringi 3D-s
summary: Ava IFC-fail, pööra, nihuta ja suumi ning kasuta Mahuta, Ülemine, Esi ja Külg, et orienteeruda.
keywords: ifc, 3d, pööramine, nihutamine, suumimine, mahuta, ülemine vaade, esivaade, külgvaade, navigeerimine, vaatekuubik, kaamera
from: 68b460dd
---

## Mida sa teed

Ava IFC-mudel, liigu ringi 3D-s ja hüppa standardvaadetesse. Umbes viis minutit.

Vajad `.ifc`-faili. Enamik BIM-programme ekspordib selle; Revitis on see **File > Export > IFC**. Vt [Projektifaili toomine 3D-sse IFC kaudu](topic:rvt-to-ifc).

## Sammud

1. Klõpsa {{ui:Vali fail}} (või vasakul üleval olevat lohistusala).
2. Vali oma `.ifc`-fail ja kinnita.
3. Oota, kuni olekurida lõpeb. See näitab esimest korda „IFC-mootori käivitamine…“, siis „Mudeli lugemine…“ ja „Geomeetria ehitamine: … / … elementi“.
4. Vaata mudelit: see avaneb kolmveerandvaates, sobitatuna ekraanile.
5. Klõpsa mudeli kohal tööriistaribal {{ui:Ülemine}}, et vaadata otse alla.
6. Klõpsa {{ui:Esi}}, et vaadata esiküljelt, seejärel {{ui:Külg}}, et vaadata küljelt.
7. Klõpsa {{ui:Mahuta}} või vajuta {{key:F}}, et naasta kogu mudeli kolmveerandvaatesse.

## Mida peaksid nägema

- Mudel keskel, õhukeste tumedate servadega joonise välimuse jaoks.
- Vasakul paneel {{ui:Fail}}: failinimi, suurus, IFC-skeema (nt IFC2X3 või IFC4), projekti nimi, faas, programm, millest eksporditi, autor, ekspordi kuupäev ning elementide ja kolmnurkade arv.
- Selle all loendid {{ui:Korrused}} ja {{ui:Elemendid}}.
- Olekuriba: „Avatud *failinimi*: *n* elementi *s* sekundiga“.

## Liikumine

:::mouse
| Mida | Tee |
|---|---|
| Pööra | Lohista vasaku nupuga |
| Nihuta | Lohista parema nupuga või hoia all {{key:Shift}} (või {{key:Mod}}) ja lohista vasaku nupuga |
| Suumi | Keri hiiterattaga või lohista keskmise nupuga |
| Vaata kõike | Vajuta {{key:F}} või klõpsa {{ui:Mahuta}} |
:::

:::mac mouse
Puuteplaadil: lohista ühe sõrmega, et pöörata; hoia {{key:Shift}} või {{key:Mod}} all ja lohista, et nihutada; keri kahe sõrmega või näpista, et suumida. Kahe sõrmega klõps on paremklõps ja selle abil saab lohistada, et nihutada, aga {{key:Shift}} ja lohistamine on lihtsam.
:::

:::touch
| Mida | Tee |
|---|---|
| Pööra | Lohista ühe sõrmega |
| Suumi | Näpista kahe sõrmega |
| Nihuta | Liiguta kahte sõrme koos |
| Vaata kõike | Puuduta {{ui:Mahuta}} |
:::

Pööramine keerleb alati mudeli keskel oleva punkti ümber. Nihutamine liigutab seda punkti, nii et pärast pikka nihutamist võib pööramine tunduda keskelt väljas: klõpsa {{ui:Mahuta}}, et see lähtestada.

## Varjutatud, servad või traat

Kolm väikest nuppu vaatekuubiku kohal valivad, kuidas mudelit joonistatakse: {{ui:Varjutatud}}, {{ui:Varjutatud servadega}} (vaikimisi) ja {{ui:Traatmudel}}. Need on ka käsud (menüüs Vaade ja kohandamise loendis), nii et neil võivad olla oma klahvid. {{ui:Plaan}}, {{ui:Jaga}} ja {{ui:3D}} on tööriistariba reas {{ui:Vaade}}.

## Levinud vead

- **Ootad nimega vaateid.** BimCraftil on neli fikseeritud vaadet ({{ui:Mahuta}}, {{ui:Ülemine}}, {{ui:Esi}}, {{ui:Külg}}), vaatekuubik paremas alanurgas ja vaba pööramine. Vaateid ei salvestata.
- **Otsid plaane ja lõikeid.** Selles versioonis pole 2D-plaane ega lõikekaste. Lõika mudel ühe {{ui:Lõige}}-tasandiga ([IFC-mudeli lõikamine lõiketasandiga](topic:section-plane)) või lülita korrused välja: [Korruste, ruumide ja servade näitamine ja peitmine](topic:storeys-and-spaces).
- **Avad projektifaili ja ootad 3D-d.** Projektifail avaneb failikaardina. Ekspordi enne IFC.
- **Avad `.ifczip`-i.** Paki lahti või ekspordi tavaline `.ifc`.
- **Väga suur mudel teeb vahekaardi aeglaseks või kokkujooksmiseks.** Vt [Brauserid, seadmed ja mälu](topic:platforms).

## Järgmine

[Vali element ja loe selle omadusi](topic:inspect-element).
