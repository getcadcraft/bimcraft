---
title: Ulat ng folder: mga role, status at link
summary: Bawat label sa ulat ng folder, ang ibig sabihin nito, at kung paano pinipili ang mungkahing Magsimula dito.
keywords: ulat ng folder, folder report, roles, status, complete, incomplete, unreadable, linked, background, starter, central, family, backups only, magsimula dito, start here, link status
from: b35bdd10
---

## Status ng kopya

Bawat kopya ng model, ang pangunahing file at ang mga numerong backup, ay nakakakuha ng header check.

| Label | Ibig sabihin |
|---|---|
| **Complete** (Kumpleto) | Kasya sa loob ng file ang header at index ng file |
| **Incomplete** (Hindi kumpleto) | Mas maikli ang file kaysa sa sinasabi ng sarili nitong index: pinutol ito habang kinokopya, ina-upload o sini-sync, o ito ay cloud file na nasa "online only" pa rin |
| **Unreadable** (Hindi mabasa) | Hindi ito valid compound file, o hindi ito nabasa |

Sa column na **Status**, ipinapakita ng model ang **Kumpleto**, isang amber na "*n* hindi kumpleto" kapag may hindi maayos na kopya pero may isa pang maayos, o pulang **Hindi kumpleto** kapag walang maayos na kopya.

## Mga backup

Ang mga file na pinangalanang `Name.0001.rvt`, `Name.0002.rvt` at iba pa ay mga numerong backup ng `Name.rvt`. Pinagpapangkat sila sa ilalim ng kanilang model, pinakabago muna, sa **All … copies**. Ang card ay binabasa mula sa pangunahing file kapag kumpleto ito; kung hindi, mula sa pinakabagong kumpletong backup ("newest complete").

## Mga role

Ipinapakita sa italics sa ilalim ng pangalan ng model.

| Role | Ibig sabihin |
|---|---|
| Linked by *other model*: background | Nili-link ng ibang model sa folder ang modelong ito, kaya malamang ito ay background lang ng iba, gaya ng model ng consultant |
| Starter or untitled file | Pangalang gaya ng Blank, Template, Default, Untitled o Project1: panimulang punto, o file na hindi kailanman maayos na napangalanan |
| Central model | Isang workshared central model. Sa lokal na kopya nangyayari ang trabaho, hindi dito |
| Family (a part) | Isang `.rfa` o `.rft` file: isang component, hindi ang proyekto |
| Backups only | Wala na ang pangunahing file; mga numerong backup na lang ang natitira |

## Paano pinipili ang Magsimula dito

Ginagamit ng BimCraft ang pangangatwiran na gagamitin ng isang bihasang user:

1. Ang mga kandidato ay mga nababasang project file (`.rvt`, `.rte`) na hindi nili-link ng ibang model at hindi starter.
2. Ang mga central at backup-only na model ay binibilang lang kapag walang mas mabuti.
3. Sa mga kandidato, nananalo ang pinakahuling na-save.

Ipinapakita ng kahon ang mga dahilan nito, at nagbababala kapag ang file na mukhang halatang pipiliin ay sira, kapag may ibang model na background, at kapag central model ang napili. Hula lang ito; magtanong sa huling nagtrabaho sa proyekto.

## Status ng link

| Label | Ibig sabihin |
|---|---|
| **In this folder** (Nasa folder na ito) | Natagpuan sa naka-save na relative path, o sa dulo ng naka-save na full path sa loob ng folder |
| **Same name found** (May nakitang parehong pangalan) | Wala sa path nito, pero may file na may parehong pangalan sa folder. Tiyakin na ito ang tama |
| **Library file** | Talahanayan ng keynote o assembly code. Kasama ito ng programa sa bawat computer |
| **Not in this folder** (Wala sa folder na ito) | Hindi natagpuan kahit saan sa folder |

Ipinapakita ng column na **Links found** sa **Models** kung ilan sa mga link ng model ang natagpuan, mula sa mga inaasahan sa folder (hindi binibilang ang library file).

## Itinabi

| Linya | Ibig sabihin |
|---|---|
| Revit housekeeping folders (not read) | Mga folder na `*_backup`, `*_log` at `Revit_temp`, kasama ang mga nakatagong folder at `__MACOSX` |
| Lock, log and backup leftovers | Mga file na `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` at `.slog` |
| Other files | Lahat ng iba (ang unang 40 ay pinangalanan) |
