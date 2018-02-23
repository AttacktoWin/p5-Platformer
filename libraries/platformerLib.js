class platform {
    constructor(x, y, w, h, col, topCol) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.topCol = topCol;
    }

    show() {
        noStroke();
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
        fill(this.topCol);
        rect(this.x, this.y - 2, this.w, 2);
    }
}

class spike {
    constructor(x, y, w, r, col) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.r = r;
        this.col = col;
    }

    show() {
        noStroke();
        fill(this.col);
        if (this.r == 1 || this.r == 3) {
            for (var x1 = this.x; x1 < ((this.w * 20) + this.x); x1 += 20) {
                if (this.r == 1) {
                    triangle(x1, this.y, x1 + 20, this.y, x1 + 10, this.y - 20);
                } else if (this.r == 3) {
                    triangle(x1, this.y, x1 + 20, this.y, x1 + 10, this.y + 20);
                }
            }
        } else if (this.r == 2 || this.r == 4) {
            for (var y1 = this.y; y1 < ((this.w * 20) + this.y); y1 += 20) {
                if (this.r == 2) {
                    triangle(this.x, y1, this.x + 20, y1 + 10, this.x, y1 + 20);
                } else if (this.r == 4) {
                    triangle(this.x, y1, this.x - 20, y1 + 10, this.x, y1 + 20);
                }
            }
        }
    }
}

class moveable {
    constructor(xSpeed, ySpeed, w, h, type, i, runOnce) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.type = type;
        this.index = i;
        this.runOnce = runOnce;
        if (this.type == "platforms") {
            this.w = platforms[this.index].x + w;
            this.h = platforms[this.index].y + h;
            this.homeX = platforms[this.index].x;
            this.homeY = platforms[this.index].y;
        } else if (this.type == "spikes") {
            this.w = spikes[this.index].x + w;
            this.h = spikes[this.index].y + h;
            this.homeX = spikes[this.index].x;
            this.homeY = spikes[this.index].y;
        }
    }

    logic() {
        if (this.type == "platforms") {
            if (this.w > this.homeX) {
                if (platforms[this.index].x > this.w || platforms[this.index].x < this.homeX) {
                    this.xSpeed *= -1;
                }
            } else if (this.w < this.homeX) {
                if (platforms[this.index].x > this.homeX || platforms[this.index].x < this.w) {
                    this.xSpeed *= -1;
                }
            }

            if (this.h > this.homeY) {
                if (platforms[this.index].y > this.h || platforms[this.index].y < this.homeY) {
                    this.ySpeed *= -1;
                }
            } else if (this.h < this.homeY) {
                if (platforms[this.index].y > this.homeY || platforms[this.index].y < this.h) {
                    this.ySpeed *= -1;
                }
            }
            platforms[this.index].x += this.xSpeed;
            platforms[this.index].y += this.ySpeed;
            if (this.runOnce) {
                if (platforms[this.index].x == this.homeX && platforms[this.index].y == this.homeY) {
                    this.xSpeed = 0;
                    this.ySpeed = 0;
                }
            }
        } else if (this.type == "spikes") {
            if (this.w > this.homeX) {
                if (spikes[this.index].x > this.w || spikes[this.index].x < this.homeX) {
                    this.xSpeed *= -1;
                }
            } else if (this.w < this.homeX) {
                if (spikes[this.index].x > this.homeX || spikes[this.index].x < this.w) {
                    this.xSpeed *= -1;
                }
            }

            if (this.h > this.homeY) {
                if (spikes[this.index].y > this.h || spikes[this.index].y < this.homeY) {
                    this.ySpeed *= -1;
                }
            } else if (this.h < this.homeY) {
                if (spikes[this.index].y > this.homeY || spikes[this.index].y < this.h) {
                    this.ySpeed *= -1;
                }
            }
            spikes[this.index].x += this.xSpeed;
            spikes[this.index].y += this.ySpeed;
            if (this.runOnce) {
               if(spikes[this.index].x == this.homeX && spikes[this.index].y == this.homeY) {
                   this.xSpeed = 0;
                   this.ySpeed = 0;
               }
            }
        }
    }
}

class arrow {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(255);
        strokeWeight(3);
        line(this.x, this.y, this.x - 10, this.y - 5);
        line(this.x, this.y, this.x - 10, this.y + 5);
        line(this.x, this.y, this.x - 20, this.y);
    }
}

class trigger {
    constructor(x, y, w, h, func) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
    }

    logic() {
        if (player1.x + player1.w > this.x && player1.x < this.x + this.w) {
            if (player1.y + player1.h > this.y && player1.y < this.y + this.h) {
                this.func();
            }
        }
    }
}

function powerUp(x, y, col, char) {
    fill(col);
    rect(x, y, 20, 20);
    fill(0);
    textAlign(CENTER);
    text(char, x + 10, y + 15);
}

function item(x, y, outerCol, innerCol) {
    noStroke();
    fill(outerCol);
    rect(x, y, 20, 20);
    fill(innerCol);
    ellipse(x + 10, y + 10, 10);
}

function door(x, y, frameCol) {
    noStroke();
    fill(frameCol);
    rect(x, y, 40, 40);
    fill(0);
    rect(x + 5, y + 5, 30, 35);
}

function bridge(x, y, w, col) {
    noStroke();
    fill(col);
    for (i = x; i < ((w * 20) + x); i += 20) {
        ellipse(i, y, 20);
    }
}

function spikeStrip(x, y, w, col) {
    for (i = x; i < ((w * 20) + x); i += 20) {
        spike(i, y, col);
    }
}

function clearLevel() {
    platforms = [];
    spikes = [];
    moveables = [];
    specials = [];
    triggers = [];
}
