var allDesktops = desktops();
    print (allDesktops);
    for (i=0;i<allDesktops.length;i++) {{
        d = allDesktops[i];
        d.wallpaperPlugin = "org.kde.image";
        d.currentConfigGroup = Array("Wallpaper",
                                     "org.kde.image",
                                     "General");
        d.writeConfig("Image", ".local/share/wallpapers/Catalina-wallNight/contents/images/2560 x1822.png")
    }}
var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "bottom",
                    "ToolBoxButtonX": "739",
                    "ToolBoxButtonY": "983",
                    "sortMode": "-1"
                },

            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kpple.kppleMenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "noWindowText": "Desktop"
                        }
                    },
                    "plugin": "org.kde.activeApplication"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "37"
                        },
                        "/General": {
                    "fontSize": "13",
                    "iconHeight": "10",
                    "iconWidth": "23",
                    "padding": "6",
                    "showPercentage": "false"
                       }
                    },
                    "plugin": "org.kde.plasma.inlineBattery"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
                    "bold": "true",
                    "command": "bash .local/share/plasma/look-and-feel/Catalina-Dark/contents/script/Fecha.sh",
                    "fontSize": "14",
                    "textColor": "#dcdddd"
                       }
                    },
                    "plugin": "com.github.zren.commandoutput"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Appearance": {
                            "fontSize": 10,
                            "autoFontAndSize": "false",
                            "showDate":"false",
                            "fontWeight": 75,
                            "use24hFormat": 0
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                        },
                    "plugin": "org.kde.milou"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                         },
                        "/General": {
                    "customIcon": "configure",
                    "onClickIcon": "configure",
                    "onClickScript": "systemsettings"
                       }

                    },
                    "plugin": "com.github.scriptinator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.4,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "0",
            "applets": [
 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
                    "customButtonImage": "launcher",
                    "useCustomButtonImage": "true"
                       }

                    },
                    "plugin": "P-Connor.PlasmaDrawer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1",
                            "launchers": ""
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },

                        "/General": {
                            "launchers": "applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:org.kde.discover.desktop,applications:org.kde.gwenview.desktop,applications:org.kde.konsole.desktop,applications:systemsettings.desktop",
                            "maxStripes": 1
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                     "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.latte.separator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.trash"
                }

            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                }
            },
            "height": 3.6,
            "hiding": "windowscover",
            "location": "bottom",
            "panelVisibility": 2,
            "maximumLength": 90,
            "minimumLength": 12,
            "offset": 0,
            "alignment":"center"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

