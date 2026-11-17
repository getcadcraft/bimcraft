---
title: ሞዴሉን እንደ Collada ወይም ለ Google Earth ላክ
summary: ክፍት የሆኑ IFC ሞዴሎችን ለ Blender እና ለሌሎች 3D ፕሮግራሞች እንደ Collada (.dae) ፋይል፣ ወይም ሞዴሉ በካርታው ላይ ባለበት ቦታ የተቀመጠ እንደ Google Earth ጥቅል (.kmz) ይጻፉ።
keywords: collada፣ dae፣ kmz፣ kml፣ google earth፣ blender፣ ላክ፣ ጂኦሎኬሽን፣ ጂኦ-ማጣቀሻ፣ ኬክሮስ፣ ኬንትሮስ፣ አድራሻ፣ 3d ፕሮግራሞች
from: 81cfec09
---

{{ui:Collada}} በመሳሪያ አሞሌው ላይ (ወይም በምናሌና ሪባን ስልቶች ውስጥ በ ፋይል ምናሌ ላይ {{ui:Export Collada (.dae, .kmz)…}}) ክፍት ያለውን ሁሉ እንደ Collada 1.4.1 ይጽፋል፦ የሚታየውን እያንዳንዱን ሞዴል፣ የተዋሃዱ ፌዴሬትድ ሞዴሎችን ደግሞ ባስቀመጡበት ቦታ።

## ላክ

1. {{ui:Collada}} ይምረጡ።
2. ቅርጸቱን ይምረጡ፦
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}።
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}። ሞዴሉ ቦታ ሲኖረው ብቻ ይቀርባል።
3. አማራጮቹን ይምረጡ፣ ከዚያም {{ui:Export}} ይጫኑ። ፋይሉ ይወርዳል፣ እና የሁኔታ አሞሌው ስንት አካላት እንደገቡ ይነግርዎታል።

| {{ui:አማራጭ}} | ምን ያደርጋል |
|---|---|
| {{ui:Write the location into the file}} | የፋይሉን መነሻ ኬክሮስ፣ ኬንትሮስ፣ ቁመትና አቅጣጫ ወደ .dae ይጨምራል |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}፣ ወይም {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | ቦታዎችም ይገባሉ (በነባሪ ይቀራሉ) |
| {{ui:Include hidden elements}} | የደበቋቸው አካላትም ይጻፋሉ (በነባሪ የሚታየው ብቻ ይጻፋል) |

## በፋይሉ ውስጥ ያለው

| በሞዴሉ ውስጥ | በCollada ፋይሉ ውስጥ |
|---|---|
| ሕንፃ፣ ፎቆች | ጎጆ የሆኑ ኖዶች፣ ፎቆቹ በከፍታ ቅደም ተከተል፤ ከየትኛውም ፎቅ ላይ ያልሆኑ አካላት በ"Unplaced" ስር |
| እያንዳንዱ አካል | አንድ ኖድ የራሱ ሜሽ ያለው፣ እንደ ሞዴሉ ስም የተሰየመ (ስሙ፣ ከሌለ ክፍሉና መለያው) |
| ክፍል፣ GlobalId፣ የተገለጸ አይነት | በኖዱ ተጨማሪ ዳታ ውስጥ (IFC መገለጫ)፣ ትክክለኛ ስሙ (ModelCraft መገለጫ) |
| ቀለሞች | ቁሳቁሶች፣ ግልጽነታቸውን ጨምሮ |
| ክፍሎችና ዘንጎች | ሜትር፣ Z ወደ ላይ። ከፊት ያለው ሞዴል ደረጃ 0 በከፍታ 0 ላይ ነው |

ሞዴሉ በመሬቱ ላይ ወደ መነሻው ቅርብ ይቆያል፣ ስለዚህ በነጠላ ትክክለኛነት የሚሠሩ ፕሮግራሞች ሳይንቀጠቀጥ ያሳዩታል። ModelCraft የCollada ፋይሎቹን በተመሳሳዩ ጸሐፊ ይጽፋል፣ እና እነዚህን ፋይሎች በአካላቱ ስሞች ይከፍታል።

## ቦታው ከየት እንደሚመጣ

ከፊት ያለው ሞዴል ቦታውን ይሰጣል፣ {{ui:Measure}} የአንድን ነጥብ ኬክሮስና ኬንትሮስ በሚያሰላበት መንገድ ተመሳሳይ ነው፦

- በሞዴሉ የመጋጠሚያ ስርዓት በኩል የካርታ ለውጥ (IFC4 IfcMapConversion፣ ወይም የIFC2X3 ባህሪያት ስብስቦች)። ለሞዴሉ የመረጡት ስርዓት ፋይሉ ከሰየመው ስርዓት ይበልጣል።
- ካልሆነ የቦታው ኬክሮስና ኬንትሮስ (ግምታዊ፦ በመላው ቦታ ላይ ለሚበቃ)።

አቅጣጫው የሚለካ እንጂ የማይገመት ነው፦ የካርታውን ሽክርክሪት፣ እውነተኛ ሰሜንና የካርታውን convergence ግምት ውስጥ ያስገባል። ለሞዴሉ ቦታ ለመስጠት በ{{ui:Measure}} ውስጥ {{ui:Map origin…}} ይጠቀሙ።

## በሌሎች ፕሮግራሞች

- **Google Earth** የ.kmz ፋይሉን ያነባል፦ ሞዴሉ በቦታው ላይ፣ ወደ ሰሜን ዞሮ ይታያል። ተራ .dae ፋይል Google Earth ቦታ የሚያነብበት ቦታ የለውም፤ .kmz ይጠቀሙ።
- **Blender** (4.x እና ከዚያ በፊት)፦ File፣ Import፣ Collada (.dae)። እያንዳንዱ አካል ከቁሳቁሱ ጋር እንደ የራሱ ነገር ይገባል። ቦታው በፋይሉ ተጨማሪ ዳታ ውስጥ ይቀመጣል፣ Blender ግን አያነበውም። Blender 5.0 የራሱን የCollada ማስመጫ አስወግዷል፤ እዚያ በምትኩ {{ui:USD}} ወይም የglTF ላክን ይጠቀሙ፣ ወይም .dae ፋይሉን በBlender 4.5 ከፍተው .blend አድርገው ያስቀምጡ።

ሙከራዎቻችን እያንዳንዱን ፋይል በCollada 1.4.1 ሼማ ይፈትሻሉ፣ እና በገለልተኛ የCollada አንባቢ መልሰው ያነባሉ። በBlender ወይም በGoogle Earth አልከፈቱትም።
