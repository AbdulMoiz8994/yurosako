import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const CustomDesignMob = () => {
  const { unityProvider } = new useUnityContext({
    loaderUrl: "/Builds/Customization-Mobile.loader.js",
    dataUrl: "/Builds/Customization-Mobile.data",
    frameworkUrl: "/Builds/Customization-Mobile.framework.js",
    codeUrl: "/Builds/Customization-Mobile.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Yurosako",
    productName: "Yurosako",
    productVersion: "1.0",
  });

  return (
    <div className="">
 
      <Unity
        unityProvider={unityProvider}
        style={{ width: "320px", height: "700px", background: "#231F20", margin: "0px auto" }}
      />
    </div>
  );
};
