---
title: "Sjálfgefnar stefnur: ákveðið hverju nýtt bygging byrjar með"
summary: Segðu einu sinni hvaða veggtegund, kótar, fyrsta blað, LOD-merki, einingar og verkfæri nýtt bygging byrjar með, fyrir mæligildi og enska verkefni, og deildu stefnunum innan skrifstofunnar sem lítilli skrá.
keywords: sjálfgefið, sjálfgefnar stefnur, stefna, skrifstofustaðall, skrifstofusjálfgefin gildi, sniðmát, ný bygging, fyrsta veggtegund, mæligildi veggur, múrverk, LOD, þróunarstig, fyrsta blað, pappír, mælikvarði, kótar, hæð kóta, heiti kóta, veggverkfæri, einingar, deila, flytja út, flytja inn, json
from: 42379aa5
---

## Hvað þú gerir

Segðu BimCraft með hverju nýtt bygging á að byrja, svo enginn á skrifstofunni þurfi að breyta sömu hlutunum í hvert sinn. Þetta er viðbót: hún er óvirk þar til þú kveikir á henni, og stefna sem þú stillir ekki skilur sjálfgefið gildi BimCraft eftir óbreytt.

:::note
Þetta eru sjálfgefin gildi fyrir **nýjar** byggingar og **nýja** hluti. Verkefni sem þú hefur þegar byrjað á breytist ekki.
:::

## Skref

1. Opnaðu Stillingar, farðu í {{ui:Viðbætur}} og kveiktu á **Sjálfgefnar stefnur**.
2. Í Stillingum skaltu opna flipann **BimCraft** og velja **Sjálfgefnar stefnur** í listanum til vinstri.
3. Stilltu þær stefnur sem þú vilt. Hver þeirra byrjar á **gildi BimCraft**, með því sem það er innan sviga. Stefna með reitunum **Mæligildi** og **Enskt** tekur eitt gildi fyrir hverja tegund verkefnis; fylltu aðeins inn þær sem þú þarft.
4. Það er enginn Vista-hnappur: hver breyting er vistuð um leið og þú gerir hana. Gildi sem ekki er hægt að nota er hafnað með orðum og það gamla helst.
5. Smelltu á {{ui:Ný bygging}}. Glugginn er fylltur út úr stefnunum þínum, og hvert gildi sem stefna setur er merkt **úr Sjálfgefnum stefnum þínum** við hliðina á sér. Þú getur enn breytt hverju þeirra áður en þú smellir á {{ui:Búa til}}.

## Stefnurnar

- **Einingar nýrrar byggingar**: einingarnar skipta yfir í þetta þegar smellt er á Búa til.
- **Fjöldi kóta**, **Heiti kóta** og **Hæð kóta**. Í heiti telur `{n}` 1, 2, 3; `{n0}` telur 0, 1, 2; `{nn}` og `{nn0}` gera það sama með tveimur tölustöfum. Þannig gefur `Hæð {nn0}` Hæð 00, Hæð 01, Hæð 02.
- **Fyrsta veggtegund**: það sem veggverkfærið teiknar fyrst. Mæligildis-skrifstofa getur byrjað á Exterior masonry 300 mm á meðan enskir verkefnir halda sér við Exterior 2×6.
- **LOD-merki á upphafsveggtegundunum**: þróunarstigið (LOD 100 til 500) sem níu upphafsgerðirnar sýna alls staðar þar sem gerð er skráð. Sjá [Byggja veggjasamsetningar](topic:wall-assemblies).
- **LOD nýrrar veggtegundar**: merkið sem nýja gerðin byrjar með í gerðaritlinum. Þú getur breytt því þar.
- **Fyrsta blað**: pappír þess, mælikvarði, blaðnúmer og heiti (notaðu `{level}` fyrir heiti lægsta kótans), eða enginn fyrsta blað.
- **Stærðir athugasemda á pappír** (Stillingar › Almennt › Sjálfgefnar stefnur): hæðir skrifstofunnar, í millimetrum eins og þær eru prentaðar, fyrir athugasemdir, málsetningartexta, merki, heiti rýma, stafi í ásbólum, titla sýna og texta í listum. Ný bygging tekur þær við Búa til og geymir þær í skránni sinni. Sjá [Teikna í fullri stærð, skrifa athugasemdir eftir mælikvarða](topic:annotation-sizes).
- **Verkfæri sem er virkt eftir Búa til**: Velja, eins og BimCraft gerir sjálfkrafa, eða Veggur, þannig að fyrstu tveir smellirnir á grunnmyndinni teikna þegar vegg.

## Útlit lista: skrifstofustaðallinn

Undir **Stillingar › Almennt › Sjálfgefnar stefnur**, undir **Útlit lista (skrifstofustaðallinn)**, stillirðu hvernig hver listi er flokkaður, hvort hann hafi milliútreikninga og samtölu, titil sinn og stafagerð dálkahausa. Sérhver listi sem tilgreinir ekki sitt eigið tekur þessi gildi, sama hver setti hann upp. Sjá [Útlit, vistun og útflutningur lista](topic:schedule-layouts).

## Deildu þeim innan skrifstofunnar

1. Í Stillingum skaltu opna flipann **Almennt** og velja **Sjálfgefnar stefnur**.
2. Skrifaðu **Heiti skrifstofu** ef þú vilt. Það er skrifað í skrána.
3. Smelltu á {{ui:Vista í skrá}}. Þú færð litla skrá sem endar á `.ccdefaults.json`.
4. Á annarri tölvu kveikirðu á viðbótinni, opnar sama stað og smellir á {{ui:Hlaða inn úr skrá}}. Stefnur skráarinnar koma í stað þeirra sem eru á þeirri tölvu.

Flipinn Almennt hefur líka **Einingakerfi nýs verkefnis**, sem gildir fyrir hvert forrit sem hefur viðbótina, og {{ui:Endurstilla allar stefnur}}. {{ui:Endurstilla í sjálfgefið hjá BimCraft}} á flipanum BimCraft hreinsar aðeins þær stefnur BimCraft.

## Gott að vita

- Skráin er venjulegur, opinn JSON: listi yfir heiti stefna og gildi. Stefna sem skráin nefnir og þessi útgáfa þekkir ekki er skilin eftir og nefnd í skilaboðunum; hitt hleðst áfram.
- Stefnur eru geymdar í þessum vafra, fyrir hvert CadCraft-forrit á þessari tölvu. Þær eru ekki geymdar í byggingarskránni og þær eru ekki samstilltar milli tölva: notaðu skrána.
- LOD-merkið á upphafsgerð kemur úr stefnunni á þessari tölvu. Gerð sem þú býrð til sem afrit af upphafsgerð ber merki sitt í byggingarskránni.
- BimCraft hefur enga nákvæmnisstillingu, þannig að það er engin nákvæmnisstefna hér.
- Bygging sem er byrjuð úr sniðmáti tekur kóta og blöð sniðmátsins. Veggtegundarstefnan og einingastefnan gilda enn.
- Slökktu á viðbótinni og allt verður aftur sjálfgefið hjá BimCraft. Stefnurnar þínar eru geymdar til að nota þegar þú kveikir aftur á henni.
