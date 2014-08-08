'use strict';

var Mongo = require('mongodb');

function Transfer(obj){
  this.id = obj.id * 1;
  this.date = new Date();
  this.from = obj.from;
  this.fromId = (typeof obj.fromId === 'string') ? Mongo.ObjectID(obj.fromId) : obj.fromId;
  this.to = obj.to;
  this.toId = (typeof obj.toId === 'string') ? Mongo.ObjectID(obj.toId) : obj.toId;
  this.amount = obj.amount * 1;
  this.fee = 25;
}

module.exports = Transfer;
