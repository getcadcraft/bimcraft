---
title: Rasmni qaysi dastur chizishini tanlash
summary: Render muloqot oynasidagi Dvigatel tanlovi: bizning ikkita oʻz dvigatelimiz, CadCraft Studio dagi boshqa dasturlar va veb nima qilishi.
keywords: render, dvigatel, renderer, render dvigateli, plagin, plugin, studio, tashqi dastur, chizgan, navbat, qoʻshimcha dvigateli
from: 44a1ef5e
---

{{ui:Render}} da {{ui:Shakl}} dan yuqorida **Dvigatel** tanlovi bor. Bizning ikkita oʻz dvigatelimiz har doim mavjud va hamma joyda ishlaydi; qoʻshimchalar yana qoʻshishi mumkin, CadCraft Studio da esa roʻyxatda sahnani oʻz qoʻliga oladigan dasturlar ham boʻladi.

| Dvigatel | Nima qiladi | Qayerda |
|---|---|---|
| Oʻrnatilgan: {{ui:Tez}} | Tez statik rasm: kunduzgi yorugʻlik, yumshoq soyalar, shisha va metall koʻrinishlari, soniyalarda | Brauzer va Studio |
| Oʻrnatilgan: Yoʻl kuzatuvchi | Yorugʻlik sirtlar orasida sakraydi, grafik kartangiz yoki protsessoringizda; render navbati va tarmogʻingizdagi boshqa kompyuterlar | Brauzer va Studio |
| Qoʻshimcha dvigateli | Rasmni chizadi va qaytaradi: [Rasmni boshqa dastur bilan chizish](topic:render-other-program) ga qarang | Brauzer (JavaScript da yozilgan dvigatel) yoki Studio (dastur ishga tushiradigan dvigatel) |
| Sahnani oʻz qoʻliga oladigan dastur | Studio sahnani oʻz jildiga joylaydi va uni sinxron saqlaydi | Studio |
| … da ochish | Sahnani saqlaydi va dasturda ochadi; hech narsa qaytmaydi: [Sahnani boshqa dasturda ochish](topic:render-open-in) ga qarang | Veb faylni saqlaydi |

## Tanlov qanday ishlaydi

- {{ui:Tez}} yoki Yoʻl kuzatuvchini tanlash {{ui:Shakl}} ni ham oʻzgartiradi, va aksincha. Boshqa dvigatelni ishlatmaydigan odamlar uchun muloqot oynasining boshqa hech narsasi oʻzgarmaydi.
- Mavjud boʻlmagan dvigatel roʻyxatda sabab bilan qoladi («topilmadi», «yangiroq versiya kerak»); uni tanlab boʻlmaydi. Brauzerda faqat Studio da ishlaydigan dvigatel «fayl saqlaydi» deb koʻrsatadi: {{ui:Render}} u holda sahna va uning sozlamalarini oʻsha dasturga olib boradigan faylga saqlaydi.
- Tanlov fayl render sozlamalari bilan saqlanadi, va oxirgi tanlagan dvigatelingiz oʻz tanlovi boʻlmagan fayllar uchun boshlangʻich dvigatel boʻladi.
- Boshqa dasturning rasmi qaysi dastur chizganini va uning versiyasini muloqot oynasida hamda render navbatida koʻrsatadi. [Render](topic:render) sahifasidagi va'dalar faqat **bizning** dvigatellarimizga taalluqli: boshqa dastur yorugʻlik, tonlash va namunalarni oʻz usulida qoʻllaydi, shuning uchun bitta sahnaning ikki rasmi kamera, quyosh, chiroqlar va ekspozitsiya boʻyicha oʻxshash, lekin piksel-pikselgacha emas.

## Har bir dvigatelga nima beriladi

Sahna boshqa dasturga **paket** sifatida boradi: model USD fayl sifatida (xuddi [USD sifatida saqlash](topic:usd) yozadigan fayl kabi) va USD importeriga ishonib boʻlmaydigan narsalarni saqlaydigan sozlamalar fayli: aniq material qiymatlari, yoqilgan chiroqlar quvvati va yorugʻlik profillari bilan, quyosh, osmon, ekspozitsiya va muloqot oynasi chizgandek kamera. Hech narsa hech qayerga yuklanmaydi.

## Render navbati

Boshqa dastur uchun rasm bizniki kabi [render navbatida](topic:render#the-render-queue) kutishi mumkin; uning vazifasi qaysi dvigatel uchun ekanini eslab qoladi.
