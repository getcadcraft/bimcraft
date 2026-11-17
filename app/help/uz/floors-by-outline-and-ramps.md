---
title: Istalgan shakldagi pollar, teshiklar va pandus
summary: Polni yoki plitani kontur boʻyicha chizing (balkon, konsol, maydoncha), unda teshiklar kesing va maydonchalari bilan pandus chizing.
keywords: pol, plita, kontur, balkon, konsol, maydoncha, terrasa, pol teshigi, teshik, shaxta, boʻshliq, pandus, qiyalik, nogironlar aravachasi pandusi, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Nima qilasiz

Xonalarga bogʻliq boʻlmagan pollar yarating, masalan devorlardan tashqaridagi balkon, va qavatlar orasida pandus chizing.

## Kontur boʻyicha pol chizish

1. {{ui:Chizish}} ni yoqing, qavatni tanlang, soʻng {{ui:Yigʻilish}} › {{ui:Kontur boʻyicha pol}}.
2. Asboblar ostidagi qatorda koʻrinishni (beton plita yoki yogʻoch pol), uning ishlatilishini (pol yoki maydoncha), qalinligini va yuqori tekisligi qavatdan qanchaga koʻtarilganini tanlang (0 = qavat sathi bilan teng; manfiy qiymat uni pastroq qoʻyadi).
3. Burchaklarni bosing. Asbob devorlar, toʻr chiziqlari va ularning kesishmalariga tutiladi; tomonni toʻgʻri saqlash uchun {{key:Shift}} ni bosib turing. Har bir tomonning uzunligi va maydoni chizish jarayonida koʻrinadi. {{key:Backspace}} oxirgi burchakni bekor qiladi.
4. Birinchi burchakni yana bosing, ikki marta bosing yoki {{key:Enter}} ni bosib tugating.

## Teshik kesish

Polni bosing (3D koʻrinishda yoki rejada uning konturi), soʻng **Xossalar** da {{ui:Teshik qoʻshish}} ni bosing va pol ichida teshik burchaklarini bosing, yuqoridagidek tugating. Polning **Xossalar** roʻyxatida uning teshiklari, har biri {{ui:Oʻchirish}} bilan, shuningdek ularsiz maydoni koʻrsatiladi.

## Pandus chizish

1. {{ui:Yigʻilish}} › {{ui:Pandus}} ni tanlang. Kengligini belgilang va u **yuqoridagi qavatgacha** yoki siz kiritgan **koʻtarilish boʻyicha** boʻlishini tanlang.
2. Qanday sozlanishini tanlang: **qiyalik boʻyicha** (boshida 1:12; pandus koʻtarilish talab qilgancha uzun boʻladi) yoki **uzunlik boʻyicha** (ikkinchi bosishingiz uzunlikni belgilaydi, qiyalik unga mos boʻladi).
3. Pandus tagiga bosing (pastki chetining oʻrtasi), soʻng yuqoriga yoʻnalishga bosing. Oldindan koʻrish uning uzunligi, boʻlaklari va qiyaligini koʻrsatadi.

30 dyuymdan (760 mm) baland koʻtarilish boʻlaklarga boʻlinadi va ular orasiga 5 futlik (1525 mm) maydoncha qoʻyiladi. Bular umumiy rejalashtirish qiymatlari, sizning qurilish normangiz emas: qurayotgan joyingizdagi qoidalarni tekshiring. 1:12 dan tik pandus uning **Xossalar** da belgilanadi.

## Nimani koʻrishingiz kerak

- Har bir pol, teshik va pandus bitta qadam: {{key:Mod+Z}} uni bekor qiladi.
- Rejada chizilgan pol konturi (teshik kesilgan koʻrinishda), pandus konturi, boʻlaklari, maydonchalari va qiyaligi bilan yuqoriga oʻq.
- Chizilgan pol (koʻrinishi, ishlatilishi, qalinligi, yuqori tekisligi, maydoni, teshiklari) va pandus (kengligi, yuqori tekisligi, koʻtarilishi, qiyaligi yoki uzunligi) uchun **Xossalar**; {{key:Delete}} ularning ikkalasini ham oʻchiradi.
- Yuqoridagi qavatgacha boʻlgan pandus, uning balandligi oʻzgarganda shu qavatga ergashadi.
- IFC faylida: chizilgan pol IfcSlab (pol yoki maydoncha) boʻlib, teshiklari IfcOpeningElement sifatida kesilgan; pandus esa qiyalik boʻlaklari (IfcRampFlight) va maydoncha plitalaridan tuzilgan IfcRamp boʻlib, uning qiyaligi va kengligi bilan.

:::note
Shu usulda chizilgan pollar chizgan joyingizda qoladi. {{ui:Pol}} bilan yasalgan pollar devorlar siljiganda xonalarga ergashadi: qarang [Xonalar, pollar, shiftlar va tomlar](topic:floors-and-roofs).
:::
