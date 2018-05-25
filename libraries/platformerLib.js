class Platform {
    constructor(x, y, w, h, col, topCol, dx, dy, xSpeed, ySpeed) {
        this.x = x;
        this.homeX = x;
        this.y = y;
        this.homeY = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.topCol = topCol;
        this.dx = dx;
        this.dy = dy;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.stroke = 0;
    }

    logic() {
        if (this.x > this.homeX + this.dx || this.x < this.homeX) {
            this.xSpeed *= -1;
        }
        if (this.y > this.homeY + this.dy || this.y < this.homeY) {
            this.ySpeed *= -1;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    show() {
        stroke(255);
        strokeWeight(this.stroke);
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
        fill(this.topCol);
        rect(this.x, this.y - 4, this.w, 4);
    }
}

class Spike {
    constructor(x, y, w, r, col, dx, dy, xSpeed, ySpeed) {
        this.x = x;
        this.homeX = x;
        this.y = y;
        this.homeY = y;
        this.w = w;
        this.r = r;
        this.col = col;
        this.dx = dx;
        this.dy = dy;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.stroke = 0;
    }

    logic() {
        if (this.x > this.homeX + this.dx || this.x < this.homeX) {
            this.xSpeed *= -1;
        }
        if (this.y > this.homeY + this.dy || this.y < this.homeY) {
            this.ySpeed *= -1;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    show() {
        stroke(255);
        strokeWeight(this.stroke);
        fill(this.col);
        if (this.r == 1 || this.r == 3) {
            for (var x1 = this.x; x1 < ((this.w * 40) + this.x); x1 += 40) {
                if (this.r == 1) {
                    triangle(x1, this.y, x1 + 40, this.y, x1 + 20, this.y - 40);
                } else if (this.r == 3) {
                    triangle(x1, this.y, x1 + 40, this.y, x1 + 20, this.y + 40);
                }
            }
        } else if (this.r == 2 || this.r == 4) {
            for (var y1 = this.y; y1 < ((this.w * 40) + this.y); y1 += 40) {
                if (this.r == 2) {
                    triangle(this.x, y1, this.x + 40, y1 + 20, this.x, y1 + 40);
                } else if (this.r == 4) {
                    triangle(this.x, y1, this.x - 40, y1 + 20, this.x, y1 + 40);
                }
            }
        }
    }
}

class Trigger {
    constructor(x, y, w, h, func) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.func = func;
        this.stroke = 0;
    }

    logic() {
        if (player.x + player.w > this.x && player.x < this.x + this.w) {
            if (player.y + player.h > this.y && player.y < this.y + this.h) {
                this.func();
            }
        }
    }

    show() {
        stroke(255);
        strokeWeight(this.stroke);
        fill(255, 0, 0, 125);
        rect(this.x, this.y, this.w, this.h);
    }
}

class Key {
    constructor (x, y, doorX, doorY, w, h, index) {
        this.x = x;
        this.y = y;
        this.doorX = doorX;
        this.doorY = doorY;
        this.w = w;
        this.h = h;
        this.index = index;
        this.stroke = 0;
    }

    logic() {
        if (player.x + player.w > this.x && player.x < this.x + 15) {
            if (player.y + player.h > this.y && player.y < this.y + 15) {
                game.keys.splice(this.index, 1);
            }
        }
        if (player.x + player.w > this.doorX && player.x < this.doorX + this.w) {
            if (player.y + player.h >= this.doorY - 1 && player.y <= this.doorY + this.h - 1) {
                player.ySpeed = 0;
                player.y = this.doorY - player.h - 1;
                player.jumped = false;
            }
        }
    }

    show() {
        fill(ORANGE);
        stroke(255);
        strokeWeight(this.stroke);
        rect(this.x, this.y, 15, 15);
        fill(BROWN);
        rect(this.doorX, this.doorY, this.w, this.h);
    }
}

class Arrow {
    constructor(x, y, run, rise) {
        this.x = x;
        this.y = y;
        this.run = run;
        this.rise = rise;
    }
    
    show() {
        stroke(255);
        strokeWeight(3);
        line(this.x, this.y, this.x + this.run, this.y + this.rise);
    }
}