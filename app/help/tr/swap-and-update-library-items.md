---
title: Yerleştirilmiş bir öğeyi değiştirin ve kütüphane öğelerini güncelleyin
summary: Yerleştirilmiş bir kütüphane öğesini, yerini ve öğe numarasını koruyarak başka biriyle değiştirin; modeldeki her şey için Kütüphane'de daha yeni sürümleri denetleyin.
keywords: değiştir, yerine koy, ikame, güncelle, daha yeni sürüm, güncellemeleri denetle, kütüphane, geri çekilmiş, lisans değişikliği, öğe numarası
from: 8bdfe01d
---

## Ne yapacaksınız

Bir öğe konusunda fikrinizi değiştirin, onu yeniden taşımadan; ve modeldeki kütüphane öğelerini güncel tutun.

## Bir öğeyi değiştirin

1. Modelde yerleştirilmiş bir kütüphane öğesine tıklayın.
2. {{ui:Özellikler}} içinde, **Kütüphane öğesi** kutusundaki {{ui:Öğeyi değiştir…}}'e tıklayın. {{ui:Kütüphane}} sekmesi açılır.
3. Yeni öğeyi bulun ve kartına tıklayın.
4. {{ui:… bununla değiştir}}'e tıklayın.

Öğe, yerini, dönüşünü, katını, öğe numarasını, miktarını ve notlarını korur. Türü, şekli ve öğe verisi yeni öğeye geçer. Aynı biçimde yerleştirilen öğeler tek bir tip paylaşır, tıpkı yerleştirirken olduğu gibi.

Bu öğe varyantlara sahipse (bkz. [Varyantları olan bir kütüphane öğesini yerleştirin ve değiştirin](topic:library-variants)), değiştirdiğinizde diğer varyantları {{ui:Kütüphane}} sekmesinin en üstünde listelenir: her biri için tek tıklama.

Yeni öğe farklı türde bir şeyse, örneğin masanın yerine bir lavabo, öğenin IFC sınıfı buna uyacak şekilde değişir (burada mobilya öğesinden sıhhi tesisat terminaline), böylece diğer yazılımlar onu doğru listeler. Öğe, aynı GlobalId ile aynı öğe olarak kalır; ona verilmiş bağlantılar yine çalışır. {{key:Mod+Z}} eski sınıfı eski öğeyle birlikte geri getirir.

## Güncellemeleri denetleyin

1. Araç çubuğunda {{ui:Güncellemeler}}'e tıklayın (ya da bir kütüphane öğesinin kutusunda {{ui:Güncellemeleri denetle}}).
2. Listeyi okuyun: modeldeki her kütüphane öğesi, modeldeki sürümü, en son sürümü ve bir durumu ile birlikte — **Güncel**, **Daha yeni sürüm**, **Geri çekildi** veya **Bulunamadı**. Neyin değiştiğini de söyler (geometri, veri, lisans ya da bir düzeltme).
3. Bir satırda {{ui:Güncelle}}'ye veya {{ui:Tümünü güncelle}}'ye tıklayın.

## Ne görmelisiniz

- "*n* yerleşim güncellendi. Yerler, öğe numaraları, miktarlar ve notlar korundu."
- Değişiklik listesinde "Güncellendi: *öğe*" satırları. {{key:Mod+Z}} her birini geri alır.

## Bilmeniz gerekenler

- Yalnızca Kütüphane'den gelen öğeler denetlenebilir. Dosyalardan gelen öğeler bir kütüphane kimliği taşımaz.
- Bir lisans değiştiğinde, zaten yerleştirdiğiniz kopya, siz güncelleyene kadar geldiği lisansı korur.
- **Geri çekildi** durumundaki bir öğe yeni yerleştirmeler için sunulmaz. Telif hakkı nedeniyle geri çekilmiş bir öğe hiç indirilemez; onu {{ui:Öğeyi değiştir…}} ile değiştirin.
- Yerleştirilmiş bir varyant, öğenin daha yeni sürümü hâlâ ona sahipse o varyant olarak kalır; aksi halde öğenin varsayılan varyantını alır.
- Denetleme yalnızca öğe kimliklerini ve sürümlerini gönderir; modelinizi asla göndermez.
