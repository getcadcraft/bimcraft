---
title: Çelik boru spool'ları ve spool sayfaları
summary: Çelik alın kaynaklı bir boru hattını, seçtiğiniz en uzun uzunlukta ve yerleştirdiğiniz saha kaynaklarında spool'lara kesin, numaralandırın ve her spool için bir sayfayı (3B görünüm, kesim uzunlukları, bağlantı parçaları, kaynaklar, malzeme listesi) PDF ve CSV olarak indirin; kanallar düz parçalardan oluşan bir kesim listesi alır.
keywords: spool, spool'lar, spool sayfası, izometrik, imalat, ön imalat, saha kaynağı, atölye kaynağı, alın kaynağı, kesim uzunluğu, kesim listesi, malzeme listesi, bom, çelik boru, schedule 40, hat numarası, kanal kesim listesi, kanal parçaları
from: 539f51de
---

## Neler yapacaksınız

Bir çelik boru hattını, bir atölyenin kaynakladığı ve bir montajcının yerleştirdiği parçalara çevirin: seçtiğiniz uzunluğu aşmayan, yerleştirdiğiniz saha kaynaklarında bölünmüş, her biri kendi sayfasıyla spool'lar.

Yalnızca **çelik alın kaynaklı boru** spool'lara kesilir (boru boyutları ASME B36.10M, dirsekler ASME B16.9 uzun yarıçaplı). Bakır, PVC ve PEX eklemleri alın kaynağı değildir; bu nedenle bu hatların spool'u yoktur.

## Bir hattı spool'lara kesin

1. Bir çelik boru hattı seçin. Özellikler'de **Spool'lara kes** seçeneğini işaretleyin.
2. **En uzun spool**: bir spool'un sahip olabileceği en fazla eksen uzunluğu (başlangıç için 6 m, yaklaşık 20 ft).
3. **Hat numarası**: her spool numarasının bir parçası. Spool'a alınan yeni bir hat, sistemi için bir sonraki boş numarayı alır.

Spool'lar, hattın ilk noktasından başlayarak hat boyunca numaralandırılır: `CHW-12-S01`, `CHW-12-S02` … (sistem, hat numarası, spool). Bir spool parça parça büyür; onu fazla uzatacak parça bir sonraki spool'u başlatır ve spool'dan uzun bir düz kısım, spool dolduğu yerde kesilir.

## Saha kaynaklarını yerleştirin

1. {{ui:Derleme}}'yi açın ve {{ui:Saha kaynağı}}'nı seçin.
2. Saha kaynağının gideceği spool'lu boruya tıklayın. Düz bir uzunluğun içinde boru orada kesilir; bir bağlantı parçasının ya da vananın içinde kaynak en yakın birleşime taşınır.

Özellikler, hattın saha kaynaklarını listeler; her biri {{ui:Kaldır}} ile. Her değişiklik {{ui:Geri al}} ile bir adımdır.

## Spool sayfaları

Spool'lu bir hattın Özellikleri'nde:

- {{ui:Spool sayfaları (PDF)}}: spool başına bir sayfa. Solda, 30° izometrik görünümde spool: düz uzunlukları numaralı, atölye kaynakları nokta olarak, saha kaynakları FW ile işaretli ve planın kuzeyi. Sağda spool'un numarası, boyutu, schedule'ı ve uzunluğu; ardından **kesim uzunlukları**, **bağlantı parçaları**, **kaynaklar** (spool içindeki her birleşimde bir atölye alın kaynağı, bir sonraki spool'la birleştiği yerde bir saha kaynağı) ve borunun ağırlığıyla (ASME B36.10M düz uçlu ağırlık) **malzeme listesi**.
- {{ui:Spool listesi (CSV)}}: aynısı, spool başına bir blok halinde.

:::note
Kesim uzunlukları çizildiği gibi uçtan uca alınır: kök aralığı ya da kaynak payı düşülmez. Dirsekler B16.9 uzun yarıçaplıdır; te'ler, redüksiyonlar ve vanalar geneldir, B16.9'a ya da bir üreticiye göre değil, borudan boyutlandırılmıştır ve sayfa bunu belirtir. Bağlantı parçası ağırlıkları verilmez. Çizim ve koordinasyon yardımcısıdır; bir mühendis tarafından boyutlandırılmalıdır.
:::

## IFC dosyasında

Spool'lu bir hattın her parçası **CadCraft_Spool** taşır: SpoolId'si, hattı, spool'un hat içindeki numarası ve hat boyunca nerede başlayıp bittiği. Hat, kendi kurallarını (en uzun spool, saha kaynakları, hat numarası) kendi kümesinde tutar; böylece dosya yeniden açıldığında spool'lar aynı kalır.

## Kanallar: bir kesim listesi

{{ui:Derleme}}'yi açın ve {{ui:Kanal kesim listesi}}'ne tıklayın: sisteme, şekle ve boyuta göre düz kanal parçalarının bir CSV'si. Her düz uzunluk, Kanal çubuğundaki **Parça uzunluğu**'nun (başlangıç için 1500 mm, yaklaşık 5 ft) uzunluğundaki parçalara ve kalana bölünür. Yalnızca uzunluklar: dikiş, kalınlık ya da bağlantı yoktur.
