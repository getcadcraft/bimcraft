---
title: Poña unha imaxe debaixo da planta
summary: Coloque un PNG, JPEG ou WebP (un plano escaneado, un esbozo, unha foto do lugar, unha vista aérea) debaixo da planta dun nivel ou nun plano vertical, escálao por dous puntos, mova, xire, esvaeza e bloquee, vexa en 3D e no PDF da planta, e consérvea xunto ao modelo nun paquete.
keywords: imaxe, fondo, PNG, JPEG, WebP, escaneo, esbozo, foto, vista aérea, plano de situación, escala, opacidade, bloquear, subcapa, calcar
from: e3c78d1f
---

## Colocar unha imaxe

Active {{ui:Debuxar}}, vaia ao nivel e escolla {{ui:Imaxe}} no menú {{ui:Compilación}}. Logo {{ui:Inserir imaxe…}} e escolla un ficheiro PNG, JPEG ou WebP. Procésase no seu navegador e nunca se envía. Aparece debaixo da planta, axustada á vista, e a barra de ferramentas di que aínda non está escalada. Todo o que debuxe queda enriba.

## Definir a escala

Escolla {{ui:Escala}}, prema dous puntos da imaxe cuxa distancia real coñece (dous extremos dun muro nun plano escaneado, unha cota impresa nun esbozo), logo escriba a distancia e prema {{key:Enter}}. A imaxe medra ou encóllese arredor do primeiro punto no que premeu. {{key:Esc}} cancela.

## Pegar unha área copiada

En MarkupCraft, {{ui:Copiar área}} copia unha parte dunha folla PDF como imaxe. De volta en BimCraft, con a planta dun nivel visible, prema {{key:Ctrl+V}} (ou {{ui:Pegar}} no menú {{ui:Editar}}): a área cae na planta como unha imaxe, centrada onde está o punteiro (ou no medio da vista). Cando a folla tiña unha escala de debuxo, entra ao seu tamaño verdadeiro, así que un muro nela mide o mesmo que os seus muros. Sen escala, entra ao tamaño do papel e {{ui:Escala}} comeza, así que pode premer dous puntos e escribir a súa distancia. Unha área copiada como superposición comeza coa opacidade coa que foi copiada. É un paso de desfacer e consérvase como calquera outra imaxe.

Pegar toma o que copiou por último: unha área copiada, ou algo que copiou en BimCraft. {{key:Ctrl+V}} tamén pega calquera outra imaxe PNG, JPEG ou WebP que teña no portapapeis, colocada como {{ui:Inserir imaxe…}} e sen escalar aínda. Unha área copiada lémbrase durante seis horas.

## Mover, xirar, esvaecer, bloquear

{{ui:Mover}} toma un punto base sobre a imaxe e logo o lugar onde debe ir. {{ui:Xirar}} toma un ángulo en graos, arredor do centro da imaxe. {{ui:Opacidade}} esvaece a imaxe para que as súas liñas destaquen. {{ui:Bloquear}} impide que se mova mentres debuxa; unha imaxe bloqueada aínda lle permite cambiar a súa opacidade e ocultala. Cada cambio é un paso de desfacer.

## Varias imaxes, varios niveis

Unha imaxe pertence ao nivel no que se colocou e aparece na planta dese nivel e na planta de teito. Prema unha imaxe para traballar nela, ou escóllaa na lista. {{ui:Ocultar}} desactívaa sen eliminala; {{ui:Eliminar}} (ou {{key:Delete}}) sácaa do modelo.

## Imaxes na vista 3D

Cada imaxe tamén aparece na vista 3D como un plano plano: unha imaxe en planta repousa sobre o seu nivel, e unha imaxe en plano vertical érguese sobre a súa liña de corte. Debúxase sobre o modelo sen ocultalo, e o modelo oculta a parte da imaxe que queda detrás del. As imaxes superpostas ordénanse por distancia. Opacidade, Ocultar, Bloquear e Eliminar funcionan igual, e {{ui:Mostrar en 3D}} apaga todos os planos só na vista 3D. Un nivel admite como máximo 8 imaxes, para manter as vistas rápidas.

## Unha imaxe nun plano vertical

Debaixo de {{ui:Colocar sobre}} escolla {{ui:Un plano vertical (liña de corte)}}, logo {{ui:Inserir imaxe…}}. Prema os dous extremos dunha liña na planta (o extremo dunha cara de muro axústase), ou escolla unha liña de corte con nome do nivel en {{ui:Sobre unha liña de corte}} e non fan falta clics. A imaxe érguese no nivel sobre esa liña, tan ancha como a liña. Estableza o seu {{ui:Largura}}, o seu lugar {{ui:Ao longo da liña}} e a súa {{ui:Altura sobre o nivel}} escribindo; {{ui:Xirar}} xíraa no seu propio plano. Unha imaxe vertical non se debuxa debaixo da planta; a planta mostra a súa liña mentres traballa nela. BimCraft non ten unha xanela de sección 2D interactiva: as seccións e os alzados debúxanse nas follas, e as imaxes aínda non se imprimen nesas vistas de folla.

## Impresión

{{ui:Vista de impresión}} nunha planta escribe as imaxes do nivel no PDF debaixo do debuxo, á súa escala, xiro e opacidade, recortadas á folla; unha imaxe oculta queda fóra. Un JPEG entra tal cal; as outras imaxes redúcense primeiro a 200 ppp na folla.

## Gardada xunto ao modelo

Os bytes da imaxe non se escriben no texto IFC. O modelo refírese a cada unha polo nome (un IfcDocumentReference como pictures/<id>.png) e os bytes viaxan nun paquete de proxecto. Use {{ui:Gardar como paquete…}} (ou {{ui:Gardar como IFC}} e escóllao): obtén un ficheiro .ccbundle cun modelo e as súas imaxes; o IFC segue pequeno e as edicións rápidas. Abra o .ccbundle e as imaxes volven.

Un .ifc simple non pode conter unha imaxe sen se facer grande. Cando garda un, BimCraft di cantas imaxes se gardan fóra del e ofrece un paquete, ou un IFC simple que incrusta as imaxes ata 512 KB e deixa as demais fóra. Un .ifc simple aberto sen o seu paquete amosa esas imaxes como ausentes, e Problemas lístaas; abra o .ccbundle no que se gardaron. Os ficheiros gardados pola primeira versión, coa imaxe dentro do IFC, seguen abríndose, e un gardado en paquete move as súas imaxes fóra. Unha imaxe consérvase tal cal ata 6 MB; unha máis grande redúcese primeiro, e avísaselle. Outros programas abren o modelo e ignoran as imaxes. Unha imaxe que aínda non escalou lístase en Problemas como nota.

## Nas follas de sección e alzado

Unha imaxe nun plano vertical (escolla {{ui:Vertical}} no panel de imaxes e prema os dous extremos dunha liña, ou colóquea sobre unha liña de corte con nome) impríndese nas vistas de folla que a miran de fronte. Unha sección amosa unha imaxe que se apoia na súa liña de corte, ou que se colocou sobre esa liña de corte por nome. Un alzado amosa todas as imaxes verticais cuxo plano mira cara a el. A imaxe debúxase debaixo das liñas da vista, á escala da vista, recortada á vista, e conserva a súa opacidade. Abra {{ui:Follas…}} para vela; o PDF da folla leva a imaxe como imaxe. Vista desde atrás, unha imaxe aparece espellada, como en 3D. As imaxes ocultas deixanse fóra.
