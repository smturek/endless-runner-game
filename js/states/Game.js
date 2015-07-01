var mrHop = MrHop || {};

MrHop.GameState = {
    init: function() {
        this.game.physics.arcade.gravity.y = 1000;
    },
    create: function() {
        var platform = new MrHop.Platform(this.game, 3, 100, 100);
        this.add.existing(platform);
    },
    update: function() {

    }
};
