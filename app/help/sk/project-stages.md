---
title: Etapy projektu od zadania po pokyny na stavbe
summary: Začnite so zadaním s cieľovými plochami a počas kreslenia sledujte, či sú splnené alebo chýbajú. Porovnajte koncepčné varianty so zadaním, prepojte špecifikácie a detaily s typmi, skontrolujte dielenské výkresy a zaznamenajte pokyny na stavbe k prvkom.
keywords: zadanie, rozpis priestorov, cieľová plocha, splnené, chýba, miestnosti, koncepčné varianty, varianty, hmotový návrh, rozpočet, špecifikácia, špec, detail, konštrukčný detail, typ, dielenský výkres, kontrola, schváliť, znova predložiť, pokyn na stavbe, revízia, príčina, teren, etapa
from: 0a49b852
---

## Čo budete robiť

Prejdite etapami projektu v jednom paneli: napíšte zadanie klienta ako miestnosti s cieľovými plochami, porovnajte koncepčné varianty so zadaním, uchovávajte špecifikácie a konštrukčné detaily pri typoch, ku ktorým patria, kontrolujte dielenské výkresy, keď sa vrátia od jednotlivých profesií, a zaznamenávajte pokyny na stavbe k prvkom, ktoré menia.

## Postup

1. V ľavom paneli otvorte **Etapy projektu** a potom **Zadanie**.
2. Vložte miestnosti, jednu na riadok: `Living; 1; 30` znamená jednu miestnosť s plochou 30 m². Počet možno vynechať. Zvoľte **Pridať miestnosti**. Vyplňte klienta, lokalitu, rozpočet, toleranciu a harmonogram, potom zvoľte **Uložiť zadanie**.
3. Nakreslite steny. Každá miestnosť, ktorú steny vytvoria a ktorá má názov miestnosti zo zadania, sa započíta. Číslo za názvom (napríklad „Spálňa 2“) sa ignoruje. **Rozpis priestorov** ukazuje **Splnené**, **Chýba**, **Presahuje** alebo **Nenakreslené** s rozdielom v m².
4. Ak chcete takto začať nový projekt, zvoľte **Začať nový projekt zo zadania**. Otvorí sa nový model, z jednej z vašich uložených šablón, ak nejakú vyberiete, a zadanie sa vloží ako jeho prvý krok.
5. Otvorte **Varianty oproti zadaniu**. Každý hmotový variant uchovaný v modeli sa zobrazí v jednej mierke s hrubou plochou, s tým, čo zadanie požaduje, a s počtom miestností zo zadania, ktoré sa tam zmestia. **Naskladať zadanie sem** umiestni miestnosti do podlaží variantu, od najnižšieho, a povie, čo sa nezmestí. Náklady pochádzajú len z cenníka projektu; ak nie je zodpovedajúci riadok, zobrazí sa „Bez sadzby“.
6. Otvorte **Typy, špecifikácie a detaily**. Každá stena, dvere, okno a typ podlahy ukazuje, či má text špecifikácie, prepojené detaily a kde sa špecifikácia, rozpisy a výkresy nezhodujú. **Prepojiť detail** pridá súbor DetailCraft alebo CadCraft, webovú adresu alebo list tohto modelu.
7. Otvorte **Dielenské výkresy**. Vyberte v modeli prvky, ktoré dielenský výkres pokrýva, potom zvoľte **Prijať ho**. Použite **Schváliť**, **Podľa poznámky** alebo **Revidovať** s menom a poznámkou kontrolóra. **Znova predložené** vytvorí ďalšiu revíziu toho istého záznamu a zachová históriu kontroly. Stav sa zapíše aj na každý prvok.
8. Otvorte **Pokyny na stavbe**. Vyberte prvky, vlastnými slovami uveďte príčinu a to, ako ovplyvní náklady a čas, a zvoľte **Zaznamenať**. Po zaznamenaní problému použite **Vysvetliť zmeny od tohto problému**, ktoré ukáže, ktoré zmenené prvky pokrýva pokyn a ktoré sa zmenili bez zaznamenania.

## Dobré vedieť

- Každý krok sa dá vrátiť jedným krokom späť. Nič sa neodmieta: zadanie, ktoré nie je splnené, typ, ktorý sa nezhoduje so svojím textom, alebo dielenský výkres po termíne je upozornenie alebo poznámka v paneli Problémy.
- Miestnosti zo zadania sú priestory bez stien. Nesú cieľ, nie nakreslenú plochu, takže rozpisy miestností a COBie ich nikdy nepočítajú ako nakreslené miestnosti.
- Rozloženie len naskladá miestnosti do podlaží podľa plochy. Nekreslí žiadne steny.
- Text špecifikácie sa píše v Dokumentoch z modelu. Tu sa len porovnáva s vlastnými rozmermi modelu: nikdy sa za vás nepíše žiadna klauzula normy.
- Dielenské výkresy a pokyny na stavbe sú záznamy v rovnakej histórii ako panel Problémy a revízie, takže oba panely ich zobrazujú.
- Stav dielenského výkresu je vlastnosťou každého prvku (`CadCraft_ShopDrawing`) a pokyn na stavbe je `CadCraft_SiteInstruction`, takže Nájsť a Farba podľa vlastnosti ich môžu použiť.
- Overené označenia na stavbe (Etapa 7) sú vo Vlastnostiach v časti Overenie.
