export default {
  "config": [
    {
      "type": "section",
      "id": "map"
    },
    {
      "type": "section",
      "id": "about",
      "content": [
        {
          "type": "setting",
          "id": "header",
          "defaultValue": true,
          "express": true,
          "content": [
            {
              "type": "setting",
              "id": "title",
              "defaultValue": "",
              "express": true
            }
          ]
        },
        {
          "type": "group",
          "id": "activePanel",
          "content": [
            {
              "type": "setting",
              "id": "activePanel",
              "defaultValue": "legendPanel",
              "express": true,
              "content": [
                {
                  "type": "setting",
                  "id": "legendPanel",
                  "defaultValue": true,
                  "express": true
                },
                {
                  "type": "setting",
                  "id": "layerListPanel",
                  "defaultValue": false,
                  "express": true
                },
                {
                  "type": "setting",
                  "id": "popupPanel",
                  "defaultValue": false,
                  "express": true
                },
                {
                  "type": "setting",
                  "id": "details",
                  "defaultValue": true,
                  "express": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "detailsContent",
                      "express": true,
                      "defaultValue": null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "setting",
          "id": "coverPage",
          "express": false,
          "content": [
            {
              "type": "setting",
              "id": "coverPageConfig",
              "express": false,
              "defaultValue": {
                "title": "Title",
                "titleColor": "#ffffff",
                "subtitle": "Subtitle",
                "subtitleColor": "#ffffff",
                "textPosition": "center-leading",
                "buttonText": "Explore",
                "buttonTextColor": "#ffffff",
                "background": {
                  "backgroundType": "color",
                  "backgroundImage": null,
                  "backgroundColor": "#0079c1"
                }
              }
            }
          ],
          "defaultValue": false
        }
      ]
    },
    {
      "type": "section",
      "id": "interactivity",
      "content": [
        {
          "type": "subsection",
          "id": "exploreNavigate",
          "content": [
            {
              "type": "group",
              "id": "explore",
              "express": false,
              "content": [
                {
                  "type": "setting",
                  "id": "popupHover",
                  "express": false,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "home",
                  "express": false,
                  "defaultValue": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "homePosition",
                      "defaultValue": {
                        "position": "top-left",
                        "index": 0
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "locateWidget",
                  "express": false,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "locateWidgetPosition",
                      "defaultValue": {
                        "position": "top-right",
                        "index": 0
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "mapZoom",
                  "express": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "mapZoomPosition",
                      "defaultValue": {
                        "position": "top-left",
                        "index": 1
                      }
                    }
                  ],
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "bookmarks",
                  "express": false,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "bookmarksPosition",
                      "defaultValue": {
                        "position": "top-right",
                        "index": 1
                      }
                    },
                    {
                      "type": "setting",
                      "id": "bookmarkThumbnail",
                      "defaultValue": true,
                      "express": false
                    }
                  ]
                }
              ]
            },
            {
              "type": "group",
              "id": "navigate",
              "content": [
                {
                  "type": "setting",
                  "id": "disableScroll",
                  "express": false,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "scalebar",
                  "express": false,
                  "defaultValue": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "scalebarPosition",
                      "express": false,
                      "defaultValue": {
                        "position": "bottom-left",
                        "index": 0
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "extentSelector",
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "extentSelectorConfig",
                      "express": false,
                      "defaultValue": null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "modify",
          "content": [
            {
              "type": "setting",
              "id": "basemapToggle",
              "defaultValue": false,
              "express": false,
              "content": [
                {
                  "type": "setting",
                  "id": "basemapSelector",
                  "defaultValue": "streets-vector"
                },
                {
                  "type": "setting",
                  "id": "basemapTogglePosition",
                  "express": false,
                  "defaultValue": {
                    "position": "bottom-right",
                    "index": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "share",
          "content": [
            {
              "type": "setting",
              "id": "screenshot",
              "express": false,
              "defaultValue": false,
              "content": [
                {
                  "type": "setting",
                  "id": "screenshotPosition",
                  "defaultValue": {
                    "position": "top-left",
                    "index": 0
                  }
                }
              ]
            },
            {
              "type": "group",
              "id": "share",
              "defaultValue": true,
              "express": false,
              "content": [
                {
                  "type": "setting",
                  "id": "share",
                  "express": false,
                  "defaultValue": true
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "search",
          "content": [
            {
              "type": "setting",
              "id": "search",
              "express": true,
              "defaultValue": true,
              "content": [
                {
                  "type": "setting",
                  "id": "searchPosition",
                  "defaultValue": {
                    "position": "top-right",
                    "index": 1
                  }
                },
                {
                  "type": "setting",
                  "id": "searchOpenAtStart",
                  "express": true,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "searchConfiguration",
                  "express": true,
                  "defaultValue": null
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "customURLParams",
          "content": [
            {
              "type": "group",
              "id": "customURLParams",
              "express": false,
              "content": [
                {
                  "type": "setting",
                  "id": "customURLParamName",
                  "express": false,
                  "defaultValue": ""
                },
                {
                  "type": "setting",
                  "id": "customUrlParam",
                  "express": false,
                  "config": {
                    "layerSelectionMode": "single",
                    "supportedLayerTypes": "*",
                    "supportedGeometryTypes": "*",
                    "supportsFieldSelection": true,
                    "fieldSelectionMode": "single",
                    "supportedFieldTypes": "*"
                  },
                  "defaultValue": null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "section",
      "id": "themeLayout",
      "content": [
        {
          "type": "subsection",
          "id": "theme",
          "content": [
            {
              "type": "group",
              "id": "theme",
              "content": [
                {
                  "type": "setting",
                  "id": "theme",
                  "express": true,
                  "defaultValue": "light"
                },
                {
                  "type": "setting",
                  "id": "applySharedTheme",
                  "express": true,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "customCSS",
                  "defaultValue": ""
                }
              ]
            },
            {
              "type": "group",
              "id": "layoutType",
              "content": [
                {
                  "type": "setting",
                  "id": "layoutType",
                  "express": false,
                  "defaultValue": "default"
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "positionManager",
          "content": [
            {
              "type": "setting",
              "id": "positionManager",
              "express": true,
              "defaultValue": null
            }
          ]
        }
      ]
    }
  ]
};