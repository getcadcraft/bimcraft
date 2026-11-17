---
title: Dukumentiyada moodelka ka yimid
summary: Qor qoraal ama sharaxaad mar hal mar sida qaab, oo leh goobo tirooyinka, guryaha iyo calaamadaha, kadibna ka buuxi IFC-ka furan sida PDF ama dukumentiga Word.
keywords: dukumentiga, dukumentiyo, specification, sharaxaad, qaab, markdown, warbixin, word, docx, pdf, tirooyin, jadwal, trade, jadwalka albaabada, dhamaystirro, documentcad
from: 2b0c9156
---

## Waxa aad samayn doontaa

Qaabku waa qoraal Markdown leh goobo laba xidhmo xidhan. BimCraft wuxuu ka buuxiyaa goobaha moodelka furan (tirooyinka, tirooyinka sida nooca, guryaha, [calaamadaha](topic:tags-and-schedules) aad leedahay) wuxuuna kaydiyaa natiijada sida PDF, dukumentiga Word (.docx) ama Markdown.

## Tallaabooyin

1. Fur moodel IFC.
2. Dhinaca bidix, hoosta {{ui:Tirooyinka}}, fur {{ui:Dukumentiyada moodelka ka yimid}}.
3. Dooro qaab: {{ui:Albaabada iyo agabka}} ama {{ui:Darbiyada, dahaarka iyo dhamaystirka}}, ama {{ui:Soo qaad qaab (.md)…}} kaaga gaarka ah.
4. Haddii qaabku akhristo calaamado moodelku wali aanu qeexin, guji {{ui:Ku dar calaamadaha qaabkan}}, kadibna calaamadi walxaha hoosta {{ui:Calaamadaha}}.
5. Beddel qoraalka sida aad rabto oo guji {{ui:Muuji dukumentiga}}.
6. Guji {{ui:PDF}} (marka hore dooro A4 ama Letter) ama {{ui:Word (.docx)}}.

## Waxa aad arki doontaa

- Dukumentiga la buuxiyay ee badhamada hoose, oo leh miisaskiisa.
- Liis digniino marka goob aan la akhrin karin (calaamad aan la qeexin, guri aan moodelku lahayn, bloog aan la xidhin); goobtaas waxa loo daabacaa sida `[?…]`.
- Bogagga PDF oo leh cinwaanka dukumentiga iyo "Bogga 1 oo ka mid ah 3" hoosta bog kasta; miisaska dheer waxay sii socdaan safka madaxa.

## Goobaha

| Goob | Waxa uu bixiyaa |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | magaca mashruuca iyo sharaxaaddiisa, magaca faylka, maanta |
| `{{count IfcDoor}}` | inta albaab |
| `{{sum IfcWall NetSideArea}}` | wadar, oo leh unugeeda |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | xisaab (`+ - * /` iyo qaasaska) oo ku saleysan ereyada qaansada: `[sum …]`, `[count …]`, iyo gudaha each `[qty Width]`. `round n` wuxuu dejiyaa meelaha tobanka, `unit` wuxuu ku daraa unug. Wax aan la akhrin karin, ama qaybin eber, wuxuu daabacaa `[?…]` oo digniin ayuu siiyaa |
| `{{qty IfcWall NetSideArea by Type}}` | miis: safka kasta nooc kasta oo tiro iyo wadar, iyo safka wadarta |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | miis, safka kasta walax kasta |
| `{{tag Finish}}` | wareeg gudihiisa, qiimaha walxaha; meel kale dhammaan qiimayaasha la isticmaalay (Oak, Paint) |
| `{{tags}}` | qeexinta calaamadaha miis ahaan |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | qoraalka mar walax kasta; qaybta ka dambeysa `{{else}}` marka aanay jirin |
| `{{#group IfcWall by Type}} … {{/group}}` | qoraalka mar nooc kasta, oo leh `{{value}}`, `{{count}}`, `{{sum Length}}` iyo `{{#each}}` caadi ah gudaha |

Gudaha `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (the IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (kan walxa kasta, oo leh unuggiisa).

Fasal wuxuu noqon karaa dhowr (`IfcDoor|IfcWindow`) ama dhammaan walxaha (`*`). Ku kooba mid kasta `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Baaritaannada waa `=`, `!=`, `~` (ka kooban), `>`, `<`, `>=`, `<=`, `has` iyo `hasnot`; isku xidh dhowr oo `and`; qiime leh meel-bannaan geli "xigmado" gudaha. `sort Name` wuxuu kala soocaa wareeg.

## Jadwallada iyo sharaxaadda gudaha dukumentiga

`{{schedule doors}}` wuxuu daabacaa jadwal moodel ah miis ahaan, qaabka xafiiskaaga: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ama magaca habayn kaydsan oo ku jira Jadwalada. `{{specification}}` wuxuu daabacaa sharaxaadda mashruuca. Qaababka **Jadwalka shaqada** iyo **Sharaxaad** ayaa isticmaala. Horudhaca, guji tiro jadwal oo aad u doorato walxaha uu ka yimid. Eeg [Habee, kaydi oo dhoofi jadwalka](topic:schedule-layouts) iyo [Qor sharaxaadda moodelka ka](topic:specification).

## Waxa muhiim ah

- Goob wuxuu magacaabaa mid dhex-dhisan (Name, Type, Storey, Class, Material, Mark), calaamad (`tag:Fire rating`, ama magaciisa), guri (`Pset_WallCommon.FireRating`) ama magaca guri keliya (`NetSideArea`, `Width`): magaca keliya wuxuu akhrinayaa xogta walax kasta, marka hore xogta tirada, sidaas darteed `Width` albaab ahaan waa ballaca albaabka, ma aha qaybta darbiga. Gudaha `where`, magaca keliya wuxuu akhrinayaa xogta ay leedahay inta badan walxaha la doortay.
- Tirooyinku waa waxa xogta tirada faylku sheegayo (BimCraft wuu qoraa wixii uu sameeyo); unugyadu waxay ka yimaadaan dejinta unugyada faylka.
- Ereyada goobaha (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) waxay ku sii jiraan Ingiriisi luuqad kasta. Qaababka tusaalaha waa Ingiriisi.
- Qoraalka moodelka ma noqdo qaab: magac leh `*` ama `|` wuxuu daabacmaa sidiisa.
- Qaab aad beddeshay ku hay {{ui:Ku hay browser-kan}} (browser-kan kaliya ayaa haysta) ama {{ui:Soo deji qaabka}}.
- Qoraalka PDF wuxuu isticmaalaa farta PDF-ka caadiga ah: xaraf ka baxsan qoraalka Yurub ee galbeedka wuxuu daabacmaa "?", oo xaaladdu waxay tirinaysaa.
- Qaababka qaababka ah waxay ku nool yihiin Maktabadda (nooca Qaabka dukumentiga). Dukumentiyada moodelka ka yimid, dooro **Maktabadda…**, dooro mid, qoraalkiisa iyo calaamadaha uu akhrinayo ayaa soo galaya; wax ka beddel sida aad rabto. Qaabkaaga u daabac Maktabadda waa isla soo-dejinta sida shay kasta. Weli lama dhisin: xisaabaad ka badan tirooyinka iyo wadarta.
