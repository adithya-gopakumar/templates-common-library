export default {
  "config": [
    {
      "type": "section",
      "id": "atlas",
      "content": [
        {
          "type": "setting",
          "id": "atlasContentPanel",
          "defaultValue": "",
          "express": true
        },
        {
          "type": "setting",
          "id": "mapArea",
          "express": false,
          "content": [
            {
              "type": "setting",
              "id": "mapAreaConfig",
              "express": false,
              "defaultValue": null
            }
          ],
          "defaultValue": false
        }
      ]
    },
    {
      "type": "section",
      "id": "atlasAbout",
      "content": [
        {
          "type": "subsection",
          "id": "saveOptions",
          "content": [
            {
              "type": "setting",
              "id": "showSignInBtn",
              "express": true,
              "defaultValue": false,
              "content": [
                {
                  "type": "setting",
                  "id": "signInOnboarding",
                  "express": false,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "signInOnboardingTitle",
                      "express": false,
                      "defaultValue": "Title"
                    },
                    {
                      "type": "setting",
                      "id": "signInOnboardingContent",
                      "express": false,
                      "defaultValue": "Content",
                      "config": {
                        "imageUpload": true
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
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
                  "defaultValue": "Atlas",
                  "express": true
                },
                {
                  "type": "setting",
                  "id": "signInOnHeader",
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "customHeader",
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "customHeaderHTML",
                      "defaultValue": "",
                      "config": {
                        "imageUpload": true
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "setting",
              "id": "disclaimerText",
              "defaultValue": null,
              "express": false
            },
            {
              "type": "setting",
              "id": "splash",
              "express": true,
              "defaultValue": false,
              "content": [
                {
                  "type": "setting",
                  "id": "splashButtonPosition",
                  "defaultValue": {
                    "position": "top-right",
                    "index": 0
                  }
                },
                {
                  "type": "setting",
                  "id": "splashOnStart",
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "splashTitle",
                  "express": true,
                  "defaultValue": ""
                },
                {
                  "type": "setting",
                  "id": "splashContent",
                  "express": true,
                  "defaultValue": "",
                  "config": {
                    "imageUpload": true
                  }
                },
                {
                  "type": "setting",
                  "id": "splashButtonText",
                  "defaultValue": ""
                }
              ]
            },
            {
              "type": "group",
              "id": "mapA11y",
              "content": [
                {
                  "type": "setting",
                  "id": "keyboardShortcuts",
                  "express": true,
                  "defaultValue": false,
                  "content": [
                    {
                      "type": "setting",
                      "id": "keyboardShortcutsPosition",
                      "defaultValue": {
                        "position": "top-left",
                        "index": 0
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "landingPage",
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
      "id": "atlasInteractivity",
      "content": [
        {
          "type": "subsection",
          "id": "exploreNavigate",
          "content": [
            {
              "type": "setting",
              "id": "home",
              "express": true,
              "defaultValue": true
            },
            {
              "type": "setting",
              "id": "mapZoom",
              "express": true,
              "defaultValue": true
            },
            {
              "type": "setting",
              "id": "compassWidget",
              "express": true,
              "defaultValue": true
            },
            {
              "type": "setting",
              "id": "scalebar",
              "express": false,
              "defaultValue": false,
              "content": [
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
              "id": "changeDefaultBasemapCond",
              "defaultValue": false,
              "express": true,
              "content": [
                {
                  "type": "setting",
                  "id": "changeDefaultBasemap",
                  "express": true,
                  "defaultValue": "streets-vector"
                }
              ]
            },
            {
              "type": "setting",
              "id": "atlasBasemapGallery",
              "express": false,
              "defaultValue": false,
              "content": [
                {
                  "type": "setting",
                  "id": "atlasBasemapGalleryConfig",
                  "express": false,
                  "defaultValue": null
                }
              ]
            }
          ]
        },
        {
          "type": "subsection",
          "id": "configureToolbar",
          "content": [
            {
              "type": "setting",
              "id": "listConfigurerConfig",
              "express": false,
              "defaultValue": null,
              "content": [
                {
                  "type": "setting",
                  "id": "showBasemap",
                  "express": false,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "showOpenMap",
                  "express": false,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "showMapLayers",
                  "express": false,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "showAddLayer",
                  "express": false,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "showLegend",
                  "express": false,
                  "defaultValue": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "legendType",
                      "defaultValue": "standard"
                    }
                  ]
                },
                {
                  "type": "setting",
                  "id": "showMeasure",
                  "express": false,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "showSketch",
                  "express": false,
                  "defaultValue": true
                },
                {
                  "type": "setting",
                  "id": "show2D3D",
                  "express": false,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "showBookmarks",
                  "express": false,
                  "defaultValue": false
                },
                {
                  "type": "setting",
                  "id": "showSave",
                  "express": false,
                  "defaultValue": true,
                  "content": [
                    {
                      "type": "setting",
                      "id": "showSaveMap",
                      "express": false,
                      "defaultValue": true
                    },
                    {
                      "type": "setting",
                      "id": "showCreate",
                      "express": false,
                      "defaultValue": false,
                      "content": [
                        {
                          "type": "setting",
                          "id": "createOptions",
                          "express": false,
                          "defaultValue": [
                            "map-viewer",
                            "story-maps",
                            "instant-apps"
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            {
              "type": "setting",
              "id": "openOnLoad",
              "express": true,
              "defaultValue": "none"
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
              "defaultValue": true
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
              "type": "setting",
              "id": "theme",
              "express": true,
              "defaultValue": "light"
            },
            {
              "type": "group",
              "id": "headerTheme",
              "content": [
                {
                  "type": "setting",
                  "id": "customTheme",
                  "express": true,
                  "config": {
                    "numOfSections": 1,
                    "headerOnly": true,
                    "singleFont": true
                  },
                  "defaultValue": null
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
              "defaultValue": false,
              "express": false
            },
            {
              "type": "setting",
              "id": "languageSwitcherConfig",
              "defaultValue": null,
              "express": true
            },
            {
              "type": "setting",
              "id": "languageSwitcherPosition",
              "defaultValue": {
                "position": "top-right",
                "index": 5
              }
            }
          ]
        }
      ]
    }
  ]
};