---
title: Mga kalapit na gusali at parcel mula sa CivilCraft
summary: Kunin ang mga gusali at parcel na natagpuan ng Address to site ng CivilCraft sa paligid ng isang address bilang mga mungkahi, at idagdag ang mga tinsekan mo.
keywords: site, address, parcel, kapitbahay, context, civilcraft, ccsite, mga gusali, outline ng site, mungkahi
from: 3be9407b
---

## Ano ang ginagawa nito

Sa CivilCraft, Surface › More › Address to site ay naghahanap ng mga gusali, parcel, zoning, flood zone at lupa sa paligid ng isang address mula sa open data. Dinadala ito ng button na "Send to BimCraft as suggestions" (o "Save the site as a file", saka buksan ang `.ccsite.json` dito) sa BimCraft. Walang idinadagdag hangga't hindi mo sinasabi.

## Paano gamitin

1. Magsimula o magbukas ng model. Nasa origin ng level na kinaroroonan mo ang address point.
2. May kahon na naglilista ng bawat kalapit na gusali at ng parcel na may checkbox. Alisan ng tsek ang ayaw mo.
3. Ang mga gusaling hindi ibinigay ng source ang taas ay gumagamit ng taas na tinype sa itaas ng kahon. Ang gusaling bilang ng level lamang ang ibinigay ay binibilang na 3 m bawat level, at sinasabi iyon ng kahon.
4. Pindutin ang "Add the ticked ones". Magiging mga pader ang mga gusali sa paligid ng kanilang footprint, kasing-taas ng nakalista, sa isang undo step. Magiging outline ng site ang parcel, bilang pangalawang undo step.

Nakalista ang zoning, flood zone at lupa para sa impormasyon lamang; hindi sila iginuguhit.

## Dapat malaman

- Kasing-tumpak lamang ng open data ang mga outline: malaki ang pagkakaiba ng OpenStreetMap at county parcel layer sa iba't ibang lugar. Suriin ang mahalaga laban sa survey.
- Ang posisyon ay mga metro sa silangan at hilaga ng address point sa isang patag na approximation, tumpak sa ilang metro sa loob ng ilang kilometro.
- Dala ng data ang lisensya ng mga pinagmulan nito (ang OpenStreetMap ay ODbL); ipinapakita ng kahon ang linya ng pagkilala.
