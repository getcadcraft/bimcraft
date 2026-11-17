---
title: .pln va .pla loyiha fayllarini ochish
summary: BimCraft bugun .pln, .pla, .tpl va .bpn fayllari bilan nima qilishi va modellar hamda chizmalar bu yerda ochilishi uchun ulardan IFC va DWG qanday eksport qilinishi.
keywords: pln, pla, tpl, bpn, loyiha fayli, arxiv, shablon, zaxira nusxa, ifc eksport, dwg eksport, tarjimon, zonalar, maketlar
from: 41fb921d
---

## Nima qilasiz

Loyihani `.pln` (loyiha), `.pla` (kutubxonasi bilan arxiv), `.tpl` (shablon) yoki `.bpn` (zaxira nusxa) sifatida saqlangan holda BimCraftga olish. Bular Archicadning oʻz fayllari.

## Bugun nima ochiladi

- **Loyiha fayllarining oʻzi hali ochilmaydi.** Ularning formati nashr etilmagan va BimCraft uni hali oʻqimaydi. Bunday faylni ochganingizda BimCraft buni aytadi va sizni shu yerga yoʻllaydi.
- **BimCraft faylning birinchi baytlarini tekshiradi.** 17-versiyadan boshlab Archicad loyihalari bir xil qisqa imzo bilan boshlanadi, shuning uchun BimCraft fayl Archicad loyihasi ekanligini aniq ayta oladi. Archicad nomi bor, lekin shunday boshlanmagan fayl ehtimol nomi oʻzgartirilgan, buzilgan yoki eskiroq versiyadan. Imzo loyiha, arxiv va shablonni bir-biridan ajratmaydi.
- **IFC eksport toʻliq ochiladi**: model 3D da, qavatlar, zonalar boʻshliq sifatida, element maʼlumotlari, xossalar toʻplamlari va tasniflar, barcha BimCraft vositalari bilan.
- **DWG eksport ochiladi** 2D koʻrinishda, qatlamlari va maketlari bilan, hamda {{ui:3D}} da. Tahrirlash uchun {{ui:CadCraft ichida tahrirlash}} dan foydalaning.

Yoki loyihaning hammasini koʻrinishlari, maketlari va xossalar guruhlari bilan bitta zip sifatida olib keling: [Loyiha toʻplamini ochish](topic:open-project-bundle) boʻlimiga qarang.

## IFC eksport (model)

1. Loyihani Archicadda oching.
2. **File > Save As** ni tanlang va fayl turi sifatida **IFC** ni tanlang.
3. IFC tarjimonini tanlang (Archicadning IFC eksport sozlamalari toʻplamiga bergan nomi). **IFC4 Reference View** yoki **IFC2X3 Coordination View 2.0** BimCraft uchun mos keladi. IFC4X3 ham ochiladi.
4. Nimani eksport qilishni tanlang: butun loyihani yoki faqat siz koʻrayotgan qavatlarda koʻrinadigan elementlarni.
5. Saqlang, soʻng BimCraftda {{ui:Fayl tanlash}} tugmasini bosing va `.ifc` faylni tanlang.

Eksportdan oldin tarjimon sozlamalarida tekshiring:

- **Zonalar**: ularni eksport qiling, shunda xonalar boʻshliq sifatida keladi. Ularni koʻrish uchun BimCraftda {{ui:Boʻshliqlar}} tugmasini bosing.
- **Xossalar va tasniflar**: ularni eksport qiling, shunda ular {{ui:Xossalar}} da koʻrinadi va {{ui:Qidirish}}, {{ui:Rang}} hamda {{ui:Miqdorlar yigʻindisi}} da ishlatilishi mumkin.
- **Oddiy `.ifc`**, `.ifczip` yoki `.ifcxml` emas. BimCraft faqat oddiy `.ifc` ni ochadi.

## DWG eksport (chizmalar)

1. Kerakli rejani, kesimni yoki maketni oching.
2. **File > Save As** ni tanlang va fayl turi sifatida **DWG** ni tanlang.
3. DXF-DWG tarjimonini tanlang va saqlang.
4. Varaqlar toʻplami uchun maketlarni Layout Book dan saqlang yoki ularni DWG sifatida nashr eting.
5. `.dwg` ni BimCraftda oching. Eksport bilan bogʻlangan chizmalar bir jildda boʻlsa, ular bilan birga ochiladi; qarang: [Bogʻlangan chizmalar va rasmlar](topic:dwg-linked-files).

## Muammolarni bartaraf etish

- **"… Archicad loyihasi: uning birinchi baytlari shuni aytadi."** Yuqoridagidek IFC yoki DWG eksport qiling va oʻsha faylni oching.
- **"… Archicad fayli kabi nomlangan, lekin shunday boshlanmaydi."** Fayl qayerdan kelganini tekshiring: u yangi nom bilan boshqa turdagi fayl boʻlishi mumkin (uni haqiqiy kengaytmasi bilan ochib koʻring), tugallanmagan nusxa yoki 17-versiyadan oldingi loyiha. Iloji boʻlsa, uni Archicadda oching, soʻng IFC yoki DWG eksport qiling.
- **Model xonalarsiz ochiladi.** Zonalar eksport qilinmagan. Ularni IFC tarjimonida yoqing va qayta eksport qiling.
- **Teshiklar kesilmagan.** BimCraft buni {{ui:Fayl}} panelida **Hali chizilmagan** boʻlimida aytadi. Qayta eksport qiling; agar shunday qolsa, modelni uni yaratgan dasturda oching va teshiklarni shu yerda tekshiring.
- **DWG dagi matn boshqacha koʻrinadi.** Eksport BimCraftda boʻlmagan shriftlarni saqlab qolishi mumkin; BimCraft matnni oddiy sans-serif shriftda chizadi.

Shuningdek qarang: [Loyiha faylini IFC orqali 3D ga olish](topic:rvt-to-ifc) va [BimCraft har bir formatdan nimani oʻqishi](topic:file-formats).
