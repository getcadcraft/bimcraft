---
title: Amadokhumenti kusuka kumodeli
summary: Bhala ukucaciswa noma incazelo kanye njengethempulethi, namasimu wamanani, izici namathegi, bese ugcwalisa kusuka ku-IFC evuliwe njenge-PDF noma idokhumenti ye-Word.
keywords: idokhumenti, amadokhumenti, ukucaciswa, incazelo, ithempulethi, markdown, umbiko, word, docx, pdf, amanani, uhlu, ubuchwepheshe, uhlu lwezinyango, ukuqedwa, documentcad
from: 2b0c9156
---

## Okuzokwenza

Ithempulethi ngumbhalo ku-Markdown onezindawo zensimu ezingqeni ezimbili. I-BimCraft igcwalisa lezi zindawo kusuka kumodeli evuliwe (izinombolo, amanani ngohlobo, izici, [amathegi](topic:tags-and-schedules) akho) bese igcina umphumela njenge-PDF, idokhumenti ye-Word (.docx) noma Markdown.

## Izinyathelo

1. Vula imodeli ye-IFC.
2. Ngaphansi kwe-{{ui:Amanani}} ohlangothini lwesobunxele, vula {{ui:Amadokhumenti kusuka kumodeli}}.
3. Khetha ithempulethi: {{ui:Iminyango nezinsimbi}} noma {{ui:Odonga, izinhlangothi nokuqedwa}}, noma {{ui:Layisha ithempulethi (.md)…}} eyakho.
4. Uma ithempulethi ifunda amathegi imodeli engakachazi, cofa {{ui:Engeza amathegi alesi thempulethi}}, bese uthegi izakhi ngaphansi kwe-{{ui:Amathegi}}.
5. Shintsha umbhalo njengoba ufuna bese ucofa {{ui:Bonisa idokhumenti}}.
6. Cofa {{ui:PDF}} (khetha i-A4 noma i-Letter kuqala) noma {{ui:Word (.docx)}}.

## Okufanele ukubone

- Idokhumenti egcwalisiwe ngaphansi kwezinkinobho, namathebula ayo.
- Uhlu lwezexwayiso uma insimu ingafundeki (ithegi elingachazwanga, impahla imodeli engayinaki, ibhulokhi engavalwa): insimu enjalo iphrintwa njenge-`[?…]`.
- Amakhasi e-PDF anesihloko sedokhumenti nombhalo othi "Ikhasi 1 kwezi-3" ezansi kwekhasi ngalinye; amathebula amade aqhubeka nomugqa wawo wekhanda.

## Amasimu

| Insimu | Inikeza |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | igama leprojekthi nencazelo yayo, igama lefayela, namuhla |
| `{{count IfcDoor}}` | inani lezinyango |
| `{{sum IfcWall NetSideArea}}` | isamba, neyunithi yaso |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | izibalo (`+ - * /` nezakhiwo) phezu kwamagama phakathi kwezikwele: `[sum …]`, `[count …]`, nangaphakathi kwe-each `[qty Width]`. `round n` isetha izinombolo zamashumi, `unit` yengeza iyunithi. Okungafundeki, noma ukuhlukanisa ngo-zero, kuphrinta `[?…]` futhi kuxwayise |
| `{{qty IfcWall NetSideArea by Type}}` | ithebula: umugqa ngamunye ngohlobo nenani lawo nesamba, nomugqa wesamba |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | ithebula, umugqa ngamunye ngesakhi |
| `{{tag Finish}}` | ekuphindeni, inani lesakhi; kwenye indawo, zonke izinani ezisetshenzisiwe (Oak, Paint) |
| `{{tags}}` | izincazelo zamathegi njengethebula |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | umbhalo kanye ngesakhi ngasinye; ingxenye ngemva kwe-`{{else}}` uma kungekho lutho |
| `{{#group IfcWall by Type}} … {{/group}}` | umbhalo kanye ngohlobo, nezi-`{{value}}`, `{{count}}`, `{{sum Length}}` nokuphindwa okuvamile kwe-`{{#each}}` ngaphakathi |

Phakathi kwe-`{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (i-IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (eyakhe, nayo iyunithi).

Uhlobo lungaba ngaphezu kwelilodwa (`IfcDoor|IfcWindow`) noma zonke izakhi (`*`). Yincisha nganoma yiliphi ngo-`where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Izivivinyo yi-`=`, `!=`, `~` (iqukethe), `>`, `<`, `>=`, `<=`, `has` no-`hasnot`; xhuma okuningi nge-`and`; faka inani elinezikhala phakathi kwezinkomba ezithi "quotes". `sort Name` ihlela ilophu.

## Ukucaciswa nohlu kwidokhumenti

`{{schedule doors}}` iphrinta uhlu lwemodeli njengethebula, ngolayout yakho yehhovisi: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, noma igama lesethi oyigcine kuUhlu. `{{specification}}` iphrinta ukucaciswa kweprojekthi. Amathempulethi **Uhlu lwemidwebo yokusebenza** no-**Ukucaciswa** eziwasebenzisa. Kwi-preview, cofa inombolo yohlu lwalolu hlobo ukuze ukhethe izakhi ezivela kuzo. Bona [Hlela, gcina futhi uthumele uhlu](topic:schedule-layouts) no [Bhala ukucaciswa kusuka kumodeli](topic:specification).

## Okufanele ukwazi

- Insimu ibiza isakhiwo esakhelwe ngaphambili (Name, Type, Storey, Class, Material, Mark), ithegi (`tag:Fire rating`, noma igama lalo), izimfanelo (`Pset_WallCommon.FireRating`) noma nje igama lesimfanelo (`NetSideArea`, `Width`): igama elilodwa lifunda isethi yesakhi ngasinye, izethi zobukhulu kuqala, ngakho `Width` kumnyango kubububanzi bomnyango, hhayi ukuqina kodonga. Ngaphakathi kwe-`where`, igama elilodwa lifunda isethi abaningi bezakhi ezikhethiwe abayinayo.
- Izinombolo ziwukuthi amafayela wesethi wamanani athini (i-BimCraft iwabhalela lokho ayidwetshile); iyunithi ivela ezilungiselelweni zeyunithi zefayela.
- Amagama wensimu (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) ahlala esiNgisini kuzo zonke izilimi. Amathempulethi wesampula asesiNgisini.
- Umbhalo ovela kumodeli awuphenduki ukwakheka: igama elinendondo `*` noma `|` liphrintwa njengoba kunjalo.
- Gcina ithempulethi oyishintshile nge-{{ui:Gcina kulesi siphequluli}} (lolu siphequluli kuphela lunayo) noma {{ui:Khipha ithempulethi}}.
- Umbhalo we-PDF usebenzisa amafonti ajwayelekile we-PDF: uhlamvu olungaphandle kombhalo waseNtshonalanga Yurophu luphrintwa njenge-"?", nomugqa wesimo uyatshela ukuthi luningi kangaki.
- Amathempulethi ngohlobo ngalunye atholakala kuMtapo (uhlobo Document template). Ku-{{ui:Amadokhumenti kusuka kumodeli}}, khetha Kusuka Emtapweni…, khetha eyodwa, umbhalo wayo namathegi ayifundayo angena; yihlele njengoba ufuna. Ukushicilela ithempulethi yakho emtapweni kuyinkinga efanayo yokulayisha njengezinye izinto. Akukakhiwa okungaphezu kokubala nezinani: izinani nesamba kuphela.
