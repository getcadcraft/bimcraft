---
title: Öğeleri etiketleyin ve etikete göre listeleyin
summary: Kendi etiketlerinizi tanımlayın (bir ad, bir tür, izin verilen değerler, hangi sınıflar), çok sayıda öğeyi bir kerede etiketleyin ve sütunları, filtreleri ve grupları etiketleri okuyan listeler yapın. Etiketler IFC içinde tutulur.
keywords: etiketler, etiket, etiketleme, özel özellikler, parametreler, paylaşılan parametreler, özellik kümesi, pset, liste, filtre, şuna göre grupla, kaplama, yangın dayanımı, toplu düzenleme, csv
from: 9cc7c90d
---

## Ne yapacaksınız

Etiket, *Kaplama* ya da *Yangın dayanımı* gibi kendi özelliğinizdir. Onu proje için bir kez tanımlarsınız, çok sayıda öğeye bir kerede atarsınız ve BimCraft'taki her liste onu okuyabilir: buradaki etiket listesi, {{ui:Miktarlar}}, Bul, [Modelden belgeler](topic:documents-from-the-model) ve özelliğe göre renklendirme.

## Adımlar

1. Bir IFC modeli açın ya da yeni bir bina başlatın.
2. Sol panelde, {{ui:Miktarlar}} altında {{ui:Etiketler}}'i açın.
3. {{ui:Etiket ekle}}'ye tıklayın. Ona bir ad verin, türünü seçin ve isterseniz izin verilen değerleri (virgülle ayırarak) ve etiketin geçerli olduğu sınıfları (`IfcDoor`, `IfcWall` …) listeleyin. {{ui:Etiketi ekle}}'ye tıklayın.
4. Modelde öğeleri seçin (Bul yardımcı olur: tüm kapıları bir kerede seçin).
5. {{ui:Seçimi etiketle}} altında, ayarlamak istediğiniz her etiket için bir değer seçin ya da yazın, diğerlerini olduğu gibi bırakın ve {{ui:… seçili öğeye uygula}}'ya tıklayın.
6. {{ui:Etiket listesi}} altında sütunları işaretleyin, filtre ekleyin, {{ui:Şuna göre grupla}}'yı seçin, sonra {{ui:CSV indir}}'e tıklayın.

## Ne görmelisiniz

- Kaydedilen her tanım ve her etiketleme için değişiklik listesinde bir adım vardır; {{ui:Geri al}} onu geri alır.
- Bir etiketin sınıfı dışında kalan öğeler o etikete dahil edilmez ve durum satırı kaç tane olduğunu söyler.
- Etiket listesi, seçtiğiniz alana göre gruplanmış, öğe başına bir satır listeler; bir satırın ilk hücresine tıklayarak o öğeyi seçin.
- {{ui:Miktarlar}}, etiketleri `CadCraft_Tags` altında listeler; böylece orada bir etikete göre alanları ya da sayıları toplayabilirsiniz.

## Türler

Türler, aile parametreleriyle aynı listedir: Uzunluk (milimetre), Açı (derece), Sayı, Tam sayı, Evet / Hayır, Kalem (1–16), Metin, Malzeme ve Dolgu. Türüne uymayan ya da izin verilen değerlerden biri olmayan bir değer, bir mesajla reddedilir ve hiçbir şey değişmez.

## Bilmeniz gerekenler

- Her şey düz IFC'dir, bu yüzden diğer programlar değerleri okuyabilir: tanımlar projede `CadCraft_TagDefs` özellik kümesindedir, değerler her öğede `CadCraft_Tags` özellik kümesindedir (etiket başına bir özellik). Uzunluklar dosyanın uzunluk biriminde yazılır.
- Bir etiketin sınıflarında `IfcWall`, standart durumdaki ve elemanlı duvarları da kapsar.
- Bir etiketi yeniden adlandırmak, aynı adımda her öğedeki değerlerini de yeniden adlandırır. Bir etiketi kaldırmak yalnızca tanımını siler: zaten ayarlanmış değerler öğelerde sade özellikler olarak kalır. Onları önce {{ui:Temizle}}'yi seçerek silin.
- CadCraft çizim uygulamasındaki etiketler (blok öznitelikleri) henüz yapılmadı.
