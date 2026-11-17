---
title: ကွန်ကရစ် အဖွဲ့ဝင်များကို စစ်ဆေးပြီး ငလျင်အင်အားများ ပြုလုပ်ရန်
summary: ဖွင့်ထားသော မော်ဒယ်၏ ကွန်ကရစ် beam နှင့် column များ၏ ဘားများကို သတ်မှတ်ပါ၊ ACI 318-19 အတိုင်း စစ်ဆေးပါ၊ ကြမ်းပြင်တောင့်တင်းသော ကြမ်းပြင်များပေါ်တွင် ASCE 7-22 အတိုင်း ညီမျှသော ဘေးလိုက်အင်အားများ ပြုလုပ်ပါ၊ storey drift ကို ကြည့်ပါ။ အင်ဂျင်နီယာ စစ်ဆေးရန် အကူအညီ ဖြစ်သည်။
keywords: concrete, reinforced concrete, ACI 318, ACI 318-19, rebar, beam, column, shear, ties, seismic, earthquake, equivalent lateral force, ELF, ASCE 7-22, drift, storey drift, floors, rigid diaphragm, story weight, utilisation, structural, engineer, analysis, ကွန်ကရစ်, ငလျင်, အင်ဂျင်နီယာ, ခွဲခြမ်းစိတ်ဖြာမှု
from: 2f342e72
---

{{ui:Analysis}} tab ရှိ {{ui:Concrete members}} နှင့် {{ui:Seismic loads}} block များသည် ဖွင့်ထားသော IFC ၏ ကွန်ကရစ် beam နှင့် column များကို စစ်ဆေးပြီး ၎င်း၏ frame ၏ ကြမ်းပြင်များပေါ်တွင် ငလျင်၏ ဘေးလိုက်အင်အားများကို ပြုလုပ်သည်။ ၎င်းတို့သည် DetailCraft ၏ block များနှင့် တူညီပြီး {{ui:Analysis}} tab ၏ analysis ပြီးနောက် run ကာ အခြား analysis settings များနှင့်အတူ IFC ထဲတွင် သိမ်းသည်။

:::warning
ရလဒ်များသည် **အင်ဂျင်နီယာ စစ်ဆေးရန်အတွက်** ဖြစ်သည်- တစ်ဦးက သုံးသပ်သည့်အထိ အကူအညီသာ ဖြစ်သည်။ ကွန်ကရစ် စစ်ဆေးမှုများသည် first-order အင်အားများကို သုံးသည် (non-sway ဟု သင်ခေါ်သော frame ရှိ column ကို magnified moment အတွက် ဒီဇိုင်းလုပ်သည်)၊ sway magnification မပါ၊ torsion ဒီဇိုင်း မပါ၊ seismic detailing (ACI chapter 18) မပါ၊ tie detailing မပါ။ ငလျင်အင်အားများတွင် redundancy factor၊ ဒေါင်လိုက် ငလျင်သက်ရောက်မှု၊ torsional amplification နှင့် P-delta effects များ ပါဝင်ခြင်း မရှိပါ။ **Wind loads မတည်ဆောက်ရသေးပါ**- စံနှုန်း၏ wind အခန်းများသည် ပရောဂျက်၏ ကိုးကားစာမျက်နှာများတွင် မရှိပါ။
:::

## BimCraft ဖတ်သည့်အရာ

Analysis သည် မော်ဒယ်၏ beam၊ column နှင့် brace များကို ၎င်းတို့၏ profile များဖြင့် ဖတ်သည် (see [Analyse the structural frame](topic:frame-analysis))။ {{ui:Concrete members}} block သည် ၎င်းတို့အသုံးပြုသော section အားလုံးကို စာရင်းပြုသည်။ ကွန်ကရစ်ဖြစ်သော section တွင် {{ui:Set up as concrete…}} ကို နှိပ်ပါ- BimCraft သည် profile ၏ ဧရိယာနှင့် stiffness မှ ထောင့်မှန်ကွက်တစ်ခု ယူသည် (သင်ပြောင်းနိုင်သော အကျယ် b နှင့် အနက် h)၊ ထို့ကြောင့် ထောင့်မှန်ကွက်နှင့် နီးစပ်မှု မရှိသော section (ပုံစံလုပ်ထားသော သံမဏိပုံသဏ္ဍာန်) သည် ပြင်ရန် အရွယ်အစားကို ပေးသည်၊ သို့မဟုတ် မထိဘဲ ထားသည်။

ကွန်ကရစ်အဖြစ် သတ်မှတ်ထားသော section နှင့် material အမည် ကွန်ကရစ်ဖြစ်သော ဒြပ်စင်တိုင်းကို ကွန်ကရစ်အဖြစ် ခွဲခြမ်းသည်- E = 4700 √f′c၊ 2400 kg/m³၊ နှင့် ပုံသေအားဖြင့် **ကွဲအက်သော section များ** (column 0.70 Ig၊ beam 0.35 Ig၊ ACI 318-19 Table 6.6.3.1.1(a))။ ၎င်းကို ပိတ်ရန် {{ui:Gross sections}} ကို ရွေးပါ။ ဤ settings များ မရှိဘဲ မော်ဒယ်ကို အရင်အတိုင်း အတိအကျ ခွဲခြမ်းသည်။

## ဘားများ၊ ပေါင်းစပ်မှုများ၊ စစ်ဆေးခြင်း

Section တိုင်း၏ cover၊ အပေါ်၊ အောက်နှင့် ဘေးဘားများ (သို့မဟုတ် column cage) နှင့် ties များကို ပေးပါ၊ f′c၊ fy၊ fyt၊ K နှင့် sway သို့မဟုတ် non-sway ကို သတ်မှတ်ပါ။ Load cases များကို ၎င်းတို့၏ အမျိုးအစား ပေးပါ၊ {{ui:Make combinations}} (ASCE 7 §5.3.1) ကို နှိပ်ပြီး ထို့နောက် {{ui:Check concrete}}- ဒြပ်စင်တိုင်း utilisation ရပြီး မော်ဒယ်ပေါ်တွင် အရောင်ခွဲပြသည်။ စွမ်းရည်ထက်ကျော်သော ဒြပ်စင်များနှင့် ကန့်သတ်ချက်ထက် ကျော်သော storey drift ကို clause နှင့်အတူ {{ui:Problems}} တွင် စာရင်းပြုသည်၊ တစ်ခုကို နှိပ်ပြီး ဒြပ်စင်ကို ရွေးပါ။

## ကြမ်းပြင်များနှင့် ငလျင်အင်အားများ

{{ui:Seismic loads}} block တွင် {{ui:Find floors}} သည် beam နှစ်ခု သို့မဟုတ် ထိုထက်ပိုသော beam များ တွေ့ဆုံသော အဆင့်များကို ရှာသည်၊ တစ်ခုစီသည် rigid diaphragm ဖြစ်လာသည်။ {{ui:Take weights from cases}} သည် သင်ပေးသော factor ရှိ case များမှ ကြမ်းပြင်တစ်ခုစီ၏ ငလျင်အလေးချိန်ကို ဖတ်သည်။ SDS၊ SD1၊ S1၊ R၊ Ie၊ Cd၊ TL၊ စနစ်နှင့် အန္တရာယ် အမျိုးအစား ကို ဖြည့်ပါ၊ ထို့နောက် {{ui:Make seismic cases}} (ASCE 7-22 12.8- period၊ base shear၊ ကြမ်းပြင်များအထိ ဖြန့်ဝေခြင်း၊ 5 % accidental torsion)။ Storey အင်အားများနှင့် drift စစ်ဆေးမှု (12.12) ကို run ပြီးနောက် ပြသည်။ ရွေးချယ်သော analysis frame ကို source အဖြစ် ရွေးလျှင် တူညီသော period နှင့် storey stiffness သည် [Flood၊ wind သို့မဟုတ် ငလျင်ကို ပြန်ဖွင့်ခြင်း](topic:hazard-playback) ရှိ ငလျင်ကိုလည်း ကျွေးသည်။

ကွန်ကရစ် ကြမ်းပြင်ပြားနှင့် နံရံများသည် analysis တွင် plates ဖြစ်လာပြီး {{ui:Slab reinforcement}} block (ကြမ်းပြင်ပြား သံမျှင်) သည် မီတာတစ်ခုလျှင် လိုအပ်သော သံမျှင်ကို တွက်သည်။ စစ်ဆေးမှုတိုင်း၏ အသေးစိတ်ကို အမည်တူ DetailCraft ၏ topic တွင် ရှိသည်။
