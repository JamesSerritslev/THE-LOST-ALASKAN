"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import styles from "./AppLinks.module.css";

type Store = "ios" | "android" | "unknown";

function detectStore(): Store {
  const ua = navigator.userAgent;
  const iPadOs =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/iPad|iPhone|iPod/.test(ua) || iPadOs) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "unknown";
}

export function AppLinks() {
  const [store, setStore] = useState<Store>("unknown");

  useEffect(() => {
    setStore(detectStore());
  }, []);

  const showApple = store !== "android";
  const showGoogle = store !== "ios";

  return (
    <div className={styles.block}>
      <p className={styles.heading}>Download our app!</p>
      <div className={styles.actions}>
        {showApple ? (
          <a
            className="btn btn-primary"
            href={siteConfig.appStoreUrl}
            rel="noopener noreferrer"
          >
            {store === "ios" ? "Download the app" : "Download on the App Store"}
          </a>
        ) : null}
        {showGoogle ? (
          <a
            className={store === "android" ? "btn btn-primary" : "btn btn-secondary"}
            href={siteConfig.playStoreUrl}
            rel="noopener noreferrer"
          >
            {store === "android" ? "Download the app" : "Get it on Google Play"}
          </a>
        ) : null}
      </div>
    </div>
  );
}
