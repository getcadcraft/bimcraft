---
title: ဖွဲ့စည်းပုံ ဘောင်ကို ခွဲခြမ်းစိတ်ဖြာခြင်း
summary: သင်သတ်မှတ်သော load case နှင့် combination များအောက် မော်ဒယ်၏ ထုပ်(ဘီမ်)၊ ကော်လံနှင့် ခေါင့်ဆွဲတုံးများ၏ အင်အား၊ တုံ့ပြန်အင်အားနှင့် ကွေးညွှတ်မှုများကို ရှာပြီး IFC တွင် သိမ်းသည်။ ခွဲခြမ်းစိတ်ဖြာရေး ကိရိယာ ဖြစ်သည်၊ ကုဒ်စစ်ဆေးချက် မဟုတ်ပါ။
keywords: ခွဲခြမ်းစိတ်ဖြာမှု, ယူနစ်များ, feet and inches, display unit, structural analysis, design checks, utilisation, rolled, welded, AISC 360, EN 1993-1-1, frame analysis, analytical model, stiffness method, loads, load case, combination, dead load, live load, self weight, own weight, reactions, bending moment, shear, axial force, deflection, deflected shape, supports, pinned, fixed, release, report, pdf, csv, craftscript, frame3d, beams, columns, members
from: b93b58c4
---

{{ui:Analysis}} tab ညာဘက်တွင် ဖွင့်ထားသော မော်ဒယ်၏ ထုပ်(ဘီမ်)၊ ကော်လံနှင့် ခေါင့်ဆွဲတုံးများ၏ အင်အားများ၊ ကော်လံခြေရင်းရှိ တုံ့ပြန်အင်အားများနှင့် အစိတ်အပိုင်းများ ဘယ်လောက် ကွေးသည်ကို သင် ပေးသော ဝန်များအတွက် ရှာပေးသည်။

:::warning
ဤသည်မှာ **ခွဲခြမ်းစိတ်ဖြာရေး ကိရိယာ ဖြစ်ပြီး ကုဒ်စစ်ဆေးချက် မဟုတ်ပါ**။ ခွဲခြမ်းစိတ်ဖြာမှုသည် ဒီဇိုင်းကုဒ် မသုံးပါ: အစိတ်အပိုင်းများ အရွယ်မသတ်မှတ်ပါ၊ စွမ်းရည်ကို မစစ်ပါ၊ load factor များ မရွေးပါ။ အင်ဂျင်နီယာက analytical model၊ ၎င်း၏ ဝန်များနှင့် ထောက်ခံချက်များကို စစ်ပြီး ဂဏန်းများ၏ အဓိပ္ပာယ်ကို ဆုံးဖြတ်သည်။ အောက်ရှိ {{ui:Design checks}} block သည် AISC 360 သို့မဟုတ် EN 1993-1-1 နှင့်အညီ rolled steel I-shape များကို စစ်သည်။ အင်ဂျင်နီယာ သုံးသပ်ပြီးသည်အထိ ကိရိယာသာ ဖြစ်သည်: [ဒီဇိုင်း စစ်ဆေးချက်များ](topic:frame-analysis#design-checks) ကို ကြည့်ပါ။
:::

## လည်ပတ်ရန်

1. IFC မော်ဒယ်နှင့် {{ui:Analysis}} tab ကို ဖွင့်ပါ။
2. View တွင် ထုပ်(ဘီမ်)၊ ကော်လံ သို့မဟုတ် ခေါင့်ဆွဲတုံးတစ်ခု သို့မဟုတ် ထို့ထက်ပို ရွေးပါ၊ {{ui:Case}}၊ {{ui:Load}} နှင့် {{ui:Direction}} ကို ရွေး၊ တန်ဖိုး ရိုက်ထည့်ပြီး {{ui:Add load}} ကို နှိပ်ပါ: အစိတ်အပိုင်းတစ်လျှောက် ပြန့်သော ဝန်အတွက် kN/m၊ အမှတ်ဝန်အတွက် kN။
3. {{ui:Run analysis}} ကို နှိပ်ပါ။

ဇယားတွင် အစိတ်အပိုင်းတစ်ခုစီ၏ အကြီးဆုံး axial force၊ shear များ၊ bending moment များ၊ torsion နှင့် deflection ပါသည်။ အစိတ်အပိုင်း၏ အမည်ကို နှိပ်လျှင် view တွင် ရွေးမည်။ အောက်တွင် reaction များ။ {{ui:On the model}} သည် ကွေးညွှတ်ပုံသဏ္ဍာန်ကို ဆွဲသည်၊ သို့မဟုတ် တစ်ခုသော အရာကို အစိတ်အပိုင်းတစ်ခုစီဘေးတွင် diagram အဖြစ် ဆွဲသည်။ မော်ဒယ် ပြောင်းသည့်အခါ ရလဒ်များ ပျက်ပြယ်သည်: ထပ်မံ လည်ပတ်ပါ။

ဝန်နှင့် ဆက်တင်တိုင်းသည် {{ui:Changes}} စာရင်းတွင် ပြောင်းလဲမှု တစ်ခု ဖြစ်သည်: {{ui:Undo}} ဖြင့် ပြန်ရသည်၊ {{ui:Save as IFC}} ဖြင့် ဖိုင်တွင် ထိန်းထားသည် (ပရောဂျက်၏ `CadCraft_Analysis` property set)၊ ထို့ကြောင့် နောက်တစ်ကြိမ် မော်ဒယ် ဖွင့်သည့်အခါ ဝန်များ ရှိနေသေးသည်။

## Analytical model ကို ဘယ်လို ပြုလုပ်သလဲ

- IfcBeam၊ IfcColumn နှင့် IfcMember တစ်ခုစီ၏ ပုံသဏ္ဍာန်သည် တည့်သော extrusion တစ်ခုတည်း ဖြစ်လျှင် ၎င်း၏ section ၏ centroid လိုင်းပေါ်တွင် member တစ်ခု ဖြစ်သည်။ Section properties ကို profile မှ ယူသည်: I၊ U၊ L နှင့် T ပုံသဏ္ဍာန်များ၊ စတုဂံနှင့် ပိုက်များ၊ စက်ဝိုင်းနှင့် စက်ဝိုင်းပိုက်များ၊ သို့မဟုတ် မည်သည့် ပိတ်ထားသော outline မဆို (ထိုအခါ torsion constant သည် ခန့်မှန်းချက် ဖြစ်ပြီး report တွင် ဖော်ပြသည်)။ အခြားအရာများကို ချန်ထားပြီး ရေတွက်သည်။
- မော်ဒယ်တွင် ထုပ်(ဘီမ်)များသည် ကော်လံ၏ မျက်နှာတွင် ရပ်ပြီး ကြမ်းပြင်အောက်တွင် ထိုင်သည်။ Member အဆုံးတစ်ခုစီကို ၎င်း၏ ကိုယ်ပိုင်လိုင်းအတိုင်း ဘောင်ဆွဲဝင်သော member ၏ axis ပေါ်သို့ ရွှေ့သည် (section အရွယ်အစားခန့်အတွင်း နီးလျှင်) ထို့နောက် ထို member ကို ထိုနေရာတွင် ခွဲသည်။ Report တွင် အဆုံးမည်မျှ ရွေ့သည်ကို ဖော်ပြသည်။
- **ကော်လံခြေရင်း** အောက်တွင် မည်သည်မျှ မရှိသော နေရာများသည် ထောက်ခံချက်များ ဖြစ်သည်: ပြင်ဆင်ထား (fixed; အစ) သို့မဟုတ် pinned (နေရာတွင် ကိုင်ထား၍ လှည့်ခြင်းကို ကန့်သတ်ထား၊ လှည့်ခွင့် ရှိသည်)။
- **ထုပ်(ဘီမ်) အဆုံးများ** သည် {{ui:Beam ends with no connection}} စည်းမျဉ်းဖြင့် rigid သို့မဟုတ် pinned ဖြစ်သည်။ **Braces** (IfcMember) သည် အဆုံးနှစ်ဖက်တွင် pinned ဖြစ်သည်။ Member တစ်ခုကို ရွေး၍ ၎င်း၏ အဆုံး သို့မဟုတ် ကော်လံခြေရင်းကို ကိုယ်ပိုင် စည်းမျဉ်း ပေးနိုင်သည်။
- Material များကို အမည်ဖြင့်: ကွန်ကရစ် (E = 30 GPa)၊ သစ် (E = 11 GPa)၊ အခြားအားလုံး သံမဏိ (E = 200 GPa)။

ဘောင်သည် ဝန်ကြောင့် မည်သည်ကိုမျှ မကွေးဘဲ လှုပ်နိုင်ပါက (mechanism) လည်ပတ်မှု ရပ်ပြီး အဘယ်နေရာနှင့် မည်သည့် ဦးတည်ရာ ဖြစ်သည်ကို ပြောသည်။

## Case များ၊ combination များ၊ လက်မှတ်များနှင့် အစီရင်ခံစာ

ခွဲခြမ်းစိတ်ဖြာမှုသည် **Dead** (ကိုယ်လေးချိန်)၊ **Live** နှင့် **Dead + live** ဖြင့် စတင်သည်။ သင့်ဒီဇိုင်းကုဒ် တောင်းဆိုသော factor များဖြင့် case နှင့် combination များ ထည့်ပါ။ N > 0 သည် ဆွဲအား ဖြစ်သည်။ My > 0 သည် အစိတ်အပိုင်း၏ local −z ဘက်ကို ဆွဲအားဖြစ်စေသည် (ဆွဲချအောက် ကျသော ထုပ်(ဘီမ်)သည် My > 0 ရှိသည်)။ {{ui:Report (PDF)}} နှင့် {{ui:Report (CSV)}} တွင် ယူဆချက်များ၊ section များ၊ case များ၊ reaction များနှင့် ၎င်းတို့၏ စုစုပေါင်း၊ member force များ၊ ရွေ့မှုများနှင့် envelope ပါသည်။ {{ui:Export as CraftScript}} သည် frame ကို PartCraft ၏ Script workspace အတွက် ရေးသည်။ ထိုနေရာတွင် library function `frame3d` က ဖတ်နိုင်သော code ဖြင့် ဖြေရှင်းသည်။

နည်းလမ်းသည် direct stiffness method ဖြစ်ပြီး **Second order (P-Delta)** ကို မရွေးလျှင် linear နှင့် first order ဖြစ်သည်။ Textbook case များဖြင့် စစ်ထားသည်။

**Second order (P-Delta).** Run ဘေးရှိ *Second order (P-Delta)* ကို အမှန်ခြစ်ပါ။ Combination တိုင်းကို အစိတ်အပိုင်းများ၏ axial force ကို ကွေးညွှတ်ပြီးသော frame ပေါ်တွင် ထားပြီး ထပ်ဖြေရှင်းသည် (member တစ်ခုစီကို အပိုင်း 4 ပိုင်းခွဲ၍ အဆုံးနှစ်ဖက်ကြား ကွေးညွှတ်မှုလည်း ရေတွက်သည်)၊ axial force များ တည်ငြိမ်သည်အထိ။ Result line က pass အရေအတွက်နှင့် sway ဘယ်လောက် ကြီးလာသည်ကို ပေးသည်။ Moment၊ deflection၊ design check နှင့် report များသည် ဤရလဒ်များကို သုံးသည်။ Frame ၏ elastic critical load အထက်ဆိုလျှင် run ရပ်ပြီး ထိုသို့ ပြောသည်။ Elastic နှင့် rotation သေးငယ်သည်၊ flexural သာ ဖြစ်ပြီး ခိုင်ခံ့မှု လျော့ခြင်းနှင့် notional ဝန်များ မပါ (AISC direct analysis method ကိုယ်တိုင် မဟုတ်)။ Slab၊ နံရံနှင့် rigid floor များသည် first order ဖြစ်နေသည်။

**Floor pressure on slabs.** ကွန်ကရစ် slab များအတွက် (ပစ္စည်းသည် ကွန်ကရစ် ဖြစ်သောအခါ ခွဲခြမ်းစိတ်ဖြာမှုသည် slab ကို plate အဖြစ် ဖတ်သည်)၊ Loads block တွင် {{ui:Pressure on every slab}} ရှိသည်: kN/m² ရိုက်ပြီး အထက်ရှိ case ကို ရွေးကာ {{ui:Add to slabs}} ကို နှိပ်ပါ။ ၎င်းကို ခွဲခြမ်းစိတ်ဖြာမှု တွေ့သော slab အားလုံးပေါ် အောက်ဘက်သို့ ပြန့်ကျဲပြီး Remove link ဖြင့် စာရင်းပြုသည်။ Slab တစ်ခုချင်းစီအတွက် မဟုတ်ဘဲ slab အားလုံးအတွက် ဖိအား တစ်ခုတည်း ဖြစ်သည်။ ဤသည်မှာ ကုဒ်ဝန် မဟုတ်ပါ: အင်ဂျင်နီယာ ပေးသော တန်ဖိုးကို ရိုက်ပါ။

**Natural frequencies (finite elements).** ရလဒ်များအောက်ရှိ {{ui:Finite elements: natural frequencies}} block သည် တူညီသော မော်ဒယ်၏ အနိမ့်ဆုံး mode များကို finite element engine ဖြင့် ရှာသည်: end release ပါသော ထုပ်(ဘီမ်)များ၊ slab နှင့် နံရံများကို flat four-node shell များ၊ rigid floor များနှင့် ထောက်ခံချက်များ။ Mode အရေအတွက် (3၊ 6၊ 10 သို့မဟုတ် 20) နှင့် slab element (ထူသော သို့မဟုတ် ပါးသော slab အတွက် four-node shell သို့မဟုတ် thin-slab) ကို ရွေး၍ {{ui:Find the frequencies}} ကို နှိပ်ပါ။ ဇယားက mode တစ်ခုစီ၏ frequency (Hz)၊ period (စက္ကန့်) နှင့် X၊ Y၊ Z ဘက်ရှိ effective modal mass ကို ရွေ့နိုင်သော mass ၏ ရာခိုင်နှုန်းအဖြစ် ပေးသည်။ {{ui:Show on the model}} သည် မည်သည့် mode ကိုမဆို ကွေးညွှတ်ပုံသဏ္ဍာန်ကဲ့သို့ ဆွဲသည်။ Mass = material density × ထုထည်: ဝန်များသည် mass မထည့်ပါ၊ density မရှိသော material တွင် mass မရှိပါ။ Report (PDF, CSV) တွင် ဇယား ပါသည်။ Elastic နှင့် အသေးစား ရွေ့မှုသာ ဖြစ်ပြီး seismic သို့မဟုတ် wind ဝန်ကို ဤနေရာတွင် ကုဒ်မှ မဖန်တီးပါ။ ကုဒ်စစ်ဆေးချက် မဟုတ်ပါ; အင်ဂျင်နီယာက ရလဒ်ကို သုံးသပ်သည်။

**Response spectrum, time history and pushover.** ကြိမ်နှုန်းများအောက်တွင် block သုံးခု ထပ်ရှိပြီး တူညီသော finite element မော်ဒယ်ကို သုံးသည်။ ၎င်းတို့အားလုံး၏ mass = material density + ရွေးထားသော case များ၏ အောက်ဘက်ဝန်များ၊ သင်ရိုက်ထည့်သော factor (ဥပမာ Dead 1၊ Live သည် mass အဖြစ် ရေတွက်သော အစိတ်အပိုင်း) ဖြင့် မြှောက်ထားသည်။

{{ui:Response spectrum}} သည် သင်ပေးသော spectrum (period နှင့် acceleration ဇယား၊ သို့မဟုတ် SDS၊ SD1 နှင့် TL မှ ASCE 7 ပုံသဏ္ဍာန်) မှ mode တစ်ခုစီကို ဖတ်ပြီး CQC၊ SRSS၊ ten percent rule သို့မဟုတ် absolute sum ဖြင့် ပေါင်းသည်။ ထို့နောက် X၊ Y နှင့် Z ဦးတည်ရာများကို ပေါင်းသည် (100 % + 30 % သို့မဟုတ် SRSS)။ Base shear၊ storey drift၊ member end force များနှင့် mode ဇယား (အသုံးပြုသော mode များက mass 90 % အောက် ဆိုလျှင် သတိပေးသည်) ပေးသည်။ ရလဒ်များကို factor ဖြင့် သို့မဟုတ် သင်ရိုက်ထည့်သော base shear အထိ scale လုပ်နိုင်သည်။ Block က base shear ကို ကိုယ်တိုင် မတွက်ပါ။ ရလဒ်များတွင် လက်မှတ် မရှိပါ။

{{ui:Time history}} သည် ground acceleration ကို modal superposition (မှတ်တမ်း၏ မျဉ်းဖြောင့်များအတွက် အတိအကျ) သို့မဟုတ် direct integration (Newmark average acceleration နှင့် Rayleigh damping) ဖြင့် run သည်။ Input သည် ထုတ်လုပ်ထားသော sine သို့မဟုတ် pulse (အမြဲ synthetic ဟု အမှတ်အသားပြု)၊ သင် ကူးထည့်သော မှတ်တမ်း၊ သို့မဟုတ် ဖွင့်သော စာသားဖိုင် (အချိန်နှင့် acceleration၊ လိုင်းတစ်ခုတွင် acceleration တစ်ခု step ဖြင့်၊ သို့မဟုတ် DT= header ပါ PEER-style ဖိုင်၊ g သို့မဟုတ် m/s²) ဖြစ်နိုင်သည်။ အချိန်နှင့်အမျှ roof displacement နှင့် base shear၊ level တစ်ခုစီ၏ drift နှင့် member end force များ၏ envelope ကို ပေးသည်။ အလွန်ရှည်သော မှတ်တမ်းရှိ မော်ဒယ်များသည် session အတွက်သာ သိမ်းသည်။

{{ui:Pushover}} သည် roof ကို အဆင့်ငယ်များဖြင့် ဘေးသို့ တွန်းသည် (ပထမ mode နှင့် ဆင်သော ပုံစံ သို့မဟုတ် တူညီ)၊ I ပုံသဏ္ဍာန်ရှိသော member အဆုံးတွင် plastic hinge များပါသည်။ Hinge သည် plastic moment တွင် ဖြစ်ပြီး axial force ကြီးလာသည်နှင့်အမျှ ကျဆင်းသည် (ရေးဆွဲထားသော ပုံသဏ္ဍာန်မှ တွက်သည်၊ fillet ကို လျစ်လျူရှုသည်)။ Hardening ကို ရွေးချယ်နိုင်၊ P-delta ကို ရွေးချယ်နိုင်၊ gravity combination ကို ပထမ အသုံးပြုနိုင်သည်။ Capacity curve (base shear နှင့် roof displacement)၊ ပထမ hinge နှင့် hinge တစ်ခုစီ၏ state နှင့် plastic rotation ကို ပေးသည်။ {{ui:Run the nonlinear time history}} သည် Time history block ၏ မှတ်တမ်းအောက်တွင် တူညီသော hinge များကို သေးငယ်သော မော်ဒယ်များတွင် run သည်။ Hinge များသည် member အဆုံးတွင်သာ ဖြစ်သည် (span အတွင်း ဖြစ်စေလိုသည့်နေရာတွင် node ထားပါ)။ အဆုံးနှစ်ဖက် release ထားသော member တွင် hinge မရှိပါ။ Brace များ၏ yield နှင့် buckling မပါ။ Slab နှင့် နံရံများသည် elastic ဆက်နေသည်။ Acceptance criteria မပေးပါ။ ကုဒ်စစ်ဆေးချက် မဟုတ်ပါ; အင်ဂျင်နီယာက ရလဒ်ကို သုံးသပ်သည်။ ဆက်တင်များကို မော်ဒယ်နှင့်အတူ သိမ်းပြီး report တွင် ဇယားများ ပါသည်။

မပြုလုပ်ရသေးသော အရာများ: buckling၊ response spectrum အတွက် missing-mass correction၊ record scaling၊ hinge များအတွက် acceptance criteria (အထက်ရှိ dynamic response ရှိသည်)၊ slab အားလုံးပေါ် ဖိအား တစ်ခုမှတစ်ပါး အခြား area load များ၊ member offset များ၊ tension-only brace များ၊ frame ထဲရှိ နံရံများနှင့် slab များ၊ welded shape နှင့် rolled I-shape မဟုတ်သော section များ၏ ဒီဇိုင်းကုဒ် စစ်ဆေးချက်များ။ [မပြုလုပ်ရသေးသော အရာများ](topic:not-built-yet) ကို ကြည့်ပါ။

## ယူနစ်များ

အလျားများသည် toolbar ရှိ {{ui:Units}} တွင် သင်ရွေးသော ယူနစ်ကို လိုက်သည်၊ BimCraft ၏ အခြားအရာများကဲ့သို့ပင်: သင် ရိုက်ထည့်ပြီး မြင်ရသော ဝန်တည်နေရာများ ({{ui:From}}၊ {{ui:To}}၊ {{ui:At}})၊ node ဝန်များနှင့် reaction များ၏ အမှတ်များ၊ {{ui:Seismic}} ရှိ ကြမ်းပြင်အမြင့်များ၊ နှင့် deflection နှင့် drift ကော်လံများ (feet နှင့် inches က ဤသေးငယ်သော အလျားများကို ဒသမ လက်မဖြင့် ပြသည်)။ ယူနစ်ကို အချိန်မရွေး ပြောင်းနိုင်သည်၊ tab က ပြန်ဆွဲသည်။ Force များသည် kN နှင့် kN·m အတိုင်း ကျန်ရှိပြီး report (PDF, CSV) နှင့် CraftScript ဖိုင်များသည် မီလီမီတာဖြင့် ယူနစ်ကို ရေးထားသည်။ {{ui:Concrete}} block ရှိ section အရွယ်များ၊ bar အချင်းများနှင့် covers များသည် အမည်ပေးထားသည့်အတိုင်း မီလီမီတာဖြင့် ကျန်ရှိသည်။

## ဒီဇိုင်း စစ်ဆေးချက်များ

{{ui:Design checks}} block (DetailCraft နှင့် တူညီ) သည် {{ui:Design code}} (ASCE 7 + AISC 360 သို့မဟုတ် EN 1990 + EN 1993-1-1) နှင့် {{ui:Steel grade}} ကို ယူသည်။ Load case တစ်ခုစီကို အမျိုးအစား (dead၊ live၊ wind …) ပေးပါ။ {{ui:Make combinations}} က သင့် case များမှ ကုဒ်၏ load combination များကို ရေးသည်။ ခွဲခြမ်းစိတ်ဖြာမှုက ၎င်းတို့ကို အခြား combination များကဲ့သို့ run သည်။

{{ui:Check members}} ထို့နောက် DetailCraft ၏ စစ်ဆေးချက်များ (tension၊ buckling ပါသော compression၊ lateral-torsional buckling ပါသော bending၊ shear၊ axial force ပါသော bending၊ deflection; clause များ report တွင်) ဖြင့် **rolled steel I-shape** တစ်ခုစီကို စစ်ပြီး ၎င်း၏ စွမ်းရည် ဘယ်လောက် သုံးနေသည်ကို ပြသည်၊ မော်ဒယ်ပေါ်တွင် အရောင်ခွဲပြသည်။ **အင်ဂျင်နီယာ သုံးသပ်ပြီးသည်အထိ ကိရိယာ** ဖြစ်သည်။

**အဘယ်အစိတ်အပိုင်းများ စစ်ဆေးသလဲ။** IFC profile က steel I-shape သည် rolled သို့မဟုတ် welded ဟု မပြောပါ။ ထို့ကြောင့် BimCraft သည် profile အမည် (သို့မဟုတ် element ၏ type အမည်) သည် AISC W သို့မဟုတ် S ဇယား၊ သို့မဟုတ် EN 10365 IPE၊ HEA၊ HEB ဇယားမှ အရွယ်တစ်ခု ဖြစ်ပြီး (`W12x26`၊ `IPE 300`၊ `HEA200`၊ `HE 200 A`) **နှင့်** ဖိုင်ထဲရှိ depth၊ width၊ web နှင့် flange သည် ထိုအရွယ်နှင့် 1 % အတွင်း ကိုက်ညီမှသာ rolled ဟု ခေါ်သည်။ အခြား I-shape အားလုံး (plate girder၊ အခြားအမည်ဖြင့် အရွယ်၊ ပြင်ထားသော အရွယ်) ကို welded ဟု ယူပြီး **not checked** ဟု ပြန်ပေးသည်။ tube၊ angle၊ channel နှင့် အခြား section များ၊ ပါးသော အစိတ်အပိုင်းများနှင့် torsion လည်း ထိုနည်းတူ။ ထိုအစိတ်အပိုင်းများကို အင်ဂျင်နီယာနှင့် စစ်ပါ။
