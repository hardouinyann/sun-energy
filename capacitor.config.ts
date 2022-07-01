import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.sun.energy',
  appName: 'SunEnergy',
  webDir: 'dist',
  bundledWebRuntime: false,
  ios: {
      scheme: 'SunEnergy'
  }
};

export default config;
