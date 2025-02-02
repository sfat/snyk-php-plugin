import { ComposerParserResponse } from '@snyk/composer-lockfile-parser';

export interface PhpPluginResult {
  plugin: PhpPlugin;
  package: ComposerParserResponse;
}

export interface PhpPlugin {
  name: string;
  targetFile: string;
}

export interface SystemPackagesOptions {
  composerIsFine?: boolean;
  composerPharIsFine?: boolean;
  systemVersions?: object;
}
