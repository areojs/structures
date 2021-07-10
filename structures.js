const { MessageTypes } = require('@areojs/constants');

module.exports.Message = class Message {
  constructor(data) {
    
    this.type = MessageTypes[data.type];
    this.content = data.content;
    
    this.tts = Boolean(data.tts);
    this.pinned = Boolean(data.pinned);
    this.mentionEveryone = Boolean(data.mention_everyone);
    
    this.createdAt = data.timestamp;
    this.createdTimestamp = Date.parse(data.timestamp);
    
    this.id = data.id;
    this.channel = data.channel_id;
    this.guild = data.guild_id;
    
  }
};