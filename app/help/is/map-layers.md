---
title: Kort á jörðinni undir líkaninu
summary: Leggðu götukort eða loftmynd á jörðina undir landfræðilega tengdu IFC-líkani, úr kortaflísum, kortaþjónustum eða mynd með heimsskrá.
keywords: kort, kortalög, grunnkort, loftmynd, gervihnöttur, lóð, jörð, flísar, xyz, wms, wmts, kortaþjónusta, heimsskrá, landfræðileg tilvísun, ifcmapconversion, varpað CRS, epsg, samhengi lóðar
from: 84e2e9df
---

## Hvað þú gerir

Sjáðu líkanið á sínum stað: götukort eða loftmynd lóðarinnar á jörðinni undir því.

## Skref

1. Opnaðu IFC-líkan sem geymir stað sinn á korti (kortaumbreytingu, IfcMapConversion, með varpað hnitakerfi). Útflytjendur skrifa hana þegar hnit verkefnisins (mælipunktur, sameiginleg hnit) eru stillt.
2. Veldu {{ui:Sýna}} › {{ui:Kortalög…}}. Glugginn segir kerfi líkansins, til dæmis EPSG:28356. Líkan án kortaumbreytingar getur ekki haft kortalög, og glugginn segir það.
3. Kveiktu á {{ui:Kortalög af netinu}}. Þangað til er ekki beðið um neitt frá neinum þjóni. Þegar það er kveikt sjá þeir þjónar sem þú bætir við svæðið umhverfis líkanið og IP-tölu þína, aldrei líkanið þitt.
4. Í {{ui:Bæta við lagi}} veldu flísar (vistfang með `{z}`, `{x}` og `{y}`), WMS, WMTS eða ArcGIS þjónustu ({{ui:Sækja lög}}, síðan veldu eitt) eða mynd með heimsskrá sinni.
5. Lokaðu glugganum. Kortið liggur á jörðinni rétt undir lægsta punkti líkansins, yfir grunnfleti líkansins og jafn langt út fyrir hann allan hringinn.

:::note
Kortið er aðeins á skjánum; það er ekki vistað í IFC-skránni. Listi laganna er geymdur í þessum vafra. Notaðu aðeins kortaþjónustur sem skilmálar þeirra leyfa.
:::
