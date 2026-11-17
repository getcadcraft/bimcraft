---
title: Povežite druge modele za usklajevanje
summary: Prikažite drug model IFC poleg svojega s sklicem (nikoli zlit), ga postavite po skupnih koordinatah, kartnih koordinatah ali dveh točkah, se nanj privezujte med risanjem in ga znova naložite, ko se njegova datoteka spremeni.
keywords: povezava, povezani model, sklic, xref, usklajevanje, združevanje, konstrukcija, MEP, svetovalec, skupne koordinate, geodetski posnetek, kartne koordinate, znova naloži, sprosti, sklic na dokument, IfcDocumentReference
from: 3e0f1eab
---

## Kaj boste naredili

Risanje na modelu svetovalca (konstrukcija, instalacije, obstoječa stavba) brez kopiranja česar koli v vašo datoteko.

**Povezan model** je prikazan v 3D pogledu in prerezan na vaših tlorisih, nikoli pa ni spremenjen in nikoli shranjen v vaš model. Vaš model hrani samo povezavo: ime datoteke in kam gre.

## Povežite model

1. V levi plošči, v razdelku {{ui:Povezani modeli}}, kliknite {{ui:Poveži model …}} in izberite datoteko IFC. Prikaže se takoj, njena vrstica pa pravi **Prikazano**.
2. Izberite, kam gre v {{ui:Postavitev}}:
   - **Skupne koordinate** (za začetek): njene koordinate so vaše, kot da sta oba modela zakoličena iz istega izhodišča.
   - **Kartne koordinate**: kartne koordinate obeh datotek ju poravnajo (obe potrebujeta pretvorbo v karto; BimCraft to pove, če je ena nima).
   - **Po dveh točkah …**: kliknite točko na povezanem modelu, nato, kam gre v vašem; nato še en par. Povezava se premakne in zasuka (okoli navpične osi), da se prilega.
3. Vsaka sprememba povezave in postavitve je en korak: {{key:Mod+Z}} jo razveljavi.

## Delo s povezavo

- Tlorisi prikazujejo povezani model, prerezan na višini reza etaže, kot tanke črte; orodje {{ui:Zid}} in druga orodja za risanje se privezujejo na njegova oglišča in robove.
- Izberite njegove elemente v 3D pogledu, da preberete njihove lastnosti; povezani model ni tisti, ki ga urejate, zato je njegov izbirni gumb v {{ui:Modeli}} izklopljen.
- **Se je datoteka spremenila?** Kadar brskalnik lahko spremlja datoteko (datoteka, odprta prek njenega izbiralnika datotek, ali v Studiu), BimCraft povezavo sam znova naloži nekaj sekund po ponovnem shranjevanju datoteke in to pove. Sicer kliknite {{ui:Znova naloži}}.
- {{ui:Sprosti}} ga skrije in sprosti pomnilnik; povezava ostane v vašem modelu. {{ui:Naloži …}} ga spet prikaže (izberete datoteko: brskalnik ne more sam odpreti datoteke po imenu).
- × odstrani povezavo iz vašega modela.

## Kaj bi morali videti

- V vaši datoteki IFC: IfcDocumentReference za vsako povezavo (ime datoteke), povezan s projektom, in kam gre v naboru lastnosti projekta CadCraft_Links. Ko znova odprete model, njegove povezave navedejo **Ni naloženo**, dokler jih ne naložite.

:::note
Preverjanja kolizij, Primerjava in Iskanje lahko uporabijo naloženo povezavo kot kateri koli drug odprt model: glejte [Skupaj si oglejte več modelov IFC](topic:several-models).
:::
