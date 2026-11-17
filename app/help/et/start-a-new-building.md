---
title: Alusta uut hoonet
summary: Tee tühi hoonemudel koos tasanditega, joonista seinad, paiguta teegist üksused ja salvesta see IFC-na.
keywords: uus, uus hoone, tühi, tühjad, alusta nullist, mall, tasandid, korrused, põrandad, loo, mudel
from: 68786865
---

## Mida sa teed

Alusta hoonemudelit tühjast, mitte ava olemasolevat. BimCraft teeb tühja IFC-mudeli koos projekti, asukoha, hoone ja selle tasanditega. Saad paigutada tasanditele seadmeid ja mööblit teegist ning salvestada mudeli IFC-failina.

:::note
Seinu saab juba joonistada: vaata [Seinte joonistamine](topic:draw-walls). Uksi, aknaid, põrandaid ja katuseid valmistatakse järgmisena.
:::

## Sammud

1. Klõpsa jaotises **Ava fail või kaust** või algusleheküljel {{ui:Uus hoone}}.
2. Sisesta **Hoone nimi**.
3. Vali, mitu **Tasandit** hoonel on (1 kuni 200).
4. Sisesta **Tasandi kõrgus**, põrandast põrandani: näiteks `10'-0"`, `10'6"` või `3000 mm`. Lihtne number on USA-s jalad, mujal millimeetrid.
5. Kõik väljad on juba täidetud, nii et võid need kõik jätta nagu on. Nende all kast ütleb, millega alustad: ühikud, **Seinatüübi**, mille {{ui:Sein}} tööriist esimesena joonistab (vali nimekirjast teine, kui soovid), ja esimese lehe.
6. Klõpsa {{ui:Loo}}. Tasandid laotakse nullist, igaüks ühe tasandi kõrguse võrra eelmisest kõrgemal, ja nimetatakse Tasand 1, Tasand 2 jne. Need ilmuvad mudelipuus ning tasandi 1 plaan avaneb 3D-vaate kõrvale, {{ui:Joonista}} sisselülitatuna.
7. Joonista seinad: klõpsa {{ui:Sein}} ja kahte punkti. Vaata [Seinte joonistamine](topic:draw-walls). Muuda tasandite nimesid või kõrgusi paneelis **Tasandid**.
8. Paiguta üksused: vaata [Seadmete ja mööbli paigutamine teegist](topic:place-from-library). Paigutusriba loetleb kõik tasandid.
9. Klõpsa {{ui:Salvesta IFC-na}}. Fail nimetatakse hoone järgi, näiteks `Smith's house.ifc`.

## Hea teada

- Mudel salvestatakse millimeetrites, IFC4-na. Teised BIM-programmid avavad selle.
- Uus hoone tuleb ühe lehega, **A-101**, mis hoiab madalaima tasandi plaani: A3 mõõtkavas 1:100, kui töötad meetermõõdustikus, muidu Tabloid mõõtkavas 1/8" = 1'-0". See on tühi kuni esimese seinani ja siis näitab plaani, mida sa joonistad. Ava see projektisirvijas jaotises {{ui:Lehed}}, et muuta selle paberit, mõõtkava või pealkirja, lisada vaateid või see kustutada. Mallist alustatud hoone toob kaasa malli lehed.
- Enne esimest seina pole midagi seadistada. Seinatüübi, tasandite kõrgusi, ühikuid ja lehte saab muuta hiljem.
- Et muuta, millega iga uus hoone algab (metrisüsteemi projektide seinatüüp, tasandid, esimene leht, tööriist, mis on pärast {{ui:Loo}} aktiivne), vaata [Vaikimisi reeglid](topic:default-policies).
- **Korrused** vasakus paneelis loetleb ainult korruseid, millel on midagi; mudelipuu loetleb kõik.
- Kuni salvestamiseni loetakse uus hoone salvestamata tööks. BimCraft küsib enne teise faili avamist või lahkumist ja hoiab koopiat selles brauseris, juhuks kui vahekaart sulgub.
