export default {
  'bds-escaper': [
    /\\[\\\];]/,
    /%(?:ESCAPED|{(?:DOL|-SEMICOL-)})%/
  ],
  'bds-punctuation': /[\[\;\]]/,
  'bds-variable': [{
    'pattern': /\$(?:v|[gs]et(?:Chan{2}el|(?:Serv|Us)er)?V)ar/,
    'greedy': true
  }, {
    'pattern': /\$reset(?:Chan{2}el|(?:Serv|Us)er)Var/,
    'greedy': true
  }],
  'bds-callback': {
    'pattern': /\$(?:awaitedCom{2}and(?:Er{2}or)?|on(?:AutoComplete|Joined|Leave|Interaction|Mes{2}ageDelete|Ban(?:Ad{2}|Remove)))/,
    'greedy': true
  },
  'bds-premium-callback': /\$(?:alwaysReply|messageContains|reaction)/,
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
    /\$(?:removeComponent|defer|customID)/
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
  }
}