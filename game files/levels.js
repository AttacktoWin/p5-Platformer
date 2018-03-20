function levelUp() {
    if (game.level == "start") {
        level1();
        game.level = 1;
    } else if (game.level == 1) {
        level2();
        game.level = 2;
    } else if (game.level == 2) {
        level3();
        game.level = 3;
    } else if (game.level == 3) {
        level4();
        game.level = 4;
    } else if (game.level == 4) {
        level5();
        game.level = 5;
    } else if (game.level == 5) {
        level6();
        game.level = 6;
    } else if (game.level == 6) {
        level7();
        game.level = 7;
    } else if (game.level == 7) {
        level8();
        game.level = 8;
    } else if (game.level == 8) {
        end();
        game.level = "complete";
    } else if (game.level == "test") {
        levelTest();
        game.level = "test";
    }
}

function levelDown() {
    if (game.level == "start") {
        title();
    }
    if (game.level == 1) {
        level1();
    } else if (game.level == 2) {
        level1();
        game.level = 1;
    } else if (game.level == 3) {
        level2();
        game.level = 2;
    } else if (game.level == 4) {
        level3();
        game.level = 3;
    } else if (game.level == 5) {
        level4();
        game.level = 4;
    } else if (game.level == 6) {
        level5();
        game.level = 5;
    } else if (game.level == 7) {
        level6();
        game.level = 6;
    } else if (game.level == 8) {
        level7();
        game.level = 7;
    } else if (game.level == "test") {
        levelTest()
        game.level = "test";
    }
}

function title() {
    player1.homeX = 1;
    player1.homeY = height - (player1.w*2) - player1.h;
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.specials.push({
        show: function () {
            fill(255);
            noStroke();
            textAlign(CENTER);
            textSize(72);
            text("GOOD LUCK", width / 2, height / 2);
            textSize(30);
            text("You're gonna need it", width / 2, height / 2 + (player1.w*2));
        }
    });
    game.specials.push(new arrow(width - 10, height - 70));
}

function level1() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - (player1.w*2) - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - (player1.w*2) - player1.h;
    } else {
        player1.homeX = 1;
        player1.homeY = height - (player1.w*2) - player1.h
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.specials.push(new arrow(width - 10, height - 70));
}

function level2() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - (player1.w*2) - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = (player1.w*6) - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, (player1.w*2), height - (player1.w*4), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), height - (player1.w*6), width - (player1.w*6), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*2), (player1.w *6), (player1.w*2), height, GREY, ORANGE));
    game.platforms.push(new platform((player1.w * 6), height/2, width - (player1.w*8), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*6), (player1.w*2.5), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform((player1.w* 8), (player1.w*6), width - (player1.w*10), (player1.w*2), GREY, ORANGE));
}

function level3() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = (player1.w*6) - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - (player1.w*2) - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, (player1.w*6), (player1.w*2), height, GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*2), -(player1.w*10), (player1.w*2), (player1.w*10) + height - (player1.w*6), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*6), width / 2 - (player1.w*8), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform(width / 2 + (player1.w*8), (player1.w*6), width - (player1.w*35), (player1.w*2), GREY, ORANGE));
    game.spikes.push(new spike(width / 2 - (player1.w*10), (player1.w*12), 6, 1, RED));
    game.moveables.push(new moveable((player1.w*0.2), 0, (player1.w*20), 0, "spikes", 0))
}

function level4() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - (player1.w*2) - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = (player1.w*6) - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, (player1.w*2), height - (player1.w*4), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), height - (player1.w*6), width - (player1.w*6), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*2), (player1.w *6), (player1.w*2), height, GREY, ORANGE));
    game.platforms.push(new platform((player1.w * 6), height/2, width - (player1.w*8), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*6), (player1.w*2.5), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform((player1.w* 8), (player1.w*6), width - (player1.w*10), (player1.w*2), GREY, ORANGE));
    game.spikes.push(new spike(width - (player1.w*3), height / 2 + (player1.w*2), 1, 3, RED));
    game.spikes.push(new spike((player1.w*6), height / 2, 2, 4, RED));
    game.spikes.push(new spike((player1.w*2), (player1.w*2.75), 3, 2, RED));
    game.moveables.push(new moveable((player1.w*0.1), 0, (player1.w*5), 0, "spikes", 2));
}

function level5() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = (player1.w*6) - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - (player1.w*2) - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, (player1.w*6), (player1.w*2), height, GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*2), -(player1.w*10), (player1.w*2), height + (player1.w*4), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*7), (player1.w*4), (player1.w*0.75), GREY, BLUE));
    game.spikes.push(new spike((player1.w*2), height - (player1.w*2), 36, 1, RED));
    game.moveables.push(new moveable((player1.w*0.15), 0, (player1.w*24), 0, "platforms", 3));
}

function level6() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - (player1.w*2) - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = (player1.w*6) - player1.h;
    }
    respawn();
    game.clearLevel();

    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, (player1.w*2), height - (player1.w*4), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), height - (player1.w*6), width - (player1.w*6), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*2), (player1.w *6), (player1.w*2), height, GREY, ORANGE));
    game.platforms.push(new platform((player1.w * 6), height/2, width - (player1.w*8), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*6), (player1.w*2.5), (player1.w*2), GREY, ORANGE));
    game.platforms.push(new platform((player1.w* 8), (player1.w*6), width - (player1.w*10), (player1.w*2), GREY, ORANGE));
    game.spikes.push(new spike(width - (player1.w*3), height / 2 + (player1.w*2), 1, 3, RED));
    game.spikes.push(new spike((player1.w*6), height / 2, 2, 4, RED));
    game.spikes.push(new spike((player1.w*2), (player1.w*2.75), 3, 2, RED));
    game.spikes.push(new spike(width - (player1.w*2), (player1.w*8.5), (player1.w*25) / (height/2 - (player1.w * 6)), 4, RED));
    game.moveables.push(new moveable((player1.w*0.1), 0, (player1.w*5), 0, "spikes", 2));
    game.triggers.push(new trigger(0, 0, 2, height, function () {
        if (game.moveables.length > 1) {
            game.moveables.splice(1, 1);
        }
            game.spikes[3].x = width - (player1.w*2);
            game.triggers.splice(1, game.triggers.length);
            game.triggers.push(new trigger((player1.w*5), (player1.w*8), width - (player1.w*6), (player1.w*6), function () {
                game.moveables.push(new moveable(-(player1.w), 0, -(player1.w*45), 0, "spikes", 3, true));
                game.triggers.splice(1, 1);
            }));
    }));
}

function level7() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = (player1.w*6) - player1.h - 1;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - (player1.w*2) - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, (player1.w*6), (player1.w*2), height, GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*2), -(player1.w*10), (player1.w*2), (player1.w*29), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*6), width - (player1.w*9), (player1.w*1.5), GREY, ORANGE));
    game.platforms.push(new platform(0, 0, width, (player1.w), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*6), (player1.w*11), width - (player1.w*8), (player1.w*1.5), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*15), (player1.w*3), (player1.w*0.75), GREY, BLUE));
    game.platforms.push(new platform((player1.w*6), (player1.w*18), (player1.w*3), (player1.w*0.75), GREY, BLUE));
    game.spikes.push(new spike((player1.w*4), (player1.w), 3, 3, RED));
    game.spikes.push(new spike((player1.w*9), (player1.w), 3, 3, RED));
    game.spikes.push(new spike(width - (player1.w*2), (player1.w*8), 3, 4, RED));
    game.spikes.push(new spike((player1.w*2), height - (player1.w*2), 25, 1, RED));
    game.moveables.push(new moveable((player1.w*0.1), 0, (player1.w*6), 0, "platforms", 6));
    game.moveables.push(new moveable((player1.w*0.25), 0, (player1.w*12), 0, "platforms", 7));
    game.triggers.push(new trigger(0, 0, 2, height, function () {
        game.triggers.splice(1, game.triggers.length - 1);
        game.moveables.splice(2, game.moveables.length-2);
        game.spikes[0].y = (player1.w);
        game.spikes[1].y = (player1.w);
        game.spikes[2].x = width - (player1.w*2);
        game.spikes[2].y = (player1.w*8);
        game.triggers.push(new trigger((player1.w*4) - 5, (player1.w*2), (player1.w*3), (player1.w*6), function () {
            game.moveables.push(new moveable(0, (player1.w*0.3), 0, (player1.w*4), "spikes", 0, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger((player1.w*9) - 5, (player1.w*2), (player1.w*3), (player1.w*6), function () {
            game.moveables.push(new moveable(0, (player1.w*0.3), 0, (player1.w*4), "spikes", 1, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger(0, (player1.w*7.5), width, (player1.w*6), function () {
            game.moveables.push(new moveable(-(player1.w*0.4), 0, (-width) + (player1.w*2), 0, "spikes", 2, true));
            game.triggers.splice(1, 1);
        }))
    }));
}

function level8() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - (player1.w*2) - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - (player1.w*2) - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - (player1.w*2), width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, (player1.w*2), height - (player1.w*6), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), height - (player1.w*7.5), width - (player1.w*11), (player1.w*1.5), GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*6), (player1.w*6), (player1.w*1.5), height, GREY, ORANGE));
    game.platforms.push(new platform((player1.w*6), (player1.w*14), width - (player1.w*12), (player1.w*1.5), GREY, ORANGE));
    game.platforms.push(new platform(width - (player1.w*2), 0, (player1.w*2), height - (player1.w*6), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*7), (player1.w*8), width - (player1.w*13), (player1.w*1.5), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*2), (player1.w*4.5), (player1.w*3), (player1.w * 0.75), GREY, BLUE));
    game.platforms.push(new platform((player1.w*9), (player1.w*4.5), (player1.w*3.5), (player1.w*0.75), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*21), (player1.w*4.5), (player1.w*3.5), (player1.w*0.75), GREY, ORANGE));
    game.platforms.push(new platform((player1.w*33), (player1.w*4.5), (player1.w*3.5), (player1.w*0.75), GREY, ORANGE));
    game.platforms.push(new platform(25, 0, width - 25, 25, GREY, ORANGE));
    game.moveables.push(new moveable(0, (player1.w*0.075), 0, (player1.w*8.5), "platforms", 7));
    game.spikes.push(new spike((player1.w*4), height - (player1.w*6), 3, 3, RED));
    game.spikes.push(new spike((player1.w*9), height - (player1.w*6), 3, 3, RED));
    game.spikes.push(new spike((player1.w*14), height - (player1.w*6), 3, 3, RED));
    game.spikes.push(new spike(width - (player1.w*6), height - (player1.w*5.5), 3, 4, RED));
    game.spikes.push(new spike((player1.w*8), (player1.w*9.5), 2, 3, RED));
    game.spikes.push(new spike((player1.w*12), (player1.w*9.5), 2, 3, RED));
    game.spikes.push(new spike((player1.w*16), (player1.w*9.5), 2, 3, RED));
    game.spikes.push(new spike((player1.w*20), (player1.w*9.5), 2, 3, RED));
    game.spikes.push(new spike((player1.w*24), (player1.w*9.5), 2, 3, RED));
    game.spikes.push(new spike((player1.w*7), (player1.w*7.95), 36, 1, RED));
    game.spikes.push(new spike((player1.w*16), (player1.w*2), 2, 1, RED));
    game.spikes.push(new spike((player1.w*16), (player1.w*2), 2, 3, RED));
    game.spikes.push(new spike((player1.w*28), (player1.w*2), 2, 1, RED));
    game.spikes.push(new spike((player1.w*28), (player1.w*2), 2, 3, RED));
    game.moveables.push(new moveable(0, (player1.w*0.05), 0, (player1.w*5), "spikes", 10));
    game.moveables.push(new moveable(0, (player1.w*0.05), 0, (player1.w*5), "spikes", 11));
    game.moveables.push(new moveable(0, (player1.w*0.05), 0, (player1.w*5), "spikes", 12));
    game.moveables.push(new moveable(0, (player1.w*0.05), 0, (player1.w*5), "spikes", 13));
    game.keys.push(new key(width - (player1.w*10), (player1.w*12), width - (player1.w*4.5), (player1.w*6), (player1.w*2.5), 15, 0, ORANGE, BROWN));
    game.triggers.push(new trigger(0, 0, 2, height, function () {
        game.triggers.splice(1, game.triggers.length - 1);
        game.triggers.push(new trigger((player1.w*4) - 5, height - (player1.w*6), (player1.w*3), (player1.w*6), function () {
            game.moveables.push(new moveable(0, (player1.w*0.2), 0, (player1.w*3), "spikes", 0, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger((player1.w*9) - 5, height - (player1.w*6), (player1.w*3), (player1.w*6), function () {
            game.moveables.push(new moveable(0, (player1.w*0.2), 0, (player1.w*3), "spikes", 1, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger((player1.w*14) - 5, height - (player1.w*6), (player1.w*3), (player1.w*6), function () {
            game.moveables.push(new moveable(0, (player1.w*0.2), 0, (player1.w*3), "spikes", 2, true));
            game.triggers.splice(1, 1);
        }));

        game.triggers.push(new trigger(width - (player1.w*11), height - (player1.w*6), (player1.w*6), (player1.w*8), function () {
            game.moveables.push(new moveable(-(player1.w*0.25), 0, -(player1.w*1.5), 0, "spikes", 3, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger((player1.w*35), (player1.w*8), (player1.w*9), (player1.w*6), function () {
            game.spikes[5].r = 1;
            game.spikes[5].y += (player1.w*4.5);
            game.spikes[7].r = 1;
            game.spikes[7].y += (player1.w*4.5);
            game.triggers.splice(1, 1);
        }));
    }));
}

function end() {
    game.clearLevel();
    textAlign(CENTER);
    textSize((player1.w*4));
    game.specials.push({show: function() {
        text("CONGRATULATIONS!", width/2, height/2);
        text("Save score?", width/2, height/2 + 100);
        fill(BLUE);
        noStroke();
        rect(width/3, (height/3)*2, (player1.w*5), (player1.w*3));
        textSize((player1.w*2));
        fill(255);
        text("YES", width/3 + 100, (height/3)*2 + 50);
        fill(RED);
        rect((width/3) * 1.75, (height/3)*2, (player1.w*5), (player1.w*3));
        fill(255);
        text("NO", (width/3) * 1.75 + 100, (height/3)*2 + 50);
    }});
}

function levelTest() {
    player1.homeX = 1;
    player1.homeY = 549;
    game.level = "test";
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
}
