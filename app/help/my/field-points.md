---
title: သတ်မှတ်ရန် အမှတ်များနှင့် as-built စစ်ဆေးမှုများ
summary: ပြင်ဆင်ထားသော model မှ crew သတ်မှတ်မည့် နေရာများ (ကော်လံ ဗဟိုများ၊ နံရံအဆုံးများ၊ anchor bolt များ၊ sleeve များ၊ ရွေးထားသော element မည်သည့်တစ်ခုမဆို) ကို နံပါတ်ပေးပါ၊ total station အတွက် ရေးပါ၊ ပြီးလျှင် crew ၏ as-built အမှတ်များကို ပြန်ဖတ်ပြီး ဘာမှားနေသည်ကို ကြည့်ပါ။
keywords: layout အမှတ်များ, setting out, set out, stake out, staking, total station, survey, point file, csv, txt, pnezd, penzd, xyz, northing, easting, elevation, as built, as-built, စစ်ဆေး, tolerance, deviation, anchor bolts, ကော်လံ ဗဟိုများ, နံရံအဆုံးများ, sleeves, survey coordinates, map conversion
from: acea9606
---

ပြင်ဆင်ထားသော model မှ crew သတ်မှတ်မည့် အမှတ်များကို ပြုလုပ်ရန်နှင့် ၎င်းတို့ တိုင်းတာပြီးနောက် အမှတ်များကို စစ်ဆေးရန် {{ui:Points}} tab ကို ညာဘက်တွင် သုံးပါ။

## အမှတ်များ ပြုလုပ်ခြင်း

1. IFC model နှင့် {{ui:Points}} tab ကို ဖွင့်ပါ။
2. သတ်မှတ်ရန် ရွေးပါ: **column centres** (ကော်လံ centre line ၏ ခြေရင်း), **wall ends** (နံရံ axis ၏ အဆုံးနှစ်ခု၊ base တွင်), **anchor bolts**, **sleeves** (အမည် သို့မဟုတ် type တွင် sleeve ပါသော element များ), နှင့် **picked elements** (placement point တစ်ခုစီ — view တွင် ဦးစွာ ရွေးပါ)။
3. ပထမ နံပါတ်နှင့် prefix၊ coordinates၊ unit များ၊ ကော်လံများနှင့် ဖိုင်ကို ရွေးပါ:
   - **Model**: ဖိုင်၏ ကိုယ်ပိုင် coordinates။ **Survey grid**: model ၏ georeference ၏ map grid (IFC တွင် map conversion ရှိမှသာ ပြသည်)၊ မီတာ သို့မဟုတ် သင်ရွေးသော unit ဖြင့်။
   - ကော်လံများ **PNEZD** (point, northing, easting, elevation, description), **PENZD** သို့မဟုတ် **XYZ**; **CSV** (comma) သို့မဟုတ် **TXT** (tab)။
4. {{ui:Make points}} ကို နှိပ်ပါ: စာရင်းက ၎င်းတို့ကို ပြပြီး view က အပြာရောင်ဖြင့် မှတ်သည်။ {{ui:Download the points}} က ဖိုင်ကို ရေးသည်။

အမှတ်များသည် ပုံသေ အစဉ်အတိုင်း ထွက်သည် — အမျိုးအစားအလိုက်၊ ထို့နောက် ပလန်တလျှောက် အတန်းများအဖြစ် — ထို့ကြောင့် တူညီသော model မှ ထပ်ပြုလုပ်လျှင် တူညီသော နံပါတ်များ ရသည်။ ဖိုင်သည် CivilCraft ဖွင့်သော ဖိုင် ဖြစ်ပြီး CadCraft ၏ EXPORTPOINTS ရေးသော ဖိုင်ဖြစ်သည်: တစ်ကြောင်းတစ်အမှတ်၊ ဒဿမ သုံးနေရာ၊ ကော်မာပါလျှင် description ကို quote အတွင်း ထည့်သည်။

## as-built အမှတ်များကို စစ်ဆေးခြင်း

crew က တိုင်းတာထားသည်ကို ပြန်ပို့လျှင် မီလီမီတာဖြင့် **tolerance** ကို ရွေးပါ၊ နှင့် အမှတ်များကို မည်သို့ တွဲမည်ကို ရွေးပါ — **point number** (သူတို့က သင့်နံပါတ်ကို ထိန်းထားသည်) သို့မဟုတ် **nearest shot** ဖြင့် — ပြီးလျှင် {{ui:Read as-built points…}} ကို နှိပ်ပါ။ ဖိုင်ကို သင်ရေးခဲ့သော unit နှင့် coordinates အတိုင်း ဖတ်ပါ။

ထို့နောက် design အမှတ်တစ်ခုစီသည် tolerance **အတွင်း**၊ **အပြင်**၊ **မတိုင်းရသေး**၊ နှင့် မည်သူမျှ မတောင်းဆိုသော shot မည်သည့်တစ်ခုမဆို **extra** ဖြစ်သည်။ ဇယားက toolbar တွင် သင်ရွေးသော unit ဖြင့် ကွာခြားချက်များ ပေးသည်၊ feet ကို decimal inches အဖြစ် ပြသည် (as built နှုတ် design: east, north, height နှင့် plan ရှိ အကွာအဝေး); view က အမှတ်တစ်ခုစီကို အစိမ်းနှင့် အနီဖြင့် shot သို့ မျဉ်းနှင့် မှတ်သည်၊ တိုင်းမရသေးလျှင် မီးခိုးရောင်။ {{ui:Report (CSV)}} က နှိုင်းယှဉ်ချက် အားလုံးကို ရေးသည်။

ဤနေရာတွင် model ကို ဘာမျှ မပြောင်းပါ။ ယနေ့ မပြုလုပ်ရသေးသည်: slab အနားများ၊ grid ဖြတ်ကျော်မှုများ သို့မဟုတ် သင့်အတွက် ပြုလုပ်ထားသော အဖွင့်များမှ setting out၊ နှင့် အမှတ်များကို instrument သို့ တိုက်ရိုက် ပို့ခြင်း — ဖိုင်ကို သုံးပါ။
