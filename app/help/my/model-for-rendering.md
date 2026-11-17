---
title: ရုပ်ပုံထုတ်ရန် program သို့ မော်ဒယ် ပို့ခြင်း
summary: 3D view ပြသထားသည့်အရာကို materials၊ textures နှင့် မီးများနှင့်အတူ glTF ဖိုင် (.glb) အဖြစ် သိမ်းပါ၊ glTF ကို ဖတ်သော rendering နှင့် visualization program များအတွက်။
keywords: glb, gltf, gl transmission format, ထုတ်ရန်, rendering, render, visualization, real time, archviz, materials, textures, မီးများ, lights, asset, custom asset
from: e62d57dc
---

toolbar ပေါ်ရှိ {{ui:အရောင်ဖော်ရန်အတွက်}} သည် 3D view ပြသသည့်အရာကို ဖိုင်တစ်ခု **.glb** အဖြစ် သိမ်းသည် (glTF 2.0၊ Khronos Group ၏ open format)။ glTF ကို ဖတ်သော rendering program များသည် မော်ဒယ်၏ materials နှင့် မီးများဖြင့် ဖွင့်သည်; Twinmotion သည် ၎င်းသွင်းသော geometry ဖိုင်များ ထဲတွင် glTF နှင့် GLB ကို ဖော်ပြပြီး ၎င်းတို့၏ မီးများကို ထိန်းသည် (Epic ၏ စာရွက်စာတမ်း၊ "Importing geometry in Twinmotion"): {{ui:အရောင်ဖော်ရန်အတွက်}} ကို သုံးပြီး .glb ကို ထိုနေရာတွင် သွင်းပါ။ ဘာမျှ upload မလုပ်ပါ: ဖိုင်ကို ဤကွန်ပျူတာပေါ်တွင် ဖန်တီးသည်။

## သိမ်းခြင်း

1. IFC မော်ဒယ်ကို ဖွင့်ပြီး 3D view ကို သတ်မှတ်ပါ: မလိုချင်သော storey၊ element သို့မဟုတ် linked model များကို ဝှက်ပါ၊ မြင်လိုသော [ပစ္စည်းများကို ဆေးသုတ်ပါ](topic:paint-materials)။
2. {{ui:အရောင်ဖော်ရန်အတွက်}} (သို့မဟုတ် `GLB` ကို ရိုက်ပါ) ကို နှိပ်ပါ။
3. ဖိုင်သည် "<model name>.glb" အဖြစ် download ဖြစ်သည်။ status bar က triangle၊ materials နှင့် မီး အရေအတွက်ကို ပြသည်။

## ဖိုင်တွင် ပါဝင်သည့်အရာ

- **Geometry** 3D view ပြသသည့် element တိုင်း၏ geometry၊ မီတာဖြင့်၊ Y အပေါ်ဘက် (glTF ၏ ကိုယ်ပိုင် axes)။ storey နှင့် material တစ်ခုစီအတွက် object တစ်ခု၊ "Level 1 — Brick, red" ဟု အမည်ပေးထားသဖြင့် rendering program တွင် material တစ်ခုကို ရွေးပြီး ၎င်း၏ကိုယ်ပိုင်ဖြင့် အစားထိုးနိုင်သည်။
- **Materials:** အရောင်တစ်ခုစီ၊ [ရုပ်ပုံထုတ်ရန်](topic:render) တွင် ၎င်းအတွက် ရွေးထားသော အသွင် (matte၊ satin၊ glossy၊ metal၊ glass…)၊ နှင့် ဆေးသုတ်ထားသော library material တစ်ခုစီ၏ အရောင်၊ roughness နှင့် **texture** (ပုံသည် ဖိုင်အတွင်း ရှိပြီး ၎င်း၏ အမှန်အရွယ်အစားအတိုင်း scale ပြုလုပ်ထားသည်: အုတ်တစ်ခုသည် အုတ်တစ်ခု၏ အရွယ်အစား)။ Glass က ဖောက်ထွင်းသည်။
- **မီးများ:** Render › Lamps တွင် ဖွင့်ထားသော မီးအလင်းတိုင်းကို point သို့မဟုတ် spot မီးအဖြစ် ၎င်း၏ လင်းပြောင်မှု (lumen များကို candela အဖြစ် ပြောင်းထားသည်)၊ အရောင်နှင့် beam angle ဖြင့်။
- **ဆိုက်ရှိနေရာ:** ဆိုက်၏ latitude နှင့် longitude ကို ရည်ညွှန်းရန် ဖိုင်တွင် ရေးထားသည်။ Rendering program များသည် ၎င်းတို့၏ကိုယ်ပိုင် နေရောင် ရှိသည်: ထိုနေရာတွင် နေရာကို ရိုက်ထည့်ပါ။

## ထည့်မထားသည့်အရာ

- section cut (element တစ်ခုလုံး ပါဝင်သည်) နှင့် see-through ဖြစ်အောင် ပြထားသော element များ (ချန်လှပ်ထားသည်)။
- Element တစ်ခုချင်းစီ object များ (အစား storey နှင့် material တစ်ခုစီအတွက် object တစ်ခု)၊ IFC ဂုဏ်သတ္တိများ၊ bump map များ၊ သိမ်းထားသော view များနှင့် မှတ်ထားသော လမ်းလျှောက်ခြင်းများ။
- Edge များနှင့် နောက်ခံ။

## Enscape နှင့် အခြား plug-in renderer များ

Enscape သည် အခြား design program တစ်ခုအတွင်း အလုပ်လုပ်ပြီး ပရောဂျက်တစ်ခုလုံးကို ဖွင့်ရန် ဖိုင် မရှိပါ။ နည်းလမ်းနှစ်ခု:

- မော်ဒယ်၏ **IFC** ကို (File › Save) Enscape အလုပ်လုပ်သော program တွင် ဖွင့်ပါ; ၎င်းတို့အများစုက IFC ကို ဖတ်သည်။ အရောင်များ ပါလာသည်; library material များက ၎င်းတို့၏ အရောင်အဖြစ် ပါလာသည်။
- **အပိုင်းသေး** တစ်ခု (ပရိဘောဂ၊ fixture) ကို custom asset အဖြစ် ယူလာပါ: ဦးစွာ သီးခြားခွဲပါ၊ ထို့နောက် {{ui:Enscape အတွက် (.gltf)}} ကို နှိပ်ပါ။ Enscape ၏ custom asset library သည် .glb မဟုတ်ဘဲ .gltf၊ .obj နှင့် .fbx ဖိုင်များကို စာရင်းပြုသည်၊ ထို့ကြောင့် ဤခလုတ်က တူညီသော မြင်ကွင်းကို ကိုယ်ပိုင် **.gltf** ဖိုင်တစ်ခုတည်းအဖြစ် သိမ်းသည် (binary data နှင့် ပုံများသည် ဖိုင်အတွင်း ရှိသည်; ၎င်းနှင့်အတူ ကူးရန် ဘာမျှ မရှိပါ)။ Enscape က သေးငယ်သော asset များ (triangle ~20,000 အောက်ခန့်) ကို အကြံပြုသည်။

:::note
CadCraft Studio တွင် တူညီသော glTF ဖိုင် (နှင့် USD ဖိုင်) ကို {{ui:ရုပ်ပုံထုတ်ရန်}} › Engine › **glTF ဖိုင်** / **USD ဖိုင်** မှလည်း သိမ်းနိုင်သည်၊ သို့မဟုတ် ဤကွန်ပျူတာပေါ်ရှိ program တစ်ခုတွင် တိုက်ရိုက် ဖွင့်နိုင်သည်: [Scene ကို အခြား program တွင် ဖွင့်ခြင်း](topic:render-open-in) ကို ကြည့်ပါ။ Enscape သို့မဟုတ် Twinmotion အတွက် plug-in သို့မဟုတ် live link ကို မတည်ဆောက်ထားပါ။ FBX နှင့် Datasmith ဖော်မတ်များတွင် ထုတ်ပြန်ထားသော သတ်မှတ်ချက် မရှိသဖြင့် BimCraft က ၎င်းတို့ကို မရေးပါ; glTF သည် open လမ်းကြောင်း ဖြစ်သည်။
:::
