window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Bingo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57beeXoIUxGOZgHIroY5xdZ", "Bingo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var sound_1 = require("./sound");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bingo = function(_super) {
      __extends(Bingo, _super);
      function Bingo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.box_B1 = null;
        _this.b1_Prefab = null;
        _this.box_B2 = null;
        _this.b2_Prefab = null;
        _this.box_B3 = null;
        _this.b3_Prefab = null;
        _this.box_B4 = null;
        _this.b4_Prefab = null;
        _this.box_B5 = null;
        _this.b5_Prefab = null;
        _this.box_I1 = null;
        _this.i1_Prefab = null;
        _this.box_I2 = null;
        _this.i2_Prefab = null;
        _this.box_I3 = null;
        _this.i3_Prefab = null;
        _this.box_I4 = null;
        _this.i4_Prefab = null;
        _this.box_I5 = null;
        _this.i5_Prefab = null;
        _this.box_N1 = null;
        _this.n1_Prefab = null;
        _this.box_N2 = null;
        _this.n2_Prefab = null;
        _this.box_N3 = null;
        _this.n3_Prefab = null;
        _this.box_N4 = null;
        _this.n4_Prefab = null;
        _this.box_N5 = null;
        _this.n5_Prefab = null;
        _this.box_G1 = null;
        _this.g1_Prefab = null;
        _this.box_G2 = null;
        _this.g2_Prefab = null;
        _this.box_G3 = null;
        _this.g3_Prefab = null;
        _this.box_G4 = null;
        _this.g4_Prefab = null;
        _this.box_G5 = null;
        _this.g5_Prefab = null;
        _this.box_O1 = null;
        _this.o1_Prefab = null;
        _this.box_O2 = null;
        _this.o2_Prefab = null;
        _this.box_O3 = null;
        _this.o3_Prefab = null;
        _this.box_O4 = null;
        _this.o4_Prefab = null;
        _this.box_O5 = null;
        _this.o5_Prefab = null;
        _this.box_TimePlayGame = null;
        _this.box_Result = null;
        _this.box_ResultLetter = null;
        _this.box_ShowResult = null;
        _this.musicSlider = null;
        _this.soundSlider = null;
        _this.winAnimation = null;
        _this.coin_Pre = null;
        _this.background_music = null;
        _this.setting = null;
        _this.timeStart = 5;
        _this.listResult = [];
        _this.num1 = [];
        _this.listWin = [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ];
        _this.musicSound = [];
        _this.sfxSound = [];
        return _this;
      }
      Bingo.prototype.onLoad = function() {
        this.PlaySFX("startsound");
        this.PlayMusic("musicsound");
      };
      Bingo.prototype.start = function() {
        var that = this;
        this.timeToPlayGame();
        this.randomNumberBingoBoard();
        this.box_B1.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[0])) return;
          that.b1_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(631, 786);
          that.b1_Prefab = coin;
          that.listWin[0][0] = 1;
          that.gameWin();
        });
        this.box_B2.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[1])) return;
          that.b2_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(631, 621);
          that.b2_Prefab = coin;
          that.listWin[1][0] = 1;
          that.gameWin();
        });
        this.box_B3.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[2])) return;
          that.b3_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(631, 458);
          that.b3_Prefab = coin;
          that.listWin[2][0] = 1;
          that.gameWin();
        });
        this.box_B4.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[3])) return;
          that.b4_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(631, 294);
          that.b4_Prefab = coin;
          that.listWin[3][0] = 1;
          that.gameWin();
        });
        this.box_B5.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[4])) return;
          that.b5_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(631, 130);
          that.b5_Prefab = coin;
          that.listWin[4][0] = 1;
          that.gameWin();
        });
        this.box_I1.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[5])) return;
          that.i1_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(795, 786);
          that.i1_Prefab = coin;
          that.listWin[0][1] = 1;
          that.gameWin();
        });
        this.box_I2.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[6])) return;
          that.i2_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(795, 621);
          that.i2_Prefab = coin;
          that.listWin[1][1] = 1;
          that.gameWin();
        });
        this.box_I3.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[7])) return;
          that.i3_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(795, 458);
          that.i3_Prefab = coin;
          that.listWin[2][1] = 1;
          that.gameWin();
        });
        this.box_I4.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[8])) return;
          that.i4_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(795, 294);
          that.i4_Prefab = coin;
          that.listWin[3][1] = 1;
          that.gameWin();
        });
        this.box_I5.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[9])) return;
          that.i5_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(795, 130);
          that.i5_Prefab = coin;
          that.listWin[4][1] = 1;
          that.gameWin();
        });
        this.box_N1.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[10])) return;
          that.n1_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(961, 786);
          that.n1_Prefab = coin;
          that.listWin[0][2] = 1;
          that.gameWin();
        });
        this.box_N2.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[11])) return;
          that.n2_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(961, 621);
          that.n2_Prefab = coin;
          that.listWin[1][2] = 1;
          that.gameWin();
        });
        this.box_N3.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[12])) return;
          that.n3_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(961, 458);
          that.n3_Prefab = coin;
          that.listWin[2][2] = 1;
          that.gameWin();
        });
        this.box_N4.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[13])) return;
          that.n4_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(961, 294);
          that.n4_Prefab = coin;
          that.listWin[3][2] = 1;
          that.gameWin();
        });
        this.box_N5.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[14])) return;
          that.n5_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(961, 130);
          that.n5_Prefab = coin;
          that.listWin[4][2] = 1;
          that.gameWin();
        });
        this.box_G1.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[15])) return;
          that.g1_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1125.28, 786);
          that.g1_Prefab = coin;
          that.listWin[0][3] = 1;
          that.gameWin();
        });
        this.box_G2.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[16])) return;
          that.g2_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1125.28, 621);
          that.g2_Prefab = coin;
          that.listWin[1][3] = 1;
          that.gameWin();
        });
        this.box_G3.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[17])) return;
          that.g3_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1125.28, 458);
          that.g3_Prefab = coin;
          that.listWin[2][3] = 1;
          that.gameWin();
        });
        this.box_G4.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[18])) return;
          that.g4_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1125.28, 294);
          that.g4_Prefab = coin;
          that.listWin[3][3] = 1;
          that.gameWin();
        });
        this.box_G5.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[19])) return;
          that.g5_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1125.28, 130);
          that.g5_Prefab = coin;
          that.listWin[4][3] = 1;
          that.gameWin();
        });
        this.box_O1.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[20])) return;
          that.o1_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1290, 786);
          that.o1_Prefab = coin;
          that.listWin[0][4] = 1;
          that.gameWin();
        });
        this.box_O2.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[21])) return;
          that.o2_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1290, 621);
          that.o2_Prefab = coin;
          that.listWin[1][4] = 1;
          that.gameWin();
        });
        this.box_O3.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[22])) return;
          that.o3_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1290, 458);
          that.o3_Prefab = coin;
          that.listWin[2][4] = 1;
          that.gameWin();
        });
        this.box_O4.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[23])) return;
          that.o4_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1290, 294);
          that.o4_Prefab = coin;
          that.listWin[3][4] = 1;
          that.gameWin();
        });
        this.box_O5.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          that.PlaySFX("numbersound");
          if (-1 == that.listResult.indexOf(that.num1[24])) return;
          that.o5_Prefab.destroy();
          var coin = cc.instantiate(that.coin_Pre);
          that.node.addChild(coin);
          coin.setPosition(1290, 130);
          that.o5_Prefab = coin;
          that.listWin[4][4] = 1;
          that.gameWin();
        });
      };
      Bingo.prototype.gameWin = function() {
        if (this.gameWinning()) {
          this.box_ResultLetter.string = "You";
          this.box_Result.string = "Win";
          this.unschedule(this.startTimePlay);
          this.PlaySFX("winsound");
          this.winAnimation.play();
        }
      };
      Bingo.prototype.startTimePlay = function() {
        this.timeStart--;
        console.log("Time Start: " + this.timeStart);
        this.box_TimePlayGame.string = this.timeStart.toString();
        if (0 == this.timeStart) {
          this.timeStart = 5;
          this.box_TimePlayGame.string = this.timeStart.toString();
          var result = this.getRandomNumberResult();
          while (true) {
            if (-1 == this.listResult.indexOf(result)) {
              this.listResult.push(result);
              var letter = this.getRandomLetterResult(result);
              console.log("Result: " + letter + " -- " + result);
              this.box_ResultLetter.string = letter;
              this.box_Result.string = result.toString();
              this.box_ShowResult.string = letter + "-" + result + ",  " + this.box_ShowResult.string;
              console.log("List Result: " + this.listResult);
              74 == this.listResult.length && console.log("Game Finish!!!!!!!!!!");
              break;
            }
            result = this.getRandomNumberResult();
          }
        }
      };
      Bingo.prototype.timeToPlayGame = function() {
        this.schedule(this.startTimePlay, 1);
      };
      Bingo.prototype.randomNumberBingoBoard = function() {
        this.num1 = [];
        var min;
        var max;
        for (var i = 0; i < 5; i++) {
          min = 15 * i + 1;
          max = 15 * (i + 1);
          for (var j = 1; j <= 5; j++) {
            var a = this.getRandomNumber(min, max);
            while (true) {
              if (-1 == this.num1.indexOf(a)) {
                this.num1.push(a);
                break;
              }
              a = this.getRandomNumber(min, max);
            }
          }
        }
        console.log("num1: " + this.num1);
        this.box_B1.string = this.num1[0].toString();
        this.box_B2.string = this.num1[1].toString();
        this.box_B3.string = this.num1[2].toString();
        this.box_B4.string = this.num1[3].toString();
        this.box_B5.string = this.num1[4].toString();
        this.box_I1.string = this.num1[5].toString();
        this.box_I2.string = this.num1[6].toString();
        this.box_I3.string = this.num1[7].toString();
        this.box_I4.string = this.num1[8].toString();
        this.box_I5.string = this.num1[9].toString();
        this.box_N1.string = this.num1[10].toString();
        this.box_N2.string = this.num1[11].toString();
        this.box_N3.string = this.num1[12].toString();
        this.box_N4.string = this.num1[13].toString();
        this.box_N5.string = this.num1[14].toString();
        this.box_G1.string = this.num1[15].toString();
        this.box_G2.string = this.num1[16].toString();
        this.box_G3.string = this.num1[17].toString();
        this.box_G4.string = this.num1[18].toString();
        this.box_G5.string = this.num1[19].toString();
        this.box_O1.string = this.num1[20].toString();
        this.box_O2.string = this.num1[21].toString();
        this.box_O3.string = this.num1[22].toString();
        this.box_O4.string = this.num1[23].toString();
        this.box_O5.string = this.num1[24].toString();
      };
      Bingo.prototype.getRandomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      Bingo.prototype.getRandomNumberResult = function() {
        return this.getRandomNumber(1, 75);
      };
      Bingo.prototype.getRandomLetterResult = function(num) {
        var letter = "";
        letter = num <= 15 ? "B" : num <= 30 ? "I" : num <= 45 ? "N" : num <= 60 ? "G" : "O";
        return letter;
      };
      Bingo.prototype.getSortArray = function() {
        var num = [ 18, 80, 13, 70, 980 ];
        console.log(num);
        var val = num.sort();
        console.log(val);
      };
      Bingo.prototype.restartGame = function() {
        cc.director.loadScene("Bingo");
      };
      Bingo.prototype.BackToLoading = function() {
        this.PlaySFX("clicksound");
        cc.director.loadScene("loading");
        cc.audioEngine.stopMusic();
      };
      Bingo.prototype.gameWinning = function() {
        var win = 0;
        for (var i = 0; i < 5; i++) {
          win = 0;
          for (var j = 0; j < 5; j++) win += this.listWin[i][j];
          console.log("Row Win: " + win);
          if (5 == win) {
            console.log("Hello Row win.");
            return true;
          }
        }
        for (var i = 0; i < 5; i++) {
          win = 0;
          for (var j = 0; j < 5; j++) win += this.listWin[j][i];
          console.log("Column win: " + win);
          if (5 == win) {
            console.log("Hello Column win.");
            return true;
          }
        }
        win = this.listWin[0][0] + this.listWin[1][1] + this.listWin[2][2] + this.listWin[3][3] + this.listWin[4][4];
        console.log("Cross Down win: " + win);
        if (5 == win) {
          console.log("Cross Down win.");
          return true;
        }
        win = this.listWin[4][0] + this.listWin[3][1] + this.listWin[2][2] + this.listWin[1][3] + this.listWin[0][4];
        console.log("Cross Up win: " + win);
        if (5 == win) {
          console.log("Cross Up win.");
          return true;
        }
      };
      Bingo.prototype.showSetting = function() {
        this.PlaySFX("clicksound");
        this.setting.setPosition(0, 0);
      };
      Bingo.prototype.hideSetting = function() {
        this.PlaySFX("clicksound");
        this.setting.setPosition(1e4, 0);
      };
      Bingo.prototype.PlayMusic = function(name) {
        var s = this.musicSound.find(function(x) {
          return x.name == name;
        });
        if (null == s) console.log("Music Sound Not Found"); else {
          this.musicSource.clip = s.clip;
          this.musicSource.play();
        }
      };
      Bingo.prototype.StopMusic = function(name) {
        var s = this.musicSound.find(function(x) {
          return x.name == name;
        });
        if (null == s) console.log("Music Sound Not Found"); else {
          this.musicSource.clip = s.clip;
          this.musicSource.stop();
        }
      };
      Bingo.prototype.PlaySFX = function(name) {
        var s = this.sfxSound.find(function(x) {
          return x.name == name;
        });
        if (null == s) console.log("SFX Sound Not Found"); else {
          this.sfxSource.clip = s.clip;
          this.sfxSource.play();
        }
      };
      Bingo.prototype.onMusicSliderChange = function() {
        this.musicSource.volume = this.musicSlider.progress;
      };
      Bingo.prototype.onSoundSliderChange = function() {
        this.sfxSource.volume = this.soundSlider.progress;
      };
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_B1", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "b1_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_B2", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "b2_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_B3", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "b3_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_B4", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "b4_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_B5", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "b5_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_I1", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "i1_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_I2", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "i2_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_I3", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "i3_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_I4", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "i4_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_I5", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "i5_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_N1", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "n1_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_N2", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "n2_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_N3", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "n3_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_N4", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "n4_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_N5", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "n5_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_G1", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "g1_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_G2", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "g2_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_G3", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "g3_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_G4", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "g4_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_G5", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "g5_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_O1", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "o1_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_O2", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "o2_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_O3", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "o3_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_O4", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "o4_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_O5", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "o5_Prefab", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_TimePlayGame", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_Result", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_ResultLetter", void 0);
      __decorate([ property(cc.Label) ], Bingo.prototype, "box_ShowResult", void 0);
      __decorate([ property(cc.Slider) ], Bingo.prototype, "musicSlider", void 0);
      __decorate([ property(cc.Slider) ], Bingo.prototype, "soundSlider", void 0);
      __decorate([ property(cc.Animation) ], Bingo.prototype, "winAnimation", void 0);
      __decorate([ property(cc.Prefab) ], Bingo.prototype, "coin_Pre", void 0);
      __decorate([ property(cc.AudioClip) ], Bingo.prototype, "background_music", void 0);
      __decorate([ property(cc.Node) ], Bingo.prototype, "setting", void 0);
      __decorate([ property(sound_1.default) ], Bingo.prototype, "musicSound", void 0);
      __decorate([ property(cc.AudioSource) ], Bingo.prototype, "musicSource", void 0);
      __decorate([ property(sound_1.default) ], Bingo.prototype, "sfxSound", void 0);
      __decorate([ property(cc.AudioSource) ], Bingo.prototype, "sfxSource", void 0);
      Bingo = __decorate([ ccclass ], Bingo);
      return Bingo;
    }(cc.Component);
    exports.default = Bingo;
    cc._RF.pop();
  }, {
    "./sound": "sound"
  } ],
  click_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f4bduWUVRI6YQDV91wzRU7", "click_sound");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var click_sound = function(_super) {
      __extends(click_sound, _super);
      function click_sound() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.soundClip = null;
        return _this;
      }
      click_sound.prototype.onLoad = function() {
        var button = this.node.getComponent(cc.Button);
        button.node.on("click", this.playSound, this);
      };
      click_sound.prototype.playSound = function() {
        cc.audioEngine.playEffect(this.soundClip, false);
      };
      __decorate([ property(cc.AudioClip) ], click_sound.prototype, "soundClip", void 0);
      click_sound = __decorate([ ccclass ], click_sound);
      return click_sound;
    }(cc.Component);
    exports.default = click_sound;
    cc._RF.pop();
  }, {} ],
  loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aaf22juwChA5b4NufswUhQH", "loading");
    cc.Class({
      extends: cc.Component,
      properties: {
        button: {
          default: null,
          type: cc.Node
        },
        quit: {
          default: null,
          type: cc.Node
        },
        laodingsound: {
          default: null,
          type: cc.AudioClip
        }
      },
      onLoad: function() {
        this.button.on(cc.Node.EventType.TOUCH_START, this.loadingFun, this);
        this.quit.on(cc.Node.EventType.TOUCH_START, this.quitFun, this);
        cc.audioEngine.setLoop(true);
        cc.audioEngine.playMusic(this.laodingsound, true);
      },
      loadingFun: function() {
        cc.director.loadScene("Bingo");
        cc.audioEngine.stopAll();
      },
      quitFun: function() {
        cc.game.end();
      },
      start: function() {}
    });
    cc._RF.pop();
  }, {} ],
  sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59440Iip+VMhYdixeFnPpbV", "sound");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Sounds = function() {
      function Sounds() {
        this.name = "";
      }
      __decorate([ property(cc.String) ], Sounds.prototype, "name", void 0);
      __decorate([ property(cc.AudioClip) ], Sounds.prototype, "clip", void 0);
      Sounds = __decorate([ ccclass ], Sounds);
      return Sounds;
    }();
    exports.default = Sounds;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Bingo", "click_sound", "loading", "sound" ]);