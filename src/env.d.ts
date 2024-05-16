/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
