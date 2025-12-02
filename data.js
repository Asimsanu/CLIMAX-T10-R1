var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "FRONT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.17587282084845413,
        "pitch": 0.05450548441611147,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.17365876723542328,
          "pitch": 0.0546250198118301,
          "rotation": 0,
          "target": "1-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-back",
      "name": "BACK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5444040017897027,
          "pitch": 0.10172408226074481,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
