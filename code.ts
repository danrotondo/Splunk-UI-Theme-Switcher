// This plugin will allow you to switch certain component instance properties (Theme, Color mode, Density)

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {width: 400, height: 540, title: "Splunk UI Theme Switcher"});

figma.ui.onmessage =  (msg: {type: string, selectedTheme: string, selectedColorMode: string, selectedDensity: string}) => {
  
  if (msg.type !== 'cancel') {
    
    const instances = getAllComponentInstances();
    instances.forEach(instanceNode => {
      if (instanceNode.componentProperties) {
        // Check if instance has a property labeled 'Theme', if so, set it to selectedTheme value
        if(instanceNode.componentProperties.hasOwnProperty('Theme')) {
          let selectedThemeString = msg.selectedTheme as string;
          try {
            instanceNode.setProperties(
              {
                'Theme' : selectedThemeString,
              }
            );
          } catch {
            try { 
              instanceNode.setProperties(
                {
                  'Theme' : selectedThemeString.toLocaleLowerCase(),
                }
              );
            } catch {
              console.log("No dice");
            }          
          }  
        } else if(instanceNode.componentProperties.hasOwnProperty('theme')) {
          let selectedThemeString = msg.selectedTheme as string;
          try {
            instanceNode.setProperties(
              {
                'theme' : selectedThemeString,
              }
            );
          } catch {
            try { 
              instanceNode.setProperties(
                {
                  'theme' : selectedThemeString.toLocaleLowerCase(),
                }
              );
            } catch {
              console.log("No dice");
            }          
          }  
        }

        // Check if instance has a property labeled 'Color mode', if so, set it to selectedColorMode value
        if(instanceNode.componentProperties.hasOwnProperty('Color Mode')) {
          let selectedColorMode = msg.selectedColorMode as string;
          try {
            instanceNode.setProperties(
              {
                'Color Mode' : selectedColorMode,
              }
            );
          } catch {
            try { 
              instanceNode.setProperties(
                {
                  'Color Mode' : selectedColorMode.toLocaleLowerCase(),
                }
              );
            } catch {
              console.log("No dice");
            }          
          }  
        } else if(instanceNode.componentProperties.hasOwnProperty('Color mode')) {
          let selectedColorMode = msg.selectedColorMode as string;
          try {
            instanceNode.setProperties(
              {
                'Color mode' : selectedColorMode,
              }
            );
          } catch {
            try { 
              instanceNode.setProperties(
                {
                  'Color mode' : selectedColorMode.toLocaleLowerCase(),
                }
              );
            } catch {
              console.log("No dice");
            }          
          } 
        } else if(instanceNode.componentProperties.hasOwnProperty('color mode')) {
          let selectedColorMode = msg.selectedColorMode as string;
          try {
            instanceNode.setProperties(
              {
                'color mode' : selectedColorMode,
              }
            );
          } catch {
            try { 
              instanceNode.setProperties(
                {
                  'color mode' : selectedColorMode.toLocaleLowerCase(),
                }
              );
            } catch {
              console.log("No dice");
            }          
          }  
        }

        // Check if instance has a property labeled 'Density', if so, set it to selectedDensity value
        if(instanceNode.componentProperties.hasOwnProperty('Density')) {
          let selectedDensity = msg.selectedDensity as string;
          try {
            instanceNode.setProperties(
              {
                'Density' : selectedDensity,
              }
            );
          } catch {
            try { 
              instanceNode.setProperties(
                {
                  'Density' : selectedDensity.toLocaleLowerCase(),
                }
              );
            } catch {
              console.log("No dice");
            }          
          }  
        } else if(instanceNode.componentProperties.hasOwnProperty('density')) {
          let selectedDensity = msg.selectedDensity as string;
          try {
            instanceNode.setProperties(
              {
                'density' : selectedDensity,
              }
            );
          } catch {
            try { 
              instanceNode.setProperties(
                {
                  'density' : selectedDensity.toLocaleLowerCase(),
                }
              );
            } catch {
              console.log("No dice");
            }          
          }  
        }
      }  
    });
  } else {
    figma.closePlugin();
  }
};

// Function to get all component instances on the current page
function getAllComponentInstances(): InstanceNode[] {
  return figma.currentPage.findAll(node => node.type === 'INSTANCE').filter(
    (instance) => !isNestedComponent(instance as InstanceNode)
  ) as InstanceNode[];;
}

// Helper function to check if an instance is nested within another component
function isNestedComponent(instance: InstanceNode): boolean {
  let parent = instance.parent;
  while (parent) {
    if (parent.type === "INSTANCE") {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}