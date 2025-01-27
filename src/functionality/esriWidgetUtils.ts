// Copyright 2022 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import Home from "esri/widgets/Home";
import Zoom from "esri/widgets/Zoom";
import Bookmarks from "esri/widgets/Bookmarks";
import Expand from "esri/widgets/Expand";
import Scalebar from "esri/widgets/ScaleBar";
import LayerList from "esri/widgets/LayerList";
import Legend from "esri/widgets/Legend";
import BasemapToggle from "esri/widgets/BasemapToggle";
import Locate from "esri/widgets/Locate";
import FullScreen from "esri/widgets/Fullscreen";
import { when } from "esri/core/reactiveUtils";
import Compass from "esri/widgets/Compass";
import Viewpoint from "esri/Viewpoint";

import { getBasemaps, resetBasemapsInToggle } from "./basemapToggle";
import { createSearch, handleSearchExtent } from "./search";
import { checkForElement } from "./generalUtils";

/**
 * Watch for changes in home, homePosition, mapArea, mapAreaConfig
 */
export async function addHome(
  config: any,
  view: __esri.MapView | __esri.SceneView
) {
  const { home, homePosition, mapArea, mapAreaConfig } = config;
  const uniqueId = "esri-home";
  let node = view.ui.find(uniqueId) as Home;
  if (!home) {
    if (node) {
      view.ui.remove(node);
    }
    return;
  }

  if (node) {
    view.ui.move(node, homePosition);
  } else {
    node = new Home({ view, id: uniqueId });
    view.ui.add(node, homePosition);
  }

  if (mapArea && mapAreaConfig != null) {
    node.viewpoint = Viewpoint.fromJSON(mapAreaConfig);
  } else {
    const map = view.map as __esri.WebMap | __esri.WebScene;
    node.viewpoint = map.initialViewProperties.viewpoint;
  }
}

/**
 * Watch for changes in mapZoom, mapZoomPosition
 */
export async function addZoom(
  config: any,
  view: __esri.MapView | __esri.SceneView
) {
  const { mapZoom, mapZoomPosition } = config;
  const uniqueId = "esri-zoom";
  const node = view.ui.find(uniqueId);

  if (!mapZoom) {
    if (node) {
      view.ui.remove(node);
    }
    return;
  }

  if (node && mapZoomPosition != null) {
    view.ui.move(node, mapZoomPosition);
  } else {
    view.ui.add(new Zoom({ view, id: uniqueId }), mapZoomPosition);
  }
}

/**
 * Watch for changes in bookmarks, bookmarksPosition
 * @param commonMessages add a script to copy the common file from the arcgis-portal-app-templates/instant root folder to your app e.g. `"copyCommon": "ncp ../t9n/ public/assets/t9n/Common"`
 * @param timeCapability optional param. If true add time capability in the Bookmarks widget.
 */
export async function addBookmarks(
  config: any,
  view: __esri.MapView | __esri.SceneView,
  commonMessages: any,
  timeCapability = false
) {
  const { bookmarks, bookmarksPosition } = config;
  const uniqueId = "esri-bookmarksExpand";
  const node = view.ui.find(uniqueId) as __esri.Expand;

  if (!bookmarks || view.type === "3d") {
    if (node) {
      view.ui.remove(node);
      node?.destroy();
    }
    return;
  }

  const group = _getPosition(bookmarksPosition);
  const tip = commonMessages?.tools?.bookmarks;
  const closeTip = commonMessages?.tools?.close?.bookmarks;

  if (node) {
    node.expandTooltip = tip;
    node.collapseTooltip = closeTip;
    node.expanded = false;
    node.group = group;
    view.ui.move(node, bookmarksPosition);
  } else {
    const bookmarks = new Bookmarks({
      view,
      viewModel: {
        view,
        capabilities: { time: timeCapability },
      },
    });

    const bookmarksExpand = new Expand({
      view,
      content: bookmarks,
      id: uniqueId,
      group,
      expandTooltip: tip,
      collapseTooltip: closeTip,
    });

    view.ui.add(bookmarksExpand, bookmarksPosition);
  }
}

/**
 * Watch for changes in scalebar, scalebarPosition, scalebarDualMode (if applicable)
 */
export async function addScaleBar(
  config: any,
  view: __esri.MapView | __esri.SceneView
) {
  const { scalebar, scalebarPosition, scalebarDualMode } = config;
  const uniqueId = "esri-scale-bar";
  const node = view.ui.find(uniqueId) as __esri.ScaleBar;
  const map = view.map as __esri.WebMap | __esri.WebScene;
  const portal = map.portalItem?.portal;

  if (!scalebar || view.type === "3d") {
    if (node) view.ui.remove(node);
    return;
  }

  if (node) {
    node.unit = scalebarDualMode
      ? "dual"
      : portal?.units === "metric"
      ? portal?.units
      : "imperial";
    view.ui.move(node, scalebarPosition);
  } else {
    view.ui.add(
      new Scalebar({
        id: uniqueId,
        view,
        unit: scalebarDualMode
          ? "dual"
          : portal?.units === "metric"
          ? portal?.units
          : "imperial",
      }),
      scalebarPosition
    );
  }
}

/**
 * Watch for changes in layerList, layerListPosition, layerListOpenAtStart
 */
export async function addLayerList(
  config: any,
  view: __esri.MapView | __esri.SceneView,
  commonMessages: any
) {
  const { layerList, layerListPosition, layerListOpenAtStart } = config;
  const uniqueId = "esri-layerListExpand";
  const node = view.ui.find(uniqueId) as __esri.Expand;

  if (!layerList) {
    view.ui.remove(node);
    return;
  }

  const group = _getPosition(layerListPosition);
  const tip = commonMessages?.tools?.layerList;
  const closeTip = commonMessages?.tools?.close?.layerList;

  if (node) {
    node.expandTooltip = tip;
    node.collapseTooltip = closeTip;
    node.expanded = layerListOpenAtStart;
    view.ui.move(node, layerListPosition);
  } else {
    const content = new LayerList({
      dragEnabled: true,
      visibleElements: {
        errors: true,
        filter: true,
      },
      view,
    } as any);

    content?.when(() => {
      (content as any).dragEnabled =
        content?.operationalItems?.length <= 1 ? false : true;
    });

    const layerListExpand = new Expand({
      id: uniqueId,
      content,
      expanded: layerListOpenAtStart,
      expandTooltip: tip,
      collapseTooltip: closeTip,
      group,
      mode: "floating",
      view,
    });
    view.ui.add(layerListExpand, layerListPosition);
  }
}

/**
 * Watch for changes in basemapTogglePosition, basemapToggle, basemapSelector
 */
export async function addBasemap(config: any, view: __esri.MapView) {
  const { basemapTogglePosition, basemapToggle, basemapSelector } = config;
  const uniqueId = "esri-basemapWidget";
  const map = view.map as __esri.WebMap | __esri.WebScene;
  const portal = map.portalItem?.portal;
  const { originalBasemap, nextBasemap } = await getBasemaps({
    config,
    view,
    portal,
  });
  const node = view.ui.find(uniqueId) as __esri.BasemapToggle;

  if (!basemapToggle) {
    if (node) {
      view.ui.remove(node);
      node.destroy();
    }
    return;
  }

  if (node) {
    view.ui.move(node, basemapTogglePosition);
    if (basemapSelector != null) {
      resetBasemapsInToggle(node, originalBasemap, nextBasemap);
    }
  } else {
    const bmToggle = new BasemapToggle({
      view,
      nextBasemap,
      id: uniqueId,
    });
    resetBasemapsInToggle(bmToggle, originalBasemap, nextBasemap);
    view.ui.add(bmToggle, basemapTogglePosition);
  }
}

/**
 * Watch for changes in legend, legendPosition, legendOpenAtStart, legendConfig (if applicable)
 * @param commonMessages add a script to copy the common file from the arcgis-portal-app-templates/instant root folder to your app e.g. `"copyCommon": "ncp ../t9n/ public/assets/t9n/Common"`
 */
export async function addLegend(
  config: any,
  view: __esri.MapView | __esri.SceneView,
  commonMessages: any
) {
  const { legend, legendPosition, legendOpenAtStart, legendConfig } = config;
  const uniqueId = "esri-legendExpand";
  const node = view.ui.find(uniqueId) as __esri.Expand;

  if (!legend) {
    if (node) view.ui.remove(node);
    return;
  }

  const group = _getPosition(legendPosition);
  const tip = commonMessages?.tools?.legend;
  const closeTip = commonMessages?.tools?.close?.legend;

  if (node) {
    node.expandTooltip = tip;
    node.collapseTooltip = closeTip;
    legendOpenAtStart ? node.expand() : node.collapse();
    if (legendConfig != null) {
      const l = node.content as __esri.Legend;
      if (legendConfig?.style) {
        l.style = legendConfig?.style;
      }
    }
    view.ui.move(node, legendPosition);
    node.group = group;
  } else {
    const content = new Legend({
      style: legendConfig?.style,
      view,
    });

    const legendExpand = new Expand({
      id: uniqueId,
      content,
      group,
      expanded: legendOpenAtStart,
      expandTooltip: tip,
      collapseTooltip: closeTip,
      mode: "floating",
      view,
    });
    view.ui.add(legendExpand, legendPosition);
  }
}

/**
 * Watch for changes in fullScreen, fullScreenPosition
 */
export async function addFullscreen(
  config: any,
  view: __esri.MapView | __esri.SceneView
) {
  const { fullScreen, fullScreenPosition } = config;
  const uniqueId = "esri-fullscreen";
  const node = view.ui.find(uniqueId);

  if (!fullScreen) {
    if (node) view.ui.remove(node);
    return;
  }

  if (node) {
    view.ui.move(node, fullScreenPosition);
  } else {
    view.ui.add(
      new FullScreen({
        id: uniqueId,
        view,
      }),
      fullScreenPosition
    );
  }
}

/**
 * Watch for changes in compassWidget, compassWidgetPosition
 */
export async function addCompass(
  config: any,
  view: __esri.MapView | __esri.SceneView
) {
  const { compassWidget, compassWidgetPosition } = config;
  const uniqueId = "esri-compass";
  const node = view.ui.find(uniqueId);

  if (!compassWidget) {
    if (node) view.ui.remove(node);
    return;
  }

  if (node) {
    view.ui.move(node, compassWidgetPosition as any);
  } else {
    view.ui.add(new Compass({ view, id: uniqueId }), compassWidgetPosition);
  }
}

/**
 * Watch for changes in locateWidget, locateWidgetPosition
 */
export async function addLocateWidget(
  config: any,
  view: __esri.MapView | __esri.SceneView
) {
  const { locateWidget, locateWidgetPosition } = config;
  const uniqueId = "esri-locate";
  const node = view.ui.find(uniqueId);

  if (!locateWidget) {
    if (node) {
      view.ui.remove(node);
    }
    return;
  }

  if (node && locateWidgetPosition != null) {
    view.ui.move(node, locateWidgetPosition);
  } else {
    view.ui.add(new Locate({ view, id: uniqueId }), locateWidgetPosition);
  }
}

/**
 * Watch for changes in search, searchOpenAtStart, searchPosition, searchConfiguration, extentSelector, extentSelectorConfig, mapArea
 * @param commonMessages add a script to copy the common file from the arcgis-portal-app-templates/instant root folder to your app e.g. `"copyCommon": "ncp ../t9n/ public/assets/t9n/Common"`
 */
export async function addSearch(
  config: any,
  view: __esri.MapView | __esri.SceneView,
  commonMessages: any
) {
  const { search, searchPosition, searchOpenAtStart, searchConfiguration } =
    config;
  const popupHover = config?.popupHover;
  const uniqueId = "esri-searchExpand";
  let node = view.ui.find(uniqueId) as __esri.Expand;

  if (!search) {
    if (node) view.ui.remove(node);
    return;
  }

  const group = _getPosition(searchPosition);
  const tip = commonMessages?.tools?.search;
  const closeTip = commonMessages?.tools?.close?.search;

  if (node) {
    node.expandTooltip = tip;
    node.collapseTooltip = closeTip;
    node.expanded = searchOpenAtStart;
    node.group = group;
    view.ui.move(node, searchPosition);
  } else {
    const map = view.map as __esri.WebMap | __esri.WebScene;
    const portal = map.portalItem?.portal;
    const tmpSearchConfig = JSON.parse(JSON.stringify(searchConfiguration));
    const searchWidget = createSearch(view, portal, tmpSearchConfig);
    searchWidget.on("search-complete", () => {
      if (searchWidget.popupEnabled) {
        // Handle setting focus on popup and then back
        // to search box
        if (popupHover) view.popupEnabled = true;
        when(
          () => view?.popup?.viewModel?.active === true,
          () => {
            view.popup.focus();
            when(
              () => view?.popup?.visible === false,
              () => {
                searchWidget.focus();
                if (popupHover) view.popupEnabled = false;
              },
              { initial: true, once: true }
            );
          },
          { initial: true, once: true }
        );
      }
    });
    node = new Expand({
      view,
      content: searchWidget,
      id: uniqueId,
      group,
      mode: "floating",
      collapseTooltip: closeTip,
      expandTooltip: tip,
      expanded: searchOpenAtStart,
    });
    view.ui.add(node, searchPosition);
  }
  handleSearchExtent(config, node.content as __esri.widgetsSearch);
}

/**
 * Watch for changes in share, sharePosition, shareIncludeEmbed (if applicable), shareIncludeSocial (if applicable)
 * @param commonMessages add a script to copy the common file from the arcgis-portal-app-templates/instant root folder to your app e.g. `"copyCommon": "ncp ../t9n/ public/assets/t9n/Common"`
 */
export async function addShare(
  config: any,
  view: __esri.MapView | __esri.SceneView,
  commonMessages: any
): Promise<any | undefined> {
  const { share, sharePosition, shareIncludeEmbed, shareIncludeSocial } =
    config;
  const uniqueId = "esri-instant-apps-share";
  const node = view.ui.find(uniqueId) as __esri.Expand;

  if (!share) {
    if (node) view.ui.remove(node);
    return;
  }

  const group = _getPosition(sharePosition);
  let socialShare: any;
  const tip = commonMessages?.tools?.share;
  const closeTip = commonMessages?.tools?.close?.share;

  if (node) {
    node.expandTooltip = tip;
    node.collapseTooltip = closeTip;
    node.group = group;
    view.ui.move(node, sharePosition);
    const container = node.container as HTMLElement;
    socialShare = await checkForElement(container, "instant-apps-social-share");
    if (socialShare != null) {
      socialShare.view = view;
      socialShare.socialMedia = shareIncludeSocial;
      socialShare.embed = shareIncludeEmbed;
    }
  } else {
    const displayTipText = view?.type === "2d";
    socialShare = document.createElement("instant-apps-social-share");
    socialShare.mode = "inline";
    socialShare.scale = "s";
    socialShare.displayTipText = displayTipText;
    socialShare.view = view;
    socialShare.socialMedia = shareIncludeSocial;
    socialShare.embed = shareIncludeEmbed;
    const container = document.createElement("div");
    container.style.maxHeight = "50vh";
    container.style.overflowY = "auto";
    container.prepend(socialShare);
    const shareExpand = new Expand({
      id: uniqueId,
      content: container,
      expandIconClass: "esri-icon-share2",
      group,
      mode: "floating",
      expandTooltip: tip,
      collapseTooltip: closeTip,
      view,
    });
    view.ui.add(shareExpand, sharePosition);
  }

  return socialShare;
}

/**
 * Watch for changes in keyboardShortcuts, keyboardShortcutsPosition
 * @param commonMessages add a script to copy the common file from the arcgis-portal-app-templates/instant root folder to your app e.g. `"copyCommon": "ncp ../t9n/ public/assets/t9n/Common"`
 */
export async function addKeyboardShortcuts(
  config: any,
  view: __esri.MapView | __esri.SceneView,
  commonMessages: any
): Promise<void> {
  const { keyboardShortcuts, keyboardShortcutsPosition } = config;
  const uniqueId = "esri-instant-apps-keyboard-shortcuts";
  const node = view.ui.find(uniqueId) as __esri.Expand;

  if (!keyboardShortcuts) {
    if (node) view.ui.remove(node);
    return;
  }

  const group = _getPosition(keyboardShortcutsPosition);
  const tip = commonMessages?.tools?.keyboard;
  const closeTip = commonMessages?.tools?.close?.keyboard;

  if (node) {
    node.expandTooltip = tip;
    node.collapseTooltip = closeTip;
    node.expanded = false;
    node.group = group;
    view.ui.move(node, keyboardShortcutsPosition);
    const container = node.container as HTMLElement;
    const keyboard = (await checkForElement(
      container,
      "instant-apps-keyboard-shortcuts"
    )) as any;
    if (keyboard != null) {
      keyboard.view = view;
    }
  } else {
    const keyboardWidget = document.createElement(
      "instant-apps-keyboard-shortcuts"
    ) as any;
    keyboardWidget.view = view;
    const container = document.createElement("div");
    container.prepend(keyboardWidget);
    container.style.maxHeight = "50vh";
    container.style.overflowY = "auto";
    const keyboardExpand = new Expand({
      id: uniqueId,
      content: container,
      group,
      mode: "floating",
      expandTooltip: tip,
      collapseTooltip: closeTip,
      expandIcon: "keyboard",
      view,
    });
    view.ui.add(keyboardExpand, keyboardShortcutsPosition);
  }
}

/**
 * Watch for changes in measure, measurePosition
 * @param commonMessages add a script to copy the common file from the arcgis-portal-app-templates/instant root folder to your app e.g. `"copyCommon": "ncp ../t9n/ public/assets/t9n/Common"`
 */
export async function addMeasurementTools(
  config: any,
  view: __esri.MapView | __esri.SceneView,
  commonMessages: any
): Promise<void> {
  const { measure, measurePosition } = config;
  const uniqueId = "esri-instant-apps-measurement";
  const node = view.ui.find(uniqueId) as __esri.Expand;

  if (!measure) {
    if (node) view.ui.remove(node);
    return;
  }

  const group = _getPosition(measurePosition);
  let measureTools;
  const tip = commonMessages?.tools?.measureTools;
  const closeTip = commonMessages?.tools?.close?.measureTools;

  if (node) {
    node.expandTooltip = tip;
    node.collapseTooltip = closeTip;
    node.expanded = false;
    node.group = group;
    view.ui.move(node, measurePosition);
    const container = node.container as HTMLElement;
    measureTools = (await checkForElement(
      container,
      "instant-apps-measurement"
    )) as any;
    if (measureTools != null) {
      measureTools.view = view;
    }
  } else {
    measureTools = document.createElement("instant-apps-measurement");
    measureTools.areaUnit = "square-miles";
    measureTools.linearUnit = "miles";
    measureTools.activeToolType = "distance";
    measureTools.view = view;
    const container = document.createElement("div");
    container.prepend(measureTools);
    const measureExpand = new Expand({
      id: uniqueId,
      content: document.createElement("instant-apps-measurement"),
      group,
      mode: "floating",
      expandTooltip: tip,
      collapseTooltip: closeTip,
      expandIcon: "measure",
      view,
    });
    view.ui.add(measureExpand, measurePosition);
  }
}

function _getPosition(position: { position: string } | string): string {
  let groupName = "";
  if (typeof position === "string") {
    groupName = position;
  } else if (position?.position) {
    groupName = position.position;
  }
  return groupName;
}
