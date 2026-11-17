---
title: Gjej rrugën me pemën e modelit
summary: Shfleto një model IFC sipas projektit, vendit, ndërtesës, katit dhe hapësirës, me elementët e grupuar sipas llojit; vendos kutitë për të shfaqur dhe fshehur, kliko një rresht për ta zgjedhur, kliko dy herë për zmadhim.
keywords: pema e modelit, pemë, strukturë, strukturë hapësinore, shfletues, përmbledhje, navigator, kat, nivel, dysheme, hapësirë, dhomë, grup, klasë, fshih, shfaq, zgjidh, përzgjidh, zmadho
from: 69de4ab7
---

## Çfarë do të bësh

Shiko si është ndërtuar një model dhe arrij çdo element pa e kërkuar në 3D: ndërtesën, katet e saj, hapësirat në çdo kat dhe elementët në to, të grupuar sipas llojit (mure, dyer, pllaka…).

## Hapat

1. Hap një model IFC. {{ui:Pema e modelit}} në të majtë hapet deri te katet.
2. Kliko shigjetën pranë një rreshti për ta hapur ose mbyllur. Një kat mban fillimisht hapësirat e veta, pastaj elementët sipas llojit me sa janë. Një element i përbërë nga pjesë, si një shkallë, mban pjesët e tij.
3. Hiq shenjën te kutia e një rreshti për ta fshehur çdo gjë brenda; vendose sërish për ta shfaqur. Një kuti me vizë do të thotë se vetëm një pjesë e asaj që përmban shfaqet.
4. Kliko emrin e një rreshti për të zgjedhur atë që përfaqëson: një element, ose çdo element të një grupi, kati ose hapësire. {{key:Mod}}+klik i shton në zgjedhje ose i heq prej saj.
5. Kliko butonin {{ui:i}} pranë një kati, hapësire ose ndërtese për të parë vetitë e veta.
6. Kliko dy herë një rresht për ta zmadhuar.

## Çfarë duhet të shohësh

- Kur zgjedh një element në pamjen 3D, pema hapet deri te ai dhe e shënon.
- Elementët e fshehur kalohen me vizë. Kutitë e pemës dhe {{ui:Shfaq}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) punojnë së bashku: shih [Fshih, izolo dhe shiko përmes elementëve](topic:hide-and-isolate).
- Elementët që modeli nuk i vendos në asnjë kat janë në një grup në fund, **Jo në strukturën hapësinore**.
- Një grup i gjatë shfaq 200 rreshta njëherësh; kliko **Shfaq më shumë** nën të për pjesën tjetër.

## Tastet

Me emrin e një rreshti të fokusuar: {{key:Up}} dhe {{key:Down}} lëvizin, {{key:Right}} hap, {{key:Left}} mbyll ose shkon lart, {{key:Space}} vendos shenjën te kutia, {{key:Enter}} zgjedh.

## Gabime të zakonshme

- **Kutia e një kati është e shënuar, por asgjë nuk shfaqet.** Lista {{ui:Katet}} nën pemë i fik vetë katet e tëra: shëno edhe atje.
- **Një rresht nuk zgjedh asgjë.** Disa rreshta, si një hapësirë bosh, nuk kanë elemente që mund të vizatohen; rreshti i statusit e thotë këtë.

## Më pas

- [Fshi, prit, kopjo dhe ngjit elementët e ndërtesës](topic:edit-elements)
- [Shfaq dhe fshih katet, hapësirat dhe skajet](topic:storeys-and-spaces)
