---
title: Izindonga kusuka kumdwebo olandelwe
summary: Guqula ipulani ye-DWG noma i-DXF ibe yizindonga, izinmnyango nezifasiteli esigabeni, bese ugcina umdwebo ungaphansi kwepulani njengesibhekiselo.
keywords: dwg, dxf, landela, kulandelwe, ngenisa ipulani, guqula, i-cad kuya ku-bim, 2d kuya ku-3d, izindonga emigqeni, izendlalelo, amabhulokhi, izinmnyango kumabhulokhi, underlay, umdwebo wesibhekiselo, ingemuva, xref, uhlelo lokudweba
from: 3bf213f1
---

## Okuzokwenza

Sebenzisa ipulani owayidweba wena (noma omunye umuntu) ohlelweni lokudweba njengokuqala kwemodeli: imigqa yayo yodonga iba yizindonga, namabhulokhi emnyango nawo afeleyo abe yizinmnyango nezifasiteli.

## Izinyathelo

1. Vula {{ui:Draw}} bese ukhetha isigaba umdwebo oyibonisayo kuhlu lwezigaba zepulani.
2. Khetha {{ui:Build}} › {{ui:From a drawing…}}, bese {{ui:Choose a drawing…}} bese ukhetha i-DWG noma i-DXF.
3. Kuxoxo:
   - **Drawing units** zivela kumdwebo; khetha ezinye uma zingalungile (ipulani edwetshwe ngamafiti kodwa yafundwa njengamainshi incane ngamaphindwe ayishumi nambili).
   - **Layers with the walls**: phawula izendlalelo imigqa yodonga etholakala kuzo. Izendlalelo ezinamagama athi "wall" ziphawulwa ngawe.
   - **The lines are**: **both faces of each wall** (indlela ejwayelekile yokudweba amapulani: yonke ipheya yemigqa ehlanganayo ehlukaniswe ngama-600 mm ingaba udonga olulodwa olunobukhulu befanayo nebanga), **the walls' center lines** (imigqa yephakathi yezindonga), noma **one face** kanye nodonga ngakwesobunxele noma ngakwesokudla. Kuma-center lines noma ubuso obuyodwa, uhlobo lodonga lusetha ubukhulu.
   - **Wall type** kanye **Wall height**, njengakwethuluzi le-{{ui:Wall}}.
   - **Blocks**: khetha uhlobo lomnyango noma lefasitele kwelinye ibhulokhi ngalinye elingumnyango noma iwindi, noma uliyeke. Amabhulokhi amagama awo athi "door" noma "window" akhethelwe wena. Ngalinye libekwa kodongeni okuhlezi kulo, libanzi njengebhulokhi ngokuhamba kodonga; umnyango uvula ngakuhlangothi lapho umjikelo wawo udwetshwe khona.
   - **Where it goes**: ngokuxhumanisa komdwebo, noma ikhona layo elingaphansi kwesobunxele libekwe ku-origin yepulani.
   - **Keep the drawing under the plan of this level**: yishiye iphawulwe ukuze ubone umdwebo njengemigqa emincane ngaphansi kwalokho okwenzayo.
4. Umugqa ongaphansi kwezinketho utshela ukuthi izindonga, izinmnyango nezifasiteli zingaki ozozenza. Chofoza {{ui:Make them}}.

## Okufanele ukubone

- Izindonga, izinmnyango nezifasiteli esigabeni, zihlanganisiwe lapho zihlangana khona, nezindawo ezivalwe yizo; konke kuyisinyathelo esisodwa, ngakho {{key:Mod+Z}} iyasuthula.
- Umdwebo njengemigqa emincane ngaphansi kwepulani. {{ui:Build}} › {{ui:From a drawing…}} idla imidwebo egcinwe esigabeni, ngayinye no-{{ui:Remove}}; ukususa eyodwa kushiya izindonga.
- Kufayela le-IFC umdwebo ogciniwe uyisichazi esigabeni (imigqa yawo), ngakho nezinye izinhlelo ze-BIM ziyawubonisa.

:::note
I-PDF noma isikena nakho kuyasebenza: bheka [Izindonga kusuka kumasethi wamapulani](topic:walls-from-plans). Amajika ayashiywa (i-BimCraft idweba izindonga ezigobile), kanjalo imigqa ngaphakathi kwamabhulokhi. Imigqa engenayo iyeni ku-"both faces" ibalwa ngaphakathi kuxoxo futhi ishiywe ngaphandle: dweba lezo zindonga nethuluzi le-{{ui:Wall}}, noma uzilungise nge-{{ui:Modify}} › {{ui:Trim / extend}} (bheka [Trim, extend and join walls](topic:trim-extend-walls)).
:::

:::tip
Ulandele esikeni ohlelweni lokudweba? Vula nesikena lapha futhi uhlole izindonga ngaso: bheka [Model from a scan](topic:model-from-a-scan).
:::
