---
title: Ipadala ang isang elemento sa PartCraft at ibalik ito
summary: Pumili ng support, bracket, railing o kagamitan, idisenyo ito bilang part sa PartCraft kasama ang gusaling nakapalibot dito, at tanggapin ang bagong hugis pabalik sa model.
keywords: partcraft, part, ipadala, link, elemento, support, bracket, bakod, railing, kagamitan, disenyo, round trip, tanggapin, nabago, part links
from: 4ce2f449
---

## Ano ang gagawin mo

Idisenyo ang isang elemento ng gusali bilang part: ipadala ito sa PartCraft, baguhin doon (i-cut, magdagdag, mag-drill, baguhin ang laki), at ibalik ang bagong hugis sa model.

## Mga hakbang

1. Pumili ng isang elemento sa model: generic na elemento, kagamitan, column, beam, railing o muwebles.
2. Piliin ang {{ui:Part links}} sa toolbar, at pagkatapos ay {{ui:Send to PartCraft}}. Magbubukas ang PartCraft sa bagong tab na may elemento bilang part. Ang mga elementong nasa loob ng 3 m ay iginuguhit na kulay abo sa tabi nito para maidisenyo mo ito sa mismong lugar. Hindi ito mababago roon.
3. Baguhin ang part sa PartCraft. Sa PartCraft, piliin ang {{ui:File}} › {{ui:Export}} › I-save pabalik sa BimCraft. Maaari kang mag-save pabalik nang kasing dalas ng gusto mo.
4. Pabalik sa BimCraft, ang button na {{ui:Part links}} ay nagpapakita ng bilang, at nakalista ang elemento sa card bilang {{ui:Changed in PartCraft}} na may pagbabago sa laki at volume na nakasulat sa salita.
5. Piliin ang {{ui:Show}} para tingnan ito, pagkatapos ay {{ui:Accept}} para ibigay sa elemento ang bagong hugis, o {{ui:Keep mine}} para manatili ito gaya ng dati.

## Ano ang dapat mong makita

- Ang pagtanggap ay isang hakbang ng undo. Nananatili ang elemento sa puwesto nito, GlobalId, type, materyales at property. Ang body lamang nito ang napapalitan.
- Nakakakuha ang elemento ng property set na {{ui:CadCraft_PartLink}} na may link, status nito at revision.
- Binubuksan ng {{ui:Send again}} muli ang parehong elemento sa PartCraft, sa parehong link.

## Mga dapat malaman

- Ang mga pader, sahig, bubong, pinto, bintana, hagdan, ramp at space ay iginuguhit ng mga building tool mula sa isang outline at muling binubuo pagkatapos ng bawat pagbabago. Mabubura ang body mula sa ibang app, kaya tinatanggihan ang mga ito nang may dahilan.
- Ang hugis ay bumabalik bilang mesh (IFC tessellation), hindi bilang mga feature ng part. Nananatili ang kasaysayan ng part sa PartCraft.
- Kung nabago ang elemento sa model pagkatapos mo itong ipadala, sasabihin ito ng card bago ka tumanggap: papalitan ng pagtanggap ang mga pagbabagong iyon.
- Walang ina-upload. Ang dalawang app ay mga pahina ng iisang site at ipinapasa nila ang elemento sa isa't isa sa browser na ito. Kailangang parehong bukas sa iisang browser.
- Dapat maging solid ang elemento sa PartCraft. Tinatanggihan doon ang elementong may malalaking bukas na puwang, kasama ang bilang ng bukas na edge.
- Para tumanggap, gawing aktibo ang model na naglalaman ng elemento.
