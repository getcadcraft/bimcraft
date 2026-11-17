---
title: မော်ဒယ်ကို Collada သို့မဟုတ် Google Earth အတွက် ထုတ်ရန်
summary: ဖွင့်ထားသော IFC မော်ဒယ်များကို Blender နှင့် အခြား 3D ပရိုဂရမ်များအတွက် Collada (.dae) ဖိုင်အဖြစ်၊ သို့မဟုတ် မြေပုံပေါ်ရှိ နေရာတွင် ထားသော Google Earth အထုပ် (.kmz) အဖြစ် ရေးသားပါ။
keywords: collada, dae, kmz, kml, google earth, blender, ထုတ်ရန်, geolocation, georeference, လတ္တီတွဒ်, လောင်ဂျီတွဒ်, တည်နေရာ, 3D ပရိုဂရမ်များ
from: 81cfec09
---

{{ui:Collada}} toolbar ခလုတ် (သို့မဟုတ် menu နှင့် ribbon ပုံစံများရှိ File menu ထဲမှ {{ui:Export Collada (.dae, .kmz)…}}) က ဖွင့်ထားသည့်အရာများကို Collada 1.4.1 အဖြစ် ရေးသားသည်။ ပြနေသော မော်ဒယ်အားလုံး၊ ပေါင်းစပ်ထားသော မော်ဒယ်များကို သင်နေရာချထားသည့်အတိုင်း ရေးသည်။

## ထုတ်ရန်

1. {{ui:Collada}} ကို ရွေးပါ။
2. ဖော်မက်ကို ရွေးပါ။
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}။
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}။ မော်ဒယ်တွင် တည်နေရာ ရှိမှသာ ပေးသည်။
3. ရွေးချယ်စရာများကို ရွေးပြီး {{ui:Export}} ကို နှိပ်ပါ။ ဖိုင်ကို ဒေါင်းလုဒ်ဆွဲသည်၊ status bar တွင် ဒြပ်စင် မည်မျှ ပါဝင်ကြောင်း ပြသည်။

| ရွေးချယ်စရာ | ဘာလုပ်သလဲ |
|---|---|
| {{ui:Write the location into the file}} | ဖိုင်၏ မူလအမှတ်၏ latitude၊ longitude၊ height နှင့် heading ကို .dae ထဲသို့ ထည့်သည် |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}} သို့မဟုတ် {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Spaces များကိုလည်း ထည့်သည် (ပုံသေအားဖြင့် ချန်ထားသည်) |
| {{ui:Include hidden elements}} | သင်ဝှက်ထားသော ဒြပ်စင်များကိုလည်း ရေးသည် (ပုံသေအားဖြင့် သင်မြင်ရသည့်အရာများသာ ရေးသည်) |

## ဖိုင်ထဲတွင် ပါဝင်သည့်အရာများ

| မော်ဒယ်ထဲရှိ | Collada ဖိုင်ထဲရှိ |
|---|---|
| Building၊ storeys | Nested nodes၊ storeys များကို အမြင့်အလိုက် အစဉ်လိုက်၊ storey မရှိသော ဒြပ်စင်များကို "Unplaced" အောက်တွင် |
| ဒြပ်စင်တစ်ခုစီ | မိမိ mesh ပါသော node တစ်ခု၊ မော်ဒယ်ထဲကအတိုင်း အမည်ပေးထားသည် (အမည်၊ မရှိလျှင် class နှင့် tag) |
| Class၊ GlobalId၊ predefined type | Node ၏ extra data ထဲတွင် (profile IFC)၊ တိကျသော အမည်ဖြင့် (profile ModelCraft) |
| အရောင်များ | Materials၊ ပွင့်လင်းမြင်ရမှုပါဝင်သည် |
| Units နှင့် axes | Metres၊ Z up။ ရှေ့ရှိ မော်ဒယ်၏ level 0 သည် height 0 တွင် ရှိသည် |

မော်ဒယ်သည် မြေပြင်အနီးတွင် မူလအမှတ်နားတွင် ရှိနေသဖြင့် single precision ဖြင့် အလုပ်လုပ်သော ပရိုဂရမ်များက တုန်ခါမှုမရှိဘဲ ပြသနိုင်သည်။ ModelCraft သည် Collada ဖိုင်များကို အတူတူ writer ဖြင့် ရေးပြီး ဒြပ်စင်အမည်များဖြင့် ဖွင့်နိုင်သည်။

## တည်နေရာ မည်မှ လာသလဲ

ရှေ့ရှိ မော်ဒယ်က တည်နေရာကို ပေးသည်၊ {{ui:Measure}} က အမှတ်တစ်ခု၏ latitude နှင့် longitude ကို တွက်ချက်သည့်နည်းအတိုင်း ဖြစ်သည်-

- မော်ဒယ်၏ coordinate system မှတစ်ဆင့် မြေပုံ ပြောင်းလဲမှု (IFC4 IfcMapConversion၊ သို့မဟုတ် IFC2X3 property sets)။ သင်ရွေးချယ်ထားသော စနစ်သည် ဖိုင်ကပြသော စနစ်ထက် ဦးစားပေးသည်။
- မဟုတ်လျှင် ဆိုက်၏ latitude နှင့် longitude (ခန့်မှန်းခြေ၊ ဆိုက်တစ်ခုလုံးအတွက် လုံလောက်သည်)။

Heading ကို တိုင်းတာသည်၊ ယူဆချက် မဟုတ်ပါ။ မြေပုံ၏ လှည့်ပတ်မှု၊ မှန်ကန်သော မြောက်နှင့် မြေပုံ convergence တို့ကို ထည့်စဉ်းစားသည်။ မော်ဒယ်အတွက် တည်နေရာ ပေးရန် Measure ထဲရှိ {{ui:Map origin…}} ကို သုံးပါ။

## အခြားပရိုဂရမ်များတွင်

- **Google Earth** သည် .kmz ကို ဖတ်သည်။ မော်ဒယ်သည် တည်နေရာတွင် မြောက်ဘက်သို့ လှည့်ပြီး ပေါ်လာသည်။ သာမန် .dae တွင် Google Earth ဖတ်နိုင်သော တည်နေရာ မရှိပါ၊ .kmz ကို သုံးပါ။
- **Blender** (4.x နှင့် အောက်): File၊ Import၊ Collada (.dae)။ ဒြပ်စင်တစ်ခုစီသည် မိမိ material ပါသော object အဖြစ် ဝင်လာသည်။ တည်နေရာကို ဖိုင်၏ extra data တွင် သိမ်းထားသော်လည်း Blender က ဖတ်ခြင်း မရှိပါ။ Blender 5.0 တွင် built-in Collada importer ကို ဖယ်ရှားထားသည်၊ ထိုအခါ {{ui:USD}} သို့မဟုတ် glTF export ကို သုံးပါ၊ သို့မဟုတ် .dae ကို Blender 4.5 တွင် ဖွင့်ပြီး .blend အဖြစ် သိမ်းပါ။

ကျွန်ုပ်တို့၏ စမ်းသပ်မှုများသည် ဖိုင်တိုင်းကို Collada 1.4.1 schema ဖြင့် စစ်ဆေးပြီး သီးခြား Collada reader ဖြင့် ပြန်ဖတ်သည်။ Blender သို့မဟုတ် Google Earth တွင် ဖွင့်ကြည့်ခြင်း မရှိသေးပါ။
