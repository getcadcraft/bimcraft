---
title: ပရောဂျက် bundle ဖွင့်ရန်
summary: ပရောဂျက် bundle ဆိုသည်မှာ မော်ဒယ်၊ view များ၊ layout များနှင့် property group များပါသော zip တစ်ခု ဖြစ်သည်။ ဖွင့်ပါ၊ storey နှင့် layer များဖြင့် view ကို ပြပါ၊ layout ကို ဖွင့်ပါ၊ ပရောဂျက်၏ ကိုယ်ပိုင် group များတွင် property များကို ကြည့်ပါ။
keywords: bundle, ပရောဂျက် bundle, ccbundle, zip, views, view မြေပုံ, layouts, layout စာအုပ်, layer ပေါင်းစပ်မှု, property groups, standards, pln, ပုံစံ
from: b5b86e8f
---

## ဘာလုပ်မလဲ

**ပရောဂျက် bundle** (`.ccbundle.zip`) ကို ဖွင့်ပြီး ပရောဂျက်ကို စီစဉ်ထားသည့်အတိုင်း အလုပ်လုပ်ပါ: ၎င်း၏ view များ၊ layout များနှင့် property group များကို မော်ဒယ်အပေါ်တွင် အသုံးပြုပါ။

bundle တွင် အောက်ပါတို့ ပါဝင်သည်:

- IFC အဖြစ် မော်ဒယ်၊
- PDF နှင့် DWG အဖြစ် layout များ၊
- IFC က မထည့်ထားသော အရာများ၏ စာရင်း: view များ (storey၊ layer ပေါင်းစပ်မှုနှင့် scale အသီးသီးပါသည်)၊ layout များနှင့် ၎င်းတွင် ချထားသော ပုံဆွဲများ၊ group များထဲရှိ property သတ်မှတ်ချက်များ၊ classification များနှင့် layer၊ pen set၊ line type၊ fill၊ surface နှင့် composite ကဲ့သို့သော standards။

bundle များကို Archicad အတွင်း ရှိသော open-source script တစ်ခုက ရေးသားပြီး၊ ဤစာရင်းများကို Archicad ထံမှ တိုက်ရိုက် တောင်းယူသည်။ BimCraft သည် `.pln` သို့မဟုတ် `.tpl` ဖိုင်များကို တိုက်ရိုက် မဖတ်ပါ; [.pln နှင့် .pla ပရောဂျက်ဖိုင်များ ဖွင့်ရန်](topic:pln-project-files) ကို ကြည့်ပါ။

## bundle ဖန်တီးရန်

script သည် အစမ်းကြည့်ရှုမှု ဖြစ်သည်: Archicad version အားလုံးတွင် မစမ်းသပ်ရသေးပါ။ [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle) မှ ရယူပါ။ Archicad 24 သို့မဟုတ် နောက်ပိုင်းနှင့် Python 3.8 သို့မဟုတ် နောက်ပိုင်း လိုအပ်သည်; အခြား ထည့်သွင်းစရာ မလိုပါ။

1. `archicad_bundle.py` ကို ဖိုဒါတစ်ခုထဲ သိမ်းပါ၊ ဥပမာ `C:\cc-bundle`။
2. Archicad တွင် ပရောဂျက်ကို ဖွင့်ပြီး **CadCraft bundle** ဟု အမည်အတိအကျ ပေးထားသော publisher set တစ်ခု ဖန်တီးပါ: 3D view ကို IFC အဖြစ်၊ layout တိုင်းကို PDF အဖြစ်၊ layout တိုင်းကို နောက်တစ်ကြိမ် DWG အဖြစ်၊ disk ပေါ်ရှိ ဖိုဒါတစ်ခုတည်းတွင် ထုတ်ပါ။
3. ပရောဂျက် ဖွင့်ထားစဉ် `python archicad_bundle.py --probe --out .` ကို တစ်ကြိမ် run ပါ။ ၎င်းသည် ဖတ်ရုံသာ ဖတ်ပြီး `probe.json` ကို ရေးသည်။
4. `python archicad_bundle.py --out . --translator "IFC4 Reference View"` ကို run ပါ (သင် ရွေးထားသော IFC translator ကို အသုံးပြုပါ)။ Archicad က set ကို ထုတ်ပြီး script က `<project>.ccbundle.zip` ကို ရေးသည်။

script မှတစ်ဆင့် ထုတ်ခြင်း မအောင်မြင်ပါက set ကို လက်ဖြင့် ထုတ်ပြီး `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg` ကို run ပါ။ repository ရှိ README တွင် option အားလုံး ရှိသည်။ တစ်ခုခု မရောက်ပါက ထို repository တွင် issue ဖွင့်ပြီး `probe.json` ကို ပူးတွဲပါ။

## bundle ဖွင့်ရန်

1. {{ui:ဖိုင်ရွေးရန်}} ကို နှိပ်ပါ၊ သို့မဟုတ် `.ccbundle.zip` ကို BimCraft ပေါ် ချပါ။ {{ui:ဖိုဒါ ဖွင့်ရန်}} ဖြင့် ဖွင့်ထားသော ဖိုဒါတွင် bundle များကို **ပရောဂျက် bundle များ** အောက်တွင် စာရင်းပြုသည်; အမည်ဖြင့် နှိပ်ပါ။
2. မော်ဒယ်သည် IFC မှန်သလို ဖွင့်ပြီး **ပရောဂျက် bundle** အပိုင်းသည် ဖိုင်၏ အချက်အလက်များအောက်တွင်၊ ဘယ်ဘက်ခြမ်းတွင် ပေါ်လာသည်။

ဘာမျှ upload မလုပ်ပါ: bundle ကို သင့်ကွန်ပျူတာတွင် ဖိုင်တစ်ခုချင်းစီ ဖတ်သည်၊ ထို့ကြောင့် မော်ဒယ်ကြီးကို နှစ်ကြိမ် မကူးပါ။

## view ပြရန်

**Views** အောက်တွင် view များကို ပရောဂျက်တွင် ရှိခဲ့သော folder များအလိုက် စုထားသည်။ view ၏ အမည်ကို နှိပ်ပါ:

- **Floor plan** သည် ၎င်း၏ storey ကိုသာ အပေါ်မှ ပြသည်။
- **Layer ပေါင်းစပ်မှု** သည် ထိုပေါင်းစပ်မှု ဖျောက်ထားသော layer များပေါ်ရှိ element များကို ဖျောက်သည်။ status line က မည်မျှ element ဖျောက်ခဲ့သည်ကို ပြောသည်။
- **Scale** ကို အမည်ဘေးတွင်နှင့် status line တွင် ပြသည်။
- **3D view** သည် storey အားလုံးကို ပြသည်။

အားလုံးကို ပြန်ပြရန် {{ui:ပြရန်}} အတွင်းရှိ {{ui:အားလုံးပြရန်}} ကို သုံးပြီး storey တိုင်းကို အမှန်ခြစ်ပါ။

:::note
BimCraft သည် layer များကို IFC ဖိုင်၏ layer assignment များမှတစ်ဆင့် ရှာသည်။ IFC ကို ထို assignment မပါဘဲ export လုပ်ထားလျှင် layer ပေါင်းစပ်မှုသည် ဘာမျှ မဖျောက်ပါ၊ status line က ဖျောက်ထားသည် element 0 ခု ဟု ပြမည်။
:::

## layout ဖွင့်ရန်

**Layouts** အောက်တွင် layout တစ်ခုစီသည် ၎င်း၏ နံပါတ်၊ အမည်၊ စာရွက်အရွယ်အစားနှင့် ၎င်းပေါ်တွင် ချထားသော view များကို ပြသည်။

- **PDF** သည် bundle မှ layout ၏ PDF ကို သိမ်းသည်။
- **DWG** သည် layout ၏ ပုံဆွဲကို 2D view တွင် ဖွင့်သည်။ မော်ဒယ်သို့ ပြန်ရန် view မည်သည့်တစ်ခုကိုမဆို နှိပ်ပါ။
- **…တွင် ဖွင့်ရန်** သည် layout ၏ ဖိုင်ကို ၎င်းနှင့် အလုပ်လုပ်သော အက်ပ်သို့ tab အသစ်တွင် ပေးပို့သည်: PDF ကို MarkupCraft သို့၊ DWG ကို CadCraft သို့။ BimCraft ၏ ဘေးတွင် ထိုအက်ပ် ဖွင့်ထားသည့်နေရာတွင်သာ ပြသည်။ tab ဖွင့်စဉ် ဖိုင်ကို bundle မှ ဖတ်သည်၊ ဘာမျှ upload မလုပ်ပါ။

ဖိုင်မရှိသော layout တွင် **bundle တွင် ဖိုင် မရှိ** ဟု ပြသည်။

## property များကို ပရောဂျက်၏ group များတွင် ကြည့်ရန်

element တစ်ခုကို ရွေးပါ။ **Property groups** သည် ပရောဂျက်က သတ်မှတ်ထားသော group များအောက်တွင် ၎င်း၏ property များကို ပြသည်; IFC အတွက် definition က ပေးသော property set နှင့် အမည်ဖြင့် ကိုက်ညီစေပြီး၊ မဟုတ်ပါက အမည်ဖြင့် ကိုက်ညီစေသည်။ ကျန်သော property များသည် ပုံမှန်အတိုင်း {{ui:ဂုဏ်သတ္တိများ}} တွင် ရှိနေသည်။ **Property definitions** သည် definition တိုင်းကို group၊ type နှင့် IFC အမည်တို့ဖြင့် စာရင်းပြုသည်။

## Standards နှင့် မှတ်စုများ

- **Standards** သည် bundle ထဲရှိ layer၊ layer ပေါင်းစပ်မှု၊ pen set၊ line type၊ fill၊ surface၊ composite နှင့် material များကို ရေတွက်သည်။
- **Notes** သည် ထို Archicad version မှ script မရယူနိုင်သည်များ၊ BimCraft မဖတ်နိုင်သော field များနှင့် bundle က အမည်ပေးထားသော်လည်း မပါဝင်သော ဖိုင်များကို စာရင်းပြုသည်။

## ပြဿနာဖြေရှင်းခြင်း

- **"… zip ဖြစ်သော်လည်း project bundle မဟုတ်ပါ။"** zip တွင် `manifest.json` မပါပါ။ ဖွင့်ပြီး အထဲရှိ `.ifc` ကို ဖွင့်ပါ။
- **"… ဤ BimCraft ဖတ်နိုင်သည်ထက် အသစ်သော project bundle ဖြစ်သည်။"** BimCraft ကို အပ်ဒိတ်လုပ်ပါ။
- **"… manifest က အမည်ပေးထားသော မော်ဒယ်ကို မပါဝင်ပါ။"** zip ကို ဖြတ်တောက်ထားခြင်း သို့မဟုတ် ပြင်ထားခြင်း ဖြစ်သည်။ bundle ကို ပြန်ဖန်တီးပါ။
- **view တစ်ခုသည် storey အားလုံးကို ပြသည်။** ၎င်း၏ storey သည် မော်ဒယ်၏ IFC တွင် မရှိပါ (status line က ထိုသို့ ပြသည်)။ IFC export တွင် ထို storey ပါဝင်ခဲ့သည်ကို စစ်ပါ။

ဆက်ကြည့်ရန် [BIM ပရိုဂရမ် နှစ်ခုကြား အလုပ်လုပ်ခြင်း](topic:two-bim-programs) နှင့် [BimCraft ဖတ်သော ဖိုင်ပုံစံတစ်ခုစီ](topic:file-formats)။
