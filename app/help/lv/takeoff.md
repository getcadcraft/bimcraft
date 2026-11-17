---
title: Daudzumi programmai TakeoffCraft
summary: Viens klikšķis nosūta modeļa daudzumus programmai TakeoffCraft — sienas pēc tipa, jumti pēc slīpā laukuma, kores, stūra kores un ieloki, pamati, durvis un logi, skapji, elektriskās ierīces, grīdas laukums un kokmateriālu griezumu saraksts — atzīmēti katra līmeņa plānā, ar amatu paku mezgliem uz vienumiem.
keywords: apjomu aprēķins, daudzumu apjomu aprēķins, tāme, tāmēšana, materiālu saraksts, materiālu specifikācija, takeoffcraft, daudzumi, sienu laukums, jumta laukums, kvadrāti, pamatne, betons, kubikjardi, griezumu saraksts, kokmateriāli, amatu pakas, mezgls
from: c5a745af
---

## Ko jūs darīsiet

Pārvērtiet modeli materiālu sarakstā un tāmē programmā TakeoffCraft. BimCraft zīmē katra līmeņa plānu standarta mērogā, atzīmē uz tā katru daudzumu un ievieto apjomu aprēķinu PDF failā. TakeoffCraft pats izmēra atzīmes, tāpēc katru skaitli var pārbaudīt uz lapas.

## Nosūtiet

1. Noklikšķiniet uz {{ui:Apjomu aprēķins}} modeļa joslā (blakus {{ui:Lapas}}).
2. TakeoffCraft atveras jaunā cilnē ar plāniem. Kad tas jautā, izvēlieties atvērt atrasto apjomu aprēķinu PDF failā.
3. Pievienojiet savas cenas TakeoffCraft daudzumu tabulā; mezgli jau uzskaita materiālus.

:::note
Ja TakeoffCraft šeit nav pieejams, poga lejupielādē PDF failu. Atveriet to vēlāk programmā TakeoffCraft: tā atradīs apjomu aprēķinu.
:::

## Kas tiek mērīts

- **Sienas** pēc tipa un augstuma: to centra līnijas kā posmi, ar sienas augstumu vienumā, tātad TakeoffCraft aprēķina garumu un sienas laukumu. Katrs posms nes sienas durvis un logus, tātad TakeoffCraft tos reizi izņem no sienas laukuma pēc tā paša noteikuma kā BimCraft specifikācijās: abi sakrīt par bruto, atskaitījumiem un neto. Sienas tipa apjomu aprēķina dati (vienība, java, likme; skatiet [Sienu komplekti](topic:wall-assemblies)) nonāk kā viena cenota rinda uz šī tipa vienuma. Mērīšanas metodei, kas nav noklusētā (skatiet [Mērīšanas metodes izvēle](topic:plan-schedules-and-pdf#choose-a-measurement-method)), apjomu aprēķins nes metodi, katrs posms nes to, ko savienojumi atņem no tā sienas virsmas, un TakeoffCraft mēra pēc tās pašas metodes un to nosauc. Tipam, kura vienībai ir garums un augstums, tiek nodotas divas komponentes ar daudzumiem: pasūtāmās vienības un javas tilpums, cenotas, ja tipa likme ir par vienību, par 1000 vienībām vai par m³ javas. Skaitlis, kas precīzi sakrīt ar veselu skaitli, TakeoffCraft var būt par vienu vienību lielāks, jo nodošana noapaļo pozīcijas uz lapas.
- **Jumti**: katrs jumta slīpums kā laukums ar savu slīpumu (TakeoffCraft dod slīpo laukumu), kores, stūra kores un ieloki (stūra kores un ieloki pa to slīpumu), dzegas un frontoņu malas.
- **Pamati**: pamatnes un pamatu sienas kā posmi ap to viduspunktiem, pārsegumi kā laukumi ar savu biezumu, tātad betons iznāk pēc tilpuma.
- **Durvis un logi** skaitīti pēc tipa, ar loga apdari.
- **Apakšējie skapji** pēc to priekšpuses garuma.
- **Elektriskās ierīces** skaitītas pēc veida.
- **Katra līmeņa grīdas laukums** no tā telpām.
- **Kokmateriālu griezumu saraksts** no karkasa, skaitīts uz atsevišķas lapas (viens punkts par gabalu).

Kur amatu pakai ir atbilstošs mezgls — ārējās un iekšējās sienas, pārsegumi, pamatnes, pamatu sienas, šindeļi, kore un stūra kore, ieloki, dzegas, iekšdurvis, logu apdare, apakšējie skapji, kontaktligzdas, slēdži, gaismekļi, savienojumu kārbas un sadalne —, vienums nāk ar saviem materiāliem un formulām. Pakas nāk bez cenām un vēl nav pārskatītas tāmētāja.

:::tip
Plāni tiek veidoti no modeļa katru reizi, kad noklikšķiniet, tātad pēc izmaiņas vienkārši noklikšķiniet uz {{ui:Apjomu aprēķins}} vēlreiz.
:::
