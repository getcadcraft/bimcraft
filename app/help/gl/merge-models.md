---
title: Combinar as edicións de dúas persoas nun mesmo modelo
summary: Deixe que git, Fossil ou Mercurial combinen dúas copias editadas do mesmo modelo IFC obxecto por obxecto, para que dúas persoas poidan debuxar no mesmo edificio e unir o traballo.
keywords: combinar, git, fossil, mercurial, control de versións, conflito, tres vías, cadcraft merge, gitattributes, ifc, globalid, equipo, dúas copias, ramas
from: 50733df8
---

Dúas persoas collen unha copia do mesmo edificio: unha debuxa a ala leste e outra a oeste, e máis tarde as copias teñen que converterse nunha soa. Se tocaron obxectos diferentes, un programa pode facelo en lugar dunha persoa.

## Como funciona

Cada muro, porta, nivel, cuarto e conxunto de propiedades dun ficheiro IFC ten un GlobalId que nunca cambia. A combinación busca os obxectos por ese identificador, non polo número que lle dá o ficheiro (`#123`), porque os números cambian cando un programa garda. As partes que penden dun obxecto e que non teñen identificador propio (colocacións, formas, unidades) compáranse polo que conteñen.

Ambas copias deben ser da mesma versión de IFC (2x3, 4 ou 4.3). A combinación mantén o seu ficheiro tal como está, a súa orde e os seus números, e engade o que é novo, así que un `git diff` da combinación mostra só o que cambiou a combinación.

## Configuración

Git necesita dúas liñas unha vez por repositorio:

```
# .gitattributes
*.ifc merge=cadcraft

# unha vez, en cada ordenador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sen git, execute `cadcraft merge <base> <ours> <theirs>`. Fossil e Mercurial reciben os mesmos tres ficheiros na súa propia configuración de ferramenta de combinación. Non se envía nada; todo se executa no seu ordenador.

## As regras

- Un atributo cambiado só nunha parte tómase. O mesmo cambio nas dúas partes tómase unha vez.
- Un mesmo atributo cambiado de dúas formas (o mesmo nivel renomeado de dúas formas) é un **conflito**: a súa parte mantense e o informe lista ambas. Abra o resultado e corrixao a man.
- Unha lista de cousas (os muros dun nivel, as propiedades dun conxunto) combínase como un conxunto: consérvase o que engadiu calquera das partes e elimínase o que eliminou calquera das partes. Dúas persoas que engaden cada unha muros ao mesmo nivel non entran en conflito.
- Un obxecto engadido en calquera das partes consérvase, coa súa forma e propiedades. Eliminado nunha parte e sen tocar na outra: eliminado. Eliminado nunha parte e cambiado na outra: eliminado, e informado.
- A marca de tempo e o autor do ficheiro, e o historial de propietarios de cada obxecto, quedan como os seus.

A xeometría combínase enteira: a forma dun muro procede dunha parte, nunca mesturada punto a punto. Os ficheiros IFC e IFCX comprimidos en ZIP non se combinan. Despois dunha combinación, abra o resultado en BimCraft e revise o panel de Problemas antes de gardar.
