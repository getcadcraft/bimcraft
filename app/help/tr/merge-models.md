---
title: İki kişinin bir model üzerindeki düzenlemelerini birleştirin
summary: Git, Fossil ya da Mercurial'ın aynı IFC modelinin iki düzenlenmiş kopyasını nesne nesne birleştirmesine izin verin; böylece iki kişi aynı binaya çizebilir ve işi birleştirebilir.
keywords: birleştir, git, fossil, mercurial, sürüm kontrolü, çakışma, üç yönlü, cadcraft merge, gitattributes, ifc, globalid, ekip, iki kopya, dallar
from: 50733df8
---

Bir binanın aynı kopyasını iki kişi alır: biri doğu kanadını, biri batı kanadını çizer; sonra kopyaların bir olması gerekir. Farklı nesneler üzerinde çalıştılarsa, işi bir insan yerine bir program yapabilir.

## Bu nasıl işler

Bir IFC dosyasındaki her duvar, kapı, seviye, oda ve özellik kümesinin hiç değişmeyen bir GlobalId'si vardır. Birleştirme nesneleri, program kaydettiğinde değiştikleri için dosyanın verdiği numaraya (`#123`) göre değil, bu kimlikle arar. Kendi kimliği olmayan ve bir nesneye bağlı parçalar (yerleşimler, şekiller, birimler) içerdikleriyle karşılaştırılır.

Her iki kopya da aynı IFC sürümünde olmalıdır (2x3, 4 ya da 4.3). Birleştirme dosyanızı olduğu gibi tutar, sırasını ve numaralarını korur ve yeni olanı ekler; böylece birleştirmenin bir git diff'i yalnızca birleştirmenin değiştirdiği şeyi gösterir.

## Kurulum

Git, depo başına bir kez iki satıra ihtiyaç duyar:

```
# .gitattributes
*.ifc merge=cadcraft

# her bilgisayarda bir kez
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git olmadan `cadcraft merge <base> <ours> <theirs>` çalıştırın. Fossil ve Mercurial aynı üç dosyayı kendi birleştirme aracı ayarlarında alır. Hiçbir şey yüklenmez; her şey bu bilgisayarda çalışır.

## Kurallar

- Bir özellik yalnızca bir tarafta değiştiyse, o alınır. Her iki tarafta aynı değişiklik yapıldıysa bir kez alınır.
- Aynı özellik iki farklı şekilde değiştiyse (aynı seviye iki farklı adla yeniden adlandırıldıysa) bu bir **çakışmadır**: sizin tarafınız kalır ve rapor ikisini de listeler. Sonucu açın ve elle düzeltin.
- Bir nesne listesi (bir seviyenin duvarları, bir kümenin özellikleri) bir küme olarak birleşir: her iki tarafın eklediği tutulur, her iki tarafın kaldırdığı kaldırılır. İki kişinin aynı seviyeye her biri duvar eklemesi çakışma yaratmaz.
- Herhangi bir tarafta eklenen nesne, kendi şekli ve özellikleriyle tutulur. Bir tarafta kaldırılan ve diğer tarafta dokunulmayan: kaldırılır. Bir tarafta kaldırılan ve diğer tarafta değiştirilen: kaldırılır ve rapor edilir.
- Dosyanın zaman damgası ve yazarı ile her nesnenin sahip geçmişi sizde kalır.

Geometri bütün olarak birleştirilir: bir duvarın şekli bir taraftan gelir, asla nokta nokta karıştırılmaz. Sıkıştırılmış IFC ve IFCX dosyaları birleştirilmez. Birleştirmeden sonra, kaydetmeden önce sonucu BimCraft'ta açın ve Sorunlar paneline bakın.
