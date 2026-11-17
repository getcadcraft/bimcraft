---
title: Projektipaketi avamine
summary: Projektipakett on üks zip-fail, mis sisaldab mudelit, selle vaateid, paigutusi ja omaduste rühmi. Ava see, näita vaadet koos korruse ja kihtidega, ava paigutus ning vaata omadusi projekti enda rühmades.
keywords: pakett, projektipakett, ccbundle, zip, vaated, vaadete kaart, paigutused, paigutusraamat, kihtide kombinatsioon, omaduste rühmad, standardid, pln, mall
from: b5b86e8f
---

## Mida sa teed

Ava **projektipakett** (`.ccbundle.zip`) ja töötad projektiga nii, nagu see oli korraldatud: selle vaadete, paigutuste ja omaduste rühmadega mudeli peal.

Pakett sisaldab:

- mudelit IFC-na,
- paigutusi PDF- ja DWG-vormingus,
- loendit sellest, mida IFC ei hõlma: vaated (igaühega korrus, kihtide kombinatsioon ja mõõtkava), paigutused ja neile paigutatud joonised, omaduste definitsioonid nende rühmades, klassifikatsioonid ning standardid, nagu kihid, pliiatsikomplektid, joonetüübid, täited, pinnad ja liitkihid.

Paketid koostab avatud lähtekoodiga skript, mis töötab Archicadi sees ja küsib Archicadilt endalt need loendid. BimCraft ei loe kunagi `.pln`- ega `.tpl`-faile otse; vt [Ava .pln- ja .pla-projektifailid](topic:pln-project-files).

## Paketi tegemine

Skript on eelvaade: seda pole veel proovitud kõigi Archicadi versioonidega. Laadi see alla aadressilt [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Vajad Archicad 24 või uuemat ja Python 3.8 või uuemat; muud installimist pole vaja.

1. Salvesta `archicad_bundle.py` kausta, näiteks `C:\cc-bundle`.
2. Ava Archicadis projekt ja tee avaldamiskomplekt nimega täpselt **CadCraft bundle**: 3D-vaade IFC-na, iga paigutus PDF-na ja iga paigutus veel kord DWG-na, avaldatud failidena kettale ühte kausta ilma alamkaustadeta.
3. Projekti avatuna käivita kord `python archicad_bundle.py --probe --out .`. See ainult loeb ja kirjutab faili `probe.json`.
4. Käivita `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (kasuta IFC-tõlkijat, mille valisid). Archicad avaldab komplekti ja skript kirjutab faili `<project>.ccbundle.zip`.

Kui skriptiga avaldamine ebaõnnestub, avalda komplekt käsitsi ja käivita `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Repositooriumi README sisaldab kõiki valikuid. Kui midagi ei tule kaasa, ava seal probleemiteade ja lisa `probe.json`.

## Paketi avamine

1. Klõpsa {{ui:Vali fail}} või lohista `.ccbundle.zip` BimCraftile. Kaustas, mille avasid nupuga {{ui:Ava kaust}}, on paketid loetletud jaotises **Projektipaketid**; klõpsa paketi nimel.
2. Mudel avaneb nagu iga IFC, ja faili andmete all vasakul ilmub jaotis **Projektipakett**.

Midagi ei laadita üles: pakett loetakse sinu arvutis ühe faili kaupa, nii et suurt mudelit ei kopeerita kaks korda.

## Vaate näitamine

Jaotises **Vaated** on vaated rühmitatud kaustade järgi, mis neil projektis olid. Klõpsa vaate nimel:

- **Korrusplaan** näitab ainult oma korrust ülevaatest.
- **Kihtide kombinatsioon** peidab elemendid kihtidel, mida see kombinatsioon peidab. Olekurida ütleb, mitu elementi see peitis.
- **Mõõtkava** on näidatud nime kõrval ja olekureas.
- **3D-vaade** näitab kõiki korruseid.

Kõigi näitamiseks uuesti kasuta menüüs {{ui:Näita}} käsku {{ui:Näita kõiki}} ja märgi kõik korrused.

:::note
BimCraft leiab kihid IFC-faili kihtide määramiste kaudu. Kui IFC on eksporditud ilma nendeta, ei peida ükski kihtide kombinatsioon midagi ja olekureas on 0 peidetud elementi.
:::

## Paigutuse avamine

Jaotises **Paigutused** näitab iga paigutus oma numbrit, nime, paberi suurust ja sellele paigutatud vaateid.

- **PDF** salvestab paigutuse PDF-i paketist.
- **DWG** avab paigutuse joonise 2D-vaates. Klõpsa mis tahes vaatel, et naasta mudeli juurde.
- **Ava …** saadab paigutuse faili rakendusse, mis sellega töötab, uuel vahelehel: PDF MarkupCraftile, DWG CadCraftile. See näidatakse ainult siis, kui see rakendus on BimCraftiga kõrvuti avatud. Fail loetakse paketist vahelehe laadimise ajal ja midagi ei laadita üles.

Paigutus, millel pole kumbagi, ütleb **Paketis pole faili**.

## Omaduste vaatamine projekti rühmades

Vali element. **Omaduste rühmad** näitab selle omadusi rühmade all, mille projekt määras. Seos tehakse omaduste kogumi ja nime järgi, mille definitsioon IFC jaoks annab, või muidu nime järgi. Ülejäänud jäävad tavapäraselt jaotisse {{ui:Omadused}}. **Omaduste definitsioonid** loetleb iga definitsiooni koos rühma, tüübi ja IFC nimega.

## Standardid ja märkused

- **Standardid** loeb paketis olevad kihid, kihtide kombinatsioonid, pliiatsikomplektid, joonetüübid, täited, pinnad, liitkihid ja materjalid.
- **Märkused** loetleb, mida skript ei saanud sellest Archicadi versioonist, kõik väljad, mida BimCraft ei suutnud lugeda, ja kõik failid, mida pakett nimetab, kuid ei sisalda.

## Veaotsing

- **„… on zip-fail, kuid mitte projektipakett.“** Zip-failis puudub `manifest.json`. Paki see lahti ja ava seest `.ifc`-fail.
- **„… on uuem projektipakett, kui see BimCraft loeb.“** Uuenda BimCraft.
- **„… ei sisalda mudelit, mida tema manifest nimetab.“** Zip-fail katkes või seda muudeti. Tee pakett uuesti.
- **Vaade näitab kõiki korruseid.** Selle korrus ei ole mudeli IFC-s (olekurida ütleb seda). Kontrolli, et IFC eksport sisaldas seda korrust.

Vaata ka [Kahe BIM-programmi vahel töötamine](topic:two-bim-programs) ja [Mida BimCraft igast vormingust loeb](topic:file-formats).
