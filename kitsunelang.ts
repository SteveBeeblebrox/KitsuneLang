///#pragma once

/// #warning no header
namespace KitsuneLang {
    export namespace Internals {}
    // @ts-expect-error
    export const LEVEL: number = KITSUNE_LANG_LEVEL;

    export const VERSION: Readonly<{major: number, minor: number, patch: number, metadata?: string, prerelease?: string, toString(): string}> = Object.freeze({
        toString() {return `${VERSION.major}.${VERSION.minor}.${VERSION.patch}${VERSION.prerelease !== undefined ? `-${VERSION.prerelease}` : ''}${VERSION.metadata !== undefined ? `+${VERSION.metadata}` : ''}`},
        major: 0, minor: 1, patch: 0, prerelease: 'alpha'
    });
}

/// #if KITSUNE_LANG_LEVEL >= 0
/// #include "levels/0/index.ts"
/// #endif

/// #if KITSUNE_LANG_LEVEL >= 1
/// #include "levels/1/index.ts"
/// #endif

/// #if KITSUNE_LANG_LEVEL >= 2
/// #include "levels/2/index.ts"
/// #endif

/// #if KITSUNE_LANG_LEVEL >= 3
/// #include "levels/3/index.ts"
/// #endif

/// #if KITSUNE_LANG_LEVEL >= 4
/// #include "levels/4/index.ts"
/// #endif