---
title: အခြား BIM နှင့် ပုံဆွဲပရိုဂရမ်များမှ ပြောင်းလာခြင်း
summary: Desktop BIM authoring နှင့် DWG ကြည့်ခြင်းမှ အလေ့အထများ BimCraft သို့ မည်သို့ ကိုက်ညီသလဲ၊ လူများ မှားတတ်သော ကွာခြားချက်များ။
keywords: ပြောင်းလဲခြင်း, migrate, familiar, desktop bim, family, parameters, project browser, properties palette, view cube, xref, layer manager, ကွာခြားချက်များ, compare
from: 2de629af
---

Revit ကို သိပြီးသားဆိုလျှင် BimCraft ၏ အများစုသည် စကားလုံးအရ ရင်းနှီးမည်ဖြစ်သော်လည်း လုပ်ငန်းပမာဏတွင် မရင်းနှီးပါ။ အရေးအကြီးဆုံး ကွာခြားချက်- **ဤဗားရှင်းသည် မော်ဒယ်များကို ဖတ်ပြီး စစ်ဆေးသည်၊ IFC ဒေတာကို တည်းဖြတ်သည်။ Revit ကဲ့သို့ ဖန်တီးခြင်း မလုပ်နိုင်သေးပါ။** နံရံ ဆွဲခြင်း၊ family ထည့်ခြင်း၊ view သို့မဟုတ် sheet ဖန်တီးခြင်း၊ project ဖိုင် သိမ်းခြင်း တို့ကို မလုပ်နိုင်ပါ။ ဘရောက်ဆာပါသော ကွန်ပျူတာတိုင်းတွင် ဆောက်လုပ်ရေးဖိုင် မည်သည့်အမျိုးအစားကိုမဆို ဖွင့်ပြီး အထဲရှိအရာကို ကြည့်နိုင်သည်၊ project folder တစ်ခုလုံးကို စစ်ဆေးနိုင်သည်၊ IFC မော်ဒယ်ရှိ ဒေတာကို ပြင်ဆင်နိုင်သည်။

## အလေ့အထများ ကိုက်ညီပုံ

| သင် အသုံးပြုလေ့ရှိသော | BimCraft တွင် |
|---|---|
| မော်ဒယ်ကို ကြည့်ရန် Revit တွင် `.rvt` ဖွင့်ခြင်း | BimCraft သည် `.rvt` ကို file card အဖြစ် ဖွင့်သည်- release၊ project information၊ links၊ preview။ 3D မော်ဒယ်အတွက် IFC ထုတ်ပြီး ထိုဖိုင်ကို ဖွင့်ပါ။ [Project သို့မဟုတ် family ဖိုင်ကို ဖတ်ခြင်း](topic:read-rvt-file) |
| ဖွင့်မီ မည်သည့် release ဖြင့် သိမ်းထားသည်ကို စစ်ခြင်း | Card ၏ ထိပ်တွင် "saved in Revit …" ဟု ပြသည်၊ ဖိုင်ကို မွမ်းမံ သို့မဟုတ် မထိခိုက်စေဘဲ |
| Project Browser | Views နှင့် sheets ၏ browser မရှိပါ။ IFC မော်ဒယ်တွင် {{ui:Storeys}} နှင့် {{ui:Elements}} စာရင်းများ ရှိသည်၊ ပုံဆွဲတွင် sheet tabs ရှိသည် |
| Properties palette | ညာဘက်ရှိ {{ui:Properties}} panel သည် သင်နှိပ်ထားသော ဒြပ်စင်အတွက်။ Parameter groups အစား IFC property sets |
| Instance နှင့် type parameters | Instance property sets နှင့် "(type)" အမှတ်အသားရှိ sets။ Type ပြောင်းလဲမှုသည် ထို type ၏ ဒြပ်စင်အားလုံးတွင် သက်ရောက်သည်၊ Revit ကဲ့သို့ပင်။ [Type တစ်ခု၏ ဂုဏ်သတ္တိကို ထို type ၏ ဒြပ်စင်အားလုံးအတွက် ပြောင်းခြင်း](topic:type-vs-instance) |
| Edit Type | Dialog မရှိပါ။ "(type)" set ရှိ တန်ဖိုးကို နှိပ်ပြီး ရိုက်ထည့်ပါ |
| ဒြပ်စင်များစွာ ရွေးခြင်း၊ filters၊ Select All Instances | တစ်ကြိမ် ဒြပ်စင်တစ်ခု။ မဖြစ်သေးပါ |
| View cube နှင့် navigation wheel | အောက်ညာထောင့်တွင် view cube၊ ခလုတ် လေးခု ({{ui:Fit}}၊ {{ui:Top}}၊ {{ui:Front}}၊ {{ui:Side}}) နှင့် လွတ်လပ်စွာ orbit။ Navigation wheel မရှိ |
| Shift နှင့် middle-drag ဖြင့် orbit၊ middle-drag ဖြင့် pan | ဘယ်ဘက်ဖိ ဆွဲခြင်းဖြင့် orbit၊ ညာဘက်ဖိ ဆွဲခြင်း (သို့မဟုတ် {{key:Shift}} နှင့် ဆွဲခြင်း) ဖြင့် pan၊ wheel ဖြင့် zoom။ {{ui:BIM ribbon}} menu ပုံစံသည် middle-drag pan နှင့် {{key:Shift}} + middle ခလုတ်ဖြင့် orbit သို့ ပြောင်းသည်။ [Menu များ၊ ခလုတ်များနှင့် မောက်စ်](topic:menus-keys-and-mouse) |
| Floor plans၊ sections၊ section boxes | တစ်ကြိမ် {{ui:Section}} plane တစ်ခု ({{key:X}})၊ section box သို့မဟုတ် 2D plans မရှိ။ [Section plane ဖြင့် IFC မော်ဒယ်ကို ဖြတ်ခြင်း](topic:section-plane) |
| View တွင် ဝှက်ခြင်း၊ isolate၊ visibility/graphics | {{ui:Storeys}} ဖွင့်/ပိတ်၊ {{ui:Spaces}} နှင့် {{ui:Edges}}။ ဒြပ်စင်တစ်ခုချင်းစီ ဝှက်ခြင်း မရှိသေးပါ |
| Rooms | IFC spaces၊ အစတွင် ဝှက်ထားသည်။ {{ui:Spaces}} ကို နှိပ်ပါ |
| Save၊ Save As၊ central နှင့် synchronize | {{ui:Save as IFC}} သည် IFC ဖိုင်အသစ် ဒေါင်းလုဒ်ဆွဲသည်။ မူရင်းဖိုင် ပြောင်းလဲခြင်း မရှိပါ။ Central သို့မဟုတ် worksharing မရှိပါ |
| {{key:Mod+Z}} ဖြင့် Undo | IFC တည်းဖြတ်မှုများတွင် သိမ်းသည်အထိ အလုပ်လုပ်သည်။ [IFC ဂုဏ်သတ္တိများကို ပြင်ဆင်ပြီး တည်းဖြတ်ထားသော မိတ္တူကို သိမ်းခြင်း](topic:edit-ifc-properties) |
| Manage Links | Project folder ကို ဖွင့်ပါ- link တိုင်းကို စစ်ဆေးပြီး **In this folder**၊ **Same name found**၊ **Library file** သို့မဟုတ် **Not in this folder** ဟု အမှတ်အသားပြုသည်။ [Project folder တစ်ခုလုံးကို ဖွင့်ခြင်း](topic:open-project-folder) |
| Audit၊ ဖိုင် ပျက်စီးမှု ရှိမရှိ ဖွင့်ကြည့်ခြင်း | Folder report သည် copy နှင့် backup တိုင်းကို ဖြတ်တောက်ခံရခြင်း ရှိမရှိ စက္ကန့်ပိုင်းအတွင်း စစ်ဆေးသည်။ [Folder တွင် ပျက်စီးသော မိတ္တူများကို စစ်ဆေးခြင်း](topic:check-folder-health) |
| ရှုပ်ထွေးသော folder ထဲမှ မှန်ကန်သော ဖိုင်ကို ရွေးခြင်း | {{ui:Start here}} box က အကြောင်းပြချက်များဖြင့် ဖိုင်တစ်ခုကို အကြံပြုသည် |

အများအားဖြင့် မော်ဒယ်များကို စစ်ဆေးရန် ဖွင့်လေ့ရှိပါက၊ မော်ဒယ်စစ်ဆေးသော သို့မဟုတ် IFC ကြည့်ရှုသော ပရိုဂရမ်ကဲ့သို့ {{ui:Viewer}} menu ပုံစံကို ရွေးပါ- ကြည့်ရှုခြင်းနှင့် စစ်ဆေးခြင်း ကိရိယာများ ရှေ့ဆုံးတွင် ရှိပြီး တည်ဆောက်ရေး ကိရိယာများသည် menu တစ်ခုတည်းတွင် စောင့်နေသည်။ [Menu များ၊ ခလုတ်များနှင့် မောက်စ်](topic:menus-keys-and-mouse) ကို ကြည့်ပါ။

## DWG ဖိုင်များကို ကြည့်ခြင်းမှ

AutoCAD သို့မဟုတ် DWG viewer တွင် DWG ဖွင့်လေ့ရှိပါက-

| သင် အသုံးပြုလေ့ရှိသော | BimCraft တွင် |
|---|---|
| အောက်ခြေရှိ Model နှင့် layout tabs | ပုံဆွဲအပေါ်ရှိ tabs- {{ui:Model}} နှင့် sheet တစ်ခုစီအတွက် တစ်ခု |
| ZOOM Extents၊ wheel ကို နှစ်ချက်နှိပ်ခြင်း | နှစ်ချက်နှိပ်ခြင်း၊ {{key:F}} သို့မဟုတ် {{ui:Fit}} |
| Middle ခလုတ်ဖြင့် pan | မည်သည့်ခလုတ်ဖြင့်မဆို ဆွဲပါ |
| Layer manager | {{ui:Layers}} စာရင်း- ပြရန် tick၊ ဝှက်ရန် untick၊ {{ui:All on}} နှင့် {{ui:All off}} |
| Xref manager | ညာဘက်ရှိ **Linked drawings** တွင် **Shown** သို့မဟုတ် **Not found**၊ နှင့် {{ui:Add linked drawings…}} |
| Plot preview | {{ui:Print view}} သို့မဟုတ် {{key:P}}- မဲနှင့် ဖြူ၊ line weights ဖြင့်။ ပရင့်မထုတ်ပါ |
| Block attributes ၏ data extraction | Tagged foodservice ပုံဆွဲများအတွက် {{ui:Equipment}} tab၊ {{ui:Download CSV}} ဖြင့် |
| Measure၊ draw၊ edit၊ save as | BimCraft တွင် မရှိပါ။ CadCraft drafting app က ဆွဲခြင်းနှင့် တည်းဖြတ်ခြင်းကို လုပ်သည် |

## လူများ မှားတတ်သော ကွာခြားချက်များ

- **ဤအရာသည် browser တွင် အလုပ်လုပ်ပြီး browser သည် သင်၏ဖိုင်များကို ဂရုစိုက်သည်။** BimCraft သည် သင်ရွေးချယ်ပေးသော သို့မဟုတ် ဆွဲချပေးသော ဖိုင်နှင့် folder များကိုသာ ဖတ်နိုင်သည်။ ကိုယ်တိုင် ဖိုင်ဖွင့်နိုင်ခြင်း မရှိပါ၊ ဖိုင်ကို အစားထိုးသိမ်းခြင်းလည်း မရှိပါ။ သိမ်းသည့်အရာတိုင်းသည် ဒေါင်းလုဒ် ဖြစ်သည်။
- **ဘာမှ upload မလုပ်ပါ။** Browser အချို့၏ folder dialog တွင် "upload" ဟု ပါသော စကားလုံးသည် browser ၏ ကိုယ်ပိုင်စကားလုံး ဖြစ်သည်။ ဖိုင်များသည် သင်၏ကွန်ပျူတာတွင် ရှိနေသည်။
- **IFC သည် မော်ဒယ်ဖော်မက်ဖြစ်သည်။** Project ဖိုင်သည် 3D အကြောင်းအရာ မှတ်တမ်းမတင်ရသေးသောကြောင့် card အဖြစ် ဖွင့်သည်။ IFC ကို မော်ဒယ်များ BimCraft သို့ ရောက်ရှိသည့် နည်းလမ်းအဖြစ် ယူဆပါ။
- **တည်းဖြတ်မှုများသည် copy-on-write ဖြစ်သည်။** ဒြပ်စင်တစ်ခု၏ တန်ဖိုးပြောင်းခြင်းသည် ၎င်းနှင့်နီးသော ဒြပ်စင်များကို ဘယ်တော့မှ မပြောင်းပါ၊ exporter က တန်ဖိုးကို မျှဝေထားသည့်တိုင်းပင်။ Type ဂုဏ်သတ္တိများသည် ရည်ရွယ်ချက်ရှိသော ခြွင်းချက်ဖြစ်သည်။
- **Project မရှိ၊ views မရှိပါ။** BimCraft သည် ဖိုင်တစ်ခုချင်းကို ပြသည်၊ tab ပိတ်ပြီးနောက် Chrome နှင့် Edge ရှိ လတ်တလော folder အမည်များကို မှတ်ထားခြင်းမှလွဲ၍ ဘာမှ မမှတ်ထားပါ။
- **Mac ခလုတ်များ။** Revit ၏ Windows shortcuts တွင် Ctrl ပါလျှင် BimCraft shortcuts တွင် {{key:Mod}} ကို သုံးသည်- Mac တွင် Command ဖြစ်သည်။
- **သင်၏ မောက်စ်အလေ့အထ။** Orbit သည် ဘယ်ခလုတ်ဖြစ်ပြီး Shift နှင့် middle ခလုတ် မဟုတ်ပါ၊ {{ui:BIM ribbon}} menu ပုံစံကို ရွေးမှသာ ဖြစ်သည် သို့မဟုတ် [Menu များ၊ ခလုတ်များနှင့် မောက်စ်](topic:menus-keys-and-mouse) တွင် ခလုတ်များကို ကိုယ်တိုင် သတ်မှတ်မှသာ ဖြစ်သည်။

ယနေ့ အစားထိုးရန် အရာများအတွက် [မတည်ဆောက်ရသေးသော အရာများ](topic:not-built-yet) ကို ကြည့်ပါ။
