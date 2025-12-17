export {};

declare global {
  interface HTML5JSLoader {
    loadMode(
      jsVersion: string,
      type: string,
      key: string,
      containerId: string,
      extraParams: Record<string, any>
    ): void;
  }

  interface Window {
    HTML5JS?: HTML5JSLoader;
  }
}
