---
title: Öğeleri gizleyin, izole edin ve geçirgen gösterin
summary: Birkaç öğe seçin, bunları gizleyin, yalnızca onları gösterin ya da onları normal, diğer her şeyi geçirgen gösterin; sonra her şeyi geri getirin.
keywords: gizle, izole et, geçirgen, saydam, hayalet, X-ışını, tümünü göster, gizlemeyi kaldır, birden çok seç, çoklu seçim, Ctrl tıklama, Shift tıklama, görünürlük
from: 97e98b8c
---

## Ne yapacaksınız

Görüntüyü baktığınız şeye indirin: yolda olan öğeleri gizleyin, yalnızca seçtiklerinizi gösterin ya da diğer her şeyi soluk bir taslak olarak ekranda tutun ki neredeyse nerede olduğunuzu hâlâ bilesiniz.

## Adımlar

1. Bir IFC modeli açın. Bkz. [Bir IFC modeli açın ve 3B'de etrafınıza bakın](topic:open-ifc-model).
2. Seçmek için bir öğeye tıklayın. Daha fazlasını seçmek için {{key:Mod}} ya da {{key:Shift}} tuşunu basılı tutun ve her birine tıklayın. Seçilmiş bir öğeye bu şekilde tıklamak onu yeniden seçimden çıkarır.
3. Araç çubuğundaki {{ui:Göster}} öğesini açın ve ne yapılacağını seçin ya da tuşuna basın:
   - {{ui:Gizle}} ({{key:H}}) seçilmiş öğeleri gizler.
   - {{ui:İzole et}} ({{key:I}}) yalnızca seçilmiş öğeleri gösterir.
   - {{ui:Geçirgen}} ({{key:T}}) seçilmiş öğeleri olduğu gibi, diğer her şeyi geçirgen gösterir.
4. Aynı menüde {{ui:Tümünü göster}} öğesine tıklayın ya da {{key:Shift+H}} tuşuna basın; her öğe yeniden gösterilir.
5. Bunun yerine seçilmiş öğelerin çevresindeki her şeyi kesmek için aynı menüde {{ui:Seçilenin etrafına kesit kutusu}} öğesine tıklayın ya da {{key:Shift+X}} tuşuna basın. Bkz. [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane).

## Ne görmelisiniz

- Birkaç öğe seçiliyken {{ui:Özellikler}} kaç tane olduğunu söyler ve sınıfa göre listeler. Tek başına bir öğeye tıklayarak özelliklerini görün.
- Gizlenmiş öğeler seçilemez: tıklama, arkasındaki her ne varsa ona düşer.
- Geçirgen öğeler de seçilemez; bu yüzden izole ettiğiniz şeye duvarların içinden doğrudan tıklayabilirsiniz.
- Kenarlar, öğeleriyle birlikte gizlenir ve onunla birlikte solar.
- Gizleme, izole etme ve geçirgenlik; düzenleme yaparken, kütüphane öğesi yerleştirirken ya da modeli bir kesit düzlemiyle keserken olduğu gibi kalır. Başka bir model açmak her şeyi yeniden gösterir.

## Sık yapılan hatalar

- **Menü öğeleri soluk görünüyor.** Hiçbir şey seçili değil. Önce bir öğeye tıklayın; bir öğenin üzerine gelerek neden işlem yapamadığını okuyun.
- **İzole et, gizlediğim bir duvarı gösterdi.** İzole etme, seçtiğinizi tam olarak gösterir; gizli olsun ya da olmasın.
- **Bir kat tamamen eksik.** Bu, {{ui:Tümünü göster}} değil {{ui:Katlar}} listesidir: katı yeniden işaretleyin.

## Sonraki

- [Katları, mekânları ve kenarları gösterin ve gizleyin](topic:storeys-and-spaces)
- [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane)
