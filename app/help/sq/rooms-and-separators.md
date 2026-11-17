---
title: Dhomat dhe ndarësit e dhomave
summary: Zgjidh një dhomë për ta emërtuar dhe numëruar, dhe lexo sipërfaqen, perimetrin dhe vëllimin e saj. Vizato një ndarës dhome aty ku dy dhoma takohen pa mur ndërmjet.
keywords: dhomë, dhoma, ndarës dhome, vijë ndarëse, hapësirë, IfcSpace, emër, numër, sipërfaqe, perimetër, vëllim, plan i hapur, ndaj një dhomë, kuzhinë dhe dhomë ndenjjeje, e pambyllur
from: d4c1d66b
---

## Çfarë do të bësh

Emërto dhomat që krijojnë muret, dhe ndaj një dhomë të hapur në dy pa mur.

## Ku janë mjetet

- Paraqitjet me shirit: {{ui:Arkitekturë}} › **Dhoma & sipërfaqja** › {{ui:Dhoma}} dhe {{ui:Ndarës dhome}}.
- Paraqitja klasike: shiriti Vizato › menuja {{ui:Dhomat}}.
- Çdo stil menuje: komandat quhen Room dhe Room Separator; paleta e komandave i gjen.

## Hapat

1. Vizato muret. Çdo lak i mbyllur muresh është tashmë një dhomë: BimCraft e bën, e numëron dhe i jep sipërfaqen e vet ndërsa vizaton.
2. Zgjidh {{ui:Dhoma}}. Lëviz mbi planimetri: dhoma nën tregues ndizet me sipërfaqen, perimetrin dhe vëllimin e vet.
3. Për të emërtuar dhomat shpejt, shkruaj një {{ui:Emri}} dhe një {{ui:Numri}} në rresht më parë, pastaj kliko në dhomë. Numri shkon përpara me një për dhomën tjetër (101, 102; A-09, A-10).
4. Ose thjesht kliko një dhomë: zgjidhet, dhe Vetitë ka emrin, numrin, sipërfaqen, perimetrin, vëllimin dhe etiketën e saj.
5. Për të ndarë një dhomë të hapur, zgjidh {{ui:Ndarës dhome}} dhe kliko dy pika: mur me mur, ose mur me një ndarës tjetër. Vazhdo të klikosh për një zinxhir; Enter, Esc ose një dyklikim e mbyll.

## Çfarë bën një ndarës

- Kufizon dhomat si një mur pa trashësi. Sipërfaqet e dy dhomave mblidhen saktësisht në dhomën që ishin.
- Dhoma që mban mesin e vjetër të dhomës e mban emrin dhe numrin e saj. Tjetra është e re.
- Një ndarës që ndalon hapur, pa prekur asgjë në njërin skaj, nuk ndan asgjë. Zgjate dhe do ta bëjë.
- Pjesa e një ndarësi që shtrihet brenda një muri injorohet, kështu që mund të kapesh te vijat qendrore të murit.
- Zgjidh një ndarës dhe shtyp Delete për ta hequr: dy dhomat bëhen përsëri një. Zhbëj e kthen.

## Nëse nuk ka dhomë aty ku klikon

Vija e statusit e thotë: muret nuk mbyllen aty. Mbyll boshllëkun, ose vizato një ndarës përtej tij. Asgjë nuk refuzohet; thjesht nuk ka ende një dhomë të mbyllur.

## Në IFC

Një dhomë është një IfcSpace me numrin e saj (Name), emrin (LongName) dhe Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Vëllimi është sipërfaqja shumëzuar me lartësinë deri në nivelin e sipërm.

Një ndarës dhome është një IfcVirtualElement, entiteti që IFC ka për një kufi që nuk është ndërtuar. Ka një vijë dhe pa trup, kështu që një program tjetër nuk lexon mur dhe nuk numëron asgjë për të.

## Nuk është bërë ende

- Ndarës të lakuar.
- Një dhomë që ndjek një tavan të pjerrët: vëllimi është gjithmonë sipërfaqja shumëzuar me lartësinë e nivelit.
- Lidhjet e kufirit të hapësirës (IfcRelSpaceBoundary) nuk shkruhen, as për muret as për ndarësit.

Shiko edhe [Etiketat e dhomave dhe të sipërfaqeve](topic:room-and-area-tags), [Sipërfaqet dhe kufijtë e sipërfaqeve](topic:areas-and-area-boundaries).
