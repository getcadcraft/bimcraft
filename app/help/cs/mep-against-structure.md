---
title: Kontrola potrubí a vzduchovodů vůči konstrukci
summary: Spusťte připravené sady kolizí potrubí a vzduchovodů vůči stěnám, deskám, trámům a sloupům, najděte trasy blíž ke konstrukci, než je jejich izolace a vůle, a vypište prostupy, které trasy potřebují stěnami a deskami, jako CSV a BCF.
keywords: mep, kolize, kontrola kolizí, koordinace, konstrukce, stěny, desky, trámy, sloupy, vůle, měkká kolize, izolace, mezera, prostup, prostupy, průchod, chránička, jádro, stavební práce, bcf, csv
from: 2d597f01
---

## Co provedete

Ujistěte se, že instalace zapadají do budovy: co zasahuje do konstrukce, co prochází příliš blízko ní a kde je třeba ve stěnách a deskách udělat otvory. Otevřete {{ui:Kontrola kolizí}} v levém panelu; sekce **Potrubí a vzduchovody vůči konstrukci** je pod obvyklou kontrolou.

## Tvrdé kolize

Dva seznamy sad nyní nabízejí také **Potrubí a vzduchovody**, **Stěny**, **Desky a střechy**, **Trámy**, **Sloupy** a **Konstrukce** (všechny čtyři), s počtem prvků v každém. Klikněte na {{ui:Potrubí a vzduchovody × konstrukce}}, čímž vyberete první a poslední a spustíte kontrolu; nebo vyberte libovolnou dvojici sami a klikněte na {{ui:Spustit}}. Viz [Kontrola kolizí](topic:clash-check).

## Vůle

Některé instalace potřebují prostor kolem sebe: svou izolaci a místo na práci nebo pro chráničku.

1. Zadejte u trasy potrubí nebo vzduchovodu tloušťku **Izolace** ve Vlastnostech (nic se pro ni nekreslí).
2. Do Kontroly kolizí zadejte **Mezeru kolem potrubí a vzduchovodů** (mm).
3. Klikněte na {{ui:Zkontrolovat vůle}}: každá část blíž ke stěně, desce, trámu nebo sloupu, než je její izolace plus mezera, se vypíše se vzdáleností, kterou má, a vzdáleností, kterou chce. Kliknutím na řádek zobrazíte obě.

Část, která prochází stěnou nebo deskou, je prostup, ne vůle, a je uvedena právě tam.

## Potřebné prostupy

Klikněte na {{ui:Potřebné prostupy}}. Tam, kde osa trasy prochází stěnou nebo deskou, BimCraft vypíše prostup, který potřebuje: kulatý u kruhového potrubí nebo vzduchovodu, jinak obdélníkový, tak velký jako vnější rozměr trasy plus dvojnásobek její izolace plus dvojnásobek mezery, se středem tam, kde trasa prochází. Kliknutím na řádek zobrazíte trasu a stěnu nebo desku.

- {{ui:Prostupy jako CSV}}: jeden řádek na prostup s trasou, její velikostí a izolací, velikostí prostupu, prvkem, kterým prochází, a jeho GlobalId, podlažím, souřadnicemi středu X, Y a Z a tím, jak hluboko trasa prvkem prochází.
- {{ui:Prostupy jako problémy BCF}}: jeden problém na prostup, s kamerou, která na něj míří, a vybranou trasou a prvkem, pro program statika.

:::note
Nic se neřeže: prostupy jsou seznam pro ty, kdo je dimenzují. Mezeru zadáváte vy; žádný předpis neříká, jak velký prostup musí být. Trámy a sloupy jsou kolize, ne prostupy: zda může potrubí procházet jedním z nich, rozhoduje statik.
:::
