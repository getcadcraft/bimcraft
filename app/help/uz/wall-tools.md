---
title: Devor shakllari, boʻlish, offset, choʻzish va qulflash
summary: Devorlarni toʻrtburchak, koʻpburchak, yoy shaklida, tanlangan chiziqlarda yoki kontur boʻylab chizing; ularni boʻling, bir boʻlagini olib tashlang, siljiting, quti boʻyicha choʻzing, tekislang va bir-biriga, oʻlchamga yoki setka chizigʻiga qulflang. Har bir oʻzgarish devorlarni biriktirilgan holda saqlaydi va bitta bekor qilish qadami.
keywords: tur almashtirish, turini oʻzgartirish, qayta turlash, nima koʻchdi, lod, rivojlanish darajasi, birikma uslubi, mitra, butt, kesib tekislash, devor birikmalari, keyingi, orqali oʻtadi, birikmani taqiqlash, birikmaga ruxsat, qatlam ustuvorligi, yadro, ustuvorlik, tutashuv, toʻrtburchak, aylanma toʻrtburchak, koʻpburchak, ichiga chizilgan, tashqariga chizilgan, yoy, markaz, urinma yoy, chiziqlarni tanlash, tab, kontur, sehrli tayoqcha, boʻlish, boʻshliq, segmentni oʻchirish, qayta birlashtirish, offset, nusxa, quti choʻzish, tanlov, choʻzish, tekislash, qulf, setka, oʻlchamni tahrirlash, joylashuv, tashqi yuz, ichki yuz, alt
from: 5b7d2f75
---

## Nima qilasiz

Devorlarni devor asbobining retseptlari bilan yarating va oʻzgartiring. Har biri burchaklarni toʻgʻridan chizgandek tugaydi: burchaklar oʻzi birikadi, birikmalar faylda saqlanadi va butun oʻzgarish **Oʻzgarishlar** dagi bitta qadam boʻladi, uni {{ui:Undo}} qaytaradi. Devorlar oʻz identifikatorini saqlaydi: boʻlingan, offset qilingan yoki choʻzilgan devor oʻsha devor boʻlib qoladi, eshiklari, derazalari va oʻlchamlari bilan.

## Toʻrtburchak, koʻpburchak yoki yoy chizish

{{ui:Draw}} yoqilgan holda {{ui:Shapes}} ni oching (Chizish guruhida), yoki devor qatoridagi **Shakl** roʻyxatidan shakl tanlang. Devor qatorida devor turi, chizma havolasi, tashqi tomon va yuqori qism koʻrinadi, {{ui:Wall}} asbobidagidek. Soʻng bosing yoki nuqtalarni yozing (x,y · @dx,dy · @uzunlik<burchak · koʻrsatkich boʻylab uzunlik):

- **Toʻrtburchak**: ikki qarama-qarshi burchak. Toʻrtta devor, toʻrtta burchak birikmasi, bir qadam.
- **Aylangan toʻrtburchak**: birinchi tomon qayerdan boshlanib tugashi (bu uning burilishi va uzunligini belgilaydi), soʻng ikkinchi tomon uchun uchinchi bosish.
- **Koʻpburchak**: markaz, soʻng burchak (**Ichiga chizilgan**) yoki tomon oʻrtasi (**Tashqariga chizilgan**). Avval **Tomonlar** ni (3 dan 64 gacha) belgilang.
- **Yoy, markaz**: markaz, boshlanish (bu radiusni belgilaydi), tugash. **Aylanish yoʻli**: qisqa yoʻl, soat strelkasiga qarshi yoki soat strelkasi boʻyicha. Aylananing uch chorakdan koʻprogʻi ikki devor sifatida chiziladi.
- **Urinma yoy**: devorning oxirini bosing, soʻng yoy tugaydigan joyni. Yoy devor oxiridan devorning oʻz yoʻnalishida chiqadi.

Yopiq shaklning tashqi tomoni tashqariga qaraydi. **Tashqi yuz** yoki **Ichki yuz** da chizilganda, siz bosgan yuz joyida qoladigan yuz boʻladi.

## Mavjud chiziqlarda devorlar

- **Chiziqlarni tanlash**: chiziqni bosing va devor unga joylashadi. Uchma-uch ulangan butun chiziqlar zanjirini olish uchun {{key:Tab}} ni bosing (yoki bosayotganda {{key:Shift}} ni ushlab turing). Chiziqlar bu koʻrinishning chizma chiziqlari, izlash havolasi va setka chiziqlari.
- **Konturni izlash**: bu chiziqlar yoki devorlar bilan yopilgan maydon ichini bosing. Devorlar bosish atrofidagi eng kichik maydonni oʻrab oladi.

## Chizishdan oldin: offset va birikma

Devor qatorida yana ikki maydon bor, ular {{ui:Wall}} asbobi va shakllar uchun ishlatiladi:

- **Offset**: devorlar siz bosgan chiziqdan shu masofada chiziladi: + uning chap tomoniga, − oʻng tomoniga, siz chizayotgan yoʻnalishdan qaraganda.
- **Birikma**: erkin turgan devorlarni chizish uchun belgini olib tashlang. Ularning uchlari Birikmani taqiqlash oladi va qayerga borishidan qat'i nazar erkin qoladi (qarang [Devorni oʻzgartirish](topic:change-a-wall-or-door)).

## Boʻlish, bir boʻlakni olib tashlash, qayta ulash

Tahrirlash guruhidagi {{ui:Walls}} ni oching.

- **Boʻlish**: kesiladigan joyda devorni bosing yoki uning boshidan masofani yozing. Uni kesib oʻtadigan devor yaqinida kesish ular uchrashgan joyga yopishadi. Ikki qism bir xil turga ega va uchma-uch ulangan holda qoladi. **Boʻshliq** kesish markazida shu uzunlikda boʻshliq qoldiradi. **Erkin uchlar** kesilgan uchlarga Birikmani taqiqlash beradi (Sozlamalar › BimCraft › Devorlar › **Devor boʻlinganda** qaysi biri dastlab belgilanganini bildiradi). Eshik yoki deraza oʻzi turgan qism bilan birga ketadi; uning orqali kesish rad etiladi.
- **Segmentni oʻchirish**: qismning boshlanadigan va tugaydigan joyini bosing. Qismdagi eshik u bilan birga ketadi.
- **Qayta ulash**: bitta devorning ikki qismini bosing (chiziqda, bir xil tur). Ular yana bitta devor boʻladi, birinchi bosgan qismingiz, ikkala qismning eshiklari bilan.

## Birikma uslubi, Birikmani taqiqlash, qatlam ustuvorligi

Tahrirlash guruhidagi {{ui:Walls}} ni oching.

- **Birikma uslubi**: ikki toʻgʻri devor tugaydigan burchakni bosing. Har bir bosish keyingi uslubga oʻtadi: **Mitra** (ikkala uchi ichki burchakdan tashqi burchakkacha chiziqda kesiladi, har bir burchak shundan boshlanadi), **Butt** (bir devor boshqasining tashqi yuziga qadar oʻtadi, u esa uning yon tomoniga tiraladi) va **Kesib tekislash** (butt kabi, va oʻtadigan devor uchi toʻgʻri kesiladi; toʻgʻri burchakda butt kabi koʻrinadi). **Keyingisi** yoki {{key:Tab}} boshqa devorni oʻtadigan qiladi. Asbob qatoridagi **Uslub** roʻyxati oxirgi bosgan burchakni koʻrsatadi. Bir devorning **Xususiyatlar** ida ham xuddi shu ikki tanlov bor: **Boshlanishdagi / oxiridagi birikma uslubi** va **Orqali oʻtadi**. Har bir oʻzgarish **Oʻzgarishlar** da bitta qadam. Reja, 3D tana, xonalar va miqdorlar unga ergashadi.
- T birikmada tomoni uchrab turgan devor doim orqali oʻtadi. Ikki devor kesishganda, bosish (yoki Xususiyatlardagi **Kesishgan joyda uzluksiz**) ikkisidan qaysi biri uzluksiz ekanini bildiradi; bu kesishish orqali qaysi devorning qatlamlari chizilishini hal qiladi.
- Uslub birikmaga tegishli: devorlar siljisa ham qoladi va faqat birikma yoʻqolganda yoʻqoladi (devor oʻchirilsa, shu uchida boʻlinsa yoki uchiga Birikmani taqiqlash qoʻyilsa). Egri devor bilan burchak yoki uchta va undan koʻp devor uchrashgan joy mitrani saqlaydi. Taxminan 30 darajadan oʻtkirroq yoki 150 darajadan tekisroq burchak ham mitraga qaytadi.
- **Birikmani taqiqlash**: devor uchi yaqinida bosing. Shu uchi boʻshatiladi: u hech narsaga ulanmaydi, devor qayerga borsa ham, uni yana bosmaguningizcha. Asbob yoqilgan vaqtda erkin uchlar xoch bilan belgilanadi. Xuddi shu tugma **Xususiyatlar** da **Boshlanishda ulash / Oxirida ulash** deb ataladi.
- **Qatlam ustuvorligi**: qatlamli devorlar uchrashgan joyda kuchli qatlam kuchsizini kesadi, shuning uchun yadrolar yadroga ulanadi va pardoz kuchli qatlamga tiralib toʻxtaydi. Har bir qatlamning 0 dan 999 gacha ustuvorligi bor; odatda u qatlam funksiyasidan olinadi (konstruksiya 800, asos 600, izolyatsiya 400, membrana 300, pardoz 200, boʻshliq 100). {{ui:Layer priority}} devor tuzilmasini ochadi, u yerda **Ustuvorlik** ustuni qatlamning oʻz raqamini belgilaydi. Teng ustuvorlikdagi qatlamlar bir-biriga tiraladi, va chiziq faqat turli materiallar orasida chiziladi. Buni **O'rtacha** yoki **Nozik** batafsillikdagi rejalarda, burchaklarda, T birikmalarida va ikki toʻgʻri devorning kesishishida koʻrasiz; Sozlamalar › BimCraft › Devorlar › **Devorlar uchrashgan joyda qatlamlarni tozalash** uni oʻchiradi. Bu faqat devorlar ichida chizilgan narsaga taʼsir qiladi: devorlarning konturlari va miqdorlari birikma uslubi bergan holda qoladi.

## Koʻp devorning turini almashtirish

Chizgan rejalardan ishchi chizmalarga oʻtish asosan tur oʻzgarishi: umumiy devor aniq qurilishga aylanadi. Hech narsani qayta chizmaysiz.

1. Devorlarni tanlang (bittasini, yoki {{key:Ctrl}} yoki {{key:Shift}} bilan koʻpini).
2. **Xususiyatlar** da devor turi ostida **Turini almashtirish…** tugmasini bosing (yoki Tahrirlash guruhidagi {{ui:Walls}} ni ochib {{ui:Swap type}} ni tanlang, bu bir xil roʻyxatni ochadi). Roʻyxat tanlangan devorlarning oʻz blokida **Xususiyatlar** ichida ochiladi. Bu dialog emas va hech narsani yopmaydi: reja, 3D koʻrinish va tanlash ishlashda davom etadi, va u siz tanlagan devorlarga ergashadi.
3. Roʻyxatda har bir devor turi qalinligi va LOD belgisi bilan chiqadi, masalan "Devor 230 umumiy, LOD 200" va "230 gʻisht, ikki tomoni suvalgan, LOD 300". Tanlangan devorlarning hozirgi turlari belgilanadi. **Izlash** ga yozib toraytiring: nom, qalinlik yoki `lod 300`.
4. Turni bosing. Tanlangan har bir devor bir qadamda oʻsha turga oʻzgaradi, shuning uchun bitta {{ui:Undo}} butun almashtirishni qaytaradi. Kichik x roʻyxatni yopadi.

Har bir devor oʻz joylashuv chizigʻini saqlaydi. Oʻq chizigʻida turgan devor ikki tomonga oʻsadi; joylashuv chizigʻi yuz boʻlgan devor oʻsha yuzni saqlaydi va boshqa tomonga oʻsadi, unga birikkan devorlar burchaklarda ergashadi. Almashtirilgan devorga qulflangan devorlar ham unga ergashadi. Eshik va derazalar oʻz devorlarida qoladi va yangi qalinlik uchun qayta kesiladi.

Almashtirishdan keyin roʻyxat **Nima koʻchdi** ni koʻrsatadi: nechta devor va nimaga oʻzgarganligi, qalinlik va LOD oldin va keyin, joylashuv chizigʻini saqlash uchun yon tomonga koʻchgan devorlar, ergashgan birikkan devorlar, qayta joylashgan eshik va derazalar, va har bir xonaning maydoni oʻzgargan boʻlsa, uning oldingi va keyingi maydoni. Holat satri buni bir qatorda aytadi. Hisobot faqat xabar beradi; u hech qachon almashtirishni toʻxtatmaydi. **Xususiyatlar › Devor turi** da tur tanlash xuddi shu almashtirishni qiladi va xuddi shu hisobotni beradi.

Almashtirishni toʻxtatadigan ikki narsa bor, shunda hech narsa oʻzgarmaydi: devorga endi sigʻmaydigan eshik yoki deraza (burchak ergashganda devor qisqaradi; avval eshikni torroq qiling yoki burchakdan uzoqroq joyga qoʻying) va almashtirish buzadigan qulf (joylashuv chizigʻi yuz boʻlganda oʻq chizigʻi bilan setka chizigʻiga qulflangan devor; uni qulfdan chiqaring yoki joylashuv chizigʻini oʻq chizigʻiga qaytaring).

BimCraft ga ulangan yordamchi xuddi shu almashtirishni qila oladi (asboblar `wall_types_list` va `walls_swap_type`) va xuddi shu hisobotni qaytarib oladi.

Turning LOD belgisi devor muharririda belgilanadi: qarang [Devor qatlamlari](topic:wall-assemblies).

## Offset va quti boʻyicha choʻzish

- **Offset**: devorni bosing, soʻng uni siljitish tomonini yoki masofani yozing. Devor oʻziga nisbatan kvadrat holda siljiydi, unga birikkan devorlar choʻziladi. Asl nusxa bilan birikmagan parallel nusxa uchun **Nusxa** ni belgilang.
- **Quti boʻyicha choʻzish**: qutining ikki burchagini bosing, soʻng koʻchirish uchun nuqtani va koʻchiriladigan nuqtani bosing. Qutining ichidagi har bir devor uchi koʻchadi; toʻliq ichida turgan devor koʻchadi va unga taqalgan devorlar ham keladi; qutini kesib oʻtadigan devorlar choʻziladi.

## Oʻlchamni tahrirlash va qulflash

Tayanch oʻlchamni tanlang (Izohlash › {{ui:Reference dimension}}) va **Xususiyatlar** da uning qiymatini yozing: uning ikkinchi tayanchi devori oʻzi bilan kvadrat holda siljiydi, birinchi tayanch joyida qoladi va birikkan devorlar ergashadi. Qiymatni saqlash uchun **Bu oʻlchamni qulflash** ni belgilang: keyinroq ikkala devordan biri siljisa, ikkinchisi unga ergashadi. Qulflangan qiymat belgisi olib tashlanmaguncha ustidan yozilmaydi.

## Tekislash va qulflash

**Tekislash va qulflash**: devor yuzini (yoki markaz chizigʻini, devor oʻrtasi yaqinida) yoki setka chizigʻini bosing, soʻng shu chiziqqa keltiriladigan devor yuzini. Devor unga kvadrat holda koʻchadi. Ularni tekis saqlash uchun avval **Qulf** ni belgilang: rejada qulf belgisi koʻrinadi va bir devor siljisa, boshqasi ergashadi. Devorning **Xususiyatlar** ida uning **Qulflar** i roʻyxatlanadi, har biri **Qulfni ochish** bilan.

## Devorlarni setka chiziqlariga qulflash

Setka chizigʻi boʻylab ketadigan yoki uchi unda turgan devorni tanlang va **Xususiyatlar** › **Setkaga qulflash** da setka chizigʻini tanlang. Soʻng {{ui:Grid}} asbobi bilan setka chizigʻini tanlang va **Siljitish** ga masofani yozing: chiziq oʻzi bilan kvadrat holda siljiydi va unga qulflangan devorlar, birikkan devorlari bilan birga, bir qadamda ergashadi. Setka chizigʻiga qulflangan devorni oʻzi bilan undan chiqarib boʻlmaydi (chiziqni siljiting yoki devorni qulfdan oching); devor unda kvadrat qola olmaydigan qilib burilgan setka chizigʻi rad etiladi. Chiziqni qayta nomlash qulfni saqlaydi; uni oʻchirish qulfni olib tashlaydi.

## Uzunlik: qaysi tomon ushlab turadi va nimani oʻlchaydi

- **Qayerdan oʻsadi** (bitta devorning Xususiyatlari): **Boshlanish ushlaydi** (uchi harakatlanadi), **Oxiri ushlaydi** (boshlanishi harakatlanadi) yoki **Markaz ushlaydi** (ikkala uch yarimga siljiydi). Uzunlikni yozayotganingizda reja ushlab turadigan nuqtani belgilaydi. Harakatlanadigan uchda birikkan devor oʻzi bilan kvadrat holda siljiydi va burchagini saqlaydi.
- **Qayerdan oʻlchash** (rejadagi Oʻlchamlar yonida, Xususiyatlarda va Sozlamalar › BimCraft › Devorlar da): **Oʻq chizigʻi**, **Ichki yuz** yoki **Tashqi yuz**. Uzunlik maydoni va rejadagi devor oʻlchamlari bir xilini oʻqiydi, shuning uchun ular mos keladi. Boshida oʻq chizigʻida turadi.
- Devorni birikmalaridan ozod holda koʻchirish uchun (ular uziladi, devor oʻz identifikatorini saqlaydi), oʻrtadagi tutqichni sudrayotganda {{key:Alt}} ni ushlab turing.

## Bilib oling

- Bu retseptlar devor asbobi spetsifikatsiyasidan (4 dan 9 gacha sahifalar). Birikma uslubi va qatlam ustuvorligi toʻgʻri devorlar uchun qurilgan; qatlam ustuvorligi faqat rejada koʻrinadi (kesimlar, balandliklar yoki 3D da emas, u yerda devor bitta jism), uchta va undan koʻp devor tugunlarida emas, va membranalar olib yurilmaydi.
- Birikmaning uslubi uning yozuvida IFC faylida saqlanadi (`IfcRelConnectsPathElements` nomi, masalan `CadCraft join L butt 1`), shuning uchun boshqa dasturlar birikmani baribir oʻqiydi va eskiroq fayl mitralar bilan ochiladi.
- Qulflar va birikmalar IFC faylida saqlanadi (qulflar loyihada `CadCraft_WallHolds` sifatida, birikmalar `IfcRelConnectsPathElements` sifatida), shuning uchun fayl qayta ochilganda ular bor.
- Egri devorlarni boʻlish, qayta ulash va bir boʻlagini olib tashlash mumkin; ularni offset qilish yoki qulflash mumkin emas.
- Qarang: [Devor chizish](topic:draw-walls), [Devor, eshik yoki derazani oʻzgartirish](topic:change-a-wall-or-door) va [Devor shakli](topic:wall-shape).
