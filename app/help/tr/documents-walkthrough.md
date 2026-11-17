---
title: "Belgeler ve revizyonlar (kasa)"
summary: Gerçek bir iş üzerinde adım adım bir gezinti: bir IFC modelleri proje klasörünü kontrol altına alın, bir modeli düzenlemeye alın, değiştirin, bir notla geri koyun, incelemeye gönderin, onaylayın ve yayımlayın, geçmişi ve kullanımı görün; ikinci bir kişinin kilitliyken ne gördüğünü ve bulut klasörleriyle nasıl çalıştığını öğrenin.
keywords: kasa, belgeler, gezinti, öğretici, düzenlemeye al, geri koy, revizyon, yayımla, onayla, kilit, geçmiş, nerede kullanılıyor, ifc, model, bulut klasörü, proje klasörü, iki kişi, paylaşılan klasör
from: 0a753f25
---

## Ne yapacaksınız

Siz Ana'sınız; Riverside clinic üzerinde bir meslektaşınız Ben ile çalışıyorsunuz. Projenin IFC modelleri, ikinizin de erişebildiği tek bir klasörde durur (paylaşılan bir sürücü, eşitlenen bir klasör ya da bir bulut klasörü). Sonunda bir dosya, ilk kopyasından yayımlanmış bir **A** revizyonuna gelmiş, sonra **B.1** olarak yeniden değiştirilmiş olacak; kimin ne yaptığını görmüş olacaksınız, ve dosyayı siz tutarken Ben'in ne gördüğünü de.

Her şey dosyalarınızın yanındaki gizli bir `.ccvault` klasöründe tutulur: bir sunucu yok, hiçbir şey yüklenmez (bir bulut klasörü istisnadır, son adıma bakın). Her düğmenin ve kuralın tek bir yerde açıklaması için, uygulamanızda varsa *Belgeler: düzenlemeye alma, revizyonlar ve yayımlama* konusuna bakın.

## 1. Proje klasörünü kurun

1. Başlangıç ekranında {{ui:Open a folder}} yanındaki {{ui:Documents}} seçeneğini ya da **Dosya** menüsündeki {{ui:Documents…}} seçeneğini seçin.
2. {{ui:Choose the project folder}} düğmesine tıklayın ve projenin IFC modellerini tutan klasörü seçin. (Proje klasörleri Studio'da ve Chrome ile Edge gibi bir klasörü açabilen tarayıcılarda çalışır. Diğer tarayıcılarda panel bunu söyler.)
3. **Siz:** yanındaki {{ui:Change}} seçeneğini seçin ve adınızı yazın: `Ana` (sorarsa bu bilgisayarın adını da). Panel artık *Siz: Ana* ve bilgisayarınızı gösterir; adınız yaptığınız her işe eklenir.
4. {{ui:Start a vault in this folder}} seçeneğini seçin ve projenin adını yazın: `Riverside clinic`. Panel *Riverside clinic için kasa başlatıldı.* yazar.

## 2. Bir dosyayı kontrol altına alın

1. **Kasada olmayan dosyalar** bölümünü açın ve `models/House.ifc` yanındaki {{ui:Add}} düğmesine tıklayın.
2. Dosya, **Kasadaki dosyalar** altında **A.1** revizyonunda ve **Devam ediyor** durumunda görünür. A.1 onun ilk kopyasıdır; kasa her revizyonun bir kopyasını tutar.

## 3. Düzenlemeye alın, değiştirin, geri koyun

1. `models/House.ifc` yanındaki {{ui:Open}} seçeneğini seçin. Model BimCraft'ta açılır ve görebilmeniz için panel kapanır. Paneli yeniden açmak için {{ui:Documents}} seçeneğini kullanın.
2. Paneli yeniden açın ve {{ui:Check out}} seçeneğini seçin. Satır artık **Size düzenlemeye alındı** der. `.ccvault/locks` içinde bir kilit dosyası oluşturulmuştur; siz geri koyana kadar kimse bu dosyayı düzenlemeye alamaz.
3. Modeli değiştirin: bir duvarı taşıyın, bir kapı ekleyin. Model size düzenlemeye alınmadıysa Kaydet reddedilir ve nedenini söyler; Farklı kaydet ise her zaman, kendi kopyanız için çalışır.
4. Paneli açın, {{ui:Check in}} seçeneğini seçin ve neyin değiştiğini yazın: `Kapıyı taşıdım`. Panel *A.2 olarak geri konuldu* der. Proje klasöründeki dosya artık açık olan modeldir ve kilit kalkar. Hiçbir değişiklik yapmadan geri koymak revizyonu korur.

Fikrinizi değiştirirseniz, {{ui:Undo check-out}} dosyayı yeni bir revizyon oluşturmadan geri verir.

## 4. İnceleme ve yayımlama

1. {{ui:Send for review}} seçeneğini seçin. Durum **İncelemede** olur ve dosya salt okunur olur.
2. Onaylamadan önce {{ui:Project settings}} seçeneğini seçin ve kimin onaylayabileceğini (her satıra bir ad) listeleyin, örneğin `Ben` ve `Carla`; ayrıca onaylayanın yazar dışında biri olması gerektiği kuralını işaretleyin. {{ui:Save settings}} düğmesine tıklayın. Artık kasanın kendisi başkalarını reddeder.
3. Ben (ya da Carla) {{ui:Approve}} seçeneğini seçer ve onaylayanın adını yazar. Durum **Yayımlandı** olur ve revizyon **A** olur; onaylayanın adı ve *onaylayan* bilgisiyle birlikte. Yayımlanmış bir dosya salt okunurdur. {{ui:Send back}} onu bir nedenle birlikte Devam ediyor durumuna geri döndürürdü.

Onaylayanın adı panelde yazılan addır; bu, kimin onayladığının bir kaydıdır, kimlik kanıtı değildir.

## 5. Yeni bir revizyon

1. Yayımlanmış dosyada {{ui:New revision}} seçeneğini seçin. Dosyayı bir sonraki harf için tutarsınız.
2. Değiştirin, sonra {{ui:Check in}} seçeneğini seçin. Revizyon **B.1** olur, devam ediyor durumunda. Aynı şekilde yayımlayın, **B** olur. İlk geri koymadan önce {{ui:Undo check-out}} dosyayı **A**'da bırakır.

Revizyon harfleri A, B … Z, AA, AB diye gider. Standardınız bazı harfleri atlıyorsa, *ASME Y14.35 sırasını kullan* proje ayarı, sonraki revizyonlar için I, O, Q, S, X ve Z'yi atlar.

## 6. Ne olduğunu görün

Dosyanın adını seçerek ayrıntılarını açın:

- **{{ui:History}}**: her olay, en yeniden eskiye doğru, kim, hangi bilgisayar ve ne zaman ile: *A.2 geri konuldu* (Ana), *Yayımlandı* (Ben) ve benzeri.
- **{{ui:Revisions}}**: revizyon tablosu; tutulan her revizyon, tarihi, geri koyan kişi, notu ve onaylayanıyla birlikte. Kasa her birinin bir kopyasını `.ccvault/revs` içinde tutar.
- **{{ui:Uses}}**: bir IFC modelinin işaret ettiği belgeler.
- **{{ui:Used by}}**: bu dosyaya işaret eden kasadaki her modeli listeler.

## Başka belgelere işaret eden modeller

Klasördeki başka belgelere (çizimler, listeler) işaret eden bir IFC modeli, bunları **Kullandıkları** altında gösterir; bunların her biri de modeli **Kullanan** altında gösterir. Bir belgeyi geri koyduğunuzda, hangi modellerin ona başvurduğunu görebilirsiniz.

## 7. Dosyayı siz tutarken Ben ne görür

Şimdi dosyayı yeniden düzenlemeye alın ve Ben'den aynı proje klasörünü kendi bilgisayarında açmasını ve paneli açmasını isteyin. Dosyanın satırında **Düzenlemeye alan: Ana**, Ana'nın bilgisayarını ve zamanı görür; {{ui:Check out}} düğmesi yoktur. Yine de denerse kasa reddeder: kilit, sistemin iki kez oluşturmayacağı bir dosyadır; bu yüzden, Studio'da klasör diskte olduğunda, iki kişi aynı anda bile dosyayı birlikte tutamaz. (Bir tarayıcıda klasör yalnızca en iyi çabayı sağlar ve panel bunu **Klasör** altında söyler.)

Ana uzaktaysa ve Ben dosyaya ihtiyaç duyarsa, {{ui:Break check-out}} onu serbest bırakır. Bir neden yazmalıdır; neden, kimin düzenlemesi olduğuyla birlikte kayda girer. Proje yöneticileri listeliyorsa, yalnızca onlar yapabilir. Eskime sınırından (varsayılan olarak 14 gün) eski bir düzenleme *uzun süredir* olarak işaretlenir. Bozulmadan sonra Ana'nın geç geri koyması reddedilir; böylece ikiniz birbirinizin üzerine yazamazsınız.

## 8. Bulut klasörleri

Bulut klasörü, ekibinizin bulut depolamasında tutulan bir proje klasörüdür; ekibin paylaşılan bir sürücüye ihtiyacı yoktur. CadCraft hesabınızla oturum açmış Studio'da, panel {{ui:Choose the project folder}} yanında {{ui:Open a cloud folder}} seçeneğini gösterir. Onu seçin ve klasörü seçin; klasörler **çalışma alanı / klasör** biçiminde listelenir. Önce bir çalışma alanı sahibi klasörü oluşturur ve ekibin bulut depolaması etkin olmalıdır. Yukarıdaki her şey aynı şekilde çalışır; kilidi sunucu oluşturur ve bu, kişiler arasında katıdır. Oturum açmadıysanız panel oturum açmanızı söyler. Sıradan bir tarayıcı sekmesinde bulut düğmesi sunulmaz; Studio'yu kullanın.

## Deneyin

Yukarıdaki sekiz adımı gerçek bir dosyanın kopyasıyla yapın. İki kişilik adımlar için başka bir kişiye ya da iki adlı iki pencereye ihtiyacınız var. Gerçek bir paylaşılan klasörle deniyorsanız, Topluluk test sayfası tam olarak bunu soran bir kontrol listeler ve sonuçları kabul eder.
