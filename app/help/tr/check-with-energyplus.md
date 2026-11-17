---
title: "Isıtma ve soğutmayı EnergyPlus ile denetle"
summary: "Modeli bir EnergyPlus dosyası olarak yazın ya da tarayıcıda EnergyPlus 26.2.0 sürümünü çalıştırın ve tasarım yüklerini hızlı ısıtma ve soğutma yardımcısıyla karşılaştırın. Erken tasarım için ikinci bir görüş; bir uygunluk hesabı değil."
keywords: energyplus, enerji simülasyonu, tasarım günü, ısıtma yükü, soğutma yükü, hava durumu dosyası, epw, idf, termal kütle, yıllık enerji, simüle et
from: b82a5bf2
---

## Ne yapacaksınız

**EnergyPlus ile denetle** paneli, açık modeli bir EnergyPlus giriş dosyası (IDF) olarak yazar: her oda için bir bölge, U değerleriyle duvarlar, döşemeler, çatılar ve pencereler, hava değişimleri ve ideal ısıtma ve soğutma. Bu dosyayı her zaman **kaydedebilir** ve kendi EnergyPlus'ınızda çalıştırabilirsiniz.

Motoru da kurduysanız panel yerinde simüle edebilir ve EnergyPlus'ın tasarım ısıtmasını ve soğutmasını, hızlı yardımcınınkilerin yanında, oda oda listeler.

Bu bir tasarım yardımcısıdır. Enerji yönetmelikleri, sertifikasyon ve izinler onaylı bir araç ve onun gerektirdiği iklim verilerini gerektirir; sonuç, bunun sorumlusu kişi tarafından gözden geçirilmelidir.

## Motoru kurun

BimCraft EnergyPlus'ı içermez. Büyük bir WebAssembly derlemesidir (sıkıştırılmış yaklaşık 6 MB, artı 4.6 MB'lık bir veri dosyası), bu yüzden onu kendiniz barındırır ve adresini panele yazarsınız. Sayfa, yalnızca bir simülasyon düğmesine bastığınızda yükler, hiçbir zaman başlangıçta değil. Adres https olmalı, bu sitede bir yol ya da localhost olmalıdır.

## Tasarım günleri ya da bir yıl

- **Tasarım günlerini simüle et** hava durumu dosyası gerektirmez. Güneşsiz soğuk bir kış günü ile açık, sıcak bir yaz günü çalıştırır; Gün ışığı sekmesindeki ısıtma ve soğutma girdilerinin sıcaklıklarında, her odanın yükünü watt cinsinden bildirir.
- **Bir yılı simüle et**, seçtiğiniz EPW biçimindeki bir hava durumu dosyası gerektirir. Aynı girdilerden insanları, aydınlatmayı ve ekipmanı ekler (her zaman açık, çünkü bir program uydurulmaz) ve her odanın ısıtma ve soğutma enerjisini kWh cinsinden bildirir. Hava durumu dosyalarının kendi lisansları vardır; bu yüzden kullanma hakkınız olan bir dosya kullanın.

## Termal kütle

**Bilinen katmanları olan duvarlara termal kütle ver** seçeneğini işaretleyin: malzeme katmanları bilinen duvarlar, çatılar ve döşemeler katman katman yazılır; yoğunluk ve özgül ısı, malzeme adına göre kısa bir tipik değerler tablosundan alınır. Katmanlar, dosyanın listelediği sırayla, önce dıştan alınır. Katmanı olmayan öğeler U değerinde kalır, kütlesiz.

## Karşılaştırmayı okumak

İki yöntem biraz farklı soruları yanıtlar. Hızlı yardımcı her öğeyi tutar; EnergyPlus dosyası her odanın U değerlerini yüzey türüne göre ortalar. Bir odanın tasarım ısıtmasındaki 15 %'ten büyük bir fark, iki rakamla birlikte ⚠ panelinde bir not olarak listelenir. Soğutma, tasarım gereği daha fazla farklılık gösterir: hızlı yardımcı, tek bir tarihteki güneşten bir zirve hesaplar; EnergyPlus ise kendi tasarım gününe göre boyutlandırır.
