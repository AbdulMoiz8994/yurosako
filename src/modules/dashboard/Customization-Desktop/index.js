import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const CustomDesign = () => {
  const { unityProvider } = new useUnityContext({
    loaderUrl: "/Build/Customization-Desktop.loader.js",
    dataUrl: "/Build/Customization-Desktop.data",
    frameworkUrl: "/Build/Customization-Desktop.framework.js",
    codeUrl: "/Build/Customization-Desktop.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Yurosako",
    productName: "Yurosako",
    productVersion: "1.0",
  });

  return (
    <div>
 
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: 600, background: "#231F20" }}
      />
    </div>
  );
};
