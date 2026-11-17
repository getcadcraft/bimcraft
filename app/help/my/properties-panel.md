---
title: Properties panel ၏ field များ
summary: Properties panel နှင့် File၊ Drawing နှင့် Folder panel များရှိ field တစ်ခုချင်းစီ၏ အဓိပ္ပာယ်နှင့် ပြောင်းလဲနိုင်သော field များ။
keywords: properties, fields, attributes, globalid, guid, copy, copy value, copy all, csv, clipboard, serial number, tag, object type, line, express id, property set, pset, quantities, schema, file panel
from: fe55b435
---

## IFC element တစ်ခု

{{ui:Properties}} panel ၏ထိပ်တွင် element ၏ အမျိုးအစားကို "Ifc" prefix မပါဘဲ ပြသည် (ဥပမာ "Door", "WallStandardCase", "FurnishingElement") နှင့် ၎င်း၏ အမည် သို့မဟုတ် "Unnamed" ကို ပြသည်။

| Field | အဓိပ္ပာယ် | တည်းဖြတ်နိုင်သလား |
|---|---|---|
| အမည် | Element ၏ အမည်၊ မကြာခဏ exporter မှ family နှင့် type အမည် | ဟုတ် |
| အမျိုးအစား | Element ၏ type အမည်၊ ရှိလျှင် | မဟုတ် |
| Object type | Exporter အချို့ ဖြည့်သော အခမဲ့ စာသား type ဖော်ပြချက် | ဟုတ် |
| Tag | Element ၏ tag သို့မဟုတ် အမှတ်အသား; exporter အများစုက element ID ကို ဤနေရာတွင် ရေးသည် | ဟုတ် |
| ဖော်ပြချက် | အခမဲ့ စာသား | ဟုတ် |
| GlobalId | Element ၏ အမြဲတည်သော 22-character IFC identifier၊ element တူညီသော export တိုင်းတွင် တူညီသည် | မဟုတ် |
| Line | ဤ IFC ဖိုင်ထဲရှိ element ၏ လိုင်းနံပါတ် (`#1234`)။ Export တစ်ခုချင်းစီတွင် ပြောင်းသည် | မဟုတ် |

အောက်တွင် **property set** များကို နာမည်အလိုက် စီထားသည်:

- Set တစ်ခုစီသည် ၎င်း၏ အမည်ကို နှိပ်သောအခါ ဖွင့်သည်/ပိတ်သည်။ ပထမ သုံးခုကို ဖွင့်ထားသည်။
- "(type)" ဟု မှတ်သော set သည် element ၏ type နှင့် သက်ဆိုင်သည်: "Type property: ဤနေရာတွင် ပြောင်းလဲမှုသည် ဤ type ၏ element အားလုံးကို သက်ရောက်သည်။"
- Quantity set များ (အရှည်၊ ဧရိယာ၊ ထုထည်၊ အရေအတွက်၊ အလေးချိန်) သည် ဖတ်သာ ဖြစ်သည်။
- List နှင့် enumerated တန်ဖိုးများကို ပြသသည်၊ ဖတ်သာ ဖြစ်သည်။
- ဟုတ်/မဟုတ် တန်ဖိုးများကို **ဟုတ်** သို့မဟုတ် **မဟုတ်** အဖြစ် ပြသည်။
- ဂဏန်းများကို ပြသရန် ဒသမ လေးနေရာအထိ ပတ်သည်။ အရှည်များ (length property သို့မဟုတ် quantity ၏ အရှည်) သည် toolbar တွင် ရွေးထားသော {{ui:Units}} ဖြင့် ပြသပြီး ၎င်းနှင့်အတူ ယူနစ်ကို ဘေးတွင် ပြသည်; ထိုယူနစ်ဖြင့် တန်ဖိုးအသစ် ရိုက်နိုင်သည် သို့မဟုတ် အခြား ယူနစ် အမှတ်အသား (2.4 m, 8'-0") ဖြင့် ရိုက်နိုင်သည်: BimCraft သည် ဖိုင်၏ ကိုယ်ပိုင် နံပါတ်ကို ပြန်ရေးသည်။ အခြား နံပါတ်များကို ဖိုင်တွင် ရှိသည့်အတိုင်း ပြသည်။
- အလွတ်တန်ဖိုးကို *empty* ဟု ပြသည်။ တည်းဖြတ်ထားသော တန်ဖိုးသည် စာလုံးထူပြီး ဘေးတွင် အပြာရောင် ဘားရှိသည်။

## တန်ဖိုး ကူးယူခြင်း

{{ui:Properties}} ရှိ တန်ဖိုးတိုင်းတွင် ဘေးတွင် သေးငယ်သော ကူးယူရန် ခလုတ် ရှိသည်: ၎င်းကို နှိပ်လိုက်လျှင် ထိုတန်ဖိုးကို ပြသထားသည့်အတိုင်း clipboard သို့ ထည့်သည်၊ ဥပမာ GlobalId၊ serial number သို့မဟုတ် property set တန်ဖိုး မည်သည့်အရာမဆို။ ကူးယူခြင်းသည် တည်းဖြတ်မှု မစတင်ပါ။

ထိပ်တွင် {{ui:Copy all}} သည် element ၏ တန်ဖိုးအားလုံးကို set တစ်ခုချင်းစီအလိုက် စာသားအဖြစ် ကူးသည်၊ နှင့် {{ui:Copy as CSV}} သည် group၊ property နှင့် တန်ဖိုး row များအဖြစ် spreadsheet သို့ ကူးထည့်ရန် ကူးသည်; တန်ဖိုးအလွတ်များကိုလည်း ထားသဖြင့် field တိုင်းတွင် row ရှိသည်။ ဖွင့်ထားသော မော်ဒယ် တစ်ခုထက်ပို၍ ရှိသောအခါ CSV သည် ဖိုင်အမည်ဖြင့် Model column ဖြင့် စတင်သည်။ အခြား ဖွင့်ထားသော မော်ဒယ်ရှိ element အတွက်လည်း တူညီစွာ အလုပ်လုပ်သည်။

## File panel (IFC)

| Field | အဓိပ္ပာယ် |
|---|---|
| File, Size | သင်ဖွင့်ခဲ့သော ဖိုင် |
| Schema | IFC ဗားရှင်း၊ ဥပမာ IFC2X3 သို့မဟုတ် IFC4 |
| Project | ပရောဂျက်၏ အမည်နှင့် အမည်ရှည် |
| Phase | Exporter က ရေးခဲ့လျှင် ပရောဂျက် phase |
| Exported from | ဖိုင် header မှ ထုတ်သော program |
| Author | ဖိုင် header ရှိ author |
| Exported | ဖိုင် header ရှိ ရက်စွဲနှင့် အချိန် |
| Elements | ပုံသဏ္ဍာန်ရှိ element အရေအတွက် ဆွဲခဲ့သော |
| Triangles | ၎င်းတို့၏ ပုံသဏ္ဍာန်များက ဖွဲ့သော တြိဂံအရေအတွက်; မော်ဒယ် ဘယ်လောက်လေးသည်ကို တိုင်းတာခြင်း |

## File panel (project နှင့် family ဖိုင်များ)

| Field | အဓိပ္ပာယ် |
|---|---|
| အမျိုးအစား | Project, Project template, Family သို့မဟုတ် Family template |
| သိမ်းထားသော ဗားရှင်း | နောက်ဆုံး သိမ်းခဲ့သော release |
| Build | ထို release ၏ တိကျသော build |
| ဖတ်ထားမှု | ဖိုင်အရွယ်အစားမှ BimCraft ဖတ်ခဲ့သော ပမာဏ |

## Drawing panel (DWG နှင့် DXF)

| Field | အဓိပ္ပာယ် |
|---|---|
| Format | ပုံဆွဲ သိမ်းခဲ့သော release နှင့် ၎င်း၏ format code၊ ဥပမာ AC1032 |
| Units | ပုံဆွဲ၏ insertion units၊ သတ်မှတ်ထားလျှင် |
| Entities | ဖတ်ခဲ့သော object အရေအတွက် |
| Layers | Layer အရေအတွက် |
| Sheets | စာရွက် (layout) အရေအတွက်၊ သို့မဟုတ် None |
| Linked drawings | ချိတ်ဆက်ထားသော ပုံဆွဲများ တွေ့ပြီး ဖွင့်ထားသော အရေအတွက် |
| Equipment | စာရွက်များပေါ်ရှိ tag လုပ်ထားသော equipment အရေအတွက် |

## Folder panel

| Field | အဓိပ္ပာယ် |
|---|---|
| Folder, Files, Size | သင်ဖွင့်ခဲ့သော ဖိုလ်ဒါ၊ ၎င်းတွင် ဖိုင် အရေအတွက်နှင့် စုစုပေါင်း အရွယ်အစား |
| Models | Project နှင့် family ဖိုင်များ၊ backup တစ်ခုစီကို တစ်ကြိမ်သာ ရေတွက်သည် |
| CAD drawings, IFC models | အမျိုးအစားတစ်ခုစီ အရေအတွက် |
| ပြဿနာများ | မပြည့်စုံ သို့မဟုတ် ဖတ်၍မရသော မော်ဒယ်မိတ္တူ အရေအတွက်၊ သို့မဟုတ် None |
