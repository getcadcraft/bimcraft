---
title: Sahneyi başka bir programda açın
summary: Sahneyi okuyabilen herhangi bir program için USD ya da glTF dosyası olarak kaydedin ya da Studio'dan bu bilgisayardaki bir programda açın.
keywords: … içinde aç, usd, gltf, glb, dışa aktar, render programı, archviz, studio, usdview, gönder, devir, paket, unreal klasörü
from: 0a6559ee
---

{{ui:Render}} iletişim kutusunun Motor listesinden bir **… içinde aç** seçeneği seçerek sahneyi başka bir programa götürün. Modele hiçbir şey geri dönmez.

## Herhangi bir program için bir dosya

- **USD dosyası** sahneyi `.usdc` olarak kaydeder (model resim içeriyorsa `.usdz`): [Farklı USD olarak kaydet](topic:usd) ile aynı dosya; malzemeler, lambalar ve kameralarla birlikte. Örneklemeleri ve tam malzeme değerlerini korur. Çoğu render programı, oyun motoru ve görüntüleyici USD okur.
- **glTF dosyası (.glb)** malzemeler, dokular ve lambalarla birlikte daha hafif glTF 2.0 dosyasını kaydeder; neleri taşıyıp neleri bıraktığı için bkz. [Modeli bir render programına gönderin](topic:model-for-rendering).
- **Unreal proje klasörü (.zip)**, [Sahneyi bir oyun motoruna gönderin](topic:render-unreal) sayfasının yazdığı klasörü, herhangi bir bilgisayardaki bir proje için kaydeder.

Üç seçeneğin hepsi tarayıcıda ve Studio'da çalışır.

## Studio'da: bir programda açın

Studio, bu bilgisayarda sahneyi açabilecek programları listeler: aramada yolunuzda varsa usdview ve dosya türü için bilgisayarın kendi programı. Birini seçin, USD ya da glTF'den okuduğu olanı seçin ve {{ui:Render}} düğmesine tıklayın. Studio paketi Belgeler altında yeni bir klasöre (`CadCraft hand-off`; hiçbir şey üzerine yazılmaz, her gönderim kendi klasörünü alır) yazar, programı onun üzerinde başlatır ve dosyaların nerede olduğunu söyler.

| Program | En iyi okuduğu |
|---|---|
| usdview | USD |
| Bilgisayarın kendi programı | Bilgisayarda o dosya türü için ne varsa |

Studio yalnızca bu sabit listedeki programları başlatır; sayfanın adıyla istediği hiçbir şeyi çalıştırmaz ve hiçbir zaman GNU GPL lisansı altındaki bir programı başlatmaz (bkz. [Resmi başka bir programla çizin](topic:render-other-program#programs-cadcraft-never-runs)). USD ya da glTF okuyan her program, yukarıdaki **Herhangi bir program için bir dosya** bölümündeki dosyayı açar.

:::note
Twinmotion, Enscape ve diğer görselleştirme programları listede yer almaz: CadCraft bunlarla denenmedi ve onlar hakkında bir iddiada bulunmaz. Buradan çıkan bir glTF ya da USD dosyası giriş yoludur; bkz. [eklenti render programları](topic:model-for-rendering#enscape-and-other-plug-in-renderers) notları.
:::
