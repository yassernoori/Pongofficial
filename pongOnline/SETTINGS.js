var SETTINGS = {
  VER : "2.850",
  WIDTH : 1000,
  HEIGHT : 900,
  BORDER_WIDTH : 10,
  BACKGROUND_COLOR : "#FFFFFF",
  PLAYER : {
    WIDTH : 15,
    HEIGHT : 110,
    GAP : 30
  },
  BALL : {
    WIDTH : 25,
    HEIGHT : 25,
  },
  NET : {
    WIDTH : 6
  },
  SCORE : {
    Y : 40,
    SIZE : 30,
    GAP : 50
  },
  EDGE_SHOOT_ANGLE_ADJUST : 10,
  EDGE_ANGLE : 6,
  STRAIGHT_ADJUST : 7,
  STRATGHT_ANGLE : 7,
  SERVE_ANGLE : 30,
  GOAL : 20
};
SETTINGS.CLIENT_SETTINGS = {
  VER : SETTINGS.VER,
  WIDTH : SETTINGS.WIDTH,
  HEIGHT : SETTINGS.HEIGHT,
  BORDER_WIDTH : SETTINGS.BORDER_WIDTH,
  BACKGROUND_COLOR : SETTINGS.BACKGROUND_COLOR,
  NET : SETTINGS.NET
};

module.exports = SETTINGS;
