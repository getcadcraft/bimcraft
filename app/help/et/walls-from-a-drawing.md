---
title: Seinad jälgitud joonisest
summary: Muuda DWG- või DXF-plaan seinteks, ustes ja akendes tasandil ning hoia joonis plaani all viitena.
keywords: dwg, dxf, jälgi, jälgitud, impordi plaan, teisenda, CAD-ist BIM-iks, 2D-st 3D-ks, seinad joontest, kihid, plokid, ukse plokid, alusjoonis, viitejoonis, taust, xref, joonistusrakendus
from: 3bf213f1
---

## Mida sa teed

Kasuta plaani, mille sina (või keegi teine) joonistasid joonistusrakenduses, mudeli alguseks: selle seinajooned saavad seinteks ja selle uste- ja aknaplokid uksteks ja akenteks.

## Sammud

1. Lülita sisse {{ui:Joonista}} ja vali tasand, mida joonis plaani tasandiloendis näitab.
2. Vali {{ui:Versioon}} › {{ui:Joonisest…}}, seejärel {{ui:Vali joonis…}} ja vali DWG või DXF.
3. Dialoogis:
   - **Joonise ühikud** tulevad joonisest; vali teised, kui need on valed (plaan, mis on joonistatud jalgades, kuid loetud tollidena, on kaksteist korda liiga väike).
   - **Seinadega kihid**: märgi kihid, millel on seinajooned. Kihid, mille nimes on „wall“, on sulle märgitud.
   - **Jooned on**: **mõlemad pinnad iga seina kohta** (tavaline viis plaane joonistada: iga kaks paralleelset joont kuni 600 mm kaugusel saavad üheks seinaks, nii paksuks kui vahe), **seinte telgjooned** või **üks pind** seina vasakul või paremal küljel. Telgjoonte või ühe pinna korral määrab paksuse seintüüp.
   - **Seintüüp** ja **Seina kõrgus**, nagu {{ui:Sein}} tööriista puhul.
   - **Plokid**: vali iga ploki jaoks, mis on uks või aken, ukse või akna tüüp, või jäta välja. Plokid, mille nimes on „door“ või „window“, valitakse sulle. Iga plokk asetatakse seina, millel ta seisab, nii lai kui plokk on mööda seina; uks avaneb sinna poole, kuhu tema avanemine on joonistatud.
   - **Kuhu see läheb**: joonise enda koordinaatidesse või nii, et selle vasakpoolne alumine nurk on plaani alguspunktis.
   - **Hoia joonis selle tasandi plaani all**: jäta linnuke märgituks, et näha joonist õhukeste joontena selle all, mida teed.
4. Joonte all olev rida ütleb, mitu seina, ust ja akent see teeb. Klõpsa {{ui:Tee need}}.

## Mida peaksid nägema

- Seinad, uksed ja aknad tasandil, ühendatud kohtades, kus nad kohtuvad, koos ruumidega, mida nad sulgevad; kõik on üks samm, nii et {{key:Mod+Z}} võtab selle tagasi.
- Joonis õhukeste joontena plaani all. {{ui:Versioon}} › {{ui:Joonisest…}} loetleb tasandile jäetud joonised, igaühega {{ui:Eemalda}}; joonise eemaldamine jätab seinad alles.
- IFC-failis on hoitud joonis tasandi märkusena (selle jooned), nii et teisedki BIM-programmid seda näitavad.

:::note
PDF või skannimine töötab samuti: vt [Seinad plaanikomplektist](topic:walls-from-plans). Kaared jäetakse välja (BimCraft joonistab sirgeid seinu), samuti jooned plokkide sees. Jooned, millel pole „mõlemad pinnad“ paari, loetakse dialoogis ja jäetakse välja: joonista need seinad tööriistaga {{ui:Sein}} või korrasta need {{ui:Muuda}} › {{ui:Lõika / pikenda}} abil (vt [Lõika, pikenda ja ühenda seinad](topic:trim-extend-walls)).
:::

:::tip
Jälgisid skannimise peal joonistusrakenduses? Ava skann siin ka ja kontrolli seinu selle vastu: vt [Mudel skannist](topic:model-from-a-scan).
:::
