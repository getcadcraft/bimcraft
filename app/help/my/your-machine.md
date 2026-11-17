---
title: သင့်စက်က ဘယ်လို render လုပ်သလဲ
summary: Settings › Rendering တွင် ဤ browser က အက်ပ်အသုံးပြုခွင့်ပေးသော graphics၊ processor cores နှင့် memory ကို ပြသပြီး rendering စတင်သည့် level ကို သတ်မှတ်သည်။
keywords: သင့်စက်, graphics card, gpu, webgpu, webgl, processor, cpu, cores, threads, memory, ram, shared memory, isolation, tier, level, speed, slow, rendering speed, laptop
from: 360f2375
---

{{ui:ဆက်တင်များ}} ({{key:Mod+,}}) ကို ဖွင့်ပါ၊ ဤအက်ပ်၏ကိုယ်ပိုင် tab တွင် ဆက်နေပြီး {{ui:Rendering}} သို့ scroll ချပါ။ {{ui:Your machine}} က ဤ browser က rendering အတွက် အက်ပ်ကို ခွင့်ပြုသည့်အရာများကို ပြသသည်။ ၎င်းထဲရှိ မည်သည်မဆို သင့်ကွန်ပျူတာမှ မထွက်ပါ။

| အတန်း | အဓိပ္ပာယ် |
|---|---|
| {{ui:ဂရပ်ဖစ်}} | browser က အစီရင်ခံသော graphics card။ "WebGPU" ဆိုသည်မှာ rendering အလုပ်ကို လုပ်နိုင်သည်; "WebGL 2 only" ဆိုသည်မှာ WebGPU မရှိပါ: live view နှင့် အရည်အသွေးမြင့် ပုံများသည် WebGL 2 ဖြင့် graphics card ကို သုံးသည် (WebGPU လိုအပ်သော အပိုအင်္ဂါများမပါဘဲ အဟောင်း WebGL path tracer ဖြင့် ပုံများ); software stand-in ဆိုသည်မှာ အရာအားလုံး processor ပေါ်တွင် run သည် |
| {{ui:ပရိုဆက်ဆာ}} | browser က အစီရင်ခံသော processor cores အရေအတွက် |
| {{ui:မှတ်ဉာဏ်}} | ကွန်ပျူတာတွင် memory ခန့်မှန်းခြေ ဘယ်လောက်ရှိသည်၊ browser က ပြောသည့်အခါ။ အချို့ browser များက မပြပါ |
| {{ui:မျှဝေမှတ်ဉာဏ်}} | စာမျက်နှာက ၎င်း၏ workers များအကြား memory မျှဝေခွင့်ရှိ/မရှိ။ ဖွင့်ထားလျှင် core တိုင်းသည် scene မိတ္တူတစ်ခုတည်းပေါ်တွင် အလုပ်လုပ်နိုင်သည်; ပိတ်ထားလျှင် တစ်ခုစီ ကိုယ်ပိုင်မိတ္တူလိုအပ်သဖြင့် scene ကြီးကြီးသည် တစ်ပြိုင်နက် core နည်းနည်းတွင်သာ ဝင်နိုင်သည် |
| {{ui:မြန်ဆန်သော ပရိုဆက်ဆာကုဒ်}} | browser က ပိုမြန်သော WebAssembly code ကို run သည်/မ run ပါ။ မရှိလျှင် ပိုနှေးသော fallback ကို သုံးသည် |
| {{ui:အထပ်}} | {{ui:ဂရပ်ဖစ်ကတ်၊ မြင့်}}၊ {{ui:ဂရပ်ဖစ်ကတ်၊ အခြေခံ}} သို့မဟုတ် {{ui:ပရိုဆက်ဆာသာ}}၊ အောက်တွင် အကြောင်းပြချက်နှင့်အတူ |

## အဆင့်

Level သည် rendering စတင်သည့်နေရာဖြစ်သောကြောင့် built-in graphics chip သို့မဟုတ် graphics card မရှိသော laptop သည် တုံ့ပြန်မှုကောင်းနေသည်။ built-in သို့မဟုတ် ဖုန်း graphics chip၊ သို့မဟုတ် memory 4 GB နှင့်အောက်သည် {{ui:ဂရပ်ဖစ်ကတ်၊ မြင့်}} ကို ဘယ်တော့မှ မရနိုင်ပါ။

:::note
Browser များ ကွဲပြားသည်။ ကွန်ပျူတာတစ်လုံးတည်းက browser တစ်ခုတွင် WebGPU ပြသပြီး နောက်တစ်ခုတွင် "WebGL 2 only" ပြနိုင်သည်။ Linux တွင် browser အများစုတွင် WebGPU မရှိသေးပါ။
:::
