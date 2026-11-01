---
title: Uue hoone alustamine
summary: Tee tühi hoonemudel koos tasanditega, joonista selle seinad, paiguta esemed raamatukogust ja salvesta see IFC-na.
keywords: uus, uus hoone, tühi, alusta nullist, mall, tasandid, korrused, põrandad, loo, mudel
from: 546b8ae8
---

## Mida sa teed

Alusta hoonemudelit millestki, mitte ära ava olemasolevat. BimCraft teeb tühja IFC-mudeli koos projekti, saidi, hoone ja selle tasanditega. Saad paigutada tasanditele raamatukogust seadmeid ja mööblit ning salvestada mudeli IFC-failina.

:::note
Seinu saab nüüd joonistada: vaata [Seinte joonistamine](topic:draw-walls). Uksed, aknad, põrandad ja katused valmivad järgmisena.
:::

## Sammud

1. Klõpsa jaotises **Ava fail või kaust** või alglehel {{ui:Uus hoone}}.
2. Sisesta **Hoone nimi**.
3. Vali, mitu **Tasandit** hoonel on (1 kuni 200).
4. Sisesta **Tasandi kõrgus**, põrandast põrandani: näiteks `10'-0"`, `10'6"` või `3000 mm`. Lihtne arv on USA-s jalgades, mujal millimeetrites.
5. Klõpsa {{ui:Loo}}. Tasandid paigutatakse alates 0-st, igaüks ühe tasandi kõrgusega eelmisest kõrgemal, ja nimetatakse Tasand 1, Tasand 2 jne. Need näidatakse mudelipuus ning Tasandi 1 plaan avaneb 3D-vaate kõrval, {{ui:Joonista}} sisse lülitatud.
6. Joonista seinad: vaata [Seinte joonistamine](topic:draw-walls). Tasandite ümbernimetamine ja kõrguse muutmine käib paneelis **Tasandid**.
7. Paiguta esemed: vaata [Seadmete ja mööbli paigutamine raamatukogust](topic:place-from-library). Paigutusriba loetleb kõik tasandid.
8. Klõpsa {{ui:Salvesta IFC-na}}. Fail saab nime hoone järgi, näiteks `Smith's house.ifc`.

## Hea teada

- Mudel salvestatakse millimeetrites, IFC4-na. Teised BIM-programmid avavad selle.
- **{{ui:Korrused}}** vasakul paneelis loetleb ainult tasandeid, millel on midagi. Mudelipuu loetleb need kõik.
- Kuni salvestad, loetakse uut hoonet salvestamata tööks. BimCraft küsib enne, kui avad teise faili või lahkud, ning hoiab koopiat selles brauseris juhuks, kui vahekaart sulgub.
