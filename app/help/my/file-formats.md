---
title: BimCraft က format တစ်ခုစီမှ ဘာဖတ်သနည်း
summary: BimCraft က IFC, ပရောဂျက်နှင့် မိသားစုဖိုင်များ၊ DWG နှင့် DXF မှ အတိအကျ ဘာဖတ်သည်ကို၊ ဘာကို ထားခဲ့သည်ကို ပြောပါ။
keywords: format များ, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, ဗားရှင်းများ, ကိုက်ညီမှု, ဖတ်သည့်အရာ
from: 9b8dfb4f
---

## IFC

| ဖတ်သည် | အသေးစိတ် |
|---|---|
| Geometry | ပုံသဏ္ဍာန်ရှိသော element တိုင်း၊ ဖိုင်က ပြောသည့်အရောင်အတိုင်း။ အခန်းများနှင့် space များကို ဖောက်ထွင်းမြင်ရအောင် ဆွဲပြီး အစတွင် ဝှက်ထားသည် |
| Storeys | ထပ်များကို အမြင့်အစဉ်အလိုက်၊ နှင့် element တစ်ခုစီ ဘယ်ထပ်ပေါ် ရှိသည်။ ထပ်ပေါ် မရှိသော element များကို "Not on a storey" အဖြစ် အုပ်စုဖွဲ့သည် |
| Element counts | element အမျိုးအစားတစ်ခုစီ မည်မျှ (နံရံ၊ တံခါး၊ slab…) ကို {{ui:Elements}} တွင် ပြသည် |
| Project facts | ပရောဂျက် အမည်၊ ရှည်သော အမည်နှင့် phase; schema; ဖိုင် header မှ ထုတ်ပေးသော ပရိုဂရမ်၊ author နှင့် export ရက်စွဲ |
| Element data | အမည်၊ type၊ object type၊ tag၊ description၊ GlobalId; element နှင့် ၎င်း၏ type ပေါ်ရှိ property set နှင့် quantity set အားလုံး |

ပြင်နိုင်သည်: အမည်၊ object type၊ tag၊ description နှင့် property တန်ဖိုးတစ်ခုတည်း။ IFC ဖိုင်အသစ်အဖြစ် သိမ်းသည်။ IFC2X3၊ IFC4 နှင့် IFC4X3 schema များကို ဖွင့်သည်၊ BimCraft ၏ ကိုယ်ပိုင် IFC engine က ဖတ်သည်; ယခု မဆွဲနိုင်သေးသော အရာများကို {{ui:File}} panel ရှိ **Not drawn yet** အောက်တွင် စာရင်းပြုသည်။ model ကို ဖွင့်သောအခါ မူလအချက် (origin) သို့ ရွှေ့သည်၊ ထို့ကြောင့် ဝေးသော နေရာတွင် ထားသော model သည် မျက်နှာပြင် အလယ်တွင် ပေါ်သည်။ `.ifczip` နှင့် `.ifcxml` ကို ဖွင့်မရပါ။

## ပရောဂျက်နှင့် မိသားစုဖိုင်များ

`.rvt` ပရောဂျက်များ၊ `.rte` ပရောဂျက် template များ၊ `.rfa` မိသားစုများနှင့် `.rft` မိသားစု template များ။

| ဖတ်သည် | အသေးစိတ် |
|---|---|
| File information | Release နှင့် build၊ worksharing၊ central model path၊ last saved path၊ user name၊ locale၊ document GUID |
| Project information | ပရောဂျက်၏ ကိုယ်ပိုင် field များ (အမည်၊ နံပါတ်၊ client၊ လိပ်စာ၊ status…)၊ new-project မူလတန်ဖိုးများ မပါဘဲ |
| Family information | မိသားစုအမည်၊ category၊ release၊ နောက်ဆုံး update၊ နှင့် ၎င်း၏ parameter များ group အလိုက် |
| Links | ဖိုင်က ညွှန်ပြသော linked model များ၊ CAD link များ၊ ပုံများနှင့် keynote ဇယားများ၏ စာရင်း |
| Preview picture | ဖိုင်တွင် သိမ်းထားသော thumbnail |

မဖတ်ပါ: 3D model၊ element များ၊ view များ၊ sheet များနှင့် ဇယားများ။ ၎င်းတို့ကို မှတ်တမ်းမတင်ထားသော format တွင် သိမ်းသည်။ BimCraft သည် ဖိုင်တစ်ခုစီမှ ကီလိုဘိုက် ဆယ်ဂဏန်းခန့်သာ ဖတ်သောကြောင့် ဖိုင်အရွယ်အစားက အရေးမကြီးပါ။

## .pln, .pla, .tpl နှင့် .bpn ပရောဂျက်ဖိုင်များ

ယခု မဖတ်သေးပါ: BimCraft က ဖွင့်သောအခါ ထိုသို့ ပြောသည်။ model အတွက် IFC ထုတ်ပြီး ပုံဆွဲအတွက် DWG ထုတ်ပါ; [Open .pln and .pla project files](topic:pln-project-files) ကို ကြည့်ပါ။

## DWG နှင့် DXF

| ဖတ်သည် | အသေးစိတ် |
|---|---|
| Spaces | Model space နှင့် sheet (layout) တိုင်း၊ tab အစဉ်အလိုက် |
| Viewports | sheet တစ်ခုစီ၏ viewport များ၊ ၎င်းတို့၏ scale၊ twist နှင့် frozen layer များ |
| Layers | အမည်၊ အရောင်၊ on/off၊ frozen၊ plot flag နှင့် line weight |
| Objects | မျဉ်း၊ polyline၊ arc၊ စက်ဝိုင်း၊ ellipse၊ spline၊ hatch နှင့် solid၊ စာသားနှင့် multiline စာသား၊ block နှင့် attribute၊ dimension၊ leader နှင့် multileader၊ table၊ point၊ ပုံများ |
| Linked drawings | ထည့်သွင်းထားသော နေရာတွင် ဆွဲသည်၊ ဖိုင်များ တွေ့လျှင် |
| Images | ပုံဖိုင်များမှ ဆွဲသည်၊ တွေ့လျှင် (PNG, JPEG, GIF, BMP, WebP; TIFF မဟုတ်) |
| Equipment tags | Foodservice item tag များ (`KCL-ITEM` attribute)၊ စက်ပစ္စည်းဇယားအတွက် |

တခြားအရာတိုင်းကို **Not drawn yet** အောက်တွင် ရေတွက်သည်၊ ခန့်မှန်းခြင်း မဟုတ်ပါ။ DWG format AutoCAD 2000 မှ 2018 အထိ စစ်ဆေးထားသည် (R13 နှင့် R14 ဖိုင်များကိုလည်း လက်ခံသည်၊ စမ်းသပ်အစုတွင် မပါခဲ့; ပိုဟောင်း DWG များ ဖွင့်မရပါ); {{ui:Drawing}} panel က format code ကို ပြသည် (AC1032 ကဲ့သို့)။ DXF ဖိုင်များ ဗားရှင်းအားလုံး ဖွင့်သည်၊ R12 အပါအဝင်။ နှစ်ခုစလုံးကို BimCraft ၏ ကိုယ်ပိုင် reader များက ဖတ်သည်၊ ဤ tab တွင်။ DWG သို့ သို့မဟုတ် DXF သို့ ဘာမျှ ပြန်မသိမ်းပါ။

## ဖိုင်တွဲတစ်ခုတွင်

| အမျိုးအစား | တိုးချဲ့မှုများ | အစီရင်ခံစာတွင် |
|---|---|---|
| Models | `.rvt` `.rfa` `.rte` `.rft` | နံပါတ်ပါ အရန်များဖြင့် အုပ်စုဖွဲ့ထား၊ health စစ်ထား၊ card ဖတ်ထား၊ links စစ်ထား |
| IFC | `.ifc` | စာရင်းပြု; 3D တွင် ဖွင့်သည် |
| CAD | `.dwg` `.dxf` `.dgn` | ချိတ်ဆက်သော model များနှင့် အတူ စာရင်းပြု; DWG နှင့် DXF ကို 2D တွင် ဖွင့်သည်၊ DGN မဟုတ် |
| Leftovers | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | **Set aside** အောက်တွင် စာရင်းပြု |
| Housekeeping folders | `*_backup`, `*_log`, `Revit_temp`, hidden folders | **Set aside** အောက်တွင် စာရင်းပြု၊ မဖတ် |

ကြည့်ရန် [Folder report: roles, statuses and links](topic:folder-roles)။
