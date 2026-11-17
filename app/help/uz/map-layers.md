---
title: Model ostidagi yerda xarita
summary: Geomaʼlumotnomaga ega IFC modeli ostidagi yerga koʻcha xaritasi yoki havo suratini qoʻying: xarita plitalaridan, xarita xizmatlaridan yoki dunyo fayli bilan rasmdan.
keywords: xarita, xarita qatlamlari, asosiy xarita, havo, sunʼiy yoʻldosh, hudud, yer, plitalar, xyz, wms, wmts, xarita xizmati, dunyo fayli, geomaʼlumotnoma, ifcmapconversion, proyeksion CRS, epsg, hudud konteksti
from: 84e2e9df
---

## Nima qilasiz

Modelni uning joyida koʻring: hududning koʻcha xaritasi yoki havo suratini uning ostidagi yerda.

## Qadamlar

1. Xaritadagi joyini oʻz ichiga olgan IFC modelini oching (xarita konversiyasi, IfcMapConversion, proyeksion koordinatalar tizimi bilan). Loyihaning koordinatalari (geodezik nuqta, umumiy koordinatalar) belgilanganda eksportchilar uni yozadi.
2. {{ui:Koʻrsatish}} › {{ui:Xarita qatlamlari…}} ni tanlang. Dialog modelning tizimini aytadi, masalan EPSG:28356. Xarita konversiyasi boʻlmagan model xarita qatlamlariga ega boʻla olmaydi: dialog buni aytadi.
3. {{ui:Internetdan xarita qatlamlari}} ni yoqing. Shu vaqtgacha hech bir serverdan hech narsa soʻralmaydi; yoqilganda esa siz qoʻshgan serverlar modelni emas, modelni oʻrab turgan hududni va internet manzilingizni koʻradi.
4. {{ui:Qatlam qoʻshish}} da plitalarni (manzili `{z}`, `{x}` va `{y}` bilan), WMS, WMTS yoki ArcGIS xizmatini ({{ui:Qatlamlarni olish}}, soʻngra bittasini tanlang) yoki dunyo fayli bilan rasmni tanlang.
5. Dialogni yoping. Xarita modelning eng past nuqtasidan biroz pastda, yerda yotadi, model izi ustida va uning atrofida xuddi shuncha masofagacha.

:::note
Xarita faqat ekranda koʻrinadi; u IFC faylda saqlanmaydi. Qatlamlar roʻyxati shu brauzerda saqlanadi. Faqat shartlari bunga ruxsat beradigan xarita xizmatlaridan foydalaning.
:::
