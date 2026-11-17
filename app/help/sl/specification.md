---
title: Napišite specifikacijo iz modela
summary: Ena specifikacijska točka za vsak tip zidu, vrat, okna, tal in obdelave, ki je v uporabi, s podatki, prebranimi iz modela, in vašim besedilom, izdelana kot dokument PDF ali Word.
keywords: specifikacija, spec, delovne risbe, faza 5, gradbena dokumentacija, razdelek, tip zidu, tip vrat, tip okna, obdelava, klasifikacija, uniclass, omniclass, masterformat, dokument, pdf, word, docx, razpredelnice
from: a6acc6d4
---

## Kaj boste naredili

Pridobite specifikacijo, ki sledi modelu: razdelek za vsak tip, ki je res v stavbi, vsakega z zgradbo in količinami, prebranimi iz modela, ter besedilo, ki ga zanj napišete.

## Koraki

1. Vklopite {{ui:Risanje}}, v levi plošči odprite **Razpredelnice** in kliknite **Specifikacija**.
2. Pogovorno okno našteje en razdelek za vsak tip zidu, tip vrat, tip okna, tla in obdelavo prostora v uporabi. Pod vsako naslovno vrstico so njena **dejstva**, prebrana iz modela: debelina, sloji posamezno, stopnja razvoja, dimenzije, koliko in koliko. Razdelek, katerega elementi imajo klasifikacijsko kodo, prikaže kodo v naslovu.
3. Napišite besedilo specifikacije v polje pod razdelkom. **Izberi njegove elemente** pokaže, na kaj se razdelek nanaša.
4. Kliknite **Shrani**. To je en korak v Razveljavi, besedilo pa se ohrani v datoteki stavbe.
5. Odprite **Dokumenti iz modela**, izberite predlogo **Specifikacija** in kliknite **Predogled**, nato ga shranite kot PDF, Word ali Markdown. Glejte [Dokumenti iz modela](topic:documents-from-the-model).

## Razpredelnice delovnih risb kot dokument

Predloga **Razpredelnice delovnih risb** natisne razpredelnice vrat, oken in obdelav naravnost iz modela, v vaši pisarniški postavitvi. V svojo predlogo napišite `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` ali ime shranjene nastavitve, na primer `{{schedule Door schedule by floor}}`. `{{specification}}` natisne specifikacijo.

## Dobro je vedeti

- Dejstva so modelova. Spremenijo se, ko se model spremeni; vaše besedilo ne.
- BimCraft ne napiše nobene točke nobenega standarda in nobenega besedila proizvajalca. Razdelek brez besedila natisne „Besedilo specifikacije še ni napisano.“
- Besedilo, napisano za tip, ki ni več v modelu, se ohrani in je našteto pod „Besedilo za tipe, ki niso več v modelu“.
- Za spremembo splošnega tipa v določen sestav glejte [Orodja za zidove](topic:wall-tools) (Zamenjaj tip).
