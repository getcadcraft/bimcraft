---
title: Skanerni model va 4D jadval bilan solishtirish
summary: Ochiq nuqtalar buluti bilan modelning har bir elementini baholang (qurilgan, qisman, yoʻq, yetib kelinmagan), qurilish foizini koʻring, modelni shu boʻyicha ranglang va 4D jadval yuklangan boʻlsa, 4D kunida orqada yoki oldinda qolgan narsalarni roʻyxatlang.
keywords: skaner, nuqtalar buluti, bajarilish, foiz bajarilishi, qurilgan, yoʻq, jadvaldan orqada, jadvaldan oldinda, 4D, saytdagi bajarilish, chetga chiqish, as-built, lazerli skanerlash, dron, solishtirish
from: 6fdc9003
---

Ochiq IFC ni oching, uning yoniga nuqtalar buluti oching (qarang: [Nuqtalar buluti](topic:point-clouds)) va uni modelga joylashtiring. {{ui:Skanerni model bilan solishtirish}} boʻlimi bulut ochiq boʻlganda oʻng panelda paydo boʻladi.

## Nima qiladi

{{ui:Solishtirish}} tugmasini bosing. Modelning har bir elementi sirtiga qarab baholanadi, chunki skaner aynan sirtni koʻradi. Elementning qutisining oltita yuzi taxminan 20 cm li katakchalarga boʻlinadi; katakcha sanaladi, agar skaner nuqtasi yuzadan {{ui:Chetga chiqish chegarasi}} (boshlanishda 50 mm) ichida boʻlsa. Eng katta yaxshi yuza sanaladi, shuning uchun bir tomondan skanerlangan devor uning ikkinchi tomoni uchun jazolanmaydi.

- **Qurilgan**: sirtning kamida 40 % koʻrinadi.
- **Qisman**: 10 % dan 40 % gacha.
- **Yoʻq**: bundan kam, lekin skaner elementga yetib borgan (unga 1.5 m gacha nuqtalar bor).
- **Yetib kelinmagan**: skaner u yerga hech qachon bormagan, shuning uchun u haqida hech narsa aytilmaydi.

Qurilgan va qisman qurilgan elementlar uchun u skaner nuqtalarining model sirtidan oʻrtacha ofsetini ham beradi va element oʻz joyida (chegara ichida), yaqin (uch barobargacha) yoki chetda (undan uzoqroq) ekanligini aytadi. U faqat chegaraning besh barobarigacha boʻlgan ofsetlarni koʻradi: undan uzoqroq joyda qurilgan element yoʻq deb oʻqiladi.

Xulosada skaner yetib boradigan elementlar orasida qurilgan foiz soni va hajmi boʻyicha koʻrsatiladi. Qisman qurilgan elementlar alohida sanaladi va qurilganlarga qoʻshilmaydi.

## 4D jadval bilan

4D jadval yuklangan boʻlsa (qarang: [4D jadval](topic:4d-schedule)), natija 4D slayderda qoʻygan kunni ham hisobga oladi: oʻsha kunga muddati kelgan, lekin skaner qurilgan deb koʻrsatmagan elementlar **jadvaldan orqada** hisoblanadi; hali muddati kelmagan, lekin qurilgan elementlar **oldinda**. Jadvaldan orqada qolgan elementlar {{ui:Muammolar}} ga kiritiladi va jadval shularga filtrlanishi mumkin. Jadval boʻlmasa, orqada yoki oldinda haqida hech narsa aytilmaydi.

## Jadval va model

Elementni tanlash uchun qatorni bosing. {{ui:Modelni ranglash}} elementlarni yashil (qurilgan), sariq (qisman), qizil (yoʻq) yoki kulrang (yetib kelinmagan) rangga boʻyaydi; {{ui:Oʻz ranglari}} ularni qaytaradi. {{ui:CSV ni saqlash}} jadvalni yozadi. {{ui:Mos elementlarni dalada tasdiqlangan deb belgilash}} qurilgan va chegara ichida deb koʻrilgan har bir elementni dalada tasdiqlangan (LOD 500, usul — skaner) deb belgilaydi, bir qadamda — uni bekor qilish mumkin. Qarang: [Elementlarni tekshirilgan yoki dalada tasdiqlangan deb belgilash](topic:verification).

:::warning
Bu har bir elementning qutisini chegara ichidagi skaner nuqtalari bilan solishtiradi. Bu **geodezik oʻlchov emas, miqdor hisobi emas va toʻlov uchun asos emas**. Skanerlanganiga qarama-qarshi yashirin element (qoplama orqasidagi devor, pol pardozi ostidagi plita) bir sirtni ulashadi va qurilgan deb koʻrinishi mumkin; egri yoki qiya element qutisi uning tanasidan katta boʻladi va qisman yoki yoʻq deb koʻrinishi mumkin. Harakat qilishdan oldin roʻyxatga qarang. Ruxsat izohlari va bajarilish eslatmalari bu tarkibga kirmaydi: ular siz saqlaydigan ustunlarda qoladi.
:::

Yordamchi {{ui:Skanerni model bilan solishtirish}} asbobi bilan xuddi shu solishtirishni bajara oladi; u modelda hech narsani oʻzgartirmaydi.
