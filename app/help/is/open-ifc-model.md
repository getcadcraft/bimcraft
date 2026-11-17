---
title: Opnaðu IFC-líkan og skoðaðu það í 3D
summary: Opnaðu IFC-skrá, snúðu, hliðraðu og aðdráttu, og notaðu Passa, Ofan, Framan og Hlið til að átta þig.
keywords: ifc, 3d, snúningur, hliðrun, aðdráttur, passa, yfirsýn ofan, framsýn, hliðarsýn, leiðsögn, teningsýn, myndavél
from: 68b460dd
---

## Hvað þú gerir

Opnaðu IFC-líkan, farðu um það í 3D og farðu í staðlaðar sýnir. Um fimm mínútur.

Þú þarft `.ifc`-skrá. Flest BIM-forrit flytja út eina; í Revit er það **File > Export > IFC**. Sjá [Fáðu verkefnaskrá í 3D í gegnum IFC](topic:rvt-to-ifc).

## Skref

1. Smelltu á {{ui:Veldu skrá}} (eða svæðið með því að draga efst til vinstri).
2. Veldu `.ifc`-skrána þína og staðfestu.
3. Bíddu þar til stöðulínan klárast. Hún sýnir „Ræsi IFC-vélina…“ í fyrsta skipti, síðan „Les líkanið…“ og „Bý til rúmfræði: … af … hlutum“.
4. Skoðaðu líkanið: það opnast í þriggja fjórðu sýn, passað á skjáinn.
5. Smelltu á {{ui:Ofan}} á tækjastikunni fyrir ofan líkanið til að horfa beint niður.
6. Smelltu á {{ui:Framan}} til að horfa á framhliðina, og síðan á {{ui:Hlið}} til að horfa frá hliðinni.
7. Smelltu á {{ui:Passa}}, eða ýttu á {{key:F}}, til að fara aftur í þriggja fjórðu sýn af öllu líkaninu.

## Það sem þú ættir að sjá

- Líkanið í miðjunni, með þunnum dökkum jöðrum fyrir teikningarlegt útlit.
- Spjaldið {{ui:Skrá}} vinstra megin: skráarheitið, stærð, IFC-skema (til dæmis IFC2X3 eða IFC4), heiti verkefnis, áfanga, forritið sem það var flutt út úr, höfund, útflutningsdagsetningu, og fjölda hluta og þríhyrninga.
- Listana {{ui:Hæðir}} og {{ui:Hlutir}} fyrir neðan það.
- Stöðulínuna: „Opnað *skráarheiti*: *n* hlutir á *s* s“.

## Hreyfing um

:::mouse
| Til að | Gerðu þetta |
|---|---|
| Snúa | Dragðu með vinstri hnappi |
| Hliðra | Dragðu með hægri hnappi, eða haltu {{key:Shift}} (eða {{key:Mod}}) og dragðu með vinstri hnappi |
| Aðdráttur | Skrunaðu hjólinu, eða dragðu með miðhnappi |
| Sjá allt | Ýttu á {{key:F}} eða smelltu á {{ui:Passa}} |
:::

:::mac mouse
Á snertiborði: dragðu með einum fingri til að snúa; haltu {{key:Shift}} eða {{key:Mod}} og dragðu til að hliðra; skrunaðu með tveimur fingrum eða klíptu til að zooma. Smellur með tveimur fingrum er hægri smellur, og þú getur dregið með honum til að hliðra, en {{key:Shift}} og drag er auðveldara.
:::

:::touch
| Til að | Gerðu þetta |
|---|---|
| Snúa | Dragðu með einum fingri |
| Aðdráttur | Klíptu með tveimur fingrum |
| Hliðra | Færðu tvo fingur saman |
| Sjá allt | Pikkaðu á {{ui:Passa}} |
:::

Snúningur snýst alltaf um punkt í miðju líkansins. Hliðrun færir þann punkt, þannig að eftir langa hliðrun getur snúningurinn virst skakkur: smelltu á {{ui:Passa}} til að endurstilla hann.

## Skuggað, jaðrar eða vírlíkan

Þrír litlir hnappar rétt fyrir ofan teningsýnina velja hvernig líkanið er teiknað: {{ui:Skyggt}}, {{ui:Skyggt með brúnum}} (sjálfgefið) og {{ui:Vírlíkan}}. Þeir eru líka skipanir (Sýn í valmyndunum og í Sérsníða-listanum), þannig að þeir geta haft eigin lykla. {{ui:Grunnmynd}}, {{ui:Skipta}} og {{ui:3D}} eru í röðinni {{ui:Sýn}} á tækjastikunni.

## Algeng mistök

- **Að búast við nefndum sýnum.** BimCraft hefur fjórar fastar sýnir ({{ui:Passa}}, {{ui:Ofan}}, {{ui:Framan}}, {{ui:Hlið}}), teningsýnina neðst hægra megin og frjálsan snúning. Það vistar ekki sýnir.
- **Að leita að grunnmyndum og sniðum.** Það eru engar 2D-grunnmyndir eða sniðkassar í þessari útgáfu. Skerðu líkanið með einu {{ui:Snið}}-plani ([Skerðu IFC-líkan með sniðplani](topic:section-plane)), eða slökktu á hæðum: [Sýndu og feldu hæðir, rými og jaðra](topic:storeys-and-spaces).
- **Að opna verkefnaskrá og búast við 3D.** Verkefnaskrá opnast sem skráarkort. Fluttu fyrst út IFC.
- **Að opna `.ifczip`.** Afþjappaðu hana, eða fluttu út venjulega `.ifc`.
- **Mjög stórt líkan gerir flipann hægan eða hrynjandi.** Sjá [Vafrar, tæki og minni](topic:platforms).

## Næst

[Veldu hlut og lestu eiginleika hans](topic:inspect-element).
