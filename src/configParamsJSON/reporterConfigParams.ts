export default {
  "config": [
    {
      "type": "section",
      "id": "map",
      "config": {
        "itemTypes": ["2d"]
      },
      "content": [
        {
          "type": "setting",
          "id": "mapArea",
          "express": false,
          "defaultValue": false,
          "content": [
            {
              "type": "setting",
              "id": "mapAreaConfig",
              "express": false,
              "defaultValue": null
            }
          ]
        }
      ]
    },
    {
      "type": "section",
      "id": "reporterAbout",
      "content": [
        {
          "type": "subsection",
          "id": "appComprehension",
          "content": [
            {
              "type": "group",
              "id": "appComprehension",
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
                      "express": true,
                      "defaultValue": ""
                    },
                    {
                      "type": "setting",
                      "id": "titleLink",
                      "express": false,
                      "defaultValue": ""
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "legend",
                  "defaultValue": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "legendPosition",
                      "defaultValue": {
                        "position": "bottom-left",
                        "index": 2
                      }
                    },
                    {
                      "type": "setting",
                      "id": "legendOpenAtStart",
                      "defaultValue": false
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "splash",
                  "defaultValue": false,
                  "express": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "splashOnStart",
                      "defaultValue": true,
                      "express": false
                    },
                    {
                      "type": "setting",
                      "id": "splashTitle",
                      "defaultValue": "",
                      "express": true
                    },
                    {
                      "type": "setting",
                      "id": "splashContent",
                      "defaultValue": "",
                      "express": true,
                      "config": {
                        "imageUpload": true
                      }
                    },
                    {
                      "type": "setting",
                      "id": "splashButtonText",
                      "defaultValue": "Explore",
                      "express": false
                    }
                  ]
                },
                {
                  "type": "group",
                  "id": "mapA11y",
                  "content": [
                    {
                      "type": "setting",
                      "id": "mapA11yDesc",
                      "defaultValue": "",
                      "express": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "coverPageSettings",
          "content": [
            {
              "type": "group",
              "id": "coverPage",
              "content": [
                {
                  "type": "setting",
                  "id": "landingPage",
                  "express": false,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "landingPageConfig",
                      "express": false,
                      "defaultValue": {
                        "titleText": "Title",
                        "subtitleText": "Subtitle",
                        "descriptionText": "Description content",
                        "entryButtonText": "Enter",
                        "alignment": "center",
                        "backgroundType": "color",
                        "textColor": "#FFFFFF",
                        "entryButtonColor": "#0079C1",
                        "backgroundColor": "#0079C1",
                        "iconImage": null,
                        "iconImageScale": "m",
                        "backgroundImageSrc": null
                      },
                      "config": {
                        "showSignInConfig": true
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "section",
      "id": "reporter",
      "content": [
        {
          "type": "subsection",
          "id": "reporter",
          "content": [
            {
              "type": "setting",
              "id": "reportLayers",
              "express": true,
              "config": {
                "layerSelectionMode": "multiple",
                "supportedLayerTypes": ["feature"],
                "supportedGeometryTypes": "*",
                "supportsFieldSelection": false,
                "supportedCapabilityTypes": ["editable"],
                "hideNestedSections": true,
                "reporterApp": true
              },
              "defaultValue": null
            },
            {
              "type": "setting",
              "id": "showFeatureSymbol",
              "defaultValue": false,
              "express": true
            },
            {
              "type": "setting",
              "id": "showUserImageInCommentsList",
              "defaultValue": false,
              "express": true
            },
            {
              "type": "setting",
              "id": "filterByExtent",
              "defaultValue": false,
              "express": true
            },
            {
              "type": "setting",
              "id": "sortOption",
              "defaultValue": "newest",
              "express": true
            }
          ]
        },
        {
          "type": "subsection",
          "id": "panelText",
          "content": [
            {
              "type": "setting",
              "id": "reportsHeader",
              "defaultValue": "Reports",
              "express": false
            },
            {
              "type": "setting",
              "id": "reportSubmittedMessage",
              "defaultValue": "Thank you! Your report was successfully submitted.",
              "express": true
            },
            {
              "type": "setting",
              "id": "reportButtonText",
              "defaultValue": "Report an incident",
              "express": true
            },
            {
              "type": "setting",
              "id": "commentSubmittedMessage",
              "defaultValue": "Comment submitted",
              "express": true
            },
            {
              "type": "setting",
              "id": "commentButtonText",
              "defaultValue": "Comment",
              "express": true
            }
          ]
        },
        {
          "type": "subsection",
          "id": "filter",
          "content": [
            {
              "type": "setting",
              "id": "enableFilter",
              "express": false,
              "defaultValue": false,
              "content": [
                {
                  "type": "setting",
                  "id": "filterConfig",
                  "express": false,
                  "defaultValue": null,
                  "config": {
                    "editableLayersOnly": true,
                    "includeTables": false
                  }
                }
              ]
            }
          ]
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
              "content": [
                {
                  "type": "setting",
                  "id": "mapZoom",
                  "express": false,
                  "defaultValue": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "mapZoomPosition",
                      "defaultValue": {
                        "position": "top-left",
                        "index": 1
                      }
                    }
                  ]
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
                  "id": "bookmarks",
                  "defaultValue": false,
                  "express": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "bookmarksPosition",
                      "defaultValue": {
                        "position": "bottom-right",
                        "index": 1
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "locateWidget",
                  "express": false,
                  "defaultValue": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "locateWidgetPosition",
                      "defaultValue": {
                        "position": "top-left",
                        "index": 3
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "compassWidget",
                  "express": false,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "compassWidgetPosition",
                      "defaultValue": {
                        "position": "top-left",
                        "index": 2
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "scalebar",
                  "express": false,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "scalebarPosition",
                      "defaultValue": {
                        "position": "bottom-left",
                        "index": 0
                      }
                    },
                    {
                      "type": "setting",
                      "id": "scalebarDualMode",
                      "defaultValue": false,
                      "express": false
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "floorFilter",
                  "defaultValue": false,
                  "express": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "floorFilterPosition",
                      "defaultValue": {
                        "position": "top-right",
                        "index": 2
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "keyboardShortcuts",
                  "express": false,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "keyboardShortcutsPosition",
                      "defaultValue": {
                        "position": "bottom-right",
                        "index": 0
                      }
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "disableScroll",
                  "express": false,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "zoomToScale",
                  "express": false,
                  "defaultValue": 10000
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
              "express": false,
              "defaultValue": false,
              "content": [
                {
                  "type": "setting",
                  "id": "basemapTogglePosition",
                  "defaultValue": {
                    "position": "bottom-left",
                    "index": 1
                  }
                },
                {
                  "type": "setting",
                  "id": "basemapSelector",
                  "defaultValue": "streets-vector"
                }
              ]
            },
            {
              "type": "setting",
              "id": "layerList",
              "defaultValue": false,
              "content": [
                {
                  "type": "setting",
                  "id": "layerListPosition",
                  "defaultValue": {
                    "position": "top-right",
                    "index": 3
                  }
                },
                {
                  "type": "setting",
                  "id": "layerListLegend",
                  "express": false,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "layerListOpenAtStart",
                  "express": false,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "visibilityIcon",
                  "express": false,
                  "defaultValue": "default"
                }
              ]
            },
            {
              "type": "setting",
              "id": "enableHighlightColor",
              "express": false,
              "content": [
                {
                  "type": "setting",
                  "id": "highlightColor",
                  "express": false,
                  "config": {
                    "alpha": true
                  },
                  "defaultValue": "rgba(0, 255, 255, 0.50)"
                }
              ]
            },
            {
              "type": "setting",
              "id": "enableHighlightHaloColor",
              "express": false,
              "content": [
                {
                  "type": "setting",
                  "id": "highlightHaloColor",
                  "express": false,
                  "defaultValue": "#00FFFF"
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
                  "id": "searchOpenAtStart",
                  "express": true,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "searchConfiguration",
                  "express": true,
                  "defaultValue": null
                },
                {
                  "type": "setting",
                  "id": "searchPosition",
                  "defaultValue": {
                    "position": "top-right",
                    "index": 4
                  }
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
                  "id": "customTheme",
                  "express": true,
                  "defaultValue": null,
                  "config": {
                    "numOfSections": 1,
                    "headerOnly": true,
                    "fontAlwaysEditable": true
                  }
                }
              ]
            },
            {
              "type": "group",
              "id": "additionalOptions",
              "content": [
                {
                  "type": "setting",
                  "id": "customCSS",
                  "defaultValue": ""
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "logo",
          "content": [
            {
              "type": "group",
              "id": "logo",
              "content": [
                {
                  "type": "setting",
                  "id": "logo",
                  "express": false,
                  "defaultValue": null
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
    },
    {
      "type": "section",
      "id": "languageSwitcher",
      "express": true,
      "content": [
        {
          "type": "setting",
          "id": "languageSwitcher",
          "defaultValue": false,
          "express": true,
          "content": [
            {
              "type": "setting",
              "id": "languageSwitcherOpenAtStart",
              "express": false,
              "defaultValue": false
            },
            {
              "type": "setting",
              "id": "languageSwitcherConfig",
              "express": true,
              "defaultValue": null
            },
            {
              "type": "setting",
              "id": "languageSwitcherPosition",
              "defaultValue": {
                "position": "top-right",
                "index": 1
              }
            }
          ]
        }
      ]
    }
  ]
};