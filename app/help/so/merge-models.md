---
title: Isku dar wax-ka-beddelka laba qof oo moodel hal ah
summary: Ka dhig git, Fossil ama Mercurial inay isku daraan laba nuqul oo wax laga beddelay isla IFC moodel ah shay shay, si laba qof ay isla dhismo ugu shaqeeyaan oo ay shuqulkooda isku xidhaan.
keywords: isku dar, git, fossil, mercurial, maamulka nooca, isku-dhac, saddex-geesood, cadaymaha cadaan, gitattributes, ifc, globalid, koox, laba nuqul, laamo
from: 50733df8
---

Laba qof ayaa qaadaa isla dhismaha nuqul: mid wuxuu sameeyaa bari, mid kalena galbeed; kadibna nuqulladu waa inay noqdaan mid. Haddii ay taabteen shay kala duwan, barnaamij ayaa sameyn kara halkii qof.

## Waxa shaqeeya

Darbi, albaab, heer, qol iyo koox sifooyin ah oo kasta oo fayl IFC ah waxay leedahay GlobalId aan weligeed beddelmin. Isku-darku wuxuu raadiyaa shayga id-kaas, ma aha lambarka uu faylku siiyo (`#123`), sababtoo ah lambaradu way beddelmaan marka barnaamij keydiyo. Qaybaha ku xiran shay oo aan lahayn id gaar ah (goobaha, qaabka, unugyada) waxay isbarbar dhigmaan waxa ay ku jiraan.

Laba nuqulba waa inay isku mid ahaadaan nooca IFC (2x3, 4 ama 4.3). Isku-darku wuxuu ilaaliyaa faylkaaga sida uu yahay, dalabkiisa iyo lambarradiisa, oo wuxuu ku daraa waxa cusub, sidaas darteed git diff-ka isku-darka wuxuu muujinayaa waxa isku-darku beddelay oo keliya.

## Dejinta

Git wuxuu u baahan yahay laba xariiq hal mar mid kasta repository:

```
# .gitattributes
*.ifc merge=cadcraft

# hal mar, kombiyuutar kasta
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git la'aan, orod `cadcraft merge <base> <ours> <theirs>`. Fossil iyo Mercurial waxay qaataan saddexdaas fayl isla dejinta qalabka isku-darka ee ka tirsan. Waxba lama soo dirin; dhammaantood waxay ku shaqeeyaan kombiyuutarkaaga.

## Xeerarka

- Sifo laga beddelay hal dhinac oo keliya ayaa la qaataa. Isla beddelka labada dhinac waa la qaataa hal mar.
- Sifo labo siyaabood loo beddelay (heer isku magac loo beddelay labo siyaabood) waa **isku-dhac**: dhinacaaga ayaa sii joogaa, warbixintuna waxay liisataa labadaba. Fur natiijada oo ka saxo gacanta.
- Liis waxyaabo (darbiyada heer, sifooyinka set) waxay isku daraan sida set: waxa labada dhinac ku daray waa la hayaa, waxa labada dhinac ka saaray waa la saaraa. Laba qof oo mid kastaa darbi ku daray heer isku mid ah isku-dhac ma leh.
- Shay lagu daray dhinac kasta waa la hayaa, qaabkeeda iyo sifooyinkeeda. Laga saaray hal dhinac oo kan kale aan la taabanin: waa la saaraa. Laga saaray hal dhinac oo kan kale la beddelay: waa la saaraa, warbixinna waa lagu sheegaa.
- Waqtiga iyo magaca qofka ee faylka, iyo taariikhda milkiilaha shay kasta, way sii joogaan kuwaaga.

Geometry waa la isku daraa oo dhan: qaabka darbi wuxuu ka imanayaa mid ka mid ah dhinacyada, weligeed looma isku qasin dhibcaha. Faylalka IFC ee la dhegeeyey iyo IFCX looma isku daro. Kadib isku-dar, fur natiijada BimCraft oo eeg panelka {{ui:Dhibaatooyin}} ka hor intaadan keydin.
