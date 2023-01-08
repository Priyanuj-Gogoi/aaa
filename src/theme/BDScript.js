const regex = require('regexgen');

const syntax = {
  // This regex is not bad...ik
  'comment': /\$c\[[\s\S]*?\] /,

  'bds-escape': regex([
    '\\\\',
    '\\;',
    '\\]',
    '%{-SEMICOL-}%',
    '%{DOL}%',
    '%ESCAPED%'
  ]),

  'bds-punctuation': /[;\[\]]/,

  'bds-callback': regex([
    '$awaitedCommand',
    '$awaitedCommandError',
    '$onJoined',
    '$onLeave',
    '$onAutoComplete',
    '$onBanAdd',
    '$onBanRemove',
    '$onMessageDelete',
    '$onInteraction'
  ]),

  'bds-premium-callback': regex([
    '$alwaysReply',
    '$messageContains',
    '$reaction'
  ]),

  'bds-premium-function': regex([
    '$awaitReactions',
    '$customImage',
    '$sendNotification',
    '$usedEmoji',
    '$ignoreTriggerCase'
  ]),

  'bds-deprecated': regex([
    '$modifyChannelPerms',
    '$channelIDFromName',
    '$giveRole',
    '$takeRole',
    '$unmute',
    '$mute',
    '$userJoinedDiscord'
  ]),

  'bds-http': regex([
    '$httpAddHeader',
    '$httpGetHeader',
    '$httpRemoveHeader',
    '$httpGet',
    '$httpPost',
    '$httpPut',
    '$httpPatch',
    '$httpDelete',
    '$httpResult',
    '$httpStatus'
  ]),

  'bds-misc': regex([
    '$optOff',
    '$tts',
    '$changeCooldownTime',
    '$alternativeParsing',
    '$disableSpecialEscaping',
    '$stop',
    '$awaitFunc',
    '$scriptLanguage',
    '$unescape',
    '$ignoreLinks',
    '$trimContent',
    '$disableInnerSpaceRemoval'
  ]),

  'bds-user': regex([
    '$userServerAvatar',
    '$userAvatar',
    '$userBanner',
    '$userInfo',
    '$userPerms',
    '$userRoles',
    '$authorAvatar',
    '$discriminator',
    '$getUserStatus',
    '$getCustomStatus',
    '$username',
    '$nickname',
    '$hypesquad',
    '$changeUsernameWithID',
    '$changeUsername'
  ]),

  'bds-id': regex([
    '$authorID',
    '$authorOfMessage',
    '$botOwnerID',
    '$categoryID',
    '$channelID',
    '$dmChannelID',
    '$guildID',
    '$messageID',
    '$repliedMessageID',
    '$parentID',
    '$roleID',
    '$slashID',
    '$userID',
    '$findChannel',
    '$findUser',
    '$findRole',
    '$highestRoleWithPerms',
    '$highestRole',
    '$lowestRoleWithPerms',
    '$lowestRole',
    '$mentionedRoles',
    '$mentionedChannels',
    '$mentioned',
    '$serverOwner'
  ]),

  'bds-if': regex([
    '$if',
    '$elseif',
    '$else',
    '$endif'
  ]),

  'bds-async': regex([
    '$async',
    '$endasync',
    '$await'
  ]),

  'bds-try': regex([
    '$try',
    '$catch',
    '$error',
    '$endtry'
  ]),

  'bds-role': regex([
    '$colorRole',
    '$createRole',
    '$deleteRole',
    '$getRoleColor',
    '$modifyRolePerms',
    '$modifyRole',
    '$roleGrant',
    '$roleInfo',
    '$roleNames',
    '$roleName',
    '$rolePosition'
  ]),

  'bds-embed': regex([
    '$authorIcon',
    '$authorURL',
    '$author',
    '$description',
    '$image',
    '$color',
    '$thumbnail',
    '$title',
    '$addField',
    '$addTimestamp',
    '$embbeddURL',
    '$footerIcon',
    '$footer'
  ]),

  'bds-webhook': regex([
    '$webhookAvatarURL',
    '$webhookCreate',
    '$webhookColor',
    '$webhookContent',
    '$webhookDelete',
    '$webhookDescription',
    '$webhookFooter',
    '$webhookSend',
    '$webhookTitle',
    '$webhookUsername'
  ]),

  'bds-timeout': regex([
    '$timeout',
    '$untimeout'
  ]),

  'bds-time': regex([
    '$date',
    '$day',
    '$getCooldown',
    '$getTimestamp',
    '$uptime',
    '$time',
    '$executionTime',
    '$hostingExpireTime',
    '$premiumExpireTime',
    '$creationDate',
    '$minute',
    '$hour',
    '$second',
    '$month',
    '$ping',
    '$year',
    '$userJoined'
  ]),

  'bds-math': regex([
    '$sort',
    '$sum',
    '$sub',
    '$max',
    '$min',
    '$enableDecimals',
    '$divide',
    '$multi',
    '$modulo',
    '$calculate',
    '$round',
    '$numberSeparator'
  ]),

  'bds-json': regex([
    '$jsonArrayAppend',
    '$jsonArrayCount',
    '$jsonArray',
    '$jsonClear',
    '$jsonExists',
    '$jsonParse',
    '$jsonPretty',
    '$jsonSet',
    '$jsonStringify',
    '$jsonUnset',
    '$json'
  ]),

  'bds-limiter': regex([
    '$onlyIfMessageContains',
    '$onlyIf',
    '$onlyBotChannelPerms',
    '$onlyBotPerms',
    '$onlyPerms',
    '$onlyAdmin',
    '$onlyNSFW',
    '$onlyForRoleIDs',
    '$onlyForRoles',
    '$onlyForIDs',
    '$onlyForCategories',
    '$onlyForServers',
    '$onlyForUsers',
    '$onlyForChannels',
    '$serverCooldown',
    '$globalCooldown',
    '$cooldown',
    '$ignoreChannels',
    '$varExistError',
    '$argsCheck',
    '$blackListRolesIDs',
    '$blackListRoles',
    '$blackListIDs',
    '$blackListServers',
    '$blackListUsers',
    '$enabled'
  ]),

  'bds-component': regex([
    '$addButton',
    '$editButton',
    '$removeButtons',
    '$addSelectMenuOption',
    '$editSelectMenuOption',
    '$newSelectMenu',
    '$editSelectMenu',
    '$newModal',
    '$addTextInput',
    '$input',
    '$removeComponent',
    '$defer',
    '$customID',
    '$ephemeral'
  ]),

  'bds-str-manip': regex([
    '$getTextSplitLength',
    '$getTextSplitIndex',
    '$joinSplitText',
    '$editSplitText',
    '$removeSplitTextElement',
    '$splitText',
    '$textSplit',
    '$replaceText',
    '$cropText',
    '$repeatMessage',
    '$trimSpace',
    '$toUppercase',
    '$toTitleCase',
    '$toLowercase'
  ]),

  'bds-boolean': regex([
    '$isAdmin',
    '$isBanned',
    '$isBot',
    '$isBoolean',
    '$isHoisted',
    '$isMentionable',
    '$isNSFW',
    '$isNumber',
    '$isSlash',
    '$isTicket',
    '$isTimedOut',
    '$isUserDMEnabled',
    '$isValidHex',
    '$channelExists',
    '$serverChannelExists',
    '$guildExists',
    '$roleExists',
    '$userExists',
    '$varExists',
    '$userReacted',
    '$or',
    '$and',
    '$hasRole',
    '$checkContains',
    '$checkCondition',
    '$checkUserPerms'
  ]),

  'bds-random': regex([
    '$randomChannelID',
    '$randomMention',
    '$randomString',
    '$randomText',
    '$randomUserID',
    '$randomUser',
    '$randomGuildID',
    '$randomRoleID',
    '$randomCategoryID',
    '$random',
  ]),

  'bds-bdl': regex([
    '$botListDescription',
    '$botListHide'
  ]),

  'bds-nomention': /\$nomention/,

  'bds-reaction': regex([
    '$addReactions',
    '$addCmdReactions',
    '$clearReactions',
    '$getReactions'
  ]),

  'bds-count': regex([
    '$slashCommandsCount',
    '$commandsCount',
    '$allMembersCount',
    '$membersCount',
    '$channelCount',
    '$boostCount',
    '$variablesCount',
    '$serverCount',
    '$roleCount',
    '$emoteCount',
    '$charCount',
    '$categoryCount',
    '$argCount'
  ]),

  'bds-bot': regex([
    '$botID',
    '$botLeave',
    '$botNode',
    '$botCommands',
    '$getBotInvite',
    '$shardID'
  ]),

  'bds-leaderboard': regex([
    '$globalUserLeaderboard',
    '$serverLeaderboard',
    '$userLeaderboard',
    '$getLeaderboardValue'
  ]),

  'bds-slash': regex([
    '$appendOptionSuggestion',
    '$unregisterGuildCommands',
    '$registerGuildCommands',
    '$autoCompleteOptionName',
    '$autoCompleteOptionValue'
  ]),

  'bds-ban': regex([
    '$unban',
    '$ban',
    '$unbanID',
    '$banID',
    '$getBanReason'
  ]),

  'bds-kick': regex([
    '$kick',
    '$kickMention'
  ]),

  'bds-server': regex([
    '$serverDescription',
    '$serverEmojis',
    '$serverIcon',
    '$serverInfo',
    '$serverNames',
    '$serverName',
    '$serverRegion',
    '$serverVerificationLvl',
    '$getServerInvite'
  ]),

  'bds-channel': regex([
    '$categoryChannels',
    '$channelName',
    '$channelType',
    '$channelPosition',
    '$channelNames',
    '$channelTopic',
    '$createChannel',
    '$useChannel',
    '$modifyChannel',
    '$deleteChannels',
    '$deleteChannelsByName',
    '$editChannelPerms'
  ]),

  'bds-emoji': regex([
    '$customEmoji',
    '$addEmoji'
  ]),

  'bds-ticket': regex([
    '$newTicket',
    '$closeTicket'
  ]),

  'bds-error': regex([
    '$suppressErrors',
    '$embedSuppressErrors'
  ]),

  'bds-thread': regex([
    '$startThread',
    '$editThread',
    '$threadAddMember',
    '$threadRemoveMember'
  ]),

  'bds-eval': /\$eval/,

  'bds-message': regex([
    '$noMentionMessage',
    '$editMessage',
    '$getMessage',
    '$unpinMessage',
    '$pinMessage',
    '$publishMessage',
    '$sendEmbedMessage',
    '$sendMessage',
    '$deleteMessage',
    '$channelSendMessage',
    '$message',
    '$editEmbedIn',
    '$editIn',
    '$deleteIn',
    '$replyIn',
    '$allowMention',
    '$allowUserMentions',
    '$allowRoleMentions',
    '$botTyping',
    '$reply'
  ]),

  'bds-util': regex([
    '$clear',
    '$deletecommand',
    '$dm',
    '$getEmbedData',
    '$getInviteInfo',
    '$removeContains',
    '$removeLinks',
    '$slowmode',
    '$url'
  ]),

  'bds-variable': regex([
    '$var',
    '$setVar',
    '$setChannelVar',
    '$setUserVar',
    '$setServerVar',
    '$getVar',
    '$getChannelVar',
    '$getUserVar',
    '$getServerVar',
    '$resetServerVar',
    '$resetChannelVar',
    '$resetUserVar'
  ]),
};

module.exports = syntax;
