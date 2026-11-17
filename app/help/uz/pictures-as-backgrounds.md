---
title: Rasmni reja ostiga qoʻyish
summary: PNG, JPEG yoki WebP rasmni (skanerlangan reja, eskiz, obyekt fotosurati, aerofoto) qavat rejasi ostiga yoki tik tekislikka joylashtiring, ikki nuqta bilan masshtablang, siljiting, buring, xiralashtiring va qulflang, uni 3D da va reja PDF da koʻring, hamda toʻplamda modelning yonida saqlang.
keywords: rasm, tasvir, fon, PNG, JPEG, WebP, skan, eskiz, fotosurat, aerofoto, situatsion reja, masshtab, shaffoflik, qulflash, tagqatlam, kuzatish
from: e3c78d1f
---

## Rasmni joylashtirish

{{ui:Draw}} ni yoqing, qavatga oʻting va {{ui:Build}} menyusidan {{ui:Picture}} ni tanlang. Keyin {{ui:Insert picture…}} ni bosing va PNG, JPEG yoki WebP faylni tanlang. U brauzerda oʻqiladi va hech qachon yuklanmaydi. U reja ostida koʻrinishga moslab paydo boʻladi va asboblar panelida u hali masshtablanmaganligi aytiladi. Siz chizgan hamma narsa uning ustida boʻladi.

## Masshtabni belgilash

{{ui:Scale}} ni tanlang, rasmda ikki nuqtani bosing, ularning haqiqiy masofasi maʼlum (skanerlangan rejadagi devorning ikki uchi, eskizdagi chop etilgan oʻlcham), keyin masofani yozing va {{key:Enter}} ni bosing. Rasm birinchi bosgan nuqtangiz atrofida kattalashadi yoki kichrayadi. {{key:Esc}} bekor qiladi.

## Nusxalangan hududni qoʻyish

MarkupCraft da {{ui:Copy area}} PDF varaqning bir qismini rasm sifatida nusxalaydi. BimCraft ga qaytib, qavat rejasi koʻrinib turganda {{key:Ctrl+V}} ni bosing (yoki {{ui:Edit}} menyusidagi {{ui:Paste}} ni): hudud rejaga rasm sifatida tushadi, koʻrsatkich turgan joyda markazlashtirilgan (yoki koʻrinish oʻrtasida). Varaqda chizma masshtabi boʻlsa, u haqiqiy oʻlchamida keladi, shuning uchun undagi devor sizning devorlaringiz kabi uzun boʻladi. Masshtab boʻlmasa, u qogʻoz oʻlchamida keladi va {{ui:Scale}} boshlanadi, shuning uchun ikki nuqtani bosib, masofasini yozishingiz mumkin. Ustki qatlam sifatida nusxalangan hudud nusxalangan vaqtdagi shaffoflik bilan boshlanadi. Bu bitta bekor qilish qadami va boshqa rasm kabi saqlanadi.

{{ui:Paste}} oxirgi nusxalangan narsani oladi: nusxalangan hududni yoki BimCraft da nusxalangan narsani. {{key:Ctrl+V}} buferingizdagi boshqa har qanday PNG, JPEG yoki WebP rasmni ham qoʻyadi; u {{ui:Insert picture…}} kabi joylashtiriladi va hali masshtablanmagan. Nusxalangan hudud olti soat eslab qolinadi.

## Siljitish, burish, xiralashtirish, qulflash

{{ui:Move}} rasmda tayanch nuqtani, keyin uni qoʻyilishi kerak boʻlgan joyni oladi. {{ui:Turn}} rasm markazi atrofida gradusdagi burchakni oladi. {{ui:Opacity}} uni xiralashtiradi, shunda chiziqlaringiz ajralib turadi. {{ui:Lock}} chizish paytida uning siljishini toʻxtatadi; qulflangan rasm hali ham shaffoflikni oʻzgartirishga va yashirishga imkon beradi. Har bir oʻzgarish bitta bekor qilish qadami.

## Bir nechta rasm, bir nechta qavat

Rasm qoʻyilgan qavatga tegishli va u shu qavatning reja va shift rejasida koʻrinadi. Rasmni bosing yoki roʻyxatdan tanlang. {{ui:Hide}} uni oʻchiradi, lekin olib tashlamaydi; {{ui:Remove}} (yoki {{key:Delete}}) uni modeldan chiqaradi.

## Rasmlar 3D koʻrinishda

Har bir rasm 3D koʻrinishda ham tekis tekislik sifatida turadi: reja rasmi oʻz qavatida yotadi, tik tekislik rasmi esa kesim chizigʻi ustida turadi. U model ustiga chiziladi, modelni yashirmasdan, va model uning orqasidagi qismini yashiradi. Ustma-ust rasmlar masofa boʻyicha tartiblanadi. Shaffoflik, Yashirish, Qulflash va Olib tashlash bir xil ishlaydi, {{ui:Show in 3D}} esa faqat 3D koʻrinishda barcha tekisliklarni oʻchiradi. Har bir qavatda koʻrinishlar tez boʻlishi uchun eng koʻpi bilan 8 ta rasm boʻladi.

## Tik tekislikdagi rasm

{{ui:Place on}} ostida {{ui:A vertical plane (section line)}} ni tanlang, keyin {{ui:Insert picture…}} ni bosing. Rejada chiziqning ikki uchini bosing (devor yuzi uchi tutiladi), yoki {{ui:Over a section line}} ichidan qavatning nomlangan kesim chizigʻini tanlang — bosish talab qilinmaydi. Rasm shu chiziq ustida qavatda turadi, chiziq kengligicha. Uning {{ui:Width}} ni, {{ui:Along the line}} oʻrnini va {{ui:Height above level}} ni yozib kiriting; {{ui:Turn}} uni oʻz tekisligida buradi. Tik rasm reja ostida chizilmaydi; siz uni ishlayotganda reja uning chizigʻini koʻrsatadi. BimCraft da interaktiv 2D kesim oynasi yoʻq: kesim va fasadlar varaqlarda chiziladi, va rasmlar bu varaq koʻrinishlarida hali chop etilmaydi.

## Chop etish

Rejadagi {{ui:Print view}} qavatning rasmlarini chizma ostida PDF ga yozadi, ular masshtabi, burilishi va shaffofligi bilan, varaq chegarasigacha kesilgan; yashirin rasm chiqarilmaydi. JPEG oʻz holicha qoʻyiladi; boshqa rasmlar avval varaqda 200 dpi ga tushiriladi.

## Model yonida saqlanadi

Rasmning baytlari IFC matniga yozilmaydi. Model har birini nomi bilan bogʻlaydi (masalan, pictures/<id>.png kabi IfcDocumentReference) va baytlar loyiha toʻplamida yuradi. {{ui:Save as bundle…}} ni (yoki {{ui:Save as IFC}} ni va uni tanlang) ishlating: sizda modeli va rasmlari bilan bitta .ccbundle fayl boʻladi; IFC kichik qoladi va tahrirlar tez boʻladi. .ccbundle ni oching — rasmlar qaytadi.

Oddiy .ifc rasmni katta boʻlib ketmasdan saqlay olmaydi. Saqlaganingizda BimCraft necha rasm undan tashqarida saqlanayotganini aytadi va toʻplam yoki 512 KB gacha rasmlarni ichiga joylaydigan oddiy IFC ni taklif qiladi, qolganlarini tashlab ketadi. Oddiy .ifc ni toʻplamisiz ochilsa, u rasmlarni yoʻq deb koʻrsatadi va Muammolar ularni roʻyxatlaydi; ular saqlangan .ccbundle ni oching. Birinchi versiya bilan saqlangan, rasmi IFC ichida boʻlgan fayllar hali ochiladi, va toʻplam bilan saqlash ularning rasmlarini tashqariga chiqaradi. Rasm 6 MB gacha oʻz holicha saqlanadi; katta rasm avval kichraytiriladi va buni sizga aytiladi. Boshqa dasturlar modelni ochadi va rasmlarni eʼtiborsiz qoldiradi. Hali masshtablanmagan rasm Muammolar da eslatma sifatida roʻyxatlanadi.

## Kesim va fasad varaqlarida

Tik tekislikdagi rasm ({{ui:Vertical}} ni rasm panelida tanlang va chiziqning ikki uchini bosing, yoki uni nomlangan kesim chizigʻi ustiga qoʻying) uni toʻgʻridan-toʻgʻri qaragan varaq koʻrinishlarida chop etiladi. Kesim oʻz kesim chizigʻida turgan yoki shu kesim chizigʻi ustiga nom boʻyicha qoʻyilgan rasmni koʻrsatadi. Fasad oʻziga qaragan tekisligi bor har bir tik rasmni koʻrsatadi. Rasm koʻrinishning chiziqlari ostida, koʻrinishning masshtabida chiziladi, koʻrinish chegarasiga kesiladi va shaffofligini saqlaydi. {{ui:Sheets…}} ni oching va uni koʻring; varaq PDF rasmni tasvir sifatida olib yuradi. Orqadan qaralganda rasm 3D dagidek aks etgan boʻladi. Yashirin rasmlar chiqarib tashlanadi.
