---
title: Athugaðu líkan með tilliti til algengra vandamála
summary: Finndu hluti sem vantar eiginleika sem þú þarft, GlobalId sem eru notuð tvisvar, hluti sem eru á engri hæð og afrit sem liggja hvert ofan á öðru.
keywords: athuga, líkanathugun, staðfesting, gæðaeftirlit, gæði, vantar eiginleika, krafist, tvítekning, globalid, guid, hæð, staflað, skarast
from: 4d835513
---

## Hvað þú gerir

Fletta yfir líkanið áður en þú afhendir það: vandamálin sem brjóta áætlanir, magntölur og hugbúnað annarra.

## Skref

1. Opnaðu IFC-líkan.
2. Opnaðu {{ui:Líkanathuganir}} í vinstra spjaldinu.
3. Undir {{ui:Skyldueiginleikar}} er regla þegar til staðar (hvaða flokkur sem er, Name). Breyttu flokki hennar (eða {{ui:Hvaða flokkur sem er}}) og eiginleika, eða smelltu á {{ui:Bæta við eiginleika}} fyrir aðra reglu; x-ið fjarlægir eina. Hlutur stenst ekki reglu þegar eiginleikinn vantar eða er tómur. Reglurnar eru geymdar í þessum vafra fyrir öll líkön.
4. Smelltu á {{ui:Keyra athuganir}}.
5. Smelltu á niðurstöðu til að velja þá hluti og þysja að þeim.

## Það sem þú átt að sjá

- **Vantar skyldueiginleika**: hver regla ásamt hlutunum sem hafa ekkert gildi fyrir hana.
- **GlobalId notað tvisvar**: hlutir sem deila einu GlobalId. Annar hugbúnaður meðhöndlar þá sem einn hlut.
- **Á engri hæð**: hlutir með lögun sem engin hæð nær yfir.
- **Afrit ofan á hvort öðru**: hlutir af sama flokki og tegund, með sömu lögun á sama stað, sem eru talin tvisvar í magntölum.

Hver lína í niðurstöðunum er hnappur: smelltu á hana til að velja og þysja að þeim hlutum. Aðeins fyrstu 50 hópar hverrar athugunar eru taldir upp. Sömu niðurstöður birtast líka í {{ui:Vandamál}}.

## Gott að vita

- Athuganir skoða virka líkanið þegar nokkur eru opin. Sjá [Skoða nokkur IFC-líkön saman](topic:several-models).
- Eftir breytingu skaltu keyra athuganirnar aftur.
- Í spjaldinu {{ui:Vandamál}} fylgja lengdir, flatarmál og rúmmál í orðum vandamálsins þeim {{ui:Einingum}} sem valdar eru á tækjastikunni (hurð sem er „800 mm“ birtist sem 2'-7 1/2" í fetum og tommum); breyttu einingunni og spjaldið skrifar þau upp aftur.

## Næst

- [Yfirfara líkanið: herbergi, merki, LOD, árekstra og tengiflöt](topic:audit-the-model)
- [Finna hluti eftir flokki, nafni eða eiginleika](topic:find)
- [Eyða, klippa, afrita og líma hluti](topic:copy-paste)
