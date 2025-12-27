import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.gnaak.app",
  appName: "gnaak",
  webDir: "dist",
  server: {
    url: "http://172.30.1.87:3000",
  },
  plugins: {
    SocialLogin: {
      providers: {
        google: true,
        facebook: true,
        apple: true,
        twitter: false,
      },
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
