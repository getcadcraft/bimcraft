---
title: Miktarları toplayın, öğeleri listeleyin ve mekânları listeleyin
summary: Öğeleri sayın ve uzunluklarını, alanlarını, hacimlerini ya da herhangi bir sayısal özelliğini herhangi bir özelliğe göre gruplayarak toplayın; her öğeyi tek satır olarak listeleyin ya da mekânları alanları ve hacimleriyle listeleyin. Her biri CSV olarak indirilir.
keywords: miktar, miktarlar, metraj, toplamlar, toplam, liste, metraj cetveli, boq, qto, csv, gruplama, sayma, uzunluk, alan, hacim, mekânlar, oda, oda listesi, alan listesi, öğe listesi
from: e2e7210c
---

## Ne yaparsınız

Bir modelden toplamları çıkarın: kat başına duvar uzunlukları, tip başına kapı sayıları, malzeme başına döşeme hacmi, her bölgenin maliyeti.

## Adımlar

1. Bir IFC modeli açın.
2. Sol panelde {{ui:Miktar toplamları}} açın.
3. {{ui:Say}} içinde {{ui:Her öğe}} ya da yalnızca seçtikleriniz seçeneğini belirleyin.
4. {{ui:Şuna göre grupla}} altında {{ui:Sınıf}} gibi bir özellik seçin. Üç düzeye kadar daha fazla ayırmak için {{ui:Grup ekle}} tıklayın, örneğin {{ui:Kat}} bazında.
5. {{ui:Topla}} altında toplanacak sayıları işaretleyin. Modelin miktar kümeleri başlangıçta işaretlidir.
6. Tabloyu bir elektronik tabloda açmak için {{ui:CSV indir}} tıklayın.

## Ne görmelisiniz

- Her grup için bir satır; kaç öğesi olduğu ve her toplam. Bir de toplam satırı.
- Değeri olmayan öğeler sayılır ama toplama bir şey eklemez. Böyle olduğunda CSV, toplamın yanına bir "dışarıda bırakılan" sütunu ekler ki kaç tane olduğunu görebilesiniz.
- Sayılar dosyanın sakladığı gibi, dosyanın kendi birimlerindedir; uzunluklar çoğu zaman milimetredir.

## Öğe başına bir satır ya da mekânlar

{{ui:Göster}} değerini değiştirin:

- **Öğe başına bir satır**: her öğe kendi satırında; özellikler {{ui:Sütunlar}} altında, sayılar {{ui:Topla}} altında. CSV her öğenin GlobalId'siyle başlar. Bir satırdaki ilk değere tıklayarak o öğeyi seçin.
- **Mekânlar**: her odanın numarası, adı, katı, alanı ve hacmi ile toplamları. Alanlar ve hacimler, dosyanın belirttiği mekân miktarlarından gelir. Dosyada yoksa mekânın şeklinden m² ve m³ olarak ölçülür ve italik gösterilir; CSV hangisinin hangisi olduğunu söyler.

## Sonraki

- [Sınıfa, ada ya da özelliğe göre öğe bulun](topic:find)
- [Bir özelliğe göre öğeleri renklendirin](topic:color-by-property)

## Altyapı (IFC 4.3)

Görünüm listesinden **Altyapı (IFC 4.3)** seçerek yolların, demiryollarının, köprülerin ve deniz yapılarının sınıf ve tipe göre toplamlarını görün; dosyanın kendisinin belirttiği uzunluk, alan ve hacimle birlikte. Dosyanın belirtmediği bir miktar boş bırakılır, asla hesaplanmaz. **Altyapı miktarlarını TakeoffCraft'a gönder**, TakeoffCraft'ın tipli miktarlar olarak açtığı bir `.quantities.json` dosyası kaydeder.
