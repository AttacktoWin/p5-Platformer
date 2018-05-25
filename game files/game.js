function init() {
    game = {
        pause: false,
        state: "build",
        level: new Level(),
        timer: 0,
        seconds: 0,
        minutes: 0,
        clearLevel: function () {
            this.level = new Level();
        },
        logic: function () {
            for (var i = 0; i < this.level.platforms.length; i++) {
                this.level.platforms[i].logic();
            }
            for (var i = 0; i < this.level.spikes.length; i++) {
                this.level.spikes[i].logic();
            }
            for (var i = 0; i < this.level.keys.length; i++) {
                this.level.keys[i].logic();
            }
            for (var i = 0; i < this.level.triggers.length; i++) {
                this.level.triggers[i].logic();
            }

            this.timer = parseInt(this.timer);
            this.seconds = parseInt(this.seconds);
            this.minutes = parseInt(this.minutes);
            if (this.timer >= 60) {
                this.seconds++;
                this.timer -= 60;
            }
            if (this.seconds >= 60) {
                this.minutes++;
                this.seconds -= 60;
            }
            if (this.seconds < 10) {
                this.seconds = "0" + this.seconds;
            }
            if (this.minutes < 10) {
                this.minutes = "0" + this.minutes;
            }
            this.timer++;
            if (this.timer < 10) {
                this.timer = "0" + this.timer;
            }
        },
        show: function () {
            for (var i = 0; i < this.level.platforms.length; i++) {
                this.level.platforms[i].show();
            }
            for (var i = 0; i < this.level.spikes.length; i++) {
                this.level.spikes[i].show();
            }
            for (var i = 0; i < this.level.keys.length; i++) {
                this.level.keys[i].show();
            }
            for (var i = 0; i < this.level.triggers.length; i++) {
                this.level.triggers[i].show();
            }
            fill(40, 40, 40, 150);
            rect(width - (30 * 4), 30 * 0.5, 30 * 1.5, 30 * 1.5);
            noFill();
            stroke(255, 255, 255, 150);
            strokeWeight(3);
            triangle(width - (30 * 3.55), 30 * 0.75, width - (30 * 3.55), 30 * 1.75, width - (30 * 2.75), 30 * 1.25);
            noStroke();
            fill(this.level.col);
            rect(this.level.spawnX, this.level.spawnY, 30, 30);
        },
        play: function () {
            player = new Player(this.level.spawnX, this.level.spawnY, this.level.col);
        },
        display: function () {
            for (var i = 0; i < this.level.platforms.length; i++) {
                this.level.platforms[i].show();
            }
            for (var i = 0; i < this.level.spikes.length; i++) {
                this.level.spikes[i].show();
            }
            for (var i = 0; i < this.level.keys.length; i++) {
                this.level.keys[i].show();
            }
            fill(255);
            stroke(255);
            noStroke();
            textAlign(LEFT);
            textSize(30);
            text("Deaths: " + player.deaths, 15, 30);
            textAlign(CENTER);
            textSize(50);
            text(this.minutes + ":" + this.seconds + "." + this.timer, width / 2, 50);

            if (this.pause) {
                fill(20, 20, 20, 150);
                rect(0, 0, width, height);
                textAlign(CENTER);
                textSize(50);
                text("PAUSED", width / 2, height / 2);
            }

            noStroke();
            fill(40, 40, 40, 150);
            rect(width - (player.w * 2), player.w * 0.5, player.w * 1.5, player.w * 1.5);
            rect(width - (player.w * 4), player.w * 0.5, player.w * 1.5, player.w * 1.5);
            stroke(255, 255, 255, 150);
            strokeWeight(5);
            line(width - (player.w * 1.45), player.w * 0.75, width - (player.w * 1.45), player.w * 1.75);
            line(width - (player.w), player.w * 0.75, width - (player.w), player.w * 1.75);
            fill(255, 255, 255, 150);
            triangle(width - (30 * 3.55), 30 * 0.75, width - (30 * 3.55), 30 * 1.75, width - (30 * 2.75), 30 * 1.25);

            player.show();
        },
        changeMode() {
            if (mouseX > width - 120 && mouseX < width - 75) {
                if (mouseY > 15 && mouseY < 60) {
                    if (this.state == "build") {
                        this.play();
                        this.state = "playing";
                    } else if (this.state == "playing") {
                        player = undefined;
                        this.state = "build";
                    }
                }
            }
        }
    }
}

class Player {
    constructor(x, y, col) {
        this.x = x;
        this.y = y;
        this.spawnX = x;
        this.spawnY = y;
        this.col = col;
        this.w = 30;
        this.h = 30;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.a = 1;
        this.jumped = false;
        this.deaths = 0;
    }

    jump() {
        if (!this.jumped) {
            this.ySpeed = -25;
            this.jumped = true;
        }
    }

    move() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.xSpeed = -10;
        } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.xSpeed = 10;
        }

        this.x += this.xSpeed;
        this.xSpeed = 0;

        if (keyIsDown(UP_ARROW) || keyIsDown(87) || keyIsDown(32)) {
            this.jump();
        }

        if (this.ySpeed > 40) {
            this.ySpeed = 40;
        }
        this.y += this.ySpeed;
        this.ySpeed += this.a;
        if (this.y + this.h > height) {
            this.y = height - this.h;
            this.ySpeed = 0;
        }

        // Collision Detection
        for (var i = 0; i < game.level.platforms.length; i++) {
            if (this.x + this.w > game.level.platforms[i].x && this.x < game.level.platforms[i].x + game.level.platforms[i].w) {
                if (this.y <= game.level.platforms[i].y - 1 && this.y + this.h >= game.level.platforms[i].y - 1) {
                    this.ySpeed = 0;
                    this.y = game.level.platforms[i].y - this.h - 1;
                    this.jumped = false;
                    this.xSpeed += game.level.platforms[i].xSpeed;
                    this.ySpeed += game.level.platforms[i].ySpeed;
                }
                if (this.y <= game.level.platforms[i].y + game.level.platforms[i].h && this.y + this.h >= game.level.platforms[i].y + game.level.platforms[i].h) {
                    this.y = game.level.platforms[i].y + game.level.platforms[i].h + 1
                    this.ySpeed = this.a;
                }
            }

            if (this.x + this.w > game.level.platforms[i].x && this.x <= game.level.platforms[i].x) {
                if (this.y >= game.level.platforms[i].y && this.y + this.h < game.level.platforms[i].y + game.level.platforms[i].h) {
                    this.x = game.level.platforms[i].x - this.w;
                }
            }
            if (this.x < game.level.platforms[i].x + game.level.platforms[i].w + 1 && this.x + this.w >= game.level.platforms[i].x + game.level.platforms[i].w) {
                if (this.y >= game.level.platforms[i].y && this.y + this.h < game.level.platforms[i].y + game.level.platforms[i].h) {
                    this.x = game.level.platforms[i].x + game.level.platforms[i].w;
                }
            }
        }

        for (var i = 0; i < game.level.spikes.length; i++) {
            if (game.level.spikes[i].r == 1) {
                if (this.x + this.w > game.level.spikes[i].x && this.x < game.level.spikes[i].x + game.level.spikes[i].w * 40) {
                    if (this.y + this.h > game.level.spikes[i].y - 41 && this.y < game.level.spikes[i].y) {
                        this.deaths++;
                        game.seconds = parseInt(game.seconds);
                        game.seconds += 10;
                        this.respawn();
                    }
                }
            } else if (game.level.spikes[i].r == 2) {
                if (this.x + this.w > game.level.spikes[i].x && this.x < game.level.spikes[i].x + 41) {
                    if (this.y + this.h > game.level.spikes[i].y && this.y < game.level.spikes[i].y + game.level.spikes[i].w * 40) {
                        this.deaths++;
                        game.seconds = parseInt(game.seconds);
                        game.seconds += 10;
                        this.respawn();
                    }
                }
            } else if (game.level.spikes[i].r == 3) {
                if (this.x + this.w > game.level.spikes[i].x && this.x < game.level.spikes[i].x + game.level.spikes[i].w * 40) {
                    if (this.y + this.h > game.level.spikes[i].y && this.y < game.level.spikes[i].y + 41) {
                        this.deaths++;
                        game.seconds = parseInt(game.seconds);
                        game.seconds += 10;
                        this.respawn();
                    }
                }
            } else if (game.level.spikes[i].r == 4) {
                if (this.x + this.w > game.level.spikes[i].x - 41 && this.x < game.level.spikes[i].x) {
                    if (this.y + this.h > game.level.spikes[i].y && this.y < game.level.spikes[i].y + game.level.spikes[i].w * 40) {
                        this.deaths++;
                        game.seconds = parseInt(game.seconds);
                        game.seconds += 10;
                        this.respawn();
                    }
                }
            }
        }

        if (this.x > width) {
            game.levelComplete();
        }
    }

    show() {
        noStroke();
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
    }

    respawn() {
        this.x = this.spawnX;
        this.y = this.spawnY;
        this.ySpeed = 0;
        this.xSpeed = 0;
    }
}

class Level {
    constructor() {
        this.platforms = [new Platform(0, height - 50, width, height, GREY, ORANGE, 0, 0, 0, 0)];
        this.spikes = [];
        this.keys = [];
        this.triggers = [];
        this.spawnX = 0;
        this.spawnY = height - 80;
        this.col = BLUE;
        this.selected = {};
        this.prevSelected = {};
        this.initX = 0;
        this.initY = 0;
    }

    select() {
        this.prevSelected = this.selected;
        for (var i = 0; i < this.platforms.length; i++) {
            if (mouseX > this.platforms[i].x && mouseX < this.platforms[i].x + this.platforms[i].w) {
                if (mouseY > this.platforms[i].y && mouseY < this.platforms[i].y + this.platforms[i].h) {
                    this.selected = {
                        type: "platform",
                        index: i
                    }
                    this.platforms[i].stroke = 2;
                } else {
                    this.platforms[i].stroke = 0;
                }
            } else {
                this.platforms[i].stroke = 0;
            }
        }
        for (var i = 0; i < this.spikes.length; i++) {
            if (mouseX > this.spikes[i].x && mouseX < this.spikes[i].x + (this.spikes[i].w * 40)) {
                if (mouseY > this.spikes[i].y && mouseY < this.spikes[i].y + 40) {
                    this.selected = {
                        type: "spikes",
                        index: i
                    }
                    this.spikes[i].stroke = 2;
                } else {
                    this.spikes[i].stroke = 0;
                }
            } else {
                this.spikes[i].stroke = 0;
            }
        }
        for (var i = 0; i < this.triggers.length; i++) {
            if (mouseX > this.triggers[i].x && mouseX < this.triggers[i].x + this.triggers[i].w) {
                if (mouseY > this.triggers[i].y && mouseY < this.triggers[i].y + this.triggers[i].h) {
                    this.selected = {
                        type: "trigger",
                        index: i
                    }
                    this.triggers[i].stroke = 2;
                } else {
                    this.triggers[i].stroke = 0;
                }
            } else {
                this.triggers[i].stroke = 0;
            }
        }
        for (var i = 0; i < this.keys.length; i++) {
            if (mouseX > this.keys[i].x && mouseX < this.keys[i].x + 15) {
                if (mouseY > this.keys[i].y && mouseY < this.keys[i].y + 15) {
                    this.selected = {
                        type: "key",
                        index: i
                    }
                    this.keys[i].stroke = 2;
                } else {
                    this.keys[i].stroke = 0;
                }
            } else {
                this.keys[i].stroke = 0;
            }
            if (mouseX > this.keys[i].doorX && mouseX < this.keys[i].doorX + this.keys[i].w) {
                if (mouseY > this.keys[i].doorY && mouseY < this.keys[i].doorY + this.keys[i].h) {
                    this.selected = {
                        type: "key",
                        index: i
                    }
                    this.keys[i].stroke = 2;
                } else {
                    this.keys[i].stroke = 0;
                }
            } else {
                this.keys[i].stroke = 0;
            }
        }

        if (mouseX > this.spawnX && mouseX < this.spawnX + 30) {
            if (mouseY > this.spawnY && mouseY < this.spawnY + 30) {
                this.selected = {
                    type: "player"
                }
            }
        }

        if (this.selected == this.prevSelected) {
            this.selected = {};
            this.prevSelected = {};
        }
    }

    move() {
        if (this.selected.type == "platform" && this.selected.index != 0) {
            if (mouseX > this.platforms[this.selected.index].x && mouseX < this.platforms[this.selected.index].x + this.platforms[this.selected.index].w) {
                if (mouseY > this.platforms[this.selected.index].y && mouseY < this.platforms[this.selected.index].y + this.platforms[this.selected.index].h) {
                    if (this.initX == 0) {
                        this.initX = mouseX - this.platforms[this.selected.index].x;
                    }
                    if (this.initY == 0) {
                        this.initY = mouseY - this.platforms[this.selected.index].y;
                    }
                }
            }
            this.platforms[this.selected.index].x = mouseX - this.initX;
            this.platforms[this.selected.index].y = mouseY - this.initY;
        } else if (this.selected.type == "spikes") {
            if (mouseX > this.spikes[this.selected.index].x && mouseX < (this.spikes[this.selected.index].w * 40)) {
                if (mouseY > this.spikes[this.selected.index].y && mouseY < this.spikes[this.selected.index].y + 40) {
                    if (this.initX == 0) {
                        this.initX = mouseX - this.spikes[this.selected.index].x;
                    }
                    if (this.initY == 0) {
                        this.initY = mouseY - this.spikes[this.selected.index].y;
                    }
                }
            }
            this.spikes[this.selected.index].x = mouseX - this.initX;
            this.spikes[this.selected.index].y = mouseY - this.initY;
        } else if (this.selected.type == "trigger") {
            if (mouseX > this.triggers[this.selected.index].x && mouseX < this.triggers[this.selected.index].x + this.triggers[this.selected.index].w) {
                if (mouseY > this.triggers[this.selected.index].y && mouseY < this.triggers[this.selected.index].y + this.triggers[this.selected.index].h) {
                    if (this.initX == 0) {
                        this.initX = mouseX - this.triggers[this.selected.index].x;
                    }
                    if (this.initY == 0) {
                        this.initY = mouseY - this.triggers[this.selected.index].y;
                    }
                }
            }
            this.triggers[this.selected.index].x = mouseX - this.initX;
            this.triggers[this.selected.index].y = mouseY - this.initY;
        } else if (this.selected.type == "key") {
            if (mouseX > this.keys[this.selected.index].x && mouseX < this.keys[this.selected.index].x + 15) {
                if (mouseY > this.keys[this.selected.index].y && mouseY < this.keys[this.selected.index].y + 15) {
                    if (this.initX == 0) {
                        this.initX = mouseX - this.keys[this.selected.index].x;
                    }
                    if (this.initY == 0) {
                        this.initY = mouseY - this.keys[this.selected.index].y;
                    }
                }
                this.keys[this.selected.index].x = mouseX - this.initX;
                this.keys[this.selected.index].y = mouseY - this.initY;
            } else if (mouseX > this.keys[this.selected.index].doorX && mouseX < this.keys[this.selected.index].doorX + this.keys[this.selected.index].w) {
                if (mouseY > this.keys[this.selected.index].doorY && mouseY < this.keys[this.selected.index].doorY + this.keys[this.selected.index].h) {
                    if (this.initX == 0) {
                        this.initX = mouseX - this.keys[this.selected.index].doorX;
                    }
                    if (this.initY == 0) {
                        this.initY = mouseY - this.keys[this.selected.index].doorY;
                    }
                }
                this.keys[this.selected.index].doorX = mouseX - this.initX;
                this.keys[this.selected.index].doorY = mouseY - this.initY;
            }
        } else if (this.selected.type == "player") {
            if (mouseX > this.spawnX && mouseX < this.spawnX + 30) {
                if (mouseY > this.spawnY && mouseY < this.spawnY + 30) {
                    if (this.initX == 0) {
                        this.initX = mouseX - this.spawnX;
                    }
                    if (this.initY == 0) {
                        this.initY = mouseY - this.spawnY;
                    }
                }
            }
            this.spawnX = mouseX - this.initX;
            this.spawnY = mouseY - this.initY;
            if (this.spawnX < 0) {
                this.spawnX = 0
            }
            if (this.spawnX > width - 30) {
                this.spawnX = width - 30;
            }
            if (this.spawnY < 0) {
                this.sapwnY = 0;
            }
            if (this.spawnY > height - 30) {
                this.spawnY = height - 30;
            }
        }
    }
}