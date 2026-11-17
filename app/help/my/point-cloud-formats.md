---
title: Point cloud format များ: ဖွင့်နိုင်သည်များနှင့် ထုတ်ရမည်များ
summary: 3D view တွင် ဖွင့်နိုင်သော laser scan ဖိုင်များ၊ scanner ထုတ်လုပ်သူ၏ ကိုယ်ပိုင် format များနှင့် scan ကို ဤနေရာတွင် ဖွင့်နိုင်ရန် scanner ၏ software မှ ဘာထုတ်ရမည်ကို ပြောပြသည်။
keywords: point cloud, laser scan, scan, format များ, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, ထုတ်ခြင်း, ဖွင့်မရခြင်း, မဖတ်ခြင်း
from: 1e985f01
---

## ဤနေရာတွင် ဖွင့်နိုင်သည်များ

ဤဖိုင်များကို {{ui:Open}} ဖြင့် သို့မဟုတ် စာမျက်နှာပေါ် ချ၍ ဖွင့်ပါ (မော်ဒယ်ဘေးတွင် point cloud ကို ပြသည့် အကြောင်းအရာကို ကြည့်ပါ):

| Format | Extension | ဖတ်ရသည့်အရာ |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: အမှတ်များ၊ အရောင်များ၊ intensity၊ LiDAR class များ၊ coordinate system။ LAZ 1 GB အထိ။ |
| E57 | `.e57` | ဖိုင်ထဲရှိ scan အားလုံး၊ ၎င်းတို့၏ pose ဖြင့် နေရာချထားသည်; အရောင်များ၊ ဖိုင်တွင် အရောင်မရှိလျှင် intensity။ ဖိုင်ထဲရှိ ပုံများကို မထည့်ပါ (ထိုသို့ ပြောထားသည်)။ ယခုအချိန်တွင် အမှတ် 6 သန်းနှင့် 512 MB အထိ: ပိုကြီးသော scan များကို LAS သို့မဟုတ် LAZ အဖြစ် ထုတ်ပါ။ |
| PLY | `.ply` | Text နှင့် binary (byte order နှစ်မျိုးလုံး): vertex များ၏ x y z၊ အရောင်များနှင့် intensity။ Face များကို မထည့်ပါ (ထိုသို့ ပြောထားသည်)။ |
| PCD | `.pcd` | Text နှင့် binary: x y z၊ packed သို့မဟုတ် သီးခြား အရောင်များ၊ intensity။ Compressed PCD ဖိုင်များကို မဖတ်သေးပါ: binary သို့မဟုတ် text အဖြစ် သိမ်းပါ။ |
| PTX | `.ptx` | Scan တစ်ခု သို့မဟုတ် တစ်ခုထက်ပို၊ ၎င်းတို့၏ ကိုယ်ပိုင် transform ဖြင့် နေရာချထားသည်; scanner မတိုင်းတာခဲ့သော အမှတ်များကို မထည့်ပါ။ မီတာ။ |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z၊ column များရှိလျှင် intensity နှင့် အရောင်များ။ |

## scanner ၏ software သာ ဖတ်နိုင်သော scan ဖိုင်များ

Scan ဖိုင်အချို့သည် ထုတ်လုပ်သူ၏ ကိုယ်ပိုင် format ဖြစ်ပြီး ထုတ်ပြန်ထားသော ဖော်ပြချက် သို့မဟုတ် ပွင့်လင်းသော reader မရှိပါ။ BimCraft သည် ၎င်းတို့ကို ဖတ်နိုင်သည် မဟုတ်ပါ၊ ဖွင့်လိုက်သောအခါ ၎င်းက ဘာဖြစ်ကြောင်းနှင့် ဘာလုပ်ရမည်ကို ပြသော card တစ်ခု ပေါ်လာမည်။ Maker ၏ software မှ scan ကို E57 သို့မဟုတ် LAS (သို့မဟုတ် PTX, PTS) အဖြစ် ထုတ်ပြီး ထုတ်ထားသော ဖိုင်ကို ဖွင့်ပါ။

| ဖိုင် | Extension | ထုတ်ရမည့်နေရာ |
|---|---|---|
| ReCap project | `.rcp` | ReCap: project ကို ဖွင့်ပြီး ထုတ်ပါ။ Project သည် ၎င်း၏ scan များကို ညွှန်ပြရုံသာ ဖြစ်သဖြင့် `.rcp` ကို သီးခြား ကူးယူရုံဖြင့် အမှတ် မရပါ။ |
| ReCap scan | `.rcs` | ReCap: scan ပိုင်သော project ကို ဖွင့်ပြီး ထုတ်ပါ။ |
| FARO scan | `.fls` | FARO SCENE။ |
| Leica scan | `.lgs` | Leica Cyclone REGISTER 360။ |
| Trimble scan | `.tzf` | Trimble RealWorks သို့မဟုတ် Trimble Business Center။ |
| Z+F scan | `.zfs` | Z+F LaserControl။ |

:::tip
Export က format တောင်းသောအခါ LAS သို့မဟုတ် LAZ သည် BimCraft ပြသသော အရာအားလုံး (အရောင်များ၊ intensity၊ class များနှင့် coordinate system) ကို အသေးဆုံးဖိုင်တွင် ထိန်းထားသည်။
:::

## ဤဖိုင်များ ဘာကြောင့် မဖတ်ရသလဲ

ထို format များကို ထုတ်ပြန်ထားခြင်း မရှိပါ၊ ဖတ်ရန် တစ်ခုတည်းသော နည်းလမ်းမှာ ထုတ်လုပ်သူ၏ ကိုယ်ပိုင် software library ဖြစ်ပြီး ၎င်း၏ ကိုယ်ပိုင် စည်းမျဉ်းများအောက်တွင် ရှိသည်။ BimCraft သည် ကွန်ပျူတာပေါ်ရှိ ကိုယ်ပိုင် code ဖြင့် ဖတ်နိုင်သော format များကိုသာ ဖတ်သည်၊ ထို့ကြောင့် scan ကို ဖွင့်ရန် တစ်နေရာရာသို့ ပို့ရန် မလိုပါ။
