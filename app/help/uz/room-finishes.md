---
title: Xona pardozlari va pardoz jadvallari
summary: Har bir xonaning pol, devor va shiftini nima qoplashini ayting, plitali fartuk kabi zonalar qoʻshing va xona, devor hamda zona boʻyicha pardoz jadvallarini oling: kesilganlarini hisobga olgan holda maydonlar, plitalar soni va ostki qatlam hajmlari bilan.
keywords: pardoz, pardozlar, pardoz jadvali, xona pardozlari, pol pardozi, devor pardozi, shift pardozi, plintus, plita, plitalar, kesilgan plitalar, plitalar soni, chiqindi, ostki qatlam, styajka, asos taxtasi, suvoq, zona, fartuk, dado, nam xona, ichki, miqdorlar
from: 8c30498c
---

## Nima qilasiz

BimCraft ga har bir xona nima bilan pardozlanganini bir marta ayting. Pardoz jadvallari keyin maydonlarni, buyurtma qilinadigan plitalarni va ostki qatlam hajmlarini beradi va model bilan birga oʻzgaradi.

## Qadamlar

1. {{ui:Chizish}} ni yoqing, chap panelda **Jadvallar** ni oching va **Xona pardozlari** ni bosing.
2. **Pardoz turlari** ostida **Pardoz turi qoʻshish** ni bosing. Unga nom, tur (Plitka, Varaq, Qatlam yoki Taxta) va qalinlik bering. Plitka uchun plitaning uzunligi va kengligi, chok va foizdagi chiqindi zaxirasini bering. Agar pardoz ostida biror narsa boʻlsa (styajka, asos taxtasi, suvoq qatlami), uni **Ostki qatlam** ostida nomlang va qalinligini kiriting.
3. **Xonalar** ostida har bir xonaning pol, devor va shift pardozini tanlang. Agar xonada plintus boʻlsa, uning nomi va balandligini kiriting.
4. **Zonalar** ostida xonaning boshqa pardoz oladigan qismi uchun **Zona qoʻshish** ni bosing:
   - **devor** zonasi pol ustidagi ikki balandlik orasidagi lenta (plitali fartuk 0 dan 1200 gacha, dado). U xonaning har bir devorida boʻladi, yoki modelda shu xona devorlarini tanlab, faqat ularga cheklash uchun **Yoqish** tugmasini bosing;
   - **pol** yoki **shift** zonasi siz kiritadigan maydon. U xonaning oʻz pardozidan olib tashlanadi.
5. **Saqlash** ni bosing. Bu Ortga qaytarishda bitta qadam. Uzunliklar loyiha birliklarida kiritiladi.

## Jadvallar

Jadvallar roʻyxatiga toʻrtta yozuv qoʻshiladi:

- **Xonalar boʻyicha pardozlar**: har bir xona, uning pol, devor va shift pardozlari, ularning maydonlari va plintus uzunligi bilan.
- **Devorlar boʻyicha pardozlar**: xona tomonidagi devorning har bir boʻlagi va pardoz qoplagan qismi, uning uzunligi, yalpi maydoni, chegirmalar, sof maydon va plitalar uchun butun plitalar, kesilgan plitalar hamda buyurtma qilinadigan plitalar.
- **Zonalar boʻyicha pardozlar**: har bir zona, uning pardozi, sof maydoni, plitalari va ostki qatlam hajmi.
- **Pardoz miqdorlari**: har bir pardoz uchun bitta qator: sof maydon, butun va kesilgan plitalar, buyurtma qilinadigan plitalar, ostki qatlam va uning hajmi, pardozning oʻz hajmi.

Ularni guruhlang, jamlang, saqlang va eksport qiling, har qanday jadval kabi: [Jadvalni joylashtirish, saqlash va eksport qilish](topic:schedule-layouts) ga qarang. Raqamni bosing, uning manbasini tanlang: devor chegirmalari uning eshiklari va derazalarini tanlaydi.

## Maydonlar qanday oʻlchanadi

- **Devorlar**: xona tomonidagi devorning har bir boʻlagi, uning uzunligi xona boʻylab, pardoz qoplaydigan balandlikka koʻpaytirilgan, undan shu balandlikdagi har bir eshik va deraza qismi ayirilgan. Xonadan past devor oʻz yuqorisigacha pardozlanadi. Loyihaning oʻlchash usuli qaysi teshiklar chegirma uchun juda kichik ekanini hal qiladi ([Jadvallar](topic:plan-schedules-and-pdf)).
- **Pollar va shiftlar**: xona devor yuzlari ichida, undagi orollar ayirilgan.
- **Plintus**: xona devorining uzunligi, eshiklar kengligi ayirilgan.
- **Plitalar**: sirtning bir burchagidan toʻr sifatida yotqiziladi, plitalar orasida bitta chok bilan. Sirtda toʻliq boʻlgan plita butun plita; qisman (chetida, teshik atrofida) boʻlgan plita kesilgan plita. Buyurtma qilinadigan plitalar butun va kesilgan plitalar, chiqindi zaxirasi qoʻshilib, yuqoriga yaxlitlanadi. Har bir kesilgan plita yangi plita hisoblanadi: qirqimlar qayta ishlatilmaydi.
- **Ostki qatlam hajmi**: sof maydon koʻpaytirilgan ostki qatlam qalinligi.
- Soni **≈** bilan belgilangan boʻlsa, u plita-plita yotqizilmasdan maydondan hisoblangan: sirtdan terilgan zona olib tashlangan yoki juda katta sirt.

## Foydali maʼlumotlar

- Pardozlar bino faylida saqlanadi (loyihadagi `CadCraft_Finishes` xossalar toʻplami). Pardozi bor har bir xona standart IFC `Pset_SpaceCoveringRequirements` xossalar toʻplamini ham oladi, shuning uchun boshqa dasturlar nomlarni oʻqiy oladi.
- Plitalar joylashuvi burchakdan boshlanadi. Xona markaziga joylashtirilgan joylashuv, naqsh (yodgʻorsimon, gʻisht bogʻlami) va qirqimlarni qayta ishlatish hisoblanmaydi.
- Egri devor va xona chegarasi devor boʻlmagan joylar (xona ajratgich) **Boshqa chegara** sifatida uzunligi bilan koʻrsatiladi, teshiklarsiz.
- Oldin mavjud boʻlgan **Pardozlar** yozuvi devor turlarining pardoz qatlamlarini roʻyxatlaydi; **Qatlamlar: maydon va hajm** har bir qatlamli turning har bir qatlamini roʻyxatlaydi. Bu yerdagi xona pardozlari ularning ustiga xonaga qoʻllanadi.
- Yordamchi `finishes_set` bilan pardozlarni siz uchun oʻrnatishi mumkin: [AI yordamchisi modelingiz bilan ishlashi](topic:assistants) ga qarang.
