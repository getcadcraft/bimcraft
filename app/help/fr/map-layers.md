---
title: Une carte au sol sous le modèle
summary: Poser un plan de rue ou une image aérienne au sol, sous un modèle IFC géoréférencé, à partir de tuiles de carte, de services cartographiques ou d'une image accompagnée de son fichier de géoréférencement.
keywords: carte, couches cartographiques, fond de plan, aérien, satellite, site, sol, tuiles, xyz, wms, wmts, service de carte, fichier world, géoréférencement, ifcmapconversion, crs projeté, epsg, contexte du site
from: 84e2e9df
---

## Ce que vous allez faire

Voir le modèle à sa place : le plan de rue ou la photo aérienne du site au sol, sous lui.

## Étapes

1. Ouvrez un modèle IFC qui porte sa position sur la carte (une conversion cartographique, IfcMapConversion, avec un système de coordonnées projeté). Les logiciels d'export l'écrivent lorsque les coordonnées du projet (point de levé, coordonnées partagées) sont définies.
2. Choisissez {{ui:Afficher}} › {{ui:Couches cartographiques…}}. La boîte de dialogue indique le système du modèle, par exemple EPSG:28356. Un modèle sans conversion cartographique ne peut pas avoir de couches cartographiques : la boîte de dialogue le signale.
3. Activez {{ui:Couches cartographiques depuis Internet}}. Jusque-là, aucun serveur n'est sollicité ; une fois activé, les serveurs que vous ajoutez voient la zone autour du modèle et votre adresse internet, jamais votre modèle.
4. Dans {{ui:Ajouter une couche}}, choisissez des tuiles (une adresse avec `{z}`, `{x}` et `{y}`), un service WMS, WMTS ou ArcGIS ({{ui:Obtenir les couches}}, puis choisissez-en une), ou une image accompagnée de son fichier world.
5. Fermez la boîte de dialogue. La carte se pose au sol juste sous le point le plus bas du modèle, sur son emprise et sur une même distance tout autour.

:::note
La carte n'est affichée qu'à l'écran ; elle n'est pas enregistrée dans le fichier IFC. La liste des couches est conservée dans ce navigateur. Utilisez uniquement des services cartographiques dont les conditions d'utilisation le permettent.
:::
