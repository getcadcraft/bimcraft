---
title: Sahnani boshqa dasturda ochish
summary: Sahnani USD yoki glTF fayl sifatida har qanday oʻqiydigan dastur uchun saqlang yoki Studio dan shu kompyuterdagi dasturda oching.
keywords: ochish, usd, gltf, glb, eksport, render dasturi, archviz, studio, usdview, yuborish, uzatish, paket, unreal jildi
from: 0a6559ee
---

{{ui:Render}} ning Dvigatellar roʻyxatidagi **… da ochish** yozuvlaridan birini tanlang, sahnani boshqa dasturga olib borish uchun. Modelga hech narsa qaytmaydi.

## Har qanday dastur uchun fayl

- **USD fayl** sahnani `.usdc` (yoki model rasmlarga ega boʻlsa `.usdz`) sifatida saqlaydi: [USD sifatida saqlash](topic:usd) bilan bir xil fayl, materiallar, chiroqlar va kameralar bilan. U instansiyalashni va aniq material qiymatlarini saqlaydi. Koʻpchilik renderlar, oʻyin dvigatellari va koʻrish dasturlari USD ni oʻqiydi.
- **glTF fayl (.glb)** materiallar, teksturalar va chiroqlari bilan yengilroq glTF 2.0 faylni saqlaydi; u nimani olib yurishi va nimani qoldirishi uchun [Modelni render dasturiga yuborish](topic:model-for-rendering) ga qarang.
- **Unreal loyiha jildi (.zip)** [Sahnani oʻyin dvigateliga yuborish](topic:render-unreal) yozadigan jildni istalgan kompyuterdagi loyiha uchun saqlaydi.

Uchalasi ham brauzerda va Studio da ishlaydi.

## Studio da: dasturda ochish

Studio shu kompyuterda sahnani ocha oladigan topilgan dasturlar roʻyxatini koʻrsatadi: qidiruv yoʻlingizda boʻlsa usdview, va fayl turi uchun kompyuterning oʻz dasturi. Birini tanlang, USD yoki glTF ni (ikkalasini oʻqiydigan joyda) tanlang va {{ui:Render}} ni bosing. Studio paketni Hujjatlar ichidagi yangi jildga yozadi (`CadCraft hand-off`; hech narsa qayta yozilmaydi, har bir yuborish oʻz jildiga ega) va dasturni oʻsha jildda ishga tushiradi, soʻng fayllar qayerdaligini aytadi.

| Dastur | Eng yaxshi oʻqiydi |
|---|---|
| usdview | USD |
| Kompyuterning oʻz dasturi | Kompyuterda shu fayl turi uchun nima boʻlsa |

Studio faqat shu qatʼiy roʻyxatdagi dasturlarni ishga tushiradi; sahifa nom boʻyicha soʻragan hech narsani ishga tushirmaydi va hech qachon GNU GPL litsenziyasidagi dasturni ishga tushirmaydi (qarang: [Rasmni boshqa dastur bilan chizish](topic:render-other-program#programs-cadcraft-never-runs)). USD yoki glTF ni oʻqiydigan har qanday dastur faylni yuqoridagi **Har qanday dastur uchun fayl** boʻlimidan ochadi.

:::note
Twinmotion, Enscape va boshqa vizualizatsiya dasturlari roʻyxatda yoʻq: CadCraft ular bilan tekshirilmagan va ular haqida hech qanday daʼvo qilmaydi. Bu yerdan chiqqan glTF yoki USD fayl kirish yoʻli; qarang: [plagin renderlari](topic:model-for-rendering#enscape-and-other-plug-in-renderers) haqidagi eslatmalar.
:::
