---
title: Vista sýnir og göngur
summary: Geymdu myndavélarsýnir af líkaninu undir heiti, farðu aftur til þeirra, spilaðu þær hverja á eftir annarri, og taktu upp göngu um bygginguna til að spila til baka.
keywords: sýnir, vistaðar sýnir, myndavél, myndavélar, sjónarhorn, sena, senur, ferð, kynning, ganga, göngutúr, fljúga í gegn, taka upp, spila, slóð, hreyfimynd
from: 3af19a36
---

{{ui:Views}} á tækjastikunni geymir myndavélar þrívíddarsýnarinnar í skrá líkansins, svo þú og hver sem þú sendir það til getið farið beint aftur til þeirra.

## Vista sýn

1. Stilltu þrívíddarsýnina: snúðu, aðdraga, fela það sem þú vilt ekki.
2. Smelltu á {{ui:Views}}, skrifaðu heiti (eða hafðu það sem boðið er) og smelltu á {{ui:Save view}} eða ýttu á {{key:Enter}}.

Vista með heiti sem er þegar á listanum uppfærir þá sýn. Smelltu á heiti sýnar til að fara aftur til hennar; myndavélin færist þangað mjúklega.

Örvarnar breyta röðinni, blýanturinn endurnefnir, ruslafatan eyðir. Hver breyting er eitt skref, svo {{key:Ctrl+Z}} afturkallar hana.

## Spila sýnirnar

{{ui:Play the views}} færist frá einni sýn til næstu í röð listans, og stoppar smástund við hverja. {{key:Esc}} eða {{ui:Stop}} endar það.

## Taka upp göngu

1. Kveiktu á [Ganga](topic:walk) og byrjaðu að ganga inni í byggingunni.
2. Í {{ui:Views}} smelltu á {{ui:Record a walk}}.
3. Gakktu með {{key:W}} {{key:A}} {{key:S}} {{key:D}} og líttu í kring með músinni.
4. Smelltu á {{ui:Stop recording}}. Gangan er vistuð sem „Ganga 1“, með lengd sinni.

Smelltu á göngu til að spila hana til baka eins og þú gekkst hana. {{key:Esc}} stöðvar hana.

## Gera göngu að myndbandi

Smelltu á myndavélartáknið við göngu. Myndbandsglugginn teiknar hvern ramma göngunnar með Myndgerðarstillingunum sem þú valdir síðast, í þeirri stærð, rammatíðni og gæðum sem þú velur hér. Vistaðu það sem WebM- eða MP4-myndband, eða sem ZIP með einni mynd á hvern ramma. Rammar taka jafn langan tíma og myndir, svo byrjaðu á {{ui:Quick}}.

## Setja talsetningu við göngu

Smelltu á talbóluhnappinn við göngu. Skrifaðu eina línu fyrir hvað er sagt, og byrjaðu línu á tímanum sem hún byrjar á (`12`, `0:12` eða `1:02.5`); lína án tíma fylgir línunni fyrir ofan eftir þann tíma sem það tekur að segja hana. Veldu tungumál, á tungumáli viðskiptavinarins ef hann er sá sem horfir. {{ui:Preview}} spilar orðin með rödd þessarar tölvu og sýnir þau sem skjátexta; það sama gerist alltaf þegar gangan spilast. {{ui:Save with the walk}} geymir talsetninguna í IFC með göngunni.

Tengdi aðstoðarmaðurinn þinn getur skrifað talsetninguna fyrir þig: biddu hann að skoða gönguna og vistuðu sýnirnar, og hann setur línurnar á því tungumáli sem þú nefnir, sem eitt afturköllunarskref.

Myndbandið sem myndgert er hefur ekkert hljóð, því vafri getur ekki tekið upp eigin rödd. Vistaðu skjátextann (`.srt` eða `.vtt`) og bættu honum við myndbandið í myndspilaranum eða klippiforritinu. Hvaða raddir þú getur valið fer eftir tölvunni: tungumál án uppsetts raddar fær samt skjátexta.

## Í skránni

Sýnir og göngur eru geymdar í IFC sem eiginleikasafnið `CadCraft_Views` á verkefninu: venjulegt IFC sem önnur forrit hunsa. Þau eru í hnitum fyrsta líkansins, svo þau passa enn eftir að líkanið er hlaðið aftur eða annað líkan bætt við.

:::tip
Til að myndgera mynd úr vistaðri sýn, farðu í sýnina og smelltu síðan á [Myndgerð](topic:render).
:::
