---
title: Hlola ukushisa nokupholisa nge-EnergyPlus
summary: Bhala imodeli njengefayela le-EnergyPlus, noma qhuba i-EnergyPlus inguqulo 26.2.0 kuyo ebhrawuzeni, bese uqhathanisa imithwalo yayo yokuklama nosizo olusheshayo lokushisa nokupholisa. Ukubheka kwesibili kokuklama kokuqala, hhayi ukubala ukuthobela.
keywords: energyplus, ukulingisa amandla, usuku lokuklama, umthwalo wokushisa, umthwalo wokupholisa, ifayela lesimo sezulu, epw, idf, ubukhulu bokushisa, amandla onyaka, lingisa
from: b82a5bf2
---

## Okuzokwenza

Ipane ethi **Hlola nge-EnergyPlus** ibhala imodeli evuliwe njengefayela lokufaka le-EnergyPlus (i-IDF): isifunda esisodwa ngasinye segumbi, izindonga, izinsimbi, uphahla namawindi nama-U-value abo, ukushintshwa komoya nokushisa nokupholisa okufanelekile. Ungakwazi njalo **ukulondoloza leyo fayela** uyiqhube ku-EnergyPlus yakho.

Uma nawe usethe injini, ipane ingalingisa lapho, futhi ibale ukushisa nokupholisa okuklanyelwe kwe-EnergyPlus ecaleni kosizo olusheshayo, igumbi ngalinye.

Lokhu kuyisisekelo sokuklama. Izinkambiso zamandla, isitifiketi nezimvume zidinga ithuluzi elamukelekile nedatha yesimo sezulu edingekayo, futhi umphumela udinga ukubhekwa ngumuntu oyiphendulelayo.

## Setha injini

I-BimCraft ayiphathi i-EnergyPlus. Iyisakhiwo esikhulu se-WebAssembly (cishe ama-6 MB ecindeziwe, kanye nefayela ledatha elingu-4.6 MB), ngakho uyiqhubela kwenye indawo bese ufaka ikheli layo kupane. Ikhasi liyilayisha kuphela uma ucindezela inkinobho yokulingisa, hhayi ekuqaleni. Ikheli kufanele libe yi-https, indlela kulesi sayithi, noma i-localhost.

## Izinsuku zokuklama noma unyaka

- **Lingisa izinsuku zokuklama** alidingi ifayela lesimo sezulu. Liqhuba usuku olubandayo lasebusika olungenalanga, nosuku lwasehlobo olushisayo olucacile ngamazinga okushisa asezigabeni zokushisa nokupholisa kuthebhu ye-Daylight, bese libika umthwalo wegumbi ngalinye ngama-watt.
- **Lingisa unyaka** udinga ifayela lesimo sezulu ngefomethi ye-EPW oyikhethayo. Lengeza abantu, izibani nemishini ngokusuka ezigabeni ezifanayo (ivulekile njalo, njengoba isikhathi singazange sisungulwe), bese libika amandla okushisa nokupholisa kwegumbi ngalinye ngama-kWh. Amafayela esimo sezulu anezimvume zawo, ngakho sebenzisa elilungele ukusetshenziswa.

## Ubukhulu bokushisa

Thikha **Nikeza izindonga ezinezendlalelo ezaziwayo ubukhulu bokushisa** bese izindonga, uphahla namafolo ezinezendlalelo zezinto ezaziwayo zibhalwa ngendlalelo ngayinye, nokuminyana nokushisa okuthile kuthathwa kwithebula elifushane lamanani ajwayelekile ngamagama ezinto. Izendlalelo zithathwa ngaphandle kuqala, ngendlela uhlu lwefayela olubhala ngayo. Izinto ezingenazendlalelo zihlala ku-U-value yazo ngaphandle kobukhulu.

## Ukufunda ukuqhathanisa

Izindlela ezimbili ziphendula imibuzo ehluke kancane. Usizo olusheshayo ligcina yonke into; ifayela le-EnergyPlus lilinganisa ama-U-value wegumbi ngalinye ngohlobo lomphezulu. Umehluko oludlula u-15 % ekushiseni kwegumbi lokuklama uhlu ngesaziso ku-ipane ye-⚠, kanye nazo zombili izibalo. Ukupholisa kwehluka kakhulu ngokuklanyelwe: usizo olusheshayo lubala ukuphakama kusuka elangeni ngosuku olulodwa, kanti i-EnergyPlus ilinganisa ngosuku lwayo lokuklama.
