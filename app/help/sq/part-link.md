---
title: Dërgo një element te PartCraft dhe merre mbrapsht
summary: Zgjidh një mbajtëse, mbështetëse, parmak ose pajisje, projekto si pjesë në PartCraft me ndërtesën përreth, dhe prano formën e re mbrapsht në model.
keywords: partcraft, pjesë, dërgo, lidhje, element, mbajtëse, mbështetëse, parmak, rrethim, pajisje, projekto, udhëtim i plotë, prano, ndryshuar, lidhje pjesësh
from: 4ce2f449
---

## Çfarë do të bëni

Projektoni një element të ndërtesës si pjesë: dërgojeni te PartCraft, ndryshojeni atje (prisni, shtoni, shponi, ndryshoni madhësinë), dhe silleni formën e re mbrapsht në model.

## Hapat

1. Zgjidhni një element në model: një element të përgjithshëm, pajisje, një kolonë, një tra, një parmak ose mobilje.
2. Zgjidhni {{ui:Lidhje pjesësh}} në shiritin e veglave, pastaj {{ui:Dërgo te PartCraft}}. PartCraft hapet në një skedë të re me elementin si pjesë. Elementët brenda 3 m vizatohen gri pranë tij, që ta projektoni në vend. Atje ata nuk mund të ndryshohen.
3. Ndryshoni pjesën në PartCraft. Në PartCraft zgjidhni {{ui:Skedari}} › {{ui:Eksporto}} › {{ui:Ruaj përsëri në BimCraft}}. Mund të ruani përsëri sa herë të doni.
4. Kthehuni në BimCraft: butoni {{ui:Lidhje pjesësh}} shfaq një numër, dhe kartela e liston elementin si {{ui:Ndryshuar në PartCraft}}, me ndryshimin e madhësisë dhe vëllimit me fjalë.
5. Zgjidhni {{ui:Shfaq}} për ta parë, pastaj {{ui:Prano}} për t'i dhënë elementit formën e re, ose {{ui:Mbaj timen}} për ta lënë siç ishte.

## Çfarë duhet të shihni

- Pranimi është një hap zhbërjeje. Elementi mban vendin, GlobalId, llojin, materialin dhe vetitë e tij. Vetëm trupi i tij zëvendësohet.
- Elementi merr një grup vetish {{ui:CadCraft_PartLink}} me lidhjen, statusin dhe revizionin.
- {{ui:Dërgo përsëri}} hap të njëjtin element në PartCraft përsëri, me të njëjtën lidhje.

## Mirë të dish

- Muret, dyshemetë, çatitë, dyert, dritaret, shkallët, rampat dhe hapësirat vizatohen nga veglat e ndërtimit nga një kontur dhe rindërtohen pas çdo ndryshimi. Një trup nga një aplikacion tjetër do të mbishkruhej, prandaj këto refuzohen me arsye.
- Forma kthehet si rrjetë (tessellim IFC), jo si veçoritë e pjesës. Historiku i pjesës mbetet në PartCraft.
- Nëse elementi ndryshoi në model pasi e dërguat, kartela e thotë këtë përpara se ta pranoni: pranimi zëvendëson ato ndryshime.
- Asgjë nuk ngarkohet. Të dy aplikacionet janë faqe të së njëjtës faqe interneti dhe e kalojnë elementin mes tyre në këtë shfletues. Të dyja duhet të jenë të hapura në të njëjtin shfletues.
- Elementi duhet të mbyllet në një trup të ngurtë në PartCraft. Një element me hapësira të mëdha të hapura refuzohet atje, me numrin e skajeve të hapura.
- Për ta pranuar, bëjeni aktiv modelin që e mban elementin.
