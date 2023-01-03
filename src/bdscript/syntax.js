export default {
  'bds-escape': [
    /\\[\\\];]/,
    /%(?:ESCAPED|{(?:DOL|-SEMICOL-)})%/
  ],
  'bds-punctuation': /[\[\;\]]/,
  'bds-variable': [{
    pattern: /\$(?:s|g|res)etChan{2}elVar/,
    greedy: true
  },
    /\$(?:s|g|res)et(?:Serv|Us)erVar/,
    /\$(?:[sg]etV|v)ar/
  ],
  'bds-callback': [{
    pattern: /\$(?:awaitedCom{2}and(?:Er{2}or)|on(?:Mes{2}ageDelete|BanAd{2}))/,
    greedy: true
  },
    /\$on(?:Joined|(?:Leav|AutoComplet|BanRemov)e|Interaction)/
  ],
  'bds-premium-callback': [{
    pattern: /\$mes{2}ageContains/,
    greedy: true
  },
    /\$(?:alwaysReply|reaction)/
  ],
  'bds-premium-function': /\$(?:awaitReactions|customImage|ignoreTriggerCase|sendNotification|usedEmoji)/,
  'bds-http': {
    'pattern': /\$ht{2}p(?:(?:Get(?:Header)?|(?:Ad{2}|Remove)Header)|P(?:ost|ut|atch)|Delete|Result|Status)/,
    'greedy': true
  },
  'bds-if': /\$(?:(?:end)?if|else(?:if)?)/,
  'bds-async': /\$(?:endasync|a(?:wait|sync))/,
  'bds-try': /\$(?:(?:end)?try|error|catch)/,
  'bds-embed': [{
    'pattern': /\$(?:autho|fo{2}te)r(?:Icon|(?<=or)URL)?/,
    'lookbehind': true,
    'greedy': true
  }, {
    'pattern': /\$ad{2}[FT]i(?:eld|mestamp)/,
    'greedy': true
  }, {
    'pattern': /\$(?:description|image|color|embed{2}edURL|(?:t(?:humbnail|itle)))/,
    'greedy': true
  }],
  'bds-webhook': {
    'pattern': /\$webho{2}k(?:AvatarURL|C(?:reate|o(?:lor|ntent))|De(?:lete|scription)|Fo{2}ter|Send|Title|Username)/,
    'greedy': true
  },
  'bds-deprecated': {
    'pattern': /\$(?:(?:giv|tak)eRole|(?:un)?mute|modifyChan{2}elPerms|userJoinedDiscord|chan{2}elIDFromName)/,
    'greedy': true
  },
  'bds-time': /\$(?:da(?:y|te)|get(?:Timestamp|Cooldown)|(?:upt|executionT|t)ime|minute|second|hour|month|ping|year|(?:hosting|premium)ExpireTime|creationDate|userJoined)/,
  'bds-math': /\$(?:s(?:ort|u[mb])|m(?:ax|in)|enableDecimals|divide|m(?:ulti|odulo)|calculate|round|numberSeparator)/,
  'bds-limiter': [{
    'pattern': /\$only(?:If(?:Mes{2}ageContains)?|(?:Bot(?:Chan{2}el)?)?Perms|Admin|NSFW|For(?:Role(?:ID)?|Categorie|Server|User|ID|Chan{2}el)s)/,
    'greedy': true
  }, {
    'pattern': /\$(?:argsCheck|(?:serverC|globalC|c)o{2}ldown|enabled|ignoreChan{2}els|varExistsError)/,
    'greedy': true
  },
    /\$blackList(?:Role(?:sID)?|ID|(?:Serv|Us)er)s/,
  ],
  'bds-component': [{
    'pattern': /\$(?:(?:ad{2}|edit)But{2}on|removeBut{2}ons)/,
    'greedy': true
  }, {
    'pattern': /\$(?:(?:ad{2}|edit)SelectMenuOption|(?:new|edit)SelectMenu)/,
    'greedy': true
  },
    /\$(?:newModal|(?:ad{2}TextI|i)nput)/,
    /\$(?:removeComponent|defer|customID|ephemeral)/
  ],
  'bds-str-manip': [
    /\$(?:getTextSplit(?:Length|Index)|(?:join|edit)SplitText|removeSplitTextElement|splitText|textSplit)/,
    /\$(?:(?:replace|crop)Text|repeatMessage|trimSpace)/,
    /\$to(?:(?:Upp|Low)ercase|TitleCase)/
  ],
  'bds-boolean': [{
    'pattern': /\$is(?:Admin|Ban{2}ed|Bo(?:t|olean)|Hoisted|Mentionable|NSFW|Number|Slash|TimedOut|UserDMEnabled|ValidHex)/,
    'greedy': true
  }, {
    'pattern': /\$(?:(?:var|user|role|guild|(?:serverC|c)han{2}el)Exists|userReacted|or|and|hasRole|check(?:Contains|Condition|UserPerms))/,
    'greedy': true
  }],
  'bds-id': {
    'pattern': /\$(?:author(?:ID|OfMes{2}age)|(?:botOwner|category|(?:c|dmC)han{2}el|guild|(?:m|repliedM)essage|parent|role|slash|user)ID|find(?:Chan{2}el|User|Role)|(?:high|low)estRole(?:WithPerms)?|mentioned(?:Chan{2}els|Roles)?|serverOwner)/,
    'greedy': true
  },
  'bds-random': {
    'pattern': /\$random(?:Chan{2}elID|Mention|String|Text|User(?:ID)?)?/,
    'greedy': true
  },
  'bds-bdl': /\$botList(?:Description|Hide)/,
  'bds-nomention': /\$nomention/,
  'bds-reaction': {
    'pattern': /\$(?:ad{2}(?:Cmd)?|clear|get)Reactions/,
    'greedy': true
  },
  'bds-count': [{
    pattern: /\$(?:(?:slashC|c)om{2}ands|(?:al{2}M|m)embers|chan{2}el|bo{2}st)Count/,
    greedy: true
  },
    /\$(?:variables|server|role|emote|char|category|arg)Count/
  ],
  'bds-bot': [{
    pattern: /\$botCom{2}ands/,
    greedy: true
  },
    /\$(?:bot(?:ID|Leave|Node)|getBotInvite|shardID)/
  ],
  'bds-leaderboard': /\$(?:(?:globalUser|server|user)Leaderboard|getLeaderboardValue)/,
  'bds-slash': [{
    pattern: /\$(?:ap{2}endOptionSug{2}estion|(?:un)?registerGuildCom{2}ands)/,
    greedy: true
  },
    /\$autoCompleteOption(?:Nam|Valu)e/
  ],
  'bds-ban': /\$(?:(?:un)?ban(?:ID)?|getBanReason)/,
  'bds-kick': /\$kick(?:Mention)?/,
  'bds-timeout': /\$(?:un)?timeout/,
  'bds-server': /\$server(?:Description|Emojis|Icon|Info|Name(?:s)?|Region|VerificationLevel|getServerInvite)/,
  'bds-channel': {
    pattern: /\$(chan{2}el(?:(?:Nam|Typ)e|Position|Topic)|(?:(?:creat|us)e|modify)Chan{2}el|deleteChan{2}els(?:ByName)?|editChan{2}elPerms)/,
    greedy: true
  },
  'bds-role': /\$(?:(?:color|(?:creat|delet)e)Role|getRoleColor|modifyRole(?:Perms)?|role(?:Grant|Info|Name(?:s)?)|Position)/,
  'bds-emoji': [{
    pattern: /\$ad{2}Emoji/,
    greedy: true
  },
    /\$customEmoji/
  ],
  'bds-ticket': /\$(?:new|close)Ticket/,
  'bds-error': {
    pattern: /\$(?:embedS|s)up{2}res{2}Er{2}ors/,
    greedy: true
  },
  'bds-misc': [{
    pattern: /\$(?:optOf{2}|t{2}s|changeCo{2}ldownTime)/,
    greedy: true
  },
    /\$(?:(?:alternativePars|disableSpecialEscap)ing|stop|awaitFunc|scriptLanguage|unescape|ignoreLinks|trimContent)/
  ],
  'bds-thread': [{
    pattern: /\$threadAd{2}Member/,
    greedy: true
  },
    /\$(?:(?:star|edi)tThread|threadRemoveMember)/
  ],
  'bds-eval': /\$eval/,
  'bds-message': [{
    pattern: /\$(?:(?:noMention|edit|get|(?:un)?pin|publish|send(?:Embed)?|delete|chan{2}elSend)M|m)es{2}age/,
    greedy: true
  },
    /\$(edit(?:Embed)?|delete|reply)In/,
    /\$(?:al{2}ow(?:Mention|(?:Role|User)Mentions)|botTyping|reply)/
  ],
  'bds-user': /\$(?:user(?:(?:Server)?Avatar|Info|Perms|Roles)|discriminator|get(?:User|Custom)Status|(?:user|nick)name|hypesquad|changeUsername(?:WithID)?)/,
  'bds-comment': /\$c\[[\s\S]*?\]/,
  'bds-util': /\$(?:clear|deleteCommand|dm|getEmbedData|getInviteInfo|removeContains|removeLinks|slowmode|url)/
}