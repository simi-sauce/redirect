import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

function Download() {
  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.blacksilicon.foodapp";
    } else if (isIOS) {
      window.location.href = "https://apps.apple.com/ng/app/9food/id1621870110";
    } else {
      window.location.href = "https://9food.ng/";
    }
  }, []);

  return <div className="App"></div>;
}

export default Download;
