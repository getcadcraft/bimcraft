---
title: Modelni renderlash dasturiga yuborish
summary: 3D koʻrinishda koʻrinadigan narsani materiallari, teksturalari va chiroqlari bilan glTF modeli (.glb) sifatida saqlang — glTF oʻqiydigan renderlash va vizualizatsiya dasturlari uchun.
keywords: glb, gltf, gl uzatish formati, eksport, renderlash, render, vizualizatsiya, real vaqt, archviz, materiallar, teksturalar, chiroqlar, yoritkichlar, aktiv, maxsus aktiv
from: e62d57dc
---

{{ui:Renderlash uchun}} asboblar panelida 3D koʻrinishda koʻrinadigan narsani bitta **.glb** fayl sifatida saqlaydi (glTF 2.0, Khronos Group tomonidan ishlab chiqilgan ochiq format). glTF oʻqiydigan renderlash dasturlari uni modelning materiallari va chiroqlari bilan ochadi; Twinmotion glTF va GLB ni import qilinadigan geometriya fayllari qatorida keltiradi va ularning chiroqlarini saqlaydi (Epic hujjatlari, "Importing geometry in Twinmotion"): {{ui:Renderlash uchun}} dan foydalaning va u yerda .glb ni import qiling. Hech narsa yuklanmaydi: fayl shu kompyuterda yaratiladi.

## Saqlash

1. IFC modelini oching va 3D koʻrinishni sozlang: kerak boʻlmagan qavatlar, elementlar yoki bogʻlangan modellarni yashiring va koʻrmoqchi boʻlgan [materiallarni boʻyang](topic:paint-materials).
2. {{ui:Renderlash uchun}} ni bosing (yoki `GLB` deb yozing).
3. Fayl "<model nomi>.glb" nomi bilan yuklab olinadi. Holat satri unda nechta uchburchak, material va chiroq borligini aytadi.

## Fayl nimalarni olib yuradi

- **Geometriya** — 3D koʻrinishda koʻrsatiladigan har bir elementning, metrda, Y yuqoriga qaragan holda (glTF oʻz oʻqlari). Har bir qavat va material uchun bitta obyekt, "Level 1 — Brick, red" nomi bilan, shunda renderlash dasturida materialni tanlab, oʻzingiznikiga almashtirishingiz mumkin.
- **Materiallar:** har bir rang siz unga [Renderda](topic:render) tanlagan koʻrinish bilan (mat, satin, yaltiroq, metall, shisha…), va har bir boʻyalgan kutubxona materiali oʻz rangi, gʻadir-budurligi va **tekstura** bilan (uning rasmi faylda, haqiqiy oʻlchamiga keltirilgan: gʻisht gʻisht oʻlchamida boʻladi). Shisha shaffof boʻladi.
- **Chiroqlar:** Render › Chiroqlar da yoqilgan har bir yoritkich, nuqtaviy yoki projektor chiroq sifatida, yorugʻligi bilan (lyumenlar kandelaga aylantirilgan), rangi va nur burchagi bilan.
- **Obyekt joylashuvi:** saytning kenglik va uzunligi maʼlumot uchun faylga yoziladi. Renderlash dasturlarida oʻz quyoshi bor: joyni oʻsha yerga kiriting.

## Nimani qoldiradi

- Kesim (butun elementlar kiradi) va shaffof koʻrsatilgan elementlar (ular chiqarib tashlanadi).
- Har bir element uchun alohida obyektlar (buning oʻrniga har bir qavat va material uchun bitta obyekt), IFC xususiyatlari, bump-xaritalar, saqlangan koʻrinishlar va yozib olingan yurishlar.
- Qirralar va fon.

## Enscape va boshqa plagin renderlovchilar

Enscape boshqa loyihalash dasturi ichida ishlaydi va butun loyihani ochish uchun faylga ega emas. Ikki yoʻl bor:

- Modelning **IFC** faylini (Fayl › Saqlash) Enscape ishlaydigan dasturda oching; koʻpchilik IFC ni oʻqiydi. Ranglar oʻtadi; kutubxona materiallari esa rangi bilan keladi.
- **Kichik qismni** (mebel, jihoz) maxsus aktiv sifatida kiriting: avval uni ajrating, soʻng {{ui:Enscape uchun (.gltf)}} ni bosing. Enscape maxsus aktivlar kutubxonasi .gltf, .obj va .fbx fayllarni koʻrsatadi, .glb ni emas, shuning uchun bu tugma bir xil sahnani bitta oʻzi-ichiga olgan **.gltf** sifatida saqlaydi (ikkilik maʼlumot va rasmlar fayl ichida; u bilan birga nusxalanadigan boshqa narsa yoʻq). Enscape kichik aktivlarni tavsiya qiladi (taxminan 20 000 uchburchakdan kam).

:::note
CadCraft Studio ilovasida bir xil glTF fayli (va USD fayli) {{ui:Render}} › Dvigatel › **glTF fayli** / **USD fayli** orqali saqlanishi yoki bu kompyuterdagi boshqa dasturda toʻgʻridan-toʻgʻri ochilishi mumkin: qarang [Sahnani boshqa dasturda ochish](topic:render-open-in). Enscape yoki Twinmotion uchun plagin yoki jonli bogʻlanish qurilmagan. FBX va Datasmith formatlarining nashr etilgan spetsifikatsiyasi yoʻq, shuning uchun BimCraft ularni yozmaydi; glTF ochiq yoʻldir.
:::
