---
title: Varyantı olan bir kütüphane öğesini yerleştirin ve değiştirin
summary: Bazı kütüphane öğeleri birden çok boyut ya da seçenekle gelir. Yerleştirmeden önce varyantı seçin, yerleştirilmiş bir öğenin hangi varyant olduğunu görün, tek tıklamayla başka bir varyantla değiştirin ve öğe güncellendiğinde onu koruyun.
keywords: varyant, varyantlar, boyutlar, seçenekler, yapılandırma, kütüphane, librarycraft, yerleştir, değiştir, yapılandırıcı, aile, tip, güncelleme, portlar
from: c05f0af3
---

## Ne yapacaksınız

Bir kütüphane öğesini ihtiyacınız olan boyut ya da seçenekte yerleştirin ve sonra, yeniden yerleştirmeden, fikrinizi değiştirin. Varyantları olan bir öğe, kütüphanede tek bir öğedir (tek bir ad, tek bir lisans, tek bir sürüm) ve geldiği varyantların bir tablosuna sahiptir: örneğin Küçük, Orta ve Büyük boyutlarda bir montaj plakası ya da deliksiz aynı plaka.

## Varyantı seçin ve yerleştirin

1. {{ui:Kütüphane}} sekmesini açın ve öğenin kartına tıklayın.
2. Adın altında, {{ui:Varyant}} seçeneği her varyantı boyutuyla listeler. Öğenin varsayılanı önce seçilir.
3. Birini seçin. Plan, boyut ve 3B gövde satırı seçiminizi izler.
4. {{ui:Plana yerleştir}} (ya da 3B görünümde {{ui:Modele yerleştir}}) öğesine tıklayın ve her öğe gibi yerleştirin: bkz. [Kütüphaneden ekipman ve mobilya yerleştirin](topic:place-from-library).

Yerleştirilen öğe, öğenin ve varyantın adını alır, örneğin *Montaj plakası — Büyük*; böylece {{ui:Ekipman}} listesi ve model ağacı onları ayırt eder. Her varyant kendi IFC tipine sahiptir: aynı varyantı iki kez yerleştirmek bir tipi paylaşır, farklı bir varyant kendi tipini alır.

## Yerleştirilmiş bir öğenin hangi varyant olduğunu görün

Öğeyi seçin. {{ui:Özellikler}} içinde **Kütüphane öğesi** kutusunda bir **Varyant** satırı vardır. IFC bunu `CadCraft_LibraryItem` içinde tutar: `Variant` (varyantın kimliği), `VariantName` ve `VariantValues` (seçenek değerleri, metin olarak), böylece diğer programlar okuyabilir.

## Başka bir varyanta geçin

1. Yerleştirilmiş öğeyi seçin ve **Kütüphane öğesi** kutusunda {{ui:Öğeyi değiştir…}} öğesine tıklayın. {{ui:Kütüphane}} sekmesi açılır.
2. En üstte, **Şunun diğer varyantları:** *öğe* her varyantı boyutuyla listeler. Yerleştirilmiş olan işaretlidir ve seçilemez.
3. İstediğiniz varyantta {{ui:… olarak değiştir}} öğesine tıklayın.

Öğe yerini, dönüşünü, katını, öğe numarasını, miktarını ve notlarını korur; tipi, şekli ve verileri diğer varyanta geçer. {{key:Mod+Z}} önceki varyantı geri getirir. Yine de aşağıdaki listeden önceki gibi başka herhangi bir öğeyi seçebilirsiniz: bkz. [Yerleştirilmiş bir öğeyi değiştirin ve kütüphaneden öğeleri güncelleyin](topic:swap-and-update-library-items).

## Kopyalama, yapıştırma ve güncellemeler

- Yerleştirilmiş bir varyantın kopyası aynı varyanttır: bu modelde ve aynı tarayıcı sekmesinde açılmış başka bir modelde, Kopyala ve Yapıştır ile.
- **Güncellemeler** varyantı korur: öğenin yeni sürümü hâlâ o varyantı içeriyorsa, yerleştirme yeni sürümün o varyantı olur. Yeni sürümde artık yoksa, yerleştirme bunun yerine öğenin varsayılan varyantını alır.

## Bilmeniz gerekenler

- Yalnızca bazı kütüphane öğelerinin varyantı vardır. Kartlar bunu söylemez; birini açtığınızda {{ui:Varyant}} seçeneğini görürsünüz.
- Bir öğe, varyant başına **portlar** (borular ve kanallar için bağlantı noktaları) listeleyebilir. Kütüphane sekmesi, bir varyantın kaç tane olduğunu gösterir. Öğeyi Kütüphane sekmesinden yerleştirdiğinizde bunlar henüz IFC'ye **yazılmaz**.
- 3B gövdesi olmayan bir varyant, her 2B sembol gibi, bir yer tutucu kutuyla yerleştirilir.
- Seçimdeki boyutlar, kütüphanenin yazdığı gibi milimetredir.
