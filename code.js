"use strict";
// This plugin will allow you to switch certain component instance properties (Theme, Color mode, Density)
// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 400, height: 540, title: "Splunk UI Theme Switcher" });
figma.ui.onmessage = (msg) => {
    if (msg.type !== 'cancel') {
        const instances = getAllComponentInstances();
        instances.forEach(instanceNode => {
            if (instanceNode.componentProperties) {
                // Check if instance has a property labeled 'Theme', if so, set it to selectedTheme value
                if (instanceNode.componentProperties.hasOwnProperty('Theme')) {
                    let selectedThemeString = msg.selectedTheme;
                    try {
                        instanceNode.setProperties({
                            'Theme': selectedThemeString,
                        });
                    }
                    catch (_a) {
                        try {
                            instanceNode.setProperties({
                                'Theme': selectedThemeString.toLocaleLowerCase(),
                            });
                        }
                        catch (_b) {
                            console.log("No dice");
                        }
                    }
                }
                else if (instanceNode.componentProperties.hasOwnProperty('theme')) {
                    let selectedThemeString = msg.selectedTheme;
                    try {
                        instanceNode.setProperties({
                            'theme': selectedThemeString,
                        });
                    }
                    catch (_c) {
                        try {
                            instanceNode.setProperties({
                                'theme': selectedThemeString.toLocaleLowerCase(),
                            });
                        }
                        catch (_d) {
                            console.log("No dice");
                        }
                    }
                }
                // Check if instance has a property labeled 'Color mode', if so, set it to selectedColorMode value
                if (instanceNode.componentProperties.hasOwnProperty('Color Mode')) {
                    let selectedColorMode = msg.selectedColorMode;
                    try {
                        instanceNode.setProperties({
                            'Color Mode': selectedColorMode,
                        });
                    }
                    catch (_e) {
                        try {
                            instanceNode.setProperties({
                                'Color Mode': selectedColorMode.toLocaleLowerCase(),
                            });
                        }
                        catch (_f) {
                            console.log("No dice");
                        }
                    }
                }
                else if (instanceNode.componentProperties.hasOwnProperty('Color mode')) {
                    let selectedColorMode = msg.selectedColorMode;
                    try {
                        instanceNode.setProperties({
                            'Color mode': selectedColorMode,
                        });
                    }
                    catch (_g) {
                        try {
                            instanceNode.setProperties({
                                'Color mode': selectedColorMode.toLocaleLowerCase(),
                            });
                        }
                        catch (_h) {
                            console.log("No dice");
                        }
                    }
                }
                else if (instanceNode.componentProperties.hasOwnProperty('color mode')) {
                    let selectedColorMode = msg.selectedColorMode;
                    try {
                        instanceNode.setProperties({
                            'color mode': selectedColorMode,
                        });
                    }
                    catch (_j) {
                        try {
                            instanceNode.setProperties({
                                'color mode': selectedColorMode.toLocaleLowerCase(),
                            });
                        }
                        catch (_k) {
                            console.log("No dice");
                        }
                    }
                }
                // Check if instance has a property labeled 'Density', if so, set it to selectedDensity value
                if (instanceNode.componentProperties.hasOwnProperty('Density')) {
                    let selectedDensity = msg.selectedDensity;
                    try {
                        instanceNode.setProperties({
                            'Density': selectedDensity,
                        });
                    }
                    catch (_l) {
                        try {
                            instanceNode.setProperties({
                                'Density': selectedDensity.toLocaleLowerCase(),
                            });
                        }
                        catch (_m) {
                            console.log("No dice");
                        }
                    }
                }
                else if (instanceNode.componentProperties.hasOwnProperty('density')) {
                    let selectedDensity = msg.selectedDensity;
                    try {
                        instanceNode.setProperties({
                            'density': selectedDensity,
                        });
                    }
                    catch (_o) {
                        try {
                            instanceNode.setProperties({
                                'density': selectedDensity.toLocaleLowerCase(),
                            });
                        }
                        catch (_p) {
                            console.log("No dice");
                        }
                    }
                }
            }
        });
    }
    else {
        figma.closePlugin();
    }
};
// Function to get all component instances on the current page
function getAllComponentInstances() {
    return figma.currentPage.findAll(node => node.type === 'INSTANCE').filter((instance) => !isNestedComponent(instance));
    ;
}
// Helper function to check if an instance is nested within another component
function isNestedComponent(instance) {
    let parent = instance.parent;
    while (parent) {
        if (parent.type === "INSTANCE") {
            return true;
        }
        parent = parent.parent;
    }
    return false;
}
